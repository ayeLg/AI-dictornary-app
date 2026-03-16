(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Xg={exports:{}},Ll={},Zg={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Co=Symbol.for("react.element"),a0=Symbol.for("react.portal"),l0=Symbol.for("react.fragment"),u0=Symbol.for("react.strict_mode"),c0=Symbol.for("react.profiler"),h0=Symbol.for("react.provider"),d0=Symbol.for("react.context"),f0=Symbol.for("react.forward_ref"),p0=Symbol.for("react.suspense"),m0=Symbol.for("react.memo"),g0=Symbol.for("react.lazy"),wp=Symbol.iterator;function y0(t){return t===null||typeof t!="object"?null:(t=wp&&t[wp]||t["@@iterator"],typeof t=="function"?t:null)}var ey={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ty=Object.assign,ny={};function qi(t,e,n){this.props=t,this.context=e,this.refs=ny,this.updater=n||ey}qi.prototype.isReactComponent={};qi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ry(){}ry.prototype=qi.prototype;function Lh(t,e,n){this.props=t,this.context=e,this.refs=ny,this.updater=n||ey}var Mh=Lh.prototype=new ry;Mh.constructor=Lh;ty(Mh,qi.prototype);Mh.isPureReactComponent=!0;var Ep=Array.isArray,iy=Object.prototype.hasOwnProperty,bh={current:null},sy={key:!0,ref:!0,__self:!0,__source:!0};function oy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)iy.call(e,r)&&!sy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Co,type:t,key:s,ref:o,props:i,_owner:bh.current}}function _0(t,e){return{$$typeof:Co,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Co}function v0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Tp=/\/+/g;function Ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?v0(""+t.key):e.toString(36)}function Ta(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Co:case a0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ou(o,0):r,Ep(i)?(n="",t!=null&&(n=t.replace(Tp,"$&/")+"/"),Ta(i,e,n,"",function(h){return h})):i!=null&&(jh(i)&&(i=_0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Tp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ep(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ou(s,l);o+=Ta(s,e,n,u,i)}else if(u=y0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ou(s,l++),o+=Ta(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zo(t,e,n){if(t==null)return t;var r=[],i=0;return Ta(t,r,"","",function(s){return e.call(n,s,i++)}),r}function w0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},Ia={transition:null},E0={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:Ia,ReactCurrentOwner:bh};function ay(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Zo,forEach:function(t,e,n){Zo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zo(t,function(){e++}),e},toArray:function(t){return Zo(t,function(e){return e})||[]},only:function(t){if(!jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=qi;ee.Fragment=l0;ee.Profiler=c0;ee.PureComponent=Lh;ee.StrictMode=u0;ee.Suspense=p0;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E0;ee.act=ay;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ty({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)iy.call(e,u)&&!sy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Co,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:d0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:h0,_context:t},t.Consumer=t};ee.createElement=oy;ee.createFactory=function(t){var e=oy.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:f0,render:t}};ee.isValidElement=jh;ee.lazy=function(t){return{$$typeof:g0,_payload:{_status:-1,_result:t},_init:w0}};ee.memo=function(t,e){return{$$typeof:m0,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Ia.transition;Ia.transition={};try{t()}finally{Ia.transition=e}};ee.unstable_act=ay;ee.useCallback=function(t,e){return ut.current.useCallback(t,e)};ee.useContext=function(t){return ut.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ut.current.useEffect(t,e)};ee.useId=function(){return ut.current.useId()};ee.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ut.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};ee.useRef=function(t){return ut.current.useRef(t)};ee.useState=function(t){return ut.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ut.current.useTransition()};ee.version="18.3.1";Zg.exports=ee;var Q=Zg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0=Q,I0=Symbol.for("react.element"),S0=Symbol.for("react.fragment"),A0=Object.prototype.hasOwnProperty,C0=T0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R0={key:!0,ref:!0,__self:!0,__source:!0};function ly(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)A0.call(e,r)&&!R0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:I0,type:t,key:s,ref:o,props:i,_owner:C0.current}}Ll.Fragment=S0;Ll.jsx=ly;Ll.jsxs=ly;Xg.exports=Ll;var p=Xg.exports,uy={exports:{}},Tt={},cy={exports:{}},hy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var X=z.length;z.push(G);e:for(;0<X;){var ge=X-1>>>1,Ae=z[ge];if(0<i(Ae,G))z[ge]=G,z[X]=Ae,X=ge;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],X=z.pop();if(X!==G){z[0]=X;e:for(var ge=0,Ae=z.length,vr=Ae>>>1;ge<vr;){var St=2*(ge+1)-1,wr=z[St],Ot=St+1,Nn=z[Ot];if(0>i(wr,X))Ot<Ae&&0>i(Nn,wr)?(z[ge]=Nn,z[Ot]=X,ge=Ot):(z[ge]=wr,z[St]=X,ge=St);else if(Ot<Ae&&0>i(Nn,X))z[ge]=Nn,z[Ot]=X,ge=Ot;else break e}}return G}function i(z,G){var X=z.sortIndex-G.sortIndex;return X!==0?X:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,_=3,C=!1,x=!1,P=!1,O=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(z){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=z)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function D(z){if(P=!1,R(z),!x)if(n(u)!==null)x=!0,Gt(M);else{var G=n(h);G!==null&&ze(D,G.startTime-z)}}function M(z,G){x=!1,P&&(P=!1,S(y),y=-1),C=!0;var X=_;try{for(R(G),m=n(u);m!==null&&(!(m.expirationTime>G)||z&&!A());){var ge=m.callback;if(typeof ge=="function"){m.callback=null,_=m.priorityLevel;var Ae=ge(m.expirationTime<=G);G=t.unstable_now(),typeof Ae=="function"?m.callback=Ae:m===n(u)&&r(u),R(G)}else r(u);m=n(u)}if(m!==null)var vr=!0;else{var St=n(h);St!==null&&ze(D,St.startTime-G),vr=!1}return vr}finally{m=null,_=X,C=!1}}var F=!1,v=null,y=-1,T=5,I=-1;function A(){return!(t.unstable_now()-I<T)}function k(){if(v!==null){var z=t.unstable_now();I=z;var G=!0;try{G=v(!0,z)}finally{G?w():(F=!1,v=null)}}else F=!1}var w;if(typeof E=="function")w=function(){E(k)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,rt=ae.port2;ae.port1.onmessage=k,w=function(){rt.postMessage(null)}}else w=function(){O(k,0)};function Gt(z){v=z,F||(F=!0,w())}function ze(z,G){y=O(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){x||C||(x=!0,Gt(M))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var X=_;_=G;try{return z()}finally{_=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=_;_=z;try{return G()}finally{_=X}},t.unstable_scheduleCallback=function(z,G,X){var ge=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ge+X:ge):X=ge,z){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=X+Ae,z={id:f++,callback:G,priorityLevel:z,startTime:X,expirationTime:Ae,sortIndex:-1},X>ge?(z.sortIndex=X,e(h,z),n(u)===null&&z===n(h)&&(P?(S(y),y=-1):P=!0,ze(D,X-ge))):(z.sortIndex=Ae,e(u,z),x||C||(x=!0,Gt(M))),z},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(z){var G=_;return function(){var X=_;_=G;try{return z.apply(this,arguments)}finally{_=X}}}})(hy);cy.exports=hy;var k0=cy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0=Q,Et=k0;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dy=new Set,Xs={};function Qr(t,e){Di(t,e),Di(t+"Capture",e)}function Di(t,e){for(Xs[t]=e,t=0;t<e.length;t++)dy.add(e[t])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vc=Object.prototype.hasOwnProperty,N0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ip={},Sp={};function x0(t){return vc.call(Sp,t)?!0:vc.call(Ip,t)?!1:N0.test(t)?Sp[t]=!0:(Ip[t]=!0,!1)}function D0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function V0(t,e,n,r){if(e===null||typeof e>"u"||D0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fh=/[\-:]([a-z])/g;function Uh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fh,Uh);qe[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fh,Uh);qe[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fh,Uh);qe[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function zh(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(V0(e,n,i,r)&&(n=null),r||i===null?x0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var kn=P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ea=Symbol.for("react.element"),ui=Symbol.for("react.portal"),ci=Symbol.for("react.fragment"),Bh=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),fy=Symbol.for("react.provider"),py=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),Tc=Symbol.for("react.suspense_list"),Wh=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),my=Symbol.for("react.offscreen"),Ap=Symbol.iterator;function _s(t){return t===null||typeof t!="object"?null:(t=Ap&&t[Ap]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Lu;function ks(t){if(Lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lu=e&&e[1]||""}return`
`+Lu+t}var Mu=!1;function bu(t,e){if(!t||Mu)return"";Mu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Mu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ks(t):""}function O0(t){switch(t.tag){case 5:return ks(t.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return t=bu(t.type,!1),t;case 11:return t=bu(t.type.render,!1),t;case 1:return t=bu(t.type,!0),t;default:return""}}function Ic(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ci:return"Fragment";case ui:return"Portal";case wc:return"Profiler";case Bh:return"StrictMode";case Ec:return"Suspense";case Tc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case py:return(t.displayName||"Context")+".Consumer";case fy:return(t._context.displayName||"Context")+".Provider";case $h:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wh:return e=t.displayName||null,e!==null?e:Ic(t.type)||"Memo";case Fn:e=t._payload,t=t._init;try{return Ic(t(e))}catch{}}return null}function L0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ic(e);case 8:return e===Bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function M0(t){var e=gy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ta(t){t._valueTracker||(t._valueTracker=M0(t))}function yy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=gy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sc(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _y(t,e){e=e.checked,e!=null&&zh(t,"checked",e,!1)}function Ac(t,e){_y(t,e);var n=lr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cc(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cc(t,e,n){(e!=="number"||Wa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ps=Array.isArray;function Ei(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Ps(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function vy(t,e){var n=lr(e.value),r=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Pp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var na,Ey=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(na=na||document.createElement("div"),na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ms={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b0=["Webkit","ms","Moz","O"];Object.keys(Ms).forEach(function(t){b0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ms[e]=Ms[t]})});function Ty(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ms.hasOwnProperty(t)&&Ms[t]?(""+e).trim():e+"px"}function Iy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ty(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var j0=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pc(t,e){if(e){if(j0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Nc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=null;function Hh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dc=null,Ti=null,Ii=null;function Np(t){if(t=Po(t)){if(typeof Dc!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Ul(e),Dc(t.stateNode,t.type,e))}}function Sy(t){Ti?Ii?Ii.push(t):Ii=[t]:Ti=t}function Ay(){if(Ti){var t=Ti,e=Ii;if(Ii=Ti=null,Np(t),e)for(t=0;t<e.length;t++)Np(e[t])}}function Cy(t,e){return t(e)}function Ry(){}var ju=!1;function ky(t,e,n){if(ju)return t(e,n);ju=!0;try{return Cy(t,e,n)}finally{ju=!1,(Ti!==null||Ii!==null)&&(Ry(),Ay())}}function eo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ul(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Vc=!1;if(wn)try{var vs={};Object.defineProperty(vs,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",vs,vs),window.removeEventListener("test",vs,vs)}catch{Vc=!1}function F0(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var bs=!1,Ha=null,qa=!1,Oc=null,U0={onError:function(t){bs=!0,Ha=t}};function z0(t,e,n,r,i,s,o,l,u){bs=!1,Ha=null,F0.apply(U0,arguments)}function B0(t,e,n,r,i,s,o,l,u){if(z0.apply(this,arguments),bs){if(bs){var h=Ha;bs=!1,Ha=null}else throw Error(j(198));qa||(qa=!0,Oc=h)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Py(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xp(t){if(Yr(t)!==t)throw Error(j(188))}function $0(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return xp(i),t;if(s===r)return xp(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Ny(t){return t=$0(t),t!==null?xy(t):null}function xy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xy(t);if(e!==null)return e;t=t.sibling}return null}var Dy=Et.unstable_scheduleCallback,Dp=Et.unstable_cancelCallback,W0=Et.unstable_shouldYield,H0=Et.unstable_requestPaint,Re=Et.unstable_now,q0=Et.unstable_getCurrentPriorityLevel,qh=Et.unstable_ImmediatePriority,Vy=Et.unstable_UserBlockingPriority,Ka=Et.unstable_NormalPriority,K0=Et.unstable_LowPriority,Oy=Et.unstable_IdlePriority,Ml=null,tn=null;function G0(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Ml,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:J0,Q0=Math.log,Y0=Math.LN2;function J0(t){return t>>>=0,t===0?32:31-(Q0(t)/Y0|0)|0}var ra=64,ia=4194304;function Ns(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ga(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ns(l):(s&=o,s!==0&&(r=Ns(s)))}else o=n&~i,o!==0?r=Ns(o):s!==0&&(r=Ns(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$t(e),i=1<<n,r|=t[n],e&=~i;return r}function X0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$t(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=X0(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Lc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ly(){var t=ra;return ra<<=1,!(ra&4194240)&&(ra=64),t}function Fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ro(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$t(e),t[e]=n}function eT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Kh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function My(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var by,Gh,jy,Fy,Uy,Mc=!1,sa=[],Qn=null,Yn=null,Jn=null,to=new Map,no=new Map,zn=[],tT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vp(t,e){switch(t){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":to.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(e.pointerId)}}function ws(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Po(e),e!==null&&Gh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nT(t,e,n,r,i){switch(e){case"focusin":return Qn=ws(Qn,t,e,n,r,i),!0;case"dragenter":return Yn=ws(Yn,t,e,n,r,i),!0;case"mouseover":return Jn=ws(Jn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return to.set(s,ws(to.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,no.set(s,ws(no.get(s)||null,t,e,n,r,i)),!0}return!1}function zy(t){var e=Pr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=Py(n),e!==null){t.blockedOn=e,Uy(t.priority,function(){jy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xc=r,n.target.dispatchEvent(r),xc=null}else return e=Po(n),e!==null&&Gh(e),t.blockedOn=n,!1;e.shift()}return!0}function Op(t,e,n){Sa(t)&&n.delete(e)}function rT(){Mc=!1,Qn!==null&&Sa(Qn)&&(Qn=null),Yn!==null&&Sa(Yn)&&(Yn=null),Jn!==null&&Sa(Jn)&&(Jn=null),to.forEach(Op),no.forEach(Op)}function Es(t,e){t.blockedOn===e&&(t.blockedOn=null,Mc||(Mc=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,rT)))}function ro(t){function e(i){return Es(i,t)}if(0<sa.length){Es(sa[0],t);for(var n=1;n<sa.length;n++){var r=sa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qn!==null&&Es(Qn,t),Yn!==null&&Es(Yn,t),Jn!==null&&Es(Jn,t),to.forEach(e),no.forEach(e),n=0;n<zn.length;n++)r=zn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<zn.length&&(n=zn[0],n.blockedOn===null);)zy(n),n.blockedOn===null&&zn.shift()}var Si=kn.ReactCurrentBatchConfig,Qa=!0;function iT(t,e,n,r){var i=le,s=Si.transition;Si.transition=null;try{le=1,Qh(t,e,n,r)}finally{le=i,Si.transition=s}}function sT(t,e,n,r){var i=le,s=Si.transition;Si.transition=null;try{le=4,Qh(t,e,n,r)}finally{le=i,Si.transition=s}}function Qh(t,e,n,r){if(Qa){var i=bc(t,e,n,r);if(i===null)Qu(t,e,r,Ya,n),Vp(t,r);else if(nT(i,t,e,n,r))r.stopPropagation();else if(Vp(t,r),e&4&&-1<tT.indexOf(t)){for(;i!==null;){var s=Po(i);if(s!==null&&by(s),s=bc(t,e,n,r),s===null&&Qu(t,e,r,Ya,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Qu(t,e,r,null,n)}}var Ya=null;function bc(t,e,n,r){if(Ya=null,t=Hh(r),t=Pr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Py(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ya=t,null}function By(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q0()){case qh:return 1;case Vy:return 4;case Ka:case K0:return 16;case Oy:return 536870912;default:return 16}default:return 16}}var qn=null,Yh=null,Aa=null;function $y(){if(Aa)return Aa;var t,e=Yh,n=e.length,r,i="value"in qn?qn.value:qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Aa=i.slice(t,1<r?1-r:void 0)}function Ca(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function Lp(){return!1}function It(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oa:Lp,this.isPropagationStopped=Lp,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),e}var Ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jh=It(Ki),ko=Ee({},Ki,{view:0,detail:0}),oT=It(ko),Uu,zu,Ts,bl=Ee({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ts&&(Ts&&t.type==="mousemove"?(Uu=t.screenX-Ts.screenX,zu=t.screenY-Ts.screenY):zu=Uu=0,Ts=t),Uu)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),Mp=It(bl),aT=Ee({},bl,{dataTransfer:0}),lT=It(aT),uT=Ee({},ko,{relatedTarget:0}),Bu=It(uT),cT=Ee({},Ki,{animationName:0,elapsedTime:0,pseudoElement:0}),hT=It(cT),dT=Ee({},Ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fT=It(dT),pT=Ee({},Ki,{data:0}),bp=It(pT),mT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _T(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yT[t])?!!e[t]:!1}function Xh(){return _T}var vT=Ee({},ko,{key:function(t){if(t.key){var e=mT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ca(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xh,charCode:function(t){return t.type==="keypress"?Ca(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ca(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wT=It(vT),ET=Ee({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=It(ET),TT=Ee({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xh}),IT=It(TT),ST=Ee({},Ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),AT=It(ST),CT=Ee({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RT=It(CT),kT=[9,13,27,32],Zh=wn&&"CompositionEvent"in window,js=null;wn&&"documentMode"in document&&(js=document.documentMode);var PT=wn&&"TextEvent"in window&&!js,Wy=wn&&(!Zh||js&&8<js&&11>=js),Fp=" ",Up=!1;function Hy(t,e){switch(t){case"keyup":return kT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hi=!1;function NT(t,e){switch(t){case"compositionend":return qy(e);case"keypress":return e.which!==32?null:(Up=!0,Fp);case"textInput":return t=e.data,t===Fp&&Up?null:t;default:return null}}function xT(t,e){if(hi)return t==="compositionend"||!Zh&&Hy(t,e)?(t=$y(),Aa=Yh=qn=null,hi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wy&&e.locale!=="ko"?null:e.data;default:return null}}var DT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!DT[t.type]:e==="textarea"}function Ky(t,e,n,r){Sy(r),e=Ja(e,"onChange"),0<e.length&&(n=new Jh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fs=null,io=null;function VT(t){i_(t,0)}function jl(t){var e=pi(t);if(yy(e))return t}function OT(t,e){if(t==="change")return e}var Gy=!1;if(wn){var $u;if(wn){var Wu="oninput"in document;if(!Wu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Wu=typeof Bp.oninput=="function"}$u=Wu}else $u=!1;Gy=$u&&(!document.documentMode||9<document.documentMode)}function $p(){Fs&&(Fs.detachEvent("onpropertychange",Qy),io=Fs=null)}function Qy(t){if(t.propertyName==="value"&&jl(io)){var e=[];Ky(e,io,t,Hh(t)),ky(VT,e)}}function LT(t,e,n){t==="focusin"?($p(),Fs=e,io=n,Fs.attachEvent("onpropertychange",Qy)):t==="focusout"&&$p()}function MT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(io)}function bT(t,e){if(t==="click")return jl(e)}function jT(t,e){if(t==="input"||t==="change")return jl(e)}function FT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kt=typeof Object.is=="function"?Object.is:FT;function so(t,e){if(Kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vc.call(e,i)||!Kt(t[i],e[i]))return!1}return!0}function Wp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hp(t,e){var n=Wp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wp(n)}}function Yy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jy(){for(var t=window,e=Wa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wa(t.document)}return e}function ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function UT(t){var e=Jy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yy(n.ownerDocument.documentElement,n)){if(r!==null&&ed(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Hp(n,s);var o=Hp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zT=wn&&"documentMode"in document&&11>=document.documentMode,di=null,jc=null,Us=null,Fc=!1;function qp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fc||di==null||di!==Wa(r)||(r=di,"selectionStart"in r&&ed(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Us&&so(Us,r)||(Us=r,r=Ja(jc,"onSelect"),0<r.length&&(e=new Jh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=di)))}function aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fi={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},Hu={},Xy={};wn&&(Xy=document.createElement("div").style,"AnimationEvent"in window||(delete fi.animationend.animation,delete fi.animationiteration.animation,delete fi.animationstart.animation),"TransitionEvent"in window||delete fi.transitionend.transition);function Fl(t){if(Hu[t])return Hu[t];if(!fi[t])return t;var e=fi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Xy)return Hu[t]=e[n];return t}var Zy=Fl("animationend"),e_=Fl("animationiteration"),t_=Fl("animationstart"),n_=Fl("transitionend"),r_=new Map,Kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){r_.set(t,e),Qr(e,[t])}for(var qu=0;qu<Kp.length;qu++){var Ku=Kp[qu],BT=Ku.toLowerCase(),$T=Ku[0].toUpperCase()+Ku.slice(1);gr(BT,"on"+$T)}gr(Zy,"onAnimationEnd");gr(e_,"onAnimationIteration");gr(t_,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(n_,"onTransitionEnd");Di("onMouseEnter",["mouseout","mouseover"]);Di("onMouseLeave",["mouseout","mouseover"]);Di("onPointerEnter",["pointerout","pointerover"]);Di("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WT=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function Gp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,B0(r,e,void 0,t),t.currentTarget=null}function i_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Gp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Gp(i,l,h),s=u}}}if(qa)throw t=Oc,qa=!1,Oc=null,t}function fe(t,e){var n=e[Wc];n===void 0&&(n=e[Wc]=new Set);var r=t+"__bubble";n.has(r)||(s_(e,t,2,!1),n.add(r))}function Gu(t,e,n){var r=0;e&&(r|=4),s_(n,t,r,e)}var la="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[la]){t[la]=!0,dy.forEach(function(n){n!=="selectionchange"&&(WT.has(n)||Gu(n,!1,t),Gu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[la]||(e[la]=!0,Gu("selectionchange",!1,e))}}function s_(t,e,n,r){switch(By(e)){case 1:var i=iT;break;case 4:i=sT;break;default:i=Qh}n=i.bind(null,e,n,t),i=void 0,!Vc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Qu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Pr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}ky(function(){var h=s,f=Hh(n),m=[];e:{var _=r_.get(t);if(_!==void 0){var C=Jh,x=t;switch(t){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":C=wT;break;case"focusin":x="focus",C=Bu;break;case"focusout":x="blur",C=Bu;break;case"beforeblur":case"afterblur":C=Bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=lT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=IT;break;case Zy:case e_:case t_:C=hT;break;case n_:C=AT;break;case"scroll":C=oT;break;case"wheel":C=RT;break;case"copy":case"cut":case"paste":C=fT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=jp}var P=(e&4)!==0,O=!P&&t==="scroll",S=P?_!==null?_+"Capture":null:_;P=[];for(var E=h,R;E!==null;){R=E;var D=R.stateNode;if(R.tag===5&&D!==null&&(R=D,S!==null&&(D=eo(E,S),D!=null&&P.push(ao(E,D,R)))),O)break;E=E.return}0<P.length&&(_=new C(_,x,null,n,f),m.push({event:_,listeners:P}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",_&&n!==xc&&(x=n.relatedTarget||n.fromElement)&&(Pr(x)||x[En]))break e;if((C||_)&&(_=f.window===f?f:(_=f.ownerDocument)?_.defaultView||_.parentWindow:window,C?(x=n.relatedTarget||n.toElement,C=h,x=x?Pr(x):null,x!==null&&(O=Yr(x),x!==O||x.tag!==5&&x.tag!==6)&&(x=null)):(C=null,x=h),C!==x)){if(P=Mp,D="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(P=jp,D="onPointerLeave",S="onPointerEnter",E="pointer"),O=C==null?_:pi(C),R=x==null?_:pi(x),_=new P(D,E+"leave",C,n,f),_.target=O,_.relatedTarget=R,D=null,Pr(f)===h&&(P=new P(S,E+"enter",x,n,f),P.target=R,P.relatedTarget=O,D=P),O=D,C&&x)t:{for(P=C,S=x,E=0,R=P;R;R=ii(R))E++;for(R=0,D=S;D;D=ii(D))R++;for(;0<E-R;)P=ii(P),E--;for(;0<R-E;)S=ii(S),R--;for(;E--;){if(P===S||S!==null&&P===S.alternate)break t;P=ii(P),S=ii(S)}P=null}else P=null;C!==null&&Qp(m,_,C,P,!1),x!==null&&O!==null&&Qp(m,O,x,P,!0)}}e:{if(_=h?pi(h):window,C=_.nodeName&&_.nodeName.toLowerCase(),C==="select"||C==="input"&&_.type==="file")var M=OT;else if(zp(_))if(Gy)M=jT;else{M=MT;var F=LT}else(C=_.nodeName)&&C.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(M=bT);if(M&&(M=M(t,h))){Ky(m,M,n,f);break e}F&&F(t,_,h),t==="focusout"&&(F=_._wrapperState)&&F.controlled&&_.type==="number"&&Cc(_,"number",_.value)}switch(F=h?pi(h):window,t){case"focusin":(zp(F)||F.contentEditable==="true")&&(di=F,jc=h,Us=null);break;case"focusout":Us=jc=di=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,qp(m,n,f);break;case"selectionchange":if(zT)break;case"keydown":case"keyup":qp(m,n,f)}var v;if(Zh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else hi?Hy(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Wy&&n.locale!=="ko"&&(hi||y!=="onCompositionStart"?y==="onCompositionEnd"&&hi&&(v=$y()):(qn=f,Yh="value"in qn?qn.value:qn.textContent,hi=!0)),F=Ja(h,y),0<F.length&&(y=new bp(y,t,null,n,f),m.push({event:y,listeners:F}),v?y.data=v:(v=qy(n),v!==null&&(y.data=v)))),(v=PT?NT(t,n):xT(t,n))&&(h=Ja(h,"onBeforeInput"),0<h.length&&(f=new bp("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=v))}i_(m,e)})}function ao(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ja(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=eo(t,n),s!=null&&r.unshift(ao(t,s,i)),s=eo(t,e),s!=null&&r.push(ao(t,s,i))),t=t.return}return r}function ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=eo(n,s),u!=null&&o.unshift(ao(n,u,l))):i||(u=eo(n,s),u!=null&&o.push(ao(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var HT=/\r\n?/g,qT=/\u0000|\uFFFD/g;function Yp(t){return(typeof t=="string"?t:""+t).replace(HT,`
`).replace(qT,"")}function ua(t,e,n){if(e=Yp(e),Yp(t)!==e&&n)throw Error(j(425))}function Xa(){}var Uc=null,zc=null;function Bc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,KT=typeof clearTimeout=="function"?clearTimeout:void 0,Jp=typeof Promise=="function"?Promise:void 0,GT=typeof queueMicrotask=="function"?queueMicrotask:typeof Jp<"u"?function(t){return Jp.resolve(null).then(t).catch(QT)}:$c;function QT(t){setTimeout(function(){throw t})}function Yu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ro(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ro(e)}function Xn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gi=Math.random().toString(36).slice(2),en="__reactFiber$"+Gi,lo="__reactProps$"+Gi,En="__reactContainer$"+Gi,Wc="__reactEvents$"+Gi,YT="__reactListeners$"+Gi,JT="__reactHandles$"+Gi;function Pr(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[En]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xp(t);t!==null;){if(n=t[en])return n;t=Xp(t)}return e}t=n,n=t.parentNode}return null}function Po(t){return t=t[en]||t[En],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function pi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Ul(t){return t[lo]||null}var Hc=[],mi=-1;function yr(t){return{current:t}}function me(t){0>mi||(t.current=Hc[mi],Hc[mi]=null,mi--)}function he(t,e){mi++,Hc[mi]=t.current,t.current=e}var ur={},tt=yr(ur),pt=yr(!1),jr=ur;function Vi(t,e){var n=t.type.contextTypes;if(!n)return ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mt(t){return t=t.childContextTypes,t!=null}function Za(){me(pt),me(tt)}function Zp(t,e,n){if(tt.current!==ur)throw Error(j(168));he(tt,e),he(pt,n)}function o_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,L0(t)||"Unknown",i));return Ee({},n,r)}function el(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,jr=tt.current,he(tt,t),he(pt,pt.current),!0}function em(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=o_(t,e,jr),r.__reactInternalMemoizedMergedChildContext=t,me(pt),me(tt),he(tt,t)):me(pt),he(pt,n)}var dn=null,zl=!1,Ju=!1;function a_(t){dn===null?dn=[t]:dn.push(t)}function XT(t){zl=!0,a_(t)}function _r(){if(!Ju&&dn!==null){Ju=!0;var t=0,e=le;try{var n=dn;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dn=null,zl=!1}catch(i){throw dn!==null&&(dn=dn.slice(t+1)),Dy(qh,_r),i}finally{le=e,Ju=!1}}return null}var gi=[],yi=0,tl=null,nl=0,At=[],Ct=0,Fr=null,pn=1,mn="";function Cr(t,e){gi[yi++]=nl,gi[yi++]=tl,tl=t,nl=e}function l_(t,e,n){At[Ct++]=pn,At[Ct++]=mn,At[Ct++]=Fr,Fr=t;var r=pn;t=mn;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var s=32-$t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pn=1<<32-$t(e)+i|n<<i|r,mn=s+t}else pn=1<<s|n<<i|r,mn=t}function td(t){t.return!==null&&(Cr(t,1),l_(t,1,0))}function nd(t){for(;t===tl;)tl=gi[--yi],gi[yi]=null,nl=gi[--yi],gi[yi]=null;for(;t===Fr;)Fr=At[--Ct],At[Ct]=null,mn=At[--Ct],At[Ct]=null,pn=At[--Ct],At[Ct]=null}var wt=null,vt=null,ye=!1,jt=null;function u_(t,e){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,vt=Xn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:pn,overflow:mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,vt=null,!0):!1;default:return!1}}function qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kc(t){if(ye){var e=vt;if(e){var n=e;if(!tm(t,e)){if(qc(t))throw Error(j(418));e=Xn(n.nextSibling);var r=wt;e&&tm(t,e)?u_(r,n):(t.flags=t.flags&-4097|2,ye=!1,wt=t)}}else{if(qc(t))throw Error(j(418));t.flags=t.flags&-4097|2,ye=!1,wt=t}}}function nm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function ca(t){if(t!==wt)return!1;if(!ye)return nm(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bc(t.type,t.memoizedProps)),e&&(e=vt)){if(qc(t))throw c_(),Error(j(418));for(;e;)u_(t,e),e=Xn(e.nextSibling)}if(nm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=Xn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=wt?Xn(t.stateNode.nextSibling):null;return!0}function c_(){for(var t=vt;t;)t=Xn(t.nextSibling)}function Oi(){vt=wt=null,ye=!1}function rd(t){jt===null?jt=[t]:jt.push(t)}var ZT=kn.ReactCurrentBatchConfig;function Is(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function ha(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rm(t){var e=t._init;return e(t._payload)}function h_(t){function e(S,E){if(t){var R=S.deletions;R===null?(S.deletions=[E],S.flags|=16):R.push(E)}}function n(S,E){if(!t)return null;for(;E!==null;)e(S,E),E=E.sibling;return null}function r(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function i(S,E){return S=nr(S,E),S.index=0,S.sibling=null,S}function s(S,E,R){return S.index=R,t?(R=S.alternate,R!==null?(R=R.index,R<E?(S.flags|=2,E):R):(S.flags|=2,E)):(S.flags|=1048576,E)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,E,R,D){return E===null||E.tag!==6?(E=ic(R,S.mode,D),E.return=S,E):(E=i(E,R),E.return=S,E)}function u(S,E,R,D){var M=R.type;return M===ci?f(S,E,R.props.children,D,R.key):E!==null&&(E.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Fn&&rm(M)===E.type)?(D=i(E,R.props),D.ref=Is(S,E,R),D.return=S,D):(D=Va(R.type,R.key,R.props,null,S.mode,D),D.ref=Is(S,E,R),D.return=S,D)}function h(S,E,R,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==R.containerInfo||E.stateNode.implementation!==R.implementation?(E=sc(R,S.mode,D),E.return=S,E):(E=i(E,R.children||[]),E.return=S,E)}function f(S,E,R,D,M){return E===null||E.tag!==7?(E=Lr(R,S.mode,D,M),E.return=S,E):(E=i(E,R),E.return=S,E)}function m(S,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return E=ic(""+E,S.mode,R),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ea:return R=Va(E.type,E.key,E.props,null,S.mode,R),R.ref=Is(S,null,E),R.return=S,R;case ui:return E=sc(E,S.mode,R),E.return=S,E;case Fn:var D=E._init;return m(S,D(E._payload),R)}if(Ps(E)||_s(E))return E=Lr(E,S.mode,R,null),E.return=S,E;ha(S,E)}return null}function _(S,E,R,D){var M=E!==null?E.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return M!==null?null:l(S,E,""+R,D);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ea:return R.key===M?u(S,E,R,D):null;case ui:return R.key===M?h(S,E,R,D):null;case Fn:return M=R._init,_(S,E,M(R._payload),D)}if(Ps(R)||_s(R))return M!==null?null:f(S,E,R,D,null);ha(S,R)}return null}function C(S,E,R,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(R)||null,l(E,S,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ea:return S=S.get(D.key===null?R:D.key)||null,u(E,S,D,M);case ui:return S=S.get(D.key===null?R:D.key)||null,h(E,S,D,M);case Fn:var F=D._init;return C(S,E,R,F(D._payload),M)}if(Ps(D)||_s(D))return S=S.get(R)||null,f(E,S,D,M,null);ha(E,D)}return null}function x(S,E,R,D){for(var M=null,F=null,v=E,y=E=0,T=null;v!==null&&y<R.length;y++){v.index>y?(T=v,v=null):T=v.sibling;var I=_(S,v,R[y],D);if(I===null){v===null&&(v=T);break}t&&v&&I.alternate===null&&e(S,v),E=s(I,E,y),F===null?M=I:F.sibling=I,F=I,v=T}if(y===R.length)return n(S,v),ye&&Cr(S,y),M;if(v===null){for(;y<R.length;y++)v=m(S,R[y],D),v!==null&&(E=s(v,E,y),F===null?M=v:F.sibling=v,F=v);return ye&&Cr(S,y),M}for(v=r(S,v);y<R.length;y++)T=C(v,S,y,R[y],D),T!==null&&(t&&T.alternate!==null&&v.delete(T.key===null?y:T.key),E=s(T,E,y),F===null?M=T:F.sibling=T,F=T);return t&&v.forEach(function(A){return e(S,A)}),ye&&Cr(S,y),M}function P(S,E,R,D){var M=_s(R);if(typeof M!="function")throw Error(j(150));if(R=M.call(R),R==null)throw Error(j(151));for(var F=M=null,v=E,y=E=0,T=null,I=R.next();v!==null&&!I.done;y++,I=R.next()){v.index>y?(T=v,v=null):T=v.sibling;var A=_(S,v,I.value,D);if(A===null){v===null&&(v=T);break}t&&v&&A.alternate===null&&e(S,v),E=s(A,E,y),F===null?M=A:F.sibling=A,F=A,v=T}if(I.done)return n(S,v),ye&&Cr(S,y),M;if(v===null){for(;!I.done;y++,I=R.next())I=m(S,I.value,D),I!==null&&(E=s(I,E,y),F===null?M=I:F.sibling=I,F=I);return ye&&Cr(S,y),M}for(v=r(S,v);!I.done;y++,I=R.next())I=C(v,S,y,I.value,D),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?y:I.key),E=s(I,E,y),F===null?M=I:F.sibling=I,F=I);return t&&v.forEach(function(k){return e(S,k)}),ye&&Cr(S,y),M}function O(S,E,R,D){if(typeof R=="object"&&R!==null&&R.type===ci&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case ea:e:{for(var M=R.key,F=E;F!==null;){if(F.key===M){if(M=R.type,M===ci){if(F.tag===7){n(S,F.sibling),E=i(F,R.props.children),E.return=S,S=E;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Fn&&rm(M)===F.type){n(S,F.sibling),E=i(F,R.props),E.ref=Is(S,F,R),E.return=S,S=E;break e}n(S,F);break}else e(S,F);F=F.sibling}R.type===ci?(E=Lr(R.props.children,S.mode,D,R.key),E.return=S,S=E):(D=Va(R.type,R.key,R.props,null,S.mode,D),D.ref=Is(S,E,R),D.return=S,S=D)}return o(S);case ui:e:{for(F=R.key;E!==null;){if(E.key===F)if(E.tag===4&&E.stateNode.containerInfo===R.containerInfo&&E.stateNode.implementation===R.implementation){n(S,E.sibling),E=i(E,R.children||[]),E.return=S,S=E;break e}else{n(S,E);break}else e(S,E);E=E.sibling}E=sc(R,S.mode,D),E.return=S,S=E}return o(S);case Fn:return F=R._init,O(S,E,F(R._payload),D)}if(Ps(R))return x(S,E,R,D);if(_s(R))return P(S,E,R,D);ha(S,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,E!==null&&E.tag===6?(n(S,E.sibling),E=i(E,R),E.return=S,S=E):(n(S,E),E=ic(R,S.mode,D),E.return=S,S=E),o(S)):n(S,E)}return O}var Li=h_(!0),d_=h_(!1),rl=yr(null),il=null,_i=null,id=null;function sd(){id=_i=il=null}function od(t){var e=rl.current;me(rl),t._currentValue=e}function Gc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ai(t,e){il=t,id=_i=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ft=!0),t.firstContext=null)}function xt(t){var e=t._currentValue;if(id!==t)if(t={context:t,memoizedValue:e,next:null},_i===null){if(il===null)throw Error(j(308));_i=t,il.dependencies={lanes:0,firstContext:t}}else _i=_i.next=t;return e}var Nr=null;function ad(t){Nr===null?Nr=[t]:Nr.push(t)}function f_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ad(e)):(n.next=i.next,i.next=n),e.interleaved=n,Tn(t,r)}function Tn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Un=!1;function ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Tn(t,n)}return i=r.interleaved,i===null?(e.next=e,ad(r)):(e.next=i.next,i.next=e),r.interleaved=e,Tn(t,n)}function Ra(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kh(t,n)}}function im(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sl(t,e,n,r){var i=t.updateQueue;Un=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var _=l.lane,C=l.eventTime;if((r&_)===_){f!==null&&(f=f.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,P=l;switch(_=e,C=n,P.tag){case 1:if(x=P.payload,typeof x=="function"){m=x.call(C,m,_);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=P.payload,_=typeof x=="function"?x.call(C,m,_):x,_==null)break e;m=Ee({},m,_);break e;case 2:Un=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=i.effects,_===null?i.effects=[l]:_.push(l))}else C={eventTime:C,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=C,u=m):f=f.next=C,o|=_;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;_=l,l=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);zr|=o,t.lanes=o,t.memoizedState=m}}function sm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var No={},nn=yr(No),uo=yr(No),co=yr(No);function xr(t){if(t===No)throw Error(j(174));return t}function ud(t,e){switch(he(co,e),he(uo,t),he(nn,No),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kc(e,t)}me(nn),he(nn,e)}function Mi(){me(nn),me(uo),me(co)}function m_(t){xr(co.current);var e=xr(nn.current),n=kc(e,t.type);e!==n&&(he(uo,t),he(nn,n))}function cd(t){uo.current===t&&(me(nn),me(uo))}var _e=yr(0);function ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xu=[];function hd(){for(var t=0;t<Xu.length;t++)Xu[t]._workInProgressVersionPrimary=null;Xu.length=0}var ka=kn.ReactCurrentDispatcher,Zu=kn.ReactCurrentBatchConfig,Ur=0,we=null,De=null,je=null,al=!1,zs=!1,ho=0,eI=0;function Qe(){throw Error(j(321))}function dd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kt(t[n],e[n]))return!1;return!0}function fd(t,e,n,r,i,s){if(Ur=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ka.current=t===null||t.memoizedState===null?iI:sI,t=n(r,i),zs){s=0;do{if(zs=!1,ho=0,25<=s)throw Error(j(301));s+=1,je=De=null,e.updateQueue=null,ka.current=oI,t=n(r,i)}while(zs)}if(ka.current=ll,e=De!==null&&De.next!==null,Ur=0,je=De=we=null,al=!1,e)throw Error(j(300));return t}function pd(){var t=ho!==0;return ho=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?we.memoizedState=je=t:je=je.next=t,je}function Dt(){if(De===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=je===null?we.memoizedState:je.next;if(e!==null)je=e,De=t;else{if(t===null)throw Error(j(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},je===null?we.memoizedState=je=t:je=je.next=t}return je}function fo(t,e){return typeof e=="function"?e(t):e}function ec(t){var e=Dt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Ur&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,we.lanes|=f,zr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Kt(r,e.memoizedState)||(ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,zr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tc(t){var e=Dt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kt(s,e.memoizedState)||(ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function g_(){}function y_(t,e){var n=we,r=Dt(),i=e(),s=!Kt(r.memoizedState,i);if(s&&(r.memoizedState=i,ft=!0),r=r.queue,md(w_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,po(9,v_.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(j(349));Ur&30||__(n,e,i)}return i}function __(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function v_(t,e,n,r){e.value=n,e.getSnapshot=r,E_(e)&&T_(t)}function w_(t,e,n){return n(function(){E_(e)&&T_(t)})}function E_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kt(t,n)}catch{return!0}}function T_(t){var e=Tn(t,1);e!==null&&Wt(e,t,1,-1)}function om(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:t},e.queue=t,t=t.dispatch=rI.bind(null,we,t),[e.memoizedState,t]}function po(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function I_(){return Dt().memoizedState}function Pa(t,e,n,r){var i=Xt();we.flags|=t,i.memoizedState=po(1|e,n,void 0,r===void 0?null:r)}function Bl(t,e,n,r){var i=Dt();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&dd(r,o.deps)){i.memoizedState=po(e,n,s,r);return}}we.flags|=t,i.memoizedState=po(1|e,n,s,r)}function am(t,e){return Pa(8390656,8,t,e)}function md(t,e){return Bl(2048,8,t,e)}function S_(t,e){return Bl(4,2,t,e)}function A_(t,e){return Bl(4,4,t,e)}function C_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function R_(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4,4,C_.bind(null,e,t),n)}function gd(){}function k_(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function P_(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function N_(t,e,n){return Ur&21?(Kt(n,e)||(n=Ly(),we.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=n)}function tI(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=Zu.transition;Zu.transition={};try{t(!1),e()}finally{le=n,Zu.transition=r}}function x_(){return Dt().memoizedState}function nI(t,e,n){var r=tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},D_(t))V_(e,n);else if(n=f_(t,e,n,r),n!==null){var i=lt();Wt(n,t,r,i),O_(n,e,r)}}function rI(t,e,n){var r=tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(D_(t))V_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Kt(l,o)){var u=e.interleaved;u===null?(i.next=i,ad(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=f_(t,e,i,r),n!==null&&(i=lt(),Wt(n,t,r,i),O_(n,e,r))}}function D_(t){var e=t.alternate;return t===we||e!==null&&e===we}function V_(t,e){zs=al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kh(t,n)}}var ll={readContext:xt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},iI={readContext:xt,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:xt,useEffect:am,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pa(4194308,4,C_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pa(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nI.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:om,useDebugValue:gd,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=om(!1),e=t[0];return t=tI.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=Xt();if(ye){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ue===null)throw Error(j(349));Ur&30||__(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,am(w_.bind(null,r,s,t),[t]),r.flags|=2048,po(9,v_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xt(),e=Ue.identifierPrefix;if(ye){var n=mn,r=pn;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sI={readContext:xt,useCallback:k_,useContext:xt,useEffect:md,useImperativeHandle:R_,useInsertionEffect:S_,useLayoutEffect:A_,useMemo:P_,useReducer:ec,useRef:I_,useState:function(){return ec(fo)},useDebugValue:gd,useDeferredValue:function(t){var e=Dt();return N_(e,De.memoizedState,t)},useTransition:function(){var t=ec(fo)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:g_,useSyncExternalStore:y_,useId:x_,unstable_isNewReconciler:!1},oI={readContext:xt,useCallback:k_,useContext:xt,useEffect:md,useImperativeHandle:R_,useInsertionEffect:S_,useLayoutEffect:A_,useMemo:P_,useReducer:tc,useRef:I_,useState:function(){return tc(fo)},useDebugValue:gd,useDeferredValue:function(t){var e=Dt();return De===null?e.memoizedState=t:N_(e,De.memoizedState,t)},useTransition:function(){var t=tc(fo)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:g_,useSyncExternalStore:y_,useId:x_,unstable_isNewReconciler:!1};function Mt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $l={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=tr(t),s=_n(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(Wt(e,t,i,r),Ra(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=tr(t),s=_n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(Wt(e,t,i,r),Ra(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=tr(t),i=_n(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zn(t,i,r),e!==null&&(Wt(e,t,r,n),Ra(e,t,r))}};function lm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!so(n,r)||!so(i,s):!0}function L_(t,e,n){var r=!1,i=ur,s=e.contextType;return typeof s=="object"&&s!==null?s=xt(s):(i=mt(e)?jr:tt.current,r=e.contextTypes,s=(r=r!=null)?Vi(t,i):ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$l,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function um(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&$l.enqueueReplaceState(e,e.state,null)}function Yc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ld(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=xt(s):(s=mt(e)?jr:tt.current,i.context=Vi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&$l.enqueueReplaceState(i,i.state,null),sl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function bi(t,e){try{var n="",r=e;do n+=O0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aI=typeof WeakMap=="function"?WeakMap:Map;function M_(t,e,n){n=_n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){cl||(cl=!0,ah=r),Jc(t,e)},n}function b_(t,e,n){n=_n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Jc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jc(t,e),typeof r!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=EI.bind(null,t,e,n),e.then(t,t))}function hm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_n(-1,1),e.tag=2,Zn(n,e,1))),n.lanes|=1),t)}var lI=kn.ReactCurrentOwner,ft=!1;function ot(t,e,n,r){e.child=t===null?d_(e,null,n,r):Li(e,t.child,n,r)}function fm(t,e,n,r,i){n=n.render;var s=e.ref;return Ai(e,i),r=fd(t,e,n,r,s,i),n=pd(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(ye&&n&&td(e),e.flags|=1,ot(t,e,r,i),e.child)}function pm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Sd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,j_(t,e,s,r,i)):(t=Va(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:so,n(o,r)&&t.ref===e.ref)return In(t,e,i)}return e.flags|=1,t=nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function j_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(so(s,r)&&t.ref===e.ref)if(ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ft=!0);else return e.lanes=t.lanes,In(t,e,i)}return Xc(t,e,n,r,i)}function F_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(wi,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(wi,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(wi,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(wi,_t),_t|=r;return ot(t,e,i,n),e.child}function U_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xc(t,e,n,r,i){var s=mt(n)?jr:tt.current;return s=Vi(e,s),Ai(e,i),n=fd(t,e,n,r,s,i),r=pd(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(ye&&r&&td(e),e.flags|=1,ot(t,e,n,i),e.child)}function mm(t,e,n,r,i){if(mt(n)){var s=!0;el(e)}else s=!1;if(Ai(e,i),e.stateNode===null)Na(t,e),L_(e,n,r),Yc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=xt(h):(h=mt(n)?jr:tt.current,h=Vi(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&um(e,o,r,h),Un=!1;var _=e.memoizedState;o.state=_,sl(e,r,o,i),u=e.memoizedState,l!==r||_!==u||pt.current||Un?(typeof f=="function"&&(Qc(e,n,f,r),u=e.memoizedState),(l=Un||lm(e,n,l,r,_,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,p_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Mt(e.type,l),o.props=h,m=e.pendingProps,_=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=xt(u):(u=mt(n)?jr:tt.current,u=Vi(e,u));var C=n.getDerivedStateFromProps;(f=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||_!==u)&&um(e,o,r,u),Un=!1,_=e.memoizedState,o.state=_,sl(e,r,o,i);var x=e.memoizedState;l!==m||_!==x||pt.current||Un?(typeof C=="function"&&(Qc(e,n,C,r),x=e.memoizedState),(h=Un||lm(e,n,h,r,_,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return Zc(t,e,n,r,s,i)}function Zc(t,e,n,r,i,s){U_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&em(e,n,!1),In(t,e,s);r=e.stateNode,lI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Li(e,t.child,null,s),e.child=Li(e,null,l,s)):ot(t,e,l,s),e.memoizedState=r.state,i&&em(e,n,!0),e.child}function z_(t){var e=t.stateNode;e.pendingContext?Zp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zp(t,e.context,!1),ud(t,e.containerInfo)}function gm(t,e,n,r,i){return Oi(),rd(i),e.flags|=256,ot(t,e,n,r),e.child}var eh={dehydrated:null,treeContext:null,retryLane:0};function th(t){return{baseLanes:t,cachePool:null,transitions:null}}function B_(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(_e,i&1),t===null)return Kc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ql(o,r,0,null),t=Lr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=th(n),e.memoizedState=eh,t):yd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return uI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=nr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=nr(l,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?th(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=eh,r}return s=t.child,t=s.sibling,r=nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function yd(t,e){return e=ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function da(t,e,n,r){return r!==null&&rd(r),Li(e,t.child,null,n),t=yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=nc(Error(j(422))),da(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ql({mode:"visible",children:r.children},i,0,null),s=Lr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Li(e,t.child,null,o),e.child.memoizedState=th(o),e.memoizedState=eh,s);if(!(e.mode&1))return da(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=nc(s,r,void 0),da(t,e,o,r)}if(l=(o&t.childLanes)!==0,ft||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Tn(t,i),Wt(r,t,i,-1))}return Id(),r=nc(Error(j(421))),da(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=TI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=Xn(i.nextSibling),wt=e,ye=!0,jt=null,t!==null&&(At[Ct++]=pn,At[Ct++]=mn,At[Ct++]=Fr,pn=t.id,mn=t.overflow,Fr=e),e=yd(e,r.children),e.flags|=4096,e)}function ym(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gc(t.return,e,n)}function rc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function $_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ym(t,n,e);else if(t.tag===19)ym(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ol(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),rc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ol(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}rc(e,!0,n,null,s);break;case"together":rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Na(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function In(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cI(t,e,n){switch(e.tag){case 3:z_(e),Oi();break;case 5:m_(e);break;case 1:mt(e.type)&&el(e);break;case 4:ud(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(rl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?B_(t,e,n):(he(_e,_e.current&1),t=In(t,e,n),t!==null?t.sibling:null);he(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return $_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,F_(t,e,n)}return In(t,e,n)}var W_,nh,H_,q_;W_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nh=function(){};H_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xr(nn.current);var s=null;switch(n){case"input":i=Sc(t,i),r=Sc(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=Rc(t,i),r=Rc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xa)}Pc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Xs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&fe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};q_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ss(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hI(t,e,n){var r=e.pendingProps;switch(nd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return mt(e.type)&&Za(),Ye(e),null;case 3:return r=e.stateNode,Mi(),me(pt),me(tt),hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(ch(jt),jt=null))),nh(t,e),Ye(e),null;case 5:cd(e);var i=xr(co.current);if(n=e.type,t!==null&&e.stateNode!=null)H_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return Ye(e),null}if(t=xr(nn.current),ca(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[en]=e,r[lo]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<xs.length;i++)fe(xs[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":Cp(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":kp(r,s),fe("invalid",r)}Pc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ua(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ua(r.textContent,l,t),i=["children",""+l]):Xs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":ta(r),Rp(r,s,!0);break;case"textarea":ta(r),Pp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[en]=e,t[lo]=r,W_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nc(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<xs.length;i++)fe(xs[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":Cp(t,r),i=Sc(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),fe("invalid",t);break;case"textarea":kp(t,r),i=Rc(t,r),fe("invalid",t);break;default:i=r}Pc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Iy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ey(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zs(t,u):typeof u=="number"&&Zs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&fe("scroll",t):u!=null&&zh(t,s,u,o))}switch(n){case"input":ta(t),Rp(t,r,!1);break;case"textarea":ta(t),Pp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+lr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ei(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ei(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)q_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=xr(co.current),xr(nn.current),ca(e)){if(r=e.stateNode,n=e.memoizedProps,r[en]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:ua(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ua(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=e,e.stateNode=r}return Ye(e),null;case 13:if(me(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&vt!==null&&e.mode&1&&!(e.flags&128))c_(),Oi(),e.flags|=98560,s=!1;else if(s=ca(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[en]=e}else Oi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else jt!==null&&(ch(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Oe===0&&(Oe=3):Id())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return Mi(),nh(t,e),t===null&&oo(e.stateNode.containerInfo),Ye(e),null;case 10:return od(e.type._context),Ye(e),null;case 17:return mt(e.type)&&Za(),Ye(e),null;case 19:if(me(_e),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ss(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ol(t),o!==null){for(e.flags|=128,Ss(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>ji&&(e.flags|=128,r=!0,Ss(s,!1),e.lanes=4194304)}else{if(!r)if(t=ol(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ss(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Ye(e),null}else 2*Re()-s.renderingStartTime>ji&&n!==1073741824&&(e.flags|=128,r=!0,Ss(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=_e.current,he(_e,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return Td(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function dI(t,e){switch(nd(e),e.tag){case 1:return mt(e.type)&&Za(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mi(),me(pt),me(tt),hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cd(e),null;case 13:if(me(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Oi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(_e),null;case 4:return Mi(),null;case 10:return od(e.type._context),null;case 22:case 23:return Td(),null;case 24:return null;default:return null}}var fa=!1,Ze=!1,fI=typeof WeakSet=="function"?WeakSet:Set,$=null;function vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function rh(t,e,n){try{n()}catch(r){Se(t,e,r)}}var _m=!1;function pI(t,e){if(Uc=Qa,t=Jy(),ed(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,_=null;t:for(;;){for(var C;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(C=m.firstChild)!==null;)_=m,m=C;for(;;){if(m===t)break t;if(_===n&&++h===i&&(l=o),_===s&&++f===r&&(u=o),(C=m.nextSibling)!==null)break;m=_,_=m.parentNode}m=C}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zc={focusedElem:t,selectionRange:n},Qa=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var P=x.memoizedProps,O=x.memoizedState,S=e.stateNode,E=S.getSnapshotBeforeUpdate(e.elementType===e.type?P:Mt(e.type,P),O);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){Se(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return x=_m,_m=!1,x}function Bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&rh(e,n,s)}i=i.next}while(i!==r)}}function Wl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ih(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K_(t){var e=t.alternate;e!==null&&(t.alternate=null,K_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[lo],delete e[Wc],delete e[YT],delete e[JT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function G_(t){return t.tag===5||t.tag===3||t.tag===4}function vm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||G_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xa));else if(r!==4&&(t=t.child,t!==null))for(sh(t,e,n),t=t.sibling;t!==null;)sh(t,e,n),t=t.sibling}function oh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(oh(t,e,n),t=t.sibling;t!==null;)oh(t,e,n),t=t.sibling}var Be=null,bt=!1;function bn(t,e,n){for(n=n.child;n!==null;)Q_(t,e,n),n=n.sibling}function Q_(t,e,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:Ze||vi(n,e);case 6:var r=Be,i=bt;Be=null,bn(t,e,n),Be=r,bt=i,Be!==null&&(bt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(bt?(t=Be,n=n.stateNode,t.nodeType===8?Yu(t.parentNode,n):t.nodeType===1&&Yu(t,n),ro(t)):Yu(Be,n.stateNode));break;case 4:r=Be,i=bt,Be=n.stateNode.containerInfo,bt=!0,bn(t,e,n),Be=r,bt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rh(n,e,o),i=i.next}while(i!==r)}bn(t,e,n);break;case 1:if(!Ze&&(vi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}bn(t,e,n);break;case 21:bn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,bn(t,e,n),Ze=r):bn(t,e,n);break;default:bn(t,e,n)}}function wm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fI),e.forEach(function(r){var i=II.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,bt=!1;break e;case 3:Be=l.stateNode.containerInfo,bt=!0;break e;case 4:Be=l.stateNode.containerInfo,bt=!0;break e}l=l.return}if(Be===null)throw Error(j(160));Q_(s,o,i),Be=null,bt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Se(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Y_(e,t),e=e.sibling}function Y_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(e,t),Jt(t),r&4){try{Bs(3,t,t.return),Wl(3,t)}catch(P){Se(t,t.return,P)}try{Bs(5,t,t.return)}catch(P){Se(t,t.return,P)}}break;case 1:Lt(e,t),Jt(t),r&512&&n!==null&&vi(n,n.return);break;case 5:if(Lt(e,t),Jt(t),r&512&&n!==null&&vi(n,n.return),t.flags&32){var i=t.stateNode;try{Zs(i,"")}catch(P){Se(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&_y(i,s),Nc(l,o);var h=Nc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Iy(i,m):f==="dangerouslySetInnerHTML"?Ey(i,m):f==="children"?Zs(i,m):zh(i,f,m,h)}switch(l){case"input":Ac(i,s);break;case"textarea":vy(i,s);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?Ei(i,!!s.multiple,C,!1):_!==!!s.multiple&&(s.defaultValue!=null?Ei(i,!!s.multiple,s.defaultValue,!0):Ei(i,!!s.multiple,s.multiple?[]:"",!1))}i[lo]=s}catch(P){Se(t,t.return,P)}}break;case 6:if(Lt(e,t),Jt(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Se(t,t.return,P)}}break;case 3:if(Lt(e,t),Jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ro(e.containerInfo)}catch(P){Se(t,t.return,P)}break;case 4:Lt(e,t),Jt(t);break;case 13:Lt(e,t),Jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wd=Re())),r&4&&wm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(h=Ze)||f,Lt(e,t),Ze=h):Lt(e,t),Jt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(m=$=f;$!==null;){switch(_=$,C=_.child,_.tag){case 0:case 11:case 14:case 15:Bs(4,_,_.return);break;case 1:vi(_,_.return);var x=_.stateNode;if(typeof x.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(P){Se(r,n,P)}}break;case 5:vi(_,_.return);break;case 22:if(_.memoizedState!==null){Tm(m);continue}}C!==null?(C.return=_,$=C):Tm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ty("display",o))}catch(P){Se(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(P){Se(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Lt(e,t),Jt(t),r&4&&wm(t);break;case 21:break;default:Lt(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(G_(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zs(i,""),r.flags&=-33);var s=vm(t);oh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=vm(t);sh(t,l,o);break;default:throw Error(j(161))}}catch(u){Se(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mI(t,e,n){$=t,J_(t)}function J_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ze;l=fa;var h=Ze;if(fa=o,(Ze=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Im(i):u!==null?(u.return=o,$=u):Im(i);for(;s!==null;)$=s,J_(s),s=s.sibling;$=i,fa=l,Ze=h}Em(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Em(t)}}function Em(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||Wl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&ro(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Ze||e.flags&512&&ih(e)}catch(_){Se(e,e.return,_)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Tm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Im(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wl(4,e)}catch(u){Se(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Se(e,i,u)}}var s=e.return;try{ih(e)}catch(u){Se(e,s,u)}break;case 5:var o=e.return;try{ih(e)}catch(u){Se(e,o,u)}}}catch(u){Se(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var gI=Math.ceil,ul=kn.ReactCurrentDispatcher,_d=kn.ReactCurrentOwner,Nt=kn.ReactCurrentBatchConfig,se=0,Ue=null,Pe=null,He=0,_t=0,wi=yr(0),Oe=0,mo=null,zr=0,Hl=0,vd=0,$s=null,dt=null,wd=0,ji=1/0,hn=null,cl=!1,ah=null,er=null,pa=!1,Kn=null,hl=0,Ws=0,lh=null,xa=-1,Da=0;function lt(){return se&6?Re():xa!==-1?xa:xa=Re()}function tr(t){return t.mode&1?se&2&&He!==0?He&-He:ZT.transition!==null?(Da===0&&(Da=Ly()),Da):(t=le,t!==0||(t=window.event,t=t===void 0?16:By(t.type)),t):1}function Wt(t,e,n,r){if(50<Ws)throw Ws=0,lh=null,Error(j(185));Ro(t,n,r),(!(se&2)||t!==Ue)&&(t===Ue&&(!(se&2)&&(Hl|=n),Oe===4&&Bn(t,He)),gt(t,r),n===1&&se===0&&!(e.mode&1)&&(ji=Re()+500,zl&&_r()))}function gt(t,e){var n=t.callbackNode;Z0(t,e);var r=Ga(t,t===Ue?He:0);if(r===0)n!==null&&Dp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Dp(n),e===1)t.tag===0?XT(Sm.bind(null,t)):a_(Sm.bind(null,t)),GT(function(){!(se&6)&&_r()}),n=null;else{switch(My(r)){case 1:n=qh;break;case 4:n=Vy;break;case 16:n=Ka;break;case 536870912:n=Oy;break;default:n=Ka}n=sv(n,X_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function X_(t,e){if(xa=-1,Da=0,se&6)throw Error(j(327));var n=t.callbackNode;if(Ci()&&t.callbackNode!==n)return null;var r=Ga(t,t===Ue?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=dl(t,r);else{e=r;var i=se;se|=2;var s=ev();(Ue!==t||He!==e)&&(hn=null,ji=Re()+500,Or(t,e));do try{vI();break}catch(l){Z_(t,l)}while(!0);sd(),ul.current=s,se=i,Pe!==null?e=0:(Ue=null,He=0,e=Oe)}if(e!==0){if(e===2&&(i=Lc(t),i!==0&&(r=i,e=uh(t,i))),e===1)throw n=mo,Or(t,0),Bn(t,r),gt(t,Re()),n;if(e===6)Bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!yI(i)&&(e=dl(t,r),e===2&&(s=Lc(t),s!==0&&(r=s,e=uh(t,s))),e===1))throw n=mo,Or(t,0),Bn(t,r),gt(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Rr(t,dt,hn);break;case 3:if(Bn(t,r),(r&130023424)===r&&(e=wd+500-Re(),10<e)){if(Ga(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$c(Rr.bind(null,t,dt,hn),e);break}Rr(t,dt,hn);break;case 4:if(Bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gI(r/1960))-r,10<r){t.timeoutHandle=$c(Rr.bind(null,t,dt,hn),r);break}Rr(t,dt,hn);break;case 5:Rr(t,dt,hn);break;default:throw Error(j(329))}}}return gt(t,Re()),t.callbackNode===n?X_.bind(null,t):null}function uh(t,e){var n=$s;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=dl(t,e),t!==2&&(e=dt,dt=n,e!==null&&ch(e)),t}function ch(t){dt===null?dt=t:dt.push.apply(dt,t)}function yI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e){for(e&=~vd,e&=~Hl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$t(e),r=1<<n;t[n]=-1,e&=~r}}function Sm(t){if(se&6)throw Error(j(327));Ci();var e=Ga(t,0);if(!(e&1))return gt(t,Re()),null;var n=dl(t,e);if(t.tag!==0&&n===2){var r=Lc(t);r!==0&&(e=r,n=uh(t,r))}if(n===1)throw n=mo,Or(t,0),Bn(t,e),gt(t,Re()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,dt,hn),gt(t,Re()),null}function Ed(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(ji=Re()+500,zl&&_r())}}function Br(t){Kn!==null&&Kn.tag===0&&!(se&6)&&Ci();var e=se;se|=1;var n=Nt.transition,r=le;try{if(Nt.transition=null,le=1,t)return t()}finally{le=r,Nt.transition=n,se=e,!(se&6)&&_r()}}function Td(){_t=wi.current,me(wi)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,KT(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(nd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Za();break;case 3:Mi(),me(pt),me(tt),hd();break;case 5:cd(r);break;case 4:Mi();break;case 13:me(_e);break;case 19:me(_e);break;case 10:od(r.type._context);break;case 22:case 23:Td()}n=n.return}if(Ue=t,Pe=t=nr(t.current,null),He=_t=e,Oe=0,mo=null,vd=Hl=zr=0,dt=$s=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nr=null}return t}function Z_(t,e){do{var n=Pe;try{if(sd(),ka.current=ll,al){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}al=!1}if(Ur=0,je=De=we=null,zs=!1,ho=0,_d.current=null,n===null||n.return===null){Oe=1,mo=e,Pe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=He,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var _=f.alternate;_?(f.updateQueue=_.updateQueue,f.memoizedState=_.memoizedState,f.lanes=_.lanes):(f.updateQueue=null,f.memoizedState=null)}var C=hm(o);if(C!==null){C.flags&=-257,dm(C,o,l,s,e),C.mode&1&&cm(s,h,e),e=C,u=h;var x=e.updateQueue;if(x===null){var P=new Set;P.add(u),e.updateQueue=P}else x.add(u);break e}else{if(!(e&1)){cm(s,h,e),Id();break e}u=Error(j(426))}}else if(ye&&l.mode&1){var O=hm(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),dm(O,o,l,s,e),rd(bi(u,l));break e}}s=u=bi(u,l),Oe!==4&&(Oe=2),$s===null?$s=[s]:$s.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=M_(s,u,e);im(s,S);break e;case 1:l=u;var E=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(er===null||!er.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=b_(s,l,e);im(s,D);break e}}s=s.return}while(s!==null)}nv(n)}catch(M){e=M,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function ev(){var t=ul.current;return ul.current=ll,t===null?ll:t}function Id(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Ue===null||!(zr&268435455)&&!(Hl&268435455)||Bn(Ue,He)}function dl(t,e){var n=se;se|=2;var r=ev();(Ue!==t||He!==e)&&(hn=null,Or(t,e));do try{_I();break}catch(i){Z_(t,i)}while(!0);if(sd(),se=n,ul.current=r,Pe!==null)throw Error(j(261));return Ue=null,He=0,Oe}function _I(){for(;Pe!==null;)tv(Pe)}function vI(){for(;Pe!==null&&!W0();)tv(Pe)}function tv(t){var e=iv(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?nv(t):Pe=e,_d.current=null}function nv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dI(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Pe=null;return}}else if(n=hI(n,e,_t),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);Oe===0&&(Oe=5)}function Rr(t,e,n){var r=le,i=Nt.transition;try{Nt.transition=null,le=1,wI(t,e,n,r)}finally{Nt.transition=i,le=r}return null}function wI(t,e,n,r){do Ci();while(Kn!==null);if(se&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(eT(t,s),t===Ue&&(Pe=Ue=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pa||(pa=!0,sv(Ka,function(){return Ci(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nt.transition,Nt.transition=null;var o=le;le=1;var l=se;se|=4,_d.current=null,pI(t,n),Y_(n,t),UT(zc),Qa=!!Uc,zc=Uc=null,t.current=n,mI(n),H0(),se=l,le=o,Nt.transition=s}else t.current=n;if(pa&&(pa=!1,Kn=t,hl=i),s=t.pendingLanes,s===0&&(er=null),G0(n.stateNode),gt(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(cl)throw cl=!1,t=ah,ah=null,t;return hl&1&&t.tag!==0&&Ci(),s=t.pendingLanes,s&1?t===lh?Ws++:(Ws=0,lh=t):Ws=0,_r(),null}function Ci(){if(Kn!==null){var t=My(hl),e=Nt.transition,n=le;try{if(Nt.transition=null,le=16>t?16:t,Kn===null)var r=!1;else{if(t=Kn,Kn=null,hl=0,se&6)throw Error(j(331));var i=se;for(se|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Bs(8,f,s)}var m=f.child;if(m!==null)m.return=f,$=m;else for(;$!==null;){f=$;var _=f.sibling,C=f.return;if(K_(f),f===h){$=null;break}if(_!==null){_.return=C,$=_;break}$=C}}}var x=s.alternate;if(x!==null){var P=x.child;if(P!==null){x.child=null;do{var O=P.sibling;P.sibling=null,P=O}while(P!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bs(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}var E=t.current;for($=E;$!==null;){o=$;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,$=R;else e:for(o=E;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Wl(9,l)}}catch(M){Se(l,l.return,M)}if(l===o){$=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,$=D;break e}$=l.return}}if(se=i,_r(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Ml,t)}catch{}r=!0}return r}finally{le=n,Nt.transition=e}}return!1}function Am(t,e,n){e=bi(n,e),e=M_(t,e,1),t=Zn(t,e,1),e=lt(),t!==null&&(Ro(t,1,e),gt(t,e))}function Se(t,e,n){if(t.tag===3)Am(t,t,n);else for(;e!==null;){if(e.tag===3){Am(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){t=bi(n,t),t=b_(e,t,1),e=Zn(e,t,1),t=lt(),e!==null&&(Ro(e,1,t),gt(e,t));break}}e=e.return}}function EI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(He&n)===n&&(Oe===4||Oe===3&&(He&130023424)===He&&500>Re()-wd?Or(t,0):vd|=n),gt(t,e)}function rv(t,e){e===0&&(t.mode&1?(e=ia,ia<<=1,!(ia&130023424)&&(ia=4194304)):e=1);var n=lt();t=Tn(t,e),t!==null&&(Ro(t,e,n),gt(t,n))}function TI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rv(t,n)}function II(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),rv(t,n)}var iv;iv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ft=!1,cI(t,e,n);ft=!!(t.flags&131072)}else ft=!1,ye&&e.flags&1048576&&l_(e,nl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Na(t,e),t=e.pendingProps;var i=Vi(e,tt.current);Ai(e,n),i=fd(null,e,r,t,i,n);var s=pd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(s=!0,el(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ld(e),i.updater=$l,e.stateNode=i,i._reactInternals=e,Yc(e,r,t,n),e=Zc(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&td(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Na(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=AI(r),t=Mt(r,t),i){case 0:e=Xc(null,e,r,t,n);break e;case 1:e=mm(null,e,r,t,n);break e;case 11:e=fm(null,e,r,t,n);break e;case 14:e=pm(null,e,r,Mt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Xc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),mm(t,e,r,i,n);case 3:e:{if(z_(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,p_(t,e),sl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=bi(Error(j(423)),e),e=gm(t,e,r,n,i);break e}else if(r!==i){i=bi(Error(j(424)),e),e=gm(t,e,r,n,i);break e}else for(vt=Xn(e.stateNode.containerInfo.firstChild),wt=e,ye=!0,jt=null,n=d_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Oi(),r===i){e=In(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return m_(e),t===null&&Kc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Bc(r,i)?o=null:s!==null&&Bc(r,s)&&(e.flags|=32),U_(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&Kc(e),null;case 13:return B_(t,e,n);case 4:return ud(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Li(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),fm(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(rl,r._currentValue),r._currentValue=o,s!==null)if(Kt(s.value,o)){if(s.children===i.children&&!pt.current){e=In(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=_n(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Gc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Gc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ai(e,n),i=xt(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),pm(t,e,r,i,n);case 15:return j_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Na(t,e),e.tag=1,mt(r)?(t=!0,el(e)):t=!1,Ai(e,n),L_(e,r,i),Yc(e,r,i,n),Zc(null,e,r,!0,t,n);case 19:return $_(t,e,n);case 22:return F_(t,e,n)}throw Error(j(156,e.tag))};function sv(t,e){return Dy(t,e)}function SI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,n,r){return new SI(t,e,n,r)}function Sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function AI(t){if(typeof t=="function")return Sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$h)return 11;if(t===Wh)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Va(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Sd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ci:return Lr(n.children,i,s,e);case Bh:o=8,i|=8;break;case wc:return t=Pt(12,n,e,i|2),t.elementType=wc,t.lanes=s,t;case Ec:return t=Pt(13,n,e,i),t.elementType=Ec,t.lanes=s,t;case Tc:return t=Pt(19,n,e,i),t.elementType=Tc,t.lanes=s,t;case my:return ql(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fy:o=10;break e;case py:o=9;break e;case $h:o=11;break e;case Wh:o=14;break e;case Fn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Lr(t,e,n,r){return t=Pt(7,t,r,e),t.lanes=n,t}function ql(t,e,n,r){return t=Pt(22,t,r,e),t.elementType=my,t.lanes=n,t.stateNode={isHidden:!1},t}function ic(t,e,n){return t=Pt(6,t,null,e),t.lanes=n,t}function sc(t,e,n){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fu(0),this.expirationTimes=Fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ad(t,e,n,r,i,s,o,l,u){return t=new CI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ld(s),t}function RI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ov(t){if(!t)return ur;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(mt(n))return o_(t,n,e)}return e}function av(t,e,n,r,i,s,o,l,u){return t=Ad(n,r,!0,t,i,s,o,l,u),t.context=ov(null),n=t.current,r=lt(),i=tr(n),s=_n(r,i),s.callback=e??null,Zn(n,s,i),t.current.lanes=i,Ro(t,i,r),gt(t,r),t}function Kl(t,e,n,r){var i=e.current,s=lt(),o=tr(i);return n=ov(n),e.context===null?e.context=n:e.pendingContext=n,e=_n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zn(i,e,o),t!==null&&(Wt(t,i,o,s),Ra(t,i,o)),o}function fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cd(t,e){Cm(t,e),(t=t.alternate)&&Cm(t,e)}function kI(){return null}var lv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rd(t){this._internalRoot=t}Gl.prototype.render=Rd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Kl(t,e,null,null)};Gl.prototype.unmount=Rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){Kl(null,t,null,null)}),e[En]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zn.length&&e!==0&&e<zn[n].priority;n++);zn.splice(n,0,t),n===0&&zy(t)}};function kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rm(){}function PI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=fl(o);s.call(h)}}var o=av(e,r,t,0,null,!1,!1,"",Rm);return t._reactRootContainer=o,t[En]=o.current,oo(t.nodeType===8?t.parentNode:t),Br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=fl(u);l.call(h)}}var u=Ad(t,0,!1,null,null,!1,!1,"",Rm);return t._reactRootContainer=u,t[En]=u.current,oo(t.nodeType===8?t.parentNode:t),Br(function(){Kl(e,u,n,r)}),u}function Yl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=fl(o);l.call(u)}}Kl(e,o,t,i)}else o=PI(n,e,t,i,r);return fl(o)}by=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ns(e.pendingLanes);n!==0&&(Kh(e,n|1),gt(e,Re()),!(se&6)&&(ji=Re()+500,_r()))}break;case 13:Br(function(){var r=Tn(t,1);if(r!==null){var i=lt();Wt(r,t,1,i)}}),Cd(t,1)}};Gh=function(t){if(t.tag===13){var e=Tn(t,134217728);if(e!==null){var n=lt();Wt(e,t,134217728,n)}Cd(t,134217728)}};jy=function(t){if(t.tag===13){var e=tr(t),n=Tn(t,e);if(n!==null){var r=lt();Wt(n,t,e,r)}Cd(t,e)}};Fy=function(){return le};Uy=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};Dc=function(t,e,n){switch(e){case"input":if(Ac(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ul(r);if(!i)throw Error(j(90));yy(r),Ac(r,i)}}}break;case"textarea":vy(t,n);break;case"select":e=n.value,e!=null&&Ei(t,!!n.multiple,e,!1)}};Cy=Ed;Ry=Br;var NI={usingClientEntryPoint:!1,Events:[Po,pi,Ul,Sy,Ay,Ed]},As={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xI={bundleType:As.bundleType,version:As.version,rendererPackageName:As.rendererPackageName,rendererConfig:As.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ny(t),t===null?null:t.stateNode},findFiberByHostInstance:As.findFiberByHostInstance||kI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{Ml=ma.inject(xI),tn=ma}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NI;Tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(e))throw Error(j(200));return RI(t,e,null,n)};Tt.createRoot=function(t,e){if(!kd(t))throw Error(j(299));var n=!1,r="",i=lv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ad(t,1,!1,null,null,n,!1,r,i),t[En]=e.current,oo(t.nodeType===8?t.parentNode:t),new Rd(e)};Tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Ny(e),t=t===null?null:t.stateNode,t};Tt.flushSync=function(t){return Br(t)};Tt.hydrate=function(t,e,n){if(!Ql(e))throw Error(j(200));return Yl(null,t,e,!0,n)};Tt.hydrateRoot=function(t,e,n){if(!kd(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=lv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=av(e,null,t,1,n??null,i,!1,s,o),t[En]=e.current,oo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Gl(e)};Tt.render=function(t,e,n){if(!Ql(e))throw Error(j(200));return Yl(null,t,e,!1,n)};Tt.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(j(40));return t._reactRootContainer?(Br(function(){Yl(null,null,t,!1,function(){t._reactRootContainer=null,t[En]=null})}),!0):!1};Tt.unstable_batchedUpdates=Ed;Tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ql(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Yl(t,e,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function uv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uv)}catch(t){console.error(t)}}uv(),uy.exports=Tt;var DI=uy.exports,cv,km=DI;cv=km.createRoot,km.hydrateRoot;const ce={API:"ming_api",HISTORY:"ming_hist",SAVED:"ming_saved",QUIZ_HIST:"ming_quiz_hist",FREQ:"ming_freq",WOTD:"ming_wotd"},at=(t,e=null)=>{try{const n=localStorage.getItem(t);return n?JSON.parse(n):e}catch{return e}},Ft=(t,e)=>{try{localStorage.setItem(t,JSON.stringify(e))}catch{}},VI=()=>{};var Pm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},OI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},dv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let _=(l&15)<<2|h>>6,C=h&63;u||(C=64,o||(_=64)),r.push(n[f],n[m],n[_],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new LI;const _=s<<2|l>>4;if(r.push(_),h!==64){const C=l<<4&240|h>>2;if(r.push(C),m!==64){const x=h<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MI=function(t){const e=hv(t);return dv.encodeByteArray(e,!0)},pl=function(t){return MI(t).replace(/\./g,"")},fv=function(t){try{return dv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=()=>bI().__FIREBASE_DEFAULTS__,FI=()=>{if(typeof process>"u"||typeof Pm>"u")return;const t=Pm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},UI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fv(t[1]);return e&&JSON.parse(e)},Jl=()=>{try{return VI()||jI()||FI()||UI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pv=t=>{var e,n;return(n=(e=Jl())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},zI=t=>{const e=pv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mv=()=>{var t;return(t=Jl())==null?void 0:t.config},gv=t=>{var e;return(e=Jl())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yv(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[pl(JSON.stringify(n)),pl(JSON.stringify(o)),""].join(".")}const Hs={};function WI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Hs))Hs[e]?t.emulator.push(e):t.prod.push(e);return t}function HI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Nm=!1;function _v(t,e){if(typeof window>"u"||typeof document>"u"||!Qi(window.location.host)||Hs[t]===e||Hs[t]||Nm)return;Hs[t]=e;function n(_){return`__firebase__banner__${_}`}const r="__firebase__banner",s=WI().prod.length>0;function o(){const _=document.getElementById(r);_&&_.remove()}function l(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function u(_,C){_.setAttribute("width","24"),_.setAttribute("id",C),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Nm=!0,o()},_}function f(_,C){_.setAttribute("id",C),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function m(){const _=HI(r),C=n("text"),x=document.getElementById(C)||document.createElement("span"),P=n("learnmore"),O=document.getElementById(P)||document.createElement("a"),S=n("preprendIcon"),E=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const R=_.element;l(R),f(O,P);const D=h();u(E,S),R.append(E,x,O,D),document.body.appendChild(R)}s?(x.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(E.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function KI(){var e;const t=(e=Jl())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function YI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JI(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XI(){return!KI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ZI(){try{return typeof indexedDB=="object"}catch{return!1}}function eS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tS,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xo.prototype.create)}}class xo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?nS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Pn(i,l,r)}}function nS(t,e){return t.replace(rS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rS=/\{\$([^}]+)}/g;function iS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xm(s)&&xm(o)){if(!$r(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sS(t,e){const n=new oS(t,e);return n.subscribe.bind(n)}class oS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=oc),i.error===void 0&&(i.error=oc),i.complete===void 0&&(i.complete=oc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t){return t&&t._delegate?t._delegate:t}class Wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new BI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cS(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uS(t){return t===kr?void 0:t}function cS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const dS={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},fS=te.INFO,pS={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},mS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=pS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pd{constructor(e){this.name=e,this._logLevel=fS,this._logHandler=mS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const gS=(t,e)=>e.some(n=>t instanceof n);let Dm,Vm;function yS(){return Dm||(Dm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _S(){return Vm||(Vm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vv=new WeakMap,hh=new WeakMap,wv=new WeakMap,ac=new WeakMap,Nd=new WeakMap;function vS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(rr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vv.set(n,t)}).catch(()=>{}),Nd.set(e,t),e}function wS(t){if(hh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hh.set(t,e)}let dh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ES(t){dh=t(dh)}function TS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lc(this),e,...n);return wv.set(r,e.sort?e.sort():[e]),rr(r)}:_S().includes(t)?function(...e){return t.apply(lc(this),e),rr(vv.get(this))}:function(...e){return rr(t.apply(lc(this),e))}}function IS(t){return typeof t=="function"?TS(t):(t instanceof IDBTransaction&&wS(t),gS(t,yS())?new Proxy(t,dh):t)}function rr(t){if(t instanceof IDBRequest)return vS(t);if(ac.has(t))return ac.get(t);const e=IS(t);return e!==t&&(ac.set(t,e),Nd.set(e,t)),e}const lc=t=>Nd.get(t);function SS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=rr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(rr(o.result),u.oldVersion,u.newVersion,rr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const AS=["get","getKey","getAll","getAllKeys","count"],CS=["put","add","delete","clear"],uc=new Map;function Om(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uc.get(e))return uc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=CS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||AS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return uc.set(e,s),s}ES(t=>({...t,get:(e,n,r)=>Om(e,n)||t.get(e,n,r),has:(e,n)=>!!Om(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fh="@firebase/app",Lm="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new Pd("@firebase/app"),PS="@firebase/app-compat",NS="@firebase/analytics-compat",xS="@firebase/analytics",DS="@firebase/app-check-compat",VS="@firebase/app-check",OS="@firebase/auth",LS="@firebase/auth-compat",MS="@firebase/database",bS="@firebase/data-connect",jS="@firebase/database-compat",FS="@firebase/functions",US="@firebase/functions-compat",zS="@firebase/installations",BS="@firebase/installations-compat",$S="@firebase/messaging",WS="@firebase/messaging-compat",HS="@firebase/performance",qS="@firebase/performance-compat",KS="@firebase/remote-config",GS="@firebase/remote-config-compat",QS="@firebase/storage",YS="@firebase/storage-compat",JS="@firebase/firestore",XS="@firebase/ai",ZS="@firebase/firestore-compat",e1="firebase",t1="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="[DEFAULT]",n1={[fh]:"fire-core",[PS]:"fire-core-compat",[xS]:"fire-analytics",[NS]:"fire-analytics-compat",[VS]:"fire-app-check",[DS]:"fire-app-check-compat",[OS]:"fire-auth",[LS]:"fire-auth-compat",[MS]:"fire-rtdb",[bS]:"fire-data-connect",[jS]:"fire-rtdb-compat",[FS]:"fire-fn",[US]:"fire-fn-compat",[zS]:"fire-iid",[BS]:"fire-iid-compat",[$S]:"fire-fcm",[WS]:"fire-fcm-compat",[HS]:"fire-perf",[qS]:"fire-perf-compat",[KS]:"fire-rc",[GS]:"fire-rc-compat",[QS]:"fire-gcs",[YS]:"fire-gcs-compat",[JS]:"fire-fst",[ZS]:"fire-fst-compat",[XS]:"fire-vertex","fire-js":"fire-js",[e1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Map,r1=new Map,mh=new Map;function Mm(t,e){try{t.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fi(t){const e=t.name;if(mh.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;mh.set(e,t);for(const n of ml.values())Mm(n,t);for(const n of r1.values())Mm(n,t);return!0}function xd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ut(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new xo("app","Firebase",i1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=t1;function Ev(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ph,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ir.create("bad-app-name",{appName:String(i)});if(n||(n=mv()),!n)throw ir.create("no-options");const s=ml.get(i);if(s){if($r(n,s.options)&&$r(r,s.config))return s;throw ir.create("duplicate-app",{appName:i})}const o=new hS(i);for(const u of mh.values())o.addComponent(u);const l=new s1(n,r,o);return ml.set(i,l),l}function Tv(t=ph){const e=ml.get(t);if(!e&&t===ph&&mv())return Ev();if(!e)throw ir.create("no-app",{appName:t});return e}function sr(t,e,n){let r=n1[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(o.join(" "));return}Fi(new Wr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1="firebase-heartbeat-database",a1=1,go="firebase-heartbeat-store";let cc=null;function Iv(){return cc||(cc=SS(o1,a1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(go)}catch(n){console.warn(n)}}}}).catch(t=>{throw ir.create("idb-open",{originalErrorMessage:t.message})})),cc}async function l1(t){try{const n=(await Iv()).transaction(go),r=await n.objectStore(go).get(Sv(t));return await n.done,r}catch(e){if(e instanceof Pn)Sn.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function bm(t,e){try{const r=(await Iv()).transaction(go,"readwrite");await r.objectStore(go).put(e,Sv(t)),await r.done}catch(n){if(n instanceof Pn)Sn.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(r.message)}}}function Sv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=1024,c1=30;class h1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new f1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>c1){const o=p1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jm(),{heartbeatsToSend:r,unsentEntries:i}=d1(this._heartbeatsCache.heartbeats),s=pl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Sn.warn(n),""}}}function jm(){return new Date().toISOString().substring(0,10)}function d1(t,e=u1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class f1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ZI()?eS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await l1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Fm(t){return pl(JSON.stringify({version:2,heartbeats:t})).length}function p1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t){Fi(new Wr("platform-logger",e=>new RS(e),"PRIVATE")),Fi(new Wr("heartbeat",e=>new h1(e),"PRIVATE")),sr(fh,Lm,t),sr(fh,Lm,"esm2020"),sr("fire-js","")}m1("");var g1="firebase",y1="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sr(g1,y1,"app");function Av(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _1=Av,Cv=new xo("auth","Firebase",Av());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=new Pd("@firebase/auth");function v1(t,...e){gl.logLevel<=te.WARN&&gl.warn(`Auth (${Yi}): ${t}`,...e)}function Oa(t,...e){gl.logLevel<=te.ERROR&&gl.error(`Auth (${Yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,...e){throw Vd(t,...e)}function Ht(t,...e){return Vd(t,...e)}function Dd(t,e,n){const r={..._1(),[e]:n};return new xo("auth","Firebase",r).create(e,{appName:t.name})}function Mr(t){return Dd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function w1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ln(t,"argument-error"),Dd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Cv.create(t,...e)}function K(t,e,...n){if(!t)throw Vd(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oa(e),new Error(e)}function An(t,e){t||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function E1(){return Um()==="http:"||Um()==="https:"}function Um(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E1()||QI()||"connection"in navigator)?navigator.onLine:!0}function I1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=qI()||YI()}get(){return T1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],C1=new Vo(3e4,6e4);function Ld(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ji(t,e,n,r,i={}){return kv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Do({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return GI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Qi(t.emulatorConfig.host)&&(h.credentials="include"),Rv.fetch()(await Pv(t,t.config.apiHost,n,l),h)})}async function kv(t,e,n){t._canInitEmulator=!1;const r={...S1,...e};try{const i=new k1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ga(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ga(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ga(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Dd(t,f,h);ln(t,f)}}catch(i){if(i instanceof Pn)throw i;ln(t,"network-request-failed",{message:String(i)})}}async function R1(t,e,n,r,i={}){const s=await Ji(t,e,n,r,i);return"mfaPendingCredential"in s&&ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Pv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Od(t.config,i):`${t.config.apiScheme}://${i}`;return A1.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class k1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),C1.get())})}}function ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ht(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(t,e){return Ji(t,"POST","/v1/accounts:delete",e)}async function yl(t,e){return Ji(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function N1(t,e=!1){const n=Vt(t),r=await n.getIdToken(e),i=Md(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qs(hc(i.auth_time)),issuedAtTime:qs(hc(i.iat)),expirationTime:qs(hc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hc(t){return Number(t)*1e3}function Md(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oa("JWT malformed, contained fewer than 3 sections"),null;try{const i=fv(n);return i?JSON.parse(i):(Oa("Failed to decode base64 JWT payload"),null)}catch(i){return Oa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zm(t){const e=Md(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&x1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function x1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qs(this.lastLoginAt),this.creationTime=qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(t){var m;const e=t.auth,n=await t.getIdToken(),r=await yo(t,yl(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?Nv(i.providerUserInfo):[],o=O1(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new yh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function V1(t){const e=Vt(t);await _l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function O1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Nv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(t,e){const n=await kv(t,{},async()=>{const r=Do({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Pv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Qi(t.emulatorConfig.host)&&(u.credentials="include"),Rv.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function M1(t,e){return Ji(t,"POST","/v2/accounts:revokeToken",Ld(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=zm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await L1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ri;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ri,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new D1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await yo(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return N1(this,e)}reload(){return V1(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _l(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(Mr(this.auth));const e=await this.getIdToken();return await yo(this,P1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:_,isAnonymous:C,providerData:x,stsTokenManager:P}=n;K(m&&P,e,"internal-error");const O=Ri.fromJSON(this.name,P);K(typeof m=="string",e,"internal-error"),jn(r,e.name),jn(i,e.name),K(typeof _=="boolean",e,"internal-error"),K(typeof C=="boolean",e,"internal-error"),jn(s,e.name),jn(o,e.name),jn(l,e.name),jn(u,e.name),jn(h,e.name),jn(f,e.name);const S=new zt({uid:m,auth:e,email:i,emailVerified:_,displayName:r,isAnonymous:C,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:O,createdAt:h,lastLoginAt:f});return x&&Array.isArray(x)&&(S.providerData=x.map(E=>({...E}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ri;i.updateFromServerResponse(n);const s=new zt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _l(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Nv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ri;l.updateFromIdToken(r);const u=new zt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=new Map;function yn(t){An(t instanceof Function,"Expected a class definition");let e=Bm.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xv.type="NONE";const $m=xv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t,e,n){return`firebase:${t}:${e}:${n}`}class ki{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=La(this.userKey,i.apiKey,s),this.fullPersistenceKey=La("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await yl(this.auth,{idToken:e}).catch(()=>{});return n?zt._fromGetAccountInfoResponse(this.auth,n,e):null}return zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ki(yn($m),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||yn($m);const o=La(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const _=await yl(e,{idToken:f}).catch(()=>{});if(!_)break;m=await zt._fromGetAccountInfoResponse(e,_,f)}else m=zt._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ki(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new ki(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bv(e))return"Blackberry";if(jv(e))return"Webos";if(Vv(e))return"Safari";if((e.includes("chrome/")||Ov(e))&&!e.includes("edge/"))return"Chrome";if(Mv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dv(t=nt()){return/firefox\//i.test(t)}function Vv(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ov(t=nt()){return/crios\//i.test(t)}function Lv(t=nt()){return/iemobile/i.test(t)}function Mv(t=nt()){return/android/i.test(t)}function bv(t=nt()){return/blackberry/i.test(t)}function jv(t=nt()){return/webos/i.test(t)}function bd(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function b1(t=nt()){var e;return bd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function j1(){return JI()&&document.documentMode===10}function Fv(t=nt()){return bd(t)||Mv(t)||jv(t)||bv(t)||/windows phone/i.test(t)||Lv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t,e=[]){let n;switch(t){case"Browser":n=Wm(nt());break;case"Worker":n=`${Wm(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(t,e={}){return Ji(t,"GET","/v2/passwordPolicy",Ld(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=6;class B1{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??z1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hm(this),this.idTokenSubscription=new Hm(this),this.beforeStateQueue=new F1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ki.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yl(this,{idToken:e}),r=await zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(Mr(this));const n=e?Vt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(Mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(Mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await U1(this),n=new B1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await M1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await ki.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&v1(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Xl(t){return Vt(t)}class Hm{constructor(e){this.auth=e,this.observer=null,this.addObserver=sS(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function W1(t){jd=t}function H1(t){return jd.loadJS(t)}function q1(){return jd.gapiScript}function K1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(t,e){const n=xd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($r(s,e??{}))return i;ln(i,"already-initialized")}return n.initialize({options:e})}function Q1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Y1(t,e,n){const r=Xl(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=zv(e),{host:o,port:l}=J1(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K($r(h,r.config.emulator)&&$r(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Qi(o)?(yv(`${s}//${o}${u}`),_v("Auth",!0)):X1()}function zv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function J1(t){const e=zv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qm(o)}}}function qm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function X1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t,e){return R1(t,"POST","/v1/accounts:signInWithIdp",Ld(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1="http://localhost";class Hr extends Bv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Hr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pi(e,n)}buildRequest(){const e={requestUri:Z1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Do(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends Fd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Oo{constructor(){super("facebook.com")}static credential(e){return Hr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Oo{constructor(){super("github.com")}static credential(e){return Hr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Oo{constructor(){super("twitter.com")}static credential(e,n){return Hr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await zt._fromIdTokenResponse(e,r,i),o=Km(r);return new Ui({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Km(r);return new Ui({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Km(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends Pn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new vl(e,n,r,i)}}function $v(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(t,s,e,r):s})}async function eA(t,e,n=!1){const r=await yo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ui._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(t,e,n=!1){const{auth:r}=t;if(Ut(r.app))return Promise.reject(Mr(r));const i="reauthenticate";try{const s=await yo(t,$v(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Md(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Ui._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(t,e,n=!1){if(Ut(t.app))return Promise.reject(Mr(t));const r="signIn",i=await $v(t,r,e),s=await Ui._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function rA(t,e,n,r){return Vt(t).onIdTokenChanged(e,n,r)}function iA(t,e,n){return Vt(t).beforeAuthStateChanged(e,n)}function sA(t,e,n,r){return Vt(t).onAuthStateChanged(e,n,r)}function oA(t){return Vt(t).signOut()}const wl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wl,"1"),this.storage.removeItem(wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=1e3,lA=10;class Hv extends Wv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);j1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hv.type="LOCAL";const uA=Hv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv extends Wv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qv.type="SESSION";const Kv=qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Zl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await cA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Ud("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(_.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function dA(t){rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function fA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function mA(){return Gv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="firebaseLocalStorageDb",gA=1,El="firebaseLocalStorage",Yv="fbase_key";class Lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function eu(t,e){return t.transaction([El],e?"readwrite":"readonly").objectStore(El)}function yA(){const t=indexedDB.deleteDatabase(Qv);return new Lo(t).toPromise()}function _h(){const t=indexedDB.open(Qv,gA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(El,{keyPath:Yv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(El)?e(r):(r.close(),await yA(),e(await _h()))})})}async function Gm(t,e,n){const r=eu(t,!0).put({[Yv]:e,value:n});return new Lo(r).toPromise()}async function _A(t,e){const n=eu(t,!1).get(e),r=await new Lo(n).toPromise();return r===void 0?null:r.value}function Qm(t,e){const n=eu(t,!0).delete(e);return new Lo(n).toPromise()}const vA=800,wA=3;class Jv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _h(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zl._getInstance(mA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await fA(),!this.activeServiceWorker)return;this.sender=new hA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _h();return await Gm(e,wl,"1"),await Qm(e,wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_A(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=eu(i,!1).getAll();return new Lo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jv.type="LOCAL";const EA=Jv;new Vo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(t,e){return e?yn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd extends Bv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TA(t){return nA(t.auth,new zd(t),t.bypassAuthState)}function IA(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),tA(n,new zd(t),t.bypassAuthState)}async function SA(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),eA(n,new zd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TA;case"linkViaPopup":case"linkViaRedirect":return SA;case"reauthViaPopup":case"reauthViaRedirect":return IA;default:ln(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=new Vo(2e3,1e4);async function CA(t,e,n){if(Ut(t.app))return Promise.reject(Ht(t,"operation-not-supported-in-this-environment"));const r=Xl(t);w1(t,e,Fd);const i=Xv(r,n);return new Dr(r,"signInViaPopup",e,i).executeNotNull()}class Dr extends Zv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Dr.currentPopupAction&&Dr.currentPopupAction.cancel(),Dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=Ud();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AA.get())};e()}}Dr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="pendingRedirect",Ma=new Map;class kA extends Zv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ma.get(this.auth._key());if(!e){try{const r=await PA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ma.set(this.auth._key(),e)}return this.bypassAuthState||Ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PA(t,e){const n=DA(e),r=xA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function NA(t,e){Ma.set(t._key(),e)}function xA(t){return yn(t._redirectPersistence)}function DA(t){return La(RA,t.config.apiKey,t.name)}async function VA(t,e,n=!1){if(Ut(t.app))return Promise.reject(Mr(t));const r=Xl(t),i=Xv(r,e),o=await new kA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=10*60*1e3;class LA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ew(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ym(e))}saveEventToCache(e){this.cachedEventUids.add(Ym(e)),this.lastProcessedEventTime=Date.now()}}function Ym(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ew({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ew(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA(t,e={}){return Ji(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FA=/^https?/;async function UA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bA(t);for(const n of e)try{if(zA(n))return}catch{}ln(t,"unauthorized-domain")}function zA(t){const e=gh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FA.test(n))return!1;if(jA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=new Vo(3e4,6e4);function Jm(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $A(t){return new Promise((e,n)=>{var i,s,o;function r(){Jm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jm(),n(Ht(t,"network-request-failed"))},timeout:BA.get()})}if((s=(i=rn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=rn().gapi)!=null&&o.load)r();else{const l=K1("iframefcb");return rn()[l]=()=>{gapi.load?r():n(Ht(t,"network-request-failed"))},H1(`${q1()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ba=null,e})}let ba=null;function WA(t){return ba=ba||$A(t),ba}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=new Vo(5e3,15e3),qA="__/auth/iframe",KA="emulator/auth/iframe",GA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YA(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Od(e,KA):`https://${t.config.authDomain}/${qA}`,r={apiKey:e.apiKey,appName:t.name,v:Yi},i=QA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Do(r).slice(1)}`}async function JA(t){const e=await WA(t),n=rn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:YA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),l=rn().setTimeout(()=>{s(o)},HA.get());function u(){rn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZA=500,eC=600,tC="_blank",nC="http://localhost";class Xm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rC(t,e,n,r=ZA,i=eC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...XA,width:r.toString(),height:i.toString(),top:s,left:o},h=nt().toLowerCase();n&&(l=Ov(h)?tC:n),Dv(h)&&(e=e||nC,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[C,x])=>`${_}${C}=${x},`,"");if(b1(h)&&l!=="_self")return iC(e||"",l),new Xm(null);const m=window.open(e||"",l,f);K(m,t,"popup-blocked");try{m.focus()}catch{}return new Xm(m)}function iC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC="__/auth/handler",oC="emulator/auth/handler",aC=encodeURIComponent("fac");async function Zm(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yi,eventId:i};if(e instanceof Fd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",iS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Oo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${aC}=${encodeURIComponent(u)}`:"";return`${lC(t)}?${Do(l).slice(1)}${h}`}function lC({config:t}){return t.emulator?Od(t,oC):`https://${t.authDomain}/${sC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="webStorageSupport";class uC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kv,this._completeRedirectFn=VA,this._overrideRedirectResult=NA}async _openPopup(e,n,r,i){var o;An((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Zm(e,n,r,gh(),i);return rC(e,s,Ud())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zm(e,n,r,gh(),i);return dA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(An(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JA(e),r=new LA(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dc,{type:dc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[dc];s!==void 0&&n(!!s),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fv()||Vv()||bd()}}const cC=uC;var eg="@firebase/auth",tg="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fC(t){Fi(new Wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uv(t)},h=new $1(r,i,s,u);return Q1(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fi(new Wr("auth-internal",e=>{const n=Xl(e.getProvider("auth").getImmediate());return(r=>new hC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(eg,tg,dC(t)),sr(eg,tg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=5*60,mC=gv("authIdTokenMaxAge")||pC;let ng=null;const gC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mC)return;const i=n==null?void 0:n.token;ng!==i&&(ng=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yC(t=Tv()){const e=xd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=G1(t,{popupRedirectResolver:cC,persistence:[EA,uA,Kv]}),r=gv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=gC(s.toString());iA(n,o,()=>o(n.currentUser)),rA(n,l=>o(l))}}const i=pv("auth");return i&&Y1(n,`http://${i}`),n}function _C(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}W1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_C().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fC("Browser");var rg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var or,tw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function T(){}T.prototype=y.prototype,v.F=y.prototype,v.prototype=new T,v.prototype.constructor=v,v.D=function(I,A,k){for(var w=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)w[ae-2]=arguments[ae];return y.prototype[A].apply(I,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,T){T||(T=0);const I=Array(16);if(typeof y=="string")for(var A=0;A<16;++A)I[A]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(A=0;A<16;++A)I[A]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=v.g[0],T=v.g[1],A=v.g[2];let k=v.g[3],w;w=y+(k^T&(A^k))+I[0]+3614090360&4294967295,y=T+(w<<7&4294967295|w>>>25),w=k+(A^y&(T^A))+I[1]+3905402710&4294967295,k=y+(w<<12&4294967295|w>>>20),w=A+(T^k&(y^T))+I[2]+606105819&4294967295,A=k+(w<<17&4294967295|w>>>15),w=T+(y^A&(k^y))+I[3]+3250441966&4294967295,T=A+(w<<22&4294967295|w>>>10),w=y+(k^T&(A^k))+I[4]+4118548399&4294967295,y=T+(w<<7&4294967295|w>>>25),w=k+(A^y&(T^A))+I[5]+1200080426&4294967295,k=y+(w<<12&4294967295|w>>>20),w=A+(T^k&(y^T))+I[6]+2821735955&4294967295,A=k+(w<<17&4294967295|w>>>15),w=T+(y^A&(k^y))+I[7]+4249261313&4294967295,T=A+(w<<22&4294967295|w>>>10),w=y+(k^T&(A^k))+I[8]+1770035416&4294967295,y=T+(w<<7&4294967295|w>>>25),w=k+(A^y&(T^A))+I[9]+2336552879&4294967295,k=y+(w<<12&4294967295|w>>>20),w=A+(T^k&(y^T))+I[10]+4294925233&4294967295,A=k+(w<<17&4294967295|w>>>15),w=T+(y^A&(k^y))+I[11]+2304563134&4294967295,T=A+(w<<22&4294967295|w>>>10),w=y+(k^T&(A^k))+I[12]+1804603682&4294967295,y=T+(w<<7&4294967295|w>>>25),w=k+(A^y&(T^A))+I[13]+4254626195&4294967295,k=y+(w<<12&4294967295|w>>>20),w=A+(T^k&(y^T))+I[14]+2792965006&4294967295,A=k+(w<<17&4294967295|w>>>15),w=T+(y^A&(k^y))+I[15]+1236535329&4294967295,T=A+(w<<22&4294967295|w>>>10),w=y+(A^k&(T^A))+I[1]+4129170786&4294967295,y=T+(w<<5&4294967295|w>>>27),w=k+(T^A&(y^T))+I[6]+3225465664&4294967295,k=y+(w<<9&4294967295|w>>>23),w=A+(y^T&(k^y))+I[11]+643717713&4294967295,A=k+(w<<14&4294967295|w>>>18),w=T+(k^y&(A^k))+I[0]+3921069994&4294967295,T=A+(w<<20&4294967295|w>>>12),w=y+(A^k&(T^A))+I[5]+3593408605&4294967295,y=T+(w<<5&4294967295|w>>>27),w=k+(T^A&(y^T))+I[10]+38016083&4294967295,k=y+(w<<9&4294967295|w>>>23),w=A+(y^T&(k^y))+I[15]+3634488961&4294967295,A=k+(w<<14&4294967295|w>>>18),w=T+(k^y&(A^k))+I[4]+3889429448&4294967295,T=A+(w<<20&4294967295|w>>>12),w=y+(A^k&(T^A))+I[9]+568446438&4294967295,y=T+(w<<5&4294967295|w>>>27),w=k+(T^A&(y^T))+I[14]+3275163606&4294967295,k=y+(w<<9&4294967295|w>>>23),w=A+(y^T&(k^y))+I[3]+4107603335&4294967295,A=k+(w<<14&4294967295|w>>>18),w=T+(k^y&(A^k))+I[8]+1163531501&4294967295,T=A+(w<<20&4294967295|w>>>12),w=y+(A^k&(T^A))+I[13]+2850285829&4294967295,y=T+(w<<5&4294967295|w>>>27),w=k+(T^A&(y^T))+I[2]+4243563512&4294967295,k=y+(w<<9&4294967295|w>>>23),w=A+(y^T&(k^y))+I[7]+1735328473&4294967295,A=k+(w<<14&4294967295|w>>>18),w=T+(k^y&(A^k))+I[12]+2368359562&4294967295,T=A+(w<<20&4294967295|w>>>12),w=y+(T^A^k)+I[5]+4294588738&4294967295,y=T+(w<<4&4294967295|w>>>28),w=k+(y^T^A)+I[8]+2272392833&4294967295,k=y+(w<<11&4294967295|w>>>21),w=A+(k^y^T)+I[11]+1839030562&4294967295,A=k+(w<<16&4294967295|w>>>16),w=T+(A^k^y)+I[14]+4259657740&4294967295,T=A+(w<<23&4294967295|w>>>9),w=y+(T^A^k)+I[1]+2763975236&4294967295,y=T+(w<<4&4294967295|w>>>28),w=k+(y^T^A)+I[4]+1272893353&4294967295,k=y+(w<<11&4294967295|w>>>21),w=A+(k^y^T)+I[7]+4139469664&4294967295,A=k+(w<<16&4294967295|w>>>16),w=T+(A^k^y)+I[10]+3200236656&4294967295,T=A+(w<<23&4294967295|w>>>9),w=y+(T^A^k)+I[13]+681279174&4294967295,y=T+(w<<4&4294967295|w>>>28),w=k+(y^T^A)+I[0]+3936430074&4294967295,k=y+(w<<11&4294967295|w>>>21),w=A+(k^y^T)+I[3]+3572445317&4294967295,A=k+(w<<16&4294967295|w>>>16),w=T+(A^k^y)+I[6]+76029189&4294967295,T=A+(w<<23&4294967295|w>>>9),w=y+(T^A^k)+I[9]+3654602809&4294967295,y=T+(w<<4&4294967295|w>>>28),w=k+(y^T^A)+I[12]+3873151461&4294967295,k=y+(w<<11&4294967295|w>>>21),w=A+(k^y^T)+I[15]+530742520&4294967295,A=k+(w<<16&4294967295|w>>>16),w=T+(A^k^y)+I[2]+3299628645&4294967295,T=A+(w<<23&4294967295|w>>>9),w=y+(A^(T|~k))+I[0]+4096336452&4294967295,y=T+(w<<6&4294967295|w>>>26),w=k+(T^(y|~A))+I[7]+1126891415&4294967295,k=y+(w<<10&4294967295|w>>>22),w=A+(y^(k|~T))+I[14]+2878612391&4294967295,A=k+(w<<15&4294967295|w>>>17),w=T+(k^(A|~y))+I[5]+4237533241&4294967295,T=A+(w<<21&4294967295|w>>>11),w=y+(A^(T|~k))+I[12]+1700485571&4294967295,y=T+(w<<6&4294967295|w>>>26),w=k+(T^(y|~A))+I[3]+2399980690&4294967295,k=y+(w<<10&4294967295|w>>>22),w=A+(y^(k|~T))+I[10]+4293915773&4294967295,A=k+(w<<15&4294967295|w>>>17),w=T+(k^(A|~y))+I[1]+2240044497&4294967295,T=A+(w<<21&4294967295|w>>>11),w=y+(A^(T|~k))+I[8]+1873313359&4294967295,y=T+(w<<6&4294967295|w>>>26),w=k+(T^(y|~A))+I[15]+4264355552&4294967295,k=y+(w<<10&4294967295|w>>>22),w=A+(y^(k|~T))+I[6]+2734768916&4294967295,A=k+(w<<15&4294967295|w>>>17),w=T+(k^(A|~y))+I[13]+1309151649&4294967295,T=A+(w<<21&4294967295|w>>>11),w=y+(A^(T|~k))+I[4]+4149444226&4294967295,y=T+(w<<6&4294967295|w>>>26),w=k+(T^(y|~A))+I[11]+3174756917&4294967295,k=y+(w<<10&4294967295|w>>>22),w=A+(y^(k|~T))+I[2]+718787259&4294967295,A=k+(w<<15&4294967295|w>>>17),w=T+(k^(A|~y))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(A+(w<<21&4294967295|w>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+k&4294967295}r.prototype.v=function(v,y){y===void 0&&(y=v.length);const T=y-this.blockSize,I=this.C;let A=this.h,k=0;for(;k<y;){if(A==0)for(;k<=T;)i(this,v,k),k+=this.blockSize;if(typeof v=="string"){for(;k<y;)if(I[A++]=v.charCodeAt(k++),A==this.blockSize){i(this,I),A=0;break}}else for(;k<y;)if(I[A++]=v[k++],A==this.blockSize){i(this,I),A=0;break}}this.h=A,this.o+=y},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var T=v.length-8;T<v.length;++T)v[T]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,T=0;T<4;++T)for(let I=0;I<32;I+=8)v[y++]=this.g[T]>>>I&255;return v};function s(v,y){var T=l;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=y(v)}function o(v,y){this.h=y;const T=[];let I=!0;for(let A=v.length-1;A>=0;A--){const k=v[A]|0;I&&k==y||(T[A]=k,I=!1)}this.g=T}var l={};function u(v){return-128<=v&&v<128?s(v,function(y){return new o([y|0],y<0?-1:0)}):new o([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(v<0)return O(h(-v));const y=[];let T=1;for(let I=0;v>=T;I++)y[I]=v/T|0,T*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return O(f(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=h(Math.pow(y,8));let I=m;for(let k=0;k<v.length;k+=8){var A=Math.min(8,v.length-k);const w=parseInt(v.substring(k,k+A),y);A<8?(A=h(Math.pow(y,A)),I=I.j(A).add(h(w))):(I=I.j(T),I=I.add(h(w)))}return I}var m=u(0),_=u(1),C=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-O(this).m();let v=0,y=1;for(let T=0;T<this.g.length;T++){const I=this.i(T);v+=(I>=0?I:4294967296+I)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(x(this))return"0";if(P(this))return"-"+O(this).toString(v);const y=h(Math.pow(v,6));var T=this;let I="";for(;;){const A=D(T,y).g;T=S(T,A.j(y));let k=((T.g.length>0?T.g[0]:T.h)>>>0).toString(v);if(T=A,x(T))return k+I;for(;k.length<6;)k="0"+k;I=k+I}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function x(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function P(v){return v.h==-1}t.l=function(v){return v=S(this,v),P(v)?-1:x(v)?0:1};function O(v){const y=v.g.length,T=[];for(let I=0;I<y;I++)T[I]=~v.g[I];return new o(T,~v.h).add(_)}t.abs=function(){return P(this)?O(this):this},t.add=function(v){const y=Math.max(this.g.length,v.g.length),T=[];let I=0;for(let A=0;A<=y;A++){let k=I+(this.i(A)&65535)+(v.i(A)&65535),w=(k>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);I=w>>>16,k&=65535,w&=65535,T[A]=w<<16|k}return new o(T,T[T.length-1]&-2147483648?-1:0)};function S(v,y){return v.add(O(y))}t.j=function(v){if(x(this)||x(v))return m;if(P(this))return P(v)?O(this).j(O(v)):O(O(this).j(v));if(P(v))return O(this.j(O(v)));if(this.l(C)<0&&v.l(C)<0)return h(this.m()*v.m());const y=this.g.length+v.g.length,T=[];for(var I=0;I<2*y;I++)T[I]=0;for(I=0;I<this.g.length;I++)for(let A=0;A<v.g.length;A++){const k=this.i(I)>>>16,w=this.i(I)&65535,ae=v.i(A)>>>16,rt=v.i(A)&65535;T[2*I+2*A]+=w*rt,E(T,2*I+2*A),T[2*I+2*A+1]+=k*rt,E(T,2*I+2*A+1),T[2*I+2*A+1]+=w*ae,E(T,2*I+2*A+1),T[2*I+2*A+2]+=k*ae,E(T,2*I+2*A+2)}for(v=0;v<y;v++)T[v]=T[2*v+1]<<16|T[2*v];for(v=y;v<2*y;v++)T[v]=0;return new o(T,0)};function E(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function R(v,y){this.g=v,this.h=y}function D(v,y){if(x(y))throw Error("division by zero");if(x(v))return new R(m,m);if(P(v))return y=D(O(v),y),new R(O(y.g),O(y.h));if(P(y))return y=D(v,O(y)),new R(O(y.g),y.h);if(v.g.length>30){if(P(v)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var T=_,I=y;I.l(v)<=0;)T=M(T),I=M(I);var A=F(T,1),k=F(I,1);for(I=F(I,2),T=F(T,2);!x(I);){var w=k.add(I);w.l(v)<=0&&(A=A.add(T),k=w),I=F(I,1),T=F(T,1)}return y=S(v,A.j(y)),new R(A,y)}for(A=m;v.l(y)>=0;){for(T=Math.max(1,Math.floor(v.m()/y.m())),I=Math.ceil(Math.log(T)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),k=h(T),w=k.j(y);P(w)||w.l(v)>0;)T-=I,k=h(T),w=k.j(y);x(k)&&(k=_),A=A.add(k),v=S(v,w)}return new R(A,v)}t.B=function(v){return D(this,v).h},t.and=function(v){const y=Math.max(this.g.length,v.g.length),T=[];for(let I=0;I<y;I++)T[I]=this.i(I)&v.i(I);return new o(T,this.h&v.h)},t.or=function(v){const y=Math.max(this.g.length,v.g.length),T=[];for(let I=0;I<y;I++)T[I]=this.i(I)|v.i(I);return new o(T,this.h|v.h)},t.xor=function(v){const y=Math.max(this.g.length,v.g.length),T=[];for(let I=0;I<y;I++)T[I]=this.i(I)^v.i(I);return new o(T,this.h^v.h)};function M(v){const y=v.g.length+1,T=[];for(let I=0;I<y;I++)T[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(T,v.h)}function F(v,y){const T=y>>5;y%=32;const I=v.g.length-T,A=[];for(let k=0;k<I;k++)A[k]=y>0?v.i(k+T)>>>y|v.i(k+T+1)<<32-y:v.i(k+T);return new o(A,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,tw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,or=o}).apply(typeof rg<"u"?rg:typeof self<"u"?self:typeof window<"u"?window:{});var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nw,Ds,rw,ja,vh,iw,sw,ow;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ya=="object"&&ya];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in d))break e;d=d[N]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(c){var d=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&d.push([g,c[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,N,V){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return c.prototype[N].apply(g,U)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function C(a){const c=a.length;if(c>0){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function x(a,c){for(let g=1;g<arguments.length;g++){const N=arguments[g];var d=typeof N;if(d=d!="object"?d:N?Array.isArray(N)?"array":d:"null",d=="array"||d=="object"&&typeof N.length=="number"){d=a.length||0;const V=N.length||0;a.length=d+V;for(let U=0;U<V;U++)a[d+U]=N[U]}else a.push(N)}}class P{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function O(a){o.setTimeout(()=>{throw a},0)}function S(){var a=v;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class E{constructor(){this.h=this.g=null}add(c,d){const g=R.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var R=new P(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let M,F=!1,v=new E,y=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(T)}};function T(){for(var a;a=S();){try{a.h.call(a.g)}catch(d){O(d)}var c=R;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}F=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function w(a){return/^[\s\xa0]*$/.test(a)}function ae(a,c){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}m(ae,A),ae.prototype.init=function(a,c){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ae.Z.h.call(this)},ae.prototype.h=function(){ae.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var rt="closure_listenable_"+(Math.random()*1e6|0),Gt=0;function ze(a,c,d,g,N){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=N,this.key=++Gt,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function G(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function X(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function ge(a){const c={};for(const d in a)c[d]=a[d];return c}const Ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vr(a,c){let d,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(d in g)a[d]=g[d];for(let V=0;V<Ae.length;V++)d=Ae[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function St(a){this.src=a,this.g={},this.h=0}St.prototype.add=function(a,c,d,g,N){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const U=Ot(a,c,g,N);return U>-1?(c=a[U],d||(c.fa=!1)):(c=new ze(c,this.src,V,!!g,N),c.fa=d,a.push(c)),c};function wr(a,c){const d=c.type;if(d in a.g){var g=a.g[d],N=Array.prototype.indexOf.call(g,c,void 0),V;(V=N>=0)&&Array.prototype.splice.call(g,N,1),V&&(z(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Ot(a,c,d,g){for(let N=0;N<a.length;++N){const V=a[N];if(!V.da&&V.listener==c&&V.capture==!!d&&V.ha==g)return N}return-1}var Nn="closure_lm_"+(Math.random()*1e6|0),fu={};function Tf(a,c,d,g,N){if(Array.isArray(c)){for(let V=0;V<c.length;V++)Tf(a,c[V],d,g,N);return null}return d=Af(d),a&&a[rt]?a.J(c,d,l(g)?!!g.capture:!1,N):DE(a,c,d,!1,g,N)}function DE(a,c,d,g,N,V){if(!c)throw Error("Invalid event type");const U=l(N)?!!N.capture:!!N;let Z=mu(a);if(Z||(a[Nn]=Z=new St(a)),d=Z.add(c,d,g,U,V),d.proxy)return d;if(g=VE(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)k||(N=U),N===void 0&&(N=!1),a.addEventListener(c.toString(),g,N);else if(a.attachEvent)a.attachEvent(Sf(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function VE(){function a(d){return c.call(a.src,a.listener,d)}const c=OE;return a}function If(a,c,d,g,N){if(Array.isArray(c))for(var V=0;V<c.length;V++)If(a,c[V],d,g,N);else g=l(g)?!!g.capture:!!g,d=Af(d),a&&a[rt]?(a=a.i,V=String(c).toString(),V in a.g&&(c=a.g[V],d=Ot(c,d,g,N),d>-1&&(z(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[V],a.h--)))):a&&(a=mu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Ot(c,d,g,N)),(d=a>-1?c[a]:null)&&pu(d))}function pu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[rt])wr(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(Sf(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=mu(c))?(wr(d,a),d.h==0&&(d.src=null,c[Nn]=null)):z(a)}}}function Sf(a){return a in fu?fu[a]:fu[a]="on"+a}function OE(a,c){if(a.da)a=!0;else{c=new ae(c,this);const d=a.listener,g=a.ha||a.src;a.fa&&pu(a),a=d.call(g,c)}return a}function mu(a){return a=a[Nn],a instanceof St?a:null}var gu="__closure_events_fn_"+(Math.random()*1e9>>>0);function Af(a){return typeof a=="function"?a:(a[gu]||(a[gu]=function(c){return a.handleEvent(c)}),a[gu])}function Ge(){I.call(this),this.i=new St(this),this.M=this,this.G=null}m(Ge,I),Ge.prototype[rt]=!0,Ge.prototype.removeEventListener=function(a,c,d,g){If(this,a,c,d,g)};function it(a,c){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new A(c,a);else if(c instanceof A)c.target=c.target||a;else{var N=c;c=new A(g,a),vr(c,N)}N=!0;let V,U;if(d)for(U=d.length-1;U>=0;U--)V=c.g=d[U],N=zo(V,g,!0,c)&&N;if(V=c.g=a,N=zo(V,g,!0,c)&&N,N=zo(V,g,!1,c)&&N,d)for(U=0;U<d.length;U++)V=c.g=d[U],N=zo(V,g,!1,c)&&N}Ge.prototype.N=function(){if(Ge.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let g=0;g<d.length;g++)z(d[g]);delete a.g[c],a.h--}}this.G=null},Ge.prototype.J=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},Ge.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function zo(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let N=!0;for(let V=0;V<c.length;++V){const U=c[V];if(U&&!U.da&&U.capture==d){const Z=U.listener,xe=U.ha||U.src;U.fa&&wr(a.i,U),N=Z.call(xe,g)!==!1&&N}}return N&&!g.defaultPrevented}function LE(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function Cf(a){a.g=LE(()=>{a.g=null,a.i&&(a.i=!1,Cf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class ME extends I{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Cf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ns(a){I.call(this),this.h=a,this.g={}}m(ns,I);var Rf=[];function kf(a){G(a.g,function(c,d){this.g.hasOwnProperty(d)&&pu(c)},a),a.g={}}ns.prototype.N=function(){ns.Z.N.call(this),kf(this)},ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yu=o.JSON.stringify,bE=o.JSON.parse,jE=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Pf(){}function Nf(){}var rs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _u(){A.call(this,"d")}m(_u,A);function vu(){A.call(this,"c")}m(vu,A);var Er={},xf=null;function Bo(){return xf=xf||new Ge}Er.Ia="serverreachability";function Df(a){A.call(this,Er.Ia,a)}m(Df,A);function is(a){const c=Bo();it(c,new Df(c))}Er.STAT_EVENT="statevent";function Vf(a,c){A.call(this,Er.STAT_EVENT,a),this.stat=c}m(Vf,A);function st(a){const c=Bo();it(c,new Vf(c,a))}Er.Ja="timingevent";function Of(a,c){A.call(this,Er.Ja,a),this.size=c}m(Of,A);function ss(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function os(){this.g=!0}os.prototype.ua=function(){this.g=!1};function FE(a,c,d,g,N,V){a.info(function(){if(a.g)if(V){var U="",Z=V.split("&");for(let ue=0;ue<Z.length;ue++){var xe=Z[ue].split("=");if(xe.length>1){const Me=xe[0];xe=xe[1];const Yt=Me.split("_");U=Yt.length>=2&&Yt[1]=="type"?U+(Me+"="+xe+"&"):U+(Me+"=redacted&")}}}else U=null;else U=V;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+c+`
`+d+`
`+U})}function UE(a,c,d,g,N,V,U){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+c+`
`+d+`
`+V+" "+U})}function ti(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+BE(a,d)+(g?" "+g:"")})}function zE(a,c){a.info(function(){return"TIMEOUT: "+c})}os.prototype.info=function(){};function BE(a,c){if(!a.g)return c;if(!c)return null;try{const V=JSON.parse(c);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var d=V[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let U=1;U<g.length;U++)g[U]=""}}}}return yu(V)}catch{return c}}var $o={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Lf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Mf;function wu(){}m(wu,Pf),wu.prototype.g=function(){return new XMLHttpRequest},Mf=new wu;function as(a){return encodeURIComponent(String(a))}function $E(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function xn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.S=g||1,this.V=new ns(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new bf}function bf(){this.i=null,this.g="",this.h=!1}var jf={},Eu={};function Tu(a,c,d){a.M=1,a.A=Ho(Qt(c)),a.u=d,a.R=!0,Ff(a,null)}function Ff(a,c){a.F=Date.now(),Wo(a),a.B=Qt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Xf(d.i,"t",g),a.C=0,d=a.j.L,a.h=new bf,a.g=gp(a.j,d?c:null,!a.u),a.P>0&&(a.O=new ME(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,g=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(Rf[0]=N.toString()),N=Rf);for(let V=0;V<N.length;V++){const U=Tf(d,N[V],g||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.J?ge(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),is(),FE(a.i,a.v,a.B,a.l,a.S,a.u)}xn.prototype.ba=function(a){a=a.target;const c=this.O;c&&On(a)==3?c.j():this.Y(a)},xn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=On(this.g),xe=this.g.ya(),ue=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||sp(this.g)))){this.K||Z!=4||xe==7||(xe==8||ue<=0?is(3):is(2)),Iu(this);var c=this.g.ca();this.X=c;var d=WE(this);if(this.o=c==200,UE(this.i,this.v,this.B,this.l,this.S,Z,c),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(g)){var V=g;break t}}V=null}if(a=V)ti(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Su(this,a);else{this.o=!1,this.m=3,st(12),Tr(this),ls(this);break e}}if(this.R){a=!0;let Me;for(;!this.K&&this.C<d.length;)if(Me=HE(this,d),Me==Eu){Z==4&&(this.m=4,st(14),a=!1),ti(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==jf){this.m=4,st(15),ti(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ti(this.i,this.l,Me,null),Su(this,Me);if(Uf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||d.length!=0||this.h.h||(this.m=1,st(16),a=!1),this.o=this.o&&a,!a)ti(this.i,this.l,d,"[Invalid Chunked Response]"),Tr(this),ls(this);else if(d.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Du(U),U.P=!0,st(11))}}else ti(this.i,this.l,d,null),Su(this,d);Z==4&&Tr(this),this.o&&!this.K&&(Z==4?dp(this.j,this):(this.o=!1,Wo(this)))}else s0(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),Tr(this),ls(this)}}}catch{}finally{}};function WE(a){if(!Uf(a))return a.g.la();const c=sp(a.g);if(c==="")return"";let d="";const g=c.length,N=On(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Tr(a),ls(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<g;V++)a.h.h=!0,d+=a.h.i.decode(c[V],{stream:!(N&&V==g-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function Uf(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function HE(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?Eu:(d=Number(c.substring(d,g)),isNaN(d)?jf:(g+=1,g+d>c.length?Eu:(c=c.slice(g,g+d),a.C=g+d,c)))}xn.prototype.cancel=function(){this.K=!0,Tr(this)};function Wo(a){a.T=Date.now()+a.H,zf(a,a.H)}function zf(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ss(h(a.aa,a),c)}function Iu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}xn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(zE(this.i,this.B),this.M!=2&&(is(),st(17)),Tr(this),this.m=2,ls(this)):zf(this,this.T-a)};function ls(a){a.j.I==0||a.K||dp(a.j,a)}function Tr(a){Iu(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,kf(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Su(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Au(d.h,a))){if(!a.L&&Au(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Yo(d),Go(d);else break e;xu(d),st(18)}}else d.xa=N[1],0<d.xa-d.K&&N[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ss(h(d.Va,d),6e3));Wf(d.h)<=1&&d.ta&&(d.ta=void 0)}else Sr(d,11)}else if((a.L||d.g==a)&&Yo(d),!w(c))for(N=d.Ba.g.parse(c),c=0;c<N.length;c++){let ue=N[c];const Me=ue[0];if(!(Me<=d.K))if(d.K=Me,ue=ue[1],d.I==2)if(ue[0]=="c"){d.M=ue[1],d.ba=ue[2];const Yt=ue[3];Yt!=null&&(d.ka=Yt,d.j.info("VER="+d.ka));const Ar=ue[4];Ar!=null&&(d.za=Ar,d.j.info("SVER="+d.za));const Ln=ue[5];Ln!=null&&typeof Ln=="number"&&Ln>0&&(g=1.5*Ln,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Mn=a.g;if(Mn){const Xo=Mn.g?Mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xo){var V=g.h;V.g||Xo.indexOf("spdy")==-1&&Xo.indexOf("quic")==-1&&Xo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Cu(V,V.h),V.h=null))}if(g.G){const Vu=Mn.g?Mn.g.getResponseHeader("X-HTTP-Session-Id"):null;Vu&&(g.wa=Vu,de(g.J,g.G,Vu))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var U=a;if(g.na=mp(g,g.L?g.ba:null,g.W),U.L){Hf(g.h,U);var Z=U,xe=g.O;xe&&(Z.H=xe),Z.D&&(Iu(Z),Wo(Z)),g.g=U}else cp(g);d.i.length>0&&Qo(d)}else ue[0]!="stop"&&ue[0]!="close"||Sr(d,7);else d.I==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Sr(d,7):Nu(d):ue[0]!="noop"&&d.l&&d.l.qa(ue),d.A=0)}}is(4)}catch{}}var qE=class{constructor(a,c){this.g=a,this.map=c}};function Bf(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $f(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wf(a){return a.h?1:a.g?a.g.size:0}function Au(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Cu(a,c){a.g?a.g.add(c):a.h=c}function Hf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Bf.prototype.cancel=function(){if(this.i=qf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qf(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return C(a.i)}var Kf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function KE(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let N,V=null;g>=0?(N=a[d].substring(0,g),V=a[d].substring(g+1)):N=a[d],c(N,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Dn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof Dn?(this.l=a.l,us(this,a.j),this.o=a.o,this.g=a.g,cs(this,a.u),this.h=a.h,Ru(this,Zf(a.i)),this.m=a.m):a&&(c=String(a).match(Kf))?(this.l=!1,us(this,c[1]||"",!0),this.o=hs(c[2]||""),this.g=hs(c[3]||"",!0),cs(this,c[4]),this.h=hs(c[5]||"",!0),Ru(this,c[6]||"",!0),this.m=hs(c[7]||"")):(this.l=!1,this.i=new fs(null,this.l))}Dn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(ds(c,Gf,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ds(c,Gf,!0),"@"),a.push(as(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ds(d,d.charAt(0)=="/"?YE:QE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ds(d,XE)),a.join("")},Dn.prototype.resolve=function(a){const c=Qt(this);let d=!!a.j;d?us(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var g=a.h;if(d)cs(c,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=c.h.lastIndexOf("/");N!=-1&&(g=c.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const V=[];for(let U=0;U<N.length;){const Z=N[U++];Z=="."?g&&U==N.length&&V.push(""):Z==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),g&&U==N.length&&V.push("")):(V.push(Z),g=!0)}g=V.join("/")}else g=N}return d?c.h=g:d=a.i.toString()!=="",d?Ru(c,Zf(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Qt(a){return new Dn(a)}function us(a,c,d){a.j=d?hs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function cs(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Ru(a,c,d){c instanceof fs?(a.i=c,ZE(a.i,a.l)):(d||(c=ds(c,JE)),a.i=new fs(c,a.l))}function de(a,c,d){a.i.set(c,d)}function Ho(a){return de(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function hs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ds(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,GE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function GE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Gf=/[#\/\?@]/g,QE=/[#\?:]/g,YE=/[#\?]/g,JE=/[#\?@]/g,XE=/#/g;function fs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Ir(a){a.g||(a.g=new Map,a.h=0,a.i&&KE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=fs.prototype,t.add=function(a,c){Ir(this),this.i=null,a=ni(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Qf(a,c){Ir(a),c=ni(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Yf(a,c){return Ir(a),c=ni(a,c),a.g.has(c)}t.forEach=function(a,c){Ir(this),this.g.forEach(function(d,g){d.forEach(function(N){a.call(c,N,g,this)},this)},this)};function Jf(a,c){Ir(a);let d=[];if(typeof c=="string")Yf(a,c)&&(d=d.concat(a.g.get(ni(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Ir(this),this.i=null,a=ni(this,a),Yf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=Jf(this,a),a.length>0?String(a[0]):c):c};function Xf(a,c,d){Qf(a,c),d.length>0&&(a.i=null,a.g.set(ni(a,c),C(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var d=c[g];const N=as(d);d=Jf(this,d);for(let V=0;V<d.length;V++){let U=N;d[V]!==""&&(U+="="+as(d[V])),a.push(U)}}return this.i=a.join("&")};function Zf(a){const c=new fs;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function ni(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function ZE(a,c){c&&!a.j&&(Ir(a),a.i=null,a.g.forEach(function(d,g){const N=g.toLowerCase();g!=N&&(Qf(this,g),Xf(this,N,d))},a)),a.j=c}function e0(a,c){const d=new os;if(o.Image){const g=new Image;g.onload=f(Vn,d,"TestLoadImage: loaded",!0,c,g),g.onerror=f(Vn,d,"TestLoadImage: error",!1,c,g),g.onabort=f(Vn,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=f(Vn,d,"TestLoadImage: timeout",!1,c,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function t0(a,c){const d=new os,g=new AbortController,N=setTimeout(()=>{g.abort(),Vn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(N),V.ok?Vn(d,"TestPingServer: ok",!0,c):Vn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),Vn(d,"TestPingServer: error",!1,c)})}function Vn(a,c,d,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(d)}catch{}}function n0(){this.g=new jE}function ku(a){this.i=a.Sb||null,this.h=a.ab||!1}m(ku,Pf),ku.prototype.g=function(){return new qo(this.i,this.h)};function qo(a,c){Ge.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(qo,Ge),t=qo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,ms(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ps(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ms(this)),this.g&&(this.readyState=3,ms(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ep(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function ep(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ps(this):ms(this),this.readyState==3&&ep(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ps(this))},t.Na=function(a){this.g&&(this.response=a,ps(this))},t.ga=function(){this.g&&ps(this)};function ps(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ms(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ms(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function tp(a){let c="";return G(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Pu(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=tp(d),typeof a=="string"?d!=null&&as(d):de(a,c,d))}function Ie(a){Ge.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ie,Ge);var r0=/^https?$/i,i0=["POST","PUT"];t=Ie.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Mf.g(),this.g.onreadystatechange=_(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(V){np(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)d.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(i0,c,void 0)>=0)||g||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,U]of d)this.g.setRequestHeader(V,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){np(this,V)}};function np(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,rp(a),Ko(a)}function rp(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,it(this,"complete"),it(this,"abort"),Ko(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ko(this,!0)),Ie.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ip(this):this.Xa())},t.Xa=function(){ip(this)};function ip(a){if(a.h&&typeof s<"u"){if(a.v&&On(a)==4)setTimeout(a.Ca.bind(a),0);else if(it(a,"readystatechange"),On(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=V===0){let U=String(a.D).match(Kf)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),g=!r0.test(U?U.toLowerCase():"")}d=g}if(d)it(a,"complete"),it(a,"success");else{a.o=6;try{var N=On(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",rp(a)}}finally{Ko(a)}}}}function Ko(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||it(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function On(a){return a.g?a.g.readyState:0}t.ca=function(){try{return On(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),bE(c)}};function sp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function s0(a){const c={};a=(a.g&&On(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var d=$E(a[g]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=c[N]||[];c[N]=V,V.push(d)}X(c,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function gs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function op(a){this.za=0,this.i=[],this.j=new os,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gs("baseRetryDelayMs",5e3,a),this.Za=gs("retryDelaySeedMs",1e4,a),this.Ta=gs("forwardChannelMaxRetries",2,a),this.va=gs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Bf(a&&a.concurrentRequestLimit),this.Ba=new n0,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=op.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,g){st(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=mp(this,null,this.W),Qo(this)};function Nu(a){if(ap(a),a.I==3){var c=a.V++,d=Qt(a.J);if(de(d,"SID",a.M),de(d,"RID",c),de(d,"TYPE","terminate"),ys(a,d),c=new xn(a,a.j,c),c.M=2,c.A=Ho(Qt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=gp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Wo(c)}pp(a)}function Go(a){a.g&&(Du(a),a.g.cancel(),a.g=null)}function ap(a){Go(a),a.v&&(o.clearTimeout(a.v),a.v=null),Yo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Qo(a){if(!$f(a.h)&&!a.m){a.m=!0;var c=a.Ea;M||y(),F||(M(),F=!0),v.add(c,a),a.D=0}}function o0(a,c){return Wf(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ss(h(a.Ea,a,c),fp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new xn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=ge(V),vr(V,this.U)):V=this.U),this.u!==null||this.R||(N.J=V,V=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=up(this,N,c),d=Qt(this.J),de(d,"RID",a),de(d,"CVER",22),this.G&&de(d,"X-HTTP-Session-Id",this.G),ys(this,d),V&&(this.R?c="headers="+as(tp(V))+"&"+c:this.u&&Pu(d,this.u,V)),Cu(this.h,N),this.Ra&&de(d,"TYPE","init"),this.S?(de(d,"$req",c),de(d,"SID","null"),N.U=!0,Tu(N,d,null)):Tu(N,d,c),this.I=2}}else this.I==3&&(a?lp(this,a):this.i.length==0||$f(this.h)||lp(this))};function lp(a,c){var d;c?d=c.l:d=a.V++;const g=Qt(a.J);de(g,"SID",a.M),de(g,"RID",d),de(g,"AID",a.K),ys(a,g),a.u&&a.o&&Pu(g,a.u,a.o),d=new xn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=up(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Cu(a.h,d),Tu(d,g,c)}function ys(a,c){a.H&&G(a.H,function(d,g){de(c,g,d)}),a.l&&G({},function(d,g){de(c,g,d)})}function up(a,c,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var N=a.i;let Z=-1;for(;;){const xe=["count="+d];Z==-1?d>0?(Z=N[0].g,xe.push("ofs="+Z)):Z=0:xe.push("ofs="+Z);let ue=!0;for(let Me=0;Me<d;Me++){var V=N[Me].g;const Yt=N[Me].map;if(V-=Z,V<0)Z=Math.max(0,N[Me].g-100),ue=!1;else try{V="req"+V+"_"||"";try{var U=Yt instanceof Map?Yt:Object.entries(Yt);for(const[Ar,Ln]of U){let Mn=Ln;l(Ln)&&(Mn=yu(Ln)),xe.push(V+Ar+"="+encodeURIComponent(Mn))}}catch(Ar){throw xe.push(V+"type="+encodeURIComponent("_badmap")),Ar}}catch{g&&g(Yt)}}if(ue){U=xe.join("&");break e}}U=void 0}return a=a.i.splice(0,d),c.G=a,U}function cp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;M||y(),F||(M(),F=!0),v.add(c,a),a.A=0}}function xu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ss(h(a.Da,a),fp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,hp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ss(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),Go(this),hp(this))};function Du(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function hp(a){a.g=new xn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Qt(a.na);de(c,"RID","rpc"),de(c,"SID",a.M),de(c,"AID",a.K),de(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&de(c,"TO",a.ia),de(c,"TYPE","xmlhttp"),ys(a,c),a.u&&a.o&&Pu(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ho(Qt(c)),d.u=null,d.R=!0,Ff(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Go(this),xu(this),st(19))};function Yo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function dp(a,c){var d=null;if(a.g==c){Yo(a),Du(a),a.g=null;var g=2}else if(Au(a.h,c))d=c.G,Hf(a.h,c),g=1;else return;if(a.I!=0){if(c.o)if(g==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var N=a.D;g=Bo(),it(g,new Of(g,d)),Qo(a)}else cp(a);else if(N=c.m,N==3||N==0&&c.X>0||!(g==1&&o0(a,c)||g==2&&xu(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),N){case 1:Sr(a,5);break;case 4:Sr(a,10);break;case 3:Sr(a,6);break;default:Sr(a,2)}}}function fp(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Sr(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),g=a.Ua;const N=!g;g=new Dn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||us(g,"https"),Ho(g),N?e0(g.toString(),d):t0(g.toString(),d)}else st(2);a.I=0,a.l&&a.l.pa(c),pp(a),ap(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function pp(a){if(a.I=0,a.ja=[],a.l){const c=qf(a.h);(c.length!=0||a.i.length!=0)&&(x(a.ja,c),x(a.ja,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.oa()}}function mp(a,c,d){var g=d instanceof Dn?Qt(d):new Dn(d);if(g.g!="")c&&(g.g=c+"."+g.g),cs(g,g.u);else{var N=o.location;g=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;const V=new Dn(null);g&&us(V,g),c&&(V.g=c),N&&cs(V,N),d&&(V.h=d),g=V}return d=a.G,c=a.wa,d&&c&&de(g,d,c),de(g,"VER",a.ka),ys(a,g),g}function gp(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Ie(new ku({ab:d})):new Ie(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function yp(){}t=yp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Jo(){}Jo.prototype.g=function(a,c){return new yt(a,c)};function yt(a,c){Ge.call(this),this.g=new op(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!w(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ri(this)}m(yt,Ge),yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){Nu(this.g)},yt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=yu(a),a=d);c.i.push(new qE(c.Ya++,a)),c.I==3&&Qo(c)},yt.prototype.N=function(){this.g.l=null,delete this.j,Nu(this.g),delete this.g,yt.Z.N.call(this)};function _p(a){_u.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}m(_p,_u);function vp(){vu.call(this),this.status=1}m(vp,vu);function ri(a){this.g=a}m(ri,yp),ri.prototype.ra=function(){it(this.g,"a")},ri.prototype.qa=function(a){it(this.g,new _p(a))},ri.prototype.pa=function(a){it(this.g,new vp)},ri.prototype.oa=function(){it(this.g,"b")},Jo.prototype.createWebChannel=Jo.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,ow=function(){return new Jo},sw=function(){return Bo()},iw=Er,vh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},$o.NO_ERROR=0,$o.TIMEOUT=8,$o.HTTP_ERROR=6,ja=$o,Lf.COMPLETE="complete",rw=Lf,Nf.EventType=rs,rs.OPEN="a",rs.CLOSE="b",rs.ERROR="c",rs.MESSAGE="d",Ge.prototype.listen=Ge.prototype.J,Ds=Nf,Ie.prototype.listenOnce=Ie.prototype.K,Ie.prototype.getLastError=Ie.prototype.Ha,Ie.prototype.getLastErrorCode=Ie.prototype.ya,Ie.prototype.getStatus=Ie.prototype.ca,Ie.prototype.getResponseJson=Ie.prototype.La,Ie.prototype.getResponseText=Ie.prototype.la,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Fa,nw=Ie}).apply(typeof ya<"u"?ya:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi="12.10.0";function vC(t){Xi=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Pd("@firebase/firestore");function si(){return qr.logLevel}function B(t,...e){if(qr.logLevel<=te.DEBUG){const n=e.map(Bd);qr.debug(`Firestore (${Xi}): ${t}`,...n)}}function Cn(t,...e){if(qr.logLevel<=te.ERROR){const n=e.map(Bd);qr.error(`Firestore (${Xi}): ${t}`,...n)}}function Kr(t,...e){if(qr.logLevel<=te.WARN){const n=e.map(Bd);qr.warn(`Firestore (${Xi}): ${t}`,...n)}}function Bd(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,aw(t,r,n)}function aw(t,e,n){let r=`FIRESTORE (${Xi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Cn(r),new Error(r)}function oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||aw(e,i,r)}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class EC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TC{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ar,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new lw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Xe(e)}}class IC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class SC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new IC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ig{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ut(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ig(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ig(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=CC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function wh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return fc(i)===fc(s)?ne(i,s):fc(i)?1:-1}return ne(t.length,e.length)}const RC=55296,kC=57343;function fc(t){const e=t.charCodeAt(0);return e>=RC&&e<=kC}function zi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="__name__";class Zt{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Zt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=Zt.isNumericId(e),i=Zt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Zt.extractNumericId(e).compare(Zt.extractNumericId(n)):wh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return or.fromString(e.substring(4,e.length-2))}}class ve extends Zt{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const PC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Zt{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return PC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sg}static keyField(){return new We([sg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ve.fromString(e))}static fromName(e){return new H(ve.fromString(e).popFirst(5))}static empty(){return new H(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ve(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(t,e,n){if(!n)throw new W(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xC(t,e,n,r){if(e===!0&&r===!0)throw new W(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function og(t){if(!H.isDocumentKey(t))throw new W(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Wd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q(12329,{type:typeof t})}function _o(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wd(t);throw new W(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t,e){const n={typeString:t};return e&&(n.value=e),n}function Mo(t,e){if(!uw(t))throw new W(b.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(b.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=-62135596800,lg=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*lg);return new pe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ag)throw new W(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lg}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Mo(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ag;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:Ne("string",pe._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new pe(0,0))}static max(){return new Y(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=-1;function DC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new cr(i,H.empty(),e)}function VC(t){return new cr(t.readTime,t.key,vo)}class cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cr(Y.min(),H.empty(),vo)}static max(){return new cr(Y.max(),H.empty(),vo)}}function OC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==LC)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function bC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function es(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}tu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=-1;function nu(t){return t==null}function Tl(t){return t===0&&1/t==-1/0}function jC(t){return typeof t=="number"&&Number.isInteger(t)&&!Tl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="";function FC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ug(e)),e=UC(t.get(n),e);return ug(e)}function UC(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case cw:n+="";break;default:n+=s}}return n}function ug(t){return t+cw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _a(this.root,e,this.comparator,!1)}getReverseIterator(){return new _a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _a(this.root,e,this.comparator,!0)}}class _a{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??$e.EMPTY,this.right=s??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hg(this.data.getIterator())}getIteratorFrom(e){return new hg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class hg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new Le(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new dw("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const zC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=zC.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function dr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="server_timestamp",pw="__type__",mw="__previous_value__",gw="__local_write_time__";function qd(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[pw])==null?void 0:r.stringValue)===fw}function ru(t){const e=t.mapValue.fields[mw];return qd(e)?ru(e):e}function wo(t){const e=hr(t.mapValue.fields[gw].timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n,r,i,s,o,l,u,h,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m}}const Il="(default)";class Eo{constructor(e,n){this.projectId=e,this.database=n||Il}static empty(){return new Eo("","")}get isDefaultDatabase(){return this.database===Il}isEqual(e){return e instanceof Eo&&e.projectId===this.projectId&&e.database===this.database}}function $C(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Eo(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="__type__",WC="__max__",va={mapValue:{}},_w="__vector__",Sl="value";function fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qd(t)?4:qC(t)?9007199254740991:HC(t)?10:11:q(28295,{value:t})}function un(t,e){if(t===e)return!0;const n=fr(t);if(n!==fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wo(t).isEqual(wo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=hr(i.timestampValue),l=hr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return dr(i.bytesValue).isEqual(dr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),l=Ce(s.doubleValue);return o===l?Tl(o)===Tl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return zi(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(cg(o)!==cg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!un(o[u],l[u])))return!1;return!0}(t,e);default:return q(52216,{left:t})}}function To(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function Bi(t,e){if(t===e)return 0;const n=fr(t),r=fr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ce(s.integerValue||s.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return dg(t.timestampValue,e.timestampValue);case 4:return dg(wo(t),wo(e));case 5:return wh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=dr(s),u=dr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ne(l[h],u[h]);if(f!==0)return f}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(Ce(s.latitude),Ce(o.latitude));return l!==0?l:ne(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return fg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var _,C,x,P;const l=s.fields||{},u=o.fields||{},h=(_=l[Sl])==null?void 0:_.arrayValue,f=(C=u[Sl])==null?void 0:C.arrayValue,m=ne(((x=h==null?void 0:h.values)==null?void 0:x.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return m!==0?m:fg(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===va.mapValue&&o===va.mapValue)return 0;if(s===va.mapValue)return 1;if(o===va.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const _=wh(u[m],f[m]);if(_!==0)return _;const C=Bi(l[u[m]],h[f[m]]);if(C!==0)return C}return ne(u.length,f.length)}(t.mapValue,e.mapValue);default:throw q(23264,{he:n})}}function dg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=hr(t),r=hr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function fg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Bi(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function $i(t){return Eh(t)}function Eh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Eh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Eh(n.fields[o])}`;return i+"}"}(t.mapValue):q(61005,{value:t})}function Fa(t){switch(fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ru(t);return e?16+Fa(e):16;case 5:return 2*t.stringValue.length;case 6:return dr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Fa(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Jr(r.fields,(s,o)=>{i+=s.length+Fa(o)}),i}(t.mapValue);default:throw q(13486,{value:t})}}function Th(t){return!!t&&"integerValue"in t}function Kd(t){return!!t&&"arrayValue"in t}function pg(t){return!!t&&"nullValue"in t}function mg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ua(t){return!!t&&"mapValue"in t}function HC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[yw])==null?void 0:r.stringValue)===_w}function Ks(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Jr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ks(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ks(t.arrayValue.values[n]);return e}return{...t}}function qC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===WC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ua(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ks(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ua(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ua(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Jr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Rt(Ks(this.value))}}function vw(t){const e=[];return Jr(t.fields,(n,r)=>{const i=new We([n]);if(Ua(r)){const s=vw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new et(e,0,Y.min(),Y.min(),Y.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,i){return new et(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new et(e,2,n,Y.min(),Y.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,Y.min(),Y.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n){this.position=e,this.inclusive=n}}function gg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Bi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function yg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n="asc"){this.field=e,this.dir=n}}function KC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{}class Ve extends ww{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new QC(e,n,r):n==="array-contains"?new XC(e,r):n==="in"?new ZC(e,r):n==="not-in"?new eR(e,r):n==="array-contains-any"?new tR(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new YC(e,r):new JC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Bi(n,this.value)):n!==null&&fr(this.value)===fr(n)&&this.matchesComparison(Bi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends ww{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new cn(e,n)}matches(e){return Ew(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ew(t){return t.op==="and"}function Tw(t){return GC(t)&&Ew(t)}function GC(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function Ih(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+$i(t.value);if(Tw(t))return t.filters.map(e=>Ih(e)).join(",");{const e=t.filters.map(n=>Ih(n)).join(",");return`${t.op}(${e})`}}function Iw(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&un(r.value,i.value)}(t,e):t instanceof cn?function(r,i){return i instanceof cn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Iw(o,i.filters[l]),!0):!1}(t,e):void q(19439)}function Sw(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${$i(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(Sw).join(" ,")+"}"}(t):"Filter"}class QC extends Ve{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class YC extends Ve{constructor(e,n){super(e,"in",n),this.keys=Aw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class JC extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=Aw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Aw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class XC extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kd(n)&&To(n.arrayValue,this.value)}}class ZC extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&To(this.value.arrayValue,n)}}class eR extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(To(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!To(this.value.arrayValue,n)}}class tR extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>To(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function _g(t,e=null,n=[],r=[],i=null,s=null,o=null){return new nR(t,e,n,r,i,s,o)}function Gd(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ih(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),nu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>$i(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>$i(r)).join(",")),e.Te=n}return e.Te}function Qd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!KC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Iw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yg(t.startAt,e.startAt)&&yg(t.endAt,e.endAt)}function Sh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function rR(t,e,n,r,i,s,o,l){return new iu(t,e,n,r,i,s,o,l)}function Yd(t){return new iu(t)}function vg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function iR(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function sR(t){return t.collectionGroup!==null}function Gs(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Le(We.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Cl(s,r))}),n.has(We.keyField().canonicalString())||e.Ie.push(new Cl(We.keyField(),r))}return e.Ie}function sn(t){const e=J(t);return e.Ee||(e.Ee=oR(e,Gs(t))),e.Ee}function oR(t,e){if(t.limitType==="F")return _g(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Cl(i.field,s)});const n=t.endAt?new Al(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Al(t.startAt.position,t.startAt.inclusive):null;return _g(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ah(t,e,n){return new iu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function su(t,e){return Qd(sn(t),sn(e))&&t.limitType===e.limitType}function Cw(t){return`${Gd(sn(t))}|lt:${t.limitType}`}function oi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Sw(i)).join(", ")}]`),nu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>$i(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>$i(i)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function ou(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Gs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=gg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Gs(r),i)||r.endAt&&!function(o,l,u){const h=gg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Gs(r),i))}(t,e)}function aR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Rw(t){return(e,n)=>{let r=!1;for(const i of Gs(t)){const s=lR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lR(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Bi(u,h):q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Jr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=new Te(H.comparator);function Rn(){return uR}const kw=new Te(H.comparator);function Vs(...t){let e=kw;for(const n of t)e=e.insert(n.key,n);return e}function Pw(t){let e=kw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vr(){return Qs()}function Nw(){return Qs()}function Qs(){return new Xr(t=>t.toString(),(t,e)=>t.isEqual(e))}const cR=new Te(H.comparator),hR=new Le(H.comparator);function re(...t){let e=hR;for(const n of t)e=e.add(n);return e}const dR=new Le(ne);function fR(){return dR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tl(e)?"-0":e}}function xw(t){return{integerValue:""+t}}function pR(t,e){return jC(e)?xw(e):Jd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this._=void 0}}function mR(t,e,n){return t instanceof Rl?function(i,s){const o={fields:{[pw]:{stringValue:fw},[gw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&qd(s)&&(s=ru(s)),s&&(o.fields[mw]=s),{mapValue:o}}(n,e):t instanceof Io?Vw(t,e):t instanceof So?Ow(t,e):function(i,s){const o=Dw(i,s),l=wg(o)+wg(i.Ae);return Th(o)&&Th(i.Ae)?xw(l):Jd(i.serializer,l)}(t,e)}function gR(t,e,n){return t instanceof Io?Vw(t,e):t instanceof So?Ow(t,e):n}function Dw(t,e){return t instanceof kl?function(r){return Th(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Rl extends au{}class Io extends au{constructor(e){super(),this.elements=e}}function Vw(t,e){const n=Lw(e);for(const r of t.elements)n.some(i=>un(i,r))||n.push(r);return{arrayValue:{values:n}}}class So extends au{constructor(e){super(),this.elements=e}}function Ow(t,e){let n=Lw(e);for(const r of t.elements)n=n.filter(i=>!un(i,r));return{arrayValue:{values:n}}}class kl extends au{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function wg(t){return Ce(t.integerValue||t.doubleValue)}function Lw(t){return Kd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Io&&i instanceof Io||r instanceof So&&i instanceof So?zi(r.elements,i.elements,un):r instanceof kl&&i instanceof kl?un(r.Ae,i.Ae):r instanceof Rl&&i instanceof Rl}(t.transform,e.transform)}class _R{constructor(e,n){this.version=e,this.transformResults=n}}class vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function za(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lu{}function Mw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jw(t.key,vn.none()):new bo(t.key,t.data,vn.none());{const n=t.data,r=Rt.empty();let i=new Le(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Zr(t.key,r,new Bt(i.toArray()),vn.none())}}function vR(t,e,n){t instanceof bo?function(i,s,o){const l=i.value.clone(),u=Tg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Zr?function(i,s,o){if(!za(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Tg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(bw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ys(t,e,n,r){return t instanceof bo?function(s,o,l,u){if(!za(s.precondition,o))return l;const h=s.value.clone(),f=Ig(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Zr?function(s,o,l,u){if(!za(s.precondition,o))return l;const h=Ig(s.fieldTransforms,u,o),f=o.data;return f.setAll(bw(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return za(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function wR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Dw(r.transform,i||null);s!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,s))}return n||null}function Eg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&zi(r,i,(s,o)=>yR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bo extends lu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zr extends lu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function bw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Tg(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,gR(o,l,n[i]))}return r}function Ig(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,mR(s,o,e))}return r}class jw extends lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ER extends lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&vR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Nw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Mw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&zi(this.mutations,e.mutations,(n,r)=>Eg(n,r))&&zi(this.baseMutations,e.baseMutations,(n,r)=>Eg(n,r))}}class Xd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return cR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Xd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,ie;function AR(t){switch(t){case b.OK:return q(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return q(15467,{code:t})}}function Fw(t){if(t===void 0)return Cn("GRPC error has no .code"),b.UNKNOWN;switch(t){case ke.OK:return b.OK;case ke.CANCELLED:return b.CANCELLED;case ke.UNKNOWN:return b.UNKNOWN;case ke.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ke.INTERNAL:return b.INTERNAL;case ke.UNAVAILABLE:return b.UNAVAILABLE;case ke.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ke.NOT_FOUND:return b.NOT_FOUND;case ke.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ke.ABORTED:return b.ABORTED;case ke.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ke.DATA_LOSS:return b.DATA_LOSS;default:return q(39323,{code:t})}}(ie=ke||(ke={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=new or([4294967295,4294967295],0);function Sg(t){const e=CR().encode(t),n=new tw;return n.update(e),new Uint8Array(n.digest())}function Ag(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new or([n,r],0),new or([i,s],0)]}class Zd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Os(`Invalid padding: ${n}`);if(r<0)throw new Os(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Os(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Os(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=or.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(or.fromNumber(r)));return i.compare(RR)===1&&(i=new or([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Sg(e),[r,i]=Ag(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zd(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Sg(e),[r,i]=Ag(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,jo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new uu(Y.min(),i,new Te(ne),Rn(),re())}}class jo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new jo(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=i}}class Uw{constructor(e,n){this.targetId=e,this.Ce=n}}class zw{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Cg{constructor(){this.ve=0,this.Fe=Rg(),this.Me=Ke.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:q(38017,{changeType:s})}}),new jo(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Rg()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class kR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Rn(),this.He=wa(),this.Je=wa(),this.Ze=new Te(ne)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Sh(s))if(r===0){const o=new H(s.path);this.et(n,o,et.newNoDocument(o,Y.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=dr(r).toUint8Array()}catch(u){if(u instanceof dw)return Kr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Zd(o,i,s)}catch(u){return Kr(u instanceof Os?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Sh(l.target)){const u=new H(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,et.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=re();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new uu(e,n,this.Ze,this.je,r);return this.je=Rn(),this.He=wa(),this.Je=wa(),this.Ze=new Te(ne),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Cg,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Le(ne),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Le(ne),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Cg),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function wa(){return new Te(H.comparator)}function Rg(){return new Te(H.comparator)}const PR={asc:"ASCENDING",desc:"DESCENDING"},NR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xR={and:"AND",or:"OR"};class DR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ch(t,e){return t.useProto3Json||nu(e)?e:{value:e}}function Pl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function VR(t,e){return Pl(t,e.toTimestamp())}function on(t){return oe(!!t,49232),Y.fromTimestamp(function(n){const r=hr(n);return new pe(r.seconds,r.nanos)}(t))}function ef(t,e){return Rh(t,e).canonicalString()}function Rh(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function $w(t){const e=ve.fromString(t);return oe(Gw(e),10190,{key:e.toString()}),e}function kh(t,e){return ef(t.databaseId,e.path)}function pc(t,e){const n=$w(e);if(n.get(1)!==t.databaseId.projectId)throw new W(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Hw(n))}function Ww(t,e){return ef(t.databaseId,e)}function OR(t){const e=$w(t);return e.length===4?ve.emptyPath():Hw(e)}function Ph(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hw(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function kg(t,e,n){return{name:kh(t,e),fields:n.value.mapValue.fields}}function LR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(oe(f===void 0||typeof f=="string",58123),Ke.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ke.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?b.UNKNOWN:Fw(h.code);return new W(f,h.message||"")}(o);n=new zw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=pc(t,r.document.name),s=on(r.document.updateTime),o=r.document.createTime?on(r.document.createTime):Y.min(),l=new Rt({mapValue:{fields:r.document.fields}}),u=et.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ba(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=pc(t,r.document),s=r.readTime?on(r.readTime):Y.min(),o=et.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ba([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=pc(t,r.document),s=r.removedTargetIds||[];n=new Ba([],s,i,null)}else{if(!("filter"in e))return q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new SR(i,s),l=r.targetId;n=new Uw(l,o)}}return n}function MR(t,e){let n;if(e instanceof bo)n={update:kg(t,e.key,e.value)};else if(e instanceof jw)n={delete:kh(t,e.key)};else if(e instanceof Zr)n={update:kg(t,e.key,e.data),updateMask:HR(e.fieldMask)};else{if(!(e instanceof ER))return q(16599,{dt:e.type});n={verify:kh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Rl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof So)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof kl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:VR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q(27497)}(t,e.precondition)),n}function bR(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?on(i.updateTime):on(s);return o.isEqual(Y.min())&&(o=on(s)),new _R(o,i.transformResults||[])}(n,e))):[]}function jR(t,e){return{documents:[Ww(t,e.path)]}}function FR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ww(t,i);const s=function(h){if(h.length!==0)return Kw(cn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:ai(_.field),direction:BR(_.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ch(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function UR(t){let e=OR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const _=qw(m);return _ instanceof cn&&Tw(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(_=>function(x){return new Cl(li(x.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(m){let _;return _=typeof m=="object"?m.value:m,nu(_)?null:_}(n.limit));let u=null;n.startAt&&(u=function(m){const _=!!m.before,C=m.values||[];return new Al(C,_)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const _=!m.before,C=m.values||[];return new Al(C,_)}(n.endAt)),rR(e,i,o,s,l,"F",u,h)}function zR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=li(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=li(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=li(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=li(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(li(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>qw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(n.compositeFilter.op))}(t):q(30097,{filter:t})}function BR(t){return PR[t]}function $R(t){return NR[t]}function WR(t){return xR[t]}function ai(t){return{fieldPath:t.canonicalString()}}function li(t){return We.fromServerFormat(t.fieldPath)}function Kw(t){return t instanceof Ve?function(n){if(n.op==="=="){if(mg(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NAN"}};if(pg(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(mg(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NOT_NAN"}};if(pg(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ai(n.field),op:$R(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(i=>Kw(i));return r.length===1?r[0]:{compositeFilter:{op:WR(n.op),filters:r}}}(t):q(54877,{filter:t})}function HR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Gw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Qw(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.yt=e}}function KR(t){const e=UR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ah(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(){this.Sn=new QR}addToCollectionParentIndex(e,n){return this.Sn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(cr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class QR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Le(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Le(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yw=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(Yw,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Wi(0)}static ar(){return new Wi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="LruGarbageCollector",YR=1048576;function xg([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class JR{constructor(e){this.Pr=e,this.buffer=new Le(xg),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();xg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class XR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(Ng,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){es(n)?B(Ng,"Ignoring IndexedDB error during garbage collection: ",n):await Zi(n)}await this.Ar(3e5)})}}class ZR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(tu.ce);const r=new JR(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Pg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pg):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),si()<=te.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function ek(t,e){return new ZR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.changes=new Xr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ys(r.mutation,i,Bt.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Vr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Vs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Rn();const o=Qs(),l=function(){return Qs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Zr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ys(f.mutation,h,f.mutation.getFieldMask(),pe.now())):o.set(h.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new nk(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Qs();let i=new Te((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Bt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=Nw();f.forEach(_=>{if(!s.has(_)){const C=Mw(n.get(_),r.get(_));C!==null&&m.set(_,C),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return iR(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Vr());let l=vo,u=s;return o.next(h=>L.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,re())).next(f=>({batchId:l,changes:Pw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Vs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Vs();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(m,_){return new iu(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,_)=>{o=o.insert(m,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,et.newInvalidDocument(f)))});let l=Vs();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Ys(f.mutation,h,Bt.empty(),pe.now()),ou(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:on(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:KR(i.bundledQuery),readTime:on(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.overlays=new Te(H.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Vr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Vr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Vr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new IR(n,r));let s=this.Lr.get(n);s===void 0&&(s=re(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.kr=new Le(be.Kr),this.qr=new Le(be.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new be(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new be(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new H(new ve([])),r=new be(n,e),i=new be(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new H(new ve([])),r=new be(n,e),i=new be(n,e+1);let s=re();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new be(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class be{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return H.comparator(e.key,n.key)||ne(e.Hr,n.Hr)}static Ur(e,n){return ne(e.Hr,n.Hr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Le(be.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Jr=this.Jr.add(new be(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Hd:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new be(n,0),i=new be(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(ne);return n.forEach(i=>{const s=new be(i,0),o=new be(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new be(new H(s),0);let l=new Le(ne);return this.Jr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Hr)),!0)},o),L.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return L.forEach(n.mutations,i=>{const s=new be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new be(n,0),i=this.Jr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e){this.ti=e,this.docs=function(){return new Te(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=Rn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Rn();const o=n.path,l=new H(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||OC(VC(f),r)<=0||(i.has(f.key)||ou(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){q(9500)}ni(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new uk(this)}getSize(e){return L.resolve(this.size)}}class uk extends tk{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.persistence=e,this.ri=new Xr(n=>Gd(n),Qd),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new tf,this.targetCount=0,this.oi=Wi._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Wi(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n){this._i={},this.overlays={},this.ai=new tu(0),this.ui=!1,this.ui=!0,this.ci=new ok,this.referenceDelegate=e(this),this.li=new ck(this),this.indexManager=new GR,this.remoteDocumentCache=function(i){return new lk(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new qR(n),this.Pi=new ik(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new ak(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new hk(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return L.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class hk extends MC{constructor(e){super(),this.currentSequenceNumber=e}}class nf{constructor(e){this.persistence=e,this.Ri=new tf,this.Ai=null}static Vi(e){return new nf(e)}get di(){if(this.Ai)return this.Ai;throw q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const i=H.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Nl{constructor(e,n){this.persistence=e,this.fi=new Xr(r=>FC(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=ek(this,n)}static Vi(e,n){return new Nl(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return L.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Fa(e.data.value)),n}wr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new rf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return XI()?8:bC(nt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new dk;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(si()<=te.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",oi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(si()<=te.DEBUG&&B("QueryEngine","Query:",oi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(si()<=te.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",oi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):L.resolve())}gs(e,n){if(vg(n))return L.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ah(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ss(n,h,o,u.readTime)?this.gs(e,Ah(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,i){return vg(n)||i.isEqual(Y.min())?L.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ss(n,o,r,i)?L.resolve(null):(si()<=te.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),oi(n)),this.Ds(e,o,n,DC(i,vo)).next(l=>l))})}bs(e,n){let r=new Le(Rw(e));return n.forEach((i,s)=>{ou(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return si()<=te.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",oi(n)),this.fs.getDocumentsMatchingQuery(e,n,cr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="LocalStore",pk=3e8;class mk{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Te(ne),this.Fs=new Xr(s=>Gd(s),Qd),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rk(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function gk(t,e,n,r){return new mk(t,e,n,r)}async function Xw(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function yk(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,_=m.keys();let C=L.resolve();return _.forEach(x=>{C=C.next(()=>f.getEntry(u,x)).next(P=>{const O=h.docVersions.get(x);oe(O!==null,48541),P.version.compareTo(O)<0&&(m.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Zw(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function _k(t,e){const n=J(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const _=i.get(m);if(!_)return;l.push(n.li.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,m)));let C=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?C=C.withResumeToken(Ke.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(f.resumeToken,r)),i=i.insert(m,C),function(P,O,S){return P.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=pk?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(_,C,f)&&l.push(n.li.updateTargetData(s,C))});let u=Rn(),h=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(vk(s,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(Y.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(m=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.vs=i,s))}function vk(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Rn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):B(sf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function wk(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Hd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ek(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Nh(t,e,n){const r=J(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!es(o))throw o;B(sf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Dg(t,e,n){const r=J(t);let i=Y.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=J(u),_=m.Fs.get(f);return _!==void 0?L.resolve(m.vs.get(_)):m.li.getTargetData(h,f)}(r,o,sn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:re())).next(l=>(Tk(r,aR(e),l),{documents:l,ks:s})))}function Tk(t,e,n){let r=t.Ms.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class Vg{constructor(){this.activeTargetIds=fR()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ik{constructor(){this.vo=new Vg,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Vg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="ConnectivityMonitor";class Lg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(Og,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(Og,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea=null;function xh(){return Ea===null?Ea=function(){return 268435456+Math.round(2147483648*Math.random())}():Ea++,"0x"+Ea.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="RestConnection",Ak={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Ck{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Il?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=xh(),l=this.Qo(e,n.toUriEncodedString());B(mc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:h}=new URL(l),f=Qi(h);return this.zo(e,l,u,r,f).then(m=>(B(mc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Kr(mc,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=Ak[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection",Cs=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Ni extends Ck{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ni.c_){const e=sw();Cs(e,iw.STAT_EVENT,n=>{n.stat===vh.PROXY?B(Je,"STAT_EVENT: detected buffering proxy"):n.stat===vh.NOPROXY&&B(Je,"STAT_EVENT: detected no buffering proxy")}),Ni.c_=!0}}zo(e,n,r,i,s){const o=xh();return new Promise((l,u)=>{const h=new nw;h.setWithCredentials(!0),h.listenOnce(rw.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ja.NO_ERROR:const m=h.getResponseJson();B(Je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case ja.TIMEOUT:B(Je,`RPC '${e}' ${o} timed out`),u(new W(b.DEADLINE_EXCEEDED,"Request time out"));break;case ja.HTTP_ERROR:const _=h.getStatus();if(B(Je,`RPC '${e}' ${o} failed with status:`,_,"response text:",h.getResponseText()),_>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const x=C==null?void 0:C.error;if(x&&x.status&&x.message){const P=function(S){const E=S.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(E)>=0?E:b.UNKNOWN}(x.status);u(new W(P,x.message))}else u(new W(b.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new W(b.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{B(Je,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);B(Je,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=xh(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");B(Je,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);this.I_(f);let m=!1,_=!1;const C=new Rk({Ho:x=>{_?B(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(B(Je,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),B(Je,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},Jo:()=>f.close()});return Cs(f,Ds.EventType.OPEN,()=>{_||(B(Je,`RPC '${e}' stream ${i} transport opened.`),C.i_())}),Cs(f,Ds.EventType.CLOSE,()=>{_||(_=!0,B(Je,`RPC '${e}' stream ${i} transport closed`),C.o_(),this.E_(f))}),Cs(f,Ds.EventType.ERROR,x=>{_||(_=!0,Kr(Je,`RPC '${e}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),C.o_(new W(b.UNAVAILABLE,"The operation could not be completed")))}),Cs(f,Ds.EventType.MESSAGE,x=>{var P;if(!_){const O=x.data[0];oe(!!O,16349);const S=O,E=(S==null?void 0:S.error)||((P=S[0])==null?void 0:P.error);if(E){B(Je,`RPC '${e}' stream ${i} received error:`,E);const R=E.status;let D=function(v){const y=ke[v];if(y!==void 0)return Fw(y)}(R),M=E.message;R==="NOT_FOUND"&&M.includes("database")&&M.includes("does not exist")&&M.includes(this.databaseId.database)&&Kr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=b.INTERNAL,M="Unknown error status: "+R+" with message "+E.message),_=!0,C.o_(new W(D,M)),f.close()}else B(Je,`RPC '${e}' stream ${i} received:`,O),C.__(O)}}),Ni.u_(),setTimeout(()=>{C.s_()},0),C}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ow()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(t){return new Ni(t)}function gc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t){return new DR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ni.c_=!1;class eE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="PersistentStream";class tE{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.b_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new eE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Cn(n.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new W(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.H_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return B(Mg,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(B(Mg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Pk extends tE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=LR(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?on(o.readTime):Y.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Ph(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Sh(u)?{documents:jR(s,u)}:{query:FR(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Bw(s,o.resumeToken);const h=Ch(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Pl(s,o.snapshotVersion.toTimestamp());const h=Ch(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=zR(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Ph(this.serializer),n.removeTarget=e,this.K_(n)}}class Nk extends tE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=bR(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ph(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>MR(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{}class Dk extends xk{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new W(b.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Rh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(b.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Rh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(b.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Vk(t,e,n,r){return new Dk(t,e,n,r)}class Ok{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Cn(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="RemoteStore";class Lk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ei(this)&&(B(Gr,"Restarting streams for network reachability change."),await async function(u){const h=J(u);h.Ea.add(4),await Fo(h),h.Va.set("Unknown"),h.Ea.delete(4),await hu(h)}(this))})}),this.Va=new Ok(r,i)}}async function hu(t){if(ei(t))for(const e of t.Ra)await e(!0)}async function Fo(t){for(const e of t.Ra)await e(!1)}function nE(t,e){const n=J(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),uf(n)?lf(n):ts(n).O_()&&af(n,e))}function of(t,e){const n=J(t),r=ts(n);n.Ia.delete(e),r.O_()&&rE(n,e),n.Ia.size===0&&(r.O_()?r.L_():ei(n)&&n.Va.set("Unknown"))}function af(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ts(t).Z_(e)}function rE(t,e){t.da.$e(e),ts(t).X_(e)}function lf(t){t.da=new kR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ts(t).start(),t.Va.ua()}function uf(t){return ei(t)&&!ts(t).x_()&&t.Ia.size>0}function ei(t){return J(t).Ea.size===0}function iE(t){t.da=void 0}async function Mk(t){t.Va.set("Online")}async function bk(t){t.Ia.forEach((e,n)=>{af(t,e)})}async function jk(t,e){iE(t),uf(t)?(t.Va.ha(e),lf(t)):t.Va.set("Unknown")}async function Fk(t,e,n){if(t.Va.set("Online"),e instanceof zw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){B(Gr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xl(t,r)}else if(e instanceof Ba?t.da.Xe(e):e instanceof Uw?t.da.st(e):t.da.tt(e),!n.isEqual(Y.min()))try{const r=await Zw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(h);f&&s.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(Ke.EMPTY_BYTE_STRING,f.snapshotVersion)),rE(s,u);const m=new Gn(f.target,u,h,f.sequenceNumber);af(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){B(Gr,"Failed to raise snapshot:",r),await xl(t,r)}}async function xl(t,e,n){if(!es(e))throw e;t.Ea.add(1),await Fo(t),t.Va.set("Offline"),n||(n=()=>Zw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(Gr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await hu(t)})}function sE(t,e){return e().catch(n=>xl(t,n,e))}async function du(t){const e=J(t),n=pr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hd;for(;Uk(e);)try{const i=await wk(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,zk(e,i)}catch(i){await xl(e,i)}oE(e)&&aE(e)}function Uk(t){return ei(t)&&t.Ta.length<10}function zk(t,e){t.Ta.push(e);const n=pr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function oE(t){return ei(t)&&!pr(t).x_()&&t.Ta.length>0}function aE(t){pr(t).start()}async function Bk(t){pr(t).ra()}async function $k(t){const e=pr(t);for(const n of t.Ta)e.ea(n.mutations)}async function Wk(t,e,n){const r=t.Ta.shift(),i=Xd.from(r,e,n);await sE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await du(t)}async function Hk(t,e){e&&pr(t).Y_&&await async function(r,i){if(function(o){return AR(o)&&o!==b.ABORTED}(i.code)){const s=r.Ta.shift();pr(r).B_(),await sE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await du(r)}}(t,e),oE(t)&&aE(t)}async function bg(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),B(Gr,"RemoteStore received new credentials");const r=ei(n);n.Ea.add(3),await Fo(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await hu(n)}async function qk(t,e){const n=J(t);e?(n.Ea.delete(2),await hu(n)):e||(n.Ea.add(2),await Fo(n),n.Va.set("Unknown"))}function ts(t){return t.ma||(t.ma=function(n,r,i){const s=J(n);return s.sa(),new Pk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:Mk.bind(null,t),Yo:bk.bind(null,t),t_:jk.bind(null,t),J_:Fk.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),uf(t)?lf(t):t.Va.set("Unknown")):(await t.ma.stop(),iE(t))})),t.ma}function pr(t){return t.fa||(t.fa=function(n,r,i){const s=J(n);return s.sa(),new Nk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Bk.bind(null,t),t_:Hk.bind(null,t),ta:$k.bind(null,t),na:Wk.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await du(t)):(await t.fa.stop(),t.Ta.length>0&&(B(Gr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new cf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hf(t,e){if(Cn("AsyncQueue",`${e}: ${t}`),es(t))return new W(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{static emptySet(e){return new xi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Vs(),this.sortedSet=new Te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.ga=new Te(H.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):q(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Hi(e,n,xi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&su(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class Gk{constructor(){this.queries=Fg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=Fg(),s.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new W(b.ABORTED,"Firestore shutting down"))}}function Fg(){return new Xr(t=>Cw(t),su)}async function Qk(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.Da()&&(r=2):(s=new Kk,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=hf(o,`Initialization of query '${oi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.ba.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&df(n)}async function Yk(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ba.indexOf(e);o>=0&&(s.ba.splice(o,1),s.ba.length===0?i=e.Da()?0:1:!s.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Jk(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.ba)l.Fa(i)&&(r=!0);o.wa=i}}r&&df(n)}function Xk(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.ba)s.onError(n);r.queries.delete(e)}function df(t){t.Ca.forEach(e=>{e.next()})}var Dh,Ug;(Ug=Dh||(Dh={})).Ma="default",Ug.Cache="cache";class Zk{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Hi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Hi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Dh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.key=e}}class uE{constructor(e){this.key=e}}class eP{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=re(),this.mutatedKeys=re(),this.eu=Rw(e),this.tu=new xi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new jg,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const _=i.get(f),C=ou(this.query,m)?m:null,x=!!_&&this.mutatedKeys.has(_.key),P=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let O=!1;_&&C?_.data.isEqual(C.data)?x!==P&&(r.track({type:3,doc:C}),O=!0):this.su(_,C)||(r.track({type:2,doc:C}),O=!0,(u&&this.eu(C,u)>0||h&&this.eu(C,h)<0)&&(l=!0)):!_&&C?(r.track({type:0,doc:C}),O=!0):_&&!C&&(r.track({type:1,doc:_}),O=!0,(u||h)&&(l=!0)),O&&(C?(o=o.add(C),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(C,x){const P=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Vt:O})}};return P(C)-P(x)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,h=u!==this.Xa;return this.Xa=u,o.length!==0||h?{snapshot:new Hi(this.query,e.tu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new jg,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new uE(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new lE(r))}),n}cu(e){this.Za=e.ks,this.Ya=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Hi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ff="SyncEngine";class tP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class nP{constructor(e){this.key=e,this.hu=!1}}class rP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Xr(l=>Cw(l),su),this.Iu=new Map,this.Eu=new Set,this.Ru=new Te(H.comparator),this.Au=new Map,this.Vu=new tf,this.du={},this.mu=new Map,this.fu=Wi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function iP(t,e,n=!0){const r=mE(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await cE(r,e,n,!0),i}async function sP(t,e){const n=mE(t);await cE(n,e,!0,!1)}async function cE(t,e,n,r){const i=await Ek(t.localStore,sn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await oP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&nE(t.remoteStore,i),l}async function oP(t,e,n,r,i){t.pu=(m,_,C)=>async function(P,O,S,E){let R=O.view.ru(S);R.Ss&&(R=await Dg(P.localStore,O.query,!1).then(({documents:v})=>O.view.ru(v,R)));const D=E&&E.targetChanges.get(O.targetId),M=E&&E.targetMismatches.get(O.targetId)!=null,F=O.view.applyChanges(R,P.isPrimaryClient,D,M);return Bg(P,O.targetId,F.au),F.snapshot}(t,m,_,C);const s=await Dg(t.localStore,e,!0),o=new eP(e,s.ks),l=o.ru(s.documents),u=jo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Bg(t,n,h.au);const f=new tP(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function aP(t,e,n){const r=J(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!su(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Nh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&of(r.remoteStore,i.targetId),Vh(r,i.targetId)}).catch(Zi)):(Vh(r,i.targetId),await Nh(r.localStore,i.targetId,!0))}async function lP(t,e){const n=J(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),of(n.remoteStore,r.targetId))}async function uP(t,e,n){const r=gP(t);try{const i=await function(o,l){const u=J(o),h=pe.now(),f=l.reduce((C,x)=>C.add(x.key),re());let m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let x=Rn(),P=re();return u.xs.getEntries(C,f).next(O=>{x=O,x.forEach((S,E)=>{E.isValidDocument()||(P=P.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,x)).next(O=>{m=O;const S=[];for(const E of l){const R=wR(E,m.get(E.key).overlayedDocument);R!=null&&S.push(new Zr(E.key,R,vw(R.value.mapValue),vn.exists(!0)))}return u.mutationQueue.addMutationBatch(C,h,S,l)}).next(O=>{_=O;const S=O.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(C,O.batchId,S)})}).then(()=>({batchId:_.batchId,changes:Pw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.du[o.currentUser.toKey()];h||(h=new Te(ne)),h=h.insert(l,u),o.du[o.currentUser.toKey()]=h}(r,i.batchId,n),await Uo(r,i.changes),await du(r.remoteStore)}catch(i){const s=hf(i,"Failed to persist write");n.reject(s)}}async function hE(t,e){const n=J(t);try{const r=await _k(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?oe(o.hu,14607):i.removedDocuments.size>0&&(oe(o.hu,42227),o.hu=!1))}),await Uo(n,r,e)}catch(r){await Zi(r)}}function zg(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const _ of m.ba)_.va(l)&&(h=!0)}),h&&df(u)}(r.eventManager,e),i.length&&r.Pu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cP(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Te(H.comparator);o=o.insert(s,et.newNoDocument(s,Y.min()));const l=re().add(s),u=new uu(Y.min(),new Map,new Te(ne),o,l);await hE(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),pf(r)}else await Nh(r.localStore,e,!1).then(()=>Vh(r,e,n)).catch(Zi)}async function hP(t,e){const n=J(t),r=e.batch.batchId;try{const i=await yk(n.localStore,e);fE(n,r,null),dE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Uo(n,i)}catch(i){await Zi(i)}}async function dP(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(oe(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);fE(r,e,n),dE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Uo(r,i)}catch(i){await Zi(i)}}function dE(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function fE(t,e,n){const r=J(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Vh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||pE(t,r)})}function pE(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(of(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),pf(t))}function Bg(t,e,n){for(const r of n)r instanceof lE?(t.Vu.addReference(r.key,e),fP(t,r)):r instanceof uE?(B(ff,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||pE(t,r.key)):q(19791,{wu:r})}function fP(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(B(ff,"New document in limbo: "+n),t.Eu.add(r),pf(t))}function pf(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new H(ve.fromString(e)),r=t.fu.next();t.Au.set(r,new nP(n)),t.Ru=t.Ru.insert(n,r),nE(t.remoteStore,new Gn(sn(Yd(n.path)),r,"TargetPurposeLimboResolution",tu.ce))}}async function Uo(t,e,n){const r=J(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=rf.Es(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Pu.J_(i),await async function(u,h){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(h,_=>L.forEach(_.Ts,C=>f.persistence.referenceDelegate.addReference(m,_.targetId,C)).next(()=>L.forEach(_.Is,C=>f.persistence.referenceDelegate.removeReference(m,_.targetId,C)))))}catch(m){if(!es(m))throw m;B(sf,"Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const C=f.vs.get(_),x=C.snapshotVersion,P=C.withLastLimboFreeSnapshotVersion(x);f.vs=f.vs.insert(_,P)}}}(r.localStore,s))}async function pP(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){B(ff,"User change. New user:",e.toKey());const r=await Xw(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new W(b.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Uo(n,r.Ns)}}function mP(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let i=re();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function mE(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cP.bind(null,e),e.Pu.J_=Jk.bind(null,e.eventManager),e.Pu.yu=Xk.bind(null,e.eventManager),e}function gP(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dP.bind(null,e),e}class Dl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=cu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return gk(this.persistence,new fk,e.initialUser,this.serializer)}Cu(e){return new Jw(nf.Vi,this.serializer)}Du(e){return new Ik}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Dl.provider={build:()=>new Dl};class yP extends Dl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){oe(this.persistence.referenceDelegate instanceof Nl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new XR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new Jw(r=>Nl.Vi(r,n),this.serializer)}}class Oh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pP.bind(null,this.syncEngine),await qk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Gk}()}createDatastore(e){const n=cu(e.databaseInfo.databaseId),r=kk(e.databaseInfo);return Vk(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Lk(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>zg(this.syncEngine,n,0),function(){return Lg.v()?new Lg:new Sk}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new rP(i,s,o,l,u,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);B(Gr,"RemoteStore shutting down."),s.Ea.add(5),await Fo(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Oh.provider={build:()=>new Oh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Cn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="FirestoreClient";class vP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=$d.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B(mr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(mr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yc(t,e){t.asyncQueue.verifyOperationInProgress(),B(mr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Xw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $g(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wP(t);B(mr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>bg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>bg(e.remoteStore,i)),t._onlineComponents=e}async function wP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(mr,"Using user provided OfflineComponentProvider");try{await yc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Kr("Error using user provided cache. Falling back to memory cache: "+n),await yc(t,new Dl)}}else B(mr,"Using default OfflineComponentProvider"),await yc(t,new yP(void 0));return t._offlineComponents}async function gE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(mr,"Using user provided OnlineComponentProvider"),await $g(t,t._uninitializedComponentsProvider._online)):(B(mr,"Using default OnlineComponentProvider"),await $g(t,new Oh))),t._onlineComponents}function EP(t){return gE(t).then(e=>e.syncEngine)}async function TP(t){const e=await gE(t),n=e.eventManager;return n.onListen=iP.bind(null,e.syncEngine),n.onUnlisten=aP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=sP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=lP.bind(null,e.syncEngine),n}function IP(t,e,n={}){const r=new ar;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new _P({next:_=>{f.Nu(),o.enqueueAndForget(()=>Yk(s,m));const C=_.docs.has(l);!C&&_.fromCache?h.reject(new W(b.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&_.fromCache&&u&&u.source==="server"?h.reject(new W(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new Zk(Yd(l.path),f,{includeMetadataChanges:!0,Ka:!0});return Qk(s,m)}(await TP(t),t.asyncQueue,e,n,r)),r.promise}function SP(t,e){const n=new ar;return t.asyncQueue.enqueueAndForget(async()=>uP(await EP(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP="ComponentProvider",Wg=new Map;function CP(t,e,n,r,i){return new BC(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,yE(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="firestore.googleapis.com",Hg=!0;class qg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_E,this.ssl=Hg}else this.host=e.host,this.ssl=e.ssl??Hg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<YR)throw new W(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wC;switch(r.type){case"firstParty":return new SC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wg.get(n);r&&(B(AP,"Removing Datastore"),Wg.delete(n),r.terminate())}(this),Promise.resolve()}}function RP(t,e,n,r={}){var h;t=_o(t,mf);const i=Qi(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(yv(`https://${l}`),_v("Firestore",!0)),s.host!==_E&&s.host!==l&&Kr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!$r(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Xe.MOCK_USER;else{f=$I(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new W(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Xe(_)}t._authCredentials=new EC(new lw(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gf(this.firestore,e,this._query)}}class Fe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ao(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}toJSON(){return{type:Fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Mo(n,Fe._jsonSchema))return new Fe(e,r||null,new H(ve.fromString(n.referencePath)))}}Fe._jsonSchemaVersion="firestore/documentReference/1.0",Fe._jsonSchema={type:Ne("string",Fe._jsonSchemaVersion),referencePath:Ne("string")};class Ao extends gf{constructor(e,n,r){super(e,n,Yd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new H(e))}withConverter(e){return new Ao(this.firestore,e,this._path)}}function vE(t,e,...n){if(t=Vt(t),arguments.length===1&&(e=$d.newId()),NC("doc","path",e),t instanceof mf){const r=ve.fromString(e,...n);return og(r),new Fe(t,null,new H(r))}{if(!(t instanceof Fe||t instanceof Ao))throw new W(b.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return og(r),new Fe(t.firestore,t instanceof Ao?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="AsyncQueue";class Gg{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new eE(this,"async_queue_retry"),this._c=()=>{const r=gc();r&&B(Kg,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=gc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ar;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!es(e))throw e;B(Kg,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Cn("INTERNAL UNHANDLED ERROR: ",Qg(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=cf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&q(47125,{Pc:Qg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Qg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class yf extends mf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Gg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gg(e),this._firestoreClient=void 0,await e}}}function kP(t,e){const n=typeof t=="object"?t:Tv(),r=typeof t=="string"?t:Il,i=xd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=zI("firestore");s&&RP(i,...s)}return i}function wE(t){if(t._terminated)throw new W(b.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||PP(t),t._firestoreClient}function PP(t){var r,i,s,o;const e=t._freezeSettings(),n=CP(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new vP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kt(Ke.fromBase64String(e))}catch(n){throw new W(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new kt(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Mo(e,kt._jsonSchema))return kt.fromBase64String(e.bytes)}}kt._jsonSchemaVersion="firestore/bytes/1.0",kt._jsonSchema={type:Ne("string",kt._jsonSchemaVersion),bytes:Ne("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:an._jsonSchemaVersion}}static fromJSON(e){if(Mo(e,an._jsonSchema))return new an(e.latitude,e.longitude)}}an._jsonSchemaVersion="firestore/geoPoint/1.0",an._jsonSchema={type:Ne("string",an._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Mo(e,qt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new qt(e.vectorValues);throw new W(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qt._jsonSchemaVersion="firestore/vectorValue/1.0",qt._jsonSchema={type:Ne("string",qt._jsonSchemaVersion),vectorValues:Ne("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=/^__.*__$/;class xP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new bo(e,this.data,n,this.fieldTransforms)}}function IE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{dataSource:t})}}class _f{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new _f({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Vl(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(IE(this.dataSource)&&NP.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class DP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||cu(e)}createContext(e,n,r,i=!1){return new _f({dataSource:e,methodName:n,targetDoc:r,path:We.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function VP(t){const e=t._freezeSettings(),n=cu(t._databaseId);return new DP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function OP(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);RE("Data must be an object, but it was:",o,r);const l=AE(r,o);let u,h;if(s.merge)u=new Bt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const _=vf(e,m,n);if(!o.contains(_))throw new W(b.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);bP(f,_)||f.push(_)}u=new Bt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new xP(new Rt(l),u,h)}function SE(t,e){if(CE(t=Vt(t)))return RE("Unsupported field value:",e,t),AE(t,e);if(t instanceof TE)return function(r,i){if(!IE(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=SE(l,i.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:Pl(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pl(i.serializer,s)}}if(r instanceof an)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof kt)return{bytesValue:Bw(i.serializer,r._byteString)};if(r instanceof Fe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ef(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof qt)return function(o,l){const u=o instanceof qt?o.toArray():o;return{mapValue:{fields:{[yw]:{stringValue:_w},[Sl]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return Jd(l.serializer,f)})}}}}}}(r,i);if(Qw(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Wd(r)}`)}(t,e)}function AE(t,e){const n={};return hw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jr(t,(r,i)=>{const s=SE(i,e.childContextForField(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function CE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof an||t instanceof kt||t instanceof Fe||t instanceof TE||t instanceof qt||Qw(t))}function RE(t,e,n){if(!CE(n)||!uw(n)){const r=Wd(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function vf(t,e,n){if((e=Vt(e))instanceof EE)return e._internalPath;if(typeof e=="string")return MP(t,e);throw Vl("Field path arguments must be of type string or ",t,!1,void 0,n)}const LP=new RegExp("[~\\*/\\[\\]]");function MP(t,e,n){if(e.search(LP)>=0)throw Vl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new EE(...e.split("."))._internalPath}catch{throw Vl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(b.INVALID_ARGUMENT,l+t+u)}function bP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{convertValue(e,n="none"){switch(fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Jr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Sl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ce(o.doubleValue));return new qt(n)}convertGeoPoint(e){return new an(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ru(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wo(e));default:return null}}convertTimestamp(e){const n=hr(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);oe(Gw(r),9688,{name:e});const i=new Eo(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Cn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP extends jP{constructor(e){super(),this.firestore=e}convertBytes(e){return new kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,n)}}const Yg="@firebase/firestore",Jg="4.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(vf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UP extends kE{data(){return super.data()}}function zP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ls{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class br extends kE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=br._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}br._jsonSchemaVersion="firestore/documentSnapshot/1.0",br._jsonSchema={type:Ne("string",br._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class $a extends br{data(e={}){return super.data(e)}}class Js{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ls(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $a(this._firestore,this._userDataWriter,r.key,r,new Ls(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new $a(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ls(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new $a(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ls(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:BP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Js._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$d.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function BP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Js._jsonSchemaVersion="firestore/querySnapshot/1.0",Js._jsonSchema={type:Ne("string",Js._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t){t=_o(t,Fe);const e=_o(t.firestore,yf),n=wE(e);return IP(n,t._key).then(r=>qP(e,t,r))}function WP(t,e,n){t=_o(t,Fe);const r=_o(t.firestore,yf),i=zP(t.converter,e,n),s=VP(r);return HP(r,[OP(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,vn.none())])}function HP(t,e){const n=wE(t);return SP(n,e)}function qP(t,e,n){const r=n.docs.get(e._key),i=new FP(t);return new br(t,i,e._key,r,new Ls(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){vC(Yi),Fi(new Wr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new yf(new TC(r.getProvider("auth-internal")),new AC(o,r.getProvider("app-check-internal")),$C(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),sr(Yg,Jg,e),sr(Yg,Jg,"esm2020")})();const KP={apiKey:"AIzaSyCioLheOGt0TjrvfBQ3kyhGTW72jErfEZg",authDomain:"mingalarpar-dictornary.firebaseapp.com",projectId:"mingalarpar-dictornary",storageBucket:"mingalarpar-dictornary.firebasestorage.app",messagingSenderId:"386058403870",appId:"1:386058403870:web:c4e2dce37d4de422d82e0f"},PE=Ev(KP),_c=yC(PE),NE=kP(PE);async function Rs(t,e,n){const r={saved:e};n&&(r.apiKey=n),await WP(vE(NE,"users",t),r,{merge:!0})}async function GP(t){const e=await $P(vE(NE,"users",t));return e.exists()?{saved:e.data().saved||[],apiKey:e.data().apiKey||null}:{saved:[],apiKey:null}}function QP(){const[t,e]=Q.useState(()=>navigator.onLine);return Q.useEffect(()=>{const n=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",n),window.addEventListener("offline",r),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}},[]),t?null:p.jsx("div",{className:"offline-banner",children:"📡 Offline — Search မလုပ်နိုင်သေးပါ (Saved words ကြည့်ရသေးသည်)"})}function YP({onSave:t,onGoogleLogin:e}){const[n,r]=Q.useState("");return p.jsx("div",{className:"modal-overlay",children:p.jsxs("div",{className:"modal-sheet",children:[p.jsx("div",{className:"modal-handle"}),p.jsx("div",{className:"modal-title",children:"Mingalar မှ ကြိုဆိုပါသည်"}),p.jsx("p",{className:"modal-desc",style:{marginBottom:10},children:"Google account နဲ့ login လုပ်ရင် API key ကို အလိုအလျောက် sync ဖြစ်မယ်"}),p.jsxs("button",{onClick:e,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:"#fff",color:"#1a1a1a",border:"none",borderRadius:10,padding:"12px 20px",fontWeight:600,fontSize:14,cursor:"pointer",width:"100%",marginBottom:16},children:[p.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 48 48",children:[p.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"}),p.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),p.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),p.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.43-8.83l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),"Sign in with Google"]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[p.jsx("div",{style:{flex:1,height:1,background:"var(--border2)"}}),p.jsx("span",{style:{fontSize:11,color:"var(--text3)"},children:"သို့မဟုတ် key ကိုယ်တိုင်ထည့်မည်"}),p.jsx("div",{style:{flex:1,height:1,background:"var(--border2)"}})]}),p.jsx("input",{className:"modal-input",type:"password",placeholder:"gsk_...",value:n,onChange:i=>r(i.target.value),onKeyDown:i=>i.key==="Enter"&&n.trim()&&t(n.trim())}),p.jsx("a",{className:"modal-link",href:"https://console.groq.com/keys",target:"_blank",rel:"noreferrer",children:"→ Groq Console မှာ API Key ရယူမည်"}),p.jsx("button",{className:"btn-primary",onClick:()=>n.trim()&&t(n.trim()),disabled:!n.trim(),children:"သိမ်းမည်"})]})})}function wf(t){try{return JSON.parse(t.trim())}catch{}let e=-1,n,r;for(let l=0;l<t.length;l++){if(t[l]==="{"){e=l,n="{",r="}";break}if(t[l]==="["){e=l,n="[",r="]";break}}if(e===-1)throw new Error("No JSON found in response");let i=0,s=!1,o=!1;for(let l=e;l<t.length;l++){const u=t[l];if(o){o=!1;continue}if(u==="\\"&&s){o=!0;continue}if(u==='"'){s=!s;continue}if(!s&&(u===n&&i++,u===r&&--i===0))return JSON.parse(t.slice(e,l+1))}throw new Error("Malformed JSON in response")}const xE=[{key:"morning",icon:"🌅",label:"Morning Routine"},{key:"work",icon:"💼",label:"At Work / Study"},{key:"social",icon:"👥",label:"Social / Chat"},{key:"evening",icon:"🌙",label:"Evening"}];async function Ef(t,e,n=.1,r=2048){var l,u,h,f;const s=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"user",content:e}],temperature:n,max_tokens:r,response_format:{type:"json_object"}})});if(!s.ok){const m=await s.json().catch(()=>({}));throw new Error(((l=m.error)==null?void 0:l.message)||`API Error ${s.status}`)}return(((f=(h=(u=(await s.json()).choices)==null?void 0:u[0])==null?void 0:h.message)==null?void 0:f.content)||"").trim()}async function JP(t,e){const n=await Ef(e,`Analyze the English word or phrase "${t}" and return ONLY valid JSON (no markdown, no code fences) with this exact structure:
{
  "word": "correct/normalized form of the input",
  "corrected_word": null,
  "english_meaning": "clear concise English definition",
  "myanmar_meaning": "မြန်မာဘာသာဖြင့် ရှင်းလင်းသောအဓိပ္ပာယ်",
  "word_forms": {
    "noun": "noun form or null",
    "verb": "verb form or null",
    "adjective": "adjective form or null",
    "adverb": "adverb form or null"
  },
  "synonyms": ["word1","word2","word3","word4"],
  "antonyms": ["word1","word2","word3"],
  "related_words": ["word1","word2","word3","word4"],
  "examples": [
    {"en": "First example sentence.", "my": "ပထမဥပမာကြောင်း မြန်မာဘာသာ။"},
    {"en": "Second example sentence.", "my": "ဒုတိယဥပမာကြောင်း မြန်မာဘာသာ။"}
  ]
}
related_words: 4 semantically related words worth learning next (not synonyms/antonyms).
If input has a typo, set corrected_word to the correct spelling. Otherwise null.
Return raw JSON only.`);return wf(n)}async function XP(t,e,n={}){const r=Math.min(6,t.length),i=[...t].sort((l,u)=>(n[u.word]||0)-(n[l.word]||0)).slice(0,12).map(l=>({word:l.word,myanmar_meaning:l.myanmar_meaning})),s=Object.keys(n).length>0?`
Prioritize these words: ${[...t].sort((l,u)=>(n[u.word]||0)-(n[l.word]||0)).slice(0,5).map(l=>l.word).join(", ")}`:"",o=await Ef(e,`English-Myanmar vocabulary quiz. Words: ${JSON.stringify(i)}
${s}

Generate ${r} MCQ questions. Alternate Type A and Type B.

Type A (English → Myanmar): question_text = "What is the Myanmar meaning of '[english_word]'?"
Type B (Myanmar → English): question_text = "What is the English word for '[actual_myanmar_meaning_here]'?"

Rules:
- Type B: MUST put the actual Myanmar meaning text inside the question_text
- All options: max 5 words each
- Shuffle correct answer position randomly among 4 options

Return JSON object with a "questions" array:
{"questions":[
  {"type":"A","word":"drench","question_text":"What is the Myanmar meaning of 'drench'?","correct":"ရေစိုအောင်","options":["ရေစိုအောင်","ပျော်ရွှင်","မြန်မြန်","ကြောက်"],"explanation":"Drench means to soak completely."},
  {"type":"B","word":"timid","question_text":"What is the English word for 'ရဲရင့်မှုမရှိသော'?","correct":"timid","options":["timid","brave","strong","reckless"],"explanation":"Timid means lacking courage."}
]}`,.2,3e3);return wf(o).questions}async function ZP(t,e){const n=await Ef(e,`I'm learning English. My vocabulary words: ${t.map(r=>r.word).join(", ")}

Create natural conversational English sentences using these words in 4 daily contexts (2-3 sentences each).
Sentences must feel real, not textbook-style. Try to use each word at least once.

Return ONLY raw JSON:
{
  "morning": [{"sentence":"...","words_used":["word"]}],
  "work":    [{"sentence":"...","words_used":["word"]}],
  "social":  [{"sentence":"...","words_used":["word"]}],
  "evening": [{"sentence":"...","words_used":["word"]}]
}`,.7);return wf(n)}function eN({result:t,isSaved:e,onSave:n,onChipClick:r}){var s,o,l,u;const i=t.word_forms||{};return p.jsxs("div",{className:"word-card",children:[p.jsxs("div",{className:"word-header",children:[p.jsx("div",{className:"word-title",children:t.word}),p.jsxs("div",{className:"word-meta",children:[p.jsxs("div",{className:"form-badges",children:[i.noun&&p.jsx("span",{className:"form-badge noun",children:"n"}),i.verb&&p.jsx("span",{className:"form-badge verb",children:"v"}),i.adjective&&p.jsx("span",{className:"form-badge adj",children:"adj"}),i.adverb&&p.jsx("span",{className:"form-badge adv",children:"adv"})]}),p.jsx("button",{className:`save-btn${e?" saved":""}`,onClick:n,children:e?"✓ Saved":"+ Save"})]})]}),p.jsxs("div",{className:"info-section",children:[p.jsx("div",{className:"info-label",children:"Meaning"}),p.jsx("div",{className:"meaning-en",children:t.english_meaning}),p.jsx("div",{className:"meaning-my",children:t.myanmar_meaning})]}),Object.values(i).some(Boolean)&&p.jsxs("div",{className:"info-section",children:[p.jsx("div",{className:"info-label",children:"Word Forms"}),p.jsxs("div",{className:"forms-grid",children:[i.noun&&p.jsxs("div",{className:"form-item",children:[p.jsx("div",{className:"form-type noun",children:"Noun"}),p.jsx("div",{className:"form-value",children:i.noun})]}),i.verb&&p.jsxs("div",{className:"form-item",children:[p.jsx("div",{className:"form-type verb",children:"Verb"}),p.jsx("div",{className:"form-value",children:i.verb})]}),i.adjective&&p.jsxs("div",{className:"form-item",children:[p.jsx("div",{className:"form-type adj",children:"Adjective"}),p.jsx("div",{className:"form-value",children:i.adjective})]}),i.adverb&&p.jsxs("div",{className:"form-item",children:[p.jsx("div",{className:"form-type adv",children:"Adverb"}),p.jsx("div",{className:"form-value",children:i.adverb})]})]})]}),((s=t.synonyms)==null?void 0:s.length)>0&&p.jsxs("div",{className:"info-section",children:[p.jsx("div",{className:"info-label",children:"Synonyms"}),p.jsx("div",{className:"chips-row",children:t.synonyms.map(h=>p.jsx("button",{className:"chip synonym",onClick:()=>r(h),children:h},h))})]}),((o=t.antonyms)==null?void 0:o.length)>0&&p.jsxs("div",{className:"info-section",children:[p.jsx("div",{className:"info-label",children:"Antonyms"}),p.jsx("div",{className:"chips-row",children:t.antonyms.map(h=>p.jsx("button",{className:"chip antonym",onClick:()=>r(h),children:h},h))})]}),((l=t.related_words)==null?void 0:l.length)>0&&p.jsxs("div",{className:"info-section",children:[p.jsx("div",{className:"info-label",children:"Related Words"}),p.jsx("div",{className:"chips-row",children:t.related_words.map(h=>p.jsx("button",{className:"chip related",onClick:()=>r(h),children:h},h))})]}),((u=t.examples)==null?void 0:u.length)>0&&p.jsxs("div",{className:"info-section",children:[p.jsx("div",{className:"info-label",children:"Examples"}),t.examples.map((h,f)=>p.jsxs("div",{className:"example-item",children:[p.jsxs("div",{className:"example-en",children:['"',h.en,'"']}),p.jsx("div",{className:"example-my",children:h.my})]},f))]})]})}function tN(){return p.jsxs("div",{className:"skeleton-card",children:[p.jsx("div",{className:"skeleton",style:{height:36,width:"55%",marginBottom:12}}),p.jsx("div",{className:"skeleton",style:{height:13,width:"35%",marginBottom:20}}),p.jsx("div",{className:"skeleton",style:{height:14,width:"100%",marginBottom:8}}),p.jsx("div",{className:"skeleton",style:{height:14,width:"88%",marginBottom:8}}),p.jsx("div",{className:"skeleton",style:{height:14,width:"75%",marginBottom:18}}),p.jsx("div",{style:{display:"flex",gap:8},children:[72,88,64].map(t=>p.jsx("div",{className:"skeleton",style:{height:28,width:t,borderRadius:20}},t))})]})}function nN(t){if(!t.length)return null;const e=new Date().toDateString(),n=at(ce.WOTD,null);if(n&&n.date===e&&t.some(s=>s.word===n.word))return n;const r=t[Math.floor(Math.random()*t.length)],i={word:r.word,wordObj:r,date:e};return Ft(ce.WOTD,i),i}function rN({saved:t,onSearch:e}){var r;const n=nN(t);return n?p.jsxs("div",{className:"wotd-card",onClick:()=>e(n.word),children:[p.jsx("div",{className:"wotd-label",children:"✨ Word of the Day"}),p.jsx("div",{className:"wotd-word",children:n.word}),p.jsx("div",{className:"wotd-meaning",children:((r=n.wordObj)==null?void 0:r.myanmar_meaning)||""}),p.jsx("div",{className:"wotd-tap",children:"Search မည် →"})]}):null}function iN({apiKey:t,saved:e,onSaveToggle:n,pendingSearch:r,onPendingClear:i}){const[s,o]=Q.useState(""),[l,u]=Q.useState(""),[h,f]=Q.useState(null),[m,_]=Q.useState(!1),[C,x]=Q.useState(null),[P,O]=Q.useState(()=>at(ce.HISTORY,[])),[S,E]=Q.useState([]),[R,D]=Q.useState(!1),M=Q.useRef(null);Q.useEffect(()=>{r&&(y(r),i())},[r]);const F=k=>{if(k.length<2){E([]),D(!1);return}const w=k.toLowerCase(),ae=e.filter(ze=>ze.word.toLowerCase().includes(w)).map(ze=>({text:ze.word,icon:"🔖"})),rt=P.filter(ze=>ze.toLowerCase().includes(w)&&!ae.find(z=>z.text.toLowerCase()===ze.toLowerCase())).map(ze=>({text:ze,icon:"🕐"})),Gt=[...ae,...rt].slice(0,6);E(Gt),D(Gt.length>0)},v=k=>{const w=k.target.value;o(w),F(w)},y=Q.useCallback(async k=>{const w=k.trim();if(w){o(w),u(w),D(!1),E([]),_(!0),x(null),f(null);try{const ae=await JP(w,t);f(ae);const rt=at(ce.FREQ,{});rt[ae.word]=(rt[ae.word]||0)+1,Ft(ce.FREQ,rt),O(Gt=>{const ze=[w,...Gt.filter(z=>z.toLowerCase()!==w.toLowerCase())].slice(0,10);return Ft(ce.HISTORY,ze),ze})}catch(ae){x(ae.message)}finally{_(!1)}}},[t]),T=h&&e.some(k=>{var w,ae;return((w=k.word)==null?void 0:w.toLowerCase())===((ae=h.word)==null?void 0:ae.toLowerCase())}),I=h&&h.word&&l.toLowerCase()!==h.word.toLowerCase(),A=!h&&!m&&!C&&e.length>0;return p.jsxs("div",{className:"tab-fade",children:[p.jsx("div",{className:"search-container",children:p.jsxs("div",{className:"search-wrapper",children:[p.jsx("span",{className:"search-icon",children:"🔍"}),p.jsx("input",{className:"search-input",type:"text",autoComplete:"off",autoCorrect:"off",spellCheck:"false",placeholder:"Search English word or phrase...",value:s,onChange:v,onKeyDown:k=>k.key==="Enter"&&y(s),onFocus:()=>s.length>=2&&D(S.length>0),onBlur:()=>{M.current=setTimeout(()=>D(!1),160)}}),s.length>0&&p.jsx("button",{className:"clear-btn",onClick:()=>{o(""),f(null),x(null),E([]),D(!1)},tabIndex:-1,children:"✕"}),p.jsx("button",{className:"search-btn",onClick:()=>y(s),children:"Search"}),R&&p.jsx("div",{className:"autocomplete-drop",children:S.map((k,w)=>p.jsxs("div",{className:"autocomplete-item",onMouseDown:()=>{clearTimeout(M.current),y(k.text)},children:[p.jsx("span",{className:"autocomplete-icon",children:k.icon}),p.jsx("span",{children:k.text})]},w))})]})}),A&&p.jsx(rN,{saved:e,onSearch:y}),!h&&!m&&P.length>0&&p.jsxs("div",{className:"history-section",children:[p.jsx("div",{className:"section-label",children:"Recent"}),p.jsx("div",{className:"history-chips",children:P.map(k=>p.jsx("button",{className:"history-chip",onClick:()=>y(k),children:k},k))})]}),I&&p.jsxs("div",{className:"typo-banner",children:[p.jsx("span",{children:"💡 Showing results for"}),p.jsx("span",{className:"typo-suggest",onClick:()=>y(h.word),children:h.word}),p.jsxs("span",{children:['(corrected from "',l,'")']})]}),m&&p.jsx(tN,{}),C&&p.jsxs("div",{className:"error-banner",children:[p.jsxs("span",{children:["⚠️ ",C]}),p.jsx("button",{className:"retry-btn",onClick:()=>y(l),children:"Retry"})]}),h&&!m&&p.jsx(eN,{result:h,isSaved:T,onSave:()=>n(h),onChipClick:y}),!h&&!m&&!C&&P.length===0&&!e.length&&p.jsxs("div",{className:"empty-state",children:[p.jsx("div",{className:"empty-state-icon",children:"📚"}),p.jsxs("div",{children:["Search any English word to see its",p.jsx("br",{}),"meaning in Myanmar"]})]})]})}function Ol(t){return/[\u1000-\u109F\uAA60-\uAA7F]/.test(String(t))}function sN({saved:t,freqs:e,onStart:n,minWords:r,error:i}){const s=t.length>=r,o=Math.min(6,t.length),u=Object.keys(e).length>0?Object.entries(e).sort((h,f)=>f[1]-h[1])[0]:null;return p.jsxs("div",{className:"section-wrap tab-fade",children:[p.jsx("span",{className:"quiz-idle-icon",children:"🧠"}),p.jsx("div",{className:"quiz-idle-title",children:"Quiz"}),p.jsx("div",{className:"quiz-idle-desc",children:s?"Saved words တွေကို MCQ quiz ဖြင့် စစ်ဆေးမည်":`Quiz ဖြေဖို့ words ${r-t.length} ခု ထပ်သိမ်းပါ`}),s&&u&&p.jsxs("div",{className:"smart-quiz-note",children:["🎯 ",p.jsx("strong",{children:"Smart Quiz:"}),' "',u[0],'" ကို ',u[1]," ကြိမ် search လုပ်ထားသဖြင့် ဒီ word ကို ပိုမေးမည်"]}),p.jsxs("div",{className:"quiz-stats",children:[p.jsxs("div",{className:"quiz-stat",children:[p.jsx("div",{className:"quiz-stat-num",children:t.length}),p.jsx("div",{className:"quiz-stat-label",children:"Saved Words"})]}),p.jsxs("div",{className:"quiz-stat",children:[p.jsx("div",{className:"quiz-stat-num",children:s?o:"—"}),p.jsx("div",{className:"quiz-stat-label",children:"Questions"})]})]}),i&&p.jsx("div",{className:"error-banner",style:{marginBottom:12},children:p.jsxs("span",{children:["⚠️ ",i]})}),p.jsx("button",{className:"btn-primary",onClick:n,disabled:!s,children:s?"🚀 Quiz စပါမည်":`Words ${r-t.length} ခု ထပ်လိုသည်`}),!s&&p.jsxs("p",{style:{textAlign:"center",marginTop:12,fontSize:13,color:"var(--text3)"},children:["Dictionary မှ words ",r," ခုအထိ Save ပါ"]})]})}function oN(){return p.jsxs("div",{className:"tab-fade",children:[p.jsxs("div",{style:{textAlign:"center",padding:"36px 20px 20px"},children:[p.jsx("div",{style:{fontSize:48,marginBottom:12},children:"⏳"}),p.jsx("div",{style:{color:"var(--text2)",fontSize:14},children:"Smart quiz questions တည်ဆောက်နေသည်..."})]}),p.jsxs("div",{className:"skeleton-card",children:[p.jsx("div",{className:"skeleton",style:{height:20,width:"40%",marginBottom:14,borderRadius:20}}),p.jsx("div",{className:"skeleton",style:{height:26,width:"88%",marginBottom:20}}),[1,2,3,4].map(t=>p.jsx("div",{className:"skeleton",style:{height:46,marginBottom:8,borderRadius:10}},t))]})]})}function aN({question:t,current:e,total:n,selectedOption:r,answered:i,onSelect:s,onNext:o}){const l=["A","B","C","D"],u=e/n*100,h=f=>i?f===t.correct?"correct":f===r?"wrong":"":"";return p.jsxs("div",{children:[p.jsxs("div",{className:"quiz-prog-wrap",children:[p.jsx("div",{className:"quiz-prog-bar",children:p.jsx("div",{className:"quiz-prog-fill",style:{width:`${u}%`}})}),p.jsxs("div",{className:"quiz-q-row",children:[p.jsxs("span",{children:["Question ",e+1," / ",n]}),p.jsxs("span",{children:[Math.round(u),"%"]})]})]}),p.jsxs("div",{className:"question-card",children:[p.jsx("span",{className:`q-type-badge ${t.type==="A"?"q-type-a":"q-type-b"}`,children:t.type==="A"?"English → Myanmar":"Myanmar → English"}),p.jsx("div",{className:`question-text${Ol(t.question_text)?" my-text":""}`,children:t.question_text})]}),p.jsx("div",{className:"options-wrap",children:(t.options||[]).map((f,m)=>p.jsxs("button",{className:`option-btn ${h(f)}`,onClick:()=>s(f),disabled:i,children:[p.jsx("div",{className:"option-letter",children:l[m]}),p.jsx("div",{className:`option-text${Ol(f)?" my":""}`,children:f}),i&&f===t.correct&&p.jsx("span",{className:"option-marker",children:"✓"}),i&&f===r&&f!==t.correct&&p.jsx("span",{className:"option-marker",children:"✗"})]},f))}),i&&t.explanation&&p.jsxs("div",{className:"explanation-box",children:["💡 ",t.explanation]}),i&&p.jsx("div",{className:"next-btn-wrap",children:p.jsx("button",{className:"next-btn",onClick:o,children:e+1>=n?"ရလဒ်ကြည့်မည် 🎯":"နောက်မေးခွန်း →"})})]})}function lN({answers:t,onRetry:e}){const n=t.filter(f=>f.isCorrect).length,r=t.length,i=Math.round(n/r*100),s=i>=80?"excellent":i>=60?"good":"poor",o=i>=80?"🎉":i>=60?"👍":"💪",l=i>=80?"အလွန်ကောင်းသည်!":i>=60?"ကောင်းသည်!":"ဆက်ကြိုးစားပါ!",u=i>=80?"Words များကို သေချာမှတ်မိနေသည်":i>=60?"Words အများစု သိနေသည်":"Words များကို ထပ်မံလေ့လာပါ",h=t.filter(f=>!f.isCorrect);return p.jsxs("div",{className:"tab-fade",children:[p.jsxs("div",{className:"score-section",children:[p.jsxs("div",{className:`score-circle ${s}`,children:[p.jsxs("div",{className:"score-num",children:[n,"/",r]}),p.jsxs("div",{className:"score-pct",children:[i,"%"]})]}),p.jsxs("div",{className:"score-title",children:[o," ",l]}),p.jsx("div",{className:"score-desc",children:u}),p.jsx("div",{className:"score-actions",children:p.jsx("button",{className:"btn-primary",onClick:e,style:{width:"auto",padding:"10px 28px"},children:"ထပ်ကြိုးစားမည်"})})]}),h.length>0&&p.jsxs("div",{className:"wrongs-section",children:[p.jsxs("div",{className:"section-label",style:{marginBottom:10},children:["မှားသောဖြေချက်များ (",h.length,")"]}),h.map((f,m)=>p.jsxs("div",{className:"wrong-item",children:[p.jsx("div",{className:"wrong-word",children:f.question.word}),p.jsxs("div",{className:`wrong-detail red${Ol(f.selected)?" my":""}`,children:["✗ သင်ဖြေ: ",f.selected]}),p.jsxs("div",{className:`wrong-detail green${Ol(f.correct)?" my":""}`,children:["✓ မှန်သော: ",f.correct]}),f.question.explanation&&p.jsx("div",{className:"wrong-explain",children:f.question.explanation})]},m))]})]})}function uN({apiKey:t,saved:e}){const[n,r]=Q.useState("idle"),[i,s]=Q.useState([]),[o,l]=Q.useState(0),[u,h]=Q.useState([]),[f,m]=Q.useState(null),[_,C]=Q.useState(!1),[x,P]=Q.useState(null),O=4;Q.useEffect(()=>{if(n==="done"&&u.length>0){const M=u.filter(v=>v.isCorrect).length,F={date:new Date().toISOString(),score:M,total:u.length};Ft(ce.QUIZ_HIST,[F,...at(ce.QUIZ_HIST,[])].slice(0,20))}},[n]);const S=async()=>{r("loading"),P(null);try{const M=at(ce.FREQ,{}),F=await XP(e,t,M);s(F),l(0),h([]),m(null),C(!1),r("active")}catch(M){P(M.message),r("idle")}},E=M=>{if(_)return;m(M),C(!0);const F=i[o];h(v=>[...v,{selected:M,correct:F.correct,isCorrect:M===F.correct,question:F}])},R=()=>{o+1>=i.length?r("done"):(l(M=>M+1),m(null),C(!1))},D=at(ce.FREQ,{});return n==="loading"?p.jsx(oN,{}):n==="active"?p.jsx(aN,{question:i[o],current:o,total:i.length,selectedOption:f,answered:_,onSelect:E,onNext:R},o):n==="done"?p.jsx(lN,{answers:u,onRetry:()=>r("idle")}):p.jsx(sN,{saved:e,freqs:D,onStart:S,minWords:O,error:x})}function cN({sentence:t,wordsUsed:e}){const[n,r]=Q.useState(!1),i=()=>{var o;(o=navigator.clipboard)==null||o.writeText(t).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})},s=()=>{if(!(e!=null&&e.length))return t;const o=new RegExp(`(${e.map(l=>l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")})`,"gi");return t.split(o).map((l,u)=>e.some(h=>h.toLowerCase()===l.toLowerCase())?p.jsx("mark",{children:l},u):l)};return p.jsxs("div",{className:"sentence-item",children:[p.jsx("div",{className:"sentence-text",children:s()}),p.jsx("button",{className:`copy-btn${n?" copied":""}`,onClick:i,children:n?"✓":"⎘"})]})}function hN(){return p.jsxs("div",{className:"tab-fade",children:[p.jsxs("div",{style:{textAlign:"center",padding:"36px 20px 16px"},children:[p.jsx("div",{style:{fontSize:48,marginBottom:12},children:"✨"}),p.jsx("div",{style:{color:"var(--text2)",fontSize:14},children:"Daily sentences တည်ဆောက်နေသည်..."})]}),xE.map(t=>p.jsxs("div",{className:"skeleton-card",style:{marginBottom:10},children:[p.jsx("div",{className:"skeleton",style:{height:12,width:"30%",marginBottom:12}}),[95,82,88].map((e,n)=>p.jsx("div",{className:"skeleton",style:{height:14,width:`${e}%`,marginBottom:8}},n))]},t.key))]})}function dN({apiKey:t,saved:e}){const[n,r]=Q.useState("idle"),[i,s]=Q.useState(()=>e.map(P=>P.word)),[o,l]=Q.useState(null),[u,h]=Q.useState(null),f=3,m=P=>s(O=>O.includes(P)?O.filter(S=>S!==P):[...O,P]),_=()=>s(e.map(P=>P.word)),C=()=>s([]),x=async()=>{const P=e.filter(O=>i.includes(O.word));if(!(P.length<f)){r("loading"),h(null);try{const O=await ZP(P,t);l(O),r("done")}catch(O){h(O.message),r("idle")}}};return n==="loading"?p.jsx(hN,{}):n==="done"&&o?p.jsxs("div",{className:"tab-fade",children:[p.jsxs("div",{style:{padding:"14px 20px 10px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--text)"},children:"Daily Sentences"}),p.jsx("button",{onClick:()=>{r("idle"),l(null)},style:{fontSize:12,color:"var(--accent2)",background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-en)"},children:"← Regenerate"})]}),xE.map(P=>{const O=o[P.key]||[];return O.length?p.jsxs("div",{className:"context-card",children:[p.jsxs("div",{className:"context-header",children:[p.jsx("span",{className:"context-icon",children:P.icon}),p.jsx("span",{className:"context-title",children:P.label})]}),O.map((S,E)=>p.jsx(cN,{sentence:S.sentence,wordsUsed:S.words_used},E))]},P.key):null})]}):p.jsxs("div",{className:"section-wrap tab-fade",children:[p.jsx("div",{className:"section-title",children:"Daily Usage"}),p.jsx("p",{style:{fontSize:13,color:"var(--text2)",lineHeight:1.7,marginBottom:16},children:"Saved words တွေကို တနေ့တာ real-life English sentences ထဲ သုံးပြမည်။ Think in English — Myanmar → English translate မလုပ်ဘဲ တိုက်ရိုက်တွေးနိုင်အောင်ပါ။"}),e.length===0?p.jsxs("div",{className:"empty-state",children:[p.jsx("div",{className:"empty-state-icon",children:"📖"}),p.jsxs("div",{children:["Words မရှိသေးပါ။",p.jsx("br",{}),"Dictionary မှ words Save လုပ်ပါ။"]})]}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"toggle-controls",children:[p.jsxs("div",{className:"section-label",style:{margin:0},children:["Words ရွေးပါ (",i.length,"/",e.length,")"]}),p.jsxs("div",{style:{display:"flex",gap:10},children:[p.jsx("button",{className:"text-btn",onClick:_,children:"All"}),p.jsx("button",{className:"text-btn",onClick:C,children:"None"})]})]}),p.jsx("div",{className:"word-toggles",children:e.map(P=>p.jsx("button",{className:`word-toggle${i.includes(P.word)?" on":""}`,onClick:()=>m(P.word),children:P.word},P.word))}),u&&p.jsx("div",{className:"error-banner",children:p.jsx("span",{children:u})}),p.jsx("button",{className:"btn-primary",onClick:x,disabled:i.length<f,style:{marginTop:4},children:i.length>=f?"✨ Daily Sentences ထုတ်မည်":`Words ${f} ခုအနည်းဆုံးရွေးပါ`})]})]})}function fN({word:t,onClose:e,onRemove:n}){var _,C,x,P;const r=t.word_forms||{},i=Q.useRef(null),s=Q.useRef(0),[o,l]=Q.useState(0),u=Q.useRef(!1),h=O=>{s.current=O.touches[0].clientY,u.current=!0},f=O=>{if(!u.current)return;const S=O.touches[0].clientY-s.current;S>0&&l(S)},m=()=>{u.current=!1,o>100?e():l(0)};return p.jsx("div",{className:"modal-overlay",onClick:e,children:p.jsxs("div",{ref:i,className:"modal-sheet",style:{maxHeight:"85vh",overflowY:o>0?"hidden":"auto",transform:`translateY(${o}px)`,transition:o===0?"transform 0.3s ease":"none"},onClick:O=>O.stopPropagation(),onTouchStart:h,onTouchMove:f,onTouchEnd:m,children:[p.jsx("div",{className:"modal-handle",style:{cursor:"grab"}}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:26,fontWeight:700,color:"var(--text)",fontFamily:"var(--font-title)",letterSpacing:"-0.5px"},children:t.word}),p.jsxs("div",{style:{display:"flex",gap:5,marginTop:4},children:[r.noun&&p.jsx("span",{className:"form-badge noun",children:"n"}),r.verb&&p.jsx("span",{className:"form-badge verb",children:"v"}),r.adjective&&p.jsx("span",{className:"form-badge adj",children:"adj"}),r.adverb&&p.jsx("span",{className:"form-badge adv",children:"adv"})]})]}),p.jsx("button",{onClick:e,style:{background:"none",border:"none",color:"var(--text3)",fontSize:20,cursor:"pointer",padding:"4px 8px"},children:"✕"})]}),p.jsxs("div",{className:"info-section",children:[p.jsx("div",{className:"info-label",children:"Meaning"}),p.jsx("div",{className:"meaning-en",children:t.english_meaning}),p.jsx("div",{className:"meaning-my",children:t.myanmar_meaning})]}),((_=t.synonyms)==null?void 0:_.length)>0&&p.jsxs("div",{className:"info-section",children:[p.jsx("div",{className:"info-label",children:"Synonyms"}),p.jsx("div",{className:"chip-row",children:t.synonyms.map(O=>p.jsx("span",{className:"chip syn",children:O},O))})]}),((C=t.antonyms)==null?void 0:C.length)>0&&p.jsxs("div",{className:"info-section",children:[p.jsx("div",{className:"info-label",children:"Antonyms"}),p.jsx("div",{className:"chip-row",children:t.antonyms.map(O=>p.jsx("span",{className:"chip ant",children:O},O))})]}),((x=t.related_words)==null?void 0:x.length)>0&&p.jsxs("div",{className:"info-section",children:[p.jsx("div",{className:"info-label",children:"Related Words"}),p.jsx("div",{className:"chip-row",children:t.related_words.map(O=>p.jsx("span",{className:"chip rel",children:O},O))})]}),((P=t.examples)==null?void 0:P.length)>0&&p.jsxs("div",{className:"info-section",children:[p.jsx("div",{className:"info-label",children:"Examples"}),t.examples.map((O,S)=>p.jsxs("div",{className:"example-item",children:[p.jsxs("div",{className:"example-en",children:['"',O.en,'"']}),p.jsx("div",{className:"example-my",children:O.my})]},S))]}),p.jsx("button",{className:"icon-btn danger",style:{width:"100%",marginTop:12,padding:"10px",borderRadius:10,fontSize:13},onClick:()=>{n(t.word),e()},children:"🗑 Remove from saved"})]})})}function pN({apiKey:t,saved:e,onEditKey:n,onRemoveWord:r,onSwitchTab:i,user:s,syncing:o,onLogin:l,onLogout:u}){const[h,f]=Q.useState(()=>at(ce.QUIZ_HIST,[])),[m,_]=Q.useState(()=>at(ce.HISTORY,[])),[C,x]=Q.useState(null),P=at(ce.FREQ,{}),O=Object.values(P).reduce((D,M)=>D+M,0),S=h.length>0?Math.round(h.reduce((D,M)=>D+M.score/M.total*100,0)/h.length):null,E=t?t.slice(0,8)+"••••••••"+t.slice(-4):"မထည့်ရသေးပါ",R=()=>{Ft(ce.QUIZ_HIST,[]),f([])};return p.jsxs("div",{className:"section-wrap tab-fade",children:[p.jsx("div",{className:"section-title",children:"Profile"}),p.jsx("div",{className:"panel-card",style:{marginBottom:16},children:s?p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[p.jsx("img",{src:s.photoURL,alt:"",style:{width:40,height:40,borderRadius:"50%",flexShrink:0}}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsx("div",{style:{fontWeight:600,fontSize:14,color:"var(--text)"},children:s.displayName}),p.jsx("div",{style:{fontSize:12,color:"var(--text3)"},children:o?"⟳ Cloud sync လုပ်နေသည်…":"✓ Cloud sync ဖြစ်ပြီးပြီ"})]}),p.jsx("button",{className:"icon-btn danger",onClick:u,children:"Logout"})]}):p.jsxs("div",{style:{textAlign:"center",padding:"8px 0"},children:[p.jsxs("div",{style:{fontSize:13,color:"var(--text2)",marginBottom:12},children:["Google account နဲ့ login လုပ်ပြီး",p.jsx("br",{}),"devices အားလုံးမှာ sync ဖြစ်စေပါ"]}),p.jsxs("button",{onClick:l,style:{display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#1a1a1a",border:"none",borderRadius:8,padding:"10px 20px",fontWeight:600,fontSize:14,cursor:"pointer"},children:[p.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 48 48",children:[p.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"}),p.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),p.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),p.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.43-8.83l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),"Sign in with Google"]})]})}),p.jsxs("div",{className:"stats-grid",children:[p.jsxs("div",{className:"stat-chip",children:[p.jsx("div",{className:"stat-num",children:e.length}),p.jsx("div",{className:"stat-label",children:"Words"})]}),p.jsxs("div",{className:"stat-chip",children:[p.jsx("div",{className:"stat-num",children:O}),p.jsx("div",{className:"stat-label",children:"Searches"})]}),p.jsxs("div",{className:"stat-chip",children:[p.jsx("div",{className:"stat-num",children:S!==null?`${S}%`:"—"}),p.jsx("div",{className:"stat-label",children:"Quiz Avg"})]})]}),p.jsx("div",{className:"panel-card",children:p.jsxs("div",{className:"panel-row",children:[p.jsxs("div",{children:[p.jsx("div",{className:"panel-row-label",children:"Groq API Key"}),p.jsx("div",{className:"panel-row-value",children:E})]}),p.jsx("button",{className:"icon-btn",onClick:n,children:"Edit"})]})}),p.jsxs("div",{className:"section-label",style:{marginBottom:9},children:["Saved Words (",e.length,")"]}),C&&p.jsx(fN,{word:C,onClose:()=>x(null),onRemove:r}),e.length===0?p.jsxs("div",{className:"empty-state",style:{padding:"20px 0"},children:[p.jsx("div",{className:"empty-state-icon",children:"🔖"}),p.jsx("div",{children:"Saved words မရှိသေးပါ"})]}):p.jsx("div",{className:"panel-card",children:e.map(D=>p.jsxs("div",{className:"saved-word-item",style:{cursor:"pointer"},onClick:()=>x(D),children:[p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[p.jsx("div",{className:"saved-word-name",children:D.word}),P[D.word]>0&&p.jsxs("span",{className:"freq-badge",children:[P[D.word],"×"]})]}),p.jsxs("div",{className:"saved-word-meaning",children:[(D.myanmar_meaning||"").slice(0,48),(D.myanmar_meaning||"").length>48?"…":""]})]}),p.jsx("button",{className:"icon-btn danger",onClick:M=>{M.stopPropagation(),r(D.word)},children:"Remove"})]},D.word))}),m.length>0&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"section-label",style:{marginBottom:9,marginTop:4,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("span",{children:["Search History (",m.length,")"]}),p.jsx("button",{className:"text-btn",onClick:()=>{Ft(ce.HISTORY,[]),_([])},children:"Clear"})]}),p.jsx("div",{className:"panel-card",style:{display:"flex",flexWrap:"wrap",gap:8,padding:"12px 14px"},children:m.map((D,M)=>p.jsx("button",{onClick:()=>i&&i(D),style:{background:"var(--surface2)",border:"1px solid var(--border2)",borderRadius:20,padding:"5px 13px",fontSize:13,color:"var(--text2)",cursor:"pointer",fontFamily:"var(--font-en)"},children:D},M))})]}),h.length>0&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"section-label",style:{marginBottom:9,marginTop:4,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("span",{children:["Quiz History (",h.length,")"]}),p.jsx("button",{className:"text-btn",onClick:R,children:"Clear"})]}),p.jsx("div",{className:"panel-card",children:h.map((D,M)=>{const F=Math.round(D.score/D.total*100),v=F>=80?"good":F>=60?"ok":"bad";return p.jsxs("div",{className:"qhist-item",children:[p.jsxs("div",{children:[p.jsxs("div",{className:`qhist-score ${v}`,children:[D.score,"/",D.total]}),p.jsx("div",{className:"qhist-date",children:new Date(D.date).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})})]}),p.jsx("div",{style:{fontSize:20},children:F>=80?"🎉":F>=60?"👍":"💪"})]},M)})})]}),p.jsx("p",{style:{fontSize:11,color:"var(--text3)",textAlign:"center",marginTop:8},children:"Mingalar v1.0 · Phase 3 Complete"})]})}function mN(){const[t,e]=Q.useState("dictionary"),[n,r]=Q.useState(()=>at(ce.API,"")),[i,s]=Q.useState(!1),[o,l]=Q.useState(()=>at(ce.SAVED,[])),[u,h]=Q.useState(null),[f,m]=Q.useState(!1),[_,C]=Q.useState(!1),[x,P]=Q.useState(null);Q.useEffect(()=>sA(_c,async v=>{if(h(v),C(!0),v){m(!0);try{const{saved:y,apiKey:T}=await GP(v.uid);if(y.length>0)l(y),Ft(ce.SAVED,y);else{const I=at(ce.SAVED,[]);I.length>0&&await Rs(v.uid,I,at(ce.API,""))}if(T)r(T),Ft(ce.API,T);else{const I=at(ce.API,"");I&&await Rs(v.uid,y,I)}}catch(y){console.warn("Cloud load failed",y)}finally{m(!1)}}}),[]);const O=_&&!u&&!n&&t==="dictionary",S=v=>{Ft(ce.API,v),r(v),s(!1),u&&Rs(u.uid,at(ce.SAVED,[]),v).catch(()=>{})},E=v=>{l(y=>{const I=y.some(A=>{var k,w;return((k=A.word)==null?void 0:k.toLowerCase())===((w=v.word)==null?void 0:w.toLowerCase())})?y.filter(A=>{var k,w;return((k=A.word)==null?void 0:k.toLowerCase())!==((w=v.word)==null?void 0:w.toLowerCase())}):[v,...y];return Ft(ce.SAVED,I),u&&Rs(u.uid,I).catch(()=>{}),I})},R=v=>{l(y=>{const T=y.filter(I=>{var A;return((A=I.word)==null?void 0:A.toLowerCase())!==v.toLowerCase()});return Ft(ce.SAVED,T),u&&Rs(u.uid,T).catch(()=>{}),T})},D=()=>{const v=new fn;CA(_c,v).catch(y=>alert("Login failed: "+y.message))},M=()=>oA(_c),F=[{id:"dictionary",icon:"📚",label:"Dictionary"},{id:"quiz",icon:"🧠",label:"Quiz"},{id:"daily",icon:"📖",label:"Daily"},{id:"profile",icon:"👤",label:"Profile"}];return p.jsxs(p.Fragment,{children:[(O||i)&&p.jsx(YP,{onSave:S,onGoogleLogin:D}),p.jsxs("div",{className:"app-header",children:[p.jsxs("div",{className:"app-brand",children:[p.jsx("span",{className:"app-title",children:"Mingalar"}),p.jsx("span",{className:"app-subtitle",children:"EN · MY Dictionary"})]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[f&&p.jsx("span",{style:{fontSize:11,color:"var(--text3)"},children:"⟳ syncing…"}),u&&p.jsx("img",{src:u.photoURL,alt:"",style:{width:28,height:28,borderRadius:"50%",border:"2px solid var(--indigo)"}})]})]}),p.jsx(QP,{}),p.jsxs("div",{className:"content-area",children:[t==="dictionary"&&n&&p.jsx(iN,{apiKey:n,saved:o,onSaveToggle:E,pendingSearch:x,onPendingClear:()=>P(null)}),t==="quiz"&&p.jsx(uN,{apiKey:n,saved:o}),t==="daily"&&p.jsx(dN,{apiKey:n,saved:o}),t==="profile"&&p.jsx(pN,{apiKey:n,saved:o,onEditKey:()=>s(!0),onRemoveWord:R,onSwitchTab:v=>{P(v),e("dictionary")},user:u,syncing:f,onLogin:D,onLogout:M})]}),p.jsx("nav",{className:"bottom-nav",children:F.map(v=>p.jsxs("button",{className:`nav-item${t===v.id?" active":""}`,onClick:()=>e(v.id),children:[p.jsx("span",{className:"nav-icon",children:v.icon}),p.jsx("span",{children:v.label})]},v.id))})]})}cv(document.getElementById("root")).render(p.jsx(Q.StrictMode,{children:p.jsx(mN,{})}));
