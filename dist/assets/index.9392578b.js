const o1=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}};o1();var Ya=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function l1(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}),e}var d={exports:{}},$e={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var op=Object.getOwnPropertySymbols,s1=Object.prototype.hasOwnProperty,u1=Object.prototype.propertyIsEnumerable;function c1(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function d1(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(e).map(function(a){return e[a]});if(n.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch(a){return!1}}var ug=d1()?Object.assign:function(t,e){for(var r,n=c1(t),i,a=1;a<arguments.length;a++){r=Object(arguments[a]);for(var o in r)s1.call(r,o)&&(n[o]=r[o]);if(op){i=op(r);for(var l=0;l<i.length;l++)u1.call(r,i[l])&&(n[i[l]]=r[i[l]])}}return n};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd=ug,ai=60103,cg=60106;$e.Fragment=60107;$e.StrictMode=60108;$e.Profiler=60114;var dg=60109,fg=60110,pg=60112;$e.Suspense=60113;var mg=60115,hg=60116;if(typeof Symbol=="function"&&Symbol.for){var Jt=Symbol.for;ai=Jt("react.element"),cg=Jt("react.portal"),$e.Fragment=Jt("react.fragment"),$e.StrictMode=Jt("react.strict_mode"),$e.Profiler=Jt("react.profiler"),dg=Jt("react.provider"),fg=Jt("react.context"),pg=Jt("react.forward_ref"),$e.Suspense=Jt("react.suspense"),mg=Jt("react.memo"),hg=Jt("react.lazy")}var lp=typeof Symbol=="function"&&Symbol.iterator;function f1(t){return t===null||typeof t!="object"?null:(t=lp&&t[lp]||t["@@iterator"],typeof t=="function"?t:null)}function wa(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vg={};function oi(t,e,r){this.props=t,this.context=e,this.refs=vg,this.updater=r||gg}oi.prototype.isReactComponent={};oi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(wa(85));this.updater.enqueueSetState(this,t,e,"setState")};oi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yg(){}yg.prototype=oi.prototype;function yd(t,e,r){this.props=t,this.context=e,this.refs=vg,this.updater=r||gg}var bd=yd.prototype=new yg;bd.constructor=yd;vd(bd,oi.prototype);bd.isPureReactComponent=!0;var xd={current:null},bg=Object.prototype.hasOwnProperty,xg={key:!0,ref:!0,__self:!0,__source:!0};function wg(t,e,r){var n,i={},a=null,o=null;if(e!=null)for(n in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)bg.call(e,n)&&!xg.hasOwnProperty(n)&&(i[n]=e[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(n in l=t.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:ai,type:t,key:a,ref:o,props:i,_owner:xd.current}}function p1(t,e){return{$$typeof:ai,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ai}function m1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var sp=/\/+/g;function Hs(t,e){return typeof t=="object"&&t!==null&&t.key!=null?m1(""+t.key):e.toString(36)}function Qo(t,e,r,n,i){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ai:case cg:o=!0}}if(o)return o=t,i=i(o),t=n===""?"."+Hs(o,0):n,Array.isArray(i)?(r="",t!=null&&(r=t.replace(sp,"$&/")+"/"),Qo(i,e,r,"",function(c){return c})):i!=null&&(wd(i)&&(i=p1(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(sp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,n=n===""?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){a=t[l];var u=n+Hs(a,l);o+=Qo(a,e,r,u,i)}else if(u=f1(t),typeof u=="function")for(t=u.call(t),l=0;!(a=t.next()).done;)a=a.value,u=n+Hs(a,l++),o+=Qo(a,e,r,u,i);else if(a==="object")throw e=""+t,Error(wa(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function Ja(t,e,r){if(t==null)return t;var n=[],i=0;return Qo(t,n,"","",function(a){return e.call(r,a,i++)}),n}function h1(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(r){t._status===0&&(r=r.default,t._status=1,t._result=r)},function(r){t._status===0&&(t._status=2,t._result=r)})}if(t._status===1)return t._result;throw t._result}var Eg={current:null};function yr(){var t=Eg.current;if(t===null)throw Error(wa(321));return t}var g1={ReactCurrentDispatcher:Eg,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:xd,IsSomeRendererActing:{current:!1},assign:vd};$e.Children={map:Ja,forEach:function(t,e,r){Ja(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Ja(t,function(){e++}),e},toArray:function(t){return Ja(t,function(e){return e})||[]},only:function(t){if(!wd(t))throw Error(wa(143));return t}};$e.Component=oi;$e.PureComponent=yd;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g1;$e.cloneElement=function(t,e,r){if(t==null)throw Error(wa(267,t));var n=vd({},t.props),i=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=xd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)bg.call(e,u)&&!xg.hasOwnProperty(u)&&(n[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];n.children=l}return{$$typeof:ai,type:t.type,key:i,ref:a,props:n,_owner:o}};$e.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:fg,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:dg,_context:t},t.Consumer=t};$e.createElement=wg;$e.createFactory=function(t){var e=wg.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:pg,render:t}};$e.isValidElement=wd;$e.lazy=function(t){return{$$typeof:hg,_payload:{_status:-1,_result:t},_init:h1}};$e.memo=function(t,e){return{$$typeof:mg,type:t,compare:e===void 0?null:e}};$e.useCallback=function(t,e){return yr().useCallback(t,e)};$e.useContext=function(t,e){return yr().useContext(t,e)};$e.useDebugValue=function(){};$e.useEffect=function(t,e){return yr().useEffect(t,e)};$e.useImperativeHandle=function(t,e,r){return yr().useImperativeHandle(t,e,r)};$e.useLayoutEffect=function(t,e){return yr().useLayoutEffect(t,e)};$e.useMemo=function(t,e){return yr().useMemo(t,e)};$e.useReducer=function(t,e,r){return yr().useReducer(t,e,r)};$e.useRef=function(t){return yr().useRef(t)};$e.useState=function(t){return yr().useState(t)};$e.version="17.0.2";d.exports=$e;var s=d.exports,Qt={exports:{}},Xt={},Sg={exports:{}},kg={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,r,n,i;if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var u=null,c=null,f=function(){if(u!==null)try{var A=t.unstable_now();u(!0,A),u=null}catch($){throw setTimeout(f,0),$}};e=function(A){u!==null?setTimeout(e,0,A):(u=A,setTimeout(f,0))},r=function(A,$){c=setTimeout(A,$)},n=function(){clearTimeout(c)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var v=window.setTimeout,h=window.clearTimeout;if(typeof console!="undefined"){var b=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof b!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var w=!1,y=null,m=-1,p=5,g=0;t.unstable_shouldYield=function(){return t.unstable_now()>=g},i=function(){},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):p=0<A?Math.floor(1e3/A):5};var x=new MessageChannel,E=x.port2;x.port1.onmessage=function(){if(y!==null){var A=t.unstable_now();g=A+p;try{y(!0,A)?E.postMessage(null):(w=!1,y=null)}catch($){throw E.postMessage(null),$}}else w=!1},e=function(A){y=A,w||(w=!0,E.postMessage(null))},r=function(A,$){m=v(function(){A(t.unstable_now())},$)},n=function(){h(m),m=-1}}function _(A,$){var I=A.length;A.push($);e:for(;;){var O=I-1>>>1,z=A[O];if(z!==void 0&&0<N(z,$))A[O]=$,A[I]=z,I=O;else break e}}function S(A){return A=A[0],A===void 0?null:A}function P(A){var $=A[0];if($!==void 0){var I=A.pop();if(I!==$){A[0]=I;e:for(var O=0,z=A.length;O<z;){var C=2*(O+1)-1,V=A[C],j=C+1,te=A[j];if(V!==void 0&&0>N(V,I))te!==void 0&&0>N(te,V)?(A[O]=te,A[j]=I,O=j):(A[O]=V,A[C]=I,O=C);else if(te!==void 0&&0>N(te,I))A[O]=te,A[j]=I,O=j;else break e}}return $}return null}function N(A,$){var I=A.sortIndex-$.sortIndex;return I!==0?I:A.id-$.id}var k=[],R=[],M=1,F=null,q=3,U=!1,J=!1,Y=!1;function ee(A){for(var $=S(R);$!==null;){if($.callback===null)P(R);else if($.startTime<=A)P(R),$.sortIndex=$.expirationTime,_(k,$);else break;$=S(R)}}function D(A){if(Y=!1,ee(A),!J)if(S(k)!==null)J=!0,e(G);else{var $=S(R);$!==null&&r(D,$.startTime-A)}}function G(A,$){J=!1,Y&&(Y=!1,n()),U=!0;var I=q;try{for(ee($),F=S(k);F!==null&&(!(F.expirationTime>$)||A&&!t.unstable_shouldYield());){var O=F.callback;if(typeof O=="function"){F.callback=null,q=F.priorityLevel;var z=O(F.expirationTime<=$);$=t.unstable_now(),typeof z=="function"?F.callback=z:F===S(k)&&P(k),ee($)}else P(k);F=S(k)}if(F!==null)var C=!0;else{var V=S(R);V!==null&&r(D,V.startTime-$),C=!1}return C}finally{F=null,q=I,U=!1}}var K=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){J||U||(J=!0,e(G))},t.unstable_getCurrentPriorityLevel=function(){return q},t.unstable_getFirstCallbackNode=function(){return S(k)},t.unstable_next=function(A){switch(q){case 1:case 2:case 3:var $=3;break;default:$=q}var I=q;q=$;try{return A()}finally{q=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=K,t.unstable_runWithPriority=function(A,$){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var I=q;q=A;try{return $()}finally{q=I}},t.unstable_scheduleCallback=function(A,$,I){var O=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?O+I:O):I=O,A){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=I+z,A={id:M++,callback:$,priorityLevel:A,startTime:I,expirationTime:z,sortIndex:-1},I>O?(A.sortIndex=I,_(R,A),S(k)===null&&A===S(R)&&(Y?n():Y=!0,r(D,I-O))):(A.sortIndex=z,_(k,A),J||U||(J=!0,e(G))),A},t.unstable_wrapCallback=function(A){var $=q;return function(){var I=q;q=$;try{return A.apply(this,arguments)}finally{q=I}}}})(kg);Sg.exports=kg;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bl=d.exports,Ke=ug,gt=Sg.exports;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Bl)throw Error(H(227));var Cg=new Set,aa={};function vn(t,e){Xn(t,e),Xn(t+"Capture",e)}function Xn(t,e){for(aa[t]=e,t=0;t<e.length;t++)Cg.add(e[t])}var vr=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),v1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,up=Object.prototype.hasOwnProperty,cp={},dp={};function y1(t){return up.call(dp,t)?!0:up.call(cp,t)?!1:v1.test(t)?dp[t]=!0:(cp[t]=!0,!1)}function b1(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function x1(t,e,r,n){if(e===null||typeof e=="undefined"||b1(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,r,n,i,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ed=/[\-:]([a-z])/g;function Sd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ed,Sd);Et[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ed,Sd);Et[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ed,Sd);Et[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function kd(t,e,r,n){var i=Et.hasOwnProperty(e)?Et[e]:null,a=i!==null?i.type===0:n?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");a||(x1(e,r,i,n)&&(r=null),n||i===null?y1(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var yn=Bl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oi=60103,nn=60106,Rr=60107,Cd=60108,Wi=60114,_d=60109,Rd=60110,Vl=60112,Hi=60113,sl=60120,Wl=60115,Td=60116,Pd=60121,$d=60128,_g=60129,Nd=60130,ic=60131;if(typeof Symbol=="function"&&Symbol.for){var mt=Symbol.for;Oi=mt("react.element"),nn=mt("react.portal"),Rr=mt("react.fragment"),Cd=mt("react.strict_mode"),Wi=mt("react.profiler"),_d=mt("react.provider"),Rd=mt("react.context"),Vl=mt("react.forward_ref"),Hi=mt("react.suspense"),sl=mt("react.suspense_list"),Wl=mt("react.memo"),Td=mt("react.lazy"),Pd=mt("react.block"),mt("react.scope"),$d=mt("react.opaque.id"),_g=mt("react.debug_trace_mode"),Nd=mt("react.offscreen"),ic=mt("react.legacy_hidden")}var fp=typeof Symbol=="function"&&Symbol.iterator;function yi(t){return t===null||typeof t!="object"?null:(t=fp&&t[fp]||t["@@iterator"],typeof t=="function"?t:null)}var Us;function ji(t){if(Us===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Us=e&&e[1]||""}return`
`+Us+t}var qs=!1;function Za(t,e){if(!t||qs)return"";qs=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=n.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=l);break}}}finally{qs=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?ji(t):""}function w1(t){switch(t.tag){case 5:return ji(t.type);case 16:return ji("Lazy");case 13:return ji("Suspense");case 19:return ji("SuspenseList");case 0:case 2:case 15:return t=Za(t.type,!1),t;case 11:return t=Za(t.type.render,!1),t;case 22:return t=Za(t.type._render,!1),t;case 1:return t=Za(t.type,!0),t;default:return""}}function Dn(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rr:return"Fragment";case nn:return"Portal";case Wi:return"Profiler";case Cd:return"StrictMode";case Hi:return"Suspense";case sl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Rd:return(t.displayName||"Context")+".Consumer";case _d:return(t._context.displayName||"Context")+".Provider";case Vl:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case Wl:return Dn(t.type);case Pd:return Dn(t._render);case Td:e=t._payload,t=t._init;try{return Dn(t(e))}catch(r){}}return null}function Vr(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function Rg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function E1(t){var e=Rg(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r!="undefined"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eo(t){t._valueTracker||(t._valueTracker=E1(t))}function Tg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=Rg(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function ul(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch(e){return t.body}}function ac(t,e){var r=e.checked;return Ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:t._wrapperState.initialChecked})}function pp(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=Vr(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pg(t,e){e=e.checked,e!=null&&kd(t,"checked",e,!1)}function oc(t,e){Pg(t,e);var r=Vr(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lc(t,e.type,r):e.hasOwnProperty("defaultValue")&&lc(t,e.type,Vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mp(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function lc(t,e,r){(e!=="number"||ul(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}function S1(t){var e="";return Bl.Children.forEach(t,function(r){r!=null&&(e+=r)}),e}function sc(t,e){return t=Ke({children:void 0},e),(e=S1(e.children))&&(t.children=e),t}function zn(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+Vr(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function uc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hp(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(H(92));if(Array.isArray(r)){if(!(1>=r.length))throw Error(H(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Vr(r)}}function $g(t,e){var r=Vr(e.value),n=Vr(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function gp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var cc={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Ng(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ng(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var to,Ig=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!==cc.svg||"innerHTML"in t)t.innerHTML=e;else{for(to=to||document.createElement("div"),to.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=to.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oa(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Ui={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k1=["Webkit","ms","Moz","O"];Object.keys(Ui).forEach(function(t){k1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ui[e]=Ui[t]})});function Ag(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Ui.hasOwnProperty(t)&&Ui[t]?(""+e).trim():e+"px"}function Og(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Ag(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var C1=Ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fc(t,e){if(e){if(C1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function pc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Id(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mc=null,Bn=null,Vn=null;function vp(t){if(t=Sa(t)){if(typeof mc!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Ql(e),mc(t.stateNode,t.type,e))}}function jg(t){Bn?Vn?Vn.push(t):Vn=[t]:Bn=t}function Lg(){if(Bn){var t=Bn,e=Vn;if(Vn=Bn=null,vp(t),e)for(t=0;t<e.length;t++)vp(e[t])}}function Ad(t,e){return t(e)}function Mg(t,e,r,n,i){return t(e,r,n,i)}function Od(){}var Fg=Ad,an=!1,Gs=!1;function jd(){(Bn!==null||Vn!==null)&&(Od(),Lg())}function _1(t,e,r){if(Gs)return t(e,r);Gs=!0;try{return Fg(t,e,r)}finally{Gs=!1,jd()}}function la(t,e){var r=t.stateNode;if(r===null)return null;var n=Ql(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(H(231,e,typeof r));return r}var hc=!1;if(vr)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){hc=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch(t){hc=!1}function R1(t,e,r,n,i,a,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(r,c)}catch(f){this.onError(f)}}var qi=!1,cl=null,dl=!1,gc=null,T1={onError:function(t){qi=!0,cl=t}};function P1(t,e,r,n,i,a,o,l,u){qi=!1,cl=null,R1.apply(T1,arguments)}function $1(t,e,r,n,i,a,o,l,u){if(P1.apply(this,arguments),qi){if(qi){var c=cl;qi=!1,cl=null}else throw Error(H(198));dl||(dl=!0,gc=c)}}function bn(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!==0&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function Dg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yp(t){if(bn(t)!==t)throw Error(H(188))}function N1(t){var e=t.alternate;if(!e){if(e=bn(t),e===null)throw Error(H(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return yp(i),t;if(a===n)return yp(i),e;a=a.sibling}throw Error(H(188))}if(r.return!==n.return)r=i,n=a;else{for(var o=!1,l=i.child;l;){if(l===r){o=!0,r=i,n=a;break}if(l===n){o=!0,n=i,r=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===r){o=!0,r=a,n=i;break}if(l===n){o=!0,n=a,r=i;break}l=l.sibling}if(!o)throw Error(H(189))}}if(r.alternate!==n)throw Error(H(190))}if(r.tag!==3)throw Error(H(188));return r.stateNode.current===r?t:e}function zg(t){if(t=N1(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function bp(t,e){for(var r=t.alternate;e!==null;){if(e===t||e===r)return!0;e=e.return}return!1}var Bg,Ld,Vg,Wg,vc=!1,ir=[],Nr=null,Ir=null,Ar=null,sa=new Map,ua=new Map,xi=[],xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yc(t,e,r,n,i){return{blockedOn:t,domEventName:e,eventSystemFlags:r|16,nativeEvent:i,targetContainers:[n]}}function wp(t,e){switch(t){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function wi(t,e,r,n,i,a){return t===null||t.nativeEvent!==a?(t=yc(e,r,n,i,a),e!==null&&(e=Sa(e),e!==null&&Ld(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function I1(t,e,r,n,i){switch(e){case"focusin":return Nr=wi(Nr,t,e,r,n,i),!0;case"dragenter":return Ir=wi(Ir,t,e,r,n,i),!0;case"mouseover":return Ar=wi(Ar,t,e,r,n,i),!0;case"pointerover":var a=i.pointerId;return sa.set(a,wi(sa.get(a)||null,t,e,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,ua.set(a,wi(ua.get(a)||null,t,e,r,n,i)),!0}return!1}function A1(t){var e=on(t.target);if(e!==null){var r=bn(e);if(r!==null){if(e=r.tag,e===13){if(e=Dg(r),e!==null){t.blockedOn=e,Wg(t.lanePriority,function(){gt.unstable_runWithPriority(t.priority,function(){Vg(r)})});return}}else if(e===3&&r.stateNode.hydrate){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=zd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r!==null)return e=Sa(r),e!==null&&Ld(e),t.blockedOn=r,!1;e.shift()}return!0}function Ep(t,e,r){Xo(t)&&r.delete(e)}function O1(){for(vc=!1;0<ir.length;){var t=ir[0];if(t.blockedOn!==null){t=Sa(t.blockedOn),t!==null&&Bg(t);break}for(var e=t.targetContainers;0<e.length;){var r=zd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r!==null){t.blockedOn=r;break}e.shift()}t.blockedOn===null&&ir.shift()}Nr!==null&&Xo(Nr)&&(Nr=null),Ir!==null&&Xo(Ir)&&(Ir=null),Ar!==null&&Xo(Ar)&&(Ar=null),sa.forEach(Ep),ua.forEach(Ep)}function Ei(t,e){t.blockedOn===e&&(t.blockedOn=null,vc||(vc=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,O1)))}function Hg(t){function e(i){return Ei(i,t)}if(0<ir.length){Ei(ir[0],t);for(var r=1;r<ir.length;r++){var n=ir[r];n.blockedOn===t&&(n.blockedOn=null)}}for(Nr!==null&&Ei(Nr,t),Ir!==null&&Ei(Ir,t),Ar!==null&&Ei(Ar,t),sa.forEach(e),ua.forEach(e),r=0;r<xi.length;r++)n=xi[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<xi.length&&(r=xi[0],r.blockedOn===null);)A1(r),r.blockedOn===null&&xi.shift()}function ro(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Nn={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},Ks={},Ug={};vr&&(Ug=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function Hl(t){if(Ks[t])return Ks[t];if(!Nn[t])return t;var e=Nn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Ug)return Ks[t]=e[r];return t}var qg=Hl("animationend"),Gg=Hl("animationiteration"),Kg=Hl("animationstart"),Qg=Hl("transitionend"),Xg=new Map,Md=new Map,j1=["abort","abort",qg,"animationEnd",Gg,"animationIteration",Kg,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Qg,"transitionEnd","waiting","waiting"];function Fd(t,e){for(var r=0;r<t.length;r+=2){var n=t[r],i=t[r+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Md.set(n,e),Xg.set(n,i),vn(i,[n])}}var L1=gt.unstable_now;L1();var je=8;function Tn(t){if((1&t)!==0)return je=15,1;if((2&t)!==0)return je=14,2;if((4&t)!==0)return je=13,4;var e=24&t;return e!==0?(je=12,e):(t&32)!==0?(je=11,32):(e=192&t,e!==0?(je=10,e):(t&256)!==0?(je=9,256):(e=3584&t,e!==0?(je=8,e):(t&4096)!==0?(je=7,4096):(e=4186112&t,e!==0?(je=6,e):(e=62914560&t,e!==0?(je=5,e):t&67108864?(je=4,67108864):(t&134217728)!==0?(je=3,134217728):(e=805306368&t,e!==0?(je=2,e):(1073741824&t)!==0?(je=1,1073741824):(je=8,t))))))}function M1(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function F1(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(H(358,t))}}function ca(t,e){var r=t.pendingLanes;if(r===0)return je=0;var n=0,i=0,a=t.expiredLanes,o=t.suspendedLanes,l=t.pingedLanes;if(a!==0)n=a,i=je=15;else if(a=r&134217727,a!==0){var u=a&~o;u!==0?(n=Tn(u),i=je):(l&=a,l!==0&&(n=Tn(l),i=je))}else a=r&~o,a!==0?(n=Tn(a),i=je):l!==0&&(n=Tn(l),i=je);if(n===0)return 0;if(n=31-Wr(n),n=r&((0>n?0:1<<n)<<1)-1,e!==0&&e!==n&&(e&o)===0){if(Tn(e),i<=je)return e;je=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-Wr(e),i=1<<r,n|=t[r],e&=~i;return n}function Yg(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fl(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=Pn(24&~e),t===0?fl(10,e):t;case 10:return t=Pn(192&~e),t===0?fl(8,e):t;case 8:return t=Pn(3584&~e),t===0&&(t=Pn(4186112&~e),t===0&&(t=512)),t;case 2:return e=Pn(805306368&~e),e===0&&(e=268435456),e}throw Error(H(358,t))}function Pn(t){return t&-t}function Qs(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Ul(t,e,r){t.pendingLanes|=e;var n=e-1;t.suspendedLanes&=n,t.pingedLanes&=n,t=t.eventTimes,e=31-Wr(e),t[e]=r}var Wr=Math.clz32?Math.clz32:B1,D1=Math.log,z1=Math.LN2;function B1(t){return t===0?32:31-(D1(t)/z1|0)|0}var V1=gt.unstable_UserBlockingPriority,W1=gt.unstable_runWithPriority,Yo=!0;function H1(t,e,r,n){an||Od();var i=Dd,a=an;an=!0;try{Mg(i,t,e,r,n)}finally{(an=a)||jd()}}function U1(t,e,r,n){W1(V1,Dd.bind(null,t,e,r,n))}function Dd(t,e,r,n){if(Yo){var i;if((i=(e&4)===0)&&0<ir.length&&-1<xp.indexOf(t))t=yc(null,t,e,r,n),ir.push(t);else{var a=zd(t,e,r,n);if(a===null)i&&wp(t,n);else{if(i){if(-1<xp.indexOf(t)){t=yc(a,t,e,r,n),ir.push(t);return}if(I1(a,t,e,r,n))return;wp(t,n)}cv(t,e,n,null,r)}}}}function zd(t,e,r,n){var i=Id(n);if(i=on(i),i!==null){var a=bn(i);if(a===null)i=null;else{var o=a.tag;if(o===13){if(i=Dg(a),i!==null)return i;i=null}else if(o===3){if(a.stateNode.hydrate)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null)}}return cv(t,e,n,i,r),null}var Tr=null,Bd=null,Jo=null;function Jg(){if(Jo)return Jo;var t,e=Bd,r=e.length,n,i="value"in Tr?Tr.value:Tr.textContent,a=i.length;for(t=0;t<r&&e[t]===i[t];t++);var o=r-t;for(n=1;n<=o&&e[r-n]===i[a-n];n++);return Jo=i.slice(t,1<n?1-n:void 0)}function Zo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function Sp(){return!1}function Vt(t){function e(r,n,i,a,o){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?no:Sp,this.isPropagationStopped=Sp,this}return Ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),e}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vd=Vt(li),Ea=Ke({},li,{view:0,detail:0}),q1=Vt(Ea),Xs,Ys,Si,ql=Ke({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Si&&(Si&&t.type==="mousemove"?(Xs=t.screenX-Si.screenX,Ys=t.screenY-Si.screenY):Ys=Xs=0,Si=t),Xs)},movementY:function(t){return"movementY"in t?t.movementY:Ys}}),kp=Vt(ql),G1=Ke({},ql,{dataTransfer:0}),K1=Vt(G1),Q1=Ke({},Ea,{relatedTarget:0}),Js=Vt(Q1),X1=Ke({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),Y1=Vt(X1),J1=Ke({},li,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Z1=Vt(J1),eb=Ke({},li,{data:0}),Cp=Vt(eb),tb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ib(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nb[t])?!!e[t]:!1}function Wd(){return ib}var ab=Ke({},Ea,{key:function(t){if(t.key){var e=tb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wd,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ob=Vt(ab),lb=Ke({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_p=Vt(lb),sb=Ke({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wd}),ub=Vt(sb),cb=Ke({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),db=Vt(cb),fb=Ke({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pb=Vt(fb),mb=[9,13,27,32],Hd=vr&&"CompositionEvent"in window,Gi=null;vr&&"documentMode"in document&&(Gi=document.documentMode);var hb=vr&&"TextEvent"in window&&!Gi,Zg=vr&&(!Hd||Gi&&8<Gi&&11>=Gi),Rp=String.fromCharCode(32),Tp=!1;function ev(t,e){switch(t){case"keyup":return mb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var In=!1;function gb(t,e){switch(t){case"compositionend":return tv(e);case"keypress":return e.which!==32?null:(Tp=!0,Rp);case"textInput":return t=e.data,t===Rp&&Tp?null:t;default:return null}}function vb(t,e){if(In)return t==="compositionend"||!Hd&&ev(t,e)?(t=Jg(),Jo=Bd=Tr=null,In=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zg&&e.locale!=="ko"?null:e.data;default:return null}}var yb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yb[t.type]:e==="textarea"}function rv(t,e,r,n){jg(n),e=pl(e,"onChange"),0<e.length&&(r=new Vd("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var Ki=null,da=null;function bb(t){lv(t,0)}function Gl(t){var e=On(t);if(Tg(e))return t}function xb(t,e){if(t==="change")return e}var nv=!1;if(vr){var Zs;if(vr){var eu="oninput"in document;if(!eu){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),eu=typeof $p.oninput=="function"}Zs=eu}else Zs=!1;nv=Zs&&(!document.documentMode||9<document.documentMode)}function Np(){Ki&&(Ki.detachEvent("onpropertychange",iv),da=Ki=null)}function iv(t){if(t.propertyName==="value"&&Gl(da)){var e=[];if(rv(e,da,t,Id(t)),t=bb,an)t(e);else{an=!0;try{Ad(t,e)}finally{an=!1,jd()}}}}function wb(t,e,r){t==="focusin"?(Np(),Ki=e,da=r,Ki.attachEvent("onpropertychange",iv)):t==="focusout"&&Np()}function Eb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(da)}function Sb(t,e){if(t==="click")return Gl(e)}function kb(t,e){if(t==="input"||t==="change")return Gl(e)}function Cb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ht=typeof Object.is=="function"?Object.is:Cb,_b=Object.prototype.hasOwnProperty;function fa(t,e){if(Ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++)if(!_b.call(e,r[n])||!Ht(t[r[n]],e[r[n]]))return!1;return!0}function Ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ap(t,e){var r=Ip(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ip(r)}}function av(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?av(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Op(){for(var t=window,e=ul();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch(n){r=!1}if(r)t=e.contentWindow;else break;e=ul(t.document)}return e}function bc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Rb=vr&&"documentMode"in document&&11>=document.documentMode,An=null,xc=null,Qi=null,wc=!1;function jp(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;wc||An==null||An!==ul(n)||(n=An,"selectionStart"in n&&bc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Qi&&fa(Qi,n)||(Qi=n,n=pl(xc,"onSelect"),0<n.length&&(e=new Vd("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=An)))}Fd("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Fd("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Fd(j1,2);for(var Lp="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),tu=0;tu<Lp.length;tu++)Md.set(Lp[tu],0);Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ov=new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));function Mp(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,$1(n,e,void 0,t),t.currentTarget=null}function lv(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var a=void 0;if(e)for(var o=n.length-1;0<=o;o--){var l=n[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==a&&i.isPropagationStopped())break e;Mp(i,l,c),a=u}else for(o=0;o<n.length;o++){if(l=n[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==a&&i.isPropagationStopped())break e;Mp(i,l,c),a=u}}}if(dl)throw t=gc,dl=!1,gc=null,t}function De(t,e){var r=fv(e),n=t+"__bubble";r.has(n)||(uv(e,t,2,!1),r.add(n))}var Fp="_reactListening"+Math.random().toString(36).slice(2);function sv(t){t[Fp]||(t[Fp]=!0,Cg.forEach(function(e){ov.has(e)||Dp(e,!1,t,null),Dp(e,!0,t,null)}))}function Dp(t,e,r,n){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,a=r;if(t==="selectionchange"&&r.nodeType!==9&&(a=r.ownerDocument),n!==null&&!e&&ov.has(t)){if(t!=="scroll")return;i|=2,a=n}var o=fv(a),l=t+"__"+(e?"capture":"bubble");o.has(l)||(e&&(i|=4),uv(a,t,i,e),o.add(l))}function uv(t,e,r,n){var i=Md.get(e);switch(i===void 0?2:i){case 0:i=H1;break;case 1:i=U1;break;default:i=Dd}r=i.bind(null,e,r,t),i=void 0,!hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function cv(t,e,r,n,i){var a=n;if((e&1)===0&&(e&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=on(l),o===null)return;if(u=o.tag,u===5||u===6){n=a=o;continue e}l=l.parentNode}}n=n.return}_1(function(){var c=a,f=Id(r),v=[];e:{var h=Xg.get(t);if(h!==void 0){var b=Vd,w=t;switch(t){case"keypress":if(Zo(r)===0)break e;case"keydown":case"keyup":b=ob;break;case"focusin":w="focus",b=Js;break;case"focusout":w="blur",b=Js;break;case"beforeblur":case"afterblur":b=Js;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=K1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=ub;break;case qg:case Gg:case Kg:b=Y1;break;case Qg:b=db;break;case"scroll":b=q1;break;case"wheel":b=pb;break;case"copy":case"cut":case"paste":b=Z1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=_p}var y=(e&4)!==0,m=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,x;g!==null;){x=g;var E=x.stateNode;if(x.tag===5&&E!==null&&(x=E,p!==null&&(E=la(g,p),E!=null&&y.push(pa(g,E,x)))),m)break;g=g.return}0<y.length&&(h=new b(h,w,null,r,f),v.push({event:h,listeners:y}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",h&&(e&16)===0&&(w=r.relatedTarget||r.fromElement)&&(on(w)||w[si]))break e;if((b||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,b?(w=r.relatedTarget||r.toElement,b=c,w=w?on(w):null,w!==null&&(m=bn(w),w!==m||w.tag!==5&&w.tag!==6)&&(w=null)):(b=null,w=c),b!==w)){if(y=kp,E="onMouseLeave",p="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=_p,E="onPointerLeave",p="onPointerEnter",g="pointer"),m=b==null?h:On(b),x=w==null?h:On(w),h=new y(E,g+"leave",b,r,f),h.target=m,h.relatedTarget=x,E=null,on(f)===c&&(y=new y(p,g+"enter",w,r,f),y.target=x,y.relatedTarget=m,E=y),m=E,b&&w)t:{for(y=b,p=w,g=0,x=y;x;x=Sn(x))g++;for(x=0,E=p;E;E=Sn(E))x++;for(;0<g-x;)y=Sn(y),g--;for(;0<x-g;)p=Sn(p),x--;for(;g--;){if(y===p||p!==null&&y===p.alternate)break t;y=Sn(y),p=Sn(p)}y=null}else y=null;b!==null&&zp(v,h,b,y,!1),w!==null&&m!==null&&zp(v,m,w,y,!0)}}e:{if(h=c?On(c):window,b=h.nodeName&&h.nodeName.toLowerCase(),b==="select"||b==="input"&&h.type==="file")var _=xb;else if(Pp(h))if(nv)_=kb;else{_=Eb;var S=wb}else(b=h.nodeName)&&b.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=Sb);if(_&&(_=_(t,c))){rv(v,_,r,f);break e}S&&S(t,h,c),t==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&lc(h,"number",h.value)}switch(S=c?On(c):window,t){case"focusin":(Pp(S)||S.contentEditable==="true")&&(An=S,xc=c,Qi=null);break;case"focusout":Qi=xc=An=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,jp(v,r,f);break;case"selectionchange":if(Rb)break;case"keydown":case"keyup":jp(v,r,f)}var P;if(Hd)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else In?ev(t,r)&&(N="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(N="onCompositionStart");N&&(Zg&&r.locale!=="ko"&&(In||N!=="onCompositionStart"?N==="onCompositionEnd"&&In&&(P=Jg()):(Tr=f,Bd="value"in Tr?Tr.value:Tr.textContent,In=!0)),S=pl(c,N),0<S.length&&(N=new Cp(N,t,null,r,f),v.push({event:N,listeners:S}),P?N.data=P:(P=tv(r),P!==null&&(N.data=P)))),(P=hb?gb(t,r):vb(t,r))&&(c=pl(c,"onBeforeInput"),0<c.length&&(f=new Cp("onBeforeInput","beforeinput",null,r,f),v.push({event:f,listeners:c}),f.data=P))}lv(v,e)})}function pa(t,e,r){return{instance:t,listener:e,currentTarget:r}}function pl(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=la(t,r),a!=null&&n.unshift(pa(t,a,i)),a=la(t,e),a!=null&&n.push(pa(t,a,i))),t=t.return}return n}function Sn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zp(t,e,r,n,i){for(var a=e._reactName,o=[];r!==null&&r!==n;){var l=r,u=l.alternate,c=l.stateNode;if(u!==null&&u===n)break;l.tag===5&&c!==null&&(l=c,i?(u=la(r,a),u!=null&&o.unshift(pa(r,u,l))):i||(u=la(r,a),u!=null&&o.push(pa(r,u,l)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}function ml(){}var ru=null,nu=null;function dv(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function Ec(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bp=typeof setTimeout=="function"?setTimeout:void 0,Tb=typeof clearTimeout=="function"?clearTimeout:void 0;function Ud(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function Wn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function Vp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var iu=0;function Pb(t){return{$$typeof:$d,toString:t,valueOf:t}}var Kl=Math.random().toString(36).slice(2),Pr="__reactFiber$"+Kl,hl="__reactProps$"+Kl,si="__reactContainer$"+Kl,Wp="__reactEvents$"+Kl;function on(t){var e=t[Pr];if(e)return e;for(var r=t.parentNode;r;){if(e=r[si]||r[Pr]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Vp(t);t!==null;){if(r=t[Pr])return r;t=Vp(t)}return e}t=r,r=t.parentNode}return null}function Sa(t){return t=t[Pr]||t[si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function On(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Ql(t){return t[hl]||null}function fv(t){var e=t[Wp];return e===void 0&&(e=t[Wp]=new Set),e}var Sc=[],jn=-1;function Qr(t){return{current:t}}function Be(t){0>jn||(t.current=Sc[jn],Sc[jn]=null,jn--)}function ot(t,e){jn++,Sc[jn]=t.current,t.current=e}var Hr={},Tt=Qr(Hr),Mt=Qr(!1),fn=Hr;function Yn(t,e){var r=t.type.contextTypes;if(!r)return Hr;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=e[a];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(t){return t=t.childContextTypes,t!=null}function gl(){Be(Mt),Be(Tt)}function Hp(t,e,r){if(Tt.current!==Hr)throw Error(H(168));ot(Tt,e),ot(Mt,r)}function pv(t,e,r){var n=t.stateNode;if(t=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(H(108,Dn(e)||"Unknown",i));return Ke({},r,n)}function el(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hr,fn=Tt.current,ot(Tt,t),ot(Mt,Mt.current),!0}function Up(t,e,r){var n=t.stateNode;if(!n)throw Error(H(169));r?(t=pv(t,e,fn),n.__reactInternalMemoizedMergedChildContext=t,Be(Mt),Be(Tt),ot(Tt,t)):Be(Mt),ot(Mt,r)}var qd=null,cn=null,$b=gt.unstable_runWithPriority,Gd=gt.unstable_scheduleCallback,kc=gt.unstable_cancelCallback,Nb=gt.unstable_shouldYield,qp=gt.unstable_requestPaint,Cc=gt.unstable_now,Ib=gt.unstable_getCurrentPriorityLevel,Xl=gt.unstable_ImmediatePriority,mv=gt.unstable_UserBlockingPriority,hv=gt.unstable_NormalPriority,gv=gt.unstable_LowPriority,vv=gt.unstable_IdlePriority,au={},Ab=qp!==void 0?qp:function(){},dr=null,tl=null,ou=!1,Gp=Cc(),_t=1e4>Gp?Cc:function(){return Cc()-Gp};function Jn(){switch(Ib()){case Xl:return 99;case mv:return 98;case hv:return 97;case gv:return 96;case vv:return 95;default:throw Error(H(332))}}function yv(t){switch(t){case 99:return Xl;case 98:return mv;case 97:return hv;case 96:return gv;case 95:return vv;default:throw Error(H(332))}}function pn(t,e){return t=yv(t),$b(t,e)}function ma(t,e,r){return t=yv(t),Gd(t,e,r)}function ur(){if(tl!==null){var t=tl;tl=null,kc(t)}bv()}function bv(){if(!ou&&dr!==null){ou=!0;var t=0;try{var e=dr;pn(99,function(){for(;t<e.length;t++){var r=e[t];do r=r(!0);while(r!==null)}}),dr=null}catch(r){throw dr!==null&&(dr=dr.slice(t+1)),Gd(Xl,ur),r}finally{ou=!1}}}var Ob=yn.ReactCurrentBatchConfig;function Zt(t,e){if(t&&t.defaultProps){e=Ke({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}var vl=Qr(null),yl=null,Ln=null,bl=null;function Kd(){bl=Ln=yl=null}function Qd(t){var e=vl.current;Be(vl),t.type._context._currentValue=e}function xv(t,e){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)===e){if(r===null||(r.childLanes&e)===e)break;r.childLanes|=e}else t.childLanes|=e,r!==null&&(r.childLanes|=e);t=t.return}}function Hn(t,e){yl=t,bl=Ln=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(er=!0),t.firstContext=null)}function Gt(t,e){if(bl!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(bl=t,e=1073741823),e={context:t,observedBits:e,next:null},Ln===null){if(yl===null)throw Error(H(308));Ln=e,yl.dependencies={lanes:0,firstContext:e,responders:null}}else Ln=Ln.next=e;return t._currentValue}var _r=!1;function Xd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function wv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Or(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jr(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}}function Kp(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?i=a=e:a=a.next=e}else i=a=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function ha(t,e,r,n){var i=t.updateQueue;_r=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?a=c:o.next=c,o=u;var f=t.alternate;if(f!==null){f=f.updateQueue;var v=f.lastBaseUpdate;v!==o&&(v===null?f.firstBaseUpdate=c:v.next=c,f.lastBaseUpdate=u)}}if(a!==null){v=i.baseState,o=0,f=c=u=null;do{l=a.lane;var h=a.eventTime;if((n&l)===l){f!==null&&(f=f.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=t,w=a;switch(l=e,h=r,w.tag){case 1:if(b=w.payload,typeof b=="function"){v=b.call(h,v,l);break e}v=b;break e;case 3:b.flags=b.flags&-4097|64;case 0:if(b=w.payload,l=typeof b=="function"?b.call(h,v,l):b,l==null)break e;v=Ke({},v,l);break e;case 2:_r=!0}}a.callback!==null&&(t.flags|=32,l=i.effects,l===null?i.effects=[a]:l.push(a))}else h={eventTime:h,lane:l,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=h,u=v):f=f.next=h,o|=l;if(a=a.next,a===null){if(l=i.shared.pending,l===null)break;a=l.next,l.next=null,i.lastBaseUpdate=l,i.shared.pending=null}}while(1);f===null&&(u=v),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,Ca|=o,t.lanes=o,t.memoizedState=v}}function Qp(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(H(191,i));i.call(n)}}}var Ev=new Bl.Component().refs;function xl(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:Ke({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Yl={isMounted:function(t){return(t=t._reactInternals)?bn(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=Bt(),i=Lr(t),a=Or(n,i);a.payload=e,r!=null&&(a.callback=r),jr(t,a),Mr(t,i,n)},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=Bt(),i=Lr(t),a=Or(n,i);a.tag=1,a.payload=e,r!=null&&(a.callback=r),jr(t,a),Mr(t,i,n)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Bt(),n=Lr(t),i=Or(r,n);i.tag=2,e!=null&&(i.callback=e),jr(t,i),Mr(t,n,r)}};function Xp(t,e,r,n,i,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,a,o):e.prototype&&e.prototype.isPureReactComponent?!fa(r,n)||!fa(i,a):!0}function Sv(t,e,r){var n=!1,i=Hr,a=e.contextType;return typeof a=="object"&&a!==null?a=Gt(a):(i=Ft(e)?fn:Tt.current,n=e.contextTypes,a=(n=n!=null)?Yn(t,i):Hr),e=new e(r,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yl,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=a),e}function Yp(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&Yl.enqueueReplaceState(e,e.state,null)}function _c(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs=Ev,Xd(t);var a=e.contextType;typeof a=="object"&&a!==null?i.context=Gt(a):(a=Ft(e)?fn:Tt.current,i.context=Yn(t,a)),ha(t,r,i,n),i.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(xl(t,e,a,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Yl.enqueueReplaceState(i,i.state,null),ha(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var io=Array.isArray;function ki(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(H(309));var n=r.stateNode}if(!n)throw Error(H(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(a){var o=n.refs;o===Ev&&(o=n.refs={}),a===null?delete o[i]:o[i]=a},e._stringRef=i,e)}if(typeof t!="string")throw Error(H(284));if(!r._owner)throw Error(H(290,t))}return t}function ao(t,e){if(t.type!=="textarea")throw Error(H(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function kv(t){function e(m,p){if(t){var g=m.lastEffect;g!==null?(g.nextEffect=p,m.lastEffect=p):m.firstEffect=m.lastEffect=p,p.nextEffect=null,p.flags=8}}function r(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function n(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=qr(m,p),m.index=0,m.sibling=null,m}function a(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags=2,p):g):(m.flags=2,p)):p}function o(m){return t&&m.alternate===null&&(m.flags=2),m}function l(m,p,g,x){return p===null||p.tag!==6?(p=du(g,m.mode,x),p.return=m,p):(p=i(p,g),p.return=m,p)}function u(m,p,g,x){return p!==null&&p.elementType===g.type?(x=i(p,g.props),x.ref=ki(m,p,g),x.return=m,x):(x=al(g.type,g.key,g.props,null,m.mode,x),x.ref=ki(m,p,g),x.return=m,x)}function c(m,p,g,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=fu(g,m.mode,x),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function f(m,p,g,x,E){return p===null||p.tag!==7?(p=Kn(g,m.mode,x,E),p.return=m,p):(p=i(p,g),p.return=m,p)}function v(m,p,g){if(typeof p=="string"||typeof p=="number")return p=du(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Oi:return g=al(p.type,p.key,p.props,null,m.mode,g),g.ref=ki(m,null,p),g.return=m,g;case nn:return p=fu(p,m.mode,g),p.return=m,p}if(io(p)||yi(p))return p=Kn(p,m.mode,g,null),p.return=m,p;ao(m,p)}return null}function h(m,p,g,x){var E=p!==null?p.key:null;if(typeof g=="string"||typeof g=="number")return E!==null?null:l(m,p,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Oi:return g.key===E?g.type===Rr?f(m,p,g.props.children,x,E):u(m,p,g,x):null;case nn:return g.key===E?c(m,p,g,x):null}if(io(g)||yi(g))return E!==null?null:f(m,p,g,x,null);ao(m,g)}return null}function b(m,p,g,x,E){if(typeof x=="string"||typeof x=="number")return m=m.get(g)||null,l(p,m,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Oi:return m=m.get(x.key===null?g:x.key)||null,x.type===Rr?f(p,m,x.props.children,E,x.key):u(p,m,x,E);case nn:return m=m.get(x.key===null?g:x.key)||null,c(p,m,x,E)}if(io(x)||yi(x))return m=m.get(g)||null,f(p,m,x,E,null);ao(p,x)}return null}function w(m,p,g,x){for(var E=null,_=null,S=p,P=p=0,N=null;S!==null&&P<g.length;P++){S.index>P?(N=S,S=null):N=S.sibling;var k=h(m,S,g[P],x);if(k===null){S===null&&(S=N);break}t&&S&&k.alternate===null&&e(m,S),p=a(k,p,P),_===null?E=k:_.sibling=k,_=k,S=N}if(P===g.length)return r(m,S),E;if(S===null){for(;P<g.length;P++)S=v(m,g[P],x),S!==null&&(p=a(S,p,P),_===null?E=S:_.sibling=S,_=S);return E}for(S=n(m,S);P<g.length;P++)N=b(S,m,P,g[P],x),N!==null&&(t&&N.alternate!==null&&S.delete(N.key===null?P:N.key),p=a(N,p,P),_===null?E=N:_.sibling=N,_=N);return t&&S.forEach(function(R){return e(m,R)}),E}function y(m,p,g,x){var E=yi(g);if(typeof E!="function")throw Error(H(150));if(g=E.call(g),g==null)throw Error(H(151));for(var _=E=null,S=p,P=p=0,N=null,k=g.next();S!==null&&!k.done;P++,k=g.next()){S.index>P?(N=S,S=null):N=S.sibling;var R=h(m,S,k.value,x);if(R===null){S===null&&(S=N);break}t&&S&&R.alternate===null&&e(m,S),p=a(R,p,P),_===null?E=R:_.sibling=R,_=R,S=N}if(k.done)return r(m,S),E;if(S===null){for(;!k.done;P++,k=g.next())k=v(m,k.value,x),k!==null&&(p=a(k,p,P),_===null?E=k:_.sibling=k,_=k);return E}for(S=n(m,S);!k.done;P++,k=g.next())k=b(S,m,P,k.value,x),k!==null&&(t&&k.alternate!==null&&S.delete(k.key===null?P:k.key),p=a(k,p,P),_===null?E=k:_.sibling=k,_=k);return t&&S.forEach(function(M){return e(m,M)}),E}return function(m,p,g,x){var E=typeof g=="object"&&g!==null&&g.type===Rr&&g.key===null;E&&(g=g.props.children);var _=typeof g=="object"&&g!==null;if(_)switch(g.$$typeof){case Oi:e:{for(_=g.key,E=p;E!==null;){if(E.key===_){switch(E.tag){case 7:if(g.type===Rr){r(m,E.sibling),p=i(E,g.props.children),p.return=m,m=p;break e}break;default:if(E.elementType===g.type){r(m,E.sibling),p=i(E,g.props),p.ref=ki(m,E,g),p.return=m,m=p;break e}}r(m,E);break}else e(m,E);E=E.sibling}g.type===Rr?(p=Kn(g.props.children,m.mode,x,g.key),p.return=m,m=p):(x=al(g.type,g.key,g.props,null,m.mode,x),x.ref=ki(m,p,g),x.return=m,m=x)}return o(m);case nn:e:{for(E=g.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){r(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{r(m,p);break}else e(m,p);p=p.sibling}p=fu(g,m.mode,x),p.return=m,m=p}return o(m)}if(typeof g=="string"||typeof g=="number")return g=""+g,p!==null&&p.tag===6?(r(m,p.sibling),p=i(p,g),p.return=m,m=p):(r(m,p),p=du(g,m.mode,x),p.return=m,m=p),o(m);if(io(g))return w(m,p,g,x);if(yi(g))return y(m,p,g,x);if(_&&ao(m,g),typeof g=="undefined"&&!E)switch(m.tag){case 1:case 22:case 0:case 11:case 15:throw Error(H(152,Dn(m.type)||"Component"))}return r(m,p)}}var wl=kv(!0),Cv=kv(!1),ka={},lr=Qr(ka),ga=Qr(ka),va=Qr(ka);function ln(t){if(t===ka)throw Error(H(174));return t}function Rc(t,e){switch(ot(va,e),ot(ga,t),ot(lr,ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dc(e,t)}Be(lr),ot(lr,e)}function Zn(){Be(lr),Be(ga),Be(va)}function Jp(t){ln(va.current);var e=ln(lr.current),r=dc(e,t.type);e!==r&&(ot(ga,t),ot(lr,r))}function Yd(t){ga.current===t&&(Be(lr),Be(ga))}var at=Qr(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pr=null,$r=null,sr=!1;function _v(t,e){var r=Ut(5,null,null,0);r.elementType="DELETED",r.type="DELETED",r.stateNode=e,r.return=t,r.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=r,t.lastEffect=r):t.firstEffect=t.lastEffect=r}function Zp(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Tc(t){if(sr){var e=$r;if(e){var r=e;if(!Zp(t,e)){if(e=Wn(r.nextSibling),!e||!Zp(t,e)){t.flags=t.flags&-1025|2,sr=!1,pr=t;return}_v(pr,r)}pr=t,$r=Wn(e.firstChild)}else t.flags=t.flags&-1025|2,sr=!1,pr=t}}function em(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pr=t}function oo(t){if(t!==pr)return!1;if(!sr)return em(t),sr=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!Ec(e,t.memoizedProps))for(e=$r;e;)_v(t,e),e=Wn(e.nextSibling);if(em(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){$r=Wn(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}$r=null}}else $r=pr?Wn(t.stateNode.nextSibling):null;return!0}function lu(){$r=pr=null,sr=!1}var Un=[];function Jd(){for(var t=0;t<Un.length;t++)Un[t]._workInProgressVersionPrimary=null;Un.length=0}var Xi=yn.ReactCurrentDispatcher,qt=yn.ReactCurrentBatchConfig,ya=0,st=null,Ct=null,xt=null,Sl=!1,Yi=!1;function At(){throw Error(H(321))}function Zd(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Ht(t[r],e[r]))return!1;return!0}function ef(t,e,r,n,i,a){if(ya=a,st=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xi.current=t===null||t.memoizedState===null?Lb:Mb,t=r(n,i),Yi){a=0;do{if(Yi=!1,!(25>a))throw Error(H(301));a+=1,xt=Ct=null,e.updateQueue=null,Xi.current=Fb,t=r(n,i)}while(Yi)}if(Xi.current=Rl,e=Ct!==null&&Ct.next!==null,ya=0,xt=Ct=st=null,Sl=!1,e)throw Error(H(300));return t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?st.memoizedState=xt=t:xt=xt.next=t,xt}function xn(){if(Ct===null){var t=st.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=xt===null?st.memoizedState:xt.next;if(e!==null)xt=e,Ct=t;else{if(t===null)throw Error(H(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},xt===null?st.memoizedState=xt=t:xt=xt.next=t}return xt}function ar(t,e){return typeof e=="function"?e(t):e}function Ci(t){var e=xn(),r=e.queue;if(r===null)throw Error(H(311));r.lastRenderedReducer=t;var n=Ct,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}n.baseQueue=i=a,r.pending=null}if(i!==null){i=i.next,n=n.baseState;var l=o=a=null,u=i;do{var c=u.lane;if((ya&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),n=u.eagerReducer===t?u.eagerState:t(n,u.action);else{var f={lane:c,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};l===null?(o=l=f,a=n):l=l.next=f,st.lanes|=c,Ca|=c}u=u.next}while(u!==null&&u!==i);l===null?a=n:l.next=o,Ht(n,e.memoizedState)||(er=!0),e.memoizedState=n,e.baseState=a,e.baseQueue=l,r.lastRenderedState=n}return[e.memoizedState,r.dispatch]}function _i(t){var e=xn(),r=e.queue;if(r===null)throw Error(H(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,a=e.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do a=t(a,o.action),o=o.next;while(o!==i);Ht(a,e.memoizedState)||(er=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),r.lastRenderedState=a}return[a,n]}function tm(t,e,r){var n=e._getVersion;n=n(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===n:(t=t.mutableReadLanes,(t=(ya&t)===t)&&(e._workInProgressVersionPrimary=n,Un.push(e))),t)return r(e._source);throw Un.push(e),Error(H(350))}function Rv(t,e,r,n){var i=Pt;if(i===null)throw Error(H(349));var a=e._getVersion,o=a(e._source),l=Xi.current,u=l.useState(function(){return tm(i,e,r)}),c=u[1],f=u[0];u=xt;var v=t.memoizedState,h=v.refs,b=h.getSnapshot,w=v.source;v=v.subscribe;var y=st;return t.memoizedState={refs:h,source:e,subscribe:n},l.useEffect(function(){h.getSnapshot=r,h.setSnapshot=c;var m=a(e._source);if(!Ht(o,m)){m=r(e._source),Ht(f,m)||(c(m),m=Lr(y),i.mutableReadLanes|=m&i.pendingLanes),m=i.mutableReadLanes,i.entangledLanes|=m;for(var p=i.entanglements,g=m;0<g;){var x=31-Wr(g),E=1<<x;p[x]|=m,g&=~E}}},[r,e,n]),l.useEffect(function(){return n(e._source,function(){var m=h.getSnapshot,p=h.setSnapshot;try{p(m(e._source));var g=Lr(y);i.mutableReadLanes|=g&i.pendingLanes}catch(x){p(function(){throw x})}})},[e,n]),Ht(b,r)&&Ht(w,e)&&Ht(v,n)||(t={pending:null,dispatch:null,lastRenderedReducer:ar,lastRenderedState:f},t.dispatch=c=nf.bind(null,st,t),u.queue=t,u.baseQueue=null,f=tm(i,e,r),u.memoizedState=u.baseState=f),f}function Tv(t,e,r){var n=xn();return Rv(n,t,e,r)}function Ri(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:ar,lastRenderedState:t},t=t.dispatch=nf.bind(null,st,t),[e.memoizedState,t]}function kl(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=st.updateQueue,e===null?(e={lastEffect:null},st.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function rm(t){var e=sn();return t={current:t},e.memoizedState=t}function Cl(){return xn().memoizedState}function Pc(t,e,r,n){var i=sn();st.flags|=t,i.memoizedState=kl(1|e,r,void 0,n===void 0?null:n)}function tf(t,e,r,n){var i=xn();n=n===void 0?null:n;var a=void 0;if(Ct!==null){var o=Ct.memoizedState;if(a=o.destroy,n!==null&&Zd(n,o.deps)){kl(e,r,a,n);return}}st.flags|=t,i.memoizedState=kl(1|e,r,a,n)}function nm(t,e){return Pc(516,4,t,e)}function _l(t,e){return tf(516,4,t,e)}function Pv(t,e){return tf(4,2,t,e)}function $v(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Nv(t,e,r){return r=r!=null?r.concat([t]):null,tf(4,2,$v.bind(null,e,t),r)}function rf(){}function Iv(t,e){var r=xn();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&Zd(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function Av(t,e){var r=xn();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&Zd(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function jb(t,e){var r=Jn();pn(98>r?98:r,function(){t(!0)}),pn(97<r?97:r,function(){var n=qt.transition;qt.transition=1;try{t(!1),e()}finally{qt.transition=n}})}function nf(t,e,r){var n=Bt(),i=Lr(t),a={lane:i,action:r,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?a.next=a:(a.next=o.next,o.next=a),e.pending=a,o=t.alternate,t===st||o!==null&&o===st)Yi=Sl=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,u=o(l,r);if(a.eagerReducer=o,a.eagerState=u,Ht(u,l))return}catch(c){}finally{}Mr(t,i,n)}}var Rl={readContext:Gt,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useOpaqueIdentifier:At,unstable_isNewReconciler:!1},Lb={readContext:Gt,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:nm,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Pc(4,2,$v.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Pc(4,2,t,e)},useMemo:function(t,e){var r=sn();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=sn();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t=n.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=nf.bind(null,st,t),[n.memoizedState,t]},useRef:rm,useState:Ri,useDebugValue:rf,useDeferredValue:function(t){var e=Ri(t),r=e[0],n=e[1];return nm(function(){var i=qt.transition;qt.transition=1;try{n(t)}finally{qt.transition=i}},[t]),r},useTransition:function(){var t=Ri(!1),e=t[0];return t=jb.bind(null,t[1]),rm(t),[t,e]},useMutableSource:function(t,e,r){var n=sn();return n.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:r},Rv(n,t,e,r)},useOpaqueIdentifier:function(){if(sr){var t=!1,e=Pb(function(){throw t||(t=!0,r("r:"+(iu++).toString(36))),Error(H(355))}),r=Ri(e)[1];return(st.mode&2)===0&&(st.flags|=516,kl(5,function(){r("r:"+(iu++).toString(36))},void 0,null)),e}return e="r:"+(iu++).toString(36),Ri(e),e},unstable_isNewReconciler:!1},Mb={readContext:Gt,useCallback:Iv,useContext:Gt,useEffect:_l,useImperativeHandle:Nv,useLayoutEffect:Pv,useMemo:Av,useReducer:Ci,useRef:Cl,useState:function(){return Ci(ar)},useDebugValue:rf,useDeferredValue:function(t){var e=Ci(ar),r=e[0],n=e[1];return _l(function(){var i=qt.transition;qt.transition=1;try{n(t)}finally{qt.transition=i}},[t]),r},useTransition:function(){var t=Ci(ar)[0];return[Cl().current,t]},useMutableSource:Tv,useOpaqueIdentifier:function(){return Ci(ar)[0]},unstable_isNewReconciler:!1},Fb={readContext:Gt,useCallback:Iv,useContext:Gt,useEffect:_l,useImperativeHandle:Nv,useLayoutEffect:Pv,useMemo:Av,useReducer:_i,useRef:Cl,useState:function(){return _i(ar)},useDebugValue:rf,useDeferredValue:function(t){var e=_i(ar),r=e[0],n=e[1];return _l(function(){var i=qt.transition;qt.transition=1;try{n(t)}finally{qt.transition=i}},[t]),r},useTransition:function(){var t=_i(ar)[0];return[Cl().current,t]},useMutableSource:Tv,useOpaqueIdentifier:function(){return _i(ar)[0]},unstable_isNewReconciler:!1},Db=yn.ReactCurrentOwner,er=!1;function Ot(t,e,r,n){e.child=t===null?Cv(e,null,r,n):wl(e,t.child,r,n)}function im(t,e,r,n,i){r=r.render;var a=e.ref;return Hn(e,i),n=ef(t,e,r,n,a,i),t!==null&&!er?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,mr(t,e,i)):(e.flags|=1,Ot(t,e,n,i),e.child)}function am(t,e,r,n,i,a){if(t===null){var o=r.type;return typeof o=="function"&&!cf(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=o,Ov(t,e,o,n,i,a)):(t=al(r.type,null,n,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&a)===0&&(i=o.memoizedProps,r=r.compare,r=r!==null?r:fa,r(i,n)&&t.ref===e.ref)?mr(t,e,a):(e.flags|=1,t=qr(o,n),t.ref=e.ref,t.return=e,e.child=t)}function Ov(t,e,r,n,i,a){if(t!==null&&fa(t.memoizedProps,n)&&t.ref===e.ref)if(er=!1,(a&i)!==0)(t.flags&16384)!==0&&(er=!0);else return e.lanes=t.lanes,mr(t,e,a);return $c(t,e,r,n,a)}function su(t,e,r){var n=e.pendingProps,i=n.children,a=t!==null?t.memoizedState:null;if(n.mode==="hidden"||n.mode==="unstable-defer-without-hiding")if((e.mode&4)===0)e.memoizedState={baseLanes:0},so(e,r);else if((r&1073741824)!==0)e.memoizedState={baseLanes:0},so(e,a!==null?a.baseLanes:r);else return t=a!==null?a.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},so(e,t),null;else a!==null?(n=a.baseLanes|r,e.memoizedState=null):n=r,so(e,n);return Ot(t,e,i,r),e.child}function jv(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=128)}function $c(t,e,r,n,i){var a=Ft(r)?fn:Tt.current;return a=Yn(e,a),Hn(e,i),r=ef(t,e,r,n,a,i),t!==null&&!er?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,mr(t,e,i)):(e.flags|=1,Ot(t,e,r,i),e.child)}function om(t,e,r,n,i){if(Ft(r)){var a=!0;el(e)}else a=!1;if(Hn(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),Sv(e,r,n),_c(e,r,n,i),n=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=r.contextType;typeof c=="object"&&c!==null?c=Gt(c):(c=Ft(r)?fn:Tt.current,c=Yn(e,c));var f=r.getDerivedStateFromProps,v=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==n||u!==c)&&Yp(e,o,n,c),_r=!1;var h=e.memoizedState;o.state=h,ha(e,n,o,i),u=e.memoizedState,l!==n||h!==u||Mt.current||_r?(typeof f=="function"&&(xl(e,r,f,n),u=e.memoizedState),(l=_r||Xp(e,r,l,n,h,u,c))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=n,e.memoizedState=u),o.props=n,o.state=u,o.context=c,n=l):(typeof o.componentDidMount=="function"&&(e.flags|=4),n=!1)}else{o=e.stateNode,wv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Zt(e.type,l),o.props=c,v=e.pendingProps,h=o.context,u=r.contextType,typeof u=="object"&&u!==null?u=Gt(u):(u=Ft(r)?fn:Tt.current,u=Yn(e,u));var b=r.getDerivedStateFromProps;(f=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==v||h!==u)&&Yp(e,o,n,u),_r=!1,h=e.memoizedState,o.state=h,ha(e,n,o,i);var w=e.memoizedState;l!==v||h!==w||Mt.current||_r?(typeof b=="function"&&(xl(e,r,b,n),w=e.memoizedState),(c=_r||Xp(e,r,c,n,h,w,u))?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,w,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=256),e.memoizedProps=n,e.memoizedState=w),o.props=n,o.state=w,o.context=u,n=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=256),n=!1)}return Nc(t,e,r,n,a,i)}function Nc(t,e,r,n,i,a){jv(t,e);var o=(e.flags&64)!==0;if(!n&&!o)return i&&Up(e,r,!1),mr(t,e,a);n=e.stateNode,Db.current=e;var l=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&o?(e.child=wl(e,t.child,null,a),e.child=wl(e,null,l,a)):Ot(t,e,l,a),e.memoizedState=n.state,i&&Up(e,r,!0),e.child}function lm(t){var e=t.stateNode;e.pendingContext?Hp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hp(t,e.context,!1),Rc(t,e.containerInfo)}var lo={dehydrated:null,retryLane:0};function sm(t,e,r){var n=e.pendingProps,i=at.current,a=!1,o;return(o=(e.flags&64)!==0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(a=!0,e.flags&=-65):t!==null&&t.memoizedState===null||n.fallback===void 0||n.unstable_avoidThisFallback===!0||(i|=1),ot(at,i&1),t===null?(n.fallback!==void 0&&Tc(e),t=n.children,i=n.fallback,a?(t=um(e,t,i,r),e.child.memoizedState={baseLanes:r},e.memoizedState=lo,t):typeof n.unstable_expectedLoadTime=="number"?(t=um(e,t,i,r),e.child.memoizedState={baseLanes:r},e.memoizedState=lo,e.lanes=33554432,t):(r=df({mode:"visible",children:t},e.mode,r,null),r.return=e,e.child=r)):t.memoizedState!==null?a?(n=dm(t,e,n.children,n.fallback,r),a=e.child,i=t.child.memoizedState,a.memoizedState=i===null?{baseLanes:r}:{baseLanes:i.baseLanes|r},a.childLanes=t.childLanes&~r,e.memoizedState=lo,n):(r=cm(t,e,n.children,r),e.memoizedState=null,r):a?(n=dm(t,e,n.children,n.fallback,r),a=e.child,i=t.child.memoizedState,a.memoizedState=i===null?{baseLanes:r}:{baseLanes:i.baseLanes|r},a.childLanes=t.childLanes&~r,e.memoizedState=lo,n):(r=cm(t,e,n.children,r),e.memoizedState=null,r)}function um(t,e,r,n){var i=t.mode,a=t.child;return e={mode:"hidden",children:e},(i&2)===0&&a!==null?(a.childLanes=0,a.pendingProps=e):a=df(e,i,0,null),r=Kn(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r}function cm(t,e,r,n){var i=t.child;return t=i.sibling,r=qr(i,{mode:"visible",children:r}),(e.mode&2)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=r}function dm(t,e,r,n,i){var a=e.mode,o=t.child;t=o.sibling;var l={mode:"hidden",children:r};return(a&2)===0&&e.child!==o?(r=e.child,r.childLanes=0,r.pendingProps=l,o=r.lastEffect,o!==null?(e.firstEffect=r.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):r=qr(o,l),t!==null?n=qr(t,n):(n=Kn(n,a,i,null),n.flags|=2),n.return=e,r.return=e,r.sibling=n,e.child=r,n}function fm(t,e){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xv(t.return,e)}function uu(t,e,r,n,i,a){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i,lastEffect:a}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i,o.lastEffect=a)}function pm(t,e,r){var n=e.pendingProps,i=n.revealOrder,a=n.tail;if(Ot(t,e,n.children,r),n=at.current,(n&2)!==0)n=n&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fm(t,r);else if(t.tag===19)fm(t,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(ot(at,n),(e.mode&2)===0)e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&El(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),uu(e,!1,i,r,a,e.lastEffect);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&El(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}uu(e,!0,r,null,a,e.lastEffect);break;case"together":uu(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function mr(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Ca|=e.lanes,(r&e.childLanes)!==0){if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,r=qr(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=qr(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}return null}var Lv,Ic,Mv,Fv;Lv=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ic=function(){};Mv=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,ln(lr.current);var a=null;switch(r){case"input":i=ac(t,i),n=ac(t,n),a=[];break;case"option":i=sc(t,i),n=sc(t,n),a=[];break;case"select":i=Ke({},i,{value:void 0}),n=Ke({},n,{value:void 0}),a=[];break;case"textarea":i=uc(t,i),n=uc(t,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=ml)}fc(r,n);var o;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(aa.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in n){var u=n[c];if(l=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(r||(r={}),r[o]=u[o])}else r||(a||(a=[]),a.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(a=a||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(aa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&De("scroll",t),a||l===u||(a=[])):typeof u=="object"&&u!==null&&u.$$typeof===$d?u.toString():(a=a||[]).push(c,u))}r&&(a=a||[]).push("style",r);var c=a;(e.updateQueue=c)&&(e.flags|=4)}};Fv=function(t,e,r,n){r!==n&&(e.flags|=4)};function Ti(t,e){if(!sr)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function zb(t,e,r){var n=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ft(e.type)&&gl(),null;case 3:return Zn(),Be(Mt),Be(Tt),Jd(),n=e.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(oo(e)?e.flags|=4:n.hydrate||(e.flags|=256)),Ic(e),null;case 5:Yd(e);var i=ln(va.current);if(r=e.type,t!==null&&e.stateNode!=null)Mv(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=128);else{if(!n){if(e.stateNode===null)throw Error(H(166));return null}if(t=ln(lr.current),oo(e)){n=e.stateNode,r=e.type;var a=e.memoizedProps;switch(n[Pr]=e,n[hl]=a,r){case"dialog":De("cancel",n),De("close",n);break;case"iframe":case"object":case"embed":De("load",n);break;case"video":case"audio":for(t=0;t<Li.length;t++)De(Li[t],n);break;case"source":De("error",n);break;case"img":case"image":case"link":De("error",n),De("load",n);break;case"details":De("toggle",n);break;case"input":pp(n,a),De("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},De("invalid",n);break;case"textarea":hp(n,a),De("invalid",n)}fc(r,a),t=null;for(var o in a)a.hasOwnProperty(o)&&(i=a[o],o==="children"?typeof i=="string"?n.textContent!==i&&(t=["children",i]):typeof i=="number"&&n.textContent!==""+i&&(t=["children",""+i]):aa.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&De("scroll",n));switch(r){case"input":eo(n),mp(n,a,!0);break;case"textarea":eo(n),gp(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=ml)}n=t,e.updateQueue=n,n!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===cc.html&&(t=Ng(r)),t===cc.html?r==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=o.createElement(r,{is:n.is}):(t=o.createElement(r),r==="select"&&(o=t,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):t=o.createElementNS(t,r),t[Pr]=e,t[hl]=n,Lv(t,e,!1,!1),e.stateNode=t,o=pc(r,n),r){case"dialog":De("cancel",t),De("close",t),i=n;break;case"iframe":case"object":case"embed":De("load",t),i=n;break;case"video":case"audio":for(i=0;i<Li.length;i++)De(Li[i],t);i=n;break;case"source":De("error",t),i=n;break;case"img":case"image":case"link":De("error",t),De("load",t),i=n;break;case"details":De("toggle",t),i=n;break;case"input":pp(t,n),i=ac(t,n),De("invalid",t);break;case"option":i=sc(t,n);break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=Ke({},n,{value:void 0}),De("invalid",t);break;case"textarea":hp(t,n),i=uc(t,n),De("invalid",t);break;default:i=n}fc(r,i);var l=i;for(a in l)if(l.hasOwnProperty(a)){var u=l[a];a==="style"?Og(t,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ig(t,u)):a==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&oa(t,u):typeof u=="number"&&oa(t,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(aa.hasOwnProperty(a)?u!=null&&a==="onScroll"&&De("scroll",t):u!=null&&kd(t,a,u,o))}switch(r){case"input":eo(t),mp(t,n,!1);break;case"textarea":eo(t),gp(t);break;case"option":n.value!=null&&t.setAttribute("value",""+Vr(n.value));break;case"select":t.multiple=!!n.multiple,a=n.value,a!=null?zn(t,!!n.multiple,a,!1):n.defaultValue!=null&&zn(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ml)}dv(r,n)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)Fv(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(H(166));r=ln(va.current),ln(lr.current),oo(e)?(n=e.stateNode,r=e.memoizedProps,n[Pr]=e,n.nodeValue!==r&&(e.flags|=4)):(n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Pr]=e,e.stateNode=n)}return null;case 13:return Be(at),n=e.memoizedState,(e.flags&64)!==0?(e.lanes=r,e):(n=n!==null,r=!1,t===null?e.memoizedProps.fallback!==void 0&&oo(e):r=t.memoizedState!==null,n&&!r&&(e.mode&2)!==0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(at.current&1)!==0?wt===0&&(wt=3):((wt===0||wt===3)&&(wt=4),Pt===null||(Ca&134217727)===0&&(ci&134217727)===0||qn(Pt,Rt))),(n||r)&&(e.flags|=4),null);case 4:return Zn(),Ic(e),t===null&&sv(e.stateNode.containerInfo),null;case 10:return Qd(e),null;case 17:return Ft(e.type)&&gl(),null;case 19:if(Be(at),n=e.memoizedState,n===null)return null;if(a=(e.flags&64)!==0,o=n.rendering,o===null)if(a)Ti(n,!1);else{if(wt!==0||t!==null&&(t.flags&64)!==0)for(t=e.child;t!==null;){if(o=El(t),o!==null){for(e.flags|=64,Ti(n,!1),a=o.updateQueue,a!==null&&(e.updateQueue=a,e.flags|=4),n.lastEffect===null&&(e.firstEffect=null),e.lastEffect=n.lastEffect,n=r,r=e.child;r!==null;)a=r,t=n,a.flags&=2,a.nextEffect=null,a.firstEffect=null,a.lastEffect=null,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ot(at,at.current&1|2),e.child}t=t.sibling}n.tail!==null&&_t()>Fc&&(e.flags|=64,a=!0,Ti(n,!1),e.lanes=33554432)}else{if(!a)if(t=El(o),t!==null){if(e.flags|=64,a=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Ti(n,!0),n.tail===null&&n.tailMode==="hidden"&&!o.alternate&&!sr)return e=e.lastEffect=n.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*_t()-n.renderingStartTime>Fc&&r!==1073741824&&(e.flags|=64,a=!0,Ti(n,!1),e.lanes=33554432);n.isBackwards?(o.sibling=e.child,e.child=o):(r=n.last,r!==null?r.sibling=o:e.child=o,n.last=o)}return n.tail!==null?(r=n.tail,n.rendering=r,n.tail=r.sibling,n.lastEffect=e.lastEffect,n.renderingStartTime=_t(),r.sibling=null,e=at.current,ot(at,a?e&1|2:e&1),r):null;case 23:case 24:return uf(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&n.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(H(156,e.tag))}function Bb(t){switch(t.tag){case 1:Ft(t.type)&&gl();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(Zn(),Be(Mt),Be(Tt),Jd(),e=t.flags,(e&64)!==0)throw Error(H(285));return t.flags=e&-4097|64,t;case 5:return Yd(t),null;case 13:return Be(at),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return Be(at),null;case 4:return Zn(),null;case 10:return Qd(t),null;case 23:case 24:return uf(),null;default:return null}}function af(t,e){try{var r="",n=e;do r+=w1(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:i}}function Ac(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Vb=typeof WeakMap=="function"?WeakMap:Map;function Dv(t,e,r){r=Or(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){Pl||(Pl=!0,Dc=n),Ac(t,e)},r}function zv(t,e,r){r=Or(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return Ac(t,e),n(i)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){typeof n!="function"&&(or===null?or=new Set([this]):or.add(this),Ac(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}var Wb=typeof WeakSet=="function"?WeakSet:Set;function mm(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(r){Fr(t,r)}else e.current=null}function Hb(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var r=t.memoizedProps,n=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?r:Zt(e.type,r),n),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&Ud(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(H(163))}function Ub(t,e,r){switch(r.tag){case 0:case 11:case 15:case 22:if(e=r.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)===3){var n=t.create;t.destroy=n()}t=t.next}while(t!==e)}if(e=r.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;n=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(Qv(r,t),Zb(r,t)),t=n}while(t!==e)}return;case 1:t=r.stateNode,r.flags&4&&(e===null?t.componentDidMount():(n=r.elementType===r.type?e.memoizedProps:Zt(r.type,e.memoizedProps),t.componentDidUpdate(n,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=r.updateQueue,e!==null&&Qp(r,e,t);return;case 3:if(e=r.updateQueue,e!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}Qp(r,e,t)}return;case 5:t=r.stateNode,e===null&&r.flags&4&&dv(r.type,r.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:r.memoizedState===null&&(r=r.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&Hg(r))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(H(163))}function hm(t,e){for(var r=t;;){if(r.tag===5){var n=r.stateNode;if(e)n=n.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none";else{n=r.stateNode;var i=r.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,n.style.display=Ag("display",i)}}else if(r.tag===6)r.stateNode.nodeValue=e?"":r.memoizedProps;else if((r.tag!==23&&r.tag!==24||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function gm(t,e){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(qd,e)}catch(a){}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var r=t=t.next;do{var n=r,i=n.destroy;if(n=n.tag,i!==void 0)if((n&4)!==0)Qv(e,r);else{n=e;try{i()}catch(a){Fr(n,a)}}r=r.next}while(r!==t)}break;case 1:if(mm(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(a){Fr(e,a)}break;case 5:mm(e);break;case 4:Bv(t,e)}}function vm(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function ym(t){return t.tag===5||t.tag===3||t.tag===4}function bm(t){e:{for(var e=t.return;e!==null;){if(ym(e))break e;e=e.return}throw Error(H(160))}var r=e;switch(e=r.stateNode,r.tag){case 5:var n=!1;break;case 3:e=e.containerInfo,n=!0;break;case 4:e=e.containerInfo,n=!0;break;default:throw Error(H(161))}r.flags&16&&(oa(e,""),r.flags&=-17);e:t:for(r=t;;){for(;r.sibling===null;){if(r.return===null||ym(r.return)){r=null;break e}r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue t;r.child.return=r,r=r.child}if(!(r.flags&2)){r=r.stateNode;break e}}n?Oc(t,r,e):jc(t,r,e)}function Oc(t,e,r){var n=t.tag,i=n===5||n===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=ml));else if(n!==4&&(t=t.child,t!==null))for(Oc(t,e,r),t=t.sibling;t!==null;)Oc(t,e,r),t=t.sibling}function jc(t,e,r){var n=t.tag,i=n===5||n===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(jc(t,e,r),t=t.sibling;t!==null;)jc(t,e,r),t=t.sibling}function Bv(t,e){for(var r=e,n=!1,i,a;;){if(!n){n=r.return;e:for(;;){if(n===null)throw Error(H(160));switch(i=n.stateNode,n.tag){case 5:a=!1;break e;case 3:i=i.containerInfo,a=!0;break e;case 4:i=i.containerInfo,a=!0;break e}n=n.return}n=!0}if(r.tag===5||r.tag===6){e:for(var o=t,l=r,u=l;;)if(gm(o,u),u.child!==null&&u.tag!==4)u.child.return=u,u=u.child;else{if(u===l)break e;for(;u.sibling===null;){if(u.return===null||u.return===l)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}a?(o=i,l=r.stateNode,o.nodeType===8?o.parentNode.removeChild(l):o.removeChild(l)):i.removeChild(r.stateNode)}else if(r.tag===4){if(r.child!==null){i=r.stateNode.containerInfo,a=!0,r.child.return=r,r=r.child;continue}}else if(gm(t,r),r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return,r.tag===4&&(n=!1)}r.sibling.return=r.return,r=r.sibling}}function cu(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do(n.tag&3)===3&&(t=n.destroy,n.destroy=void 0,t!==void 0&&t()),n=n.next;while(n!==r)}return;case 1:return;case 5:if(r=e.stateNode,r!=null){n=e.memoizedProps;var i=t!==null?t.memoizedProps:n;t=e.type;var a=e.updateQueue;if(e.updateQueue=null,a!==null){for(r[hl]=n,t==="input"&&n.type==="radio"&&n.name!=null&&Pg(r,n),pc(t,i),e=pc(t,n),i=0;i<a.length;i+=2){var o=a[i],l=a[i+1];o==="style"?Og(r,l):o==="dangerouslySetInnerHTML"?Ig(r,l):o==="children"?oa(r,l):kd(r,o,l,e)}switch(t){case"input":oc(r,n);break;case"textarea":$g(r,n);break;case"select":t=r._wrapperState.wasMultiple,r._wrapperState.wasMultiple=!!n.multiple,a=n.value,a!=null?zn(r,!!n.multiple,a,!1):t!==!!n.multiple&&(n.defaultValue!=null?zn(r,!!n.multiple,n.defaultValue,!0):zn(r,!!n.multiple,n.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(H(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:r=e.stateNode,r.hydrate&&(r.hydrate=!1,Hg(r.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(sf=_t(),hm(e.child,!0)),xm(e);return;case 19:xm(e);return;case 17:return;case 23:case 24:hm(e,e.memoizedState!==null);return}throw Error(H(163))}function xm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new Wb),e.forEach(function(n){var i=rx.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function qb(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var Gb=Math.ceil,Tl=yn.ReactCurrentDispatcher,of=yn.ReactCurrentOwner,ye=0,Pt=null,pt=null,Rt=0,mn=0,Lc=Qr(0),wt=0,Jl=null,ui=0,Ca=0,ci=0,lf=0,Mc=null,sf=0,Fc=1/0;function di(){Fc=_t()+500}var ae=null,Pl=!1,Dc=null,or=null,Ur=!1,Ji=null,Mi=90,zc=[],Bc=[],gr=null,Zi=0,Vc=null,rl=-1,fr=0,nl=0,ea=null,il=!1;function Bt(){return(ye&48)!==0?_t():rl!==-1?rl:rl=_t()}function Lr(t){if(t=t.mode,(t&2)===0)return 1;if((t&4)===0)return Jn()===99?1:2;if(fr===0&&(fr=ui),Ob.transition!==0){nl!==0&&(nl=Mc!==null?Mc.pendingLanes:0),t=fr;var e=4186112&~nl;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=Jn(),(ye&4)!==0&&t===98?t=fl(12,fr):(t=M1(t),t=fl(t,fr)),t}function Mr(t,e,r){if(50<Zi)throw Zi=0,Vc=null,Error(H(185));if(t=Zl(t,e),t===null)return null;Ul(t,e,r),t===Pt&&(ci|=e,wt===4&&qn(t,Rt));var n=Jn();e===1?(ye&8)!==0&&(ye&48)===0?Wc(t):(Kt(t,r),ye===0&&(di(),ur())):((ye&4)===0||n!==98&&n!==99||(gr===null?gr=new Set([t]):gr.add(t)),Kt(t,r)),Mc=t}function Zl(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}function Kt(t,e){for(var r=t.callbackNode,n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-Wr(o),u=1<<l,c=a[l];if(c===-1){if((u&n)===0||(u&i)!==0){c=e,Tn(u);var f=je;a[l]=10<=f?c+250:6<=f?c+5e3:-1}}else c<=e&&(t.expiredLanes|=u);o&=~u}if(n=ca(t,t===Pt?Rt:0),e=je,n===0)r!==null&&(r!==au&&kc(r),t.callbackNode=null,t.callbackPriority=0);else{if(r!==null){if(t.callbackPriority===e)return;r!==au&&kc(r)}e===15?(r=Wc.bind(null,t),dr===null?(dr=[r],tl=Gd(Xl,bv)):dr.push(r),r=au):e===14?r=ma(99,Wc.bind(null,t)):(r=F1(e),r=ma(r,Vv.bind(null,t))),t.callbackPriority=e,t.callbackNode=r}}function Vv(t){if(rl=-1,nl=fr=0,(ye&48)!==0)throw Error(H(327));var e=t.callbackNode;if(Xr()&&t.callbackNode!==e)return null;var r=ca(t,t===Pt?Rt:0);if(r===0)return null;var n=r,i=ye;ye|=16;var a=qv();(Pt!==t||Rt!==n)&&(di(),Gn(t,n));do try{Xb();break}catch(l){Uv(t,l)}while(1);if(Kd(),Tl.current=a,ye=i,pt!==null?n=0:(Pt=null,Rt=0,n=wt),(ui&ci)!==0)Gn(t,0);else if(n!==0){if(n===2&&(ye|=64,t.hydrate&&(t.hydrate=!1,Ud(t.containerInfo)),r=Yg(t),r!==0&&(n=Fi(t,r))),n===1)throw e=Jl,Gn(t,0),qn(t,r),Kt(t,_t()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=r,n){case 0:case 1:throw Error(H(345));case 2:Zr(t);break;case 3:if(qn(t,r),(r&62914560)===r&&(n=sf+500-_t(),10<n)){if(ca(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bp(Zr.bind(null,t),n);break}Zr(t);break;case 4:if(qn(t,r),(r&4186112)===r)break;for(n=t.eventTimes,i=-1;0<r;){var o=31-Wr(r);a=1<<o,o=n[o],o>i&&(i=o),r&=~a}if(r=i,r=_t()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gb(r/1960))-r,10<r){t.timeoutHandle=Bp(Zr.bind(null,t),r);break}Zr(t);break;case 5:Zr(t);break;default:throw Error(H(329))}}return Kt(t,_t()),t.callbackNode===e?Vv.bind(null,t):null}function qn(t,e){for(e&=~lf,e&=~ci,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Wr(e),n=1<<r;t[r]=-1,e&=~n}}function Wc(t){if((ye&48)!==0)throw Error(H(327));if(Xr(),t===Pt&&(t.expiredLanes&Rt)!==0){var e=Rt,r=Fi(t,e);(ui&ci)!==0&&(e=ca(t,e),r=Fi(t,e))}else e=ca(t,0),r=Fi(t,e);if(t.tag!==0&&r===2&&(ye|=64,t.hydrate&&(t.hydrate=!1,Ud(t.containerInfo)),e=Yg(t),e!==0&&(r=Fi(t,e))),r===1)throw r=Jl,Gn(t,0),qn(t,e),Kt(t,_t()),r;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zr(t),Kt(t,_t()),null}function Kb(){if(gr!==null){var t=gr;gr=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,Kt(e,_t())})}ur()}function Wv(t,e){var r=ye;ye|=1;try{return t(e)}finally{ye=r,ye===0&&(di(),ur())}}function Hv(t,e){var r=ye;ye&=-2,ye|=8;try{return t(e)}finally{ye=r,ye===0&&(di(),ur())}}function so(t,e){ot(Lc,mn),mn|=e,ui|=e}function uf(){mn=Lc.current,Be(Lc)}function Gn(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Tb(r)),pt!==null)for(r=pt.return;r!==null;){var n=r;switch(n.tag){case 1:n=n.type.childContextTypes,n!=null&&gl();break;case 3:Zn(),Be(Mt),Be(Tt),Jd();break;case 5:Yd(n);break;case 4:Zn();break;case 13:Be(at);break;case 19:Be(at);break;case 10:Qd(n);break;case 23:case 24:uf()}r=r.return}Pt=t,pt=qr(t.current,null),Rt=mn=ui=e,wt=0,Jl=null,lf=ci=Ca=0}function Uv(t,e){do{var r=pt;try{if(Kd(),Xi.current=Rl,Sl){for(var n=st.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Sl=!1}if(ya=0,xt=Ct=st=null,Yi=!1,of.current=null,r===null||r.return===null){wt=1,Jl=e,pt=null;break}e:{var a=t,o=r.return,l=r,u=e;if(e=Rt,l.flags|=2048,l.firstEffect=l.lastEffect=null,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u;if((l.mode&2)===0){var f=l.alternate;f?(l.updateQueue=f.updateQueue,l.memoizedState=f.memoizedState,l.lanes=f.lanes):(l.updateQueue=null,l.memoizedState=null)}var v=(at.current&1)!==0,h=o;do{var b;if(b=h.tag===13){var w=h.memoizedState;if(w!==null)b=w.dehydrated!==null;else{var y=h.memoizedProps;b=y.fallback===void 0?!1:y.unstable_avoidThisFallback!==!0?!0:!v}}if(b){var m=h.updateQueue;if(m===null){var p=new Set;p.add(c),h.updateQueue=p}else m.add(c);if((h.mode&2)===0){if(h.flags|=64,l.flags|=16384,l.flags&=-2981,l.tag===1)if(l.alternate===null)l.tag=17;else{var g=Or(-1,1);g.tag=2,jr(l,g)}l.lanes|=1;break e}u=void 0,l=e;var x=a.pingCache;if(x===null?(x=a.pingCache=new Vb,u=new Set,x.set(c,u)):(u=x.get(c),u===void 0&&(u=new Set,x.set(c,u))),!u.has(l)){u.add(l);var E=tx.bind(null,a,c,l);c.then(E,E)}h.flags|=4096,h.lanes=e;break e}h=h.return}while(h!==null);u=Error((Dn(l.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}wt!==5&&(wt=2),u=af(u,l),h=o;do{switch(h.tag){case 3:a=u,h.flags|=4096,e&=-e,h.lanes|=e;var _=Dv(h,a,e);Kp(h,_);break e;case 1:a=u;var S=h.type,P=h.stateNode;if((h.flags&64)===0&&(typeof S.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(or===null||!or.has(P)))){h.flags|=4096,e&=-e,h.lanes|=e;var N=zv(h,a,e);Kp(h,N);break e}}h=h.return}while(h!==null)}Kv(r)}catch(k){e=k,pt===r&&r!==null&&(pt=r=r.return);continue}break}while(1)}function qv(){var t=Tl.current;return Tl.current=Rl,t===null?Rl:t}function Fi(t,e){var r=ye;ye|=16;var n=qv();Pt===t&&Rt===e||Gn(t,e);do try{Qb();break}catch(i){Uv(t,i)}while(1);if(Kd(),ye=r,Tl.current=n,pt!==null)throw Error(H(261));return Pt=null,Rt=0,wt}function Qb(){for(;pt!==null;)Gv(pt)}function Xb(){for(;pt!==null&&!Nb();)Gv(pt)}function Gv(t){var e=Xv(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?Kv(t):pt=e,of.current=null}function Kv(t){var e=t;do{var r=e.alternate;if(t=e.return,(e.flags&2048)===0){if(r=zb(r,e,mn),r!==null){pt=r;return}if(r=e,r.tag!==24&&r.tag!==23||r.memoizedState===null||(mn&1073741824)!==0||(r.mode&4)===0){for(var n=0,i=r.child;i!==null;)n|=i.lanes|i.childLanes,i=i.sibling;r.childLanes=n}t!==null&&(t.flags&2048)===0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(r=Bb(e),r!==null){r.flags&=2047,pt=r;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);wt===0&&(wt=5)}function Zr(t){var e=Jn();return pn(99,Yb.bind(null,t,e)),null}function Yb(t,e){do Xr();while(Ji!==null);if((ye&48)!==0)throw Error(H(327));var r=t.finishedWork;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(H(177));t.callbackNode=null;var n=r.lanes|r.childLanes,i=n,a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,l=t.expirationTimes;0<a;){var u=31-Wr(a),c=1<<u;i[u]=0,o[u]=-1,l[u]=-1,a&=~c}if(gr!==null&&(n&24)===0&&gr.has(t)&&gr.delete(t),t===Pt&&(pt=Pt=null,Rt=0),1<r.flags?r.lastEffect!==null?(r.lastEffect.nextEffect=r,n=r.firstEffect):n=r:n=r.firstEffect,n!==null){if(i=ye,ye|=32,of.current=null,ru=Yo,o=Op(),bc(o)){if("selectionStart"in o)l={start:o.selectionStart,end:o.selectionEnd};else e:if(l=(l=o.ownerDocument)&&l.defaultView||window,(c=l.getSelection&&l.getSelection())&&c.rangeCount!==0){l=c.anchorNode,a=c.anchorOffset,u=c.focusNode,c=c.focusOffset;try{l.nodeType,u.nodeType}catch(k){l=null;break e}var f=0,v=-1,h=-1,b=0,w=0,y=o,m=null;t:for(;;){for(var p;y!==l||a!==0&&y.nodeType!==3||(v=f+a),y!==u||c!==0&&y.nodeType!==3||(h=f+c),y.nodeType===3&&(f+=y.nodeValue.length),(p=y.firstChild)!==null;)m=y,y=p;for(;;){if(y===o)break t;if(m===l&&++b===a&&(v=f),m===u&&++w===c&&(h=f),(p=y.nextSibling)!==null)break;y=m,m=y.parentNode}y=p}l=v===-1||h===-1?null:{start:v,end:h}}else l=null;l=l||{start:0,end:0}}else l=null;nu={focusedElem:o,selectionRange:l},Yo=!1,ea=null,il=!1,ae=n;do try{Jb()}catch(k){if(ae===null)throw Error(H(330));Fr(ae,k),ae=ae.nextEffect}while(ae!==null);ea=null,ae=n;do try{for(o=t;ae!==null;){var g=ae.flags;if(g&16&&oa(ae.stateNode,""),g&128){var x=ae.alternate;if(x!==null){var E=x.ref;E!==null&&(typeof E=="function"?E(null):E.current=null)}}switch(g&1038){case 2:bm(ae),ae.flags&=-3;break;case 6:bm(ae),ae.flags&=-3,cu(ae.alternate,ae);break;case 1024:ae.flags&=-1025;break;case 1028:ae.flags&=-1025,cu(ae.alternate,ae);break;case 4:cu(ae.alternate,ae);break;case 8:l=ae,Bv(o,l);var _=l.alternate;vm(l),_!==null&&vm(_)}ae=ae.nextEffect}}catch(k){if(ae===null)throw Error(H(330));Fr(ae,k),ae=ae.nextEffect}while(ae!==null);if(E=nu,x=Op(),g=E.focusedElem,o=E.selectionRange,x!==g&&g&&g.ownerDocument&&av(g.ownerDocument.documentElement,g)){for(o!==null&&bc(g)&&(x=o.start,E=o.end,E===void 0&&(E=x),"selectionStart"in g?(g.selectionStart=x,g.selectionEnd=Math.min(E,g.value.length)):(E=(x=g.ownerDocument||document)&&x.defaultView||window,E.getSelection&&(E=E.getSelection(),l=g.textContent.length,_=Math.min(o.start,l),o=o.end===void 0?_:Math.min(o.end,l),!E.extend&&_>o&&(l=o,o=_,_=l),l=Ap(g,_),a=Ap(g,o),l&&a&&(E.rangeCount!==1||E.anchorNode!==l.node||E.anchorOffset!==l.offset||E.focusNode!==a.node||E.focusOffset!==a.offset)&&(x=x.createRange(),x.setStart(l.node,l.offset),E.removeAllRanges(),_>o?(E.addRange(x),E.extend(a.node,a.offset)):(x.setEnd(a.node,a.offset),E.addRange(x)))))),x=[],E=g;E=E.parentNode;)E.nodeType===1&&x.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<x.length;g++)E=x[g],E.element.scrollLeft=E.left,E.element.scrollTop=E.top}Yo=!!ru,nu=ru=null,t.current=r,ae=n;do try{for(g=t;ae!==null;){var S=ae.flags;if(S&36&&Ub(g,ae.alternate,ae),S&128){x=void 0;var P=ae.ref;if(P!==null){var N=ae.stateNode;switch(ae.tag){case 5:x=N;break;default:x=N}typeof P=="function"?P(x):P.current=x}}ae=ae.nextEffect}}catch(k){if(ae===null)throw Error(H(330));Fr(ae,k),ae=ae.nextEffect}while(ae!==null);ae=null,Ab(),ye=i}else t.current=r;if(Ur)Ur=!1,Ji=t,Mi=e;else for(ae=n;ae!==null;)e=ae.nextEffect,ae.nextEffect=null,ae.flags&8&&(S=ae,S.sibling=null,S.stateNode=null),ae=e;if(n=t.pendingLanes,n===0&&(or=null),n===1?t===Vc?Zi++:(Zi=0,Vc=t):Zi=0,r=r.stateNode,cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(qd,r,void 0,(r.current.flags&64)===64)}catch(k){}if(Kt(t,_t()),Pl)throw Pl=!1,t=Dc,Dc=null,t;return(ye&8)!==0||ur(),null}function Jb(){for(;ae!==null;){var t=ae.alternate;il||ea===null||((ae.flags&8)!==0?bp(ae,ea)&&(il=!0):ae.tag===13&&qb(t,ae)&&bp(ae,ea)&&(il=!0));var e=ae.flags;(e&256)!==0&&Hb(t,ae),(e&512)===0||Ur||(Ur=!0,ma(97,function(){return Xr(),null})),ae=ae.nextEffect}}function Xr(){if(Mi!==90){var t=97<Mi?97:Mi;return Mi=90,pn(t,ex)}return!1}function Zb(t,e){zc.push(e,t),Ur||(Ur=!0,ma(97,function(){return Xr(),null}))}function Qv(t,e){Bc.push(e,t),Ur||(Ur=!0,ma(97,function(){return Xr(),null}))}function ex(){if(Ji===null)return!1;var t=Ji;if(Ji=null,(ye&48)!==0)throw Error(H(331));var e=ye;ye|=32;var r=Bc;Bc=[];for(var n=0;n<r.length;n+=2){var i=r[n],a=r[n+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(u){if(a===null)throw Error(H(330));Fr(a,u)}}for(r=zc,zc=[],n=0;n<r.length;n+=2){i=r[n],a=r[n+1];try{var l=i.create;i.destroy=l()}catch(u){if(a===null)throw Error(H(330));Fr(a,u)}}for(l=t.current.firstEffect;l!==null;)t=l.nextEffect,l.nextEffect=null,l.flags&8&&(l.sibling=null,l.stateNode=null),l=t;return ye=e,ur(),!0}function wm(t,e,r){e=af(r,e),e=Dv(t,e,1),jr(t,e),e=Bt(),t=Zl(t,1),t!==null&&(Ul(t,1,e),Kt(t,e))}function Fr(t,e){if(t.tag===3)wm(t,t,e);else for(var r=t.return;r!==null;){if(r.tag===3){wm(r,t,e);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(or===null||!or.has(n))){t=af(e,t);var i=zv(r,t,1);if(jr(r,i),i=Bt(),r=Zl(r,1),r!==null)Ul(r,1,i),Kt(r,i);else if(typeof n.componentDidCatch=="function"&&(or===null||!or.has(n)))try{n.componentDidCatch(e,t)}catch(a){}break}}r=r.return}}function tx(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=Bt(),t.pingedLanes|=t.suspendedLanes&r,Pt===t&&(Rt&r)===r&&(wt===4||wt===3&&(Rt&62914560)===Rt&&500>_t()-sf?Gn(t,0):lf|=r),Kt(t,e)}function rx(t,e){var r=t.stateNode;r!==null&&r.delete(e),e=0,e===0&&(e=t.mode,(e&2)===0?e=1:(e&4)===0?e=Jn()===99?1:2:(fr===0&&(fr=ui),e=Pn(62914560&~fr),e===0&&(e=4194304))),r=Bt(),t=Zl(t,e),t!==null&&(Ul(t,e,r),Kt(t,r))}var Xv;Xv=function(t,e,r){var n=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)er=!0;else if((r&n)!==0)er=(t.flags&16384)!==0;else{switch(er=!1,e.tag){case 3:lm(e),lu();break;case 5:Jp(e);break;case 1:Ft(e.type)&&el(e);break;case 4:Rc(e,e.stateNode.containerInfo);break;case 10:n=e.memoizedProps.value;var i=e.type._context;ot(vl,i._currentValue),i._currentValue=n;break;case 13:if(e.memoizedState!==null)return(r&e.child.childLanes)!==0?sm(t,e,r):(ot(at,at.current&1),e=mr(t,e,r),e!==null?e.sibling:null);ot(at,at.current&1);break;case 19:if(n=(r&e.childLanes)!==0,(t.flags&64)!==0){if(n)return pm(t,e,r);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ot(at,at.current),n)break;return null;case 23:case 24:return e.lanes=0,su(t,e,r)}return mr(t,e,r)}else er=!1;switch(e.lanes=0,e.tag){case 2:if(n=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=Yn(e,Tt.current),Hn(e,r),i=ef(null,e,n,t,i,r),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(n)){var a=!0;el(e)}else a=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xd(e);var o=n.getDerivedStateFromProps;typeof o=="function"&&xl(e,n,o,t),i.updater=Yl,e.stateNode=i,i._reactInternals=e,_c(e,n,t,r),e=Nc(null,e,n,!0,a,r)}else e.tag=0,Ot(null,e,i,r),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,a=i._init,i=a(i._payload),e.type=i,a=e.tag=ix(i),t=Zt(i,t),a){case 0:e=$c(null,e,i,t,r);break e;case 1:e=om(null,e,i,t,r);break e;case 11:e=im(null,e,i,t,r);break e;case 14:e=am(null,e,i,Zt(i.type,t),n,r);break e}throw Error(H(306,i,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Zt(n,i),$c(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Zt(n,i),om(t,e,n,i,r);case 3:if(lm(e),n=e.updateQueue,t===null||n===null)throw Error(H(282));if(n=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,wv(t,e),ha(e,n,null,r),n=e.memoizedState.element,n===i)lu(),e=mr(t,e,r);else{if(i=e.stateNode,(a=i.hydrate)&&($r=Wn(e.stateNode.containerInfo.firstChild),pr=e,a=sr=!0),a){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)a=t[i],a._workInProgressVersionPrimary=t[i+1],Un.push(a);for(r=Cv(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|1024,r=r.sibling}else Ot(t,e,n,r),lu();e=e.child}return e;case 5:return Jp(e),t===null&&Tc(e),n=e.type,i=e.pendingProps,a=t!==null?t.memoizedProps:null,o=i.children,Ec(n,i)?o=null:a!==null&&Ec(n,a)&&(e.flags|=16),jv(t,e),Ot(t,e,o,r),e.child;case 6:return t===null&&Tc(e),null;case 13:return sm(t,e,r);case 4:return Rc(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=wl(e,null,n,r):Ot(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Zt(n,i),im(t,e,n,i,r);case 7:return Ot(t,e,e.pendingProps,r),e.child;case 8:return Ot(t,e,e.pendingProps.children,r),e.child;case 12:return Ot(t,e,e.pendingProps.children,r),e.child;case 10:e:{n=e.type._context,i=e.pendingProps,o=e.memoizedProps,a=i.value;var l=e.type._context;if(ot(vl,l._currentValue),l._currentValue=a,o!==null)if(l=o.value,a=Ht(l,a)?0:(typeof n._calculateChangedBits=="function"?n._calculateChangedBits(l,a):1073741823)|0,a===0){if(o.children===i.children&&!Mt.current){e=mr(t,e,r);break e}}else for(l=e.child,l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var c=u.firstContext;c!==null;){if(c.context===n&&(c.observedBits&a)!==0){l.tag===1&&(c=Or(-1,r&-r),c.tag=2,jr(l,c)),l.lanes|=r,c=l.alternate,c!==null&&(c.lanes|=r),xv(l.return,r),u.lanes|=r;break}c=c.next}}else o=l.tag===10&&l.type===e.type?null:l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Ot(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,a=e.pendingProps,n=a.children,Hn(e,r),i=Gt(i,a.unstable_observedBits),n=n(i),e.flags|=1,Ot(t,e,n,r),e.child;case 14:return i=e.type,a=Zt(i,e.pendingProps),a=Zt(i.type,a),am(t,e,i,a,n,r);case 15:return Ov(t,e,e.type,e.pendingProps,n,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Zt(n,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Ft(n)?(t=!0,el(e)):t=!1,Hn(e,r),Sv(e,n,i),_c(e,n,i,r),Nc(null,e,n,!0,t,r);case 19:return pm(t,e,r);case 23:return su(t,e,r);case 24:return su(t,e,r)}throw Error(H(156,e.tag))};function nx(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,r,n){return new nx(t,e,r,n)}function cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ix(t){if(typeof t=="function")return cf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vl)return 11;if(t===Wl)return 14}return 2}function qr(t,e){var r=t.alternate;return r===null?(r=Ut(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null),r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function al(t,e,r,n,i,a){var o=2;if(n=t,typeof t=="function")cf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Rr:return Kn(r.children,i,a,e);case _g:o=8,i|=16;break;case Cd:o=8,i|=1;break;case Wi:return t=Ut(12,r,e,i|8),t.elementType=Wi,t.type=Wi,t.lanes=a,t;case Hi:return t=Ut(13,r,e,i),t.type=Hi,t.elementType=Hi,t.lanes=a,t;case sl:return t=Ut(19,r,e,i),t.elementType=sl,t.lanes=a,t;case Nd:return df(r,i,a,e);case ic:return t=Ut(24,r,e,i),t.elementType=ic,t.lanes=a,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _d:o=10;break e;case Rd:o=9;break e;case Vl:o=11;break e;case Wl:o=14;break e;case Td:o=16,n=null;break e;case Pd:o=22;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=Ut(o,r,e,i),e.elementType=t,e.type=n,e.lanes=a,e}function Kn(t,e,r,n){return t=Ut(7,t,n,e),t.lanes=r,t}function df(t,e,r,n){return t=Ut(23,t,n,e),t.elementType=Nd,t.lanes=r,t}function du(t,e,r){return t=Ut(6,t,null,e),t.lanes=r,t}function fu(t,e,r){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ax(t,e,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=r,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Qs(0),this.expirationTimes=Qs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qs(0),this.mutableSourceEagerHydrationData=null}function ox(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nn,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function $l(t,e,r,n){var i=e.current,a=Bt(),o=Lr(i);e:if(r){r=r._reactInternals;t:{if(bn(r)!==r||r.tag!==1)throw Error(H(170));var l=r;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(Ft(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(l!==null);throw Error(H(171))}if(r.tag===1){var u=r.type;if(Ft(u)){r=pv(r,u,l);break e}}r=l}else r=Hr;return e.context===null?e.context=r:e.pendingContext=r,e=Or(a,o),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),jr(i,e),Mr(i,o,a),o}function pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Em(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function ff(t,e){Em(t,e),(t=t.alternate)&&Em(t,e)}function lx(){return null}function pf(t,e,r){var n=r!=null&&r.hydrationOptions!=null&&r.hydrationOptions.mutableSources||null;if(r=new ax(t,e,r!=null&&r.hydrate===!0),e=Ut(3,null,null,e===2?7:e===1?3:0),r.current=e,e.stateNode=r,Xd(e),t[si]=r.current,sv(t.nodeType===8?t.parentNode:t),n)for(t=0;t<n.length;t++){e=n[t];var i=e._getVersion;i=i(e._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[e,i]:r.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=r}pf.prototype.render=function(t){$l(t,this._internalRoot,null,null)};pf.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;$l(null,t,null,function(){e[si]=null})};function _a(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sx(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var r;r=t.lastChild;)t.removeChild(r);return new pf(t,0,e?{hydrate:!0}:void 0)}function es(t,e,r,n,i){var a=r._reactRootContainer;if(a){var o=a._internalRoot;if(typeof i=="function"){var l=i;i=function(){var c=pu(o);l.call(c)}}$l(e,o,t,i)}else{if(a=r._reactRootContainer=sx(r,n),o=a._internalRoot,typeof i=="function"){var u=i;i=function(){var c=pu(o);u.call(c)}}Hv(function(){$l(e,o,t,i)})}return pu(o)}Bg=function(t){if(t.tag===13){var e=Bt();Mr(t,4,e),ff(t,4)}};Ld=function(t){if(t.tag===13){var e=Bt();Mr(t,67108864,e),ff(t,67108864)}};Vg=function(t){if(t.tag===13){var e=Bt(),r=Lr(t);Mr(t,r,e),ff(t,r)}};Wg=function(t,e){return e()};mc=function(t,e,r){switch(e){case"input":if(oc(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=Ql(n);if(!i)throw Error(H(90));Tg(n),oc(n,i)}}}break;case"textarea":$g(t,r);break;case"select":e=r.value,e!=null&&zn(t,!!r.multiple,e,!1)}};Ad=Wv;Mg=function(t,e,r,n,i){var a=ye;ye|=4;try{return pn(98,t.bind(null,e,r,n,i))}finally{ye=a,ye===0&&(di(),ur())}};Od=function(){(ye&49)===0&&(Kb(),Xr())};Fg=function(t,e){var r=ye;ye|=2;try{return t(e)}finally{ye=r,ye===0&&(di(),ur())}};function Yv(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_a(e))throw Error(H(200));return ox(t,e,null,r)}var ux={Events:[Sa,On,Ql,jg,Lg,Xr,{current:!1}]},Pi={findFiberByHostInstance:on,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},cx={bundleType:Pi.bundleType,version:Pi.version,rendererPackageName:Pi.rendererPackageName,rendererConfig:Pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zg(t),t===null?null:t.stateNode},findFiberByHostInstance:Pi.findFiberByHostInstance||lx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uo.isDisabled&&uo.supportsFiber)try{qd=uo.inject(cx),cn=uo}catch(t){}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ux;Xt.createPortal=Yv;Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):Error(H(268,Object.keys(t)));return t=zg(e),t=t===null?null:t.stateNode,t};Xt.flushSync=function(t,e){var r=ye;if((r&48)!==0)return t(e);ye|=1;try{if(t)return pn(99,t.bind(null,e))}finally{ye=r,ur()}};Xt.hydrate=function(t,e,r){if(!_a(e))throw Error(H(200));return es(null,t,e,!0,r)};Xt.render=function(t,e,r){if(!_a(e))throw Error(H(200));return es(null,t,e,!1,r)};Xt.unmountComponentAtNode=function(t){if(!_a(t))throw Error(H(40));return t._reactRootContainer?(Hv(function(){es(null,null,t,!1,function(){t._reactRootContainer=null,t[si]=null})}),!0):!1};Xt.unstable_batchedUpdates=Wv;Xt.unstable_createPortal=function(t,e){return Yv(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};Xt.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!_a(r))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return es(t,e,r,!1,n)};Xt.version="17.0.2";function Jv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jv)}catch(t){console.error(t)}}Jv(),Qt.exports=Xt;var Di=Qt.exports;var mf={exports:{}},Ae={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf=Symbol.for("react.element"),gf=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),rs=Symbol.for("react.strict_mode"),ns=Symbol.for("react.profiler"),is=Symbol.for("react.provider"),as=Symbol.for("react.context"),dx=Symbol.for("react.server_context"),os=Symbol.for("react.forward_ref"),ls=Symbol.for("react.suspense"),ss=Symbol.for("react.suspense_list"),us=Symbol.for("react.memo"),cs=Symbol.for("react.lazy"),fx=Symbol.for("react.offscreen"),Zv;Zv=Symbol.for("react.module.reference");function Yt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case hf:switch(t=t.type,t){case ts:case ns:case rs:case ls:case ss:return t;default:switch(t=t&&t.$$typeof,t){case dx:case as:case os:case cs:case us:case is:return t;default:return e}}case gf:return e}}}Ae.ContextConsumer=as;Ae.ContextProvider=is;Ae.Element=hf;Ae.ForwardRef=os;Ae.Fragment=ts;Ae.Lazy=cs;Ae.Memo=us;Ae.Portal=gf;Ae.Profiler=ns;Ae.StrictMode=rs;Ae.Suspense=ls;Ae.SuspenseList=ss;Ae.isAsyncMode=function(){return!1};Ae.isConcurrentMode=function(){return!1};Ae.isContextConsumer=function(t){return Yt(t)===as};Ae.isContextProvider=function(t){return Yt(t)===is};Ae.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===hf};Ae.isForwardRef=function(t){return Yt(t)===os};Ae.isFragment=function(t){return Yt(t)===ts};Ae.isLazy=function(t){return Yt(t)===cs};Ae.isMemo=function(t){return Yt(t)===us};Ae.isPortal=function(t){return Yt(t)===gf};Ae.isProfiler=function(t){return Yt(t)===ns};Ae.isStrictMode=function(t){return Yt(t)===rs};Ae.isSuspense=function(t){return Yt(t)===ls};Ae.isSuspenseList=function(t){return Yt(t)===ss};Ae.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ts||t===ns||t===rs||t===ls||t===ss||t===fx||typeof t=="object"&&t!==null&&(t.$$typeof===cs||t.$$typeof===us||t.$$typeof===is||t.$$typeof===as||t.$$typeof===os||t.$$typeof===Zv||t.getModuleId!==void 0)};Ae.typeOf=Yt;mf.exports=Ae;function px(t){function e($,I,O,z,C){for(var V=0,j=0,te=0,ne=0,Q,B,fe=0,ce=0,se,oe=se=Q=0,ie=0,ge=0,Te=0,Se=0,Ie=O.length,he=Ie-1,Ee,Z="",ke="",Qe="",St="",Ne;ie<Ie;){if(B=O.charCodeAt(ie),ie===he&&j+ne+te+V!==0&&(j!==0&&(B=j===47?10:47),ne=te=V=0,Ie++,he++),j+ne+te+V===0){if(ie===he&&(0<ge&&(Z=Z.replace(h,"")),0<Z.trim().length)){switch(B){case 32:case 9:case 59:case 13:case 10:break;default:Z+=O.charAt(ie)}B=59}switch(B){case 123:for(Z=Z.trim(),Q=Z.charCodeAt(0),se=1,Se=++ie;ie<Ie;){switch(B=O.charCodeAt(ie)){case 123:se++;break;case 125:se--;break;case 47:switch(B=O.charCodeAt(ie+1)){case 42:case 47:e:{for(oe=ie+1;oe<he;++oe)switch(O.charCodeAt(oe)){case 47:if(B===42&&O.charCodeAt(oe-1)===42&&ie+2!==oe){ie=oe+1;break e}break;case 10:if(B===47){ie=oe+1;break e}}ie=oe}}break;case 91:B++;case 40:B++;case 34:case 39:for(;ie++<he&&O.charCodeAt(ie)!==B;);}if(se===0)break;ie++}switch(se=O.substring(Se,ie),Q===0&&(Q=(Z=Z.replace(v,"").trim()).charCodeAt(0)),Q){case 64:switch(0<ge&&(Z=Z.replace(h,"")),B=Z.charCodeAt(1),B){case 100:case 109:case 115:case 45:ge=I;break;default:ge=Y}if(se=e(I,ge,se,B,C+1),Se=se.length,0<D&&(ge=r(Y,Z,Te),Ne=l(3,se,ge,I,q,F,Se,B,C,z),Z=ge.join(""),Ne!==void 0&&(Se=(se=Ne.trim()).length)===0&&(B=0,se="")),0<Se)switch(B){case 115:Z=Z.replace(S,o);case 100:case 109:case 45:se=Z+"{"+se+"}";break;case 107:Z=Z.replace(g,"$1 $2"),se=Z+"{"+se+"}",se=J===1||J===2&&a("@"+se,3)?"@-webkit-"+se+"@"+se:"@"+se;break;default:se=Z+se,z===112&&(se=(ke+=se,""))}else se="";break;default:se=e(I,r(I,Z,Te),se,z,C+1)}Qe+=se,se=Te=ge=oe=Q=0,Z="",B=O.charCodeAt(++ie);break;case 125:case 59:if(Z=(0<ge?Z.replace(h,""):Z).trim(),1<(Se=Z.length))switch(oe===0&&(Q=Z.charCodeAt(0),Q===45||96<Q&&123>Q)&&(Se=(Z=Z.replace(" ",":")).length),0<D&&(Ne=l(1,Z,I,$,q,F,ke.length,z,C,z))!==void 0&&(Se=(Z=Ne.trim()).length)===0&&(Z="\0\0"),Q=Z.charCodeAt(0),B=Z.charCodeAt(1),Q){case 0:break;case 64:if(B===105||B===99){St+=Z+O.charAt(ie);break}default:Z.charCodeAt(Se-1)!==58&&(ke+=i(Z,Q,B,Z.charCodeAt(2)))}Te=ge=oe=Q=0,Z="",B=O.charCodeAt(++ie)}}switch(B){case 13:case 10:j===47?j=0:1+Q===0&&z!==107&&0<Z.length&&(ge=1,Z+="\0"),0<D*K&&l(0,Z,I,$,q,F,ke.length,z,C,z),F=1,q++;break;case 59:case 125:if(j+ne+te+V===0){F++;break}default:switch(F++,Ee=O.charAt(ie),B){case 9:case 32:if(ne+V+j===0)switch(fe){case 44:case 58:case 9:case 32:Ee="";break;default:B!==32&&(Ee=" ")}break;case 0:Ee="\\0";break;case 12:Ee="\\f";break;case 11:Ee="\\v";break;case 38:ne+j+V===0&&(ge=Te=1,Ee="\f"+Ee);break;case 108:if(ne+j+V+U===0&&0<oe)switch(ie-oe){case 2:fe===112&&O.charCodeAt(ie-3)===58&&(U=fe);case 8:ce===111&&(U=ce)}break;case 58:ne+j+V===0&&(oe=ie);break;case 44:j+te+ne+V===0&&(ge=1,Ee+="\r");break;case 34:case 39:j===0&&(ne=ne===B?0:ne===0?B:ne);break;case 91:ne+j+te===0&&V++;break;case 93:ne+j+te===0&&V--;break;case 41:ne+j+V===0&&te--;break;case 40:if(ne+j+V===0){if(Q===0)switch(2*fe+3*ce){case 533:break;default:Q=1}te++}break;case 64:j+te+ne+V+oe+se===0&&(se=1);break;case 42:case 47:if(!(0<ne+V+te))switch(j){case 0:switch(2*B+3*O.charCodeAt(ie+1)){case 235:j=47;break;case 220:Se=ie,j=42}break;case 42:B===47&&fe===42&&Se+2!==ie&&(O.charCodeAt(Se+2)===33&&(ke+=O.substring(Se,ie+1)),Ee="",j=0)}}j===0&&(Z+=Ee)}ce=fe,fe=B,ie++}if(Se=ke.length,0<Se){if(ge=I,0<D&&(Ne=l(2,ke,ge,$,q,F,Se,z,C,z),Ne!==void 0&&(ke=Ne).length===0))return St+ke+Qe;if(ke=ge.join(",")+"{"+ke+"}",J*U!==0){switch(J!==2||a(ke,2)||(U=0),U){case 111:ke=ke.replace(E,":-moz-$1")+ke;break;case 112:ke=ke.replace(x,"::-webkit-input-$1")+ke.replace(x,"::-moz-$1")+ke.replace(x,":-ms-input-$1")+ke}U=0}}return St+ke+Qe}function r($,I,O){var z=I.trim().split(m);I=z;var C=z.length,V=$.length;switch(V){case 0:case 1:var j=0;for($=V===0?"":$[0]+" ";j<C;++j)I[j]=n($,I[j],O).trim();break;default:var te=j=0;for(I=[];j<C;++j)for(var ne=0;ne<V;++ne)I[te++]=n($[ne]+" ",z[j],O).trim()}return I}function n($,I,O){var z=I.charCodeAt(0);switch(33>z&&(z=(I=I.trim()).charCodeAt(0)),z){case 38:return I.replace(p,"$1"+$.trim());case 58:return $.trim()+I.replace(p,"$1"+$.trim());default:if(0<1*O&&0<I.indexOf("\f"))return I.replace(p,($.charCodeAt(0)===58?"":"$1")+$.trim())}return $+I}function i($,I,O,z){var C=$+";",V=2*I+3*O+4*z;if(V===944){$=C.indexOf(":",9)+1;var j=C.substring($,C.length-1).trim();return j=C.substring(0,$).trim()+j+";",J===1||J===2&&a(j,1)?"-webkit-"+j+j:j}if(J===0||J===2&&!a(C,1))return C;switch(V){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(M,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return j=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+j+"-webkit-"+C+"-ms-flex-pack"+j+C;case 1005:return w.test(C)?C.replace(b,":-webkit-")+C.replace(b,":-moz-")+C:C;case 1e3:switch(j=C.substring(13).trim(),I=j.indexOf("-")+1,j.charCodeAt(0)+j.charCodeAt(I)){case 226:j=C.replace(_,"tb");break;case 232:j=C.replace(_,"tb-rl");break;case 220:j=C.replace(_,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+j+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(I=(C=$).length-10,j=(C.charCodeAt(I)===33?C.substring(0,I):C).substring($.indexOf(":",7)+1).trim(),V=j.charCodeAt(0)+(j.charCodeAt(7)|0)){case 203:if(111>j.charCodeAt(8))break;case 115:C=C.replace(j,"-webkit-"+j)+";"+C;break;case 207:case 102:C=C.replace(j,"-webkit-"+(102<V?"inline-":"")+"box")+";"+C.replace(j,"-webkit-"+j)+";"+C.replace(j,"-ms-"+j+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return j=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+j+"-ms-flex-"+j+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(N,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(N,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(R.test($)===!0)return(j=$.substring($.indexOf(":")+1)).charCodeAt(0)===115?i($.replace("stretch","fill-available"),I,O,z).replace(":fill-available",":stretch"):C.replace(j,"-webkit-"+j)+C.replace(j,"-moz-"+j.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,O+z===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+C}return C}function a($,I){var O=$.indexOf(I===1?":":"{"),z=$.substring(0,I!==3?O:10);return O=$.substring(O+1,$.length-1),G(I!==2?z:z.replace(k,"$1"),O,I)}function o($,I){var O=i(I,I.charCodeAt(0),I.charCodeAt(1),I.charCodeAt(2));return O!==I+";"?O.replace(P," or ($1)").substring(4):"("+I+")"}function l($,I,O,z,C,V,j,te,ne,Q){for(var B=0,fe=I,ce;B<D;++B)switch(ce=ee[B].call(f,$,fe,O,z,C,V,j,te,ne,Q)){case void 0:case!1:case!0:case null:break;default:fe=ce}if(fe!==I)return fe}function u($){switch($){case void 0:case null:D=ee.length=0;break;default:if(typeof $=="function")ee[D++]=$;else if(typeof $=="object")for(var I=0,O=$.length;I<O;++I)u($[I]);else K=!!$|0}return u}function c($){return $=$.prefix,$!==void 0&&(G=null,$?typeof $!="function"?J=1:(J=2,G=$):J=0),c}function f($,I){var O=$;if(33>O.charCodeAt(0)&&(O=O.trim()),A=O,O=[A],0<D){var z=l(-1,I,O,O,q,F,0,0,0,0);z!==void 0&&typeof z=="string"&&(I=z)}var C=e(Y,O,I,0,0);return 0<D&&(z=l(-2,C,O,O,q,F,C.length,0,0,0),z!==void 0&&(C=z)),A="",U=0,F=q=1,C}var v=/^\0+/g,h=/[\0\r\f]/g,b=/: */g,w=/zoo|gra/,y=/([,: ])(transform)/g,m=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,E=/:(read-only)/g,_=/[svh]\w+-[tblr]{2}/,S=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,N=/-self|flex-/g,k=/[^]*?(:[rp][el]a[\w-]+)[^]*/,R=/stretch|:\s*\w+\-(?:conte|avail)/,M=/([^-])(image-set\()/,F=1,q=1,U=0,J=1,Y=[],ee=[],D=0,G=null,K=0,A="";return f.use=u,f.set=c,t!==void 0&&c(t),f}var mx={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function hx(t){var e=Object.create(null);return function(r){return e[r]===void 0&&(e[r]=t(r)),e[r]}}var gx=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Sm=hx(function(t){return gx.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),ey={exports:{}},Oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vt=typeof Symbol=="function"&&Symbol.for,vf=vt?Symbol.for("react.element"):60103,yf=vt?Symbol.for("react.portal"):60106,ds=vt?Symbol.for("react.fragment"):60107,fs=vt?Symbol.for("react.strict_mode"):60108,ps=vt?Symbol.for("react.profiler"):60114,ms=vt?Symbol.for("react.provider"):60109,hs=vt?Symbol.for("react.context"):60110,bf=vt?Symbol.for("react.async_mode"):60111,gs=vt?Symbol.for("react.concurrent_mode"):60111,vs=vt?Symbol.for("react.forward_ref"):60112,ys=vt?Symbol.for("react.suspense"):60113,vx=vt?Symbol.for("react.suspense_list"):60120,bs=vt?Symbol.for("react.memo"):60115,xs=vt?Symbol.for("react.lazy"):60116,yx=vt?Symbol.for("react.block"):60121,bx=vt?Symbol.for("react.fundamental"):60117,xx=vt?Symbol.for("react.responder"):60118,wx=vt?Symbol.for("react.scope"):60119;function Wt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case vf:switch(t=t.type,t){case bf:case gs:case ds:case ps:case fs:case ys:return t;default:switch(t=t&&t.$$typeof,t){case hs:case vs:case xs:case bs:case ms:return t;default:return e}}case yf:return e}}}function ty(t){return Wt(t)===gs}Oe.AsyncMode=bf;Oe.ConcurrentMode=gs;Oe.ContextConsumer=hs;Oe.ContextProvider=ms;Oe.Element=vf;Oe.ForwardRef=vs;Oe.Fragment=ds;Oe.Lazy=xs;Oe.Memo=bs;Oe.Portal=yf;Oe.Profiler=ps;Oe.StrictMode=fs;Oe.Suspense=ys;Oe.isAsyncMode=function(t){return ty(t)||Wt(t)===bf};Oe.isConcurrentMode=ty;Oe.isContextConsumer=function(t){return Wt(t)===hs};Oe.isContextProvider=function(t){return Wt(t)===ms};Oe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===vf};Oe.isForwardRef=function(t){return Wt(t)===vs};Oe.isFragment=function(t){return Wt(t)===ds};Oe.isLazy=function(t){return Wt(t)===xs};Oe.isMemo=function(t){return Wt(t)===bs};Oe.isPortal=function(t){return Wt(t)===yf};Oe.isProfiler=function(t){return Wt(t)===ps};Oe.isStrictMode=function(t){return Wt(t)===fs};Oe.isSuspense=function(t){return Wt(t)===ys};Oe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ds||t===gs||t===ps||t===fs||t===ys||t===vx||typeof t=="object"&&t!==null&&(t.$$typeof===xs||t.$$typeof===bs||t.$$typeof===ms||t.$$typeof===hs||t.$$typeof===vs||t.$$typeof===bx||t.$$typeof===xx||t.$$typeof===wx||t.$$typeof===yx)};Oe.typeOf=Wt;ey.exports=Oe;var xf=ey.exports,Ex={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Sx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ry={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wf={};wf[xf.ForwardRef]=kx;wf[xf.Memo]=ry;function km(t){return xf.isMemo(t)?ry:wf[t.$$typeof]||Ex}var Cx=Object.defineProperty,_x=Object.getOwnPropertyNames,Cm=Object.getOwnPropertySymbols,Rx=Object.getOwnPropertyDescriptor,Tx=Object.getPrototypeOf,_m=Object.prototype;function ny(t,e,r){if(typeof e!="string"){if(_m){var n=Tx(e);n&&n!==_m&&ny(t,n,r)}var i=_x(e);Cm&&(i=i.concat(Cm(e)));for(var a=km(t),o=km(e),l=0;l<i.length;++l){var u=i[l];if(!Sx[u]&&!(r&&r[u])&&!(o&&o[u])&&!(a&&a[u])){var c=Rx(e,u);try{Cx(t,u,c)}catch(f){}}}}return t}var Ef=ny;function hr(){return(hr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var Rm=function(t,e){for(var r=[t[0]],n=0,i=e.length;n<i;n+=1)r.push(e[n],t[n+1]);return r},Hc=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!mf.exports.typeOf(t)},Nl=Object.freeze([]),Dr=Object.freeze({});function ba(t){return typeof t=="function"}function Tm(t){return t.displayName||t.name||"Component"}function Sf(t){return t&&typeof t.styledComponentId=="string"}var ei=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",kf=typeof window!="undefined"&&"HTMLElement"in window,Px=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1));function Ra(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var $x=function(){function t(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}var e=t.prototype;return e.indexOfGroup=function(r){for(var n=0,i=0;i<r;i++)n+=this.groupSizes[i];return n},e.insertRules=function(r,n){if(r>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,o=a;r>=o;)(o<<=1)<0&&Ra(16,""+r);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var l=a;l<o;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(r+1),c=0,f=n.length;c<f;c++)this.tag.insertRule(u,n[c])&&(this.groupSizes[r]++,u++)},e.clearGroup=function(r){if(r<this.length){var n=this.groupSizes[r],i=this.indexOfGroup(r),a=i+n;this.groupSizes[r]=0;for(var o=i;o<a;o++)this.tag.deleteRule(i)}},e.getGroup=function(r){var n="";if(r>=this.length||this.groupSizes[r]===0)return n;for(var i=this.groupSizes[r],a=this.indexOfGroup(r),o=a+i,l=a;l<o;l++)n+=this.tag.getRule(l)+`/*!sc*/
`;return n},t}(),ol=new Map,Il=new Map,ta=1,co=function(t){if(ol.has(t))return ol.get(t);for(;Il.has(ta);)ta++;var e=ta++;return ol.set(t,e),Il.set(e,t),e},Nx=function(t){return Il.get(t)},Ix=function(t,e){e>=ta&&(ta=e+1),ol.set(t,e),Il.set(e,t)},Ax="style["+ei+'][data-styled-version="5.3.11"]',Ox=new RegExp("^"+ei+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),jx=function(t,e,r){for(var n,i=r.split(","),a=0,o=i.length;a<o;a++)(n=i[a])&&t.registerName(e,n)},Lx=function(t,e){for(var r=(e.textContent||"").split(`/*!sc*/
`),n=[],i=0,a=r.length;i<a;i++){var o=r[i].trim();if(o){var l=o.match(Ox);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Ix(c,u),jx(t,c,l[3]),t.getTag().insertRules(u,n)),n.length=0}else n.push(o)}}},Mx=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},iy=function(t){var e=document.head,r=t||e,n=document.createElement("style"),i=function(l){for(var u=l.childNodes,c=u.length;c>=0;c--){var f=u[c];if(f&&f.nodeType===1&&f.hasAttribute(ei))return f}}(r),a=i!==void 0?i.nextSibling:null;n.setAttribute(ei,"active"),n.setAttribute("data-styled-version","5.3.11");var o=Mx();return o&&n.setAttribute("nonce",o),r.insertBefore(n,a),n},Fx=function(){function t(r){var n=this.element=iy(r);n.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,l=a.length;o<l;o++){var u=a[o];if(u.ownerNode===i)return u}Ra(17)}(n),this.length=0}var e=t.prototype;return e.insertRule=function(r,n){try{return this.sheet.insertRule(n,r),this.length++,!0}catch(i){return!1}},e.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},e.getRule=function(r){var n=this.sheet.cssRules[r];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},t}(),Dx=function(){function t(r){var n=this.element=iy(r);this.nodes=n.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(r,n){if(r<=this.length&&r>=0){var i=document.createTextNode(n),a=this.nodes[r];return this.element.insertBefore(i,a||null),this.length++,!0}return!1},e.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},e.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},t}(),zx=function(){function t(r){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(r,n){return r<=this.length&&(this.rules.splice(r,0,n),this.length++,!0)},e.deleteRule=function(r){this.rules.splice(r,1),this.length--},e.getRule=function(r){return r<this.length?this.rules[r]:""},t}(),Pm=kf,Bx={isServer:!kf,useCSSOMInjection:!Px},ay=function(){function t(r,n,i){r===void 0&&(r=Dr),n===void 0&&(n={}),this.options=hr({},Bx,{},r),this.gs=n,this.names=new Map(i),this.server=!!r.isServer,!this.server&&kf&&Pm&&(Pm=!1,function(a){for(var o=document.querySelectorAll(Ax),l=0,u=o.length;l<u;l++){var c=o[l];c&&c.getAttribute(ei)!=="active"&&(Lx(a,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}t.registerId=function(r){return co(r)};var e=t.prototype;return e.reconstructWithOptions=function(r,n){return n===void 0&&(n=!0),new t(hr({},this.options,{},r),this.gs,n&&this.names||void 0)},e.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(n=this.options).isServer,a=n.useCSSOMInjection,o=n.target,r=i?new zx(o):a?new Fx(o):new Dx(o),new $x(r)));var r,n,i,a,o},e.hasNameForId=function(r,n){return this.names.has(r)&&this.names.get(r).has(n)},e.registerName=function(r,n){if(co(r),this.names.has(r))this.names.get(r).add(n);else{var i=new Set;i.add(n),this.names.set(r,i)}},e.insertRules=function(r,n,i){this.registerName(r,n),this.getTag().insertRules(co(r),i)},e.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},e.clearRules=function(r){this.getTag().clearGroup(co(r)),this.clearNames(r)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(r){for(var n=r.getTag(),i=n.length,a="",o=0;o<i;o++){var l=Nx(o);if(l!==void 0){var u=r.names.get(l),c=n.getGroup(o);if(u&&c&&u.size){var f=ei+".g"+o+'[id="'+l+'"]',v="";u!==void 0&&u.forEach(function(h){h.length>0&&(v+=h+",")}),a+=""+c+f+'{content:"'+v+`"}/*!sc*/
`}}}return a}(this)},t}(),Vx=/(a)(d)/gi,$m=function(t){return String.fromCharCode(t+(t>25?39:97))};function Uc(t){var e,r="";for(e=Math.abs(t);e>52;e=e/52|0)r=$m(e%52)+r;return($m(e%52)+r).replace(Vx,"$1-$2")}var Mn=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},oy=function(t){return Mn(5381,t)};function Wx(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(ba(r)&&!Sf(r))return!1}return!0}var Hx=oy("5.3.11"),Ux=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Wx(e),this.componentId=r,this.baseHash=Mn(Hx,r),this.baseStyle=n,ay.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var i=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(e,r,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(i,this.staticRulesId))a.push(this.staticRulesId);else{var o=ti(this.rules,e,r,n).join(""),l=Uc(Mn(this.baseHash,o)>>>0);if(!r.hasNameForId(i,l)){var u=n(o,"."+l,void 0,i);r.insertRules(i,l,u)}a.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,f=Mn(this.baseHash,n.hash),v="",h=0;h<c;h++){var b=this.rules[h];if(typeof b=="string")v+=b;else if(b){var w=ti(b,e,r,n),y=Array.isArray(w)?w.join(""):w;f=Mn(f,y+h),v+=y}}if(v){var m=Uc(f>>>0);if(!r.hasNameForId(i,m)){var p=n(v,"."+m,void 0,i);r.insertRules(i,m,p)}a.push(m)}}return a.join(" ")},t}(),qx=/^\s*\/\/.*$/gm,Gx=[":","[",".","#"];function Kx(t){var e,r,n,i,a=t===void 0?Dr:t,o=a.options,l=o===void 0?Dr:o,u=a.plugins,c=u===void 0?Nl:u,f=new px(l),v=[],h=function(y){function m(p){if(p)try{y(p+"}")}catch(g){}}return function(p,g,x,E,_,S,P,N,k,R){switch(p){case 1:if(k===0&&g.charCodeAt(0)===64)return y(g+";"),"";break;case 2:if(N===0)return g+"/*|*/";break;case 3:switch(N){case 102:case 112:return y(x[0]+g),"";default:return g+(R===0?"/*|*/":"")}case-2:g.split("/*|*/}").forEach(m)}}}(function(y){v.push(y)}),b=function(y,m,p){return m===0&&Gx.indexOf(p[r.length])!==-1||p.match(i)?y:"."+e};function w(y,m,p,g){g===void 0&&(g="&");var x=y.replace(qx,""),E=m&&p?p+" "+m+" { "+x+" }":x;return e=g,r=m,n=new RegExp("\\"+r+"\\b","g"),i=new RegExp("(\\"+r+"\\b){2,}"),f(p||!m?"":m,E)}return f.use([].concat(c,[function(y,m,p){y===2&&p.length&&p[0].lastIndexOf(r)>0&&(p[0]=p[0].replace(n,b))},h,function(y){if(y===-2){var m=v;return v=[],m}}])),w.hash=c.length?c.reduce(function(y,m){return m.name||Ra(15),Mn(y,m.name)},5381).toString():"",w}var ly=s.createContext();ly.Consumer;var sy=s.createContext(),Qx=(sy.Consumer,new ay),qc=Kx();function Xx(){return d.exports.useContext(ly)||Qx}function Yx(){return d.exports.useContext(sy)||qc}var uy=function(){function t(e,r){var n=this;this.inject=function(i,a){a===void 0&&(a=qc);var o=n.name+a.hash;i.hasNameForId(n.id,o)||i.insertRules(n.id,o,a(n.rules,o,"@keyframes"))},this.toString=function(){return Ra(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=r}return t.prototype.getName=function(e){return e===void 0&&(e=qc),this.name+e.hash},t}(),Jx=/([A-Z])/,Zx=/([A-Z])/g,ew=/^ms-/,tw=function(t){return"-"+t.toLowerCase()};function Nm(t){return Jx.test(t)?t.replace(Zx,tw).replace(ew,"-ms-"):t}var Im=function(t){return t==null||t===!1||t===""};function ti(t,e,r,n){if(Array.isArray(t)){for(var i,a=[],o=0,l=t.length;o<l;o+=1)(i=ti(t[o],e,r,n))!==""&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}if(Im(t))return"";if(Sf(t))return"."+t.styledComponentId;if(ba(t)){if(typeof(c=t)!="function"||c.prototype&&c.prototype.isReactComponent||!e)return t;var u=t(e);return ti(u,e,r,n)}var c;return t instanceof uy?r?(t.inject(r,n),t.getName(n)):t:Hc(t)?function f(v,h){var b,w,y=[];for(var m in v)v.hasOwnProperty(m)&&!Im(v[m])&&(Array.isArray(v[m])&&v[m].isCss||ba(v[m])?y.push(Nm(m)+":",v[m],";"):Hc(v[m])?y.push.apply(y,f(v[m],m)):y.push(Nm(m)+": "+(b=m,(w=v[m])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||b in mx||b.startsWith("--")?String(w).trim():w+"px")+";"));return h?[h+" {"].concat(y,["}"]):y}(t):t.toString()}var Am=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function cy(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return ba(t)||Hc(t)?Am(ti(Rm(Nl,[t].concat(r)))):r.length===0&&t.length===1&&typeof t[0]=="string"?t:Am(ti(Rm(t,r)))}var rw=function(t,e,r){return r===void 0&&(r=Dr),t.theme!==r.theme&&t.theme||e||r.theme},nw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,iw=/(^-|-$)/g;function mu(t){return t.replace(nw,"-").replace(iw,"")}var dy=function(t){return Uc(oy(t)>>>0)};function fo(t){return typeof t=="string"&&!0}var Gc=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},aw=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function ow(t,e,r){var n=t[r];Gc(e)&&Gc(n)?fy(n,e):t[r]=e}function fy(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];for(var i=0,a=r;i<a.length;i++){var o=a[i];if(Gc(o))for(var l in o)aw(l)&&ow(t,o[l],l)}return t}var py=s.createContext();py.Consumer;var hu={};function my(t,e,r){var n=Sf(t),i=!fo(t),a=e.attrs,o=a===void 0?Nl:a,l=e.componentId,u=l===void 0?function(g,x){var E=typeof g!="string"?"sc":mu(g);hu[E]=(hu[E]||0)+1;var _=E+"-"+dy("5.3.11"+E+hu[E]);return x?x+"-"+_:_}(e.displayName,e.parentComponentId):l,c=e.displayName,f=c===void 0?function(g){return fo(g)?"styled."+g:"Styled("+Tm(g)+")"}(t):c,v=e.displayName&&e.componentId?mu(e.displayName)+"-"+e.componentId:e.componentId||u,h=n&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,b=e.shouldForwardProp;n&&t.shouldForwardProp&&(b=e.shouldForwardProp?function(g,x,E){return t.shouldForwardProp(g,x,E)&&e.shouldForwardProp(g,x,E)}:t.shouldForwardProp);var w,y=new Ux(r,v,n?t.componentStyle:void 0),m=y.isStatic&&o.length===0,p=function(g,x){return function(E,_,S,P){var N=E.attrs,k=E.componentStyle,R=E.defaultProps,M=E.foldedComponentIds,F=E.shouldForwardProp,q=E.styledComponentId,U=E.target,J=function(z,C,V){z===void 0&&(z=Dr);var j=hr({},C,{theme:z}),te={};return V.forEach(function(ne){var Q,B,fe,ce=ne;for(Q in ba(ce)&&(ce=ce(j)),ce)j[Q]=te[Q]=Q==="className"?(B=te[Q],fe=ce[Q],B&&fe?B+" "+fe:B||fe):ce[Q]}),[j,te]}(rw(_,d.exports.useContext(py),R)||Dr,_,N),Y=J[0],ee=J[1],D=function(z,C,V,j){var te=Xx(),ne=Yx(),Q=C?z.generateAndInjectStyles(Dr,te,ne):z.generateAndInjectStyles(V,te,ne);return Q}(k,P,Y),G=S,K=ee.$as||_.$as||ee.as||_.as||U,A=fo(K),$=ee!==_?hr({},_,{},ee):_,I={};for(var O in $)O[0]!=="$"&&O!=="as"&&(O==="forwardedAs"?I.as=$[O]:(F?F(O,Sm,K):!A||Sm(O))&&(I[O]=$[O]));return _.style&&ee.style!==_.style&&(I.style=hr({},_.style,{},ee.style)),I.className=Array.prototype.concat(M,q,D!==q?D:null,_.className,ee.className).filter(Boolean).join(" "),I.ref=G,d.exports.createElement(K,I)}(w,g,x,m)};return p.displayName=f,(w=s.forwardRef(p)).attrs=h,w.componentStyle=y,w.displayName=f,w.shouldForwardProp=b,w.foldedComponentIds=n?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Nl,w.styledComponentId=v,w.target=n?t.target:t,w.withComponent=function(g){var x=e.componentId,E=function(S,P){if(S==null)return{};var N,k,R={},M=Object.keys(S);for(k=0;k<M.length;k++)N=M[k],P.indexOf(N)>=0||(R[N]=S[N]);return R}(e,["componentId"]),_=x&&x+"-"+(fo(g)?g:mu(Tm(g)));return my(g,hr({},E,{attrs:h,componentId:_}),r)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=n?fy({},t.defaultProps,g):g}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&Ef(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var Kc=function(t){return function e(r,n,i){if(i===void 0&&(i=Dr),!mf.exports.isValidElementType(n))return Ra(1,String(n));var a=function(){return r(n,i,cy.apply(void 0,arguments))};return a.withConfig=function(o){return e(r,n,hr({},i,{},o))},a.attrs=function(o){return e(r,n,hr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a}(my,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Kc[t]=Kc(t)});function ws(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var i=cy.apply(void 0,[t].concat(r)).join(""),a=dy(i);return new uy(a,i)}var de=Kc;function T(){return T=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},T.apply(this,arguments)}function Gr(t){return Gr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gr(t)}function gu(t){return t&&Gr(t)==="object"&&t.constructor===Object}function hn(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{clone:!0},n=r.clone?T({},t):t;return gu(t)&&gu(e)&&Object.keys(e).forEach(function(i){i!=="__proto__"&&(gu(e[i])&&i in t?n[i]=hn(t[i],e[i],r):n[i]=e[i])}),n}var Ta={exports:{}},lw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",sw=lw,uw=sw;function hy(){}function gy(){}gy.resetWarningCache=hy;var cw=function(){function t(n,i,a,o,l,u){if(u!==uw){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:gy,resetWarningCache:hy};return r.PropTypes=r,r};Ta.exports=cw();function dw(t,e){if(Gr(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(Gr(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function vy(t){var e=dw(t,"string");return Gr(e)==="symbol"?e:String(e)}function zt(t,e,r){return e=vy(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ri(t){for(var e="https://mui.com/production-error/?code="+t,r=1;r<arguments.length;r+=1)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified Material-UI error #"+t+"; visit "+e+" for the full message."}function Cf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.min(Math.max(e,t),r)}function fw(t){t=t.substr(1);var e=new RegExp(".{1,".concat(t.length>=6?2:1,"}"),"g"),r=t.match(e);return r&&r[0].length===1&&(r=r.map(function(n){return n+n})),r?"rgb".concat(r.length===4?"a":"","(").concat(r.map(function(n,i){return i<3?parseInt(n,16):Math.round(parseInt(n,16)/255*1e3)/1e3}).join(", "),")"):""}function pw(t){t=gn(t);var e=t,r=e.values,n=r[0],i=r[1]/100,a=r[2]/100,o=i*Math.min(a,1-a),l=function(v){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:(v+n/30)%12;return a-o*Math.max(Math.min(h-3,9-h,1),-1)},u="rgb",c=[Math.round(l(0)*255),Math.round(l(8)*255),Math.round(l(4)*255)];return t.type==="hsla"&&(u+="a",c.push(r[3])),Es({type:u,values:c})}function gn(t){if(t.type)return t;if(t.charAt(0)==="#")return gn(fw(t));var e=t.indexOf("("),r=t.substring(0,e);if(["rgb","rgba","hsl","hsla"].indexOf(r)===-1)throw new Error(ri(3,t));var n=t.substring(e+1,t.length-1).split(",");return n=n.map(function(i){return parseFloat(i)}),{type:r,values:n}}function Es(t){var e=t.type,r=t.values;return e.indexOf("rgb")!==-1?r=r.map(function(n,i){return i<3?parseInt(n,10):n}):e.indexOf("hsl")!==-1&&(r[1]="".concat(r[1],"%"),r[2]="".concat(r[2],"%")),"".concat(e,"(").concat(r.join(", "),")")}function mw(t,e){var r=Om(t),n=Om(e);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}function Om(t){t=gn(t);var e=t.type==="hsl"?gn(pw(t)).values:t.values;return e=e.map(function(r){return r/=255,r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4)}),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function jt(t,e){return t=gn(t),e=Cf(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.values[3]=e,Es(t)}function yy(t,e){if(t=gn(t),e=Cf(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1)for(var r=0;r<3;r+=1)t.values[r]*=1-e;return Es(t)}function by(t,e){if(t=gn(t),e=Cf(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(var r=0;r<3;r+=1)t.values[r]+=(255-t.values[r])*e;return Es(t)}function Ss(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,a;for(a=0;a<n.length;a++)i=n[a],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}function me(t,e){if(t==null)return{};var r=Ss(t,e),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],!(e.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(r[n]=t[n]))}return r}var wr=["xs","sm","md","lg","xl"];function hw(t){var e=t.values,r=e===void 0?{xs:0,sm:600,md:960,lg:1280,xl:1920}:e,n=t.unit,i=n===void 0?"px":n,a=t.step,o=a===void 0?5:a,l=me(t,["values","unit","step"]);function u(b){var w=typeof r[b]=="number"?r[b]:b;return"@media (min-width:".concat(w).concat(i,")")}function c(b){var w=wr.indexOf(b)+1,y=r[wr[w]];if(w===wr.length)return u("xs");var m=typeof y=="number"&&w>0?y:b;return"@media (max-width:".concat(m-o/100).concat(i,")")}function f(b,w){var y=wr.indexOf(w);return y===wr.length-1?u(b):"@media (min-width:".concat(typeof r[b]=="number"?r[b]:b).concat(i,") and ")+"(max-width:".concat((y!==-1&&typeof r[wr[y+1]]=="number"?r[wr[y+1]]:w)-o/100).concat(i,")")}function v(b){return f(b,b)}function h(b){return r[b]}return T({keys:wr,values:r,up:u,down:c,between:f,only:v,width:h},l)}function gw(t,e,r){var n;return T({gutters:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return console.warn(["Material-UI: theme.mixins.gutters() is deprecated.","You can use the source of the mixin directly:",`
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
      `].join(`
`)),T({paddingLeft:e(2),paddingRight:e(2)},a,zt({},t.up("sm"),T({paddingLeft:e(3),paddingRight:e(3)},a[t.up("sm")])))},toolbar:(n={minHeight:56},zt(n,"".concat(t.up("xs")," and (orientation: landscape)"),{minHeight:48}),zt(n,t.up("sm"),{minHeight:64}),n)},r)}var vw={black:"#000",white:"#fff"},Al=vw,yw={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"},_f=yw,bw={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},vu=bw,xw={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"},yu=xw,ww={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},bu=ww,Ew={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},xu=Ew,Sw={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},wu=Sw,kw={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Eu=kw,jm={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Al.white,default:_f[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Su={text:{primary:Al.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:_f[800],default:"#303030"},action:{active:Al.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Lm(t,e,r,n){var i=n.light||n,a=n.dark||n*1.5;t[e]||(t.hasOwnProperty(r)?t[e]=t[r]:e==="light"?t.light=by(t.main,i):e==="dark"&&(t.dark=yy(t.main,a)))}function Cw(t){var e=t.primary,r=e===void 0?{light:vu[300],main:vu[500],dark:vu[700]}:e,n=t.secondary,i=n===void 0?{light:yu.A200,main:yu.A400,dark:yu.A700}:n,a=t.error,o=a===void 0?{light:bu[300],main:bu[500],dark:bu[700]}:a,l=t.warning,u=l===void 0?{light:xu[300],main:xu[500],dark:xu[700]}:l,c=t.info,f=c===void 0?{light:wu[300],main:wu[500],dark:wu[700]}:c,v=t.success,h=v===void 0?{light:Eu[300],main:Eu[500],dark:Eu[700]}:v,b=t.type,w=b===void 0?"light":b,y=t.contrastThreshold,m=y===void 0?3:y,p=t.tonalOffset,g=p===void 0?.2:p,x=me(t,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function E(N){var k=mw(N,Su.text.primary)>=m?Su.text.primary:jm.text.primary;return k}var _=function(k){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:300,F=arguments.length>3&&arguments[3]!==void 0?arguments[3]:700;if(k=T({},k),!k.main&&k[R]&&(k.main=k[R]),!k.main)throw new Error(ri(4,R));if(typeof k.main!="string")throw new Error(ri(5,JSON.stringify(k.main)));return Lm(k,"light",M,g),Lm(k,"dark",F,g),k.contrastText||(k.contrastText=E(k.main)),k},S={dark:Su,light:jm},P=hn(T({common:Al,type:w,primary:_(r),secondary:_(i,"A400","A200","A700"),error:_(o),warning:_(u),info:_(f),success:_(h),grey:_f,contrastThreshold:m,getContrastText:E,augmentColor:_,tonalOffset:g},S[w]),x);return P}function xy(t){return Math.round(t*1e5)/1e5}function _w(t){return xy(t)}var Mm={textTransform:"uppercase"},Fm='"Roboto", "Helvetica", "Arial", sans-serif';function Rw(t,e){var r=typeof e=="function"?e(t):e,n=r.fontFamily,i=n===void 0?Fm:n,a=r.fontSize,o=a===void 0?14:a,l=r.fontWeightLight,u=l===void 0?300:l,c=r.fontWeightRegular,f=c===void 0?400:c,v=r.fontWeightMedium,h=v===void 0?500:v,b=r.fontWeightBold,w=b===void 0?700:b,y=r.htmlFontSize,m=y===void 0?16:y,p=r.allVariants,g=r.pxToRem,x=me(r,["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"]),E=o/14,_=g||function(N){return"".concat(N/m*E,"rem")},S=function(k,R,M,F,q){return T({fontFamily:i,fontWeight:k,fontSize:_(R),lineHeight:M},i===Fm?{letterSpacing:"".concat(xy(F/R),"em")}:{},q,p)},P={h1:S(u,96,1.167,-1.5),h2:S(u,60,1.2,-.5),h3:S(f,48,1.167,0),h4:S(f,34,1.235,.25),h5:S(f,24,1.334,0),h6:S(h,20,1.6,.15),subtitle1:S(f,16,1.75,.15),subtitle2:S(h,14,1.57,.1),body1:S(f,16,1.5,.15),body2:S(f,14,1.43,.15),button:S(h,14,1.75,.4,Mm),caption:S(f,12,1.66,.4),overline:S(f,12,2.66,1,Mm)};return hn(T({htmlFontSize:m,pxToRem:_,round:_w,fontFamily:i,fontSize:o,fontWeightLight:u,fontWeightRegular:f,fontWeightMedium:h,fontWeightBold:w},P),x,{clone:!1})}var Tw=.2,Pw=.14,$w=.12;function qe(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(Tw,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(Pw,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat($w,")")].join(",")}var Nw=["none",qe(0,2,1,-1,0,1,1,0,0,1,3,0),qe(0,3,1,-2,0,2,2,0,0,1,5,0),qe(0,3,3,-2,0,3,4,0,0,1,8,0),qe(0,2,4,-1,0,4,5,0,0,1,10,0),qe(0,3,5,-1,0,5,8,0,0,1,14,0),qe(0,3,5,-1,0,6,10,0,0,1,18,0),qe(0,4,5,-2,0,7,10,1,0,2,16,1),qe(0,5,5,-3,0,8,10,1,0,3,14,2),qe(0,5,6,-3,0,9,12,1,0,3,16,2),qe(0,6,6,-3,0,10,14,1,0,4,18,3),qe(0,6,7,-4,0,11,15,1,0,4,20,3),qe(0,7,8,-4,0,12,17,2,0,5,22,4),qe(0,7,8,-4,0,13,19,2,0,5,24,4),qe(0,7,9,-4,0,14,21,2,0,5,26,4),qe(0,8,9,-5,0,15,22,2,0,6,28,5),qe(0,8,10,-5,0,16,24,2,0,6,30,5),qe(0,8,11,-5,0,17,26,2,0,6,32,5),qe(0,9,11,-5,0,18,28,2,0,7,34,6),qe(0,9,12,-6,0,19,29,2,0,7,36,6),qe(0,10,13,-6,0,20,31,3,0,8,38,7),qe(0,10,13,-6,0,21,33,3,0,8,40,7),qe(0,10,14,-6,0,22,35,3,0,8,42,7),qe(0,11,14,-7,0,23,36,3,0,9,44,8),qe(0,11,15,-7,0,24,38,3,0,9,46,8)],Iw=Nw,Aw={borderRadius:4},Ow=Aw;function Qc(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function jw(t){if(Array.isArray(t))return Qc(t)}function Lw(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function wy(t,e){if(!!t){if(typeof t=="string")return Qc(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Qc(t,e)}}function Mw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pa(t){return jw(t)||Lw(t)||wy(t)||Mw()}function Ol(t,e){return e?hn(t,e,{clone:!1}):t}var Fw={xs:0,sm:600,md:960,lg:1280,xl:1920},Dm={keys:["xs","sm","md","lg","xl"],up:function(e){return"@media (min-width:".concat(Fw[e],"px)")}};function Ey(t,e,r){if(Array.isArray(e)){var n=t.theme.breakpoints||Dm;return e.reduce(function(o,l,u){return o[n.up(n.keys[u])]=r(e[u]),o},{})}if(Gr(e)==="object"){var i=t.theme.breakpoints||Dm;return Object.keys(e).reduce(function(o,l){return o[i.up(l)]=r(e[l]),o},{})}var a=r(e);return a}function zm(t,e){return!e||typeof e!="string"?null:e.split(".").reduce(function(r,n){return r&&r[n]?r[n]:null},t)}function le(t){var e=t.prop,r=t.cssProperty,n=r===void 0?t.prop:r,i=t.themeKey,a=t.transform,o=function(u){if(u[e]==null)return null;var c=u[e],f=u.theme,v=zm(f,i)||{},h=function(w){var y;return typeof v=="function"?y=v(w):Array.isArray(v)?y=v[w]||w:(y=zm(v,w)||w,a&&(y=a(y))),n===!1?y:zt({},n,y)};return Ey(u,c,h)};return o.propTypes={},o.filterProps=[e],o}function br(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=function(a){return e.reduce(function(o,l){var u=l(a);return u?Ol(o,u):o},{})};return n.propTypes={},n.filterProps=e.reduce(function(i,a){return i.concat(a.filterProps)},[]),n}function $a(t){return typeof t!="number"?t:"".concat(t,"px solid")}var Dw=le({prop:"border",themeKey:"borders",transform:$a}),zw=le({prop:"borderTop",themeKey:"borders",transform:$a}),Bw=le({prop:"borderRight",themeKey:"borders",transform:$a}),Vw=le({prop:"borderBottom",themeKey:"borders",transform:$a}),Ww=le({prop:"borderLeft",themeKey:"borders",transform:$a}),Hw=le({prop:"borderColor",themeKey:"palette"}),Uw=le({prop:"borderRadius",themeKey:"shape"}),qw=br(Dw,zw,Bw,Vw,Ww,Hw,Uw),Gw=qw;function Bm(t,e){var r={};return Object.keys(t).forEach(function(n){e.indexOf(n)===-1&&(r[n]=t[n])}),r}function Kw(t){var e=function(n){var i=t(n);return n.css?T({},Ol(i,t(T({theme:n.theme},n.css))),Bm(n.css,[t.filterProps])):n.sx?T({},Ol(i,t(T({theme:n.theme},n.sx))),Bm(n.sx,[t.filterProps])):i};return e.propTypes={},e.filterProps=["css","sx"].concat(Pa(t.filterProps)),e}var Qw=le({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),Xw=le({prop:"display"}),Yw=le({prop:"overflow"}),Jw=le({prop:"textOverflow"}),Zw=le({prop:"visibility"}),eE=le({prop:"whiteSpace"}),tE=br(Qw,Xw,Yw,Jw,Zw,eE),rE=le({prop:"flexBasis"}),nE=le({prop:"flexDirection"}),iE=le({prop:"flexWrap"}),aE=le({prop:"justifyContent"}),oE=le({prop:"alignItems"}),lE=le({prop:"alignContent"}),sE=le({prop:"order"}),uE=le({prop:"flex"}),cE=le({prop:"flexGrow"}),dE=le({prop:"flexShrink"}),fE=le({prop:"alignSelf"}),pE=le({prop:"justifyItems"}),mE=le({prop:"justifySelf"}),hE=br(rE,nE,iE,aE,oE,lE,sE,uE,cE,dE,fE,pE,mE),gE=hE,vE=le({prop:"gridGap"}),yE=le({prop:"gridColumnGap"}),bE=le({prop:"gridRowGap"}),xE=le({prop:"gridColumn"}),wE=le({prop:"gridRow"}),EE=le({prop:"gridAutoFlow"}),SE=le({prop:"gridAutoColumns"}),kE=le({prop:"gridAutoRows"}),CE=le({prop:"gridTemplateColumns"}),_E=le({prop:"gridTemplateRows"}),RE=le({prop:"gridTemplateAreas"}),TE=le({prop:"gridArea"}),PE=br(vE,yE,bE,xE,wE,EE,SE,kE,CE,_E,RE,TE),$E=PE,NE=le({prop:"color",themeKey:"palette"}),IE=le({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"}),AE=br(NE,IE),OE=AE,jE=le({prop:"position"}),LE=le({prop:"zIndex",themeKey:"zIndex"}),ME=le({prop:"top"}),FE=le({prop:"right"}),DE=le({prop:"bottom"}),zE=le({prop:"left"}),BE=br(jE,LE,ME,FE,DE,zE),VE=le({prop:"boxShadow",themeKey:"shadows"}),WE=VE;function Yr(t){return t<=1?"".concat(t*100,"%"):t}var HE=le({prop:"width",transform:Yr}),UE=le({prop:"maxWidth",transform:Yr}),qE=le({prop:"minWidth",transform:Yr}),GE=le({prop:"height",transform:Yr}),KE=le({prop:"maxHeight",transform:Yr}),QE=le({prop:"minHeight",transform:Yr});le({prop:"size",cssProperty:"width",transform:Yr});le({prop:"size",cssProperty:"height",transform:Yr});var XE=le({prop:"boxSizing"}),YE=br(HE,UE,qE,GE,KE,QE,XE),JE=YE;function ZE(t){if(Array.isArray(t))return t}function eS(t,e){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n,i,a,o,l=[],u=!0,c=!1;try{if(a=(r=r.call(t)).next,e===0){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);u=!0);}catch(f){c=!0,i=f}finally{try{if(!u&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw i}}return l}}function tS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Na(t,e){return ZE(t)||eS(t,e)||wy(t,e)||tS()}function rS(t){var e={};return function(r){return e[r]===void 0&&(e[r]=t(r)),e[r]}}var nS={m:"margin",p:"padding"},iS={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Vm={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},aS=rS(function(t){if(t.length>2)if(Vm[t])t=Vm[t];else return[t];var e=t.split(""),r=Na(e,2),n=r[0],i=r[1],a=nS[n],o=iS[i]||"";return Array.isArray(o)?o.map(function(l){return a+l}):[a+o]}),Sy=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function ky(t){var e=t.spacing||8;return typeof e=="number"?function(r){return e*r}:Array.isArray(e)?function(r){return e[r]}:typeof e=="function"?e:function(){}}function oS(t,e){if(typeof e=="string"||e==null)return e;var r=Math.abs(e),n=t(r);return e>=0?n:typeof n=="number"?-n:"-".concat(n)}function lS(t,e){return function(r){return t.reduce(function(n,i){return n[i]=oS(e,r),n},{})}}function Rf(t){var e=t.theme,r=ky(e);return Object.keys(t).map(function(n){if(Sy.indexOf(n)===-1)return null;var i=aS(n),a=lS(i,r),o=t[n];return Ey(t,o,a)}).reduce(Ol,{})}Rf.propTypes={};Rf.filterProps=Sy;var sS=le({prop:"fontFamily",themeKey:"typography"}),uS=le({prop:"fontSize",themeKey:"typography"}),cS=le({prop:"fontStyle",themeKey:"typography"}),dS=le({prop:"fontWeight",themeKey:"typography"}),fS=le({prop:"letterSpacing"}),pS=le({prop:"lineHeight"}),mS=le({prop:"textAlign"}),hS=br(sS,uS,cS,dS,fS,pS,mS),gS=hS;function vS(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:8;if(t.mui)return t;var e=ky({spacing:t}),r=function(){for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return a.length===0?e(1):a.length===1?e(a[0]):a.map(function(l){if(typeof l=="string")return l;var u=e(l);return typeof u=="number"?"".concat(u,"px"):u}).join(" ")};return Object.defineProperty(r,"unit",{get:function(){return t}}),r.mui=!0,r}var Wm={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Xc={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Hm(t){return"".concat(Math.round(t),"ms")}var yS={easing:Wm,duration:Xc,create:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["all"],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.duration,i=n===void 0?Xc.standard:n,a=r.easing,o=a===void 0?Wm.easeInOut:a,l=r.delay,u=l===void 0?0:l;return me(r,["duration","easing","delay"]),(Array.isArray(e)?e:[e]).map(function(c){return"".concat(c," ").concat(typeof i=="string"?i:Hm(i)," ").concat(o," ").concat(typeof u=="string"?u:Hm(u))}).join(",")},getAutoHeightDuration:function(e){if(!e)return 0;var r=e/36;return Math.round((4+15*Math.pow(r,.25)+r/5)*10)}},bS={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Cy=bS;function xS(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.breakpoints,r=e===void 0?{}:e,n=t.mixins,i=n===void 0?{}:n,a=t.palette,o=a===void 0?{}:a,l=t.spacing,u=t.typography,c=u===void 0?{}:u,f=me(t,["breakpoints","mixins","palette","spacing","typography"]),v=Cw(o),h=hw(r),b=vS(l),w=hn({breakpoints:h,direction:"ltr",mixins:gw(h,b,i),overrides:{},palette:v,props:{},shadows:Iw,typography:Rw(v,c),spacing:b,shape:Ow,transitions:yS,zIndex:Cy},f),y=arguments.length,m=new Array(y>1?y-1:0),p=1;p<y;p++)m[p-1]=arguments[p];return w=m.reduce(function(g,x){return hn(g,x)},w),w}var wS=typeof Symbol=="function"&&Symbol.for,ES=wS?Symbol.for("mui.nested"):"__THEME_NESTED__",SS=["checked","disabled","error","focused","focusVisible","required","expanded","selected"];function kS(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.disableGlobal,r=e===void 0?!1:e,n=t.productionPrefix,i=n===void 0?"jss":n,a=t.seed,o=a===void 0?"":a,l=o===""?"":"".concat(o,"-"),u=0,c=function(){return u+=1,u};return function(f,v){var h=v.options.name;if(h&&h.indexOf("Mui")===0&&!v.options.link&&!r){if(SS.indexOf(f.key)!==-1)return"Mui-".concat(f.key);var b="".concat(l).concat(h,"-").concat(f.key);return!v.options.theme[ES]||o!==""?b:"".concat(b,"-").concat(c())}return"".concat(l).concat(i).concat(c())}}function _y(t){var e=t.theme,r=t.name,n=t.props;if(!e||!e.props||!e.props[r])return n;var i=e.props[r],a;for(a in i)n[a]===void 0&&(n[a]=i[a]);return n}var Um=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ia=(typeof window=="undefined"?"undefined":Um(window))==="object"&&(typeof document=="undefined"?"undefined":Um(document))==="object"&&document.nodeType===9;function qm(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,vy(n.key),n)}}function Tf(t,e,r){return e&&qm(t.prototype,e),r&&qm(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Yc(t,e){return Yc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Yc(t,e)}function ks(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Yc(t,e)}function Jc(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var CS={}.constructor;function Zc(t){if(t==null||typeof t!="object")return t;if(Array.isArray(t))return t.map(Zc);if(t.constructor!==CS)return t;var e={};for(var r in t)e[r]=Zc(t[r]);return e}function Pf(t,e,r){t===void 0&&(t="unnamed");var n=r.jss,i=Zc(e),a=n.plugins.onCreateRule(t,i,r);return a||(t[0],null)}var Gm=function(e,r){for(var n="",i=0;i<e.length&&e[i]!=="!important";i++)n&&(n+=r),n+=e[i];return n},dn=function(e){if(!Array.isArray(e))return e;var r="";if(Array.isArray(e[0]))for(var n=0;n<e.length&&e[n]!=="!important";n++)r&&(r+=", "),r+=Gm(e[n]," ");else r=Gm(e,", ");return e[e.length-1]==="!important"&&(r+=" !important"),r};function fi(t){return t&&t.format===!1?{linebreak:"",space:""}:{linebreak:`
`,space:" "}}function $i(t,e){for(var r="",n=0;n<e;n++)r+="  ";return r+t}function xa(t,e,r){r===void 0&&(r={});var n="";if(!e)return n;var i=r,a=i.indent,o=a===void 0?0:a,l=e.fallbacks;r.format===!1&&(o=-1/0);var u=fi(r),c=u.linebreak,f=u.space;if(t&&o++,l)if(Array.isArray(l))for(var v=0;v<l.length;v++){var h=l[v];for(var b in h){var w=h[b];w!=null&&(n&&(n+=c),n+=$i(b+":"+f+dn(w)+";",o))}}else for(var y in l){var m=l[y];m!=null&&(n&&(n+=c),n+=$i(y+":"+f+dn(m)+";",o))}for(var p in e){var g=e[p];g!=null&&p!=="fallbacks"&&(n&&(n+=c),n+=$i(p+":"+f+dn(g)+";",o))}return!n&&!r.allowEmpty||!t?n:(o--,n&&(n=""+c+n+c),$i(""+t+f+"{"+n,o)+$i("}",o))}var _S=/([[\].#*$><+~=|^:(),"'`\s])/g,Km=typeof CSS!="undefined"&&CSS.escape,$f=function(t){return Km?Km(t):t.replace(_S,"\\$1")},Ry=function(){function t(r,n,i){this.type="style",this.isProcessed=!1;var a=i.sheet,o=i.Renderer;this.key=r,this.options=i,this.style=n,a?this.renderer=a.renderer:o&&(this.renderer=new o)}var e=t.prototype;return e.prop=function(n,i,a){if(i===void 0)return this.style[n];var o=a?a.force:!1;if(!o&&this.style[n]===i)return this;var l=i;(!a||a.process!==!1)&&(l=this.options.jss.plugins.onChangeValue(i,n,this));var u=l==null||l===!1,c=n in this.style;if(u&&!c&&!o)return this;var f=u&&c;if(f?delete this.style[n]:this.style[n]=l,this.renderable&&this.renderer)return f?this.renderer.removeProperty(this.renderable,n):this.renderer.setProperty(this.renderable,n,l),this;var v=this.options.sheet;return v&&v.attached,this},t}(),ed=function(t){ks(e,t);function e(n,i,a){var o;o=t.call(this,n,i,a)||this;var l=a.selector,u=a.scoped,c=a.sheet,f=a.generateId;return l?o.selectorText=l:u!==!1&&(o.id=f(Jc(Jc(o)),c),o.selectorText="."+$f(o.id)),o}var r=e.prototype;return r.applyTo=function(i){var a=this.renderer;if(a){var o=this.toJSON();for(var l in o)a.setProperty(i,l,o[l])}return this},r.toJSON=function(){var i={};for(var a in this.style){var o=this.style[a];typeof o!="object"?i[a]=o:Array.isArray(o)&&(i[a]=dn(o))}return i},r.toString=function(i){var a=this.options.sheet,o=a?a.options.link:!1,l=o?T({},i,{allowEmpty:!0}):i;return xa(this.selectorText,this.style,l)},Tf(e,[{key:"selector",set:function(i){if(i!==this.selectorText){this.selectorText=i;var a=this.renderer,o=this.renderable;if(!(!o||!a)){var l=a.setSelector(o,i);l||a.replaceRule(o,this)}}},get:function(){return this.selectorText}}]),e}(Ry),RS={onCreateRule:function(e,r,n){return e[0]==="@"||n.parent&&n.parent.type==="keyframes"?null:new ed(e,r,n)}},ku={indent:1,children:!0},TS=/@([\w-]+)/,PS=function(){function t(r,n,i){this.type="conditional",this.isProcessed=!1,this.key=r;var a=r.match(TS);this.at=a?a[1]:"unknown",this.query=i.name||"@"+this.at,this.options=i,this.rules=new Cs(T({},i,{parent:this}));for(var o in n)this.rules.add(o,n[o]);this.rules.process()}var e=t.prototype;return e.getRule=function(n){return this.rules.get(n)},e.indexOf=function(n){return this.rules.indexOf(n)},e.addRule=function(n,i,a){var o=this.rules.add(n,i,a);return o?(this.options.jss.plugins.onProcessRule(o),o):null},e.replaceRule=function(n,i,a){var o=this.rules.replace(n,i,a);return o&&this.options.jss.plugins.onProcessRule(o),o},e.toString=function(n){n===void 0&&(n=ku);var i=fi(n),a=i.linebreak;if(n.indent==null&&(n.indent=ku.indent),n.children==null&&(n.children=ku.children),n.children===!1)return this.query+" {}";var o=this.rules.toString(n);return o?this.query+" {"+a+o+a+"}":""},t}(),$S=/@container|@media|@supports\s+/,NS={onCreateRule:function(e,r,n){return $S.test(e)?new PS(e,r,n):null}},Cu={indent:1,children:!0},IS=/@keyframes\s+([\w-]+)/,td=function(){function t(r,n,i){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var a=r.match(IS);a&&a[1]?this.name=a[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=i;var o=i.scoped,l=i.sheet,u=i.generateId;this.id=o===!1?this.name:$f(u(this,l)),this.rules=new Cs(T({},i,{parent:this}));for(var c in n)this.rules.add(c,n[c],T({},i,{parent:this}));this.rules.process()}var e=t.prototype;return e.toString=function(n){n===void 0&&(n=Cu);var i=fi(n),a=i.linebreak;if(n.indent==null&&(n.indent=Cu.indent),n.children==null&&(n.children=Cu.children),n.children===!1)return this.at+" "+this.id+" {}";var o=this.rules.toString(n);return o&&(o=""+a+o+a),this.at+" "+this.id+" {"+o+"}"},t}(),AS=/@keyframes\s+/,OS=/\$([\w-]+)/g,rd=function(e,r){return typeof e=="string"?e.replace(OS,function(n,i){return i in r?r[i]:n}):e},Qm=function(e,r,n){var i=e[r],a=rd(i,n);a!==i&&(e[r]=a)},jS={onCreateRule:function(e,r,n){return typeof e=="string"&&AS.test(e)?new td(e,r,n):null},onProcessStyle:function(e,r,n){return r.type!=="style"||!n||("animation-name"in e&&Qm(e,"animation-name",n.keyframes),"animation"in e&&Qm(e,"animation",n.keyframes)),e},onChangeValue:function(e,r,n){var i=n.options.sheet;if(!i)return e;switch(r){case"animation":return rd(e,i.keyframes);case"animation-name":return rd(e,i.keyframes);default:return e}}},LS=function(t){ks(e,t);function e(){return t.apply(this,arguments)||this}var r=e.prototype;return r.toString=function(i){var a=this.options.sheet,o=a?a.options.link:!1,l=o?T({},i,{allowEmpty:!0}):i;return xa(this.key,this.style,l)},e}(Ry),MS={onCreateRule:function(e,r,n){return n.parent&&n.parent.type==="keyframes"?new LS(e,r,n):null}},FS=function(){function t(r,n,i){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=r,this.style=n,this.options=i}var e=t.prototype;return e.toString=function(n){var i=fi(n),a=i.linebreak;if(Array.isArray(this.style)){for(var o="",l=0;l<this.style.length;l++)o+=xa(this.at,this.style[l]),this.style[l+1]&&(o+=a);return o}return xa(this.at,this.style,n)},t}(),DS=/@font-face/,zS={onCreateRule:function(e,r,n){return DS.test(e)?new FS(e,r,n):null}},BS=function(){function t(r,n,i){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=r,this.style=n,this.options=i}var e=t.prototype;return e.toString=function(n){return xa(this.key,this.style,n)},t}(),VS={onCreateRule:function(e,r,n){return e==="@viewport"||e==="@-ms-viewport"?new BS(e,r,n):null}},WS=function(){function t(r,n,i){this.type="simple",this.isProcessed=!1,this.key=r,this.value=n,this.options=i}var e=t.prototype;return e.toString=function(n){if(Array.isArray(this.value)){for(var i="",a=0;a<this.value.length;a++)i+=this.key+" "+this.value[a]+";",this.value[a+1]&&(i+=`
`);return i}return this.key+" "+this.value+";"},t}(),HS={"@charset":!0,"@import":!0,"@namespace":!0},US={onCreateRule:function(e,r,n){return e in HS?new WS(e,r,n):null}},Xm=[RS,NS,jS,MS,zS,VS,US],qS={process:!0},Ym={force:!0,process:!0},Cs=function(){function t(r){this.map={},this.raw={},this.index=[],this.counter=0,this.options=r,this.classes=r.classes,this.keyframes=r.keyframes}var e=t.prototype;return e.add=function(n,i,a){var o=this.options,l=o.parent,u=o.sheet,c=o.jss,f=o.Renderer,v=o.generateId,h=o.scoped,b=T({classes:this.classes,parent:l,sheet:u,jss:c,Renderer:f,generateId:v,scoped:h,name:n,keyframes:this.keyframes,selector:void 0},a),w=n;n in this.raw&&(w=n+"-d"+this.counter++),this.raw[w]=i,w in this.classes&&(b.selector="."+$f(this.classes[w]));var y=Pf(w,i,b);if(!y)return null;this.register(y);var m=b.index===void 0?this.index.length:b.index;return this.index.splice(m,0,y),y},e.replace=function(n,i,a){var o=this.get(n),l=this.index.indexOf(o);o&&this.remove(o);var u=a;return l!==-1&&(u=T({},a,{index:l})),this.add(n,i,u)},e.get=function(n){return this.map[n]},e.remove=function(n){this.unregister(n),delete this.raw[n.key],this.index.splice(this.index.indexOf(n),1)},e.indexOf=function(n){return this.index.indexOf(n)},e.process=function(){var n=this.options.jss.plugins;this.index.slice(0).forEach(n.onProcessRule,n)},e.register=function(n){this.map[n.key]=n,n instanceof ed?(this.map[n.selector]=n,n.id&&(this.classes[n.key]=n.id)):n instanceof td&&this.keyframes&&(this.keyframes[n.name]=n.id)},e.unregister=function(n){delete this.map[n.key],n instanceof ed?(delete this.map[n.selector],delete this.classes[n.key]):n instanceof td&&delete this.keyframes[n.name]},e.update=function(){var n,i,a;if(typeof(arguments.length<=0?void 0:arguments[0])=="string"?(n=arguments.length<=0?void 0:arguments[0],i=arguments.length<=1?void 0:arguments[1],a=arguments.length<=2?void 0:arguments[2]):(i=arguments.length<=0?void 0:arguments[0],a=arguments.length<=1?void 0:arguments[1],n=null),n)this.updateOne(this.get(n),i,a);else for(var o=0;o<this.index.length;o++)this.updateOne(this.index[o],i,a)},e.updateOne=function(n,i,a){a===void 0&&(a=qS);var o=this.options,l=o.jss.plugins,u=o.sheet;if(n.rules instanceof t){n.rules.update(i,a);return}var c=n.style;if(l.onUpdate(i,n,u,a),a.process&&c&&c!==n.style){l.onProcessStyle(n.style,n,u);for(var f in n.style){var v=n.style[f],h=c[f];v!==h&&n.prop(f,v,Ym)}for(var b in c){var w=n.style[b],y=c[b];w==null&&w!==y&&n.prop(b,null,Ym)}}},e.toString=function(n){for(var i="",a=this.options.sheet,o=a?a.options.link:!1,l=fi(n),u=l.linebreak,c=0;c<this.index.length;c++){var f=this.index[c],v=f.toString(n);!v&&!o||(i&&(i+=u),i+=v)}return i},t}(),Ty=function(){function t(r,n){this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=T({},n,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),n.Renderer&&(this.renderer=new n.Renderer(this)),this.rules=new Cs(this.options);for(var i in r)this.rules.add(i,r[i]);this.rules.process()}var e=t.prototype;return e.attach=function(){return this.attached?this:(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy(),this)},e.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},e.addRule=function(n,i,a){var o=this.queue;this.attached&&!o&&(this.queue=[]);var l=this.rules.add(n,i,a);return l?(this.options.jss.plugins.onProcessRule(l),this.attached?(this.deployed&&(o?o.push(l):(this.insertRule(l),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))),l):(this.deployed=!1,l)):null},e.replaceRule=function(n,i,a){var o=this.rules.get(n);if(!o)return this.addRule(n,i,a);var l=this.rules.replace(n,i,a);return l&&this.options.jss.plugins.onProcessRule(l),this.attached?(this.deployed&&this.renderer&&(l?o.renderable&&this.renderer.replaceRule(o.renderable,l):this.renderer.deleteRule(o)),l):(this.deployed=!1,l)},e.insertRule=function(n){this.renderer&&this.renderer.insertRule(n)},e.addRules=function(n,i){var a=[];for(var o in n){var l=this.addRule(o,n[o],i);l&&a.push(l)}return a},e.getRule=function(n){return this.rules.get(n)},e.deleteRule=function(n){var i=typeof n=="object"?n:this.rules.get(n);return!i||this.attached&&!i.renderable?!1:(this.rules.remove(i),this.attached&&i.renderable&&this.renderer?this.renderer.deleteRule(i.renderable):!0)},e.indexOf=function(n){return this.rules.indexOf(n)},e.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},e.update=function(){var n;return(n=this.rules).update.apply(n,arguments),this},e.updateOne=function(n,i,a){return this.rules.updateOne(n,i,a),this},e.toString=function(n){return this.rules.toString(n)},t}(),GS=function(){function t(){this.plugins={internal:[],external:[]},this.registry={}}var e=t.prototype;return e.onCreateRule=function(n,i,a){for(var o=0;o<this.registry.onCreateRule.length;o++){var l=this.registry.onCreateRule[o](n,i,a);if(l)return l}return null},e.onProcessRule=function(n){if(!n.isProcessed){for(var i=n.options.sheet,a=0;a<this.registry.onProcessRule.length;a++)this.registry.onProcessRule[a](n,i);n.style&&this.onProcessStyle(n.style,n,i),n.isProcessed=!0}},e.onProcessStyle=function(n,i,a){for(var o=0;o<this.registry.onProcessStyle.length;o++)i.style=this.registry.onProcessStyle[o](i.style,i,a)},e.onProcessSheet=function(n){for(var i=0;i<this.registry.onProcessSheet.length;i++)this.registry.onProcessSheet[i](n)},e.onUpdate=function(n,i,a,o){for(var l=0;l<this.registry.onUpdate.length;l++)this.registry.onUpdate[l](n,i,a,o)},e.onChangeValue=function(n,i,a){for(var o=n,l=0;l<this.registry.onChangeValue.length;l++)o=this.registry.onChangeValue[l](o,i,a);return o},e.use=function(n,i){i===void 0&&(i={queue:"external"});var a=this.plugins[i.queue];a.indexOf(n)===-1&&(a.push(n),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(o,l){for(var u in l)u in o&&o[u].push(l[u]);return o},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},t}(),KS=function(){function t(){this.registry=[]}var e=t.prototype;return e.add=function(n){var i=this.registry,a=n.options.index;if(i.indexOf(n)===-1){if(i.length===0||a>=this.index){i.push(n);return}for(var o=0;o<i.length;o++)if(i[o].options.index>a){i.splice(o,0,n);return}}},e.reset=function(){this.registry=[]},e.remove=function(n){var i=this.registry.indexOf(n);this.registry.splice(i,1)},e.toString=function(n){for(var i=n===void 0?{}:n,a=i.attached,o=Ss(i,["attached"]),l=fi(o),u=l.linebreak,c="",f=0;f<this.registry.length;f++){var v=this.registry[f];a!=null&&v.attached!==a||(c&&(c+=u),c+=v.toString(o))}return c},Tf(t,[{key:"index",get:function(){return this.registry.length===0?0:this.registry[this.registry.length-1].options.index}}]),t}(),ra=new KS,nd=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"&&window.Math===Math?window:typeof self!="undefined"&&self.Math===Math?self:Function("return this")(),id="2f1acc6c3a606b082e5eef5e54414ffb";nd[id]==null&&(nd[id]=0);var Jm=nd[id]++,Zm=function(e){e===void 0&&(e={});var r=0,n=function(a,o){r+=1;var l="",u="";return o&&(o.options.classNamePrefix&&(u=o.options.classNamePrefix),o.options.jss.id!=null&&(l=String(o.options.jss.id))),e.minify?""+(u||"c")+Jm+l+r:u+a.key+"-"+Jm+(l?"-"+l:"")+"-"+r};return n},Py=function(e){var r;return function(){return r||(r=e()),r}},QS=function(e,r){try{return e.attributeStyleMap?e.attributeStyleMap.get(r):e.style.getPropertyValue(r)}catch(n){return""}},XS=function(e,r,n){try{var i=n;if(Array.isArray(n)&&(i=dn(n)),e.attributeStyleMap)e.attributeStyleMap.set(r,i);else{var a=i?i.indexOf("!important"):-1,o=a>-1?i.substr(0,a-1):i;e.style.setProperty(r,o,a>-1?"important":"")}}catch(l){return!1}return!0},YS=function(e,r){try{e.attributeStyleMap?e.attributeStyleMap.delete(r):e.style.removeProperty(r)}catch(n){}},JS=function(e,r){return e.selectorText=r,e.selectorText===r},$y=Py(function(){return document.querySelector("head")});function ZS(t,e){for(var r=0;r<t.length;r++){var n=t[r];if(n.attached&&n.options.index>e.index&&n.options.insertionPoint===e.insertionPoint)return n}return null}function ek(t,e){for(var r=t.length-1;r>=0;r--){var n=t[r];if(n.attached&&n.options.insertionPoint===e.insertionPoint)return n}return null}function tk(t){for(var e=$y(),r=0;r<e.childNodes.length;r++){var n=e.childNodes[r];if(n.nodeType===8&&n.nodeValue.trim()===t)return n}return null}function rk(t){var e=ra.registry;if(e.length>0){var r=ZS(e,t);if(r&&r.renderer)return{parent:r.renderer.element.parentNode,node:r.renderer.element};if(r=ek(e,t),r&&r.renderer)return{parent:r.renderer.element.parentNode,node:r.renderer.element.nextSibling}}var n=t.insertionPoint;if(n&&typeof n=="string"){var i=tk(n);if(i)return{parent:i.parentNode,node:i.nextSibling}}return!1}function nk(t,e){var r=e.insertionPoint,n=rk(e);if(n!==!1&&n.parent){n.parent.insertBefore(t,n.node);return}if(r&&typeof r.nodeType=="number"){var i=r,a=i.parentNode;a&&a.insertBefore(t,i.nextSibling);return}$y().appendChild(t)}var ik=Py(function(){var t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}),eh=function(e,r,n){try{"insertRule"in e?e.insertRule(r,n):"appendRule"in e&&e.appendRule(r)}catch(i){return!1}return e.cssRules[n]},th=function(e,r){var n=e.cssRules.length;return r===void 0||r>n?n:r},ak=function(){var e=document.createElement("style");return e.textContent=`
`,e},ok=function(){function t(r){this.getPropertyValue=QS,this.setProperty=XS,this.removeProperty=YS,this.setSelector=JS,this.hasInsertedRules=!1,this.cssRules=[],r&&ra.add(r),this.sheet=r;var n=this.sheet?this.sheet.options:{},i=n.media,a=n.meta,o=n.element;this.element=o||ak(),this.element.setAttribute("data-jss",""),i&&this.element.setAttribute("media",i),a&&this.element.setAttribute("data-meta",a);var l=ik();l&&this.element.setAttribute("nonce",l)}var e=t.prototype;return e.attach=function(){if(!(this.element.parentNode||!this.sheet)){nk(this.element,this.sheet.options);var n=Boolean(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&n&&(this.hasInsertedRules=!1,this.deploy())}},e.detach=function(){if(!!this.sheet){var n=this.element.parentNode;n&&n.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},e.deploy=function(){var n=this.sheet;if(!!n){if(n.options.link){this.insertRules(n.rules);return}this.element.textContent=`
`+n.toString()+`
`}},e.insertRules=function(n,i){for(var a=0;a<n.index.length;a++)this.insertRule(n.index[a],a,i)},e.insertRule=function(n,i,a){if(a===void 0&&(a=this.element.sheet),n.rules){var o=n,l=a;if(n.type==="conditional"||n.type==="keyframes"){var u=th(a,i);if(l=eh(a,o.toString({children:!1}),u),l===!1)return!1;this.refCssRule(n,u,l)}return this.insertRules(o.rules,l),l}var c=n.toString();if(!c)return!1;var f=th(a,i),v=eh(a,c,f);return v===!1?!1:(this.hasInsertedRules=!0,this.refCssRule(n,f,v),v)},e.refCssRule=function(n,i,a){n.renderable=a,n.options.parent instanceof Ty&&this.cssRules.splice(i,0,a)},e.deleteRule=function(n){var i=this.element.sheet,a=this.indexOf(n);return a===-1?!1:(i.deleteRule(a),this.cssRules.splice(a,1),!0)},e.indexOf=function(n){return this.cssRules.indexOf(n)},e.replaceRule=function(n,i){var a=this.indexOf(n);return a===-1?!1:(this.element.sheet.deleteRule(a),this.cssRules.splice(a,1),this.insertRule(i,a))},e.getRules=function(){return this.element.sheet.cssRules},t}(),lk=0,sk=function(){function t(r){this.id=lk++,this.version="10.10.0",this.plugins=new GS,this.options={id:{minify:!1},createGenerateId:Zm,Renderer:Ia?ok:null,plugins:[]},this.generateId=Zm({minify:!1});for(var n=0;n<Xm.length;n++)this.plugins.use(Xm[n],{queue:"internal"});this.setup(r)}var e=t.prototype;return e.setup=function(n){return n===void 0&&(n={}),n.createGenerateId&&(this.options.createGenerateId=n.createGenerateId),n.id&&(this.options.id=T({},this.options.id,n.id)),(n.createGenerateId||n.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),n.insertionPoint!=null&&(this.options.insertionPoint=n.insertionPoint),"Renderer"in n&&(this.options.Renderer=n.Renderer),n.plugins&&this.use.apply(this,n.plugins),this},e.createStyleSheet=function(n,i){i===void 0&&(i={});var a=i,o=a.index;typeof o!="number"&&(o=ra.index===0?0:ra.index+1);var l=new Ty(n,T({},i,{jss:this,generateId:i.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:o}));return this.plugins.onProcessSheet(l),l},e.removeStyleSheet=function(n){return n.detach(),ra.remove(n),this},e.createRule=function(n,i,a){if(i===void 0&&(i={}),a===void 0&&(a={}),typeof n=="object")return this.createRule(void 0,n,i);var o=T({},a,{name:n,jss:this,Renderer:this.options.Renderer});o.generateId||(o.generateId=this.generateId),o.classes||(o.classes={}),o.keyframes||(o.keyframes={});var l=Pf(n,i,o);return l&&this.plugins.onProcessRule(l),l},e.use=function(){for(var n=this,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return a.forEach(function(l){n.plugins.use(l)}),this},t}(),Ny=function(e){return new sk(e)},Nf=typeof CSS=="object"&&CSS!=null&&"number"in CSS;function Iy(t){var e=null;for(var r in t){var n=t[r],i=typeof n;if(i==="function")e||(e={}),e[r]=n;else if(i==="object"&&n!==null&&!Array.isArray(n)){var a=Iy(n);a&&(e||(e={}),e[r]=a)}}return e}/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */Ny();var Ay=Date.now(),_u="fnValues"+Ay,Ru="fnStyle"+ ++Ay,uk=function(){return{onCreateRule:function(r,n,i){if(typeof n!="function")return null;var a=Pf(r,{},i);return a[Ru]=n,a},onProcessStyle:function(r,n){if(_u in n||Ru in n)return r;var i={};for(var a in r){var o=r[a];typeof o=="function"&&(delete r[a],i[a]=o)}return n[_u]=i,r},onUpdate:function(r,n,i,a){var o=n,l=o[Ru];l&&(o.style=l(r)||{});var u=o[_u];if(u)for(var c in u)o.prop(c,u[c](r),a)}}},ck=uk,zr="@global",ad="@global ",dk=function(){function t(r,n,i){this.type="global",this.at=zr,this.isProcessed=!1,this.key=r,this.options=i,this.rules=new Cs(T({},i,{parent:this}));for(var a in n)this.rules.add(a,n[a]);this.rules.process()}var e=t.prototype;return e.getRule=function(n){return this.rules.get(n)},e.addRule=function(n,i,a){var o=this.rules.add(n,i,a);return o&&this.options.jss.plugins.onProcessRule(o),o},e.replaceRule=function(n,i,a){var o=this.rules.replace(n,i,a);return o&&this.options.jss.plugins.onProcessRule(o),o},e.indexOf=function(n){return this.rules.indexOf(n)},e.toString=function(n){return this.rules.toString(n)},t}(),fk=function(){function t(r,n,i){this.type="global",this.at=zr,this.isProcessed=!1,this.key=r,this.options=i;var a=r.substr(ad.length);this.rule=i.jss.createRule(a,n,T({},i,{parent:this}))}var e=t.prototype;return e.toString=function(n){return this.rule?this.rule.toString(n):""},t}(),pk=/\s*,\s*/g;function Oy(t,e){for(var r=t.split(pk),n="",i=0;i<r.length;i++)n+=e+" "+r[i].trim(),r[i+1]&&(n+=", ");return n}function mk(t,e){var r=t.options,n=t.style,i=n?n[zr]:null;if(!!i){for(var a in i)e.addRule(a,i[a],T({},r,{selector:Oy(a,t.selector)}));delete n[zr]}}function hk(t,e){var r=t.options,n=t.style;for(var i in n)if(!(i[0]!=="@"||i.substr(0,zr.length)!==zr)){var a=Oy(i.substr(zr.length),t.selector);e.addRule(a,n[i],T({},r,{selector:a})),delete n[i]}}function gk(){function t(r,n,i){if(!r)return null;if(r===zr)return new dk(r,n,i);if(r[0]==="@"&&r.substr(0,ad.length)===ad)return new fk(r,n,i);var a=i.parent;return a&&(a.type==="global"||a.options.parent&&a.options.parent.type==="global")&&(i.scoped=!1),!i.selector&&i.scoped===!1&&(i.selector=r),null}function e(r,n){r.type!=="style"||!n||(mk(r,n),hk(r,n))}return{onCreateRule:t,onProcessRule:e}}var rh=/\s*,\s*/g,vk=/&/g,yk=/\$([\w-]+)/g;function bk(){function t(i,a){return function(o,l){var u=i.getRule(l)||a&&a.getRule(l);return u?u.selector:l}}function e(i,a){for(var o=a.split(rh),l=i.split(rh),u="",c=0;c<o.length;c++)for(var f=o[c],v=0;v<l.length;v++){var h=l[v];u&&(u+=", "),u+=h.indexOf("&")!==-1?h.replace(vk,f):f+" "+h}return u}function r(i,a,o){if(o)return T({},o,{index:o.index+1});var l=i.options.nestingLevel;l=l===void 0?1:l+1;var u=T({},i.options,{nestingLevel:l,index:a.indexOf(i)+1});return delete u.name,u}function n(i,a,o){if(a.type!=="style")return i;var l=a,u=l.options.parent,c,f;for(var v in i){var h=v.indexOf("&")!==-1,b=v[0]==="@";if(!(!h&&!b)){if(c=r(l,u,c),h){var w=e(v,l.selector);f||(f=t(u,o)),w=w.replace(yk,f);var y=l.key+"-"+v;"replaceRule"in u?u.replaceRule(y,i[v],T({},c,{selector:w})):u.addRule(y,i[v],T({},c,{selector:w}))}else b&&u.addRule(v,{},c).addRule(l.key,i[v],{selector:l.selector});delete i[v]}}return i}return{onProcessStyle:n}}var xk=/[A-Z]/g,wk=/^ms-/,Tu={};function Ek(t){return"-"+t.toLowerCase()}function jy(t){if(Tu.hasOwnProperty(t))return Tu[t];var e=t.replace(xk,Ek);return Tu[t]=wk.test(e)?"-"+e:e}function jl(t){var e={};for(var r in t){var n=r.indexOf("--")===0?r:jy(r);e[n]=t[r]}return t.fallbacks&&(Array.isArray(t.fallbacks)?e.fallbacks=t.fallbacks.map(jl):e.fallbacks=jl(t.fallbacks)),e}function Sk(){function t(r){if(Array.isArray(r)){for(var n=0;n<r.length;n++)r[n]=jl(r[n]);return r}return jl(r)}function e(r,n,i){if(n.indexOf("--")===0)return r;var a=jy(n);return n===a?r:(i.prop(a,r),null)}return{onProcessStyle:t,onChangeValue:e}}var L=Nf&&CSS?CSS.px:"px",po=Nf&&CSS?CSS.ms:"ms",kn=Nf&&CSS?CSS.percent:"%",kk={"animation-delay":po,"animation-duration":po,"background-position":L,"background-position-x":L,"background-position-y":L,"background-size":L,border:L,"border-bottom":L,"border-bottom-left-radius":L,"border-bottom-right-radius":L,"border-bottom-width":L,"border-left":L,"border-left-width":L,"border-radius":L,"border-right":L,"border-right-width":L,"border-top":L,"border-top-left-radius":L,"border-top-right-radius":L,"border-top-width":L,"border-width":L,"border-block":L,"border-block-end":L,"border-block-end-width":L,"border-block-start":L,"border-block-start-width":L,"border-block-width":L,"border-inline":L,"border-inline-end":L,"border-inline-end-width":L,"border-inline-start":L,"border-inline-start-width":L,"border-inline-width":L,"border-start-start-radius":L,"border-start-end-radius":L,"border-end-start-radius":L,"border-end-end-radius":L,margin:L,"margin-bottom":L,"margin-left":L,"margin-right":L,"margin-top":L,"margin-block":L,"margin-block-end":L,"margin-block-start":L,"margin-inline":L,"margin-inline-end":L,"margin-inline-start":L,padding:L,"padding-bottom":L,"padding-left":L,"padding-right":L,"padding-top":L,"padding-block":L,"padding-block-end":L,"padding-block-start":L,"padding-inline":L,"padding-inline-end":L,"padding-inline-start":L,"mask-position-x":L,"mask-position-y":L,"mask-size":L,height:L,width:L,"min-height":L,"max-height":L,"min-width":L,"max-width":L,bottom:L,left:L,top:L,right:L,inset:L,"inset-block":L,"inset-block-end":L,"inset-block-start":L,"inset-inline":L,"inset-inline-end":L,"inset-inline-start":L,"box-shadow":L,"text-shadow":L,"column-gap":L,"column-rule":L,"column-rule-width":L,"column-width":L,"font-size":L,"font-size-delta":L,"letter-spacing":L,"text-decoration-thickness":L,"text-indent":L,"text-stroke":L,"text-stroke-width":L,"word-spacing":L,motion:L,"motion-offset":L,outline:L,"outline-offset":L,"outline-width":L,perspective:L,"perspective-origin-x":kn,"perspective-origin-y":kn,"transform-origin":kn,"transform-origin-x":kn,"transform-origin-y":kn,"transform-origin-z":kn,"transition-delay":po,"transition-duration":po,"vertical-align":L,"flex-basis":L,"shape-margin":L,size:L,gap:L,grid:L,"grid-gap":L,"row-gap":L,"grid-row-gap":L,"grid-column-gap":L,"grid-template-rows":L,"grid-template-columns":L,"grid-auto-rows":L,"grid-auto-columns":L,"box-shadow-x":L,"box-shadow-y":L,"box-shadow-blur":L,"box-shadow-spread":L,"font-line-height":L,"text-shadow-x":L,"text-shadow-y":L,"text-shadow-blur":L};function Ly(t){var e=/(-[a-z])/g,r=function(o){return o[1].toUpperCase()},n={};for(var i in t)n[i]=t[i],n[i.replace(e,r)]=t[i];return n}var Ck=Ly(kk);function na(t,e,r){if(e==null)return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)e[n]=na(t,e[n],r);else if(typeof e=="object")if(t==="fallbacks")for(var i in e)e[i]=na(i,e[i],r);else for(var a in e)e[a]=na(t+"-"+a,e[a],r);else if(typeof e=="number"&&isNaN(e)===!1){var o=r[t]||Ck[t];return o&&!(e===0&&o===L)?typeof o=="function"?o(e).toString():""+e+o:e.toString()}return e}function _k(t){t===void 0&&(t={});var e=Ly(t);function r(i,a){if(a.type!=="style")return i;for(var o in i)i[o]=na(o,i[o],e);return i}function n(i,a){return na(a,i,e)}return{onProcessStyle:r,onChangeValue:n}}var zi="",od="",My="",Fy="",Rk=Ia&&"ontouchstart"in document.documentElement;if(Ia){var Pu={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},Tk=document.createElement("p"),$u=Tk.style,Pk="Transform";for(var Nu in Pu)if(Nu+Pk in $u){zi=Nu,od=Pu[Nu];break}zi==="Webkit"&&"msHyphens"in $u&&(zi="ms",od=Pu.ms,Fy="edge"),zi==="Webkit"&&"-apple-trailing-word"in $u&&(My="apple")}var we={js:zi,css:od,vendor:My,browser:Fy,isTouch:Rk};function $k(t){return t[1]==="-"||we.js==="ms"?t:"@"+we.css+"keyframes"+t.substr(10)}var Nk={noPrefill:["appearance"],supportedProperty:function(e){return e!=="appearance"?!1:we.js==="ms"?"-webkit-"+e:we.css+e}},Ik={noPrefill:["color-adjust"],supportedProperty:function(e){return e!=="color-adjust"?!1:we.js==="Webkit"?we.css+"print-"+e:e}},Ak=/[-\s]+(.)?/g;function Ok(t,e){return e?e.toUpperCase():""}function If(t){return t.replace(Ak,Ok)}function Kr(t){return If("-"+t)}var jk={noPrefill:["mask"],supportedProperty:function(e,r){if(!/^mask/.test(e))return!1;if(we.js==="Webkit"){var n="mask-image";if(If(n)in r)return e;if(we.js+Kr(n)in r)return we.css+e}return e}},Lk={noPrefill:["text-orientation"],supportedProperty:function(e){return e!=="text-orientation"?!1:we.vendor==="apple"&&!we.isTouch?we.css+e:e}},Mk={noPrefill:["transform"],supportedProperty:function(e,r,n){return e!=="transform"?!1:n.transform?e:we.css+e}},Fk={noPrefill:["transition"],supportedProperty:function(e,r,n){return e!=="transition"?!1:n.transition?e:we.css+e}},Dk={noPrefill:["writing-mode"],supportedProperty:function(e){return e!=="writing-mode"?!1:we.js==="Webkit"||we.js==="ms"&&we.browser!=="edge"?we.css+e:e}},zk={noPrefill:["user-select"],supportedProperty:function(e){return e!=="user-select"?!1:we.js==="Moz"||we.js==="ms"||we.vendor==="apple"?we.css+e:e}},Bk={supportedProperty:function(e,r){if(!/^break-/.test(e))return!1;if(we.js==="Webkit"){var n="WebkitColumn"+Kr(e);return n in r?we.css+"column-"+e:!1}if(we.js==="Moz"){var i="page"+Kr(e);return i in r?"page-"+e:!1}return!1}},Vk={supportedProperty:function(e,r){if(!/^(border|margin|padding)-inline/.test(e))return!1;if(we.js==="Moz")return e;var n=e.replace("-inline","");return we.js+Kr(n)in r?we.css+n:!1}},Wk={supportedProperty:function(e,r){return If(e)in r?e:!1}},Hk={supportedProperty:function(e,r){var n=Kr(e);return e[0]==="-"||e[0]==="-"&&e[1]==="-"?e:we.js+n in r?we.css+e:we.js!=="Webkit"&&"Webkit"+n in r?"-webkit-"+e:!1}},Uk={supportedProperty:function(e){return e.substring(0,11)!=="scroll-snap"?!1:we.js==="ms"?""+we.css+e:e}},qk={supportedProperty:function(e){return e!=="overscroll-behavior"?!1:we.js==="ms"?we.css+"scroll-chaining":e}},Gk={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},Kk={supportedProperty:function(e,r){var n=Gk[e];return n&&we.js+Kr(n)in r?we.css+n:!1}},Dy={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},Qk=Object.keys(Dy),Xk=function(e){return we.css+e},Yk={supportedProperty:function(e,r,n){var i=n.multiple;if(Qk.indexOf(e)>-1){var a=Dy[e];if(!Array.isArray(a))return we.js+Kr(a)in r?we.css+a:!1;if(!i)return!1;for(var o=0;o<a.length;o++)if(!(we.js+Kr(a[0])in r))return!1;return a.map(Xk)}return!1}},zy=[Nk,Ik,jk,Lk,Mk,Fk,Dk,zk,Bk,Vk,Wk,Hk,Uk,qk,Kk,Yk],nh=zy.filter(function(t){return t.supportedProperty}).map(function(t){return t.supportedProperty}),Jk=zy.filter(function(t){return t.noPrefill}).reduce(function(t,e){return t.push.apply(t,Pa(e.noPrefill)),t},[]),Bi,rn={};if(Ia){Bi=document.createElement("p");var Iu=window.getComputedStyle(document.documentElement,"");for(var Au in Iu)isNaN(Au)||(rn[Iu[Au]]=Iu[Au]);Jk.forEach(function(t){return delete rn[t]})}function ld(t,e){if(e===void 0&&(e={}),!Bi)return t;if(rn[t]!=null)return rn[t];(t==="transition"||t==="transform")&&(e[t]=t in Bi.style);for(var r=0;r<nh.length&&(rn[t]=nh[r](t,Bi.style,e),!rn[t]);r++);try{Bi.style[t]=""}catch(n){return!1}return rn[t]}var Cn={},Zk={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},eC=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,Cr;function tC(t,e,r){if(e==="var")return"var";if(e==="all")return"all";if(r==="all")return", all";var n=e?ld(e):", "+ld(r);return n||e||r}Ia&&(Cr=document.createElement("p"));function ih(t,e){var r=e;if(!Cr||t==="content")return e;if(typeof r!="string"||!isNaN(parseInt(r,10)))return r;var n=t+r;if(Cn[n]!=null)return Cn[n];try{Cr.style[t]=r}catch(i){return Cn[n]=!1,!1}if(Zk[t])r=r.replace(eC,tC);else if(Cr.style[t]===""&&(r=we.css+r,r==="-ms-flex"&&(Cr.style[t]="-ms-flexbox"),Cr.style[t]=r,Cr.style[t]===""))return Cn[n]=!1,!1;return Cr.style[t]="",Cn[n]=r,Cn[n]}function rC(){function t(i){if(i.type==="keyframes"){var a=i;a.at=$k(a.at)}}function e(i){for(var a in i){var o=i[a];if(a==="fallbacks"&&Array.isArray(o)){i[a]=o.map(e);continue}var l=!1,u=ld(a);u&&u!==a&&(l=!0);var c=!1,f=ih(u,dn(o));f&&f!==o&&(c=!0),(l||c)&&(l&&delete i[a],i[u||a]=f||o)}return i}function r(i,a){return a.type!=="style"?i:e(i)}function n(i,a){return ih(a,dn(i))||i}return{onProcessRule:t,onProcessStyle:r,onChangeValue:n}}function nC(){var t=function(r,n){return r.length===n.length?r>n?1:-1:r.length-n.length};return{onProcessStyle:function(r,n){if(n.type!=="style")return r;for(var i={},a=Object.keys(r).sort(t),o=0;o<a.length;o++)i[a[o]]=r[a[o]];return i}}}function iC(){return{plugins:[ck(),gk(),bk(),Sk(),_k(),typeof window=="undefined"?null:rC(),nC()]}}function Af(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.baseClasses,r=t.newClasses;if(t.Component,!r)return e;var n=T({},e);return Object.keys(r).forEach(function(i){r[i]&&(n[i]="".concat(e[i]," ").concat(r[i]))}),n}var aC={set:function(e,r,n,i){var a=e.get(r);a||(a=new Map,e.set(r,a)),a.set(n,i)},get:function(e,r,n){var i=e.get(r);return i?i.get(n):void 0},delete:function(e,r,n){var i=e.get(r);i.delete(n)}},Fn=aC,oC=s.createContext(null),lC=oC;function _s(){var t=s.useContext(lC);return t}var sC=Ny(iC()),uC=kS(),cC=new Map,dC={disableGeneration:!1,generateClassName:uC,jss:sC,sheetsCache:null,sheetsManager:cC,sheetsRegistry:null},fC=s.createContext(dC),ah=-1e9;function pC(){return ah+=1,ah}var mC={},hC=mC;function gC(t){var e=typeof t=="function";return{create:function(n,i){var a;try{a=e?t(n):t}catch(u){throw u}if(!i||!n.overrides||!n.overrides[i])return a;var o=n.overrides[i],l=T({},a);return Object.keys(o).forEach(function(u){l[u]=hn(l[u],o[u])}),l},options:{}}}function vC(t,e,r){var n=t.state,i=t.stylesOptions;if(i.disableGeneration)return e||{};n.cacheClasses||(n.cacheClasses={value:null,lastProp:null,lastJSS:{}});var a=!1;return n.classes!==n.cacheClasses.lastJSS&&(n.cacheClasses.lastJSS=n.classes,a=!0),e!==n.cacheClasses.lastProp&&(n.cacheClasses.lastProp=e,a=!0),a&&(n.cacheClasses.value=Af({baseClasses:n.cacheClasses.lastJSS,newClasses:e,Component:r})),n.cacheClasses.value}function yC(t,e){var r=t.state,n=t.theme,i=t.stylesOptions,a=t.stylesCreator,o=t.name;if(!i.disableGeneration){var l=Fn.get(i.sheetsManager,a,n);l||(l={refs:0,staticSheet:null,dynamicStyles:null},Fn.set(i.sheetsManager,a,n,l));var u=T({},a.options,i,{theme:n,flip:typeof i.flip=="boolean"?i.flip:n.direction==="rtl"});u.generateId=u.serverGenerateClassName||u.generateClassName;var c=i.sheetsRegistry;if(l.refs===0){var f;i.sheetsCache&&(f=Fn.get(i.sheetsCache,a,n));var v=a.create(n,o);f||(f=i.jss.createStyleSheet(v,T({link:!1},u)),f.attach(),i.sheetsCache&&Fn.set(i.sheetsCache,a,n,f)),c&&c.add(f),l.staticSheet=f,l.dynamicStyles=Iy(v)}if(l.dynamicStyles){var h=i.jss.createStyleSheet(l.dynamicStyles,T({link:!0},u));h.update(e),h.attach(),r.dynamicSheet=h,r.classes=Af({baseClasses:l.staticSheet.classes,newClasses:h.classes}),c&&c.add(h)}else r.classes=l.staticSheet.classes;l.refs+=1}}function bC(t,e){var r=t.state;r.dynamicSheet&&r.dynamicSheet.update(e)}function xC(t){var e=t.state,r=t.theme,n=t.stylesOptions,i=t.stylesCreator;if(!n.disableGeneration){var a=Fn.get(n.sheetsManager,i,r);a.refs-=1;var o=n.sheetsRegistry;a.refs===0&&(Fn.delete(n.sheetsManager,i,r),n.jss.removeStyleSheet(a.staticSheet),o&&o.remove(a.staticSheet)),e.dynamicSheet&&(n.jss.removeStyleSheet(e.dynamicSheet),o&&o.remove(e.dynamicSheet))}}function wC(t,e){var r=s.useRef([]),n,i=s.useMemo(function(){return{}},e);r.current!==i&&(r.current=i,n=t()),s.useEffect(function(){return function(){n&&n()}},[i])}function Of(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.name,n=e.classNamePrefix,i=e.Component,a=e.defaultTheme,o=a===void 0?hC:a,l=me(e,["name","classNamePrefix","Component","defaultTheme"]),u=gC(t),c=r||n||"makeStyles";u.options={index:pC(),name:r,meta:c,classNamePrefix:c};var f=function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},b=_s()||o,w=T({},s.useContext(fC),l),y=s.useRef(),m=s.useRef();wC(function(){var g={name:r,state:{},stylesCreator:u,stylesOptions:w,theme:b};return yC(g,h),m.current=!1,y.current=g,function(){xC(g)}},[b,u]),s.useEffect(function(){m.current&&bC(y.current,h),m.current=!0});var p=vC(y.current,h.classes,i);return p};return f}function EC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function By(t){var e,r,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=By(t[e]))&&(n&&(n+=" "),n+=r);else for(e in t)t[e]&&(n&&(n+=" "),n+=e);return n}function ue(){for(var t,e,r=0,n="";r<arguments.length;)(t=arguments[r++])&&(e=By(t))&&(n&&(n+=" "),n+=e);return n}function SC(t,e){var r={};return Object.keys(t).forEach(function(n){e.indexOf(n)===-1&&(r[n]=t[n])}),r}function kC(t){var e=function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.name,o=me(i,["name"]),l=a,u=typeof n=="function"?function(h){return{root:function(w){return n(T({theme:h},w))}}}:{root:n},c=Of(u,T({Component:t,name:a||t.displayName,classNamePrefix:l},o)),f;n.filterProps&&(f=n.filterProps,delete n.filterProps),n.propTypes&&(n.propTypes,delete n.propTypes);var v=s.forwardRef(function(b,w){var y=b.children,m=b.className,p=b.clone,g=b.component,x=me(b,["children","className","clone","component"]),E=c(b),_=ue(E.root,m),S=x;if(f&&(S=SC(S,f)),p)return s.cloneElement(y,T({className:ue(y.props.className,_)},S));if(typeof y=="function")return y(T({className:_},S));var P=g||t;return s.createElement(P,T({ref:w,className:_},S),y)});return Ef(v,t),v};return e}var CC=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return function(n){var i=r.defaultTheme,a=r.withTheme,o=a===void 0?!1:a,l=r.name,u=me(r,["defaultTheme","withTheme","name"]),c=l,f=Of(e,T({defaultTheme:i,Component:n,name:l||n.displayName,classNamePrefix:c},u)),v=s.forwardRef(function(b,w){b.classes;var y=b.innerRef,m=me(b,["classes","innerRef"]),p=f(T({},n.defaultProps,b)),g,x=m;return(typeof l=="string"||o)&&(g=_s()||i,l&&(x=_y({theme:g,name:l,props:m})),o&&!x.theme&&(x.theme=g)),s.createElement(n,T({ref:y||w,classes:p},x))});return Ef(v,n),v}},_C=CC,RC=xS(),Rs=RC;function Ts(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Of(t,T({defaultTheme:Rs},e))}var TC=function(e){var r=kC(e);return function(n,i){return r(n,T({defaultTheme:Rs},i))}},PC=TC;function pi(){var t=_s()||Rs;return t}function Re(t,e){return _C(t,T({defaultTheme:Rs},e))}function ze(t){if(typeof t!="string")throw new Error(ri(7));return t.charAt(0).toUpperCase()+t.slice(1)}var $C=function(e){var r={};return e.shadows.forEach(function(n,i){r["elevation".concat(i)]={boxShadow:n}}),T({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},r)},NC=d.exports.forwardRef(function(e,r){var n=e.classes,i=e.className,a=e.component,o=a===void 0?"div":a,l=e.square,u=l===void 0?!1:l,c=e.elevation,f=c===void 0?1:c,v=e.variant,h=v===void 0?"elevation":v,b=me(e,["classes","className","component","square","elevation","variant"]);return d.exports.createElement(o,T({className:ue(n.root,i,h==="outlined"?n.outlined:n["elevation".concat(f)],!u&&n.rounded),ref:r},b))}),jf=Re($C,{name:"MuiPaper"})(NC),IC=function(e){var r=e.palette.type==="light"?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:r,color:e.palette.getContrastText(r)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}},AC=d.exports.forwardRef(function(e,r){var n=e.classes,i=e.className,a=e.color,o=a===void 0?"primary":a,l=e.position,u=l===void 0?"fixed":l,c=me(e,["classes","className","color","position"]);return d.exports.createElement(jf,T({square:!0,component:"header",elevation:4,className:ue(n.root,n["position".concat(ze(u))],n["color".concat(ze(o))],i,u==="fixed"&&"mui-fixed"),ref:r},c))}),Ni=Re(IC,{name:"MuiAppBar"})(AC),Me={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ps=60103,$s=60106,Aa=60107,Oa=60108,ja=60114,La=60109,Ma=60110,Fa=60112,Da=60113,Lf=60120,za=60115,Ba=60116,Vy=60121,Wy=60122,Hy=60117,Uy=60129,qy=60131;if(typeof Symbol=="function"&&Symbol.for){var bt=Symbol.for;Ps=bt("react.element"),$s=bt("react.portal"),Aa=bt("react.fragment"),Oa=bt("react.strict_mode"),ja=bt("react.profiler"),La=bt("react.provider"),Ma=bt("react.context"),Fa=bt("react.forward_ref"),Da=bt("react.suspense"),Lf=bt("react.suspense_list"),za=bt("react.memo"),Ba=bt("react.lazy"),Vy=bt("react.block"),Wy=bt("react.server.block"),Hy=bt("react.fundamental"),Uy=bt("react.debug_trace_mode"),qy=bt("react.legacy_hidden")}function tr(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ps:switch(t=t.type,t){case Aa:case ja:case Oa:case Da:case Lf:return t;default:switch(t=t&&t.$$typeof,t){case Ma:case Fa:case Ba:case za:case La:return t;default:return e}}case $s:return e}}}var OC=La,jC=Ps,LC=Fa,MC=Aa,FC=Ba,DC=za,zC=$s,BC=ja,VC=Oa,WC=Da;Me.ContextConsumer=Ma;Me.ContextProvider=OC;Me.Element=jC;Me.ForwardRef=LC;Me.Fragment=MC;Me.Lazy=FC;Me.Memo=DC;Me.Portal=zC;Me.Profiler=BC;Me.StrictMode=VC;Me.Suspense=WC;Me.isAsyncMode=function(){return!1};Me.isConcurrentMode=function(){return!1};Me.isContextConsumer=function(t){return tr(t)===Ma};Me.isContextProvider=function(t){return tr(t)===La};Me.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ps};Me.isForwardRef=function(t){return tr(t)===Fa};Me.isFragment=function(t){return tr(t)===Aa};Me.isLazy=function(t){return tr(t)===Ba};Me.isMemo=function(t){return tr(t)===za};Me.isPortal=function(t){return tr(t)===$s};Me.isProfiler=function(t){return tr(t)===ja};Me.isStrictMode=function(t){return tr(t)===Oa};Me.isSuspense=function(t){return tr(t)===Da};Me.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Aa||t===ja||t===Uy||t===Oa||t===Da||t===Lf||t===qy||typeof t=="object"&&t!==null&&(t.$$typeof===Ba||t.$$typeof===za||t.$$typeof===La||t.$$typeof===Ma||t.$$typeof===Fa||t.$$typeof===Hy||t.$$typeof===Vy||t[0]===Wy)};Me.typeOf=tr;function ni(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:166,r;function n(){for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];var l=this,u=function(){t.apply(l,a)};clearTimeout(r),r=setTimeout(u,e)}return n.clear=function(){clearTimeout(r)},n}function Lt(t){return t&&t.ownerDocument||document}function Ns(t){var e=Lt(t);return e.defaultView||window}var _n;function Gy(){if(_n)return _n;var t=document.createElement("div"),e=document.createElement("div");return e.style.width="10px",e.style.height="1px",t.appendChild(e),t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t),_n="reverse",t.scrollLeft>0?_n="default":(t.scrollLeft=1,t.scrollLeft===0&&(_n="negative")),document.body.removeChild(t),_n}function oh(t,e){var r=t.scrollLeft;if(e!=="rtl")return r;var n=Gy();switch(n){case"negative":return t.scrollWidth-t.clientWidth+r;case"reverse":return t.scrollWidth-t.clientWidth-r;default:return r}}function HC(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function UC(t,e,r){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:function(){},a=n.ease,o=a===void 0?HC:a,l=n.duration,u=l===void 0?300:l,c=null,f=e[t],v=!1,h=function(){v=!0},b=function w(y){if(v){i(new Error("Animation cancelled"));return}c===null&&(c=y);var m=Math.min(1,(y-c)/u);if(e[t]=o(m)*(r-f)+f,m>=1){requestAnimationFrame(function(){i(null)});return}requestAnimationFrame(w)};return f===r?(i(new Error("Element already at target position")),h):(requestAnimationFrame(b),h)}var qC={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function GC(t){var e=t.onChange,r=me(t,["onChange"]),n=d.exports.useRef(),i=d.exports.useRef(null),a=function(){n.current=i.current.offsetHeight-i.current.clientHeight};return d.exports.useEffect(function(){var o=ni(function(){var l=n.current;a(),l!==n.current&&e(n.current)});return window.addEventListener("resize",o),function(){o.clear(),window.removeEventListener("resize",o)}},[e]),d.exports.useEffect(function(){a(),e(n.current)},[e]),d.exports.createElement("div",T({style:qC,ref:i},r))}var KC=function(e){return{root:{position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},colorPrimary:{backgroundColor:e.palette.primary.main},colorSecondary:{backgroundColor:e.palette.secondary.main},vertical:{height:"100%",width:2,right:0}}},QC=d.exports.forwardRef(function(e,r){var n=e.classes,i=e.className,a=e.color,o=e.orientation,l=me(e,["classes","className","color","orientation"]);return d.exports.createElement("span",T({className:ue(n.root,n["color".concat(ze(a))],i,o==="vertical"&&n.vertical),ref:r},l))}),XC=Re(KC,{name:"PrivateTabIndicator"})(QC),YC=function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}},Ky=d.exports.forwardRef(function(e,r){var n=e.children,i=e.classes,a=e.className,o=e.color,l=o===void 0?"inherit":o,u=e.component,c=u===void 0?"svg":u,f=e.fontSize,v=f===void 0?"medium":f,h=e.htmlColor,b=e.titleAccess,w=e.viewBox,y=w===void 0?"0 0 24 24":w,m=me(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return d.exports.createElement(c,T({className:ue(i.root,a,l!=="inherit"&&i["color".concat(ze(l))],v!=="default"&&v!=="medium"&&i["fontSize".concat(ze(v))]),focusable:"false",viewBox:y,color:h,"aria-hidden":b?void 0:!0,role:b?"img":void 0,ref:r},m),n,b?d.exports.createElement("title",null,b):null)});Ky.muiName="SvgIcon";var lh=Re(YC,{name:"MuiSvgIcon"})(Ky);function Is(t,e){var r=function(i,a){return s.createElement(lh,T({ref:a},i),t)};return r.muiName=lh.muiName,s.memo(s.forwardRef(r))}var JC=Is(d.exports.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})),ZC=Is(d.exports.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}));function ii(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function ht(t,e){return d.exports.useMemo(function(){return t==null&&e==null?null:function(r){ii(t,r),ii(e,r)}},[t,e])}var e2=typeof window!="undefined"?d.exports.useLayoutEffect:d.exports.useEffect;function ft(t){var e=d.exports.useRef(t);return e2(function(){e.current=t}),d.exports.useCallback(function(){return e.current.apply(void 0,arguments)},[])}function t2(t,e){return function(){return null}}var As=!0,sd=!1,sh=null,r2={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function n2(t){var e=t.type,r=t.tagName;return!!(r==="INPUT"&&r2[e]&&!t.readOnly||r==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function i2(t){t.metaKey||t.altKey||t.ctrlKey||(As=!0)}function Ou(){As=!1}function a2(){this.visibilityState==="hidden"&&sd&&(As=!0)}function o2(t){t.addEventListener("keydown",i2,!0),t.addEventListener("mousedown",Ou,!0),t.addEventListener("pointerdown",Ou,!0),t.addEventListener("touchstart",Ou,!0),t.addEventListener("visibilitychange",a2,!0)}function l2(t){var e=t.target;try{return e.matches(":focus-visible")}catch(r){}return As||n2(e)}function s2(){sd=!0,window.clearTimeout(sh),sh=window.setTimeout(function(){sd=!1},100)}function Mf(){var t=d.exports.useCallback(function(e){var r=Qt.exports.findDOMNode(e);r!=null&&o2(r.ownerDocument)},[]);return{isFocusVisible:l2,onBlurVisible:s2,ref:t}}var uh={disabled:!1},Ll=s.createContext(null),u2=function(e){return e.scrollTop},Vi="unmounted",en="exited",tn="entering",$n="entered",ud="exiting",xr=function(t){ks(e,t);function e(n,i){var a;a=t.call(this,n,i)||this;var o=i,l=o&&!o.isMounting?n.enter:n.appear,u;return a.appearStatus=null,n.in?l?(u=en,a.appearStatus=tn):u=$n:n.unmountOnExit||n.mountOnEnter?u=Vi:u=en,a.state={status:u},a.nextCallback=null,a}e.getDerivedStateFromProps=function(i,a){var o=i.in;return o&&a.status===Vi?{status:en}:null};var r=e.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(i){var a=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==tn&&o!==$n&&(a=tn):(o===tn||o===$n)&&(a=ud)}this.updateStatus(!1,a)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var i=this.props.timeout,a,o,l;return a=o=l=i,i!=null&&typeof i!="number"&&(a=i.exit,o=i.enter,l=i.appear!==void 0?i.appear:o),{exit:a,enter:o,appear:l}},r.updateStatus=function(i,a){if(i===void 0&&(i=!1),a!==null)if(this.cancelNextCallback(),a===tn){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Di.findDOMNode(this);o&&u2(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===en&&this.setState({status:Vi})},r.performEnter=function(i){var a=this,o=this.props.enter,l=this.context?this.context.isMounting:i,u=this.props.nodeRef?[l]:[Di.findDOMNode(this),l],c=u[0],f=u[1],v=this.getTimeouts(),h=l?v.appear:v.enter;if(!i&&!o||uh.disabled){this.safeSetState({status:$n},function(){a.props.onEntered(c)});return}this.props.onEnter(c,f),this.safeSetState({status:tn},function(){a.props.onEntering(c,f),a.onTransitionEnd(h,function(){a.safeSetState({status:$n},function(){a.props.onEntered(c,f)})})})},r.performExit=function(){var i=this,a=this.props.exit,o=this.getTimeouts(),l=this.props.nodeRef?void 0:Di.findDOMNode(this);if(!a||uh.disabled){this.safeSetState({status:en},function(){i.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:ud},function(){i.props.onExiting(l),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:en},function(){i.props.onExited(l)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(i,a){a=this.setNextCallback(a),this.setState(i,a)},r.setNextCallback=function(i){var a=this,o=!0;return this.nextCallback=function(l){o&&(o=!1,a.nextCallback=null,i(l))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},r.onTransitionEnd=function(i,a){this.setNextCallback(a);var o=this.props.nodeRef?this.props.nodeRef.current:Di.findDOMNode(this),l=i==null&&!this.props.addEndListener;if(!o||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=u[0],f=u[1];this.props.addEndListener(c,f)}i!=null&&setTimeout(this.nextCallback,i)},r.render=function(){var i=this.state.status;if(i===Vi)return null;var a=this.props,o=a.children;a.in,a.mountOnEnter,a.unmountOnExit,a.appear,a.enter,a.exit,a.timeout,a.addEndListener,a.onEnter,a.onEntering,a.onEntered,a.onExit,a.onExiting,a.onExited,a.nodeRef;var l=Ss(a,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return s.createElement(Ll.Provider,{value:null},typeof o=="function"?o(i,l):s.cloneElement(s.Children.only(o),l))},e}(s.Component);xr.contextType=Ll;xr.propTypes={};function Rn(){}xr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Rn,onEntering:Rn,onEntered:Rn,onExit:Rn,onExiting:Rn,onExited:Rn};xr.UNMOUNTED=Vi;xr.EXITED=en;xr.ENTERING=tn;xr.ENTERED=$n;xr.EXITING=ud;var Qy=xr;function Ff(t,e){var r=function(a){return e&&d.exports.isValidElement(a)?e(a):a},n=Object.create(null);return t&&d.exports.Children.map(t,function(i){return i}).forEach(function(i){n[i.key]=r(i)}),n}function c2(t,e){t=t||{},e=e||{};function r(f){return f in e?e[f]:t[f]}var n=Object.create(null),i=[];for(var a in t)a in e?i.length&&(n[a]=i,i=[]):i.push(a);var o,l={};for(var u in e){if(n[u])for(o=0;o<n[u].length;o++){var c=n[u][o];l[n[u][o]]=r(c)}l[u]=r(u)}for(o=0;o<i.length;o++)l[i[o]]=r(i[o]);return l}function un(t,e,r){return r[e]!=null?r[e]:t.props[e]}function d2(t,e){return Ff(t.children,function(r){return d.exports.cloneElement(r,{onExited:e.bind(null,r),in:!0,appear:un(r,"appear",t),enter:un(r,"enter",t),exit:un(r,"exit",t)})})}function f2(t,e,r){var n=Ff(t.children),i=c2(e,n);return Object.keys(i).forEach(function(a){var o=i[a];if(!!d.exports.isValidElement(o)){var l=a in e,u=a in n,c=e[a],f=d.exports.isValidElement(c)&&!c.props.in;u&&(!l||f)?i[a]=d.exports.cloneElement(o,{onExited:r.bind(null,o),in:!0,exit:un(o,"exit",t),enter:un(o,"enter",t)}):!u&&l&&!f?i[a]=d.exports.cloneElement(o,{in:!1}):u&&l&&d.exports.isValidElement(c)&&(i[a]=d.exports.cloneElement(o,{onExited:r.bind(null,o),in:c.props.in,exit:un(o,"exit",t),enter:un(o,"enter",t)}))}}),i}var p2=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},m2={component:"div",childFactory:function(e){return e}},Df=function(t){ks(e,t);function e(n,i){var a;a=t.call(this,n,i)||this;var o=a.handleExited.bind(Jc(a));return a.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},a}var r=e.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(i,a){var o=a.children,l=a.handleExited,u=a.firstRender;return{children:u?d2(i,l):f2(i,o,l),firstRender:!1}},r.handleExited=function(i,a){var o=Ff(this.props.children);i.key in o||(i.props.onExited&&i.props.onExited(a),this.mounted&&this.setState(function(l){var u=T({},l.children);return delete u[i.key],{children:u}}))},r.render=function(){var i=this.props,a=i.component,o=i.childFactory,l=Ss(i,["component","childFactory"]),u=this.state.contextValue,c=p2(this.state.children).map(o);return delete l.appear,delete l.enter,delete l.exit,a===null?s.createElement(Ll.Provider,{value:u},c):s.createElement(Ll.Provider,{value:u},s.createElement(a,l,c))},e}(s.Component);Df.propTypes={};Df.defaultProps=m2;var h2=Df,g2=typeof window=="undefined"?d.exports.useEffect:d.exports.useLayoutEffect;function v2(t){var e=t.classes,r=t.pulsate,n=r===void 0?!1:r,i=t.rippleX,a=t.rippleY,o=t.rippleSize,l=t.in,u=t.onExited,c=u===void 0?function(){}:u,f=t.timeout,v=d.exports.useState(!1),h=v[0],b=v[1],w=ue(e.ripple,e.rippleVisible,n&&e.ripplePulsate),y={width:o,height:o,top:-(o/2)+a,left:-(o/2)+i},m=ue(e.child,h&&e.childLeaving,n&&e.childPulsate),p=ft(c);return g2(function(){if(!l){b(!0);var g=setTimeout(p,f);return function(){clearTimeout(g)}}},[p,l,f]),d.exports.createElement("span",{className:w,style:y},d.exports.createElement("span",{className:m}))}var cd=550,y2=80,b2=function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(cd,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(cd,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}},x2=d.exports.forwardRef(function(e,r){var n=e.center,i=n===void 0?!1:n,a=e.classes,o=e.className,l=me(e,["center","classes","className"]),u=d.exports.useState([]),c=u[0],f=u[1],v=d.exports.useRef(0),h=d.exports.useRef(null);d.exports.useEffect(function(){h.current&&(h.current(),h.current=null)},[c]);var b=d.exports.useRef(!1),w=d.exports.useRef(null),y=d.exports.useRef(null),m=d.exports.useRef(null);d.exports.useEffect(function(){return function(){clearTimeout(w.current)}},[]);var p=d.exports.useCallback(function(_){var S=_.pulsate,P=_.rippleX,N=_.rippleY,k=_.rippleSize,R=_.cb;f(function(M){return[].concat(Pa(M),[d.exports.createElement(v2,{key:v.current,classes:a,timeout:cd,pulsate:S,rippleX:P,rippleY:N,rippleSize:k})])}),v.current+=1,h.current=R},[a]),g=d.exports.useCallback(function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},P=arguments.length>2?arguments[2]:void 0,N=S.pulsate,k=N===void 0?!1:N,R=S.center,M=R===void 0?i||S.pulsate:R,F=S.fakeElement,q=F===void 0?!1:F;if(_.type==="mousedown"&&b.current){b.current=!1;return}_.type==="touchstart"&&(b.current=!0);var U=q?null:m.current,J=U?U.getBoundingClientRect():{width:0,height:0,left:0,top:0},Y,ee,D;if(M||_.clientX===0&&_.clientY===0||!_.clientX&&!_.touches)Y=Math.round(J.width/2),ee=Math.round(J.height/2);else{var G=_.touches?_.touches[0]:_,K=G.clientX,A=G.clientY;Y=Math.round(K-J.left),ee=Math.round(A-J.top)}if(M)D=Math.sqrt((2*Math.pow(J.width,2)+Math.pow(J.height,2))/3),D%2===0&&(D+=1);else{var $=Math.max(Math.abs((U?U.clientWidth:0)-Y),Y)*2+2,I=Math.max(Math.abs((U?U.clientHeight:0)-ee),ee)*2+2;D=Math.sqrt(Math.pow($,2)+Math.pow(I,2))}_.touches?y.current===null&&(y.current=function(){p({pulsate:k,rippleX:Y,rippleY:ee,rippleSize:D,cb:P})},w.current=setTimeout(function(){y.current&&(y.current(),y.current=null)},y2)):p({pulsate:k,rippleX:Y,rippleY:ee,rippleSize:D,cb:P})},[i,p]),x=d.exports.useCallback(function(){g({},{pulsate:!0})},[g]),E=d.exports.useCallback(function(_,S){if(clearTimeout(w.current),_.type==="touchend"&&y.current){_.persist(),y.current(),y.current=null,w.current=setTimeout(function(){E(_,S)});return}y.current=null,f(function(P){return P.length>0?P.slice(1):P}),h.current=S},[]);return d.exports.useImperativeHandle(r,function(){return{pulsate:x,start:g,stop:E}},[x,g,E]),d.exports.createElement("span",T({className:ue(a.root,o),ref:m},l),d.exports.createElement(h2,{component:null,exit:!0},c))}),w2=Re(b2,{flip:!1,name:"MuiTouchRipple"})(d.exports.memo(x2)),E2={root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},S2=d.exports.forwardRef(function(e,r){var n=e.action,i=e.buttonRef,a=e.centerRipple,o=a===void 0?!1:a,l=e.children,u=e.classes,c=e.className,f=e.component,v=f===void 0?"button":f,h=e.disabled,b=h===void 0?!1:h,w=e.disableRipple,y=w===void 0?!1:w,m=e.disableTouchRipple,p=m===void 0?!1:m,g=e.focusRipple,x=g===void 0?!1:g,E=e.focusVisibleClassName,_=e.onBlur,S=e.onClick,P=e.onFocus,N=e.onFocusVisible,k=e.onKeyDown,R=e.onKeyUp,M=e.onMouseDown,F=e.onMouseLeave,q=e.onMouseUp,U=e.onTouchEnd,J=e.onTouchMove,Y=e.onTouchStart,ee=e.onDragLeave,D=e.tabIndex,G=D===void 0?0:D,K=e.TouchRippleProps,A=e.type,$=A===void 0?"button":A,I=me(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),O=d.exports.useRef(null);function z(){return Qt.exports.findDOMNode(O.current)}var C=d.exports.useRef(null),V=d.exports.useState(!1),j=V[0],te=V[1];b&&j&&te(!1);var ne=Mf(),Q=ne.isFocusVisible,B=ne.onBlurVisible,fe=ne.ref;d.exports.useImperativeHandle(n,function(){return{focusVisible:function(){te(!0),O.current.focus()}}},[]),d.exports.useEffect(function(){j&&x&&!y&&C.current.pulsate()},[y,x,j]);function ce(W,xe){var Ye=arguments.length>2&&arguments[2]!==void 0?arguments[2]:p;return ft(function(He){xe&&xe(He);var ct=Ye;return!ct&&C.current&&C.current[W](He),!0})}var se=ce("start",M),oe=ce("stop",ee),ie=ce("stop",q),ge=ce("stop",function(W){j&&W.preventDefault(),F&&F(W)}),Te=ce("start",Y),Se=ce("stop",U),Ie=ce("stop",J),he=ce("stop",function(W){j&&(B(W),te(!1)),_&&_(W)},!1),Ee=ft(function(W){O.current||(O.current=W.currentTarget),Q(W)&&(te(!0),N&&N(W)),P&&P(W)}),Z=function(){var xe=z();return v&&v!=="button"&&!(xe.tagName==="A"&&xe.href)},ke=d.exports.useRef(!1),Qe=ft(function(W){x&&!ke.current&&j&&C.current&&W.key===" "&&(ke.current=!0,W.persist(),C.current.stop(W,function(){C.current.start(W)})),W.target===W.currentTarget&&Z()&&W.key===" "&&W.preventDefault(),k&&k(W),W.target===W.currentTarget&&Z()&&W.key==="Enter"&&!b&&(W.preventDefault(),S&&S(W))}),St=ft(function(W){x&&W.key===" "&&C.current&&j&&!W.defaultPrevented&&(ke.current=!1,W.persist(),C.current.stop(W,function(){C.current.pulsate(W)})),R&&R(W),S&&W.target===W.currentTarget&&Z()&&W.key===" "&&!W.defaultPrevented&&S(W)}),Ne=v;Ne==="button"&&I.href&&(Ne="a");var _e={};Ne==="button"?(_e.type=$,_e.disabled=b):((Ne!=="a"||!I.href)&&(_e.role="button"),_e["aria-disabled"]=b);var kt=ht(i,r),tt=ht(fe,O),Pe=ht(kt,tt),ve=d.exports.useState(!1),Xe=ve[0],rt=ve[1];d.exports.useEffect(function(){rt(!0)},[]);var Ce=Xe&&!y&&!b;return d.exports.createElement(Ne,T({className:ue(u.root,c,j&&[u.focusVisible,E],b&&u.disabled),onBlur:he,onClick:S,onFocus:Ee,onKeyDown:Qe,onKeyUp:St,onMouseDown:se,onMouseLeave:ge,onMouseUp:ie,onDragLeave:oe,onTouchEnd:Se,onTouchMove:Ie,onTouchStart:Te,ref:Pe,tabIndex:b?-1:G},_e,I),l,Ce?d.exports.createElement(w2,T({ref:C,center:o},K)):null)}),Va=Re(E2,{name:"MuiButtonBase"})(S2),k2={root:{width:40,flexShrink:0,opacity:.8,"&$disabled":{opacity:0}},vertical:{width:"100%",height:40,"& svg":{transform:"rotate(90deg)"}},disabled:{}},C2=d.exports.createElement(JC,{fontSize:"small"}),_2=d.exports.createElement(ZC,{fontSize:"small"}),R2=d.exports.forwardRef(function(e,r){var n=e.classes,i=e.className,a=e.direction,o=e.orientation,l=e.disabled,u=me(e,["classes","className","direction","orientation","disabled"]);return d.exports.createElement(Va,T({component:"div",className:ue(n.root,i,l&&n.disabled,o==="vertical"&&n.vertical),ref:r,role:null,tabIndex:null},u),a==="left"?C2:_2)}),T2=Re(k2,{name:"MuiTabScrollButton"})(R2),P2=function(e){return{root:{overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},vertical:{flexDirection:"column"},flexContainer:{display:"flex"},flexContainerVertical:{flexDirection:"column"},centered:{justifyContent:"center"},scroller:{position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},fixed:{overflowX:"hidden",width:"100%"},scrollable:{overflowX:"scroll",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},scrollButtons:{},scrollButtonsDesktop:zt({},e.breakpoints.down("xs"),{display:"none"}),indicator:{}}},$2=d.exports.forwardRef(function(e,r){var n=e["aria-label"],i=e["aria-labelledby"],a=e.action,o=e.centered,l=o===void 0?!1:o,u=e.children,c=e.classes,f=e.className,v=e.component,h=v===void 0?"div":v,b=e.indicatorColor,w=b===void 0?"secondary":b,y=e.onChange,m=e.orientation,p=m===void 0?"horizontal":m,g=e.ScrollButtonComponent,x=g===void 0?T2:g,E=e.scrollButtons,_=E===void 0?"auto":E,S=e.selectionFollowsFocus,P=e.TabIndicatorProps,N=P===void 0?{}:P,k=e.TabScrollButtonProps,R=e.textColor,M=R===void 0?"inherit":R,F=e.value,q=e.variant,U=q===void 0?"standard":q,J=me(e,["aria-label","aria-labelledby","action","centered","children","classes","className","component","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant"]),Y=pi(),ee=U==="scrollable",D=Y.direction==="rtl",G=p==="vertical",K=G?"scrollTop":"scrollLeft",A=G?"top":"left",$=G?"bottom":"right",I=G?"clientHeight":"clientWidth",O=G?"height":"width",z=d.exports.useState(!1),C=z[0],V=z[1],j=d.exports.useState({}),te=j[0],ne=j[1],Q=d.exports.useState({start:!1,end:!1}),B=Q[0],fe=Q[1],ce=d.exports.useState({overflow:"hidden",marginBottom:null}),se=ce[0],oe=ce[1],ie=new Map,ge=d.exports.useRef(null),Te=d.exports.useRef(null),Se=function(){var W=ge.current,xe;if(W){var Ye=W.getBoundingClientRect();xe={clientWidth:W.clientWidth,scrollLeft:W.scrollLeft,scrollTop:W.scrollTop,scrollLeftNormalized:oh(W,Y.direction),scrollWidth:W.scrollWidth,top:Ye.top,bottom:Ye.bottom,left:Ye.left,right:Ye.right}}var He;if(W&&F!==!1){var ct=Te.current.children;if(ct.length>0){var dt=ct[ie.get(F)];He=dt?dt.getBoundingClientRect():null}}return{tabsMeta:xe,tabMeta:He}},Ie=ft(function(){var Ce,W=Se(),xe=W.tabsMeta,Ye=W.tabMeta,He=0;if(Ye&&xe)if(G)He=Ye.top-xe.top+xe.scrollTop;else{var ct=D?xe.scrollLeftNormalized+xe.clientWidth-xe.scrollWidth:xe.scrollLeft;He=Ye.left-xe.left+ct}var dt=(Ce={},zt(Ce,A,He),zt(Ce,O,Ye?Ye[O]:0),Ce);if(isNaN(te[A])||isNaN(te[O]))ne(dt);else{var Nt=Math.abs(te[A]-dt[A]),It=Math.abs(te[O]-dt[O]);(Nt>=1||It>=1)&&ne(dt)}}),he=function(W){UC(K,ge.current,W)},Ee=function(W){var xe=ge.current[K];G?xe+=W:(xe+=W*(D?-1:1),xe*=D&&Gy()==="reverse"?-1:1),he(xe)},Z=function(){Ee(-ge.current[I])},ke=function(){Ee(ge.current[I])},Qe=d.exports.useCallback(function(Ce){oe({overflow:null,marginBottom:-Ce})},[]),St=function(){var W={};W.scrollbarSizeListener=ee?d.exports.createElement(GC,{className:c.scrollable,onChange:Qe}):null;var xe=B.start||B.end,Ye=ee&&(_==="auto"&&xe||_==="desktop"||_==="on");return W.scrollButtonStart=Ye?d.exports.createElement(x,T({orientation:p,direction:D?"right":"left",onClick:Z,disabled:!B.start,className:ue(c.scrollButtons,_!=="on"&&c.scrollButtonsDesktop)},k)):null,W.scrollButtonEnd=Ye?d.exports.createElement(x,T({orientation:p,direction:D?"left":"right",onClick:ke,disabled:!B.end,className:ue(c.scrollButtons,_!=="on"&&c.scrollButtonsDesktop)},k)):null,W},Ne=ft(function(){var Ce=Se(),W=Ce.tabsMeta,xe=Ce.tabMeta;if(!(!xe||!W)){if(xe[A]<W[A]){var Ye=W[K]+(xe[A]-W[A]);he(Ye)}else if(xe[$]>W[$]){var He=W[K]+(xe[$]-W[$]);he(He)}}}),_e=ft(function(){if(ee&&_!=="off"){var Ce=ge.current,W=Ce.scrollTop,xe=Ce.scrollHeight,Ye=Ce.clientHeight,He=Ce.scrollWidth,ct=Ce.clientWidth,dt,Nt;if(G)dt=W>1,Nt=W<xe-Ye-1;else{var It=oh(ge.current,Y.direction);dt=D?It<He-ct-1:It>1,Nt=D?It>1:It<He-ct-1}(dt!==B.start||Nt!==B.end)&&fe({start:dt,end:Nt})}});d.exports.useEffect(function(){var Ce=ni(function(){Ie(),_e()}),W=Ns(ge.current);return W.addEventListener("resize",Ce),function(){Ce.clear(),W.removeEventListener("resize",Ce)}},[Ie,_e]);var kt=d.exports.useCallback(ni(function(){_e()}));d.exports.useEffect(function(){return function(){kt.clear()}},[kt]),d.exports.useEffect(function(){V(!0)},[]),d.exports.useEffect(function(){Ie(),_e()}),d.exports.useEffect(function(){Ne()},[Ne,te]),d.exports.useImperativeHandle(a,function(){return{updateIndicator:Ie,updateScrollButtons:_e}},[Ie,_e]);var tt=d.exports.createElement(XC,T({className:c.indicator,orientation:p,color:w},N,{style:T({},te,N.style)})),Pe=0,ve=d.exports.Children.map(u,function(Ce){if(!d.exports.isValidElement(Ce))return null;var W=Ce.props.value===void 0?Pe:Ce.props.value;ie.set(W,Pe);var xe=W===F;return Pe+=1,d.exports.cloneElement(Ce,{fullWidth:U==="fullWidth",indicator:xe&&!C&&tt,selected:xe,selectionFollowsFocus:S,onChange:y,textColor:M,value:W})}),Xe=function(W){var xe=W.target,Ye=xe.getAttribute("role");if(Ye==="tab"){var He=null,ct=p!=="vertical"?"ArrowLeft":"ArrowUp",dt=p!=="vertical"?"ArrowRight":"ArrowDown";switch(p!=="vertical"&&Y.direction==="rtl"&&(ct="ArrowRight",dt="ArrowLeft"),W.key){case ct:He=xe.previousElementSibling||Te.current.lastChild;break;case dt:He=xe.nextElementSibling||Te.current.firstChild;break;case"Home":He=Te.current.firstChild;break;case"End":He=Te.current.lastChild;break}He!==null&&(He.focus(),W.preventDefault())}},rt=St();return d.exports.createElement(h,T({className:ue(c.root,f,G&&c.vertical),ref:r},J),rt.scrollButtonStart,rt.scrollbarSizeListener,d.exports.createElement("div",{className:ue(c.scroller,ee?c.scrollable:c.fixed),style:se,ref:ge,onScroll:kt},d.exports.createElement("div",{"aria-label":n,"aria-labelledby":i,className:ue(c.flexContainer,G&&c.flexContainerVertical,l&&!ee&&c.centered),onKeyDown:Xe,ref:Te,role:"tablist"},ve),C&&tt),rt.scrollButtonEnd)}),et=Re(P2,{name:"MuiTabs"})($2);function N2(t,e,r,n,i){return null}var I2=function(e){var r;return{root:T({},e.typography.button,(r={maxWidth:264,minWidth:72,position:"relative",boxSizing:"border-box",minHeight:48,flexShrink:0,padding:"6px 12px"},zt(r,e.breakpoints.up("sm"),{padding:"6px 24px"}),zt(r,"overflow","hidden"),zt(r,"whiteSpace","normal"),zt(r,"textAlign","center"),zt(r,e.breakpoints.up("sm"),{minWidth:160}),r)),labelIcon:{minHeight:72,paddingTop:9,"& $wrapper > *:first-child":{marginBottom:6}},textColorInherit:{color:"inherit",opacity:.7,"&$selected":{opacity:1},"&$disabled":{opacity:.5}},textColorPrimary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled}},textColorSecondary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.text.disabled}},selected:{},disabled:{},fullWidth:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},wrapped:{fontSize:e.typography.pxToRem(12),lineHeight:1.5},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"}}},A2=d.exports.forwardRef(function(e,r){var n=e.classes,i=e.className,a=e.disabled,o=a===void 0?!1:a,l=e.disableFocusRipple,u=l===void 0?!1:l,c=e.fullWidth,f=e.icon,v=e.indicator,h=e.label,b=e.onChange,w=e.onClick,y=e.onFocus,m=e.selected,p=e.selectionFollowsFocus,g=e.textColor,x=g===void 0?"inherit":g,E=e.value,_=e.wrapped,S=_===void 0?!1:_,P=me(e,["classes","className","disabled","disableFocusRipple","fullWidth","icon","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"]),N=function(M){b&&b(M,E),w&&w(M)},k=function(M){p&&!m&&b&&b(M,E),y&&y(M)};return d.exports.createElement(Va,T({focusRipple:!u,className:ue(n.root,n["textColor".concat(ze(x))],i,o&&n.disabled,m&&n.selected,h&&f&&n.labelIcon,c&&n.fullWidth,S&&n.wrapped),ref:r,role:"tab","aria-selected":m,disabled:o,onClick:N,onFocus:k,tabIndex:m?0:-1},P),d.exports.createElement("span",{className:n.wrapper},f,h),v)}),X=Re(I2,{name:"MuiTab"})(A2);function O2(t){return t=t.replaceAll(/\s/g,""),t=t.replaceAll(/\d{4}/g,""),t=t.replaceAll(/\s\s/g," "),t=t.replaceAll(/\s,/g,","),t=t.replaceAll(/,,/g,","),t=t.replaceAll(/[^0-9,\s]/g,""),t}function j2(t){return t.split(",").filter(e=>e!=="").map(e=>+e)}function L2(t=ch(5,30)){return Array.from(new Array(t),()=>ch())}function M2(){return window.innerWidth}function Qn(t){return new Promise(e=>setTimeout(e,t))}function ch(t=0,e=999){return t+Math.floor(Math.random()*e)}async function*F2(t,e,r,n){for(let a=0;a<t.length;a++){for(var i=0;i<t.length-a-1;i++)yield await r([i,i+1]),t[i]>t[i+1]&&(yield await e(i,i+1));n(i),yield}}async function*D2(t,e,r,n){for(let a=0;a<t.length;a++){let o=0;for(var i=0;i<t.length-a;i++)yield await r([o,i]),t[o]<t[i]&&(o=i);i=i-1,o!==i&&t[o]!==t[i]&&(yield await e(o,i)),n(i),yield}}async function*z2(t,e,r,n){for(let a=0;a<t.length;a++){let o=a;for(var i=a-1;i>=0;i--)if(yield await r([o,i]),t[i]>t[o])yield await e(i,o),o=i;else{yield;break}n(a),yield}}async function*dd(t,e,r,n,i=0,a=t.length-1){if(i<=a){let l=yield*await o(t,i,a);yield*await dd(t,e,r,n,i,l-1),yield*await dd(t,e,r,n,l+1,a)}async function*o(l,u,c){let f=u,v=u,h=c+1;for(;v<h;){for(;--h>u&&(yield await r([v,h],f),!(l[h]<l[f])););for(;v<=c&&v<h&&(yield await r([v],f),!(l[++v]>l[f])););v<h&&(yield await e(v,h))}return f!==h&&(yield await e(f,h)),n(h),yield,h}}async function*B2(t,e,r,n){let i=t.length;for(let o=Math.floor(i/2)-1;o>=0;o--)yield*await a(o);for(let o=t.length-1;o>0;o--)i--,n(i),yield await e(0,o),yield*await a(0);n(0);async function*a(o){const l=2*o+1,u=2*o+2;let c=o;const f=[];l<i&&f.push(l),u<i&&f.push(u),yield await r(f,o),l<i&&t[l]>t[c]&&(c=l),u<i&&t[u]>t[c]&&(c=u),c!==o&&(yield await e(o,c),yield*await a(c))}}async function*fd(t,e,r,n,i=0,a=!0){if(t.length===1)return a&&n(0),t;const o=Math.floor(t.length/2),l=t.slice(0,o),u=t.slice(o);return yield*await f(yield*await fd(l,e,r,n,i,!1),yield*await fd(u,e,r,n,i+o,!1),i,i+o,a,n);async function*f(v,h,b,w,y=!1,m){let p=[],g=0,x=0;for(;g<v.length&&x<h.length;)v[g]<=h[x]?(yield await r([b+g+x,w+x]),yield await e(b+g+x,b+p.length),y&&(yield await m(b+p.length)),p.push(v[g]),g++):(yield await r([b+g+x,w+x]),yield await e(w+x,b+p.length),y&&(yield await m(b+p.length)),p.push(h[x]),x++);for(;g<v.length;)yield await r([b+g+x]),y&&(yield await m(b+g+x)),p.push(v[g]),g++;for(;x<h.length;)yield await r([b+g+x]),y&&(yield await m(b+g+x)),p.push(h[x]),x++;return p}}async function*V2(t,e,r,n){var i=e(),a="Found element at index : ",o=!1;for(let l=0;l<t.length;l++)yield await r([l]),t[l]==i&&(a=a+l+"  ",o=!0,n(l));alert(o?a:"Element did not found!"),yield}async function*W2(t,e,r,n){var i=e(),a="Found element at index : ";let o,l=!0;var u=!1;let c=0,f=t.length;for(let v=0;v<t.length;v++)o=v+1,t[o]-t[v]<0&&(l=!1);if(l==!0){for(;c<=f;){let v=c+(f-c)/2,h=parseInt(v);yield await r([h]),t[h]==i&&(a=a+h+"  ",u=!0,n(h)),t[h]<i?c=h+1:f=h-1}alert(u?a:"Element did not found!")}else alert("Enter sorted array"),yield;yield}const Xy="pink",zf="yellow",Yy="springgreen",H2="sandybrown";let U2=1e3,q2=500,G2=Q2(),K2=0;const Ml=[{component:F2,title:"Bubble",name:"BubbleSort"},{component:D2,title:"Selection",name:"SelectionSort"},{component:z2,title:"Insertion",name:"InsertionSort"},{component:B2,title:"Heap",name:"HeapSort"},{component:fd,title:"Merge",name:"MergeSort"},{component:dd,title:"Quick",name:"QuickSort"}],Jy=[{component:V2,title:"Linear Search",name:"LinearSearch"},{component:W2,title:"Binary Search",name:"BinarySearch"}],Zy=[{title:"Array",name:"Array"},{title:"Linked List",name:"Linked List"},{title:"Stack",name:"Stack"},{title:"Queue",name:"Queue"},{title:"Tree",name:"Tree"}],e0=[{title:"BFS",name:"BFS"},{title:"DFS",name:"DFS"},{title:"Dijkstra",name:"Dijkstra"},{title:"Kruskal",name:"Kruskal"},{title:"Primms",name:"Primms"}];function Q2(){const t=M2();return t<460?[4,3,2,1]:t<720?[8,7,6,5,4,3,2,1]:[12,11,10,9,8,7,6,5,4,3,2,1]}function X2(t){let e;const r=new Set,n=(c,f)=>{const v=typeof c=="function"?c(e):c;if(v!==e){const h=e;e=f?v:Object.assign({},e,v),r.forEach(b=>b(e,h))}},i=()=>e,a=(c,f=i,v=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let h=f(e);function b(){const w=f(e);if(!v(h,w)){const y=h;c(h=w,y)}}return r.add(b),()=>r.delete(b)},u={setState:n,getState:i,subscribe:(c,f,v)=>f||v?a(c,f,v):(r.add(c),()=>r.delete(c)),destroy:()=>r.clear()};return e=t(n,i,u),u}const Y2=typeof window=="undefined"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),dh=Y2?d.exports.useEffect:d.exports.useLayoutEffect;function t0(t){const e=typeof t=="function"?X2(t):t,r=(n=e.getState,i=Object.is)=>{const[,a]=d.exports.useReducer(m=>m+1,0),o=e.getState(),l=d.exports.useRef(o),u=d.exports.useRef(n),c=d.exports.useRef(i),f=d.exports.useRef(!1),v=d.exports.useRef();v.current===void 0&&(v.current=n(o));let h,b=!1;(l.current!==o||u.current!==n||c.current!==i||f.current)&&(h=n(o),b=!i(v.current,h)),dh(()=>{b&&(v.current=h),l.current=o,u.current=n,c.current=i,f.current=!1});const w=d.exports.useRef(o);dh(()=>{const m=()=>{try{const g=e.getState(),x=u.current(g);c.current(v.current,x)||(l.current=g,v.current=x,a())}catch(g){f.current=!0,a()}},p=e.subscribe(m);return e.getState()!==w.current&&m(),p},[]);const y=b?h:v.current;return d.exports.useDebugValue(y),y};return Object.assign(r,e),r[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const n=[r,e];return{next(){const i=n.length<=0;return{value:n.shift(),done:i}}}},r}function r0(t,e){return(r,n,i)=>{var a;let o=!1;typeof e=="string"&&!o&&(console.warn("[zustand devtools middleware]: passing `name` as directly will be not allowed in next majorpass the `name` in an object `{ name: ... }` instead"),o=!0);const l=e===void 0?{name:void 0,anonymousActionType:void 0}:typeof e=="string"?{name:e}:e;typeof((a=l==null?void 0:l.serialize)==null?void 0:a.options)!="undefined"&&console.warn("[zustand devtools middleware]: `serialize.options` is deprecated, just use `serialize`");let u;try{u=window.__REDUX_DEVTOOLS_EXTENSION__||window.top.__REDUX_DEVTOOLS_EXTENSION__}catch(y){}if(!u)return({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&typeof window!="undefined"&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),t(r,n,i);let c=Object.create(u.connect(l)),f=!1;Object.defineProperty(i,"devtools",{get:()=>(f||(console.warn("[zustand devtools middleware] `devtools` property on the store is deprecated it will be removed in the next major.\nYou shouldn't interact with the extension directly. But in case you still want to you can patch `window.__REDUX_DEVTOOLS_EXTENSION__` directly"),f=!0),c),set:y=>{f||(console.warn("[zustand devtools middleware] `api.devtools` is deprecated, it will be removed in the next major.\nYou shouldn't interact with the extension directly. But in case you still want to you can patch `window.__REDUX_DEVTOOLS_EXTENSION__` directly"),f=!0),c=y}});let v=!1;Object.defineProperty(c,"prefix",{get:()=>(v||(console.warn("[zustand devtools middleware] along with `api.devtools`, `api.devtools.prefix` is deprecated.\nWe no longer prefix the actions/names"+l.name===void 0?", pass the `name` option to create a separate instance of devtools for each store.":", because the `name` option already creates a separate instance of devtools for each store."),v=!0),""),set:()=>{v||(console.warn("[zustand devtools middleware] along with `api.devtools`, `api.devtools.prefix` is deprecated.\nWe no longer prefix the actions/names"+l.name===void 0?", pass the `name` option to create a separate instance of devtools for each store.":", because the `name` option already creates a separate instance of devtools for each store."),v=!0)}});let h=!0;i.setState=(y,m,p)=>{r(y,m),h&&c.send(p===void 0?{type:l.anonymousActionType||"anonymous"}:typeof p=="string"?{type:p}:p,n())};const b=(...y)=>{const m=h;h=!1,r(...y),h=m},w=t(i.setState,n,i);if(c.init(w),i.dispatchFromDevtools&&typeof i.dispatch=="function"){let y=!1;const m=i.dispatch;i.dispatch=(...p)=>{p[0].type==="__setState"&&!y&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),y=!0),m(...p)}}return c.subscribe(y=>{var m;switch(y.type){case"ACTION":if(typeof y.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return ju(y.payload,p=>{if(p.type==="__setState"){b(p.state);return}!i.dispatchFromDevtools||typeof i.dispatch=="function"&&i.dispatch(p)});case"DISPATCH":switch(y.payload.type){case"RESET":return b(w),c.init(i.getState());case"COMMIT":return c.init(i.getState());case"ROLLBACK":return ju(y.state,p=>{b(p),c.init(i.getState())});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return ju(y.state,p=>{b(p)});case"IMPORT_STATE":{const{nextLiftedState:p}=y.payload,g=(m=p.computedStates.slice(-1)[0])==null?void 0:m.state;if(!g)return;b(g),c.send(null,p);return}case"PAUSE_RECORDING":return h=!h}return}}),w}}const ju=(t,e)=>{let r;try{r=JSON.parse(t)}catch(n){console.error("[zustand devtools middleware] Could not parse the received json",n)}r!==void 0&&e(r)},ut=t0(r0(t=>({progress:"reset",speed:3,comparrtyeTime:q2,swapTime:U2,doneCount:0,startSorting:()=>t({progress:"start"}),pauseSorting:()=>t({progress:"pause"}),resetSorting:()=>t({progress:"reset",doneCount:0}),markSortngDone:()=>t(e=>Le.getState().algorithm===Ml.length?e.doneCount===Ml.length-1?{doneCount:0,progress:"done"}:{doneCount:e.doneCount+1}:{progress:"done"}),setSpeed:e=>t(()=>({swapTime:3e3/e,compareTime:1500/e,speed:e}))}))),Le=t0(r0(t=>({algorithm:0,searchingAlgorithm:0,searchingElement:K2,dataStructure:0,sortingArray:G2,other:0,tabTitle:0,setSortingArray:e=>t({sortingArray:e}),setAlgorithm:e=>t({algorithm:e}),setSearchingAlgorithm:e=>t({searchingAlgorithm:e}),setSearchingElement:e=>t({searchingElement:e}),setDataStructure:e=>t({dataStructure:e}),setOther:e=>t({other:e}),setTabTitle:e=>t({tabTitle:e})})));function We(t,e){if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!1;for(let n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(e,r[n])||!Object.is(t[r[n]],e[r[n]]))return!1;return!0}var J2="/assets/logo.2c6d1026.png";function mo(t){return{id:`scrollable-auto-tab-${t}`,"aria-controls":`scrollable-auto-tabpanel-${t}`}}const Z2=Ts(t=>({root:{flexGrow:1,width:"100%",backgroundColor:t.palette.background.paper}}));function e_(){const t=Z2(),[e,r,n,i,a,o,l,u,c]=Le(y=>[y.algorithm,y.setAlgorithm,y.searchingAlgorithm,y.setSearchingAlgorithm,y.dataStructure,y.setDataStructure,y.other,y.setOther,y.setTabTitle],We),[f,v]=s.useState(0),[h,b]=s.useState(0),w=(y,m)=>{console.warn(m),v(m),b(m)};return c(h),s.createElement("div",{className:t.root},s.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",background:"white",fontFamily:"Nunito",fontSize:"x-large"}},s.createElement("img",{src:J2,style:{display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(255, 255, 255, 0)",fontFamily:"Nunito",fontSize:"x-large",width:"5%",margin:"10px"},alt:"Logo"}),s.createElement("h3",null,"DSA Visualizer")),s.createElement(Ni,{position:"static",color:"transparent"},s.createElement(et,{value:f,onChange:w,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},s.createElement(X,{label:"Home"}),s.createElement(X,{label:"Sorting"}),s.createElement(X,{label:"Searching"}),s.createElement(X,{label:"Data Structure"}),s.createElement(X,{label:"Others"}))),s.createElement(ho,{value:f,index:1,tabValue:h},s.createElement(Ni,{position:"static",color:"default"},s.createElement(et,{value:e,onChange:(y,m)=>r(m),indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},Ml.map(y=>s.createElement(X,{label:y.title,...mo(0),key:y.title}))))),s.createElement(ho,{value:f,index:2,tabValue:h},s.createElement(Ni,{position:"static",color:"default"},s.createElement(et,{value:n,onChange:(y,m)=>i(m),indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},Jy.map(y=>s.createElement(X,{label:y.title,...mo(0),key:y.title}))))),s.createElement(ho,{value:f,index:3,tabValue:h},s.createElement(Ni,{position:"static",color:"default"},s.createElement(et,{value:a,onChange:(y,m)=>o(m),indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},Zy.map(y=>s.createElement(X,{label:y.title,...mo(0),key:y.title}))))),s.createElement(ho,{value:f,index:4,tabValue:h},s.createElement(Ni,{position:"static",color:"default"},s.createElement(et,{value:l,onChange:(y,m)=>u(m),indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},e0.map(y=>s.createElement(X,{label:y.title,...mo(0),key:y.title}))))))}function ho(t){const{children:e,value:r,index:n}=t;return s.createElement("div",null,r===n&&s.createElement("h1",null,e))}var t_={root:{overflow:"hidden"}},r_=d.exports.forwardRef(function(e,r){var n=e.classes,i=e.className,a=e.raised,o=a===void 0?!1:a,l=me(e,["classes","className","raised"]);return d.exports.createElement(jf,T({className:ue(n.root,i),elevation:o?8:1,ref:r},l))}),Ve=Re(t_,{name:"MuiCard"})(r_);function Fl(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.reduce(function(n,i){return i==null?n:function(){for(var o=arguments.length,l=new Array(o),u=0;u<o;u++)l[u]=arguments[u];n.apply(this,l),i.apply(this,l)}},function(){})}function ll(t,e){return d.exports.isValidElement(t)&&e.indexOf(t.type.muiName)!==-1}function n_(t){return function(){return null}}function Bf(t){var e=t.controlled,r=t.default;t.name,t.state;var n=d.exports.useRef(e!==void 0),i=n.current,a=d.exports.useState(r),o=a[0],l=a[1],u=i?e:o,c=d.exports.useCallback(function(f){i||l(f)},[]);return[u,c]}function i_(t){var e=d.exports.useState(t),r=e[0],n=e[1],i=t||r;return d.exports.useEffect(function(){r==null&&n("mui-".concat(Math.round(Math.random()*1e5)))},[r]),i}var a_=Object.freeze(Object.defineProperty({__proto__:null,capitalize:ze,createChainedFunction:Fl,createSvgIcon:Is,debounce:ni,deprecatedPropType:t2,isMuiElement:ll,ownerDocument:Lt,ownerWindow:Ns,requirePropFactory:n_,setRef:ii,unsupportedProp:N2,useControlled:Bf,useEventCallback:ft,useForkRef:ht,unstable_useId:i_,useIsFocusVisible:Mf},Symbol.toStringTag,{value:"Module"})),o_=function(e){return e.scrollTop};function Dl(t,e){var r=t.timeout,n=t.style,i=n===void 0?{}:n;return{duration:i.transitionDuration||typeof r=="number"?r:r[e.mode]||0,delay:i.transitionDelay}}var l_=function(e){return{root:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}},n0=d.exports.forwardRef(function(e,r){var n=e.children,i=e.classes,a=e.className,o=e.collapsedHeight,l=e.collapsedSize,u=l===void 0?"0px":l,c=e.component,f=c===void 0?"div":c,v=e.disableStrictModeCompat,h=v===void 0?!1:v,b=e.in,w=e.onEnter,y=e.onEntered,m=e.onEntering,p=e.onExit,g=e.onExited,x=e.onExiting,E=e.style,_=e.timeout,S=_===void 0?Xc.standard:_,P=e.TransitionComponent,N=P===void 0?Qy:P,k=me(e,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),R=pi(),M=d.exports.useRef(),F=d.exports.useRef(null),q=d.exports.useRef(),U=typeof(o||u)=="number"?"".concat(o||u,"px"):o||u;d.exports.useEffect(function(){return function(){clearTimeout(M.current)}},[]);var J=R.unstable_strictMode&&!h,Y=d.exports.useRef(null),ee=ht(r,J?Y:void 0),D=function(V){return function(j,te){if(V){var ne=J?[Y.current,j]:[j,te],Q=Na(ne,2),B=Q[0],fe=Q[1];fe===void 0?V(B):V(B,fe)}}},G=D(function(C,V){C.style.height=U,w&&w(C,V)}),K=D(function(C,V){var j=F.current?F.current.clientHeight:0,te=Dl({style:E,timeout:S},{mode:"enter"}),ne=te.duration;if(S==="auto"){var Q=R.transitions.getAutoHeightDuration(j);C.style.transitionDuration="".concat(Q,"ms"),q.current=Q}else C.style.transitionDuration=typeof ne=="string"?ne:"".concat(ne,"ms");C.style.height="".concat(j,"px"),m&&m(C,V)}),A=D(function(C,V){C.style.height="auto",y&&y(C,V)}),$=D(function(C){var V=F.current?F.current.clientHeight:0;C.style.height="".concat(V,"px"),p&&p(C)}),I=D(g),O=D(function(C){var V=F.current?F.current.clientHeight:0,j=Dl({style:E,timeout:S},{mode:"exit"}),te=j.duration;if(S==="auto"){var ne=R.transitions.getAutoHeightDuration(V);C.style.transitionDuration="".concat(ne,"ms"),q.current=ne}else C.style.transitionDuration=typeof te=="string"?te:"".concat(te,"ms");C.style.height=U,x&&x(C)}),z=function(V,j){var te=J?V:j;S==="auto"&&(M.current=setTimeout(te,q.current||0))};return d.exports.createElement(N,T({in:b,onEnter:G,onEntered:A,onEntering:K,onExit:$,onExited:I,onExiting:O,addEndListener:z,nodeRef:J?Y:void 0,timeout:S==="auto"?null:S},k),function(C,V){return d.exports.createElement(f,T({className:ue(i.root,i.container,a,{entered:i.entered,exited:!b&&U==="0px"&&i.hidden}[C]),style:T({minHeight:U},E),ref:ee},V),d.exports.createElement("div",{className:i.wrapper,ref:F},d.exports.createElement("div",{className:i.wrapperInner},n)))})});n0.muiSupportAuto=!0;var s_=Re(l_,{name:"MuiCollapse"})(n0),u_=function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:jt(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:jt(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:jt(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},c_=d.exports.forwardRef(function(e,r){var n=e.edge,i=n===void 0?!1:n,a=e.children,o=e.classes,l=e.className,u=e.color,c=u===void 0?"default":u,f=e.disabled,v=f===void 0?!1:f,h=e.disableFocusRipple,b=h===void 0?!1:h,w=e.size,y=w===void 0?"medium":w,m=me(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return d.exports.createElement(Va,T({className:ue(o.root,l,c!=="default"&&o["color".concat(ze(c))],v&&o.disabled,y==="small"&&o["size".concat(ze(y))],{start:o.edgeStart,end:o.edgeEnd}[i]),centerRipple:!0,focusRipple:!b,disabled:v,ref:r},m),d.exports.createElement("span",{className:o.label},a))}),d_=Re(u_,{name:"MuiIconButton"})(c_),f_=Kw(br(Gw,tE,gE,$E,BE,OE,WE,JE,Rf,gS)),p_=PC("div")(f_,{name:"MuiBox"}),yt=p_,m_=function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}},fh={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},h_=d.exports.forwardRef(function(e,r){var n=e.align,i=n===void 0?"inherit":n,a=e.classes,o=e.className,l=e.color,u=l===void 0?"initial":l,c=e.component,f=e.display,v=f===void 0?"initial":f,h=e.gutterBottom,b=h===void 0?!1:h,w=e.noWrap,y=w===void 0?!1:w,m=e.paragraph,p=m===void 0?!1:m,g=e.variant,x=g===void 0?"body1":g,E=e.variantMapping,_=E===void 0?fh:E,S=me(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),P=c||(p?"p":_[x]||fh[x])||"span";return d.exports.createElement(P,T({className:ue(a.root,o,x!=="inherit"&&a[x],u!=="initial"&&a["color".concat(ze(u))],y&&a.noWrap,b&&a.gutterBottom,p&&a.paragraph,i!=="inherit"&&a["align".concat(ze(i))],v!=="initial"&&a["display".concat(ze(v))]),ref:r},S))}),Er=Re(m_,{name:"MuiTypography"})(h_),g_=function(e){return{root:T({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:jt(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:jt(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:jt(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat(e.palette.type==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(jt(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:jt(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(jt(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:jt(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}},v_=d.exports.forwardRef(function(e,r){var n=e.children,i=e.classes,a=e.className,o=e.color,l=o===void 0?"default":o,u=e.component,c=u===void 0?"button":u,f=e.disabled,v=f===void 0?!1:f,h=e.disableElevation,b=h===void 0?!1:h,w=e.disableFocusRipple,y=w===void 0?!1:w,m=e.endIcon,p=e.focusVisibleClassName,g=e.fullWidth,x=g===void 0?!1:g,E=e.size,_=E===void 0?"medium":E,S=e.startIcon,P=e.type,N=P===void 0?"button":P,k=e.variant,R=k===void 0?"text":k,M=me(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),F=S&&d.exports.createElement("span",{className:ue(i.startIcon,i["iconSize".concat(ze(_))])},S),q=m&&d.exports.createElement("span",{className:ue(i.endIcon,i["iconSize".concat(ze(_))])},m);return d.exports.createElement(Va,T({className:ue(i.root,i[R],a,l==="inherit"?i.colorInherit:l!=="default"&&i["".concat(R).concat(ze(l))],_!=="medium"&&[i["".concat(R,"Size").concat(ze(_))],i["size".concat(ze(_))]],b&&i.disableElevation,v&&i.disabled,x&&i.fullWidth),component:c,disabled:v,focusRipple:!y,focusVisibleClassName:ue(i.focusVisible,p),ref:r,type:N},M),d.exports.createElement("span",{className:i.label},F,n,q))}),y_=Re(g_,{name:"MuiButton"})(v_),b_=function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}},x_=d.exports.forwardRef(function(e,r){var n=e.children,i=e.classes,a=e.className,o=e.focusVisibleClassName,l=me(e,["children","classes","className","focusVisibleClassName"]);return d.exports.createElement(Va,T({className:ue(i.root,a),focusVisibleClassName:ue(o,i.focusVisible),ref:r},l),n,d.exports.createElement("span",{className:i.focusHighlight}))}),go=Re(b_,{name:"MuiCardActionArea"})(x_),w_={root:{padding:16,"&:last-child":{paddingBottom:24}}},E_=d.exports.forwardRef(function(e,r){var n=e.classes,i=e.className,a=e.component,o=a===void 0?"div":a,l=me(e,["classes","className","component"]);return d.exports.createElement(o,T({className:ue(n.root,i),ref:r},l))}),vo=Re(w_,{name:"MuiCardContent"})(E_),S_={root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},k_=["video","audio","picture","iframe","img"],C_=d.exports.forwardRef(function(e,r){var n=e.children,i=e.classes,a=e.className,o=e.component,l=o===void 0?"div":o,u=e.image,c=e.src,f=e.style,v=me(e,["children","classes","className","component","image","src","style"]),h=k_.indexOf(l)!==-1,b=!h&&u?T({backgroundImage:'url("'.concat(u,'")')},f):f;return d.exports.createElement(l,T({className:ue(i.root,a,h&&i.media,"picture img".indexOf(l)!==-1&&i.img),ref:r,style:b,src:h?u||c:void 0},v),n)}),yo=Re(S_,{name:"MuiCardMedia"})(C_),i0=d.exports.createContext();function __(){return d.exports.useContext(i0)}var Vf=i0;function Wa(){return d.exports.useContext(Vf)}var R_={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},T_=function(e){return T({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})},P_=function(e){return{"@global":{html:R_,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:T({margin:0},T_(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}};function $_(t){var e=t.children,r=e===void 0?null:e;return t.classes,d.exports.createElement(d.exports.Fragment,null,r)}var N_=Re(P_,{name:"MuiCssBaseline"})($_);function I_(t){return t=typeof t=="function"?t():t,Qt.exports.findDOMNode(t)}var Lu=typeof window!="undefined"?d.exports.useLayoutEffect:d.exports.useEffect,A_=d.exports.forwardRef(function(e,r){var n=e.children,i=e.container,a=e.disablePortal,o=a===void 0?!1:a,l=e.onRendered,u=d.exports.useState(null),c=u[0],f=u[1],v=ht(d.exports.isValidElement(n)?n.ref:null,r);return Lu(function(){o||f(I_(i)||document.body)},[i,o]),Lu(function(){if(c&&!o)return ii(r,c),function(){ii(r,null)}},[r,c,o]),Lu(function(){l&&(c||o)&&l()},[l,c,o]),o?d.exports.isValidElement(n)?d.exports.cloneElement(n,{ref:v}):n:c&&Qt.exports.createPortal(n,c)}),O_=A_;function a0(){var t=document.createElement("div");t.style.width="99px",t.style.height="99px",t.style.position="absolute",t.style.top="-9999px",t.style.overflow="scroll",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}function j_(t){var e=Lt(t);return e.body===t?Ns(e).innerWidth>e.documentElement.clientWidth:t.scrollHeight>t.clientHeight}function ia(t,e){e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden")}function ph(t){return parseInt(window.getComputedStyle(t)["padding-right"],10)||0}function mh(t,e,r){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,a=[e,r].concat(Pa(n)),o=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(t.children,function(l){l.nodeType===1&&a.indexOf(l)===-1&&o.indexOf(l.tagName)===-1&&ia(l,i)})}function Mu(t,e){var r=-1;return t.some(function(n,i){return e(n)?(r=i,!0):!1}),r}function L_(t,e){var r=[],n=[],i=t.container,a;if(!e.disableScrollLock){if(j_(i)){var o=a0();r.push({value:i.style.paddingRight,key:"padding-right",el:i}),i.style["padding-right"]="".concat(ph(i)+o,"px"),a=Lt(i).querySelectorAll(".mui-fixed"),[].forEach.call(a,function(f){n.push(f.style.paddingRight),f.style.paddingRight="".concat(ph(f)+o,"px")})}var l=i.parentElement,u=l.nodeName==="HTML"&&window.getComputedStyle(l)["overflow-y"]==="scroll"?l:i;r.push({value:u.style.overflow,key:"overflow",el:u}),u.style.overflow="hidden"}var c=function(){a&&[].forEach.call(a,function(v,h){n[h]?v.style.paddingRight=n[h]:v.style.removeProperty("padding-right")}),r.forEach(function(v){var h=v.value,b=v.el,w=v.key;h?b.style.setProperty(w,h):b.style.removeProperty(w)})};return c}function M_(t){var e=[];return[].forEach.call(t.children,function(r){r.getAttribute&&r.getAttribute("aria-hidden")==="true"&&e.push(r)}),e}var F_=function(){function t(){EC(this,t),this.modals=[],this.containers=[]}return Tf(t,[{key:"add",value:function(r,n){var i=this.modals.indexOf(r);if(i!==-1)return i;i=this.modals.length,this.modals.push(r),r.modalRef&&ia(r.modalRef,!1);var a=M_(n);mh(n,r.mountNode,r.modalRef,a,!0);var o=Mu(this.containers,function(l){return l.container===n});return o!==-1?(this.containers[o].modals.push(r),i):(this.containers.push({modals:[r],container:n,restore:null,hiddenSiblingNodes:a}),i)}},{key:"mount",value:function(r,n){var i=Mu(this.containers,function(o){return o.modals.indexOf(r)!==-1}),a=this.containers[i];a.restore||(a.restore=L_(a,n))}},{key:"remove",value:function(r){var n=this.modals.indexOf(r);if(n===-1)return n;var i=Mu(this.containers,function(l){return l.modals.indexOf(r)!==-1}),a=this.containers[i];if(a.modals.splice(a.modals.indexOf(r),1),this.modals.splice(n,1),a.modals.length===0)a.restore&&a.restore(),r.modalRef&&ia(r.modalRef,!0),mh(a.container,r.mountNode,r.modalRef,a.hiddenSiblingNodes,!1),this.containers.splice(i,1);else{var o=a.modals[a.modals.length-1];o.modalRef&&ia(o.modalRef,!1)}return n}},{key:"isTopModal",value:function(r){return this.modals.length>0&&this.modals[this.modals.length-1]===r}}]),t}();function D_(t){var e=t.children,r=t.disableAutoFocus,n=r===void 0?!1:r,i=t.disableEnforceFocus,a=i===void 0?!1:i,o=t.disableRestoreFocus,l=o===void 0?!1:o,u=t.getDoc,c=t.isEnabled,f=t.open,v=d.exports.useRef(),h=d.exports.useRef(null),b=d.exports.useRef(null),w=d.exports.useRef(),y=d.exports.useRef(null),m=d.exports.useCallback(function(x){y.current=Qt.exports.findDOMNode(x)},[]),p=ht(e.ref,m),g=d.exports.useRef();return d.exports.useEffect(function(){g.current=f},[f]),!g.current&&f&&typeof window!="undefined"&&(w.current=u().activeElement),d.exports.useEffect(function(){if(!!f){var x=Lt(y.current);!n&&y.current&&!y.current.contains(x.activeElement)&&(y.current.hasAttribute("tabIndex")||y.current.setAttribute("tabIndex",-1),y.current.focus());var E=function(){var N=y.current;if(N!==null){if(!x.hasFocus()||a||!c()||v.current){v.current=!1;return}y.current&&!y.current.contains(x.activeElement)&&y.current.focus()}},_=function(N){a||!c()||N.keyCode!==9||x.activeElement===y.current&&(v.current=!0,N.shiftKey?b.current.focus():h.current.focus())};x.addEventListener("focus",E,!0),x.addEventListener("keydown",_,!0);var S=setInterval(function(){E()},50);return function(){clearInterval(S),x.removeEventListener("focus",E,!0),x.removeEventListener("keydown",_,!0),l||(w.current&&w.current.focus&&w.current.focus(),w.current=null)}}},[n,a,l,c,f]),d.exports.createElement(d.exports.Fragment,null,d.exports.createElement("div",{tabIndex:0,ref:h,"data-test":"sentinelStart"}),d.exports.cloneElement(e,{ref:p}),d.exports.createElement("div",{tabIndex:0,ref:b,"data-test":"sentinelEnd"}))}var hh={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},z_=d.exports.forwardRef(function(e,r){var n=e.invisible,i=n===void 0?!1:n,a=e.open,o=me(e,["invisible","open"]);return a?d.exports.createElement("div",T({"aria-hidden":!0,ref:r},o,{style:T({},hh.root,i?hh.invisible:{},o.style)})):null}),B_=z_;function V_(t){return t=typeof t=="function"?t():t,Qt.exports.findDOMNode(t)}function W_(t){return t.children?t.children.props.hasOwnProperty("in"):!1}var H_=new F_,U_=function(e){return{root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}},q_=d.exports.forwardRef(function(e,r){var n=_s(),i=_y({name:"MuiModal",props:T({},e),theme:n}),a=i.BackdropComponent,o=a===void 0?B_:a,l=i.BackdropProps,u=i.children,c=i.closeAfterTransition,f=c===void 0?!1:c,v=i.container,h=i.disableAutoFocus,b=h===void 0?!1:h,w=i.disableBackdropClick,y=w===void 0?!1:w,m=i.disableEnforceFocus,p=m===void 0?!1:m,g=i.disableEscapeKeyDown,x=g===void 0?!1:g,E=i.disablePortal,_=E===void 0?!1:E,S=i.disableRestoreFocus,P=S===void 0?!1:S,N=i.disableScrollLock,k=N===void 0?!1:N,R=i.hideBackdrop,M=R===void 0?!1:R,F=i.keepMounted,q=F===void 0?!1:F,U=i.manager,J=U===void 0?H_:U,Y=i.onBackdropClick,ee=i.onClose,D=i.onEscapeKeyDown,G=i.onRendered,K=i.open,A=me(i,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),$=d.exports.useState(!0),I=$[0],O=$[1],z=d.exports.useRef({}),C=d.exports.useRef(null),V=d.exports.useRef(null),j=ht(V,r),te=W_(i),ne=function(){return Lt(C.current)},Q=function(){return z.current.modalRef=V.current,z.current.mountNode=C.current,z.current},B=function(){J.mount(Q(),{disableScrollLock:k}),V.current.scrollTop=0},fe=ft(function(){var Ee=V_(v)||ne().body;J.add(Q(),Ee),V.current&&B()}),ce=d.exports.useCallback(function(){return J.isTopModal(Q())},[J]),se=ft(function(Ee){C.current=Ee,Ee&&(G&&G(),K&&ce()?B():ia(V.current,!0))}),oe=d.exports.useCallback(function(){J.remove(Q())},[J]);if(d.exports.useEffect(function(){return function(){oe()}},[oe]),d.exports.useEffect(function(){K?fe():(!te||!f)&&oe()},[K,oe,te,f,fe]),!q&&!K&&(!te||I))return null;var ie=function(){O(!1)},ge=function(){O(!0),f&&oe()},Te=function(Z){Z.target===Z.currentTarget&&(Y&&Y(Z),!y&&ee&&ee(Z,"backdropClick"))},Se=function(Z){Z.key!=="Escape"||!ce()||(D&&D(Z),x||(Z.stopPropagation(),ee&&ee(Z,"escapeKeyDown")))},Ie=U_(n||{zIndex:Cy}),he={};return u.props.tabIndex===void 0&&(he.tabIndex=u.props.tabIndex||"-1"),te&&(he.onEnter=Fl(ie,u.props.onEnter),he.onExited=Fl(ge,u.props.onExited)),d.exports.createElement(O_,{ref:se,container:v,disablePortal:_},d.exports.createElement("div",T({ref:j,onKeyDown:Se,role:"presentation"},A,{style:T({},Ie.root,!K&&I?Ie.hidden:{},A.style)}),M?null:d.exports.createElement(o,T({open:K,onClick:Te},l)),d.exports.createElement(D_,{disableEnforceFocus:p,disableAutoFocus:b,disableRestoreFocus:P,getDoc:ne,isEnabled:ce,open:K},d.exports.cloneElement(u,he))))}),G_=q_;function mi(t){var e=t.props,r=t.states,n=t.muiFormControl;return r.reduce(function(i,a){return i[a]=e[a],n&&typeof e[a]=="undefined"&&(i[a]=n[a]),i},{})}function bo(t,e){return parseInt(t[e],10)||0}var K_=typeof window!="undefined"?d.exports.useLayoutEffect:d.exports.useEffect,Q_={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}},X_=d.exports.forwardRef(function(e,r){var n=e.onChange,i=e.rows,a=e.rowsMax,o=e.rowsMin,l=e.maxRows,u=e.minRows,c=u===void 0?1:u,f=e.style,v=e.value,h=me(e,["onChange","rows","rowsMax","rowsMin","maxRows","minRows","style","value"]),b=l||a,w=i||o||c,y=d.exports.useRef(v!=null),m=y.current,p=d.exports.useRef(null),g=ht(r,p),x=d.exports.useRef(null),E=d.exports.useRef(0),_=d.exports.useState({}),S=_[0],P=_[1],N=d.exports.useCallback(function(){var R=p.current,M=window.getComputedStyle(R),F=x.current;F.style.width=M.width,F.value=R.value||e.placeholder||"x",F.value.slice(-1)===`
`&&(F.value+=" ");var q=M["box-sizing"],U=bo(M,"padding-bottom")+bo(M,"padding-top"),J=bo(M,"border-bottom-width")+bo(M,"border-top-width"),Y=F.scrollHeight-U;F.value="x";var ee=F.scrollHeight-U,D=Y;w&&(D=Math.max(Number(w)*ee,D)),b&&(D=Math.min(Number(b)*ee,D)),D=Math.max(D,ee);var G=D+(q==="border-box"?U+J:0),K=Math.abs(D-Y)<=1;P(function(A){return E.current<20&&(G>0&&Math.abs((A.outerHeightStyle||0)-G)>1||A.overflow!==K)?(E.current+=1,{overflow:K,outerHeightStyle:G}):A})},[b,w,e.placeholder]);d.exports.useEffect(function(){var R=ni(function(){E.current=0,N()});return window.addEventListener("resize",R),function(){R.clear(),window.removeEventListener("resize",R)}},[N]),K_(function(){N()}),d.exports.useEffect(function(){E.current=0},[v]);var k=function(M){E.current=0,m||N(),n&&n(M)};return d.exports.createElement(d.exports.Fragment,null,d.exports.createElement("textarea",T({value:v,onChange:k,ref:g,rows:w,style:T({height:S.outerHeightStyle,overflow:S.overflow?"hidden":null},f)},h)),d.exports.createElement("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:x,tabIndex:-1,style:T({},Q_.shadow,f)}))}),Y_=X_;function gh(t){return t!=null&&!(Array.isArray(t)&&t.length===0)}function Wf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return t&&(gh(t.value)&&t.value!==""||e&&gh(t.defaultValue)&&t.defaultValue!=="")}function J_(t){return t.startAdornment}var Z_=function(e){var r=e.palette.type==="light",n={color:"currentColor",opacity:r?.42:.5,transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},i={opacity:"0 !important"},a={opacity:r?.42:.5};return{"@global":{"@keyframes mui-auto-fill":{},"@keyframes mui-auto-fill-cancel":{}},root:T({},e.typography.body1,{color:e.palette.text.primary,lineHeight:"1.1876em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center","&$disabled":{color:e.palette.text.disabled,cursor:"default"}}),formControl:{},focused:{},disabled:{},adornedStart:{},adornedEnd:{},error:{},marginDense:{},multiline:{padding:"".concat(8-2,"px 0 ").concat(8-1,"px"),"&$marginDense":{paddingTop:4-1}},colorSecondary:{},fullWidth:{width:"100%"},input:{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"".concat(8-2,"px 0 ").concat(8-1,"px"),border:0,boxSizing:"content-box",background:"none",height:"1.1876em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":n,"&::-moz-placeholder":n,"&:-ms-input-placeholder":n,"&::-ms-input-placeholder":n,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{"-webkit-appearance":"none"},"label[data-shrink=false] + $formControl &":{"&::-webkit-input-placeholder":i,"&::-moz-placeholder":i,"&:-ms-input-placeholder":i,"&::-ms-input-placeholder":i,"&:focus::-webkit-input-placeholder":a,"&:focus::-moz-placeholder":a,"&:focus:-ms-input-placeholder":a,"&:focus::-ms-input-placeholder":a},"&$disabled":{opacity:1},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},inputMarginDense:{paddingTop:4-1},inputMultiline:{height:"auto",resize:"none",padding:0},inputTypeSearch:{"-moz-appearance":"textfield","-webkit-appearance":"textfield"},inputAdornedStart:{},inputAdornedEnd:{},inputHiddenLabel:{}}},eR=typeof window=="undefined"?d.exports.useEffect:d.exports.useLayoutEffect,tR=d.exports.forwardRef(function(e,r){var n=e["aria-describedby"],i=e.autoComplete,a=e.autoFocus,o=e.classes,l=e.className;e.color;var u=e.defaultValue,c=e.disabled,f=e.endAdornment;e.error;var v=e.fullWidth,h=v===void 0?!1:v,b=e.id,w=e.inputComponent,y=w===void 0?"input":w,m=e.inputProps,p=m===void 0?{}:m,g=e.inputRef;e.margin;var x=e.multiline,E=x===void 0?!1:x,_=e.name,S=e.onBlur,P=e.onChange,N=e.onClick,k=e.onFocus,R=e.onKeyDown,M=e.onKeyUp,F=e.placeholder,q=e.readOnly,U=e.renderSuffix,J=e.rows,Y=e.rowsMax,ee=e.rowsMin,D=e.maxRows,G=e.minRows,K=e.startAdornment,A=e.type,$=A===void 0?"text":A,I=e.value,O=me(e,["aria-describedby","autoComplete","autoFocus","classes","className","color","defaultValue","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","rowsMax","rowsMin","maxRows","minRows","startAdornment","type","value"]),z=p.value!=null?p.value:I,C=d.exports.useRef(z!=null),V=C.current,j=d.exports.useRef(),te=d.exports.useCallback(function(Ne){},[]),ne=ht(p.ref,te),Q=ht(g,ne),B=ht(j,Q),fe=d.exports.useState(!1),ce=fe[0],se=fe[1],oe=__(),ie=mi({props:e,muiFormControl:oe,states:["color","disabled","error","hiddenLabel","margin","required","filled"]});ie.focused=oe?oe.focused:ce,d.exports.useEffect(function(){!oe&&c&&ce&&(se(!1),S&&S())},[oe,c,ce,S]);var ge=oe&&oe.onFilled,Te=oe&&oe.onEmpty,Se=d.exports.useCallback(function(Ne){Wf(Ne)?ge&&ge():Te&&Te()},[ge,Te]);eR(function(){V&&Se({value:z})},[z,Se,V]);var Ie=function(_e){if(ie.disabled){_e.stopPropagation();return}k&&k(_e),p.onFocus&&p.onFocus(_e),oe&&oe.onFocus?oe.onFocus(_e):se(!0)},he=function(_e){S&&S(_e),p.onBlur&&p.onBlur(_e),oe&&oe.onBlur?oe.onBlur(_e):se(!1)},Ee=function(_e){if(!V){var kt=_e.target||j.current;if(kt==null)throw new Error(ri(1));Se({value:kt.value})}for(var tt=arguments.length,Pe=new Array(tt>1?tt-1:0),ve=1;ve<tt;ve++)Pe[ve-1]=arguments[ve];p.onChange&&p.onChange.apply(p,[_e].concat(Pe)),P&&P.apply(void 0,[_e].concat(Pe))};d.exports.useEffect(function(){Se(j.current)},[]);var Z=function(_e){j.current&&_e.currentTarget===_e.target&&j.current.focus(),N&&N(_e)},ke=y,Qe=T({},p,{ref:B});typeof ke!="string"?Qe=T({inputRef:B,type:$},Qe,{ref:null}):E?J&&!D&&!G&&!Y&&!ee?ke="textarea":(Qe=T({minRows:J||G,rowsMax:Y,maxRows:D},Qe),ke=Y_):Qe=T({type:$},Qe);var St=function(_e){Se(_e.animationName==="mui-auto-fill-cancel"?j.current:{value:"x"})};return d.exports.useEffect(function(){oe&&oe.setAdornedStart(Boolean(K))},[oe,K]),d.exports.createElement("div",T({className:ue(o.root,o["color".concat(ze(ie.color||"primary"))],l,ie.disabled&&o.disabled,ie.error&&o.error,h&&o.fullWidth,ie.focused&&o.focused,oe&&o.formControl,E&&o.multiline,K&&o.adornedStart,f&&o.adornedEnd,ie.margin==="dense"&&o.marginDense),onClick:Z,ref:r},O),K,d.exports.createElement(Vf.Provider,{value:null},d.exports.createElement(ke,T({"aria-invalid":ie.error,"aria-describedby":n,autoComplete:i,autoFocus:a,defaultValue:u,disabled:ie.disabled,id:b,onAnimationStart:St,name:_,placeholder:F,readOnly:q,required:ie.required,rows:J,value:z,onKeyDown:R,onKeyUp:M},Qe,{className:ue(o.input,p.className,ie.disabled&&o.disabled,E&&o.inputMultiline,ie.hiddenLabel&&o.inputHiddenLabel,K&&o.inputAdornedStart,f&&o.inputAdornedEnd,$==="search"&&o.inputTypeSearch,ie.margin==="dense"&&o.inputMarginDense),onBlur:he,onChange:Ee,onFocus:Ie}))),f,U?U(T({},ie,{startAdornment:K})):null)}),Hf=Re(Z_,{name:"MuiInputBase"})(tR),rR=function(e){var r=e.palette.type==="light",n=r?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",i=r?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.09)";return{root:{position:"relative",backgroundColor:i,borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),"&:hover":{backgroundColor:r?"rgba(0, 0, 0, 0.13)":"rgba(255, 255, 255, 0.13)","@media (hover: none)":{backgroundColor:i}},"&$focused":{backgroundColor:r?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.09)"},"&$disabled":{backgroundColor:r?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)"}},colorSecondary:{"&$underline:after":{borderBottomColor:e.palette.secondary.main}},underline:{"&:after":{borderBottom:"2px solid ".concat(e.palette.primary.main),left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},"&$focused:after":{transform:"scaleX(1)"},"&$error:after":{borderBottomColor:e.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:"1px solid ".concat(n),left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},"&:hover:before":{borderBottom:"1px solid ".concat(e.palette.text.primary)},"&$disabled:before":{borderBottomStyle:"dotted"}},focused:{},disabled:{},adornedStart:{paddingLeft:12},adornedEnd:{paddingRight:12},error:{},marginDense:{},multiline:{padding:"27px 12px 10px","&$marginDense":{paddingTop:23,paddingBottom:6}},input:{padding:"27px 12px 10px","&:-webkit-autofill":{WebkitBoxShadow:e.palette.type==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.type==="light"?null:"#fff",caretColor:e.palette.type==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},inputMarginDense:{paddingTop:23,paddingBottom:6},inputHiddenLabel:{paddingTop:18,paddingBottom:19,"&$inputMarginDense":{paddingTop:10,paddingBottom:11}},inputMultiline:{padding:0},inputAdornedStart:{paddingLeft:0},inputAdornedEnd:{paddingRight:0}}},o0=d.exports.forwardRef(function(e,r){var n=e.disableUnderline,i=e.classes,a=e.fullWidth,o=a===void 0?!1:a,l=e.inputComponent,u=l===void 0?"input":l,c=e.multiline,f=c===void 0?!1:c,v=e.type,h=v===void 0?"text":v,b=me(e,["disableUnderline","classes","fullWidth","inputComponent","multiline","type"]);return d.exports.createElement(Hf,T({classes:T({},i,{root:ue(i.root,!n&&i.underline),underline:null}),fullWidth:o,inputComponent:u,multiline:f,ref:r,type:h},b))});o0.muiName="Input";var l0=Re(rR,{name:"MuiFilledInput"})(o0),nR={root:{display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},marginNormal:{marginTop:16,marginBottom:8},marginDense:{marginTop:8,marginBottom:4},fullWidth:{width:"100%"}},iR=d.exports.forwardRef(function(e,r){var n=e.children,i=e.classes,a=e.className,o=e.color,l=o===void 0?"primary":o,u=e.component,c=u===void 0?"div":u,f=e.disabled,v=f===void 0?!1:f,h=e.error,b=h===void 0?!1:h,w=e.fullWidth,y=w===void 0?!1:w,m=e.focused,p=e.hiddenLabel,g=p===void 0?!1:p,x=e.margin,E=x===void 0?"none":x,_=e.required,S=_===void 0?!1:_,P=e.size,N=e.variant,k=N===void 0?"standard":N,R=me(e,["children","classes","className","color","component","disabled","error","fullWidth","focused","hiddenLabel","margin","required","size","variant"]),M=d.exports.useState(function(){var z=!1;return n&&d.exports.Children.forEach(n,function(C){if(!!ll(C,["Input","Select"])){var V=ll(C,["Select"])?C.props.input:C;V&&J_(V.props)&&(z=!0)}}),z}),F=M[0],q=M[1],U=d.exports.useState(function(){var z=!1;return n&&d.exports.Children.forEach(n,function(C){!ll(C,["Input","Select"])||Wf(C.props,!0)&&(z=!0)}),z}),J=U[0],Y=U[1],ee=d.exports.useState(!1),D=ee[0],G=ee[1],K=m!==void 0?m:D;v&&K&&G(!1);var A,$=d.exports.useCallback(function(){Y(!0)},[]),I=d.exports.useCallback(function(){Y(!1)},[]),O={adornedStart:F,setAdornedStart:q,color:l,disabled:v,error:b,filled:J,focused:K,fullWidth:y,hiddenLabel:g,margin:(P==="small"?"dense":void 0)||E,onBlur:function(){G(!1)},onEmpty:I,onFilled:$,onFocus:function(){G(!0)},registerEffect:A,required:S,variant:k};return d.exports.createElement(Vf.Provider,{value:O},d.exports.createElement(c,T({className:ue(i.root,a,E!=="none"&&i["margin".concat(ze(E))],y&&i.fullWidth),ref:r},R),n))}),aR=Re(nR,{name:"MuiFormControl"})(iR),oR=function(e){return{root:T({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{marginLeft:14,marginRight:14},focused:{},filled:{},required:{}}},lR=d.exports.forwardRef(function(e,r){var n=e.children,i=e.classes,a=e.className,o=e.component,l=o===void 0?"p":o;e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant;var u=me(e,["children","classes","className","component","disabled","error","filled","focused","margin","required","variant"]),c=Wa(),f=mi({props:e,muiFormControl:c,states:["variant","margin","disabled","error","filled","focused","required"]});return d.exports.createElement(l,T({className:ue(i.root,(f.variant==="filled"||f.variant==="outlined")&&i.contained,a,f.disabled&&i.disabled,f.error&&i.error,f.filled&&i.filled,f.focused&&i.focused,f.required&&i.required,f.margin==="dense"&&i.marginDense),ref:r},u),n===" "?d.exports.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):n)}),sR=Re(oR,{name:"MuiFormHelperText"})(lR),uR=function(e){return{root:T({color:e.palette.text.secondary},e.typography.body1,{lineHeight:1,padding:0,"&$focused":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),colorSecondary:{"&$focused":{color:e.palette.secondary.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}},cR=d.exports.forwardRef(function(e,r){var n=e.children,i=e.classes,a=e.className;e.color;var o=e.component,l=o===void 0?"label":o;e.disabled,e.error,e.filled,e.focused,e.required;var u=me(e,["children","classes","className","color","component","disabled","error","filled","focused","required"]),c=Wa(),f=mi({props:e,muiFormControl:c,states:["color","required","focused","disabled","error","filled"]});return d.exports.createElement(l,T({className:ue(i.root,i["color".concat(ze(f.color||"primary"))],a,f.disabled&&i.disabled,f.error&&i.error,f.filled&&i.filled,f.focused&&i.focused,f.required&&i.required),ref:r},u),n,f.required&&d.exports.createElement("span",{"aria-hidden":!0,className:ue(i.asterisk,f.error&&i.error)},"\u2009","*"))}),dR=Re(uR,{name:"MuiFormLabel"})(cR),fR=[0,1,2,3,4,5,6,7,8,9,10],pR=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function mR(t,e,r){var n={};pR.forEach(function(i){var a="grid-".concat(r,"-").concat(i);if(i===!0){n[a]={flexBasis:0,flexGrow:1,maxWidth:"100%"};return}if(i==="auto"){n[a]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};return}var o="".concat(Math.round(i/12*1e8)/1e6,"%");n[a]={flexBasis:o,flexGrow:0,maxWidth:o}}),r==="xs"?T(t,n):t[e.breakpoints.up(r)]=n}function Fu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=parseFloat(t);return"".concat(r/e).concat(String(t).replace(String(r),"")||"px")}function hR(t,e){var r={};return fR.forEach(function(n){var i=t.spacing(n);i!==0&&(r["spacing-".concat(e,"-").concat(n)]={margin:"-".concat(Fu(i,2)),width:"calc(100% + ".concat(Fu(i),")"),"& > $item":{padding:Fu(i,2)}})}),r}var gR=function(e){return T({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},hR(e,"xs"),e.breakpoints.keys.reduce(function(r,n){return mR(r,e,n),r},{}))},vR=d.exports.forwardRef(function(e,r){var n=e.alignContent,i=n===void 0?"stretch":n,a=e.alignItems,o=a===void 0?"stretch":a,l=e.classes,u=e.className,c=e.component,f=c===void 0?"div":c,v=e.container,h=v===void 0?!1:v,b=e.direction,w=b===void 0?"row":b,y=e.item,m=y===void 0?!1:y,p=e.justify,g=e.justifyContent,x=g===void 0?"flex-start":g,E=e.lg,_=E===void 0?!1:E,S=e.md,P=S===void 0?!1:S,N=e.sm,k=N===void 0?!1:N,R=e.spacing,M=R===void 0?0:R,F=e.wrap,q=F===void 0?"wrap":F,U=e.xl,J=U===void 0?!1:U,Y=e.xs,ee=Y===void 0?!1:Y,D=e.zeroMinWidth,G=D===void 0?!1:D,K=me(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),A=ue(l.root,u,h&&[l.container,M!==0&&l["spacing-xs-".concat(String(M))]],m&&l.item,G&&l.zeroMinWidth,w!=="row"&&l["direction-xs-".concat(String(w))],q!=="wrap"&&l["wrap-xs-".concat(String(q))],o!=="stretch"&&l["align-items-xs-".concat(String(o))],i!=="stretch"&&l["align-content-xs-".concat(String(i))],(p||x)!=="flex-start"&&l["justify-content-xs-".concat(String(p||x))],ee!==!1&&l["grid-xs-".concat(String(ee))],k!==!1&&l["grid-sm-".concat(String(k))],P!==!1&&l["grid-md-".concat(String(P))],_!==!1&&l["grid-lg-".concat(String(_))],J!==!1&&l["grid-xl-".concat(String(J))]);return d.exports.createElement(f,T({className:A,ref:r},K))}),yR=Re(gR,{name:"MuiGrid"})(vR),re=yR;function pd(t){return"scale(".concat(t,", ").concat(Math.pow(t,2),")")}var bR={entering:{opacity:1,transform:pd(1)},entered:{opacity:1,transform:"none"}},s0=d.exports.forwardRef(function(e,r){var n=e.children,i=e.disableStrictModeCompat,a=i===void 0?!1:i,o=e.in,l=e.onEnter,u=e.onEntered,c=e.onEntering,f=e.onExit,v=e.onExited,h=e.onExiting,b=e.style,w=e.timeout,y=w===void 0?"auto":w,m=e.TransitionComponent,p=m===void 0?Qy:m,g=me(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),x=d.exports.useRef(),E=d.exports.useRef(),_=pi(),S=_.unstable_strictMode&&!a,P=d.exports.useRef(null),N=ht(n.ref,r),k=ht(S?P:void 0,N),R=function(G){return function(K,A){if(G){var $=S?[P.current,K]:[K,A],I=Na($,2),O=I[0],z=I[1];z===void 0?G(O):G(O,z)}}},M=R(c),F=R(function(D,G){o_(D);var K=Dl({style:b,timeout:y},{mode:"enter"}),A=K.duration,$=K.delay,I;y==="auto"?(I=_.transitions.getAutoHeightDuration(D.clientHeight),E.current=I):I=A,D.style.transition=[_.transitions.create("opacity",{duration:I,delay:$}),_.transitions.create("transform",{duration:I*.666,delay:$})].join(","),l&&l(D,G)}),q=R(u),U=R(h),J=R(function(D){var G=Dl({style:b,timeout:y},{mode:"exit"}),K=G.duration,A=G.delay,$;y==="auto"?($=_.transitions.getAutoHeightDuration(D.clientHeight),E.current=$):$=K,D.style.transition=[_.transitions.create("opacity",{duration:$,delay:A}),_.transitions.create("transform",{duration:$*.666,delay:A||$*.333})].join(","),D.style.opacity="0",D.style.transform=pd(.75),f&&f(D)}),Y=R(v),ee=function(G,K){var A=S?G:K;y==="auto"&&(x.current=setTimeout(A,E.current||0))};return d.exports.useEffect(function(){return function(){clearTimeout(x.current)}},[]),d.exports.createElement(p,T({appear:!0,in:o,nodeRef:S?P:void 0,onEnter:F,onEntered:q,onEntering:M,onExit:J,onExited:Y,onExiting:U,addEndListener:ee,timeout:y==="auto"?null:y},g),function(D,G){return d.exports.cloneElement(n,T({style:T({opacity:0,transform:pd(.75),visibility:D==="exited"&&!o?"hidden":void 0},bR[D],b,n.props.style),ref:k},G))})});s0.muiSupportAuto=!0;var xR=s0,wR=function(e){var r=e.palette.type==="light",n=r?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return{root:{position:"relative"},formControl:{"label + &":{marginTop:16}},focused:{},disabled:{},colorSecondary:{"&$underline:after":{borderBottomColor:e.palette.secondary.main}},underline:{"&:after":{borderBottom:"2px solid ".concat(e.palette.primary.main),left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},"&$focused:after":{transform:"scaleX(1)"},"&$error:after":{borderBottomColor:e.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:"1px solid ".concat(n),left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},"&:hover:not($disabled):before":{borderBottom:"2px solid ".concat(e.palette.text.primary),"@media (hover: none)":{borderBottom:"1px solid ".concat(n)}},"&$disabled:before":{borderBottomStyle:"dotted"}},error:{},marginDense:{},multiline:{},fullWidth:{},input:{},inputMarginDense:{},inputMultiline:{},inputTypeSearch:{}}},u0=d.exports.forwardRef(function(e,r){var n=e.disableUnderline,i=e.classes,a=e.fullWidth,o=a===void 0?!1:a,l=e.inputComponent,u=l===void 0?"input":l,c=e.multiline,f=c===void 0?!1:c,v=e.type,h=v===void 0?"text":v,b=me(e,["disableUnderline","classes","fullWidth","inputComponent","multiline","type"]);return d.exports.createElement(Hf,T({classes:T({},i,{root:ue(i.root,!n&&i.underline),underline:null}),fullWidth:o,inputComponent:u,multiline:f,ref:r,type:h},b))});u0.muiName="Input";var Uf=Re(wR,{name:"MuiInput"})(u0),ER=function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}},SR=d.exports.forwardRef(function(e,r){var n=e.classes,i=e.className,a=e.disableAnimation,o=a===void 0?!1:a;e.margin;var l=e.shrink;e.variant;var u=me(e,["classes","className","disableAnimation","margin","shrink","variant"]),c=Wa(),f=l;typeof f=="undefined"&&c&&(f=c.filled||c.focused||c.adornedStart);var v=mi({props:e,muiFormControl:c,states:["margin","variant"]});return d.exports.createElement(dR,T({"data-shrink":f,className:ue(n.root,i,c&&n.formControl,!o&&n.animated,f&&n.shrink,v.margin==="dense"&&n.marginDense,{filled:n.filled,outlined:n.outlined}[v.variant]),classes:{focused:n.focused,disabled:n.disabled,error:n.error,required:n.required,asterisk:n.asterisk},ref:r},u))}),kR=Re(ER,{name:"MuiInputLabel"})(SR),CR=d.exports.createContext({}),_R=CR,RR={root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},TR=d.exports.forwardRef(function(e,r){var n=e.children,i=e.classes,a=e.className,o=e.component,l=o===void 0?"ul":o,u=e.dense,c=u===void 0?!1:u,f=e.disablePadding,v=f===void 0?!1:f,h=e.subheader,b=me(e,["children","classes","className","component","dense","disablePadding","subheader"]),w=d.exports.useMemo(function(){return{dense:c}},[c]);return d.exports.createElement(_R.Provider,{value:w},d.exports.createElement(l,T({className:ue(i.root,a,c&&i.dense,!v&&i.padding,h&&i.subheader),ref:r},b),h,n))}),PR=Re(RR,{name:"MuiList"})(TR);function vh(t,e){var r=0;return typeof e=="number"?r=e:e==="center"?r=t.height/2:e==="bottom"&&(r=t.height),r}function yh(t,e){var r=0;return typeof e=="number"?r=e:e==="center"?r=t.width/2:e==="right"&&(r=t.width),r}function bh(t){return[t.horizontal,t.vertical].map(function(e){return typeof e=="number"?"".concat(e,"px"):e}).join(" ")}function $R(t,e){for(var r=e,n=0;r&&r!==t;)r=r.parentElement,n+=r.scrollTop;return n}function Du(t){return typeof t=="function"?t():t}var NR={root:{},paper:{position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}},IR=d.exports.forwardRef(function(e,r){var n=e.action,i=e.anchorEl,a=e.anchorOrigin,o=a===void 0?{vertical:"top",horizontal:"left"}:a,l=e.anchorPosition,u=e.anchorReference,c=u===void 0?"anchorEl":u,f=e.children,v=e.classes,h=e.className,b=e.container,w=e.elevation,y=w===void 0?8:w,m=e.getContentAnchorEl,p=e.marginThreshold,g=p===void 0?16:p,x=e.onEnter,E=e.onEntered,_=e.onEntering,S=e.onExit,P=e.onExited,N=e.onExiting,k=e.open,R=e.PaperProps,M=R===void 0?{}:R,F=e.transformOrigin,q=F===void 0?{vertical:"top",horizontal:"left"}:F,U=e.TransitionComponent,J=U===void 0?xR:U,Y=e.transitionDuration,ee=Y===void 0?"auto":Y,D=e.TransitionProps,G=D===void 0?{}:D,K=me(e,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","className","container","elevation","getContentAnchorEl","marginThreshold","onEnter","onEntered","onEntering","onExit","onExited","onExiting","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),A=d.exports.useRef(),$=d.exports.useCallback(function(Q){if(c==="anchorPosition")return l;var B=Du(i),fe=B&&B.nodeType===1?B:Lt(A.current).body,ce=fe.getBoundingClientRect(),se=Q===0?o.vertical:"center";return{top:ce.top+vh(ce,se),left:ce.left+yh(ce,o.horizontal)}},[i,o.horizontal,o.vertical,l,c]),I=d.exports.useCallback(function(Q){var B=0;if(m&&c==="anchorEl"){var fe=m(Q);if(fe&&Q.contains(fe)){var ce=$R(Q,fe);B=fe.offsetTop+fe.clientHeight/2-ce||0}}return B},[o.vertical,c,m]),O=d.exports.useCallback(function(Q){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return{vertical:vh(Q,q.vertical)+B,horizontal:yh(Q,q.horizontal)}},[q.horizontal,q.vertical]),z=d.exports.useCallback(function(Q){var B=I(Q),fe={width:Q.offsetWidth,height:Q.offsetHeight},ce=O(fe,B);if(c==="none")return{top:null,left:null,transformOrigin:bh(ce)};var se=$(B),oe=se.top-ce.vertical,ie=se.left-ce.horizontal,ge=oe+fe.height,Te=ie+fe.width,Se=Ns(Du(i)),Ie=Se.innerHeight-g,he=Se.innerWidth-g;if(oe<g){var Ee=oe-g;oe-=Ee,ce.vertical+=Ee}else if(ge>Ie){var Z=ge-Ie;oe-=Z,ce.vertical+=Z}if(ie<g){var ke=ie-g;ie-=ke,ce.horizontal+=ke}else if(Te>he){var Qe=Te-he;ie-=Qe,ce.horizontal+=Qe}return{top:"".concat(Math.round(oe),"px"),left:"".concat(Math.round(ie),"px"),transformOrigin:bh(ce)}},[i,c,$,I,O,g]),C=d.exports.useCallback(function(){var Q=A.current;if(!!Q){var B=z(Q);B.top!==null&&(Q.style.top=B.top),B.left!==null&&(Q.style.left=B.left),Q.style.transformOrigin=B.transformOrigin}},[z]),V=function(B,fe){_&&_(B,fe),C()},j=d.exports.useCallback(function(Q){A.current=Qt.exports.findDOMNode(Q)},[]);d.exports.useEffect(function(){k&&C()}),d.exports.useImperativeHandle(n,function(){return k?{updatePosition:function(){C()}}:null},[k,C]),d.exports.useEffect(function(){if(!!k){var Q=ni(function(){C()});return window.addEventListener("resize",Q),function(){Q.clear(),window.removeEventListener("resize",Q)}}},[k,C]);var te=ee;ee==="auto"&&!J.muiSupportAuto&&(te=void 0);var ne=b||(i?Lt(Du(i)).body:void 0);return d.exports.createElement(G_,T({container:ne,open:k,ref:r,BackdropProps:{invisible:!0},className:ue(v.root,h)},K),d.exports.createElement(J,T({appear:!0,in:k,onEnter:x,onEntered:E,onExit:S,onExited:P,onExiting:N,timeout:te},G,{onEntering:Fl(V,G.onEntering)}),d.exports.createElement(jf,T({elevation:y,ref:j},M,{className:ue(v.paper,M.className)}),f)))}),AR=Re(NR,{name:"MuiPopover"})(IR);function zu(t,e,r){return t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:r?null:t.firstChild}function xh(t,e,r){return t===e?r?t.firstChild:t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:r?null:t.lastChild}function c0(t,e){if(e===void 0)return!0;var r=t.innerText;return r===void 0&&(r=t.textContent),r=r.trim().toLowerCase(),r.length===0?!1:e.repeating?r[0]===e.keys[0]:r.indexOf(e.keys.join(""))===0}function Ii(t,e,r,n,i,a){for(var o=!1,l=i(t,e,e?r:!1);l;){if(l===t.firstChild){if(o)return;o=!0}var u=n?!1:l.disabled||l.getAttribute("aria-disabled")==="true";if(!l.hasAttribute("tabindex")||!c0(l,a)||u)l=i(t,l,r);else{l.focus();return}}}var OR=typeof window=="undefined"?d.exports.useEffect:d.exports.useLayoutEffect,jR=d.exports.forwardRef(function(e,r){var n=e.actions,i=e.autoFocus,a=i===void 0?!1:i,o=e.autoFocusItem,l=o===void 0?!1:o,u=e.children,c=e.className,f=e.disabledItemsFocusable,v=f===void 0?!1:f,h=e.disableListWrap,b=h===void 0?!1:h,w=e.onKeyDown,y=e.variant,m=y===void 0?"selectedMenu":y,p=me(e,["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"]),g=d.exports.useRef(null),x=d.exports.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});OR(function(){a&&g.current.focus()},[a]),d.exports.useImperativeHandle(n,function(){return{adjustStyleForScrollbar:function(R,M){var F=!g.current.style.width;if(R.clientHeight<g.current.clientHeight&&F){var q="".concat(a0(),"px");g.current.style[M.direction==="rtl"?"paddingLeft":"paddingRight"]=q,g.current.style.width="calc(100% + ".concat(q,")")}return g.current}}},[]);var E=function(R){var M=g.current,F=R.key,q=Lt(M).activeElement;if(F==="ArrowDown")R.preventDefault(),Ii(M,q,b,v,zu);else if(F==="ArrowUp")R.preventDefault(),Ii(M,q,b,v,xh);else if(F==="Home")R.preventDefault(),Ii(M,null,b,v,zu);else if(F==="End")R.preventDefault(),Ii(M,null,b,v,xh);else if(F.length===1){var U=x.current,J=F.toLowerCase(),Y=performance.now();U.keys.length>0&&(Y-U.lastTime>500?(U.keys=[],U.repeating=!0,U.previousKeyMatched=!0):U.repeating&&J!==U.keys[0]&&(U.repeating=!1)),U.lastTime=Y,U.keys.push(J);var ee=q&&!U.repeating&&c0(q,U);U.previousKeyMatched&&(ee||Ii(M,q,!1,v,zu,U))?R.preventDefault():U.previousKeyMatched=!1}w&&w(R)},_=d.exports.useCallback(function(k){g.current=Qt.exports.findDOMNode(k)},[]),S=ht(_,r),P=-1;d.exports.Children.forEach(u,function(k,R){!d.exports.isValidElement(k)||k.props.disabled||(m==="selectedMenu"&&k.props.selected||P===-1)&&(P=R)});var N=d.exports.Children.map(u,function(k,R){if(R===P){var M={};return l&&(M.autoFocus=!0),k.props.tabIndex===void 0&&m==="selectedMenu"&&(M.tabIndex=0),d.exports.cloneElement(k,M)}return k});return d.exports.createElement(PR,T({role:"menu",ref:S,className:c,onKeyDown:E,tabIndex:a?0:-1},p),N)}),LR=jR,wh={vertical:"top",horizontal:"right"},Eh={vertical:"top",horizontal:"left"},MR={paper:{maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"},list:{outline:0}},FR=d.exports.forwardRef(function(e,r){var n=e.autoFocus,i=n===void 0?!0:n,a=e.children,o=e.classes,l=e.disableAutoFocusItem,u=l===void 0?!1:l,c=e.MenuListProps,f=c===void 0?{}:c,v=e.onClose,h=e.onEntering,b=e.open,w=e.PaperProps,y=w===void 0?{}:w,m=e.PopoverClasses,p=e.transitionDuration,g=p===void 0?"auto":p,x=e.TransitionProps;x=x===void 0?{}:x;var E=x.onEntering,_=me(x,["onEntering"]),S=e.variant,P=S===void 0?"selectedMenu":S,N=me(e,["autoFocus","children","classes","disableAutoFocusItem","MenuListProps","onClose","onEntering","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"]),k=pi(),R=i&&!u&&b,M=d.exports.useRef(null),F=d.exports.useRef(null),q=function(){return F.current},U=function(G,K){M.current&&M.current.adjustStyleForScrollbar(G,k),h&&h(G,K),E&&E(G,K)},J=function(G){G.key==="Tab"&&(G.preventDefault(),v&&v(G,"tabKeyDown"))},Y=-1;d.exports.Children.map(a,function(D,G){!d.exports.isValidElement(D)||D.props.disabled||(P!=="menu"&&D.props.selected||Y===-1)&&(Y=G)});var ee=d.exports.Children.map(a,function(D,G){return G===Y?d.exports.cloneElement(D,{ref:function(A){F.current=Qt.exports.findDOMNode(A),ii(D.ref,A)}}):D});return d.exports.createElement(AR,T({getContentAnchorEl:q,classes:m,onClose:v,TransitionProps:T({onEntering:U},_),anchorOrigin:k.direction==="rtl"?wh:Eh,transformOrigin:k.direction==="rtl"?wh:Eh,PaperProps:T({},y,{classes:T({},y.classes,{root:o.paper})}),open:b,ref:r,transitionDuration:g},N),d.exports.createElement(LR,T({onKeyDown:J,actions:M,autoFocus:i&&(Y===-1||u),autoFocusItem:R,variant:P},f,{className:ue(o.list,f.className)}),ee))}),DR=Re(MR,{name:"MuiMenu"})(FR),zR=d.exports.forwardRef(function(e,r){var n=e.classes,i=e.className,a=e.disabled,o=e.IconComponent,l=e.inputRef,u=e.variant,c=u===void 0?"standard":u,f=me(e,["classes","className","disabled","IconComponent","inputRef","variant"]);return d.exports.createElement(d.exports.Fragment,null,d.exports.createElement("select",T({className:ue(n.root,n.select,n[c],i,a&&n.disabled),disabled:a,ref:l||r},f)),e.multiple?null:d.exports.createElement(o,{className:ue(n.icon,n["icon".concat(ze(c))],a&&n.disabled)}))}),d0=zR,f0=Is(d.exports.createElement("path",{d:"M7 10l5 5 5-5z"})),p0=function(e){return{root:{},select:{"-moz-appearance":"none","-webkit-appearance":"none",userSelect:"none",borderRadius:0,minWidth:16,cursor:"pointer","&:focus":{backgroundColor:e.palette.type==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)",borderRadius:0},"&::-ms-expand":{display:"none"},"&$disabled":{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:e.palette.background.paper},"&&":{paddingRight:24}},filled:{"&&":{paddingRight:32}},outlined:{borderRadius:e.shape.borderRadius,"&&":{paddingRight:32}},selectMenu:{height:"auto",minHeight:"1.1876em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},disabled:{},icon:{position:"absolute",right:0,top:"calc(50% - 12px)",pointerEvents:"none",color:e.palette.action.active,"&$disabled":{color:e.palette.action.disabled}},iconOpen:{transform:"rotate(180deg)"},iconFilled:{right:7},iconOutlined:{right:7},nativeInput:{bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%"}}},BR=d.exports.createElement(Uf,null),m0=d.exports.forwardRef(function(e,r){var n=e.children,i=e.classes,a=e.IconComponent,o=a===void 0?f0:a,l=e.input,u=l===void 0?BR:l,c=e.inputProps;e.variant;var f=me(e,["children","classes","IconComponent","input","inputProps","variant"]),v=Wa(),h=mi({props:e,muiFormControl:v,states:["variant"]});return d.exports.cloneElement(u,T({inputComponent:d0,inputProps:T({children:n,classes:i,IconComponent:o,variant:h.variant,type:void 0},c,u?u.props.inputProps:{}),ref:r},f))});m0.muiName="Select";Re(p0,{name:"MuiNativeSelect"})(m0);var VR=function(e){return{root:{position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden"},legend:{textAlign:"left",padding:0,lineHeight:"11px",transition:e.transitions.create("width",{duration:150,easing:e.transitions.easing.easeOut})},legendLabelled:{display:"block",width:"auto",textAlign:"left",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:e.transitions.create("max-width",{duration:50,easing:e.transitions.easing.easeOut}),"& > span":{paddingLeft:5,paddingRight:5,display:"inline-block"}},legendNotched:{maxWidth:1e3,transition:e.transitions.create("max-width",{duration:100,easing:e.transitions.easing.easeOut,delay:50})}}},WR=d.exports.forwardRef(function(e,r){e.children;var n=e.classes,i=e.className,a=e.label,o=e.labelWidth,l=e.notched,u=e.style,c=me(e,["children","classes","className","label","labelWidth","notched","style"]),f=pi(),v=f.direction==="rtl"?"right":"left";if(a!==void 0)return d.exports.createElement("fieldset",T({"aria-hidden":!0,className:ue(n.root,i),ref:r,style:u},c),d.exports.createElement("legend",{className:ue(n.legendLabelled,l&&n.legendNotched)},a?d.exports.createElement("span",null,a):d.exports.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}})));var h=o>0?o*.75+8:.01;return d.exports.createElement("fieldset",T({"aria-hidden":!0,style:T(zt({},"padding".concat(ze(v)),8),u),className:ue(n.root,i),ref:r},c),d.exports.createElement("legend",{className:n.legend,style:{width:l?h:.01}},d.exports.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}})))}),HR=Re(VR,{name:"PrivateNotchedOutline"})(WR),UR=function(e){var r=e.palette.type==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{root:{position:"relative",borderRadius:e.shape.borderRadius,"&:hover $notchedOutline":{borderColor:e.palette.text.primary},"@media (hover: none)":{"&:hover $notchedOutline":{borderColor:r}},"&$focused $notchedOutline":{borderColor:e.palette.primary.main,borderWidth:2},"&$error $notchedOutline":{borderColor:e.palette.error.main},"&$disabled $notchedOutline":{borderColor:e.palette.action.disabled}},colorSecondary:{"&$focused $notchedOutline":{borderColor:e.palette.secondary.main}},focused:{},disabled:{},adornedStart:{paddingLeft:14},adornedEnd:{paddingRight:14},error:{},marginDense:{},multiline:{padding:"18.5px 14px","&$marginDense":{paddingTop:10.5,paddingBottom:10.5}},notchedOutline:{borderColor:r},input:{padding:"18.5px 14px","&:-webkit-autofill":{WebkitBoxShadow:e.palette.type==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.type==="light"?null:"#fff",caretColor:e.palette.type==="light"?null:"#fff",borderRadius:"inherit"}},inputMarginDense:{paddingTop:10.5,paddingBottom:10.5},inputMultiline:{padding:0},inputAdornedStart:{paddingLeft:0},inputAdornedEnd:{paddingRight:0}}},h0=d.exports.forwardRef(function(e,r){var n=e.classes,i=e.fullWidth,a=i===void 0?!1:i,o=e.inputComponent,l=o===void 0?"input":o,u=e.label,c=e.labelWidth,f=c===void 0?0:c,v=e.multiline,h=v===void 0?!1:v,b=e.notched,w=e.type,y=w===void 0?"text":w,m=me(e,["classes","fullWidth","inputComponent","label","labelWidth","multiline","notched","type"]);return d.exports.createElement(Hf,T({renderSuffix:function(g){return d.exports.createElement(HR,{className:n.notchedOutline,label:u,labelWidth:f,notched:typeof b!="undefined"?b:Boolean(g.startAdornment||g.filled||g.focused)})},classes:T({},n,{root:ue(n.root,n.underline),notchedOutline:null}),fullWidth:a,inputComponent:l,multiline:h,ref:r,type:y},m))});h0.muiName="Input";var g0=Re(UR,{name:"MuiOutlinedInput"})(h0);function Sh(t,e){return Gr(e)==="object"&&e!==null?t===e:String(t)===String(e)}function qR(t){return t==null||typeof t=="string"&&!t.trim()}var GR=d.exports.forwardRef(function(e,r){var n=e["aria-label"],i=e.autoFocus,a=e.autoWidth,o=e.children,l=e.classes,u=e.className,c=e.defaultValue,f=e.disabled,v=e.displayEmpty,h=e.IconComponent,b=e.inputRef,w=e.labelId,y=e.MenuProps,m=y===void 0?{}:y,p=e.multiple,g=e.name,x=e.onBlur,E=e.onChange,_=e.onClose,S=e.onFocus,P=e.onOpen,N=e.open,k=e.readOnly,R=e.renderValue,M=e.SelectDisplayProps,F=M===void 0?{}:M,q=e.tabIndex;e.type;var U=e.value,J=e.variant,Y=J===void 0?"standard":J,ee=me(e,["aria-label","autoFocus","autoWidth","children","classes","className","defaultValue","disabled","displayEmpty","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"]),D=Bf({controlled:U,default:c,name:"Select"}),G=Na(D,2),K=G[0],A=G[1],$=d.exports.useRef(null),I=d.exports.useState(null),O=I[0],z=I[1],C=d.exports.useRef(N!=null),V=C.current,j=d.exports.useState(),te=j[0],ne=j[1],Q=d.exports.useState(!1),B=Q[0],fe=Q[1],ce=ht(r,b);d.exports.useImperativeHandle(ce,function(){return{focus:function(){O.focus()},node:$.current,value:K}},[O,K]),d.exports.useEffect(function(){i&&O&&O.focus()},[i,O]),d.exports.useEffect(function(){if(O){var Pe=Lt(O).getElementById(w);if(Pe){var ve=function(){getSelection().isCollapsed&&O.focus()};return Pe.addEventListener("click",ve),function(){Pe.removeEventListener("click",ve)}}}},[w,O]);var se=function(ve,Xe){ve?P&&P(Xe):_&&_(Xe),V||(ne(a?null:O.clientWidth),fe(ve))},oe=function(ve){ve.button===0&&(ve.preventDefault(),O.focus(),se(!0,ve))},ie=function(ve){se(!1,ve)},ge=d.exports.Children.toArray(o),Te=function(ve){var Xe=ge.map(function(Ce){return Ce.props.value}).indexOf(ve.target.value);if(Xe!==-1){var rt=ge[Xe];A(rt.props.value),E&&E(ve,rt)}},Se=function(ve){return function(Xe){p||se(!1,Xe);var rt;if(p){rt=Array.isArray(K)?K.slice():[];var Ce=K.indexOf(ve.props.value);Ce===-1?rt.push(ve.props.value):rt.splice(Ce,1)}else rt=ve.props.value;ve.props.onClick&&ve.props.onClick(Xe),K!==rt&&(A(rt),E&&(Xe.persist(),Object.defineProperty(Xe,"target",{writable:!0,value:{value:rt,name:g}}),E(Xe,ve)))}},Ie=function(ve){if(!k){var Xe=[" ","ArrowUp","ArrowDown","Enter"];Xe.indexOf(ve.key)!==-1&&(ve.preventDefault(),se(!0,ve))}},he=O!==null&&(V?N:B),Ee=function(ve){!he&&x&&(ve.persist(),Object.defineProperty(ve,"target",{writable:!0,value:{value:K,name:g}}),x(ve))};delete ee["aria-invalid"];var Z,ke,Qe=[],St=!1;(Wf({value:K})||v)&&(R?Z=R(K):St=!0);var Ne=ge.map(function(Pe){if(!d.exports.isValidElement(Pe))return null;var ve;if(p){if(!Array.isArray(K))throw new Error(ri(2));ve=K.some(function(Xe){return Sh(Xe,Pe.props.value)}),ve&&St&&Qe.push(Pe.props.children)}else ve=Sh(K,Pe.props.value),ve&&St&&(ke=Pe.props.children);return d.exports.cloneElement(Pe,{"aria-selected":ve?"true":void 0,onClick:Se(Pe),onKeyUp:function(rt){rt.key===" "&&rt.preventDefault(),Pe.props.onKeyUp&&Pe.props.onKeyUp(rt)},role:"option",selected:ve,value:void 0,"data-value":Pe.props.value})});St&&(Z=p?Qe.join(", "):ke);var _e=te;!a&&V&&O&&(_e=O.clientWidth);var kt;typeof q!="undefined"?kt=q:kt=f?null:0;var tt=F.id||(g?"mui-component-select-".concat(g):void 0);return d.exports.createElement(d.exports.Fragment,null,d.exports.createElement("div",T({className:ue(l.root,l.select,l.selectMenu,l[Y],u,f&&l.disabled),ref:z,tabIndex:kt,role:"button","aria-disabled":f?"true":void 0,"aria-expanded":he?"true":void 0,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":[w,tt].filter(Boolean).join(" ")||void 0,onKeyDown:Ie,onMouseDown:f||k?null:oe,onBlur:Ee,onFocus:S},F,{id:tt}),qR(Z)?d.exports.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):Z),d.exports.createElement("input",T({value:Array.isArray(K)?K.join(","):K,name:g,ref:$,"aria-hidden":!0,onChange:Te,tabIndex:-1,className:l.nativeInput,autoFocus:i},ee)),d.exports.createElement(h,{className:ue(l.icon,l["icon".concat(ze(Y))],he&&l.iconOpen,f&&l.disabled)}),d.exports.createElement(DR,T({id:"menu-".concat(g||""),anchorEl:O,open:he,onClose:ie},m,{MenuListProps:T({"aria-labelledby":w,role:"listbox",disableListWrap:!0},m.MenuListProps),PaperProps:T({},m.PaperProps,{style:T({minWidth:_e},m.PaperProps!=null?m.PaperProps.style:null)})}),Ne))}),KR=GR,QR=p0,XR=d.exports.createElement(Uf,null),YR=d.exports.createElement(l0,null),v0=d.exports.forwardRef(function t(e,r){var n=e.autoWidth,i=n===void 0?!1:n,a=e.children,o=e.classes,l=e.displayEmpty,u=l===void 0?!1:l,c=e.IconComponent,f=c===void 0?f0:c,v=e.id,h=e.input,b=e.inputProps,w=e.label,y=e.labelId,m=e.labelWidth,p=m===void 0?0:m,g=e.MenuProps,x=e.multiple,E=x===void 0?!1:x,_=e.native,S=_===void 0?!1:_,P=e.onClose,N=e.onOpen,k=e.open,R=e.renderValue,M=e.SelectDisplayProps,F=e.variant,q=F===void 0?"standard":F,U=me(e,["autoWidth","children","classes","displayEmpty","IconComponent","id","input","inputProps","label","labelId","labelWidth","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"]),J=S?d0:KR,Y=Wa(),ee=mi({props:e,muiFormControl:Y,states:["variant"]}),D=ee.variant||q,G=h||{standard:XR,outlined:d.exports.createElement(g0,{label:w,labelWidth:p}),filled:YR}[D];return d.exports.cloneElement(G,T({inputComponent:J,inputProps:T({children:a,IconComponent:f,variant:D,type:void 0,multiple:E},S?{id:v}:{autoWidth:i,displayEmpty:u,labelId:y,MenuProps:g,onClose:P,onOpen:N,open:k,renderValue:R,SelectDisplayProps:T({id:v},M)},b,{classes:b?Af({baseClasses:o,newClasses:b.classes,Component:t}):o},h?h.props.inputProps:{}),ref:r},U))});v0.muiName="Select";var JR=Re(QR,{name:"MuiSelect"})(v0),ZR=function(e){return{thumb:{"&$open":{"& $offset":{transform:"scale(1) translateY(-10px)"}}},open:{},offset:T({zIndex:1},e.typography.body2,{fontSize:e.typography.pxToRem(12),lineHeight:1.2,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),top:-34,transformOrigin:"bottom center",transform:"scale(0)",position:"absolute"}),circle:{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,borderRadius:"50% 50% 50% 0",backgroundColor:"currentColor",transform:"rotate(-45deg)"},label:{color:e.palette.primary.contrastText,transform:"rotate(45deg)"}}};function eT(t){var e=t.children,r=t.classes,n=t.className,i=t.open,a=t.value,o=t.valueLabelDisplay;return o==="off"?e:d.exports.cloneElement(e,{className:ue(e.props.className,(i||o==="on")&&r.open,r.thumb)},d.exports.createElement("span",{className:ue(r.offset,n)},d.exports.createElement("span",{className:r.circle},d.exports.createElement("span",{className:r.label},a))))}var tT=Re(ZR,{name:"PrivateValueLabel"})(eT);function Bu(t,e){return t-e}function Vu(t,e,r){return Math.min(Math.max(e,t),r)}function kh(t,e){var r=t.reduce(function(i,a,o){var l=Math.abs(e-a);return i===null||l<i.distance||l===i.distance?{distance:l,index:o}:i},null),n=r.index;return n}function xo(t,e){if(e.current!==void 0&&t.changedTouches){for(var r=0;r<t.changedTouches.length;r+=1){var n=t.changedTouches[r];if(n.identifier===e.current)return{x:n.clientX,y:n.clientY}}return!1}return{x:t.clientX,y:t.clientY}}function wo(t,e,r){return(t-e)*100/(r-e)}function rT(t,e,r){return(r-e)*t+e}function nT(t){if(Math.abs(t)<1){var e=t.toExponential().split("e-"),r=e[0].split(".")[1];return(r?r.length:0)+parseInt(e[1],10)}var n=t.toString().split(".")[1];return n?n.length:0}function Ch(t,e,r){var n=Math.round((t-r)/e)*e+r;return Number(n.toFixed(nT(e)))}function _h(t){var e=t.values,r=t.source,n=t.newValue,i=t.index;if(e[i]===n)return r;var a=e.slice();return a[i]=n,a}function Eo(t){var e=t.sliderRef,r=t.activeIndex,n=t.setActive;(!e.current.contains(document.activeElement)||Number(document.activeElement.getAttribute("data-index"))!==r)&&e.current.querySelector('[role="slider"][data-index="'.concat(r,'"]')).focus(),n&&n(r)}var So={horizontal:{offset:function(e){return{left:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},"horizontal-reverse":{offset:function(e){return{right:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},vertical:{offset:function(e){return{bottom:"".concat(e,"%")}},leap:function(e){return{height:"".concat(e,"%")}}}},Rh=function(e){return e},iT=function(e){return{root:{height:2,width:"100%",boxSizing:"content-box",padding:"13px 0",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:e.palette.primary.main,WebkitTapHighlightColor:"transparent","&$disabled":{pointerEvents:"none",cursor:"default",color:e.palette.grey[400]},"&$vertical":{width:2,height:"100%",padding:"0 13px"},"@media (pointer: coarse)":{padding:"20px 0","&$vertical":{padding:"0 20px"}},"@media print":{colorAdjust:"exact"}},colorPrimary:{},colorSecondary:{color:e.palette.secondary.main},marked:{marginBottom:20,"&$vertical":{marginBottom:"auto",marginRight:20}},vertical:{},disabled:{},rail:{display:"block",position:"absolute",width:"100%",height:2,borderRadius:1,backgroundColor:"currentColor",opacity:.38,"$vertical &":{height:"100%",width:2}},track:{display:"block",position:"absolute",height:2,borderRadius:1,backgroundColor:"currentColor","$vertical &":{width:2}},trackFalse:{"& $track":{display:"none"}},trackInverted:{"& $track":{backgroundColor:e.palette.type==="light"?by(e.palette.primary.main,.62):yy(e.palette.primary.main,.5)},"& $rail":{opacity:1}},thumb:{position:"absolute",width:12,height:12,marginLeft:-6,marginTop:-5,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow"],{duration:e.transitions.duration.shortest}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",left:-15,top:-15,right:-15,bottom:-15},"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat(jt(e.palette.primary.main,.16)),"@media (hover: none)":{boxShadow:"none"}},"&$active":{boxShadow:"0px 0px 0px 14px ".concat(jt(e.palette.primary.main,.16))},"&$disabled":{width:8,height:8,marginLeft:-4,marginTop:-3,"&:hover":{boxShadow:"none"}},"$vertical &":{marginLeft:-5,marginBottom:-6},"$vertical &$disabled":{marginLeft:-3,marginBottom:-4}},thumbColorPrimary:{},thumbColorSecondary:{"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat(jt(e.palette.secondary.main,.16))},"&$active":{boxShadow:"0px 0px 0px 14px ".concat(jt(e.palette.secondary.main,.16))}},active:{},focusVisible:{},valueLabel:{left:"calc(-50% - 4px)"},mark:{position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},markActive:{backgroundColor:e.palette.background.paper,opacity:.8},markLabel:T({},e.typography.body2,{color:e.palette.text.secondary,position:"absolute",top:26,transform:"translateX(-50%)",whiteSpace:"nowrap","$vertical &":{top:"auto",left:26,transform:"translateY(50%)"},"@media (pointer: coarse)":{top:40,"$vertical &":{left:31}}}),markLabelActive:{color:e.palette.text.primary}}},aT=d.exports.forwardRef(function(e,r){var n=e["aria-label"],i=e["aria-labelledby"],a=e["aria-valuetext"],o=e.classes,l=e.className,u=e.color,c=u===void 0?"primary":u,f=e.component,v=f===void 0?"span":f,h=e.defaultValue,b=e.disabled,w=b===void 0?!1:b,y=e.getAriaLabel,m=e.getAriaValueText,p=e.marks,g=p===void 0?!1:p,x=e.max,E=x===void 0?100:x,_=e.min,S=_===void 0?0:_,P=e.name,N=e.onChange,k=e.onChangeCommitted,R=e.onMouseDown,M=e.orientation,F=M===void 0?"horizontal":M,q=e.scale,U=q===void 0?Rh:q,J=e.step,Y=J===void 0?1:J,ee=e.ThumbComponent,D=ee===void 0?"span":ee,G=e.track,K=G===void 0?"normal":G,A=e.value,$=e.ValueLabelComponent,I=$===void 0?tT:$,O=e.valueLabelDisplay,z=O===void 0?"off":O,C=e.valueLabelFormat,V=C===void 0?Rh:C,j=me(e,["aria-label","aria-labelledby","aria-valuetext","classes","className","color","component","defaultValue","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","scale","step","ThumbComponent","track","value","ValueLabelComponent","valueLabelDisplay","valueLabelFormat"]),te=pi(),ne=d.exports.useRef(),Q=d.exports.useState(-1),B=Q[0],fe=Q[1],ce=d.exports.useState(-1),se=ce[0],oe=ce[1],ie=Bf({controlled:A,default:h,name:"Slider"}),ge=Na(ie,2),Te=ge[0],Se=ge[1],Ie=Array.isArray(Te),he=Ie?Te.slice().sort(Bu):[Te];he=he.map(function(pe){return Vu(pe,S,E)});var Ee=g===!0&&Y!==null?Pa(Array(Math.floor((E-S)/Y)+1)).map(function(pe,be){return{value:S+Y*be}}):g||[],Z=Mf(),ke=Z.isFocusVisible,Qe=Z.onBlurVisible,St=Z.ref,Ne=d.exports.useState(-1),_e=Ne[0],kt=Ne[1],tt=d.exports.useRef(),Pe=ht(St,tt),ve=ht(r,Pe),Xe=ft(function(pe){var be=Number(pe.currentTarget.getAttribute("data-index"));ke(pe)&&kt(be),oe(be)}),rt=ft(function(){_e!==-1&&(kt(-1),Qe()),oe(-1)}),Ce=ft(function(pe){var be=Number(pe.currentTarget.getAttribute("data-index"));oe(be)}),W=ft(function(){oe(-1)}),xe=te.direction==="rtl",Ye=ft(function(pe){var be=Number(pe.currentTarget.getAttribute("data-index")),nt=he[be],lt=(E-S)/10,Fe=Ee.map(function(Ws){return Ws.value}),rr=Fe.indexOf(nt),Ue,Bs=xe?"ArrowLeft":"ArrowRight",wn=xe?"ArrowRight":"ArrowLeft";switch(pe.key){case"Home":Ue=S;break;case"End":Ue=E;break;case"PageUp":Y&&(Ue=nt+lt);break;case"PageDown":Y&&(Ue=nt-lt);break;case Bs:case"ArrowUp":Y?Ue=nt+Y:Ue=Fe[rr+1]||Fe[Fe.length-1];break;case wn:case"ArrowDown":Y?Ue=nt-Y:Ue=Fe[rr-1]||Fe[0];break;default:return}if(pe.preventDefault(),Y&&(Ue=Ch(Ue,Y,S)),Ue=Vu(Ue,S,E),Ie){var Vs=Ue;Ue=_h({values:he,source:Te,newValue:Ue,index:be}).sort(Bu),Eo({sliderRef:tt,activeIndex:Ue.indexOf(Vs)})}Se(Ue),kt(be),N&&N(pe,Ue),k&&k(pe,Ue)}),He=d.exports.useRef(),ct=F;xe&&F!=="vertical"&&(ct+="-reverse");var dt=function(be){var nt=be.finger,lt=be.move,Fe=lt===void 0?!1:lt,rr=be.values,Ue=be.source,Bs=tt.current,wn=Bs.getBoundingClientRect(),Vs=wn.width,Ws=wn.height,t1=wn.bottom,r1=wn.left,vi;ct.indexOf("vertical")===0?vi=(t1-nt.y)/Ws:vi=(nt.x-r1)/Vs,ct.indexOf("-reverse")!==-1&&(vi=1-vi);var Dt;if(Dt=rT(vi,S,E),Y)Dt=Ch(Dt,Y,S);else{var ap=Ee.map(function(a1){return a1.value}),n1=kh(ap,Dt);Dt=ap[n1]}Dt=Vu(Dt,S,E);var En=0;if(Ie){Fe?En=He.current:En=kh(rr,Dt);var i1=Dt;Dt=_h({values:rr,source:Ue,newValue:Dt,index:En}).sort(Bu),En=Dt.indexOf(i1),He.current=En}return{newValue:Dt,activeIndex:En}},Nt=ft(function(pe){var be=xo(pe,ne);if(!!be){var nt=dt({finger:be,move:!0,values:he,source:Te}),lt=nt.newValue,Fe=nt.activeIndex;Eo({sliderRef:tt,activeIndex:Fe,setActive:fe}),Se(lt),N&&N(pe,lt)}}),It=ft(function(pe){var be=xo(pe,ne);if(!!be){var nt=dt({finger:be,values:he,source:Te}),lt=nt.newValue;fe(-1),pe.type==="touchend"&&oe(-1),k&&k(pe,lt),ne.current=void 0;var Fe=Lt(tt.current);Fe.removeEventListener("mousemove",Nt),Fe.removeEventListener("mouseup",It),Fe.removeEventListener("touchmove",Nt),Fe.removeEventListener("touchend",It)}}),zs=ft(function(pe){pe.preventDefault();var be=pe.changedTouches[0];be!=null&&(ne.current=be.identifier);var nt=xo(pe,ne),lt=dt({finger:nt,values:he,source:Te}),Fe=lt.newValue,rr=lt.activeIndex;Eo({sliderRef:tt,activeIndex:rr,setActive:fe}),Se(Fe),N&&N(pe,Fe);var Ue=Lt(tt.current);Ue.addEventListener("touchmove",Nt),Ue.addEventListener("touchend",It)});d.exports.useEffect(function(){var pe=tt.current;pe.addEventListener("touchstart",zs);var be=Lt(pe);return function(){pe.removeEventListener("touchstart",zs),be.removeEventListener("mousemove",Nt),be.removeEventListener("mouseup",It),be.removeEventListener("touchmove",Nt),be.removeEventListener("touchend",It)}},[It,Nt,zs]);var J0=ft(function(pe){R&&R(pe),pe.preventDefault();var be=xo(pe,ne),nt=dt({finger:be,values:he,source:Te}),lt=nt.newValue,Fe=nt.activeIndex;Eo({sliderRef:tt,activeIndex:Fe,setActive:fe}),Se(lt),N&&N(pe,lt);var rr=Lt(tt.current);rr.addEventListener("mousemove",Nt),rr.addEventListener("mouseup",It)}),ip=wo(Ie?he[0]:S,S,E),Z0=wo(he[he.length-1],S,E)-ip,e1=T({},So[ct].offset(ip),So[ct].leap(Z0));return d.exports.createElement(v,T({ref:ve,className:ue(o.root,o["color".concat(ze(c))],l,w&&o.disabled,Ee.length>0&&Ee.some(function(pe){return pe.label})&&o.marked,K===!1&&o.trackFalse,F==="vertical"&&o.vertical,K==="inverted"&&o.trackInverted),onMouseDown:J0},j),d.exports.createElement("span",{className:o.rail}),d.exports.createElement("span",{className:o.track,style:e1}),d.exports.createElement("input",{value:he.join(","),name:P,type:"hidden"}),Ee.map(function(pe,be){var nt=wo(pe.value,S,E),lt=So[ct].offset(nt),Fe;return K===!1?Fe=he.indexOf(pe.value)!==-1:Fe=K==="normal"&&(Ie?pe.value>=he[0]&&pe.value<=he[he.length-1]:pe.value<=he[0])||K==="inverted"&&(Ie?pe.value<=he[0]||pe.value>=he[he.length-1]:pe.value>=he[0]),d.exports.createElement(d.exports.Fragment,{key:pe.value},d.exports.createElement("span",{style:lt,"data-index":be,className:ue(o.mark,Fe&&o.markActive)}),pe.label!=null?d.exports.createElement("span",{"aria-hidden":!0,"data-index":be,style:lt,className:ue(o.markLabel,Fe&&o.markLabelActive)},pe.label):null)}),he.map(function(pe,be){var nt=wo(pe,S,E),lt=So[ct].offset(nt);return d.exports.createElement(I,{key:be,valueLabelFormat:V,valueLabelDisplay:z,className:o.valueLabel,value:typeof V=="function"?V(U(pe),be):V,index:be,open:se===be||B===be||z==="on",disabled:w},d.exports.createElement(D,{className:ue(o.thumb,o["thumbColor".concat(ze(c))],B===be&&o.active,w&&o.disabled,_e===be&&o.focusVisible),tabIndex:w?null:0,role:"slider",style:lt,"data-index":be,"aria-label":y?y(be):n,"aria-labelledby":i,"aria-orientation":F,"aria-valuemax":U(E),"aria-valuemin":U(S),"aria-valuenow":U(pe),"aria-valuetext":m?m(U(pe),be):a,onKeyDown:Ye,onFocus:Xe,onBlur:rt,onMouseOver:Ce,onMouseLeave:W}))}))}),oT=Re(iT,{name:"MuiSlider"})(aT),lT={standard:Uf,filled:l0,outlined:g0},sT={root:{}},uT=d.exports.forwardRef(function(e,r){var n=e.autoComplete,i=e.autoFocus,a=i===void 0?!1:i,o=e.children,l=e.classes,u=e.className,c=e.color,f=c===void 0?"primary":c,v=e.defaultValue,h=e.disabled,b=h===void 0?!1:h,w=e.error,y=w===void 0?!1:w,m=e.FormHelperTextProps,p=e.fullWidth,g=p===void 0?!1:p,x=e.helperText,E=e.hiddenLabel,_=e.id,S=e.InputLabelProps,P=e.inputProps,N=e.InputProps,k=e.inputRef,R=e.label,M=e.multiline,F=M===void 0?!1:M,q=e.name,U=e.onBlur,J=e.onChange,Y=e.onFocus,ee=e.placeholder,D=e.required,G=D===void 0?!1:D,K=e.rows,A=e.rowsMax,$=e.maxRows,I=e.minRows,O=e.select,z=O===void 0?!1:O,C=e.SelectProps,V=e.type,j=e.value,te=e.variant,ne=te===void 0?"standard":te,Q=me(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","maxRows","minRows","select","SelectProps","type","value","variant"]),B={};if(ne==="outlined"&&(S&&typeof S.shrink!="undefined"&&(B.notched=S.shrink),R)){var fe,ce=(fe=S==null?void 0:S.required)!==null&&fe!==void 0?fe:G;B.label=d.exports.createElement(d.exports.Fragment,null,R,ce&&"\xA0*")}z&&((!C||!C.native)&&(B.id=void 0),B["aria-describedby"]=void 0);var se=x&&_?"".concat(_,"-helper-text"):void 0,oe=R&&_?"".concat(_,"-label"):void 0,ie=lT[ne],ge=d.exports.createElement(ie,T({"aria-describedby":se,autoComplete:n,autoFocus:a,defaultValue:v,fullWidth:g,multiline:F,name:q,rows:K,rowsMax:A,maxRows:$,minRows:I,type:V,value:j,id:_,inputRef:k,onBlur:U,onChange:J,onFocus:Y,placeholder:ee,inputProps:P},B,N));return d.exports.createElement(aR,T({className:ue(l.root,u),disabled:b,error:y,fullWidth:g,hiddenLabel:E,ref:r,required:G,color:f,variant:ne},Q),R&&d.exports.createElement(kR,T({htmlFor:_,id:oe},S),R),z?d.exports.createElement(JR,T({"aria-describedby":se,id:_,labelId:oe,value:j,input:ge},C),o):ge,x&&d.exports.createElement(sR,T({id:se},m),x))}),Th=Re(sT,{name:"MuiTextField"})(uT),qf={},y0={exports:{}};(function(t){function e(r){return r&&r.__esModule?r:{default:r}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(y0);var b0={exports:{}},x0={exports:{}};(function(t){function e(r){return t.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(x0);(function(t){var e=x0.exports.default;function r(i){if(typeof WeakMap!="function")return null;var a=new WeakMap,o=new WeakMap;return(r=function(u){return u?o:a})(i)}function n(i,a){if(!a&&i&&i.__esModule)return i;if(i===null||e(i)!=="object"&&typeof i!="function")return{default:i};var o=r(a);if(o&&o.has(i))return o.get(i);var l={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in i)if(c!=="default"&&Object.prototype.hasOwnProperty.call(i,c)){var f=u?Object.getOwnPropertyDescriptor(i,c):null;f&&(f.get||f.set)?Object.defineProperty(l,c,f):l[c]=i[c]}return l.default=i,o&&o.set(i,l),l}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports})(b0);var w0={},cT=l1(a_);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=cT})(w0);var dT=y0.exports,fT=b0.exports;Object.defineProperty(qf,"__esModule",{value:!0});var E0=qf.default=void 0,pT=fT(d.exports),mT=dT(w0),hT=(0,mT.default)(pT.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");E0=qf.default=hT;var it={},Gf={},Ha={},Ua={},S0="Expected a function",Ph=0/0,gT="[object Symbol]",vT=/^\s+|\s+$/g,yT=/^[-+]0x[0-9a-f]+$/i,bT=/^0b[01]+$/i,xT=/^0o[0-7]+$/i,wT=parseInt,ET=typeof Ya=="object"&&Ya&&Ya.Object===Object&&Ya,ST=typeof self=="object"&&self&&self.Object===Object&&self,kT=ET||ST||Function("return this")(),CT=Object.prototype,_T=CT.toString,RT=Math.max,TT=Math.min,Wu=function(){return kT.Date.now()};function PT(t,e,r){var n,i,a,o,l,u,c=0,f=!1,v=!1,h=!0;if(typeof t!="function")throw new TypeError(S0);e=$h(e)||0,zl(r)&&(f=!!r.leading,v="maxWait"in r,a=v?RT($h(r.maxWait)||0,e):a,h="trailing"in r?!!r.trailing:h);function b(S){var P=n,N=i;return n=i=void 0,c=S,o=t.apply(N,P),o}function w(S){return c=S,l=setTimeout(p,e),f?b(S):o}function y(S){var P=S-u,N=S-c,k=e-P;return v?TT(k,a-N):k}function m(S){var P=S-u,N=S-c;return u===void 0||P>=e||P<0||v&&N>=a}function p(){var S=Wu();if(m(S))return g(S);l=setTimeout(p,y(S))}function g(S){return l=void 0,h&&n?b(S):(n=i=void 0,o)}function x(){l!==void 0&&clearTimeout(l),c=0,n=u=i=l=void 0}function E(){return l===void 0?o:g(Wu())}function _(){var S=Wu(),P=m(S);if(n=arguments,i=this,u=S,P){if(l===void 0)return w(u);if(v)return l=setTimeout(p,e),b(u)}return l===void 0&&(l=setTimeout(p,e)),o}return _.cancel=x,_.flush=E,_}function $T(t,e,r){var n=!0,i=!0;if(typeof t!="function")throw new TypeError(S0);return zl(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),PT(t,e,{leading:n,maxWait:e,trailing:i})}function zl(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function NT(t){return!!t&&typeof t=="object"}function IT(t){return typeof t=="symbol"||NT(t)&&_T.call(t)==gT}function $h(t){if(typeof t=="number")return t;if(IT(t))return Ph;if(zl(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=zl(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(vT,"");var r=bT.test(t);return r||xT.test(t)?wT(t.slice(2),r?2:8):yT.test(t)?Ph:+t}var AT=$T,qa={};Object.defineProperty(qa,"__esModule",{value:!0});qa.addPassiveEventListener=function(e,r,n){var i=function(){var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(l){}return a}();e.addEventListener(r,n,i?{passive:!0}:!1)};qa.removePassiveEventListener=function(e,r,n){e.removeEventListener(r,n)};Object.defineProperty(Ua,"__esModule",{value:!0});var OT=AT,jT=MT(OT),LT=qa;function MT(t){return t&&t.__esModule?t:{default:t}}var FT=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,jT.default)(e,r)},Je={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,r){if(e){var n=FT(function(i){Je.scrollHandler(e)},r);Je.scrollSpyContainers.push(e),(0,LT.addPassiveEventListener)(e,"scroll",n)}},isMounted:function(e){return Je.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var r=window.pageYOffset!==void 0,n=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var r=window.pageXOffset!==void 0,n=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var r=Je.scrollSpyContainers[Je.scrollSpyContainers.indexOf(e)].spyCallbacks||[];r.forEach(function(n){return n(Je.currentPositionX(e),Je.currentPositionY(e))})},addStateHandler:function(e){Je.spySetState.push(e)},addSpyHandler:function(e,r){var n=Je.scrollSpyContainers[Je.scrollSpyContainers.indexOf(r)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e),e(Je.currentPositionX(r),Je.currentPositionY(r))},updateStates:function(){Je.spySetState.forEach(function(e){return e()})},unmount:function(e,r){Je.scrollSpyContainers.forEach(function(n){return n.spyCallbacks&&n.spyCallbacks.length&&n.spyCallbacks.indexOf(r)>-1&&n.spyCallbacks.splice(n.spyCallbacks.indexOf(r),1)}),Je.spySetState&&Je.spySetState.length&&Je.spySetState.indexOf(e)>-1&&Je.spySetState.splice(Je.spySetState.indexOf(e),1),document.removeEventListener("scroll",Je.scrollHandler)},update:function(){return Je.scrollSpyContainers.forEach(function(e){return Je.scrollHandler(e)})}};Ua.default=Je;var hi={},Ga={};Object.defineProperty(Ga,"__esModule",{value:!0});var DT=function(e,r){var n=e.indexOf("#")===0?e.substring(1):e,i=n?"#"+n:"",a=window&&window.location,o=i?a.pathname+a.search+i:a.pathname+a.search;r?history.pushState(history.state,"",o):history.replaceState(history.state,"",o)},zT=function(){return window.location.hash.replace(/^#/,"")},BT=function(e){return function(r){return e.contains?e!=r&&e.contains(r):!!(e.compareDocumentPosition(r)&16)}},VT=function(e){return getComputedStyle(e).position!=="static"},Hu=function(e,r){for(var n=e.offsetTop,i=e.offsetParent;i&&!r(i);)n+=i.offsetTop,i=i.offsetParent;return{offsetTop:n,offsetParent:i}},WT=function(e,r,n){if(n)return e===document?r.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?r.offsetLeft:r.offsetLeft-e.offsetLeft;if(e===document)return r.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(VT(e)){if(r.offsetParent!==e){var i=function(f){return f===e||f===document},a=Hu(r,i),o=a.offsetTop,l=a.offsetParent;if(l!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return o}return r.offsetTop}if(r.offsetParent===e.offsetParent)return r.offsetTop-e.offsetTop;var u=function(f){return f===document};return Hu(r,u).offsetTop-Hu(e,u).offsetTop};Ga.default={updateHash:DT,getHash:zT,filterElementInContainer:BT,scrollOffset:WT};var Os={},Kf={};Object.defineProperty(Kf,"__esModule",{value:!0});Kf.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var Qf={};Object.defineProperty(Qf,"__esModule",{value:!0});var HT=qa,UT=["mousedown","mousewheel","touchmove","keydown"];Qf.default={subscribe:function(e){return typeof document!="undefined"&&UT.forEach(function(r){return(0,HT.addPassiveEventListener)(document,r,e)})}};var Ka={};Object.defineProperty(Ka,"__esModule",{value:!0});var md={registered:{},scrollEvent:{register:function(e,r){md.registered[e]=r},remove:function(e){md.registered[e]=null}}};Ka.default=md;Object.defineProperty(Os,"__esModule",{value:!0});var qT=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},GT=Ga;js(GT);var KT=Kf,Nh=js(KT),QT=Qf,XT=js(QT),YT=Ka,nr=js(YT);function js(t){return t&&t.__esModule?t:{default:t}}var k0=function(e){return Nh.default[e.smooth]||Nh.default.defaultEasing},JT=function(e){return typeof e=="function"?e:function(){return e}},ZT=function(){if(typeof window!="undefined")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},hd=function(){return ZT()||function(t,e,r){window.setTimeout(t,r||1e3/60,new Date().getTime())}}(),C0=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},_0=function(e){var r=e.data.containerElement;if(r&&r!==document&&r!==document.body)return r.scrollLeft;var n=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},R0=function(e){var r=e.data.containerElement;if(r&&r!==document&&r!==document.body)return r.scrollTop;var n=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},eP=function(e){var r=e.data.containerElement;if(r&&r!==document&&r!==document.body)return r.scrollWidth-r.offsetWidth;var n=document.body,i=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},tP=function(e){var r=e.data.containerElement;if(r&&r!==document&&r!==document.body)return r.scrollHeight-r.offsetHeight;var n=document.body,i=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},rP=function t(e,r,n){var i=r.data;if(!r.ignoreCancelEvents&&i.cancel){nr.default.registered.end&&nr.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=n),i.progress=n-i.start,i.percent=i.progress>=i.duration?1:e(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?r.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:r.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var a=t.bind(null,e,r);hd.call(window,a);return}nr.default.registered.end&&nr.default.registered.end(i.to,i.target,i.currentPosition)},Xf=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},Qa=function(e,r,n,i){if(r.data=r.data||C0(),window.clearTimeout(r.data.delayTimeout),XT.default.subscribe(function(){r.data.cancel=!0}),Xf(r),r.data.start=null,r.data.cancel=!1,r.data.startPosition=r.horizontal?_0(r):R0(r),r.data.targetPosition=r.absolute?e:e+r.data.startPosition,r.data.startPosition===r.data.targetPosition){nr.default.registered.end&&nr.default.registered.end(r.data.to,r.data.target,r.data.currentPosition);return}r.data.delta=Math.round(r.data.targetPosition-r.data.startPosition),r.data.duration=JT(r.duration)(r.data.delta),r.data.duration=isNaN(parseFloat(r.data.duration))?1e3:parseFloat(r.data.duration),r.data.to=n,r.data.target=i;var a=k0(r),o=rP.bind(null,a,r);if(r&&r.delay>0){r.data.delayTimeout=window.setTimeout(function(){nr.default.registered.begin&&nr.default.registered.begin(r.data.to,r.data.target),hd.call(window,o)},r.delay);return}nr.default.registered.begin&&nr.default.registered.begin(r.data.to,r.data.target),hd.call(window,o)},Ls=function(e){return e=qT({},e),e.data=e.data||C0(),e.absolute=!0,e},nP=function(e){Qa(0,Ls(e))},iP=function(e,r){Qa(e,Ls(r))},aP=function(e){e=Ls(e),Xf(e),Qa(e.horizontal?eP(e):tP(e),e)},oP=function(e,r){r=Ls(r),Xf(r);var n=r.horizontal?_0(r):R0(r);Qa(e+n,r)};Os.default={animateTopScroll:Qa,getAnimationType:k0,scrollToTop:nP,scrollToBottom:aP,scrollTo:iP,scrollMore:oP};Object.defineProperty(hi,"__esModule",{value:!0});var lP=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},sP=Ga,uP=Yf(sP),cP=Os,dP=Yf(cP),fP=Ka,ko=Yf(fP);function Yf(t){return t&&t.__esModule?t:{default:t}}var Co={},Ih=void 0;hi.default={unmount:function(){Co={}},register:function(e,r){Co[e]=r},unregister:function(e){delete Co[e]},get:function(e){return Co[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return Ih=e},getActiveLink:function(){return Ih},scrollTo:function(e,r){var n=this.get(e);if(!n){console.warn("target Element not found");return}r=lP({},r,{absolute:!1});var i=r.containerId,a=r.container,o=void 0;i?o=document.getElementById(i):a&&a.nodeType?o=a:o=document,r.absolute=!0;var l=r.horizontal,u=uP.default.scrollOffset(o,n,l)+(r.offset||0);if(!r.smooth){ko.default.registered.begin&&ko.default.registered.begin(e,n),o===document?r.horizontal?window.scrollTo(u,0):window.scrollTo(0,u):o.scrollTop=u,ko.default.registered.end&&ko.default.registered.end(e,n);return}dP.default.animateTopScroll(u,r,e,n)}};var Ms={};Object.defineProperty(Ms,"__esModule",{value:!0});var pP=Ga,Uu=mP(pP);function mP(t){return t&&t.__esModule?t:{default:t}}var hP={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,r){this.containers[e]=r},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,r=this.getHash();r?window.setTimeout(function(){e.scrollTo(r,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,r){var n=this.scroller,i=n.get(e);if(i&&(r||e!==n.getActiveLink())){var a=this.containers[e]||document;n.scrollTo(e,{container:a})}},getHash:function(){return Uu.default.getHash()},changeHash:function(e,r){this.isInitialized()&&Uu.default.getHash()!==e&&Uu.default.updateHash(e,r)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Ms.default=hP;Object.defineProperty(Ha,"__esModule",{value:!0});var _o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},gP=function(){function t(e,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),vP=d.exports,Ah=Xa(vP),yP=Ua,Ro=Xa(yP),bP=hi,xP=Xa(bP),wP=Ta.exports,Ge=Xa(wP),EP=Ms,Sr=Xa(EP);function Xa(t){return t&&t.__esModule?t:{default:t}}function SP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function kP(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function CP(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Oh={to:Ge.default.string.isRequired,containerId:Ge.default.string,container:Ge.default.object,activeClass:Ge.default.string,activeStyle:Ge.default.object,spy:Ge.default.bool,horizontal:Ge.default.bool,smooth:Ge.default.oneOfType([Ge.default.bool,Ge.default.string]),offset:Ge.default.number,delay:Ge.default.number,isDynamic:Ge.default.bool,onClick:Ge.default.func,duration:Ge.default.oneOfType([Ge.default.number,Ge.default.func]),absolute:Ge.default.bool,onSetActive:Ge.default.func,onSetInactive:Ge.default.func,ignoreCancelEvents:Ge.default.bool,hashSpy:Ge.default.bool,saveHashHistory:Ge.default.bool,spyThrottle:Ge.default.number};Ha.default=function(t,e){var r=e||xP.default,n=function(a){CP(o,a);function o(l){SP(this,o);var u=kP(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,l));return i.call(u),u.state={active:!1},u}return gP(o,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,c=this.props.container;return u&&!c?document.getElementById(u):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();Ro.default.isMounted(u)||Ro.default.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Sr.default.isMounted()||Sr.default.mount(r),Sr.default.mapContainer(this.props.to,u)),Ro.default.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){Ro.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var c={};this.state&&this.state.active?c=_o({},this.props.style,this.props.activeStyle):c=_o({},this.props.style);var f=_o({},this.props);for(var v in Oh)f.hasOwnProperty(v)&&delete f[v];return f.className=u,f.style=c,f.onClick=this.handleClick,Ah.default.createElement(t,f)}}]),o}(Ah.default.PureComponent),i=function(){var o=this;this.scrollTo=function(l,u){r.scrollTo(l,_o({},o.state,u))},this.handleClick=function(l){o.props.onClick&&o.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),o.scrollTo(o.props.to,o.props)},this.spyHandler=function(l,u){var c=o.getScrollSpyContainer();if(!(Sr.default.isMounted()&&!Sr.default.isInitialized())){var f=o.props.horizontal,v=o.props.to,h=null,b=void 0,w=void 0;if(f){var y=0,m=0,p=0;if(c.getBoundingClientRect){var g=c.getBoundingClientRect();p=g.left}if(!h||o.props.isDynamic){if(h=r.get(v),!h)return;var x=h.getBoundingClientRect();y=x.left-p+l,m=y+x.width}var E=l-o.props.offset;b=E>=Math.floor(y)&&E<Math.floor(m),w=E<Math.floor(y)||E>=Math.floor(m)}else{var _=0,S=0,P=0;if(c.getBoundingClientRect){var N=c.getBoundingClientRect();P=N.top}if(!h||o.props.isDynamic){if(h=r.get(v),!h)return;var k=h.getBoundingClientRect();_=k.top-P+u,S=_+k.height}var R=u-o.props.offset;b=R>=Math.floor(_)&&R<Math.floor(S),w=R<Math.floor(_)||R>=Math.floor(S)}var M=r.getActiveLink();if(w){if(v===M&&r.setActiveLink(void 0),o.props.hashSpy&&Sr.default.getHash()===v){var F=o.props.saveHashHistory,q=F===void 0?!1:F;Sr.default.changeHash("",q)}o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive(v,h))}if(b&&(M!==v||o.state.active===!1)){r.setActiveLink(v);var U=o.props.saveHashHistory,J=U===void 0?!1:U;o.props.hashSpy&&Sr.default.changeHash(v,J),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(v,h))}}}};return n.propTypes=Oh,n.defaultProps={offset:0},n};Object.defineProperty(Gf,"__esModule",{value:!0});var _P=d.exports,jh=T0(_P),RP=Ha,TP=T0(RP);function T0(t){return t&&t.__esModule?t:{default:t}}function PP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Lh(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function $P(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var NP=function(t){$P(e,t);function e(){var r,n,i,a;PP(this,e);for(var o=arguments.length,l=Array(o),u=0;u<o;u++)l[u]=arguments[u];return a=(n=(i=Lh(this,(r=e.__proto__||Object.getPrototypeOf(e)).call.apply(r,[this].concat(l))),i),i.render=function(){return jh.default.createElement("a",i.props,i.props.children)},n),Lh(i,a)}return e}(jh.default.Component);Gf.default=(0,TP.default)(NP);var Jf={};Object.defineProperty(Jf,"__esModule",{value:!0});var IP=function(){function t(e,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),AP=d.exports,Mh=P0(AP),OP=Ha,jP=P0(OP);function P0(t){return t&&t.__esModule?t:{default:t}}function LP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function MP(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function FP(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var DP=function(t){FP(e,t);function e(){return LP(this,e),MP(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return IP(e,[{key:"render",value:function(){return Mh.default.createElement("input",this.props,this.props.children)}}]),e}(Mh.default.Component);Jf.default=(0,jP.default)(DP);var Zf={},Fs={};Object.defineProperty(Fs,"__esModule",{value:!0});var zP=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},BP=function(){function t(e,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),VP=d.exports,Fh=Ds(VP),WP=Qt.exports;Ds(WP);var HP=hi,Dh=Ds(HP),UP=Ta.exports,zh=Ds(UP);function Ds(t){return t&&t.__esModule?t:{default:t}}function qP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function GP(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function KP(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Fs.default=function(t){var e=function(r){KP(n,r);function n(i){qP(this,n);var a=GP(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,i));return a.childBindings={domNode:null},a}return BP(n,[{key:"componentDidMount",value:function(){if(typeof window=="undefined")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(a){this.props.name!==a.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window=="undefined")return!1;Dh.default.unregister(this.props.name)}},{key:"registerElems",value:function(a){Dh.default.register(a,this.childBindings.domNode)}},{key:"render",value:function(){return Fh.default.createElement(t,zP({},this.props,{parentBindings:this.childBindings}))}}]),n}(Fh.default.Component);return e.propTypes={name:zh.default.string,id:zh.default.string},e};Object.defineProperty(Zf,"__esModule",{value:!0});var Bh=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},QP=function(){function t(e,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),XP=d.exports,Vh=ep(XP),YP=Fs,JP=ep(YP),ZP=Ta.exports,Wh=ep(ZP);function ep(t){return t&&t.__esModule?t:{default:t}}function e5(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function t5(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function r5(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var $0=function(t){r5(e,t);function e(){return e5(this,e),t5(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return QP(e,[{key:"render",value:function(){var n=this,i=Bh({},this.props);return i.parentBindings&&delete i.parentBindings,Vh.default.createElement("div",Bh({},i,{ref:function(o){n.props.parentBindings.domNode=o}}),this.props.children)}}]),e}(Vh.default.Component);$0.propTypes={name:Wh.default.string,id:Wh.default.string};Zf.default=(0,JP.default)($0);var qu=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Hh=function(){function t(e,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();function Uh(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function qh(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Gh(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var To=d.exports,Jr=Ua,Gu=hi,Ze=Ta.exports,kr=Ms,Kh={to:Ze.string.isRequired,containerId:Ze.string,container:Ze.object,activeClass:Ze.string,spy:Ze.bool,smooth:Ze.oneOfType([Ze.bool,Ze.string]),offset:Ze.number,delay:Ze.number,isDynamic:Ze.bool,onClick:Ze.func,duration:Ze.oneOfType([Ze.number,Ze.func]),absolute:Ze.bool,onSetActive:Ze.func,onSetInactive:Ze.func,ignoreCancelEvents:Ze.bool,hashSpy:Ze.bool,spyThrottle:Ze.number},n5={Scroll:function(e,r){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=r||Gu,i=function(o){Gh(l,o);function l(u){Uh(this,l);var c=qh(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,u));return a.call(c),c.state={active:!1},c}return Hh(l,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,f=this.props.container;return c?document.getElementById(c):f&&f.nodeType?f:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();Jr.isMounted(c)||Jr.mount(c,this.props.spyThrottle),this.props.hashSpy&&(kr.isMounted()||kr.mount(n),kr.mapContainer(this.props.to,c)),this.props.spy&&Jr.addStateHandler(this.stateHandler),Jr.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){Jr.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var f=qu({},this.props);for(var v in Kh)f.hasOwnProperty(v)&&delete f[v];return f.className=c,f.onClick=this.handleClick,To.createElement(e,f)}}]),l}(To.Component),a=function(){var l=this;this.scrollTo=function(u,c){n.scrollTo(u,qu({},l.state,c))},this.handleClick=function(u){l.props.onClick&&l.props.onClick(u),u.stopPropagation&&u.stopPropagation(),u.preventDefault&&u.preventDefault(),l.scrollTo(l.props.to,l.props)},this.stateHandler=function(){n.getActiveLink()!==l.props.to&&(l.state!==null&&l.state.active&&l.props.onSetInactive&&l.props.onSetInactive(),l.setState({active:!1}))},this.spyHandler=function(u){var c=l.getScrollSpyContainer();if(!(kr.isMounted()&&!kr.isInitialized())){var f=l.props.to,v=null,h=0,b=0,w=0;if(c.getBoundingClientRect){var y=c.getBoundingClientRect();w=y.top}if(!v||l.props.isDynamic){if(v=n.get(f),!v)return;var m=v.getBoundingClientRect();h=m.top-w+u,b=h+m.height}var p=u-l.props.offset,g=p>=Math.floor(h)&&p<Math.floor(b),x=p<Math.floor(h)||p>=Math.floor(b),E=n.getActiveLink();if(x)return f===E&&n.setActiveLink(void 0),l.props.hashSpy&&kr.getHash()===f&&kr.changeHash(),l.props.spy&&l.state.active&&(l.setState({active:!1}),l.props.onSetInactive&&l.props.onSetInactive()),Jr.updateStates();if(g&&E!==f)return n.setActiveLink(f),l.props.hashSpy&&kr.changeHash(f),l.props.spy&&(l.setState({active:!0}),l.props.onSetActive&&l.props.onSetActive(f)),Jr.updateStates()}}};return i.propTypes=Kh,i.defaultProps={offset:0},i},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var r=function(n){Gh(i,n);function i(a){Uh(this,i);var o=qh(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,a));return o.childBindings={domNode:null},o}return Hh(i,[{key:"componentDidMount",value:function(){if(typeof window=="undefined")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window=="undefined")return!1;Gu.unregister(this.props.name)}},{key:"registerElems",value:function(o){Gu.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return To.createElement(e,qu({},this.props,{parentBindings:this.childBindings}))}}]),i}(To.Component);return r.propTypes={name:Ze.string,id:Ze.string},r}},i5=n5;Object.defineProperty(it,"__esModule",{value:!0});it.Helpers=it.ScrollElement=it.ScrollLink=it.animateScroll=it.scrollSpy=it.Events=it.scroller=it.Element=it.Button=B0=it.Link=void 0;var a5=Gf,N0=cr(a5),o5=Jf,I0=cr(o5),l5=Zf,A0=cr(l5),s5=hi,O0=cr(s5),u5=Ka,j0=cr(u5),c5=Ua,L0=cr(c5),d5=Os,M0=cr(d5),f5=Ha,F0=cr(f5),p5=Fs,D0=cr(p5),m5=i5,z0=cr(m5);function cr(t){return t&&t.__esModule?t:{default:t}}var B0=it.Link=N0.default;it.Button=I0.default;it.Element=A0.default;it.scroller=O0.default;it.Events=j0.default;it.scrollSpy=L0.default;it.animateScroll=M0.default;it.ScrollLink=F0.default;it.ScrollElement=D0.default;it.Helpers=z0.default;it.default={Link:N0.default,Button:I0.default,Element:A0.default,scroller:O0.default,Events:j0.default,scrollSpy:L0.default,animateScroll:M0.default,ScrollLink:F0.default,ScrollElement:D0.default,Helpers:z0.default};const h5=Ts(t=>({root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontFamily:"Nunito"},colorText:{color:"#3f51b5"},container:{textAlign:"center",fontSize:"3vw"},title:{fontSize:"4.5rem"},goDown:{color:"#3f51b5",fontSize:"4rem"}}));function g5(){const t=h5(),[e,r]=d.exports.useState(!1);return d.exports.useEffect(()=>{r(!0)},[]),s.createElement("div",{className:t.root,id:"header"},s.createElement(s_,{in:e,...e?{timeout:1e3}:{},collapsedSize:50},s.createElement("div",{className:t.container},s.createElement("h1",{className:t.title},"Learn ",s.createElement("br",null),"with ",s.createElement("span",{className:t.colorText},"Visualization.")),s.createElement(B0,{to:"Features",smooth:!0},s.createElement(d_,null,s.createElement(E0,{className:t.goDown}))))))}function v5(t){const[e,r]=d.exports.useState(!1);return d.exports.useLayoutEffect(()=>{function n(){const i=window.document.getElementById(t).offsetHeight;window.pageYOffset>i*.7&&r(!0)}return window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)},[t]),e}var y5="/assets/background.5f004be4.jpeg",Po="/assets/sortingimg.6af69d3e.png";const b5=Ts(t=>({root:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",background:"white"},Title:{fontFamily:"Nunito",fontSize:"2rem"},colorText:{color:"#3f51b5"},featureBody:{width:"80%"},cardcss:{minHeight:"100%"},scrollbtn:{marginTop:"2rem"},goDown:{color:"#3f51b5",fontSize:"4rem"},complexitySec:{marginTop:"2rem",display:"flex",justifyContent:"center"},complexityImg:{width:"100%",height:"auto"}}));function x5(){const t=b5();return v5("header"),s.createElement("div",{className:t.root,id:"Features"},s.createElement("div",{className:t.Title},s.createElement("h1",{className:t.colorText},"Features")),s.createElement(re,{container:!0,spacing:1,className:t.featureBody},s.createElement(re,{item:!0,xs:12,sm:3},s.createElement(Ve,{sx:{maxWidth:345},className:t.cardcss},s.createElement(go,null,s.createElement(yo,{component:"img",height:"140",image:Po,alt:"green iguana"}),s.createElement(vo,null,s.createElement(Er,{gutterBottom:!0,variant:"h5",component:"div"},"Sorting"),s.createElement(Er,{variant:"body2"},s.createElement("ul",null,s.createElement("li",null,"Bubble Sort"),s.createElement("li",null,"Selection Sort"),s.createElement("li",null,"Insertion Sort"),s.createElement("li",null,"Heap Sort"),s.createElement("li",null,"Merge Sort"),s.createElement("li",null,"Quick Sort"))))))),s.createElement(re,{item:!0,xs:12,sm:3},s.createElement(Ve,{sx:{maxWidth:345},className:t.cardcss},s.createElement(go,null,s.createElement(yo,{component:"img",height:"140",image:Po,alt:"green iguana"}),s.createElement(vo,null,s.createElement(Er,{gutterBottom:!0,variant:"h5",component:"div"},"Searching"),s.createElement(Er,{variant:"body2"},s.createElement("ul",null,s.createElement("li",null,"Linear Search"),s.createElement("li",null,"Binary Search"))))))),s.createElement(re,{item:!0,xs:12,sm:3},s.createElement(Ve,{sx:{maxWidth:345},className:t.cardcss},s.createElement(go,null,s.createElement(yo,{component:"img",height:"140",image:Po,alt:"green iguana"}),s.createElement(vo,null,s.createElement(Er,{gutterBottom:!0,variant:"h5",component:"div"},"Data Structure"),s.createElement(Er,{variant:"body2"},s.createElement("ul",null,s.createElement("li",null,"Array"),s.createElement("li",null,"Stack"),s.createElement("li",null,"Queue"),s.createElement("li",null,"Linked List"),s.createElement("li",null,"Tree"))))))),s.createElement(re,{item:!0,xs:12,sm:3},s.createElement(Ve,{sx:{maxWidth:345},className:t.cardcss},s.createElement(go,null,s.createElement(yo,{component:"img",height:"140",image:Po,alt:"green iguana"}),s.createElement(vo,null,s.createElement(Er,{gutterBottom:!0,variant:"h5",component:"div"},"Other Algorithms"),s.createElement(Er,{variant:"body2"},s.createElement("ul",null,s.createElement("li",null,"Breath First Search"),s.createElement("li",null,"Depth First Search"),s.createElement("li",null,"Dijkstra's Algorithm"),s.createElement("li",null,"Kruskal's Algorithm"),s.createElement("li",null,"Primm's Algorithm")))))))),s.createElement("div",{className:t.complexitySec},s.createElement("img",{src:y5,alt:"",className:t.complexityImg})))}const w5=Ts(t=>({root:{minHeight:"100vh"}}));function E5(){const t=w5();return s.createElement("div",{className:t.root},s.createElement(N_,null),s.createElement(g5,null),s.createElement(x5,null))}const V0=de.div`
  display: flex;
  height: 175px;
  align-items: center;
  padding: 15px;
  overflow: auto;
`,gi=de.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 50px;
  height: 50px;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  flex-shrink: 0;
`,S5=(t,e)=>ws`
  0%{
    background-color: ${e};
  }
  10%{
    transform: translate(0px, 0px);
    background-color: ${e};
  }
  30% {
    transform: translate(0px, -50px);
    background-color: ${e};
  }
  70% {
    transform: translate(-${t*50}px, -50px);
    background-color: ${e};
  }
  99% {
    transform: translate(-${t*50}px, 0px);
    background-color: ${e};
  }
  100%{
    transform: translate(-${t*50}px, 0px);
  }
`,k5=()=>ws`
  0%{
    transform: translate(0px, 0px);
  }
  100%{
    transform: translate(50px, 0px);
  }
`,C5=(t,e)=>ws`
  0%{
    background-color: ${e};
  }
  40%{
    transform: translate(0px, 0px);
    background-color: ${e};
  }
  60% {
    transform: translate(0px, 50px);
    background-color: ${e};
  }
  80% {
    transform: translate(-${t*50}px, 50px);
    background-color: ${e};
  }
  99% {
    transform: translate(-${t*50}px, 0px);
    background-color: ${e};
  }
  100%{
    transform: translate(-${t*50}px, 0px);
    background-color: none;
  }
`,_5=(t,e)=>ws`
  0%{
    background-color: ${e};
  }
  40%{
    transform: translate(0px, 0px);
    background-color: ${e};
  }
  60% {
    transform: translate(0px, -50px);
    background-color: ${e};
  }
  80% {
    transform: translate(${t*50}px, -50px);
    background-color: ${e};
  }
  99% {
    transform: translate(${t*50}px, 0px);
    background-color: ${e};
  }
  100%{
    transform: translate(${t*50}px, 0px);
    background-color: none;
  }
`;let tp=ut.getState().swapTime;ut.subscribe(t=>tp=t,t=>t.swapTime);const R5=de(gi)`
  animation: ${t=>C5(t.distance,zf)}
    ${()=>tp/1e3}s forwards;
`,T5=de(gi)`
  animation: ${t=>_5(t.distance,zf)}
    ${()=>tp/1e3}s forwards;
`;function W0({array:t,source:e,destination:r,pivot:n=-1,highlightIndices:i,sortedIndices:a}){function o(l){return l===n?H2:i.includes(l)?Xy:a.includes(l)?Yy:""}return s.createElement(V0,null,t.map((l,u)=>u===e?s.createElement(R5,{key:u+":"+e+":"+r+":"+l,distance:r-e,style:{order:r,backgroundColor:o(u)}},l):u===r?s.createElement(T5,{key:u+":"+r+":"+e+":"+l,distance:r-e,style:{order:e,backgroundColor:o(u)}},l):s.createElement(gi,{key:u+":"+r+":"+e+":"+l,style:{order:u,backgroundColor:o(u)}},l)))}let rp=ut.getState().swapTime;ut.subscribe(t=>rp=t,t=>t.swapTime);const P5=de(gi)`
  animation: ${t=>S5(t.distance,zf)}
    ${()=>rp/1e3}s forwards;
`,$5=de(gi)`
  animation: ${k5()} ${()=>rp/1e3}s forwards;
`,N5=(t,e,r)=>{t(n=>{const i=[...n],a=i[e];for(let o=e;o>r;o--)i[o]=i[o-1];return i[r]=a,i})};function H0({array:t,source:e,destination:r,hightlightedIndices:n,sortedIndices:i}){const[a,o]=d.exports.useState([...t]);d.exports.useEffect(()=>{e!==-1&&r!==-1&&N5(o,e,r)},[e,r]),d.exports.useEffect(()=>{o([...t])},[t]);function l(u){return i.includes(u)?Yy:n.includes(u)?Xy:""}return s.createElement(s.Fragment,null,s.createElement(V0,null,a.map((u,c)=>c===r?s.createElement(P5,{key:c+":"+u,style:{order:e+1,backgroundColor:l(c)},distance:e-r},u):c>r&&c<=e?s.createElement($5,{key:c+":"+u,style:{order:c,backgroundColor:l(c),transform:"translate(50px)"}},u):s.createElement(gi,{key:c+":"+u,style:{order:c,backgroundColor:l(c)}},u))))}const I5=de.div`
  display: flex;
  justify-content: space-between;
`;function U0({swapCount:t,comparisionCount:e,children:r}){return s.createElement(I5,null,s.createElement("div",null,"Swaps: ",s.createElement("strong",null,t)),s.createElement("div",null,"Comparisions: ",s.createElement("strong",null,e)))}function q0({isAlgoExecutionOver:t}){const[e,r]=d.exports.useState(0),[n,i]=d.exports.useState(0),[a,o]=d.exports.useState(0),l=ut(c=>c.progress);function u(){o(0),i(0),r(0)}return d.exports.useEffect(()=>{if(!t){if(l==="start")var c=setInterval(()=>o(f=>f+1),100);else l==="reset"&&u();return()=>clearInterval(c)}},[l,t]),d.exports.useEffect(()=>{a===10&&(i(c=>c+1),o(0))},[a]),d.exports.useEffect(()=>{n===60&&(r(c=>c+1),i(0))},[n]),`${e.toString().padStart(2,0)}:${n.toString().padStart(2,0)}:${a} s`}let G0=ut.getState().compareTime,gd=ut.getState().swapTime;ut.subscribe(([t,e])=>{G0=t,gd=e},t=>[t.compareTime,t.swapTime],We);const Qh=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
`,Xh=de.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
`,A5=de.div`
  display: flex;
  column-gap: 5px;
  min-width: 8rem;
  justify-content: flex-end;
`,Yh=s.memo(function({array:t,sortFunction:e,sortingAlgorithmName:r}){const[n,i]=d.exports.useState([-1,-1]),[a,o]=d.exports.useState([-1,-1]),l=d.exports.useRef([]),u=d.exports.useRef([]),c=d.exports.useRef(-1),f=d.exports.useRef(0),v=d.exports.useRef(0),h=d.exports.useRef(!1),b=d.exports.useRef(!1),w=ut(R=>R.markSortngDone),y=d.exports.useRef(""),m=d.exports.useRef(null);async function p(){l.current=[...Le.getState().sortingArray],u.current=[],c.current=-1,f.current=0,v.current=0,h.current=!1,i([-1,-1]),o([-1,-1]),m.current=r==="MergeSort"?await e(l.current,_,S,P):await e(l.current,x,S,P),m.current=(r=="LinearSearch",await e(l.current,E,S,P)),m.current=(r=="BubbleSort",await e(l.current,x,S,P))}d.exports.useEffect(()=>(y.current=ut.getState().progress,ut.subscribe(R=>{y.current=R,y.current==="start"&&g(),y.current==="reset"&&p()},R=>R.progress),()=>{b.current=!0}),[]),d.exports.useEffect(()=>{p()},[t]);async function g(){var M;let R={done:!1};for(;!(R!=null&&R.done)&&y.current==="start"&&!b.current;)R=await((M=m.current)==null?void 0:M.next());b.current||!h.current&&(R==null?void 0:R.done)&&(h.current=!0,c.current=-1,i([-1,-1]),o([-1,-1]),w())}async function x(R,M){let F=l.current[R];l.current[R]=l.current[M],l.current[M]=F,i([R,M]),c.current=-1,f.current+=1,await Qn(gd)}function E(){return Le.getState().searchingElement}async function _(R,M){R!==M&&(f.current+=1,o([-1,-1]),i([R,M]),await Qn(gd))}async function S(R,M){i([-1,-1]),v.current+=1,c.current=M,o(R),await Qn(G0)}function P(...R){u.current.push(...R)}const N=s.createElement(H0,{array:l.current,source:n[0],destination:n[1],hightlightedIndices:a,sortedIndices:u.current}),k=s.createElement(W0,{array:l.current,source:n[0],destination:n[1],pivot:c.current,highlightIndices:a,sortedIndices:u.current});return r=="Array"?s.createElement(s.Fragment,null,s.createElement(Qh,null,s.createElement(Xh,null,s.createElement("strong",null,r)),r==="MergeSort"?N:k)):s.createElement(s.Fragment,null,s.createElement(Qh,null,s.createElement(Xh,null,s.createElement("strong",null,r),s.createElement(A5,null,s.createElement("span",null,"Time:"),s.createElement("strong",null,s.createElement(q0,{isAlgoExecutionOver:h.current})))),r==="MergeSort"?N:k,s.createElement(U0,{swapCount:f.current,comparisionCount:v.current})))});let K0=ut.getState().compareTime,Q0=ut.getState().swapTime;ut.subscribe(([t,e])=>{K0=t,Q0=e},t=>[t.compareTime,t.swapTime],We);const O5=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
`,j5=de.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
`,L5=de.div`
  display: flex;
  column-gap: 5px;
  min-width: 8rem;
  justify-content: flex-end;
`,M5=s.memo(function({array:t,sortFunction:e,sortingAlgorithmName:r}){const[n,i]=d.exports.useState([-1,-1]),[a,o]=d.exports.useState([-1,-1]),l=d.exports.useRef([]),u=d.exports.useRef([]),c=d.exports.useRef(-1),f=d.exports.useRef(0),v=d.exports.useRef(0),h=d.exports.useRef(!1),b=d.exports.useRef(!1),w=ut(k=>k.markSortngDone),y=d.exports.useRef(""),m=d.exports.useRef(null);async function p(){l.current=[...Le.getState().sortingArray],u.current=[],c.current=-1,f.current=0,v.current=0,h.current=!1,i([-1,-1]),o([-1,-1]),m.current=(r=="LinearSearch",await e(l.current,E,_,S))}d.exports.useEffect(()=>(y.current=ut.getState().progress,ut.subscribe(k=>{y.current=k,y.current==="start"&&g(),y.current==="reset"&&p()},k=>k.progress),()=>{b.current=!0}),[]),d.exports.useEffect(()=>{p()},[t]);async function g(){var R;let k={done:!1};for(;!(k!=null&&k.done)&&y.current==="start"&&!b.current;)k=await((R=m.current)==null?void 0:R.next());b.current||!h.current&&(k==null?void 0:k.done)&&(h.current=!0,c.current=-1,i([-1,-1]),o([-1,-1]),w())}async function x(k,R){let M=l.current[k];l.current[k]=l.current[R],l.current[R]=M,i([k,R]),c.current=-1,f.current+=1,await Qn(Q0)}function E(){return Le.getState().searchingElement}async function _(k,R){i([-1,-1]),v.current+=1,c.current=R,o(k),await Qn(K0)}function S(...k){u.current.push(...k)}const P=s.createElement(H0,{array:l.current,source:n[0],destination:n[1],hightlightedIndices:a,sortedIndices:u.current}),N=s.createElement(W0,{array:l.current,source:n[0],destination:n[1],pivot:c.current,highlightIndices:a,sortedIndices:u.current});return s.createElement(s.Fragment,null,s.createElement(O5,null,s.createElement(j5,null,s.createElement("strong",null,r),s.createElement(L5,null,s.createElement("span",null,"Time:"),s.createElement("strong",null,s.createElement(q0,{isAlgoExecutionOver:h.current})))),r==="MergeSort"?P:N,s.createElement(U0,{swapCount:"--",comparisionCount:v.current})))});var X0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Jh=s.createContext&&s.createContext(X0),Br=globalThis&&globalThis.__assign||function(){return Br=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Br.apply(this,arguments)},F5=globalThis&&globalThis.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r};function Y0(t){return t&&t.map(function(e,r){return s.createElement(e.tag,Br({key:r},e.attr),Y0(e.child))})}function np(t){return function(e){return s.createElement(D5,Br({attr:Br({},t.attr)},e),Y0(t.child))}}function D5(t){var e=function(r){var n=t.attr,i=t.size,a=t.title,o=F5(t,["attr","size","title"]),l=i||r.size||"1em",u;return r.className&&(u=r.className),t.className&&(u=(u?u+" ":"")+t.className),s.createElement("svg",Br({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,o,{className:u,style:Br(Br({color:t.color||r.color},r.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&s.createElement("title",null,a),t.children)};return Jh!==void 0?s.createElement(Jh.Consumer,null,function(r){return e(r)}):e(X0)}function z5(t){return np({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12.75 8a4.5 4.5 0 0 1-8.61 1.834l-1.391.565A6.001 6.001 0 0 0 14.25 8 6 6 0 0 0 3.5 4.334V2.5H2v4l.75.75h3.5v-1.5H4.352A4.5 4.5 0 0 1 12.75 8z"}}]})(t)}function B5(t){return np({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M4.25 3l1.166-.624 8 5.333v1.248l-8 5.334-1.166-.624V3zm1.5 1.401v7.864l5.898-3.932L5.75 4.401z"}}]})(t)}function Zh(t){return np({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5zM5 5h2v6h-2zM9 5h2v6h-2z"}}]})(t)}const V5=de.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin: 15px 0;
  flex-wrap: wrap;
`,W5=de.div`
  display: flex;
  align-items: center;
  flex-basis: 60%;
  flex-grow: 1;
  min-width: 300px;
`,H5=de.div`
  display: flex;
  align-items: center;
  flex-basis: 40%;
  flex-grow: 1;
`;function Ku(){const[t,e]=d.exports.useState(!1),[r,n]=ut(k=>[k.progress,k.speed],We),[i,a,o,l,u]=Le(k=>[k.sortingArray,k.setSortingArray,k.searchingElement,k.setSearchingElement,k.tabTitle],We),[c,f,v,h]=ut(k=>[k.startSorting,k.pauseSorting,k.resetSorting,k.setSpeed],We),[b,w]=d.exports.useState(i),[y,m]=d.exports.useState(l);l(y);const p=s.createElement(B5,{onClick:c}),g=s.createElement(Zh,{onClick:_}),x=s.createElement(z5,{onClick:v}),E=s.createElement(Zh,{style:{color:"#e5e5e5"}});async function _(){f(),e(!0),await Qn(ut.getState().swapTime),e(!1)}function S(k){const R=O2(k);w(R);const M=j2(R);a(M),v()}function P(){const k=L2();w(k),a(k),v()}function N(){if(t)return E;switch(r){case"reset":return p;case"start":return g;case"pause":return p;case"done":return E}}return s.createElement(V5,null,s.createElement(W5,null,s.createElement(y_,{variant:"contained",color:"primary",onClick:P},"Generate"),s.createElement(Th,{id:"outlined-basic",label:"Input",variant:"outlined",onChange:k=>S(k.target.value),value:b,size:"small",width:"100px",style:{flexGrow:1,margin:"0 10px"}}),u==2?s.createElement(Th,{label:"Search Element",variant:"outlined",onChange:k=>m(k.target.value),value:y,size:"small"}):s.createElement(s.Fragment,null)),u==3?s.createElement(s.Fragment,null):s.createElement(H5,null,s.createElement(oT,{key:`slider-${n}`,defaultValue:n,onChange:(k,R)=>h(R),"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:!0,min:1,max:10,style:{flexGrow:1,flexBasis:"100%"}}),s.createElement("div",{style:{display:"flex",marginLeft:"20px",columnGap:"5px"}},N(),x)))}de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const eg=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;function $o(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function U5(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(eg,null,s.createElement("h2",null,"Bubble sort:"),s.createElement("p",null,"Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are in the intended order. Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort."),s.createElement("h4",null," Working of Bubble Sort:"),s.createElement("p",null,"1. First Iteration (Compare and Swap)",s.createElement("br",null),s.createElement("br",null),"\u2022 Starting from the first index, compare the first and the second elements.",s.createElement("br",null),"\u2022 If the first element is greater than the second element, they are swapped.",s.createElement("br",null),"\u2022 Now, compare the second and the third elements. Swap them if they are not in order.",s.createElement("br",null),"\u2022 The above process goes on until the last element."),s.createElement("p",null,"2. Remaining Iteration",s.createElement("br",null),s.createElement("br",null),"\u2022 The same process goes on for the remaining iterations.",s.createElement("br",null),"\u2022 After each iteration, the largest element among the unsorted elements is placed at the end.",s.createElement("br",null),"\u2022 In each iteration, the comparison takes place up to the last unsorted element.",s.createElement("br",null),"\u2022 The array is sorted when all the unsorted elements are placed at their correct positions."))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(eg,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement($o,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# Python program for implementation of Bubble Sort
def bubbleSort(arr):
n = len(arr)
 
# Traverse through all array elements
for i in range(n):
 
    # Last i elements are already in place
    for j in range(0, n-i-1):
 
        # traverse the array from 0 to n-i-1
        # Swap if the element found is greater
        # than the next element
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
 
# Driver code to test above
if __name__ == "__main__":
  arr = [64, 34, 25, 12, 22, 11, 90]
 
  bubbleSort(arr)
                `))),s.createElement($o,{value:t,index:1,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`// C program for implementation of Bubble sort
#include <stdio.h>

void swap(int* xp, int* yp)
{
	int temp = *xp;
	*xp = *yp;
	*yp = temp;
}

// A function to implement bubble sort
void bubbleSort(int arr[], int n)
{
	int i, j;
	for (i = 0; i < n - 1; i++)

		// Last i elements are already in place
		for (j = 0; j < n - i - 1; j++)
			if (arr[j] > arr[j + 1])
				swap(&arr[j], &arr[j + 1]);
}

/* Function to print an array */
void printArray(int arr[], int size)
{
	int i;
	for (i = 0; i < size; i++)
		printf("%d ", arr[i]);
	printf("
");
}

// Driver program to test above functions
int main()
{
	int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
	int n = sizeof(arr) / sizeof(arr[0]);
	bubbleSort(arr, n);
	printf("Sorted array: 
");
	printArray(arr, n);
	return 0;
}
`))),s.createElement($o,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C++ program for implementation
// of Bubble sort
#include <bits/stdc++.h>
using namespace std;

// A function to implement bubble sort
void bubbleSort(int arr[], int n)
{
	int i, j;
	for (i = 0; i < n - 1; i++)

		// Last i elements are already
		// in place
		for (j = 0; j < n - i - 1; j++)
			if (arr[j] > arr[j + 1])
				swap(arr[j], arr[j + 1]);
}

// Function to print an array
void printArray(int arr[], int size)
{
	int i;
	for (i = 0; i < size; i++)
		cout << arr[i] << " ";
	cout << endl;
}

// Driver code
int main()
{
	int arr[] = { 5, 1, 4, 2, 8};
	int N = sizeof(arr) / sizeof(arr[0]);
	bubbleSort(arr, N);
	cout << "Sorted array: 
";
	printArray(arr, N);
	return 0;
}
`))),s.createElement($o,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// Java program for implementation of Bubble Sort
class BubbleSort {
	void bubbleSort(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n - 1; i++)
			for (int j = 0; j < n - i - 1; j++)
				if (arr[j] > arr[j + 1]) {
					// swap arr[j+1] and arr[j]
					int temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
	}

	/* Prints the array */
	void printArray(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n; ++i)
			System.out.print(arr[i] + " ");
		System.out.println();
	}

	// Driver method to test above
	public static void main(String args[])
	{
		BubbleSort ob = new BubbleSort();
		int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
		ob.bubbleSort(arr);
		System.out.println("Sorted array");
		ob.printArray(arr);
	}
}
`))))))}de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const tg=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;function No(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function q5(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(tg,null,s.createElement("h2",null,"Selection sort:"),s.createElement("p",null,"Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list."),s.createElement("h4",null," Working of Selection sort:"),s.createElement("p",null," \u2022	Set the first element as minimum.",s.createElement("br",null),"\u2022	Compare minimum with the second element. If the second element is smaller than minimum, assign the second element as minimum.Compare minimum with the third element. Again, if the third element is smaller, then assign minimum to the third element otherwise do nothing. The process goes on until the last element.",s.createElement("br",null),"\u2022	After each iteration, minimum is placed in the front of the unsorted list.",s.createElement("br",null),"\u2022	For each iteration, indexing starts from the first unsorted element. Step 1 to 3 are repeated until all the elements are placed at their correct positions."))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(tg,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement(No,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# Python program for implementation of Selection
# Sort
import sys
A = [64, 25, 12, 22, 11]

# Traverse through all array elements
for i in range(len(A)):
	
	# Find the minimum element in remaining
	# unsorted array
	min_idx = i
	for j in range(i+1, len(A)):
		if A[min_idx] > A[j]:
			min_idx = j
			
	# Swap the found minimum element with
	# the first element	
	A[i], A[min_idx] = A[min_idx], A[i]

# Driver code to test above
print ("Sorted array")
for i in range(len(A)):
	print("%d" %A[i],end=" ")
`))),s.createElement(No,{value:t,index:1},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C program for implementation of selection sort
#include <stdio.h>

void swap(int *xp, int *yp)
{
	int temp = *xp;
	*xp = *yp;
	*yp = temp;
}

void selectionSort(int arr[], int n)
{
	int i, j, min_idx;

	// One by one move boundary of unsorted subarray
	for (i = 0; i < n-1; i++)
	{
		// Find the minimum element in unsorted array
		min_idx = i;
		for (j = i+1; j < n; j++)
		if (arr[j] < arr[min_idx])
			min_idx = j;

		// Swap the found minimum element with the first element
		if(min_idx != i)
			swap(&arr[min_idx], &arr[i]);
	}
}

/* Function to print an array */
void printArray(int arr[], int size)
{
	int i;
	for (i=0; i < size; i++)
		printf("%d ", arr[i]);
	printf("
");
}

// Driver program to test above functions
int main()
{
	int arr[] = {64, 25, 12, 22, 11};
	int n = sizeof(arr)/sizeof(arr[0]);
	selectionSort(arr, n);
	printf("Sorted array: 
");
	printArray(arr, n);
	return 0;
}
`))),s.createElement(No,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C++ program for implementation of
// selection sort
#include <bits/stdc++.h>
using namespace std;

//Swap function
void swap(int *xp, int *yp)
{
	int temp = *xp;
	*xp = *yp;
	*yp = temp;
}

void selectionSort(int arr[], int n)
{
	int i, j, min_idx;

	// One by one move boundary of
	// unsorted subarray
	for (i = 0; i < n-1; i++)
	{
	
		// Find the minimum element in
		// unsorted array
		min_idx = i;
		for (j = i+1; j < n; j++)
		if (arr[j] < arr[min_idx])
			min_idx = j;

		// Swap the found minimum element
		// with the first element
		if(min_idx!=i)
			swap(&arr[min_idx], &arr[i]);
	}
}

//Function to print an array
void printArray(int arr[], int size)
{
	int i;
	for (i=0; i < size; i++)
		cout << arr[i] << " ";
	cout << endl;
}

// Driver program to test above functions
int main()
{
	int arr[] = {64, 25, 12, 22, 11};
	int n = sizeof(arr)/sizeof(arr[0]);
	selectionSort(arr, n);
	cout << "Sorted array: 
";
	printArray(arr, n);
	return 0;
}
`))),s.createElement(No,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// Java program for implementation of Selection Sort
class SelectionSort
{
	void sort(int arr[])
	{
		int n = arr.length;

		// One by one move boundary of unsorted subarray
		for (int i = 0; i < n-1; i++)
		{
			// Find the minimum element in unsorted array
			int min_idx = i;
			for (int j = i+1; j < n; j++)
				if (arr[j] < arr[min_idx])
					min_idx = j;

			// Swap the found minimum element with the first
			// element
			int temp = arr[min_idx];
			arr[min_idx] = arr[i];
			arr[i] = temp;
		}
	}

	// Prints the array
	void printArray(int arr[])
	{
		int n = arr.length;
		for (int i=0; i<n; ++i)
			System.out.print(arr[i]+" ");
		System.out.println();
	}

	// Driver code to test above
	public static void main(String args[])
	{
		SelectionSort ob = new SelectionSort();
		int arr[] = {64,25,12,22,11};
		ob.sort(arr);
		System.out.println("Sorted array");
		ob.printArray(arr);
	}
}
`))))))}de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const rg=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;function Io(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function G5(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(rg,null,s.createElement("h2",null,"Insertion sort:"),s.createElement("p",null,"Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration."),s.createElement("p",null,"Insertion sort works similarly as we sort cards in our hand in a card game. We assume that the first card is already sorted then, we select an unsorted card. If the unsorted card is greater than the card in hand, it is placed on the right otherwise, to the left. In the same way, other unsorted cards are taken and put in their right place."),s.createElement("h4",null," Working of Insertion Sort:"),s.createElement("p",null,"\u2022	The first element in the array is assumed to be sorted. Take the second element and store it separately in key. Compare key with the first element. If the first element is greater than key, then key is placed in front of the first element.",s.createElement("br",null),"\u2022	Now, the first two elements are sorted. Take the third element and compare it with the elements on the left of it. Placed it just behind the element smaller than it. If there is no element smaller than it, then place it at the beginning of the array.",s.createElement("br",null),"\u2022	Similarly, place every unsorted element at its correct position."))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(rg,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement(Io,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# Python program for implementation of Insertion Sort

# Function to do insertion sort
def insertionSort(arr):

	# Traverse through 1 to len(arr)
	for i in range(1, len(arr)):

		key = arr[i]

		# Move elements of arr[0..i-1], that are
		# greater than key, to one position ahead
		# of their current position
		j = i-1
		while j >= 0 and key < arr[j] :
				arr[j + 1] = arr[j]
				j -= 1
		arr[j + 1] = key


# Driver code to test above
arr = [12, 11, 13, 5, 6]
insertionSort(arr)
for i in range(len(arr)):
	print ("% d" % arr[i])
`))),s.createElement(Io,{value:t,index:1},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C program for insertion sort
#include <math.h>
#include <stdio.h>

/* Function to sort an array using insertion sort*/
void insertionSort(int arr[], int n)
{
	int i, key, j;
	for (i = 1; i < n; i++) {
		key = arr[i];
		j = i - 1;

		/* Move elements of arr[0..i-1], that are
		greater than key, to one position ahead
		of their current position */
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

// A utility function to print an array of size n
void printArray(int arr[], int n)
{
	int i;
	for (i = 0; i < n; i++)
		printf("%d ", arr[i]);
	printf("
");
}

/* Driver program to test insertion sort */
int main()
{
	int arr[] = { 12, 11, 13, 5, 6 };
	int n = sizeof(arr) / sizeof(arr[0]);

	insertionSort(arr, n);
	printArray(arr, n);

	return 0;
}
`))),s.createElement(Io,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C++ program for insertion sort

#include <bits/stdc++.h>
using namespace std;

// Function to sort an array using
// insertion sort
void insertionSort(int arr[], int n)
{
	int i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;

		// Move elements of arr[0..i-1],
		// that are greater than key, to one
		// position ahead of their
		// current position
		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

// A utility function to print an array
// of size n
void printArray(int arr[], int n)
{
	int i;
	for (i = 0; i < n; i++)
		cout << arr[i] << " ";
	cout << endl;
}

// Driver code
int main()
{
	int arr[] = { 12, 11, 13, 5, 6 };
	int N = sizeof(arr) / sizeof(arr[0]);

	insertionSort(arr, N);
	printArray(arr, N);

	return 0;
}
`))),s.createElement(Io,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// Java program for implementation of Insertion Sort
public class InsertionSort {
	/*Function to sort array using insertion sort*/
	void sort(int arr[])
	{
		int n = arr.length;
		for (int i = 1; i < n; ++i) {
			int key = arr[i];
			int j = i - 1;

			/* Move elements of arr[0..i-1], that are
			greater than key, to one position ahead
			of their current position */
			while (j >= 0 && arr[j] > key) {
				arr[j + 1] = arr[j];
				j = j - 1;
			}
			arr[j + 1] = key;
		}
	}

	/* A utility function to print array of size n*/
	static void printArray(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n; ++i)
			System.out.print(arr[i] + " ");

		System.out.println();
	}

	// Driver method
	public static void main(String args[])
	{
		int arr[] = { 12, 11, 13, 5, 6 };

		InsertionSort ob = new InsertionSort();
		ob.sort(arr);

		printArray(arr);
	}
};
`))))))}de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const ng=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;function Ao(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function K5(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(ng,null,s.createElement("h2",null,"Heap sort:"),s.createElement("p",null,"Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort where we first find the minimum element and place the minimum element at the beginning. Repeat the same process for the remaining elements."),s.createElement("h4",null," Working of Heap sort:"),s.createElement("p",null,"In heap sort, basically, there are two phases involved in the sorting of elements. By using the heap sort algorithm, they are as follows -",s.createElement("br",null),"\u2022 The first step includes the creation of a heap by adjusting the elements of the array.",s.createElement("br",null),"\u2022 After the creation of heap, now remove the root element of the heap repeatedly by shifting it to the end of the array, and then store the heap structure with the remaining elements."),s.createElement("p",null,"Heapsort is a popular and efficient sorting algorithm. The concept of heap sort is to eliminate the elements one by one from the heap part of the list, and then insert them into the sorted part of the list.",s.createElement("br",null),"\u2022 Heapsort is the in-place sorting algorithm."))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(ng,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement(Ao,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# Python program for implementation of heap Sort

# To heapify subtree rooted at index i.
# n is size of heap


def heapify(arr, N, i):
	largest = i # Initialize largest as root
	l = 2 * i + 1	 # left = 2*i + 1
	r = 2 * i + 2	 # right = 2*i + 2

	# See if left child of root exists and is
	# greater than root
	if l < N and arr[largest] < arr[l]:
		largest = l

	# See if right child of root exists and is
	# greater than root
	if r < N and arr[largest] < arr[r]:
		largest = r

	# Change root, if needed
	if largest != i:
		arr[i], arr[largest] = arr[largest], arr[i] # swap

		# Heapify the root.
		heapify(arr, N, largest)

# The main function to sort an array of given size


def heapSort(arr):
	N = len(arr)

	# Build a maxheap.
	for i in range(N//2 - 1, -1, -1):
		heapify(arr, N, i)

	# One by one extract elements
	for i in range(N-1, 0, -1):
		arr[i], arr[0] = arr[0], arr[i] # swap
		heapify(arr, i, 0)


# Driver's code
if __name__ == '__main__':
	arr = [12, 11, 13, 5, 6, 7]

	# Function call
	heapSort(arr)
	N = len(arr)

	print("Sorted array is")
	for i in range(N):
		print("%d" % arr[i], end=" ")
`))),s.createElement(Ao,{value:t,index:1},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// Heap Sort in C

#include <stdio.h>

// Function to swap the position of two elements

void swap(int* a, int* b)
{

	int temp = *a;

	*a = *b;

	*b = temp;
}

// To heapify a subtree rooted with node i
// which is an index in arr[].
// n is size of heap
void heapify(int arr[], int N, int i)
{
	// Find largest among root, left child and right child

	// Initialize largest as root
	int largest = i;

	// left = 2*i + 1
	int left = 2 * i + 1;

	// right = 2*i + 2
	int right = 2 * i + 2;

	// If left child is larger than root
	if (left < N && arr[left] > arr[largest])

		largest = left;

	// If right child is larger than largest
	// so far
	if (right < N && arr[right] > arr[largest])

		largest = right;

	// Swap and continue heapifying if root is not largest
	// If largest is not root
	if (largest != i) {

		swap(&arr[i], &arr[largest]);

		// Recursively heapify the affected
		// sub-tree
		heapify(arr, N, largest);
	}
}

// Main function to do heap sort
void heapSort(int arr[], int N)
{

	// Build max heap
	for (int i = N / 2 - 1; i >= 0; i--)

		heapify(arr, N, i);

	// Heap sort
	for (int i = N - 1; i >= 0; i--) {

		swap(&arr[0], &arr[i]);

		// Heapify root element to get highest element at
		// root again
		heapify(arr, i, 0);
	}
}

// A utility function to print array of size n
void printArray(int arr[], int N)
{
	for (int i = 0; i < N; i++)
		printf("%d ", arr[i]);
	printf("
");
}

// Driver's code
int main()
{
	int arr[] = { 12, 11, 13, 5, 6, 7 };
	int N = sizeof(arr) / sizeof(arr[0]);

	// Function call
	heapSort(arr, N);
	printf("Sorted array is
");
	printArray(arr, N);
}
`))),s.createElement(Ao,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C++ program for implementation of Heap Sort                                
#include <iostream>
using namespace std;                                
// To heapify a subtree rooted with node i
// which is an index in arr[].
// n is size of heap
void heapify(int arr[], int N, int i)
{
                                    
    // Initialize largest as root
    int largest = i;
                                    
    // left = 2*i + 1
    int l = 2 * i + 1;
                                    
    // right = 2*i + 2
    int r = 2 * i + 2;
                                    
    // If left child is larger than root
    if (l < N && arr[l] > arr[largest])
    largest = l;
                                    
    // If right child is larger than largest
	// so far
	if (r < N && arr[r] > arr[largest])
    largest = r;
    
	// If largest is not root
	if (largest != i) {
        swap(arr[i], arr[largest]);
        
		// Recursively heapify the affected
		// sub-tree
		heapify(arr, N, largest);
	}
}

// Main function to do heap sort
void heapSort(int arr[], int N)
{
    
    // Build heap (rearrange array)
	for (int i = N / 2 - 1; i >= 0; i--)
    heapify(arr, N, i);
    
	// One by one extract an element
	// from heap
	for (int i = N - 1; i > 0; i--) {
        
        // Move current root to end
		swap(arr[0], arr[i]);
        
		// call max heapify on the reduced heap
		heapify(arr, i, 0);
	}
}

// A utility function to print array of size n
void printArray(int arr[], int N)
{
    for (int i = 0; i < N; ++i)
    cout << arr[i] << " ";
	cout << "
";
}

// Driver's code
int main()
{
    int arr[] = { 12, 11, 13, 5, 6, 7 };
	int N = sizeof(arr) / sizeof(arr[0]);
    
	// Function call
	heapSort(arr, N);
    
	cout << "Sorted array is 
";
	printArray(arr, N);
}
`))),s.createElement(Ao,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// Java program for implementation of Heap Sort

public class HeapSort {
	public void sort(int arr[])
	{
        int N = arr.length;
        
		// Build heap (rearrange array)
		for (int i = N / 2 - 1; i >= 0; i--)
        heapify(arr, N, i);
        
		// One by one extract an element from heap
		for (int i = N - 1; i > 0; i--) {
            // Move current root to end
			int temp = arr[0];
			arr[0] = arr[i];
			arr[i] = temp;
            
			// call max heapify on the reduced heap
			heapify(arr, i, 0);
		}
	}

	// To heapify a subtree rooted with node i which is
	// an index in arr[]. n is size of heap
	void heapify(int arr[], int N, int i)
	{
		int largest = i; // Initialize largest as root
		int l = 2 * i + 1; // left = 2*i + 1
		int r = 2 * i + 2; // right = 2*i + 2
        
		// If left child is larger than root
		if (l < N && arr[l] > arr[largest])
        largest = l;

		// If right child is larger than largest so far
		if (r < N && arr[r] > arr[largest])
			largest = r;
            
            // If largest is not root
            if (largest != i) {
                int swap = arr[i];
                arr[i] = arr[largest];
                arr[largest] = swap;
                
                // Recursively heapify the affected sub-tree
                heapify(arr, N, largest);
            }
        }
        
        /* A utility function to print array of size n */
        static void printArray(int arr[])
        {
            int N = arr.length;
            
            for (int i = 0; i < N; ++i)
			System.out.print(arr[i] + " ");
            System.out.println();
        }
        
        // Driver's code
        public static void main(String args[])
        {
            int arr[] = { 12, 11, 13, 5, 6, 7 };
            int N = arr.length;
            
            // Function call
            HeapSort ob = new HeapSort();
            ob.sort(arr);
            
            System.out.println("Sorted array is");
            printArray(arr);
        }
    }
    `))))))}de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const ig=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;function Oo(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function Q5(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(ig,null,s.createElement("h2",null,"Merge sort:"),s.createElement("p",null,"Merge Sort is one of the most popular sorting algorithms that is based on the principle of Divide and Conquer Algorithm. Here, a problem is divided into multiple sub-problems. Each sub-problem is solved individually. Finally, sub-problems are combined to form the final solution."),s.createElement("p",null,"The MergeSort function repeatedly divides the array into two halves until we reach a stage where we try to perform MergeSort on a subarray of size 1 i.e. p == r. After that, the merge function comes into play and combines the sorted arrays into larger arrays until the whole array is merged."),s.createElement("h4",null," Working of Merge Sort:"),s.createElement("p",null,"Suppose we had to sort an array A. A subproblem would be to sort a sub-section of this array starting at index p and ending at index r, denoted as A[p..r].",s.createElement("h5",null,"Divide"),"If q is the half-way point between p and r, then we can split the subarray A[p..r] into two arrays A[p..q] and A[q+1, r].",s.createElement("h5",null,"Conquer"),"In the conquer step, we try to sort both the subarrays A[p..q] and A[q+1, r]. If we haven't yet reached the base case, we again divide both these subarrays and try to sort them.",s.createElement("h5",null,"Combine"),"When the conquer step reaches the base step and we get two sorted subarrays A[p..q]and A[q+1, r] for array A[p..r], we combine the results by creating a sorted array A[p..r] from two sorted subarrays A[p..q] and A[q+1, r]."))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(ig,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement(Oo,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# Python program for implementation of MergeSort
def mergeSort(arr):
	if len(arr) > 1:

		# Finding the mid of the array
		mid = len(arr)//2

		# Dividing the array elements
		L = arr[:mid]

		# into 2 halves
		R = arr[mid:]

		# Sorting the first half
		mergeSort(L)

		# Sorting the second half
		mergeSort(R)

		i = j = k = 0

		# Copy data to temp arrays L[] and R[]
		while i < len(L) and j < len(R):
			if L[i] <= R[j]:
				arr[k] = L[i]
				i += 1
			else:
				arr[k] = R[j]
				j += 1
			k += 1

		# Checking if any element was left
		while i < len(L):
			arr[k] = L[i]
			i += 1
			k += 1

		while j < len(R):
			arr[k] = R[j]
			j += 1
			k += 1

# Code to print the list


def printList(arr):
	for i in range(len(arr)):
		print(arr[i], end=" ")
	print()


# Driver Code
if __name__ == '__main__':
	arr = [12, 11, 13, 5, 6, 7]
	print("Given array is", end="
")
	printList(arr)
	mergeSort(arr)
	print("Sorted array is: ", end="
")
	printList(arr)
`))),s.createElement(Oo,{value:t,index:1},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
/* C program for Merge Sort */
#include <stdio.h>
#include <stdlib.h>

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
void merge(int arr[], int l, int m, int r)
{
	int i, j, k;
	int n1 = m - l + 1;
	int n2 = r - m;

	/* create temp arrays */
	int L[n1], R[n2];

	/* Copy data to temp arrays L[] and R[] */
	for (i = 0; i < n1; i++)
		L[i] = arr[l + i];
	for (j = 0; j < n2; j++)
		R[j] = arr[m + 1 + j];

	/* Merge the temp arrays back into arr[l..r]*/
	i = 0; // Initial index of first subarray
	j = 0; // Initial index of second subarray
	k = l; // Initial index of merged subarray
	while (i < n1 && j < n2) {
		if (L[i] <= R[j]) {
			arr[k] = L[i];
			i++;
		}
		else {
			arr[k] = R[j];
			j++;
		}
		k++;
	}

	/* Copy the remaining elements of L[], if there
	are any */
	while (i < n1) {
		arr[k] = L[i];
		i++;
		k++;
	}

	/* Copy the remaining elements of R[], if there
	are any */
	while (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	}
}

/* l is for left index and r is right index of the
sub-array of arr to be sorted */
void mergeSort(int arr[], int l, int r)
{
	if (l < r) {
		// Same as (l+r)/2, but avoids overflow for
		// large l and h
		int m = l + (r - l) / 2;

		// Sort first and second halves
		mergeSort(arr, l, m);
		mergeSort(arr, m + 1, r);

		merge(arr, l, m, r);
	}
}

/* UTILITY FUNCTIONS */
/* Function to print an array */
void printArray(int A[], int size)
{
	int i;
	for (i = 0; i < size; i++)
		printf("%d ", A[i]);
	printf("
");
}

/* Driver code */
int main()
{
	int arr[] = { 12, 11, 13, 5, 6, 7 };
	int arr_size = sizeof(arr) / sizeof(arr[0]);

	printf("Given array is 
");
	printArray(arr, arr_size);

	mergeSort(arr, 0, arr_size - 1);

	printf("
Sorted array is 
");
	printArray(arr, arr_size);
	return 0;
}
`))),s.createElement(Oo,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C++ program for Merge Sort
#include <iostream>
using namespace std;

// Merges two subarrays of array[].
// First subarray is arr[begin..mid]
// Second subarray is arr[mid+1..end]
void merge(int array[], int const left, int const mid,
		int const right)
{
	auto const subArrayOne = mid - left + 1;
	auto const subArrayTwo = right - mid;

	// Create temp arrays
	auto *leftArray = new int[subArrayOne],
		*rightArray = new int[subArrayTwo];

	// Copy data to temp arrays leftArray[] and rightArray[]
	for (auto i = 0; i < subArrayOne; i++)
		leftArray[i] = array[left + i];
	for (auto j = 0; j < subArrayTwo; j++)
		rightArray[j] = array[mid + 1 + j];

	auto indexOfSubArrayOne
		= 0, // Initial index of first sub-array
		indexOfSubArrayTwo
		= 0; // Initial index of second sub-array
	int indexOfMergedArray
		= left; // Initial index of merged array

	// Merge the temp arrays back into array[left..right]
	while (indexOfSubArrayOne < subArrayOne
		&& indexOfSubArrayTwo < subArrayTwo) {
		if (leftArray[indexOfSubArrayOne]
			<= rightArray[indexOfSubArrayTwo]) {
			array[indexOfMergedArray]
				= leftArray[indexOfSubArrayOne];
			indexOfSubArrayOne++;
		}
		else {
			array[indexOfMergedArray]
				= rightArray[indexOfSubArrayTwo];
			indexOfSubArrayTwo++;
		}
		indexOfMergedArray++;
	}
	// Copy the remaining elements of
	// left[], if there are any
	while (indexOfSubArrayOne < subArrayOne) {
		array[indexOfMergedArray]
			= leftArray[indexOfSubArrayOne];
		indexOfSubArrayOne++;
		indexOfMergedArray++;
	}
	// Copy the remaining elements of
	// right[], if there are any
	while (indexOfSubArrayTwo < subArrayTwo) {
		array[indexOfMergedArray]
			= rightArray[indexOfSubArrayTwo];
		indexOfSubArrayTwo++;
		indexOfMergedArray++;
	}
	delete[] leftArray;
	delete[] rightArray;
}

// begin is for left index and end is
// right index of the sub-array
// of arr to be sorted */
void mergeSort(int array[], int const begin, int const end)
{
	if (begin >= end)
		return; // Returns recursively

	auto mid = begin + (end - begin) / 2;
	mergeSort(array, begin, mid);
	mergeSort(array, mid + 1, end);
	merge(array, begin, mid, end);
}

// UTILITY FUNCTIONS
// Function to print an array
void printArray(int A[], int size)
{
	for (auto i = 0; i < size; i++)
		cout << A[i] << " ";
}

// Driver code
int main()
{
	int arr[] = { 12, 11, 13, 5, 6, 7 };
	auto arr_size = sizeof(arr) / sizeof(arr[0]);

	cout << "Given array is 
";
	printArray(arr, arr_size);

	mergeSort(arr, 0, arr_size - 1);

	cout << "
Sorted array is 
";
	printArray(arr, arr_size);
	return 0;
}
`))),s.createElement(Oo,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
/* Java program for Merge Sort */
class MergeSort {
	// Merges two subarrays of arr[].
	// First subarray is arr[l..m]
	// Second subarray is arr[m+1..r]
	void merge(int arr[], int l, int m, int r)
	{
		// Find sizes of two subarrays to be merged
		int n1 = m - l + 1;
		int n2 = r - m;

		/* Create temp arrays */
		int L[] = new int[n1];
		int R[] = new int[n2];

		/*Copy data to temp arrays*/
		for (int i = 0; i < n1; ++i)
			L[i] = arr[l + i];
		for (int j = 0; j < n2; ++j)
			R[j] = arr[m + 1 + j];

		/* Merge the temp arrays */

		// Initial indexes of first and second subarrays
		int i = 0, j = 0;

		// Initial index of merged subarray array
		int k = l;
		while (i < n1 && j < n2) {
			if (L[i] <= R[j]) {
				arr[k] = L[i];
				i++;
			}
			else {
				arr[k] = R[j];
				j++;
			}
			k++;
		}

		/* Copy remaining elements of L[] if any */
		while (i < n1) {
			arr[k] = L[i];
			i++;
			k++;
		}

		/* Copy remaining elements of R[] if any */
		while (j < n2) {
			arr[k] = R[j];
			j++;
			k++;
		}
	}

	// Main function that sorts arr[l..r] using
	// merge()
	void sort(int arr[], int l, int r)
	{
		if (l < r) {
			// Find the middle point
			int m = l + (r - l) / 2;

			// Sort first and second halves
			sort(arr, l, m);
			sort(arr, m + 1, r);

			// Merge the sorted halves
			merge(arr, l, m, r);
		}
	}

	/* A utility function to print array of size n */
	static void printArray(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n; ++i)
			System.out.print(arr[i] + " ");
		System.out.println();
	}

	// Driver code
	public static void main(String args[])
	{
		int arr[] = { 12, 11, 13, 5, 6, 7 };

		System.out.println("Given Array");
		printArray(arr);

		MergeSort ob = new MergeSort();
		ob.sort(arr, 0, arr.length - 1);

		System.out.println("
Sorted array");
		printArray(arr);
	}
}
`))))))}de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const ag=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;function jo(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function X5(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(ag,null,s.createElement("h2",null,"Quick sort:"),s.createElement("p",null,"Quicksort is a sorting algorithm based on the divide and conquer approach where,",s.createElement("br",null),s.createElement("br",null),"1.	An array is divided into subarrays by selecting a pivot element (element selected from the array). While dividing the array, the pivot element should be positioned in such a way that elements less than pivot are kept on the left side and elements greater than pivot are on the right side of the pivot.",s.createElement("br",null),s.createElement("br",null),"2.	The left and right subarrays are also divided using the same approach. This process continues until each subarray contains a single element.",s.createElement("br",null),s.createElement("br",null),"3.	At this point, elements are already sorted. Finally, elements are combined to form a sorted array.",s.createElement("br",null)),s.createElement("h4",null," Working of Quick Sort:"),s.createElement("p",null,"1. Select the Pivot Element",s.createElement("br",null),s.createElement("br",null),"\u2022	There are different variations of quicksort where the pivot element is selected from different positions. Here, we will be selecting the rightmost element of the array as the pivot element.",s.createElement("br",null)),s.createElement("p",null,"2. Rearrange the Array",s.createElement("br",null),s.createElement("br",null),"Now the elements of the array are rearranged so that elements that are smaller than the pivot are put on the left and the elements greater than the pivot are put on the right. Here's how we rearrange the array:",s.createElement("br",null),s.createElement("br",null),"\u2022	A pointer is fixed at the pivot element. The pivot element is compared with the elements beginning from the first index.",s.createElement("br",null),"\u2022	If the element is greater than the pivot element, a second pointer is set for that element.",s.createElement("br",null),"\u2022	Now, pivot is compared with other elements. If an element smaller than the pivot element is reached, the smaller element is swapped with the greater element found earlier.",s.createElement("br",null),"\u2022	Again, the process is repeated to set the next greater element as the second pointer. And, swap it with another smaller element.",s.createElement("br",null),"\u2022	The process goes on until the second last element is reached.",s.createElement("br",null),"\u2022	Finally, the pivot element is swapped with the second pointer."))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(ag,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement(jo,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# Python3 implementation of QuickSort


# Function to find the partition position
def partition(array, low, high):

	# Choose the rightmost element as pivot
	pivot = array[high]

	# Pointer for greater element
	i = low - 1

	# Traverse through all elements
	# compare each element with pivot
	for j in range(low, high):
		if array[j] <= pivot:
			# If element smaller than pivot is found
			# swap it with the greater element pointed by i
			i = i + 1

			# Swapping element at i with element at j
			(array[i], array[j]) = (array[j], array[i])

	# Swap the pivot element with
	# e greater element specified by i
	(array[i + 1], array[high]) = (array[high], array[i + 1])

	# Return the position from where partition is done
	return i + 1

# Function to perform quicksort


def quick_sort(array, low, high):
	if low < high:

		# Find pivot element such that
		# element smaller than pivot are on the left
		# element greater than pivot are on the right
		pi = partition(array, low, high)

		# Recursive call on the left of pivot
		quick_sort(array, low, pi - 1)

		# Recursive call on the right of pivot
		quick_sort(array, pi + 1, high)


# Driver code
array = [10, 7, 8, 9, 1, 5]
quick_sort(array, 0, len(array) - 1)

print(f'Sorted array: {array}')
`))),s.createElement(jo,{value:t,index:1},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
/* C implementation of QuickSort */
#include<stdio.h>
void quicksort(int number[25],int first,int last){
    int i, j, pivot, temp;
    if(first<last){
        pivot=first;
        i=first;
        j=last;
        while(i<j){
            while(number[i]<=number[pivot]&&i<last)
                i++;
                while(number[j]>number[pivot])
                    j--;
                    if(i<j){
                        temp=number[i];
                        number[i]=number[j];
                        number[j]=temp;
                    }
                }
                temp=number[pivot];
                number[pivot]=number[j];
                number[j]=temp;
                quicksort(number,first,j-1);                
                quicksort(number,j+1,last);
            }

        }
int main(){
    int i, count, number[25];
    printf("Enter some elements (Max. - 25): ");    
    scanf("%d",&count);
    printf("Enter %d elements: ", count);
    for(i=0;i<count;i++)
        scanf("%d",&number[i]);
        quicksort(number,0,count-1);
        printf("The Sorted Order is: ");
        for(i=0;i<count;i++)
            printf(" %d",number[i]);
    return 0;
}
`))),s.createElement(jo,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
/* C++ implementation of QuickSort */
#include <bits/stdc++.h>
using namespace std;

// A utility function to swap two elements
void swap(int* a, int* b)
{
	int t = *a;
	*a = *b;
	*b = t;
}

/* This function takes last element as pivot, places
the pivot element at its correct position in sorted
array, and places all smaller (smaller than pivot)
to left of pivot and all greater elements to right
of pivot */
int partition(int arr[], int low, int high)
{
	int pivot = arr[high]; // pivot
	int i
		= (low
		- 1); // Index of smaller element and indicates
				// the right position of pivot found so far

	for (int j = low; j <= high - 1; j++) {
		// If current element is smaller than the pivot
		if (arr[j] < pivot) {
			i++; // increment index of smaller element
			swap(&arr[i], &arr[j]);
		}
	}
	swap(&arr[i + 1], &arr[high]);
	return (i + 1);
}

/* The main function that implements QuickSort
arr[] --> Array to be sorted,
low --> Starting index,
high --> Ending index */
void quickSort(int arr[], int low, int high)
{
	if (low < high) {
		/* pi is partitioning index, arr[p] is now
		at right place */
		int pi = partition(arr, low, high);

		// Separately sort elements before
		// partition and after partition
		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
}

/* Function to print an array */
void printArray(int arr[], int size)
{
	int i;
	for (i = 0; i < size; i++)
		cout << arr[i] << " ";
	cout << endl;
}

// Driver Code
int main()
{
	int arr[] = { 10, 7, 8, 9, 1, 5 };
	int n = sizeof(arr) / sizeof(arr[0]);
	quickSort(arr, 0, n - 1);
	cout << "Sorted array: 
";
	printArray(arr, n);
	return 0;
}
`))),s.createElement(jo,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// Java implementation of QuickSort
import java.io.*;

class GFG {

	// A utility function to swap two elements
	static void swap(int[] arr, int i, int j)
	{
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	/* This function takes last element as pivot, places
	the pivot element at its correct position in sorted
	array, and places all smaller (smaller than pivot)
	to left of pivot and all greater elements to right
	of pivot */
	static int partition(int[] arr, int low, int high)
	{

		// pivot
		int pivot = arr[high];

		// Index of smaller element and
		// indicates the right position
		// of pivot found so far
		int i = (low - 1);

		for (int j = low; j <= high - 1; j++) {

			// If current element is smaller
			// than the pivot
			if (arr[j] < pivot) {

				// Increment index of
				// smaller element
				i++;
				swap(arr, i, j);
			}
		}
		swap(arr, i + 1, high);
		return (i + 1);
	}

	/* The main function that implements QuickSort
			arr[] --> Array to be sorted,
			low --> Starting index,
			high --> Ending index
	*/
	static void quickSort(int[] arr, int low, int high)
	{
		if (low < high) {

			// pi is partitioning index, arr[p]
			// is now at right place
			int pi = partition(arr, low, high);

			// Separately sort elements before
			// partition and after partition
			quickSort(arr, low, pi - 1);
			quickSort(arr, pi + 1, high);
		}
	}

	// Function to print an array
	static void printArray(int[] arr, int size)
	{
		for (int i = 0; i < size; i++)
			System.out.print(arr[i] + " ");

		System.out.println();
	}

	// Driver Code
	public static void main(String[] args)
	{
		int[] arr = { 10, 7, 8, 9, 1, 5 };
		int n = arr.length;

		quickSort(arr, 0, n - 1);
		System.out.println("Sorted array: ");
		printArray(arr, n);
	}
}
`))))))}de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const og=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;function Lo(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function Y5(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(og,null,s.createElement("h2",null,"Liner Search:"),s.createElement("p",null,"Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set. It is the easiest searching algorithm"),s.createElement("h4",null," Working of Linear Search:"),s.createElement("p",null,s.createElement("br",null),"\u2022 Start from the leftmost element of arr[] and one by one compare x with each element of arr[].",s.createElement("br",null),"\u2022 If x matches with an element, return the index.",s.createElement("br",null),"\u2022 If x doesn\u2019t match with any of the elements, return -1."))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(og,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement(Lo,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# Python3 code to linearly search x in arr[].
# If x is present then return its location,
# otherwise return -1


def search(arr, N, x):

	for i in range(0, N):
		if (arr[i] == x):
			return i
	return -1


# Driver Code
if __name__ == "__main__":
	arr = [2, 3, 4, 10, 40]
	x = 10
	N = len(arr)

	# Function call
	result = search(arr, N, x)
	if(result == -1):
		print("Element is not present in array")
	else:
		print("Element is present at index", result)
                `))),s.createElement(Lo,{value:t,index:1,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C code to linearly search x in arr[]. If x
// is present then return its location, otherwise
// return -1

#include <stdio.h>

int search(int arr[], int N, int x)
{
	int i;
	for (i = 0; i < N; i++)
		if (arr[i] == x)
			return i;
	return -1;
}

// Driver's code
int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int x = 10;
	int N = sizeof(arr) / sizeof(arr[0]);

	// Function call
	int result = search(arr, N, x);
	(result == -1)
		? printf("Element is not present in array")
		: printf("Element is present at index %d", result);
	return 0;
}
`))),s.createElement(Lo,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C++ code to linearly search x in arr[]. If x
// is present then return its location, otherwise
// return -1

#include <iostream>
using namespace std;

int search(int arr[], int N, int x)
{
	int i;
	for (i = 0; i < N; i++)
		if (arr[i] == x)
			return i;
	return -1;
}

// Driver's code
int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int x = 10;
	int N = sizeof(arr) / sizeof(arr[0]);

	// Function call
	int result = search(arr, N, x);
	(result == -1)
		? cout << "Element is not present in array"
		: cout << "Element is present at index " << result;
	return 0;
}
`))),s.createElement(Lo,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// Java code for linearly searching x in arr[]. If x
// is present then return its location, otherwise
// return -1

class GFG {
	public static int search(int arr[], int x)
	{
		int N = arr.length;
		for (int i = 0; i < N; i++) {
			if (arr[i] == x)
				return i;
		}
		return -1;
	}

	// Driver's code
	public static void main(String args[])
	{
		int arr[] = { 2, 3, 4, 10, 40 };
		int x = 10;

		// Function call
		int result = search(arr, x);
		if (result == -1)
			System.out.print(
				"Element is not present in array");
		else
			System.out.print("Element is present at index "
							+ result);
	}
}
`))))))}de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const lg=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;function Mo(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function J5(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(lg,null,s.createElement("h2",null,"Binary Search:"),s.createElement("p",null,"Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n)."),s.createElement("h4",null," Working of Bubble Sort:"),s.createElement("p",null,s.createElement("br",null),"\u2022 Begin with the mid element of the whole array as a search key.",s.createElement("br",null),"\u2022 If the value of the search key is equal to the item then return an index of the search key.",s.createElement("br",null),"\u2022 Or if the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.",s.createElement("br",null),"\u2022 Otherwise, narrow it to the upper half.",s.createElement("br",null),"\u2022 Repeatedly check from the second point until the value is found or the interval is empty."),s.createElement("p",null,"Binary Search Algorithm can be implemented in the following two ways",s.createElement("br",null),s.createElement("br",null),"\u2022 Iterative Method",s.createElement("br",null),"\u2022 Recursive Method"))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(lg,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement(Mo,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# Python3 Program for recursive binary search.

# Returns index of x in arr if present, else -1


def binarySearch(arr, l, r, x):

	# Check base case
	if r >= l:

		mid = l + (r - l) // 2

		# If element is present at the middle itself
		if arr[mid] == x:
			return mid

		# If element is smaller than mid, then it
		# can only be present in left subarray
		elif arr[mid] > x:
			return binarySearch(arr, l, mid-1, x)

		# Else the element can only be present
		# in right subarray
		else:
			return binarySearch(arr, mid + 1, r, x)

	else:
		# Element is not present in the array
		return -1


# Driver Code
arr = [2, 3, 4, 10, 40]
x = 10

# Function call
result = binarySearch(arr, 0, len(arr)-1, x)

if result != -1:
	print("Element is present at index % d" % result)
else:
	print("Element is not present in array")
                `))),s.createElement(Mo,{value:t,index:1,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`// C program to implement recursive Binary Search
#include <stdio.h>

// A recursive binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1
int binarySearch(int arr[], int l, int r, int x)
{
	if (r >= l) {
		int mid = l + (r - l) / 2;

		// If the element is present at the middle
		// itself
		if (arr[mid] == x)
			return mid;

		// If element is smaller than mid, then
		// it can only be present in left subarray
		if (arr[mid] > x)
			return binarySearch(arr, l, mid - 1, x);

		// Else the element can only be present
		// in right subarray
		return binarySearch(arr, mid + 1, r, x);
	}

	// We reach here when element is not
	// present in array
	return -1;
}

int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int n = sizeof(arr) / sizeof(arr[0]);
	int x = 10;
	int result = binarySearch(arr, 0, n - 1, x);
	(result == -1)
		? printf("Element is not present in array")
		: printf("Element is present at index %d", result);
	return 0;
}
`))),s.createElement(Mo,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C++ program to implement recursive Binary Search
#include <bits/stdc++.h>
using namespace std;

// A recursive binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1
int binarySearch(int arr[], int l, int r, int x)
{
	if (r >= l) {
		int mid = l + (r - l) / 2;

		// If the element is present at the middle
		// itself
		if (arr[mid] == x)
			return mid;

		// If element is smaller than mid, then
		// it can only be present in left subarray
		if (arr[mid] > x)
			return binarySearch(arr, l, mid - 1, x);

		// Else the element can only be present
		// in right subarray
		return binarySearch(arr, mid + 1, r, x);
	}

	// We reach here when element is not
	// present in array
	return -1;
}

int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int x = 10;
	int n = sizeof(arr) / sizeof(arr[0]);
	int result = binarySearch(arr, 0, n - 1, x);
	(result == -1)
		? cout << "Element is not present in array"
		: cout << "Element is present at index " << result;
	return 0;
}
`))),s.createElement(Mo,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// Java implementation of recursive Binary Search
class BinarySearch {
	// Returns index of x if it is present in arr[l..
	// r], else return -1
	int binarySearch(int arr[], int l, int r, int x)
	{
		if (r >= l) {
			int mid = l + (r - l) / 2;

			// If the element is present at the
			// middle itself
			if (arr[mid] == x)
				return mid;

			// If element is smaller than mid, then
			// it can only be present in left subarray
			if (arr[mid] > x)
				return binarySearch(arr, l, mid - 1, x);

			// Else the element can only be present
			// in right subarray
			return binarySearch(arr, mid + 1, r, x);
		}

		// We reach here when element is not present
		// in array
		return -1;
	}

	// Driver method to test above
	public static void main(String args[])
	{
		BinarySearch ob = new BinarySearch();
		int arr[] = { 2, 3, 4, 10, 40 };
		int n = arr.length;
		int x = 10;
		int result = ob.binarySearch(arr, 0, n - 1, x);
		if (result == -1)
			System.out.println("Element not present");
		else
			System.out.println("Element found at index "
							+ result);
	}
}
`))))))}de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const sg=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;function Fo(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function Z5(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(sg,null,s.createElement("h2",null,"Array:"),s.createElement("p",null,"An array is a collection of similar data items stored at contiguous memory locations and elements can be accessed randomly using indices of an array. They can be used to store the collection of primitive data types such as int, float, double, char, etc of any particular type."),s.createElement("h4",null," Advantages:"),s.createElement("p",null,s.createElement("br",null),"\u2022Code Optimization: we can retrieve or sort the data efficiently.",s.createElement("br",null),"\u2022 Random access: We can get any data located at an index position."),s.createElement("h4",null," Disadvantages:"),s.createElement("p",null,s.createElement("br",null),"\u2022 Size Limit: We can store only the fixed size of elements in the array. It doesn't grow its size at runtime."))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(sg,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement(Fo,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# Python code to demonstrate the working of array

import array

arr = array.array('i', [1, 2, 3])

# printing original array
print ("The new created array is : ",end=" ")
for i in range (0, 3):
	print (arr[i], end=" ")

print("\r")

# using append() to insert new value at end
arr.append(4);

# printing appended array
print("The appended array is : ", end="")
for i in range (0, 4):
	print (arr[i], end=" ")
	
# using insert() to insert value at specific position
# inserts 5 at 2nd position
arr.insert(2, 5)

print("\r")

# printing array after insertion
print ("The array after insertion is : ", end="")
for i in range (0, 5):
	print (arr[i], end=" ")
`))),s.createElement(Fo,{value:t,index:1,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C code to implement array

#include <stdio.h>
int main()
{
    // declare an array.
    int my_array[6];
    printf("Enter array elements:
"); 
    // input array elements.
    int i;
    for (i = 0; i < 6; i++)
    {
        scanf("%d", &my_array[i]);
    } 
    printf("
Array elements are:
");
    // print array elements.
    for (i = 0; i <= 5; i++)
    {
        printf("%d ", my_array[i]);
    }
    return 0;
}
`))),s.createElement(Fo,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C++ code to implement array

#include <iostream>
using namespace std;

int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int x = 10;
	int N = sizeof(arr) / sizeof(arr[0]);

	// Function call
	int result = search(arr, N, x);
	(result == -1)
		? cout << "Element is not present in array"
		: cout << "Element is present at index " << result;
	return 0;
    // declare an array.
    int my_array[6];
    cout<<"Enter array elements:"; 
    // input array elements.
    int i;
    for (i = 0; i < 6; i++)
    {
        cin>>my_array[i]);
    } 
    cout<<endl<<"Array elements are:"<<endl;
    // print array elements.
    for (i = 0; i <= 5; i++)
    {
        cout<<my_array[i];
    }
    return 0;
}
`))),s.createElement(Fo,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// Java code to implement array

class Array {
	public static void main(String[] args)
	{
		// declares an Array of integers.
		int[] arr;

		// allocating memory for 5 integers.
		arr = new int[5];

		// initialize the first elements of the array
		arr[0] = 10;

		// initialize the second elements of the array
		arr[1] = 20;

		// so on...
		arr[2] = 30;
		arr[3] = 40;
		arr[4] = 50;

		// accessing the elements of the specified array
		for (int i = 0; i < arr.length; i++)
			System.out.println("Element at index " + i + " : " + arr[i]);
	}
}

`))))))}var e$="/assets/stackgif.2f8e1390.gif";de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const Qu=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;function Do(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function t$(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12},s.createElement(Qu,{style:{height:"auto",display:"flex",alignItems:"center",flexDirection:"column"}},s.createElement("h2",{style:{width:"100%"}},"Push and Pop Operation"),s.createElement("img",{src:e$,alt:"",style:{width:"40%"}}))),s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(Qu,null,s.createElement("h2",null,"Stack:"),s.createElement("p",null,"A stack is a linear data structure that stores items in a Last-In/First-Out (LIFO) or First-In/Last-Out (FILO) manner. In stack, a new element is added at one end and an element is removed from that end only. The insert and delete operations are often called push and pop."),s.createElement("h4",null," The functions associated with stack are:"),s.createElement("p",null,s.createElement("br",null),"\u2022 empty() \u2013 Returns whether the stack is empty \u2013 Time Complexity: O(1)",s.createElement("br",null),"\u2022 size() \u2013 Returns the size of the stack \u2013 Time Complexity: O(1)",s.createElement("br",null),"\u2022 top() / peek() \u2013 Returns a reference to the topmost element of the stack \u2013 Time Complexity: O(1)",s.createElement("br",null),"\u2022 push(a) \u2013 Inserts the element \u2018a\u2019 at the top of the stack \u2013 Time Complexity: O(1)",s.createElement("br",null),"\u2022 pop() \u2013 Deletes the topmost element of the stack \u2013 Time Complexity: O(1)"))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(Qu,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement(Do,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# Python program to
# demonstrate stack implementation
# using list

stack = []

# append() function to push
# element in the stack
stack.append('a')
stack.append('b')
stack.append('c')

print('Initial stack')
print(stack)

# pop() function to pop
# element from stack in
# LIFO order
print('
Elements popped from stack:')
print(stack.pop())
print(stack.pop())
print(stack.pop())

print('
Stack after elements are popped:')
print(stack)

# uncommenting print(stack.pop())
# will cause an IndexError
# as the stack is now empty

                `))),s.createElement(Do,{value:t,index:1,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
#include<stdio.h>

#include<stdlib.h>
 
#define Size 4 
 
int Top=-1, inp_array[Size];
void Push();
void Pop();
void show();
 
int main()
{
	int choice;
	
	while(1)	
	{
		printf("
Operations performed by Stack");
		printf("
1.Push the element
2.Pop the element
3.Show
4.End");
		printf("

Enter the choice:");
		scanf("%d",&choice);
		
		switch(choice)
		{
			case 1: Push();
					break;
			case 2: Pop();
					break;
			case 3: show();
					break;
			case 4: exit(0);
			
			default: printf("
Invalid choice!!");
		}
	}
}
 
void Push()
{
	int x;
	
	if(Top==Size-1)
	{
		printf("
Overflow!!");
	}
	else
	{
		printf("
Enter element to be inserted to the stack:");
		scanf("%d",&x);
		Top=Top+1;
		inp_array[Top]=x;
	}
}
 
void Pop()
{
	if(Top==-1)
	{
		printf("
Underflow!!");
	}
	else
	{
		printf("
Popped element:  %d",inp_array[Top]);
		Top=Top-1;
	}
}
 
void show()
{
	
	
	if(Top==-1)
	{
		printf("
Underflow!!");
	}
	else
	{
		printf("
Elements present in the stack: 
");
		for(int i=Top;i>=0;--i)
			printf("%d
",inp_array[i]);
	}
}
`))),s.createElement(Do,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
#include <iostream>
#include <stack>
using namespace std;

int main() {
    // create a stack of strings
    stack<string> languages;
    
    // add element to the Stack
    languages.push("C++");
    languages.push("Java");
    languages.push("Python");
    
    // print top element
    cout << languages.top();

    return 0;
}
`))),s.createElement(Do,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// Stack implementation in Java

class Stack {

  // store elements of stack
  private int arr[];
  // represent top of stack
  private int top;
  // total capacity of the stack
  private int capacity;

  // Creating a stack
  Stack(int size) {
    // initialize the array
    // initialize the stack variables
    arr = new int[size];
    capacity = size;
    top = -1;
  }

  // push elements to the top of stack
  public void push(int x) {
    if (isFull()) {
      System.out.println("Stack OverFlow");

      // terminates the program
      System.exit(1);
    }

    // insert element on top of stack
    System.out.println("Inserting " + x);
    arr[++top] = x;
  }

  // pop elements from top of stack
  public int pop() {

    // if stack is empty
    // no element to pop
    if (isEmpty()) {
      System.out.println("STACK EMPTY");
      // terminates the program
      System.exit(1);
    }

    // pop element from top of stack
    return arr[top--];
  }

  // return size of the stack
  public int getSize() {
    return top + 1;
  }

  // check if the stack is empty
  public Boolean isEmpty() {
    return top == -1;
  }

  // check if the stack is full
  public Boolean isFull() {
    return top == capacity - 1;
  }

  // display elements of stack
  public void printStack() {
    for (int i = 0; i <= top; i++) {
      System.out.print(arr[i] + ", ");
    }
  }

  public static void main(String[] args) {
    Stack stack = new Stack(5);

    stack.push(1);
    stack.push(2);
    stack.push(3);

    System.out.print("Stack: ");
    stack.printStack();

    // remove element from stack
    stack.pop();
    System.out.println("
After popping out");
    stack.printStack();

  }
}
`))))))}var r$="/assets/queuegif.0a4ab6c7.gif";de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const Xu=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;de(Image)`
  width: auto;
  height: 100%;
`;function zo(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function n$(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12},s.createElement(Xu,{style:{height:"auto",display:"flex",alignItems:"center",flexDirection:"column"}},s.createElement("h2",{style:{width:"100%"}},"Enqueue and Dequeue Operation"),s.createElement("img",{src:r$,alt:"",style:{width:"40%"}}))),s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(Xu,null,s.createElement("h2",null,"Queue:"),s.createElement("p",null,"A queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.Unlike Stack, a queue is allowed operations at both ends. One end is always used to insert elements (enqueue). And the other end used to remove elements (dequeue)."),s.createElement("h4",null,"Queue Operations:"),s.createElement("p",null,s.createElement("br",null),"\u2022 Enqueue",s.createElement("br",null),s.createElement("br",null),"To work with Queue, we have to understand different queue operations. The followings are some of the key operations. Enqueue Operation Enqueue operation is the process of putting a new element into a queue. That element is added to the queue as the last element the queue.",s.createElement("br",null),s.createElement("br",null),s.createElement("br",null),"\u2022 Dequeue",s.createElement("br",null),s.createElement("br",null),"Dequeue Operation Dequeue operation is the process of removing an element from a queue. But before an operating dequeue operation, we have to check whether the queue is empty or not. If the queue is not empty, then only we can remove the first inserted element of the queue."))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(Xu,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement(zo,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# Python3 code to implement queue.
class Queue:
    def __init__(self):
        self.list = []
    
    def __str__(self):
        return str(self.list)

    def isEmpty(self):
        if self.list == []:
            return True
        else:
            return False
    
    def enqueue(self, value):
        return self.list.append(value)
    
    def dequeue(self):
        if self.isEmpty():
            return "Queue is empty"
        else:
            return self.list.pop(0)
    
    def peek(self):
        if self.isEmpty():
            return "Queue is empty"
        else:
            return self.list[0]

    def delete(self):
        self.list = None
    
myQueue = Queue()
`))),s.createElement(zo,{value:t,index:1,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C code to implement queue
#include <stdio.h>
# define SIZE 100
void enqueue();
void dequeue();
void show();
int inp_arr[SIZE];
int Rear = - 1;
int Front = - 1;
main()
{
    int ch;
    while (1)
    {
        printf("1.Enqueue Operation");
        printf("2.Dequeue Operation");
        printf("3.Display the Queue");
        printf("4.Exit");
        printf("Enter your choice of operations : ");
        scanf("%d", &ch);
        switch (ch)
        {
            case 1:
            enqueue();
            break;
            case 2:
            dequeue();
            break;
            case 3:
            show();
            break;
            case 4:
            exit(0);
            default:
            printf("Incorrect choice");
        } 
    } 
} 
 
void enqueue()
{
    int insert_item;
    if (Rear == SIZE - 1)
       printf("Overflow  ");
    else
    {
        if (Front == - 1)
      
        Front = 0;
        printf("Element to be inserted in the Queue  : ");
        scanf("%d", &insert_item);
        Rear = Rear + 1;
        inp_arr[Rear] = insert_item;
    }
} 
 
void dequeue()
{
    if (Front == - 1 || Front > Rear)
    {
        printf("Underflow  ");
        return ;
    }
    else
    {
        printf("Element deleted from the Queue: %d ", inp_arr[Front]);
        Front = Front + 1;
    }
} 
 
void show()
{
    
    if (Front == - 1)
        printf("Empty Queue  ");
    else
    {
        printf("Queue:  ");
        for (int i = Front; i <= Rear; i++)
            printf("%d ", inp_arr[i]);
        printf(" ");
    }
}
`))),s.createElement(zo,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C++ code to implement queue.

#include <iostream>
using namespace std;
int queue[100], n = 100, front = - 1, rear = - 1;
void Insert() {
   int val;
   if (rear == n - 1)
   cout<<"Queue Overflow"<<endl;
   else {
      if (front == - 1)
      front = 0;
      cout<<"Insert the element in queue : "<<endl;
      cin>>val;
      rear++;
      queue[rear] = val;
   }
}
void Delete() {
   if (front == - 1 || front > rear) {
      cout<<"Queue Underflow ";
      return ;
   } else {
      cout<<"Element deleted from queue is : "<< queue[front] <<endl;
      front++;;
   }
}
void Display() {
   if (front == - 1)
   cout<<"Queue is empty"<<endl;
   else {
      cout<<"Queue elements are : ";
      for (int i = front; i <= rear; i++)
      cout<<queue[i]<<" ";
         cout<<endl;
   }
}
int main() {
   int ch;
   cout<<"1) Insert element to queue"<<endl;
   cout<<"2) Delete element from queue"<<endl;
   cout<<"3) Display all the elements of queue"<<endl;
   cout<<"4) Exit"<<endl;
   do {
      cout<<"Enter your choice : "<<endl;
      cin>>ch;
      switch (ch) {
         case 1: Insert();
         break;
         case 2: Delete();
         break;
         case 3: Display();
         break;
         case 4: cout<<"Exit"<<endl;
         break;
         default: cout<<"Invalid choice"<<endl;
      }
   } while(ch!=4);
   return 0;
}
`))),s.createElement(zo,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// Java code to implenent queue 
class Queue {   
      
  private static int front, rear, capacity;   
  private static int queue[];   
   
  Queue(int size) {   
      front = rear = 0;   
      capacity = size;   
      queue = new int[capacity];   
  }   
   
  // insert an element into the queue  
  static void queueEnqueue(int item)  {   
      // check if the queue is full  
      if (capacity == rear) {   
          System.out.printf(" Queue is full ");   
          return;   
      }   
   
      // insert element at the rear   
      else {   
          queue[rear] = item;   
          rear++;   
      }   
      return;   
  }   
   
  //remove an element from the queue  
  static void queueDequeue()  {   
      // check if queue is empty   
      if (front == rear) {   
          System.out.printf(" Queue is empty ");   
          return;   
      }   
   
      // shift elements to the right by one place uptil rear   
      else {   
          for (int i = 0; i < rear - 1; i++) {   
              queue[i] = queue[i + 1];   
          }   
   
       
    // set queue[rear] to 0  
          if (rear < capacity)   
              queue[rear] = 0;   
   
          // decrement rear   
          rear--;   
      }   
      return;   
  }   
   
  // print queue elements   
  static void queueDisplay()   
  {   
      int i;   
      if (front == rear) {   
          System.out.printf("Queue is Empty ");   
          return;   
      }   
   
      // traverse front to rear and print elements   
      for (i = front; i < rear; i++) {   
          System.out.printf(" %d , ", queue[i]);   
      }   
      return;   
  }   
   
  // print front of queue   
  static void queueFront()   
  {   
      if (front == rear) {   
          System.out.printf("Queue is Empty ");   
          return;   
      }   
      System.out.printf(" Front Element of the queue: %d", queue[front]);   
      return;   
  }   
}   
 
public class QueueArrayImplementation {  
  public static void main(String[] args) {   
      // Create a queue of capacity 4   
      Queue q = new Queue(4);   
   
      System.out.println("Initial Queue:");  
     // print Queue elements   
      q.queueDisplay();   
   
      // inserting elements in the queue   
      q.queueEnqueue(10);   
      q.queueEnqueue(30);   
      q.queueEnqueue(50);   
      q.queueEnqueue(70);   
   
      // print Queue elements   
      System.out.println("Queue after Enqueue Operation:");  
      q.queueDisplay();   
   
      // print front of the queue   
      q.queueFront();   
         
      // insert element in the queue   
      q.queueEnqueue(90);   
   
      // print Queue elements   
      q.queueDisplay();   
   
      q.queueDequeue();   
      q.queueDequeue();   
      System.out.printf(" Queue after two dequeue operations:");   
   
      // print Queue elements   
      q.queueDisplay();   
   
      // print front of the queue   
      q.queueFront();   
  }   
}  
`))))))}var i$="/assets/InsertLinkedListgif.02a4b750.gif",a$="/assets/RemoveLinkedListgif.0dd7ff97.gif";de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const Yu=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;function Bo(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function o$(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12},s.createElement(Yu,{style:{height:"auto",display:"flex",alignItems:"center"}},s.createElement("div",null,s.createElement("h2",{style:{width:"100%"}},"Insert Node"),s.createElement("img",{src:i$,alt:"",style:{width:"80%"}})),s.createElement("div",null,s.createElement("h2",{style:{width:"100%"}},"Delete Node"),s.createElement("img",{src:a$,alt:"",style:{width:"80%"}})))),s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(Yu,null,s.createElement("h2",null,"Linked List:"),s.createElement("p",null,"A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list."),s.createElement("h4",null,"  A node can be added in three ways :"),s.createElement("p",null,s.createElement("br",null),"\u2022 At the front of the linked list",s.createElement("br",null),"\u2022 After a given node.",s.createElement("br",null),"\u2022 At the end of the linked list."),s.createElement("h4",null," A node can deleted in a list from:"),s.createElement("p",null,s.createElement("br",null),"\u2022 Beginning,",s.createElement("br",null),"\u2022  Middle.",s.createElement("br",null),"\u2022 End."),s.createElement("p",null,"Note: we can also delete node at a given position."))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(Yu,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement(Bo,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# importing packages
import llist
from llist import sllist,sllistnode

# creating a singly linked list
lst = sllist(['first','second','third'])
print(lst)
print(lst.first)
print(lst.last)
print(lst.size)
print()

# adding and inserting values
lst.append('fourth')
node = lst.nodeat(2)

lst.insertafter('fifth',node)

print(lst)
print(lst.first)
print(lst.last)
print(lst.size)
print()

# popping a value
#i.e. removing the last entry
# of the list
lst.pop()
print(lst)
print(lst.first)
print(lst.last)
print(lst.size)
print()

# removing a specific element
node = lst.nodeat(1)
lst.remove(node)
print(lst)
print(lst.first)
print(lst.last)
print(lst.size)
print()

                `))),s.createElement(Bo,{value:t,index:1,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>

struct node {
   int data;
   int key;
   struct node *next;
};

struct node *head = NULL;
struct node *current = NULL;

//display the list
void printList() {
   struct node *ptr = head;
   printf(" [ ");
	
   //start from the beginning
   while(ptr != NULL) {
      printf("(%d,%d) ",ptr->key,ptr->data);
      ptr = ptr->next;
   }
	
   printf(" ]");
}

//insert link at the first location
void insertFirst(int key, int data) {
   //create a link
   struct node *link = (struct node*) malloc(sizeof(struct node));
	
   link->key = key;
   link->data = data;
	
   //point it to old first node
   link->next = head;
	
   //point first to new first node
   head = link;
}

//delete first item
struct node* deleteFirst() {

   //save reference to first link
   struct node *tempLink = head;
	
   //mark next to first link as first 
   head = head->next;
	
   //return the deleted link
   return tempLink;
}

//is list empty
bool isEmpty() {
   return head == NULL;
}

int length() {
   int length = 0;
   struct node *current;
	
   for(current = head; current != NULL; current = current->next) {
      length++;
   }
	
   return length;
}

//find a link with given key
struct node* find(int key) {

   //start from the first link
   struct node* current = head;

   //if list is empty
   if(head == NULL) {
      return NULL;
   }

   //navigate through list
   while(current->key != key) {
	
      //if it is last node
      if(current->next == NULL) {
         return NULL;
      } else {
         //go to next link
         current = current->next;
      }
   }      
	
   //if data found, return the current Link
   return current;
}

//delete a link with given key
struct node* delete(int key) {

   //start from the first link
   struct node* current = head;
   struct node* previous = NULL;
	
   //if list is empty
   if(head == NULL) {
      return NULL;
   }

   //navigate through list
   while(current->key != key) {

      //if it is last node
      if(current->next == NULL) {
         return NULL;
      } else {
         //store reference to current link
         previous = current;
         //move to next link
         current = current->next;
      }
   }

   //found a match, update the link
   if(current == head) {
      //change first to point to next link
      head = head->next;
   } else {
      //bypass the current link
      previous->next = current->next;
   }    
	
   return current;
}

void sort() {

   int i, j, k, tempKey, tempData;
   struct node *current;
   struct node *next;
	
   int size = length();
   k = size ;
	
   for ( i = 0 ; i < size - 1 ; i++, k-- ) {
      current = head;
      next = head->next;
		
      for ( j = 1 ; j < k ; j++ ) {   

         if ( current->data > next->data ) {
            tempData = current->data;
            current->data = next->data;
            next->data = tempData;

            tempKey = current->key;
            current->key = next->key;
            next->key = tempKey;
         }
			
         current = current->next;
         next = next->next;
      }
   }   
}

void reverse(struct node** head_ref) {
   struct node* prev   = NULL;
   struct node* current = *head_ref;
   struct node* next;
	
   while (current != NULL) {
      next  = current->next;
      current->next = prev;   
      prev = current;
      current = next;
   }
	
   *head_ref = prev;
}

void main() {
   insertFirst(1,10);
   insertFirst(2,20);
   insertFirst(3,30);
   insertFirst(4,1);
   insertFirst(5,40);
   insertFirst(6,56); 

   printf("Original List: "); 
	
   //print list
   printList();

   while(!isEmpty()) {            
      struct node *temp = deleteFirst();
      printf(" Deleted value:");
      printf("(%d,%d) ",temp->key,temp->data);
   }  
	
   printf(" List after deleting all items: ");
   printList();
   insertFirst(1,10);
   insertFirst(2,20);
   insertFirst(3,30);
   insertFirst(4,1);
   insertFirst(5,40);
   insertFirst(6,56);
   
   printf(" Restored List: ");
   printList();
   printf(" ");  

   struct node *foundLink = find(4);
	
   if(foundLink != NULL) {
      printf("Element found: ");
      printf("(%d,%d) ",foundLink->key,foundLink->data);
      printf(" ");  
   } else {
      printf("Element not found.");
   }

   delete(4);
   printf("List after deleting an item: ");
   printList();
   printf(" ");
   foundLink = find(4);
	
   if(foundLink != NULL) {
      printf("Element found: ");
      printf("(%d,%d) ",foundLink->key,foundLink->data);
      printf(" ");
   } else {
      printf("Element not found.");
   }
	
   printf(" ");
   sort();
	
   printf("List after sorting the data: ");
   printList();
	
   reverse(&head);
   printf(" List after reversing the data: ");
   printList();
}
`))),s.createElement(Bo,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C++ program for the above approach
#include <iostream>
using namespace std;

// Node class to represent
// a node of the linked list.
class Node {
public:
	int data;
	Node* next;

	// Default constructor
	Node()
	{
		data = 0;
		next = NULL;
	}

	// Parameterised Constructor
	Node(int data)
	{
		this->data = data;
		this->next = NULL;
	}
};

// Linked list class to
// implement a linked list.
class Linkedlist {
	Node* head;

public:
	// Default constructor
	Linkedlist() { head = NULL; }

	// Function to insert a
	// node at the end of the
	// linked list.
	void insertNode(int);

	// Function to print the
	// linked list.
	void printList();

	// Function to delete the
	// node at given position
	void deleteNode(int);
};

// Function to delete the
// node at given position
void Linkedlist::deleteNode(int nodeOffset)
{
	Node *temp1 = head, *temp2 = NULL;
	int ListLen = 0;

	if (head == NULL) {
		cout << "List empty." << endl;
		return;
	}

	// Find length of the linked-list.
	while (temp1 != NULL) {
		temp1 = temp1->next;
		ListLen++;
	}

	// Check if the position to be
	// deleted is less than the length
	// of the linked list.
	if (ListLen < nodeOffset) {
		cout << "Index out of range"
			<< endl;
		return;
	}

	// Declare temp1
	temp1 = head;

	// Deleting the head.
	if (nodeOffset == 1) {

		// Update head
		head = head->next;
		delete temp1;
		return;
	}

	// Traverse the list to
	// find the node to be deleted.
	while (nodeOffset-- > 1) {

		// Update temp2
		temp2 = temp1;

		// Update temp1
		temp1 = temp1->next;
	}

	// Change the next pointer
	// of the previous node.
	temp2->next = temp1->next;

	// Delete the node
	delete temp1;
}

// Function to insert a new node.
void Linkedlist::insertNode(int data)
{
	// Create the new Node.
	Node* newNode = new Node(data);

	// Assign to head
	if (head == NULL) {
		head = newNode;
		return;
	}

	// Traverse till end of list
	Node* temp = head;
	while (temp->next != NULL) {

		// Update temp
		temp = temp->next;
	}

	// Insert at the last.
	temp->next = newNode;
}

// Function to print the
// nodes of the linked list.
void Linkedlist::printList()
{
	Node* temp = head;

	// Check for empty list.
	if (head == NULL) {
		cout << "List empty" << endl;
		return;
	}

	// Traverse the list.
	while (temp != NULL) {
		cout << temp->data << " ";
		temp = temp->next;
	}
}

// Driver Code
int main()
{
	Linkedlist list;

	// Inserting nodes
	list.insertNode(1);
	list.insertNode(2);
	list.insertNode(3);
	list.insertNode(4);

	cout << "Elements of the list are: ";

	// Print the list
	list.printList();
	cout << endl;

	// Delete node at position 2.
	list.deleteNode(2);

	cout << "Elements of the list are: ";
	list.printList();
	cout << endl;
	return 0;
}
                
                `))),s.createElement(Bo,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`

// Java program to implement
// a Singly Linked List

import java.io.*;
public class LinkedList {

	Node head; // head of list

	// Linked list Node.
	// This inner class is made static
	// so that main() can access it
	static class Node {

		int data;
		Node next;

		// Constructor
		Node(int d)
		{
			data = d;
			next = null;
		}
	}

	// Method to insert a new node
	public static LinkedList insert(LinkedList list, int data)
	{
		// Create a new node with given data
		Node new_node = new Node(data);
		

		// If the Linked List is empty,
		// then make the new node as head
		if (list.head == null) {
			list.head = new_node;
		}
		else {
			// Else traverse till the last node
			// and insert the new_node there
			Node last = list.head;
			while (last.next != null) {
				last = last.next;
			}

			// Insert the new_node at last node
			last.next = new_node;
		}

		// Return the list by head
		return list;
	}

	// Method to print the LinkedList.
	public static void printList(LinkedList list)
	{
		Node currNode = list.head;
	
		System.out.print("LinkedList: ");
	
		// Traverse through the LinkedList
		while (currNode != null) {
			// Print the data at current node
			System.out.print(currNode.data + " ");
	
			// Go to next node
			currNode = currNode.next;
		}
	}
	
	// Driver code
	public static void main(String[] args)
	{
		/* Start with the empty list. */
		LinkedList list = new LinkedList();

		//
		// ******INSERTION******
		//

		// Insert the values
		list = insert(list, 1);
		list = insert(list, 2);
		list = insert(list, 3);
		list = insert(list, 4);
		list = insert(list, 5);
		list = insert(list, 6);
		list = insert(list, 7);
		list = insert(list, 8);

		// Print the LinkedList
		printList(list);
	}
}

`))))))}var l$="/assets/Tree.fd45137c.webp";de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const Ju=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;function Vo(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function s$(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12},s.createElement(Ju,{style:{height:"auto",display:"flex",alignItems:"center",flexDirection:"column"}},s.createElement("h2",{style:{width:"100%"}},"Tree Data Structure"),s.createElement("img",{src:l$,alt:"",style:{width:"30%"}}))),s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(Ju,null,s.createElement("h2",null,"Tree:"),s.createElement("p",null,"A tree is non-linear and a hierarchical data structure consisting of a collection of nodes such that each node of the tree stores a value and a list of references to other nodes (the \u201Cchildren\u201D)."),s.createElement("p",null,"This data structure is a specialized method to organize and store data in the computer to be used more effectively. It consists of a central node, structural nodes, and sub-nodes, which are connected via edges. We can also say that tree data structure has roots, branches, and leaves connected with one another."),s.createElement("h4",null," Types of Tree data structures:"),s.createElement("p",null,s.createElement("br",null),"\u2022 General tree",s.createElement("br",null),"\u2022 Binary tree",s.createElement("br",null),"\u2022 Balanced tree",s.createElement("br",null),"\u2022 Binary search tree"))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(Ju,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement(Vo,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# python program to demonstrate some of the above
# terminologies

# Function to add an edge between vertices x and y

# Function to print the parent of each node


def printParents(node, adj, parent):

	# current node is Root, thus, has no parent
	if (parent == 0):
		print(node, "->Root")
	else:
		print(node, "->", parent)

	# Using DFS
	for cur in adj[node]:
		if (cur != parent):
			printParents(cur, adj, node)

# Function to print the children of each node


def printChildren(Root, adj):

	# Queue for the BFS
	q = []

	# pushing the root
	q.append(Root)

	# visit array to keep track of nodes that have been
	# visited
	vis = [0]*len(adj)

	# BFS
	while (len(q) > 0):
		node = q[0]
		q.pop(0)
		vis[node] = 1
		print(node, "-> ", end=" ")

		for cur in adj[node]:
			if (vis[cur] == 0):
				print(cur, " ", end=" ")
				q.append(cur)
		print("
")

# Function to print the leaf nodes


def printLeafNodes(Root, adj):

	# Leaf nodes have only one edge and are not the root
	for i in range(0, len(adj)):
		if (len(adj[i]) == 1 and i != Root):
			print(i, end=" ")
	print("
")

# Function to print the degrees of each node


def printDegrees(Root, adj):

	for i in range(1, len(adj)):
		print(i, ": ", end=" ")

		# Root has no parent, thus, its degree is equal to
		# the edges it is connected to
		if (i == Root):
			print(len(adj[i]))
		else:
			print(len(adj[i])-1)

# Driver code


# Number of nodes
N = 7
Root = 1

# Adjacency list to store the tree
adj = []
for i in range(0, N+1):
	adj.append([])

# Creating the tree
adj[1].append(2)
adj[2].append(1)

adj[1].append(3)
adj[3].append(1)

adj[1].append(4)
adj[4].append(1)

adj[2].append(5)
adj[5].append(2)

adj[2].append(6)
adj[6].append(2)

adj[4].append(7)
adj[7].append(4)

# Printing the parents of each node
print("The parents of each node are:")
printParents(Root, adj, 0)

# Printing the children of each node
print("The children of each node are:")
printChildren(Root, adj)

# Printing the leaf nodes in the tree
print("The leaf nodes of the tree are:")
printLeafNodes(Root, adj)

# Printing the degrees of each node
print("The degrees of each node are:")
printDegrees(Root, adj)

                `))),s.createElement(Vo,{value:t,index:1,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
#include<stdio.h>
#include<stdlib.h>
struct node
{
int value;
struct node *left_child, *right_child;
};

struct node *new_node(int value)
{
struct node *tmp = (struct node *)malloc(sizeof(struct node));
tmp->value = value;
tmp->left_child = tmp->right_child = NULL;
return tmp;
}

void print(struct node *root_node) // displaying the nodes!
{
if (root_node != NULL)
{
print(root_node->left_child);
printf("%d 
", root_node->value);
print(root_node->right_child);
}
}

struct node* insert_node(struct node* node, int value) // inserting nodes!
{

if (node == NULL) return new_node(value);
if (value < node->value)
{
node->left_child = insert_node(node->left_child, value);
}
else if (value > node->value)
{
node->right_child = insert_node(node->right_child, value);
}
return node;
}

int main()
{

printf("TechVidvan Tutorial: Implementation of a Binary Tree in C!

");

struct node *root_node = NULL;
root_node = insert_node(root_node, 10);
insert_node(root_node, 10);
insert_node(root_node, 30);
insert_node(root_node, 25);
insert_node(root_node, 36);
insert_node(root_node, 56);
insert_node(root_node, 78);

print(root_node);

return 0;
}
`))),s.createElement(Vo,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C++ program to demonstrate some of the above
// terminologies
#include <bits/stdc++.h>
using namespace std;
// Function to add an edge between vertices x and y
void addEdge(int x, int y, vector<vector<int> >& adj)
{
	adj[x].push_back(y);
	adj[y].push_back(x);
}
// Function to print the parent of each node
void printParents(int node, vector<vector<int> >& adj,
				int parent)
{
	// current node is Root, thus, has no parent
	if (parent == 0)
		cout << node << "->Root" << endl;
	else
		cout << node << "->" << parent << endl;
	// Using DFS
	for (auto cur : adj[node])
		if (cur != parent)
			printParents(cur, adj, node);
}
// Function to print the children of each node
void printChildren(int Root, vector<vector<int> >& adj)
{
	// Queue for the BFS
	queue<int> q;
	// pushing the root
	q.push(Root);
	// visit array to keep track of nodes that have been
	// visited
	int vis[adj.size()] = { 0 };
	// BFS
	while (!q.empty()) {
		int node = q.front();
		q.pop();
		vis[node] = 1;
		cout << node << "-> ";
		for (auto cur : adj[node])
			if (vis[cur] == 0) {
				cout << cur << " ";
				q.push(cur);
			}
		cout << endl;
	}
}
// Function to print the leaf nodes
void printLeafNodes(int Root, vector<vector<int> >& adj)
{
	// Leaf nodes have only one edge and are not the root
	for (int i = 1; i < adj.size(); i++)
		if (adj[i].size() == 1 && i != Root)
			cout << i << " ";
	cout << endl;
}
// Function to print the degrees of each node
void printDegrees(int Root, vector<vector<int> >& adj)
{
	for (int i = 1; i < adj.size(); i++) {
		cout << i << ": ";
		// Root has no parent, thus, its degree is equal to
		// the edges it is connected to
		if (i == Root)
			cout << adj[i].size() << endl;
		else
			cout << adj[i].size() - 1 << endl;
	}
}
// Driver code
int main()
{
	// Number of nodes
	int N = 7, Root = 1;
	// Adjacency list to store the tree
	vector<vector<int> > adj(N + 1, vector<int>());
	// Creating the tree
	addEdge(1, 2, adj);
	addEdge(1, 3, adj);
	addEdge(1, 4, adj);
	addEdge(2, 5, adj);
	addEdge(2, 6, adj);
	addEdge(4, 7, adj);
	// Printing the parents of each node
	cout << "The parents of each node are:" << endl;
	printParents(Root, adj, 0);

	// Printing the children of each node
	cout << "The children of each node are:" << endl;
	printChildren(Root, adj);

	// Printing the leaf nodes in the tree
	cout << "The leaf nodes of the tree are:" << endl;
	printLeafNodes(Root, adj);

	// Printing the degrees of each node
	cout << "The degrees of each node are:" << endl;
	printDegrees(Root, adj);

	return 0;
}

`))),s.createElement(Vo,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// java code for above approach
import java.io.*;
import java.util.*;

class GFG {

	// Function to print the parent of each node
	public static void
	printParents(int node, Vector<Vector<Integer> > adj,
				int parent)
	{

		// current node is Root, thus, has no parent
		if (parent == 0)
			System.out.println(node + "->Root");
		else
			System.out.println(node + "->" + parent);

		// Using DFS
		for (int i = 0; i < adj.get(node).size(); i++)
			if (adj.get(node).get(i) != parent)
				printParents(adj.get(node).get(i), adj,
							node);
	}

	// Function to print the children of each node
	public static void
	printChildren(int Root, Vector<Vector<Integer> > adj)
	{

		// Queue for the BFS
		Queue<Integer> q = new LinkedList<>();

		// pushing the root
		q.add(Root);

		// visit array to keep track of nodes that have been
		// visited
		int vis[] = new int[adj.size()];

		Arrays.fill(vis, 0);

		// BFS
		while (q.size() != 0) {
			int node = q.peek();
			q.remove();
			vis[node] = 1;
			System.out.print(node + "-> ");

			for (int i = 0; i < adj.get(node).size(); i++) {
				if (vis[adj.get(node).get(i)] == 0) {
					System.out.print(adj.get(node).get(i)
									+ " ");
					q.add(adj.get(node).get(i));
				}
			}
			System.out.println();
		}
	}

	// Function to print the leaf nodes
	public static void
	printLeafNodes(int Root, Vector<Vector<Integer> > adj)
	{

		// Leaf nodes have only one edge and are not the
		// root
		for (int i = 1; i < adj.size(); i++)
			if (adj.get(i).size() == 1 && i != Root)
				System.out.print(i + " ");

		System.out.println();
	}

	// Function to print the degrees of each node
	public static void
	printDegrees(int Root, Vector<Vector<Integer> > adj)
	{
		for (int i = 1; i < adj.size(); i++) {
			System.out.print(i + ": ");

			// Root has no parent, thus, its degree is
			// equal to the edges it is connected to
			if (i == Root)
				System.out.println(adj.get(i).size());
			else
				System.out.println(adj.get(i).size() - 1);
		}
	}

	// Driver code
	public static void main(String[] args)
	{

		// Number of nodes
		int N = 7, Root = 1;

		// Adjacency list to store the tree
		Vector<Vector<Integer> > adj
			= new Vector<Vector<Integer> >();
		for (int i = 0; i < N + 1; i++) {
			adj.add(new Vector<Integer>());
		}

		// Creating the tree
		adj.get(1).add(2);
		adj.get(2).add(1);

		adj.get(1).add(3);
		adj.get(3).add(1);

		adj.get(1).add(4);
		adj.get(4).add(1);

		adj.get(2).add(5);
		adj.get(5).add(2);

		adj.get(2).add(6);
		adj.get(6).add(2);

		adj.get(4).add(7);
		adj.get(7).add(4);

		// Printing the parents of each node
		System.out.println("The parents of each node are:");
		printParents(Root, adj, 0);

		// Printing the children of each node
		System.out.println(
			"The children of each node are:");
		printChildren(Root, adj);

		// Printing the leaf nodes in the tree
		System.out.println(
			"The leaf nodes of the tree are:");
		printLeafNodes(Root, adj);

		// Printing the degrees of each node
		System.out.println("The degrees of each node are:");
		printDegrees(Root, adj);
	}
}

`))))))}var u$="/assets/BFSgif.389e5b2c.gif";de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const Zu=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;function Wo(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function c$(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12},s.createElement(Zu,{style:{height:"auto",display:"flex",alignItems:"center",flexDirection:"column"}},s.createElement("h2",{style:{width:"100%"}},"Node Traversal"),s.createElement("img",{src:u$,alt:"",style:{width:"20%"}}))),s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(Zu,null,s.createElement("h2",null,"Breadth First Search (BFS):"),s.createElement("p",null,"BFS is a traversing algorithm where you should start traversing from a selected node (source or starting node) and traverse the graph layerwise thus exploring the neighbour nodes (nodes which are directly connected to source node). You must then move towards the next-level neighbour nodes."),s.createElement("h4",null,"As the name BFS suggests, you are required to traverse the graph breadthwise as follows:"),s.createElement("p",null,s.createElement("br",null),"\u2022 First move horizontally and visit all the nodes of the current layer",s.createElement("br",null),"\u2022 Move to the next layer"))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(Zu,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement(Wo,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# Python3 code to linearly search x in arr[].
# If x is present then return its location,
# otherwise return -1


def search(arr, N, x):

	for i in range(0, N):
		if (arr[i] == x):
			return i
	return -1


# Driver Code
if __name__ == "__main__":
	arr = [2, 3, 4, 10, 40]
	x = 10
	N = len(arr)

	# Function call
	result = search(arr, N, x)
	if(result == -1):
		print("Element is not present in array")
	else:
		print("Element is present at index", result)
                `))),s.createElement(Wo,{value:t,index:1,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C code to linearly search x in arr[]. If x
// is present then return its location, otherwise
// return -1

#include <stdio.h>

int search(int arr[], int N, int x)
{
	int i;
	for (i = 0; i < N; i++)
		if (arr[i] == x)
			return i;
	return -1;
}

// Driver's code
int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int x = 10;
	int N = sizeof(arr) / sizeof(arr[0]);

	// Function call
	int result = search(arr, N, x);
	(result == -1)
		? printf("Element is not present in array")
		: printf("Element is present at index %d", result);
	return 0;
}
`))),s.createElement(Wo,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C++ code to linearly search x in arr[]. If x
// is present then return its location, otherwise
// return -1

#include <iostream>
using namespace std;

int search(int arr[], int N, int x)
{
	int i;
	for (i = 0; i < N; i++)
		if (arr[i] == x)
			return i;
	return -1;
}

// Driver's code
int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int x = 10;
	int N = sizeof(arr) / sizeof(arr[0]);

	// Function call
	int result = search(arr, N, x);
	(result == -1)
		? cout << "Element is not present in array"
		: cout << "Element is present at index " << result;
	return 0;
}
`))),s.createElement(Wo,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// Java code for linearly searching x in arr[]. If x
// is present then return its location, otherwise
// return -1

class GFG {
	public static int search(int arr[], int x)
	{
		int N = arr.length;
		for (int i = 0; i < N; i++) {
			if (arr[i] == x)
				return i;
		}
		return -1;
	}

	// Driver's code
	public static void main(String args[])
	{
		int arr[] = { 2, 3, 4, 10, 40 };
		int x = 10;

		// Function call
		int result = search(arr, x);
		if (result == -1)
			System.out.print(
				"Element is not present in array");
		else
			System.out.print("Element is present at index "
							+ result);
	}
}
`))))))}var d$="/assets/DFSgif.86f05c62.gif";de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const ec=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;function Ho(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function f$(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12},s.createElement(ec,{style:{height:"auto",display:"flex",alignItems:"center",flexDirection:"column"}},s.createElement("h2",{style:{width:"100%"}},"Node Traversal"),s.createElement("img",{src:d$,alt:"",style:{width:"20%"}}))),s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(ec,null,s.createElement("h2",null,"Depth First Search (DFS):"),s.createElement("p",null,"The DFS algorithm is a recursive algorithm that uses the idea of backtracking. It involves exhaustive searches of all the nodes by going ahead, if possible, else by backtracking."),s.createElement("p",null,"Here, the word backtrack means that when you are moving forward and there are no more nodes along the current path, you move backwards on the same path to find nodes to traverse. All the nodes will be visited on the current path till all the unvisited nodes have been traversed after which the next path will be selected."),s.createElement("p",null,"This recursive nature of DFS can be implemented using stacks. The basic idea is as follows: Pick a starting node and push all its adjacent nodes into a stack. Pop a node from stack to select the next node to visit and push all its adjacent nodes into a stack. Repeat this process until the stack is empty. However, ensure that the nodes that are visited are marked. This will prevent you from visiting the same node more than once. If you do not mark the nodes that are visited and you visit the same node more than once, you may end up in an infinite loop."))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(ec,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement(Ho,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# Python3 code to linearly search x in arr[].
# If x is present then return its location,
# otherwise return -1


def search(arr, N, x):

	for i in range(0, N):
		if (arr[i] == x):
			return i
	return -1


# Driver Code
if __name__ == "__main__":
	arr = [2, 3, 4, 10, 40]
	x = 10
	N = len(arr)

	# Function call
	result = search(arr, N, x)
	if(result == -1):
		print("Element is not present in array")
	else:
		print("Element is present at index", result)
                `))),s.createElement(Ho,{value:t,index:1,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C code to linearly search x in arr[]. If x
// is present then return its location, otherwise
// return -1

#include <stdio.h>

int search(int arr[], int N, int x)
{
	int i;
	for (i = 0; i < N; i++)
		if (arr[i] == x)
			return i;
	return -1;
}

// Driver's code
int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int x = 10;
	int N = sizeof(arr) / sizeof(arr[0]);

	// Function call
	int result = search(arr, N, x);
	(result == -1)
		? printf("Element is not present in array")
		: printf("Element is present at index %d", result);
	return 0;
}
`))),s.createElement(Ho,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C++ code to linearly search x in arr[]. If x
// is present then return its location, otherwise
// return -1

#include <iostream>
using namespace std;

int search(int arr[], int N, int x)
{
	int i;
	for (i = 0; i < N; i++)
		if (arr[i] == x)
			return i;
	return -1;
}

// Driver's code
int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int x = 10;
	int N = sizeof(arr) / sizeof(arr[0]);

	// Function call
	int result = search(arr, N, x);
	(result == -1)
		? cout << "Element is not present in array"
		: cout << "Element is present at index " << result;
	return 0;
}
`))),s.createElement(Ho,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// Java code for linearly searching x in arr[]. If x
// is present then return its location, otherwise
// return -1

class GFG {
	public static int search(int arr[], int x)
	{
		int N = arr.length;
		for (int i = 0; i < N; i++) {
			if (arr[i] == x)
				return i;
		}
		return -1;
	}

	// Driver's code
	public static void main(String args[])
	{
		int arr[] = { 2, 3, 4, 10, 40 };
		int x = 10;

		// Function call
		int result = search(arr, x);
		if (result == -1)
			System.out.print(
				"Element is not present in array");
		else
			System.out.print("Element is present at index "
							+ result);
	}
}
`))))))}var p$="/assets/Kruskalgif.1299f932.gif";de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const tc=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;function Uo(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function m$(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12},s.createElement(tc,{style:{height:"auto",display:"flex",alignItems:"center",flexDirection:"column"}},s.createElement("h2",{style:{width:"100%"}},"Find MST suing Kruskal's algorithm"),s.createElement("img",{src:p$,alt:"",style:{width:"40%"}}))),s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(tc,null,s.createElement("h2",null,"Kruskal Algorithm:"),s.createElement("p",null,"Kruskal's Algorithm is used to find the minimum spanning tree for a connected weighted graph. The main target of the algorithm is to find the subset of edges by using which we can traverse every vertex of the graph. It follows the greedy approach that finds an optimum solution at every stage instead of focusing on a global optimum."),s.createElement("h4",null," Working of Kruskal's Algorithm:"),s.createElement("p",null,"In Kruskal's algorithm, we start from edges with the lowest weight and keep adding the edges until the goal is reached. The steps to implement Kruskal's algorithm are listed as follows -"),s.createElement("p",null,s.createElement("br",null),"\u2022 First, sort all the edges from low weight to high.",s.createElement("br",null),"\u2022 Now, take the edge with the lowest weight and add it to the spanning tree. If the edge to be added creates a cycle, then reject the edge.",s.createElement("br",null),"\u2022 Continue to add the edges until we reach all vertices, and a minimum spanning tree is created."),s.createElement("p",null,"The applications of Kruskal's algorithm are -"),s.createElement("p",null,s.createElement("br",null),"\u2022 Kruskal's algorithm can be used to layout electrical wiring among cities.",s.createElement("br",null),"\u2022 It can be used to lay down LAN connections."))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(tc,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement(Uo,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# Python3 code to linearly search x in arr[].
# If x is present then return its location,
# otherwise return -1


def search(arr, N, x):

	for i in range(0, N):
		if (arr[i] == x):
			return i
	return -1


# Driver Code
if __name__ == "__main__":
	arr = [2, 3, 4, 10, 40]
	x = 10
	N = len(arr)

	# Function call
	result = search(arr, N, x)
	if(result == -1):
		print("Element is not present in array")
	else:
		print("Element is present at index", result)
                `))),s.createElement(Uo,{value:t,index:1,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C code to linearly search x in arr[]. If x
// is present then return its location, otherwise
// return -1

#include <stdio.h>

int search(int arr[], int N, int x)
{
	int i;
	for (i = 0; i < N; i++)
		if (arr[i] == x)
			return i;
	return -1;
}

// Driver's code
int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int x = 10;
	int N = sizeof(arr) / sizeof(arr[0]);

	// Function call
	int result = search(arr, N, x);
	(result == -1)
		? printf("Element is not present in array")
		: printf("Element is present at index %d", result);
	return 0;
}
`))),s.createElement(Uo,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C++ code to linearly search x in arr[]. If x
// is present then return its location, otherwise
// return -1

#include <iostream>
using namespace std;

int search(int arr[], int N, int x)
{
	int i;
	for (i = 0; i < N; i++)
		if (arr[i] == x)
			return i;
	return -1;
}

// Driver's code
int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int x = 10;
	int N = sizeof(arr) / sizeof(arr[0]);

	// Function call
	int result = search(arr, N, x);
	(result == -1)
		? cout << "Element is not present in array"
		: cout << "Element is present at index " << result;
	return 0;
}
`))),s.createElement(Uo,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// Java code for linearly searching x in arr[]. If x
// is present then return its location, otherwise
// return -1

class GFG {
	public static int search(int arr[], int x)
	{
		int N = arr.length;
		for (int i = 0; i < N; i++) {
			if (arr[i] == x)
				return i;
		}
		return -1;
	}

	// Driver's code
	public static void main(String args[])
	{
		int arr[] = { 2, 3, 4, 10, 40 };
		int x = 10;

		// Function call
		int result = search(arr, x);
		if (result == -1)
			System.out.print(
				"Element is not present in array");
		else
			System.out.print("Element is present at index "
							+ result);
	}
}
`))))))}var h$="/assets/primmsgif.46c594e9.gif";de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const rc=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;function qo(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function g$(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12},s.createElement(rc,{style:{height:"auto",display:"flex",alignItems:"center",flexDirection:"column"}},s.createElement("h2",{style:{width:"100%"}},"Find MST using Prim's algorithm"),s.createElement("img",{src:h$,alt:"",style:{width:"40%"}}))),s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(rc,null,s.createElement("h2",null,"Primm's Algorithm:"),s.createElement("p",null,"Prim's algorithm is a minimum spanning tree algorithm that takes a graph as input and finds the subset of the edges of that graph which"),s.createElement("p",null,s.createElement("br",null),"\u2022 form a tree that includes every vertex",s.createElement("br",null),"\u2022 has the minimum sum of weights among all the trees that can be formed from the graph"),s.createElement("h4",null," Working of Primm's Algorithm:"),s.createElement("p",null,"It falls under a class of algorithms called greedy algorithms that find the local optimum in the hopes of finding a global optimum. We start from one vertex and keep adding edges with the lowest weight until we reach our goal."),s.createElement("p",null,"The steps for implementing Prim's algorithm are as follows:"),s.createElement("p",null,s.createElement("br",null),"\u2022 Initialize the minimum spanning tree with a vertex chosen at random.",s.createElement("br",null),"\u2022 Find all the edges that connect the tree to new vertices, find the minimum and add it to the tree",s.createElement("br",null),"\u2022 Keep repeating step 2 until we get a minimum spanning tree"))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(rc,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement(qo,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# Prim's Algorithm in Python


INF = 9999999
# number of vertices in graph
V = 5
# create a 2d array of size 5x5
# for adjacency matrix to represent graph
G = [[0, 9, 75, 0, 0],
     [9, 0, 95, 19, 42],
     [75, 95, 0, 51, 66],
     [0, 19, 51, 0, 31],
     [0, 42, 66, 31, 0]]
# create a array to track selected vertex
# selected will become true otherwise false
selected = [0, 0, 0, 0, 0]
# set number of edge to 0
no_edge = 0
# the number of egde in minimum spanning tree will be
# always less than(V - 1), where V is number of vertices in
# graph
# choose 0th vertex and make it true
selected[0] = True
# print for edge and weight
print("Edge : Weight
")
while (no_edge < V - 1):
    # For every vertex in the set S, find the all adjacent vertices
    #, calculate the distance from the vertex selected at step 1.
    # if the vertex is already in the set S, discard it otherwise
    # choose another vertex nearest to selected vertex  at step 1.
    minimum = INF
    x = 0
    y = 0
    for i in range(V):
        if selected[i]:
            for j in range(V):
                if ((not selected[j]) and G[i][j]):  
                    # not in selected and there is an edge
                    if minimum > G[i][j]:
                        minimum = G[i][j]
                        x = i
                        y = j
    print(str(x) + "-" + str(y) + ":" + str(G[x][y]))
    selected[y] = True
    no_edge += 1
                `))),s.createElement(qo,{value:t,index:1,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// Prim's Algorithm in C

#include<stdio.h>
#include<stdbool.h> 

#define INF 9999999

// number of vertices in graph
#define V 5

// create a 2d array of size 5x5
//for adjacency matrix to represent graph
int G[V][V] = {
  {0, 9, 75, 0, 0},
  {9, 0, 95, 19, 42},
  {75, 95, 0, 51, 66},
  {0, 19, 51, 0, 31},
  {0, 42, 66, 31, 0}};

int main() {
  int no_edge;  // number of edge

  // create a array to track selected vertex
  // selected will become true otherwise false
  int selected[V];

  // set selected false initially
  memset(selected, false, sizeof(selected));
  
  // set number of edge to 0
  no_edge = 0;

  // the number of egde in minimum spanning tree will be
  // always less than (V -1), where V is number of vertices in
  //graph

  // choose 0th vertex and make it true
  selected[0] = true;

  int x;  //  row number
  int y;  //  col number

  // print for edge and weight
  printf("Edge : Weight
");

  while (no_edge < V - 1) {
    //For every vertex in the set S, find the all adjacent vertices
    // , calculate the distance from the vertex selected at step 1.
    // if the vertex is already in the set S, discard it otherwise
    //choose another vertex nearest to selected vertex  at step 1.

    int min = INF;
    x = 0;
    y = 0;

    for (int i = 0; i < V; i++) {
      if (selected[i]) {
        for (int j = 0; j < V; j++) {
          if (!selected[j] && G[i][j]) {  // not in selected and there is an edge
            if (min > G[i][j]) {
              min = G[i][j];
              x = i;
              y = j;
            }
          }
        }
      }
    }
    printf("%d - %d : %d
", x, y, G[x][y]);
    selected[y] = true;
    no_edge++;
  }

  return 0;
}
`))),s.createElement(qo,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// Prim's Algorithm in C++

#include <cstring>
#include <iostream>
using namespace std;

#define INF 9999999

// number of vertices in grapj
#define V 5

// create a 2d array of size 5x5
//for adjacency matrix to represent graph

int G[V][V] = {
  {0, 9, 75, 0, 0},
  {9, 0, 95, 19, 42},
  {75, 95, 0, 51, 66},
  {0, 19, 51, 0, 31},
  {0, 42, 66, 31, 0}};

int main() {
  int no_edge;  // number of edge

  // create a array to track selected vertex
  // selected will become true otherwise false
  int selected[V];

  // set selected false initially
  memset(selected, false, sizeof(selected));

  // set number of edge to 0
  no_edge = 0;

  // the number of egde in minimum spanning tree will be
  // always less than (V -1), where V is number of vertices in
  //graph

  // choose 0th vertex and make it true
  selected[0] = true;

  int x;  //  row number
  int y;  //  col number

  // print for edge and weight
  cout << "Edge"
     << " : "
     << "Weight";
  cout << endl;
  while (no_edge < V - 1) {
    //For every vertex in the set S, find the all adjacent vertices
    // , calculate the distance from the vertex selected at step 1.
    // if the vertex is already in the set S, discard it otherwise
    //choose another vertex nearest to selected vertex  at step 1.

    int min = INF;
    x = 0;
    y = 0;

    for (int i = 0; i < V; i++) {
      if (selected[i]) {
        for (int j = 0; j < V; j++) {
          if (!selected[j] && G[i][j]) {  // not in selected and there is an edge
            if (min > G[i][j]) {
              min = G[i][j];
              x = i;
              y = j;
            }
          }
        }
      }
    }
    cout << x << " - " << y << " :  " << G[x][y];
    cout << endl;
    selected[y] = true;
    no_edge++;
  }

  return 0;
}
`))),s.createElement(qo,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// Prim's Algorithm in Java

import java.util.Arrays;

class PGraph {

  public void Prim(int G[][], int V) {

    int INF = 9999999;

    int no_edge; // number of edge

    // create a array to track selected vertex
    // selected will become true otherwise false
    boolean[] selected = new boolean[V];

    // set selected false initially
    Arrays.fill(selected, false);

    // set number of edge to 0
    no_edge = 0;

    // the number of egde in minimum spanning tree will be
    // always less than (V -1), where V is number of vertices in
    // graph

    // choose 0th vertex and make it true
    selected[0] = true;

    // print for edge and weight
    System.out.println("Edge : Weight");

    while (no_edge < V - 1) {
      // For every vertex in the set S, find the all adjacent vertices
      // , calculate the distance from the vertex selected at step 1.
      // if the vertex is already in the set S, discard it otherwise
      // choose another vertex nearest to selected vertex at step 1.

      int min = INF;
      int x = 0; // row number
      int y = 0; // col number

      for (int i = 0; i < V; i++) {
        if (selected[i] == true) {
          for (int j = 0; j < V; j++) {
            // not in selected and there is an edge
            if (!selected[j] && G[i][j] != 0) {
              if (min > G[i][j]) {
                min = G[i][j];
                x = i;
                y = j;
              }
            }
          }
        }
      }
      System.out.println(x + " - " + y + " :  " + G[x][y]);
      selected[y] = true;
      no_edge++;
    }
  }

  public static void main(String[] args) {
    PGraph g = new PGraph();

    // number of vertices in grapj
    int V = 5;

    // create a 2d array of size 5x5
    // for adjacency matrix to represent graph
    int[][] G = { { 0, 9, 75, 0, 0 }, { 9, 0, 95, 19, 42 }, { 75, 95, 0, 51, 66 }, { 0, 19, 51, 0, 31 },
        { 0, 42, 66, 31, 0 } };

    g.Prim(G, V);
  }
}
`))))))}var v$="/assets/Dijkstragif.029ec930.gif";de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;const nc=de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;function Go(t){const{children:e,value:r,index:n,tabValue:i,...a}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...a,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function y$(){const[t,e]=s.useState(0),r=(n,i)=>{e(i)};return Le(n=>[n.sortingArray,n.algorithm,n.searchingAlgorithm,n.tabTitle],We),s.createElement(re,{container:!0,spacing:2},s.createElement(re,{item:!0,xs:12},s.createElement(nc,{style:{height:"auto",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},s.createElement("h2",{style:{width:"100%"}},"Dijkstra Algorithhm to find the shortest path"),s.createElement("img",{src:v$,alt:"",style:{width:"25%"}}))),s.createElement(re,{item:!0,xs:12,sm:7},s.createElement(nc,null,s.createElement("h2",null,"Dijkstra Algorithm:"),s.createElement("p",null,"Dijkstra's algorithm allows us to find the shortest path between any two vertices of a graph."),s.createElement("p",null,"Dijkstra\u2019s algorithm is very similar to Prim\u2019s algorithm for minimum spanning tree. Like Prim\u2019s MST, generate a SPT (shortest path tree) with a given source as a root. Maintain two sets, one set contains vertices included in the shortest-path tree, other set includes vertices not yet included in the shortest-path tree. At every step of the algorithm, find a vertex that is in the other set (set not yet included) and has a minimum distance from the source."))),s.createElement(re,{item:!0,xs:12,sm:5},s.createElement(nc,null,s.createElement(yt,{sx:{borderBottom:1,borderColor:"divider"}},s.createElement(et,{value:t,onChange:r,indicatorColor:"primary",textColor:"inherit",variant:"scrollable"},s.createElement(X,{label:"Python"}),s.createElement(X,{label:"C"}),s.createElement(X,{label:"C++"}),s.createElement(X,{label:"Java"}))),s.createElement(Go,{value:t,index:0,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
# Python program for Dijkstra's single
# source shortest path algorithm. The program is
# for adjacency matrix representation of the graph

# Library for INT_MAX
import sys


class Graph():

	def __init__(self, vertices):
		self.V = vertices
		self.graph = [[0 for column in range(vertices)]
					for row in range(vertices)]

	def printSolution(self, dist):
		print("Vertex 	Distance from Source")
		for node in range(self.V):
			print(node, "	", dist[node])

	# A utility function to find the vertex with
	# minimum distance value, from the set of vertices
	# not yet included in shortest path tree
	def minDistance(self, dist, sptSet):

		# Initialize minimum distance for next node
		min = sys.maxsize

		# Search not nearest vertex not in the
		# shortest path tree
		for u in range(self.V):
			if dist[u] < min and sptSet[u] == False:
				min = dist[u]
				min_index = u

		return min_index

	# Function that implements Dijkstra's single source
	# shortest path algorithm for a graph represented
	# using adjacency matrix representation
	def dijkstra(self, src):

		dist = [sys.maxsize] * self.V
		dist[src] = 0
		sptSet = [False] * self.V

		for cout in range(self.V):

			# Pick the minimum distance vertex from
			# the set of vertices not yet processed.
			# x is always equal to src in first iteration
			x = self.minDistance(dist, sptSet)

			# Put the minimum distance vertex in the
			# shortest path tree
			sptSet[x] = True

			# Update dist value of the adjacent vertices
			# of the picked vertex only if the current
			# distance is greater than new distance and
			# the vertex in not in the shortest path tree
			for y in range(self.V):
				if self.graph[x][y] > 0 and sptSet[y] == False and 						dist[y] > dist[x] + self.graph[x][y]:
					dist[y] = dist[x] + self.graph[x][y]

		self.printSolution(dist)


# Driver's code
if __name__ == "__main__":
	g = Graph(9)
	g.graph = [[0, 4, 0, 0, 0, 0, 0, 8, 0],
			[4, 0, 8, 0, 0, 0, 0, 11, 0],
			[0, 8, 0, 7, 0, 4, 0, 0, 2],
			[0, 0, 7, 0, 9, 14, 0, 0, 0],
			[0, 0, 0, 9, 0, 10, 0, 0, 0],
			[0, 0, 4, 14, 10, 0, 2, 0, 0],
			[0, 0, 0, 0, 0, 2, 0, 1, 6],
			[8, 11, 0, 0, 0, 0, 1, 0, 7],
			[0, 0, 2, 0, 0, 0, 6, 7, 0]
			]

	g.dijkstra(0)
                `))),s.createElement(Go,{value:t,index:1,style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)"}},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C program for Dijkstra's single source shortest path
// algorithm. The program is for adjacency matrix
// representation of the graph

#include <limits.h>
#include <stdbool.h>
#include <stdio.h>

// Number of vertices in the graph
#define V 9

// A utility function to find the vertex with minimum
// distance value, from the set of vertices not yet included
// in shortest path tree
int minDistance(int dist[], bool sptSet[])
{
	// Initialize min value
	int min = INT_MAX, min_index;

	for (int v = 0; v < V; v++)
		if (sptSet[v] == false && dist[v] <= min)
			min = dist[v], min_index = v;

	return min_index;
}

// A utility function to print the constructed distance
// array
void printSolution(int dist[])
{
	printf("Vertex 		 Distance from Source
");
	for (int i = 0; i < V; i++)
		printf("%d 				 %d
", i, dist[i]);
}

// Function that implements Dijkstra's single source
// shortest path algorithm for a graph represented using
// adjacency matrix representation
void dijkstra(int graph[V][V], int src)
{
	int dist[V]; // The output array. dist[i] will hold the
				// shortest
	// distance from src to i

	bool sptSet[V]; // sptSet[i] will be true if vertex i is
					// included in shortest
	// path tree or shortest distance from src to i is
	// finalized

	// Initialize all distances as INFINITE and stpSet[] as
	// false
	for (int i = 0; i < V; i++)
		dist[i] = INT_MAX, sptSet[i] = false;

	// Distance of source vertex from itself is always 0
	dist[src] = 0;

	// Find shortest path for all vertices
	for (int count = 0; count < V - 1; count++) {
		// Pick the minimum distance vertex from the set of
		// vertices not yet processed. u is always equal to
		// src in the first iteration.
		int u = minDistance(dist, sptSet);

		// Mark the picked vertex as processed
		sptSet[u] = true;

		// Update dist value of the adjacent vertices of the
		// picked vertex.
		for (int v = 0; v < V; v++)

			// Update dist[v] only if is not in sptSet,
			// there is an edge from u to v, and total
			// weight of path from src to v through u is
			// smaller than current value of dist[v]
			if (!sptSet[v] && graph[u][v]
				&& dist[u] != INT_MAX
				&& dist[u] + graph[u][v] < dist[v])
				dist[v] = dist[u] + graph[u][v];
	}

	// print the constructed distance array
	printSolution(dist);
}

// driver's code
int main()
{
	/* Let us create the example graph discussed above */
	int graph[V][V] = { { 0, 4, 0, 0, 0, 0, 0, 8, 0 },
						{ 4, 0, 8, 0, 0, 0, 0, 11, 0 },
						{ 0, 8, 0, 7, 0, 4, 0, 0, 2 },
						{ 0, 0, 7, 0, 9, 14, 0, 0, 0 },
						{ 0, 0, 0, 9, 0, 10, 0, 0, 0 },
						{ 0, 0, 4, 14, 10, 0, 2, 0, 0 },
						{ 0, 0, 0, 0, 0, 2, 0, 1, 6 },
						{ 8, 11, 0, 0, 0, 0, 1, 0, 7 },
						{ 0, 0, 2, 0, 0, 0, 6, 7, 0 } };

	// Function call
	dijkstra(graph, 0);

	return 0;
}
`))),s.createElement(Go,{value:t,index:2},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// C++ program for Dijkstra's single source shortest path
// algorithm. The program is for adjacency matrix
// representation of the graph
#include <iostream>
using namespace std;
#include <limits.h>

// Number of vertices in the graph
#define V 9

// A utility function to find the vertex with minimum
// distance value, from the set of vertices not yet included
// in shortest path tree
int minDistance(int dist[], bool sptSet[])
{

	// Initialize min value
	int min = INT_MAX, min_index;

	for (int v = 0; v < V; v++)
		if (sptSet[v] == false && dist[v] <= min)
			min = dist[v], min_index = v;

	return min_index;
}

// A utility function to print the constructed distance
// array
void printSolution(int dist[])
{
	cout << "Vertex 	 Distance from Source" << endl;
	for (int i = 0; i < V; i++)
		cout << i << " 				" << dist[i] << endl;
}

// Function that implements Dijkstra's single source
// shortest path algorithm for a graph represented using
// adjacency matrix representation
void dijkstra(int graph[V][V], int src)
{
	int dist[V]; // The output array. dist[i] will hold the
				// shortest
	// distance from src to i

	bool sptSet[V]; // sptSet[i] will be true if vertex i is
					// included in shortest
	// path tree or shortest distance from src to i is
	// finalized

	// Initialize all distances as INFINITE and stpSet[] as
	// false
	for (int i = 0; i < V; i++)
		dist[i] = INT_MAX, sptSet[i] = false;

	// Distance of source vertex from itself is always 0
	dist[src] = 0;

	// Find shortest path for all vertices
	for (int count = 0; count < V - 1; count++) {
		// Pick the minimum distance vertex from the set of
		// vertices not yet processed. u is always equal to
		// src in the first iteration.
		int u = minDistance(dist, sptSet);

		// Mark the picked vertex as processed
		sptSet[u] = true;

		// Update dist value of the adjacent vertices of the
		// picked vertex.
		for (int v = 0; v < V; v++)

			// Update dist[v] only if is not in sptSet,
			// there is an edge from u to v, and total
			// weight of path from src to v through u is
			// smaller than current value of dist[v]
			if (!sptSet[v] && graph[u][v]
				&& dist[u] != INT_MAX
				&& dist[u] + graph[u][v] < dist[v])
				dist[v] = dist[u] + graph[u][v];
	}

	// print the constructed distance array
	printSolution(dist);
}

// driver's code
int main()
{

	/* Let us create the example graph discussed above */
	int graph[V][V] = { { 0, 4, 0, 0, 0, 0, 0, 8, 0 },
						{ 4, 0, 8, 0, 0, 0, 0, 11, 0 },
						{ 0, 8, 0, 7, 0, 4, 0, 0, 2 },
						{ 0, 0, 7, 0, 9, 14, 0, 0, 0 },
						{ 0, 0, 0, 9, 0, 10, 0, 0, 0 },
						{ 0, 0, 4, 14, 10, 0, 2, 0, 0 },
						{ 0, 0, 0, 0, 0, 2, 0, 1, 6 },
						{ 8, 11, 0, 0, 0, 0, 1, 0, 7 },
						{ 0, 0, 2, 0, 0, 0, 6, 7, 0 } };

	// Function call
	dijkstra(graph, 0);

	return 0;
}
`))),s.createElement(Go,{value:t,index:3},s.createElement("div",{style:{backgroundClip:"border-box",backgroundColor:"rgb(56,59,64)",color:" rgb(211, 211, 211)",padding:"10px"}},s.createElement("pre",null,`
// A Java program for Dijkstra's single source shortest path
// algorithm. The program is for adjacency matrix
// representation of the graph
import java.io.*;
import java.lang.*;
import java.util.*;

class ShortestPath {
	// A utility function to find the vertex with minimum
	// distance value, from the set of vertices not yet
	// included in shortest path tree
	static final int V = 9;
	int minDistance(int dist[], Boolean sptSet[])
	{
		// Initialize min value
		int min = Integer.MAX_VALUE, min_index = -1;

		for (int v = 0; v < V; v++)
			if (sptSet[v] == false && dist[v] <= min) {
				min = dist[v];
				min_index = v;
			}

		return min_index;
	}

	// A utility function to print the constructed distance
	// array
	void printSolution(int dist[])
	{
		System.out.println(
			"Vertex 		 Distance from Source");
		for (int i = 0; i < V; i++)
			System.out.println(i + " 		 " + dist[i]);
	}

	// Function that implements Dijkstra's single source
	// shortest path algorithm for a graph represented using
	// adjacency matrix representation
	void dijkstra(int graph[][], int src)
	{
		int dist[] = new int[V]; // The output array.
								// dist[i] will hold
		// the shortest distance from src to i

		// sptSet[i] will true if vertex i is included in
		// shortest path tree or shortest distance from src
		// to i is finalized
		Boolean sptSet[] = new Boolean[V];

		// Initialize all distances as INFINITE and stpSet[]
		// as false
		for (int i = 0; i < V; i++) {
			dist[i] = Integer.MAX_VALUE;
			sptSet[i] = false;
		}

		// Distance of source vertex from itself is always 0
		dist[src] = 0;

		// Find shortest path for all vertices
		for (int count = 0; count < V - 1; count++) {
			// Pick the minimum distance vertex from the set
			// of vertices not yet processed. u is always
			// equal to src in first iteration.
			int u = minDistance(dist, sptSet);

			// Mark the picked vertex as processed
			sptSet[u] = true;

			// Update dist value of the adjacent vertices of
			// the picked vertex.
			for (int v = 0; v < V; v++)

				// Update dist[v] only if is not in sptSet,
				// there is an edge from u to v, and total
				// weight of path from src to v through u is
				// smaller than current value of dist[v]
				if (!sptSet[v] && graph[u][v] != 0
					&& dist[u] != Integer.MAX_VALUE
					&& dist[u] + graph[u][v] < dist[v])
					dist[v] = dist[u] + graph[u][v];
		}

		// print the constructed distance array
		printSolution(dist);
	}

	// Driver's code
	public static void main(String[] args)
	{
		/* Let us create the example graph discussed above
		*/
		int graph[][]
			= new int[][] { { 0, 4, 0, 0, 0, 0, 0, 8, 0 },
							{ 4, 0, 8, 0, 0, 0, 0, 11, 0 },
							{ 0, 8, 0, 7, 0, 4, 0, 0, 2 },
							{ 0, 0, 7, 0, 9, 14, 0, 0, 0 },
							{ 0, 0, 0, 9, 0, 10, 0, 0, 0 },
							{ 0, 0, 4, 14, 10, 0, 2, 0, 0 },
							{ 0, 0, 0, 0, 0, 2, 0, 1, 6 },
							{ 8, 11, 0, 0, 0, 0, 1, 0, 7 },
							{ 0, 0, 2, 0, 0, 0, 6, 7, 0 } };
		ShortestPath t = new ShortestPath();

		// Function call
		t.dijkstra(graph, 0);
	}
}
// This code is contributed by Aakash Hasija

`))))))}de.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;de(Ve)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
`;const Ai={display:"flex",justifyContent:"center"};function Ko(t){const{children:e,value:r,index:n,...i}=t;return s.createElement("div",{role:"tabpanel",hidden:r!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...i,style:{maxWidth:"100%",width:"100%"}},r===n&&e)}function b$(){const t=ut(l=>l.resetSorting);s.useState(0);const[e,r,n,i,a,o]=Le(l=>[l.sortingArray,l.algorithm,l.searchingAlgorithm,l.dataStructure,l.other,l.tabTitle],We);if(d.exports.useEffect(()=>{t()},[r]),e.length===0)return s.createElement("h3",{style:Ai},"Please enter input array or use generate button");if(o==0)return s.createElement(E5,null);if(o==1)return s.createElement(s.Fragment,null,s.createElement(Ku,null),s.createElement("div",{style:Ai},Ml.map((l,u)=>s.createElement(Ko,{value:r,index:u,key:l.name},s.createElement(Yh,{array:e,sortFunction:l.component,sortingAlgorithmName:l.name}),l.name==="BubbleSort"?s.createElement(U5,null):s.createElement(s.Fragment,null),l.name==="SelectionSort"?s.createElement(q5,null):s.createElement(s.Fragment,null),l.name==="InsertionSort"?s.createElement(G5,null):s.createElement(s.Fragment,null),l.name==="HeapSort"?s.createElement(K5,null):s.createElement(s.Fragment,null),l.name==="MergeSort"?s.createElement(Q5,null):s.createElement(s.Fragment,null),l.name==="QuickSort"?s.createElement(X5,null):s.createElement(s.Fragment,null)))));if(o==2)return s.createElement("div",{style:Ai},Jy.map((l,u)=>s.createElement(Ko,{value:n,index:u,key:l.name},s.createElement(Ku,null),s.createElement(M5,{array:e,sortFunction:l.component,sortingAlgorithmName:l.name}),l.name==="LinearSearch"?s.createElement(Y5,null):s.createElement(s.Fragment,null),l.name==="BinarySearch"?s.createElement(J5,null):s.createElement(s.Fragment,null))));if(o==3)return s.createElement(s.Fragment,null,s.createElement("div",{style:Ai},Zy.map((l,u)=>s.createElement(Ko,{value:i,index:u,key:l.name},l.name==="Array"?s.createElement(s.Fragment,null,s.createElement(Ku,null),s.createElement(Yh,{array:e,sortFunction:l.component,sortingAlgorithmName:l.name}),s.createElement(Z5,null)):s.createElement(s.Fragment,null),l.name==="Linked List"?s.createElement(o$,null):s.createElement(s.Fragment,null),l.name==="Stack"?s.createElement(t$,null):s.createElement(s.Fragment,null),l.name==="Queue"?s.createElement(n$,null):s.createElement(s.Fragment,null),l.name==="Tree"?s.createElement(s$,null):s.createElement(s.Fragment,null)))));if(o==4)return s.createElement(s.Fragment,null,s.createElement("div",{style:Ai},e0.map((l,u)=>s.createElement(Ko,{value:a,index:u,key:l.name},l.name==="BFS"?s.createElement(c$,null):s.createElement(s.Fragment,null),l.name==="DFS"?s.createElement(f$,null):s.createElement(s.Fragment,null),l.name==="Dijkstra"?s.createElement(y$,null):s.createElement(s.Fragment,null),l.name==="Kruskal"?s.createElement(m$,null):s.createElement(s.Fragment,null),l.name==="Primms"?s.createElement(g$,null):s.createElement(s.Fragment,null)))))}const x$=de.div`
  margin: 0 10px;
  min-height: calc(100vh - 50px);
  position: relative;
  margin-bottom: 50px;
`;function w$(){return s.createElement(x$,null,s.createElement(e_,null),s.createElement(b$,null))}Di.render(s.createElement(s.StrictMode,{value:!1},s.createElement(w$,null)),document.getElementById("root"));
