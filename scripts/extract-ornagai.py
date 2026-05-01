#!/usr/bin/env python3
"""Extract Ornagai dictionary entries from Body.data into a compact JSON lookup."""

import zlib, re, json, os, sys

DATA_PATH = os.path.join(os.path.dirname(__file__), '..', 'Contents', 'Body.data')
OUT_PATH  = os.path.join(os.path.dirname(__file__), '..', 'public', 'ornagai.json')

def parse_entry(xml_text):
    """Parse a <d:entry> XML string into compact dicts."""
    title_m = re.search(r'd:title="([^"]+)"', xml_text)
    if not title_m:
        return None, None
    word = title_m.group(1)

    # Split sections by <br/>
    sections = re.split(r'<br\s*/?>', xml_text)

    results = []
    for section in sections:
        pos_m     = re.search(r'<b>([^<]+)</b>', section)
        phonetic_m = re.search(r'<b>[^<]+</b>\s*/([^/]+)/', section)
        # Numbered definitions: lines like "1. မြန်မာ..."
        defs = re.findall(r'<p>\d+\.\s*([^<]+)</p>', section)
        # Unnumbered Myanmar definitions (fallback)
        if not defs:
            defs = re.findall(r'<p>([^\d<][^<]*[က-ဪက-႟][^<]*)</p>', section)

        if pos_m and defs:
            entry = {'p': pos_m.group(1).strip()}
            if phonetic_m:
                entry['ph'] = phonetic_m.group(1).strip()
            entry['d'] = [d.strip() for d in defs]
            results.append(entry)

    return word, results if results else None


def main():
    print(f'Reading {DATA_PATH} ...', flush=True)
    with open(DATA_PATH, 'rb') as f:
        data = f.read()

    print(f'File size: {len(data):,} bytes', flush=True)

    lookup = {}   # word_lower -> list of POS entries
    seen_ids = set()
    pos = 0
    total = 0

    while pos < len(data) - 2:
        idx = data.find(b'\x78\xda', pos)
        if idx < 0:
            break

        dec = None
        for size in [300, 800, 2000, 5000, 15000, 50000]:
            if idx + size > len(data):
                size = len(data) - idx
            try:
                dec = zlib.decompress(data[idx:idx + size])
                break
            except zlib.error:
                continue

        if dec:
            try:
                text = dec.decode('utf-8', errors='replace')
                if text.startswith('<d:entry'):
                    id_m = re.search(r'id="(entry_\d+)"', text)
                    entry_id = id_m.group(1) if id_m else None
                    if entry_id and entry_id not in seen_ids:
                        seen_ids.add(entry_id)
                        word, entries = parse_entry(text)
                        if word and entries:
                            key = word.lower()
                            if key not in lookup:
                                lookup[key] = entries
                            else:
                                # Merge: add POS entries not already present
                                existing_pos = {e['p'] for e in lookup[key]}
                                for e in entries:
                                    if e['p'] not in existing_pos:
                                        lookup[key].append(e)
                        total += 1
                        if total % 10000 == 0:
                            print(f'  Processed {total} entries, {len(lookup)} unique words ...', flush=True)
            except Exception:
                pass

        pos = idx + 2

    print(f'Done. {len(lookup)} unique words extracted.', flush=True)

    os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
    print(f'Writing {OUT_PATH} ...', flush=True)
    with open(OUT_PATH, 'w', encoding='utf-8') as f:
        json.dump(lookup, f, ensure_ascii=False, separators=(',', ':'))

    size_mb = os.path.getsize(OUT_PATH) / 1024 / 1024
    print(f'Written: {size_mb:.1f} MB', flush=True)


if __name__ == '__main__':
    main()
