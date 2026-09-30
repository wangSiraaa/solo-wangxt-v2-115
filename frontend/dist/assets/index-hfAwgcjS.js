(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ov(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hm={exports:{}},Ul={},pm={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),av=Symbol.for("react.portal"),lv=Symbol.for("react.fragment"),uv=Symbol.for("react.strict_mode"),cv=Symbol.for("react.profiler"),fv=Symbol.for("react.provider"),dv=Symbol.for("react.context"),hv=Symbol.for("react.forward_ref"),pv=Symbol.for("react.suspense"),mv=Symbol.for("react.memo"),gv=Symbol.for("react.lazy"),Ed=Symbol.iterator;function _v(t){return t===null||typeof t!="object"?null:(t=Ed&&t[Ed]||t["@@iterator"],typeof t=="function"?t:null)}var mm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gm=Object.assign,_m={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=_m,this.updater=n||mm}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vm(){}vm.prototype=Fs.prototype;function _f(t,e,n){this.props=t,this.context=e,this.refs=_m,this.updater=n||mm}var vf=_f.prototype=new vm;vf.constructor=_f;gm(vf,Fs.prototype);vf.isPureReactComponent=!0;var Td=Array.isArray,xm=Object.prototype.hasOwnProperty,xf={current:null},ym={key:!0,ref:!0,__self:!0,__source:!0};function Sm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xm.call(e,i)&&!ym.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ko,type:t,key:s,ref:o,props:r,_owner:xf.current}}function vv(t,e){return{$$typeof:ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ko}function xv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wd=/\/+/g;function au(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xv(""+t.key):e.toString(36)}function Ba(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ko:case av:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+au(o,0):i,Td(r)?(n="",t!=null&&(n=t.replace(wd,"$&/")+"/"),Ba(r,e,n,"",function(u){return u})):r!=null&&(yf(r)&&(r=vv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(wd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Td(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+au(s,a);o+=Ba(s,e,n,l,r)}else if(l=_v(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+au(s,a++),o+=Ba(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function jo(t,e,n){if(t==null)return t;var i=[],r=0;return Ba(t,i,"","",function(s){return e.call(n,s,r++)}),i}function yv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Ha={transition:null},Sv={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Ha,ReactCurrentOwner:xf};function Mm(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:jo,forEach:function(t,e,n){jo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return jo(t,function(){e++}),e},toArray:function(t){return jo(t,function(e){return e})||[]},only:function(t){if(!yf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=Fs;He.Fragment=lv;He.Profiler=cv;He.PureComponent=_f;He.StrictMode=uv;He.Suspense=pv;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sv;He.act=Mm;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=gm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xm.call(e,l)&&!ym.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ko,type:t.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(t){return t={$$typeof:dv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fv,_context:t},t.Consumer=t};He.createElement=Sm;He.createFactory=function(t){var e=Sm.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:hv,render:t}};He.isValidElement=yf;He.lazy=function(t){return{$$typeof:gv,_payload:{_status:-1,_result:t},_init:yv}};He.memo=function(t,e){return{$$typeof:mv,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=Ha.transition;Ha.transition={};try{t()}finally{Ha.transition=e}};He.unstable_act=Mm;He.useCallback=function(t,e){return qt.current.useCallback(t,e)};He.useContext=function(t){return qt.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};He.useEffect=function(t,e){return qt.current.useEffect(t,e)};He.useId=function(){return qt.current.useId()};He.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return qt.current.useMemo(t,e)};He.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};He.useRef=function(t){return qt.current.useRef(t)};He.useState=function(t){return qt.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return qt.current.useTransition()};He.version="18.3.1";pm.exports=He;var $e=pm.exports;const Mv=ov($e);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev=$e,Tv=Symbol.for("react.element"),wv=Symbol.for("react.fragment"),Av=Object.prototype.hasOwnProperty,Cv=Ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rv={key:!0,ref:!0,__self:!0,__source:!0};function Em(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Av.call(e,i)&&!Rv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Tv,type:t,key:s,ref:o,props:r,_owner:Cv.current}}Ul.Fragment=wv;Ul.jsx=Em;Ul.jsxs=Em;hm.exports=Ul;var z=hm.exports,mc={},Tm={exports:{}},gn={},wm={exports:{}},Am={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,I){var Z=N.length;N.push(I);e:for(;0<Z;){var re=Z-1>>>1,xe=N[re];if(0<r(xe,I))N[re]=I,N[Z]=xe,Z=re;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var I=N[0],Z=N.pop();if(Z!==I){N[0]=Z;e:for(var re=0,xe=N.length,Ve=xe>>>1;re<Ve;){var q=2*(re+1)-1,se=N[q],he=q+1,le=N[he];if(0>r(se,Z))he<xe&&0>r(le,se)?(N[re]=le,N[he]=Z,re=he):(N[re]=se,N[q]=Z,re=q);else if(he<xe&&0>r(le,Z))N[re]=le,N[he]=Z,re=he;else break e}}return I}function r(N,I){var Z=N.sortIndex-I.sortIndex;return Z!==0?Z:N.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,h=null,d=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var I=n(u);I!==null;){if(I.callback===null)i(u);else if(I.startTime<=N)i(u),I.sortIndex=I.expirationTime,e(l,I);else break;I=n(u)}}function M(N){if(x=!1,_(N),!v)if(n(l)!==null)v=!0,Y(R);else{var I=n(u);I!==null&&Q(M,I.startTime-N)}}function R(N,I){v=!1,x&&(x=!1,c(b),b=-1),p=!0;var Z=d;try{for(_(I),h=n(l);h!==null&&(!(h.expirationTime>I)||N&&!L());){var re=h.callback;if(typeof re=="function"){h.callback=null,d=h.priorityLevel;var xe=re(h.expirationTime<=I);I=t.unstable_now(),typeof xe=="function"?h.callback=xe:h===n(l)&&i(l),_(I)}else i(l);h=n(l)}if(h!==null)var Ve=!0;else{var q=n(u);q!==null&&Q(M,q.startTime-I),Ve=!1}return Ve}finally{h=null,d=Z,p=!1}}var C=!1,A=null,b=-1,w=5,S=-1;function L(){return!(t.unstable_now()-S<w)}function H(){if(A!==null){var N=t.unstable_now();S=N;var I=!0;try{I=A(!0,N)}finally{I?O():(C=!1,A=null)}}else C=!1}var O;if(typeof g=="function")O=function(){g(H)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,K=$.port2;$.port1.onmessage=H,O=function(){K.postMessage(null)}}else O=function(){m(H,0)};function Y(N){A=N,C||(C=!0,O())}function Q(N,I){b=m(function(){N(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Y(R))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var I=3;break;default:I=d}var Z=d;d=I;try{return N()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=d;d=N;try{return I()}finally{d=Z}},t.unstable_scheduleCallback=function(N,I,Z){var re=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?re+Z:re):Z=re,N){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=Z+xe,N={id:f++,callback:I,priorityLevel:N,startTime:Z,expirationTime:xe,sortIndex:-1},Z>re?(N.sortIndex=Z,e(u,N),n(l)===null&&N===n(u)&&(x?(c(b),b=-1):x=!0,Q(M,Z-re))):(N.sortIndex=xe,e(l,N),v||p||(v=!0,Y(R))),N},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(N){var I=d;return function(){var Z=d;d=I;try{return N.apply(this,arguments)}finally{d=Z}}}})(Am);wm.exports=Am;var Pv=wm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv=$e,mn=Pv;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cm=new Set,xo={};function Rr(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(xo[t]=e,t=0;t<e.length;t++)Cm.add(e[t])}var ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gc=Object.prototype.hasOwnProperty,Lv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ad={},Cd={};function Dv(t){return gc.call(Cd,t)?!0:gc.call(Ad,t)?!1:Lv.test(t)?Cd[t]=!0:(Ad[t]=!0,!1)}function Nv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Uv(t,e,n,i){if(e===null||typeof e>"u"||Nv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sf=/[\-:]([a-z])/g;function Mf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sf,Mf);Ft[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sf,Mf);Ft[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sf,Mf);Ft[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ef(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Uv(e,n,r,i)&&(n=null),i||r===null?Dv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var pi=bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),Tf=Symbol.for("react.strict_mode"),_c=Symbol.for("react.profiler"),Rm=Symbol.for("react.provider"),Pm=Symbol.for("react.context"),wf=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),xc=Symbol.for("react.suspense_list"),Af=Symbol.for("react.memo"),Ti=Symbol.for("react.lazy"),bm=Symbol.for("react.offscreen"),Rd=Symbol.iterator;function Gs(t){return t===null||typeof t!="object"?null:(t=Rd&&t[Rd]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,lu;function io(t){if(lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lu=e&&e[1]||""}return`
`+lu+t}var uu=!1;function cu(t,e){if(!t||uu)return"";uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{uu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?io(t):""}function Iv(t){switch(t.tag){case 5:return io(t.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return t=cu(t.type,!1),t;case 11:return t=cu(t.type.render,!1),t;case 1:return t=cu(t.type,!0),t;default:return""}}function yc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case _c:return"Profiler";case Tf:return"StrictMode";case vc:return"Suspense";case xc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pm:return(t.displayName||"Context")+".Consumer";case Rm:return(t._context.displayName||"Context")+".Provider";case wf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Af:return e=t.displayName||null,e!==null?e:yc(t.type)||"Memo";case Ti:e=t._payload,t=t._init;try{return yc(t(e))}catch{}}return null}function Fv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yc(e);case 8:return e===Tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ov(t){var e=Lm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $o(t){t._valueTracker||(t._valueTracker=Ov(t))}function Dm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Lm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function el(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sc(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Gi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Nm(t,e){e=e.checked,e!=null&&Ef(t,"checked",e,!1)}function Mc(t,e){Nm(t,e);var n=Gi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ec(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ec(t,e.type,Gi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ec(t,e,n){(e!=="number"||el(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ro=Array.isArray;function hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Gi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Tc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ld(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(ro(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gi(n)}}function Um(t,e){var n=Gi(e.value),i=Gi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Dd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Im(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Im(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qo,Fm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qo=qo||document.createElement("div"),qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function yo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kv=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(t){kv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),lo[e]=lo[t]})});function Om(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||lo.hasOwnProperty(t)&&lo[t]?(""+e).trim():e+"px"}function km(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Om(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var zv=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ac(t,e){if(e){if(zv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Cc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rc=null;function Cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pc=null,ps=null,ms=null;function Nd(t){if(t=Ho(t)){if(typeof Pc!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=zl(e),Pc(t.stateNode,t.type,e))}}function zm(t){ps?ms?ms.push(t):ms=[t]:ps=t}function Bm(){if(ps){var t=ps,e=ms;if(ms=ps=null,Nd(t),e)for(t=0;t<e.length;t++)Nd(e[t])}}function Hm(t,e){return t(e)}function Vm(){}var fu=!1;function Gm(t,e,n){if(fu)return t(e,n);fu=!0;try{return Hm(t,e,n)}finally{fu=!1,(ps!==null||ms!==null)&&(Vm(),Bm())}}function So(t,e){var n=t.stateNode;if(n===null)return null;var i=zl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var bc=!1;if(ci)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){bc=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{bc=!1}function Bv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var uo=!1,tl=null,nl=!1,Lc=null,Hv={onError:function(t){uo=!0,tl=t}};function Vv(t,e,n,i,r,s,o,a,l){uo=!1,tl=null,Bv.apply(Hv,arguments)}function Gv(t,e,n,i,r,s,o,a,l){if(Vv.apply(this,arguments),uo){if(uo){var u=tl;uo=!1,tl=null}else throw Error(ie(198));nl||(nl=!0,Lc=u)}}function Pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ud(t){if(Pr(t)!==t)throw Error(ie(188))}function Wv(t){var e=t.alternate;if(!e){if(e=Pr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ud(r),t;if(s===i)return Ud(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Xm(t){return t=Wv(t),t!==null?jm(t):null}function jm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jm(t);if(e!==null)return e;t=t.sibling}return null}var Ym=mn.unstable_scheduleCallback,Id=mn.unstable_cancelCallback,Xv=mn.unstable_shouldYield,jv=mn.unstable_requestPaint,_t=mn.unstable_now,Yv=mn.unstable_getCurrentPriorityLevel,Rf=mn.unstable_ImmediatePriority,$m=mn.unstable_UserBlockingPriority,il=mn.unstable_NormalPriority,$v=mn.unstable_LowPriority,qm=mn.unstable_IdlePriority,Il=null,jn=null;function qv(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(Il,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:Qv,Kv=Math.log,Zv=Math.LN2;function Qv(t){return t>>>=0,t===0?32:31-(Kv(t)/Zv|0)|0}var Ko=64,Zo=4194304;function so(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=so(a):(s&=o,s!==0&&(i=so(s)))}else o=n&~r,o!==0?i=so(o):s!==0&&(i=so(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function Jv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Jv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Dc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Km(){var t=Ko;return Ko<<=1,!(Ko&4194240)&&(Ko=64),t}function du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function t0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Zm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qm,bf,Jm,eg,tg,Nc=!1,Qo=[],Ni=null,Ui=null,Ii=null,Mo=new Map,Eo=new Map,Ci=[],n0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fd(t,e){switch(t){case"focusin":case"focusout":Ni=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":Mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(e.pointerId)}}function Xs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ho(e),e!==null&&bf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function i0(t,e,n,i,r){switch(e){case"focusin":return Ni=Xs(Ni,t,e,n,i,r),!0;case"dragenter":return Ui=Xs(Ui,t,e,n,i,r),!0;case"mouseover":return Ii=Xs(Ii,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Mo.set(s,Xs(Mo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Eo.set(s,Xs(Eo.get(s)||null,t,e,n,i,r)),!0}return!1}function ng(t){var e=hr(t.target);if(e!==null){var n=Pr(e);if(n!==null){if(e=n.tag,e===13){if(e=Wm(n),e!==null){t.blockedOn=e,tg(t.priority,function(){Jm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Va(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Rc=i,n.target.dispatchEvent(i),Rc=null}else return e=Ho(n),e!==null&&bf(e),t.blockedOn=n,!1;e.shift()}return!0}function Od(t,e,n){Va(t)&&n.delete(e)}function r0(){Nc=!1,Ni!==null&&Va(Ni)&&(Ni=null),Ui!==null&&Va(Ui)&&(Ui=null),Ii!==null&&Va(Ii)&&(Ii=null),Mo.forEach(Od),Eo.forEach(Od)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,Nc||(Nc=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,r0)))}function To(t){function e(r){return js(r,t)}if(0<Qo.length){js(Qo[0],t);for(var n=1;n<Qo.length;n++){var i=Qo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ni!==null&&js(Ni,t),Ui!==null&&js(Ui,t),Ii!==null&&js(Ii,t),Mo.forEach(e),Eo.forEach(e),n=0;n<Ci.length;n++)i=Ci[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ci.length&&(n=Ci[0],n.blockedOn===null);)ng(n),n.blockedOn===null&&Ci.shift()}var gs=pi.ReactCurrentBatchConfig,sl=!0;function s0(t,e,n,i){var r=Je,s=gs.transition;gs.transition=null;try{Je=1,Lf(t,e,n,i)}finally{Je=r,gs.transition=s}}function o0(t,e,n,i){var r=Je,s=gs.transition;gs.transition=null;try{Je=4,Lf(t,e,n,i)}finally{Je=r,gs.transition=s}}function Lf(t,e,n,i){if(sl){var r=Uc(t,e,n,i);if(r===null)Mu(t,e,i,ol,n),Fd(t,i);else if(i0(r,t,e,n,i))i.stopPropagation();else if(Fd(t,i),e&4&&-1<n0.indexOf(t)){for(;r!==null;){var s=Ho(r);if(s!==null&&Qm(s),s=Uc(t,e,n,i),s===null&&Mu(t,e,i,ol,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Mu(t,e,i,null,n)}}var ol=null;function Uc(t,e,n,i){if(ol=null,t=Cf(i),t=hr(t),t!==null)if(e=Pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ol=t,null}function ig(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yv()){case Rf:return 1;case $m:return 4;case il:case $v:return 16;case qm:return 536870912;default:return 16}default:return 16}}var bi=null,Df=null,Ga=null;function rg(){if(Ga)return Ga;var t,e=Df,n=e.length,i,r="value"in bi?bi.value:bi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ga=r.slice(t,1<i?1-i:void 0)}function Wa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function kd(){return!1}function _n(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Jo:kd,this.isPropagationStopped=kd,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nf=_n(Os),Bo=ft({},Os,{view:0,detail:0}),a0=_n(Bo),hu,pu,Ys,Fl=ft({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(hu=t.screenX-Ys.screenX,pu=t.screenY-Ys.screenY):pu=hu=0,Ys=t),hu)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),zd=_n(Fl),l0=ft({},Fl,{dataTransfer:0}),u0=_n(l0),c0=ft({},Bo,{relatedTarget:0}),mu=_n(c0),f0=ft({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),d0=_n(f0),h0=ft({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),p0=_n(h0),m0=ft({},Os,{data:0}),Bd=_n(m0),g0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=v0[t])?!!e[t]:!1}function Uf(){return x0}var y0=ft({},Bo,{key:function(t){if(t.key){var e=g0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uf,charCode:function(t){return t.type==="keypress"?Wa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),S0=_n(y0),M0=ft({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=_n(M0),E0=ft({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uf}),T0=_n(E0),w0=ft({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),A0=_n(w0),C0=ft({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R0=_n(C0),P0=[9,13,27,32],If=ci&&"CompositionEvent"in window,co=null;ci&&"documentMode"in document&&(co=document.documentMode);var b0=ci&&"TextEvent"in window&&!co,sg=ci&&(!If||co&&8<co&&11>=co),Vd=" ",Gd=!1;function og(t,e){switch(t){case"keyup":return P0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ag(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function L0(t,e){switch(t){case"compositionend":return ag(e);case"keypress":return e.which!==32?null:(Gd=!0,Vd);case"textInput":return t=e.data,t===Vd&&Gd?null:t;default:return null}}function D0(t,e){if(ns)return t==="compositionend"||!If&&og(t,e)?(t=rg(),Ga=Df=bi=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sg&&e.locale!=="ko"?null:e.data;default:return null}}var N0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!N0[t.type]:e==="textarea"}function lg(t,e,n,i){zm(i),e=al(e,"onChange"),0<e.length&&(n=new Nf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fo=null,wo=null;function U0(t){xg(t,0)}function Ol(t){var e=ss(t);if(Dm(e))return t}function I0(t,e){if(t==="change")return e}var ug=!1;if(ci){var gu;if(ci){var _u="oninput"in document;if(!_u){var Xd=document.createElement("div");Xd.setAttribute("oninput","return;"),_u=typeof Xd.oninput=="function"}gu=_u}else gu=!1;ug=gu&&(!document.documentMode||9<document.documentMode)}function jd(){fo&&(fo.detachEvent("onpropertychange",cg),wo=fo=null)}function cg(t){if(t.propertyName==="value"&&Ol(wo)){var e=[];lg(e,wo,t,Cf(t)),Gm(U0,e)}}function F0(t,e,n){t==="focusin"?(jd(),fo=e,wo=n,fo.attachEvent("onpropertychange",cg)):t==="focusout"&&jd()}function O0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ol(wo)}function k0(t,e){if(t==="click")return Ol(e)}function z0(t,e){if(t==="input"||t==="change")return Ol(e)}function B0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:B0;function Ao(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!gc.call(e,r)||!zn(t[r],e[r]))return!1}return!0}function Yd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $d(t,e){var n=Yd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yd(n)}}function fg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dg(){for(var t=window,e=el();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=el(t.document)}return e}function Ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function H0(t){var e=dg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fg(n.ownerDocument.documentElement,n)){if(i!==null&&Ff(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=$d(n,s);var o=$d(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var V0=ci&&"documentMode"in document&&11>=document.documentMode,is=null,Ic=null,ho=null,Fc=!1;function qd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fc||is==null||is!==el(i)||(i=is,"selectionStart"in i&&Ff(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ho&&Ao(ho,i)||(ho=i,i=al(Ic,"onSelect"),0<i.length&&(e=new Nf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=is)))}function ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},vu={},hg={};ci&&(hg=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function kl(t){if(vu[t])return vu[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hg)return vu[t]=e[n];return t}var pg=kl("animationend"),mg=kl("animationiteration"),gg=kl("animationstart"),_g=kl("transitionend"),vg=new Map,Kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,e){vg.set(t,e),Rr(e,[t])}for(var xu=0;xu<Kd.length;xu++){var yu=Kd[xu],G0=yu.toLowerCase(),W0=yu[0].toUpperCase()+yu.slice(1);$i(G0,"on"+W0)}$i(pg,"onAnimationEnd");$i(mg,"onAnimationIteration");$i(gg,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(_g,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X0=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Zd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Gv(i,e,void 0,t),t.currentTarget=null}function xg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Zd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Zd(r,a,u),s=l}}}if(nl)throw t=Lc,nl=!1,Lc=null,t}function it(t,e){var n=e[Hc];n===void 0&&(n=e[Hc]=new Set);var i=t+"__bubble";n.has(i)||(yg(e,t,2,!1),n.add(i))}function Su(t,e,n){var i=0;e&&(i|=4),yg(n,t,i,e)}var ta="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[ta]){t[ta]=!0,Cm.forEach(function(n){n!=="selectionchange"&&(X0.has(n)||Su(n,!1,t),Su(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ta]||(e[ta]=!0,Su("selectionchange",!1,e))}}function yg(t,e,n,i){switch(ig(e)){case 1:var r=s0;break;case 4:r=o0;break;default:r=Lf}n=r.bind(null,e,n,t),r=void 0,!bc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Mu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Gm(function(){var u=s,f=Cf(n),h=[];e:{var d=vg.get(t);if(d!==void 0){var p=Nf,v=t;switch(t){case"keypress":if(Wa(n)===0)break e;case"keydown":case"keyup":p=S0;break;case"focusin":v="focus",p=mu;break;case"focusout":v="blur",p=mu;break;case"beforeblur":case"afterblur":p=mu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=u0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=T0;break;case pg:case mg:case gg:p=d0;break;case _g:p=A0;break;case"scroll":p=a0;break;case"wheel":p=R0;break;case"copy":case"cut":case"paste":p=p0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Hd}var x=(e&4)!==0,m=!x&&t==="scroll",c=x?d!==null?d+"Capture":null:d;x=[];for(var g=u,_;g!==null;){_=g;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,c!==null&&(M=So(g,c),M!=null&&x.push(Ro(g,M,_)))),m)break;g=g.return}0<x.length&&(d=new p(d,v,null,n,f),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Rc&&(v=n.relatedTarget||n.fromElement)&&(hr(v)||v[fi]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?hr(v):null,v!==null&&(m=Pr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(x=zd,M="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Hd,M="onPointerLeave",c="onPointerEnter",g="pointer"),m=p==null?d:ss(p),_=v==null?d:ss(v),d=new x(M,g+"leave",p,n,f),d.target=m,d.relatedTarget=_,M=null,hr(f)===u&&(x=new x(c,g+"enter",v,n,f),x.target=_,x.relatedTarget=m,M=x),m=M,p&&v)t:{for(x=p,c=v,g=0,_=x;_;_=Lr(_))g++;for(_=0,M=c;M;M=Lr(M))_++;for(;0<g-_;)x=Lr(x),g--;for(;0<_-g;)c=Lr(c),_--;for(;g--;){if(x===c||c!==null&&x===c.alternate)break t;x=Lr(x),c=Lr(c)}x=null}else x=null;p!==null&&Qd(h,d,p,x,!1),v!==null&&m!==null&&Qd(h,m,v,x,!0)}}e:{if(d=u?ss(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=I0;else if(Wd(d))if(ug)R=z0;else{R=O0;var C=F0}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=k0);if(R&&(R=R(t,u))){lg(h,R,n,f);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Ec(d,"number",d.value)}switch(C=u?ss(u):window,t){case"focusin":(Wd(C)||C.contentEditable==="true")&&(is=C,Ic=u,ho=null);break;case"focusout":ho=Ic=is=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,qd(h,n,f);break;case"selectionchange":if(V0)break;case"keydown":case"keyup":qd(h,n,f)}var A;if(If)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ns?og(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(sg&&n.locale!=="ko"&&(ns||b!=="onCompositionStart"?b==="onCompositionEnd"&&ns&&(A=rg()):(bi=f,Df="value"in bi?bi.value:bi.textContent,ns=!0)),C=al(u,b),0<C.length&&(b=new Bd(b,t,null,n,f),h.push({event:b,listeners:C}),A?b.data=A:(A=ag(n),A!==null&&(b.data=A)))),(A=b0?L0(t,n):D0(t,n))&&(u=al(u,"onBeforeInput"),0<u.length&&(f=new Bd("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=A))}xg(h,e)})}function Ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function al(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=So(t,n),s!=null&&i.unshift(Ro(t,s,r)),s=So(t,e),s!=null&&i.push(Ro(t,s,r))),t=t.return}return i}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=So(n,s),l!=null&&o.unshift(Ro(n,l,a))):r||(l=So(n,s),l!=null&&o.push(Ro(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var j0=/\r\n?/g,Y0=/\u0000|\uFFFD/g;function Jd(t){return(typeof t=="string"?t:""+t).replace(j0,`
`).replace(Y0,"")}function na(t,e,n){if(e=Jd(e),Jd(t)!==e&&n)throw Error(ie(425))}function ll(){}var Oc=null,kc=null;function zc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,$0=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,q0=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(t){return eh.resolve(null).then(t).catch(K0)}:Bc;function K0(t){setTimeout(function(){throw t})}function Eu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),To(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);To(e)}function Fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function th(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),Wn="__reactFiber$"+ks,Po="__reactProps$"+ks,fi="__reactContainer$"+ks,Hc="__reactEvents$"+ks,Z0="__reactListeners$"+ks,Q0="__reactHandles$"+ks;function hr(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fi]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=th(t);t!==null;){if(n=t[Wn])return n;t=th(t)}return e}t=n,n=t.parentNode}return null}function Ho(t){return t=t[Wn]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function zl(t){return t[Po]||null}var Vc=[],os=-1;function qi(t){return{current:t}}function st(t){0>os||(t.current=Vc[os],Vc[os]=null,os--)}function nt(t,e){os++,Vc[os]=t.current,t.current=e}var Wi={},Gt=qi(Wi),Jt=qi(!1),Sr=Wi;function Ts(t,e){var n=t.type.contextTypes;if(!n)return Wi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function ul(){st(Jt),st(Gt)}function nh(t,e,n){if(Gt.current!==Wi)throw Error(ie(168));nt(Gt,e),nt(Jt,n)}function Sg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,Fv(t)||"Unknown",r));return ft({},n,i)}function cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wi,Sr=Gt.current,nt(Gt,t),nt(Jt,Jt.current),!0}function ih(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Sg(t,e,Sr),i.__reactInternalMemoizedMergedChildContext=t,st(Jt),st(Gt),nt(Gt,t)):st(Jt),nt(Jt,n)}var ri=null,Bl=!1,Tu=!1;function Mg(t){ri===null?ri=[t]:ri.push(t)}function J0(t){Bl=!0,Mg(t)}function Ki(){if(!Tu&&ri!==null){Tu=!0;var t=0,e=Je;try{var n=ri;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ri=null,Bl=!1}catch(r){throw ri!==null&&(ri=ri.slice(t+1)),Ym(Rf,Ki),r}finally{Je=e,Tu=!1}}return null}var as=[],ls=0,fl=null,dl=0,yn=[],Sn=0,Mr=null,oi=1,ai="";function lr(t,e){as[ls++]=dl,as[ls++]=fl,fl=t,dl=e}function Eg(t,e,n){yn[Sn++]=oi,yn[Sn++]=ai,yn[Sn++]=Mr,Mr=t;var i=oi;t=ai;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,oi=1<<32-On(e)+r|n<<r|i,ai=s+t}else oi=1<<s|n<<r|i,ai=t}function Of(t){t.return!==null&&(lr(t,1),Eg(t,1,0))}function kf(t){for(;t===fl;)fl=as[--ls],as[ls]=null,dl=as[--ls],as[ls]=null;for(;t===Mr;)Mr=yn[--Sn],yn[Sn]=null,ai=yn[--Sn],yn[Sn]=null,oi=yn[--Sn],yn[Sn]=null}var pn=null,dn=null,ot=!1,Un=null;function Tg(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,dn=Fi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:oi,overflow:ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,dn=null,!0):!1;default:return!1}}function Gc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wc(t){if(ot){var e=dn;if(e){var n=e;if(!rh(t,e)){if(Gc(t))throw Error(ie(418));e=Fi(n.nextSibling);var i=pn;e&&rh(t,e)?Tg(i,n):(t.flags=t.flags&-4097|2,ot=!1,pn=t)}}else{if(Gc(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ot=!1,pn=t}}}function sh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function ia(t){if(t!==pn)return!1;if(!ot)return sh(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zc(t.type,t.memoizedProps)),e&&(e=dn)){if(Gc(t))throw wg(),Error(ie(418));for(;e;)Tg(t,e),e=Fi(e.nextSibling)}if(sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=Fi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=pn?Fi(t.stateNode.nextSibling):null;return!0}function wg(){for(var t=dn;t;)t=Fi(t.nextSibling)}function ws(){dn=pn=null,ot=!1}function zf(t){Un===null?Un=[t]:Un.push(t)}var ex=pi.ReactCurrentBatchConfig;function $s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function ra(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function oh(t){var e=t._init;return e(t._payload)}function Ag(t){function e(c,g){if(t){var _=c.deletions;_===null?(c.deletions=[g],c.flags|=16):_.push(g)}}function n(c,g){if(!t)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=Bi(c,g),c.index=0,c.sibling=null,c}function s(c,g,_){return c.index=_,t?(_=c.alternate,_!==null?(_=_.index,_<g?(c.flags|=2,g):_):(c.flags|=2,g)):(c.flags|=1048576,g)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,g,_,M){return g===null||g.tag!==6?(g=Lu(_,c.mode,M),g.return=c,g):(g=r(g,_),g.return=c,g)}function l(c,g,_,M){var R=_.type;return R===ts?f(c,g,_.props.children,M,_.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ti&&oh(R)===g.type)?(M=r(g,_.props),M.ref=$s(c,g,_),M.return=c,M):(M=Za(_.type,_.key,_.props,null,c.mode,M),M.ref=$s(c,g,_),M.return=c,M)}function u(c,g,_,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Du(_,c.mode,M),g.return=c,g):(g=r(g,_.children||[]),g.return=c,g)}function f(c,g,_,M,R){return g===null||g.tag!==7?(g=yr(_,c.mode,M,R),g.return=c,g):(g=r(g,_),g.return=c,g)}function h(c,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Lu(""+g,c.mode,_),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yo:return _=Za(g.type,g.key,g.props,null,c.mode,_),_.ref=$s(c,null,g),_.return=c,_;case es:return g=Du(g,c.mode,_),g.return=c,g;case Ti:var M=g._init;return h(c,M(g._payload),_)}if(ro(g)||Gs(g))return g=yr(g,c.mode,_,null),g.return=c,g;ra(c,g)}return null}function d(c,g,_,M){var R=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:a(c,g,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Yo:return _.key===R?l(c,g,_,M):null;case es:return _.key===R?u(c,g,_,M):null;case Ti:return R=_._init,d(c,g,R(_._payload),M)}if(ro(_)||Gs(_))return R!==null?null:f(c,g,_,M,null);ra(c,_)}return null}function p(c,g,_,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return c=c.get(_)||null,a(g,c,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Yo:return c=c.get(M.key===null?_:M.key)||null,l(g,c,M,R);case es:return c=c.get(M.key===null?_:M.key)||null,u(g,c,M,R);case Ti:var C=M._init;return p(c,g,_,C(M._payload),R)}if(ro(M)||Gs(M))return c=c.get(_)||null,f(g,c,M,R,null);ra(g,M)}return null}function v(c,g,_,M){for(var R=null,C=null,A=g,b=g=0,w=null;A!==null&&b<_.length;b++){A.index>b?(w=A,A=null):w=A.sibling;var S=d(c,A,_[b],M);if(S===null){A===null&&(A=w);break}t&&A&&S.alternate===null&&e(c,A),g=s(S,g,b),C===null?R=S:C.sibling=S,C=S,A=w}if(b===_.length)return n(c,A),ot&&lr(c,b),R;if(A===null){for(;b<_.length;b++)A=h(c,_[b],M),A!==null&&(g=s(A,g,b),C===null?R=A:C.sibling=A,C=A);return ot&&lr(c,b),R}for(A=i(c,A);b<_.length;b++)w=p(A,c,b,_[b],M),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?b:w.key),g=s(w,g,b),C===null?R=w:C.sibling=w,C=w);return t&&A.forEach(function(L){return e(c,L)}),ot&&lr(c,b),R}function x(c,g,_,M){var R=Gs(_);if(typeof R!="function")throw Error(ie(150));if(_=R.call(_),_==null)throw Error(ie(151));for(var C=R=null,A=g,b=g=0,w=null,S=_.next();A!==null&&!S.done;b++,S=_.next()){A.index>b?(w=A,A=null):w=A.sibling;var L=d(c,A,S.value,M);if(L===null){A===null&&(A=w);break}t&&A&&L.alternate===null&&e(c,A),g=s(L,g,b),C===null?R=L:C.sibling=L,C=L,A=w}if(S.done)return n(c,A),ot&&lr(c,b),R;if(A===null){for(;!S.done;b++,S=_.next())S=h(c,S.value,M),S!==null&&(g=s(S,g,b),C===null?R=S:C.sibling=S,C=S);return ot&&lr(c,b),R}for(A=i(c,A);!S.done;b++,S=_.next())S=p(A,c,b,S.value,M),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?b:S.key),g=s(S,g,b),C===null?R=S:C.sibling=S,C=S);return t&&A.forEach(function(H){return e(c,H)}),ot&&lr(c,b),R}function m(c,g,_,M){if(typeof _=="object"&&_!==null&&_.type===ts&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Yo:e:{for(var R=_.key,C=g;C!==null;){if(C.key===R){if(R=_.type,R===ts){if(C.tag===7){n(c,C.sibling),g=r(C,_.props.children),g.return=c,c=g;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ti&&oh(R)===C.type){n(c,C.sibling),g=r(C,_.props),g.ref=$s(c,C,_),g.return=c,c=g;break e}n(c,C);break}else e(c,C);C=C.sibling}_.type===ts?(g=yr(_.props.children,c.mode,M,_.key),g.return=c,c=g):(M=Za(_.type,_.key,_.props,null,c.mode,M),M.ref=$s(c,g,_),M.return=c,c=M)}return o(c);case es:e:{for(C=_.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(c,g.sibling),g=r(g,_.children||[]),g.return=c,c=g;break e}else{n(c,g);break}else e(c,g);g=g.sibling}g=Du(_,c.mode,M),g.return=c,c=g}return o(c);case Ti:return C=_._init,m(c,g,C(_._payload),M)}if(ro(_))return v(c,g,_,M);if(Gs(_))return x(c,g,_,M);ra(c,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(c,g.sibling),g=r(g,_),g.return=c,c=g):(n(c,g),g=Lu(_,c.mode,M),g.return=c,c=g),o(c)):n(c,g)}return m}var As=Ag(!0),Cg=Ag(!1),hl=qi(null),pl=null,us=null,Bf=null;function Hf(){Bf=us=pl=null}function Vf(t){var e=hl.current;st(hl),t._currentValue=e}function Xc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){pl=t,Bf=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(Bf!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(pl===null)throw Error(ie(308));us=t,pl.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var pr=null;function Gf(t){pr===null?pr=[t]:pr.push(t)}function Rg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Gf(e)):(n.next=r.next,r.next=n),e.interleaved=n,di(t,i)}function di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wi=!1;function Wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Oi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,di(t,n)}return r=i.interleaved,r===null?(e.next=e,Gf(i)):(e.next=r.next,r.next=e),i.interleaved=e,di(t,n)}function Xa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pf(t,n)}}function ah(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ml(t,e,n,i){var r=t.updateQueue;wi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(d=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=ft({},h,d);break e;case 2:wi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=h):f=f.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Tr|=o,t.lanes=o,t.memoizedState=h}}function lh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Vo={},Yn=qi(Vo),bo=qi(Vo),Lo=qi(Vo);function mr(t){if(t===Vo)throw Error(ie(174));return t}function Xf(t,e){switch(nt(Lo,e),nt(bo,t),nt(Yn,Vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wc(e,t)}st(Yn),nt(Yn,e)}function Cs(){st(Yn),st(bo),st(Lo)}function bg(t){mr(Lo.current);var e=mr(Yn.current),n=wc(e,t.type);e!==n&&(nt(bo,t),nt(Yn,n))}function jf(t){bo.current===t&&(st(Yn),st(bo))}var lt=qi(0);function gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wu=[];function Yf(){for(var t=0;t<wu.length;t++)wu[t]._workInProgressVersionPrimary=null;wu.length=0}var ja=pi.ReactCurrentDispatcher,Au=pi.ReactCurrentBatchConfig,Er=0,ut=null,Et=null,bt=null,_l=!1,po=!1,Do=0,tx=0;function Ot(){throw Error(ie(321))}function $f(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function qf(t,e,n,i,r,s){if(Er=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ja.current=t===null||t.memoizedState===null?sx:ox,t=n(i,r),po){s=0;do{if(po=!1,Do=0,25<=s)throw Error(ie(301));s+=1,bt=Et=null,e.updateQueue=null,ja.current=ax,t=n(i,r)}while(po)}if(ja.current=vl,e=Et!==null&&Et.next!==null,Er=0,bt=Et=ut=null,_l=!1,e)throw Error(ie(300));return t}function Kf(){var t=Do!==0;return Do=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?ut.memoizedState=bt=t:bt=bt.next=t,bt}function Cn(){if(Et===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=bt===null?ut.memoizedState:bt.next;if(e!==null)bt=e,Et=t;else{if(t===null)throw Error(ie(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},bt===null?ut.memoizedState=bt=t:bt=bt.next=t}return bt}function No(t,e){return typeof e=="function"?e(t):e}function Cu(t){var e=Cn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Er&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ut.lanes|=f,Tr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,zn(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,Tr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ru(t){var e=Cn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);zn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Lg(){}function Dg(t,e){var n=ut,i=Cn(),r=e(),s=!zn(i.memoizedState,r);if(s&&(i.memoizedState=r,Qt=!0),i=i.queue,Zf(Ig.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Uo(9,Ug.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ie(349));Er&30||Ng(n,e,r)}return r}function Ng(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ug(t,e,n,i){e.value=n,e.getSnapshot=i,Fg(e)&&Og(t)}function Ig(t,e,n){return n(function(){Fg(e)&&Og(t)})}function Fg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function Og(t){var e=di(t,1);e!==null&&kn(e,t,1,-1)}function uh(t){var e=Hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:t},e.queue=t,t=t.dispatch=rx.bind(null,ut,t),[e.memoizedState,t]}function Uo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function kg(){return Cn().memoizedState}function Ya(t,e,n,i){var r=Hn();ut.flags|=t,r.memoizedState=Uo(1|e,n,void 0,i===void 0?null:i)}function Hl(t,e,n,i){var r=Cn();i=i===void 0?null:i;var s=void 0;if(Et!==null){var o=Et.memoizedState;if(s=o.destroy,i!==null&&$f(i,o.deps)){r.memoizedState=Uo(e,n,s,i);return}}ut.flags|=t,r.memoizedState=Uo(1|e,n,s,i)}function ch(t,e){return Ya(8390656,8,t,e)}function Zf(t,e){return Hl(2048,8,t,e)}function zg(t,e){return Hl(4,2,t,e)}function Bg(t,e){return Hl(4,4,t,e)}function Hg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vg(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4,4,Hg.bind(null,e,t),n)}function Qf(){}function Gg(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&$f(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Wg(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&$f(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Xg(t,e,n){return Er&21?(zn(n,e)||(n=Km(),ut.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function nx(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Au.transition;Au.transition={};try{t(!1),e()}finally{Je=n,Au.transition=i}}function jg(){return Cn().memoizedState}function ix(t,e,n){var i=zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Yg(t))$g(e,n);else if(n=Rg(t,e,n,i),n!==null){var r=$t();kn(n,t,i,r),qg(n,e,i)}}function rx(t,e,n){var i=zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yg(t))$g(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,zn(a,o)){var l=e.interleaved;l===null?(r.next=r,Gf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Rg(t,e,r,i),n!==null&&(r=$t(),kn(n,t,i,r),qg(n,e,i))}}function Yg(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function $g(t,e){po=_l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pf(t,n)}}var vl={readContext:An,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},sx={readContext:An,useCallback:function(t,e){return Hn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:ch,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ya(4194308,4,Hg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ya(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ya(4,2,t,e)},useMemo:function(t,e){var n=Hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Hn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ix.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Hn();return t={current:t},e.memoizedState=t},useState:uh,useDebugValue:Qf,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=uh(!1),e=t[0];return t=nx.bind(null,t[1]),Hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=Hn();if(ot){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Dt===null)throw Error(ie(349));Er&30||Ng(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ch(Ig.bind(null,i,s,t),[t]),i.flags|=2048,Uo(9,Ug.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Hn(),e=Dt.identifierPrefix;if(ot){var n=ai,i=oi;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Do++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ox={readContext:An,useCallback:Gg,useContext:An,useEffect:Zf,useImperativeHandle:Vg,useInsertionEffect:zg,useLayoutEffect:Bg,useMemo:Wg,useReducer:Cu,useRef:kg,useState:function(){return Cu(No)},useDebugValue:Qf,useDeferredValue:function(t){var e=Cn();return Xg(e,Et.memoizedState,t)},useTransition:function(){var t=Cu(No)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:Lg,useSyncExternalStore:Dg,useId:jg,unstable_isNewReconciler:!1},ax={readContext:An,useCallback:Gg,useContext:An,useEffect:Zf,useImperativeHandle:Vg,useInsertionEffect:zg,useLayoutEffect:Bg,useMemo:Wg,useReducer:Ru,useRef:kg,useState:function(){return Ru(No)},useDebugValue:Qf,useDeferredValue:function(t){var e=Cn();return Et===null?e.memoizedState=t:Xg(e,Et.memoizedState,t)},useTransition:function(){var t=Ru(No)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:Lg,useSyncExternalStore:Dg,useId:jg,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vl={isMounted:function(t){return(t=t._reactInternals)?Pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=zi(t),s=ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(kn(e,t,r,i),Xa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=zi(t),s=ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(kn(e,t,r,i),Xa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=zi(t),r=ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=Oi(t,r,i),e!==null&&(kn(e,t,i,n),Xa(e,t,i))}};function fh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ao(n,i)||!Ao(r,s):!0}function Kg(t,e,n){var i=!1,r=Wi,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=en(e)?Sr:Gt.current,i=e.contextTypes,s=(i=i!=null)?Ts(t,r):Wi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function dh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Vl.enqueueReplaceState(e,e.state,null)}function Yc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Wf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=en(e)?Sr:Gt.current,r.context=Ts(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Vl.enqueueReplaceState(r,r.state,null),ml(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Rs(t,e){try{var n="",i=e;do n+=Iv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $c(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lx=typeof WeakMap=="function"?WeakMap:Map;function Zg(t,e,n){n=ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){yl||(yl=!0,sf=i),$c(t,e)},n}function Qg(t,e,n){n=ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){$c(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$c(t,e),typeof i!="function"&&(ki===null?ki=new Set([this]):ki.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new lx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Mx.bind(null,t,e,n),e.then(t,t))}function ph(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ui(-1,1),e.tag=2,Oi(n,e,1))),n.lanes|=1),t)}var ux=pi.ReactCurrentOwner,Qt=!1;function Yt(t,e,n,i){e.child=t===null?Cg(e,null,n,i):As(e,t.child,n,i)}function gh(t,e,n,i,r){n=n.render;var s=e.ref;return _s(e,r),i=qf(t,e,n,i,s,r),n=Kf(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(ot&&n&&Of(e),e.flags|=1,Yt(t,e,i,r),e.child)}function _h(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!od(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jg(t,e,s,i,r)):(t=Za(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(o,i)&&t.ref===e.ref)return hi(t,e,r)}return e.flags|=1,t=Bi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Jg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ao(s,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,hi(t,e,r)}return qc(t,e,n,i,r)}function e_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(fs,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(fs,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(fs,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(fs,fn),fn|=i;return Yt(t,e,r,n),e.child}function t_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qc(t,e,n,i,r){var s=en(n)?Sr:Gt.current;return s=Ts(e,s),_s(e,r),n=qf(t,e,n,i,s,r),i=Kf(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(ot&&i&&Of(e),e.flags|=1,Yt(t,e,n,r),e.child)}function vh(t,e,n,i,r){if(en(n)){var s=!0;cl(e)}else s=!1;if(_s(e,r),e.stateNode===null)$a(t,e),Kg(e,n,i),Yc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=An(u):(u=en(n)?Sr:Gt.current,u=Ts(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&dh(e,o,i,u),wi=!1;var d=e.memoizedState;o.state=d,ml(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Jt.current||wi?(typeof f=="function"&&(jc(e,n,f,i),l=e.memoizedState),(a=wi||fh(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Pg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Dn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=en(n)?Sr:Gt.current,l=Ts(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&dh(e,o,i,l),wi=!1,d=e.memoizedState,o.state=d,ml(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||Jt.current||wi?(typeof p=="function"&&(jc(e,n,p,i),v=e.memoizedState),(u=wi||fh(e,n,u,i,d,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Kc(t,e,n,i,s,r)}function Kc(t,e,n,i,r,s){t_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ih(e,n,!1),hi(t,e,s);i=e.stateNode,ux.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=As(e,t.child,null,s),e.child=As(e,null,a,s)):Yt(t,e,a,s),e.memoizedState=i.state,r&&ih(e,n,!0),e.child}function n_(t){var e=t.stateNode;e.pendingContext?nh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nh(t,e.context,!1),Xf(t,e.containerInfo)}function xh(t,e,n,i,r){return ws(),zf(r),e.flags|=256,Yt(t,e,n,i),e.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function Qc(t){return{baseLanes:t,cachePool:null,transitions:null}}function i_(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(lt,r&1),t===null)return Wc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xl(o,i,0,null),t=yr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qc(n),e.memoizedState=Zc,t):Jf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return cx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Bi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Bi(a,s):(s=yr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Qc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zc,i}return s=t.child,t=s.sibling,i=Bi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Jf(t,e){return e=Xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sa(t,e,n,i){return i!==null&&zf(i),As(e,t.child,null,n),t=Jf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Pu(Error(ie(422))),sa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Xl({mode:"visible",children:i.children},r,0,null),s=yr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&As(e,t.child,null,o),e.child.memoizedState=Qc(o),e.memoizedState=Zc,s);if(!(e.mode&1))return sa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Pu(s,i,void 0),sa(t,e,o,i)}if(a=(o&t.childLanes)!==0,Qt||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,di(t,r),kn(i,t,r,-1))}return sd(),i=Pu(Error(ie(421))),sa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ex.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,dn=Fi(r.nextSibling),pn=e,ot=!0,Un=null,t!==null&&(yn[Sn++]=oi,yn[Sn++]=ai,yn[Sn++]=Mr,oi=t.id,ai=t.overflow,Mr=e),e=Jf(e,i.children),e.flags|=4096,e)}function yh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Xc(t.return,e,n)}function bu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function r_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yh(t,n,e);else if(t.tag===19)yh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&gl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),bu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&gl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}bu(e,!0,n,null,s);break;case"together":bu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $a(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fx(t,e,n){switch(e.tag){case 3:n_(e),ws();break;case 5:bg(e);break;case 1:en(e.type)&&cl(e);break;case 4:Xf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(hl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?i_(t,e,n):(nt(lt,lt.current&1),t=hi(t,e,n),t!==null?t.sibling:null);nt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return r_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,e_(t,e,n)}return hi(t,e,n)}var s_,Jc,o_,a_;s_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jc=function(){};o_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr(Yn.current);var s=null;switch(n){case"input":r=Sc(t,r),i=Sc(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=Tc(t,r),i=Tc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ll)}Ac(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};a_=function(t,e,n,i){n!==i&&(e.flags|=4)};function qs(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function dx(t,e,n){var i=e.pendingProps;switch(kf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return en(e.type)&&ul(),kt(e),null;case 3:return i=e.stateNode,Cs(),st(Jt),st(Gt),Yf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(lf(Un),Un=null))),Jc(t,e),kt(e),null;case 5:jf(e);var r=mr(Lo.current);if(n=e.type,t!==null&&e.stateNode!=null)o_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return kt(e),null}if(t=mr(Yn.current),ia(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Wn]=e,i[Po]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<oo.length;r++)it(oo[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Pd(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":Ld(i,s),it("invalid",i)}Ac(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&na(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&na(i.textContent,a,t),r=["children",""+a]):xo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":$o(i),bd(i,s,!0);break;case"textarea":$o(i),Dd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ll)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Im(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Wn]=e,t[Po]=i,s_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cc(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<oo.length;r++)it(oo[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Pd(t,i),r=Sc(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),it("invalid",t);break;case"textarea":Ld(t,i),r=Tc(t,i),it("invalid",t);break;default:r=i}Ac(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?km(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Fm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&yo(t,l):typeof l=="number"&&yo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&Ef(t,s,l,o))}switch(n){case"input":$o(t),bd(t,i,!1);break;case"textarea":$o(t),Dd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Gi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ll)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)a_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=mr(Lo.current),mr(Yn.current),ia(e)){if(i=e.stateNode,n=e.memoizedProps,i[Wn]=e,(s=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:na(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&na(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Wn]=e,e.stateNode=i}return kt(e),null;case 13:if(st(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&dn!==null&&e.mode&1&&!(e.flags&128))wg(),ws(),e.flags|=98560,s=!1;else if(s=ia(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Wn]=e}else ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Un!==null&&(lf(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?Tt===0&&(Tt=3):sd())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Cs(),Jc(t,e),t===null&&Co(e.stateNode.containerInfo),kt(e),null;case 10:return Vf(e.type._context),kt(e),null;case 17:return en(e.type)&&ul(),kt(e),null;case 19:if(st(lt),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)qs(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=gl(t),o!==null){for(e.flags|=128,qs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Ps&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=gl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ot)return kt(e),null}else 2*_t()-s.renderingStartTime>Ps&&n!==1073741824&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=lt.current,nt(lt,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return rd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function hx(t,e){switch(kf(e),e.tag){case 1:return en(e.type)&&ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),st(Jt),st(Gt),Yf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jf(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return Cs(),null;case 10:return Vf(e.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var oa=!1,Ht=!1,px=typeof WeakSet=="function"?WeakSet:Set,me=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function ef(t,e,n){try{n()}catch(i){gt(t,e,i)}}var Sh=!1;function mx(t,e){if(Oc=sl,t=dg(),Ff(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kc={focusedElem:t,selectionRange:n},sl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:Dn(e.type,x),m);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(M){gt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return v=Sh,Sh=!1,v}function mo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ef(e,n,s)}r=r.next}while(r!==i)}}function Gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function tf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function l_(t){var e=t.alternate;e!==null&&(t.alternate=null,l_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[Po],delete e[Hc],delete e[Z0],delete e[Q0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function u_(t){return t.tag===5||t.tag===3||t.tag===4}function Mh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||u_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ll));else if(i!==4&&(t=t.child,t!==null))for(nf(t,e,n),t=t.sibling;t!==null;)nf(t,e,n),t=t.sibling}function rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(rf(t,e,n),t=t.sibling;t!==null;)rf(t,e,n),t=t.sibling}var Ut=null,Nn=!1;function _i(t,e,n){for(n=n.child;n!==null;)c_(t,e,n),n=n.sibling}function c_(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(Il,n)}catch{}switch(n.tag){case 5:Ht||cs(n,e);case 6:var i=Ut,r=Nn;Ut=null,_i(t,e,n),Ut=i,Nn=r,Ut!==null&&(Nn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Nn?(t=Ut,n=n.stateNode,t.nodeType===8?Eu(t.parentNode,n):t.nodeType===1&&Eu(t,n),To(t)):Eu(Ut,n.stateNode));break;case 4:i=Ut,r=Nn,Ut=n.stateNode.containerInfo,Nn=!0,_i(t,e,n),Ut=i,Nn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ef(n,e,o),r=r.next}while(r!==i)}_i(t,e,n);break;case 1:if(!Ht&&(cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}_i(t,e,n);break;case 21:_i(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,_i(t,e,n),Ht=i):_i(t,e,n);break;default:_i(t,e,n)}}function Eh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new px),e.forEach(function(i){var r=Tx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Rn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,Nn=!1;break e;case 3:Ut=a.stateNode.containerInfo,Nn=!0;break e;case 4:Ut=a.stateNode.containerInfo,Nn=!0;break e}a=a.return}if(Ut===null)throw Error(ie(160));c_(s,o,r),Ut=null,Nn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)f_(e,t),e=e.sibling}function f_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rn(e,t),Bn(t),i&4){try{mo(3,t,t.return),Gl(3,t)}catch(x){gt(t,t.return,x)}try{mo(5,t,t.return)}catch(x){gt(t,t.return,x)}}break;case 1:Rn(e,t),Bn(t),i&512&&n!==null&&cs(n,n.return);break;case 5:if(Rn(e,t),Bn(t),i&512&&n!==null&&cs(n,n.return),t.flags&32){var r=t.stateNode;try{yo(r,"")}catch(x){gt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Nm(r,s),Cc(a,o);var u=Cc(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?km(r,h):f==="dangerouslySetInnerHTML"?Fm(r,h):f==="children"?yo(r,h):Ef(r,f,h,u)}switch(a){case"input":Mc(r,s);break;case"textarea":Um(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?hs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?hs(r,!!s.multiple,s.defaultValue,!0):hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Po]=s}catch(x){gt(t,t.return,x)}}break;case 6:if(Rn(e,t),Bn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){gt(t,t.return,x)}}break;case 3:if(Rn(e,t),Bn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{To(e.containerInfo)}catch(x){gt(t,t.return,x)}break;case 4:Rn(e,t),Bn(t);break;case 13:Rn(e,t),Bn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(nd=_t())),i&4&&Eh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(u=Ht)||f,Rn(e,t),Ht=u):Rn(e,t),Bn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(me=t,f=t.child;f!==null;){for(h=me=f;me!==null;){switch(d=me,p=d.child,d.tag){case 0:case 11:case 14:case 15:mo(4,d,d.return);break;case 1:cs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){gt(i,n,x)}}break;case 5:cs(d,d.return);break;case 22:if(d.memoizedState!==null){wh(h);continue}}p!==null?(p.return=d,me=p):wh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Om("display",o))}catch(x){gt(t,t.return,x)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){gt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Rn(e,t),Bn(t),i&4&&Eh(t);break;case 21:break;default:Rn(e,t),Bn(t)}}function Bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(u_(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(yo(r,""),i.flags&=-33);var s=Mh(t);rf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Mh(t);nf(t,a,o);break;default:throw Error(ie(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gx(t,e,n){me=t,d_(t)}function d_(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||oa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=oa;var u=Ht;if(oa=o,(Ht=l)&&!u)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?Ah(r):l!==null?(l.return=o,me=l):Ah(r);for(;s!==null;)me=s,d_(s),s=s.sibling;me=r,oa=a,Ht=u}Th(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):Th(t)}}function Th(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||Gl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&To(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Ht||e.flags&512&&tf(e)}catch(d){gt(e,e.return,d)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function wh(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Ah(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gl(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{tf(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{tf(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var _x=Math.ceil,xl=pi.ReactCurrentDispatcher,ed=pi.ReactCurrentOwner,wn=pi.ReactCurrentBatchConfig,Ye=0,Dt=null,Mt=null,It=0,fn=0,fs=qi(0),Tt=0,Io=null,Tr=0,Wl=0,td=0,go=null,Zt=null,nd=0,Ps=1/0,ii=null,yl=!1,sf=null,ki=null,aa=!1,Li=null,Sl=0,_o=0,of=null,qa=-1,Ka=0;function $t(){return Ye&6?_t():qa!==-1?qa:qa=_t()}function zi(t){return t.mode&1?Ye&2&&It!==0?It&-It:ex.transition!==null?(Ka===0&&(Ka=Km()),Ka):(t=Je,t!==0||(t=window.event,t=t===void 0?16:ig(t.type)),t):1}function kn(t,e,n,i){if(50<_o)throw _o=0,of=null,Error(ie(185));zo(t,n,i),(!(Ye&2)||t!==Dt)&&(t===Dt&&(!(Ye&2)&&(Wl|=n),Tt===4&&Ri(t,It)),tn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Ps=_t()+500,Bl&&Ki()))}function tn(t,e){var n=t.callbackNode;e0(t,e);var i=rl(t,t===Dt?It:0);if(i===0)n!==null&&Id(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Id(n),e===1)t.tag===0?J0(Ch.bind(null,t)):Mg(Ch.bind(null,t)),q0(function(){!(Ye&6)&&Ki()}),n=null;else{switch(Zm(i)){case 1:n=Rf;break;case 4:n=$m;break;case 16:n=il;break;case 536870912:n=qm;break;default:n=il}n=y_(n,h_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function h_(t,e){if(qa=-1,Ka=0,Ye&6)throw Error(ie(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var i=rl(t,t===Dt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ml(t,i);else{e=i;var r=Ye;Ye|=2;var s=m_();(Dt!==t||It!==e)&&(ii=null,Ps=_t()+500,xr(t,e));do try{yx();break}catch(a){p_(t,a)}while(!0);Hf(),xl.current=s,Ye=r,Mt!==null?e=0:(Dt=null,It=0,e=Tt)}if(e!==0){if(e===2&&(r=Dc(t),r!==0&&(i=r,e=af(t,r))),e===1)throw n=Io,xr(t,0),Ri(t,i),tn(t,_t()),n;if(e===6)Ri(t,i);else{if(r=t.current.alternate,!(i&30)&&!vx(r)&&(e=Ml(t,i),e===2&&(s=Dc(t),s!==0&&(i=s,e=af(t,s))),e===1))throw n=Io,xr(t,0),Ri(t,i),tn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:ur(t,Zt,ii);break;case 3:if(Ri(t,i),(i&130023424)===i&&(e=nd+500-_t(),10<e)){if(rl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Bc(ur.bind(null,t,Zt,ii),e);break}ur(t,Zt,ii);break;case 4:if(Ri(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-On(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*_x(i/1960))-i,10<i){t.timeoutHandle=Bc(ur.bind(null,t,Zt,ii),i);break}ur(t,Zt,ii);break;case 5:ur(t,Zt,ii);break;default:throw Error(ie(329))}}}return tn(t,_t()),t.callbackNode===n?h_.bind(null,t):null}function af(t,e){var n=go;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=Ml(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&lf(e)),t}function lf(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function vx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ri(t,e){for(e&=~td,e&=~Wl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function Ch(t){if(Ye&6)throw Error(ie(327));vs();var e=rl(t,0);if(!(e&1))return tn(t,_t()),null;var n=Ml(t,e);if(t.tag!==0&&n===2){var i=Dc(t);i!==0&&(e=i,n=af(t,i))}if(n===1)throw n=Io,xr(t,0),Ri(t,e),tn(t,_t()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,Zt,ii),tn(t,_t()),null}function id(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Ps=_t()+500,Bl&&Ki())}}function wr(t){Li!==null&&Li.tag===0&&!(Ye&6)&&vs();var e=Ye;Ye|=1;var n=wn.transition,i=Je;try{if(wn.transition=null,Je=1,t)return t()}finally{Je=i,wn.transition=n,Ye=e,!(Ye&6)&&Ki()}}function rd(){fn=fs.current,st(fs)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$0(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(kf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ul();break;case 3:Cs(),st(Jt),st(Gt),Yf();break;case 5:jf(i);break;case 4:Cs();break;case 13:st(lt);break;case 19:st(lt);break;case 10:Vf(i.type._context);break;case 22:case 23:rd()}n=n.return}if(Dt=t,Mt=t=Bi(t.current,null),It=fn=e,Tt=0,Io=null,td=Wl=Tr=0,Zt=go=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}pr=null}return t}function p_(t,e){do{var n=Mt;try{if(Hf(),ja.current=vl,_l){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}_l=!1}if(Er=0,bt=Et=ut=null,po=!1,Do=0,ed.current=null,n===null||n.return===null){Tt=1,Io=e,Mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=ph(o);if(p!==null){p.flags&=-257,mh(p,o,a,s,e),p.mode&1&&hh(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){hh(s,u,e),sd();break e}l=Error(ie(426))}}else if(ot&&a.mode&1){var m=ph(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),mh(m,o,a,s,e),zf(Rs(l,a));break e}}s=l=Rs(l,a),Tt!==4&&(Tt=2),go===null?go=[s]:go.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Zg(s,l,e);ah(s,c);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ki===null||!ki.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Qg(s,a,e);ah(s,M);break e}}s=s.return}while(s!==null)}__(n)}catch(R){e=R,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function m_(){var t=xl.current;return xl.current=vl,t===null?vl:t}function sd(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Dt===null||!(Tr&268435455)&&!(Wl&268435455)||Ri(Dt,It)}function Ml(t,e){var n=Ye;Ye|=2;var i=m_();(Dt!==t||It!==e)&&(ii=null,xr(t,e));do try{xx();break}catch(r){p_(t,r)}while(!0);if(Hf(),Ye=n,xl.current=i,Mt!==null)throw Error(ie(261));return Dt=null,It=0,Tt}function xx(){for(;Mt!==null;)g_(Mt)}function yx(){for(;Mt!==null&&!Xv();)g_(Mt)}function g_(t){var e=x_(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?__(t):Mt=e,ed.current=null}function __(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hx(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,Mt=null;return}}else if(n=dx(n,e,fn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Tt===0&&(Tt=5)}function ur(t,e,n){var i=Je,r=wn.transition;try{wn.transition=null,Je=1,Sx(t,e,n,i)}finally{wn.transition=r,Je=i}return null}function Sx(t,e,n,i){do vs();while(Li!==null);if(Ye&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(t0(t,s),t===Dt&&(Mt=Dt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||aa||(aa=!0,y_(il,function(){return vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var o=Je;Je=1;var a=Ye;Ye|=4,ed.current=null,mx(t,n),f_(n,t),H0(kc),sl=!!Oc,kc=Oc=null,t.current=n,gx(n),jv(),Ye=a,Je=o,wn.transition=s}else t.current=n;if(aa&&(aa=!1,Li=t,Sl=r),s=t.pendingLanes,s===0&&(ki=null),qv(n.stateNode),tn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(yl)throw yl=!1,t=sf,sf=null,t;return Sl&1&&t.tag!==0&&vs(),s=t.pendingLanes,s&1?t===of?_o++:(_o=0,of=t):_o=0,Ki(),null}function vs(){if(Li!==null){var t=Zm(Sl),e=wn.transition,n=Je;try{if(wn.transition=null,Je=16>t?16:t,Li===null)var i=!1;else{if(t=Li,Li=null,Sl=0,Ye&6)throw Error(ie(331));var r=Ye;for(Ye|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var f=me;switch(f.tag){case 0:case 11:case 15:mo(8,f,s)}var h=f.child;if(h!==null)h.return=f,me=h;else for(;me!==null;){f=me;var d=f.sibling,p=f.return;if(l_(f),f===u){me=null;break}if(d!==null){d.return=p,me=d;break}me=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:mo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,me=c;break e}me=s.return}}var g=t.current;for(me=g;me!==null;){o=me;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,me=_;else e:for(o=g;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gl(9,a)}}catch(R){gt(a,a.return,R)}if(a===o){me=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,me=M;break e}me=a.return}}if(Ye=r,Ki(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(Il,t)}catch{}i=!0}return i}finally{Je=n,wn.transition=e}}return!1}function Rh(t,e,n){e=Rs(n,e),e=Zg(t,e,1),t=Oi(t,e,1),e=$t(),t!==null&&(zo(t,1,e),tn(t,e))}function gt(t,e,n){if(t.tag===3)Rh(t,t,n);else for(;e!==null;){if(e.tag===3){Rh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ki===null||!ki.has(i))){t=Rs(n,t),t=Qg(e,t,1),e=Oi(e,t,1),t=$t(),e!==null&&(zo(e,1,t),tn(e,t));break}}e=e.return}}function Mx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(It&n)===n&&(Tt===4||Tt===3&&(It&130023424)===It&&500>_t()-nd?xr(t,0):td|=n),tn(t,e)}function v_(t,e){e===0&&(t.mode&1?(e=Zo,Zo<<=1,!(Zo&130023424)&&(Zo=4194304)):e=1);var n=$t();t=di(t,e),t!==null&&(zo(t,e,n),tn(t,n))}function Ex(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),v_(t,n)}function Tx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),v_(t,n)}var x_;x_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,fx(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,ot&&e.flags&1048576&&Eg(e,dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$a(t,e),t=e.pendingProps;var r=Ts(e,Gt.current);_s(e,n),r=qf(null,e,i,t,r,n);var s=Kf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,cl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Wf(e),r.updater=Vl,e.stateNode=r,r._reactInternals=e,Yc(e,i,t,n),e=Kc(null,e,i,!0,s,n)):(e.tag=0,ot&&s&&Of(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch($a(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ax(i),t=Dn(i,t),r){case 0:e=qc(null,e,i,t,n);break e;case 1:e=vh(null,e,i,t,n);break e;case 11:e=gh(null,e,i,t,n);break e;case 14:e=_h(null,e,i,Dn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),qc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),vh(t,e,i,r,n);case 3:e:{if(n_(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Pg(t,e),ml(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Rs(Error(ie(423)),e),e=xh(t,e,i,n,r);break e}else if(i!==r){r=Rs(Error(ie(424)),e),e=xh(t,e,i,n,r);break e}else for(dn=Fi(e.stateNode.containerInfo.firstChild),pn=e,ot=!0,Un=null,n=Cg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ws(),i===r){e=hi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return bg(e),t===null&&Wc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,zc(i,r)?o=null:s!==null&&zc(i,s)&&(e.flags|=32),t_(t,e),Yt(t,e,o,n),e.child;case 6:return t===null&&Wc(e),null;case 13:return i_(t,e,n);case 4:return Xf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=As(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),gh(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(hl,i._currentValue),i._currentValue=o,s!==null)if(zn(s.value,o)){if(s.children===r.children&&!Jt.current){e=hi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ui(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Xc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Xc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_s(e,n),r=An(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=Dn(i,e.pendingProps),r=Dn(i.type,r),_h(t,e,i,r,n);case 15:return Jg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),$a(t,e),e.tag=1,en(i)?(t=!0,cl(e)):t=!1,_s(e,n),Kg(e,i,r),Yc(e,i,r,n),Kc(null,e,i,!0,t,n);case 19:return r_(t,e,n);case 22:return e_(t,e,n)}throw Error(ie(156,e.tag))};function y_(t,e){return Ym(t,e)}function wx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,i){return new wx(t,e,n,i)}function od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ax(t){if(typeof t=="function")return od(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wf)return 11;if(t===Af)return 14}return 2}function Bi(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Za(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")od(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ts:return yr(n.children,r,s,e);case Tf:o=8,r|=8;break;case _c:return t=En(12,n,e,r|2),t.elementType=_c,t.lanes=s,t;case vc:return t=En(13,n,e,r),t.elementType=vc,t.lanes=s,t;case xc:return t=En(19,n,e,r),t.elementType=xc,t.lanes=s,t;case bm:return Xl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rm:o=10;break e;case Pm:o=9;break e;case wf:o=11;break e;case Af:o=14;break e;case Ti:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=En(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function yr(t,e,n,i){return t=En(7,t,i,e),t.lanes=n,t}function Xl(t,e,n,i){return t=En(22,t,i,e),t.elementType=bm,t.lanes=n,t.stateNode={isHidden:!1},t}function Lu(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function Du(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Cx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=du(0),this.expirationTimes=du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=du(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ad(t,e,n,i,r,s,o,a,l){return t=new Cx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wf(s),t}function Rx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function S_(t){if(!t)return Wi;t=t._reactInternals;e:{if(Pr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(en(n))return Sg(t,n,e)}return e}function M_(t,e,n,i,r,s,o,a,l){return t=ad(n,i,!0,t,r,s,o,a,l),t.context=S_(null),n=t.current,i=$t(),r=zi(n),s=ui(i,r),s.callback=e??null,Oi(n,s,r),t.current.lanes=r,zo(t,r,i),tn(t,i),t}function jl(t,e,n,i){var r=e.current,s=$t(),o=zi(r);return n=S_(n),e.context===null?e.context=n:e.pendingContext=n,e=ui(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Oi(r,e,o),t!==null&&(kn(t,r,o,s),Xa(t,r,o)),o}function El(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ph(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ld(t,e){Ph(t,e),(t=t.alternate)&&Ph(t,e)}function Px(){return null}var E_=typeof reportError=="function"?reportError:function(t){console.error(t)};function ud(t){this._internalRoot=t}Yl.prototype.render=ud.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));jl(t,e,null,null)};Yl.prototype.unmount=ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){jl(null,t,null,null)}),e[fi]=null}};function Yl(t){this._internalRoot=t}Yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=eg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ci.length&&e!==0&&e<Ci[n].priority;n++);Ci.splice(n,0,t),n===0&&ng(t)}};function cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bh(){}function bx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=El(o);s.call(u)}}var o=M_(e,i,t,0,null,!1,!1,"",bh);return t._reactRootContainer=o,t[fi]=o.current,Co(t.nodeType===8?t.parentNode:t),wr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=El(l);a.call(u)}}var l=ad(t,0,!1,null,null,!1,!1,"",bh);return t._reactRootContainer=l,t[fi]=l.current,Co(t.nodeType===8?t.parentNode:t),wr(function(){jl(e,l,n,i)}),l}function ql(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=El(o);a.call(l)}}jl(e,o,t,r)}else o=bx(n,e,t,r,i);return El(o)}Qm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=so(e.pendingLanes);n!==0&&(Pf(e,n|1),tn(e,_t()),!(Ye&6)&&(Ps=_t()+500,Ki()))}break;case 13:wr(function(){var i=di(t,1);if(i!==null){var r=$t();kn(i,t,1,r)}}),ld(t,1)}};bf=function(t){if(t.tag===13){var e=di(t,134217728);if(e!==null){var n=$t();kn(e,t,134217728,n)}ld(t,134217728)}};Jm=function(t){if(t.tag===13){var e=zi(t),n=di(t,e);if(n!==null){var i=$t();kn(n,t,e,i)}ld(t,e)}};eg=function(){return Je};tg=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Pc=function(t,e,n){switch(e){case"input":if(Mc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=zl(i);if(!r)throw Error(ie(90));Dm(i),Mc(i,r)}}}break;case"textarea":Um(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};Hm=id;Vm=wr;var Lx={usingClientEntryPoint:!1,Events:[Ho,ss,zl,zm,Bm,id]},Ks={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dx={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||Px,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{Il=la.inject(Dx),jn=la}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lx;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cd(e))throw Error(ie(200));return Rx(t,e,null,n)};gn.createRoot=function(t,e){if(!cd(t))throw Error(ie(299));var n=!1,i="",r=E_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ad(t,1,!1,null,null,n,!1,i,r),t[fi]=e.current,Co(t.nodeType===8?t.parentNode:t),new ud(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Xm(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return wr(t)};gn.hydrate=function(t,e,n){if(!$l(e))throw Error(ie(200));return ql(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!cd(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=E_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=M_(e,null,t,1,n??null,r,!1,s,o),t[fi]=e.current,Co(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Yl(e)};gn.render=function(t,e,n){if(!$l(e))throw Error(ie(200));return ql(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!$l(t))throw Error(ie(40));return t._reactRootContainer?(wr(function(){ql(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1};gn.unstable_batchedUpdates=id;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!$l(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return ql(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function T_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T_)}catch(t){console.error(t)}}T_(),Tm.exports=gn;var Nx=Tm.exports,Lh=Nx;mc.createRoot=Lh.createRoot,mc.hydrateRoot=Lh.hydrateRoot;async function tr(t,e){const n=await fetch(t,{headers:{"Content-Type":"application/json"},...e});if(!n.ok)throw new Error(`${n.status} ${await n.text()}`);return n.json()}const Zs={meta:()=>tr("/api/meta"),scenes:()=>tr("/api/scenes"),evaluate:t=>tr("/api/evaluate",{method:"POST",body:JSON.stringify(t)}),trace:(t,e,n)=>tr("/api/trace",{method:"POST",body:JSON.stringify({scene_code:t,point_code:e,when:n})}),traceAnalytic:(t,e,n,i)=>tr("/api/trace-analytic",{method:"POST",body:JSON.stringify({scene_code:t,point_code:e,elevation_deg:n,azimuth_deg:i})}),results:t=>tr("/api/results?"+new URLSearchParams({scene_code:t})),geometries:t=>tr("/api/db/verify-geometries?"+new URLSearchParams({scene_code:t}))};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fd="165",Dr={ROTATE:0,DOLLY:1,PAN:2},Nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ux=0,Dh=1,Ix=2,w_=1,Fx=2,ni=3,Xi=0,nn=1,si=2,Hi=0,xs=1,Nh=2,Uh=3,Ih=4,Ox=5,fr=100,kx=101,zx=102,Bx=103,Hx=104,Vx=200,Gx=201,Wx=202,Xx=203,uf=204,cf=205,jx=206,Yx=207,$x=208,qx=209,Kx=210,Zx=211,Qx=212,Jx=213,ey=214,ty=0,ny=1,iy=2,Tl=3,ry=4,sy=5,oy=6,ay=7,A_=0,ly=1,uy=2,Vi=0,cy=1,fy=2,dy=3,hy=4,py=5,my=6,gy=7,C_=300,bs=301,Ls=302,ff=303,df=304,Kl=306,hf=1e3,gr=1001,pf=1002,Tn=1003,_y=1004,ua=1005,In=1006,Nu=1007,_r=1008,ji=1009,vy=1010,xy=1011,wl=1012,R_=1013,Ds=1014,Di=1015,Zl=1016,P_=1017,b_=1018,Ns=1020,yy=35902,Sy=1021,My=1022,Xn=1023,Ey=1024,Ty=1025,ys=1026,Us=1027,wy=1028,L_=1029,Ay=1030,D_=1031,N_=1033,Uu=33776,Iu=33777,Fu=33778,Ou=33779,Fh=35840,Oh=35841,kh=35842,zh=35843,Bh=36196,Hh=37492,Vh=37496,Gh=37808,Wh=37809,Xh=37810,jh=37811,Yh=37812,$h=37813,qh=37814,Kh=37815,Zh=37816,Qh=37817,Jh=37818,ep=37819,tp=37820,np=37821,ku=36492,ip=36494,rp=36495,Cy=36283,sp=36284,op=36285,ap=36286,Ry=3200,Py=3201,U_=0,by=1,Pi="",Vn="srgb",Zi="srgb-linear",dd="display-p3",Ql="display-p3-linear",Al="linear",rt="srgb",Cl="rec709",Rl="p3",Ur=7680,lp=519,Ly=512,Dy=513,Ny=514,I_=515,Uy=516,Iy=517,Fy=518,Oy=519,up=35044,cp="300 es",li=2e3,Pl=2001;class br{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fp=1234567;const Ss=Math.PI/180,Fo=180/Math.PI;function zs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Vt(t,e,n){return Math.max(e,Math.min(n,t))}function hd(t,e){return(t%e+e)%e}function ky(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function zy(t,e,n){return t!==e?(n-t)/(e-t):0}function vo(t,e,n){return(1-n)*t+n*e}function By(t,e,n,i){return vo(t,e,1-Math.exp(-n*i))}function Hy(t,e=1){return e-Math.abs(hd(t,e*2)-e)}function Vy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Gy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Wy(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Xy(t,e){return t+Math.random()*(e-t)}function jy(t){return t*(.5-Math.random())}function Yy(t){t!==void 0&&(fp=t);let e=fp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $y(t){return t*Ss}function qy(t){return t*Fo}function Ky(t){return(t&t-1)===0&&t!==0}function Zy(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Qy(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Jy(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),f=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*h,l*d,a*u);break;case"YZY":t.set(l*d,a*f,l*h,a*u);break;case"ZXZ":t.set(l*h,l*d,a*f,a*u);break;case"XZX":t.set(a*f,l*v,l*p,a*u);break;case"YXY":t.set(l*p,a*f,l*v,a*u);break;case"ZYZ":t.set(l*v,l*p,a*f,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Jr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Qa={DEG2RAD:Ss,RAD2DEG:Fo,generateUUID:zs,clamp:Vt,euclideanModulo:hd,mapLinear:ky,inverseLerp:zy,lerp:vo,damp:By,pingpong:Hy,smoothstep:Vy,smootherstep:Gy,randInt:Wy,randFloat:Xy,randFloatSpread:jy,seededRandom:Yy,degToRad:$y,radToDeg:qy,isPowerOfTwo:Ky,ceilPowerOfTwo:Zy,floorPowerOfTwo:Qy,setQuaternionFromProperEuler:Jy,normalize:Xt,denormalize:Jr};class Re{constructor(e=0,n=0){Re.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,u){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],p=i[5],v=i[8],x=r[0],m=r[3],c=r[6],g=r[1],_=r[4],M=r[7],R=r[2],C=r[5],A=r[8];return s[0]=o*x+a*g+l*R,s[3]=o*m+a*_+l*C,s[6]=o*c+a*M+l*A,s[1]=u*x+f*g+h*R,s[4]=u*m+f*_+h*C,s[7]=u*c+f*M+h*A,s[2]=d*x+p*g+v*R,s[5]=d*m+p*_+v*C,s[8]=d*c+p*M+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*o-a*u,d=a*l-f*s,p=u*s-o*l,v=n*h+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*u-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(zu.makeScale(e,n)),this}rotate(e){return this.premultiply(zu.makeRotation(-e)),this}translate(e,n){return this.premultiply(zu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zu=new Fe;function F_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function bl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function eS(){const t=bl("canvas");return t.style.display="block",t}const dp={};function O_(t){t in dp||(dp[t]=!0,console.warn(t))}function tS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const hp=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pp=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ca={[Zi]:{transfer:Al,primaries:Cl,toReference:t=>t,fromReference:t=>t},[Vn]:{transfer:rt,primaries:Cl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ql]:{transfer:Al,primaries:Rl,toReference:t=>t.applyMatrix3(pp),fromReference:t=>t.applyMatrix3(hp)},[dd]:{transfer:rt,primaries:Rl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(pp),fromReference:t=>t.applyMatrix3(hp).convertLinearToSRGB()}},nS=new Set([Zi,Ql]),Qe={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!nS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ca[e].toReference,r=ca[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ca[t].primaries},getTransfer:function(t){return t===Pi?Al:ca[t].transfer}};function Ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ir;class iS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=bl("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ms(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ms(n[i]/255)*255):n[i]=Ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rS=0;class k_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=zs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hu(r[o].image)):s.push(Hu(r[o]))}else s=Hu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?iS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sS=0;class rn extends br{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=gr,r=gr,s=In,o=_r,a=Xn,l=ji,u=rn.DEFAULT_ANISOTROPY,f=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=zs(),this.name="",this.source=new k_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==C_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hf:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hf:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=C_;rn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],p=l[5],v=l[9],x=l[2],m=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,M=(p+1)/2,R=(c+1)/2,C=(f+d)/4,A=(h+x)/4,b=(v+m)/4;return _>M&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=A/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=b/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(h-x)/g,this.z=(d-f)/g,this.w=Math.acos((u+p+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oS extends br{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new k_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends oS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class z_ extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aS extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(h!==x||l!==d||u!==p||f!==v){let m=1-a;const c=l*d+u*p+f*v+h*x,g=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const R=Math.sqrt(_),C=Math.atan2(R,c*g);m=Math.sin(m*C)/R,a=Math.sin(a*C)/R}const M=a*g;if(l=l*m+d*M,u=u*m+p*M,f=f*m+v*M,h=h*m+x*M,m===1-a){const R=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=R,u*=R,f*=R,h*=R}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+f*h+l*p-u*d,e[n+1]=l*v+f*d+u*h-a*p,e[n+2]=u*v+f*p+a*d-l*h,e[n+3]=f*v-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*f*h+u*p*v,this._y=u*p*h-d*f*v,this._z=u*f*v+d*p*h,this._w=u*f*h-d*p*v;break;case"YXZ":this._x=d*f*h+u*p*v,this._y=u*p*h-d*f*v,this._z=u*f*v-d*p*h,this._w=u*f*h+d*p*v;break;case"ZXY":this._x=d*f*h-u*p*v,this._y=u*p*h+d*f*v,this._z=u*f*v+d*p*h,this._w=u*f*h-d*p*v;break;case"ZYX":this._x=d*f*h-u*p*v,this._y=u*p*h+d*f*v,this._z=u*f*v-d*p*h,this._w=u*f*h+d*p*v;break;case"YZX":this._x=d*f*h+u*p*v,this._y=u*p*h+d*f*v,this._z=u*f*v-d*p*h,this._w=u*f*h-d*p*v;break;case"XZY":this._x=d*f*h-u*p*v,this._y=u*p*h-d*f*v,this._z=u*f*v+d*p*h,this._w=u*f*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*f,this.y=i+l*f+a*u-s*h,this.z=r+l*h+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vu.copy(this).projectOnVector(e),this.sub(Vu)}reflect(e){return this.sub(Vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vu=new U,mp=new Cr;class Go{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fa.copy(i.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),da.subVectors(this.max,Qs),Fr.subVectors(e.a,Qs),Or.subVectors(e.b,Qs),kr.subVectors(e.c,Qs),vi.subVectors(Or,Fr),xi.subVectors(kr,Or),nr.subVectors(Fr,kr);let n=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-nr.z,nr.y,vi.z,0,-vi.x,xi.z,0,-xi.x,nr.z,0,-nr.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-nr.y,nr.x,0];return!Gu(n,Fr,Or,kr,da)||(n=[1,0,0,0,1,0,0,0,1],!Gu(n,Fr,Or,kr,da))?!1:(ha.crossVectors(vi,xi),n=[ha.x,ha.y,ha.z],Gu(n,Fr,Or,kr,da))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new U,new U,new U,new U,new U,new U,new U,new U],Pn=new U,fa=new Go,Fr=new U,Or=new U,kr=new U,vi=new U,xi=new U,nr=new U,Qs=new U,da=new U,ha=new U,ir=new U;function Gu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ir.fromArray(t,s);const a=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),u=n.dot(ir),f=i.dot(ir);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const lS=new Go,Js=new U,Wu=new U;class Jl{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):lS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Wu)),this.expandByPoint(Js.copy(e.center).sub(Wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new U,Xu=new U,pa=new U,yi=new U,ju=new U,ma=new U,Yu=new U;class eu{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xu.copy(e).add(n).multiplyScalar(.5),pa.copy(n).sub(e).normalize(),yi.copy(this.origin).sub(Xu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(pa),a=yi.dot(this.direction),l=-yi.dot(pa),u=yi.lengthSq(),f=Math.abs(1-o*o);let h,d,p,v;if(f>0)if(h=o*l-a,d=o*a-l,v=s*f,h>=0)if(d>=-v)if(d<=v){const x=1/f;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Xu).addScaledVector(pa,d),p}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,r,s){ju.subVectors(n,e),ma.subVectors(i,e),Yu.crossVectors(ju,ma);let o=this.direction.dot(Yu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(ma.crossVectors(yi,ma));if(l<0)return null;const u=a*this.direction.dot(ju.cross(yi));if(u<0||l+u>o)return null;const f=-a*yi.dot(Yu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,n,i,r,s,o,a,l,u,f,h,d,p,v,x,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,h,d,p,v,x,m)}set(e,n,i,r,s,o,a,l,u,f,h,d,p,v,x,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=p,c[7]=v,c[11]=x,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),s=1/zr.setFromMatrixColumn(e,1).length(),o=1/zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,p=o*h,v=a*f,x=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=p+v*u,n[5]=d-x*u,n[9]=-a*l,n[2]=x-d*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,v=u*f,x=u*h;n[0]=d+x*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=p*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,v=u*f,x=u*h;n[0]=d-x*a,n[4]=-o*h,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*f,n[9]=x-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,p=o*h,v=a*f,x=a*h;n[0]=l*f,n[4]=v*u-p,n[8]=d*u+x,n[1]=l*h,n[5]=x*u+d,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*f,n[4]=x-d*h,n[8]=v*h+p,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=p*h+v,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+x,n[5]=o*f,n[9]=p*h-v,n[2]=v*h-p,n[6]=a*f,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uS,e,cS)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Si.crossVectors(i,un),Si.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Si.crossVectors(i,un)),Si.normalize(),ga.crossVectors(un,Si),r[0]=Si.x,r[4]=ga.x,r[8]=un.x,r[1]=Si.y,r[5]=ga.y,r[9]=un.y,r[2]=Si.z,r[6]=ga.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],c=i[14],g=i[3],_=i[7],M=i[11],R=i[15],C=r[0],A=r[4],b=r[8],w=r[12],S=r[1],L=r[5],H=r[9],O=r[13],$=r[2],K=r[6],Y=r[10],Q=r[14],N=r[3],I=r[7],Z=r[11],re=r[15];return s[0]=o*C+a*S+l*$+u*N,s[4]=o*A+a*L+l*K+u*I,s[8]=o*b+a*H+l*Y+u*Z,s[12]=o*w+a*O+l*Q+u*re,s[1]=f*C+h*S+d*$+p*N,s[5]=f*A+h*L+d*K+p*I,s[9]=f*b+h*H+d*Y+p*Z,s[13]=f*w+h*O+d*Q+p*re,s[2]=v*C+x*S+m*$+c*N,s[6]=v*A+x*L+m*K+c*I,s[10]=v*b+x*H+m*Y+c*Z,s[14]=v*w+x*O+m*Q+c*re,s[3]=g*C+_*S+M*$+R*N,s[7]=g*A+_*L+M*K+R*I,s[11]=g*b+_*H+M*Y+R*Z,s[15]=g*w+_*O+M*Q+R*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],p=e[14],v=e[3],x=e[7],m=e[11],c=e[15];return v*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*p-i*l*p)+x*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*f-s*l*f)+m*(+n*u*h-n*a*p-s*o*h+i*o*p+s*a*f-i*u*f)+c*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],p=e[11],v=e[12],x=e[13],m=e[14],c=e[15],g=h*m*u-x*d*u+x*l*p-a*m*p-h*l*c+a*d*c,_=v*d*u-f*m*u-v*l*p+o*m*p+f*l*c-o*d*c,M=f*x*u-v*h*u+v*a*p-o*x*p-f*a*c+o*h*c,R=v*h*l-f*x*l-v*a*d+o*x*d+f*a*m-o*h*m,C=n*g+i*_+r*M+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=g*A,e[1]=(x*d*s-h*m*s-x*r*p+i*m*p+h*r*c-i*d*c)*A,e[2]=(a*m*s-x*l*s+x*r*u-i*m*u-a*r*c+i*l*c)*A,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*p-i*l*p)*A,e[4]=_*A,e[5]=(f*m*s-v*d*s+v*r*p-n*m*p-f*r*c+n*d*c)*A,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*c-n*l*c)*A,e[7]=(o*d*s-f*l*s+f*r*u-n*d*u-o*r*p+n*l*p)*A,e[8]=M*A,e[9]=(v*h*s-f*x*s-v*i*p+n*x*p+f*i*c-n*h*c)*A,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*c+n*a*c)*A,e[11]=(f*a*s-o*h*s-f*i*u+n*h*u+o*i*p-n*a*p)*A,e[12]=R*A,e[13]=(f*x*r-v*h*r+v*i*d-n*x*d-f*i*m+n*h*m)*A,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*A,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,h=a+a,d=s*u,p=s*f,v=s*h,x=o*f,m=o*h,c=a*h,g=l*u,_=l*f,M=l*h,R=i.x,C=i.y,A=i.z;return r[0]=(1-(x+c))*R,r[1]=(p+M)*R,r[2]=(v-_)*R,r[3]=0,r[4]=(p-M)*C,r[5]=(1-(d+c))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(v+_)*A,r[9]=(m-g)*A,r[10]=(1-(d+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=zr.set(r[0],r[1],r[2]).length();const o=zr.set(r[4],r[5],r[6]).length(),a=zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const u=1/s,f=1/o,h=1/a;return bn.elements[0]*=u,bn.elements[1]*=u,bn.elements[2]*=u,bn.elements[4]*=f,bn.elements[5]*=f,bn.elements[6]*=f,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,n.setFromRotationMatrix(bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=li){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,v;if(a===li)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Pl)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=li){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*u,p=(i+r)*f;let v,x;if(a===li)v=(o+s)*h,x=-2*h;else if(a===Pl)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const zr=new U,bn=new ct,uS=new U(0,0,0),cS=new U(1,1,1),Si=new U,ga=new U,un=new U,gp=new ct,_p=new Cr;class qn{constructor(e=0,n=0,i=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _p.setFromEuler(this),this.setFromQuaternion(_p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class pd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fS=0;const vp=new U,Br=new Cr,Jn=new ct,_a=new U,eo=new U,dS=new U,hS=new Cr,xp=new U(1,0,0),yp=new U(0,1,0),Sp=new U(0,0,1),Mp={type:"added"},pS={type:"removed"},Hr={type:"childadded",child:null},$u={type:"childremoved",child:null};class Nt extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new U,n=new qn,i=new Cr,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Fe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(xp,e)}rotateY(e){return this.rotateOnAxis(yp,e)}rotateZ(e){return this.rotateOnAxis(Sp,e)}translateOnAxis(e,n){return vp.copy(e).applyQuaternion(this.quaternion),this.position.add(vp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xp,e)}translateY(e){return this.translateOnAxis(yp,e)}translateZ(e){return this.translateOnAxis(Sp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_a.copy(e):_a.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(eo,_a,this.up):Jn.lookAt(_a,eo,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(Jn),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mp),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pS),$u.child=e,this.dispatchEvent($u),$u.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mp),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,dS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,hS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new U(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new U,ei=new U,qu=new U,ti=new U,Vr=new U,Gr=new U,Ep=new U,Ku=new U,Zu=new U,Qu=new U;class Fn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ln.subVectors(e,n),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ln.subVectors(r,n),ei.subVectors(i,n),qu.subVectors(e,n);const o=Ln.dot(Ln),a=Ln.dot(ei),l=Ln.dot(qu),u=ei.dot(ei),f=ei.dot(qu),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(u*l-a*f)*d,v=(o*f-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static isFrontFacing(e,n,i,r){return Ln.subVectors(i,n),ei.subVectors(e,n),Ln.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Ln.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Fn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Vr.subVectors(r,i),Gr.subVectors(s,i),Ku.subVectors(e,i);const l=Vr.dot(Ku),u=Gr.dot(Ku);if(l<=0&&u<=0)return n.copy(i);Zu.subVectors(e,r);const f=Vr.dot(Zu),h=Gr.dot(Zu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Vr,o);Qu.subVectors(e,s);const p=Vr.dot(Qu),v=Gr.dot(Qu);if(v>=0&&p<=v)return n.copy(s);const x=p*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Gr,a);const m=f*v-p*h;if(m<=0&&h-f>=0&&p-v>=0)return Ep.subVectors(s,r),a=(h-f)/(h-f+(p-v)),n.copy(r).addScaledVector(Ep,a);const c=1/(m+x+d);return o=x*c,a=d*c,n.copy(i).addScaledVector(Vr,o).addScaledVector(Gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const B_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},va={h:0,s:0,l:0};function Ju(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=hd(e,1),n=Vt(n,0,1),i=Vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ju(o,s,e+1/3),this.g=Ju(o,s,e),this.b=Ju(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vn){const i=B_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=Bu(e.r),this.g=Bu(e.g),this.b=Bu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return Qe.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Vt(Bt.r*255,0,255))*65536+Math.round(Vt(Bt.g*255,0,255))*256+Math.round(Vt(Bt.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Vn){Qe.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==Vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+n,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mi),e.getHSL(va);const i=vo(Mi.h,va.h,n),r=vo(Mi.s,va.s,n),s=vo(Mi.l,va.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Xe;Xe.NAMES=B_;let mS=0;class Bs extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=xs,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uf,this.blendDst=cf,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Tl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uf&&(i.blendSrc=this.blendSrc),this.blendDst!==cf&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Tl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tu extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=A_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new U,xa=new Re;class $n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=up,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return O_("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xa.fromBufferAttribute(this,n),xa.applyMatrix3(e),this.setXY(n,xa.x,xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Jr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Jr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Jr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Jr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Jr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==up&&(e.usage=this.usage),e}}class H_ extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class V_ extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wt extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let gS=0;const xn=new ct,ec=new Nt,Wr=new U,cn=new Go,to=new Go,Pt=new U;class sn extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F_(e)?V_:H_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];to.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(cn.min,to.min),cn.expandByPoint(Pt),Pt.addVectors(cn.max,to.max),cn.expandByPoint(Pt)):(cn.expandByPoint(to.min),cn.expandByPoint(to.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Pt.fromBufferAttribute(a,u),l&&(Wr.fromBufferAttribute(e,u),Pt.add(Wr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new U,l[b]=new U;const u=new U,f=new U,h=new U,d=new Re,p=new Re,v=new Re,x=new U,m=new U;function c(b,w,S){u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,w),v.fromBufferAttribute(s,S),f.sub(u),h.sub(u),p.sub(d),v.sub(d);const L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(L),a[b].add(x),a[w].add(x),a[S].add(x),l[b].add(m),l[w].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,w=g.length;b<w;++b){const S=g[b],L=S.start,H=S.count;for(let O=L,$=L+H;O<$;O+=3)c(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const _=new U,M=new U,R=new U,C=new U;function A(b){R.fromBufferAttribute(r,b),C.copy(R);const w=a[b];_.copy(w),_.sub(R.multiplyScalar(R.dot(w))).normalize(),M.crossVectors(C,w);const L=M.dot(l[b])<0?-1:1;o.setXYZW(b,_.x,_.y,_.z,L)}for(let b=0,w=g.length;b<w;++b){const S=g[b],L=S.start,H=S.count;for(let O=L,$=L+H;O<$;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,u=new U,f=new U,h=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let c=0;c<f;c++)d[v++]=u[p++]}return new $n(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new sn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tp=new ct,rr=new eu,ya=new Jl,wp=new U,Xr=new U,jr=new U,Yr=new U,tc=new U,Sa=new U,Ma=new Re,Ea=new Re,Ta=new Re,Ap=new U,Cp=new U,Rp=new U,wa=new U,Aa=new U;class hn extends Nt{constructor(e=new sn,n=new tu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Sa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],h=s[l];f!==0&&(tc.fromBufferAttribute(h,e),o?Sa.addScaledVector(tc,f):Sa.addScaledVector(tc.sub(n),f))}n.add(Sa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(ya.containsPoint(rr.origin)===!1&&(rr.intersectSphere(ya,wp)===null||rr.origin.distanceToSquared(wp)>(e.far-e.near)**2))&&(Tp.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Tp),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],c=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,R=_;M<R;M+=3){const C=a.getX(M),A=a.getX(M+1),b=a.getX(M+2);r=Ca(this,c,e,i,u,f,h,C,A,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,c=x;m<c;m+=3){const g=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);r=Ca(this,o,e,i,u,f,h,g,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],c=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,R=_;M<R;M+=3){const C=M,A=M+1,b=M+2;r=Ca(this,c,e,i,u,f,h,C,A,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,c=x;m<c;m+=3){const g=m,_=m+1,M=m+2;r=Ca(this,o,e,i,u,f,h,g,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function _S(t,e,n,i,r,s,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Xi,a),l===null)return null;Aa.copy(a),Aa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Aa);return u<n.near||u>n.far?null:{distance:u,point:Aa.clone(),object:t}}function Ca(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Xr),t.getVertexPosition(l,jr),t.getVertexPosition(u,Yr);const f=_S(t,e,n,i,Xr,jr,Yr,wa);if(f){r&&(Ma.fromBufferAttribute(r,a),Ea.fromBufferAttribute(r,l),Ta.fromBufferAttribute(r,u),f.uv=Fn.getInterpolation(wa,Xr,jr,Yr,Ma,Ea,Ta,new Re)),s&&(Ma.fromBufferAttribute(s,a),Ea.fromBufferAttribute(s,l),Ta.fromBufferAttribute(s,u),f.uv1=Fn.getInterpolation(wa,Xr,jr,Yr,Ma,Ea,Ta,new Re)),o&&(Ap.fromBufferAttribute(o,a),Cp.fromBufferAttribute(o,l),Rp.fromBufferAttribute(o,u),f.normal=Fn.getInterpolation(wa,Xr,jr,Yr,Ap,Cp,Rp,new U),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new U,materialIndex:0};Fn.getNormal(Xr,jr,Yr,h.normal),f.face=h}return f}class Hs extends sn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(h,2));function v(x,m,c,g,_,M,R,C,A,b,w){const S=M/A,L=R/b,H=M/2,O=R/2,$=C/2,K=A+1,Y=b+1;let Q=0,N=0;const I=new U;for(let Z=0;Z<Y;Z++){const re=Z*L-O;for(let xe=0;xe<K;xe++){const Ve=xe*S-H;I[x]=Ve*g,I[m]=re*_,I[c]=$,u.push(I.x,I.y,I.z),I[x]=0,I[m]=0,I[c]=C>0?1:-1,f.push(I.x,I.y,I.z),h.push(xe/A),h.push(1-Z/b),Q+=1}}for(let Z=0;Z<b;Z++)for(let re=0;re<A;re++){const xe=d+re+K*Z,Ve=d+re+K*(Z+1),q=d+(re+1)+K*(Z+1),se=d+(re+1)+K*Z;l.push(xe,Ve,se),l.push(Ve,q,se),N+=6}a.addGroup(p,N,w),p+=N,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=Is(t[n]);for(const r in i)e[r]=i[r]}return e}function vS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function G_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const xS={clone:Is,merge:jt};var yS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yS,this.fragmentShader=SS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=vS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class W_ extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new U,Pp=new Re,bp=new Re;class Mn extends W_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,n){return this.getViewBounds(e,Pp,bp),n.subVectors(bp,Pp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ss*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const $r=-90,qr=1;class MS extends Nt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn($r,qr,e,n);r.layers=this.layers,this.add(r);const s=new Mn($r,qr,e,n);s.layers=this.layers,this.add(s);const o=new Mn($r,qr,e,n);o.layers=this.layers,this.add(o);const a=new Mn($r,qr,e,n);a.layers=this.layers,this.add(a);const l=new Mn($r,qr,e,n);l.layers=this.layers,this.add(l);const u=new Mn($r,qr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class X_ extends rn{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:bs,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ES extends Ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new X_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:In}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Hs(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Hi});s.uniforms.tEquirect.value=n;const o=new hn(r,s),a=n.minFilter;return n.minFilter===_r&&(n.minFilter=In),new MS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const nc=new U,TS=new U,wS=new Fe;class Ai{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=nc.subVectors(i,n).cross(TS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(nc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||wS.getNormalMatrix(e),r=this.coplanarPoint(nc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new Jl,Ra=new U;class md{constructor(e=new Ai,n=new Ai,i=new Ai,r=new Ai,s=new Ai,o=new Ai){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],v=r[9],x=r[10],m=r[11],c=r[12],g=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,d-u,m-p,M-c).normalize(),i[1].setComponents(l+s,d+u,m+p,M+c).normalize(),i[2].setComponents(l+o,d+f,m+v,M+g).normalize(),i[3].setComponents(l-o,d-f,m-v,M-g).normalize(),i[4].setComponents(l-a,d-h,m-x,M-_).normalize(),n===li)i[5].setComponents(l+a,d+h,m+x,M+_).normalize();else if(n===Pl)i[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ra.x=r.normal.x>0?e.max.x:e.min.x,Ra.y=r.normal.y>0?e.max.y:e.min.y,Ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function j_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function AS(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,h=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,f),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const f=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(u,a),h.count===-1&&d.length===0&&t.bufferSubData(u,0,f),d.length!==0){for(let p=0,v=d.length;p<v;p++){const x=d[p];t.bufferSubData(u,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(u,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class nu extends sn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=n/l,p=[],v=[],x=[],m=[];for(let c=0;c<f;c++){const g=c*d-o;for(let _=0;_<u;_++){const M=_*h-s;v.push(M,-g,0),x.push(0,0,1),m.push(_/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const _=g+u*c,M=g+u*(c+1),R=g+1+u*(c+1),C=g+1+u*c;p.push(_,M,C),p.push(M,R,C)}this.setIndex(p),this.setAttribute("position",new wt(v,3)),this.setAttribute("normal",new wt(x,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.width,e.height,e.widthSegments,e.heightSegments)}}var CS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,PS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,US=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,FS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,OS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,BS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,KS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,QS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iM="gl_FragColor = linearToOutputTexel( gl_FragColor );",rM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,CM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,uE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,UE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,XE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$E=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:CS,alphahash_pars_fragment:RS,alphamap_fragment:PS,alphamap_pars_fragment:bS,alphatest_fragment:LS,alphatest_pars_fragment:DS,aomap_fragment:NS,aomap_pars_fragment:US,batching_pars_vertex:IS,batching_vertex:FS,begin_vertex:OS,beginnormal_vertex:kS,bsdfs:zS,iridescence_fragment:BS,bumpmap_pars_fragment:HS,clipping_planes_fragment:VS,clipping_planes_pars_fragment:GS,clipping_planes_pars_vertex:WS,clipping_planes_vertex:XS,color_fragment:jS,color_pars_fragment:YS,color_pars_vertex:$S,color_vertex:qS,common:KS,cube_uv_reflection_fragment:ZS,defaultnormal_vertex:QS,displacementmap_pars_vertex:JS,displacementmap_vertex:eM,emissivemap_fragment:tM,emissivemap_pars_fragment:nM,colorspace_fragment:iM,colorspace_pars_fragment:rM,envmap_fragment:sM,envmap_common_pars_fragment:oM,envmap_pars_fragment:aM,envmap_pars_vertex:lM,envmap_physical_pars_fragment:xM,envmap_vertex:uM,fog_vertex:cM,fog_pars_vertex:fM,fog_fragment:dM,fog_pars_fragment:hM,gradientmap_pars_fragment:pM,lightmap_pars_fragment:mM,lights_lambert_fragment:gM,lights_lambert_pars_fragment:_M,lights_pars_begin:vM,lights_toon_fragment:yM,lights_toon_pars_fragment:SM,lights_phong_fragment:MM,lights_phong_pars_fragment:EM,lights_physical_fragment:TM,lights_physical_pars_fragment:wM,lights_fragment_begin:AM,lights_fragment_maps:CM,lights_fragment_end:RM,logdepthbuf_fragment:PM,logdepthbuf_pars_fragment:bM,logdepthbuf_pars_vertex:LM,logdepthbuf_vertex:DM,map_fragment:NM,map_pars_fragment:UM,map_particle_fragment:IM,map_particle_pars_fragment:FM,metalnessmap_fragment:OM,metalnessmap_pars_fragment:kM,morphinstance_vertex:zM,morphcolor_vertex:BM,morphnormal_vertex:HM,morphtarget_pars_vertex:VM,morphtarget_vertex:GM,normal_fragment_begin:WM,normal_fragment_maps:XM,normal_pars_fragment:jM,normal_pars_vertex:YM,normal_vertex:$M,normalmap_pars_fragment:qM,clearcoat_normal_fragment_begin:KM,clearcoat_normal_fragment_maps:ZM,clearcoat_pars_fragment:QM,iridescence_pars_fragment:JM,opaque_fragment:eE,packing:tE,premultiplied_alpha_fragment:nE,project_vertex:iE,dithering_fragment:rE,dithering_pars_fragment:sE,roughnessmap_fragment:oE,roughnessmap_pars_fragment:aE,shadowmap_pars_fragment:lE,shadowmap_pars_vertex:uE,shadowmap_vertex:cE,shadowmask_pars_fragment:fE,skinbase_vertex:dE,skinning_pars_vertex:hE,skinning_vertex:pE,skinnormal_vertex:mE,specularmap_fragment:gE,specularmap_pars_fragment:_E,tonemapping_fragment:vE,tonemapping_pars_fragment:xE,transmission_fragment:yE,transmission_pars_fragment:SE,uv_pars_fragment:ME,uv_pars_vertex:EE,uv_vertex:TE,worldpos_vertex:wE,background_vert:AE,background_frag:CE,backgroundCube_vert:RE,backgroundCube_frag:PE,cube_vert:bE,cube_frag:LE,depth_vert:DE,depth_frag:NE,distanceRGBA_vert:UE,distanceRGBA_frag:IE,equirect_vert:FE,equirect_frag:OE,linedashed_vert:kE,linedashed_frag:zE,meshbasic_vert:BE,meshbasic_frag:HE,meshlambert_vert:VE,meshlambert_frag:GE,meshmatcap_vert:WE,meshmatcap_frag:XE,meshnormal_vert:jE,meshnormal_frag:YE,meshphong_vert:$E,meshphong_frag:qE,meshphysical_vert:KE,meshphysical_frag:ZE,meshtoon_vert:QE,meshtoon_frag:JE,points_vert:eT,points_frag:tT,shadow_vert:nT,shadow_frag:iT,sprite_vert:rT,sprite_frag:sT},fe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Gn={basic:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:jt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:jt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:jt([fe.points,fe.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:jt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:jt([fe.common,fe.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:jt([fe.sprite,fe.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:jt([fe.common,fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:jt([fe.lights,fe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Gn.physical={uniforms:jt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Pa={r:0,b:0,g:0},or=new qn,oT=new ct;function aT(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,u,f,h=null,d=0,p=null;function v(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function x(g){let _=!1;const M=v(g);M===null?c(a,l):M&&M.isColor&&(c(M,1),_=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,_){const M=v(_);M&&(M.isCubeTexture||M.mapping===Kl)?(f===void 0&&(f=new hn(new Hs(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Is(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),or.copy(_.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(oT.makeRotationFromEuler(or)),f.material.toneMapped=Qe.getTransfer(M.colorSpace)!==rt,(h!==M||d!==M.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,h=M,d=M.version,p=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new hn(new nu(2,2),new Yi({name:"BackgroundMaterial",uniforms:Is(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(M.colorSpace)!==rt,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function c(g,_){g.getRGB(Pa,G_(t)),i.buffers.color.setClear(Pa.r,Pa.g,Pa.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,c(a,l)},render:x,addToRenderList:m}}function lT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,L,H,O,$){let K=!1;const Y=h(O,H,L);s!==Y&&(s=Y,u(s.object)),K=p(S,O,H,$),K&&v(S,O,H,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,M(S,L,H,O),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function h(S,L,H){const O=H.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let K=$[L.id];K===void 0&&(K={},$[L.id]=K);let Y=K[O];return Y===void 0&&(Y=d(l()),K[O]=Y),Y}function d(S){const L=[],H=[],O=[];for(let $=0;$<n;$++)L[$]=0,H[$]=0,O[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,L,H,O){const $=s.attributes,K=L.attributes;let Y=0;const Q=H.getAttributes();for(const N in Q)if(Q[N].location>=0){const Z=$[N];let re=K[N];if(re===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;Y++}return s.attributesNum!==Y||s.index!==O}function v(S,L,H,O){const $={},K=L.attributes;let Y=0;const Q=H.getAttributes();for(const N in Q)if(Q[N].location>=0){let Z=K[N];Z===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),$[N]=re,Y++}s.attributes=$,s.attributesNum=Y,s.index=O}function x(){const S=s.newAttributes;for(let L=0,H=S.length;L<H;L++)S[L]=0}function m(S){c(S,0)}function c(S,L){const H=s.newAttributes,O=s.enabledAttributes,$=s.attributeDivisors;H[S]=1,O[S]===0&&(t.enableVertexAttribArray(S),O[S]=1),$[S]!==L&&(t.vertexAttribDivisor(S,L),$[S]=L)}function g(){const S=s.newAttributes,L=s.enabledAttributes;for(let H=0,O=L.length;H<O;H++)L[H]!==S[H]&&(t.disableVertexAttribArray(H),L[H]=0)}function _(S,L,H,O,$,K,Y){Y===!0?t.vertexAttribIPointer(S,L,H,$,K):t.vertexAttribPointer(S,L,H,O,$,K)}function M(S,L,H,O){x();const $=O.attributes,K=H.getAttributes(),Y=L.defaultAttributeValues;for(const Q in K){const N=K[Q];if(N.location>=0){let I=$[Q];if(I===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(I=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(I=S.instanceColor)),I!==void 0){const Z=I.normalized,re=I.itemSize,xe=e.get(I);if(xe===void 0)continue;const Ve=xe.buffer,q=xe.type,se=xe.bytesPerElement,he=q===t.INT||q===t.UNSIGNED_INT||I.gpuType===R_;if(I.isInterleavedBufferAttribute){const le=I.data,Oe=le.stride,be=I.offset;if(le.isInstancedInterleavedBuffer){for(let Ge=0;Ge<N.locationSize;Ge++)c(N.location+Ge,le.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ge=0;Ge<N.locationSize;Ge++)m(N.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let Ge=0;Ge<N.locationSize;Ge++)_(N.location+Ge,re/N.locationSize,q,Z,Oe*se,(be+re/N.locationSize*Ge)*se,he)}else{if(I.isInstancedBufferAttribute){for(let le=0;le<N.locationSize;le++)c(N.location+le,I.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let le=0;le<N.locationSize;le++)m(N.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let le=0;le<N.locationSize;le++)_(N.location+le,re/N.locationSize,q,Z,re*se,re/N.locationSize*le*se,he)}}else if(Y!==void 0){const Z=Y[Q];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(N.location,Z);break;case 3:t.vertexAttrib3fv(N.location,Z);break;case 4:t.vertexAttrib4fv(N.location,Z);break;default:t.vertexAttrib1fv(N.location,Z)}}}}g()}function R(){b();for(const S in i){const L=i[S];for(const H in L){const O=L[H];for(const $ in O)f(O[$].object),delete O[$];delete L[H]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const H in L){const O=L[H];for(const $ in O)f(O[$].object),delete O[$];delete L[H]}delete i[S.id]}function A(S){for(const L in i){const H=i[L];if(H[S.id]===void 0)continue;const O=H[S.id];for(const $ in O)f(O[$].object),delete O[$];delete H[S.id]}}function b(){w(),o=!0,s!==r&&(s=r,u(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function uT(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function o(u,f,h){h!==0&&(t.drawArraysInstanced(i,u,f,h),n.update(f,i,h))}function a(u,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<h;p++)this.render(u[p],f[p]);else{d.multiDrawArraysWEBGL(i,u,0,f,0,h);let p=0;for(let v=0;v<h;v++)p+=f[v];n.update(p,i,1)}}function l(u,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)o(u[v],f[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,f,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=f[x];for(let x=0;x<d.length;x++)n.update(v,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Xn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const A=C===Zl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ji&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Di&&!A)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),c=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:c,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:M,maxSamples:R}}function fT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ai,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,c=t.get(h);if(!r||v===null||v.length===0||s&&!m)s?f(null):u();else{const g=s?0:i,_=g*4;let M=c.clippingState||null;l.value=M,M=f(v,d,_,p);for(let R=0;R!==_;++R)M[R]=n[R];c.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const c=p+x*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<c)&&(m=new Float32Array(c));for(let _=0,M=p;_!==x;++_,M+=4)o.copy(h[_]).applyMatrix4(g,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function dT(t){let e=new WeakMap;function n(o,a){return a===ff?o.mapping=bs:a===df&&(o.mapping=Ls),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ff||a===df)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new ES(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Y_ extends W_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ds=4,Lp=[.125,.215,.35,.446,.526,.582],dr=20,ic=new Y_,Dp=new Xe;let rc=null,sc=0,oc=0,ac=!1;const cr=(1+Math.sqrt(5))/2,Kr=1/cr,Np=[new U(-cr,Kr,0),new U(cr,Kr,0),new U(-Kr,0,cr),new U(Kr,0,cr),new U(0,cr,-Kr),new U(0,cr,Kr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Up{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){rc=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rc,sc,oc),this._renderer.xr.enabled=ac,e.scissorTest=!1,ba(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===bs||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rc=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:Zl,format:Xn,colorSpace:Zi,depthBuffer:!1},r=Ip(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ip(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hT(s)),this._blurMaterial=pT(s,e,n)}return r}_compileMaterial(e){const n=new hn(this._lodPlanes[0],e);this._renderer.compile(n,ic)}_sceneToCubeUV(e,n,i,r){const a=new Mn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Dp),f.toneMapping=Vi,f.autoClear=!1;const p=new tu({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),v=new hn(new Hs,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Dp),x=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const _=this._cubeSize;ba(r,g*_,c>2?_:0,_,_),f.setRenderTarget(r),x&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===bs||e.mapping===Ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Op()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new hn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ba(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ic)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Np[(r-s-1)%Np.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new hn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*dr-1),x=s/v,m=isFinite(s)?1+Math.floor(f*x):dr;m>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);const c=[];let g=0;for(let A=0;A<dr;++A){const b=A/x,w=Math.exp(-b*b/2);c.push(w),A===0?g+=w:A<m&&(g+=2*w)}for(let A=0;A<c.length;A++)c[A]=c[A]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-i;const M=this._sizeLods[r],R=3*M*(r>_-ds?r-_+ds:0),C=4*(this._cubeSize-M);ba(n,R,C,3*M,2*M),l.setRenderTarget(n),l.render(h,ic)}}function hT(t){const e=[],n=[],i=[];let r=t;const s=t-ds+1+Lp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ds?l=Lp[o-t+ds-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,v=6,x=3,m=2,c=1,g=new Float32Array(x*v*p),_=new Float32Array(m*v*p),M=new Float32Array(c*v*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,b=C>2?0:-1,w=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];g.set(w,x*v*C),_.set(d,m*v*C);const S=[C,C,C,C,C,C];M.set(S,c*v*C)}const R=new sn;R.setAttribute("position",new $n(g,x)),R.setAttribute("uv",new $n(_,m)),R.setAttribute("faceIndex",new $n(M,c)),e.push(R),r>ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ip(t,e,n){const i=new Ar(t,e,n);return i.texture.mapping=Kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ba(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function pT(t,e,n){const i=new Float32Array(dr),r=new U(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Fp(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Op(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function gd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ff||l===df,f=l===bs||l===Ls;if(u||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Up(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new Up(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function gT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&O_("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _T(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,c=x.length;m<c;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let m=0,c=x.length;m<c;m++)e.update(x[m],t.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let _=0,M=g.length;_<M;_+=3){const R=g[_+0],C=g[_+1],A=g[_+2];d.push(R,C,C,A,A,R)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,M=g.length/3-1;_<M;_+=3){const R=_+0,C=_+1,A=_+2;d.push(R,C,C,A,A,R)}}else return;const m=new(F_(d)?V_:H_)(d,1);m.version=x;const c=s.get(h);c&&e.remove(c),s.set(h,m)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function vT(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function u(d,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,d*o,v),n.update(p,i,v))}function f(d,p,v){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<v;m++)this.render(d[m]/o,p[m]);else{x.multiDrawElementsWEBGL(i,p,0,s,d,0,v);let m=0;for(let c=0;c<v;c++)m+=p[c];n.update(m,i,1)}}function h(d,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<d.length;c++)u(d[c]/o,p[c],x[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,v);let c=0;for(let g=0;g<v;g++)c+=p[g];for(let g=0;g<x.length;g++)n.update(c,i,x[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function xT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function yT(t,e,n){const i=new WeakMap,r=new Lt;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let R=a.attributes.position.count*M,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*C*4*h),b=new z_(A,R,C,h);b.type=Di,b.needsUpdate=!0;const w=M*4;for(let L=0;L<h;L++){const H=c[L],O=g[L],$=_[L],K=R*C*4*L;for(let Y=0;Y<H.count;Y++){const Q=Y*w;v===!0&&(r.fromBufferAttribute(H,Y),A[K+Q+0]=r.x,A[K+Q+1]=r.y,A[K+Q+2]=r.z,A[K+Q+3]=0),x===!0&&(r.fromBufferAttribute(O,Y),A[K+Q+4]=r.x,A[K+Q+5]=r.y,A[K+Q+6]=r.z,A[K+Q+7]=0),m===!0&&(r.fromBufferAttribute($,Y),A[K+Q+8]=r.x,A[K+Q+9]=r.y,A[K+Q+10]=r.z,A[K+Q+11]=$.itemSize===4?r.w:1)}}d={count:h,texture:b,size:new Re(R,C)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function ST(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class $_ extends rn{constructor(e,n,i,r,s,o,a,l,u,f=ys){if(f!==ys&&f!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ys&&(i=Ds),i===void 0&&f===Us&&(i=Ns),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const q_=new rn,K_=new $_(1,1);K_.compareFunction=I_;const Z_=new z_,Q_=new aS,J_=new X_,kp=[],zp=[],Bp=new Float32Array(16),Hp=new Float32Array(9),Vp=new Float32Array(4);function Vs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=kp[r];if(s===void 0&&(s=new Float32Array(r),kp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function iu(t,e){let n=zp[e];n===void 0&&(n=new Int32Array(e),zp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function MT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function AT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;Vp.set(i),t.uniformMatrix2fv(this.addr,!1,Vp),Ct(n,i)}}function CT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;Hp.set(i),t.uniformMatrix3fv(this.addr,!1,Hp),Ct(n,i)}}function RT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;Bp.set(i),t.uniformMatrix4fv(this.addr,!1,Bp),Ct(n,i)}}function PT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function NT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?K_:q_;n.setTexture2D(e||s,r)}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Q_,r)}function zT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||J_,r)}function BT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Z_,r)}function HT(t){switch(t){case 5126:return MT;case 35664:return ET;case 35665:return TT;case 35666:return wT;case 35674:return AT;case 35675:return CT;case 35676:return RT;case 5124:case 35670:return PT;case 35667:case 35671:return bT;case 35668:case 35672:return LT;case 35669:case 35673:return DT;case 5125:return NT;case 36294:return UT;case 36295:return IT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return BT}}function VT(t,e){t.uniform1fv(this.addr,e)}function GT(t,e){const n=Vs(e,this.size,2);t.uniform2fv(this.addr,n)}function WT(t,e){const n=Vs(e,this.size,3);t.uniform3fv(this.addr,n)}function XT(t,e){const n=Vs(e,this.size,4);t.uniform4fv(this.addr,n)}function jT(t,e){const n=Vs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function YT(t,e){const n=Vs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $T(t,e){const n=Vs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qT(t,e){t.uniform1iv(this.addr,e)}function KT(t,e){t.uniform2iv(this.addr,e)}function ZT(t,e){t.uniform3iv(this.addr,e)}function QT(t,e){t.uniform4iv(this.addr,e)}function JT(t,e){t.uniform1uiv(this.addr,e)}function ew(t,e){t.uniform2uiv(this.addr,e)}function tw(t,e){t.uniform3uiv(this.addr,e)}function nw(t,e){t.uniform4uiv(this.addr,e)}function iw(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||q_,s[o])}function rw(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Q_,s[o])}function sw(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||J_,s[o])}function ow(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Z_,s[o])}function aw(t){switch(t){case 5126:return VT;case 35664:return GT;case 35665:return WT;case 35666:return XT;case 35674:return jT;case 35675:return YT;case 35676:return $T;case 5124:case 35670:return qT;case 35667:case 35671:return KT;case 35668:case 35672:return ZT;case 35669:case 35673:return QT;case 5125:return JT;case 36294:return ew;case 36295:return tw;case 36296:return nw;case 35678:case 36198:case 36298:case 36306:case 35682:return iw;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return sw;case 36289:case 36303:case 36311:case 36292:return ow}}class lw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=HT(n.type)}}class uw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=aw(n.type)}}class cw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const lc=/(\w+)(\])?(\[|\.)?/g;function Gp(t,e){t.seq.push(e),t.map[e.id]=e}function fw(t,e,n){const i=t.name,r=i.length;for(lc.lastIndex=0;;){const s=lc.exec(i),o=lc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Gp(n,u===void 0?new lw(a,t,e):new uw(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new cw(a),Gp(n,h)),n=h}}}class Ja{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);fw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Wp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const dw=37297;let hw=0;function pw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function mw(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===Rl&&n===Cl?i="LinearDisplayP3ToLinearSRGB":e===Cl&&n===Rl&&(i="LinearSRGBToLinearDisplayP3"),t){case Zi:case Ql:return[i,"LinearTransferOETF"];case Vn:case dd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Xp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+pw(t.getShaderSource(e),o)}else return r}function gw(t,e){const n=mw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function _w(t,e){let n;switch(e){case cy:n="Linear";break;case fy:n="Reinhard";break;case dy:n="OptimizedCineon";break;case hy:n="ACESFilmic";break;case my:n="AgX";break;case gy:n="Neutral";break;case py:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function vw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function xw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function yw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ao(t){return t!==""}function jp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sw=/^[ \t]*#include +<([\w\d./]+)>/gm;function mf(t){return t.replace(Sw,Ew)}const Mw=new Map;function Ew(t,e){let n=Ie[e];if(n===void 0){const i=Mw.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mf(n)}const Tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(t){return t.replace(Tw,ww)}function ww(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Aw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===w_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Fx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Cw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case bs:case Ls:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function Pw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case A_:e="ENVMAP_BLENDING_MULTIPLY";break;case ly:e="ENVMAP_BLENDING_MIX";break;case uy:e="ENVMAP_BLENDING_ADD";break}return e}function bw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Lw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Aw(n),u=Cw(n),f=Rw(n),h=Pw(n),d=bw(n),p=vw(n),v=xw(s),x=r.createProgram();let m,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ao).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ao).join(`
`),c.length>0&&(c+=`
`)):(m=[qp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),c=[qp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vi?"#define TONE_MAPPING":"",n.toneMapping!==Vi?Ie.tonemapping_pars_fragment:"",n.toneMapping!==Vi?_w("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,gw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ao).join(`
`)),o=mf(o),o=jp(o,n),o=Yp(o,n),a=mf(a),a=jp(a,n),a=Yp(a,n),o=$p(o),a=$p(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=g+m+o,M=g+c+a,R=Wp(r,r.VERTEX_SHADER,_),C=Wp(r,r.FRAGMENT_SHADER,M);r.attachShader(x,R),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(L){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(x).trim(),O=r.getShaderInfoLog(R).trim(),$=r.getShaderInfoLog(C).trim();let K=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,R,C);else{const Q=Xp(r,R,"vertex"),N=Xp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+Q+`
`+N)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(O===""||$==="")&&(Y=!1);Y&&(L.diagnostics={runnable:K,programLog:H,vertexShader:{log:O,prefix:m},fragmentShader:{log:$,prefix:c}})}r.deleteShader(R),r.deleteShader(C),b=new Ja(r,x),w=yw(r,x)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,dw)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=C,this}let Dw=0;class Nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Uw(e),n.set(e,i)),i}}class Uw{constructor(e){this.id=Dw++,this.code=e,this.usedTimes=0}}function Iw(t,e,n,i,r,s,o){const a=new pd,l=new Nw,u=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return u.add(w),w===0?"uv":`uv${w}`}function m(w,S,L,H,O){const $=H.fog,K=O.geometry,Y=w.isMeshStandardMaterial?H.environment:null,Q=(w.isMeshStandardMaterial?n:e).get(w.envMap||Y),N=Q&&Q.mapping===Kl?Q.image.height:null,I=v[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Z=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,re=Z!==void 0?Z.length:0;let xe=0;K.morphAttributes.position!==void 0&&(xe=1),K.morphAttributes.normal!==void 0&&(xe=2),K.morphAttributes.color!==void 0&&(xe=3);let Ve,q,se,he;if(I){const qe=Gn[I];Ve=qe.vertexShader,q=qe.fragmentShader}else Ve=w.vertexShader,q=w.fragmentShader,l.update(w),se=l.getVertexShaderID(w),he=l.getFragmentShaderID(w);const le=t.getRenderTarget(),Oe=O.isInstancedMesh===!0,be=O.isBatchedMesh===!0,Ge=!!w.map,D=!!w.matcap,We=!!Q,Be=!!w.aoMap,tt=!!w.lightMap,Ee=!!w.bumpMap,je=!!w.normalMap,ke=!!w.displacementMap,Le=!!w.emissiveMap,at=!!w.metalnessMap,P=!!w.roughnessMap,E=w.anisotropy>0,W=w.clearcoat>0,J=w.dispersion>0,te=w.iridescence>0,ne=w.sheen>0,ye=w.transmission>0,ce=E&&!!w.anisotropyMap,ue=W&&!!w.clearcoatMap,De=W&&!!w.clearcoatNormalMap,oe=W&&!!w.clearcoatRoughnessMap,_e=te&&!!w.iridescenceMap,ze=te&&!!w.iridescenceThicknessMap,we=ne&&!!w.sheenColorMap,de=ne&&!!w.sheenRoughnessMap,Ne=!!w.specularMap,Ue=!!w.specularColorMap,dt=!!w.specularIntensityMap,y=ye&&!!w.transmissionMap,X=ye&&!!w.thicknessMap,B=!!w.gradientMap,j=!!w.alphaMap,ee=w.alphaTest>0,Se=!!w.alphaHash,Pe=!!w.extensions;let ht=Vi;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ht=t.toneMapping);const vt={shaderID:I,shaderType:w.type,shaderName:w.name,vertexShader:Ve,fragmentShader:q,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:he,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:be,batchingColor:be&&O._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&O.instanceColor!==null,instancingMorph:Oe&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Zi,alphaToCoverage:!!w.alphaToCoverage,map:Ge,matcap:D,envMap:We,envMapMode:We&&Q.mapping,envMapCubeUVHeight:N,aoMap:Be,lightMap:tt,bumpMap:Ee,normalMap:je,displacementMap:d&&ke,emissiveMap:Le,normalMapObjectSpace:je&&w.normalMapType===by,normalMapTangentSpace:je&&w.normalMapType===U_,metalnessMap:at,roughnessMap:P,anisotropy:E,anisotropyMap:ce,clearcoat:W,clearcoatMap:ue,clearcoatNormalMap:De,clearcoatRoughnessMap:oe,dispersion:J,iridescence:te,iridescenceMap:_e,iridescenceThicknessMap:ze,sheen:ne,sheenColorMap:we,sheenRoughnessMap:de,specularMap:Ne,specularColorMap:Ue,specularIntensityMap:dt,transmission:ye,transmissionMap:y,thicknessMap:X,gradientMap:B,opaque:w.transparent===!1&&w.blending===xs&&w.alphaToCoverage===!1,alphaMap:j,alphaTest:ee,alphaHash:Se,combine:w.combine,mapUv:Ge&&x(w.map.channel),aoMapUv:Be&&x(w.aoMap.channel),lightMapUv:tt&&x(w.lightMap.channel),bumpMapUv:Ee&&x(w.bumpMap.channel),normalMapUv:je&&x(w.normalMap.channel),displacementMapUv:ke&&x(w.displacementMap.channel),emissiveMapUv:Le&&x(w.emissiveMap.channel),metalnessMapUv:at&&x(w.metalnessMap.channel),roughnessMapUv:P&&x(w.roughnessMap.channel),anisotropyMapUv:ce&&x(w.anisotropyMap.channel),clearcoatMapUv:ue&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:De&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:we&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:de&&x(w.sheenRoughnessMap.channel),specularMapUv:Ne&&x(w.specularMap.channel),specularColorMapUv:Ue&&x(w.specularColorMap.channel),specularIntensityMapUv:dt&&x(w.specularIntensityMap.channel),transmissionMapUv:y&&x(w.transmissionMap.channel),thicknessMapUv:X&&x(w.thicknessMap.channel),alphaMapUv:j&&x(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(je||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!K.attributes.uv&&(Ge||j),fog:!!$,useFog:w.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:ht,decodeVideoTexture:Ge&&w.map.isVideoTexture===!0&&Qe.getTransfer(w.map.colorSpace)===rt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===si,flipSided:w.side===nn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Pe&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return vt.vertexUv1s=u.has(1),vt.vertexUv2s=u.has(2),vt.vertexUv3s=u.has(3),u.clear(),vt}function c(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(g(S,w),_(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function g(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),w.push(a.mask)}function M(w){const S=v[w.type];let L;if(S){const H=Gn[S];L=xS.clone(H.uniforms)}else L=w.uniforms;return L}function R(w,S){let L;for(let H=0,O=f.length;H<O;H++){const $=f[H];if($.cacheKey===S){L=$,++L.usedTimes;break}}return L===void 0&&(L=new Lw(t,S,w,s),f.push(L)),L}function C(w){if(--w.usedTimes===0){const S=f.indexOf(w);f[S]=f[f.length-1],f.pop(),w.destroy()}}function A(w){l.remove(w)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:M,acquireProgram:R,releaseProgram:C,releaseShaderCache:A,programs:f,dispose:b}}function Fw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Ow(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Kp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Zp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,v,x,m){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=p,c.groupOrder=v,c.renderOrder=h.renderOrder,c.z=x,c.group=m),e++,c}function a(h,d,p,v,x,m){const c=o(h,d,p,v,x,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(h,d,p,v,x,m){const c=o(h,d,p,v,x,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||Ow),i.length>1&&i.sort(d||Kp),r.length>1&&r.sort(d||Kp)}function f(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function kw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Zp,t.set(i,[o])):r>=s.length?(o=new Zp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function zw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Xe};break;case"SpotLight":n={position:new U,direction:new U,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function Bw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Hw=0;function Vw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Gw(t){const e=new zw,n=Bw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,s=new ct,o=new ct;function a(u){let f=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,v=0,x=0,m=0,c=0,g=0,_=0,M=0,R=0,C=0,A=0;u.sort(Vw);for(let w=0,S=u.length;w<S;w++){const L=u[w],H=L.color,O=L.intensity,$=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=H.r*O,h+=H.g*O,d+=H.b*O;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],O);A++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,N=n.get(L);N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=L.shadow.matrix,g++}i.directional[p]=Y,p++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(H).multiplyScalar(O),Y.distance=$,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[x]=Y;const Q=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,Q.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[x]=Q.matrix,L.castShadow){const N=n.get(L);N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=K,M++}x++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(H).multiplyScalar(O),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=Y,m++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const Q=L.shadow,N=n.get(L);N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,N.shadowCameraNear=Q.camera.near,N.shadowCameraFar=Q.camera.far,i.pointShadow[v]=N,i.pointShadowMap[v]=K,i.pointShadowMatrix[v]=L.shadow.matrix,_++}i.point[v]=Y,v++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(O),Y.groundColor.copy(L.groundColor).multiplyScalar(O),i.hemi[c]=Y,c++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==p||b.pointLength!==v||b.spotLength!==x||b.rectAreaLength!==m||b.hemiLength!==c||b.numDirectionalShadows!==g||b.numPointShadows!==_||b.numSpotShadows!==M||b.numSpotMaps!==R||b.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=c,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,b.directionalLength=p,b.pointLength=v,b.spotLength=x,b.rectAreaLength=m,b.hemiLength=c,b.numDirectionalShadows=g,b.numPointShadows=_,b.numSpotShadows=M,b.numSpotMaps=R,b.numLightProbes=A,i.version=Hw++)}function l(u,f){let h=0,d=0,p=0,v=0,x=0;const m=f.matrixWorldInverse;for(let c=0,g=u.length;c<g;c++){const _=u[c];if(_.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(_.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Qp(t){const e=new Gw(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ww(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Qp(t),e.set(r,[a])):s>=o.length?(a=new Qp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Xw extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jw extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$w=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qw(t,e,n){let i=new md;const r=new Re,s=new Re,o=new Lt,a=new Xw({depthPacking:Py}),l=new jw,u={},f=n.maxTextureSize,h={[Xi]:nn,[nn]:Xi,[si]:si},d=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Yw,fragmentShader:$w}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new sn;v.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new hn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w_;let c=this.type;this.render=function(C,A,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Hi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const O=c!==ni&&this.type===ni,$=c===ni&&this.type!==ni;for(let K=0,Y=C.length;K<Y;K++){const Q=C[K],N=Q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const I=N.getFrameExtents();if(r.multiply(I),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/I.x),r.x=s.x*I.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/I.y),r.y=s.y*I.y,N.mapSize.y=s.y)),N.map===null||O===!0||$===!0){const re=this.type!==ni?{minFilter:Tn,magFilter:Tn}:{};N.map!==null&&N.map.dispose(),N.map=new Ar(r.x,r.y,re),N.map.texture.name=Q.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Z=N.getViewportCount();for(let re=0;re<Z;re++){const xe=N.getViewport(re);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),H.viewport(o),N.updateMatrices(Q,re),i=N.getFrustum(),M(A,b,N.camera,Q,this.type)}N.isPointLightShadow!==!0&&this.type===ni&&g(N,b),N.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,L)};function g(C,A){const b=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ar(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,b,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,b,p,x,null)}function _(C,A,b,w){let S=null;const L=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)S=L;else if(S=b.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=S.uuid,O=A.uuid;let $=u[H];$===void 0&&($={},u[H]=$);let K=$[O];K===void 0&&(K=S.clone(),$[O]=K,A.addEventListener("dispose",R)),S=K}if(S.visible=A.visible,S.wireframe=A.wireframe,w===ni?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=b}return S}function M(C,A,b,w,S){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ni)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const O=e.update(C),$=C.material;if(Array.isArray($)){const K=O.groups;for(let Y=0,Q=K.length;Y<Q;Y++){const N=K[Y],I=$[N.materialIndex];if(I&&I.visible){const Z=_(C,I,w,S);C.onBeforeShadow(t,C,A,b,O,Z,N),t.renderBufferDirect(b,null,O,Z,C,N),C.onAfterShadow(t,C,A,b,O,Z,N)}}}else if($.visible){const K=_(C,$,w,S);C.onBeforeShadow(t,C,A,b,O,K,null),t.renderBufferDirect(b,null,O,K,C,null),C.onAfterShadow(t,C,A,b,O,K,null)}}const H=C.children;for(let O=0,$=H.length;O<$;O++)M(H[O],A,b,w,S)}function R(C){C.target.removeEventListener("dispose",R);for(const b in u){const w=u[b],S=C.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function Kw(t){function e(){let y=!1;const X=new Lt;let B=null;const j=new Lt(0,0,0,0);return{setMask:function(ee){B!==ee&&!y&&(t.colorMask(ee,ee,ee,ee),B=ee)},setLocked:function(ee){y=ee},setClear:function(ee,Se,Pe,ht,vt){vt===!0&&(ee*=ht,Se*=ht,Pe*=ht),X.set(ee,Se,Pe,ht),j.equals(X)===!1&&(t.clearColor(ee,Se,Pe,ht),j.copy(X))},reset:function(){y=!1,B=null,j.set(-1,0,0,0)}}}function n(){let y=!1,X=null,B=null,j=null;return{setTest:function(ee){ee?he(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(ee){X!==ee&&!y&&(t.depthMask(ee),X=ee)},setFunc:function(ee){if(B!==ee){switch(ee){case ty:t.depthFunc(t.NEVER);break;case ny:t.depthFunc(t.ALWAYS);break;case iy:t.depthFunc(t.LESS);break;case Tl:t.depthFunc(t.LEQUAL);break;case ry:t.depthFunc(t.EQUAL);break;case sy:t.depthFunc(t.GEQUAL);break;case oy:t.depthFunc(t.GREATER);break;case ay:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}B=ee}},setLocked:function(ee){y=ee},setClear:function(ee){j!==ee&&(t.clearDepth(ee),j=ee)},reset:function(){y=!1,X=null,B=null,j=null}}}function i(){let y=!1,X=null,B=null,j=null,ee=null,Se=null,Pe=null,ht=null,vt=null;return{setTest:function(qe){y||(qe?he(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(qe){X!==qe&&!y&&(t.stencilMask(qe),X=qe)},setFunc:function(qe,xt,yt){(B!==qe||j!==xt||ee!==yt)&&(t.stencilFunc(qe,xt,yt),B=qe,j=xt,ee=yt)},setOp:function(qe,xt,yt){(Se!==qe||Pe!==xt||ht!==yt)&&(t.stencilOp(qe,xt,yt),Se=qe,Pe=xt,ht=yt)},setLocked:function(qe){y=qe},setClear:function(qe){vt!==qe&&(t.clearStencil(qe),vt=qe)},reset:function(){y=!1,X=null,B=null,j=null,ee=null,Se=null,Pe=null,ht=null,vt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],p=null,v=!1,x=null,m=null,c=null,g=null,_=null,M=null,R=null,C=new Xe(0,0,0),A=0,b=!1,w=null,S=null,L=null,H=null,O=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Y=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=Y>=1):Q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=Y>=2);let N=null,I={};const Z=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),xe=new Lt().fromArray(Z),Ve=new Lt().fromArray(re);function q(y,X,B,j){const ee=new Uint8Array(4),Se=t.createTexture();t.bindTexture(y,Se),t.texParameteri(y,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(y,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<B;Pe++)y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY?t.texImage3D(X,0,t.RGBA,1,1,j,0,t.RGBA,t.UNSIGNED_BYTE,ee):t.texImage2D(X+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ee);return Se}const se={};se[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(t.DEPTH_TEST),s.setFunc(Tl),Ee(!1),je(Dh),he(t.CULL_FACE),Be(Hi);function he(y){u[y]!==!0&&(t.enable(y),u[y]=!0)}function le(y){u[y]!==!1&&(t.disable(y),u[y]=!1)}function Oe(y,X){return f[y]!==X?(t.bindFramebuffer(y,X),f[y]=X,y===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=X),y===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=X),!0):!1}function be(y,X){let B=d,j=!1;if(y){B=h.get(X),B===void 0&&(B=[],h.set(X,B));const ee=y.textures;if(B.length!==ee.length||B[0]!==t.COLOR_ATTACHMENT0){for(let Se=0,Pe=ee.length;Se<Pe;Se++)B[Se]=t.COLOR_ATTACHMENT0+Se;B.length=ee.length,j=!0}}else B[0]!==t.BACK&&(B[0]=t.BACK,j=!0);j&&t.drawBuffers(B)}function Ge(y){return p!==y?(t.useProgram(y),p=y,!0):!1}const D={[fr]:t.FUNC_ADD,[kx]:t.FUNC_SUBTRACT,[zx]:t.FUNC_REVERSE_SUBTRACT};D[Bx]=t.MIN,D[Hx]=t.MAX;const We={[Vx]:t.ZERO,[Gx]:t.ONE,[Wx]:t.SRC_COLOR,[uf]:t.SRC_ALPHA,[Kx]:t.SRC_ALPHA_SATURATE,[$x]:t.DST_COLOR,[jx]:t.DST_ALPHA,[Xx]:t.ONE_MINUS_SRC_COLOR,[cf]:t.ONE_MINUS_SRC_ALPHA,[qx]:t.ONE_MINUS_DST_COLOR,[Yx]:t.ONE_MINUS_DST_ALPHA,[Zx]:t.CONSTANT_COLOR,[Qx]:t.ONE_MINUS_CONSTANT_COLOR,[Jx]:t.CONSTANT_ALPHA,[ey]:t.ONE_MINUS_CONSTANT_ALPHA};function Be(y,X,B,j,ee,Se,Pe,ht,vt,qe){if(y===Hi){v===!0&&(le(t.BLEND),v=!1);return}if(v===!1&&(he(t.BLEND),v=!0),y!==Ox){if(y!==x||qe!==b){if((m!==fr||_!==fr)&&(t.blendEquation(t.FUNC_ADD),m=fr,_=fr),qe)switch(y){case xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nh:t.blendFunc(t.ONE,t.ONE);break;case Uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ih:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ih:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}c=null,g=null,M=null,R=null,C.set(0,0,0),A=0,x=y,b=qe}return}ee=ee||X,Se=Se||B,Pe=Pe||j,(X!==m||ee!==_)&&(t.blendEquationSeparate(D[X],D[ee]),m=X,_=ee),(B!==c||j!==g||Se!==M||Pe!==R)&&(t.blendFuncSeparate(We[B],We[j],We[Se],We[Pe]),c=B,g=j,M=Se,R=Pe),(ht.equals(C)===!1||vt!==A)&&(t.blendColor(ht.r,ht.g,ht.b,vt),C.copy(ht),A=vt),x=y,b=!1}function tt(y,X){y.side===si?le(t.CULL_FACE):he(t.CULL_FACE);let B=y.side===nn;X&&(B=!B),Ee(B),y.blending===xs&&y.transparent===!1?Be(Hi):Be(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),s.setFunc(y.depthFunc),s.setTest(y.depthTest),s.setMask(y.depthWrite),r.setMask(y.colorWrite);const j=y.stencilWrite;o.setTest(j),j&&(o.setMask(y.stencilWriteMask),o.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),o.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),Le(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(y){w!==y&&(y?t.frontFace(t.CW):t.frontFace(t.CCW),w=y)}function je(y){y!==Ux?(he(t.CULL_FACE),y!==S&&(y===Dh?t.cullFace(t.BACK):y===Ix?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),S=y}function ke(y){y!==L&&(K&&t.lineWidth(y),L=y)}function Le(y,X,B){y?(he(t.POLYGON_OFFSET_FILL),(H!==X||O!==B)&&(t.polygonOffset(X,B),H=X,O=B)):le(t.POLYGON_OFFSET_FILL)}function at(y){y?he(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function P(y){y===void 0&&(y=t.TEXTURE0+$-1),N!==y&&(t.activeTexture(y),N=y)}function E(y,X,B){B===void 0&&(N===null?B=t.TEXTURE0+$-1:B=N);let j=I[B];j===void 0&&(j={type:void 0,texture:void 0},I[B]=j),(j.type!==y||j.texture!==X)&&(N!==B&&(t.activeTexture(B),N=B),t.bindTexture(y,X||se[y]),j.type=y,j.texture=X)}function W(){const y=I[N];y!==void 0&&y.type!==void 0&&(t.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ne(){try{t.texSubImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ye(){try{t.texSubImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function De(){try{t.texStorage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function we(y){xe.equals(y)===!1&&(t.scissor(y.x,y.y,y.z,y.w),xe.copy(y))}function de(y){Ve.equals(y)===!1&&(t.viewport(y.x,y.y,y.z,y.w),Ve.copy(y))}function Ne(y,X){let B=l.get(X);B===void 0&&(B=new WeakMap,l.set(X,B));let j=B.get(y);j===void 0&&(j=t.getUniformBlockIndex(X,y.name),B.set(y,j))}function Ue(y,X){const j=l.get(X).get(y);a.get(X)!==j&&(t.uniformBlockBinding(X,j,y.__bindingPointIndex),a.set(X,j))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},N=null,I={},f={},h=new WeakMap,d=[],p=null,v=!1,x=null,m=null,c=null,g=null,_=null,M=null,R=null,C=new Xe(0,0,0),A=0,b=!1,w=null,S=null,L=null,H=null,O=null,xe.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:le,bindFramebuffer:Oe,drawBuffers:be,useProgram:Ge,setBlending:Be,setMaterial:tt,setFlipSided:Ee,setCullFace:je,setLineWidth:ke,setPolygonOffset:Le,setScissorTest:at,activeTexture:P,bindTexture:E,unbindTexture:W,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:_e,texImage3D:ze,updateUBOMapping:Ne,uniformBlockBinding:Ue,texStorage2D:De,texStorage3D:oe,texSubImage2D:ne,texSubImage3D:ye,compressedTexSubImage2D:ce,compressedTexSubImage3D:ue,scissor:we,viewport:de,reset:dt}}function Zw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Re,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,E){return p?new OffscreenCanvas(P,E):bl("canvas")}function x(P,E,W){let J=1;const te=at(P);if((te.width>W||te.height>W)&&(J=W/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ne=Math.floor(J*te.width),ye=Math.floor(J*te.height);h===void 0&&(h=v(ne,ye));const ce=E?v(ne,ye):h;return ce.width=ne,ce.height=ye,ce.getContext("2d").drawImage(P,0,0,ne,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ne+"x"+ye+")."),ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Tn&&P.minFilter!==In}function c(P){t.generateMipmap(P)}function g(P,E,W,J,te=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ne=E;if(E===t.RED&&(W===t.FLOAT&&(ne=t.R32F),W===t.HALF_FLOAT&&(ne=t.R16F),W===t.UNSIGNED_BYTE&&(ne=t.R8)),E===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(ne=t.R8UI),W===t.UNSIGNED_SHORT&&(ne=t.R16UI),W===t.UNSIGNED_INT&&(ne=t.R32UI),W===t.BYTE&&(ne=t.R8I),W===t.SHORT&&(ne=t.R16I),W===t.INT&&(ne=t.R32I)),E===t.RG&&(W===t.FLOAT&&(ne=t.RG32F),W===t.HALF_FLOAT&&(ne=t.RG16F),W===t.UNSIGNED_BYTE&&(ne=t.RG8)),E===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(ne=t.RG8UI),W===t.UNSIGNED_SHORT&&(ne=t.RG16UI),W===t.UNSIGNED_INT&&(ne=t.RG32UI),W===t.BYTE&&(ne=t.RG8I),W===t.SHORT&&(ne=t.RG16I),W===t.INT&&(ne=t.RG32I)),E===t.RGB&&W===t.UNSIGNED_INT_5_9_9_9_REV&&(ne=t.RGB9_E5),E===t.RGBA){const ye=te?Al:Qe.getTransfer(J);W===t.FLOAT&&(ne=t.RGBA32F),W===t.HALF_FLOAT&&(ne=t.RGBA16F),W===t.UNSIGNED_BYTE&&(ne=ye===rt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function _(P,E){let W;return P?E===null||E===Ds||E===Ns?W=t.DEPTH24_STENCIL8:E===Di?W=t.DEPTH32F_STENCIL8:E===wl&&(W=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ds||E===Ns?W=t.DEPTH_COMPONENT24:E===Di?W=t.DEPTH_COMPONENT32F:E===wl&&(W=t.DEPTH_COMPONENT16),W}function M(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Tn&&P.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function R(P){const E=P.target;E.removeEventListener("dispose",R),A(E),E.isVideoTexture&&f.delete(E)}function C(P){const E=P.target;E.removeEventListener("dispose",C),w(E)}function A(P){const E=i.get(P);if(E.__webglInit===void 0)return;const W=P.source,J=d.get(W);if(J){const te=J[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(P),Object.keys(J).length===0&&d.delete(W)}i.remove(P)}function b(P){const E=i.get(P);t.deleteTexture(E.__webglTexture);const W=P.source,J=d.get(W);delete J[E.__cacheKey],o.memory.textures--}function w(P){const E=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let te=0;te<E.__webglFramebuffer[J].length;te++)t.deleteFramebuffer(E.__webglFramebuffer[J][te]);else t.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)t.deleteFramebuffer(E.__webglFramebuffer[J]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=P.textures;for(let J=0,te=W.length;J<te;J++){const ne=i.get(W[J]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(W[J])}i.remove(P)}let S=0;function L(){S=0}function H(){const P=S;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),S+=1,P}function O(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function $(P,E){const W=i.get(P);if(P.isVideoTexture&&ke(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(W,P,E);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+E)}function K(P,E){const W=i.get(P);if(P.version>0&&W.__version!==P.version){Ve(W,P,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+E)}function Y(P,E){const W=i.get(P);if(P.version>0&&W.__version!==P.version){Ve(W,P,E);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+E)}function Q(P,E){const W=i.get(P);if(P.version>0&&W.__version!==P.version){q(W,P,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+E)}const N={[hf]:t.REPEAT,[gr]:t.CLAMP_TO_EDGE,[pf]:t.MIRRORED_REPEAT},I={[Tn]:t.NEAREST,[_y]:t.NEAREST_MIPMAP_NEAREST,[ua]:t.NEAREST_MIPMAP_LINEAR,[In]:t.LINEAR,[Nu]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},Z={[Ly]:t.NEVER,[Oy]:t.ALWAYS,[Dy]:t.LESS,[I_]:t.LEQUAL,[Ny]:t.EQUAL,[Fy]:t.GEQUAL,[Uy]:t.GREATER,[Iy]:t.NOTEQUAL};function re(P,E){if(E.type===Di&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===Nu||E.magFilter===ua||E.magFilter===_r||E.minFilter===In||E.minFilter===Nu||E.minFilter===ua||E.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,N[E.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,N[E.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,N[E.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,I[E.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,I[E.minFilter]),E.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==ua&&E.minFilter!==_r||E.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function xe(P,E){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",R));const J=E.source;let te=d.get(J);te===void 0&&(te={},d.set(J,te));const ne=O(E);if(ne!==P.__cacheKey){te[ne]===void 0&&(te[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),te[ne].usedTimes++;const ye=te[P.__cacheKey];ye!==void 0&&(te[P.__cacheKey].usedTimes--,ye.usedTimes===0&&b(E)),P.__cacheKey=ne,P.__webglTexture=te[ne].texture}return W}function Ve(P,E,W){let J=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=t.TEXTURE_3D);const te=xe(P,E),ne=E.source;n.bindTexture(J,P.__webglTexture,t.TEXTURE0+W);const ye=i.get(ne);if(ne.version!==ye.__version||te===!0){n.activeTexture(t.TEXTURE0+W);const ce=Qe.getPrimaries(Qe.workingColorSpace),ue=E.colorSpace===Pi?null:Qe.getPrimaries(E.colorSpace),De=E.colorSpace===Pi||ce===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let oe=x(E.image,!1,r.maxTextureSize);oe=Le(E,oe);const _e=s.convert(E.format,E.colorSpace),ze=s.convert(E.type);let we=g(E.internalFormat,_e,ze,E.colorSpace,E.isVideoTexture);re(J,E);let de;const Ne=E.mipmaps,Ue=E.isVideoTexture!==!0,dt=ye.__version===void 0||te===!0,y=ne.dataReady,X=M(E,oe);if(E.isDepthTexture)we=_(E.format===Us,E.type),dt&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,we,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,we,oe.width,oe.height,0,_e,ze,null));else if(E.isDataTexture)if(Ne.length>0){Ue&&dt&&n.texStorage2D(t.TEXTURE_2D,X,we,Ne[0].width,Ne[0].height);for(let B=0,j=Ne.length;B<j;B++)de=Ne[B],Ue?y&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,de.width,de.height,_e,ze,de.data):n.texImage2D(t.TEXTURE_2D,B,we,de.width,de.height,0,_e,ze,de.data);E.generateMipmaps=!1}else Ue?(dt&&n.texStorage2D(t.TEXTURE_2D,X,we,oe.width,oe.height),y&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,_e,ze,oe.data)):n.texImage2D(t.TEXTURE_2D,0,we,oe.width,oe.height,0,_e,ze,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ue&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,X,we,Ne[0].width,Ne[0].height,oe.depth);for(let B=0,j=Ne.length;B<j;B++)if(de=Ne[B],E.format!==Xn)if(_e!==null)if(Ue){if(y)if(E.layerUpdates.size>0){for(const ee of E.layerUpdates){const Se=de.width*de.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,ee,de.width,de.height,1,_e,de.data.slice(Se*ee,Se*(ee+1)),0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,de.width,de.height,oe.depth,_e,de.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,B,we,de.width,de.height,oe.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?y&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,de.width,de.height,oe.depth,_e,ze,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,B,we,de.width,de.height,oe.depth,0,_e,ze,de.data)}else{Ue&&dt&&n.texStorage2D(t.TEXTURE_2D,X,we,Ne[0].width,Ne[0].height);for(let B=0,j=Ne.length;B<j;B++)de=Ne[B],E.format!==Xn?_e!==null?Ue?y&&n.compressedTexSubImage2D(t.TEXTURE_2D,B,0,0,de.width,de.height,_e,de.data):n.compressedTexImage2D(t.TEXTURE_2D,B,we,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?y&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,de.width,de.height,_e,ze,de.data):n.texImage2D(t.TEXTURE_2D,B,we,de.width,de.height,0,_e,ze,de.data)}else if(E.isDataArrayTexture)if(Ue){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,X,we,oe.width,oe.height,oe.depth),y)if(E.layerUpdates.size>0){let B;switch(ze){case t.UNSIGNED_BYTE:switch(_e){case t.ALPHA:B=1;break;case t.LUMINANCE:B=1;break;case t.LUMINANCE_ALPHA:B=2;break;case t.RGB:B=3;break;case t.RGBA:B=4;break;default:throw new Error(`Unknown texel size for format ${_e}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:B=1;break;default:throw new Error(`Unknown texel size for type ${ze}.`)}const j=oe.width*oe.height*B;for(const ee of E.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,_e,ze,oe.data.slice(j*ee,j*(ee+1)));E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,_e,ze,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,oe.width,oe.height,oe.depth,0,_e,ze,oe.data);else if(E.isData3DTexture)Ue?(dt&&n.texStorage3D(t.TEXTURE_3D,X,we,oe.width,oe.height,oe.depth),y&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,_e,ze,oe.data)):n.texImage3D(t.TEXTURE_3D,0,we,oe.width,oe.height,oe.depth,0,_e,ze,oe.data);else if(E.isFramebufferTexture){if(dt)if(Ue)n.texStorage2D(t.TEXTURE_2D,X,we,oe.width,oe.height);else{let B=oe.width,j=oe.height;for(let ee=0;ee<X;ee++)n.texImage2D(t.TEXTURE_2D,ee,we,B,j,0,_e,ze,null),B>>=1,j>>=1}}else if(Ne.length>0){if(Ue&&dt){const B=at(Ne[0]);n.texStorage2D(t.TEXTURE_2D,X,we,B.width,B.height)}for(let B=0,j=Ne.length;B<j;B++)de=Ne[B],Ue?y&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,_e,ze,de):n.texImage2D(t.TEXTURE_2D,B,we,_e,ze,de);E.generateMipmaps=!1}else if(Ue){if(dt){const B=at(oe);n.texStorage2D(t.TEXTURE_2D,X,we,B.width,B.height)}y&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,ze,oe)}else n.texImage2D(t.TEXTURE_2D,0,we,_e,ze,oe);m(E)&&c(J),ye.__version=ne.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function q(P,E,W){if(E.image.length!==6)return;const J=xe(P,E),te=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+W);const ne=i.get(te);if(te.version!==ne.__version||J===!0){n.activeTexture(t.TEXTURE0+W);const ye=Qe.getPrimaries(Qe.workingColorSpace),ce=E.colorSpace===Pi?null:Qe.getPrimaries(E.colorSpace),ue=E.colorSpace===Pi||ye===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const De=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,_e=[];for(let j=0;j<6;j++)!De&&!oe?_e[j]=x(E.image[j],!0,r.maxCubemapSize):_e[j]=oe?E.image[j].image:E.image[j],_e[j]=Le(E,_e[j]);const ze=_e[0],we=s.convert(E.format,E.colorSpace),de=s.convert(E.type),Ne=g(E.internalFormat,we,de,E.colorSpace),Ue=E.isVideoTexture!==!0,dt=ne.__version===void 0||J===!0,y=te.dataReady;let X=M(E,ze);re(t.TEXTURE_CUBE_MAP,E);let B;if(De){Ue&&dt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,X,Ne,ze.width,ze.height);for(let j=0;j<6;j++){B=_e[j].mipmaps;for(let ee=0;ee<B.length;ee++){const Se=B[ee];E.format!==Xn?we!==null?Ue?y&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee,0,0,Se.width,Se.height,we,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee,Ne,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee,0,0,Se.width,Se.height,we,de,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee,Ne,Se.width,Se.height,0,we,de,Se.data)}}}else{if(B=E.mipmaps,Ue&&dt){B.length>0&&X++;const j=at(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,X,Ne,j.width,j.height)}for(let j=0;j<6;j++)if(oe){Ue?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_e[j].width,_e[j].height,we,de,_e[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ne,_e[j].width,_e[j].height,0,we,de,_e[j].data);for(let ee=0;ee<B.length;ee++){const Pe=B[ee].image[j].image;Ue?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee+1,0,0,Pe.width,Pe.height,we,de,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee+1,Ne,Pe.width,Pe.height,0,we,de,Pe.data)}}else{Ue?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we,de,_e[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ne,we,de,_e[j]);for(let ee=0;ee<B.length;ee++){const Se=B[ee];Ue?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee+1,0,0,we,de,Se.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee+1,Ne,we,de,Se.image[j])}}}m(E)&&c(t.TEXTURE_CUBE_MAP),ne.__version=te.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function se(P,E,W,J,te,ne){const ye=s.convert(W.format,W.colorSpace),ce=s.convert(W.type),ue=g(W.internalFormat,ye,ce,W.colorSpace);if(!i.get(E).__hasExternalTextures){const oe=Math.max(1,E.width>>ne),_e=Math.max(1,E.height>>ne);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ne,ue,oe,_e,E.depth,0,ye,ce,null):n.texImage2D(te,ne,ue,oe,_e,0,ye,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),je(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,te,i.get(W).__webglTexture,0,Ee(E)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,te,i.get(W).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(P,E,W){if(t.bindRenderbuffer(t.RENDERBUFFER,P),E.depthBuffer){const J=E.depthTexture,te=J&&J.isDepthTexture?J.type:null,ne=_(E.stencilBuffer,te),ye=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Ee(E);je(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,ne,E.width,E.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,ne,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ne,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,P)}else{const J=E.textures;for(let te=0;te<J.length;te++){const ne=J[te],ye=s.convert(ne.format,ne.colorSpace),ce=s.convert(ne.type),ue=g(ne.internalFormat,ye,ce,ne.colorSpace),De=Ee(E);W&&je(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,ue,E.width,E.height):je(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,ue,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ue,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const J=i.get(E.depthTexture).__webglTexture,te=Ee(E);if(E.depthTexture.format===ys)je(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(E.depthTexture.format===Us)je(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Oe(P){const E=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");le(E.__webglFramebuffer,P)}else if(W){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]=t.createRenderbuffer(),he(E.__webglDepthbuffer[J],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),he(E.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(P,E,W){const J=i.get(P);E!==void 0&&se(J.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Oe(P)}function Ge(P){const E=P.texture,W=i.get(P),J=i.get(E);P.addEventListener("dispose",C);const te=P.textures,ne=P.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=E.version,o.memory.textures++),ne){W.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[ce]=[];for(let ue=0;ue<E.mipmaps.length;ue++)W.__webglFramebuffer[ce][ue]=t.createFramebuffer()}else W.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)W.__webglFramebuffer[ce]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(ye)for(let ce=0,ue=te.length;ce<ue;ce++){const De=i.get(te[ce]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&je(P)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ce=0;ce<te.length;ce++){const ue=te[ce];W.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[ce]);const De=s.convert(ue.format,ue.colorSpace),oe=s.convert(ue.type),_e=g(ue.internalFormat,De,oe,ue.colorSpace,P.isXRRenderTarget===!0),ze=Ee(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,_e,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,W.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),he(W.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),re(t.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)se(W.__webglFramebuffer[ce][ue],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else se(W.__webglFramebuffer[ce],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(E)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let ce=0,ue=te.length;ce<ue;ce++){const De=te[ce],oe=i.get(De);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),re(t.TEXTURE_2D,De),se(W.__webglFramebuffer,P,De,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(De)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,J.__webglTexture),re(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)se(W.__webglFramebuffer[ue],P,E,t.COLOR_ATTACHMENT0,ce,ue);else se(W.__webglFramebuffer,P,E,t.COLOR_ATTACHMENT0,ce,0);m(E)&&c(ce),n.unbindTexture()}P.depthBuffer&&Oe(P)}function D(P){const E=P.textures;for(let W=0,J=E.length;W<J;W++){const te=E[W];if(m(te)){const ne=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(te).__webglTexture;n.bindTexture(ne,ye),c(ne),n.unbindTexture()}}}const We=[],Be=[];function tt(P){if(P.samples>0){if(je(P)===!1){const E=P.textures,W=P.width,J=P.height;let te=t.COLOR_BUFFER_BIT;const ne=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(P),ce=E.length>1;if(ce)for(let ue=0;ue<E.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ue=0;ue<E.length;ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[ue]);const De=i.get(E[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,W,J,0,0,W,J,te,t.NEAREST),l===!0&&(We.length=0,Be.length=0,We.push(t.COLOR_ATTACHMENT0+ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(We.push(ne),Be.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Be)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,We))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let ue=0;ue<E.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ye.__webglColorRenderbuffer[ue]);const De=i.get(E[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ee(P){return Math.min(r.maxSamples,P.samples)}function je(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ke(P){const E=o.render.frame;f.get(P)!==E&&(f.set(P,E),P.update())}function Le(P,E){const W=P.colorSpace,J=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Zi&&W!==Pi&&(Qe.getTransfer(W)===rt?(J!==Xn||te!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function at(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=L,this.setTexture2D=$,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=be,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=je}function Qw(t,e){function n(i,r=Pi){let s;const o=Qe.getTransfer(r);if(i===ji)return t.UNSIGNED_BYTE;if(i===P_)return t.UNSIGNED_SHORT_4_4_4_4;if(i===b_)return t.UNSIGNED_SHORT_5_5_5_1;if(i===yy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===vy)return t.BYTE;if(i===xy)return t.SHORT;if(i===wl)return t.UNSIGNED_SHORT;if(i===R_)return t.INT;if(i===Ds)return t.UNSIGNED_INT;if(i===Di)return t.FLOAT;if(i===Zl)return t.HALF_FLOAT;if(i===Sy)return t.ALPHA;if(i===My)return t.RGB;if(i===Xn)return t.RGBA;if(i===Ey)return t.LUMINANCE;if(i===Ty)return t.LUMINANCE_ALPHA;if(i===ys)return t.DEPTH_COMPONENT;if(i===Us)return t.DEPTH_STENCIL;if(i===wy)return t.RED;if(i===L_)return t.RED_INTEGER;if(i===Ay)return t.RG;if(i===D_)return t.RG_INTEGER;if(i===N_)return t.RGBA_INTEGER;if(i===Uu||i===Iu||i===Fu||i===Ou)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Uu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Iu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ou)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Uu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Iu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ou)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fh||i===Oh||i===kh||i===zh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bh||i===Hh||i===Vh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bh||i===Hh)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gh||i===Wh||i===Xh||i===jh||i===Yh||i===$h||i===qh||i===Kh||i===Zh||i===Qh||i===Jh||i===ep||i===tp||i===np)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$h)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ep)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===np)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ku||i===ip||i===rp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ku)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ip)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cy||i===sp||i===op||i===ap)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ku)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===op)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ap)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ns?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Jw extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vr extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e1={type:"move"};class uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),c=this._getHandJoint(u,x);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,v=.005;u.inputState.pinching&&d>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(e1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new vr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const t1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class i1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new rn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Yi({vertexShader:t1,fragmentShader:n1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hn(new nu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class r1 extends br{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,p=null,v=null;const x=new i1,m=n.getContextAttributes();let c=null,g=null;const _=[],M=[],R=new Re;let C=null;const A=new Mn;A.layers.enable(1),A.viewport=new Lt;const b=new Mn;b.layers.enable(2),b.viewport=new Lt;const w=[A,b],S=new Jw;S.layers.enable(1),S.layers.enable(2);let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let se=_[q];return se===void 0&&(se=new uc,_[q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(q){let se=_[q];return se===void 0&&(se=new uc,_[q]=se),se.getGripSpace()},this.getHand=function(q){let se=_[q];return se===void 0&&(se=new uc,_[q]=se),se.getHandSpace()};function O(q){const se=M.indexOf(q.inputSource);if(se===-1)return;const he=_[se];he!==void 0&&(he.update(q.inputSource,q.frame,u||o),he.dispatchEvent({type:q.type,data:q.inputSource}))}function $(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",K);for(let q=0;q<_.length;q++){const se=M[q];se!==null&&(M[q]=null,_[q].disconnect(se))}L=null,H=null,x.reset(),e.setRenderTarget(c),p=null,d=null,h=null,r=null,g=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",$),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Ar(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,he=null,le=null;m.depth&&(le=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=m.stencil?Us:ys,he=m.stencil?Ns:Ds);const Oe={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Ar(d.textureWidth,d.textureHeight,{format:Xn,type:ji,depthTexture:new $_(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(q){for(let se=0;se<q.removed.length;se++){const he=q.removed[se],le=M.indexOf(he);le>=0&&(M[le]=null,_[le].disconnect(he))}for(let se=0;se<q.added.length;se++){const he=q.added[se];let le=M.indexOf(he);if(le===-1){for(let be=0;be<_.length;be++)if(be>=M.length){M.push(he),le=be;break}else if(M[be]===null){M[be]=he,le=be;break}if(le===-1)break}const Oe=_[le];Oe&&Oe.connect(he)}}const Y=new U,Q=new U;function N(q,se,he){Y.setFromMatrixPosition(se.matrixWorld),Q.setFromMatrixPosition(he.matrixWorld);const le=Y.distanceTo(Q),Oe=se.projectionMatrix.elements,be=he.projectionMatrix.elements,Ge=Oe[14]/(Oe[10]-1),D=Oe[14]/(Oe[10]+1),We=(Oe[9]+1)/Oe[5],Be=(Oe[9]-1)/Oe[5],tt=(Oe[8]-1)/Oe[0],Ee=(be[8]+1)/be[0],je=Ge*tt,ke=Ge*Ee,Le=le/(-tt+Ee),at=Le*-tt;se.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(at),q.translateZ(Le),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const P=Ge+Le,E=D+Le,W=je-at,J=ke+(le-at),te=We*D/E*P,ne=Be*D/E*P;q.projectionMatrix.makePerspective(W,J,te,ne,P,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function I(q,se){se===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(se.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;x.texture!==null&&(q.near=x.depthNear,q.far=x.depthFar),S.near=b.near=A.near=q.near,S.far=b.far=A.far=q.far,(L!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,H=S.far,A.near=L,A.far=H,b.near=L,b.far=H,A.updateProjectionMatrix(),b.updateProjectionMatrix(),q.updateProjectionMatrix());const se=q.parent,he=S.cameras;I(S,se);for(let le=0;le<he.length;le++)I(he[le],se);he.length===2?N(S,A,b):S.projectionMatrix.copy(A.projectionMatrix),Z(q,S,se)};function Z(q,se,he){he===null?q.matrix.copy(se.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(se.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Fo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let re=null;function xe(q,se){if(f=se.getViewerPose(u||o),v=se,f!==null){const he=f.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let le=!1;he.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let be=0;be<he.length;be++){const Ge=he[be];let D=null;if(p!==null)D=p.getViewport(Ge);else{const Be=h.getViewSubImage(d,Ge);D=Be.viewport,be===0&&(e.setRenderTargetTextures(g,Be.colorTexture,d.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(g))}let We=w[be];We===void 0&&(We=new Mn,We.layers.enable(be),We.viewport=new Lt,w[be]=We),We.matrix.fromArray(Ge.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ge.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(D.x,D.y,D.width,D.height),be===0&&(S.matrix.copy(We.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(We)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const be=h.getDepthInformation(he[0]);be&&be.isValid&&be.texture&&x.init(e,be,r.renderState)}}for(let he=0;he<_.length;he++){const le=M[he],Oe=_[he];le!==null&&Oe!==void 0&&Oe.update(le,se,u||o)}re&&re(q,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),v=null}const Ve=new j_;Ve.setAnimationLoop(xe),this.setAnimationLoop=function(q){re=q},this.dispose=function(){}}}const ar=new qn,s1=new ct;function o1(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,G_(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,g,_,M){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),h(m,c)):c.isMeshPhongMaterial?(s(m,c),f(m,c)):c.isMeshStandardMaterial?(s(m,c),d(m,c),c.isMeshPhysicalMaterial&&p(m,c,M)):c.isMeshMatcapMaterial?(s(m,c),v(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),x(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,g,_):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===nn&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===nn&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const g=e.get(c),_=g.envMap,M=g.envMapRotation;_&&(m.envMap.value=_,ar.copy(M),ar.x*=-1,ar.y*=-1,ar.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),m.envMapRotation.value.setFromMatrix4(s1.makeRotationFromEuler(ar)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,g,_){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*g,m.scale.value=_*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function f(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function h(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function d(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,g){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===nn&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,c){c.matcap&&(m.matcap.value=c.matcap)}function x(m,c){const g=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function a1(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const M=_.program;i.uniformBlockBinding(g,M)}function u(g,_){let M=r[g.id];M===void 0&&(v(g),M=f(g),r[g.id]=M,g.addEventListener("dispose",m));const R=_.program;i.updateUBOMapping(g,R);const C=e.render.frame;s[g.id]!==C&&(d(g),s[g.id]=C)}function f(g){const _=h();g.__bindingPointIndex=_;const M=t.createBuffer(),R=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=r[g.id],M=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,A=M.length;C<A;C++){const b=Array.isArray(M[C])?M[C]:[M[C]];for(let w=0,S=b.length;w<S;w++){const L=b[w];if(p(L,C,w,R)===!0){const H=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let K=0;K<O.length;K++){const Y=O[K],Q=x(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,H+$,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,$),$+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,M,R){const C=g.value,A=_+"_"+M;if(R[A]===void 0)return typeof C=="number"||typeof C=="boolean"?R[A]=C:R[A]=C.clone(),!0;{const b=R[A];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return R[A]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function v(g){const _=g.uniforms;let M=0;const R=16;for(let A=0,b=_.length;A<b;A++){const w=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,L=w.length;S<L;S++){const H=w[S],O=Array.isArray(H.value)?H.value:[H.value];for(let $=0,K=O.length;$<K;$++){const Y=O[$],Q=x(Y),N=M%R;N!==0&&R-N<Q.boundary&&(M+=R-N),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=Q.storage}}}const C=M%R;return C>0&&(M+=R-C),g.__size=M,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class l1{constructor(e={}){const{canvas:n=eS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const c=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vn,this.toneMapping=Vi,this.toneMappingExposure=1;const _=this;let M=!1,R=0,C=0,A=null,b=-1,w=null;const S=new Lt,L=new Lt;let H=null;const O=new Xe(0);let $=0,K=n.width,Y=n.height,Q=1,N=null,I=null;const Z=new Lt(0,0,K,Y),re=new Lt(0,0,K,Y);let xe=!1;const Ve=new md;let q=!1,se=!1;const he=new ct,le=new U,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function Ge(){return A===null?Q:1}let D=i;function We(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${fd}`),n.addEventListener("webglcontextlost",X,!1),n.addEventListener("webglcontextrestored",B,!1),n.addEventListener("webglcontextcreationerror",j,!1),D===null){const F="webgl2";if(D=We(F,T),D===null)throw We(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Be,tt,Ee,je,ke,Le,at,P,E,W,J,te,ne,ye,ce,ue,De,oe,_e,ze,we,de,Ne,Ue;function dt(){Be=new gT(D),Be.init(),de=new Qw(D,Be),tt=new cT(D,Be,e,de),Ee=new Kw(D),je=new xT(D),ke=new Fw,Le=new Zw(D,Be,Ee,ke,tt,de,je),at=new dT(_),P=new mT(_),E=new AS(D),Ne=new lT(D,E),W=new _T(D,E,je,Ne),J=new ST(D,W,E,je),_e=new yT(D,tt,Le),ue=new fT(ke),te=new Iw(_,at,P,Be,tt,Ne,ue),ne=new o1(_,ke),ye=new kw,ce=new Ww(Be),oe=new aT(_,at,P,Ee,J,d,l),De=new qw(_,J,tt),Ue=new a1(D,je,tt,Ee),ze=new uT(D,Be,je),we=new vT(D,Be,je),je.programs=te.programs,_.capabilities=tt,_.extensions=Be,_.properties=ke,_.renderLists=ye,_.shadowMap=De,_.state=Ee,_.info=je}dt();const y=new r1(_,D);this.xr=y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(K,Y,!1))},this.getSize=function(T){return T.set(K,Y)},this.setSize=function(T,F,V=!0){if(y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,Y=F,n.width=Math.floor(T*Q),n.height=Math.floor(F*Q),V===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(K*Q,Y*Q).floor()},this.setDrawingBufferSize=function(T,F,V){K=T,Y=F,Q=V,n.width=Math.floor(T*V),n.height=Math.floor(F*V),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,F,V,G){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,F,V,G),Ee.viewport(S.copy(Z).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(re)},this.setScissor=function(T,F,V,G){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,F,V,G),Ee.scissor(L.copy(re).multiplyScalar(Q).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(T){Ee.setScissorTest(xe=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(T=!0,F=!0,V=!0){let G=0;if(T){let k=!1;if(A!==null){const ae=A.texture.format;k=ae===N_||ae===D_||ae===L_}if(k){const ae=A.texture.type,pe=ae===ji||ae===Ds||ae===wl||ae===Ns||ae===P_||ae===b_,ge=oe.getClearColor(),ve=oe.getClearAlpha(),Ae=ge.r,Ce=ge.g,Te=ge.b;pe?(p[0]=Ae,p[1]=Ce,p[2]=Te,p[3]=ve,D.clearBufferuiv(D.COLOR,0,p)):(v[0]=Ae,v[1]=Ce,v[2]=Te,v[3]=ve,D.clearBufferiv(D.COLOR,0,v))}else G|=D.COLOR_BUFFER_BIT}F&&(G|=D.DEPTH_BUFFER_BIT),V&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",X,!1),n.removeEventListener("webglcontextrestored",B,!1),n.removeEventListener("webglcontextcreationerror",j,!1),ye.dispose(),ce.dispose(),ke.dispose(),at.dispose(),P.dispose(),J.dispose(),Ne.dispose(),Ue.dispose(),te.dispose(),y.dispose(),y.removeEventListener("sessionstart",xt),y.removeEventListener("sessionend",yt),on.stop()};function X(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=je.autoReset,F=De.enabled,V=De.autoUpdate,G=De.needsUpdate,k=De.type;dt(),je.autoReset=T,De.enabled=F,De.autoUpdate=V,De.needsUpdate=G,De.type=k}function j(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ee(T){const F=T.target;F.removeEventListener("dispose",ee),Se(F)}function Se(T){Pe(T),ke.remove(T)}function Pe(T){const F=ke.get(T).programs;F!==void 0&&(F.forEach(function(V){te.releaseProgram(V)}),T.isShaderMaterial&&te.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,V,G,k,ae){F===null&&(F=Oe);const pe=k.isMesh&&k.matrixWorld.determinant()<0,ge=nv(T,F,V,G,k);Ee.setMaterial(G,pe);let ve=V.index,Ae=1;if(G.wireframe===!0){if(ve=W.getWireframeAttribute(V),ve===void 0)return;Ae=2}const Ce=V.drawRange,Te=V.attributes.position;let Ke=Ce.start*Ae,pt=(Ce.start+Ce.count)*Ae;ae!==null&&(Ke=Math.max(Ke,ae.start*Ae),pt=Math.min(pt,(ae.start+ae.count)*Ae)),ve!==null?(Ke=Math.max(Ke,0),pt=Math.min(pt,ve.count)):Te!=null&&(Ke=Math.max(Ke,0),pt=Math.min(pt,Te.count));const mt=pt-Ke;if(mt<0||mt===1/0)return;Ne.setup(k,G,ge,V,ve);let ln,Ze=ze;if(ve!==null&&(ln=E.get(ve),Ze=we,Ze.setIndex(ln)),k.isMesh)G.wireframe===!0?(Ee.setLineWidth(G.wireframeLinewidth*Ge()),Ze.setMode(D.LINES)):Ze.setMode(D.TRIANGLES);else if(k.isLine){let Me=G.linewidth;Me===void 0&&(Me=1),Ee.setLineWidth(Me*Ge()),k.isLineSegments?Ze.setMode(D.LINES):k.isLineLoop?Ze.setMode(D.LINE_LOOP):Ze.setMode(D.LINE_STRIP)}else k.isPoints?Ze.setMode(D.POINTS):k.isSprite&&Ze.setMode(D.TRIANGLES);if(k.isBatchedMesh)k._multiDrawInstances!==null?Ze.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances):Ze.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Ze.renderInstances(Ke,mt,k.count);else if(V.isInstancedBufferGeometry){const Me=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Wt=Math.min(V.instanceCount,Me);Ze.renderInstances(Ke,mt,Wt)}else Ze.render(Ke,mt)};function ht(T,F,V){T.transparent===!0&&T.side===si&&T.forceSinglePass===!1?(T.side=nn,T.needsUpdate=!0,Wo(T,F,V),T.side=Xi,T.needsUpdate=!0,Wo(T,F,V),T.side=si):Wo(T,F,V)}this.compile=function(T,F,V=null){V===null&&(V=T),m=ce.get(V),m.init(F),g.push(m),V.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),T!==V&&T.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const G=new Set;return T.traverse(function(k){const ae=k.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){const ge=ae[pe];ht(ge,V,k),G.add(ge)}else ht(ae,V,k),G.add(ae)}),g.pop(),m=null,G},this.compileAsync=function(T,F,V=null){const G=this.compile(T,F,V);return new Promise(k=>{function ae(){if(G.forEach(function(pe){ke.get(pe).currentProgram.isReady()&&G.delete(pe)}),G.size===0){k(T);return}setTimeout(ae,10)}Be.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let vt=null;function qe(T){vt&&vt(T)}function xt(){on.stop()}function yt(){on.start()}const on=new j_;on.setAnimationLoop(qe),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(T){vt=T,y.setAnimationLoop(T),T===null?on.stop():on.start()},y.addEventListener("sessionstart",xt),y.addEventListener("sessionend",yt),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),y.enabled===!0&&y.isPresenting===!0&&(y.cameraAutoUpdate===!0&&y.updateCamera(F),F=y.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,F,A),m=ce.get(T,g.length),m.init(F),g.push(m),he.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ve.setFromProjectionMatrix(he),se=this.localClippingEnabled,q=ue.init(this.clippingPlanes,se),x=ye.get(T,c.length),x.init(),c.push(x),y.enabled===!0&&y.isPresenting===!0){const ae=_.xr.getDepthSensingMesh();ae!==null&&an(ae,F,-1/0,_.sortObjects)}an(T,F,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(N,I),be=y.enabled===!1||y.isPresenting===!1||y.hasDepthSensing()===!1,be&&oe.addToRenderList(x,T),this.info.render.frame++,q===!0&&ue.beginShadows();const V=m.state.shadowsArray;De.render(V,T,F),q===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=x.opaque,k=x.transmissive;if(m.setupLights(),F.isArrayCamera){const ae=F.cameras;if(k.length>0)for(let pe=0,ge=ae.length;pe<ge;pe++){const ve=ae[pe];Qi(G,k,T,ve)}be&&oe.render(T);for(let pe=0,ge=ae.length;pe<ge;pe++){const ve=ae[pe];mi(x,T,ve,ve.viewport)}}else k.length>0&&Qi(G,k,T,F),be&&oe.render(T),mi(x,T,F);A!==null&&(Le.updateMultisampleRenderTarget(A),Le.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(_,T,F),Ne.resetDefaultState(),b=-1,w=null,g.pop(),g.length>0?(m=g[g.length-1],q===!0&&ue.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function an(T,F,V,G){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ve.intersectsSprite(T)){G&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);const pe=J.update(T),ge=T.material;ge.visible&&x.push(T,pe,ge,V,le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ve.intersectsObject(T))){const pe=J.update(T),ge=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),le.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),le.copy(pe.boundingSphere.center)),le.applyMatrix4(T.matrixWorld).applyMatrix4(he)),Array.isArray(ge)){const ve=pe.groups;for(let Ae=0,Ce=ve.length;Ae<Ce;Ae++){const Te=ve[Ae],Ke=ge[Te.materialIndex];Ke&&Ke.visible&&x.push(T,pe,Ke,V,le.z,Te)}}else ge.visible&&x.push(T,pe,ge,V,le.z,null)}}const ae=T.children;for(let pe=0,ge=ae.length;pe<ge;pe++)an(ae[pe],F,V,G)}function mi(T,F,V,G){const k=T.opaque,ae=T.transmissive,pe=T.transparent;m.setupLightsView(V),q===!0&&ue.setGlobalState(_.clippingPlanes,V),G&&Ee.viewport(S.copy(G)),k.length>0&&Ji(k,F,V),ae.length>0&&Ji(ae,F,V),pe.length>0&&Ji(pe,F,V),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Qi(T,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Ar(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Zl:ji,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ae=m.state.transmissionRenderTarget[G.id],pe=G.viewport||S;ae.setSize(pe.z,pe.w);const ge=_.getRenderTarget();_.setRenderTarget(ae),_.getClearColor(O),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),be?oe.render(V):_.clear();const ve=_.toneMapping;_.toneMapping=Vi;const Ae=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),q===!0&&ue.setGlobalState(_.clippingPlanes,G),Ji(T,V,G),Le.updateMultisampleRenderTarget(ae),Le.updateRenderTargetMipmap(ae),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Te=0,Ke=F.length;Te<Ke;Te++){const pt=F[Te],mt=pt.object,ln=pt.geometry,Ze=pt.material,Me=pt.group;if(Ze.side===si&&mt.layers.test(G.layers)){const Wt=Ze.side;Ze.side=nn,Ze.needsUpdate=!0,xd(mt,V,G,ln,Ze,Me),Ze.side=Wt,Ze.needsUpdate=!0,Ce=!0}}Ce===!0&&(Le.updateMultisampleRenderTarget(ae),Le.updateRenderTargetMipmap(ae))}_.setRenderTarget(ge),_.setClearColor(O,$),Ae!==void 0&&(G.viewport=Ae),_.toneMapping=ve}function Ji(T,F,V){const G=F.isScene===!0?F.overrideMaterial:null;for(let k=0,ae=T.length;k<ae;k++){const pe=T[k],ge=pe.object,ve=pe.geometry,Ae=G===null?pe.material:G,Ce=pe.group;ge.layers.test(V.layers)&&xd(ge,F,V,ve,Ae,Ce)}}function xd(T,F,V,G,k,ae){T.onBeforeRender(_,F,V,G,k,ae),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(_,F,V,G,T,ae),k.transparent===!0&&k.side===si&&k.forceSinglePass===!1?(k.side=nn,k.needsUpdate=!0,_.renderBufferDirect(V,F,G,k,T,ae),k.side=Xi,k.needsUpdate=!0,_.renderBufferDirect(V,F,G,k,T,ae),k.side=si):_.renderBufferDirect(V,F,G,k,T,ae),T.onAfterRender(_,F,V,G,k,ae)}function Wo(T,F,V){F.isScene!==!0&&(F=Oe);const G=ke.get(T),k=m.state.lights,ae=m.state.shadowsArray,pe=k.state.version,ge=te.getParameters(T,k.state,ae,F,V),ve=te.getProgramCacheKey(ge);let Ae=G.programs;G.environment=T.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(T.isMeshStandardMaterial?P:at).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ae===void 0&&(T.addEventListener("dispose",ee),Ae=new Map,G.programs=Ae);let Ce=Ae.get(ve);if(Ce!==void 0){if(G.currentProgram===Ce&&G.lightsStateVersion===pe)return Sd(T,ge),Ce}else ge.uniforms=te.getUniforms(T),T.onBuild(V,ge,_),T.onBeforeCompile(ge,_),Ce=te.acquireProgram(ge,ve),Ae.set(ve,Ce),G.uniforms=ge.uniforms;const Te=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=ue.uniform),Sd(T,ge),G.needsLights=rv(T),G.lightsStateVersion=pe,G.needsLights&&(Te.ambientLightColor.value=k.state.ambient,Te.lightProbe.value=k.state.probe,Te.directionalLights.value=k.state.directional,Te.directionalLightShadows.value=k.state.directionalShadow,Te.spotLights.value=k.state.spot,Te.spotLightShadows.value=k.state.spotShadow,Te.rectAreaLights.value=k.state.rectArea,Te.ltc_1.value=k.state.rectAreaLTC1,Te.ltc_2.value=k.state.rectAreaLTC2,Te.pointLights.value=k.state.point,Te.pointLightShadows.value=k.state.pointShadow,Te.hemisphereLights.value=k.state.hemi,Te.directionalShadowMap.value=k.state.directionalShadowMap,Te.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Te.spotShadowMap.value=k.state.spotShadowMap,Te.spotLightMatrix.value=k.state.spotLightMatrix,Te.spotLightMap.value=k.state.spotLightMap,Te.pointShadowMap.value=k.state.pointShadowMap,Te.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=Ce,G.uniformsList=null,Ce}function yd(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Ja.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Sd(T,F){const V=ke.get(T);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function nv(T,F,V,G,k){F.isScene!==!0&&(F=Oe),Le.resetTextureUnits();const ae=F.fog,pe=G.isMeshStandardMaterial?F.environment:null,ge=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Zi,ve=(G.isMeshStandardMaterial?P:at).get(G.envMap||pe),Ae=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ce=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!V.morphAttributes.position,Ke=!!V.morphAttributes.normal,pt=!!V.morphAttributes.color;let mt=Vi;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(mt=_.toneMapping);const ln=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ze=ln!==void 0?ln.length:0,Me=ke.get(G),Wt=m.state.lights;if(q===!0&&(se===!0||T!==w)){const vn=T===w&&G.id===b;ue.setState(G,T,vn)}let et=!1;G.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Wt.state.version||Me.outputColorSpace!==ge||k.isBatchedMesh&&Me.batching===!1||!k.isBatchedMesh&&Me.batching===!0||k.isBatchedMesh&&Me.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Me.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Me.instancing===!1||!k.isInstancedMesh&&Me.instancing===!0||k.isSkinnedMesh&&Me.skinning===!1||!k.isSkinnedMesh&&Me.skinning===!0||k.isInstancedMesh&&Me.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Me.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Me.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Me.instancingMorph===!1&&k.morphTexture!==null||Me.envMap!==ve||G.fog===!0&&Me.fog!==ae||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ue.numPlanes||Me.numIntersection!==ue.numIntersection)||Me.vertexAlphas!==Ae||Me.vertexTangents!==Ce||Me.morphTargets!==Te||Me.morphNormals!==Ke||Me.morphColors!==pt||Me.toneMapping!==mt||Me.morphTargetsCount!==Ze)&&(et=!0):(et=!0,Me.__version=G.version);let Kn=Me.currentProgram;et===!0&&(Kn=Wo(G,F,k));let Xo=!1,er=!1,ru=!1;const Rt=Kn.getUniforms(),gi=Me.uniforms;if(Ee.useProgram(Kn.program)&&(Xo=!0,er=!0,ru=!0),G.id!==b&&(b=G.id,er=!0),Xo||w!==T){Rt.setValue(D,"projectionMatrix",T.projectionMatrix),Rt.setValue(D,"viewMatrix",T.matrixWorldInverse);const vn=Rt.map.cameraPosition;vn!==void 0&&vn.setValue(D,le.setFromMatrixPosition(T.matrixWorld)),tt.logarithmicDepthBuffer&&Rt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Rt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,er=!0,ru=!0)}if(k.isSkinnedMesh){Rt.setOptional(D,k,"bindMatrix"),Rt.setOptional(D,k,"bindMatrixInverse");const vn=k.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Rt.setValue(D,"boneTexture",vn.boneTexture,Le))}k.isBatchedMesh&&(Rt.setOptional(D,k,"batchingTexture"),Rt.setValue(D,"batchingTexture",k._matricesTexture,Le),Rt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Rt.setValue(D,"batchingColorTexture",k._colorsTexture,Le));const su=V.morphAttributes;if((su.position!==void 0||su.normal!==void 0||su.color!==void 0)&&_e.update(k,V,Kn),(er||Me.receiveShadow!==k.receiveShadow)&&(Me.receiveShadow=k.receiveShadow,Rt.setValue(D,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(gi.envMap.value=ve,gi.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(gi.envMapIntensity.value=F.environmentIntensity),er&&(Rt.setValue(D,"toneMappingExposure",_.toneMappingExposure),Me.needsLights&&iv(gi,ru),ae&&G.fog===!0&&ne.refreshFogUniforms(gi,ae),ne.refreshMaterialUniforms(gi,G,Q,Y,m.state.transmissionRenderTarget[T.id]),Ja.upload(D,yd(Me),gi,Le)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ja.upload(D,yd(Me),gi,Le),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Rt.setValue(D,"center",k.center),Rt.setValue(D,"modelViewMatrix",k.modelViewMatrix),Rt.setValue(D,"normalMatrix",k.normalMatrix),Rt.setValue(D,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const vn=G.uniformsGroups;for(let ou=0,sv=vn.length;ou<sv;ou++){const Md=vn[ou];Ue.update(Md,Kn),Ue.bind(Md,Kn)}}return Kn}function iv(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function rv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,F,V){ke.get(T.texture).__webglTexture=F,ke.get(T.depthTexture).__webglTexture=V;const G=ke.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const V=ke.get(T);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,V=0){A=T,R=F,C=V;let G=!0,k=null,ae=!1,pe=!1;if(T){const ve=ke.get(T);ve.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(D.FRAMEBUFFER,null),G=!1):ve.__webglFramebuffer===void 0?Le.setupRenderTarget(T):ve.__hasExternalTextures&&Le.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(pe=!0);const Ce=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[F])?k=Ce[F][V]:k=Ce[F],ae=!0):T.samples>0&&Le.useMultisampledRTT(T)===!1?k=ke.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?k=Ce[V]:k=Ce,S.copy(T.viewport),L.copy(T.scissor),H=T.scissorTest}else S.copy(Z).multiplyScalar(Q).floor(),L.copy(re).multiplyScalar(Q).floor(),H=xe;if(Ee.bindFramebuffer(D.FRAMEBUFFER,k)&&G&&Ee.drawBuffers(T,k),Ee.viewport(S),Ee.scissor(L),Ee.setScissorTest(H),ae){const ve=ke.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve.__webglTexture,V)}else if(pe){const ve=ke.get(T.texture),Ae=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.__webglTexture,V||0,Ae)}b=-1},this.readRenderTargetPixels=function(T,F,V,G,k,ae,pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(ge=ge[pe]),ge){Ee.bindFramebuffer(D.FRAMEBUFFER,ge);try{const ve=T.texture,Ae=ve.format,Ce=ve.type;if(!tt.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-G&&V>=0&&V<=T.height-k&&D.readPixels(F,V,G,k,de.convert(Ae),de.convert(Ce),ae)}finally{const ve=A!==null?ke.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(T,F,V,G,k,ae,pe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(ge=ge[pe]),ge){Ee.bindFramebuffer(D.FRAMEBUFFER,ge);try{const ve=T.texture,Ae=ve.format,Ce=ve.type;if(!tt.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-G&&V>=0&&V<=T.height-k){const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),D.readPixels(F,V,G,k,de.convert(Ae),de.convert(Ce),0),D.flush();const Ke=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await tS(D,Ke,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae)}finally{D.deleteBuffer(Te),D.deleteSync(Ke)}return ae}}finally{const ve=A!==null?ke.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,ve)}}},this.copyFramebufferToTexture=function(T,F=null,V=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-V),k=Math.floor(T.image.width*G),ae=Math.floor(T.image.height*G),pe=F!==null?F.x:0,ge=F!==null?F.y:0;Le.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,pe,ge,k,ae),Ee.unbindTexture()},this.copyTextureToTexture=function(T,F,V=null,G=null,k=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],F=arguments[2],k=arguments[3]||0,V=null);let ae,pe,ge,ve,Ae,Ce;V!==null?(ae=V.max.x-V.min.x,pe=V.max.y-V.min.y,ge=V.min.x,ve=V.min.y):(ae=T.image.width,pe=T.image.height,ge=0,ve=0),G!==null?(Ae=G.x,Ce=G.y):(Ae=0,Ce=0);const Te=de.convert(F.format),Ke=de.convert(F.type);Le.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const pt=D.getParameter(D.UNPACK_ROW_LENGTH),mt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ln=D.getParameter(D.UNPACK_SKIP_PIXELS),Ze=D.getParameter(D.UNPACK_SKIP_ROWS),Me=D.getParameter(D.UNPACK_SKIP_IMAGES),Wt=T.isCompressedTexture?T.mipmaps[k]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Wt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Wt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,ve),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,Ae,Ce,ae,pe,Te,Ke,Wt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,Ae,Ce,Wt.width,Wt.height,Te,Wt.data):D.texSubImage2D(D.TEXTURE_2D,k,Ae,Ce,Te,Ke,Wt),D.pixelStorei(D.UNPACK_ROW_LENGTH,pt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ln),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Me),k===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(T,F,V=null,G=null,k=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,T=arguments[2],F=arguments[3],k=arguments[4]||0);let ae,pe,ge,ve,Ae,Ce,Te,Ke,pt;const mt=T.isCompressedTexture?T.mipmaps[k]:T.image;V!==null?(ae=V.max.x-V.min.x,pe=V.max.y-V.min.y,ge=V.max.z-V.min.z,ve=V.min.x,Ae=V.min.y,Ce=V.min.z):(ae=mt.width,pe=mt.height,ge=mt.depth,ve=0,Ae=0,Ce=0),G!==null?(Te=G.x,Ke=G.y,pt=G.z):(Te=0,Ke=0,pt=0);const ln=de.convert(F.format),Ze=de.convert(F.type);let Me;if(F.isData3DTexture)Le.setTexture3D(F,0),Me=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Le.setTexture2DArray(F,0),Me=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Wt=D.getParameter(D.UNPACK_ROW_LENGTH),et=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Kn=D.getParameter(D.UNPACK_SKIP_PIXELS),Xo=D.getParameter(D.UNPACK_SKIP_ROWS),er=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ae),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Me,k,Te,Ke,pt,ae,pe,ge,ln,Ze,mt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Me,k,Te,Ke,pt,ae,pe,ge,ln,mt.data):D.texSubImage3D(Me,k,Te,Ke,pt,ae,pe,ge,ln,Ze,mt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Wt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Kn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xo),D.pixelStorei(D.UNPACK_SKIP_IMAGES,er),k===0&&F.generateMipmaps&&D.generateMipmap(Me),Ee.unbindTexture()},this.initRenderTarget=function(T){ke.get(T).__webglFramebuffer===void 0&&Le.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Le.setTextureCube(T,0):T.isData3DTexture?Le.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Le.setTexture2DArray(T,0):Le.setTexture2D(T,0),Ee.unbindTexture()},this.resetState=function(){R=0,C=0,A=null,Ee.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===dd?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Ql?"display-p3":"srgb"}}class u1 extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Oo extends Bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ll=new U,Dl=new U,Jp=new ct,no=new eu,La=new Jl,cc=new U,em=new U;class _d extends Nt{constructor(e=new sn,n=new Oo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ll.fromBufferAttribute(n,r-1),Dl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ll.distanceTo(Dl);e.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(r),La.radius+=s,e.ray.intersectsSphere(La)===!1)return;Jp.copy(r).invert(),no.copy(e.ray).applyMatrix4(Jp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let x=p,m=v-1;x<m;x+=u){const c=f.getX(x),g=f.getX(x+1),_=Da(this,e,no,l,c,g);_&&n.push(_)}if(this.isLineLoop){const x=f.getX(v-1),m=f.getX(p),c=Da(this,e,no,l,x,m);c&&n.push(c)}}else{const p=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let x=p,m=v-1;x<m;x+=u){const c=Da(this,e,no,l,x,x+1);c&&n.push(c)}if(this.isLineLoop){const x=Da(this,e,no,l,v-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Da(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Ll.fromBufferAttribute(o,r),Dl.fromBufferAttribute(o,s),n.distanceSqToSegment(Ll,Dl,cc,em)>i)return;cc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(cc);if(!(l<e.near||l>e.far))return{distance:l,point:em.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const tm=new U,nm=new U;class ev extends _d{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)tm.fromBufferAttribute(n,r),nm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+tm.distanceTo(nm);e.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vd extends sn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],p=[];let v=0;const x=[],m=i/2;let c=0;g(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new wt(h,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(p,2));function g(){const M=new U,R=new U;let C=0;const A=(n-e)/i;for(let b=0;b<=s;b++){const w=[],S=b/s,L=S*(n-e)+e;for(let H=0;H<=r;H++){const O=H/r,$=O*l+a,K=Math.sin($),Y=Math.cos($);R.x=L*K,R.y=-S*i+m,R.z=L*Y,h.push(R.x,R.y,R.z),M.set(K,A,Y).normalize(),d.push(M.x,M.y,M.z),p.push(O,1-S),w.push(v++)}x.push(w)}for(let b=0;b<r;b++)for(let w=0;w<s;w++){const S=x[w][b],L=x[w+1][b],H=x[w+1][b+1],O=x[w][b+1];f.push(S,L,O),f.push(L,H,O),C+=6}u.addGroup(c,C,0),c+=C}function _(M){const R=v,C=new Re,A=new U;let b=0;const w=M===!0?e:n,S=M===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),v++;const L=v;for(let H=0;H<=r;H++){const $=H/r*l+a,K=Math.cos($),Y=Math.sin($);A.x=w*Y,A.y=m*S,A.z=w*K,h.push(A.x,A.y,A.z),d.push(0,S,0),C.x=K*.5+.5,C.y=Y*.5*S+.5,p.push(C.x,C.y),v++}for(let H=0;H<r;H++){const O=R+H,$=L+H;M===!0?f.push($,$+1,O):f.push($+1,$,O),b+=3}u.addGroup(c,b,M===!0?1:2),c+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Na=new U,Ua=new U,fc=new U,Ia=new Fn;class c1 extends sn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Ss*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,u=[0,0,0],f=["a","b","c"],h=new Array(3),d={},p=[];for(let v=0;v<l;v+=3){o?(u[0]=o.getX(v),u[1]=o.getX(v+1),u[2]=o.getX(v+2)):(u[0]=v,u[1]=v+1,u[2]=v+2);const{a:x,b:m,c}=Ia;if(x.fromBufferAttribute(a,u[0]),m.fromBufferAttribute(a,u[1]),c.fromBufferAttribute(a,u[2]),Ia.getNormal(fc),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(c.x*r)},${Math.round(c.y*r)},${Math.round(c.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let g=0;g<3;g++){const _=(g+1)%3,M=h[g],R=h[_],C=Ia[f[g]],A=Ia[f[_]],b=`${M}_${R}`,w=`${R}_${M}`;w in d&&d[w]?(fc.dot(d[w].normal)<=s&&(p.push(C.x,C.y,C.z),p.push(A.x,A.y,A.z)),d[w]=null):b in d||(d[b]={index0:u[g],index1:u[_],normal:fc.clone()})}}for(const v in d)if(d[v]){const{index0:x,index1:m}=d[v];Na.fromBufferAttribute(a,x),Ua.fromBufferAttribute(a,m),p.push(Na.x,Na.y,Na.z),p.push(Ua.x,Ua.y,Ua.z)}this.setAttribute("position",new wt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Nl extends sn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const f=[],h=new U,d=new U,p=[],v=[],x=[],m=[];for(let c=0;c<=i;c++){const g=[],_=c/i;let M=0;c===0&&o===0?M=.5/n:c===i&&l===Math.PI&&(M=-.5/n);for(let R=0;R<=n;R++){const C=R/n;h.x=-e*Math.cos(r+C*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+_*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(C+M,1-_),g.push(u++)}f.push(g)}for(let c=0;c<i;c++)for(let g=0;g<n;g++){const _=f[c][g+1],M=f[c][g],R=f[c+1][g],C=f[c+1][g+1];(c!==0||o>0)&&p.push(_,M,C),(c!==i-1||l<Math.PI)&&p.push(M,R,C)}this.setIndex(p),this.setAttribute("position",new wt(v,3)),this.setAttribute("normal",new wt(x,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class im extends Bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=U_,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tv extends Nt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const dc=new ct,rm=new U,sm=new U;class f1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new md,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;rm.setFromMatrixPosition(e.matrixWorld),n.position.copy(rm),sm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(sm),n.updateMatrixWorld(),dc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class d1 extends f1{constructor(){super(new Y_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class h1 extends tv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new d1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class p1 extends tv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const om=new ct;class m1{constructor(e,n,i=0,r=1/0){this.ray=new eu(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new pd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return om.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(om),this}intersectObject(e,n=!0,i=[]){return gf(e,this,i,n),i.sort(am),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)gf(e[r],this,i,n);return i.sort(am),i}}function am(t,e){return t.distance-e.distance}function gf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)gf(s[o],e,n,!0)}}class lm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Vt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class g1 extends ev{constructor(e=10,n=10,i=4473924,r=8947848){i=new Xe(i),r=new Xe(r);const s=n/2,o=e/n,a=e/2,l=[],u=[];for(let d=0,p=0,v=-a;d<=n;d++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const x=d===s?i:r;x.toArray(u,p),p+=3,x.toArray(u,p),p+=3,x.toArray(u,p),p+=3,x.toArray(u,p),p+=3}const f=new sn;f.setAttribute("position",new wt(l,3)),f.setAttribute("color",new wt(u,3));const h=new Oo({vertexColors:!0,toneMapped:!1});super(f,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const um=new U;let Fa,hc;class Zr extends Nt{constructor(e=new U(0,0,1),n=new U(0,0,0),i=1,r=16776960,s=i*.2,o=s*.2){super(),this.type="ArrowHelper",Fa===void 0&&(Fa=new sn,Fa.setAttribute("position",new wt([0,0,0,0,1,0],3)),hc=new vd(0,.5,1,5,1),hc.translate(0,-.5,0)),this.position.copy(n),this.line=new _d(Fa,new Oo({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new hn(hc,new tu({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{um.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(um,n)}}setLength(e,n=e*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fd);const cm={type:"change"},pc={type:"start"},fm={type:"end"},Oa=new eu,dm=new Ai,_1=Math.cos(70*Qa.DEG2RAD);class v1 extends br{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Dr.ROTATE,MIDDLE:Dr.DOLLY,RIGHT:Dr.PAN},this.touches={ONE:Nr.ROTATE,TWO:Nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",ue),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ue),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(cm),i.update(),s=r.NONE},this.update=function(){const y=new U,X=new Cr().setFromUnitVectors(e.up,new U(0,1,0)),B=X.clone().invert(),j=new U,ee=new Cr,Se=new U,Pe=2*Math.PI;return function(vt=null){const qe=i.object.position;y.copy(qe).sub(i.target),y.applyQuaternion(X),a.setFromVector3(y),i.autoRotate&&s===r.NONE&&H(S(vt)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let xt=i.minAzimuthAngle,yt=i.maxAzimuthAngle;isFinite(xt)&&isFinite(yt)&&(xt<-Math.PI?xt+=Pe:xt>Math.PI&&(xt-=Pe),yt<-Math.PI?yt+=Pe:yt>Math.PI&&(yt-=Pe),xt<=yt?a.theta=Math.max(xt,Math.min(yt,a.theta)):a.theta=a.theta>(xt+yt)/2?Math.max(xt,a.theta):Math.min(yt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let on=!1;if(i.zoomToCursor&&C||i.object.isOrthographicCamera)a.radius=Z(a.radius);else{const an=a.radius;a.radius=Z(a.radius*u),on=an!=a.radius}if(y.setFromSpherical(a),y.applyQuaternion(B),qe.copy(i.target).add(y),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),i.zoomToCursor&&C){let an=null;if(i.object.isPerspectiveCamera){const mi=y.length();an=Z(mi*u);const Qi=mi-an;i.object.position.addScaledVector(M,Qi),i.object.updateMatrixWorld(),on=!!Qi}else if(i.object.isOrthographicCamera){const mi=new U(R.x,R.y,0);mi.unproject(i.object);const Qi=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),on=Qi!==i.object.zoom;const Ji=new U(R.x,R.y,0);Ji.unproject(i.object),i.object.position.sub(Ji).add(mi),i.object.updateMatrixWorld(),an=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;an!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(an).add(i.object.position):(Oa.origin.copy(i.object.position),Oa.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Oa.direction))<_1?e.lookAt(i.target):(dm.setFromNormalAndCoplanarPoint(i.object.up,i.target),Oa.intersectPlane(dm,i.target))))}else if(i.object.isOrthographicCamera){const an=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),an!==i.object.zoom&&(i.object.updateProjectionMatrix(),on=!0)}return u=1,C=!1,on||j.distanceToSquared(i.object.position)>o||8*(1-ee.dot(i.object.quaternion))>o||Se.distanceToSquared(i.target)>o?(i.dispatchEvent(cm),j.copy(i.object.position),ee.copy(i.object.quaternion),Se.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",_e),i.domElement.removeEventListener("pointerdown",at),i.domElement.removeEventListener("pointercancel",E),i.domElement.removeEventListener("wheel",te),i.domElement.removeEventListener("pointermove",P),i.domElement.removeEventListener("pointerup",E),i.domElement.getRootNode().removeEventListener("keydown",ye,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ue),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new lm,l=new lm;let u=1;const f=new U,h=new Re,d=new Re,p=new Re,v=new Re,x=new Re,m=new Re,c=new Re,g=new Re,_=new Re,M=new U,R=new Re;let C=!1;const A=[],b={};let w=!1;function S(y){return y!==null?2*Math.PI/60*i.autoRotateSpeed*y:2*Math.PI/60/60*i.autoRotateSpeed}function L(y){const X=Math.abs(y*.01);return Math.pow(.95,i.zoomSpeed*X)}function H(y){l.theta-=y}function O(y){l.phi-=y}const $=function(){const y=new U;return function(B,j){y.setFromMatrixColumn(j,0),y.multiplyScalar(-B),f.add(y)}}(),K=function(){const y=new U;return function(B,j){i.screenSpacePanning===!0?y.setFromMatrixColumn(j,1):(y.setFromMatrixColumn(j,0),y.crossVectors(i.object.up,y)),y.multiplyScalar(B),f.add(y)}}(),Y=function(){const y=new U;return function(B,j){const ee=i.domElement;if(i.object.isPerspectiveCamera){const Se=i.object.position;y.copy(Se).sub(i.target);let Pe=y.length();Pe*=Math.tan(i.object.fov/2*Math.PI/180),$(2*B*Pe/ee.clientHeight,i.object.matrix),K(2*j*Pe/ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(B*(i.object.right-i.object.left)/i.object.zoom/ee.clientWidth,i.object.matrix),K(j*(i.object.top-i.object.bottom)/i.object.zoom/ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Q(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(y,X){if(!i.zoomToCursor)return;C=!0;const B=i.domElement.getBoundingClientRect(),j=y-B.left,ee=X-B.top,Se=B.width,Pe=B.height;R.x=j/Se*2-1,R.y=-(ee/Pe)*2+1,M.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function Z(y){return Math.max(i.minDistance,Math.min(i.maxDistance,y))}function re(y){h.set(y.clientX,y.clientY)}function xe(y){I(y.clientX,y.clientX),c.set(y.clientX,y.clientY)}function Ve(y){v.set(y.clientX,y.clientY)}function q(y){d.set(y.clientX,y.clientY),p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const X=i.domElement;H(2*Math.PI*p.x/X.clientHeight),O(2*Math.PI*p.y/X.clientHeight),h.copy(d),i.update()}function se(y){g.set(y.clientX,y.clientY),_.subVectors(g,c),_.y>0?Q(L(_.y)):_.y<0&&N(L(_.y)),c.copy(g),i.update()}function he(y){x.set(y.clientX,y.clientY),m.subVectors(x,v).multiplyScalar(i.panSpeed),Y(m.x,m.y),v.copy(x),i.update()}function le(y){I(y.clientX,y.clientY),y.deltaY<0?N(L(y.deltaY)):y.deltaY>0&&Q(L(y.deltaY)),i.update()}function Oe(y){let X=!1;switch(y.code){case i.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),X=!0;break;case i.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),X=!0;break;case i.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?H(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),X=!0;break;case i.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?H(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),X=!0;break}X&&(y.preventDefault(),i.update())}function be(y){if(A.length===1)h.set(y.pageX,y.pageY);else{const X=Ue(y),B=.5*(y.pageX+X.x),j=.5*(y.pageY+X.y);h.set(B,j)}}function Ge(y){if(A.length===1)v.set(y.pageX,y.pageY);else{const X=Ue(y),B=.5*(y.pageX+X.x),j=.5*(y.pageY+X.y);v.set(B,j)}}function D(y){const X=Ue(y),B=y.pageX-X.x,j=y.pageY-X.y,ee=Math.sqrt(B*B+j*j);c.set(0,ee)}function We(y){i.enableZoom&&D(y),i.enablePan&&Ge(y)}function Be(y){i.enableZoom&&D(y),i.enableRotate&&be(y)}function tt(y){if(A.length==1)d.set(y.pageX,y.pageY);else{const B=Ue(y),j=.5*(y.pageX+B.x),ee=.5*(y.pageY+B.y);d.set(j,ee)}p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const X=i.domElement;H(2*Math.PI*p.x/X.clientHeight),O(2*Math.PI*p.y/X.clientHeight),h.copy(d)}function Ee(y){if(A.length===1)x.set(y.pageX,y.pageY);else{const X=Ue(y),B=.5*(y.pageX+X.x),j=.5*(y.pageY+X.y);x.set(B,j)}m.subVectors(x,v).multiplyScalar(i.panSpeed),Y(m.x,m.y),v.copy(x)}function je(y){const X=Ue(y),B=y.pageX-X.x,j=y.pageY-X.y,ee=Math.sqrt(B*B+j*j);g.set(0,ee),_.set(0,Math.pow(g.y/c.y,i.zoomSpeed)),Q(_.y),c.copy(g);const Se=(y.pageX+X.x)*.5,Pe=(y.pageY+X.y)*.5;I(Se,Pe)}function ke(y){i.enableZoom&&je(y),i.enablePan&&Ee(y)}function Le(y){i.enableZoom&&je(y),i.enableRotate&&tt(y)}function at(y){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(y.pointerId),i.domElement.addEventListener("pointermove",P),i.domElement.addEventListener("pointerup",E)),!de(y)&&(ze(y),y.pointerType==="touch"?De(y):W(y)))}function P(y){i.enabled!==!1&&(y.pointerType==="touch"?oe(y):J(y))}function E(y){switch(we(y),A.length){case 0:i.domElement.releasePointerCapture(y.pointerId),i.domElement.removeEventListener("pointermove",P),i.domElement.removeEventListener("pointerup",E),i.dispatchEvent(fm),s=r.NONE;break;case 1:const X=A[0],B=b[X];De({pointerId:X,pageX:B.x,pageY:B.y});break}}function W(y){let X;switch(y.button){case 0:X=i.mouseButtons.LEFT;break;case 1:X=i.mouseButtons.MIDDLE;break;case 2:X=i.mouseButtons.RIGHT;break;default:X=-1}switch(X){case Dr.DOLLY:if(i.enableZoom===!1)return;xe(y),s=r.DOLLY;break;case Dr.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enablePan===!1)return;Ve(y),s=r.PAN}else{if(i.enableRotate===!1)return;re(y),s=r.ROTATE}break;case Dr.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enableRotate===!1)return;re(y),s=r.ROTATE}else{if(i.enablePan===!1)return;Ve(y),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(pc)}function J(y){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;q(y);break;case r.DOLLY:if(i.enableZoom===!1)return;se(y);break;case r.PAN:if(i.enablePan===!1)return;he(y);break}}function te(y){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(y.preventDefault(),i.dispatchEvent(pc),le(ne(y)),i.dispatchEvent(fm))}function ne(y){const X=y.deltaMode,B={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(X){case 1:B.deltaY*=16;break;case 2:B.deltaY*=100;break}return y.ctrlKey&&!w&&(B.deltaY*=10),B}function ye(y){y.key==="Control"&&(w=!0,i.domElement.getRootNode().addEventListener("keyup",ce,{passive:!0,capture:!0}))}function ce(y){y.key==="Control"&&(w=!1,i.domElement.getRootNode().removeEventListener("keyup",ce,{passive:!0,capture:!0}))}function ue(y){i.enabled===!1||i.enablePan===!1||Oe(y)}function De(y){switch(Ne(y),A.length){case 1:switch(i.touches.ONE){case Nr.ROTATE:if(i.enableRotate===!1)return;be(y),s=r.TOUCH_ROTATE;break;case Nr.PAN:if(i.enablePan===!1)return;Ge(y),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Nr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;We(y),s=r.TOUCH_DOLLY_PAN;break;case Nr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Be(y),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(pc)}function oe(y){switch(Ne(y),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;tt(y),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ee(y),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ke(y),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Le(y),i.update();break;default:s=r.NONE}}function _e(y){i.enabled!==!1&&y.preventDefault()}function ze(y){A.push(y.pointerId)}function we(y){delete b[y.pointerId];for(let X=0;X<A.length;X++)if(A[X]==y.pointerId){A.splice(X,1);return}}function de(y){for(let X=0;X<A.length;X++)if(A[X]==y.pointerId)return!0;return!1}function Ne(y){let X=b[y.pointerId];X===void 0&&(X=new Re,b[y.pointerId]=X),X.set(y.pageX,y.pageY)}function Ue(y){const X=y.pointerId===A[0]?A[1]:A[0];return b[X]}i.domElement.addEventListener("contextmenu",_e),i.domElement.addEventListener("pointerdown",at),i.domElement.addEventListener("pointercancel",E),i.domElement.addEventListener("wheel",te,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ye,{passive:!0,capture:!0}),this.update()}}const ka=([t,e,n])=>new U(t,n,e);function x1({scene:t,selectedPointCode:e,trace:n,singleRay:i,onPickPoint:r,registerCameraState:s}){const o=$e.useRef(null),a=$e.useRef(null),l=$e.useRef(null),u=$e.useRef({});return $e.useEffect(()=>{const f=o.current,h=new l1({antialias:!0});h.setPixelRatio(window.devicePixelRatio),h.setSize(f.clientWidth,f.clientHeight),f.appendChild(h.domElement);const d=new u1;d.background=new Xe(16054267),a.current=d;const p=new Mn(50,f.clientWidth/f.clientHeight,.1,2e3);p.position.set(60,48,70);const v=new v1(p,h.domElement);v.enableDamping=!0,v.target.set(0,8,-12),v.update(),u.current={renderer:h,camera:p,controls:v};const x=_=>{var S;const M=h.domElement.getBoundingClientRect(),R=new Re((_.clientX-M.left)/M.width*2-1,-((_.clientY-M.top)/M.height)*2+1),C=new m1;C.setFromCamera(R,p);const A=Object.values(u.current.pointMeshes??{}),w=(S=C.intersectObjects(A,!1)[0])==null?void 0:S.object.userData.code;w&&r(w)};h.domElement.addEventListener("click",x);let m=0;const c=()=>{v.update(),h.render(d,p),m=requestAnimationFrame(c)};m=requestAnimationFrame(c);const g=()=>{p.aspect=f.clientWidth/f.clientHeight,p.updateProjectionMatrix(),h.setSize(f.clientWidth,f.clientHeight)};return window.addEventListener("resize",g),s&&s(()=>({position:p.position.toArray(),target:v.target.toArray()})),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",g),h.domElement.removeEventListener("click",x),v.dispose(),h.dispose(),f.removeChild(h.domElement)}},[]),$e.useEffect(()=>{const f=a.current;if(!f)return;f.clear(),u.current.pointMeshes={},f.add(new p1(16777215,.75));const h=new h1(16777215,.7);h.position.set(40,90,30),f.add(h);const d=new vr;d.name="world-enu";const p=new g1(140,28,10466248,14542318);d.add(p),d.add(new Zr(new U(1,0,0),new U(45,.2,0),12,15680580,1.6,1)),d.add(new Zr(new U(0,0,1),new U(45,.2,0),12,2278750,1.6,1)),d.add(new Zr(new U(0,1,0),new U(45,.2,0),12,3900150,1.6,1)),f.add(d);const v=new vr;v.name="model",v.rotation.y=Qa.degToRad(t.datum.model_north_deg),v.add(new Zr(new U(0,0,1),new U(-45,.2,0),12,44225,1.6,1));for(const m of t.buildings){const[c,g,_]=m.size,[M,R,C]=m.center,A=new Hs(c,_,g),b=new hn(A,new im({color:new Xe(m.color),transparent:!0,opacity:m.is_target?.95:.82,roughness:.8}));b.position.set(M,C,R),b.add(new ev(new c1(A),new Oo({color:3621201}))),v.add(b)}for(const m of t.points){const[c,g,_]=m.model_xyz,M=m.code===e,R=new hn(new Nl(.8,18,18),new im({color:M?14753096:2450411,emissive:M?8327207:731755,emissiveIntensity:M?.6:.25}));if(R.position.set(c,_,g),R.userData.code=m.code,u.current.pointMeshes[m.code]=R,v.add(R),m.normal_azimuth_deg!=null){const C=Qa.degToRad(m.normal_azimuth_deg),A=Qa.degToRad(t.datum.model_north_deg),b=c*Math.cos(A)+g*Math.sin(A),w=-c*Math.sin(A)+g*Math.cos(A),S=new Zr(new U(Math.sin(C),0,Math.cos(C)),new U(b,_+.2,w),4,8141549,1,.7);d.add(S)}}f.add(v);const x=new vr;x.name="ray-overlay",f.add(x),l.current=x},[t,e]),$e.useEffect(()=>{const f=l.current;if(!f)return;const h=f.getObjectByName("sunArrow");if(h&&f.remove(h),!n)return;const[d,p,v]=n.sun_vector_enu,x=new Zr(new U(d,v,p).normalize(),new U(0,32,0),36,n.occluded?14427686:14251782,3.2,2.2);x.name="sunArrow",f.add(x)},[n]),$e.useEffect(()=>{var m,c;const f=l.current;if(!f||((m=f.getObjectByName("traceRay"))==null||m.remove(),(c=f.getObjectByName("hitMarker"))==null||c.remove(),!i))return;const h=ka(i.origin_enu),d=ka(i.direction_enu).normalize(),p=i.hit_enu?ka(i.hit_enu):h.clone().add(d.clone().multiplyScalar(40)),v=new sn().setFromPoints([h,p]),x=new _d(v,new Oo({color:i.occluded?14427686:1483594,linewidth:2}));if(x.name="traceRay",f.add(x),i.hit_enu){const g=new hn(new Nl(.9,16,16),new tu({color:14427686}));g.position.copy(ka(i.hit_enu)),g.name="hitMarker",f.add(g)}},[i]),z.jsx("div",{ref:o,className:"three-mount"})}const za=t=>String(t).padStart(2,"0"),Qr=t=>{const e=t.slice(11,16),[n,i]=e.split(":").map(Number);return n*60+i};function y1(){var N;const[t,e]=$e.useState(null),[n,i]=$e.useState([]),[r,s]=$e.useState("A"),[o,a]=$e.useState("W1"),[l,u]=$e.useState("2025-12-22"),[f,h]=$e.useState(null),[d,p]=$e.useState(null),[v,x]=$e.useState(null),[m,c]=$e.useState(""),[g,_]=$e.useState(!1),[M,R]=$e.useState(""),[C,A]=$e.useState("2025-12-22 09:00"),[b,w]=$e.useState("35"),[S,L]=$e.useState("180"),H=$e.useRef(null);$e.useEffect(()=>{Zs.meta().then(e).catch(I=>c(String(I))),Zs.scenes().then(I=>i(I)).catch(I=>c(String(I)))},[]);const O=$e.useMemo(()=>n.find(I=>I.code===r)??null,[n,r]),$=$e.useCallback(async I=>{var Z;_(!0),c(""),R("");try{const re=await Zs.evaluate({scene_code:r,point_code:o,date:l,persist:I,snapshot_label:I?`快照 ${r}/${o}/${l}`:void 0,camera_state:I?(Z=H.current)==null?void 0:Z.call(H):void 0});h(re),p(null),x(null),I&&re.persisted&&R(`已入库：evaluation_id=${re.persisted.evaluation_id}，snapshot_id=${re.persisted.snapshot_id}（结果与该视角快照关联，可追查）`)}catch(re){c(String(re))}finally{_(!1)}},[r,o,l]);$e.useEffect(()=>{n.length&&$(!1)},[r,o,l,n]);const K=async()=>{c("");try{const I=await Zs.trace(r,o,C);x(I),p(I.trace)}catch(I){c(String(I))}},Y=async()=>{c("");try{const I=await Zs.traceAnalytic(r,o,Number(b),Number(S));x(I),p(I.trace)}catch(I){c(String(I))}},Q=$e.useMemo(()=>{var I;return v?{origin_enu:v.ray_origin_enu,direction_enu:v.ray_direction_enu,hit_enu:((I=v.trace.nearest)==null?void 0:I.hit_point_enu)??null,occluded:v.trace.occluded}:null},[v]);return z.jsxs("div",{className:"app",children:[z.jsxs("header",{children:[z.jsx("h1",{children:"窗面日照遮挡 · 教学工作台"}),z.jsxs("div",{className:"banner",children:[(t==null?void 0:t.banner)??"合成教学场景"," ｜"," ","仅几何可见性，不做天气修正，",z.jsx("b",{children:"不构成规划/日照标准合规结论"})]})]}),z.jsxs("div",{className:"toolbar",children:[z.jsxs("label",{children:["场景",z.jsx("select",{value:r,onChange:I=>s(I.target.value),children:n.map(I=>z.jsxs("option",{value:I.code,children:[I.code," · ",I.name]},I.code))})]}),z.jsxs("label",{children:["窗面测点",z.jsx("select",{value:o,onChange:I=>a(I.target.value),children:O==null?void 0:O.points.map(I=>z.jsxs("option",{value:I.code,children:[I.code," · ",I.name]},I.code))})]}),z.jsxs("label",{children:["日期",z.jsx("select",{value:l,onChange:I=>u(I.target.value),children:t==null?void 0:t.eval_dates.map(I=>z.jsxs("option",{value:I.date,children:[I.date,"（",I.label,"）"]},I.date))})]}),z.jsx("button",{onClick:()=>void $(!1),disabled:g,children:"重新计算"}),z.jsx("button",{className:"primary",onClick:()=>void $(!0),disabled:g,children:"计算并存入 Postgres（关联视角快照）"}),g&&z.jsx("span",{className:"muted",children:"计算中…"})]}),z.jsxs("div",{className:"layout",children:[z.jsxs("div",{className:"left",children:[z.jsx(x1,{scene:O,selectedPointCode:o,trace:d??null,singleRay:Q,onPickPoint:I=>a(I),registerCameraState:I=>{H.current=I}}),z.jsxs("div",{className:"legend",children:[z.jsxs("span",{children:[z.jsx("i",{className:"dot red"}),"太阳被遮挡"]}),z.jsxs("span",{children:[z.jsx("i",{className:"dot amber"}),"太阳可见"]}),z.jsxs("span",{children:[z.jsx("i",{className:"axis e"}),"红=东E"]}),z.jsxs("span",{children:[z.jsx("i",{className:"axis n"}),"绿=真北N"]}),z.jsxs("span",{children:[z.jsx("i",{className:"axis u"}),"蓝=上U"]}),z.jsxs("span",{children:[z.jsx("i",{className:"axis mn"}),"青=模型北(+Y)"]}),z.jsxs("span",{children:[z.jsx("i",{className:"axis wn"}),"紫=窗外法线"]})]}),M&&z.jsx("div",{className:"persist-ok",children:M})]}),z.jsxs("div",{className:"right",children:[z.jsxs("section",{children:[z.jsx("h2",{children:"① 统一坐标基准（场景级，逐测点不可改）"}),O&&z.jsx("table",{className:"kv",children:z.jsxs("tbody",{children:[z.jsxs("tr",{children:[z.jsx("td",{children:"椭球基准"}),z.jsx("td",{children:O.datum.name})]}),z.jsxs("tr",{children:[z.jsx("td",{children:"纬度 / 经度"}),z.jsxs("td",{children:[O.datum.lat,"°, ",O.datum.lon,"°（合成虚构位置）"]})]}),z.jsxs("tr",{children:[z.jsx("td",{children:"当地时区"}),z.jsxs("td",{children:[O.datum.timezone,"（IANA；本地墙钟）"]})]}),z.jsxs("tr",{children:[z.jsx("td",{children:"模型朝北 model_north_deg"}),z.jsxs("td",{children:[z.jsxs("b",{children:[O.datum.model_north_deg,"°"]}),"（模型+Y 轴的真北顺时针方位角）"]})]}),z.jsxs("tr",{children:[z.jsx("td",{children:"窗面外法线真方位"}),z.jsxs("td",{children:[((N=O.points.find(I=>I.code===o))==null?void 0:N.normal_azimuth_deg)??"—","°"]})]}),f&&z.jsxs("tr",{children:[z.jsx("td",{children:"测点 ENU（米）"}),z.jsx("td",{children:JSON.stringify(f.coordinate_context.point_enu)})]})]})}),O&&O.datum_check.length>0&&z.jsxs("div",{className:"error",children:["基准不统一：",O.datum_check.join("；")]}),z.jsx("div",{className:"muted small",children:O==null?void 0:O.note})]}),z.jsxs("section",{children:[z.jsx("h2",{children:"② 逐时采样 ≠ 日照时长"}),z.jsx("p",{className:"small warn",children:t==null?void 0:t.hourly_vs_continuous_note}),z.jsx("div",{className:"hourly",children:f==null?void 0:f.hourly.traces.map(I=>{var re;const Z=I.occluded?"occ":I.facade_faces_sun===!1?"away":"sun";return z.jsxs("button",{className:`chip ${Z} ${(d==null?void 0:d.time_local)===I.time_local?"active":""}`,title:I.nearest?`遮挡物：${I.nearest.building_name}`:"可见",onClick:()=>{p(I),x(null)},children:[I.time_local.slice(11,16),z.jsx("small",{children:Z==="occ"?`遮·${(re=I.nearest)==null?void 0:re.building_id}`:Z==="away"?"背日":"晴"})]},I.time_local)})}),f&&z.jsxs("div",{className:"small muted",children:["整点瞬时样本：共 ",f.hourly.summary.samples_total," 个 ｜ 可见"," ",f.hourly.summary.samples_sunlit," ｜ 被遮挡"," ",f.hourly.summary.samples_occluded," ｜ 窗面背日"," ",f.hourly.summary.samples_facade_away,z.jsx("b",{children:"（样本数，不是小时数）"})]})]}),z.jsxs("section",{children:[z.jsxs("h2",{children:["③ 连续可照 / 遮挡时段（",(t==null?void 0:t.fine_step_seconds)??300,"s 网格游程编码）"]}),z.jsx(S1,{evaln:f})]}),z.jsxs("section",{children:[z.jsx("h2",{children:"④ 单点追查遮挡物"}),z.jsxs("div",{className:"trace-controls",children:[z.jsxs("label",{children:["按本地时刻",z.jsx("input",{value:C,onChange:I=>A(I.target.value),placeholder:"2025-12-22 09:00"})]}),z.jsx("button",{onClick:()=>void K(),children:"射线追查"})]}),z.jsxs("div",{className:"trace-controls",children:[z.jsxs("label",{children:["手算核对：高度角°",z.jsx("input",{value:b,onChange:I=>w(I.target.value),style:{width:70}})]}),z.jsxs("label",{children:["真北方位角°",z.jsx("input",{value:S,onChange:I=>L(I.target.value),style:{width:70}})]}),z.jsx("button",{onClick:()=>void Y(),children:"解析射线"})]}),z.jsx(M1,{single:v})]}),z.jsxs("section",{children:[z.jsx("h2",{children:"⑤ 未建模遮挡说明"}),z.jsx("ul",{className:"small",children:t==null?void 0:t.unmodeled_occluders.map((I,Z)=>z.jsx("li",{children:I},Z))}),z.jsx("p",{className:"small muted",children:"几张晴好天气的渲染截图只代表瞬时，截图数量/亮度不能当作日照时长； 本台时长仅来自 ③ 的细网格几何计算。"})]})]})]}),m&&z.jsx("div",{className:"error",children:m})]})}function S1({evaln:t}){const e=$e.useMemo(()=>{if(!t)return[];const o=t.continuous;return[...o.sunlit_segments.map(a=>({...a,kind:"sunlit"})),...o.occluded_segments.map(a=>({...a,kind:"occluded"}))].sort((a,l)=>Qr(a.start)-Qr(l.start))},[t]);if(!t)return null;const n=t.continuous,i=Math.min(...e.map(o=>Qr(o.start))),r=Math.max(...e.map(o=>Qr(o.end))),s=Math.max(1,r-i);return z.jsxs("div",{children:[z.jsxs("div",{className:"duration",children:["连续可照合计 ",z.jsxs("b",{children:[n.sunlit_duration_h," h"]}),"（",n.sunlit_duration_min," min）， 遮挡段 ",n.occluded_segments.length," 个"]}),z.jsx("div",{className:"bar",children:e.map((o,a)=>{var d,p;const l=Qr(o.start),u=Qr(o.end),f=!!((d=o.occluder_ids)!=null&&d.length)&&o.occluder_ids.every(v=>v==="FACADE_AWAY"),h=o.kind==="sunlit"?"sunlit":f?"away":"occluded";return z.jsx("div",{className:`bar-seg ${h}`,style:{left:`${(l-i)/s*100}%`,width:`${(u-l)/s*100}%`},title:`${o.start.slice(11,16)}–${o.end.slice(11,16)} ${o.duration_min}min ${((p=o.occluder_ids)==null?void 0:p.join(","))??""}`},a)})}),z.jsxs("div",{className:"bar-legend small muted",children:[z.jsx("i",{className:"sw sun"}),"可照 ",z.jsx("i",{className:"sw occ"}),"建筑遮挡 ",z.jsx("i",{className:"sw away"}),"窗面背日（非建筑遮挡）"]}),z.jsxs("div",{className:"bar-labels",children:[z.jsxs("span",{children:[za(Math.floor(i/60)),":",za(i%60)]}),z.jsxs("span",{children:[za(Math.floor(r/60)),":",za(r%60)]})]}),z.jsxs("table",{className:"segs",children:[z.jsx("thead",{children:z.jsxs("tr",{children:[z.jsx("th",{children:"状态"}),z.jsx("th",{children:"起"}),z.jsx("th",{children:"止"}),z.jsx("th",{children:"时长(min)"}),z.jsx("th",{children:"遮挡物"})]})}),z.jsx("tbody",{children:e.map((o,a)=>{var f,h;const l=!!((f=o.occluder_ids)!=null&&f.length)&&o.occluder_ids.every(d=>d==="FACADE_AWAY"),u=o.kind==="sunlit"?"sunlit":l?"away":"occluded";return z.jsxs("tr",{className:u,children:[z.jsx("td",{children:o.kind==="sunlit"?"可照":l?"窗面背日":"遮挡"}),z.jsx("td",{children:o.start.slice(11,16)}),z.jsx("td",{children:o.end.slice(11,16)}),z.jsx("td",{children:o.duration_min}),z.jsx("td",{children:((h=o.occluder_ids)==null?void 0:h.join(", "))??""})]},a)})})]})]})}function M1({single:t}){if(!t)return z.jsx("div",{className:"muted small",children:"选择时刻或输入角度后显示：射线起终点、最近遮挡物、命中面索引。"});const e=t.trace;return z.jsx("table",{className:"kv",children:z.jsxs("tbody",{children:[z.jsxs("tr",{children:[z.jsx("td",{children:"时刻"}),z.jsx("td",{children:t.when??"（解析射线，无时刻）"})]}),z.jsxs("tr",{children:[z.jsx("td",{children:"高度角 / 方位角"}),z.jsxs("td",{children:[e.elevation.toFixed(2),"° / ",e.azimuth.toFixed(2),"°（真北顺时针）"]})]}),z.jsxs("tr",{children:[z.jsx("td",{children:"窗面朝向判定"}),z.jsx("td",{children:e.facade_faces_sun==null?"—":e.facade_faces_sun?"太阳位于窗外侧":"窗面背日（不计可照）"})]}),z.jsxs("tr",{children:[z.jsx("td",{children:"是否遮挡"}),z.jsx("td",{children:z.jsx("b",{children:e.occluded?"是":"否"})})]}),e.nearest&&z.jsxs(z.Fragment,{children:[z.jsxs("tr",{children:[z.jsx("td",{children:"遮挡物"}),z.jsxs("td",{children:[z.jsx("b",{children:e.nearest.building_id})," · ",e.nearest.building_name]})]}),z.jsxs("tr",{children:[z.jsx("td",{children:"命中面索引"}),z.jsxs("td",{children:[e.nearest.face_index,"（可回查该建筑三角网）"]})]}),z.jsxs("tr",{children:[z.jsx("td",{children:"命中点 ENU(m)"}),z.jsx("td",{children:e.nearest.hit_point_enu.join(", ")})]}),z.jsxs("tr",{children:[z.jsx("td",{children:"命中距离(m)"}),z.jsx("td",{children:e.nearest.distance_m})]})]}),e.all_hits&&e.all_hits.length>1&&z.jsxs("tr",{children:[z.jsx("td",{children:"全部命中"}),z.jsx("td",{children:e.all_hits.map(n=>`${n.building_id}@${n.distance_m}m`).join("；")})]})]})})}mc.createRoot(document.getElementById("root")).render(z.jsx(Mv.StrictMode,{children:z.jsx(y1,{})}));
