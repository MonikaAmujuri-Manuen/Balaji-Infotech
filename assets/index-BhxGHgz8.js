var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function ee(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return ee(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function O(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?O(``+e.key):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ie(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=ie(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=ie(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ie(re(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ae(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},A={map:ae,forEach:function(e,t,n){ae(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ae(e,function(){t++}),t},toArray:function(e){return ae(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=A,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ee(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ee(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,k)}catch(e){k(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.6`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&ne(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function ee(){return g?!0:!(e.unstable_now()-T<w)}function E(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ne(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var O=new MessageChannel,te=O.port2;O.port1.onmessage=E,D=function(){te.postMessage(null)}}else D=function(){_(E,0)};function ne(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ne(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for(`react.element`),g=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),ee=Symbol.for(`react.suspense_list`),E=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),O=Symbol.for(`react.activity`),te=Symbol.for(`react.memo_cache_sentinel`),ne=Symbol.iterator;function re(e){return typeof e!=`object`||!e?null:(e=ne&&e[ne]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case ee:return`SuspenseList`;case O:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case E:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var oe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function de(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function j(e,t){le++,ce[le]=e.current,e.current=t}var fe=ue(null),pe=ue(null),me=ue(null),he=ue(null);function ge(e,t){switch(j(me,t),j(pe,e),j(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}de(fe),j(fe,e)}function _e(){de(fe),de(pe),de(me)}function ve(e){e.memoizedState!==null&&j(he,e);var t=fe.current,n=Ud(t,e.type);t!==n&&(j(pe,e),j(fe,n))}function ye(e){pe.current===e&&(de(fe),de(pe)),he.current===e&&(de(he),$f._currentValue=se)}var be,xe;function Se(e){if(be===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);be=t&&t[1]||``,xe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+be+e+xe}var Ce=!1;function we(e,t){if(!e||Ce)return``;Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Se(n):``}function Te(e,t){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se(`Lazy`);case 13:return e.child!==t&&t!==null?Se(`Suspense Fallback`):Se(`Suspense`);case 19:return Se(`SuspenseList`);case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Se(`Activity`);default:return``}}function Ee(e){try{var t=``,n=null;do t+=Te(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,ke=t.unstable_cancelCallback,Ae=t.unstable_shouldYield,je=t.unstable_requestPaint,Me=t.unstable_now,Ne=t.unstable_getCurrentPriorityLevel,Pe=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,Ie=t.unstable_NormalPriority,Le=t.unstable_LowPriority,Re=t.unstable_IdlePriority,ze=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function Ue(e){if(typeof ze==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=A.p;return e===0?(e=window.event,e===void 0?32:hp(e.type)):e}function dt(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[pt])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return De.call(Nt,e)?!0:De.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(xu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,`passive`,{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=f({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=f({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=En(f({},Pn,{dataTransfer:0})),Ln=En(f({},kn,{relatedTarget:0})),Rn=En(f({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=En(f({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=En(f({},Dn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=En(f({},kn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=En(f({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=En(f({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=En(f({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=En(f({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=En(f({},Dn,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=gn&&`CompositionEvent`in window,er=null;gn&&`documentMode`in document&&(er=document.documentMode);var tr=gn&&`TextEvent`in window&&!er,nr=gn&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function M(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var or=!1;function sr(e,t){switch(e){case`compositionend`:return ar(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function cr(e,t){if(or)return e===`compositionend`||!$n&&M(e,t)?(e=Sn(),xn=bn=yn=null,or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!lr[e.type]:t===`textarea`}function dr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Dd(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function mr(e){bd(e,0)}function hr(e){if(Ht(wt(e)))return e}function gr(e,t){if(e===`change`)return t}var _r=!1;if(gn){var vr;if(gn){var yr=`oninput`in document;if(!yr){var br=document.createElement(`div`);br.setAttribute(`oninput`,`return;`),yr=typeof br.oninput==`function`}vr=yr}else vr=!1;_r=vr&&(!document.documentMode||9<document.documentMode)}function xr(){fr&&(fr.detachEvent(`onpropertychange`,Sr),pr=fr=null)}function Sr(e){if(e.propertyName===`value`&&hr(pr)){var t=[];dr(t,pr,e,ln(e)),mn(mr,t)}}function Cr(e,t,n){e===`focusin`?(xr(),fr=t,pr=n,fr.attachEvent(`onpropertychange`,Sr)):e===`focusout`&&xr()}function wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return hr(pr)}function Tr(e,t){if(e===`click`)return hr(t)}function Er(e,t){if(e===`input`||e===`change`)return hr(t)}function Dr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Or=typeof Object.is==`function`?Object.is:Dr;function kr(e,t){if(Or(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!Or(e[i],t[i]))return!1}return!0}function Ar(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n=Ar(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ar(n)}}function Mr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Fr=gn&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function Br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==Ut(r)||(r=Ir,`selectionStart`in r&&Pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&kr(Rr,r)||(Rr=r,r=Dd(Lr,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Hr={animationend:Vr(`Animation`,`AnimationEnd`),animationiteration:Vr(`Animation`,`AnimationIteration`),animationstart:Vr(`Animation`,`AnimationStart`),transitionrun:Vr(`Transition`,`TransitionRun`),transitionstart:Vr(`Transition`,`TransitionStart`),transitioncancel:Vr(`Transition`,`TransitionCancel`),transitionend:Vr(`Transition`,`TransitionEnd`)},Ur={},Wr={};gn&&(Wr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),`TransitionEvent`in window||delete Hr.transitionend.transition);function Gr(e){if(Ur[e])return Ur[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wr)return Ur[e]=t[n];return e}var Kr=Gr(`animationend`),qr=Gr(`animationiteration`),Jr=Gr(`animationstart`),Yr=Gr(`transitionrun`),Xr=Gr(`transitionstart`),Zr=Gr(`transitioncancel`),Qr=Gr(`transitionend`),$r=new Map,ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ei.push(`scrollEnd`);function ti(e,t){$r.set(e,t),kt(t,[e])}var ni=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ri=[],ii=0,ai=0;function oi(){for(var e=ii,t=ai=ii=0;t<e;){var n=ri[t];ri[t++]=null;var r=ri[t];ri[t++]=null;var i=ri[t];ri[t++]=null;var a=ri[t];if(ri[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ui(n,i,a)}}function si(e,t,n,r){ri[ii++]=e,ri[ii++]=t,ri[ii++]=n,ri[ii++]=r,ai|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ci(e,t,n,r){return si(e,t,n,r),di(e)}function li(e,t){return si(e,null,null,t),di(e)}function ui(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function di(e){if(50<fu)throw fu=0,pu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fi={};function pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,t,n,r){return new pi(e,t,n,r)}function hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gi(e,t){var n=e.alternate;return n===null?(n=mi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _i(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)hi(e)&&(s=1);else if(typeof e==`string`)s=Wf(e,n,fe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case O:return e=mi(31,n,t,a),e.elementType=O,e.lanes=o,e;case y:return yi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=mi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=mi(13,n,t,a),e.elementType=T,e.lanes=o,e;case ee:return e=mi(19,n,t,a),e.elementType=ee,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case E:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=mi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function yi(e,t,n,r){return e=mi(7,e,r,t),e.lanes=n,e}function bi(e,t,n){return e=mi(6,e,null,t),e.lanes=n,e}function xi(e){var t=mi(18,null,null,0);return t.stateNode=e,t}function Si(e,t,n){return t=mi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ci=new WeakMap;function wi(e,t){if(typeof e==`object`&&e){var n=Ci.get(e);return n===void 0?(t={value:e,source:t,stack:Ee(t)},Ci.set(e,t),t):n}return{value:e,source:t,stack:Ee(t)}}var Ti=[],Ei=0,Di=null,Oi=0,ki=[],Ai=0,ji=null,Mi=1,Ni=``;function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=Di,Di=e,Oi=t}function Fi(e,t,n){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,ji=e;var r=Mi;e=Ni;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mi=1<<32-We(t)+i|n<<i|r,Ni=a+e}else Mi=1<<a|n<<i|r,Ni=e}function Ii(e){e.return!==null&&(Pi(e,1),Fi(e,1,0))}function Li(e){for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null;for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Ni=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null}function Ri(e,t){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,Mi=t.id,Ni=t.overflow,ji=e}var zi=null,N=null,P=!1,Bi=null,Vi=!1,Hi=Error(i(519));function Ui(e){throw Yi(wi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Hi}function Wi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Z(`cancel`,t),Z(`close`,t);break;case`iframe`:case`object`:case`embed`:Z(`load`,t);break;case`video`:case`audio`:for(n=0;n<vd.length;n++)Z(vd[n],t);break;case`source`:Z(`error`,t);break;case`img`:case`image`:case`link`:Z(`error`,t),Z(`load`,t);break;case`details`:Z(`toggle`,t);break;case`input`:Z(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Z(`invalid`,t);break;case`textarea`:Z(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Nd(t.textContent,n)?(r.popover!=null&&(Z(`beforetoggle`,t),Z(`toggle`,t)),r.onScroll!=null&&Z(`scroll`,t),r.onScrollEnd!=null&&Z(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Ui(e,!0)}function Gi(e){for(zi=e.return;zi;)switch(zi.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:zi=zi.return}}function Ki(e){if(e!==zi)return!1;if(!P)return Gi(e),P=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Wd(e.type,e.memoizedProps)),n=!n),n&&N&&Ui(e),Gi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=df(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=df(e)}else t===27?(t=N,Qd(e.type)?(e=uf,uf=null,N=e):N=t):N=zi?lf(e.stateNode.nextSibling):null;return!0}function qi(){N=zi=null,P=!1}function Ji(){var e=Bi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Bi=null),e}function Yi(e){Bi===null?Bi=[e]:Bi.push(e)}var Xi=ue(null),Zi=null,Qi=null;function $i(e,t,n){j(Xi,t._currentValue),t._currentValue=n}function ea(e){e._currentValue=Xi.current,de(Xi)}function ta(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function na(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ta(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ta(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ra(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Or(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===he.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[$f]:e.push($f))}a=a.return}e!==null&&na(t,e,n,r),t.flags|=262144}function ia(e){for(e=e.firstContext;e!==null;){if(!Or(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function aa(e){Zi=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oa(e){return ca(Zi,e)}function sa(e,t){return Zi===null&&aa(e),ca(e,t)}function ca(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qi===null){if(e===null)throw Error(i(308));Qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qi=Qi.next=t;return n}var la=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ua=t.unstable_scheduleCallback,da=t.unstable_NormalPriority,fa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new la,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&ua(da,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=fd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=k.S;k.S=function(e,t){tu=Me(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=ue(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function Ta(e,t){t===null?j(Ca,Ca.current):j(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:fa._currentValue,pool:e}}var Da=Error(i(460)),Oa=Error(i(474)),ka=Error(i(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(i(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(i(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=gi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&Na(i)===t.type)?(t=a(t,n.props),Ba(t,n),t.return=e,t):(t=vi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case g:return n=vi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=Si(t,e.mode,n),t.return=e,t;case D:return t=Na(t),f(e,t,n)}if(oe(t)||re(t))return t=yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===C)return f(e,sa(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case g:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=Na(n),p(e,t,n,r)}if(oe(n)||re(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===C)return p(e,t,sa(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case g:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=Na(r),m(e,t,n,r,i)}if(oe(r)||re(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===C)return m(e,t,n,sa(t,r),i);Va(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),P&&Pi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return P&&Pi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),P&&Pi(i,h),l}function _(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),P&&Pi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return P&&Pi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),P&&Pi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case g:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&Na(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ba(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=yi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=vi(o.type,o.key,o.props,null,e.mode,c),Ba(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Si(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=Na(o),b(e,r,o,c)}if(oe(o))return h(e,r,o,c);if(re(o)){if(l=re(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),_(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,za(o),c);if(o.$$typeof===C)return b(e,r,sa(e,o),c);Va(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=mi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=di(e),ui(e,null,n),t}return si(e,r,t,n),di(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(J&p)===p:(r&p)===p){p!==0&&p===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:Ga=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=ue(null),io=ue(0);function ao(e,t){e=Wl,j(io,e),j(ro,t),Wl=e|t.baseLanes}function oo(){j(io,Wl),j(ro,ro.current)}function so(){Wl=io.current,de(ro),de(io)}var co=ue(null),lo=null;function uo(e){var t=e.alternate;j(mo,mo.current&1),j(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){j(mo,mo.current),j(co,e),lo===null&&(lo=e)}function F(e){e.tag===22?(j(mo,mo.current),j(co,e),lo===null&&(lo=e)):po(e)}function po(){j(mo,mo.current),j(co,co.current)}function I(e){de(co),lo===e&&(lo=null),de(mo)}var mo=ue(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=0,L=null,R=null,_o=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Or(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return go=a,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Bs:Vs,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){k.H=zs;var t=R!==null&&R.next!==null;if(go=0,_o=R=L=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ia(e)&&(ic=!0))}function Oo(e,t,n,r){L=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,_o=R=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=Hs,o=t(n,r)}while(yo);return o}function ko(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(R===null?null:R.memoizedState)!==e&&(L.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}go=0,_o=R=L=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _o===null?L.memoizedState=_o=e:_o=_o.next=e,_o}function Po(){if(R===null){var e=L.alternate;e=e===null?null:e.memoizedState}else e=R.next;var t=_o===null?L.memoizedState:_o.next;if(t!==null)_o=t,R=e;else{if(e===null)throw L.alternate===null?Error(i(467)):Error(i(310));R=e,e={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},_o===null?L.memoizedState=_o=e:_o=_o.next=e}return _o}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=L,(_o===null?t.memoizedState:_o.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Bs:Vs),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===C)return oa(e)}throw Error(i(438,String(e)))}function Ro(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=L.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=te;return t.index++,n}function B(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(Po(),R,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(go&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((go&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,L.lanes|=p,Kl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,L.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Or(o,e.memoizedState)&&(ic=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=Po(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Or(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=L,a=Po(),o=P;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Or((R||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,fs(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||_o!==null&&_o.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||go&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=Fo(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Or(e,n)}catch{return!0}}function qo(e){var t=li(e,2);t!==null&&gu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:B,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,R,typeof r==`function`?r:B)}function Xo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(P){var n=K.formState;if(n!==null){a:{var r=L;if(P){if(N){b:{for(var i=N,a=Vi;i.nodeType!==8;){if(!a){i=null;break b}if(i=lf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){N=lf(i.nextSibling),r=i.data===`F!`;break a}}Ui(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Ns.bind(null,L,r),r.dispatch=n,r=Jo(!1),a=Fs.bind(null,L,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,L,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(Po(),R,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(B)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Da?ka:e}else r=t;t=Po();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=Po(),n=R;if(n!==null)return as(t,n,e);Po(),t=t.memoizedState,n=Po();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=L.updateQueue,t===null&&(t=Fo(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function V(){return Po().memoizedState}function ls(e,t,n,r){var i=No();L.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function us(e,t,n,r){var i=Po();r=r===void 0?null:r;var a=i.memoizedState.inst;R!==null&&r!==null&&To(r,R.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(L.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function ds(e,t){ls(8390656,8,e,t)}function fs(e,t){us(2048,8,e,t)}function ps(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=Fo(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ms(e){var t=Po().memoizedState;return ps({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function hs(e,t){return us(4,2,e,t)}function gs(e,t){return us(4,4,e,t)}function _s(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vs(e,t,n){n=n==null?null:n.concat([e]),us(4,4,_s.bind(null,t,e),n)}function ys(){}function bs(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xs(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function Ss(e,t,n){return n===void 0||go&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=hu(),L.lanes|=e,Kl|=e,n)}function Cs(e,t,n,r){return Or(n,t)?n:ro.current===null?!(go&42)||go&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=hu(),L.lanes|=e,Kl|=e,t):(e=Ss(e,n,r),Or(e,t)||(ic=!0),e)}function ws(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Fs(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,xa(c,r),mu(e)):Ps(e,t,r,mu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},mu())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function Ts(){}function Es(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ds(e).queue;ws(e,a,t,se,n===null?Ts:function(){return H(e),n(r)})}function Ds(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:B,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:B,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function H(e){var t=Ds(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},mu())}function Os(){return oa($f)}function ks(){return Po().memoizedState}function As(){return Po().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=mu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(gu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=mu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ci(e,t,n,r),n!==null&&(gu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,mu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Or(s,o))return si(e,t,i,0),K===null&&oi(),!1}catch{}if(n=ci(e,t,i,r),n!==null)return gu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:fd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ci(e,n,r,2),t!==null&&gu(t,e,2)}function Is(e){var t=e.alternate;return e===L||t!==null&&t===L}function Ls(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var zs={readContext:oa,use:Lo,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};zs.useEffectEvent=z;var Bs={readContext:oa,use:Lo,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:oa,useEffect:ds,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ls(4194308,4,_s.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){ls(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,L,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Ns.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ys,useDeferredValue:function(e,t){return Ss(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=ws.bind(null,L,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=L,a=No();if(P){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ds(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(P){var n=Ni,r=Mi;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return No().memoizedState=js.bind(null,L)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:oa,use:Lo,useCallback:bs,useContext:oa,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:zo,useRef:V,useState:function(){return zo(B)},useDebugValue:ys,useDeferredValue:function(e,t){return Cs(Po(),R.memoizedState,e,t)},useTransition:function(){var e=zo(B)[0],t=Po().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Ho,useId:ks,useHostTransitionStatus:Os,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(Po(),R,e,t)},useMemoCache:Ro,useCacheRefresh:As};Vs.useEffectEvent=ms;var Hs={readContext:oa,use:Lo,useCallback:bs,useContext:oa,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:Vo,useRef:V,useState:function(){return Vo(B)},useDebugValue:ys,useDeferredValue:function(e,t){var n=Po();return R===null?Ss(n,e,t):Cs(n,R.memoizedState,e,t)},useTransition:function(){var e=Vo(B)[0],t=Po().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Ho,useId:ks,useHostTransitionStatus:Os,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=Po();return R===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,R,e,t)},useMemoCache:Ro,useCacheRefresh:As};Hs.useEffectEvent=ms;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(gu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(gu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(gu(t,e,n),Xa(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ni(e)}function Ys(e){console.error(e)}function Xs(e){ni(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ja(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ra(t,n,a,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Ou():n.alternate===null&&Gl===0&&(Gl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ku(e,r,a)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ku(e,r,a)),!1}throw Error(i(435,n.tag))}return Ku(e,r,a),Ou(),!1}if(P)return t=co.current,t===null?(r!==Hi&&(t=Error(i(423),{cause:r}),Yi(wi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=wi(r,n),a=$s(e.stateNode,r,a),Za(e,a),Gl!==4&&(Gl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Hi&&(e=Error(i(422),{cause:r}),Yi(wi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=wi(o,n),Zl===null?Zl=[o]:Zl.push(o),Gl!==4&&(Gl=2),t===null)return!0;r=wi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Za(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return aa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!ic?(jo(e,t,i),Ac(e,t,i)):(P&&s&&Ii(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!hi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?kr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=gi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),F(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),oo(),po(t)):(Ta(t,a.cachePool),ao(t,a),po(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:fa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),oo(),F(t),e!==null&&ra(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ua(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,I(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(P){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(fo(t),(e=N)?(e=af(e,Vi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(fo(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||ra(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,li(e,s),gu(r,e,s),rc;Ou(),t=pc(e,t,n)}else e=o.treeContext,N=lf(s.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=fc(t,r),t.flags|=4096;return t}return e=gi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return aa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!ic?(jo(e,t,i),Ac(e,t,i)):(P&&r&&Ii(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return aa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!ic?(jo(e,t,a),Ac(e,t,a)):(P&&r&&Ii(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(aa(t),t.stateNode===null){var a=fi,o=n.contextType;typeof o==`object`&&o&&(a=oa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?oa(o):fi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=fi,typeof u==`object`&&u&&(o=oa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ga||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=fi,typeof l==`object`&&l&&(c=oa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&ia(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ga||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ia(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return qi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ea()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(mo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(P){if(a?uo(t):po(t),(e=N)?(e=af(e,Vi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(po(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=yi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(uo(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(uo(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(po(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=yi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(po(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Yi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ra(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,li(e,r),gu(s,e,r),rc;of(c)||Ou(),t=Ec(e,t,n)}else of(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,N=lf(c.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(po(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=gi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=yi(c,a,n,null),c.flags|=2):c=gi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ea():(l=fa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=gi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=mi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ua(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ta(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=mo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,j(mo,o),ac(e,t,r,n),r=P?Oi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ra(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ia(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:ge(t,t.stateNode.containerInfo),$i(t,fa,e.memoizedState.cache),qi();break;case 27:case 5:ve(t);break;case 4:ge(t,t.stateNode.containerInfo);break;case 10:$i(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ra(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(mo,mo.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:$i(t,fa,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,P&&t.flags&1048576&&Fi(t,Oi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)hi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===E){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=ae(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ge(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,qa(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,$i(t,fa,r),r!==o.cache&&na(t,[fa],n,!0),$a(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=wi(Error(i(424)),t),Yi(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(N=lf(e.firstChild),zi=t,P=!0,Bi=null,Vi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(qi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=Af(t.type,null,t.pendingProps,null))?t.memoizedState=n:P||(n=t.type,e=t.pendingProps,r=Vd(me.current).createElement(n),r[pt]=t,r[mt]=e,Fd(r,n,e),Et(r),t.stateNode=r):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ve(t),e===null&&P&&(r=t.stateNode=pf(t.type,t.pendingProps,me.current),zi=t,Vi=!0,a=N,Qd(t.type)?(uf=a,N=lf(r.firstChild)):N=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((a=r=N)&&(r=nf(r,t.type,t.pendingProps,Vi),r===null?a=!1:(t.stateNode=r,zi=t,N=lf(r.firstChild),Vi=!1,a=!0)),a||Ui(t)),ve(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),$f._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&P&&((e=n=N)&&(n=rf(n,t.pendingProps,Vi),n===null?e=!1:(t.stateNode=n,zi=t,N=null,e=!0)),e||Ui(t)),null;case 13:return Cc(e,t,n);case 4:return ge(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,$i(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,aa(t),a=oa(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return aa(t),r=oa(fa),e===null?(a=wa(),a===null&&(a=K,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ka(t),$i(t,fa,a)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,$i(t,fa,r),r!==a.cache&&na(t,[fa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),$i(t,fa,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Tu())e.flags|=8192;else throw Pa=Aa,Oa}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t))if(Tu())e.flags|=8192;else throw Pa=Aa,Oa}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,Xl|=t)}function Rc(e,t){if(!P)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Li(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ea(fa),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ji())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(ye(t),n=me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=fe.current,Ki(t)?Wi(t,e):(e=pf(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(ye(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=fe.current,Ki(t))Wi(t,o);else{var s=Vd(me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Fd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=me.current,Ki(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=zi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Nd(e.nodeValue,n)),e||Ui(t,!0)}else e=Vd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ki(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(I(t),t):(I(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(I(t),t):(I(t),null)}return I(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return _e(),e===null&&Cd(t.stateNode.containerInfo),U(t),null;case 10:return ea(t.type),U(t),null;case 19:if(de(mo),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(Gl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ho(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_i(n,e),n=n.sibling;return j(mo,mo.current&1|2),P&&Pi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Me()>nu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=ho(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!P)return U(t),null}else 2*Me()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Me(),e.sibling=null,n=mo.current,j(mo,a?n&1|2:n&1),P&&Pi(t,r.treeForkCount),e);case 22:case 23:return I(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&de(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ea(fa),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Li(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ea(fa),_e(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ye(t),null;case 31:if(t.memoizedState!==null){if(I(t),t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(I(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(mo),null;case 4:return _e(),null;case 10:return ea(t.type),null;case 22:case 23:return I(t),so(),e!==null&&de(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ea(fa),null;case 25:return null;default:return null}}function Vc(e,t){switch(Li(t),t.tag){case 3:ea(fa),_e();break;case 26:case 27:case 5:ye(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&I(t);break;case 13:I(t);break;case 19:de(mo);break;case 10:ea(t.type);break;case 22:case 23:I(t),so(),e!==null&&de(Ca);break;case 24:ea(fa)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){X(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){X(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){X(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){X(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){X(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){X(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){X(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){X(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){X(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[mt]=t}catch(t){X(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[pt]=e,t[mt]=n}catch(t){X(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,zd=cp,e=Nr(e),Pr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},cp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){X(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:tf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){X(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){X(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){X(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yu.bind(null,n),cf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Qd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),mf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){X(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){X(n,t,e)}break;case 18:W!==null&&(ll?(e=W,$d(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):$d(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){X(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){X(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Xu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Qd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Fd(o,r,n),o[pt]=e,Et(o),r=o;break a;case`link`:var s=Hf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Hf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,Et(o),r=o}e.stateNode=r}else Uf(a,e.type,e.stateNode);else e.stateNode=Lf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Uf(a,e.type,e.stateNode):Lf(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){X(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){X(e,e.return,t)}}break;case 3:if(Vf=null,a=_l,_l=_f(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){X(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=_f(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Me()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){X(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){X(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?ef(m,!0):ef(l.stateNode,!1)}catch(e){X(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){X(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:mf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){X(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){X(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){X(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Kf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=_f(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=oa(fa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return oa(fa).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,au=0,ou=null,su=null,cu=0,lu=0,uu=null,du=null,fu=0,pu=null;function mu(){return G&2&&J!==0?J&-J:k.T===null?ut():fd()}function hu(){if(Yl===0)if(!(J&536870912)||P){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),Yl=e}else Yl=536870912;return e=co.current,e!==null&&(e.flags|=32),Yl}function gu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Cu(e,0),bu(e,J,Yl,!1)),rt(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(ql|=n),Gl===4&&bu(e,J,Yl,!1)),id(e))}function _u(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||$e(e,t),a=r?ju(e,t):ku(e,t,!0),o=r;do{if(a===0){Hl&&!r&&bu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!yu(n)){a=ku(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Cu(c,s).flags|=256),s=ku(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Cu(e,0),bu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:bu(r,t,Yl,!Vl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Me(),10<a)){if(bu(r,t,Yl,!Vl),Qe(r,0,!0)!==0)break a;cu=t,r.timeoutHandle=qd(vu.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,`Throttled`,-0,0),a);break a}vu(r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,null,-0,0)}}break}while(1);id(e)}function vu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Ml(t,a,d);var m=(a&62914560)===a?eu-Me():(a&4194048)===a?tu-Me():0;if(m=Jf(d,m),m!==null){cu=a,e.cancelPendingCommit=m(Ru.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),bu(e,a,o,!l);return}}Ru(e,t,a,n,r,i,o,s,c)}function yu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Or(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function xu(){return G&6?!0:(ad(0,!1),!1)}function Su(){if(q!==null){if(Y===0)var e=q.return;else e=q,Qi=Zi=null,Mo(e),La=null,Ra=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Cu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),cu=0,Su(),K=e,q=n=gi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=$e(e,t),Ul=!1,Xl=Yl=Jl=ql=Kl=Gl=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,oi(),n}function wu(e,t){L=null,k.H=zs,t===Da||t===ka?(t=Fa(),Y=3):t===Oa?(t=Fa(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(Gl=1,Zs(e,wi(t,e.current)))}function Tu(){var e=co.current;return e===null?!0:(J&4194048)===J?lo===null:(J&62914560)===J||J&536870912?e===lo:!1}function Eu(){var e=k.H;return k.H=zs,e===null?zs:e}function Du(){var e=k.A;return k.A=Rl,e}function Ou(){Gl=4,Vl||(J&4194048)!==J&&co.current!==null||(Hl=!0),!(Kl&134217727)&&!(ql&134217727)||K===null||bu(K,J,Yl,!1)}function ku(e,t,n){var r=G;G|=2;var i=Eu(),a=Du();(K!==e||J!==t)&&(ru=null,Cu(e,t)),t=!1;var o=Gl;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:Su(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Fu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Fu(e,s,c,l)}}Au(),o=Gl;break}catch(t){wu(e,t)}while(1);return t&&e.shellSuspendCounter++,Qi=Zi=null,G=r,k.H=i,k.A=a,q===null&&(K=null,J=0,oi()),o}function Au(){for(;q!==null;)Nu(q)}function ju(e,t){var n=G;G|=2;var r=Eu(),a=Du();K!==e||J!==t?(ru=null,nu=Me()+500,Cu(e,t)):Hl=$e(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Fu(e,t,o,1);break;case 2:case 9:if(ja(o)){Y=0,Bl=null,Pu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),id(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ja(o)?(Y=0,Bl=null,Pu(t)):(Y=0,Bl=null,Fu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Gf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Iu(u))}break b}}Y=0,Bl=null,Fu(e,t,o,5);break;case 6:Y=0,Bl=null,Fu(e,t,o,6);break;case 8:Su(),Gl=6;break a;default:throw Error(i(462))}}Mu();break}catch(t){wu(e,t)}while(1);return Qi=Zi=null,k.H=r,k.A=a,G=n,q===null?(K=null,J=0,oi(),Gl):0}function Mu(){for(;q!==null&&!Ae();)Nu(q)}function Nu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Iu(e):q=t}function Pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Vc(n,t),t=q=_i(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Iu(e):q=t}function Fu(e,t,n,r){Qi=Zi=null,Mo(t),La=null,Ra=0;var i=t.return;try{if(nc(e,i,t,n,J)){Gl=1,Zs(e,wi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;Gl=1,Zs(e,wi(n,e.current)),q=null;return}t.flags&32768?(P||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Lu(t,e)):Iu(t)}function Iu(e){var t=e;do{if(t.flags&32768){Lu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);Gl===0&&(Gl=5)}function Lu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);Gl=6,q=null}function Ru(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Uu();while(au!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ai,it(e,n,o,s,c,l),e===K&&(q=K=null,J=0),su=t,ou=e,cu=n,lu=o,uu=a,du=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Zu(Ie,function(){return Wu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=k.T,k.T=null,a=A.p,A.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,A.p=a,k.T=r}}au=1,zu(),Bu(),Vu()}}function zu(){if(au===1){au=0;var e=ou,t=su,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=G;G|=4;try{vl(t,e);var a=Bd,o=Nr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Mr(s.ownerDocument.documentElement,s)){if(c!==null&&Pr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=jr(s,h),v=jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}cp=!!zd,Bd=zd=null}finally{G=i,A.p=r,k.T=n}}e.current=t,au=2}}function Bu(){if(au===2){au=0;var e=ou,t=su,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,A.p=r,k.T=n}}au=3}}function Vu(){if(au===4||au===3){au=0,je();var e=ou,t=su,n=cu,r=du;t.subtreeFlags&10256||t.flags&10256?au=5:(au=0,su=ou=null,Hu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),lt(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=A.p,A.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,A.p=i}}cu&3&&Uu(),id(e),i=e.pendingLanes,n&261930&&i&42?e===pu?fu++:(fu=0,pu=e):fu=0,ad(0,!1)}}function Hu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Uu(){return zu(),Bu(),Vu(),Wu()}function Wu(){if(au!==5)return!1;var e=ou,t=lu;lu=0;var n=lt(cu),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=uu,uu=null;var o=ou,s=cu;if(au=0,su=ou=null,cu=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,ad(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{A.p=a,k.T=r,Hu(e,t)}}function Gu(e,t,n){t=wi(n,t),t=$s(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(rt(e,2),id(e))}function X(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=wi(n,e),n=ec(2),r=Ya(t,n,2),r!==null&&(tc(n,r,t,e),rt(r,2),id(r));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=qu.bind(null,e,t,n),t.then(e,e))}function qu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(Gl===4||Gl===3&&(J&62914560)===J&&300>Me()-eu?!(G&2)&&Cu(e,0):Jl|=n,Xl===J&&(Xl=0)),id(e)}function Ju(e,t){t===0&&(t=tt()),e=li(e,t),e!==null&&(rt(e,t),id(e))}function Yu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Xu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ju(e,n)}function Zu(e,t){return Oe(e,t)}var Qu=null,$u=null,ed=!1,td=!1,nd=!1,rd=0;function id(e){e!==$u&&e.next===null&&($u===null?Qu=$u=e:$u=$u.next=e),td=!0,ed||(ed=!0,dd())}function ad(e,t){if(!nd&&td){nd=!0;do for(var n=!1,r=Qu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ud(r,a))}else a=J,a=Qe(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,ud(r,a));r=r.next}while(n);nd=!1}}function od(){sd()}function sd(){td=ed=!1;var e=0;rd!==0&&Kd()&&(e=rd);for(var t=Me(),n=null,r=Qu;r!==null;){var i=r.next,a=cd(r,t);a===0?(r.next=null,n===null?Qu=i:n.next=i,i===null&&($u=n)):(n=r,(e!==0||a&3)&&(td=!0)),r=i}au!==0&&au!==5||ad(e,!1),rd!==0&&(rd=0)}function cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ke(r),lt(n)){case 2:case 8:n=Fe;break;case 32:n=Ie;break;case 268435456:n=Re;break;default:n=Ie}return r=ld.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function ld(e,t){if(au!==0&&au!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Uu()&&e.callbackNode!==n)return null;var r=J;return r=Qe(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(_u(e,r,t),cd(e,Me()),e.callbackNode!=null&&e.callbackNode===n?ld.bind(null,e):null)}function ud(e,t){if(Uu())return null;_u(e,t,!0)}function dd(){Xd(function(){G&6?Oe(Pe,od):sd()})}function fd(){if(rd===0){var e=_a;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),rd=e}return rd}function pd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function md(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=pd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?pd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rd!==0){var e=o?md(i,o):new FormData(i);Es(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?md(i,o):new FormData(i),Es(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var gd=0;gd<ei.length;gd++){var _d=ei[gd];ti(_d.toLowerCase(),`on`+(_d[0].toUpperCase()+_d.slice(1)))}ti(Kr,`onAnimationEnd`),ti(qr,`onAnimationIteration`),ti(Jr,`onAnimationStart`),ti(`dblclick`,`onDoubleClick`),ti(`focusin`,`onFocus`),ti(`focusout`,`onBlur`),ti(Yr,`onTransitionRun`),ti(Xr,`onTransitionStart`),ti(Zr,`onTransitionCancel`),ti(Qr,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var vd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),yd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(vd));function bd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}}}}function Z(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(wd(t,e,2,!1),n.add(r))}function xd(e,t,n){var r=0;t&&(r|=4),wd(n,e,r,t)}var Sd=`_reactListening`+Math.random().toString(36).slice(2);function Cd(e){if(!e[Sd]){e[Sd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(yd.has(t)||xd(t,!1,e),xd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sd]||(t[Sd]=!0,xd(`selectionchange`,!1,t))}}function wd(e,t,n,r){switch(hp(t)){case 2:var i=lp;break;case 8:i=up;break;default:i=dp}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Td(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=$r.get(e);if(c!==void 0){var l=On,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case Kr:case qr:case Jr:l=Rn;break;case Qr:l=Yn;break;case`scroll`:case`scrollend`:l=An;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Ed(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Od,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&kd(s,c,l,d,!1),u!==null&&f!==null&&kd(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=gr;else if(ur(c))if(_r)v=Er;else{v=wr;var y=Cr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=gr):v=Tr;if(v&&=v(e,r)){dr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(ur(y)||y.contentEditable===`true`)&&(Ir=y,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,Br(s,n,i);break;case`selectionchange`:if(Fr)break;case`keydown`:case`keyup`:Br(s,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else or?M(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(or||x!==`onCompositionStart`?x===`onCompositionEnd`&&or&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,or=!0)),y=Dd(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ar(n),b!==null&&(x.data=b)))),(b=tr?sr(e,n):cr(e,n))&&(x=Dd(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),hd(s,e,r,n,i)}bd(s,t)})}function Ed(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Ed(e,i,a)),i=hn(e,t),i!=null&&r.push(Ed(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Od(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Ed(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Ed(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ad=/\r\n?/g,jd=/\u0000|\uFFFD/g;function Md(e){return(typeof e==`string`?e:``+e).replace(Ad,`
`).replace(jd,``)}function Nd(e,t){return t=Md(t),Md(e)===t}function Q(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Q(e,t,`name`,a.name,a,null),Q(e,t,`formEncType`,a.formEncType,a,null),Q(e,t,`formMethod`,a.formMethod,a,null),Q(e,t,`formTarget`,a.formTarget,a,null)):(Q(e,t,`encType`,a.encType,a,null),Q(e,t,`method`,a.method,a,null),Q(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Z(`beforetoggle`,e),Z(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Pd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Z(`error`,e),Z(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,o,s,n,null)}}a&&Q(e,t,`srcSet`,n.srcSet,n,null),r&&Q(e,t,`src`,n.src,n,null);return;case`input`:Z(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Q(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Z(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Q(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Z(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Q(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Q(e,t,l,r,n,null)}return;case`dialog`:Z(`beforetoggle`,e),Z(`toggle`,e),Z(`cancel`,e),Z(`close`,e);break;case`iframe`:case`object`:Z(`load`,e);break;case`video`:case`audio`:for(r=0;r<vd.length;r++)Z(vd[r],e);break;case`image`:Z(`error`,e),Z(`load`,e);break;case`details`:Z(`toggle`,e);break;case`embed`:case`source`:case`link`:Z(`error`,e),Z(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Q(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Q(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Q(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Q(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Q(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Q(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Q(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Q(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Q(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Q(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Q(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Q(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Q(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e===Gd?!1:(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function Qd(e){return e===`head`}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)mf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,mf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&mf(e.ownerDocument.body);n=i}while(n);Pp(t)}function ef(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function tf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:tf(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lf(e.nextSibling),e===null)break}return null}function rf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lf(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lf(e.nextSibling),e===null))return null;return e}function of(e){return e.data===`$?`||e.data===`$~`}function sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var uf=null;function df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pf(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var hf=new Map,gf=new Set;function _f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vf=A.d;A.d={f:yf,r:bf,D:Cf,C:wf,L:Tf,m:Ef,X:Of,S:Df,M:kf};function yf(){var e=vf.f(),t=xu();return e||t}function bf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?H(t):vf.r(e)}var xf=typeof document>`u`?null:document;function Sf(e,t,n){var r=xf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),gf.has(i)||(gf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Cf(e){vf.D(e),Sf(`dns-prefetch`,e,null)}function wf(e,t){vf.C(e,t),Sf(`preconnect`,e,t)}function Tf(e,t,n){vf.L(e,t,n);var r=xf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=jf(e);break;case`script`:a=Ff(e)}hf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),hf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Mf(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Fd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Ef(e,t){vf.m(e,t);var n=xf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!hf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),hf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Df(e,t,n){vf.S(e,t,n);var r=xf;if(r&&e){var i=Tt(r).hoistableStyles,a=jf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Mf(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=hf.get(a))&&zf(e,n);var c=o=r.createElement(`link`);Et(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Rf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Of(e,t){vf.X(e,t);var n=xf;if(n&&e){var r=Tt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=f({src:e,async:!0},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),Et(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t){vf.M(e,t);var n=xf;if(n&&e){var r=Tt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),Et(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t,n,r){var a=(a=me.current)?_f(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=jf(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=jf(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Mf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),hf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hf.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function jf(e){return`href="`+Gt(e)+`"`}function Mf(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),Et(t),e.head.appendChild(t))}function Ff(e){return`[src="`+Gt(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Fd(r,`style`,a),Rf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=jf(n.href);var o=e.querySelector(Mf(a));if(o)return t.state.loading|=4,t.instance=o,Et(o),o;r=Nf(n),(a=hf.get(a))&&zf(r,a),o=(e.ownerDocument||e).createElement(`link`),Et(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Fd(o,`link`,r),t.state.loading|=4,Rf(o,n.precedence,e),t.instance=o;case`script`:return o=Ff(n.src),(a=e.querySelector(If(o)))?(t.instance=a,Et(a),a):(r=n,(a=hf.get(o))&&(r=f({},n),Bf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Et(a),Fd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Rf(r,n.precedence,e));return t.instance}function Rf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Vf=null;function Hf(e,t,n){if(Vf===null){var r=new Map,i=Vf=new Map;i.set(n,r)}else i=Vf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Wf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Gf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Kf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=jf(r.href),a=t.querySelector(Mf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Nf(r),(i=hf.get(i))&&zf(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Yf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var qf=0;function Jf(e,t){return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&qf===0&&(qf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xf=null;function Zf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xf=new Map,t.forEach(Qf,e),Xf=null,Yf.call(e))}function Qf(e,t){if(!(t.state.loading&4)){var n=Xf.get(e);if(n)var r=n.get(null);else{n=new Map,Xf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $f={$$typeof:C,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function ep(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function tp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ep(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=mi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function np(e){return e?(e=fi,e):fi}function rp(e,t,n,r,i,a){i=np(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(gu(n,e,t),Xa(n,e,t))}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ap(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function op(e){if(e.tag===13||e.tag===31){var t=li(e,67108864);t!==null&&gu(t,e,67108864),ap(e,67108864)}}function sp(e){if(e.tag===13||e.tag===31){var t=mu();t=ct(t);var n=li(e,t);n!==null&&gu(n,e,t),ap(e,t)}}var cp=!0;function lp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,dp(e,t,n,r)}finally{A.p=a,k.T=i}}function up(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,dp(e,t,n,r)}finally{A.p=a,k.T=i}}function dp(e,t,n,r){if(cp){var i=fp(r);if(i===null)Td(e,t,r,pp,n),wp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(wp(e,r),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}id(a),!(G&6)&&(nu=Me()+500,ad(0,!1))}}break;case 31:case 13:s=li(a,2),s!==null&&gu(s,a,2),xu(),ap(a,2)}if(a=fp(r),a===null&&Td(e,t,r,pp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Td(e,t,r,null,n)}}function fp(e){return e=ln(e),mp(e)}var pp=null;function mp(e){if(pp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pp=e,null}function hp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ne()){case Pe:return 2;case Fe:return 8;case Ie:case Le:return 32;case Re:return 268435456;default:return 32}default:return 32}}var gp=!1,_p=null,vp=null,yp=null,bp=new Map,xp=new Map,Sp=[],Cp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function wp(e,t){switch(e){case`focusin`:case`focusout`:_p=null;break;case`dragenter`:case`dragleave`:vp=null;break;case`mouseover`:case`mouseout`:yp=null;break;case`pointerover`:case`pointerout`:bp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:xp.delete(t.pointerId)}}function Tp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&op(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return _p=Tp(_p,e,t,n,r,i),!0;case`dragenter`:return vp=Tp(vp,e,t,n,r,i),!0;case`mouseover`:return yp=Tp(yp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return bp.set(a,Tp(bp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,xp.set(a,Tp(xp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=Ct(n),t!==null&&op(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){gp=!1,_p!==null&&Op(_p)&&(_p=null),vp!==null&&Op(vp)&&(vp=null),yp!==null&&Op(yp)&&(yp=null),bp.forEach(kp),xp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,gp||(gp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(mp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,Es(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}_p!==null&&jp(_p,e),vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp.forEach(t),xp.forEach(t);for(var n=0;n<Sp.length;n++){var r=Sp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sp.length&&(n=Sp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Sp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(mp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;rp(n,mu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rp(e.current,2,null,e,null,null),xu(),t[ht]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sp.length&&t!==0&&t<Sp[n].priority;n++);Sp.splice(n,0,e),n===0&&Dp(e)}};var Rp=n.version;if(Rp!==`19.2.6`)throw Error(i(527,Rp,`19.2.6`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{Ve=Bp.inject(zp),He=Bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,r,null,o,s,c,Fp),e[ht]=t.current,Cd(e),new Ip(t)}})),y=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()})),b=`modulepreload`,x=function(e){return`/Balaji-Infotech/`+e},S={},C=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=x(t,n),t in S)return;S[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:b,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},w=u(p(),1),T=`popstate`;function ee(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function E(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return re(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ie(t)}return oe(t,n,null,e)}function D(e,t){if(e===!1||e==null)throw Error(t)}function O(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function te(){return Math.random().toString(36).substring(2,10)}function ne(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function re(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ae(t):t,state:n,key:t&&t.key||r||te(),mask:i}}function ie({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ae(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function oe(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ee(e)?e:re(h.location,e,t);n&&n(r,e),l=u()+1;let d=ne(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ee(e)?e:re(h.location,e,t);n&&n(r,e),l=u();let i=ne(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return k(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(T,d),c=e,()=>{i.removeEventListener(T,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function k(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),D(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:ie(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function A(e,t,n=`/`){return se(e,t,n,!1)}function se(e,t,n,r,i){let a=Te((typeof t==`string`?ae(t):t).pathname||`/`,n);if(a==null)return null;let o=i??le(e),s=null,c=we(a);for(let e=0;s==null&&e<o.length;++e)s=xe(o[e],c,r);return s}function ce(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function le(e){let t=ue(e);return j(t),t}function ue(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;D(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Pe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(D(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ue(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ye(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of de(e.path))a(e,t,!0,n)}),t}function de(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=de(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function j(e){e.sort((e,t)=>e.score===t.score?be(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var fe=/^:[\w-]+$/,pe=3,me=2,he=1,ge=10,_e=-2,ve=e=>e===`*`;function ye(e,t){let n=e.split(`/`),r=n.length;return n.some(ve)&&(r+=_e),t&&(r+=me),n.filter(e=>!ve(e)).reduce((e,t)=>e+(fe.test(t)?pe:t===``?he:ge),r)}function be(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function xe(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Pe([a,u.pathname]),pathnameBase:Ie(Pe([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Pe([a,u.pathnameBase]))}return o}function Se(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ce(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ce(e,t=!1,n=!0){O(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function we(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return O(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Te(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function De(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ae(e):e,a;return n?(n=Ne(n),a=n.startsWith(`/`)?Oe(n.substring(1),`/`):Oe(n,t)):a=t,{pathname:a,search:Le(r),hash:Re(i)}}function Oe(e,t){let n=Fe(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ke(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ae(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function je(e){let t=Ae(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Me(e,t,n,r=!1){let i;typeof e==`string`?i=ae(e):(i={...e},D(!i.pathname||!i.pathname.includes(`?`),ke(`?`,`pathname`,`search`,i)),D(!i.pathname||!i.pathname.includes(`#`),ke(`#`,`pathname`,`hash`,i)),D(!i.search||!i.search.includes(`#`),ke(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=De(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ne=e=>e.replace(/\/\/+/g,`/`),Pe=e=>Ne(e.join(`/`)),Fe=e=>e.replace(/\/+$/,``),Ie=e=>Fe(e).replace(/^\/*/,`/`),Le=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Re=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,ze=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Be(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ve(e){return Pe(e.map(e=>e.route.path).filter(Boolean))||`/`}var He=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ue(e,t){let n=e;if(typeof n!=`string`||!Ee.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(He)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Te(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{O(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var We=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(We);var Ge=[`GET`,...We];new Set(Ge);var Ke=w.createContext(null);Ke.displayName=`DataRouter`;var qe=w.createContext(null);qe.displayName=`DataRouterState`;var Je=w.createContext(!1);function Ye(){return w.useContext(Je)}var Xe=w.createContext({isTransitioning:!1});Xe.displayName=`ViewTransition`;var Ze=w.createContext(new Map);Ze.displayName=`Fetchers`;var Qe=w.createContext(null);Qe.displayName=`Await`;var $e=w.createContext(null);$e.displayName=`Navigation`;var et=w.createContext(null);et.displayName=`Location`;var tt=w.createContext({outlet:null,matches:[],isDataRoute:!1});tt.displayName=`Route`;var nt=w.createContext(null);nt.displayName=`RouteError`;var rt=`REACT_ROUTER_ERROR`,it=`REDIRECT`,at=`ROUTE_ERROR_RESPONSE`;function ot(e){if(e.startsWith(`${rt}:${it}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function st(e){if(e.startsWith(`${rt}:${at}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new ze(t.status,t.statusText,t.data)}catch{}}function ct(e,{relative:t}={}){D(lt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=w.useContext($e),{hash:i,pathname:a,search:o}=gt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Pe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function lt(){return w.useContext(et)!=null}function ut(){return D(lt(),`useLocation() may be used only in the context of a <Router> component.`),w.useContext(et).location}var dt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ft(e){w.useContext($e).static||w.useLayoutEffect(e)}function pt(){let{isDataRoute:e}=w.useContext(tt);return e?Ft():mt()}function mt(){D(lt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=w.useContext(Ke),{basename:t,navigator:n}=w.useContext($e),{matches:r}=w.useContext(tt),{pathname:i}=ut(),a=JSON.stringify(je(r)),o=w.useRef(!1);return ft(()=>{o.current=!0}),w.useCallback((r,s={})=>{if(O(o.current,dt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Me(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Pe([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}w.createContext(null);function ht(){let{matches:e}=w.useContext(tt);return e[e.length-1]?.params??{}}function gt(e,{relative:t}={}){let{matches:n}=w.useContext(tt),{pathname:r}=ut(),i=JSON.stringify(je(n));return w.useMemo(()=>Me(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function _t(e,t){return vt(e,t)}function vt(e,t,n){D(lt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=w.useContext($e),{matches:i}=w.useContext(tt),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Lt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ut(),d;if(t){let e=typeof t==`string`?ae(t):t;D(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):A(e,{pathname:p});O(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),O(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Tt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Pe([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Pe([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?w.createElement(et.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function yt(){let e=Pt(),t=Be(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=w.createElement(w.Fragment,null,w.createElement(`p`,null,`💿 Hey developer 👋`),w.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,w.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,w.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),w.createElement(w.Fragment,null,w.createElement(`h2`,null,`Unexpected Application Error!`),w.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?w.createElement(`pre`,{style:i},n):null,o)}var bt=w.createElement(yt,null),xt=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=st(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:w.createElement(tt.Provider,{value:this.props.routeContext},w.createElement(nt.Provider,{value:e,children:this.props.component}));return this.context?w.createElement(Ct,{error:e},t):t}};xt.contextType=Je;var St=new WeakMap;function Ct({children:e,error:t}){let{basename:n}=w.useContext($e);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=ot(t.digest);if(e){let r=St.get(t);if(r)throw r;let i=Ue(e.location,n);if(He&&!St.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw St.set(t,n),n}return w.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function wt({routeContext:e,match:t,children:n}){let r=w.useContext(Ke);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(tt.Provider,{value:e},n)}function Tt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);D(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ve(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||bt,o&&(s<0&&c===0?(Lt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?w.createElement(n.route.Component,null):n.route.element?n.route.element:e,w.createElement(wt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?w.createElement(xt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Et(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dt(e){let t=w.useContext(Ke);return D(t,Et(e)),t}function Ot(e){let t=w.useContext(qe);return D(t,Et(e)),t}function kt(e){let t=w.useContext(tt);return D(t,Et(e)),t}function At(e){let t=kt(e),n=t.matches[t.matches.length-1];return D(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function jt(){return At(`useRouteId`)}function Mt(){return Ot(`useNavigation`).navigation}function Nt(){let{matches:e,loaderData:t}=Ot(`useMatches`);return w.useMemo(()=>e.map(e=>ce(e,t)),[e,t])}function Pt(){let e=w.useContext(nt),t=Ot(`useRouteError`),n=At(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Ft(){let{router:e}=Dt(`useNavigate`),t=At(`useNavigate`),n=w.useRef(!1);return ft(()=>{n.current=!0}),w.useCallback(async(r,i={})=>{O(n.current,dt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var It={};function Lt(e,t,n){!t&&!It[e]&&(It[e]=!0,O(!1,n))}w.memo(Rt);function Rt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return vt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function zt(e){D(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Bt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){D(!lt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=w.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ae(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=w.useMemo(()=>{let e=Te(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return O(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:w.createElement($e.Provider,{value:c},w.createElement(et.Provider,{children:t,value:h}))}function Vt({children:e,location:t}){return _t(Ht(e),t)}w.Component;function Ht(e,t=[]){let n=[];return w.Children.forEach(e,(e,r)=>{if(!w.isValidElement(e))return;let i=[...t,r];if(e.type===w.Fragment){n.push.apply(n,Ht(e.props.children,i));return}D(e.type===zt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),D(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Ht(e.props.children,i)),n.push(a)}),n}var Ut=`get`,Wt=`application/x-www-form-urlencoded`;function Gt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Kt(e){return Gt(e)&&e.tagName.toLowerCase()===`button`}function qt(e){return Gt(e)&&e.tagName.toLowerCase()===`form`}function Jt(e){return Gt(e)&&e.tagName.toLowerCase()===`input`}function Yt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Xt(e,t){return e.button===0&&(!t||t===`_self`)&&!Yt(e)}var Zt=null;function Qt(){if(Zt===null)try{new FormData(document.createElement(`form`),0),Zt=!1}catch{Zt=!0}return Zt}var $t=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function en(e){return e!=null&&!$t.has(e)?(O(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wt}"`),null):e}function tn(e,t){let n,r,i,a,o;if(qt(e)){let o=e.getAttribute(`action`);r=o?Te(o,t):null,n=e.getAttribute(`method`)||Ut,i=en(e.getAttribute(`enctype`))||Wt,a=new FormData(e)}else if(Kt(e)||Jt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Te(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Ut,i=en(e.getAttribute(`formenctype`))||en(o.getAttribute(`enctype`))||Wt,a=new FormData(o,e),!Qt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Gt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Ut,r=null,i=Wt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var nn={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},rn=/[&><\u2028\u2029]/g;function an(e){return e.replace(rn,e=>nn[e])}function on(e,t){if(e===!1||e==null)throw Error(t)}function sn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Te(i.pathname,t)===`/`?i.pathname=`${Fe(t)}/_root.${r}`:i.pathname=`${Fe(i.pathname)}.${r}`,i}async function cn(e,t){if(e.id in t)return t[e.id];try{let n=await C(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ln(e){return e!=null&&typeof e.page==`string`}function un(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function dn(e,t,n){return gn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await cn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(un).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function fn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function pn(e,t,{includeHydrateFallback:n}={}){return mn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function mn(e){return[...new Set(e)]}function hn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function gn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!ln(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(hn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function _n(){let e=w.useContext(Ke);return on(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function vn(){let e=w.useContext(qe);return on(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var yn=w.createContext(void 0);yn.displayName=`FrameworkContext`;function bn(){let e=w.useContext(yn);return on(e,`You must render this element inside a <HydratedRouter> element`),e}function xn(e,t){let n=w.useContext(yn),[r,i]=w.useState(!1),[a,o]=w.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=w.useRef(null);w.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),w.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Sn(s,p),onBlur:Sn(c,m),onMouseEnter:Sn(l,p),onMouseLeave:Sn(u,m),onTouchStart:Sn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Sn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Cn({page:e,...t}){let n=Ye(),{router:r}=_n(),i=w.useMemo(()=>A(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?w.createElement(Tn,{page:e,matches:i,...t}):w.createElement(En,{page:e,matches:i,...t}):null}function wn(e){let{manifest:t,routeModules:n}=bn(),[r,i]=w.useState([]);return w.useEffect(()=>{let r=!1;return dn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Tn({page:e,matches:t,...n}){let r=ut(),{future:i}=bn(),{basename:a}=_n(),o=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=sn(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return w.createElement(w.Fragment,null,o.map(e=>w.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function En({page:e,matches:t,...n}){let r=ut(),{future:i,manifest:a,routeModules:o}=bn(),{basename:s}=_n(),{loaderData:c,matches:l}=vn(),u=w.useMemo(()=>fn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=w.useMemo(()=>fn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=sn(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=w.useMemo(()=>pn(d,a),[d,a]),m=wn(d);return w.createElement(w.Fragment,null,f.map(e=>w.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>w.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>w.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Dn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}w.Component;var On=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{On&&(window.__reactRouterVersion=`7.15.0`)}catch{}function kn({basename:e,children:t,useTransitions:n,window:r}){let i=w.useRef();i.current??=E({window:r,v5Compat:!0});let a=i.current,[o,s]=w.useState({action:a.action,location:a.location}),c=w.useCallback(e=>{n===!1?s(e):w.startTransition(()=>s(e))},[n]);return w.useLayoutEffect(()=>a.listen(c),[a,c]),w.createElement(Bt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function An({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=w.useState({action:n.action,location:n.location}),o=w.useCallback(e=>{r===!1?a(e):w.startTransition(()=>a(e))},[r]);return w.useLayoutEffect(()=>n.listen(o),[n,o]),w.createElement(Bt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}An.displayName=`unstable_HistoryRouter`;var jn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mn=w.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=w.useContext($e),v=typeof l==`string`&&jn.test(l),y=Ue(l,h);l=y.to;let b=ct(l,{relative:r}),x=ut(),S=null;if(o){let e=Me(o,[],x.mask?x.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Pe([h,e.pathname])),S=g.createHref(e)}let[C,T,ee]=xn(n,p),E=zn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function D(t){e&&e(t),t.defaultPrevented||E(t)}let O=!(y.isExternal||i),te=w.createElement(`a`,{...p,...ee,href:(O?S:void 0)||y.absoluteURL||b,onClick:O?D:e,ref:Dn(m,T),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return C&&!v?w.createElement(w.Fragment,null,te,w.createElement(Cn,{page:b})):te});Mn.displayName=`Link`;var Nn=w.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=gt(a,{relative:c.relative}),d=ut(),f=w.useContext(qe),{navigator:p,basename:m}=w.useContext($e),h=f!=null&&Yn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Te(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,x=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:x,isTransitioning:h},C=b?e:void 0,T;T=typeof n==`function`?n(S):[n,b?`active`:null,x?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ee=typeof i==`function`?i(S):i;return w.createElement(Mn,{...c,"aria-current":C,className:T,ref:l,style:ee,to:a,viewTransition:o},typeof s==`function`?s(S):s)});Nn.displayName=`NavLink`;var Pn=w.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Ut,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=w.useContext($e),g=Hn(),_=Un(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&jn.test(s);return w.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?w.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Pn.displayName=`Form`;function Fn({getKey:e,storageKey:t,...n}){let r=w.useContext(yn),{basename:i}=w.useContext($e),a=ut(),o=Nt();qn({getKey:e,storageKey:t});let s=w.useMemo(()=>{if(!r||!e)return null;let t=Kn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return w.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${an(JSON.stringify(t||Wn))}, ${an(JSON.stringify(s))})`}})}Fn.displayName=`ScrollRestoration`;function In(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ln(e){let t=w.useContext(Ke);return D(t,In(e)),t}function Rn(e){let t=w.useContext(qe);return D(t,In(e)),t}function zn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=pt(),d=ut(),f=gt(e,{relative:o});return w.useCallback(p=>{if(Xt(p,t)){p.preventDefault();let t=n===void 0?ie(d)===ie(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?w.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Bn=0,Vn=()=>`__${String(++Bn)}__`;function Hn(){let{router:e}=Ln(`useSubmit`),{basename:t}=w.useContext($e),n=jt(),r=e.fetch,i=e.navigate;return w.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=tn(e,t);a.navigate===!1?await r(a.fetcherKey||Vn(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Un(e,{relative:t}={}){let{basename:n}=w.useContext($e),r=w.useContext(tt);D(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...gt(e||`.`,{relative:t})},o=ut();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Pe([n,a.pathname])),ie(a)}var Wn=`react-router-scroll-positions`,Gn={};function Kn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Te(e.pathname,n)||e.pathname},t)),i??=e.key,i}function qn({getKey:e,storageKey:t}={}){let{router:n}=Ln(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Rn(`useScrollRestoration`),{basename:a}=w.useContext($e),o=ut(),s=Nt(),c=Mt();w.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Jn(w.useCallback(()=>{if(c.state===`idle`){let t=Kn(o,s,a,e);Gn[t]=window.scrollY}try{sessionStorage.setItem(t||Wn,JSON.stringify(Gn))}catch(e){O(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(w.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Wn);e&&(Gn=JSON.parse(e))}catch{}},[t]),w.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Gn,()=>window.scrollY,e?(t,n)=>Kn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),w.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{O(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Jn(e,t){let{capture:n}=t||{};w.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Yn(e,{relative:t}={}){let n=w.useContext(Xe);D(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ln(`useViewTransitionState`),i=gt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Te(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Te(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Se(i.pathname,o)!=null||Se(i.pathname,a)!=null}var Xn=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Zn=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Qn=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),$n=e=>{let t=Qn(e);return t.charAt(0).toUpperCase()+t.slice(1)},er={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},tr=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},nr=(0,w.createContext)({}),rr=()=>(0,w.useContext)(nr),ir=(0,w.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=rr()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,w.createElement)(`svg`,{ref:c,...er,width:t??l??er.width,height:t??l??er.height,stroke:e??f,strokeWidth:m,className:Xn(`lucide`,p,i),...!a&&!tr(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,w.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),M=(e,t)=>{let n=(0,w.forwardRef)(({className:n,...r},i)=>(0,w.createElement)(ir,{ref:i,iconNode:t,className:Xn(`lucide-${Zn($n(e))}`,`lucide-${e}`,n),...r}));return n.displayName=$n(e),n},ar=M(`activity`,[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]),or=M(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),sr=M(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),cr=M(`badge-check`,[[`path`,{d:`M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z`,key:`3c2336`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),lr=M(`bell-ring`,[[`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`,key:`vwvbt9`}],[`path`,{d:`M22 8c0-2.3-.8-4.3-2-6`,key:`5bb3ad`}],[`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,key:`11g9vi`}],[`path`,{d:`M4 2C2.8 3.7 2 5.7 2 8`,key:`tap9e0`}]]),ur=M(`box`,[[`path`,{d:`M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z`,key:`hh9hay`}],[`path`,{d:`m3.3 7 8.7 5 8.7-5`,key:`g66t2b`}],[`path`,{d:`M12 22V12`,key:`d0xqtd`}]]),dr=M(`boxes`,[[`path`,{d:`M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z`,key:`lc1i9w`}],[`path`,{d:`m7 16.5-4.74-2.85`,key:`1o9zyk`}],[`path`,{d:`m7 16.5 5-3`,key:`va8pkn`}],[`path`,{d:`M7 16.5v5.17`,key:`jnp8gn`}],[`path`,{d:`M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z`,key:`8zsnat`}],[`path`,{d:`m17 16.5-5-3`,key:`8arw3v`}],[`path`,{d:`m17 16.5 4.74-2.85`,key:`8rfmw`}],[`path`,{d:`M17 16.5v5.17`,key:`k6z78m`}],[`path`,{d:`M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z`,key:`1xygjf`}],[`path`,{d:`M12 8 7.26 5.15`,key:`1vbdud`}],[`path`,{d:`m12 8 4.74-2.85`,key:`3rx089`}],[`path`,{d:`M12 13.5V8`,key:`1io7kd`}]]),fr=M(`briefcase-business`,[[`path`,{d:`M12 12h.01`,key:`1mp3jc`}],[`path`,{d:`M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2`,key:`1ksdt3`}],[`path`,{d:`M22 13a18.15 18.15 0 0 1-20 0`,key:`12hx5q`}],[`rect`,{width:`20`,height:`14`,x:`2`,y:`6`,rx:`2`,key:`i6l2r4`}]]),pr=M(`building-2`,[[`path`,{d:`M10 12h4`,key:`a56b0p`}],[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M14 21v-3a2 2 0 0 0-4 0v3`,key:`1rgiei`}],[`path`,{d:`M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2`,key:`secmi2`}],[`path`,{d:`M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16`,key:`16ra0t`}]]),mr=M(`calculator`,[[`rect`,{width:`16`,height:`20`,x:`4`,y:`2`,rx:`2`,key:`1nb95v`}],[`line`,{x1:`8`,x2:`16`,y1:`6`,y2:`6`,key:`x4nwl0`}],[`line`,{x1:`16`,x2:`16`,y1:`14`,y2:`18`,key:`wjye3r`}],[`path`,{d:`M16 10h.01`,key:`1m94wz`}],[`path`,{d:`M12 10h.01`,key:`1nrarc`}],[`path`,{d:`M8 10h.01`,key:`19clt8`}],[`path`,{d:`M12 14h.01`,key:`1etili`}],[`path`,{d:`M8 14h.01`,key:`6423bh`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}],[`path`,{d:`M8 18h.01`,key:`lrp35t`}]]),hr=M(`chart-column`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]]),gr=M(`chart-line`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`m19 9-5 5-4-4-3 3`,key:`2osh9i`}]]),_r=M(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),vr=M(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),yr=M(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),br=M(`clock-3`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6h4`,key:`135r8i`}]]),xr=M(`cloud-cog`,[[`path`,{d:`m10.852 19.772-.383.924`,key:`r7sl7d`}],[`path`,{d:`m13.148 14.228.383-.923`,key:`1d5zpm`}],[`path`,{d:`M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923`,key:`1ydik7`}],[`path`,{d:`m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544`,key:`1m1vsf`}],[`path`,{d:`m14.772 15.852.923-.383`,key:`660p6e`}],[`path`,{d:`m14.772 18.148.923.383`,key:`hrcpis`}],[`path`,{d:`M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2`,key:`j2q98n`}],[`path`,{d:`m9.228 15.852-.923-.383`,key:`1p9ong`}],[`path`,{d:`m9.228 18.148-.923.383`,key:`6558rz`}]]),Sr=M(`cloud`,[[`path`,{d:`M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z`,key:`p7xjir`}]]),Cr=M(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),wr=M(`database-backup`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 12a9 3 0 0 0 5 2.69`,key:`1ui2ym`}],[`path`,{d:`M21 9.3V5`,key:`6k6cib`}],[`path`,{d:`M3 5v14a9 3 0 0 0 6.47 2.88`,key:`i62tjy`}],[`path`,{d:`M12 12v4h4`,key:`1bxaet`}],[`path`,{d:`M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16`,key:`1f4ei9`}]]),Tr=M(`database`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]),Er=M(`database-zap`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 15 21.84`,key:`14ibmq`}],[`path`,{d:`M21 5V8`,key:`1marbg`}],[`path`,{d:`M21 12L18 17H22L19 22`,key:`zafso`}],[`path`,{d:`M3 12A9 3 0 0 0 14.59 14.87`,key:`1y4wr8`}]]),Dr=M(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),Or=M(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),kr=M(`file-archive`,[[`path`,{d:`M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5`,key:`4pqfef`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M8 12v-1`,key:`1ej8lb`}],[`path`,{d:`M8 18v-2`,key:`qcmpov`}],[`path`,{d:`M8 7V6`,key:`1nbb54`}],[`circle`,{cx:`8`,cy:`20`,r:`2`,key:`ckkr5m`}]]),Ar=M(`file-pen-line`,[[`path`,{d:`M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z`,key:`ukzhwg`}],[`path`,{d:`M14.487 7.858A1 1 0 0 1 14 7V2`,key:`1klhew`}],[`path`,{d:`M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516`,key:`rxaxab`}],[`path`,{d:`M8 18h1`,key:`13wk12`}]]),jr=M(`file-search`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`circle`,{cx:`11.5`,cy:`14.5`,r:`2.5`,key:`1bq0ko`}],[`path`,{d:`M13.3 16.3 15 18`,key:`2quom7`}]]),Mr=M(`file-spreadsheet`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M8 13h2`,key:`yr2amv`}],[`path`,{d:`M14 13h2`,key:`un5t4a`}],[`path`,{d:`M8 17h2`,key:`2yhykz`}],[`path`,{d:`M14 17h2`,key:`10kma7`}]]),Nr=M(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),Pr=M(`flag`,[[`path`,{d:`M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528`,key:`1jaruq`}]]),Fr=M(`flask-conical`,[[`path`,{d:`M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2`,key:`18mbvz`}],[`path`,{d:`M6.453 15h11.094`,key:`3shlmq`}],[`path`,{d:`M8.5 2h7`,key:`csnxdl`}]]),Ir=M(`folder-down`,[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}],[`path`,{d:`M12 10v6`,key:`1bos4e`}],[`path`,{d:`m15 13-3 3-3-3`,key:`6j2sf0`}]]),Lr=M(`folder-sync`,[[`path`,{d:`M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5`,key:`1dkoa9`}],[`path`,{d:`M12 10v4h4`,key:`1czhmt`}],[`path`,{d:`m12 14 1.535-1.605a5 5 0 0 1 8 1.5`,key:`lvuxfi`}],[`path`,{d:`M22 22v-4h-4`,key:`1ewp4q`}],[`path`,{d:`m22 18-1.535 1.605a5 5 0 0 1-8-1.5`,key:`14ync0`}]]),Rr=M(`git-branch`,[[`path`,{d:`M15 6a9 9 0 0 0-9 9V3`,key:`1cii5b`}],[`circle`,{cx:`18`,cy:`6`,r:`3`,key:`1h7g24`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}]]),zr=M(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),Br=M(`graduation-cap`,[[`path`,{d:`M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,key:`j76jl0`}],[`path`,{d:`M22 10v6`,key:`1lu8f3`}],[`path`,{d:`M6 12.5V16a6 3 0 0 0 12 0v-3.5`,key:`1r8lef`}]]),Vr=M(`hand-coins`,[[`path`,{d:`M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17`,key:`geh8rc`}],[`path`,{d:`m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9`,key:`1fto5m`}],[`path`,{d:`m2 16 6 6`,key:`1pfhp9`}],[`circle`,{cx:`16`,cy:`9`,r:`2.9`,key:`1n0dlu`}],[`circle`,{cx:`6`,cy:`5`,r:`3`,key:`151irh`}]]),Hr=M(`handshake`,[[`path`,{d:`m11 17 2 2a1 1 0 1 0 3-3`,key:`efffak`}],[`path`,{d:`m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4`,key:`9pr0kb`}],[`path`,{d:`m21 3 1 11h-2`,key:`1tisrp`}],[`path`,{d:`M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3`,key:`1uvwmv`}],[`path`,{d:`M3 4h8`,key:`1ep09j`}]]),Ur=M(`headset`,[[`path`,{d:`M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z`,key:`12oyoe`}],[`path`,{d:`M21 16v2a4 4 0 0 1-4 4h-5`,key:`1x7m43`}]]),Wr=M(`headphones`,[[`path`,{d:`M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3`,key:`1xhozi`}]]),Gr=M(`inbox`,[[`polyline`,{points:`22 12 16 12 14 15 10 15 8 12 2 12`,key:`o97t9d`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}]]),Kr=M(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),qr=M(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),Jr=M(`layout-template`,[[`rect`,{width:`18`,height:`7`,x:`3`,y:`3`,rx:`1`,key:`f1a2em`}],[`rect`,{width:`9`,height:`7`,x:`3`,y:`14`,rx:`1`,key:`jqznyg`}],[`rect`,{width:`5`,height:`7`,x:`16`,y:`14`,rx:`1`,key:`q5h2i8`}]]),Yr=M(`link-2`,[[`path`,{d:`M9 17H7A5 5 0 0 1 7 7h2`,key:`8i5ue5`}],[`path`,{d:`M15 7h2a5 5 0 1 1 0 10h-2`,key:`1b9ql8`}],[`line`,{x1:`8`,x2:`16`,y1:`12`,y2:`12`,key:`1jonct`}]]),Xr=M(`list-ordered`,[[`path`,{d:`M11 5h10`,key:`1cz7ny`}],[`path`,{d:`M11 12h10`,key:`1438ji`}],[`path`,{d:`M11 19h10`,key:`11t30w`}],[`path`,{d:`M4 4h1v5`,key:`10yrso`}],[`path`,{d:`M4 9h2`,key:`r1h2o0`}],[`path`,{d:`M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02`,key:`xtkcd5`}]]),Zr=M(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),Qr=M(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),$r=M(`map-pinned`,[[`path`,{d:`M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0`,key:`11u0oz`}],[`circle`,{cx:`12`,cy:`8`,r:`2`,key:`1822b1`}],[`path`,{d:`M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712`,key:`q8zwxj`}]]),ei=M(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),ti=M(`message-circle-check`,[[`path`,{d:`M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,key:`1sd12s`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),ni=M(`message-circle-more`,[[`path`,{d:`M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,key:`1sd12s`}],[`path`,{d:`M8 12h.01`,key:`czm47f`}],[`path`,{d:`M12 12h.01`,key:`1mp3jc`}],[`path`,{d:`M16 12h.01`,key:`1l6xoz`}]]),ri=M(`message-square`,[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}]]),ii=M(`monitor-cog`,[[`path`,{d:`M12 17v4`,key:`1riwvh`}],[`path`,{d:`m14.305 7.53.923-.382`,key:`1mlnsw`}],[`path`,{d:`m15.228 4.852-.923-.383`,key:`82mpwg`}],[`path`,{d:`m16.852 3.228-.383-.924`,key:`ln4sir`}],[`path`,{d:`m16.852 8.772-.383.923`,key:`1dejw0`}],[`path`,{d:`m19.148 3.228.383-.924`,key:`192kgf`}],[`path`,{d:`m19.53 9.696-.382-.924`,key:`fiavlr`}],[`path`,{d:`m20.772 4.852.924-.383`,key:`1j8mgp`}],[`path`,{d:`m20.772 7.148.924.383`,key:`zix9be`}],[`path`,{d:`M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7`,key:`1tnzv8`}],[`path`,{d:`M8 21h8`,key:`1ev6f3`}],[`circle`,{cx:`18`,cy:`6`,r:`3`,key:`1h7g24`}]]),ai=M(`monitor-play`,[[`path`,{d:`M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z`,key:`vbtd3f`}],[`path`,{d:`M12 17v4`,key:`1riwvh`}],[`path`,{d:`M8 21h8`,key:`1ev6f3`}],[`rect`,{x:`2`,y:`3`,width:`20`,height:`14`,rx:`2`,key:`x3v2xh`}]]),oi=M(`network`,[[`rect`,{x:`16`,y:`16`,width:`6`,height:`6`,rx:`1`,key:`4q2zg0`}],[`rect`,{x:`2`,y:`16`,width:`6`,height:`6`,rx:`1`,key:`8cvhb9`}],[`rect`,{x:`9`,y:`2`,width:`6`,height:`6`,rx:`1`,key:`1egb70`}],[`path`,{d:`M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3`,key:`1jsf9p`}],[`path`,{d:`M12 12V8`,key:`2874zd`}]]),si=M(`notebook-pen`,[[`path`,{d:`M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4`,key:`re6nr2`}],[`path`,{d:`M2 6h4`,key:`aawbzj`}],[`path`,{d:`M2 10h4`,key:`l0bgd4`}],[`path`,{d:`M2 14h4`,key:`1gsvsf`}],[`path`,{d:`M2 18h4`,key:`1bu2t1`}],[`path`,{d:`M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z`,key:`pqwjuv`}]]),ci=M(`package-check`,[[`path`,{d:`M12 22V12`,key:`d0xqtd`}],[`path`,{d:`m16 17 2 2 4-4`,key:`uh5qu3`}],[`path`,{d:`M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753`,key:`kpkbpo`}],[`path`,{d:`M3.29 7 12 12l8.71-5`,key:`19ckod`}],[`path`,{d:`m7.5 4.27 8.997 5.148`,key:`9yrvtv`}]]),li=M(`phone-call`,[[`path`,{d:`M13 2a9 9 0 0 1 9 9`,key:`1itnx2`}],[`path`,{d:`M13 6a5 5 0 0 1 5 5`,key:`11nki7`}],[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]),ui=M(`phone`,[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]),di=M(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),fi=M(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),pi=M(`puzzle`,[[`path`,{d:`M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z`,key:`w46dr5`}]]),mi=M(`quote`,[[`path`,{d:`M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z`,key:`rib7q0`}],[`path`,{d:`M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z`,key:`1ymkrd`}]]),hi=M(`receipt-indian-rupee`,[[`path`,{d:`M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z`,key:`ycz6yz`}],[`path`,{d:`M8 11h8`,key:`vwpz6n`}],[`path`,{d:`M8 7h8`,key:`i86dvs`}],[`path`,{d:`M9 7a4 4 0 0 1 0 8H8l3 2`,key:`1xaco0`}]]),gi=M(`receipt-text`,[[`path`,{d:`M13 16H8`,key:`wsln4y`}],[`path`,{d:`M14 8H8`,key:`1l3xfs`}],[`path`,{d:`M16 12H8`,key:`1fr5h0`}],[`path`,{d:`M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z`,key:`ycz6yz`}]]),_i=M(`receipt`,[[`path`,{d:`M12 17V7`,key:`pyj7ub`}],[`path`,{d:`M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8`,key:`1elt7d`}],[`path`,{d:`M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z`,key:`ycz6yz`}]]),vi=M(`refresh-ccw`,[[`path`,{d:`M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`14sxne`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}],[`path`,{d:`M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16`,key:`1hlbsb`}],[`path`,{d:`M16 16h5v5`,key:`ccwih5`}]]),yi=M(`refresh-cw`,[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]),bi=M(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),xi=M(`settings-2`,[[`path`,{d:`M14 17H5`,key:`gfn3mx`}],[`path`,{d:`M19 7h-9`,key:`6i9tg`}],[`circle`,{cx:`17`,cy:`17`,r:`3`,key:`18b49y`}],[`circle`,{cx:`7`,cy:`7`,r:`3`,key:`dfmy0x`}]]),Si=M(`share-2`,[[`circle`,{cx:`18`,cy:`5`,r:`3`,key:`gq8acd`}],[`circle`,{cx:`6`,cy:`12`,r:`3`,key:`w7nqdw`}],[`circle`,{cx:`18`,cy:`19`,r:`3`,key:`1xt0gg`}],[`line`,{x1:`8.59`,x2:`15.42`,y1:`13.51`,y2:`17.49`,key:`47mynk`}],[`line`,{x1:`15.41`,x2:`8.59`,y1:`6.51`,y2:`10.49`,key:`1n3mei`}]]),Ci=M(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),wi=M(`shield-user`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M6.376 18.91a6 6 0 0 1 11.249.003`,key:`hnjrf2`}],[`circle`,{cx:`12`,cy:`11`,r:`4`,key:`1gt34v`}]]),Ti=M(`smartphone`,[[`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`,ry:`2`,key:`1yt0o3`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}]]),Ei=M(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),Di=M(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),Oi=M(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),ki=M(`trending-up`,[[`path`,{d:`M16 7h6v6`,key:`box55l`}],[`path`,{d:`m22 7-8.5 8.5-5-5L2 17`,key:`1t1m79`}]]),Ai=M(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),ji=M(`users-round`,[[`path`,{d:`M18 21a8 8 0 0 0-16 0`,key:`3ypg7q`}],[`circle`,{cx:`10`,cy:`8`,r:`5`,key:`o932ke`}],[`path`,{d:`M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3`,key:`10s06x`}]]),Mi=M(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),Ni=M(`wallet-cards`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2`,key:`4125el`}],[`path`,{d:`M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21`,key:`1dpki6`}]]),Pi=M(`wallet`,[[`path`,{d:`M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1`,key:`18etb6`}],[`path`,{d:`M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4`,key:`xoc0q4`}]]),Fi=M(`workflow`,[[`rect`,{width:`8`,height:`8`,x:`3`,y:`3`,rx:`2`,key:`by2w9f`}],[`path`,{d:`M7 11v4a2 2 0 0 0 2 2h4`,key:`xkn7yn`}],[`rect`,{width:`8`,height:`8`,x:`13`,y:`13`,rx:`2`,key:`1cgmvn`}]]),Ii=M(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Li=M(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]),Ri=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),zi=s(((e,t)=>{t.exports=Ri()})),N=u(y(),1),P=zi();function Bi(){let[e,t]=(0,w.useState)(!1),[n,r]=(0,w.useState)(!1),i=pt();return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(`header`,{className:`fixed inset-x-0 top-0 z-50 px-3 sm:px-6 lg:px-10 py-2`,children:[(0,P.jsxs)(`nav`,{className:`\r
      max-w-7xl mx-auto w-full\r
      flex items-center justify-between\r
      px-4 sm:px-5 lg:px-7\r
      py-3\r
      rounded-2xl\r
      bg-[#0B1220]/70\r
      border border-white/10\r
      backdrop-blur-2xl\r
      shadow-[0_8px_32px_rgba(0,0,0,0.35)]\r
    `,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2 sm:gap-3`,children:[(0,P.jsx)(`div`,{className:`\r
          h-10 w-10 sm:h-11 sm:w-11\r
          rounded-xl\r
          bg-gradient-to-br from-[#2F80FF] to-[#7B61FF]\r
          flex items-center justify-center\r
          text-white font-bold text-base sm:text-lg\r
          shadow-lg\r
          shrink-0\r
        `,children:`B`}),(0,P.jsxs)(`div`,{className:`leading-tight`,children:[(0,P.jsx)(`h1`,{className:`text-white text-base sm:text-lg font-semibold`,children:`Balaji Infotech`}),(0,P.jsx)(`p`,{className:`text-white/60 text-[10px] sm:text-xs`,children:`Tally Solutions Partner`})]})]}),(0,P.jsxs)(`div`,{className:`hidden lg:flex items-center gap-2 xl:gap-3`,children:[(0,P.jsx)(Nn,{to:`/`,className:({isActive:e})=>`relative
           px-4 py-2.5
           rounded-full
           transition-all duration-300
           ${e?`bg-white/10 backdrop-blur-xl border border-white/10 text-white shadow-[0_4px_20px_rgba(255,255,255,0.08)]`:`text-white/70 hover:text-white hover:bg-white/5`}`,children:`Home`}),(0,P.jsx)(Nn,{to:`/about`,className:({isActive:e})=>`relative
           px-4 py-2.5
           rounded-full
           transition-all duration-300
           ${e?`bg-white/10 backdrop-blur-xl border border-white/10 text-white shadow-[0_4px_20px_rgba(255,255,255,0.08)]`:`text-white/70 hover:text-white hover:bg-white/5`}`,children:`About`}),(0,P.jsxs)(`div`,{className:`relative group`,children:[(0,P.jsxs)(Nn,{to:`/products`,className:({isActive:e})=>`relative
            px-4 py-2.5
            rounded-full
            transition-all duration-300
            flex items-center gap-1
            ${e?`bg-white/10 backdrop-blur-xl border border-white/10 text-white shadow-[0_4px_20px_rgba(255,255,255,0.08)]`:`text-white/70 hover:text-white hover:bg-white/5`}`,children:[`Products`,(0,P.jsx)(vr,{size:18,className:`\r
              transition-transform duration-300\r
              group-hover:rotate-180\r
            `})]}),(0,P.jsx)(`div`,{className:`\r
            absolute\r
            top-[120%]\r
            left-1/2\r
            -translate-x-1/2\r
            w-[300px]\r
            rounded-2xl\r
            bg-[#1F2937]/95\r
            backdrop-blur-xl\r
            border border-white/10\r
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]\r
            overflow-hidden\r
            opacity-0\r
            invisible\r
            translate-y-3\r
            group-hover:opacity-100\r
            group-hover:visible\r
            group-hover:translate-y-0\r
            transition-all duration-300\r
            z-50\r
          `,children:[{name:`TallyPrime`,link:`/products/tallyprime`},{name:`TallyPrime Server`,link:`/products/tally-server`},{name:`TallyPrime powered by AWS`,link:`/products/aws`},{name:`TallyPrime with WhatsApp`,link:`/products/whatsapp`}].map((e,t)=>(0,P.jsx)(Nn,{to:e.link,className:`\r
                block\r
                px-6 py-4\r
                text-[15px]\r
                font-medium\r
                text-white/70\r
                hover:text-white\r
                hover:bg-white/5\r
                transition-all duration-300\r
                border-b border-white/5\r
                last:border-none\r
              `,children:e.name},t))})]}),(0,P.jsxs)(`div`,{className:`relative group`,children:[(0,P.jsxs)(Nn,{to:`/services`,className:({isActive:e})=>`relative
            px-4 py-2.5
            rounded-full
            transition-all duration-300
            flex items-center gap-1
            ${e?`bg-white/10 backdrop-blur-xl border border-white/10 text-white shadow-[0_4px_20px_rgba(255,255,255,0.08)]`:`text-white/70 hover:text-white hover:bg-white/5`}`,children:[`Services`,(0,P.jsx)(vr,{size:18,className:`\r
              transition-transform duration-300\r
              group-hover:rotate-180\r
            `})]}),(0,P.jsx)(`div`,{className:`\r
            absolute\r
            top-[120%]\r
            left-1/2\r
            -translate-x-1/2\r
            w-[300px]\r
            rounded-2xl\r
            bg-[#1F2937]/95\r
            backdrop-blur-xl\r
            border border-white/10\r
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]\r
            overflow-hidden\r
            opacity-0\r
            invisible\r
            translate-y-3\r
            group-hover:opacity-100\r
            group-hover:visible\r
            group-hover:translate-y-0\r
            transition-all duration-300\r
            z-50\r
          `,children:[{name:`Tally Software`,link:`/services/tally-software`},{name:`Tally Services`,link:`/services/tally-services`},{name:`Tally Apps For Mobile`,link:`/services/tally-mobile`},{name:`Tally Solutions`,link:`/services/tally-solutions`},{name:`Tally ERP 9 Solutions`,link:`/services/tally-erp`},{name:`Tally Add-Ons`,link:`/services/tally-addon`}].map((e,t)=>(0,P.jsx)(Nn,{to:e.link,className:`\r
                block\r
                px-6 py-4\r
                text-[15px]\r
                font-medium\r
                text-white/70\r
                hover:text-white\r
                hover:bg-white/5\r
                transition-all duration-300\r
                border-b border-white/5\r
                last:border-none\r
              `,children:e.name},t))})]}),(0,P.jsx)(Nn,{to:`/education`,className:({isActive:e})=>`relative
           px-4 py-2.5
           rounded-full
           transition-all duration-300
           ${e?`bg-white/10 backdrop-blur-xl border border-white/10 text-white shadow-[0_4px_20px_rgba(255,255,255,0.08)]`:`text-white/70 hover:text-white hover:bg-white/5`}`,children:`Education`}),(0,P.jsx)(Nn,{to:`/lms`,className:({isActive:e})=>`relative
           px-4 py-2.5
           rounded-full
           transition-all duration-300
           ${e?`bg-white/10 backdrop-blur-xl border border-white/10 text-white shadow-[0_4px_20px_rgba(255,255,255,0.08)]`:`text-white/70 hover:text-white hover:bg-white/5`}`,children:`LMS`}),(0,P.jsx)(Nn,{to:`/contact`,className:({isActive:e})=>`relative
           px-4 py-2.5
           rounded-full
           transition-all duration-300
           ${e?`bg-white/10 backdrop-blur-xl border border-white/10 text-white shadow-[0_4px_20px_rgba(255,255,255,0.08)]`:`text-white/70 hover:text-white hover:bg-white/5`}`,children:`Contact`})]}),(0,P.jsx)(`div`,{className:`hidden lg:flex items-center gap-4`,children:(0,P.jsx)(`button`,{onClick:()=>i(`/contact#contact-form`),className:`\r
      px-5 py-3\r
      whitespace-nowrap\r
      rounded-xl\r
      text-white\r
      font-medium\r
      bg-gradient-to-r from-[#2F80FF] to-[#7B61FF]\r
      hover:scale-105\r
      transition duration-300\r
      shadow-[0_8px_20px_rgba(123,97,255,0.35)]\r
    `,children:`Get Started`})}),(0,P.jsx)(`button`,{onClick:()=>t(!e),className:`\r
        lg:hidden\r
        text-white\r
        flex items-center justify-center\r
      `,children:e?(0,P.jsx)(Ii,{size:28}):(0,P.jsx)(ei,{size:28})})]}),e&&(0,P.jsx)(`div`,{className:`\r
        lg:hidden\r
        mt-3\r
        rounded-2xl\r
        border border-white/10\r
        bg-[#071426]/95\r
        backdrop-blur-xl\r
        p-6\r
        shadow-2xl\r
        mx-1\r
      `,children:(0,P.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,P.jsx)(Nn,{to:`/`,className:`text-white/90 py-3 border-b border-white/5`,onClick:()=>t(!1),children:`Home`}),(0,P.jsx)(Nn,{to:`/about`,className:`text-white/70 py-3 border-b border-white/5`,onClick:()=>t(!1),children:`About`}),(0,P.jsx)(Nn,{to:`/products`,className:`text-white/70 py-3 border-b border-white/5`,onClick:()=>t(!1),children:`Products`}),(0,P.jsx)(Nn,{to:`/services`,className:`text-white/70 py-3 border-b border-white/5`,onClick:()=>t(!1),children:`Services`}),(0,P.jsx)(Nn,{to:`/education`,className:`text-white/70 py-3 border-b border-white/5`,onClick:()=>t(!1),children:`Education`}),(0,P.jsx)(Nn,{to:`/lms`,className:`text-white/70 py-3 border-b border-white/5`,onClick:()=>t(!1),children:`LMS`}),(0,P.jsx)(Nn,{to:`/contact`,className:`text-white/70 py-3`,onClick:()=>t(!1),children:`Contact`}),(0,P.jsx)(`button`,{className:`\r
            mt-5\r
            w-full\r
            py-3\r
            rounded-xl\r
            bg-gradient-to-r from-[#2F80FF] to-[#7B61FF]\r
            text-white\r
            font-medium\r
          `,children:`Get Started`})]})})]})})}var Vi={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Hi=w.createContext&&w.createContext(Vi),Ui=[`attr`,`size`,`title`];function Wi(e,t){if(e==null)return{};var n,r,i=Gi(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Gi(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Ki(){return Ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ki.apply(null,arguments)}function qi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ji(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?qi(Object(n),!0).forEach(function(t){Yi(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qi(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Yi(e,t,n){return(t=Xi(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xi(e){var t=Zi(e,`string`);return typeof t==`symbol`?t:t+``}function Zi(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Qi(e){return e&&e.map((e,t)=>w.createElement(e.tag,Ji({key:t},e.attr),Qi(e.child)))}function $i(e){return t=>w.createElement(ea,Ki({attr:Ji({},e.attr)},t),Qi(e.child))}function ea(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=Wi(e,Ui),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),w.createElement(`svg`,Ki({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Ji(Ji({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&w.createElement(`title`,null,i),e.children)};return Hi===void 0?t(Vi):w.createElement(Hi.Consumer,null,e=>t(e))}function ta(e){return $i({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z`},child:[]}]})(e)}function na(e){return $i({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z`},child:[]}]})(e)}function ra(e){return $i({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`},child:[]}]})(e)}function ia(e){return $i({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z`},child:[]}]})(e)}function aa(){return(0,P.jsxs)(`footer`,{className:`relative overflow-hidden bg-[#071426] text-white`,children:[(0,P.jsxs)(`div`,{className:`absolute inset-0 overflow-hidden`,children:[(0,P.jsx)(`div`,{className:`\r
        absolute\r
        top-0\r
        left-[-10%]\r
        w-[500px]\r
        h-[480px]\r
        bg-[#2F80FF]/10\r
        blur-3xl\r
        rounded-full\r
      `}),(0,P.jsx)(`div`,{className:`\r
        absolute\r
        bottom-[-20%]\r
        right-[-10%]\r
        w-[500px]\r
        h-[500px]\r
        bg-[#7B61FF]/10\r
        blur-3xl\r
        rounded-full\r
      `})]}),(0,P.jsxs)(`div`,{className:`\r
      relative\r
      max-w-7xl\r
      mx-auto\r
      px-4 sm:px-6 lg:px-8\r
      py-12\r
      sm:py-14\r
    `,children:[(0,P.jsxs)(`div`,{className:`\r
        grid\r
        grid-cols-1\r
        sm:grid-cols-2\r
        lg:grid-cols-4\r
        gap-10\r
        lg:gap-12\r
        items-start\r
      `,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-3 sm:gap-4 mb-4`,children:[(0,P.jsx)(`div`,{className:`\r
              w-12 h-12\r
              sm:w-14 sm:h-14\r
              rounded-2xl\r
              bg-gradient-to-br\r
              from-[#2F80FF]\r
              to-[#7B61FF]\r
              flex\r
              items-center\r
              justify-center\r
              text-white\r
              text-2xl\r
              font-bold\r
              shadow-[0_10px_30px_rgba(47,128,255,0.35)]\r
            `,children:`B`}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{className:`text-xl sm:text-2xl font-bold`,children:`Balaji Infotech`}),(0,P.jsx)(`p`,{className:`text-gray-400 text-sm`,children:`Tally Solutions Partner`})]})]}),(0,P.jsx)(`p`,{className:`\r
            text-gray-400\r
            leading-7\r
            text-sm\r
            sm:text-[16px]\r
            max-w-sm\r
          `,children:`Empowering businesses with modern Tally solutions, enterprise support, automation services, and smart accounting infrastructure.`}),(0,P.jsx)(`div`,{className:`flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8`,children:[{icon:ia,link:`https://facebook.com/balajiinfotechguntur`},{icon:ra,link:`https://www.instagram.com/balaji_ai_infotech_pvt_ltd?`},{icon:na,link:`https://linkedin.com`},{icon:Zr,link:`mailto:gunturtally@gmail.com`}].map((e,t)=>{let n=e.icon;return(0,P.jsx)(`a`,{href:e.link,target:`_blank`,rel:`noopener noreferrer`,className:`\r
        group\r
        w-11 h-11\r
        sm:w-12 sm:h-12\r
        rounded-2xl\r
        bg-white/5\r
        border border-white/10\r
        flex\r
        items-center\r
        justify-center\r
        transition-all\r
        duration-300\r
        hover:-translate-y-1\r
        hover:bg-gradient-to-br\r
        hover:from-[#2F80FF]\r
        hover:to-[#7B61FF]\r
        hover:border-transparent\r
        hover:shadow-[0_10px_25px_rgba(47,128,255,0.35)]\r
      `,children:(0,P.jsx)(n,{size:20,className:`\r
          text-gray-300\r
          transition-all\r
          duration-300\r
          group-hover:text-white\r
        `})},t)})})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h4`,{className:`\r
            text-lg\r
            sm:text-xl\r
            font-semibold\r
            mb-6\r
          `,children:`Quick Links`}),(0,P.jsx)(`div`,{className:`space-y-3`,children:[{name:`Home`,path:`/`},{name:`About`,path:`/about`},{name:`Services`,path:`/services`},{name:`Products`,path:`/products`},{name:`Education`,path:`/education`},{name:`LMS`,path:`/lms`},{name:`Contact`,path:`/contact`}].map((e,t)=>(0,P.jsxs)(Mn,{to:e.path,className:`\r
        group\r
        flex\r
        items-center\r
        gap-2\r
        text-gray-400\r
        hover:text-white\r
        transition-all\r
        duration-300\r
      `,children:[(0,P.jsx)(or,{size:16,className:`\r
          opacity-0\r
          -translate-x-2\r
          transition-all\r
          duration-300\r
          group-hover:opacity-100\r
          group-hover:translate-x-0\r
        `}),(0,P.jsx)(`span`,{children:e.name})]},t))})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h4`,{className:`\r
            text-lg\r
            sm:text-xl\r
            font-semibold\r
            mb-7\r
          `,children:`Services`}),(0,P.jsx)(`div`,{className:`space-y-4`,children:[{name:`Tally Software`,path:`/services/tally-software`},{name:`Tally Services`,path:`/services/tally-services`},{name:`Tally ERP Solutions`,path:`/services/tally-erp`},{name:`TallyPrime Server`,path:`/products/tally-server`},{name:`Tally Add-Ons`,path:`/services/tally-addon`},{name:`Tally Mobile Apps`,path:`/services/tally-mobile`}].map((e,t)=>(0,P.jsx)(Mn,{to:e.path,className:`\r
              block\r
              text-gray-400\r
              hover:text-white\r
              transition-all\r
              duration-300\r
              hover:translate-x-1\r
            `,children:e.name},t))})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h4`,{className:`\r
            text-lg\r
            sm:text-xl\r
            font-semibold\r
            mb-8\r
          `,children:`Contact`}),(0,P.jsxs)(`div`,{className:`space-y-5`,children:[(0,P.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,P.jsx)(`div`,{className:`\r
                w-11\r
                h-11\r
                rounded-xl\r
                bg-white/5\r
                border border-white/10\r
                flex\r
                items-center\r
                justify-center\r
                shrink-0\r
              `,children:(0,P.jsx)(Qr,{size:18,className:`text-[#7B61FF]`})}),(0,P.jsx)(`div`,{children:(0,P.jsx)(`p`,{className:`text-gray-300 leading-6`,children:`Brodipet, Guntur, Andhra Pradesh 522002`})})]}),(0,P.jsxs)(`div`,{className:`flex gap-4`,children:[(0,P.jsx)(`div`,{className:`\r
                w-11\r
                h-11\r
                rounded-xl\r
                bg-white/5\r
                border border-white/10\r
                flex\r
                items-center\r
                justify-center\r
                shrink-0\r
              `,children:(0,P.jsx)(ui,{size:18,className:`text-[#2F80FF]`})}),(0,P.jsx)(`div`,{children:(0,P.jsx)(`p`,{className:`text-gray-300`,children:`+91 98494 31943`})})]}),(0,P.jsxs)(`div`,{className:`flex gap-4`,children:[(0,P.jsx)(`div`,{className:`\r
                w-11\r
                h-11\r
                rounded-xl\r
                bg-white/5\r
                border border-white/10\r
                flex\r
                items-center\r
                justify-center\r
                shrink-0\r
              `,children:(0,P.jsx)(Zr,{size:18,className:`text-[#7B61FF]`})}),(0,P.jsx)(`div`,{children:(0,P.jsx)(`p`,{className:`text-gray-300`,children:`gunturtally@gmail.com`})})]})]})]})]}),(0,P.jsxs)(`div`,{className:`\r
        mt-3\r
        pt-1\r
        border-t border-white/10\r
        flex\r
        flex-col\r
        md:flex-row\r
        items-center\r
        justify-between\r
        gap-4\r
        text-center\r
        md:text-left\r
      `,children:[(0,P.jsx)(`p`,{className:`text-gray-500 text-sm`,children:`© 2026 Balaji Infotech. All rights reserved.`}),(0,P.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-5`,children:[(0,P.jsx)(`a`,{href:`#`,className:`\r
            text-gray-500\r
            text-sm\r
            hover:text-white\r
            transition-all\r
            duration-300\r
          `,children:`Privacy Policy`}),(0,P.jsx)(`a`,{href:`#`,className:`\r
            text-gray-500\r
            text-sm\r
            hover:text-white\r
            transition-all\r
            duration-300\r
          `,children:`Terms & Conditions`})]})]})]})]})}function oa(e,t,n,r){return new(n||=Promise)((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((r=r.apply(e,t||[])).next())}))}function sa(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==`function`&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw TypeError(`Generator is already executing.`);for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(i=o.trys,!((i=i.length>0&&i[i.length-1])||a[0]!==6&&a[0]!==2)){o=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(a[0]===6&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}function ca(e){var t=typeof Symbol==`function`&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length==`number`)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?`Object is not iterable.`:`Symbol.iterator is not defined.`)}function la(e,t){var n=typeof Symbol==`function`&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),o=[];try{for(;(t===void 0||t-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return o}function ua(e,t,n){if(n||arguments.length===2)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||=Array.prototype.slice.call(t,0,i),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}function da(e,t,n,r,i){var a=[...arguments].slice(5);return oa(this,void 0,void 0,(function(){var o,s,c,l,u,d;return sa(this,(function(f){switch(f.label){case 0:f.trys.push([0,12,13,14]),o=ca(a),s=o.next(),f.label=1;case 1:if(s.done)return[3,11];switch(c=s.value,typeof c){case`string`:return[3,2];case`number`:return[3,4];case`function`:return[3,6]}return[3,8];case 2:return[4,fa(e,t,c,n,r,i)];case 3:return f.sent(),[3,10];case 4:return[4,pa(c)];case 5:return f.sent(),[3,10];case 6:return[4,c.apply(void 0,ua([e,t,n,r,i],la(a),!1))];case 7:return f.sent(),[3,10];case 8:return[4,c];case 9:f.sent(),f.label=10;case 10:return s=o.next(),[3,1];case 11:return[3,14];case 12:return l=f.sent(),u={error:l},[3,14];case 13:try{s&&!s.done&&(d=o.return)&&d.call(o)}finally{if(u)throw u.error}return[7];case 14:return[2]}}))}))}function fa(e,t,n,r,i,a){return oa(this,void 0,void 0,(function(){var o,s;return sa(this,(function(c){switch(c.label){case 0:return o=e.textContent||``,s=function(e,t){var n=la(t).slice(0);return ua(ua([],la(e),!1),[NaN],!1).findIndex((function(e,t){return n[t]!==e}))}(o,n),[4,ma(e,ua(ua([],la(ga(o,t,s)),!1),la(ha(n,t,s)),!1),r,i,a)];case 1:return c.sent(),[2]}}))}))}function pa(e){return oa(this,void 0,void 0,(function(){return sa(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t){return setTimeout(t,e)}))];case 1:return t.sent(),[2]}}))}))}function ma(e,t,n,r,i){return oa(this,void 0,void 0,(function(){var a,o,s,c,l,u,d,f,p,m,h,g,_;return sa(this,(function(v){switch(v.label){case 0:if(a=t,i){for(o=0,s=1;s<t.length;s++)if(c=la([t[s-1],t[s]],2),l=c[0],(u=c[1]).length>l.length||u===``){o=s;break}a=t.slice(o,t.length)}v.label=1;case 1:v.trys.push([1,6,7,8]),d=ca(function(e){var t,n,r,i,a,o,s;return sa(this,(function(c){switch(c.label){case 0:t=function(e){return sa(this,(function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame((function(){return t.textContent=e}))},opCode:function(t){var n=t.textContent||``;return e===``||n.length>e.length?`DELETE`:`WRITING`}}];case 1:return t.sent(),[2]}}))},c.label=1;case 1:c.trys.push([1,6,7,8]),n=ca(e),r=n.next(),c.label=2;case 2:return r.done?[3,5]:(i=r.value,[5,t(i)]);case 3:c.sent(),c.label=4;case 4:return r=n.next(),[3,2];case 5:return[3,8];case 6:return a=c.sent(),o={error:a},[3,8];case 7:try{r&&!r.done&&(s=n.return)&&s.call(n)}finally{if(o)throw o.error}return[7];case 8:return[2]}}))}(a)),f=d.next(),v.label=2;case 2:return f.done?[3,5]:(p=f.value,m=p.opCode(e)===`WRITING`?n+n*(Math.random()-.5):r+r*(Math.random()-.5),p.op(e),[4,pa(m)]);case 3:v.sent(),v.label=4;case 4:return f=d.next(),[3,2];case 5:return[3,8];case 6:return h=v.sent(),g={error:h},[3,8];case 7:try{f&&!f.done&&(_=d.return)&&_.call(d)}finally{if(g)throw g.error}return[7];case 8:return[2]}}))}))}function ha(e,t,n){var r,i;return n===void 0&&(n=0),sa(this,(function(a){switch(a.label){case 0:r=t(e),i=r.length,a.label=1;case 1:return n<i?[4,r.slice(0,++n).join(``)]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}}))}function ga(e,t,n){var r,i;return n===void 0&&(n=0),sa(this,(function(a){switch(a.label){case 0:r=t(e),i=r.length,a.label=1;case 1:return i>n?[4,r.slice(0,--i).join(``)]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}}))}var _a=`index-module_type__E-SaG`;(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<`u`){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var va=(0,w.memo)((0,w.forwardRef)((function(e,t){var n=e.sequence,r=e.repeat,i=e.className,a=e.speed,o=a===void 0?40:a,s=e.deletionSpeed,c=e.omitDeletionAnimation,l=c!==void 0&&c,u=e.preRenderFirstString,d=u!==void 0&&u,f=e.wrapper,p=f===void 0?`span`:f,m=e.splitter,h=m===void 0?function(e){return ua([],la(e),!1)}:m,g=e.cursor,_=g===void 0||g,v=e.style,y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,[`sequence`,`repeat`,`className`,`speed`,`deletionSpeed`,`omitDeletionAnimation`,`preRenderFirstString`,`wrapper`,`splitter`,`cursor`,`style`]),b=y[`aria-label`],x=y[`aria-hidden`],S=y.role;s||=o;var C=[,,].fill(40);[o,s].forEach((function(e,t){switch(typeof e){case`number`:C[t]=Math.abs(e-100);break;case`object`:var n=e.type,r=e.value;if(typeof r!=`number`)break;n===`keyStrokeDelayInMs`&&(C[t]=r)}}));var T,ee,E,D,O,te,ne=C[0],re=C[1],ie=function(e,t){t===void 0&&(t=null);var n=(0,w.useRef)(t);return(0,w.useEffect)((function(){e&&(typeof e==`function`?e(n.current):e.current=n.current)}),[e]),n}(t),ae=_a;T=i?`${_?ae+` `:``}${i}`:_?ae:``,ee=(0,w.useRef)((function(){var e,t=n;r===1/0?e=da:typeof r==`number`&&(t=Array(1+r).fill(n).flat());var i=e?ua(ua([],la(t),!1),[e],!1):ua([],la(t),!1);return da.apply(void 0,ua([ie.current,h,ne,re,l],la(i),!1)),function(){ie.current}})),E=(0,w.useRef)(),D=(0,w.useRef)(!1),O=(0,w.useRef)(!1),te=la((0,w.useState)(0),2)[1],D.current&&(O.current=!0),(0,w.useEffect)((function(){return D.current||(E.current=ee.current(),D.current=!0),te((function(e){return e+1})),function(){O.current&&E.current&&E.current()}}),[]);var oe=p,k=d?n.find((function(e){return typeof e==`string`}))||``:null;return w.createElement(oe,{"aria-hidden":x,"aria-label":b,role:S,style:v,className:T,children:b?w.createElement(`span`,{"aria-hidden":`true`,ref:ie,children:k}):k,ref:b?void 0:ie})})),(function(e,t){return!0})),ya=(0,w.createContext)({});function ba(e){let t=(0,w.useRef)(null);return t.current===null&&(t.current=e()),t.current}var xa=typeof window<`u`?w.useLayoutEffect:w.useEffect,Sa=(0,w.createContext)(null);function Ca(e,t){e.indexOf(t)===-1&&e.push(t)}function wa(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Ta=(e,t,n)=>n>t?t:n<e?e:n,Ea={},Da=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Oa(e){return typeof e==`object`&&!!e}var ka=e=>/^0[^.\s]+$/u.test(e);function Aa(e){let t;return()=>(t===void 0&&(t=e()),t)}var ja=e=>e,Ma=(e,t)=>n=>t(e(n)),Na=(...e)=>e.reduce(Ma),Pa=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},Fa=class{constructor(){this.subscriptions=[]}add(e){return Ca(this.subscriptions,e),()=>wa(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},Ia=e=>e*1e3,La=e=>e/1e3;function Ra(e,t){return t?1e3/t*e:0}var za=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Ba=1e-7,Va=12;function Ha(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=za(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>Ba&&++s<Va);return o}function Ua(e,t,n,r){if(e===t&&n===r)return ja;let i=t=>Ha(t,0,1,e,n);return e=>e===0||e===1?e:za(i(e),t,r)}var Wa=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ga=e=>t=>1-e(1-t),Ka=Ua(.33,1.53,.69,.99),qa=Ga(Ka),Ja=Wa(qa),Ya=e=>e>=1?1:(e*=2)<1?.5*qa(e):.5*(2-2**(-10*(e-1))),Xa=e=>1-Math.sin(Math.acos(e)),Za=Ga(Xa),Qa=Wa(Xa),$a=Ua(.42,0,1,1),eo=Ua(0,0,.58,1),to=Ua(.42,0,.58,1),no=e=>Array.isArray(e)&&typeof e[0]!=`number`,ro=e=>Array.isArray(e)&&typeof e[0]==`number`,io={linear:ja,easeIn:$a,easeInOut:to,easeOut:eo,circIn:Xa,circInOut:Qa,circOut:Za,backIn:qa,backInOut:Ja,backOut:Ka,anticipate:Ya},ao=e=>typeof e==`string`,oo=e=>{if(ro(e)){e.length;let[t,n,r,i]=e;return Ua(t,n,r,i)}else if(ao(e))return io[e],`${e}`,io[e];return e},so=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],co={value:null,addProjectionMetrics:null};function lo(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0;let o=n;n=r,r=o,n.forEach(l),t&&co.value&&co.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var uo=40;function fo(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=so.reduce((e,n)=>(e[n]=lo(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=Ea.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,uo),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:so.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<so.length;t++)o[so[t]].cancel(e)},state:i,steps:o}}var{schedule:F,cancel:po,state:I,steps:mo}=fo(typeof requestAnimationFrame<`u`?requestAnimationFrame:ja,!0),ho;function go(){ho=void 0}var L={now:()=>(ho===void 0&&L.set(I.isProcessing||Ea.useManualTiming?I.timestamp:performance.now()),ho),set:e=>{ho=e,queueMicrotask(go)}},R={layout:0,mainThread:0,waapi:0},_o=e=>t=>typeof t==`string`&&t.startsWith(e),vo=_o(`--`),yo=_o(`var(--`),bo=e=>yo(e)?xo.test(e.split(`/*`)[0].trim()):!1,xo=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function So(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var Co={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},wo={...Co,transform:e=>Ta(0,1,e)},z={...Co,default:1},To=e=>Math.round(e*1e5)/1e5,Eo=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Do(e){return e==null}var Oo=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ko=(e,t)=>n=>!!(typeof n==`string`&&Oo.test(n)&&n.startsWith(e)||t&&!Do(n)&&Object.prototype.hasOwnProperty.call(n,t)),Ao=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Eo);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},jo=e=>Ta(0,255,e),Mo={...Co,transform:e=>Math.round(jo(e))},No={test:ko(`rgb`,`red`),parse:Ao(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Mo.transform(e)+`, `+Mo.transform(t)+`, `+Mo.transform(n)+`, `+To(wo.transform(r))+`)`};function Po(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var Fo={test:ko(`#`),parse:Po,transform:No.transform},Io=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Lo=Io(`deg`),Ro=Io(`%`),B=Io(`px`),zo=Io(`vh`),Bo=Io(`vw`),Vo={...Ro,parse:e=>Ro.parse(e)/100,transform:e=>Ro.transform(e*100)},Ho={test:ko(`hsl`,`hue`),parse:Ao(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+Ro.transform(To(t))+`, `+Ro.transform(To(n))+`, `+To(wo.transform(r))+`)`},Uo={test:e=>No.test(e)||Fo.test(e)||Ho.test(e),parse:e=>No.test(e)?No.parse(e):Ho.test(e)?Ho.parse(e):Fo.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?No.transform(e):Ho.transform(e),getAnimatableNone:e=>{let t=Uo.parse(e);return t.alpha=0,Uo.transform(t)}},Wo=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Go(e){return isNaN(e)&&typeof e==`string`&&(e.match(Eo)?.length||0)+(e.match(Wo)?.length||0)>0}var Ko=`number`,qo=`color`,Jo=`var`,Yo=`var(`,Xo="${}",Zo=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Qo(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(Zo,e=>(Uo.test(e)?(r.color.push(a),i.push(qo),n.push(Uo.parse(e))):e.startsWith(Yo)?(r.var.push(a),i.push(Jo),n.push(e)):(r.number.push(a),i.push(Ko),n.push(parseFloat(e))),++a,Xo)).split(Xo),indexes:r,types:i}}function $o(e){return Qo(e).values}function es({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===Ko?i+=To(r[a]):e===qo?i+=Uo.transform(r[a]):i+=r[a]}return i}}function ts(e){return es(Qo(e))}var ns=e=>typeof e==`number`?0:Uo.test(e)?Uo.getAnimatableNone(e):e,rs=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:ns(e);function is(e){let t=Qo(e);return es(t)(t.values.map((e,n)=>rs(e,t.split[n])))}var as={test:Go,parse:$o,createTransformer:ts,getAnimatableNone:is};function os(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ss({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=os(s,r,e+1/3),a=os(s,r,e),o=os(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function cs(e,t){return n=>n>0?t:e}var V=(e,t,n)=>e+(t-e)*n,ls=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},us=[Fo,No,Ho],ds=e=>us.find(t=>t.test(e));function fs(e){let t=ds(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===Ho&&(n=ss(n)),n}var ps=(e,t)=>{let n=fs(e),r=fs(t);if(!n||!r)return cs(e,t);let i={...n};return e=>(i.red=ls(n.red,r.red,e),i.green=ls(n.green,r.green,e),i.blue=ls(n.blue,r.blue,e),i.alpha=V(n.alpha,r.alpha,e),No.transform(i))},ms=new Set([`none`,`hidden`]);function hs(e,t){return ms.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function gs(e,t){return n=>V(e,t,n)}function _s(e){return typeof e==`number`?gs:typeof e==`string`?bo(e)?cs:Uo.test(e)?ps:xs:Array.isArray(e)?vs:typeof e==`object`?Uo.test(e)?ps:ys:cs}function vs(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>_s(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function ys(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=_s(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function bs(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var xs=(e,t)=>{let n=as.createTransformer(t),r=Qo(e),i=Qo(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?ms.has(e)&&!i.values.length||ms.has(t)&&!r.values.length?hs(e,t):Na(vs(bs(r,i),i.values),n):(`${e}${t}`,cs(e,t))};function Ss(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?V(e,t,n):_s(e)(e,t)}var Cs=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>F.update(t,e),stop:()=>po(t),now:()=>I.isProcessing?I.timestamp:L.now()}},ws=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Ts=2e4;function Es(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Ds(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Es(r),Ts);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:La(i)}}var H={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Os(e,t){return e*Math.sqrt(1-t*t)}var ks=12;function As(e,t,n){let r=n;for(let n=1;n<ks;n++)r-=e(r)/t(r);return r}var js=.001;function Ms({duration:e=H.duration,bounce:t=H.bounce,velocity:n=H.velocity,mass:r=H.mass}){let i,a;H.maxDuration;let o=1-t;o=Ta(H.minDamping,H.maxDamping,o),e=Ta(H.minDuration,H.maxDuration,La(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Os(t,o),c=Math.exp(-i);return js-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Os(t**2,o);return(-i(t)+js>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-js+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=As(i,a,s);if(e=Ia(e),isNaN(c))return{stiffness:H.stiffness,damping:H.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Ns=[`duration`,`bounce`],Ps=[`stiffness`,`damping`,`mass`];function Fs(e,t){return t.some(t=>e[t]!==void 0)}function Is(e){let t={velocity:H.velocity,stiffness:H.stiffness,damping:H.damping,mass:H.mass,isResolvedFromDuration:!1,...e};if(!Fs(e,Ps)&&Fs(e,Ns))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Ta(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:H.mass,stiffness:i,damping:a}}else{let n=Ms({...e,velocity:0});t={...t,...n,mass:H.mass},t.isResolvedFromDuration=!0}return t}function Ls(e=H.visualDuration,t=H.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=Is({...n,velocity:-La(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=La(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?H.restSpeed.granular:H.restSpeed.default,i||=v?H.restDelta.granular:H.restDelta.default;let y,b,x,S,C,w;if(h<1)x=Os(_,h),S=(m+h*_*g)/x,y=e=>o-Math.exp(-h*_*e)*(S*Math.sin(x*e)+g*Math.cos(x*e)),C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let T={calculatedDuration:p&&d||null,velocity:e=>Ia(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=Ia(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=Ia(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Es(T),Ts),t=ws(t=>T.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return T}Ls.applyToOptions=e=>{let t=Ds(e,100,Ls);return e.ease=t.ease,e.duration=Ia(t.duration),e.type=`keyframes`,e};var Rs=5;function zs(e,t,n){let r=Math.max(t-Rs,0);return Ra(n-e(r),t-r)}function Bs({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=Ls({keyframes:[f.value,m(f.value)],velocity:zs(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function Vs(e,t,n){let r=[],i=n||Ea.mix||Ss,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Na(Array.isArray(t)?t[n]||ja:t,a)),r.push(a)}return r}function Hs(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=Vs(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=Pa(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Ta(e[0],e[a-1],t)):l}function Us(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=Pa(0,t,r);e.push(V(n,1,i))}}function Ws(e){let t=[0];return Us(t,e.length-1),t}function Gs(e,t){return e.map(e=>e*t)}function Ks(e,t){return e.map(()=>t||to).splice(0,e.length-1)}function qs({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=no(r)?r.map(oo):oo(r),a={done:!1,value:t[0]},o=Hs(Gs(n&&n.length===t.length?n:Ws(t),e),t,{ease:Array.isArray(i)?i:Ks(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var Js=e=>e!==null;function Ys(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(Js),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Xs={decay:Bs,inertia:Bs,tween:qs,keyframes:qs,spring:Ls};function Zs(e){typeof e.type==`string`&&(e.type=Xs[e.type])}var Qs=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},$s=e=>e/100,ec=class extends Qs{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==L.now()&&this.tick(L.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},R.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;Zs(e);let{type:t=qs,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||qs;s!==qs&&typeof o[0]!=`number`&&(this.mixKeyframes=Na($s,Ss(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Es(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Ta(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==Bs&&(b.value=Ys(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return La(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+La(e)}get time(){return La(this.currentTime)}set time(e){e=Ia(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return zs(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(L.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=La(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Cs,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(L.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,R.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function tc(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var nc=e=>e*180/Math.PI,rc=e=>ac(nc(Math.atan2(e[1],e[0]))),ic={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:rc,rotateZ:rc,skewX:e=>nc(Math.atan(e[1])),skewY:e=>nc(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},ac=e=>(e%=360,e<0&&(e+=360),e),oc=rc,sc=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),cc=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),lc={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:sc,scaleY:cc,scale:e=>(sc(e)+cc(e))/2,rotateX:e=>ac(nc(Math.atan2(e[6],e[5]))),rotateY:e=>ac(nc(Math.atan2(-e[2],e[0]))),rotateZ:oc,rotate:oc,skewX:e=>nc(Math.atan(e[4])),skewY:e=>nc(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function uc(e){return+!!e.includes(`scale`)}function dc(e,t){if(!e||e===`none`)return uc(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=lc,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=ic,i=t}if(!i)return uc(t);let a=r[t],o=i[1].split(`,`).map(pc);return typeof a==`function`?a(o):o[a]}var fc=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return dc(n,t)};function pc(e){return parseFloat(e.trim())}var mc=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],hc=new Set(mc),gc=e=>e===Co||e===B,_c=new Set([`x`,`y`,`z`]),vc=mc.filter(e=>!_c.has(e));function yc(e){let t=[];return vc.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var bc={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>dc(t,`x`),y:(e,{transform:t})=>dc(t,`y`)};bc.translateX=bc.x,bc.translateY=bc.y;var xc=new Set,Sc=!1,Cc=!1,wc=!1;function Tc(){if(Cc){let e=Array.from(xc).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=yc(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Cc=!1,Sc=!1,xc.forEach(e=>e.complete(wc)),xc.clear()}function Ec(){xc.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Cc=!0)})}function Dc(){wc=!0,Ec(),Tc(),wc=!1}var Oc=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(xc.add(this),Sc||(Sc=!0,F.read(Ec),F.resolveKeyframes(Tc))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}tc(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),xc.delete(this)}cancel(){this.state===`scheduled`&&(xc.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},kc=e=>e.startsWith(`--`);function Ac(e,t,n){kc(t)?e.style.setProperty(t,n):e.style[t]=n}var jc={};function Mc(e,t){let n=Aa(e);return()=>jc[t]??n()}var Nc=Mc(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),Pc=Mc(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Fc=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ic={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Fc([0,.65,.55,1]),circOut:Fc([.55,0,1,.45]),backIn:Fc([.31,.01,.66,-.59]),backOut:Fc([.33,1.53,.69,.99])};function Lc(e,t){if(e)return typeof e==`function`?Pc()?ws(e,t):`ease-out`:ro(e)?Fc(e):Array.isArray(e)?e.map(e=>Lc(e,t)||Ic.easeOut):Ic[e]}function Rc(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Lc(s,i);Array.isArray(d)&&(u.easing=d),co.value&&R.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return co.value&&p.finished.finally(()=>{R.waapi--}),p}function U(e){return typeof e==`function`&&`applyToOptions`in e}function zc({type:e,...t}){return U(e)&&Pc()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var Bc=class extends Qs{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=zc(e);this.animation=Rc(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=Ys(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),Ac(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return La(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+La(e)}get time(){return La(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ia(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Nc()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),ja):r(this)}},Vc={anticipate:Ya,backInOut:Ja,circInOut:Qa};function Hc(e){return e in Vc}function Uc(e){typeof e.ease==`string`&&Hc(e.ease)&&(e.ease=Vc[e.ease])}var Wc=10,Gc=class extends Bc{constructor(e){Uc(e),Zs(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new ec({...a,autoplay:!1}),s=Math.max(Wc,L.now()-this.startTime),c=Ta(0,Wc,s-Wc),l=o.sample(s).value,{name:u}=this.options;i&&u&&Ac(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},Kc=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(as.test(e)||e===`0`)&&!e.startsWith(`url(`));function qc(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Jc(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=Kc(i,t),s=Kc(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:qc(e)||(n===`spring`||U(n))&&r}function Yc(e){e.duration=0,e.type=`keyframes`}var Xc=new Set([`opacity`,`clipPath`,`filter`,`transform`]),Zc=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Qc(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Zc.test(e[t]))return!0;return!1}var $c=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),el=Aa(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function tl(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return el()&&n&&(Xc.has(n)||$c.has(n)&&Qc(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var nl=40,rl=class extends Qs{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=L.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||Oc;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=L.now();let u=!0;Jc(e,i,a,o)||(u=!1,(Ea.instantAnimations||!s)&&l?.(Ys(e,n,t)),e[0]=e[e.length-1],Yc(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>nl?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&tl(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new Gc({...d,element:p})}catch{m=new ec(d)}else m=new ec(d);m.finished.then(()=>{this.notifyFinished()}).catch(ja),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Dc()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function il(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var al=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ol(e){let t=al.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function sl(e,t,n=1){`${e}`;let[r,i]=ol(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Da(e)?parseFloat(e):e}return bo(i)?sl(i,t,n+1):i}var cl={type:`spring`,stiffness:500,damping:25,restSpeed:10},W=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),ll={type:`keyframes`,duration:.8},ul={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},dl=(e,{keyframes:t})=>t.length>2?ll:hc.has(e)?e.startsWith(`scale`)?W(t[1]):cl:ul;function fl(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function pl(e,t){let n=e?.[t]??e?.default??e;return n===e?n:fl(n,e)}var ml=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function hl(e){for(let t in e)if(!ml.has(t))return!0;return!1}var gl=(e,t,n,r={},i,a)=>o=>{let s=pl(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=Ia(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};hl(s)||Object.assign(u,dl(e,u)),u.duration&&=Ia(u.duration),u.repeatDelay&&=Ia(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Yc(u),u.delay===0&&(d=!0)),(Ea.instantAnimations||Ea.skipAnimations||i?.shouldSkipAnimations)&&(d=!0,Yc(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Ys(u.keyframes,s);if(e!==void 0){F.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new ec(u):new rl(u)};function _l(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function vl(e,t,n,r){if(typeof t==`function`){let[i,a]=_l(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=_l(r);t=t(n===void 0?e.custom:n,i,a)}return t}function yl(e,t,n){let r=e.getProps();return vl(r,t,n===void 0?r.custom:n,e)}var bl=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...mc]),xl=30,Sl=e=>!isNaN(parseFloat(e)),Cl={current:void 0},wl=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=L.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=L.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Sl(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new Fa);let n=this.events[e].add(t);return e===`change`?()=>{n(),F.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Cl.current&&Cl.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=L.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>xl)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,xl);return Ra(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Tl(e,t){return new wl(e,t)}var El=e=>Array.isArray(e);function Dl(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Tl(n))}function Ol(e){return El(e)?e[e.length-1]||0:e}function kl(e,t){let{transitionEnd:n={},transition:r={},...i}=yl(e,t)||{};i={...i,...n};for(let t in i)Dl(e,t,Ol(i[t]))}var Al=e=>!!(e&&e.getVelocity);function jl(e){return!!(Al(e)&&e.add)}function Ml(e,t){let n=e.getValue(`willChange`);if(jl(n))return n.add(t);if(!n&&Ea.WillChange){let n=new Ea.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Nl(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Pl=`data-`+Nl(`framerAppearId`);function Fl(e){return e.props[Pl]}function Il({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Ll(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?fl(a,c):c;let l=a?.reduceMotion;r&&(a=r);let u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||d&&Il(d,t))continue;let o={delay:n,...pl(a||{},t)},c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){F.update(()=>r.set(i));continue}let f=!1;if(window.MotionHandoffAnimation){let n=Fl(e);if(n){let e=window.MotionHandoffAnimation(n,t,F);e!==null&&(o.startTime=e,f=!0)}}Ml(e,t);let p=l??e.shouldReduceMotion;r.start(gl(t,r,i,p&&bl.has(t)?{type:!1}:o,e,f));let m=r.animation;m&&u.push(m)}if(o){let t=()=>F.update(()=>{o&&kl(e,o)});u.length?Promise.all(u).then(t):t()}return u}function Rl(e,t,n={}){let r=yl(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(Ll(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return zl(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function zl(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(Rl(c,t,{...o,delay:n+(typeof r==`function`?0:r)+il(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function G(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>Rl(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=Rl(e,t,n);else{let i=typeof t==`function`?yl(e,t,n.custom):t;r=Promise.all(Ll(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var K={test:e=>e===`auto`,parse:e=>e},q=e=>t=>t.test(e),J=[Co,B,Ro,Lo,Bo,zo,K],Y=e=>J.find(q(e));function Bl(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||ka(e)}var Vl=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Hl(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Eo)||[];if(!r)return e;let i=n.replace(r,``),a=+!!Vl.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var Ul=/\b([a-z-]*)\(.*?\)/gu,Wl={...as,getAnimatableNone:e=>{let t=e.match(Ul);return t?t.map(Hl).join(` `):e}},Gl={...as,getAnimatableNone:e=>{let t=as.parse(e);return as.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Kl={...Co,transform:Math.round},ql={borderWidth:B,borderTopWidth:B,borderRightWidth:B,borderBottomWidth:B,borderLeftWidth:B,borderRadius:B,borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomRightRadius:B,borderBottomLeftRadius:B,width:B,maxWidth:B,height:B,maxHeight:B,top:B,right:B,bottom:B,left:B,inset:B,insetBlock:B,insetBlockStart:B,insetBlockEnd:B,insetInline:B,insetInlineStart:B,insetInlineEnd:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,paddingBlock:B,paddingBlockStart:B,paddingBlockEnd:B,paddingInline:B,paddingInlineStart:B,paddingInlineEnd:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,marginBlock:B,marginBlockStart:B,marginBlockEnd:B,marginInline:B,marginInlineStart:B,marginInlineEnd:B,fontSize:B,backgroundPositionX:B,backgroundPositionY:B,rotate:Lo,rotateX:Lo,rotateY:Lo,rotateZ:Lo,scale:z,scaleX:z,scaleY:z,scaleZ:z,skew:Lo,skewX:Lo,skewY:Lo,distance:B,translateX:B,translateY:B,translateZ:B,x:B,y:B,z:B,perspective:B,transformPerspective:B,opacity:wo,originX:Vo,originY:Vo,originZ:B,zIndex:Kl,fillOpacity:wo,strokeOpacity:wo,numOctaves:Kl},Jl={...ql,color:Uo,backgroundColor:Uo,outlineColor:Uo,fill:Uo,stroke:Uo,borderColor:Uo,borderTopColor:Uo,borderRightColor:Uo,borderBottomColor:Uo,borderLeftColor:Uo,filter:Wl,WebkitFilter:Wl,mask:Gl,WebkitMask:Gl},Yl=e=>Jl[e],Xl=new Set([Wl,Gl]);function Zl(e,t){let n=Yl(e);return Xl.has(n)||(n=as),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Ql=new Set([`auto`,`none`,`0`]);function $l(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Ql.has(t)&&Qo(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Zl(n,i)}var eu=class extends Oc{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),bo(r))){let i=sl(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!bl.has(n)||e.length!==2)return;let[r,i]=e,a=Y(r),o=Y(i);if(So(r)!==So(i)&&bc[n]){this.needsMeasurement=!0;return}if(a!==o)if(gc(a)&&gc(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else bc[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||Bl(e[t]))&&n.push(t);n.length&&$l(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=bc[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=bc[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function tu(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var nu=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function ru(e){return Oa(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:iu,cancel:au}=fo(queueMicrotask,!1),ou={x:!1,y:!1};function su(){return ou.x||ou.y}function cu(e){return e===`x`||e===`y`?ou[e]?null:(ou[e]=!0,()=>{ou[e]=!1}):ou.x||ou.y?null:(ou.x=ou.y=!0,()=>{ou.x=ou.y=!1})}function lu(e,t){let n=tu(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function uu(e){return!(e.pointerType===`touch`||su())}function du(e,t,n={}){let[r,i,a]=lu(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!uu(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var fu=(e,t)=>t?e===t?!0:fu(e,t.parentElement):!1,pu=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,mu=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function hu(e){return mu.has(e.tagName)||e.isContentEditable===!0}var gu=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function _u(e){return gu.has(e.tagName)||e.isContentEditable===!0}var vu=new WeakSet;function yu(e){return t=>{t.key===`Enter`&&e(t)}}function bu(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var xu=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=yu(()=>{if(vu.has(n))return;bu(n,`down`);let e=yu(()=>{bu(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>bu(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Su(e){return pu(e)&&!su()}var Cu=new WeakSet;function wu(e,t,n={}){let[r,i,a]=lu(e,n),o=e=>{let r=e.currentTarget;if(!Su(e)||Cu.has(e))return;vu.add(r),n.stopPropagation&&Cu.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),vu.has(r)&&vu.delete(r),Su(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||fu(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),ru(e)&&(e.addEventListener(`focus`,e=>xu(e,i)),!hu(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Tu(e){return Oa(e)&&`ownerSVGElement`in e}var Eu=new WeakMap,Du,Ou=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:Tu(r)&&`getBBox`in r?r.getBBox()[t]:r[n],ku=Ou(`inline`,`width`,`offsetWidth`),Au=Ou(`block`,`height`,`offsetHeight`);function ju({target:e,borderBoxSize:t}){Eu.get(e)?.forEach(n=>{n(e,{get width(){return ku(e,t)},get height(){return Au(e,t)}})})}function Mu(e){e.forEach(ju)}function Nu(){typeof ResizeObserver>`u`||(Du=new ResizeObserver(Mu))}function Pu(e,t){Du||Nu();let n=tu(e);return n.forEach(e=>{let n=Eu.get(e);n||(n=new Set,Eu.set(e,n)),n.add(t),Du?.observe(e)}),()=>{n.forEach(e=>{let n=Eu.get(e);n?.delete(t),n?.size||Du?.unobserve(e)})}}var Fu=new Set,Iu;function Lu(){Iu=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Fu.forEach(t=>t(e))},window.addEventListener(`resize`,Iu)}function Ru(e){return Fu.add(e),Iu||Lu(),()=>{Fu.delete(e),!Fu.size&&typeof Iu==`function`&&(window.removeEventListener(`resize`,Iu),Iu=void 0)}}function zu(e,t){return typeof e==`function`?Ru(e):Pu(e,t)}function Bu(e){return Tu(e)&&e.tagName===`svg`}var Vu=[...J,Uo,as],Hu=e=>Vu.find(q(e)),Uu=()=>({translate:0,scale:1,origin:0,originPoint:0}),Wu=()=>({x:Uu(),y:Uu()}),Gu=()=>({min:0,max:0}),X=()=>({x:Gu(),y:Gu()}),Ku=new WeakMap;function qu(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Ju(e){return typeof e==`string`||Array.isArray(e)}var Yu=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Xu=[`initial`,...Yu];function Zu(e){return qu(e.animate)||Xu.some(t=>Ju(e[t]))}function Qu(e){return!!(Zu(e)||e.variants)}function $u(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Al(i))e.addValue(r,i);else if(Al(a))e.addValue(r,Tl(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Tl(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var ed={current:null},td={current:!1},nd=typeof window<`u`;function rd(){if(td.current=!0,nd)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>ed.current=e.matches;e.addEventListener(`change`,t),t()}else ed.current=!1}var id=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],ad={};function od(e){ad=e}function sd(){return ad}var cd=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Oc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=L.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,F.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Zu(t),this.isVariantNode=Qu(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&Al(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Ku.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(td.current||rd(),this.shouldReduceMotion=ed.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),po(this.notifyUpdate),po(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Xc.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new Bc({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:Ia(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=hc.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&F.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in ad){let t=ad[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):X()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<id.length;t++){let n=id[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=$u(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Tl(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Da(n)||ka(n))?n=parseFloat(n):!Hu(n)&&as.test(t)&&(n=Zl(e,t)),this.setBaseTarget(e,Al(n)?n.get():n)),Al(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=vl(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Al(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Fa),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){iu.render(this.render)}},ld=class extends cd{constructor(){super(...arguments),this.KeyframeResolver=eu}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Al(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},ud=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function dd({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function fd({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function pd(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function md(e){return e===void 0||e===1}function hd({scale:e,scaleX:t,scaleY:n}){return!md(e)||!md(t)||!md(n)}function gd(e){return hd(e)||_d(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function _d(e){return vd(e.x)||vd(e.y)}function vd(e){return e&&e!==`0%`}function yd(e,t,n){return n+t*(e-n)}function bd(e,t,n,r,i){return i!==void 0&&(e=yd(e,i,r)),yd(e,n,r)+t}function Z(e,t=0,n=1,r,i){e.min=bd(e.min,t,n,r,i),e.max=bd(e.max,t,n,r,i)}function xd(e,{x:t,y:n}){Z(e.x,t.translate,t.scale,t.originPoint),Z(e.y,n.translate,n.scale,n.originPoint)}var Sd=.999999999999,Cd=1.0000000000001;function wd(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Td(e.x,-a.scroll.offset.x),Td(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,xd(e,o)),r&&gd(a.latestValues)&&Od(e,a.latestValues,a.layout?.layoutBox))}t.x<Cd&&t.x>Sd&&(t.x=1),t.y<Cd&&t.y>Sd&&(t.y=1)}function Td(e,t){e.min+=t,e.max+=t}function Ed(e,t,n,r,i=.5){Z(e,t,n,V(e.min,e.max,i),r)}function Dd(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function Od(e,t,n){let r=n??e;Ed(e.x,Dd(t.x,r.x),t.scaleX,t.scale,t.originX),Ed(e.y,Dd(t.y,r.y),t.scaleY,t.scale,t.originY)}function kd(e,t){return dd(pd(e.getBoundingClientRect(),t))}function Ad(e,t,n){let r=kd(e,n),{scroll:i}=t;return i&&(Td(r.x,i.offset.x),Td(r.y,i.offset.y)),r}var jd={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Md=mc.length;function Nd(e,t,n){let r=``,i=!0;for(let a=0;a<Md;a++){let o=mc[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=nu(s,ql[o]);if(!c){i=!1;let t=jd[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Q(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(hc.has(e)){o=!0;continue}else if(vo(e)){i[e]=n;continue}else{let t=nu(n,ql[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Nd(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Pd(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Fd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Id={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(B.test(e))e=parseFloat(e);else return e;return`${Fd(e,t.target.x)}% ${Fd(e,t.target.y)}%`}},Ld={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=as.parse(e);if(i.length>5)return r;let a=as.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=V(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Rd={borderRadius:{...Id,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:Id,borderTopRightRadius:Id,borderBottomLeftRadius:Id,borderBottomRightRadius:Id,boxShadow:Ld};function zd(e,{layout:t,layoutId:n}){return hc.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Rd[e]||e===`opacity`)}function Bd(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Al(r[t])||i&&Al(i[t])||zd(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Vd(e){return window.getComputedStyle(e)}var Hd=class extends ld{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Pd}readValueFromInstance(e,t){if(hc.has(t))return this.projection?.isProjecting?uc(t):fc(e,t);{let n=Vd(e),r=(vo(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return kd(e,t)}build(e,t,n){Q(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Bd(e,t,n)}},Ud={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Wd={offset:`strokeDashoffset`,array:`strokeDasharray`};function Gd(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Ud:Wd;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Kd=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function qd(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Q(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Kd)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Gd(d,i,a,o,!1)}var Jd=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Yd=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Xd(e,t,n,r){Pd(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Jd.has(n)?n:Nl(n),t.attrs[n])}function Zd(e,t,n){let r=Bd(e,t,n);for(let n in e)if(Al(e[n])||Al(t[n])){let t=mc.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Qd=class extends ld{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=X}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(hc.has(t)){let e=Yl(t);return e&&e.default||0}return t=Jd.has(t)?t:Nl(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Zd(e,t,n)}build(e,t,n){qd(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Xd(e,t,n,r)}mount(e){this.isSVGTag=Yd(e.tagName),super.mount(e)}},$d=Xu.length;function ef(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&ef(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<$d;n++){let r=Xu[n],i=e.props[r];(Ju(i)||i===!1)&&(t[r]=i)}return t}function tf(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var nf=[...Yu].reverse(),rf=Yu.length;function af(e){return t=>Promise.all(t.map(({animation:t,options:n})=>G(e,t,n)))}function of(e){let t=af(e),n=lf(),r=!0,i=!1,a=t=>(n,r)=>{let i=yl(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=ef(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<rf;t++){let p=nf[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=Ju(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||qu(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=sf(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,T={...w,...C},ee=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in T){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=El(t)&&El(n)?!tf(t,n):t!==n,r?t==null?u.add(e):ee(e):t!==void 0&&u.has(e)?ee(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let E=v&&y;b&&(!E||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!E&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=yl(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=il(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=yl(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=lf(),i=!0}}}function sf(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!tf(t,e):!1}function cf(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function lf(){return{animate:cf(!0),whileInView:cf(),whileHover:cf(),whileTap:cf(),whileDrag:cf(),whileFocus:cf(),exit:cf()}}function uf(e,t){e.min=t.min,e.max=t.max}function df(e,t){uf(e.x,t.x),uf(e.y,t.y)}function ff(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var pf=1e-4,mf=1-pf,hf=1+pf,gf=.01,_f=0-gf,vf=0+gf;function yf(e){return e.max-e.min}function bf(e,t,n){return Math.abs(e-t)<=n}function xf(e,t,n,r=.5){e.origin=r,e.originPoint=V(t.min,t.max,e.origin),e.scale=yf(n)/yf(t),e.translate=V(n.min,n.max,e.origin)-e.originPoint,(e.scale>=mf&&e.scale<=hf||isNaN(e.scale))&&(e.scale=1),(e.translate>=_f&&e.translate<=vf||isNaN(e.translate))&&(e.translate=0)}function Sf(e,t,n,r){xf(e.x,t.x,n.x,r?r.originX:void 0),xf(e.y,t.y,n.y,r?r.originY:void 0)}function Cf(e,t,n,r=0){e.min=(r?V(n.min,n.max,r):n.min)+t.min,e.max=e.min+yf(t)}function wf(e,t,n,r){Cf(e.x,t.x,n.x,r?.x),Cf(e.y,t.y,n.y,r?.y)}function Tf(e,t,n,r=0){let i=r?V(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+yf(t)}function Ef(e,t,n,r){Tf(e.x,t.x,n.x,r?.x),Tf(e.y,t.y,n.y,r?.y)}function Df(e,t,n,r,i){return e-=t,e=yd(e,1/n,r),i!==void 0&&(e=yd(e,1/i,r)),e}function Of(e,t=0,n=1,r=.5,i,a=e,o=e){if(Ro.test(t)&&(t=parseFloat(t),t=V(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=V(a.min,a.max,r);e===a&&(s-=t),e.min=Df(e.min,t,n,s,i),e.max=Df(e.max,t,n,s,i)}function kf(e,t,[n,r,i],a,o){Of(e,t[n],t[r],t[i],t.scale,a,o)}var Af=[`x`,`scaleX`,`originX`],jf=[`y`,`scaleY`,`originY`];function Mf(e,t,n,r){kf(e.x,t,Af,n?n.x:void 0,r?r.x:void 0),kf(e.y,t,jf,n?n.y:void 0,r?r.y:void 0)}function Nf(e){return e.translate===0&&e.scale===1}function Pf(e){return Nf(e.x)&&Nf(e.y)}function Ff(e,t){return e.min===t.min&&e.max===t.max}function If(e,t){return Ff(e.x,t.x)&&Ff(e.y,t.y)}function Lf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Rf(e,t){return Lf(e.x,t.x)&&Lf(e.y,t.y)}function zf(e){return yf(e.x)/yf(e.y)}function Bf(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Vf(e){return[e(`x`),e(`y`)]}function Hf(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Uf=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`],Wf=Uf.length,Gf=e=>typeof e==`string`?parseFloat(e):e,Kf=e=>typeof e==`number`||B.test(e);function qf(e,t,n,r,i,a){i?(e.opacity=V(0,n.opacity??1,Yf(r)),e.opacityExit=V(t.opacity??1,0,Xf(r))):a&&(e.opacity=V(t.opacity??1,n.opacity??1,r));for(let i=0;i<Wf;i++){let a=Uf[i],o=Jf(t,a),s=Jf(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||Kf(o)===Kf(s)?(e[a]=Math.max(V(Gf(o),Gf(s),r),0),(Ro.test(s)||Ro.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=V(t.rotate||0,n.rotate||0,r))}function Jf(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Yf=Zf(0,.5,Za),Xf=Zf(.5,.95,ja);function Zf(e,t,n){return r=>r<e?0:r>t?1:n(Pa(e,t,r))}function Qf(e,t,n){let r=Al(e)?e:Tl(e);return r.start(gl(``,r,t,n)),r.animation}function $f(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var ep=(e,t)=>e.depth-t.depth,tp=class{constructor(){this.children=[],this.isDirty=!1}add(e){Ca(this.children,e),this.isDirty=!0}remove(e){wa(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ep),this.isDirty=!1,this.children.forEach(e)}};function np(e,t){let n=L.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(po(r),e(a-t))};return F.setup(r,!0),()=>po(r)}function rp(e){return Al(e)?e.get():e}var ip=class{constructor(){this.members=[]}add(e){Ca(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(wa(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(wa(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},ap={hasAnimatedSinceResize:!0,hasEverUpdated:!1},op={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},sp=[``,`X`,`Y`,`Z`],cp=1e3,lp=0;function up(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function dp(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Fl(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,F,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&dp(r)}function fp({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=lp++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,co.value&&(op.nodes=op.calculatedTargetDeltas=op.calculatedProjections=0),this.nodes.forEach(hp),this.nodes.forEach(wp),this.nodes.forEach(Tp),this.nodes.forEach(gp),co.addProjectionMetrics&&co.addProjectionMetrics(op)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new tp)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Fa),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Tu(t)&&!Bu(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;F.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=np(i,250),ap.hasAnimatedSinceResize&&(ap.hasAnimatedSinceResize=!1,this.nodes.forEach(Cp)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Mp,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Rf(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...pl(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||Cp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),po(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Ep),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&dp(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(yp),this.nodes.forEach(vp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(bp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(xp),this.nodes.forEach(Sp),this.nodes.forEach(pp),this.nodes.forEach(mp)):this.nodes.forEach(bp),this.clearAllSnapshots();let e=L.now();I.delta=Ta(0,1e3/60,e-I.timestamp),I.timestamp=e,I.isProcessing=!0,mo.update.process(I),mo.preRender.process(I),mo.render.process(I),I.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,iu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(_p),this.sharedNodes.forEach(Dp)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,F.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){F.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!yf(this.snapshot.measuredBox.x)&&!yf(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=X(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Pf(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||gd(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Ip(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return X();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Rp))){let{scroll:e}=this.root;e&&(Td(t.x,e.offset.x),Td(t.y,e.offset.y))}return t}removeElementScroll(e){let t=X();if(df(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&df(t,e),Td(t.x,i.offset.x),Td(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||X();df(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(Td(r.x,-n.scroll.offset.x),Td(r.y,-n.scroll.offset.y)),gd(n.latestValues)&&Od(r,n.latestValues,n.layout?.layoutBox)}return gd(this.latestValues)&&Od(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=X();df(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!gd(n.latestValues))continue;let r;n.instance&&(hd(n.latestValues)&&n.updateSnapshot(),r=X(),df(r,n.measurePageBox())),Mf(t,n.latestValues,n.snapshot?.layoutBox,r)}return gd(this.latestValues)&&Mf(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==I.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=I.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=X(),this.targetWithTransforms=X()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),wf(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):df(this.target,this.layout.layoutBox),xd(this.target,this.targetDelta)):df(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),co.value&&op.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||hd(this.parent.latestValues)||_d(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=X(),this.relativeTargetOrigin=X(),Ef(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),df(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===I.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;df(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;wd(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=X());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ff(this.prevProjectionDelta.x,this.projectionDelta.x),ff(this.prevProjectionDelta.y,this.projectionDelta.y)),Sf(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Bf(this.projectionDelta.x,this.prevProjectionDelta.x)||!Bf(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),co.value&&op.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Wu(),this.projectionDelta=Wu(),this.projectionDeltaWithTransform=Wu()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=Wu();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=X(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(jp));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;Op(a.x,e.x,n),Op(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ef(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Ap(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&If(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=X(),df(d,this.relativeTarget)),s&&(this.animationValues=i,qf(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(po(this.pendingAnimation),void 0),this.pendingAnimation=F.update(()=>{ap.hasAnimatedSinceResize=!0,R.layout++,this.motionValue||=Tl(0),this.motionValue.jump(0,!1),this.currentAnimation=Qf(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{R.layout--},onComplete:()=>{R.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(cp),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Lp(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||X();let t=yf(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=yf(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}df(t,n),Od(t,i),Sf(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new ip),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&up(`z`,e,r,this.animationValues);for(let t=0;t<sp.length;t++)up(`rotate${sp[t]}`,e,r,this.animationValues),up(`skew${sp[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=rp(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=rp(t?.pointerEvents)||``),this.hasProjected&&!gd(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Hf(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in Rd){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Rd[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?rp(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(vp),this.root.sharedNodes.clear()}}}function pp(e){e.updateLayout()}function mp(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)Vf(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=yf(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;uf(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else Lp(i,t.layoutBox,n)&&Vf(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=yf(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Wu();Sf(o,n,t.layoutBox);let s=Wu();a?Sf(s,e.applyTransform(r,!0),t.measuredBox):Sf(s,n,t.layoutBox);let c=!Pf(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=X();Ef(s,t.layoutBox,i.layoutBox,o);let c=X();Ef(c,n,a.layoutBox,o),Rf(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function hp(e){co.value&&op.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function gp(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function _p(e){e.clearSnapshot()}function vp(e){e.clearMeasurements()}function yp(e){e.isLayoutDirty=!0,e.updateLayout()}function bp(e){e.isLayoutDirty=!1}function xp(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Sp(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Cp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function wp(e){e.resolveTargetDelta()}function Tp(e){e.calcProjection()}function Ep(e){e.resetSkewAndRotation()}function Dp(e){e.removeLeadSnapshot()}function Op(e,t,n){e.translate=V(t.translate,0,n),e.scale=V(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function kp(e,t,n,r){e.min=V(t.min,n.min,r),e.max=V(t.max,n.max,r)}function Ap(e,t,n,r){kp(e.x,t.x,n.x,r),kp(e.y,t.y,n.y,r)}function jp(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Mp={duration:.45,ease:[.4,0,.1,1]},Np=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Pp=Np(`applewebkit/`)&&!Np(`chrome/`)?Math.round:ja;function Fp(e){e.min=Pp(e.min),e.max=Pp(e.max)}function Ip(e){Fp(e.x),Fp(e.y)}function Lp(e,t,n){return e===`position`||e===`preserve-aspect`&&!bf(zf(t),zf(n),.2)}function Rp(e){return e!==e.root&&e.scroll?.wasRoot}var zp=fp({attachResizeListener:(e,t)=>$f(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Bp={current:void 0},Vp=fp({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Bp.current){let e=new zp({});e.mount(window),e.setOptions({layoutScroll:!0}),Bp.current=e}return Bp.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Hp=(0,w.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Up(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Wp(...e){return t=>{let n=!1,r=e.map(e=>{let r=Up(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Up(e[t],null)}}}}function Gp(...e){return w.useCallback(Wp(...e),e)}var Kp=class extends w.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(ru(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=ru(e)&&e.offsetWidth||0,r=ru(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}};function qp({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,w.useId)(),s=(0,w.useRef)(null),c=(0,w.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:l}=(0,w.useContext)(Hp),u=Gp(s,e.props?.ref??e?.ref);return(0,w.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m}=c.current;if(t||a===!1||!s.current||!e||!u)return;let h=n===`left`?`left: ${f}`:`right: ${p}`,g=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let _=document.createElement(`style`);l&&(_.nonce=l);let v=i??document.head;return v.appendChild(_),_.sheet&&_.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),v.contains(_)&&v.removeChild(_)}},[t]),(0,P.jsx)(Kp,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:w.cloneElement(e,{ref:u})})}var Jp=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=ba(Yp),d=(0,w.useId)(),f=!0,p=(0,w.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,w.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),w.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,P.jsx)(qp,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,P.jsx)(Sa.Provider,{value:p,children:e})};function Yp(){return new Map}function Xp(e=!0){let t=(0,w.useContext)(Sa);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,w.useId)();(0,w.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,w.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Zp=e=>e.key||``;function Qp(e){let t=[];return w.Children.forEach(e,e=>{(0,w.isValidElement)(e)&&t.push(e)}),t}var $p=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Xp(o),f=(0,w.useMemo)(()=>Qp(e),[e]),p=o&&!u?[]:f.map(Zp),m=(0,w.useRef)(!0),h=(0,w.useRef)(f),g=ba(()=>new Map),_=(0,w.useRef)(new Set),[v,y]=(0,w.useState)(f),[b,x]=(0,w.useState)(f);xa(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=Zp(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=Zp(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(Qp(e)),y(f),null}let{forceRender:C}=(0,w.useContext)(ya);return(0,P.jsx)(P.Fragment,{children:b.map(e=>{let v=Zp(e),y=o&&!u?!1:f===b||p.includes(v);return(0,P.jsx)(Jp,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(g.has(v))_.current.add(v),g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},em=(0,w.createContext)({strict:!1}),tm={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},nm=!1;function rm(){if(nm)return;let e={};for(let t in tm)e[t]={isEnabled:e=>tm[t].some(t=>!!e[t])};od(e),nm=!0}function im(){return rm(),sd()}function am(e){let t=im();for(let n in e)t[n]={...t[n],...e[n]};od(t)}var om=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function sm(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||om.has(e)}var cm=c({default:()=>lm}),lm,um=o((()=>{throw lm={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),dm=e=>!sm(e);function fm(e){typeof e==`function`&&(dm=t=>t.startsWith(`on`)?!sm(t):e(t))}try{fm((um(),d(cm)).default)}catch{}function pm(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||Al(e[i])||(dm(i)||n===!0&&sm(i)||!t&&!sm(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var mm=(0,w.createContext)({});function hm(e,t){if(Zu(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Ju(t)?t:void 0,animate:Ju(n)?n:void 0}}return e.inherit===!1?{}:t}function gm(e){let{initial:t,animate:n}=hm(e,(0,w.useContext)(mm));return(0,w.useMemo)(()=>({initial:t,animate:n}),[_m(t),_m(n)])}function _m(e){return Array.isArray(e)?e.join(` `):e}var vm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ym(e,t,n){for(let r in t)!Al(t[r])&&!zd(r,n)&&(e[r]=t[r])}function bm({transformTemplate:e},t){return(0,w.useMemo)(()=>{let n=vm();return Q(n,t,e),Object.assign({},n.vars,n.style)},[t])}function xm(e,t){let n=e.style||{},r={};return ym(r,n,e),Object.assign(r,bm(e,t)),r}function Sm(e,t){let n={},r=xm(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Cm=()=>({...vm(),attrs:{}});function wm(e,t,n,r){let i=(0,w.useMemo)(()=>{let n=Cm();return qd(n,t,Yd(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};ym(t,e.style,e),i.style={...t,...i.style}}return i}var Tm=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Em(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Tm.indexOf(e)>-1||/[A-Z]/u.test(e))}function Dm(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Em(e)?wm:Sm)(t,r,i,e),c=pm(t,typeof e==`string`,a),l=e===w.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,w.useMemo)(()=>Al(u)?u.get():u,[u]);return(0,w.createElement)(e,{...l,children:d})}function Om({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:km(n,r,i,e),renderState:t()}}function km(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=rp(a[e]);let{initial:o,animate:s}=e,c=Zu(e),l=Qu(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!qu(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=vl(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Am=e=>(t,n)=>{let r=(0,w.useContext)(mm),i=(0,w.useContext)(Sa),a=()=>Om(e,t,r,i);return n?a():ba(a)},jm=Am({scrapeMotionValuesFromProps:Bd,createRenderState:vm}),Mm=Am({scrapeMotionValuesFromProps:Zd,createRenderState:Cm}),Nm=Symbol.for(`motionComponentSymbol`);function Pm(e,t,n){let r=(0,w.useRef)(n);(0,w.useInsertionEffect)(()=>{r.current=n});let i=(0,w.useRef)(null);return(0,w.useCallback)(n=>{n&&e.onMount?.(n);let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n);t&&(n?t.mount(n):t.unmount())},[t])}var Fm=(0,w.createContext)({});function Im(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Lm(e,t,n,r,i,a){let{visualElement:o}=(0,w.useContext)(mm),s=(0,w.useContext)(em),c=(0,w.useContext)(Sa),l=(0,w.useContext)(Hp),u=l.reducedMotion,d=l.skipAnimations,f=(0,w.useRef)(null),p=(0,w.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,w.useContext)(Fm);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&Rm(f.current,n,i,h);let g=(0,w.useRef)(!1);(0,w.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[Pl],v=(0,w.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return xa(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,w.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function Rm(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:zm(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Im(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function zm(e){if(e)return e.options.allowProjection===!1?zm(e.parent):e.projection}function Bm(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&am(r);let a=n?n===`svg`:Em(e),o=a?Mm:jm;function s(n,s){let c,l={...(0,w.useContext)(Hp),...n,layoutId:Vm(n)},{isStatic:u}=l,d=gm(n),f=o(n,u);if(!u&&typeof window<`u`){Hm(l,r);let t=Um(l);c=t.MeasureLayout,d.visualElement=Lm(e,f,l,i,t.ProjectionNode,a)}return(0,P.jsxs)(mm.Provider,{value:d,children:[c&&d.visualElement?(0,P.jsx)(c,{visualElement:d.visualElement,...l}):null,Dm(e,n,Pm(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,w.forwardRef)(s);return c[Nm]=e,c}function Vm({layoutId:e}){let t=(0,w.useContext)(ya).id;return t&&e!==void 0?t+`-`+e:e}function Hm(e,t){(0,w.useContext)(em).strict}function Um(e){let{drag:t,layout:n}=im();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Wm(e,t){if(typeof Proxy>`u`)return Bm;let n=new Map,r=(n,r)=>Bm(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Bm(a,void 0,e,t)),n.get(a))})}var Gm=(e,t)=>t.isSVG??Em(e)?new Qd(t):new Hd(t,{allowProjection:e!==w.Fragment}),Km=class extends ud{constructor(e){super(e),e.animationState||=of(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();qu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},qm=0,Jm={animation:{Feature:Km},exit:{Feature:class extends ud{constructor(){super(...arguments),this.id=qm++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`){let n=yl(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Ym(e){return{point:{x:e.pageX,y:e.pageY}}}var Xm=e=>t=>pu(t)&&e(t,Ym(t));function Zm(e,t,n,r){return $f(e,t,Xm(n),r)}var Qm=({current:e})=>e?e.ownerDocument.defaultView:null,$m=(e,t)=>Math.abs(e-t);function eh(e,t){let n=$m(e.x,t.x),r=$m(e.y,t.y);return Math.sqrt(n**2+r**2)}var th=new Set([`auto`,`scroll`]),nh=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=rh(this.lastRawMoveEventInfo,this.transformPagePoint));let e=ah(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=eh(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=I;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=rh(t,this.transformPagePoint),F.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=ah(e.type===`pointercancel`?this.lastMoveEventInfo:rh(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!pu(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=rh(Ym(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=I;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,ah(s,this.history)),this.removeListeners=Na(Zm(this.contextWindow,`pointermove`,this.handlePointerMove),Zm(this.contextWindow,`pointerup`,this.handlePointerUp),Zm(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(th.has(e.overflowX)||th.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),F.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),po(this.updatePoint)}};function rh(e,t){return t?{point:t(e.point)}:e}function ih(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ah({point:e},t){return{point:e,delta:ih(e,sh(t)),offset:ih(e,oh(t)),velocity:ch(t,.1)}}function oh(e){return e[0]}function sh(e){return e[e.length-1]}function ch(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=sh(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Ia(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>Ia(t)*2&&(r=e[1]);let a=La(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function lh(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?V(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?V(n,e,r.max):Math.min(e,n)),e}function uh(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function dh(e,{top:t,left:n,bottom:r,right:i}){return{x:uh(e.x,n,i),y:uh(e.y,t,r)}}function fh(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function ph(e,t){return{x:fh(e.x,t.x),y:fh(e.y,t.y)}}function mh(e,t){let n=.5,r=yf(e),i=yf(t);return i>r?n=Pa(t.min,t.max-r,e.min):r>i&&(n=Pa(e.min,e.max-i,t.min)),Ta(0,1,n)}function hh(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var gh=.35;function _h(e=gh){return e===!1?e=0:e===!0&&(e=gh),{x:vh(e,`left`,`right`),y:vh(e,`top`,`bottom`)}}function vh(e,t,n){return{min:yh(e,t),max:yh(e,n)}}function yh(e,t){return typeof e==`number`?e:e[t]||0}var bh=new WeakMap,xh=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=X(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(Ym(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=cu(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Vf(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Ro.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=yf(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&F.update(()=>i(e,t),!1,!0),Ml(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Th(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&F.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new nh(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Qm(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&F.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!wh(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=lh(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Im(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=dh(n.layoutBox,e):this.constraints=!1,this.elastic=_h(t),r!==this.constraints&&!Im(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&Vf(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=hh(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Im(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=Ad(n,r.root,this.visualElement.getTransformPagePoint()),a=ph(r.layout.layoutBox,i);if(t){let e=t(fd(a));this.hasMutatedConstraints=!!e,e&&(a=dd(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Vf(o=>{if(!wh(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Ml(this.visualElement,e),n.start(gl(e,n,0,t,this.visualElement,!1))}stopAnimation(){Vf(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Vf(t=>{let{drag:n}=this.getProps();if(!wh(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-V(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Im(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Vf(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=mh({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Vf(t=>{if(!wh(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(V(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;bh.set(this.visualElement,this);let e=this.visualElement.current,t=Zm(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&_u(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();Im(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=Ch(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),F.read(r);let o=$f(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Vf(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=gh,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Sh(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function Ch(e,t,n){let r=zu(e,Sh(n)),i=zu(t,Sh(n));return()=>{r(),i()}}function wh(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Th(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Eh=class extends ud{constructor(e){super(e),this.removeGroupControls=ja,this.removeListeners=ja,this.controls=new xh(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ja}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Dh=e=>(t,n)=>{e&&F.update(()=>e(t,n),!1,!0)},Oh=class extends ud{constructor(){super(...arguments),this.removePointerDownListener=ja}onPointerDown(e){this.session=new nh(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Qm(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Dh(e),onStart:Dh(t),onMove:Dh(n),onEnd:(e,t)=>{delete this.session,r&&F.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Zm(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},kh=!1,Ah=class extends w.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),kh&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),ap.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),kh=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||F.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),iu.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;kh=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function jh(e){let[t,n]=Xp(),r=(0,w.useContext)(ya);return(0,P.jsx)(Ah,{...e,layoutGroup:r,switchLayoutGroup:(0,w.useContext)(Fm),isPresent:t,safeToRemove:n})}var Mh={pan:{Feature:Oh},drag:{Feature:Eh,ProjectionNode:Vp,MeasureLayout:jh}};function Nh(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&F.postRender(()=>i(t,Ym(t)))}var Ph=class extends ud{mount(){let{current:e}=this.node;e&&(this.unmount=du(e,(e,t)=>(Nh(this.node,t,`Start`),e=>Nh(this.node,e,`End`))))}unmount(){}},Fh=class extends ud{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Na($f(this.node.current,`focus`,()=>this.onFocus()),$f(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Ih(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&F.postRender(()=>i(t,Ym(t)))}var Lh=class extends ud{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=wu(e,(e,t)=>(Ih(this.node,t,`Start`),(e,{success:t})=>Ih(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},Rh=new WeakMap,zh=new WeakMap,Bh=e=>{let t=Rh.get(e.target);t&&t(e)},Vh=e=>{e.forEach(Bh)};function Hh({root:e,...t}){let n=e||document;zh.has(n)||zh.set(n,{});let r=zh.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Vh,{root:e,...t})),r[i]}function Uh(e,t,n){let r=Hh(t);return Rh.set(e,n),r.observe(e),()=>{Rh.delete(e),r.unobserve(e)}}var Wh={some:0,all:1},Gh=class extends ud{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Wh[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=Uh(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Kh(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function Kh({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var qh={inView:{Feature:Gh},tap:{Feature:Lh},focus:{Feature:Fh},hover:{Feature:Ph}},Jh={layout:{ProjectionNode:Vp,MeasureLayout:jh}},$=Wm({...Jm,...qh,...Mh,...Jh},Gm),Yh={some:0,all:1};function Xh(e,t,{root:n,margin:r,amount:i=`some`}={}){let a=tu(e),o=new WeakMap,s=new IntersectionObserver(e=>{e.forEach(e=>{let n=o.get(e.target);if(e.isIntersecting!==!!n)if(e.isIntersecting){let n=t(e.target,e);typeof n==`function`?o.set(e.target,n):s.unobserve(e.target)}else typeof n==`function`&&(n(e),o.delete(e.target))})},{root:n,rootMargin:r,threshold:typeof i==`number`?i:Yh[i]});return a.forEach(e=>s.observe(e)),()=>s.disconnect()}function Zh(e,{root:t,margin:n,amount:r,once:i=!1,initial:a=!1}={}){let[o,s]=(0,w.useState)(a);return(0,w.useEffect)(()=>{if(!e.current||i&&o)return;let a=()=>(s(!0),i?void 0:()=>s(!1)),c={root:t&&t.current||void 0,margin:n,amount:r};return Xh(e.current,a,c)},[t,e,n,i,r]),o}var Qh=`/Balaji-Infotech/assets/dashboard-CaxstE_a.png`;function $h(){return(0,P.jsxs)(`section`,{className:`\r
      relative\r
      min-h-screen\r
      overflow-hidden\r
      bg-[#071426]\r
      px-4 sm:px-6 lg:px-10\r
      flex items-center\r
    `,children:[(0,P.jsx)(`div`,{className:`absolute top-[-150px] right-[-100px] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[#7B61FF]/30 blur-[120px] sm:blur-[140px] rounded-full`}),(0,P.jsx)(`div`,{className:`absolute bottom-[-200px] left-[-100px] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[#2F80FF]/20 blur-[130px] sm:blur-[160px] rounded-full`}),(0,P.jsxs)(`div`,{className:`\r
        relative\r
        max-w-7xl\r
        mx-auto\r
        w-full\r
        grid\r
        lg:grid-cols-[1.2fr_1fr]\r
        items-center\r
        pt-28 sm:pt-32 lg:pt-32\r
        pb-16\r
        gap-14 lg:gap-16\r
      `,children:[(0,P.jsxs)($.div,{initial:{opacity:0,x:-80},whileInView:{opacity:1,x:0},transition:{duration:.8,ease:`easeOut`},viewport:{once:!0},className:`order-2 lg:order-1`,children:[(0,P.jsxs)(`div`,{className:`\r
              inline-flex\r
              items-center\r
              gap-2\r
              px-4 py-2\r
              rounded-full\r
              border border-white/10\r
              bg-white/5\r
              backdrop-blur-lg\r
              text-white/80\r
              text-xs sm:text-sm\r
              mb-6 sm:mb-8\r
              max-w-full\r
            `,children:[(0,P.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0`}),(0,P.jsx)(`span`,{className:`truncate`,children:`Trusted Tally Solutions Partner`})]}),(0,P.jsxs)(`h1`,{className:`\r
              text-white\r
              text-[34px]\r
              sm:text-[46px]\r
              lg:text-[58px]\r
              font-bold\r
              leading-[1.05]\r
              max-w-[700px]\r
            `,children:[`Balaji AI Infotech`,(0,P.jsx)(`div`,{className:`mt-3 sm:mt-4`,children:(0,P.jsx)(va,{sequence:[`Tally solutions and trainings`,2e3,`Tally sales and services`,2e3,`Tally certified partner`,2e3],wrapper:`h1`,speed:50,repeat:1/0,className:`\r
                  text-[20px]\r
                  sm:text-[26px]\r
                  lg:text-[30px]\r
                  font-semibold\r
                  leading-[1.3]\r
                  text-transparent\r
                  bg-clip-text\r
                  bg-gradient-to-r\r
                  from-[#2F80FF]\r
                  to-[#7B61FF]\r
                `})})]}),(0,P.jsx)(`p`,{className:`\r
              mt-7 sm:mt-10\r
              max-w-[620px]\r
              text-[15px] sm:text-base\r
              leading-7\r
              text-white/70\r
            `,children:`We specialize in providing professional Tally services that enhance your business productivity. From implementation to troubleshooting, we ensure smooth operations every step of the way.`}),(0,P.jsxs)(`div`,{className:`mt-8 flex flex-col sm:flex-row gap-4`,children:[(0,P.jsx)(`a`,{href:`tel:+919849431943`,children:(0,P.jsxs)(`button`,{className:`\r
                group\r
                w-full sm:w-auto\r
                px-7 py-4\r
                rounded-2xl\r
                bg-gradient-to-r from-[#2F80FF] to-[#7B61FF]\r
                text-white\r
                font-medium\r
                flex items-center justify-center gap-2\r
                hover:scale-[1.02]\r
                transition duration-300\r
                shadow-[0_10px_30px_rgba(123,97,255,0.35)]\r
              `,children:[`Call Us`,(0,P.jsx)(li,{size:18,className:`group-hover:translate-x-1 transition`})]})}),(0,P.jsx)(`a`,{href:`https://wa.me/919849431943`,target:`_blank`,rel:`noopener noreferrer`,children:(0,P.jsxs)(`button`,{className:`\r
                group\r
                w-full sm:w-auto\r
                px-7 sm:px-10\r
                py-4\r
                rounded-2xl\r
                border border-white/10\r
                bg-white/5\r
                backdrop-blur-lg\r
                text-white\r
                flex items-center justify-center gap-2\r
                hover:bg-white/10\r
                transition duration-300\r
              `,children:[`Chat with Us`,(0,P.jsx)(ti,{size:18,className:`group-hover:translate-x-1 transition`})]})})]}),(0,P.jsxs)(`div`,{className:`\r
              mt-8\r
              grid\r
              grid-cols-1\r
              sm:grid-cols-2\r
              lg:grid-cols-3\r
              gap-4 sm:gap-5\r
            `,children:[(0,P.jsxs)(`div`,{className:`\r
                flex items-center gap-3\r
                border border-white/10\r
                bg-white/5\r
                backdrop-blur-2xl\r
                rounded-2xl\r
                px-4 py-4\r
              `,children:[(0,P.jsx)(Ci,{className:`text-[#2F80FF] shrink-0`,size:24}),(0,P.jsx)(`div`,{children:(0,P.jsx)(`h4`,{className:`text-white font-medium text-sm sm:text-base`,children:`Trusted Experts`})})]}),(0,P.jsxs)(`div`,{className:`\r
                flex items-center gap-3\r
                border border-white/10\r
                bg-white/5\r
                backdrop-blur-lg\r
                rounded-2xl\r
                px-4 py-4\r
              `,children:[(0,P.jsx)(cr,{className:`text-[#7B61FF] shrink-0`,size:24}),(0,P.jsx)(`div`,{children:(0,P.jsx)(`h4`,{className:`text-white font-medium text-sm sm:text-base`,children:`Experienced`})})]}),(0,P.jsxs)(`div`,{className:`\r
                flex items-center gap-3\r
                border border-white/10\r
                bg-white/5\r
                backdrop-blur-2xl\r
                rounded-2xl\r
                px-4 py-4\r
              `,children:[(0,P.jsx)(cr,{className:`text-[#7B61FF] shrink-0`,size:24}),(0,P.jsx)(`div`,{children:(0,P.jsx)(`h4`,{className:`text-white font-medium text-sm sm:text-base`,children:`Professional`})})]})]})]}),(0,P.jsx)($.div,{className:`\r
            relative\r
            flex justify-center lg:justify-end\r
            order-1 lg:order-2\r
          `,initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},transition:{duration:1,ease:`easeOut`,delay:.2},viewport:{once:!0},children:(0,P.jsx)(`div`,{className:`\r
              relative\r
              w-full\r
              max-w-[520px]\r
              rounded-[28px] sm:rounded-[32px]\r
              p-[2px]\r
              bg-gradient-to-br\r
              from-[#2F80FF]/60\r
              via-[#7B61FF]/40\r
              to-transparent\r
              shadow-[0_0_60px_rgba(123,97,255,0.25)]\r
            `,children:(0,P.jsx)(`div`,{className:`\r
                rounded-[26px] sm:rounded-[30px]\r
                overflow-hidden\r
                border border-white/10\r
                bg-[#0B1120]\r
                backdrop-blur-xl\r
              `,children:(0,P.jsx)(`img`,{src:Qh,alt:`Dashboard`,className:`\r
                  w-full\r
                  h-[260px] sm:h-[420px]\r
                  object-cover\r
                  scale-105\r
                `})})})})]})]})}function eg(e){return typeof e==`object`&&!!e&&`constructor`in e&&e.constructor===Object}function tg(e={},t={}){let n=[`__proto__`,`constructor`,`prototype`];Object.keys(t).filter(e=>n.indexOf(e)<0).forEach(n=>{e[n]===void 0?e[n]=t[n]:eg(t[n])&&eg(e[n])&&Object.keys(t[n]).length>0&&tg(e[n],t[n])})}var ng={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:``},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:``,host:``,hostname:``,href:``,origin:``,pathname:``,protocol:``,search:``}};function rg(){let e=typeof document<`u`?document:{};return tg(e,ng),e}var ig={document:ng,navigator:{userAgent:``},location:{hash:``,host:``,hostname:``,href:``,origin:``,pathname:``,protocol:``,search:``},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return``}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>`u`?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>`u`||clearTimeout(e)}};function ag(){let e=typeof window<`u`?window:{};return tg(e,ig),e}function og(e=``){return e.trim().split(` `).filter(e=>!!e.trim())}function sg(e){let t=e;Object.keys(t).forEach(e=>{try{t[e]=null}catch{}try{delete t[e]}catch{}})}function cg(e,t=0){return setTimeout(e,t)}function lg(){return Date.now()}function ug(e){let t=ag(),n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||=e.style,n}function dg(e,t=`x`){let n=ag(),r,i,a,o=ug(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(`,`).length>6&&(i=i.split(`, `).map(e=>e.replace(`,`,`.`)).join(`, `)),a=new n.WebKitCSSMatrix(i===`none`?``:i)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue(`transform`).replace(`translate(`,`matrix(1, 0, 0, 1,`),r=a.toString().split(`,`)),t===`x`&&(i=n.WebKitCSSMatrix?a.m41:r.length===16?parseFloat(r[12]):parseFloat(r[4])),t===`y`&&(i=n.WebKitCSSMatrix?a.m42:r.length===16?parseFloat(r[13]):parseFloat(r[5])),i||0}function fg(e){return typeof e==`object`&&!!e&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)===`Object`}function pg(e){return typeof window<`u`&&window.HTMLElement!==void 0?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function mg(...e){let t=Object(e[0]);for(let n=1;n<e.length;n+=1){let r=e[n];if(r!=null&&!pg(r)){let e=Object.keys(Object(r)).filter(e=>e!==`__proto__`&&e!==`constructor`&&e!==`prototype`);for(let n=0,i=e.length;n<i;n+=1){let i=e[n],a=Object.getOwnPropertyDescriptor(r,i);a!==void 0&&a.enumerable&&(fg(t[i])&&fg(r[i])?r[i].__swiper__?t[i]=r[i]:mg(t[i],r[i]):!fg(t[i])&&fg(r[i])?(t[i]={},r[i].__swiper__?t[i]=r[i]:mg(t[i],r[i])):t[i]=r[i])}}}return t}function hg(e,t,n){e.style.setProperty(t,n)}function gg({swiper:e,targetPosition:t,side:n}){let r=ag(),i=-e.translate,a=null,o,s=e.params.speed;e.wrapperEl.style.scrollSnapType=`none`,r.cancelAnimationFrame(e.cssModeFrameID);let c=t>i?`next`:`prev`,l=(e,t)=>c===`next`&&e>=t||c===`prev`&&e<=t,u=()=>{o=new Date().getTime(),a===null&&(a=o);let c=Math.max(Math.min((o-a)/s,1),0),d=i+(.5-Math.cos(c*Math.PI)/2)*(t-i);if(l(d,t)&&(d=t),e.wrapperEl.scrollTo({[n]:d}),l(d,t)){e.wrapperEl.style.overflow=`hidden`,e.wrapperEl.style.scrollSnapType=``,setTimeout(()=>{e.wrapperEl.style.overflow=``,e.wrapperEl.scrollTo({[n]:d})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(u)};u()}function _g(e,t=``){let n=ag(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(e=>e.matches(t)):r}function vg(e,t){let n=[t];for(;n.length>0;){let t=n.shift();if(e===t)return!0;n.push(...t.children,...t.shadowRoot?t.shadowRoot.children:[],...t.assignedElements?t.assignedElements():[])}}function yg(e,t){let n=ag(),r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||=vg(e,t)),r}function bg(e){try{console.warn(e);return}catch{}}function xg(e,t=[]){let n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:og(t)),n}function Sg(e,t){let n=[];for(;e.previousElementSibling;){let r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Cg(e,t){let n=[];for(;e.nextElementSibling;){let r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function wg(e,t){return ag().getComputedStyle(e,null).getPropertyValue(t)}function Tg(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Eg(e,t){let n=[],r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Dg(e,t,n){let r=ag();return n?e[t===`width`?`offsetWidth`:`offsetHeight`]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t===`width`?`margin-right`:`margin-top`))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t===`width`?`margin-left`:`margin-bottom`)):e.offsetWidth}function Og(e,t=``){typeof trustedTypes<`u`?e.innerHTML=trustedTypes.createPolicy(`html`,{createHTML:e=>e}).createHTML(t):e.innerHTML=t}var kg;function Ag(){let e=ag(),t=rg();return{smoothScroll:t.documentElement&&t.documentElement.style&&`scrollBehavior`in t.documentElement.style,touch:!!(`ontouchstart`in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function jg(){return kg||=Ag(),kg}var Mg;function Ng({userAgent:e}={}){let t=jg(),n=ag(),r=n.navigator.platform,i=e||n.navigator.userAgent,a={ios:!1,android:!1},o=n.screen.width,s=n.screen.height,c=i.match(/(Android);?[\s\/]+([\d.]+)?/),l=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/),u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!l&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=r===`Win32`,p=r===`MacIntel`;return!l&&p&&t.touch&&[`1024x1366`,`1366x1024`,`834x1194`,`1194x834`,`834x1112`,`1112x834`,`768x1024`,`1024x768`,`820x1180`,`1180x820`,`810x1080`,`1080x810`].indexOf(`${o}x${s}`)>=0&&(l=i.match(/(Version)\/([\d.]+)/),l||=[0,1,`13_0_0`],p=!1),c&&!f&&(a.os=`android`,a.android=!0),(l||d||u)&&(a.os=`ios`,a.ios=!0),a}function Pg(e={}){return Mg||=Ng(e),Mg}var Fg;function Ig(){let e=ag(),t=Pg(),n=!1;function r(){let t=e.navigator.userAgent.toLowerCase();return t.indexOf(`safari`)>=0&&t.indexOf(`chrome`)<0&&t.indexOf(`android`)<0}if(r()){let t=String(e.navigator.userAgent);if(t.includes(`Version/`)){let[e,r]=t.split(`Version/`)[1].split(` `)[0].split(`.`).map(e=>Number(e));n=e<16||e===16&&r<2}}let i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),a=r(),o=a||i&&t.ios;return{isSafari:n||a,needPerspectiveFix:n,need3dFix:o,isWebView:i}}function Lg(){return Fg||=Ig(),Fg}function Rg({swiper:e,on:t,emit:n}){let r=ag(),i=null,a=null,o=()=>{!e||e.destroyed||!e.initialized||(n(`beforeResize`),n(`resize`))},s=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(t=>{a=r.requestAnimationFrame(()=>{let{width:n,height:r}=e,i=n,a=r;t.forEach(({contentBoxSize:t,contentRect:n,target:r})=>{r&&r!==e.el||(i=n?n.width:(t[0]||t).inlineSize,a=n?n.height:(t[0]||t).blockSize)}),(i!==n||a!==r)&&o()})}),i.observe(e.el))},c=()=>{a&&r.cancelAnimationFrame(a),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},l=()=>{!e||e.destroyed||!e.initialized||n(`orientationchange`)};t(`init`,()=>{if(e.params.resizeObserver&&r.ResizeObserver!==void 0){s();return}r.addEventListener(`resize`,o),r.addEventListener(`orientationchange`,l)}),t(`destroy`,()=>{c(),r.removeEventListener(`resize`,o),r.removeEventListener(`orientationchange`,l)})}function zg({swiper:e,extendParams:t,on:n,emit:r}){let i=[],a=ag(),o=(t,n={})=>{let o=new(a.MutationObserver||a.WebkitMutationObserver)(t=>{if(e.__preventObserver__)return;if(t.length===1){r(`observerUpdate`,t[0]);return}let n=function(){r(`observerUpdate`,t[0])};a.requestAnimationFrame?a.requestAnimationFrame(n):a.setTimeout(n,0)});o.observe(t,{attributes:n.attributes===void 0?!0:n.attributes,childList:e.isElement||(n.childList===void 0?!0:n).childList,characterData:n.characterData===void 0?!0:n.characterData}),i.push(o)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n(`init`,()=>{if(e.params.observer){if(e.params.observeParents){let t=Eg(e.hostEl);for(let e=0;e<t.length;e+=1)o(t[e])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}}),n(`destroy`,()=>{i.forEach(e=>{e.disconnect()}),i.splice(0,i.length)})}var Bg={on(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;let i=n?`unshift`:`push`;return e.split(` `).forEach(e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][i](t)}),r},once(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;function i(...n){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,n)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){let n=this;if(!n.eventsListeners||n.destroyed||typeof e!=`function`)return n;let r=t?`unshift`:`push`;return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;let n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){let n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(` `).forEach(e=>{t===void 0?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach((r,i)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(i,1)})}),n},emit(...e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]==`string`||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(` `)).forEach(e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(t=>{t.apply(i,[e,...r])}),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach(e=>{e.apply(i,r)})}),t}};function Vg(){let e=this,t,n,r=e.el;t=e.params.width!==void 0&&e.params.width!==null?e.params.width:r.clientWidth,n=e.params.height!==void 0&&e.params.height!==null?e.params.height:r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(wg(r,`padding-left`)||0,10)-parseInt(wg(r,`padding-right`)||0,10),n=n-parseInt(wg(r,`padding-top`)||0,10)-parseInt(wg(r,`padding-bottom`)||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function Hg(){let e=this;function t(t,n){return parseFloat(t.getPropertyValue(e.getDirectionLabel(n))||0)}let n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:a,wrongRTL:o}=e,s=e.virtual&&n.virtual.enabled,c=s?e.virtual.slides.length:e.slides.length,l=_g(i,`.${e.params.slideClass}, swiper-slide`),u=s?e.virtual.slides.length:l.length,d=[],f=[],p=[],m=n.slidesOffsetBefore;typeof m==`function`&&(m=n.slidesOffsetBefore.call(e));let h=n.slidesOffsetAfter;typeof h==`function`&&(h=n.slidesOffsetAfter.call(e));let g=e.snapGrid.length,_=e.slidesGrid.length,v=e.size-m-h,y=n.spaceBetween,b=-m,x=0,S=0;if(v===void 0)return;typeof y==`string`&&y.indexOf(`%`)>=0?y=parseFloat(y.replace(`%`,``))/100*v:typeof y==`string`&&(y=parseFloat(y)),e.virtualSize=-y-m-h,l.forEach(e=>{a?e.style.marginLeft=``:e.style.marginRight=``,e.style.marginBottom=``,e.style.marginTop=``}),n.centeredSlides&&n.cssMode&&(hg(r,`--swiper-centered-offset-before`,``),hg(r,`--swiper-centered-offset-after`,``)),n.cssMode&&(hg(r,`--swiper-slides-offset-before`,`${m}px`),hg(r,`--swiper-slides-offset-after`,`${h}px`));let C=n.grid&&n.grid.rows>1&&e.grid;C?e.grid.initSlides(l):e.grid&&e.grid.unsetSlides();let w,T=n.slidesPerView===`auto`&&n.breakpoints&&Object.keys(n.breakpoints).filter(e=>n.breakpoints[e].slidesPerView!==void 0).length>0;for(let r=0;r<u;r+=1){w=0;let i=l[r];if(!(i&&(C&&e.grid.updateSlide(r,i,l),wg(i,`display`)===`none`))){if(s&&n.slidesPerView===`auto`)n.virtual.slidesPerViewAutoSlideSize&&(w=n.virtual.slidesPerViewAutoSlideSize),w&&i&&(n.roundLengths&&(w=Math.floor(w)),i.style[e.getDirectionLabel(`width`)]=`${w}px`);else if(n.slidesPerView===`auto`){T&&(i.style[e.getDirectionLabel(`width`)]=``);let r=getComputedStyle(i),a=i.style.transform,o=i.style.webkitTransform;if(a&&(i.style.transform=`none`),o&&(i.style.webkitTransform=`none`),n.roundLengths)w=e.isHorizontal()?Dg(i,`width`,!0):Dg(i,`height`,!0);else{let e=t(r,`width`),n=t(r,`padding-left`),a=t(r,`padding-right`),o=t(r,`margin-left`),s=t(r,`margin-right`),c=r.getPropertyValue(`box-sizing`);if(c&&c===`border-box`)w=e+o+s;else{let{clientWidth:t,offsetWidth:r}=i;w=e+n+a+o+s+(r-t)}}a&&(i.style.transform=a),o&&(i.style.webkitTransform=o),n.roundLengths&&(w=Math.floor(w))}else w=(v-(n.slidesPerView-1)*y)/n.slidesPerView,n.roundLengths&&(w=Math.floor(w)),i&&(i.style[e.getDirectionLabel(`width`)]=`${w}px`);i&&(i.swiperSlideSize=w),p.push(w),n.centeredSlides?(b=b+w/2+x/2+y,x===0&&r!==0&&(b=b-v/2-y),r===0&&(b=b-v/2-y),Math.abs(b)<1/1e3&&(b=0),n.roundLengths&&(b=Math.floor(b)),S%n.slidesPerGroup===0&&d.push(b),f.push(b)):(n.roundLengths&&(b=Math.floor(b)),(S-Math.min(e.params.slidesPerGroupSkip,S))%e.params.slidesPerGroup===0&&d.push(b),f.push(b),b=b+w+y),e.virtualSize+=w+y,x=w,S+=1}}if(e.virtualSize=Math.max(e.virtualSize,v)+h,a&&o&&(n.effect===`slide`||n.effect===`coverflow`)&&(r.style.width=`${e.virtualSize+y}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel(`width`)]=`${e.virtualSize+y}px`),C&&e.grid.updateWrapperSize(w,d),!n.centeredSlides){let t=n.slidesPerView!==`auto`&&n.slidesPerView%1!=0,r=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView===`auto`||t),i=d.length;if(r){let e;if(n.slidesPerView===`auto`){e=1;let t=0;for(let n=p.length-1;n>=0&&(t+=p[n]+(n<p.length-1?y:0),t<=v);--n)e=p.length-n}else e=Math.floor(n.slidesPerView);i=Math.max(u-e,0)}let a=[];for(let t=0;t<d.length;t+=1){let o=d[t];n.roundLengths&&(o=Math.floor(o)),r?t<=i&&a.push(o):d[t]<=e.virtualSize-v&&a.push(o)}d=a,Math.floor(e.virtualSize-v)-Math.floor(d[d.length-1])>1&&(r||d.push(e.virtualSize-v))}if(s&&n.loop){let t=p[0]+y;if(n.slidesPerGroup>1){let r=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),i=t*n.slidesPerGroup;for(let e=0;e<r;e+=1)d.push(d[d.length-1]+i)}for(let r=0;r<e.virtual.slidesBefore+e.virtual.slidesAfter;r+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+t),f.push(f[f.length-1]+t),e.virtualSize+=t}if(d.length===0&&(d=[0]),y!==0){let t=e.isHorizontal()&&a?`marginLeft`:e.getDirectionLabel(`marginRight`);l.filter((e,t)=>!n.cssMode||n.loop?!0:t!==l.length-1).forEach(e=>{e.style[t]=`${y}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let e=0;p.forEach(t=>{e+=t+(y||0)}),e-=y;let t=e>v?e-v:0;d=d.map(e=>e<=0?-m:e>t?t+h:e)}if(n.centerInsufficientSlides){let e=0;if(p.forEach(t=>{e+=t+(y||0)}),e-=y,e<v){let t=(v-e)/2;d.forEach((e,n)=>{d[n]=e-t}),f.forEach((e,n)=>{f[n]=e+t})}}if(Object.assign(e,{slides:l,snapGrid:d,slidesGrid:f,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){hg(r,`--swiper-centered-offset-before`,`${-d[0]}px`),hg(r,`--swiper-centered-offset-after`,`${e.size/2-p[p.length-1]/2}px`);let t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(e=>e+t),e.slidesGrid=e.slidesGrid.map(e=>e+n)}if(u!==c&&e.emit(`slidesLengthChange`),d.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit(`snapGridLengthChange`)),f.length!==_&&e.emit(`slidesGridLengthChange`),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit(`slidesUpdated`),!s&&!n.cssMode&&(n.effect===`slide`||n.effect===`fade`)){let t=`${n.containerModifierClass}backface-hidden`,r=e.el.classList.contains(t);u<=n.maxBackfaceHiddenSlides?r||e.el.classList.add(t):r&&e.el.classList.remove(t)}}function Ug(e){let t=this,n=[],r=t.virtual&&t.params.virtual.enabled,i=0,a;typeof e==`number`?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);let o=e=>r?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if(t.params.slidesPerView!==`auto`&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(e=>{n.push(e)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){let e=t.activeIndex+a;if(e>t.slides.length&&!r)break;n.push(o(e))}else n.push(o(t.activeIndex));for(a=0;a<n.length;a+=1)if(n[a]!==void 0){let e=n[a].offsetHeight;i=e>i?e:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function Wg(){let e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}var Gg=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function Kg(e=this&&this.translate||0){let t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(r.length===0)return;r[0].swiperSlideOffset===void 0&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s==`string`&&s.indexOf(`%`)>=0?s=parseFloat(s.replace(`%`,``))/100*t.size:typeof s==`string`&&(s=parseFloat(s));for(let e=0;e<r.length;e+=1){let c=r[e],l=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(l-=r[0].swiperSlideOffset);let u=(o+(n.centeredSlides?t.minTranslate():0)-l)/(c.swiperSlideSize+s),d=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-l)/(c.swiperSlideSize+s),f=-(o-l),p=f+t.slidesSizesGrid[e],m=f>=0&&f<=t.size-t.slidesSizesGrid[e],h=f>=0&&f<t.size-1||p>1&&p<=t.size||f<=0&&p>=t.size;h&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(e)),Gg(c,h,n.slideVisibleClass),Gg(c,m,n.slideFullyVisibleClass),c.progress=i?-u:u,c.originalProgress=i?-d:d}}function qg(e){let t=this;if(e===void 0){let n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}let n=t.params,r=t.maxTranslate()-t.minTranslate(),{progress:i,isBeginning:a,isEnd:o,progressLoop:s}=t,c=a,l=o;if(r===0)i=0,a=!0,o=!0;else{i=(e-t.minTranslate())/r;let n=Math.abs(e-t.minTranslate())<1,s=Math.abs(e-t.maxTranslate())<1;a=n||i<=0,o=s||i>=1,n&&(i=0),s&&(i=1)}if(n.loop){let n=t.getSlideIndexByData(0),r=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[n],a=t.slidesGrid[r],o=t.slidesGrid[t.slidesGrid.length-1],c=Math.abs(e);s=c>=i?(c-i)/o:(c+o-a)/o,s>1&&--s}Object.assign(t,{progress:i,progressLoop:s,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!c&&t.emit(`reachBeginning toEdge`),o&&!l&&t.emit(`reachEnd toEdge`),(c&&!a||l&&!o)&&t.emit(`fromEdge`),t.emit(`progress`,i)}var Jg=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function Yg(){let e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,a=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,s=e=>_g(r,`.${n.slideClass}${e}, swiper-slide${e}`)[0],c,l,u;if(a)if(n.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),c=s(`[data-swiper-slide-index="${t}"]`)}else c=s(`[data-swiper-slide-index="${i}"]`);else o?(c=t.find(e=>e.column===i),u=t.find(e=>e.column===i+1),l=t.find(e=>e.column===i-1)):c=t[i];c&&(o||(u=Cg(c,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),l=Sg(c,`.${n.slideClass}, swiper-slide`)[0],n.loop)),t.forEach(e=>{Jg(e,e===c,n.slideActiveClass),Jg(e,e===u,n.slideNextClass),Jg(e,e===l,n.slidePrevClass)}),e.emitSlidesClasses()}var Xg=(e,t)=>{if(!e||e.destroyed||!e.params)return;let n=t.closest(e.isElement?`swiper-slide`:`.${e.params.slideClass}`);if(n){let t=n.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(n.shadowRoot?t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),t&&!t.lazyPreloaderManaged&&t.remove())})),t&&!t.lazyPreloaderManaged&&t.remove()}},Zg=(e,t)=>{if(!e.slides[t])return;let n=e.slides[t].querySelector(`[loading="lazy"]`);n&&n.removeAttribute(`loading`)},Qg=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext,n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);let r=e.params.slidesPerView===`auto`?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){let n=i,a=[n-t];a.push(...Array.from({length:t}).map((e,t)=>n+r+t)),e.slides.forEach((t,n)=>{a.includes(t.column)&&Zg(e,n)});return}let a=i+r-1;if(e.params.rewind||e.params.loop)for(let r=i-t;r<=a+t;r+=1){let t=(r%n+n)%n;(t<i||t>a)&&Zg(e,t)}else for(let r=Math.max(i-t,0);r<=Math.min(a+t,n-1);r+=1)r!==i&&(r>a||r<i)&&Zg(e,r)};function $g(e){let{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate,i;for(let e=0;e<t.length;e+=1)t[e+1]===void 0?r>=t[e]&&(i=e):r>=t[e]&&r<t[e+1]-(t[e+1]-t[e])/2?i=e:r>=t[e]&&r<t[e+1]&&(i=e+1);return n.normalizeSlideIndex&&(i<0||i===void 0)&&(i=0),i}function e_(e){let t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:a,realIndex:o,snapIndex:s}=t,c=e,l,u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(c===void 0&&(c=$g(t)),r.indexOf(n)>=0)l=r.indexOf(n);else{let e=Math.min(i.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/i.slidesPerGroup)}if(l>=r.length&&(l=r.length-1),c===a&&!t.params.loop){l!==s&&(t.snapIndex=l,t.emit(`snapIndexChange`));return}if(c===a&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(c);return}let d=t.grid&&i.grid&&i.grid.rows>1,f;if(t.virtual&&i.virtual.enabled)f=i.loop?u(c):c;else if(d){let e=t.slides.find(e=>e.column===c),n=parseInt(e.getAttribute(`data-swiper-slide-index`),10);Number.isNaN(n)&&(n=Math.max(t.slides.indexOf(e),0)),f=Math.floor(n/i.grid.rows)}else if(t.slides[c]){let e=t.slides[c].getAttribute(`data-swiper-slide-index`);f=e?parseInt(e,10):c}else f=c;Object.assign(t,{previousSnapIndex:s,snapIndex:l,previousRealIndex:o,realIndex:f,previousIndex:a,activeIndex:c}),t.initialized&&Qg(t),t.emit(`activeIndexChange`),t.emit(`snapIndexChange`),(t.initialized||t.params.runCallbacksOnInit)&&(o!==f&&t.emit(`realIndexChange`),t.emit(`slideChange`))}function t_(e,t){let n=this,r=n.params,i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(e=>{!i&&e.matches&&e.matches(`.${r.slideClass}, swiper-slide`)&&(i=e)});let a=!1,o;if(i){for(let e=0;e<n.slides.length;e+=1)if(n.slides[e]===i){a=!0,o=e;break}}if(i&&a)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute(`data-swiper-slide-index`),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var n_={updateSize:Vg,updateSlides:Hg,updateAutoHeight:Ug,updateSlidesOffset:Wg,updateSlidesProgress:Kg,updateProgress:qg,updateSlidesClasses:Yg,updateActiveIndex:e_,updateClickedSlide:t_};function r_(e=this.isHorizontal()?`x`:`y`){let t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:a}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=dg(a,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function i_(e,t){let n=this,{rtlTranslate:r,params:i,wrapperEl:a,progress:o}=n,s=0,c=0;n.isHorizontal()?s=r?-e:e:c=e,i.roundLengths&&(s=Math.floor(s),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:c,i.cssMode?a[n.isHorizontal()?`scrollLeft`:`scrollTop`]=n.isHorizontal()?-s:-c:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${s}px, ${c}px, 0px)`);let l,u=n.maxTranslate()-n.minTranslate();l=u===0?0:(e-n.minTranslate())/u,l!==o&&n.updateProgress(e),n.emit(`setTranslate`,n.translate,t)}function a_(){return-this.snapGrid[0]}function o_(){return-this.snapGrid[this.snapGrid.length-1]}function s_(e=0,t=this.params.speed,n=!0,r=!0,i){let a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;let c=a.minTranslate(),l=a.maxTranslate(),u;if(u=r&&e>c?c:r&&e<l?l:e,a.updateProgress(u),o.cssMode){let e=a.isHorizontal();if(t===0)s[e?`scrollLeft`:`scrollTop`]=-u;else{if(!a.support.smoothScroll)return gg({swiper:a,targetPosition:-u,side:e?`left`:`top`}),!0;s.scrollTo({[e?`left`:`top`]:-u,behavior:`smooth`})}return!0}return t===0?(a.setTransition(0),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionEnd`))):(a.setTransition(t),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionStart`)),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit(`transitionEnd`))},a.wrapperEl.addEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd))),!0}var c_={getTranslate:r_,setTranslate:i_,minTranslate:a_,maxTranslate:o_,translateTo:s_};function l_(e,t){let n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?`0ms`:``),n.emit(`setTransition`,e,t)}function u_({swiper:e,runCallbacks:t,direction:n,step:r}){let{activeIndex:i,previousIndex:a}=e,o=n;o||=i>a?`next`:i<a?`prev`:`reset`,e.emit(`transition${r}`),t&&o===`reset`?e.emit(`slideResetTransition${r}`):t&&i!==a&&(e.emit(`slideChangeTransition${r}`),o===`next`?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function d_(e=!0,t){let n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),u_({swiper:n,runCallbacks:e,direction:t,step:`Start`}))}function f_(e=!0,t){let n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),u_({swiper:n,runCallbacks:e,direction:t,step:`End`}))}var p_={setTransition:l_,transitionStart:d_,transitionEnd:f_};function m_(e=0,t,n=!0,r,i){typeof e==`string`&&(e=parseInt(e,10));let a=this,o=e;o<0&&(o=0);let{params:s,snapGrid:c,slidesGrid:l,previousIndex:u,activeIndex:d,rtlTranslate:f,wrapperEl:p,enabled:m}=a;if(!m&&!r&&!i||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;t===void 0&&(t=a.params.speed);let h=Math.min(a.params.slidesPerGroupSkip,o),g=h+Math.floor((o-h)/a.params.slidesPerGroup);g>=c.length&&(g=c.length-1);let _=-c[g];if(s.normalizeSlideIndex)for(let e=0;e<l.length;e+=1){let t=-Math.floor(_*100),n=Math.floor(l[e]*100),r=Math.floor(l[e+1]*100);l[e+1]===void 0?t>=n&&(o=e):t>=n&&t<r-(r-n)/2?o=e:t>=n&&t<r&&(o=e+1)}if(a.initialized&&o!==d&&(!a.allowSlideNext&&(f?_>a.translate&&_>a.minTranslate():_<a.translate&&_<a.minTranslate())||!a.allowSlidePrev&&_>a.translate&&_>a.maxTranslate()&&(d||0)!==o))return!1;o!==(u||0)&&n&&a.emit(`beforeSlideChangeStart`),a.updateProgress(_);let v;v=o>d?`next`:o<d?`prev`:`reset`;let y=a.virtual&&a.params.virtual.enabled;if(!(y&&i)&&(f&&-_===a.translate||!f&&_===a.translate))return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),s.effect!==`slide`&&a.setTranslate(_),v!==`reset`&&(a.transitionStart(n,v),a.transitionEnd(n,v)),!1;if(s.cssMode){let e=a.isHorizontal(),n=f?_:-_;if(t===0)y&&(a.wrapperEl.style.scrollSnapType=`none`,a._immediateVirtual=!0),y&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[e?`scrollLeft`:`scrollTop`]=n})):p[e?`scrollLeft`:`scrollTop`]=n,y&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType=``,a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return gg({swiper:a,targetPosition:n,side:e?`left`:`top`}),!0;p.scrollTo({[e?`left`:`top`]:n,behavior:`smooth`})}return!0}let b=Lg().isSafari;return y&&!i&&b&&a.isElement&&a.virtual.update(!1,!1,o),a.setTransition(t),a.setTranslate(_),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit(`beforeTransitionStart`,t,r),a.transitionStart(n,v),t===0?a.transitionEnd(n,v):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,v))},a.wrapperEl.addEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd)),!0}function h_(e=0,t,n=!0,r){typeof e==`string`&&(e=parseInt(e,10));let i=this;if(i.destroyed)return;t===void 0&&(t=i.params.speed);let a=i.grid&&i.params.grid&&i.params.grid.rows>1,o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o+=i.virtual.slidesBefore;else{let e;if(a){let t=o*i.params.grid.rows;e=i.slides.find(e=>e.getAttribute(`data-swiper-slide-index`)*1===t).column}else e=i.getSlideIndexByData(o);let t=a?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:n,slidesOffsetBefore:s,slidesOffsetAfter:c}=i.params,l=n||!!s||!!c,u=i.params.slidesPerView;u===`auto`?u=i.slidesPerViewDynamic():(u=Math.ceil(parseFloat(i.params.slidesPerView,10)),l&&u%2==0&&(u+=1));let d=t-e<u;if(l&&(d||=e<Math.ceil(u/2)),r&&l&&i.params.slidesPerView!==`auto`&&!a&&(d=!1),d){let n=l?e<i.activeIndex?`prev`:`next`:e-i.activeIndex-1<i.params.slidesPerView?`next`:`prev`;i.loopFix({direction:n,slideTo:!0,activeSlideIndex:n===`next`?e+1:e-t+1,slideRealIndex:n===`next`?i.realIndex:void 0})}if(a){let e=o*i.params.grid.rows;o=i.slides.find(t=>t.getAttribute(`data-swiper-slide-index`)*1===e).column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}function g_(e,t=!0,n){let r=this,{enabled:i,params:a,animating:o}=r;if(!i||r.destroyed)return r;e===void 0&&(e=r.params.speed);let s=a.slidesPerGroup;a.slidesPerView===`auto`&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic(`current`,!0),1));let c=r.activeIndex<a.slidesPerGroupSkip?1:s,l=r.virtual&&a.virtual.enabled;if(a.loop){if(o&&!l&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:`next`}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+c,e,t,n)}),!0}return a.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+c,e,t,n)}function __(e,t=!0,n){let r=this,{params:i,snapGrid:a,slidesGrid:o,rtlTranslate:s,enabled:c,animating:l}=r;if(!c||r.destroyed)return r;e===void 0&&(e=r.params.speed);let u=r.virtual&&i.virtual.enabled;if(i.loop){if(l&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:`prev`}),r._clientLeft=r.wrapperEl.clientLeft}let d=s?r.translate:-r.translate;function f(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}let p=f(d),m=a.map(e=>f(e)),h=i.freeMode&&i.freeMode.enabled,g=a[m.indexOf(p)-1];if(g===void 0&&(i.cssMode||h)){let e;a.forEach((t,n)=>{p>=t&&(e=n)}),e!==void 0&&(g=h?a[e]:a[e>0?e-1:e])}let _=0;if(g!==void 0&&(_=o.indexOf(g),_<0&&(_=r.activeIndex-1),i.slidesPerView===`auto`&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(_=_-r.slidesPerViewDynamic(`previous`,!0)+1,_=Math.max(_,0))),i.rewind&&r.isBeginning){let i=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(i,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(_,e,t,n)}),!0;return r.slideTo(_,e,t,n)}function v_(e,t=!0,n){let r=this;if(!r.destroyed)return e===void 0&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function y_(e,t=!0,n,r=.5){let i=this;if(i.destroyed)return;e===void 0&&(e=i.params.speed);let a=i.activeIndex,o=Math.min(i.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/i.params.slidesPerGroup),c=i.rtlTranslate?i.translate:-i.translate;if(c>=i.snapGrid[s]){let e=i.snapGrid[s],t=i.snapGrid[s+1];c-e>(t-e)*r&&(a+=i.params.slidesPerGroup)}else{let e=i.snapGrid[s-1],t=i.snapGrid[s];c-e<=(t-e)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function b_(){let e=this;if(e.destroyed)return;let{params:t,slidesEl:n}=e,r=t.slidesPerView===`auto`?e.slidesPerViewDynamic():t.slidesPerView,i=e.getSlideIndexWhenGrid(e.clickedIndex),a,o=e.isElement?`swiper-slide`:`.${t.slideClass}`,s=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;a=parseInt(e.clickedSlide.getAttribute(`data-swiper-slide-index`),10),t.centeredSlides?e.slideToLoop(a):i>(s?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(_g(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),cg(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var x_={slideTo:m_,slideToLoop:h_,slideNext:g_,slidePrev:__,slideReset:v_,slideToClosest:y_,slideToClickedSlide:b_};function S_(e,t){let n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;let a=()=>{_g(i,`.${r.slideClass}, swiper-slide`).forEach((e,t)=>{e.setAttribute(`data-swiper-slide-index`,t)})},o=()=>{let e=_g(i,`.${r.slideBlankClass}`);e.forEach(e=>{e.remove()}),e.length>0&&(n.recalcSlides(),n.updateSlides())},s=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||s)&&o();let c=r.slidesPerGroup*(s?r.grid.rows:1),l=n.slides.length%c!==0,u=s&&n.slides.length%r.grid.rows!==0,d=e=>{for(let t=0;t<e;t+=1){let e=n.isElement?xg(`swiper-slide`,[r.slideBlankClass]):xg(`div`,[r.slideClass,r.slideBlankClass]);n.slidesEl.append(e)}};l?(r.loopAddBlankSlides?(d(c-n.slides.length%c),n.recalcSlides(),n.updateSlides()):bg(`Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`),a()):(u&&(r.loopAddBlankSlides?(d(r.grid.rows-n.slides.length%r.grid.rows),n.recalcSlides(),n.updateSlides()):bg(`Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`)),a());let f=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:f?void 0:`next`,initial:t})}function C_({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:a,byController:o,byMousewheel:s}={}){let c=this;if(!c.params.loop)return;c.emit(`beforeLoopFix`);let{slides:l,allowSlidePrev:u,allowSlideNext:d,slidesEl:f,params:p}=c,{centeredSlides:m,slidesOffsetBefore:h,slidesOffsetAfter:g,initialSlide:_}=p,v=m||!!h||!!g;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&p.virtual.enabled){t&&(!v&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):v&&c.snapIndex<p.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=u,c.allowSlideNext=d,c.emit(`loopFix`);return}let y=p.slidesPerView;y===`auto`?y=c.slidesPerViewDynamic():(y=Math.ceil(parseFloat(p.slidesPerView,10)),v&&y%2==0&&(y+=1));let b=p.slidesPerGroupAuto?y:p.slidesPerGroup,x=v?Math.max(b,Math.ceil(y/2)):b;x%b!==0&&(x+=b-x%b),x+=p.loopAdditionalSlides,c.loopedSlides=x;let S=c.grid&&p.grid&&p.grid.rows>1;l.length<y+x||c.params.effect===`cards`&&l.length<y+x*2?bg(`Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters`):S&&p.grid.fill===`row`&&bg("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let C=[],w=[],T=S?Math.ceil(l.length/p.grid.rows):l.length,ee=a&&T-_<y&&!v,E=ee?_:c.activeIndex;i===void 0?i=c.getSlideIndex(l.find(e=>e.classList.contains(p.slideActiveClass))):E=i;let D=n===`next`||!n,O=n===`prev`||!n,te=0,ne=0,re=(S?l[i].column:i)+(v&&r===void 0?-y/2+.5:0);if(re<x){te=Math.max(x-re,b);for(let e=0;e<x-re;e+=1){let t=e-Math.floor(e/T)*T;if(S){let e=T-t-1;for(let t=l.length-1;t>=0;--t)l[t].column===e&&C.push(t)}else C.push(T-t-1)}}else if(re+y>T-x){ne=Math.max(re-(T-x*2),b),ee&&(ne=Math.max(ne,y-T+_+1));for(let e=0;e<ne;e+=1){let t=e-Math.floor(e/T)*T;S?l.forEach((e,n)=>{e.column===t&&w.push(n)}):w.push(t)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect===`cards`&&l.length<y+x*2&&(w.includes(i)&&w.splice(w.indexOf(i),1),C.includes(i)&&C.splice(C.indexOf(i),1)),O&&C.forEach(e=>{l[e].swiperLoopMoveDOM=!0,f.prepend(l[e]),l[e].swiperLoopMoveDOM=!1}),D&&w.forEach(e=>{l[e].swiperLoopMoveDOM=!0,f.append(l[e]),l[e].swiperLoopMoveDOM=!1}),c.recalcSlides(),p.slidesPerView===`auto`?c.updateSlides():S&&(C.length>0&&O||w.length>0&&D)&&c.slides.forEach((e,t)=>{c.grid.updateSlide(t,e,c.slides)}),p.watchSlidesProgress&&c.updateSlidesOffset(),t){if(C.length>0&&O){if(e===void 0){let e=c.slidesGrid[E],t=c.slidesGrid[E+te]-e;s?c.setTranslate(c.translate-t):(c.slideTo(E+Math.ceil(te),0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-t,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-t))}else if(r){let e=S?C.length/p.grid.rows:C.length;c.slideTo(c.activeIndex+e,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(w.length>0&&D)if(e===void 0){let e=c.slidesGrid[E],t=c.slidesGrid[E-ne]-e;s?c.setTranslate(c.translate-t):(c.slideTo(E-ne,0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-t,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-t))}else{let e=S?w.length/p.grid.rows:w.length;c.slideTo(c.activeIndex-e,0,!1,!0)}}if(c.allowSlidePrev=u,c.allowSlideNext=d,c.controller&&c.controller.control&&!o){let a={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(e=>{!e.destroyed&&e.params.loop&&e.loopFix({...a,slideTo:e.params.slidesPerView===p.slidesPerView?t:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...a,slideTo:c.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}c.emit(`loopFix`)}function w_(){let e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();let r=[];e.slides.forEach(e=>{let t=e.swiperSlideIndex===void 0?e.getAttribute(`data-swiper-slide-index`)*1:e.swiperSlideIndex;r[t]=e}),e.slides.forEach(e=>{e.removeAttribute(`data-swiper-slide-index`)}),r.forEach(e=>{n.append(e)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var T_={loopCreate:S_,loopFix:C_,loopDestroy:w_};function E_(e){let t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;let n=t.params.touchEventsTarget===`container`?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor=`move`,n.style.cursor=e?`grabbing`:`grab`,t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function D_(){let e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget===`container`?`el`:`wrapperEl`].style.cursor=``,e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var O_={setGrabCursor:E_,unsetGrabCursor:D_};function k_(e,t=this){function n(t){if(!t||t===rg()||t===ag())return null;t.assignedSlot&&(t=t.assignedSlot);let r=t.closest(e);return!r&&!t.getRootNode?null:r||n(t.getRootNode().host)}return n(t)}function A_(e,t,n){let r=ag(),{params:i}=e,a=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return a&&(n<=o||n>=r.innerWidth-o)?a===`prevent`?(t.preventDefault(),!0):!1:!0}function j_(e){let t=this,n=rg(),r=e;r.originalEvent&&(r=r.originalEvent);let i=t.touchEventsData;if(r.type===`pointerdown`){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type===`touchstart`&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type===`touchstart`){A_(t,r,r.targetTouches[0].pageX);return}let{params:a,touches:o,enabled:s}=t;if(!s||!a.simulateTouch&&r.pointerType===`mouse`||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let c=r.target;if(a.touchEventsTarget===`wrapper`&&!yg(c,t.wrapperEl)||`which`in r&&r.which===3||`button`in r&&r.button>0||i.isTouched&&i.isMoved)return;let l=!!a.noSwipingClass&&a.noSwipingClass!==``,u=r.composedPath?r.composedPath():r.path;l&&r.target&&r.target.shadowRoot&&u&&(c=u[0]);let d=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,f=!!(r.target&&r.target.shadowRoot);if(a.noSwiping&&(f?k_(d,c):c.closest(d))){t.allowClick=!0;return}if(a.swipeHandler&&!c.closest(a.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;let p=o.currentX,m=o.currentY;if(!A_(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=m,i.touchStartTime=lg(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(i.allowThresholdMove=!1);let h=!0;c.matches(i.focusableElements)&&(h=!1,c.nodeName===`SELECT`&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==c&&(r.pointerType===`mouse`||r.pointerType!==`mouse`&&!c.matches(i.focusableElements))&&n.activeElement.blur();let g=h&&t.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||g)&&!c.isContentEditable&&r.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit(`touchStart`,r)}function M_(e){let t=rg(),n=this,r=n.touchEventsData,{params:i,touches:a,rtlTranslate:o,enabled:s}=n;if(!s||!i.simulateTouch&&e.pointerType===`mouse`)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),c.type===`pointermove`&&(r.touchId!==null||c.pointerId!==r.pointerId))return;let l;if(c.type===`touchmove`){if(l=[...c.changedTouches].find(e=>e.identifier===r.touchId),!l||l.identifier!==r.touchId)return}else l=c;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit(`touchMoveOpposite`,c);return}let u=l.pageX,d=l.pageY;if(c.preventedByNestedSwiper){a.startX=u,a.startY=d;return}if(!n.allowTouchMove){c.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d}),r.touchStartTime=lg());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(d<a.startY&&n.translate<=n.maxTranslate()||d>a.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(o&&(u>a.startX&&-n.translate<=n.maxTranslate()||u<a.startX&&-n.translate>=n.minTranslate()))return;else if(!o&&(u<a.startX&&n.translate<=n.maxTranslate()||u>a.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==c.target&&c.pointerType!==`mouse`&&t.activeElement.blur(),t.activeElement&&c.target===t.activeElement&&c.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit(`touchMove`,c),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=u,a.currentY=d;let f=a.currentX-a.startX,p=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(f**2+p**2)<n.params.threshold)return;if(r.isScrolling===void 0){let e;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?r.isScrolling=!1:f*f+p*p>=25&&(e=Math.atan2(Math.abs(p),Math.abs(f))*180/Math.PI,r.isScrolling=n.isHorizontal()?e>i.touchAngle:90-e>i.touchAngle)}if(r.isScrolling&&n.emit(`touchMoveOpposite`,c),r.startMoving===void 0&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(r.startMoving=!0),r.isScrolling||c.type===`touchmove`&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&c.cancelable&&c.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&c.stopPropagation();let m=n.isHorizontal()?f:p,h=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;i.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),h=Math.abs(h)*(o?1:-1)),a.diff=m,m*=i.touchRatio,o&&(m=-m,h=-h);let g=n.touchesDirection;n.swipeDirection=m>0?`prev`:`next`,n.touchesDirection=h>0?`prev`:`next`;let _=n.params.loop&&!i.cssMode,v=n.touchesDirection===`next`&&n.allowSlideNext||n.touchesDirection===`prev`&&n.allowSlidePrev;if(!r.isMoved){if(_&&v&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){let e=new window.CustomEvent(`transitionend`,{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(e)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit(`sliderFirstMove`,c)}if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&g!==n.touchesDirection&&_&&v&&Math.abs(m)>=1){Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit(`sliderMove`,c),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let y=!0,b=i.resistanceRatio;if(i.touchReleaseOnEdges&&(b=0),m>0?(_&&v&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!==`auto`&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:`prev`,setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(y=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**b))):m<0&&(_&&v&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!==`auto`&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:`next`,setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView===`auto`?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(y=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**b))),y&&(c.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection===`next`&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection===`prev`&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(m)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,r.currentTranslate=r.startTranslate,a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function N_(e){let t=this,n=t.touchEventsData,r=e;r.originalEvent&&(r=r.originalEvent);let i;if(!(r.type===`touchend`||r.type===`touchcancel`)){if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}else if(i=[...r.changedTouches].find(e=>e.identifier===n.touchId),!i||i.identifier!==n.touchId)return;if([`pointercancel`,`pointerout`,`pointerleave`,`contextmenu`].includes(r.type)&&!([`pointercancel`,`contextmenu`].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;let{params:a,touches:o,rtlTranslate:s,slidesGrid:c,enabled:l}=t;if(!l||!a.simulateTouch&&r.pointerType===`mouse`)return;if(n.allowTouchCallbacks&&t.emit(`touchEnd`,r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);let u=lg(),d=u-n.touchStartTime;if(t.allowClick){let e=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(e&&e[0]||r.target,e),t.emit(`tap click`,r),d<300&&u-n.lastClickTime<300&&t.emit(`doubleTap doubleClick`,r)}if(n.lastClickTime=lg(),cg(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||o.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let f;if(f=a.followFinger?s?t.translate:-t.translate:-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}let p=f>=-t.maxTranslate()&&!t.params.loop,m=0,h=t.slidesSizesGrid[0];for(let e=0;e<c.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){let t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;c[e+t]===void 0?(p||f>=c[e])&&(m=e,h=c[c.length-1]-c[c.length-2]):(p||f>=c[e]&&f<c[e+t])&&(m=e,h=c[e+t]-c[e])}let g=null,_=null;a.rewind&&(t.isBeginning?_=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));let v=(f-c[m])/h,y=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(d>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection===`next`&&(v>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:m+y):t.slideTo(m)),t.swipeDirection===`prev`&&(v>1-a.longSwipesRatio?t.slideTo(m+y):_!==null&&v<0&&Math.abs(v)>a.longSwipesRatio?t.slideTo(_):t.slideTo(m))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(m+y):t.slideTo(m):(t.swipeDirection===`next`&&t.slideTo(g===null?m+y:g),t.swipeDirection===`prev`&&t.slideTo(_===null?m:_))}}function P_(){let e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();let{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();let s=o&&t.loop;if((t.slidesPerView===`auto`||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s){let t=o?e.virtual.slides:e.slides;e.slideTo(t.length-1,0,!1,!0)}else e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function F_(e){let t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function I_(){let e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i,a=e.maxTranslate()-e.minTranslate();i=a===0?0:(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit(`setTranslate`,e.translate,!1)}function L_(e){let t=this;Xg(t,e.target),!(t.params.cssMode||t.params.slidesPerView!==`auto`&&!t.params.autoHeight)&&t.update()}function R_(){let e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction=`auto`))}var z_=(e,t)=>{let n=rg(),{params:r,el:i,wrapperEl:a,device:o}=e,s=!!r.nested,c=t===`on`?`addEventListener`:`removeEventListener`,l=t;!i||typeof i==`string`||(n[c](`touchstart`,e.onDocumentTouchStart,{passive:!1,capture:s}),i[c](`touchstart`,e.onTouchStart,{passive:!1}),i[c](`pointerdown`,e.onTouchStart,{passive:!1}),n[c](`touchmove`,e.onTouchMove,{passive:!1,capture:s}),n[c](`pointermove`,e.onTouchMove,{passive:!1,capture:s}),n[c](`touchend`,e.onTouchEnd,{passive:!0}),n[c](`pointerup`,e.onTouchEnd,{passive:!0}),n[c](`pointercancel`,e.onTouchEnd,{passive:!0}),n[c](`touchcancel`,e.onTouchEnd,{passive:!0}),n[c](`pointerout`,e.onTouchEnd,{passive:!0}),n[c](`pointerleave`,e.onTouchEnd,{passive:!0}),n[c](`contextmenu`,e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[c](`click`,e.onClick,!0),r.cssMode&&a[c](`scroll`,e.onScroll),r.updateOnWindowResize?e[l](o.ios||o.android?`resize orientationchange observerUpdate`:`resize observerUpdate`,P_,!0):e[l](`observerUpdate`,P_,!0),i[c](`load`,e.onLoad,{capture:!0}))};function B_(){let e=this,{params:t}=e;e.onTouchStart=j_.bind(e),e.onTouchMove=M_.bind(e),e.onTouchEnd=N_.bind(e),e.onDocumentTouchStart=R_.bind(e),t.cssMode&&(e.onScroll=I_.bind(e)),e.onClick=F_.bind(e),e.onLoad=L_.bind(e),z_(e,`on`)}function V_(){z_(this,`off`)}var H_={attachEvents:B_,detachEvents:V_},U_=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function W_(){let e=this,{realIndex:t,initialized:n,params:r,el:i}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;let o=rg(),s=r.breakpointsBase===`window`||!r.breakpointsBase?r.breakpointsBase:`container`,c=[`window`,`container`].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:o.querySelector(r.breakpointsBase),l=e.getBreakpoint(a,s,c);if(!l||e.currentBreakpoint===l)return;let u=(l in a?a[l]:void 0)||e.originalParams,d=U_(e,r),f=U_(e,u),p=e.params.grabCursor,m=u.grabCursor,h=r.enabled;d&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill===`column`||!u.grid.fill&&r.grid.fill===`column`)&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!m?e.unsetGrabCursor():!p&&m&&e.setGrabCursor(),[`navigation`,`pagination`,`scrollbar`].forEach(t=>{if(u[t]===void 0)return;let n=r[t]&&r[t].enabled,i=u[t]&&u[t].enabled;n&&!i&&e[t].disable(),!n&&i&&e[t].enable()});let g=u.direction&&u.direction!==r.direction,_=r.loop&&(u.slidesPerView!==r.slidesPerView||g),v=r.loop;g&&n&&e.changeDirection(),mg(e.params,u);let y=e.params.enabled,b=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),h&&!y?e.disable():!h&&y&&e.enable(),e.currentBreakpoint=l,e.emit(`_beforeBreakpoint`,u),n&&(_?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!v&&b?(e.loopCreate(t),e.updateSlides()):v&&!b&&e.loopDestroy()),e.emit(`breakpoint`,u)}function G_(e,t=`window`,n){if(!e||t===`container`&&!n)return;let r=!1,i=ag(),a=t===`window`?i.innerHeight:n.clientHeight,o=Object.keys(e).map(e=>typeof e==`string`&&e.indexOf(`@`)===0?{value:a*parseFloat(e.substr(1)),point:e}:{value:e,point:e});o.sort((e,t)=>parseInt(e.value,10)-parseInt(t.value,10));for(let e=0;e<o.length;e+=1){let{point:a,value:s}=o[e];t===`window`?i.matchMedia(`(min-width: ${s}px)`).matches&&(r=a):s<=n.clientWidth&&(r=a)}return r||`max`}var K_={setBreakpoint:W_,getBreakpoint:G_};function q_(e,t){let n=[];return e.forEach(e=>{typeof e==`object`?Object.keys(e).forEach(r=>{e[r]&&n.push(t+r)}):typeof e==`string`&&n.push(t+e)}),n}function J_(){let e=this,{classNames:t,params:n,rtl:r,el:i,device:a}=e,o=q_([`initialized`,n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill===`column`},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function Y_(){let e=this,{el:t,classNames:n}=e;!t||typeof t==`string`||(t.classList.remove(...n),e.emitContainerClasses())}var X_={addClasses:J_,removeClasses:Y_};function Z_(){let e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){let t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+r*2;e.isLocked=e.size>n}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?`lock`:`unlock`)}var Q_={checkOverflow:Z_},$_={init:!0,direction:`horizontal`,oneWayMovement:!1,swiperElementNodeName:`SWIPER-CONTAINER`,touchEventsTarget:`wrapper`,initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:`swiper`,enabled:!0,focusableElements:`input, select, option, textarea, button, video, label`,width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:`slide`,breakpoints:void 0,breakpointsBase:`window`,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:`swiper-no-swiping`,noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:`swiper-`,slideClass:`swiper-slide`,slideBlankClass:`swiper-slide-blank`,slideActiveClass:`swiper-slide-active`,slideVisibleClass:`swiper-slide-visible`,slideFullyVisibleClass:`swiper-slide-fully-visible`,slideNextClass:`swiper-slide-next`,slidePrevClass:`swiper-slide-prev`,wrapperClass:`swiper-wrapper`,lazyPreloaderClass:`swiper-lazy-preloader`,lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ev(e,t){return function(n={}){let r=Object.keys(n)[0],i=n[r];if(typeof i!=`object`||!i){mg(t,n);return}if(e[r]===!0&&(e[r]={enabled:!0}),r===`navigation`&&e[r]&&e[r].enabled&&!e[r].prevEl&&!e[r].nextEl&&(e[r].auto=!0),[`pagination`,`scrollbar`].indexOf(r)>=0&&e[r]&&e[r].enabled&&!e[r].el&&(e[r].auto=!0),!(r in e&&`enabled`in i)){mg(t,n);return}typeof e[r]==`object`&&!(`enabled`in e[r])&&(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),mg(t,n)}}var tv={eventsEmitter:Bg,update:n_,translate:c_,transition:p_,slide:x_,loop:T_,grabCursor:O_,events:H_,breakpoints:K_,checkOverflow:Q_,classes:X_},nv={},rv=class e{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)===`Object`?r=t[0]:[n,r]=t,r||={},r=mg({},r),n&&!r.el&&(r.el=n);let i=rg();if(r.el&&typeof r.el==`string`&&i.querySelectorAll(r.el).length>1){let t=[];return i.querySelectorAll(r.el).forEach(n=>{let i=mg({},r,{el:n});t.push(new e(i))}),t}let a=this;a.__swiper__=!0,a.support=jg(),a.device=Pg({userAgent:r.userAgent}),a.browser=Lg(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(e=>{typeof e==`function`&&a.modules.indexOf(e)<0&&a.modules.push(e)});let o={};return a.modules.forEach(e=>{e({params:r,swiper:a,extendParams:ev(r,o),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})}),a.params=mg({},mg({},$_,o),nv,r),a.originalParams=mg({},a.params),a.passedParams=mg({},r),a.params&&a.params.on&&Object.keys(a.params.on).forEach(e=>{a.on(e,a.params.on[e])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction===`horizontal`},isVertical(){return a.params.direction===`vertical`},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit(`_swiper`),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:`height`,"margin-top":`margin-left`,"margin-bottom ":`margin-right`,"margin-left":`margin-top`,"margin-right":`margin-bottom`,"padding-left":`padding-top`,"padding-right":`padding-bottom`,marginRight:`marginBottom`}[e]}getSlideIndex(e){let{slidesEl:t,params:n}=this,r=Tg(_g(t,`.${n.slideClass}, swiper-slide`)[0]);return Tg(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute(`data-swiper-slide-index`)*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill===`column`?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill===`row`&&(e%=Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){let e=this,{slidesEl:t,params:n}=e;e.slides=_g(t,`.${n.slideClass}, swiper-slide`)}enable(){let e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit(`enable`))}disable(){let e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit(`disable`))}setProgress(e,t){let n=this;e=Math.min(Math.max(e,0),1);let r=n.minTranslate(),i=(n.maxTranslate()-r)*e+r;n.translateTo(i,t===void 0?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=e.el.className.split(` `).filter(t=>t.indexOf(`swiper`)===0||t.indexOf(e.params.containerModifierClass)===0);e.emit(`_containerClasses`,t.join(` `))}getSlideClasses(e){let t=this;return t.destroyed?``:e.className.split(` `).filter(e=>e.indexOf(`swiper-slide`)===0||e.indexOf(t.params.slideClass)===0).join(` `)}emitSlidesClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=[];e.slides.forEach(n=>{let r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit(`_slideClass`,n,r)}),e.emit(`_slideClasses`,t)}slidesPerViewDynamic(e=`current`,t=!1){let{params:n,slides:r,slidesGrid:i,slidesSizesGrid:a,size:o,activeIndex:s}=this,c=1;if(typeof n.slidesPerView==`number`)return n.slidesPerView;if(n.centeredSlides){let e=r[s]?Math.ceil(r[s].swiperSlideSize):0,t;for(let n=s+1;n<r.length;n+=1)r[n]&&!t&&(e+=Math.ceil(r[n].swiperSlideSize),c+=1,e>o&&(t=!0));for(let n=s-1;n>=0;--n)r[n]&&!t&&(e+=r[n].swiperSlideSize,c+=1,e>o&&(t=!0))}else if(e===`current`)for(let e=s+1;e<r.length;e+=1)(t?i[e]+a[e]-i[s]<o:i[e]-i[s]<o)&&(c+=1);else for(let e=s-1;e>=0;--e)i[s]-i[e]<o&&(c+=1);return c}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll(`[loading="lazy"]`)].forEach(t=>{t.complete&&Xg(e,t)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){let t=e.rtlTranslate?e.translate*-1:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)r(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView===`auto`||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){let t=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(t.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit(`update`)}changeDirection(e,t=!0){let n=this,r=n.params.direction;return e||=r===`horizontal`?`vertical`:`horizontal`,e===r||e!==`horizontal`&&e!==`vertical`?n:(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(t=>{e===`vertical`?t.style.width=``:t.style.height=``}),n.emit(`changeDirection`),t&&n.update(),n)}changeLanguageDirection(e){let t=this;t.rtl&&e===`rtl`||!t.rtl&&e===`ltr`||(t.rtl=e===`rtl`,t.rtlTranslate=t.params.direction===`horizontal`&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir=`rtl`):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir=`ltr`),t.update())}mount(e){let t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n==`string`&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);let r=()=>`.${(t.params.wrapperClass||``).trim().split(` `).join(`.`)}`,i=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(r()):_g(n,r())[0];return!i&&t.params.createElements&&(i=xg(`div`,t.params.wrapperClass),n.append(i),_g(n,`.${t.params.slideClass}`).forEach(e=>{i.append(e)})),Object.assign(t,{el:n,wrapperEl:i,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:i,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()===`rtl`||wg(n,`direction`)===`rtl`,rtlTranslate:t.params.direction===`horizontal`&&(n.dir.toLowerCase()===`rtl`||wg(n,`direction`)===`rtl`),wrongRTL:wg(i,`display`)===`-webkit-box`}),!0}init(e){let t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit(`beforeInit`),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();let n=[...t.el.querySelectorAll(`[loading="lazy"]`)];return t.isElement&&n.push(...t.hostEl.querySelectorAll(`[loading="lazy"]`)),n.forEach(e=>{e.complete?Xg(t,e):e.addEventListener(`load`,e=>{Xg(t,e.target)})}),Qg(t),t.initialized=!0,Qg(t),t.emit(`init`),t.emit(`afterInit`),t}destroy(e=!0,t=!0){let n=this,{params:r,el:i,wrapperEl:a,slides:o}=n;return n.params===void 0||n.destroyed?null:(n.emit(`beforeDestroy`),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),i&&typeof i!=`string`&&i.removeAttribute(`style`),a&&a.removeAttribute(`style`),o&&o.length&&o.forEach(e=>{e.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),e.removeAttribute(`style`),e.removeAttribute(`data-swiper-slide-index`)})),n.emit(`destroy`),Object.keys(n.eventsListeners).forEach(e=>{n.off(e)}),e!==!1&&(n.el&&typeof n.el!=`string`&&(n.el.swiper=null),sg(n)),n.destroyed=!0,null)}static extendDefaults(e){mg(nv,e)}static get extendedDefaults(){return nv}static get defaults(){return $_}static installModule(t){e.prototype.__modules__||(e.prototype.__modules__=[]);let n=e.prototype.__modules__;typeof t==`function`&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(t=>e.installModule(t)),e):(e.installModule(t),e)}};Object.keys(tv).forEach(e=>{Object.keys(tv[e]).forEach(t=>{rv.prototype[t]=tv[e][t]})}),rv.use([Rg,zg]);var iv=`eventsPrefix.injectStyles.injectStylesUrls.modules.init._direction.oneWayMovement.swiperElementNodeName.touchEventsTarget.initialSlide._speed.cssMode.updateOnWindowResize.resizeObserver.nested.focusableElements._enabled._width._height.preventInteractionOnTransition.userAgent.url._edgeSwipeDetection._edgeSwipeThreshold._freeMode._autoHeight.setWrapperSize.virtualTranslate._effect.breakpoints.breakpointsBase._spaceBetween._slidesPerView.maxBackfaceHiddenSlides._grid._slidesPerGroup._slidesPerGroupSkip._slidesPerGroupAuto._centeredSlides._centeredSlidesBounds._slidesOffsetBefore._slidesOffsetAfter.normalizeSlideIndex._centerInsufficientSlides._snapToSlideEdge._watchOverflow.roundLengths.touchRatio.touchAngle.simulateTouch._shortSwipes._longSwipes.longSwipesRatio.longSwipesMs._followFinger.allowTouchMove._threshold.touchMoveStopPropagation.touchStartPreventDefault.touchStartForcePreventDefault.touchReleaseOnEdges.uniqueNavElements._resistance._resistanceRatio._watchSlidesProgress._grabCursor.preventClicks.preventClicksPropagation._slideToClickedSlide._loop.loopAdditionalSlides.loopAddBlankSlides.loopPreventsSliding._rewind._allowSlidePrev._allowSlideNext._swipeHandler._noSwiping.noSwipingClass.noSwipingSelector.passiveListeners.containerModifierClass.slideClass.slideActiveClass.slideVisibleClass.slideFullyVisibleClass.slideNextClass.slidePrevClass.slideBlankClass.wrapperClass.lazyPreloaderClass.lazyPreloadPrevNext.runCallbacksOnInit.observer.observeParents.observeSlideChildren.a11y._autoplay._controller.coverflowEffect.cubeEffect.fadeEffect.flipEffect.creativeEffect.cardsEffect.hashNavigation.history.keyboard.mousewheel._navigation._pagination.parallax._scrollbar._thumbs.virtual.zoom.control`.split(`.`);function av(e){return typeof e==`object`&&!!e&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)===`Object`&&!e.__swiper__}function ov(e,t){let n=[`__proto__`,`constructor`,`prototype`];Object.keys(t).filter(e=>n.indexOf(e)<0).forEach(n=>{e[n]===void 0?e[n]=t[n]:av(t[n])&&av(e[n])&&Object.keys(t[n]).length>0?t[n].__swiper__?e[n]=t[n]:ov(e[n],t[n]):e[n]=t[n]})}function sv(e={}){return e.navigation&&e.navigation.nextEl===void 0&&e.navigation.prevEl===void 0}function cv(e={}){return e.pagination&&e.pagination.el===void 0}function lv(e={}){return e.scrollbar&&e.scrollbar.el===void 0}function uv(e=``){let t=e.split(` `).map(e=>e.trim()).filter(e=>!!e),n=[];return t.forEach(e=>{n.indexOf(e)<0&&n.push(e)}),n.join(` `)}function dv(e=``){return e?e.includes(`swiper-wrapper`)?e:`swiper-wrapper ${e}`:`swiper-wrapper`}function fv({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:a,scrollbarEl:o,paginationEl:s}){let c=r.filter(e=>e!==`children`&&e!==`direction`&&e!==`wrapperClass`),{params:l,pagination:u,navigation:d,scrollbar:f,virtual:p,thumbs:m}=e,h,g,_,v,y,b,x,S;r.includes(`thumbs`)&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&l.thumbs&&(!l.thumbs.swiper||l.thumbs.swiper.destroyed)&&(h=!0),r.includes(`controller`)&&n.controller&&n.controller.control&&l.controller&&!l.controller.control&&(g=!0),r.includes(`pagination`)&&n.pagination&&(n.pagination.el||s)&&(l.pagination||l.pagination===!1)&&u&&!u.el&&(_=!0),r.includes(`scrollbar`)&&n.scrollbar&&(n.scrollbar.el||o)&&(l.scrollbar||l.scrollbar===!1)&&f&&!f.el&&(v=!0),r.includes(`navigation`)&&n.navigation&&(n.navigation.prevEl||a)&&(n.navigation.nextEl||i)&&(l.navigation||l.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(y=!0);let C=t=>{e[t]&&(e[t].destroy(),t===`navigation`?(e.isElement&&(e[t].prevEl.remove(),e[t].nextEl.remove()),l[t].prevEl=void 0,l[t].nextEl=void 0,e[t].prevEl=void 0,e[t].nextEl=void 0):(e.isElement&&e[t].el.remove(),l[t].el=void 0,e[t].el=void 0))};r.includes(`loop`)&&e.isElement&&(l.loop&&!n.loop?b=!0:!l.loop&&n.loop?x=!0:S=!0),c.forEach(e=>{if(av(l[e])&&av(n[e]))Object.assign(l[e],n[e]),(e===`navigation`||e===`pagination`||e===`scrollbar`)&&`enabled`in n[e]&&!n[e].enabled&&C(e);else{let t=n[e];(t===!0||t===!1)&&(e===`navigation`||e===`pagination`||e===`scrollbar`)?t===!1&&C(e):l[e]=n[e]}}),c.includes(`controller`)&&!g&&e.controller&&e.controller.control&&l.controller&&l.controller.control&&(e.controller.control=l.controller.control),r.includes(`children`)&&t&&p&&l.virtual.enabled?(p.slides=t,p.update(!0)):r.includes(`virtual`)&&p&&l.virtual.enabled&&(t&&(p.slides=t),p.update(!0)),r.includes(`children`)&&t&&l.loop&&(S=!0),h&&m.init()&&m.update(!0),g&&(e.controller.control=l.controller.control),_&&(e.isElement&&(!s||typeof s==`string`)&&(s=document.createElement(`div`),s.classList.add(`swiper-pagination`),s.part.add(`pagination`),e.el.appendChild(s)),s&&(l.pagination.el=s),u.init(),u.render(),u.update()),v&&(e.isElement&&(!o||typeof o==`string`)&&(o=document.createElement(`div`),o.classList.add(`swiper-scrollbar`),o.part.add(`scrollbar`),e.el.appendChild(o)),o&&(l.scrollbar.el=o),f.init(),f.updateSize(),f.setTranslate()),y&&(e.isElement&&((!i||typeof i==`string`)&&(i=document.createElement(`div`),i.classList.add(`swiper-button-next`),Og(i,e.navigation.arrowSvg),i.part.add(`button-next`),e.el.appendChild(i)),(!a||typeof a==`string`)&&(a=document.createElement(`div`),a.classList.add(`swiper-button-prev`),Og(a,e.navigation.arrowSvg),a.part.add(`button-prev`),e.el.appendChild(a))),i&&(l.navigation.nextEl=i),a&&(l.navigation.prevEl=a),d.init(),d.update()),r.includes(`allowSlideNext`)&&(e.allowSlideNext=n.allowSlideNext),r.includes(`allowSlidePrev`)&&(e.allowSlidePrev=n.allowSlidePrev),r.includes(`direction`)&&e.changeDirection(n.direction,!1),(b||S)&&e.loopDestroy(),(x||S)&&e.loopCreate(),e.update()}function pv(e={},t=!0){let n={on:{}},r={},i={};ov(n,$_),n._emitClasses=!0,n.init=!1;let a={},o=iv.map(e=>e.replace(/_/,``)),s=Object.assign({},e);return Object.keys(s).forEach(s=>{e[s]!==void 0&&(o.indexOf(s)>=0?av(e[s])?(n[s]={},i[s]={},ov(n[s],e[s]),ov(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]==`function`?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:a[s]=e[s])}),[`navigation`,`pagination`,`scrollbar`].forEach(e=>{n[e]===!0&&(n[e]={}),n[e]===!1&&delete n[e]}),{params:n,passedParams:i,rest:a,events:r}}function mv({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:a},o){sv(o)&&t&&n&&(a.params.navigation.nextEl=t,a.originalParams.navigation.nextEl=t,a.params.navigation.prevEl=n,a.originalParams.navigation.prevEl=n),cv(o)&&r&&(a.params.pagination.el=r,a.originalParams.pagination.el=r),lv(o)&&i&&(a.params.scrollbar.el=i,a.originalParams.scrollbar.el=i),a.init(e)}function hv(e,t,n,r,i){let a=[];if(!t)return a;let o=e=>{a.indexOf(e)<0&&a.push(e)};if(n&&r){let e=r.map(i),t=n.map(i);e.join(``)!==t.join(``)&&o(`children`),r.length!==n.length&&o(`children`)}return iv.filter(e=>e[0]===`_`).map(e=>e.replace(/_/,``)).forEach(n=>{if(n in e&&n in t)if(av(e[n])&&av(t[n])){let r=Object.keys(e[n]),i=Object.keys(t[n]);r.length===i.length?(r.forEach(r=>{e[n][r]!==t[n][r]&&o(n)}),i.forEach(r=>{e[n][r]!==t[n][r]&&o(n)})):o(n)}else e[n]!==t[n]&&o(n)}),a}var gv=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit(`_virtualUpdated`),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function _v(){return _v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_v.apply(this,arguments)}function vv(e){return e.type&&e.type.displayName&&e.type.displayName.includes(`SwiperSlide`)}function yv(e){let t=[];return w.Children.toArray(e).forEach(e=>{vv(e)?t.push(e):e.props&&e.props.children&&yv(e.props.children).forEach(e=>t.push(e))}),t}function bv(e){let t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return w.Children.toArray(e).forEach(e=>{if(vv(e))t.push(e);else if(e.props&&e.props.slot&&n[e.props.slot])n[e.props.slot].push(e);else if(e.props&&e.props.children){let r=yv(e.props.children);r.length>0?r.forEach(e=>t.push(e)):n[`container-end`].push(e)}else n[`container-end`].push(e)}),{slides:t,slots:n}}function xv(e,t,n){if(!n)return null;let r=e=>{let n=e;return e<0?n=t.length+e:n>=t.length&&(n-=t.length),n},i=e.isHorizontal()?{[e.rtlTranslate?`right`:`left`]:`${n.offset}px`}:{top:`${n.offset}px`},{from:a,to:o}=n,s=e.params.loop?-t.length:0,c=e.params.loop?t.length*2:t.length,l=[];for(let e=s;e<c;e+=1)e>=a&&e<=o&&l.push(t[r(e)]);return l.map((t,n)=>w.cloneElement(t,{swiper:e,style:i,key:t.props.virtualIndex||t.key||`slide-${n}`}))}function Sv(e,t){return typeof window>`u`?(0,w.useEffect)(e,t):(0,w.useLayoutEffect)(e,t)}var Cv=(0,w.createContext)(null),wv=(0,w.createContext)(null),Tv=(0,w.forwardRef)(({className:e,tag:t=`div`,wrapperTag:n=`div`,children:r,onSwiper:i,...a}={},o)=>{let s=!1,[c,l]=(0,w.useState)(`swiper`),[u,d]=(0,w.useState)(null),[f,p]=(0,w.useState)(!1),m=(0,w.useRef)(!1),h=(0,w.useRef)(null),g=(0,w.useRef)(null),_=(0,w.useRef)(null),v=(0,w.useRef)(null),y=(0,w.useRef)(null),b=(0,w.useRef)(null),x=(0,w.useRef)(null),S=(0,w.useRef)(null),{params:C,passedParams:T,rest:ee,events:E}=pv(a),{slides:D,slots:O}=bv(r),te=()=>{p(!f)};Object.assign(C.on,{_containerClasses(e,t){l(t)}});let ne=()=>{Object.assign(C.on,E),s=!0;let e={...C};if(delete e.wrapperClass,g.current=new rv(e),g.current.virtual&&g.current.params.virtual.enabled){g.current.virtual.slides=D;let e={cache:!1,slides:D,renderExternal:d,renderExternalUpdate:!1};ov(g.current.params.virtual,e),ov(g.current.originalParams.virtual,e)}};h.current||ne(),g.current&&g.current.on(`_beforeBreakpoint`,te);let re=()=>{s||!E||!g.current||Object.keys(E).forEach(e=>{g.current.on(e,E[e])})},ie=()=>{!E||!g.current||Object.keys(E).forEach(e=>{g.current.off(e,E[e])})};(0,w.useEffect)(()=>()=>{g.current&&g.current.off(`_beforeBreakpoint`,te)}),(0,w.useEffect)(()=>{!m.current&&g.current&&(g.current.emitSlidesClasses(),m.current=!0)}),Sv(()=>{if(o&&(o.current=h.current),h.current)return g.current.destroyed&&ne(),mv({el:h.current,nextEl:y.current,prevEl:b.current,paginationEl:x.current,scrollbarEl:S.current,swiper:g.current},C),i&&!g.current.destroyed&&i(g.current),()=>{g.current&&!g.current.destroyed&&g.current.destroy(!0,!1)}},[]),Sv(()=>{re();let e=hv(T,_.current,D,v.current,e=>e.key);return _.current=T,v.current=D,e.length&&g.current&&!g.current.destroyed&&fv({swiper:g.current,slides:D,passedParams:T,changedParams:e,nextEl:y.current,prevEl:b.current,scrollbarEl:S.current,paginationEl:x.current}),()=>{ie()}}),Sv(()=>{gv(g.current)},[u]);function ae(){return C.virtual?xv(g.current,D,u):D.map((e,t)=>w.cloneElement(e,{swiper:g.current,swiperSlideIndex:t}))}return w.createElement(t,_v({ref:h,className:uv(`${c}${e?` ${e}`:``}`)},ee),w.createElement(wv.Provider,{value:g.current},O[`container-start`],w.createElement(n,{className:dv(C.wrapperClass)},O[`wrapper-start`],ae(),O[`wrapper-end`]),sv(C)&&w.createElement(w.Fragment,null,w.createElement(`div`,{ref:b,className:`swiper-button-prev`}),w.createElement(`div`,{ref:y,className:`swiper-button-next`})),lv(C)&&w.createElement(`div`,{ref:S,className:`swiper-scrollbar`}),cv(C)&&w.createElement(`div`,{ref:x,className:`swiper-pagination`}),O[`container-end`]))});Tv.displayName=`Swiper`;var Ev=(0,w.forwardRef)(({tag:e=`div`,children:t,className:n=``,swiper:r,zoom:i,lazy:a,virtualIndex:o,swiperSlideIndex:s,...c}={},l)=>{let u=(0,w.useRef)(null),[d,f]=(0,w.useState)(`swiper-slide`),[p,m]=(0,w.useState)(!1);function h(e,t,n){t===u.current&&f(n)}Sv(()=>{if(s!==void 0&&(u.current.swiperSlideIndex=s),l&&(l.current=u.current),!(!u.current||!r)){if(r.destroyed){d!==`swiper-slide`&&f(`swiper-slide`);return}return r.on(`_slideClass`,h),()=>{r&&r.off(`_slideClass`,h)}}}),Sv(()=>{r&&u.current&&!r.destroyed&&f(r.getSlideClasses(u.current))},[r]);let g={isActive:d.indexOf(`swiper-slide-active`)>=0,isVisible:d.indexOf(`swiper-slide-visible`)>=0,isFullyVisible:d.indexOf(`swiper-slide-fully-visible`)>=0,isPrev:d.indexOf(`swiper-slide-prev`)>=0,isNext:d.indexOf(`swiper-slide-next`)>=0},_=()=>typeof t==`function`?t(g):t;return w.createElement(e,_v({ref:u,className:uv(`${d}${n?` ${n}`:``}`),"data-swiper-slide-index":o,onLoad:()=>{m(!0)}},c),i&&w.createElement(Cv.Provider,{value:g},w.createElement(`div`,{className:`swiper-zoom-container`,"data-swiper-zoom":typeof i==`number`?i:void 0},_(),a&&!p&&w.createElement(`div`,{className:`swiper-lazy-preloader`,ref:e=>{e&&(e.lazyPreloaderManaged=!0)}}))),!i&&w.createElement(Cv.Provider,{value:g},_(),a&&!p&&w.createElement(`div`,{className:`swiper-lazy-preloader`,ref:e=>{e&&(e.lazyPreloaderManaged=!0)}})))});Ev.displayName=`SwiperSlide`;function Dv({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,o,s=i&&i.autoplay?i.autoplay.delay:3e3,c=i&&i.autoplay?i.autoplay.delay:3e3,l,u=new Date().getTime(),d,f,p,m,h,g;function _(t){!e||e.destroyed||!e.wrapperEl||t.target===e.wrapperEl&&(e.wrapperEl.removeEventListener(`transitionend`,_),!(g||t.detail&&t.detail.bySwiperTouchMove)&&T())}let v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&=(c=l,!1);let t=e.autoplay.paused?l:u+c-new Date().getTime();e.autoplay.timeLeft=t,r(`autoplayTimeLeft`,t,t/s),o=requestAnimationFrame(()=>{v()})},y=()=>{let t;if(t=e.virtual&&e.params.virtual.enabled?e.slides.find(e=>e.classList.contains(`swiper-slide-active`)):e.slides[e.activeIndex],t)return parseInt(t.getAttribute(`data-swiper-autoplay`),10)},b=()=>{let t=e.params.autoplay.delay,n=y();return!Number.isNaN(n)&&n>0&&(t=n),t},x=t=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),v();let n=t;n===void 0&&(n=b(),s=n,c=n),l=n;let i=e.params.speed,d=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(i,!0,!0),r(`autoplay`)):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,i,!0,!0),r(`autoplay`)):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(i,!0,!0),r(`autoplay`)):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,i,!0,!0),r(`autoplay`)),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{x()})))};return n>0?(clearTimeout(a),a=setTimeout(()=>{d()},n)):requestAnimationFrame(()=>{d()}),n},S=()=>{u=new Date().getTime(),e.autoplay.running=!0,x(),r(`autoplayStart`)},C=()=>{e.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(o),r(`autoplayStop`)},w=(t,n)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(a),t||(h=!0);let i=()=>{r(`autoplayPause`),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener(`transitionend`,_):T()};if(e.autoplay.paused=!0,n){i();return}l=(l||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&l<0&&!e.params.loop)&&(l<0&&(l=0),i())},T=()=>{e.isEnd&&l<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),h?(h=!1,x(l)):x(),e.autoplay.paused=!1,r(`autoplayResume`))},ee=()=>{if(e.destroyed||!e.autoplay.running)return;let t=rg();t.visibilityState===`hidden`&&(h=!0,w(!0)),t.visibilityState===`visible`&&T()},E=t=>{t.pointerType===`mouse`&&(h=!0,g=!0,!(e.animating||e.autoplay.paused)&&w(!0))},D=t=>{t.pointerType===`mouse`&&(g=!1,e.autoplay.paused&&T())},O=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener(`pointerenter`,E),e.el.addEventListener(`pointerleave`,D))},te=()=>{e.el&&typeof e.el!=`string`&&(e.el.removeEventListener(`pointerenter`,E),e.el.removeEventListener(`pointerleave`,D))},ne=()=>{rg().addEventListener(`visibilitychange`,ee)},re=()=>{rg().removeEventListener(`visibilitychange`,ee)};n(`init`,()=>{e.params.autoplay.enabled&&(O(),ne(),S())}),n(`destroy`,()=>{te(),re(),e.autoplay.running&&C()}),n(`_freeModeStaticRelease`,()=>{(p||h)&&T()}),n(`_freeModeNoMomentumRelease`,()=>{e.params.autoplay.disableOnInteraction?C():w(!0,!0)}),n(`beforeTransitionStart`,(t,n,r)=>{e.destroyed||!e.autoplay.running||(r||!e.params.autoplay.disableOnInteraction?w(!0,!0):C())}),n(`sliderFirstMove`,()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){C();return}f=!0,p=!1,h=!1,m=setTimeout(()=>{h=!0,p=!0,w(!0)},200)}}),n(`touchEnd`,()=>{if(!(e.destroyed||!e.autoplay.running||!f)){if(clearTimeout(m),clearTimeout(a),e.params.autoplay.disableOnInteraction){p=!1,f=!1;return}p&&e.params.cssMode&&T(),p=!1,f=!1}}),n(`slideChange`,()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(l=b(),s=b())}),Object.assign(e.autoplay,{start:S,stop:C,pause:w,resume:T})}var Ov=()=>{let[e,t]=(0,w.useState)({name:``,email:``,phone:``,company:``,employees:``,invoices:``,product:``}),[n,r]=(0,w.useState)({});(0,w.useEffect)(()=>{let e=localStorage.getItem(`quoteForm`);e&&t(JSON.parse(e))},[]),(0,w.useEffect)(()=>{localStorage.setItem(`quoteForm`,JSON.stringify(e))},[e]);let i=(e,t)=>{let n=``;if([`employees`,`invoices`].includes(e)&&t!==``){let r=Number(t);(isNaN(r)||r<0)&&(n=`Please enter a valid number`),e===`employees`&&r>1e4&&(n=`Employee count too large`),e===`invoices`&&r>1e6&&(n=`Invoice count too large`)}e===`email`&&t!==``&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)||(n=`Enter valid email`)),r(t=>({...t,[e]:n}))},a=n=>{let{name:r,value:a}=n.target;t({...e,[r]:a}),i(r,a)};return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)($.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.7},viewport:{once:!0},className:`\r
              relative\r
            `,children:[(0,P.jsx)(`div`,{className:`\r
                absolute\r
                inset-0\r
                bg-gradient-to-r\r
                from-[#2F80FF]/20\r
                to-[#7B61FF]/20\r
                blur-3xl\r
                rounded-[40px]\r
                scale-95\r
              `}),(0,P.jsxs)(`form`,{onSubmit:r=>{r.preventDefault(),!Object.values(n).some(e=>e!==``)&&(console.log(`Submitted Form:`,e),alert(`Quote request submitted successfully!`),localStorage.removeItem(`quoteForm`),t({name:``,email:``,phone:``,company:``,employees:``,invoices:``,product:``}))},className:`\r
            relative\r
                rounded-[36px]\r
                border\r
                border-white/60\r
                bg-white/70\r
                backdrop-blur-2xl\r
                p-8\r
                md:p-10\r
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]\r
              `,children:[(0,P.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-5`,children:[{name:`name`,placeholder:`Full Name`,type:`text`},{name:`email`,placeholder:`Business Email`,type:`email`},{name:`phone`,placeholder:`Phone Number`,type:`tel`},{name:`employees`,placeholder:`Employees`,type:`number`},{name:`invoices`,placeholder:`Monthly Invoices`,type:`number`},{name:`outgoing invoices`,placeholder:`Outgoing Invoices`,type:`number`}].map((t,r)=>(0,P.jsxs)(`div`,{className:`\r
                      flex\r
                      flex-col\r
                    `,children:[(0,P.jsx)(`input`,{required:!0,type:t.type,name:t.name,value:e[t.name],onChange:a,placeholder:t.placeholder,className:`
                        h-14
                        rounded-2xl
                        border
                        bg-white/80
                        px-5
                        outline-none
                        transition-all
                        duration-300
                        text-[#071426]
                        placeholder:text-gray-400
                        focus:border-[#2F80FF]
                        focus:ring-4
                        focus:ring-[#2F80FF]/10
                        ${n[t.name]?`border-red-400`:`border-gray-200`}
                      `}),n[t.name]&&(0,P.jsx)(`span`,{className:`\r
                          text-red-500\r
                          text-sm\r
                          mt-2\r
                        `,children:n[t.name]})]},r))}),(0,P.jsx)(`div`,{className:`mt-5`,children:(0,P.jsxs)(`select`,{required:!0,name:`product`,value:e.product,onChange:a,className:`\r
                    w-full\r
                    h-14\r
                    rounded-2xl\r
                    border\r
                    border-gray-200\r
                    bg-white/80\r
                    px-5\r
                    outline-none\r
                    transition-all\r
                    duration-300\r
                    text-[#071426]\r
                    focus:border-[#2F80FF]\r
                    focus:ring-4\r
                    focus:ring-[#2F80FF]/10\r
                  `,children:[(0,P.jsx)(`option`,{value:``,children:`Interested Product`}),(0,P.jsx)(`option`,{children:`TallyPrime`}),(0,P.jsx)(`option`,{children:`TallyPrime Server`}),(0,P.jsx)(`option`,{children:`TallyPrime AWS`}),(0,P.jsx)(`option`,{children:`Customization`}),(0,P.jsx)(`option`,{children:`Training`})]})}),(0,P.jsxs)($.button,{type:`submit`,whileHover:{scale:1.02},whileTap:{scale:.98},className:`\r
                  group\r
                  mt-8\r
                  w-full\r
                  h-14\r
                  rounded-2xl\r
                  bg-gradient-to-r\r
                  from-[#2F80FF]\r
                  to-[#7B61FF]\r
                  text-white\r
                  font-semibold\r
                  text-lg\r
                  shadow-[0_15px_35px_rgba(47,128,255,0.35)]\r
                  flex\r
                  items-center\r
                  justify-center\r
                  gap-3\r
                `,children:[`Get Free Quote`,(0,P.jsx)(or,{className:`\r
                    w-5\r
                    h-5\r
                    transition-transform\r
                    duration-300\r
                    group-hover:translate-x-1\r
                  `})]})]})]})})},kv=`/Balaji-Infotech/assets/about-2xW8xagj.png`,Av=`/Balaji-Infotech/assets/tallyPrime-DON61ItX.png`,jv=`/Balaji-Infotech/assets/tallyServer-Cq-rE9-D.png`,Mv=`/Balaji-Infotech/assets/tallyAws-C4vDBHbz.png`,Nv=`/Balaji-Infotech/assets/tallyMobile-tVZw2t7G.png`,Pv=()=>{let e=pt(),t=[{id:`prime`,path:`tallyprime`,label:`TallyPrime`,icon:(0,P.jsx)(yr,{className:`w-4 h-4`}),title:`Optimize Business Operations With TallyPrime`,description:`TallyPrime is a comprehensive business management software tailored to simplify and enhance the way businesses handle their financial and operational workflows. TallyPrime enables businesses to manage accounts, inventory, payroll, and taxation with unmatched efficiency.`,features:[`Simplified accounting workflows`,`Inventory & GST management`,`Multi-user collaboration`,`Customizable to Business Needs`,`Data Accuracy and Security`,`Reliable performance & support`],image:Av},{id:`server`,path:`tally-server`,label:`TallyPrime Server`,icon:(0,P.jsx)(bi,{className:`w-4 h-4`}),title:`Enhance Business Efficiency With TallyPrime Server`,description:`TallyPrime Server is a powerful solution designed to revolutionize how businesses manage their financial and operational data. Whether you’re a growing business or an established enterprise, TallyPrime Server offers tools that streamline operations and boost productivity.`,features:[`Centralized Data Management`,`Enhanced data security`,`Server-Based Architecture`,`Streamlined Troubleshooting`,`Customization and Integration`,`Improved Multi-User Efficiency`],image:jv},{id:`aws`,path:`aws`,label:`TallyPrime Powered by AWS`,icon:(0,P.jsx)(Sr,{className:`w-4 h-4`}),title:`Cloud-Powered Tally Experience With AWS`,description:`TallyPrime powered by AWS is a cutting-edge solution that leverages the flexibility and scalability of the cloud to revolutionize how businesses manage their financial and operational data. TallyPrime on AWS offers tools that boost productivity and streamline operations.`,features:[`Cloud-Based Accessibility`,`High Performance and Scalability`,`Streamlined Integration`,`Scalable deployment`,`Business continuity support`,`Enhanced Data Security`],image:Mv},{id:`Whatsapp`,path:`whatsapp`,label:`Tally Prime Server Whatsapp`,icon:(0,P.jsx)(ti,{className:`w-4 h-4`}),title:`Simplify Business Interactions With Tally On Whatsapp`,description:`Tally on WhatsApp revolutionizes the way businesses communicate and manage key operations by integrating TallyPrime with the power of WhatsApp. This feature enables businesses to access important financial and operational information instantly, ensuring faster decision-making and better collaboration.`,features:[`Instant Reports on Demand`,`Easy Setup and Integration`,`Automated Notifications`,`Enhanced User Convenience`,`Seamless Communication`,`Secure and Reliable`],image:Nv}],n=[{name:`Rajesh Verma`,role:`Managing Director`,image:`https://randomuser.me/api/portraits/men/32.jpg`,review:`Balaji AI InfoTech transformed our business operations with TallyPrime. Their support team is always available, ensuring we maximize the software’s potential.`},{name:`Sneha Kulkarni`,role:`HR Manager`,image:`https://randomuser.me/api/portraits/women/44.jpg`,review:`Balaji AI Infotech made managing our business finances a breeze. Their expertise in TallyPrime and their ability to customize it for our needs have helped us save time and focus on growth.`},{name:`Priya Sharma`,role:`Finance Head`,image:`https://randomuser.me/api/portraits/women/68.jpg`,review:`Thanks to Balaji AI InfoTech, our switch to TallyPrime was effortless. The cloud integration powered by AWS allows my team to work from anywhere, ensuring business continuity.`},{name:`Ankit Mehta`,role:`Business Owner`,image:`https://randomuser.me/api/portraits/men/75.jpg`,review:`Balaji AI InfoTech introduced us to TallyPrime, and we couldn’t be happier. It’s the perfect tool for managing our growing enterprise.`},{name:`Karan Sharma`,role:`Business Owner`,image:`https://randomuser.me/api/portraits/men/75.jpg`,review:`The automated data backup and robust security features give us peace of mind. Onboarding, reliable support, and smooth migration to TallyPrime. Highly recommended.`}],[r,i]=(0,w.useState)(t[0]);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)($h,{}),(0,P.jsxs)(`section`,{className:`relative py-14 md:py-20 px-4 sm:px-6 bg-white overflow-hidden`,children:[(0,P.jsxs)(`div`,{className:`max-w-3xl mx-auto text-center mb-12`,children:[(0,P.jsx)(`p`,{className:`\r
            text-sm\r
            tracking-[0.25em]\r
            uppercase\r
            text-[#2F80FF]\r
            font-semibold\r
            mb-4\r
          `,children:`Why Choose Us`}),(0,P.jsx)(`h2`,{className:`\r
            text-3xl\r
            md:text-5xl\r
            font-bold\r
            text-[#071426]\r
            mb-6\r
          `,children:`Trusted Expertise`}),(0,P.jsx)(`p`,{className:`\r
            text-[15px] md:text-[16px]\r
            text-gray-500\r
            leading-relaxed\r
          `,children:`Over two decades of experience delivering innovative Tally solutions for modern businesses.`})]}),(0,P.jsxs)(`div`,{className:`\r
            max-w-6xl\r
            mx-auto\r
            grid\r
            grid-cols-1\r
            lg:grid-cols-3\r
            gap-6`,children:[(0,P.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,P.jsxs)(`div`,{className:`group\r
                relative\r
                overflow-hidden\r
                rounded-[32px]\r
                border border-[#E5E7EB]\r
                bg-white\r
                p-6 sm:p-8\r
                hover:-translate-y-2\r
                hover:border-[#7B61FF]/30\r
                hover:shadow-[0_20px_60px_rgba(123,97,255,0.12)]\r
                transition-all\r
                duration-500`,children:[(0,P.jsx)(`div`,{className:`\r
                    absolute\r
                    top-[-30px]\r
                    right-[-30px]\r
                    w-[120px]\r
                    h-[120px]\r
                    rounded-full\r
                    bg-[#7B61FF]/10\r
                    blur-[60px]\r
                    opacity-0\r
                    group-hover:opacity-100\r
                    transition-all\r
                    duration-700\r
                  `}),(0,P.jsx)(`div`,{className:`\r
                  absolute\r
                  inset-0\r
                  rounded-[32px]\r
                  bg-gradient-to-br\r
                  from-white/80\r
                  via-transparent\r
                  to-transparent\r
                  opacity-0\r
                  group-hover:opacity-100\r
                  transition-all\r
                  duration-700\r
                  pointer-events-none\r
                `}),(0,P.jsxs)(`div`,{className:`relative z-10`,children:[(0,P.jsxs)(`div`,{className:`flex items-start gap-4 mb-6`,children:[(0,P.jsx)(`div`,{className:`\r
                      w-14 h-14\r
                      rounded-2xl\r
                      bg-gradient-to-br\r
                      from-[#2F80FF]\r
                      to-[#7B61FF]\r
                      flex items-center justify-center\r
                      text-white\r
                      shadow-lg\r
                      shrink-0\r
                      transition-all\r
                      duration-500\r
                      group-hover:scale-110\r
                      group-hover:rotate-3\r
                    `,children:(0,P.jsx)(Br,{size:26})}),(0,P.jsx)(`div`,{children:(0,P.jsx)(`h3`,{className:`\r
                        text-3xl\r
                        font-semibold\r
                        text-[#071426]\r
                        leading-tight\r
                      `,children:`Authorized Training Programs`})})]}),(0,P.jsx)(`p`,{className:`\r
                    text-gray-500\r
                    group-hover:text-[#071426]/70\r
                    transition-colors\r
                    duration-500\r
                    leading-relaxed\r
                  `,children:`TEPL-certified programs designed to enhance professional accounting and ERP skills.`})]})]}),(0,P.jsxs)(`div`,{className:`\r
                group\r
                relative\r
                overflow-hidden\r
                rounded-[32px]\r
                border border-[#E5E7EB]\r
                bg-white\r
                p-8\r
                hover:-translate-y-2\r
                hover:border-[#7B61FF]/30\r
                hover:shadow-[0_20px_60px_rgba(123,97,255,0.12)]\r
                transition-all\r
                duration-500\r
              `,children:[(0,P.jsx)(`div`,{className:`\r
    absolute\r
    top-[-30px]\r
    right-[-30px]\r
    w-[120px]\r
    h-[120px]\r
    rounded-full\r
    bg-[#7B61FF]/10\r
    blur-[60px]\r
    opacity-0\r
    group-hover:opacity-100\r
    transition-all\r
    duration-700\r
  `}),(0,P.jsxs)(`div`,{className:`flex items-start gap-4 mb-6`,children:[(0,P.jsx)(`div`,{className:`\r
      w-14 h-14\r
      rounded-2xl\r
      bg-gradient-to-br\r
      from-[#2F80FF]\r
      to-[#7B61FF]\r
      flex items-center justify-center\r
      text-white\r
      shadow-lg\r
      shrink-0\r
      transition-all\r
      duration-500\r
      group-hover:scale-110\r
      group-hover:rotate-3\r
    `,children:(0,P.jsx)(Wr,{size:26})}),(0,P.jsx)(`div`,{children:(0,P.jsx)(`h3`,{className:`text-2xl sm:text-3xl font-semibold text-[#071426] leading-tight`,children:`Comprehensive Support`})})]}),(0,P.jsx)(`p`,{className:`\r
                  text-gray-500\r
                  leading-relaxed\r
                  text-[16px]\r
                `,children:`Dedicated assistance to ensure seamless operations.`})]})]}),(0,P.jsxs)(`div`,{className:` group\r
              relative\r
              overflow-hidden\r
              rounded-[36px]\r
              lg:col-span-2\r
              relative\r
              overflow-hidden\r
              rounded-[36px]\r
              bg-white\r
              border border-[#E5E7EB]\r
              text-[#071426]\r
              p-10\r
              min-h-auto lg:min-h-[420px]\r
              hover:-translate-y-2\r
              hover:border-[#7B61FF]/30\r
              hover:shadow-[0_20px_60px_rgba(123,97,255,0.12)]\r
              transition-all\r
              duration-500\r
            `,children:[(0,P.jsx)(`div`,{className:`\r
                absolute\r
                top-[-30px]\r
                right-[-30px]\r
                w-[120px]\r
                h-[120px]\r
                rounded-full\r
                bg-[#7B61FF]/10\r
                blur-[60px]\r
                opacity-0\r
                group-hover:opacity-100\r
                transition-all\r
                duration-700\r
              `}),(0,P.jsx)(`div`,{className:`\r
                absolute\r
                top-[-120px]\r
                right-[-80px]\r
                w-[260px]\r
                h-[260px]\r
                bg-[#7B61FF]/10\r
                blur-[100px]\r
                rounded-full\r
              `}),(0,P.jsxs)(`div`,{className:`relative z-10`,children:[(0,P.jsxs)(`div`,{className:`\r
                  inline-flex\r
                  items-center\r
                  gap-2\r
                  px-4 py-2\r
                  rounded-full\r
                  bg-white/10\r
                  border border-black/10\r
                  backdrop-blur-lg\r
                  text-[#071426]\r
                  text-sm\r
                  mb-8\r
                `,children:[(0,P.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-green-400`}),`Enterprise Support`]}),(0,P.jsxs)(`div`,{className:`flex items-start gap-4 mb-6 `,children:[(0,P.jsx)(`div`,{className:`\r
                    w-14 h-14\r
                    rounded-2xl\r
                    bg-gradient-to-br\r
                    from-[#2F80FF]\r
                    to-[#7B61FF]\r
                    flex items-center justify-center\r
                    text-white\r
                    shadow-lg\r
                    shrink-0\r
                    transition-all\r
                    duration-500\r
                    group-hover:scale-110\r
                    group-hover:rotate-3\r
                  `,children:(0,P.jsx)(Hr,{size:26})}),(0,P.jsx)(`div`,{children:(0,P.jsx)(`h3`,{className:`\r
                      text-3xl\r
                      font-semibold\r
                      text-[#071426]\r
                      leading-tight\r
                    `,children:`Customer-Centric Approach`})})]}),(0,P.jsx)(`p`,{className:`\r
                  text-[#071426]\r
                  text-[16px] md:text-[17px]\r
                  leading-relaxed\r
                  max-w-[580px]\r
                  mb-10\r
                `,children:`We prioritize business growth with tailored solutions, reliable service, and long-term support. Your success is our priority with personalized solutions and support.`}),(0,P.jsxs)(`div`,{className:`\r
                  grid\r
                  grid-cols-2\r
                  md:grid-cols-3\r
                  gap-4\r
                  max-w-[580px]\r
                `,children:[(0,P.jsxs)(`div`,{className:`\r
                    rounded-2xl\r
                    border border-white/10\r
                    bg-gradient-to-br\r
                    from-[#2F80FF]\r
                    to-[#7B61FF]\r
                    backdrop-blur-xl\r
                    p-5\r
                  `,children:[(0,P.jsx)(`p`,{className:`text-white text-sm mb-2`,children:`Clients Served`}),(0,P.jsx)(`h4`,{className:`text-3xl text-white font-semibold`,children:`500+`})]}),(0,P.jsxs)(`div`,{className:`\r
                    rounded-2xl\r
                    border border-white/10\r
                    bg-gradient-to-br\r
                    from-[#2F80FF]\r
                    to-[#7B61FF]\r
                    backdrop-blur-xl\r
                    p-5\r
                    `,children:[(0,P.jsx)(`p`,{className:`text-white text-sm mb-2`,children:`Years Experience`}),(0,P.jsx)(`h4`,{className:`text-3xl text-white font-semibold`,children:`20+`})]}),(0,P.jsxs)(`div`,{className:`rounded-2xl\r
                    border border-white/10\r
                    bg-gradient-to-br\r
                    from-[#2F80FF]\r
                    to-[#7B61FF]\r
                    backdrop-blur-xl\r
                    p-5`,children:[(0,P.jsx)(`p`,{className:`text-white text-sm mb-2`,children:`Support Access`}),(0,P.jsx)(`h4`,{className:`text-3xl text-white font-semibold`,children:`24/7`})]})]})]})]})]})]}),(0,P.jsx)(`section`,{className:`py-14 md:py-18 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC]`,children:(0,P.jsxs)(`div`,{className:`max-w-6xl mx-auto`,children:[(0,P.jsxs)(`div`,{className:`text-center max-w-5xl mx-auto mb-10`,children:[(0,P.jsx)(`p`,{className:`\r
            text-[#2F80FF]\r
            uppercase\r
            tracking-[0.3em]\r
            text-sm\r
            font-semibold\r
            mb-6\r
          `,children:`ABOUT`}),(0,P.jsx)(`h2`,{className:`\r
            text-3xl\r
            sm:text-4xl\r
            md:text-6xl\r
            font-bold\r
            text-[#071426]\r
            leading-tight\r
            mb-8\r
          `,children:`About Balaji AI Infotech`}),(0,P.jsx)(`p`,{className:`\r
            text-[15px] md:text-[16px]\r
            md:text-xl\r
            text-gray-600\r
            leading-relaxed\r
          `,children:`At Balaji Ai Infotech Pvt. Ltd., we are committed to empowering businesses and individuals through Tally Application based solutions and training. As a trusted provider of Tally Software as a Service (SAAS) and Tally Education (TEPL), our purpose is to bridge the gap between skill development and accounting automation, ensuring every organization can achieve seamless financial management.`})]}),(0,P.jsxs)(`div`,{className:`\r
          grid\r
          lg:grid-cols-[1fr_1.1fr]\r
          gap-10\r
          items-center\r
        `,children:[(0,P.jsxs)(`div`,{className:`relative`,children:[(0,P.jsx)(`div`,{className:`\r
              absolute\r
              -top-10\r
              -left-10\r
              w-60\r
              h-60\r
              bg-[#7B61FF]/10\r
              blur-[100px]\r
              rounded-full\r
            `}),(0,P.jsxs)(`div`,{className:`\r
                relative\r
                overflow-hidden\r
                rounded-[28px] sm:rounded-[36px]\r
\r
                border border-white/40\r
\r
                bg-white/40\r
                backdrop-blur-2xl\r
\r
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]\r
              `,children:[(0,P.jsx)(`img`,{src:kv,alt:`About Balaji AI Infotech`,className:`\r
                  w-full\r
                  h-full\r
                  object-cover\r
                `}),(0,P.jsx)(`div`,{className:`\r
                absolute\r
                inset-0\r
                bg-gradient-to-t\r
                from-[#071426]/30\r
                via-transparent\r
                to-transparent\r
              `})]}),(0,P.jsxs)(`div`,{className:`\r
    mt-6\r
    rounded-[28px]\r
    border border-gray-200\r
    bg-white/70\r
    backdrop-blur-xl\r
    p-5 sm:p-6\r
    shadow-[0_10px_30px_rgba(0,0,0,0.05)]\r
  `,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-3 mb-4`,children:[(0,P.jsx)(`div`,{className:`\r
      w-3 h-3\r
      rounded-full\r
      bg-green-500\r
      animate-pulse\r
    `}),(0,P.jsx)(`p`,{className:`\r
      text-sm\r
      font-medium\r
      tracking-wide\r
      text-[#071426]\r
    `,children:`Trusted by modern businesses`})]}),(0,P.jsxs)(`div`,{className:`\r
    grid grid-cols-2\r
    gap-4\r
  `,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`p`,{className:`text-2xl font-bold text-[#071426]`,children:`ERP`}),(0,P.jsx)(`p`,{className:`text-sm text-gray-500 mt-1`,children:`Smart accounting workflows`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`p`,{className:`text-2xl font-bold text-[#071426]`,children:`GST`}),(0,P.jsx)(`p`,{className:`text-sm text-gray-500 mt-1`,children:`Seamless tax management`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`p`,{className:`text-2xl font-bold text-[#071426]`,children:`Payroll`}),(0,P.jsx)(`p`,{className:`text-sm text-gray-500 mt-1`,children:`Employee salary automation`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`p`,{className:`text-2xl font-bold text-[#071426]`,children:`TEPL`}),(0,P.jsx)(`p`,{className:`text-sm text-gray-500 mt-1`,children:`Certified training programs`})]})]})]})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`div`,{className:`\r
              inline-flex\r
              items-center\r
              gap-2\r
              px-4\r
              py-2\r
              rounded-full\r
              bg-[#2F80FF]/10\r
              text-[#2F80FF]\r
              text-sm\r
              font-medium\r
              mb-6\r
            `,children:[(0,P.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-green-400 animate-pulse`}),`Enterprise Expertise`]}),(0,P.jsx)(`h3`,{className:`\r
              text-3xl\r
              md:text-5xl\r
              font-bold\r
              text-[#071426]\r
              leading-tight\r
              mb-8\r
            `,children:`About Balaji Infotech Tally Experts`}),(0,P.jsx)(`p`,{className:`\r
              text-[16px] md:text-[17px]\r
              text-gray-600\r
              leading-relaxed\r
              mb-12\r
            `,children:`At Balaji Ai Infotech Pvt Ltd, we make it easier for businesses to manage their accounts and operations using Tally software. Since  2000, we have been helping businesses improve efficiency, manage accounts, track inventory, handle payroll, and meet tax compliance.`}),(0,P.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-5`,children:[(0,P.jsxs)(`div`,{className:`\r
                  group\r
                  relative\r
                  overflow-hidden\r
                  rounded-[28px]\r
                  p-6\r
\r
                  bg-white/70\r
                  backdrop-blur-2xl\r
\r
                  border border-white/50\r
\r
                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]\r
\r
                  hover:-translate-y-2\r
                  hover:shadow-[0_20px_60px_rgba(123,97,255,0.12)]\r
\r
                  transition-all\r
                  duration-500\r
                `,children:[(0,P.jsx)(`div`,{className:`\r
                  absolute\r
                  inset-0\r
                  bg-gradient-to-br\r
                  from-[#2F80FF]/10\r
                  via-[#7B61FF]/5\r
                  to-transparent\r
                  opacity-0\r
                  group-hover:opacity-100\r
                  transition-all\r
                  duration-500\r
                `}),(0,P.jsx)(`div`,{className:`\r
                  absolute\r
                  -top-10\r
                  -right-10\r
                  w-32\r
                  h-32\r
                  bg-[#7B61FF]/10\r
                  blur-[70px]\r
                  opacity-0\r
                  group-hover:opacity-100\r
                  transition-all\r
                  duration-700\r
                `}),(0,P.jsxs)(`div`,{className:`relative z-10`,children:[(0,P.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    gap-4\r
                    mb-6\r
                  `,children:[(0,P.jsx)(`div`,{className:`\r
                      w-14 h-14\r
                      rounded-2xl\r
                      bg-gradient-to-br\r
                      from-[#2F80FF]\r
                      to-[#7B61FF]\r
\r
                      flex items-center justify-center\r
                      shrink-0\r
                      text-white\r
                    `,children:(0,P.jsx)(fr,{size:24})}),(0,P.jsx)(`h4`,{className:`\r
                      text-[20px] sm:text-[22px]\r
                      font-semibold\r
                      text-[#071426]\r
                      leading-tight\r
                      mb-2\r
                    `,children:`Tally Sales`})]}),(0,P.jsx)(`p`,{className:`\r
                    text-gray-500\r
                    text-sm\r
                    leading-relaxed\r
                  `,children:`Expert Software sales and support for modern businesses.`})]})]}),(0,P.jsxs)(`div`,{className:`\r
                  group\r
                  relative\r
                  overflow-hidden\r
                  rounded-[28px]\r
                  p-6\r
\r
                  bg-white/70\r
                  backdrop-blur-2xl\r
\r
                  border border-white/50\r
\r
                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]\r
\r
                  hover:-translate-y-2\r
                  hover:shadow-[0_20px_60px_rgba(47,128,255,0.12)]\r
\r
                  transition-all\r
                  duration-500\r
                `,children:[(0,P.jsx)(`div`,{className:`\r
                  absolute\r
                  inset-0\r
                  bg-gradient-to-br\r
                  from-[#7B61FF]/10\r
                  via-[#2F80FF]/5\r
                  to-transparent\r
                  opacity-0\r
                  group-hover:opacity-100\r
                  transition-all\r
                  duration-500\r
                `}),(0,P.jsx)(`div`,{className:`\r
                  absolute\r
                  -top-10\r
                  -right-10\r
                  w-32\r
                  h-32\r
                  bg-[#2F80FF]/10\r
                  blur-[70px]\r
                  opacity-0\r
                  group-hover:opacity-100\r
                  transition-all\r
                  duration-700\r
                `}),(0,P.jsxs)(`div`,{className:`relative z-10`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-4 mb-6`,children:[(0,P.jsx)(`div`,{className:`\r
                      w-14 h-14\r
                      rounded-2xl\r
                      bg-gradient-to-br\r
                      from-[#2F80FF]\r
                      to-[#7B61FF]\r
\r
                      flex items-center justify-center\r
                      shrink-0\r
                      text-white\r
                    `,children:(0,P.jsx)(Cr,{size:24})}),(0,P.jsx)(`h4`,{className:`\r
                      text-[22px]\r
                      font-semibold\r
                      text-[#071426]\r
                      leading-tight\r
                      mb-2\r
                    `,children:`Tally API`})]}),(0,P.jsx)(`p`,{className:`\r
                    text-gray-500\r
                    text-sm\r
                    leading-relaxed\r
                  `,children:`Seamless automation and integration services for enterprise workflows.`})]})]}),(0,P.jsxs)(`div`,{className:`\r
                  group\r
                  relative\r
                  overflow-hidden\r
                  rounded-[28px]\r
                  p-6\r
\r
                  bg-white/70\r
                  backdrop-blur-2xl\r
\r
                  border border-white/50\r
\r
                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]\r
\r
                  hover:-translate-y-2\r
                  hover:shadow-[0_20px_60px_rgba(123,97,255,0.12)]\r
\r
                  transition-all\r
                  duration-500\r
                `,children:[(0,P.jsx)(`div`,{className:`\r
                  absolute\r
                  inset-0\r
                  bg-gradient-to-br\r
                  from-[#2F80FF]/10\r
                  via-[#7B61FF]/5\r
                  to-transparent\r
                  opacity-0\r
                  group-hover:opacity-100\r
                  transition-all\r
                  duration-500\r
                `}),(0,P.jsxs)(`div`,{className:`relative z-10`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-4 mb-6`,children:[(0,P.jsx)(`div`,{className:`\r
                      w-14 h-14\r
                      rounded-2xl\r
                      bg-gradient-to-br\r
                      from-[#2F80FF]\r
                      to-[#7B61FF]\r
\r
                      flex items-center justify-center\r
                      shrink-0\r
                      text-white\r
                    `,children:(0,P.jsx)(xi,{size:24})}),(0,P.jsx)(`h4`,{className:`\r
                      text-[22px]\r
                      font-semibold\r
                      text-[#071426]\r
                    `,children:`Customization`})]}),(0,P.jsx)(`p`,{className:`\r
                    text-gray-500\r
                    text-sm\r
                    leading-relaxed\r
                  `,children:`Personalized Tally solutions designed specifically around your operations.`})]})]}),(0,P.jsxs)(`div`,{className:`\r
                  group\r
                  relative\r
                  overflow-hidden\r
                  rounded-[28px]\r
                  p-6\r
\r
                  bg-white/70\r
                  backdrop-blur-2xl\r
\r
                  border border-white/50\r
\r
                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]\r
\r
                  hover:-translate-y-2\r
                  hover:shadow-[0_20px_60px_rgba(47,128,255,0.12)]\r
\r
                  transition-all\r
                  duration-500\r
                `,children:[(0,P.jsx)(`div`,{className:`\r
                  absolute\r
                  inset-0\r
                  bg-gradient-to-br\r
                  from-[#7B61FF]/10\r
                  via-[#2F80FF]/5\r
                  to-transparent\r
                  opacity-0\r
                  group-hover:opacity-100\r
                  transition-all\r
                  duration-500\r
                `}),(0,P.jsxs)(`div`,{className:`relative z-10`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-4 mb-6`,children:[(0,P.jsx)(`div`,{className:`\r
                      w-14 h-14\r
                      rounded-2xl\r
                      bg-gradient-to-br\r
                      from-[#2F80FF]\r
                      to-[#7B61FF]\r
\r
                      flex items-center justify-center\r
                      shrink-0\r
                      text-white\r
                    `,children:(0,P.jsx)(Br,{size:24})}),(0,P.jsx)(`h4`,{className:`\r
                      text-[22px]\r
                      font-semibold\r
                      text-[#071426]\r
                    `,children:`Training`})]}),(0,P.jsx)(`p`,{className:`\r
                    text-gray-500\r
                    text-sm\r
                    leading-relaxed\r
                  `,children:`Industry-focused education and practical Tally expertise programs.`})]})]})]})]})]})]})}),(0,P.jsxs)(`section`,{className:`relative py-16 md:py-20 px-4 sm:px-6 bg-white overflow-hidden`,children:[(0,P.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#2F80FF]/5 blur-[140px] rounded-full`}),(0,P.jsxs)(`div`,{className:`max-w-6xl mx-auto relative z-10`,children:[(0,P.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-12`,children:[(0,P.jsx)(`p`,{className:`\r
            text-[#2F80FF]\r
            uppercase\r
            tracking-[0.3em]\r
            text-sm\r
            font-semibold\r
            mb-6\r
          `,children:`Services`}),(0,P.jsxs)(`h2`,{className:`\r
          text-3xl\r
          md:text-6xl\r
          font-bold\r
          tracking-tight\r
          text-[#071426]\r
          leading-[1.05]\r
          mb-6\r
        `,children:[`What We Do`,(0,P.jsxs)(`span`,{className:`bg-gradient-to-r from-[#2F80FF] to-[#7B61FF] bg-clip-text text-transparent`,children:[` `,`?`]})]}),(0,P.jsx)(`p`,{className:`\r
          text-[16px] md:text-[17px]\r
          text-gray-600\r
          leading-relaxed\r
        `,children:`Empowering businesses and individuals with tailored Tally solutions, certified training, and exceptional support to simplify accounting and boost productivity.`})]}),(0,P.jsxs)(`div`,{className:`\r
        grid\r
        grid-cols-1\r
        md:grid-cols-2\r
        xl:grid-cols-3\r
        gap-5 sm:gap-7\r
      `,children:[(0,P.jsxs)($.div,{whileHover:{y:-8},transition:{type:`spring`,stiffness:220,damping:18},className:`\r
          group\r
          relative\r
          rounded-[28px]\r
          border border-gray-200\r
          bg-white/70\r
          backdrop-blur-xl\r
          p-5 sm:p-6\r
          min-h-[240px]\r
          overflow-hidden\r
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
          absolute inset-0\r
          opacity-0\r
          group-hover:opacity-100\r
          transition duration-500\r
          bg-gradient-to-br\r
          from-[#2F80FF]/10\r
          to-[#7B61FF]/10\r
        `}),(0,P.jsxs)(`div`,{className:`relative z-10`,children:[(0,P.jsx)(`div`,{className:`\r
              w-14 h-14\r
              rounded-2xl\r
              flex items-center justify-center\r
              bg-[#F4F7FF]\r
              \r
\r
              group-hover:bg-gradient-to-br\r
              group-hover:from-[#2F80FF]\r
              group-hover:to-[#7B61FF]\r
\r
              group-hover:text-white\r
\r
              transition-all\r
              duration-500\r
            `,children:(0,P.jsx)(ii,{className:`\r
                w-7 h-7\r
                text-[#4F7DFF]\r
                group-hover:text-white\r
                transition-colors duration-500\r
              `})}),(0,P.jsx)(`h3`,{className:`\r
            text-[20px] sm:text-[22px]\r
            font-bold\r
            text-[#071426]\r
            mb-4\r
          `,children:`Tally Software`}),(0,P.jsx)(`p`,{className:`\r
            text-gray-600\r
            leading-relaxed\r
            text-[15px] md:text-[16px]\r
          `,children:`Official Tally software solutions for accounting, GST billing, inventory, and business management.`})]}),(0,P.jsx)(`div`,{className:`\r
            absolute\r
            bottom-0\r
            left-0\r
            h-[3px]\r
            w-0\r
            bg-gradient-to-r\r
            from-[#2F80FF]\r
            to-[#7B61FF]\r
\r
            group-hover:w-full\r
\r
            transition-all\r
            duration-500\r
          `})]}),(0,P.jsxs)($.div,{whileHover:{y:-8},transition:{type:`spring`,stiffness:220,damping:18},className:`\r
          group\r
          relative\r
          rounded-[28px]\r
          border border-gray-200\r
          bg-white/70\r
          backdrop-blur-xl\r
          p-5 sm:p-6\r
          min-h-[240px]\r
          overflow-hidden\r
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
          absolute inset-0\r
          opacity-0\r
          group-hover:opacity-100\r
          transition duration-500\r
          bg-gradient-to-br\r
          from-[#2F80FF]/10\r
          to-[#7B61FF]/10\r
        `}),(0,P.jsxs)(`div`,{className:`relative z-10`,children:[(0,P.jsx)(`div`,{className:`\r
              w-14 h-14\r
              rounded-2xl\r
              flex items-center justify-center\r
              bg-[#F4F7FF]\r
              \r
\r
              group-hover:bg-gradient-to-br\r
              group-hover:from-[#2F80FF]\r
              group-hover:to-[#7B61FF]\r
\r
              group-hover:text-white\r
\r
              transition-all\r
              duration-500\r
            `,children:(0,P.jsx)(Ur,{className:`\r
                w-7 h-7\r
                text-[#4F7DFF]\r
                group-hover:text-white\r
                transition-colors duration-500\r
              `})}),(0,P.jsx)(`h3`,{className:`\r
            text-[20px] sm:text-[22px]\r
            font-bold\r
            text-[#071426]\r
            mb-4\r
          `,children:`Tally Services`}),(0,P.jsx)(`p`,{className:`\r
            text-gray-600\r
            leading-relaxed\r
            text-[15px] md:text-[16px]\r
          `,children:`Professional installation, troubleshooting, remote support, and operational assistance.`})]}),(0,P.jsx)(`div`,{className:`\r
            absolute\r
            bottom-0\r
            left-0\r
            h-[3px]\r
            w-0\r
            bg-gradient-to-r\r
            from-[#2F80FF]\r
            to-[#7B61FF]\r
\r
            group-hover:w-full\r
\r
            transition-all\r
            duration-500\r
          `})]}),(0,P.jsxs)($.div,{whileHover:{y:-8},transition:{type:`spring`,stiffness:220,damping:18},className:`\r
          group\r
          relative\r
          rounded-[28px]\r
          border border-gray-200\r
          bg-white/70\r
          backdrop-blur-xl\r
          p-5 sm:p-6\r
          min-h-[240px]\r
          overflow-hidden\r
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
          absolute inset-0\r
          opacity-0\r
          group-hover:opacity-100\r
          transition duration-500\r
          bg-gradient-to-br\r
          from-[#2F80FF]/10\r
          to-[#7B61FF]/10\r
        `}),(0,P.jsxs)(`div`,{className:`relative z-10`,children:[(0,P.jsx)(`div`,{className:`\r
              w-14 h-14\r
              rounded-2xl\r
              flex items-center justify-center\r
              bg-[#F4F7FF]\r
              \r
\r
              group-hover:bg-gradient-to-br\r
              group-hover:from-[#2F80FF]\r
              group-hover:to-[#7B61FF]\r
\r
              group-hover:text-white\r
\r
              transition-all\r
              duration-500\r
            `,children:(0,P.jsx)(Ti,{className:`\r
                w-7 h-7\r
                text-[#4F7DFF]\r
                group-hover:text-white\r
                transition-colors duration-500\r
              `})}),(0,P.jsx)(`h3`,{className:`\r
            text-[20px] sm:text-[22px]\r
            font-bold\r
            text-[#071426]\r
            mb-4\r
          `,children:`Tally Apps For Mobile`}),(0,P.jsx)(`p`,{className:`\r
            text-gray-600\r
            leading-relaxed\r
            text-[15px] md:text-[16px]\r
          `,children:`Access business reports, invoices, and analytics securely from anywhere using mobile integrations.`})]}),(0,P.jsx)(`div`,{className:`\r
            absolute\r
            bottom-0\r
            left-0\r
            h-[3px]\r
            w-0\r
            bg-gradient-to-r\r
            from-[#2F80FF]\r
            to-[#7B61FF]\r
\r
            group-hover:w-full\r
\r
            transition-all\r
            duration-500\r
          `})]}),(0,P.jsxs)($.div,{whileHover:{y:-8},transition:{type:`spring`,stiffness:220,damping:18},className:`\r
          group\r
          relative\r
          rounded-[28px]\r
          border border-gray-200\r
          bg-white/70\r
          backdrop-blur-xl\r
          p-5 sm:p-6\r
          min-h-[240px]\r
          overflow-hidden\r
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
          absolute inset-0\r
          opacity-0\r
          group-hover:opacity-100\r
          transition duration-500\r
          bg-gradient-to-br\r
          from-[#2F80FF]/10\r
          to-[#7B61FF]/10\r
        `}),(0,P.jsxs)(`div`,{className:`relative z-10`,children:[(0,P.jsx)(`div`,{className:`\r
              w-14 h-14\r
              rounded-2xl\r
              flex items-center justify-center\r
              bg-[#F4F7FF]\r
              \r
\r
              group-hover:bg-gradient-to-br\r
              group-hover:from-[#2F80FF]\r
              group-hover:to-[#7B61FF]\r
\r
              group-hover:text-white\r
\r
              transition-all\r
              duration-500\r
            `,children:(0,P.jsx)(fr,{className:`\r
                w-7 h-7\r
                text-[#4F7DFF]\r
                group-hover:text-white\r
                transition-colors duration-500\r
              `})}),(0,P.jsx)(`h3`,{className:`\r
            text-[20px] sm:text-[22px]\r
            font-bold\r
            text-[#071426]\r
            mb-4\r
          `,children:`Tally Solutions`}),(0,P.jsx)(`p`,{className:`\r
            text-gray-600\r
            leading-relaxed\r
            text-[15px] md:text-[16px]\r
          `,children:`Tailored enterprise solutions designed to simplify finance, payroll, taxation, and workflow automation.`})]}),(0,P.jsx)(`div`,{className:`\r
            absolute\r
            bottom-0\r
            left-0\r
            h-[3px]\r
            w-0\r
            bg-gradient-to-r\r
            from-[#2F80FF]\r
            to-[#7B61FF]\r
\r
            group-hover:w-full\r
\r
            transition-all\r
            duration-500\r
          `})]}),(0,P.jsxs)($.div,{whileHover:{y:-8},transition:{type:`spring`,stiffness:220,damping:18},className:`\r
          group\r
          relative\r
          rounded-[28px]\r
          border border-gray-200\r
          bg-white/70\r
          backdrop-blur-xl\r
          p-5 sm:p-6\r
          min-h-[240px]\r
          overflow-hidden\r
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
          absolute inset-0\r
          opacity-0\r
          group-hover:opacity-100\r
          transition duration-500\r
          bg-gradient-to-br\r
          from-[#2F80FF]/10\r
          to-[#7B61FF]/10\r
        `}),(0,P.jsxs)(`div`,{className:`relative z-10`,children:[(0,P.jsx)(`div`,{className:`\r
              w-14 h-14\r
              rounded-2xl\r
              flex items-center justify-center\r
              bg-[#F4F7FF]\r
              text-[#2F80FF]\r
\r
              group-hover:bg-gradient-to-br\r
              group-hover:from-[#2F80FF]\r
              group-hover:to-[#7B61FF]\r
\r
              group-hover:text-white\r
\r
              transition-all\r
              duration-500\r
            `,children:(0,P.jsx)(`svg`,{className:`w-8 h-8 text-[#4F7DFF] group-hover:text-white transition-colors duration-500`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,viewBox:`0 0 24 24`,children:(0,P.jsx)(`path`,{d:`M12 14l9-5-9-5-9 5 9 5zm0 0v6`})})}),(0,P.jsx)(`h3`,{className:`\r
            text-[20px] sm:text-[22px]\r
            font-bold\r
            text-[#071426]\r
            mb-4\r
          `,children:`Tally ERP 9 Solutions`}),(0,P.jsx)(`p`,{className:`\r
            text-gray-600\r
            leading-relaxed\r
            text-[15px] md:text-[16px]\r
          `,children:`Professional installation, troubleshooting, remote support, and operational assistance.`})]}),(0,P.jsx)(`div`,{className:`\r
            absolute\r
            bottom-0\r
            left-0\r
            h-[3px]\r
            w-0\r
            bg-gradient-to-r\r
            from-[#2F80FF]\r
            to-[#7B61FF]\r
\r
            group-hover:w-full\r
\r
            transition-all\r
            duration-500\r
          `})]}),(0,P.jsxs)($.div,{whileHover:{y:-8},transition:{type:`spring`,stiffness:220,damping:18},className:`\r
          group\r
          relative\r
          rounded-[28px]\r
          border border-gray-200\r
          bg-white/70\r
          backdrop-blur-xl\r
          p-5 sm:p-6\r
          min-h-[240px]\r
          overflow-hidden\r
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
          absolute inset-0\r
          opacity-0\r
          group-hover:opacity-100\r
          transition duration-500\r
          bg-gradient-to-br\r
          from-[#2F80FF]/10\r
          to-[#7B61FF]/10\r
        `}),(0,P.jsxs)(`div`,{className:`relative z-10`,children:[(0,P.jsx)(`div`,{className:`\r
              w-14 h-14\r
              rounded-2xl\r
              flex items-center justify-center\r
              bg-[#F4F7FF]\r
              \r
\r
              group-hover:bg-gradient-to-br\r
              group-hover:from-[#2F80FF]\r
              group-hover:to-[#7B61FF]\r
\r
              group-hover:text-white\r
\r
              transition-all\r
              duration-500\r
            `,children:(0,P.jsx)(pi,{className:`\r
                w-7 h-7\r
                text-[#4F7DFF]\r
                group-hover:text-white\r
                transition-colors duration-500\r
              `})}),(0,P.jsx)(`h3`,{className:`\r
            text-[20px] sm:text-[22px]\r
            font-bold\r
            text-[#071426]\r
            mb-4\r
          `,children:`Tally Add-Ons`}),(0,P.jsx)(`p`,{className:`\r
            text-gray-600\r
            leading-relaxed\r
            text-[15px] md:text-[16px]\r
          `,children:`Enhance Tally functionality with specialized plugins, integrations, and smart business tools.`})]}),(0,P.jsx)(`div`,{className:`\r
            absolute\r
            bottom-0\r
            left-0\r
            h-[3px]\r
            w-0\r
            bg-gradient-to-r\r
            from-[#2F80FF]\r
            to-[#7B61FF]\r
\r
            group-hover:w-full\r
\r
            transition-all\r
            duration-500\r
          `})]})]})]})]}),(0,P.jsxs)(`section`,{className:`relative py-16 md:py-20 overflow-hidden bg-white`,children:[(0,P.jsx)(`div`,{className:`absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full`}),(0,P.jsx)(`div`,{className:`absolute bottom-0 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full`}),(0,P.jsxs)(`div`,{className:`max-w-6xl mx-auto px-4 sm:px-6 relative z-10`,children:[(0,P.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-10`,children:[(0,P.jsx)(`p`,{className:`\r
            text-[#2F80FF]\r
            uppercase\r
            tracking-[0.3em]\r
            text-sm\r
            font-semibold\r
            mb-6\r
          `,children:`PRODUCTS`}),(0,P.jsx)(`h2`,{className:`\r
              text-3xl\r
              md:text-6xl\r
              font-bold\r
              text-[#071426]\r
              leading-tight\r
              tracking-tight\r
            `,children:`Our Products`}),(0,P.jsx)(`p`,{className:`\r
              mt-6\r
              text-[16px] md:text-[17px]\r
              text-gray-500\r
              leading-relaxed\r
            `,children:`Powerful Tally products designed to simplify accounting, automation, reporting, and business operations.`})]}),(0,P.jsx)(`div`,{className:`flex justify-center mb-14`,children:(0,P.jsx)(`div`,{className:`\r
              flex\r
              flex-nowrap md:flex-wrap\r
              overflow-x-auto\r
              scrollbar-hide\r
              items-center\r
              gap-2\r
              p-2\r
              rounded-full\r
              bg-[#F5F7FB]\r
              border border-gray-200\r
              shadow-sm\r
            `,children:t.map(e=>(0,P.jsxs)(`button`,{onClick:()=>i(e),className:`
                  relative
                  flex
                  items-center
                  gap-2
                  px-4 sm:px-5 py-3
                  rounded-full
                  text-[12px] sm:text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${r.id===e.id?`bg-gradient-to-r from-[#2F80FF] to-[#7B61FF] text-white shadow-lg`:`text-gray-500 hover:text-[#071426]`}
                `,children:[e.icon,e.label]},e.id))})}),(0,P.jsx)(`div`,{className:`\r
            relative\r
            rounded-[36px]\r
            border border-gray-200\r
            bg-white/80\r
            backdrop-blur-xl\r
            shadow-[0_10px_50px_rgba(0,0,0,0.06)]\r
            overflow-hidden\r
          `,children:(0,P.jsx)($p,{mode:`wait`,children:(0,P.jsxs)($.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-30},transition:{duration:.45},className:`\r
                grid\r
                grid-cols-1\r
                lg:grid-cols-2\r
                gap-10 lg:gap-14\r
                items-center\r
                p-5 sm:p-8 md:p-14\r
              `,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{className:`\r
                    text-2xl\r
                    sm:text-3xl\r
                    md:text-4xl\r
                    font-bold\r
                    text-[#071426]\r
                    leading-tight\r
                    tracking-tight\r
                    mb-6\r
                  `,children:r.title}),(0,P.jsx)(`p`,{className:`\r
                    text-gray-500\r
                    text-[15px] md:text-[16px]\r
                    leading-relaxed\r
                    mb-10\r
                  `,children:r.description}),(0,P.jsx)(`div`,{className:`space-y-5 mb-10`,children:r.features.map((e,t)=>(0,P.jsxs)($.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:t*.08},className:`\r
                        flex\r
                        items-start\r
                        gap-3\r
                      `,children:[(0,P.jsx)(`div`,{className:`\r
                          w-6 h-6\r
                          rounded-full\r
                          bg-gradient-to-r\r
                          from-[#2F80FF]\r
                          to-[#7B61FF]\r
                          flex\r
                          items-center\r
                          justify-center\r
                          mt-0.5\r
                          shrink-0\r
                        `,children:(0,P.jsx)(yr,{className:`w-3.5 h-3.5 text-white`})}),(0,P.jsx)(`span`,{className:`\r
                          text-gray-700\r
                          leading-relaxed\r
                        `,children:e})]},t))}),(0,P.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:(0,P.jsx)(`button`,{onClick:()=>e(`/products/${r.path}`),className:`\r
    inline-flex items-center justify-center\r
    px-7 py-4\r
    rounded-2xl\r
    bg-gradient-to-r\r
    from-[#2F80FF]\r
    to-[#7B61FF]\r
    text-white\r
    font-medium\r
    shadow-lg\r
    hover:scale-[1.03]\r
    transition-all\r
    duration-300\r
  `,children:`Explore Features`})})]}),(0,P.jsxs)($.div,{animate:{y:[0,-10,0]},transition:{duration:5,repeat:1/0},className:`relative`,children:[(0,P.jsx)(`div`,{className:`\r
      absolute\r
      inset-0\r
      bg-gradient-to-r\r
      from-[#2F80FF]/20\r
      to-[#7B61FF]/20\r
      blur-3xl\r
      rounded-full\r
      scale-90\r
    `}),(0,P.jsx)(`div`,{className:`\r
      relative\r
      h-[260px]\r
      sm:h-[340px]\r
      lg:h-[430px]\r
      rounded-[32px]\r
      overflow-hidden\r
      border border-gray-200\r
      shadow-[0_20px_60px_rgba(0,0,0,0.12)]\r
      bg-white\r
    `,children:(0,P.jsx)(`img`,{src:r.image,alt:r.label,className:`\r
        w-full\r
        h-full\r
        object-cover\r
      `})})]})]},r.id)})})]})]}),(0,P.jsxs)(`section`,{className:` relative py-16 md:py-20`,children:[(0,P.jsx)(`div`,{className:`\r
          absolute\r
          top-0\r
          left-1/2\r
          -translate-x-1/2\r
          w-[700px]\r
          h-[700px]\r
          bg-gradient-to-r\r
          from-[#2F80FF]/10\r
          to-[#7B61FF]/10\r
          blur-3xl\r
          rounded-full\r
        `}),(0,P.jsxs)(`div`,{className:`max-w-6xl mx-auto px-4 sm:px-6 relative z-10`,children:[(0,P.jsxs)(`div`,{className:`text-center mb-10`,children:[(0,P.jsx)(`p`,{className:`\r
              text-[#2F80FF]\r
              font-semibold\r
              tracking-[0.25em]\r
              uppercase\r
              mb-4\r
            `,children:`Testimonials`}),(0,P.jsx)(`h2`,{className:`\r
              text-3xl\r
              md:text-6xl\r
              font-bold\r
              text-[#071426]\r
              leading-tight\r
            `,children:`What Our Clients Say`}),(0,P.jsx)(`p`,{className:`\r
              max-w-2xl\r
              mx-auto\r
              mt-6\r
              text-[16px] md:text-[17px]\r
              text-gray-500\r
              leading-relaxed\r
            `,children:`Trusted by businesses across industries for seamless Tally solutions, expert support, and scalable services.`})]}),(0,P.jsx)(Tv,{modules:[Dv],spaceBetween:28,slidesPerView:1.1,centeredSlides:!0,loop:!0,speed:1e3,autoplay:{delay:3500,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:1.3},1024:{slidesPerView:2.2},1280:{slidesPerView:2.6}},children:n.map((e,t)=>(0,P.jsx)(Ev,{children:(0,P.jsxs)($.div,{whileHover:{y:-10,scale:1.01},transition:{duration:.3},className:`!overflow-visible\r
                  group\r
                  relative\r
                  h-full\r
                  min-h-[340px] sm:min-h-[400px]\r
                  rounded-[28px]\r
                  border\r
                  border-white/60\r
                  bg-white\r
                  \r
                  shadow-[0_10px_30px_rgba(0,0,0,0.04)]\r
                  p-5 sm:p-6 lg:p-7\r
                  overflow-hidden\r
                `,children:[(0,P.jsx)(`div`,{className:`\r
                    absolute\r
                    inset-0\r
                    opacity-0\r
                    group-hover:opacity-100\r
                    transition\r
                    duration-500\r
                    bg-gradient-to-br\r
                    from-[#2F80FF]/5\r
                    to-[#7B61FF]/5\r
                  `}),(0,P.jsx)(mi,{className:`\r
                    absolute\r
                    right-8\r
                    bottom-8\r
                    w-16\r
                    h-16\r
                    text-[#2F80FF]/10\r
                  `}),(0,P.jsx)(`div`,{className:`flex gap-1 mb-6 relative z-10`,children:[...[,,,,,]].map((e,t)=>(0,P.jsx)(Di,{className:`\r
                        w-5\r
                        h-5\r
                        fill-yellow-400\r
                        text-yellow-400\r
                      `},t))}),(0,P.jsxs)(`p`,{className:`\r
                    text-gray-600\r
                    leading-8\r
                    text-[15px]\r
                    md:text-base\r
                    mb-10\r
                    relative\r
                    z-10\r
                  `,children:[`“`,e.review,`”`]}),(0,P.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    gap-4\r
                    relative\r
                    z-10\r
                  `,children:[(0,P.jsx)(`img`,{src:e.image,alt:e.name,className:`\r
                      w-12\r
                      h-12\r
                      rounded-full\r
                      object-cover\r
                      border-2\r
                      border-white\r
                      shadow-md\r
                    `}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h4`,{className:`\r
                        text-lg sm:text-xl\r
                        font-semibold\r
                        text-[#071426]\r
                      `,children:e.name}),(0,P.jsx)(`p`,{className:`text-gray-500`,children:e.role})]})]}),(0,P.jsx)(`div`,{className:`\r
                    absolute\r
                    bottom-0\r
                    left-0\r
                    h-[3px]\r
                    w-0\r
                    group-hover:w-full\r
                    transition-all\r
                    duration-500\r
                    bg-gradient-to-r\r
                    from-[#2F80FF]\r
                    to-[#7B61FF]\r
                  `})]})},t))})]})]}),(0,P.jsxs)(`section`,{className:` relative py-16 md:py-20 overflow-hidden bg-[#F8FAFC]`,children:[(0,P.jsx)(`div`,{className:`\r
          absolute\r
          top-0\r
          left-1/2\r
          -translate-x-1/2\r
          w-[700px]\r
          h-[700px]\r
          bg-gradient-to-r\r
          from-[#2F80FF]/10\r
          to-[#7B61FF]/10\r
          blur-3xl\r
          rounded-full\r
        `}),(0,P.jsx)(`div`,{className:`max-w-6xl mx-auto px-4 sm:px-6 relative z-10`,children:(0,P.jsxs)(`div`,{className:`\r
            grid\r
            grid-cols-1\r
            lg:grid-cols-2\r
            gap-10 lg:gap-14\r
            items-center\r
          `,children:[(0,P.jsxs)($.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.7},viewport:{once:!0},children:[(0,P.jsxs)(`div`,{className:`\r
                inline-flex\r
                items-center\r
                gap-2\r
                px-5\r
                py-2\r
                rounded-full\r
                bg-[#2F80FF]/10\r
                border border-[#2F80FF]/10\r
                text-[#2F80FF]\r
                font-medium\r
                mb-6\r
              `,children:[(0,P.jsx)(cr,{className:`w-4 h-4`}),`Free Consultation`]}),(0,P.jsxs)(`h2`,{className:`\r
                text-3xl\r
                sm:text-4xl\r
                md:text-6xl\r
                font-bold\r
                text-[#071426]\r
                leading-tight\r
                mb-6\r
              `,children:[`Request A`,(0,P.jsxs)(`span`,{className:`\r
                  bg-gradient-to-r\r
                  from-[#2F80FF]\r
                  to-[#7B61FF]\r
                  bg-clip-text\r
                  text-transparent\r
                `,children:[` `,`Quote`]})]}),(0,P.jsx)(`p`,{className:`\r
                text-[16px] md:text-[17px]\r
                text-gray-600\r
                leading-relaxed\r
                max-w-xl\r
                mb-10\r
              `,children:`Let our certified Tally experts help you choose the right solution for your business operations, accounting workflows, and scalable growth.`}),(0,P.jsx)(`div`,{className:`space-y-5 mb-10`,children:[{icon:Ci,title:`Certified Tally Experts`},{icon:Wr,title:`24/7 Technical Support`},{icon:pr,title:`Trusted By 500+ Businesses`}].map((e,t)=>(0,P.jsxs)($.div,{whileHover:{x:5},className:`\r
                    flex\r
                    items-center\r
                    gap-4\r
                  `,children:[(0,P.jsx)(`div`,{className:`\r
                      w-12\r
                      h-12\r
                      rounded-2xl\r
                      flex\r
                      items-center\r
                      justify-center\r
                      bg-gradient-to-br\r
                      from-[#2F80FF]\r
                      to-[#7B61FF]\r
                      shadow-lg\r
                    `,children:(0,P.jsx)(e.icon,{className:`w-5 h-5 text-white`})}),(0,P.jsx)(`p`,{className:`\r
                      text-base sm:text-lg\r
                      font-medium\r
                      text-[#071426]\r
                    `,children:e.title})]},t))})]}),(0,P.jsx)(Ov,{})]})})]})]})},Fv=`/Balaji-Infotech/assets/about-hero-oohS97_j.png`,Iv=({end:e,suffix:t=``})=>{let[n,r]=(0,w.useState)(0),i=(0,w.useRef)(null),a=Zh(i,{once:!0,margin:`-100px`});return(0,w.useEffect)(()=>{if(!a)return;let t=0,n=e/(2e3/16),i=setInterval(()=>{t+=n,t>=e?(r(e),clearInterval(i)):r(Math.floor(t))},16);return()=>clearInterval(i)},[e,a]),(0,P.jsxs)(`span`,{ref:i,children:[n,t]})};function Lv(){let e=pt();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`section`,{className:`\r
        relative\r
        overflow-hidden\r
        bg-[#F8FAFC]\r
        lg:min-h-[85vh]\r
        flex\r
        items-center\r
        pt-28\r
        sm:pt-32\r
        pb-16\r
        sm:pb-20\r
      `,children:[(0,P.jsxs)(`div`,{className:`absolute inset-0 overflow-hidden`,children:[(0,P.jsx)(`div`,{className:`\r
            absolute\r
            top-[-10%]\r
            left-[-10%]\r
            w-[500px]\r
            h-[500px]\r
            rounded-full\r
            bg-[#2F80FF]/10\r
            blur-3xl\r
          `}),(0,P.jsx)(`div`,{className:`\r
            absolute\r
            bottom-[-20%]\r
            right-[-10%]\r
            w-[500px]\r
            h-[500px]\r
            rounded-full\r
            bg-[#7B61FF]/10\r
            blur-3xl\r
          `})]}),(0,P.jsxs)(`div`,{className:`\r
          relative\r
          max-w-7xl\r
          mx-auto\r
          px-4 sm:px-6 lg:px-8\r
          grid\r
          grid-cols-1\r
          lg:grid-cols-2\r
          gap-12\r
          lg:gap-16\r
          items-center\r
        `,children:[(0,P.jsxs)($.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[(0,P.jsxs)(`div`,{className:`\r
              inline-flex\r
              items-center\r
              gap-2\r
              px-4\r
              py-2\r
              rounded-full\r
              bg-white\r
              border border-gray-200\r
              shadow-sm\r
              mb-6\r
            `,children:[(0,P.jsx)(Ci,{size:18,className:`text-[#2F80FF]`}),(0,P.jsx)(`span`,{className:`\r
                text-sm\r
                font-medium\r
                text-[#071426]\r
              `,children:`Trusted Tally Solutions Partner`})]}),(0,P.jsxs)(`h1`,{className:`\r
              text-[42px]\r
              sm:text-5xl\r
              md:text-6xl\r
              lg:text-7xl\r
              font-bold\r
              leading-[1.05]\r
              tracking-[-2px]\r
              text-[#071426]\r
            `,children:[`20+ Years`,(0,P.jsx)(`br`,{}),(0,P.jsx)(`span`,{className:`\r
                bg-gradient-to-r\r
                from-[#2F80FF]\r
                to-[#7B61FF]\r
                bg-clip-text\r
                text-transparent\r
              `,children:`of Excellence`}),(0,P.jsx)(`br`,{}),`in Tally Solutions`]}),(0,P.jsx)(`p`,{className:`\r
              mt-6\r
              sm:mt-8\r
              text-[15px]\r
              md:text-[16px]\r
              leading-8\r
              sm:leading-9\r
              text-gray-600\r
              max-w-2xl\r
            `,children:`At Balaji Ai Infotech Pvt Ltd, we make it easier for businesses to manage their accounts and operations using Tally software. Since  2000, we have been helping businesses improve efficiency, manage accounts, track inventory, handle payroll, and meet tax compliance.`}),(0,P.jsxs)(`div`,{className:`\r
              flex\r
              flex-col\r
              sm:flex-row\r
              flex-wrap\r
              gap-4\r
              mt-10\r
              sm:mt-12\r
            `,children:[(0,P.jsxs)(`button`,{onClick:()=>e(`/contact`),className:`\r
                group\r
                w-full\r
                sm:w-auto\r
                justify-center\r
                px-7\r
                py-4\r
                rounded-2xl\r
                bg-gradient-to-r\r
                from-[#2F80FF]\r
                to-[#7B61FF]\r
                text-white\r
                font-medium\r
                flex\r
                items-center\r
                gap-2\r
                transition-all\r
                duration-300\r
                hover:scale-[1.03]\r
                hover:shadow-[0_15px_35px_rgba(47,128,255,0.35)]\r
              `,children:[`Contact Us`,(0,P.jsx)(or,{size:18,className:`\r
                  transition-transform\r
                  duration-300\r
                  group-hover:translate-x-1\r
                `})]}),(0,P.jsx)(`button`,{onClick:()=>e(`/services`),className:`\r
                w-full\r
                sm:w-auto\r
                px-7\r
                py-4\r
                rounded-2xl\r
                bg-white\r
                border border-gray-200\r
                text-[#071426]\r
                font-medium\r
                transition-all\r
                duration-300\r
                hover:border-[#2F80FF]\r
                hover:text-[#2F80FF]\r
                hover:shadow-lg\r
              `,children:`Explore Services`})]})]}),(0,P.jsxs)($.div,{initial:{opacity:0,x:60},whileInView:{opacity:1,x:0},transition:{duration:.9},viewport:{once:!0},className:`relative`,children:[(0,P.jsx)(`div`,{className:`\r
              absolute\r
              inset-0\r
              bg-gradient-to-r\r
              from-[#2F80FF]/20\r
              to-[#7B61FF]/20\r
              blur-3xl\r
              rounded-full\r
              scale-90\r
            `}),(0,P.jsxs)(`div`,{className:`relative mt-4 lg:mt-0\r
              rounded-[36px]\r
              overflow-hidden\r
              border border-white/50\r
              shadow-[0_20px_80px_rgba(0,0,0,0.12)]\r
              bg-white\r
            `,children:[(0,P.jsx)(`img`,{src:Fv,alt:`About Balaji Infotech`,className:`\r
                w-full\r
                h-[320px]\r
                sm:h-[420px]\r
                lg:h-[520px]\r
                object-cover\r
              `}),(0,P.jsx)(`div`,{className:`absolute inset-0 bg-black/10`})]}),(0,P.jsxs)(`div`,{className:`\r
              absolute\r
              -bottom-6\r
              left-4\r
              sm:left-8\r
              bg-white/80\r
              backdrop-blur-xl\r
              border border-white/60\r
              rounded-3xl\r
              px-5\r
              sm:px-6\r
              py-4\r
              sm:py-5\r
              shadow-[0_20px_40px_rgba(0,0,0,0.08)]\r
            `,children:[(0,P.jsx)(`p`,{className:`\r
                text-sm\r
                text-gray-500\r
              `,children:`Trusted by Businesses`}),(0,P.jsx)(`h3`,{className:`\r
                text-3xl\r
                font-bold\r
                text-[#071426]\r
                mt-1\r
              `,children:`5000+`})]})]})]})]}),(0,P.jsxs)(`section`,{className:`\r
    relative\r
    py-14\r
    sm:py-16\r
    md:py-20\r
    overflow-hidden\r
  `,children:[(0,P.jsx)(`div`,{className:`\r
      absolute\r
      top-1/2\r
      left-1/2\r
      -translate-x-1/2\r
      -translate-y-1/2\r
      w-[700px]\r
      h-[700px]\r
      bg-gradient-to-r\r
      from-[#2F80FF]/10\r
      to-[#7B61FF]/10\r
      blur-3xl\r
      rounded-full\r
    `}),(0,P.jsxs)(`div`,{className:`max-w-6xl mx-auto px-4 sm:px-6 relative z-10`,children:[(0,P.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-16`,children:[(0,P.jsx)(`p`,{className:`\r
          text-[#2F80FF]\r
          font-semibold\r
          tracking-[0.25em]\r
          uppercase\r
          mb-4\r
        `,children:`Our Foundation`}),(0,P.jsx)(`h2`,{className:`\r
          text-[32px]\r
          sm:text-4xl\r
          md:text-6xl\r
          font-bold\r
          leading-tight\r
          text-[#0B1220]\r
          mb-6\r
        `,children:`Mission, Vision & Goals`}),(0,P.jsx)(`p`,{className:`\r
          text-[16px] md:text-[17px]\r
          text-[#5B6475]\r
          leading-relaxed\r
        `,children:`We empower businesses with reliable Tally solutions, enterprise support, and modern accounting systems designed for long-term growth.`})]}),(0,P.jsxs)(`div`,{className:`\r
        grid\r
        grid-cols-1\r
        md:grid-cols-3\r
        gap-8\r
      `,children:[(0,P.jsxs)($.div,{whileHover:{y:-10},transition:{duration:.3},className:`\r
          group\r
          relative\r
          bg-white/80\r
          backdrop-blur-xl\r
          border border-white/60\r
          rounded-[32px]\r
          p-7\r
          sm:p-10\r
          shadow-[0_20px_60px_rgba(0,0,0,0.06)]\r
          overflow-hidden\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
            absolute\r
            inset-0\r
            opacity-0\r
            group-hover:opacity-100\r
            transition\r
            duration-500\r
            bg-gradient-to-br\r
            from-[#2F80FF]/5\r
            to-[#7B61FF]/10\r
          `}),(0,P.jsx)(`div`,{className:`\r
            relative\r
            w-14\r
            h-14\r
            rounded-2xl\r
            bg-gradient-to-r\r
            from-[#2F80FF]\r
            to-[#7B61FF]\r
            flex\r
            items-center\r
            justify-center\r
            shadow-lg\r
            mb-8\r
          `,children:(0,P.jsx)(Oi,{className:`w-7 h-7 text-white`})}),(0,P.jsx)(`h3`,{className:`\r
            text-2xl\r
            sm:text-3xl\r
            font-bold\r
            text-[#0B1220]\r
            mb-5\r
          `,children:`Our Mission`}),(0,P.jsx)(`p`,{className:`\r
            text-[#5B6475]\r
            leading-relaxed\r
            text-[15px] md:text-[16px]\r
          `,children:`Our mission is to provide tailored, efficient, and user-friendly solutions that enhance operational efficiency and financial accuracy for our clients.`})]}),(0,P.jsxs)($.div,{whileHover:{y:-10},transition:{duration:.3},className:`\r
          group\r
          relative\r
          bg-white/80\r
          backdrop-blur-xl\r
          border border-white/60\r
          rounded-[32px]\r
          p-10\r
          shadow-[0_20px_60px_rgba(0,0,0,0.06)]\r
          overflow-hidden\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
            absolute\r
            inset-0\r
            opacity-0\r
            group-hover:opacity-100\r
            transition\r
            duration-500\r
            bg-gradient-to-br\r
            from-[#2F80FF]/5\r
            to-[#7B61FF]/10\r
          `}),(0,P.jsx)(`div`,{className:`\r
            relative\r
            w-14\r
            h-14\r
            rounded-2xl\r
            bg-gradient-to-r\r
            from-[#2F80FF]\r
            to-[#7B61FF]\r
            flex\r
            items-center\r
            justify-center\r
            shadow-lg\r
            mb-8\r
          `,children:(0,P.jsx)(Or,{className:`w-7 h-7 text-white`})}),(0,P.jsx)(`h3`,{className:`\r
            text-2xl\r
            sm:text-3xl\r
            font-bold\r
            text-[#0B1220]\r
            mb-5\r
          `,children:`Our Vision`}),(0,P.jsx)(`p`,{className:`\r
            text-[#5B6475]\r
            leading-relaxed\r
            text-[15px] md:text-[16px]\r
          `,children:`To be a leading provider of innovative Tally solutions, recognized for our commitment to excellence, customer satisfaction, and continuous improvement in financial management.`})]}),(0,P.jsxs)($.div,{whileHover:{y:-10},transition:{duration:.3},className:`\r
          group\r
          relative\r
          bg-white/80\r
          backdrop-blur-xl\r
          border border-white/60\r
          rounded-[32px]\r
          p-10\r
          shadow-[0_20px_60px_rgba(0,0,0,0.06)]\r
          overflow-hidden\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
            absolute\r
            inset-0\r
            opacity-0\r
            group-hover:opacity-100\r
            transition\r
            duration-500\r
            bg-gradient-to-br\r
            from-[#2F80FF]/5\r
            to-[#7B61FF]/10\r
          `}),(0,P.jsx)(`div`,{className:`\r
            relative\r
            w-14\r
            h-14\r
            rounded-2xl\r
            bg-gradient-to-r\r
            from-[#2F80FF]\r
            to-[#7B61FF]\r
            flex\r
            items-center\r
            justify-center\r
            shadow-lg\r
            mb-8\r
          `,children:(0,P.jsx)(Pr,{className:`w-7 h-7 text-white`})}),(0,P.jsx)(`h3`,{className:`\r
            text-2xl\r
            sm:text-3xl\r
            font-bold\r
            text-[#0B1220]\r
            mb-5\r
          `,children:`Our Goals`}),(0,P.jsx)(`p`,{className:`\r
            text-[#5B6475]\r
            leading-relaxed\r
            text-[15px] md:text-[16px]\r
          `,children:`At Balaji Ai Infotech, we are dedicated to delivering comprehensive Tally-based solutions and services that empower businesses to streamline their accounting, inventory, and compliance processes.`})]})]})]})]}),(0,P.jsxs)(`section`,{className:`\r
      relative\r
      py-16 md:py-20\r
      overflow-hidden\r
    `,children:[(0,P.jsx)(`div`,{className:`\r
        absolute\r
        top-1/2\r
        left-1/2\r
        -translate-x-1/2\r
        -translate-y-1/2\r
        w-[600px]\r
        h-[600px]\r
        bg-gradient-to-r\r
        from-[#2F80FF]/10\r
        to-[#7B61FF]/10\r
        blur-3xl\r
        rounded-full\r
      `}),(0,P.jsxs)(`div`,{className:`max-w-6xl mx-auto px-4 sm:px-6 relative z-10`,children:[(0,P.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-16`,children:[(0,P.jsx)(`p`,{className:`\r
            text-[#2F80FF]\r
            font-semibold\r
            tracking-[0.25em]\r
            uppercase\r
            mb-4\r
          `,children:`Our Achievements`}),(0,P.jsx)(`h2`,{className:`\r
            text-3xl\r
            md:text-5xl\r
            font-bold\r
            text-[#0B1220]\r
            leading-tight\r
            mb-6\r
          `,children:`Trusted By Businesses Across Industries`}),(0,P.jsx)(`p`,{className:`\r
            text-[16px] md:text-[17px]\r
            text-[#5B6475]\r
            leading-relaxed\r
          `,children:`With decades of experience and long-term client trust, we continue delivering reliable Tally solutions and enterprise support services.`})]}),(0,P.jsxs)(`div`,{className:`\r
    grid\r
    grid-cols-1\r
    md:grid-cols-3\r
    gap-10\r
    md:gap-12\r
    text-center\r
  `,children:[(0,P.jsxs)(`div`,{className:`\r
      flex\r
      flex-col\r
      items-center\r
      justify-center\r
    `,children:[(0,P.jsx)(`h3`,{className:`\r
    text-4xl\r
    md:text-6xl\r
    font-bold\r
    bg-gradient-to-r\r
    from-[#2F80FF]\r
    to-[#7B61FF]\r
    bg-clip-text\r
    text-transparent\r
    mb-4\r
  `,children:(0,P.jsx)(Iv,{end:24,suffix:`+`})}),(0,P.jsx)(`p`,{className:`\r
        text-lg\r
        md:text-xl\r
        font-semibold\r
        text-[#0B1220]\r
      `,children:`Years of Experience`})]}),(0,P.jsxs)(`div`,{className:`\r
      flex\r
      flex-col\r
      items-center\r
      justify-center\r
      md:border-x\r
      border-gray-200\r
    `,children:[(0,P.jsx)(`h3`,{className:`\r
    text-4xl\r
    md:text-6xl\r
    font-bold\r
    bg-gradient-to-r\r
    from-[#2F80FF]\r
    to-[#7B61FF]\r
    bg-clip-text\r
    text-transparent\r
    mb-4\r
  `,children:(0,P.jsx)(Iv,{end:100,suffix:`%`})}),(0,P.jsx)(`p`,{className:`\r
        text-lg\r
        md:text-xl\r
        font-semibold\r
        text-[#0B1220]\r
      `,children:`Customer Satisfaction`})]}),(0,P.jsxs)(`div`,{className:`\r
      flex\r
      flex-col\r
      items-center\r
      justify-center\r
    `,children:[(0,P.jsx)(`h3`,{className:`\r
    text-4xl\r
    md:text-6xl\r
    font-bold\r
    bg-gradient-to-r\r
    from-[#2F80FF]\r
    to-[#7B61FF]\r
    bg-clip-text\r
    text-transparent\r
    mb-4\r
  `,children:(0,P.jsx)(Iv,{end:1e3,suffix:`+`})}),(0,P.jsx)(`p`,{className:`\r
        text-lg\r
        md:text-xl\r
        font-semibold\r
        text-[#0B1220]\r
      `,children:`Happy Clients`})]})]})]})]}),(0,P.jsxs)(`section`,{className:`\r
    relative\r
    py-14\r
    sm:py-20\r
    md:py-24\r
    overflow-hidden\r
  `,children:[(0,P.jsx)(`div`,{className:`\r
      absolute\r
      top-1/2\r
      left-1/2\r
      -translate-x-1/2\r
      -translate-y-1/2\r
      w-[700px]\r
      h-[700px]\r
      bg-gradient-to-r\r
      from-[#2F80FF]/10\r
      to-[#7B61FF]/10\r
      blur-3xl\r
      rounded-full\r
    `}),(0,P.jsxs)(`div`,{className:`max-w-6xl mx-auto px-4 sm:px-6 relative z-10`,children:[(0,P.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-16`,children:[(0,P.jsx)(`p`,{className:`\r
          text-[#2F80FF]\r
          font-semibold\r
          tracking-[0.25em]\r
          uppercase\r
          mb-4\r
        `,children:`Our Values`}),(0,P.jsx)(`h2`,{className:`\r
          text-3xl\r
          md:text-5xl\r
          font-bold\r
          text-[#0B1220]\r
          leading-tight\r
          mb-6\r
        `,children:`Business Objectives & Core Values`}),(0,P.jsx)(`p`,{className:`\r
          text-[16px]\r
          md:text-[17px]\r
          text-[#5B6475]\r
          leading-relaxed\r
        `,children:`We focus on innovation, reliability, customer success, and modern accounting solutions that help businesses grow efficiently.`})]}),(0,P.jsxs)(`div`,{className:`\r
        grid\r
        grid-cols-1\r
        md:grid-cols-2\r
        gap-6\r
      `,children:[(0,P.jsxs)($.div,{whileHover:{y:-6},transition:{duration:.3},className:`\r
          group\r
          flex\r
          flex-col\r
          sm:flex-row\r
          gap-5\r
          items-start\r
          p-6\r
          sm:p-7\r
          rounded-[28px]\r
          bg-white/80\r
          backdrop-blur-xl\r
          border border-white/60\r
          shadow-[0_15px_40px_rgba(0,0,0,0.05)]\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
            min-w-[58px]\r
            h-[58px]\r
            rounded-2xl\r
            bg-gradient-to-r\r
            from-[#2F80FF]\r
            to-[#7B61FF]\r
            flex\r
            items-center\r
            justify-center\r
            shadow-lg\r
          `,children:(0,P.jsx)(cr,{className:`w-6 h-6 text-white`})}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{className:`\r
              text-xl\r
              font-semibold\r
              text-[#071426]\r
              mb-3\r
            `,children:`Industry-Certified Training`}),(0,P.jsx)(`p`,{className:`\r
              text-[#5B6475]\r
              leading-relaxed\r
              text-[15px]\r
            `,children:`We provide recognized Tally certification programs for students, professionals, and business owners.`})]})]}),(0,P.jsxs)($.div,{whileHover:{y:-6},transition:{duration:.3},className:`\r
          group\r
          flex\r
          gap-5\r
          items-start\r
          p-7\r
          rounded-[28px]\r
          bg-white/80\r
          backdrop-blur-xl\r
          border border-white/60\r
          shadow-[0_15px_40px_rgba(0,0,0,0.05)]\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
            min-w-[58px]\r
            h-[58px]\r
            rounded-2xl\r
            bg-gradient-to-r\r
            from-[#2F80FF]\r
            to-[#7B61FF]\r
            flex\r
            items-center\r
            justify-center\r
            shadow-lg\r
          `,children:(0,P.jsx)(Mi,{className:`w-6 h-6 text-white`})}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{className:`\r
              text-xl\r
              font-semibold\r
              text-[#071426]\r
              mb-3\r
            `,children:`Customer-Centric Solutions`}),(0,P.jsx)(`p`,{className:`\r
              text-[#5B6475]\r
              leading-relaxed\r
              text-[15px]\r
            `,children:`We build scalable accounting and ERP solutions tailored for businesses of all sizes.`})]})]}),(0,P.jsxs)($.div,{whileHover:{y:-6},transition:{duration:.3},className:`\r
          group\r
          flex\r
          gap-5\r
          items-start\r
          p-7\r
          rounded-[28px]\r
          bg-white/80\r
          backdrop-blur-xl\r
          border border-white/60\r
          shadow-[0_15px_40px_rgba(0,0,0,0.05)]\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
            min-w-[58px]\r
            h-[58px]\r
            rounded-2xl\r
            bg-gradient-to-r\r
            from-[#2F80FF]\r
            to-[#7B61FF]\r
            flex\r
            items-center\r
            justify-center\r
            shadow-lg\r
          `,children:(0,P.jsx)(br,{className:`w-6 h-6 text-white`})}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{className:`\r
              text-xl\r
              font-semibold\r
              text-[#071426]\r
              mb-3\r
            `,children:`Operational Efficiency`}),(0,P.jsx)(`p`,{className:`\r
              text-[#5B6475]\r
              leading-relaxed\r
              text-[15px]\r
            `,children:`We help organizations improve productivity, compliance, and financial accuracy through automation.`})]})]}),(0,P.jsxs)($.div,{whileHover:{y:-6},transition:{duration:.3},className:`\r
          group\r
          flex\r
          gap-5\r
          items-start\r
          p-7\r
          rounded-[28px]\r
          bg-white/80\r
          backdrop-blur-xl\r
          border border-white/60\r
          shadow-[0_15px_40px_rgba(0,0,0,0.05)]\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
            min-w-[58px]\r
            h-[58px]\r
            rounded-2xl\r
            bg-gradient-to-r\r
            from-[#2F80FF]\r
            to-[#7B61FF]\r
            flex\r
            items-center\r
            justify-center\r
            shadow-lg\r
          `,children:(0,P.jsx)(Ci,{className:`w-6 h-6 text-white`})}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{className:`\r
              text-xl\r
              font-semibold\r
              text-[#071426]\r
              mb-3\r
            `,children:`Reliable Long-Term Support`}),(0,P.jsx)(`p`,{className:`\r
              text-[#5B6475]\r
              leading-relaxed\r
              text-[15px]\r
            `,children:`Our dedicated support ensures businesses receive continuous assistance and enterprise-grade reliability.`})]})]})]})]})]})]})}function Rv(){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`section`,{className:`\r
          relative\r
          overflow-hidden\r
          pt-28\r
          sm:pt-32\r
          lg:pt-40\r
          pb-16\r
          sm:pb-24\r
          md:pb-32\r
          bg-[#0B1120]\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
            absolute\r
            top-[-200px]\r
            left-1/2\r
            -translate-x-1/2\r
            w-[500px]\r
            h-[500px]\r
            sm:w-[700px]\r
            sm:h-[700px]\r
            lg:w-[900px]\r
            lg:h-[900px]\r
            bg-gradient-to-r\r
            from-[#2F80FF]/20\r
            to-[#7B61FF]/20\r
            blur-3xl\r
            rounded-full\r
          `}),(0,P.jsx)(`div`,{className:`max-w-6xl mx-auto px-4 sm:px-6 relative z-10`,children:(0,P.jsxs)(`div`,{className:`text-center max-w-4xl mx-auto`,children:[(0,P.jsx)(`p`,{className:`\r
                inline-flex\r
                items-center\r
                gap-2\r
                px-4\r
                sm:px-5\r
                py-2\r
                rounded-full\r
                border border-white/10\r
                bg-white/5\r
                backdrop-blur-xl\r
                text-white/70\r
                text-sm\r
                mb-8\r
              `,children:`Enterprise Tally Solutions`}),(0,P.jsxs)(`h1`,{className:`\r
                text-[38px]\r
                sm:text-5xl\r
                md:text-6xl\r
                font-black\r
                leading-[1.05]\r
                text-white\r
                mb-8\r
              `,children:[`Powerful Products`,(0,P.jsx)(`br`,{}),(0,P.jsx)(`span`,{className:`\r
                  bg-gradient-to-r\r
                  from-[#2F80FF]\r
                  to-[#7B61FF]\r
                  bg-clip-text\r
                  text-transparent\r
                `,children:`Built For Growth`})]}),(0,P.jsx)(`p`,{className:`\r
                text-[15px]\r
                sm:text-lg\r
                md:text-xl\r
                text-white/60\r
                leading-relaxed\r
                max-w-2xl\r
                sm:max-w-3xl\r
                mx-auto\r
              `,children:`Explore intelligent Tally solutions designed for accounting, automation, cloud infrastructure, business management, and enterprise productivity.`})]})})]}),(0,P.jsxs)(`section`,{className:`\r
          relative\r
          py-14\r
          sm:py-16\r
          md:py-20\r
          bg-[#F8FAFC]\r
          overflow-hidden\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
            absolute\r
            top-0\r
            left-1/2\r
            -translate-x-1/2\r
            w-[450px]\r
            h-[450px]\r
            sm:w-[600px]\r
            sm:h-[600px]\r
            lg:w-[700px]\r
            lg:h-[700px]\r
            bg-gradient-to-r\r
            from-[#2F80FF]/10\r
            to-[#7B61FF]/10\r
            blur-3xl\r
            rounded-full\r
          `}),(0,P.jsxs)(`div`,{className:`max-w-5xl mx-auto px-4 sm:px-6 relative z-10`,children:[(0,P.jsxs)(`div`,{className:`text-center mb-16`,children:[(0,P.jsx)(`p`,{className:`\r
                text-[#2F80FF]\r
                font-semibold\r
                uppercase\r
                tracking-[0.2em]\r
                mb-4\r
              `,children:`Our Products`}),(0,P.jsxs)(`h2`,{className:`\r
                text-[32px]\r
                sm:text-4xl\r
                md:text-5xl\r
                font-bold\r
                text-[#0F172A]\r
                leading-tight\r
                mb-6\r
              `,children:[`Smart Tally Solutions`,(0,P.jsx)(`br`,{}),`For Modern Businesses`]}),(0,P.jsx)(`p`,{className:`\r
                max-w-3xl\r
                mx-auto\r
                text-[15px]\r
                sm:text-[16px]\r
                md:text-[17px]\r
                text-[#64748B]\r
                leading-relaxed\r
              `,children:`Professional Tally products engineered to streamline operations, improve accounting workflows, and enhance enterprise productivity.`})]}),(0,P.jsx)(`div`,{className:`\r
              grid\r
              grid-cols-1\r
              lg:grid-cols-2\r
              gap-6\r
              sm:gap-8\r
            `,children:[{title:`TallyPrime`,desc:`Complete business accounting and GST management software.`,image:Av,features:[`GST Billing`,`Inventory Management`,`Financial Reports`],route:`/products/tallyprime`},{title:`TallyPrime Server`,desc:`Enterprise-grade data security and multi-user performance.`,image:jv,features:[`Centralized Data`,`High Performance`,`Data Reliability`],route:`/products/tally-server`},{title:`TallyPrime powered by AWS`,desc:`Secure cloud-based Tally access from anywhere.`,image:Mv,features:[`Cloud Access`,`Remote Work`,`AWS Security`],route:`/products/aws`},{title:`TallyPrime with WhatsApp`,desc:`Automate customer communication and invoice sharing.`,image:Nv,features:[`Invoice Sharing`,`Auto Notifications`,`Customer Engagement`],route:`/products/whatsapp`}].map((e,t)=>(0,P.jsxs)(Mn,{to:e.route,className:`\r
                  group\r
                  relative\r
                  rounded-[20px]\r
                  sm:rounded-[24px]\r
                  overflow-hidden\r
                  bg-white/80\r
                  backdrop-blur-xl\r
                  border border-white/40\r
                  shadow-[0_10px_40px_rgba(0,0,0,0.06)]\r
                  hover:shadow-[0_20px_60px_rgba(47,128,255,0.15)]\r
                  transition-all duration-500\r
                  hover:-translate-y-2\r
                `,children:[(0,P.jsxs)(`div`,{className:`relative overflow-hidden h-[180px] sm:h-[200px]`,children:[(0,P.jsx)(`img`,{src:e.image,alt:e.title,className:`\r
                      w-full\r
                      h-full\r
                      object-cover\r
                      transition-transform duration-700\r
                      group-hover:scale-105\r
                    `}),(0,P.jsx)(`div`,{className:`\r
                      absolute inset-0\r
                      bg-gradient-to-t\r
                      from-black/50\r
                      via-black/10\r
                      to-transparent\r
                    `})]}),(0,P.jsxs)(`div`,{className:`p-5 sm:p-6`,children:[(0,P.jsx)(`h3`,{className:`\r
                      text-[22px]\r
                      sm:text-[24px]\r
                      font-bold\r
                      text-[#0F172A]\r
                      mb-3\r
                      group-hover:text-[#2F80FF]\r
                      transition-colors duration-300\r
                    `,children:e.title}),(0,P.jsx)(`p`,{className:`\r
                      text-[#64748B]\r
                      leading-relaxed\r
                      mb-6\r
                    `,children:e.desc}),(0,P.jsx)(`div`,{className:`space-y-3 mb-6`,children:e.features.map((e,t)=>(0,P.jsxs)(`div`,{className:`\r
                          flex items-center gap-2 sm:gap-3\r
                          text-sm\r
                          text-[#475569]\r
                        `,children:[(0,P.jsx)(`div`,{className:`\r
                            w-2 h-2\r
                            rounded-full\r
                            bg-gradient-to-r\r
                            from-[#2F80FF]\r
                            to-[#7B61FF]\r
                          `}),e]},t))}),(0,P.jsxs)(`div`,{className:`\r
                      flex items-center gap-2 flex-wrap\r
                      text-[#2F80FF]\r
                      font-semibold\r
                      group-hover:gap-4\r
                      transition-all duration-300\r
                    `,children:[`Explore Product`,(0,P.jsx)(or,{size:18})]})]})]},t))})]})]})]})}function zv({plan:e,index:t}){let n=e.variants?.length>0,[r,i]=(0,w.useState)(e.variants?.[0]||null);return(0,w.useEffect)(()=>{i(e.variants?.[0]||null)},[e]),(0,P.jsxs)(`div`,{className:`
    relative flex flex-col
    rounded-[30px]
    border
    bg-white
    overflow-hidden
    transition-all duration-300
    hover:-translate-y-2
    hover:shadow-[0_20px_60px_rgba(17,120,212,0.12)]
    ${t===1?`border-[#1178D4] shadow-[0_10px_40px_rgba(17,120,212,0.10)]`:`border-gray-200`}
  `,children:[(0,P.jsx)(`div`,{className:`
      h-[4px] w-full
      ${t===1?`bg-[#1178D4]`:`bg-[#22C7F8]`}
    `}),(0,P.jsxs)(`div`,{className:`p-8 flex flex-col h-full`,children:[(0,P.jsxs)(`div`,{className:`flex flex-col items-center text-center gap-4`,children:[(0,P.jsx)(`div`,{className:`w-14 h-14 rounded-2xl bg-[#F1F6FE] flex items-center justify-center shrink-0`,children:(0,P.jsx)(qr,{className:`w-7 h-7 text-[#1178D4]`})}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{className:`text-[24px] leading-[1.2] font-[800] text-[#0B132B]`,children:e.name}),(0,P.jsx)(`p`,{className:`mt-2 text-[15px] leading-[1.6] text-gray-500 max-w-[280px]`,children:e.subtitle}),e.description&&(0,P.jsx)(`p`,{className:`text-gray-500 text-sm leading-relaxed mt-5 max-w-[300px] mx-auto`,children:e.description})]})]}),n&&(0,P.jsx)(`div`,{className:`flex flex-wrap justify-center gap-2 mt-8`,children:e.variants?.map((e,t)=>(0,P.jsx)(`button`,{onClick:()=>i(e),className:`
              w-11 h-11 rounded-xl border
              text-[15px] font-semibold
              transition-all duration-300
              ${r?.pack===e.pack?`bg-[#1178D4] text-white border-[#1178D4]`:`border-[#1178D4] text-[#1178D4] hover:bg-[#1178D4] hover:text-white`}
            `,children:e.pack},t))}),(0,P.jsxs)(`div`,{className:`mt-10 text-center`,children:[n&&(0,P.jsx)(`p`,{className:`text-[18px] text-gray-500 mb-4`,children:r?.packageName}),(0,P.jsxs)(`div`,{className:`flex items-end justify-center gap-2`,children:[(0,P.jsx)(`span`,{className:`text-[18px] font-semibold text-gray-500 mb-2`,children:`INR`}),(0,P.jsx)(`h2`,{className:`text-[50px] leading-none font-[900] text-[#0B132B]`,children:n?r?.price:e.price})]}),(0,P.jsxs)(`div`,{className:`flex items-center justify-center gap-2 mt-3 relative group`,children:[(0,P.jsxs)(`p`,{className:`text-gray-500 text-[15px]`,children:[`+18% GST (INR `,e.gst,`)`]}),(0,P.jsxs)(`div`,{className:`relative`,children:[(0,P.jsx)(Kr,{size:16,className:`text-[#1178D4] cursor-pointer`}),(0,P.jsxs)(`div`,{className:`\r
        absolute left-1/2 -translate-x-1/2\r
        bottom-8\r
        opacity-0 invisible\r
        group-hover:opacity-100\r
        group-hover:visible\r
        transition-all duration-200\r
        bg-[#0B1020]\r
        text-white\r
        text-xs\r
        px-3 py-2\r
        rounded-xl\r
        whitespace-nowrap\r
        shadow-2xl\r
        z-20\r
      `,children:[`Total Price: INR `,e.total]})]})]})]}),(n&&r||e.features)&&(0,P.jsx)(`div`,{className:`mt-8 space-y-4 flex-1 max-w-[260px] mx-auto`,children:(n?[r?.users,r?.cpu,r?.ram,r?.storage,r?.backup]:e.features)?.filter(Boolean).map((e,t)=>(0,P.jsxs)(`div`,{className:`flex items-center justify-start gap-3`,children:[(0,P.jsx)(`div`,{className:`w-8 h-8 rounded-full bg-[#F1F6FE] flex items-center justify-center shrink-0`,children:(0,P.jsx)(_r,{className:`w-4 h-4 text-[#1178D4]`})}),(0,P.jsx)(`span`,{className:`text-[18px] text-[#1E293B]`,children:e})]},t))}),(0,P.jsx)(`button`,{className:`
        mt-10 w-full h-[62px]
        rounded-[18px]
        text-[22px]
        font-[700]
        transition-all duration-300
        ${t===1?`bg-[#1178D4] text-white hover:bg-[#0F6DC2]`:`bg-[#0B132B] text-white hover:bg-[#111C3A]`}
      `,children:`Buy Now`})]})]})}var Bv={tallyprime:{title:`TallyPrime`,subtitle:`Complete Business Accounting Solution`,icon:Tr,image:`https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop`,description:`TallyPrime helps businesses streamline accounting, inventory, GST compliance, payroll, invoicing, and financial reporting with a simplified and powerful interface.`,keyFeatures:[{tag:`Business Growth`,title:`Your Trusted Partner For Business Growth`,description:`Achieve your business goals effortlessly with TallyPrime, your ultimate growth companion. Designed to empower businesses with insightful decision-making, seamless accounting workflows, and advanced operational control.`,icon:ki,points:[`Multi-company Management`,`Advanced Financial Reporting`,`Faster Decision Making`,`Business Performance Insights`]},{tag:`Cash Flow Management`,title:`Effortless Cash Flow Management`,description:`TallyPrime simplifies cash flow management with quick and hassle-free bill receivables and payables tracking, ensuring faster payments and better financial control. Monitor stock movement, access real-time insights, and make confident business decisions with ease.`,icon:Pi,points:[`Track Receivables & Payables`,`Real-Time Cash Flow Insights`,`Smart Stock Movement Tracking`,`Instant Financial Reports`]},{tag:`Business Efficiency`,title:`Boost Your Business Efficiency`,description:`TallyPrime accelerates your workflow by helping you manage tasks faster and more efficiently. Switch between reports, vouchers, and multiple companies seamlessly while gaining deeper operational insights through smart reporting tools.`,icon:Li,points:[`Faster Workflow Management`,`Multi-Tasking Capabilities`,`Instant Operational Insights`,`Seamless Navigation Experience`]},{tag:`Tax Compliance`,title:`Simplified Tax Compliance`,description:`TallyPrime makes GST and tax compliance effortless with integrated tools for return filing, reconciliation, e-invoicing, and e-way bill generation. Stay compliant, reduce manual errors, and manage taxation confidently from a single platform.`,icon:Ci,points:[`GST Return Filing`,`E-Invoicing & E-Way Bills`,`Automatic Tax Reconciliation`,`Accurate Compliance Reports`]}],pricing:[{name:`Silver`,subtitle:`Single User Edition`,description:`Perfect for standalone businesses and individual systems.`,price:`22,500`,gst:`4,050`,total:`26,550`},{name:`Gold`,subtitle:`Unlimited Multi-User Edition`,description:`Ideal for businesses working across multiple systems on LAN.`,price:`67,500`,gst:`12,150`,total:`79,650`}],testimonials:[{name:`Sri Balaji Traders`,role:`Retail Business Owner`,review:`TallyPrime simplified our billing, GST filing, and inventory management. Our daily accounting workflow is now much faster and more organized.`},{name:`Venkateswara Agencies`,role:`Wholesale Distributor`,review:`The reports and stock tracking features in TallyPrime helped us manage multiple product categories without confusion.`},{name:`Sai Lakshmi Enterprises`,role:`Manufacturing Business`,review:`We moved from manual accounting to TallyPrime and saw immediate improvement in efficiency and financial accuracy.`}],cta:{badge:`Get Started Today`,title:`Simplify Your Business Accounting With TallyPrime`,description:`Manage billing, GST, inventory, banking, and accounting seamlessly with a powerful business management solution designed for growing businesses.`,primaryBtn:`Start Free Trial`,primaryLink:`#pricing`,secondaryBtn:`Talk To Expert`,secondaryLink:`tel:+919849431943`}},"tally-server":{title:`TallyPrime Server`,subtitle:`Enterprise Data Security & Performance`,icon:bi,image:`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop`,description:`TallyPrime Server delivers centralized data management, enhanced security, high-speed performance, and reliable business continuity for growing enterprises.`,keyFeatures:[{icon:oi,tag:`High Concurrency`,title:`Advanced Concurrency For Smooth Business Operations`,description:`With TallyPrime Server, multiple users can effortlessly perform data-intensive operations simultaneously without any delays. Whether it’s loading companies, recording transactions, exporting reports, or taking backups, every activity is executed smoothly in a frictionless environment. This ensures optimal utilization of time and resources, allowing tasks to be completed faster and with greater efficiency.`,points:[`Multi-user simultaneous access`,`Faster report generation`,`Smooth data-intensive operations`,`Improved operational efficiency`]},{icon:Ci,tag:`Advanced Security`,title:`Secured Operations With Permission-Based Control`,description:`TallyPrime Server ensures enterprise-grade data security with its robust permission-based architecture. Critical operations such as backup, restore, and data management are safeguarded with server-level permissions accessible only through proper authorization. This guarantees enhanced control over user access and ensures your business data remains secure, organized, and protected at all times.`,points:[`Server-level access permissions`,`Secure backup & restore`,`Controlled user authorization`,`Enhanced data protection`]},{icon:cr,tag:`System Reliability`,title:`Stay Productive With High System Reliability`,description:`TallyPrime Server delivers uninterrupted productivity by ensuring seamless access to reports and transactions even during backup processes. Any discrepancies are isolated at the client level, ensuring server operations remain unaffected. This reliability minimizes downtime, improves accuracy, and guarantees continuous business performance without disruption.`,points:[`Uninterrupted workflow`,`Reliable server operations`,`Minimal downtime`,`Continuous productivity`]},{icon:hr,tag:`Performance Optimization`,title:`Streamline Operations For Enhanced Business Performance`,description:`TallyPrime Server provides powerful monitoring capabilities that help businesses optimize workflows and track system activities efficiently. Authorized users can manage sessions, monitor active users, and even disconnect operations when necessary. This feature ensures better resource utilization, smoother workflows, and increased business productivity.`,points:[`User session monitoring`,`Better workflow management`,`Performance optimization tools`,`Improved resource utilization`]}],whyChooseCards:[{icon:Mi,title:`Scalable Multi-User Support`,description:`TallyPrime Server enables multiple users to work on the same data simultaneously without performance drops or interruptions. Perfect for growing businesses managing larger teams and expanding operations.`},{icon:Ci,title:`Enhanced Security & Data Control`,description:`With advanced server-level permissions and controlled access, TallyPrime Server keeps sensitive business data secure while giving administrators complete control over operations and backups.`},{icon:ar,title:`Zero Downtime Operations`,description:`Ensure uninterrupted business continuity with reliable access to reports, backups, and company data. TallyPrime Server minimizes downtime and keeps workflows running smoothly at all times.`}],testimonials:[{name:`RK Group Of Companies`,role:`Multi-Branch Business`,review:`TallyPrime Server improved our multi-user performance significantly. Teams can now work simultaneously without slowdowns.`},{name:`Sree Durga Industries`,role:`Manufacturing Company`,review:`The security controls and uninterrupted access made TallyPrime Server the perfect solution for our growing operations.`},{name:`Navya Distributors`,role:`Distribution Network`,review:`Data reliability and server stability helped us avoid downtime and maintain smooth business operations every day.`}],cta:{badge:`Scale With Confidence`,title:`Power Your Team With TallyPrime Server`,description:`Enable secure multi-user collaboration, centralized data access, and uninterrupted business operations with TallyPrime Server.`,primaryBtn:`Request Demo`,primaryLink:`tel:+919849431943`,secondaryBtn:`Contact Sales`,secondaryLink:`/contact`}},aws:{title:`TallyPrime Powered by AWS`,subtitle:`Secure Cloud Accounting Infrastructure`,icon:Sr,image:`https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop`,description:`Run TallyPrime securely on AWS cloud with anywhere access, automatic backups, enterprise-grade infrastructure, and seamless remote collaboration.`,keyFeatures:[{icon:zr,tag:`Remote Accessibility`,title:`Effortless Access To TallyPrime, Anytime, Anywhere`,description:`TallyPrime powered by AWS allows you to securely access your business data from anywhere through web browsers or virtual clients. Whether you're working remotely, traveling, or managing multiple offices, your operations stay connected and uninterrupted. Experience seamless accessibility with enterprise-grade AWS reliability and security.`,points:[`Access from anywhere`,`Browser & virtual client support`,`Secure remote connectivity`,`Reliable AWS infrastructure`]},{icon:Ci,tag:`Advanced Security`,title:`Dual-Layer Security For Your Peace Of Mind`,description:`Protect your business data with dual-factor authentication powered by AWS. TallyPrime combines Tally.NET credentials with Secure PIN protection to ensure only authorized users can access your system. With advanced cloud security and encrypted access, your operations remain safe, protected, and fully under your control.`,points:[`Dual-factor authentication`,`Secure PIN protection`,`Encrypted cloud access`,`Enterprise-grade security`]},{icon:xi,tag:`Self-Service Portal`,title:`Empower Your Workspace With The Self-Service Portal (SSP)`,description:`Manage users, systems, and backups effortlessly through the intuitive Self-Service Portal. Designed for flexibility and control, SSP allows businesses to monitor and manage virtual workspaces with ease. Simplify administrative operations while improving efficiency and user management from a single platform.`,points:[`Centralized management`,`Easy user administration`,`Backup monitoring`,`Flexible workspace control`]},{icon:wr,tag:`Data Protection`,title:`Secure And Effortless Data Backup And Recovery`,description:`Never worry about losing critical business data again. TallyPrime powered by AWS automatically secures backups in the cloud with enhanced encryption and reliable recovery options. Access and restore your data quickly whenever needed while ensuring business continuity without disruptions.`,points:[`Automatic cloud backups`,`Quick data recovery`,`Encrypted storage`,`Business continuity support`]},{icon:Si,tag:`Controlled Sharing`,title:`Precise Data Sharing With Enhanced Control`,description:`Control how your business data is shared with selective access permissions. Administrators can define who can access, restrict, or manage specific information in TallyPrime. This feature improves confidentiality, enhances collaboration, and gives businesses complete control over sensitive data.`,points:[`Selective access permissions`,`Controlled data sharing`,`Enhanced confidentiality`,`Admin-level control`]},{icon:yi,tag:`Easy Upgrades`,title:`Seamless Upgrades For A Dynamic Experience`,description:`Stay ahead with effortless upgrades and instant access to the latest TallyPrime features. Businesses can switch between versions smoothly without technical complexity or downtime. AWS-powered infrastructure ensures updates are reliable, fast, and optimized for business growth.`,points:[`Instant feature upgrades`,`Smooth version transitions`,`Minimal downtime`,`Future-ready platform`]},{icon:Fi,tag:`Application Integration`,title:`Enhance Efficiency With Seamless Application Integration`,description:`Integrate third-party applications with TallyPrime effortlessly to streamline business operations and improve workflow efficiency. Share data securely between systems, automate processes, and unlock greater operational flexibility through robust integration capabilities powered by AWS.`,points:[`Third-party integrations`,`Secure data exchange`,`Workflow automation`,`Operational flexibility`]},{icon:ki,tag:`Scalable Growth`,title:`Affordable, Scalable Solutions For Growing Businesses`,description:`Scale your business confidently with flexible and cost-effective AWS-powered solutions. TallyPrime adapts to your evolving operational needs while maintaining high performance and reliability. Designed for growing businesses, it provides enterprise-grade capabilities without increasing complexity.`,points:[`Cost-effective scalability`,`Flexible business plans`,`Enterprise-level performance`,`Supports business growth`]},{icon:fr,tag:`Productivity Suite`,title:`Integrated Productivity Tools At Your Fingertips`,description:`Boost productivity with built-in tools that simplify document management, collaboration, and daily business tasks. TallyPrime powered by AWS creates a fully integrated virtual workspace where users can manage operations efficiently without switching between multiple platforms.`,points:[`Integrated productivity tools`,`Simplified collaboration`,`Document management support`,`All-in-one virtual workspace`]}],pricing:[{name:`Personal And Regular Pack`,subtitle:`TallyPrime latest release pre-installed`,packageName:`Personal Pack`,variants:[{pack:1,packageName:`Personal Pack`,price:`600`,gst:`108`,total:`708`,users:`Upto 1 User`,cpu:`2 vCPU`,ram:`4 GB RAM`,storage:`5 GB Storage`,backup:`5 GB Backup Storage`},{pack:2,packageName:`Regular Pack`,price:`600`,users:`Upto 2 Users`,cpu:`2 vCPU`,ram:`4 GB RAM`,storage:`5 GB Storage`,backup:`5 GB Backup Storage`},{pack:4,packageName:`Regular-Plus Pack`,price:`450`,users:`Upto 4 Users`,cpu:`2 vCPU`,ram:`8 GB RAM`,storage:`10 GB Storage`,backup:`10 GB Backup Storage`},{pack:8,packageName:`Regular-Plus Pack`,price:`450`,users:`Upto 8 Users`,cpu:`4 vCPU`,ram:`16 GB RAM`,storage:`20 GB Storage`,backup:`20 GB Backup Storage`},{pack:12,packageName:`Performance Pack`,price:`450`,users:`Upto 12 Users`,cpu:`8 vCPU`,ram:`32 GB RAM`,storage:`40 GB Storage`,backup:`40 GB Backup Storage`},{pack:16,packageName:`Performance-Plus Pack`,price:`450`,users:`Upto 16 Users`,cpu:`8 vCPU`,ram:`32 GB RAM`,storage:`40 GB Storage`,backup:`40 GB Backup Storage`}]},{name:`TallyPrime + TallyPrime Server Pack `,subtitle:`TallyPrime and TallyPrime Server latest release pre-installed`,packageName:`TPSPerformance Pack`,variants:[{pack:8,packageName:`TPSPerformance Pack`,price:`750`,users:`Upto 8 User`,cpu:`8 vCPU`,ram:`16 GB RAM`,storage:`20 GB Storage`,backup:`20 GB Backup Storage`},{pack:12,packageName:`TPSPerformanceMax Pack`,price:`750`,users:`Upto 12 Users`,cpu:`6 vCPU`,ram:`32 GB RAM`,storage:`40 GB Storage`,backup:`40 GB Backup Storage`},{pack:16,packageName:`TPSPerformance-Plus Pack`,price:`750`,users:`Upto 16 Users`,cpu:`6 vCPU`,ram:`32 GB RAM`,storage:`40 GB Storage`,backup:`40 GB Backup Storage`},{pack:24,packageName:`TPSPerformance-MaxPlus Pack`,price:`750`,users:`Upto 24 Users`,cpu:`32 vCPU`,ram:`64 GB RAM`,storage:`50 GB Storage`,backup:`50 GB Backup Storage`},{pack:32,packageName:`TPSPerformance-Pro Pack`,price:`750`,users:`Upto 32 Users`,cpu:`32 vCPU`,ram:`64 GB RAM`,storage:`80 GB Storage`,backup:`80 GB Backup Storage`}]},{name:`Enterprises Pack`,subtitle:`TallyPrime and TallyPrime Server latest release pre-installed`,packageName:`TPSEnterprise Pack`,variants:[{pack:48,packageName:`TPSEnterprise Pack`,price:`750`,users:`Upto 48 Users`,cpu:`48 vCPU`,ram:`96 GB RAM`,storage:`100 GB Storage`,backup:`100 GB Backup Storage`},{pack:64,packageName:`TPSEnterprise Pack`,price:`750`,users:`Upto 64 Users`,cpu:`64 vCPU`,ram:`128 GB RAM`,storage:`100 GB Storage`,backup:`100 GB Backup Storage`},{pack:96,packageName:`TPSEnterprise-MaxPlus Pack`,price:`750`,users:`Upto 96 Users`,cpu:`96 vCPU`,ram:`192 GB RAM`,storage:`100 GB Storage`,backup:`100 GB Backup Storage`},{pack:128,packageName:`TPSEnterprise-MaxPlus Pack`,price:`750`,users:`Upto 128 Users`,cpu:`128 vCPU`,ram:`256 GB RAM`,storage:`100 GB Storage`,backup:`100 GB Backup Storage`}]}],whyChooseCards:[{icon:zr,title:`Secure Anytime Access`,description:`Access your TallyPrime data 24/7 from anywhere with AWS’s secure and reliable cloud infrastructure.`},{icon:Mi,title:`Seamless Collaboration`,description:`Enable multiple users to work on the same business data in real-time with smooth and uninterrupted collaboration.`},{icon:ki,title:`Scalability For Growth`,description:`Scale your business operations effortlessly with flexible AWS-powered plans designed for businesses of all sizes.`}],testimonials:[{name:`Aadhya Retail Solutions`,role:`Retail Chain`,review:`With TallyPrime on AWS, our team can securely access accounting data from anywhere without depending on local systems.`},{name:`Global Tech Services`,role:`Remote Operations Team`,review:`The cloud infrastructure and automatic scalability helped us expand operations without worrying about performance.`},{name:`MNR Enterprises`,role:`Enterprise Business`,review:`AWS integration gave us better backup reliability, remote collaboration, and uninterrupted access to TallyPrime.`}],cta:{badge:`Cloud Accounting Simplified`,title:`Access TallyPrime Anywhere With AWS Cloud`,description:`Run TallyPrime securely on AWS cloud infrastructure with scalable performance, remote accessibility, and enterprise-grade reliability.`,primaryBtn:`Get Started`,primaryLink:`#pricing`,secondaryBtn:`Talk To Expert`,secondaryLink:`tel:+919849431943`}},whatsapp:{title:`TallyPrime with WhatsApp`,subtitle:`Smart Business Communication Automation`,icon:ri,image:`https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1600&auto=format&fit=crop`,description:`Integrate WhatsApp with TallyPrime to instantly send invoices, payment reminders, statements, and customer updates directly from your business workflow.`,keyFeatures:[{icon:ni,tag:`Instant Sharing`,title:`Instant Document Sharing Made Simple`,description:`Share invoices, reports, orders, payment reminders, and business documents instantly through WhatsApp with just a single click. Improve communication speed, reduce manual effort, and deliver a smoother customer experience with real-time document delivery.`,points:[`One-click document sharing`,`Instant customer communication`,`Faster response time`,`Improved productivity`]},{icon:ji,tag:`Bulk Communication`,title:`Streamlined Bulk Communication`,description:`Connect with multiple customers simultaneously by sharing documents, updates, and notifications in bulk through WhatsApp. Save time, simplify customer outreach, and manage large-scale communication more efficiently from within TallyPrime.`,points:[`Bulk document sharing`,`Connect with multiple customers`,`Save time and effort`,`Efficient communication management`]},{icon:Lr,tag:`Flexible Formats`,title:`Versatile Document Sharing`,description:`Easily share business documents in multiple formats including PDF, JPEG, and Excel. Provide customers and teams with the flexibility to access files in the format most convenient for them while maintaining seamless communication workflows.`,points:[`PDF, JPEG & Excel support`,`Flexible file sharing`,`Easy customer access`,`Smooth document management`]},{icon:hi,tag:`Payment Collection`,title:`Simplify Invoicing And Payment Collection`,description:`Speed up payment collection by sending invoices directly through WhatsApp with embedded payment links and QR codes. Help customers make payments quickly while reducing delays and improving cash flow management for your business.`,points:[`Embedded payment links`,`QR code enabled invoices`,`Faster payment collection`,`Improved cash flow`]},{icon:Jr,tag:`Message Templates`,title:`Pre-Designed Message Templates`,description:`Choose from professionally designed and ready-to-use WhatsApp templates for invoices, reminders, confirmations, and customer communication. Deliver consistent and personalized messages while reducing manual typing and repetitive tasks.`,points:[`Ready-to-use templates`,`Consistent communication`,`Personalized messaging`,`Reduced manual effort`]},{icon:Gr,tag:`Centralized Inbox`,title:`Centralized WhatsApp Inbox`,description:`Manage customer conversations and business communications effortlessly through a dedicated centralized WhatsApp inbox. Keep track of messages, improve response management, and maintain organized communication from a single place.`,points:[`Dedicated communication inbox`,`Organized customer conversations`,`Easy response management`,`Improved communication tracking`]}],pricing:[{name:`Recharge Wallet`,subtitle:`Get your wallet recharged to continue uninterrupted messaging experience anytime, using WhatsApp for your Business.`,variants:[{pack:`675`,packageName:`Recharge`,price:`675`,gst:`121`,total:`796`,validity:`Flexible Usage`,support:`WhatsApp Messaging`,access:`Business Communication`,updates:`Instant Wallet Recharge`},{pack:`2700`,packageName:`Recharge`,price:`2700`,gst:`486`,total:`3186`}]},{name:`Renew Subscription`,subtitle:`Engage with your parties uninterrupted with an active WhatsApp for Business subscription.`,variants:[{pack:`Yearly`,packageName:`Recharge`,price:`1300`,gst:`234`,total:`1534`}]}],testimonials:[{name:`Karthik Fashions`,role:`Retail Store`,review:`Sending invoices and payment reminders through WhatsApp improved customer communication and reduced follow-up time.`},{name:`Vasavi Electronics`,role:`Electronics Distributor`,review:`TallyPrime with WhatsApp helped us instantly connect with customers and share order updates professionally.`},{name:`Srinidhi Mobiles`,role:`Mobile Accessories Business`,review:`The WhatsApp integration made customer engagement easier and helped us improve response time and service quality.`}],cta:{badge:`Automate Business Communication`,title:`Connect TallyPrime With WhatsApp Instantly`,description:`Send invoices, payment reminders, notifications, and customer updates directly through WhatsApp using TallyPrime integration.`,primaryBtn:`Activate WhatsApp`,primaryLink:`#pricing`,secondaryBtn:`Schedule Demo`,secondaryLink:`tel:+919849431943`}}};function Vv(){let{slug:e}=ht(),t=Bv[e];t?.pricing;let n=t.icon;return t?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`section`,{className:`\r
          relative\r
          overflow-hidden\r
          pt-24\r
          sm:pt-28\r
          md:pt-36\r
          pb-14\r
          sm:pb-20\r
          md:pb-32\r
          bg-[#F5F7FF]\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
            absolute\r
            top-0\r
            left-1/2\r
            -translate-x-1/2\r
            w-[400px]\r
            h-[400px]\r
            sm:w-[550px]\r
            sm:h-[550px]\r
            lg:w-[700px]\r
            lg:h-[700px]\r
            bg-gradient-to-r\r
            from-[#2F80FF]/10\r
            to-[#7B61FF]/10\r
            blur-3xl\r
            rounded-full\r
          `}),(0,P.jsx)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 relative z-10`,children:(0,P.jsxs)(`div`,{className:`\r
              grid\r
              lg:grid-cols-2\r
              gap-10\r
              lg:gap-16\r
              items-center\r
            `,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`div`,{className:`\r
                  inline-flex\r
                  items-center\r
                  gap-3\r
                  px-4\r
                  sm:px-5\r
                  py-3\r
                  rounded-full\r
                  bg-white\r
                  border border-[#E5E7EB]\r
                  shadow-sm\r
                  mb-8\r
                `,children:[(0,P.jsx)(`div`,{className:`\r
                    w-10\r
                    h-10\r
                    sm:w-12\r
                    sm:h-12\r
                    rounded-2xl\r
                    bg-gradient-to-r\r
                    from-[#2F80FF]\r
                    to-[#7B61FF]\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-white\r
                  `,children:(0,P.jsx)(n,{size:28})}),(0,P.jsx)(`span`,{className:`\r
                    text-[#111827]\r
                    font-semibold\r
                    text-[15px]\r
                    sm:text-lg\r
                  `,children:t.title})]}),(0,P.jsx)(`p`,{className:`\r
                  text-[#2F80FF]\r
                  font-semibold\r
                  uppercase\r
                  tracking-[0.2em]\r
                  mb-4\r
                `,children:`Professional Tally Solution`}),(0,P.jsx)(`h1`,{className:`\r
                  text-[36px]\r
                  sm:text-5xl\r
                  md:text-6xl\r
                  font-black\r
                  leading-tight\r
                  text-[#111827]\r
                  mb-6\r
                `,children:t.subtitle}),(0,P.jsx)(`p`,{className:`\r
                  text-[15px]\r
                  sm:text-base\r
                  md:text-lg\r
                  leading-relaxed\r
                  text-[#6B7280]\r
                  mb-10\r
                  max-w-xl\r
                `,children:t.description}),(0,P.jsxs)(`div`,{className:`flex flex-col sm:flex-row sm:flex-wrap gap-4`,children:[(0,P.jsx)(`a`,{href:`tel:+919849431943`,children:(0,P.jsx)(`button`,{className:`\r
                    px-6\r
                    sm:px-8\r
                    py-4\r
                    rounded-2xl\r
                    bg-gradient-to-r\r
                    from-[#2F80FF]\r
                    to-[#7B61FF]\r
                    text-white\r
                    font-semibold\r
                    shadow-lg\r
                    hover:scale-105\r
                    transition-all\r
                    duration-300\r
                  `,children:`Request Demo`})}),(0,P.jsx)(Mn,{to:`/products`,className:`\r
                    px-8\r
                    py-4\r
                    rounded-2xl\r
                    border\r
                    border-[#D1D5DB]\r
                    bg-white\r
                    text-[#111827]\r
                    font-semibold\r
                    hover:border-[#2F80FF]\r
                    hover:text-[#2F80FF]\r
                    transition-all\r
                    duration-300\r
                  `,children:`Back to Products`})]})]}),(0,P.jsxs)(`div`,{className:`relative`,children:[(0,P.jsx)(`div`,{className:`\r
                  absolute\r
                  inset-0\r
                  bg-gradient-to-r\r
                  from-[#2F80FF]/20\r
                  to-[#7B61FF]/20\r
                  blur-3xl\r
                  rounded-[40px]\r
                `}),(0,P.jsx)(`div`,{className:`\r
                  relative\r
                  overflow-hidden\r
                  rounded-[24px]\r
                  sm:rounded-[32px]\r
                  border\r
                  border-white/40\r
                  bg-white/70\r
                  backdrop-blur-xl\r
                  shadow-[0_20px_80px_rgba(0,0,0,0.12)]\r
                `,children:(0,P.jsx)(`img`,{src:t.image,alt:t.title,className:`\r
                    w-full\r
                    h-[260px]\r
                    sm:h-[400px]\r
                    lg:h-[500px]\r
                    object-cover\r
                  `})})]})]})})]}),!1,(0,P.jsxs)(`section`,{className:`relative py-16 sm:py-20 md:py-32 bg-white overflow-hidden`,children:[(0,P.jsx)(`div`,{className:`\r
            absolute\r
            top-0\r
            left-1/2\r
            -translate-x-1/2\r
            w-[700px]\r
            h-[700px]\r
            bg-gradient-to-r\r
            from-[#2F80FF]/10\r
            to-[#7B61FF]/10\r
            blur-3xl\r
            rounded-full\r
          `}),(0,P.jsxs)(`div`,{className:`max-w-5xl mx-auto px-4 sm:px-6 relative z-10`,children:[(0,P.jsxs)(`div`,{className:`text-center mb-24`,children:[(0,P.jsx)(`p`,{className:`\r
                text-[#2F80FF]\r
                font-semibold\r
                uppercase\r
                tracking-[0.2em]\r
                mb-4\r
              `,children:`Key Features`}),(0,P.jsx)(`h2`,{className:`\r
                text-[32px]\r
                sm:text-4xl\r
                md:text-5xl\r
                font-black\r
                text-[#111827]\r
                mb-6\r
              `,children:`Powerful Features Designed For Business Growth`}),(0,P.jsx)(`p`,{className:`\r
                text-[15px]\r
                sm:text-lg\r
                text-[#6B7280]\r
                leading-relaxed\r
                max-w-3xl\r
                mx-auto\r
              `,children:`Discover enterprise-grade capabilities that simplify accounting, improve productivity, and help businesses operate more efficiently.`})]}),(0,P.jsx)(`div`,{className:`space-y-24`,children:t.keyFeatures.map((e,t)=>{let n=e.icon,r=t%2==0;return(0,P.jsxs)(`div`,{children:[t!==0&&(0,P.jsx)(`div`,{className:`mb-20 border-t border-[#E5E7EB]`}),(0,P.jsxs)(`div`,{className:`
            grid
            lg:grid-cols-2
            gap-12
            items-center
            ${r?``:`lg:[&>*:first-child]:order-2`}
          `,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`\r
                inline-flex\r
                px-4 py-2\r
                rounded-full\r
                bg-[#EEF4FF]\r
                text-[#2F80FF]\r
                font-semibold\r
                text-sm\r
                mb-5\r
              `,children:e.tag}),(0,P.jsx)(`h3`,{className:`\r
                text-3xl\r
                md:text-4xl\r
                font-black\r
                text-[#111827]\r
                mb-5\r
              `,children:e.title}),(0,P.jsx)(`p`,{className:`\r
                text-[#6B7280]\r
                text-lg\r
                leading-relaxed\r
                mb-8\r
              `,children:e.description}),(0,P.jsxs)(`div`,{className:`flex flex-wrap gap-3 mt-8`,children:[(0,P.jsx)(`span`,{className:`px-3 py-2 rounded-full bg-[#EEF4FF] text-[#2F80FF] text-sm font-medium`,children:`Saves Time`}),(0,P.jsx)(`span`,{className:`px-3 py-2 rounded-full bg-[#EEF4FF] text-[#2F80FF] text-sm font-medium`,children:`Better Decisions`}),(0,P.jsx)(`span`,{className:`px-3 py-2 rounded-full bg-[#EEF4FF] text-[#2F80FF] text-sm font-medium`,children:`Increased Productivity`})]})]}),(0,P.jsxs)(`div`,{className:`\r
    relative\r
    rounded-[32px]\r
    p-8\r
    bg-gradient-to-br\r
    from-[#F8FBFF]\r
    to-[#EEF4FF]\r
    border\r
    border-[#E5E7EB]\r
    overflow-hidden\r
  `,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-4 mb-8`,children:[(0,P.jsx)(`div`,{className:`\r
        w-16 h-16\r
        rounded-2xl\r
        bg-gradient-to-r\r
        from-[#2F80FF]\r
        to-[#7B61FF]\r
        flex\r
        items-center\r
        justify-center\r
        text-white\r
        shadow-lg\r
      `,children:(0,P.jsx)(n,{size:28})}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`p`,{className:`text-sm text-[#6B7280] font-medium`,children:`Feature Dashboard`}),(0,P.jsx)(`h4`,{className:`text-xl font-bold text-[#111827]`,children:e.tag})]})]}),(0,P.jsx)(`div`,{className:`space-y-3`,children:e.points.map((e,t)=>(0,P.jsxs)(`div`,{className:`\r
          flex\r
          items-center\r
          gap-3\r
          bg-white\r
          border\r
          border-[#E5E7EB]\r
          rounded-2xl\r
          px-4\r
          py-3\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
            w-8\r
            h-8\r
            rounded-full\r
            bg-gradient-to-r\r
            from-[#2F80FF]\r
            to-[#7B61FF]\r
            text-white\r
            flex\r
            items-center\r
            justify-center\r
            text-sm\r
            font-semibold\r
            shrink-0\r
          `,children:t+1}),(0,P.jsx)(`span`,{className:`font-medium text-[#111827]`,children:e})]},t))}),(0,P.jsxs)(`div`,{className:`grid grid-cols-2 gap-4 mt-8`,children:[(0,P.jsxs)(`div`,{className:`\r
        rounded-2xl\r
        bg-white\r
        border\r
        border-[#E5E7EB]\r
        p-4\r
        text-center\r
      `,children:[(0,P.jsx)(`p`,{className:`text-3xl font-black text-[#2F80FF]`,children:e.points.length}),(0,P.jsx)(`p`,{className:`text-sm text-[#6B7280]`,children:`Capabilities`})]}),(0,P.jsxs)(`div`,{className:`\r
        rounded-2xl\r
        bg-gradient-to-r\r
        from-[#2F80FF]\r
        to-[#7B61FF]\r
        p-4\r
        text-center\r
        text-white\r
      `,children:[(0,P.jsx)(`p`,{className:`text-3xl font-black`,children:`✓`}),(0,P.jsx)(`p`,{className:`text-sm`,children:`Business Ready`})]})]})]})]})]},t)})})]})]}),t?.whyChooseCards?.length>0&&(0,P.jsxs)(`section`,{className:`relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 overflow-hidden bg-[#F7FAFF]`,children:[(0,P.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full`}),(0,P.jsxs)(`div`,{className:`relative max-w-7xl mx-auto`,children:[(0,P.jsxs)(`div`,{className:`text-center max-w-4xl mx-auto mb-16 md:mb-20`,children:[(0,P.jsx)(`p`,{className:`text-sm md:text-base tracking-[0.3em] uppercase text-[#1E73E8] font-semibold mb-4`,children:`Why Choose`}),(0,P.jsxs)(`h2`,{className:`text-[32px] sm:text-5xl md:text-6xl font-bold leading-tight text-[#0B132B]`,children:[`Why Businesses Choose`,` `,(0,P.jsx)(`span`,{className:`bg-gradient-to-r from-[#1E73E8] to-[#4F8CFF] bg-clip-text text-transparent`,children:`TallyPrime Server`})]}),(0,P.jsx)(`p`,{className:`mt-6 text-lg md:text-xl text-[#5B6475] leading-relaxed`,children:`Built for growing businesses that need speed, security, multi-user efficiency, and uninterrupted access to critical data.`})]}),(0,P.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6`,children:t.whyChooseCards.map((e,t)=>{let n=e.icon;return(0,P.jsxs)(`div`,{className:`\r
              group relative\r
              bg-white\r
              border border-[#E7ECF3]\r
              rounded-[28px]\r
              p-6\r
              sm:p-8\r
              md:p-9\r
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]\r
              hover:shadow-[0_20px_60px_rgba(30,115,232,0.12)]\r
              hover:-translate-y-2\r
              transition-all duration-500\r
            `,children:[(0,P.jsx)(`div`,{className:`\r
              w-16 h-16\r
              rounded-2xl\r
              bg-[#EEF5FF]\r
              flex items-center justify-center\r
              mb-7\r
              group-hover:bg-[#1E73E8]\r
              transition-all duration-500\r
            `,children:(0,P.jsx)(n,{size:30,className:`\r
                  text-[#1E73E8]\r
                  group-hover:text-white\r
                  transition-all duration-500\r
                `})}),(0,P.jsx)(`h3`,{className:`text-2xl font-bold text-[#111827] leading-snug mb-5`,children:e.title}),(0,P.jsx)(`p`,{className:`text-[17px] leading-8 text-[#5B6475]`,children:e.description}),(0,P.jsx)(`div`,{className:`\r
              absolute inset-0\r
              rounded-[28px]\r
              border border-transparent\r
              group-hover:border-[#1E73E8]/20\r
              transition-all duration-500\r
              pointer-events-none\r
            `})]},t)})})]})]}),t?.pricing?.length>0&&(0,P.jsxs)(`section`,{id:`pricing`,className:`relative py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F8FAFC] overflow-hidden`,children:[(0,P.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full`}),(0,P.jsxs)(`div`,{className:`max-w-7xl mx-auto relative z-10`,children:[(0,P.jsxs)(`div`,{className:`text-center mb-14 md:mb-20`,children:[(0,P.jsx)(`p`,{className:`\r
            text-[#2F80FF]\r
            font-semibold\r
            uppercase\r
            tracking-[0.2em]\r
            mb-4\r
          `,children:`Pricing`}),(0,P.jsxs)(`h2`,{className:`mt-6 text-[32px] sm:text-5xl md:text-6xl font-black tracking-tight text-[#111827]`,children:[`Choose Your`,(0,P.jsx)(`span`,{className:`block text-[#1178D4]`,children:t.title})]}),(0,P.jsx)(`p`,{className:`mt-6 max-w-2xl mx-auto text-base md:text-lg leading-8 text-[#6B7280]`,children:`Flexible pricing plans designed for businesses of every size — from standalone systems to enterprise-scale infrastructure.`})]}),(0,P.jsx)(`div`,{className:`
          grid gap-8 mx-auto
          ${t.pricing?.length===2?`grid-cols-1 md:grid-cols-2 max-w-5xl`:`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl`}
        `,children:t.pricing.map((e,t)=>(0,P.jsx)(zv,{plan:e},t))})]})]}),t.testimonials&&(0,P.jsxs)(`section`,{className:`relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F8FAFC] overflow-hidden`,children:[(0,P.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#1178D4]/10 blur-[120px] rounded-full`}),(0,P.jsxs)(`div`,{className:`relative max-w-7xl mx-auto`,children:[(0,P.jsxs)(`div`,{className:`text-center mb-16`,children:[(0,P.jsx)(`span`,{className:`inline-block text-[#1178D4] text-sm tracking-[0.25em] uppercase font-semibold mb-5`,children:`Success Stories`}),(0,P.jsxs)(`h2`,{className:`text-3xl md:text-6xl font-bold text-[#0F172A] leading-tight`,children:[`What Businesses Say About`,` `,(0,P.jsx)(`span`,{className:`text-[#1178D4]`,children:t.name})]}),(0,P.jsx)(`p`,{className:`mt-6 text-[#64748B] text-[16px] md:text-[17px] max-w-3xl mx-auto leading-relaxed`,children:`Trusted by growing businesses across industries for smarter accounting, faster operations, and reliable business management.`})]}),(0,P.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8`,children:t.testimonials.map((e,t)=>(0,P.jsxs)(`div`,{className:`\r
            group relative\r
            rounded-[32px]\r
            bg-white\r
            border border-[#E2E8F0]\r
            p-6\r
            sm:p-8\r
            md:p-10\r
            shadow-[0_10px_40px_rgba(15,23,42,0.06)]\r
            hover:shadow-[0_20px_60px_rgba(17,120,212,0.12)]\r
            hover:-translate-y-2\r
            transition-all duration-500\r
            overflow-hidden\r
          `,children:[(0,P.jsx)(`div`,{className:`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1178D4] to-[#4F46E5]`}),(0,P.jsx)(`div`,{className:`flex items-center gap-1 mb-8`,children:[1,2,3,4,5].map(e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,className:`w-6 h-6 text-[#FBBF24]`,children:(0,P.jsx)(`path`,{fillRule:`evenodd`,d:`M10.788 3.21c.448-1.077 1.976-1.077 \r
        2.424 0l2.082 5.006 5.404.434c1.164.093 \r
        1.636 1.545.749 2.305l-4.117 3.527 \r
        1.258 5.273c.271 1.136-.964 2.033-1.96 \r
        1.425L12 18.354 7.372 21.18c-.996.608-2.231-.29-1.96-1.425 \r
        l1.258-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305 \r
        l5.404-.434 2.082-5.005z`,clipRule:`evenodd`})},e))}),(0,P.jsxs)(`p`,{className:`\r
            text-[#334155]\r
            text-lg\r
            leading-relaxed\r
            mb-10\r
          `,children:[`“`,e.review,`”`]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,P.jsx)(`div`,{className:`\r
              w-14 h-14 rounded-full\r
              bg-gradient-to-br from-[#1178D4] to-[#4F46E5]\r
              flex items-center justify-center\r
              text-white font-bold text-lg\r
              shrink-0\r
            `,children:e.name.charAt(0)}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h4`,{className:`text-[#0F172A] font-semibold text-lg`,children:e.name}),(0,P.jsx)(`p`,{className:`text-[#64748B] text-sm`,children:e.role})]})]})]},t))})]})]}),t.cta&&(0,P.jsxs)(`section`,{className:`relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden`,children:[(0,P.jsx)(`div`,{className:`\r
          absolute\r
          top-0\r
          left-1/2\r
          -translate-x-1/2\r
          w-[700px]\r
          h-[700px]\r
          bg-gradient-to-r\r
          from-[#2F80FF]/10\r
          to-[#7B61FF]/10\r
          blur-3xl\r
          rounded-full\r
        `}),(0,P.jsx)(`div`,{className:`\r
    absolute top-0 left-1/4\r
    w-[350px] h-[350px]\r
    bg-[#1178D4]/[0.06]\r
    blur-[120px]\r
    rounded-full\r
  `}),(0,P.jsx)(`div`,{className:`\r
    absolute bottom-0 right-1/4\r
    w-[350px] h-[350px]\r
    bg-[#6C63FF]/[0.06]\r
    blur-[120px]\r
    rounded-full\r
  `}),(0,P.jsxs)(`div`,{className:`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center`,children:[(0,P.jsx)(`div`,{className:`\r
      inline-flex items-center\r
      px-5 py-2\r
      rounded-full\r
      border border-[#D8E6FF]\r
      bg-[#F8FBFF]\r
      text-[#1178D4]\r
      text-sm\r
      font-semibold\r
      tracking-[0.22em]\r
      uppercase\r
      mb-8\r
    `,children:t.cta.badge}),(0,P.jsx)(`h2`,{className:`\r
      text-[35px]\r
      sm:text-[48px]\r
      lg:text-[58px]\r
      leading-[1.05]\r
      font-[800]\r
      text-[#071426]\r
      max-w-4xl\r
      mx-auto\r
    `,children:t.cta.title}),(0,P.jsx)(`p`,{className:`\r
      mt-8\r
      text-[16px]\r
      md:text-[17px]\r
      leading-[1.9]\r
      text-[#5B6475]\r
      max-w-3xl\r
      mx-auto\r
    `,children:t.cta.description}),(0,P.jsxs)(`div`,{className:`\r
      mt-14\r
      flex flex-col sm:flex-row\r
      items-center justify-center\r
      gap-5\r
    `,children:[(0,P.jsx)(`a`,{href:t.cta.primaryLink,target:t.cta.primaryLink.includes(`http`)?`_blank`:`_self`,rel:`noopener noreferrer`,children:(0,P.jsx)(`button`,{className:`\r
        group relative overflow-hidden\r
        px-6\r
        sm:px-10\r
        py-4\r
        sm:py-5\r
        rounded-2xl\r
        bg-gradient-to-r\r
        from-[#1178D4]\r
        to-[#6C63FF]\r
        text-white\r
        text-[17px]\r
        font-semibold\r
        shadow-[0_10px_40px_rgba(108,99,255,0.25)]\r
        hover:scale-[1.04]\r
        transition-all duration-300\r
      `,children:(0,P.jsxs)(`span`,{className:`relative z-10 flex items-center gap-2`,children:[t.cta.primaryBtn,(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:2,stroke:`currentColor`,className:`\r
              w-5 h-5\r
              transition-transform duration-300\r
              group-hover:translate-x-1\r
            `,children:(0,P.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3`})})]})})}),(0,P.jsx)(`a`,{href:t.cta.secondaryLink,children:(0,P.jsx)(`button`,{className:`\r
        px-6\r
        sm:px-10\r
        py-4\r
        sm:py-5\r
        rounded-2xl\r
        border border-[#DDE7F5]\r
        bg-white\r
        text-[#071426]\r
        text-[17px]\r
        font-semibold\r
        transition-all duration-300\r
        hover:border-[#1178D4]\r
        hover:text-[#1178D4]\r
        hover:shadow-[0_10px_30px_rgba(17,120,212,0.08)]\r
      `,children:t.cta.secondaryBtn})})]}),(0,P.jsxs)(`div`,{className:`\r
      mt-14\r
      flex flex-wrap\r
      items-center justify-center\r
      gap-4\r
      sm:gap-6\r
      text-[#64748B]\r
      text-sm\r
    `,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(`div`,{className:`w-2 h-2 rounded-full bg-[#22C55E]`}),`Trusted Business Solution`]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(`div`,{className:`w-2 h-2 rounded-full bg-[#22C55E]`}),`Expert Support Available`]}),(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(`div`,{className:`w-2 h-2 rounded-full bg-[#22C55E]`}),`Fast & Secure Setup`]})]})]})]})]}):(0,P.jsx)(`div`,{className:`min-h-screen flex items-center justify-center text-center px-4`,children:(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h1`,{className:`text-4xl font-bold mb-4`,children:`Product Not Found`}),(0,P.jsx)(Mn,{to:`/products`,className:`text-[#2F80FF] font-semibold`,children:`Back to Products`})]})})}var Hv=[{title:`Tally Software`,description:`Complete Tally solutions for accounting, GST, inventory, payroll, and business management.`,icon:Tr,path:`/services/tally-software`},{title:`Tally Services`,description:`Professional support, implementation, migration and training services for businesses.`,icon:Ci,path:`/services/tally-services`},{title:`Tally Apps For Mobile`,description:`Access reports, inventory, and business insights securely from anywhere on mobile.`,icon:Ti,path:`/services/tally-mobile`},{title:`Tally Solutions`,description:`Tailor-made integrations and workflow automations designed for your operations.`,icon:pi,path:`/services/tally-solutions`},{title:`Tally ERP 9 Solutions`,description:`Advanced ERP solutions for enterprise accounting, reporting, and multi-user management.`,icon:ki,path:`/services/tally-erp`},{title:`Tally Add-Ons`,description:`Powerful Tally add-ons for scalability. Seamless connectivity and secure operations in one platform`,icon:xi,path:`/services/tally-addon`}],Uv=[{slug:`tally-software`,hero:{badge:`Business Accounting Solutions`,title:`Smart Tally Software For`,highlight:` Every Business`,description:`Manage accounting, GST, inventory, payroll, banking, and business operations seamlessly with powerful Tally software solutions tailored for modern businesses.`,primaryBtn:`Book Free Demo`,primaryLink:`tel:+919849431943`},subServices:[{id:`tally-prime-silver`,tab:`Tally Prime Silver`,title:`Tally Prime Silver (Single-User)`,icon:Ai,description:`TallyPrime Silver is a single-user edition designed for small businesses and individual users. This version allows seamless management of accounts, inventory, taxation, and other financial tasks on a single computer. With its intuitive interface and robust features, TallyPrime Silver is perfect for efficient and reliable business operations.`,points:[`Simplified Accounting`,`Comprehensive GST Support`,`Inventory Management`,`Banking Integration`,`Data Security`,`Customizable Reports`]},{id:`tally-prime-gold`,tab:`TallyPrime Gold`,title:`TallyPrime Gold (Multi-User)`,icon:Mi,description:`TallyPrime Gold is the multi-user edition designed for businesses that require concurrent access to Tally across multiple systems within the same network. It is ideal for organizations with multiple departments or users, enabling seamless collaboration, data sharing, and efficient management of business operations.`,points:[`Multi-User Access`,`Comprehensive Inventory Management`,`Efficient Collaboration`,`Advanced Security Controls`,`GST Compliance`,`Real-Time Data Synchronization`]},{id:`tvu`,tab:`TVU`,title:`Tally Virtual User (TVU)`,icon:wi,description:`The Tally Virtual User (TVU) License is a specially designed licensing option that allows businesses to access TallyPrime over a virtual environment. Ideal for remote work setups or businesses using cloud infrastructure, TVU licenses enable secure and efficient usage of Tally across diverse locations without compromising performance or data security.`,points:[`Remote Accessibility`,`Cost-Efficient Scalability`,`Cloud Compatibility`,`Multi-Device Support`,`Enhanced Security`,`Centralized Data Management`]},{id:`tally-erp-9`,tab:`Tally ERP 9`,title:`Tally ERP 9 Solutions`,icon:Tr,description:`Tally.ERP 9 is a comprehensive business management software designed to streamline accounting, inventory, payroll, and taxation processes. It is a trusted solution for small to medium-sized businesses, offering advanced features to simplify operations, enhance compliance, and provide valuable insights for decision-making.`,points:[`Complete Accounting Solutions`,`Advanced Inventory Tracking`,`Payroll Management`,`GST & Tax Compliance`,`Multi-Language Support`,`Remote Access`]},{id:`tss`,tab:`TSS`,title:`Tally Software Services (TSS)`,icon:Ci,description:`Tally Software Services (TSS) is a subscription-based service that ensures your TallyPrime software remains up-to-date with the latest features, security patches, and compliance updates. TSS offers access to a range of value-added services, including product support, data synchronization, and cloud access, helping businesses optimize their use of Tally software for smoother operations.`,points:[`Latest Product Updates`,`Cloud Access`,`Product Support`,`Remote Access`,`Data Synchronization`,`Enhanced Security`]},{id:`auditors-edition`,tab:`Auditors Edition`,title:`TallyPrime Auditors Edition`,icon:jr,description:`TallyPrime Auditors Edition is a specialized version of TallyPrime designed to cater to the needs of auditors and tax professionals. It provides advanced features for auditing, compliance, and detailed financial analysis. This edition allows auditors to access client data securely, perform audits efficiently, and ensure complete compliance with regulatory standards.`,points:[`Detailed Financial Reports`,`Remote Access`,`Tax Compliance`,`Data Integrity`,`Audit Trail`,`Client Data Management`]}],cta:{badge:`Free Consultation`,title:`Upgrade Your Business With Tally Solutions`,description:`Connect with our experts to discover the right Tally software package tailored for your accounting and business management needs.`,primaryBtn:`Enquire Now`,primaryLink:`/contact`,secondaryBtn:`Talk To Expert`,SecondaryLink:`tel:+919849431943`}},{slug:`tally-services`,hero:{badge:`Business Support Services`,title:`Professional Tally Services`,highlight:` For Smooth Operations`,description:`Get expert assistance for installation, migration, customization, AMC support, troubleshooting, and training services designed to keep your business operations running efficiently.`,primaryBtn:`Book Free Demo`,primaryLink:`tel:+919849431943`},subServices:[{id:`tally-on-cloud`,tab:`Tally On Cloud`,title:`Simplify Business Operations with Tally on Cloud`,icon:xr,description:`Tally on Cloud is a revolutionary solution designed to make TallyPrime accessible from anywhere, anytime. By hosting Tally on a secure cloud platform, businesses can eliminate the need for traditional hardware and infrastructure while enjoying the flexibility and scalability of the cloud. This solution ensures secure data access, enhanced collaboration, and cost efficiency, making it an ideal choice for businesses of all sizes.`,points:[`Anywhere, Anytime Accessibility`,`Multi-User Collaboration`,`Cost-Effective Solution`,`Scalable and Flexible`,`Enhanced Data Security`,`Reduced IT Overhead`]},{id:`tally-support`,tab:`Tally Support`,title:`Unparalleled Support for Seamless Business Operations`,icon:Ur,description:`Support is the backbone of any successful business solution, and with Tally, you get top-notch assistance to ensure your operations run smoothly. Tally’s support services are designed to address your queries, resolve issues promptly, and provide expert guidance to maximize the efficiency of your business processes.`,points:[`24/7 Assistance`,`Regular Updates and Training`,`Expert Guidance`,`Custom Solutions`,`On-Demand Troubleshooting`,`Proactive Maintenance`]},{id:`amc`,tab:`AMC`,title:`Ensure Hassle-Free Operations with Tally Annual Maintenance Contract (AMC)`,icon:Hr,description:`Tally AMC (Annual Maintenance Contract) is designed to provide businesses with continuous support, timely updates, and uninterrupted access to Tally services. With a focus on proactive maintenance and expert assistance, AMC ensures your Tally system operates smoothly and remains up-to-date with the latest features and compliance requirements.`,points:[`Regular Updates and Upgrades`,`Data Security and Backup Support`,`Priority Support`,`Custom Solutions`,`Proactive System Maintenance`,`Cost-Effective and Time-Saving`]},{id:`data-synchronization`,tab:`Data Synchronization`,title:`Streamline Business Operations with Tally Data Synchronization`,icon:Er,description:`Tally Data Synchronization ensures seamless sharing and updating of data across multiple locations, enabling businesses to operate efficiently and maintain consistency in their financial and operational records. This feature is ideal for businesses with distributed operations, ensuring that all users work with the latest and most accurate data.`,points:[`Real-Time Data Updates`,`Multi-Loacation Accessibility`,`Centralized Control`,`Offline Synchronization`,`Secure Data Exchange`,`Improved Efficiency`]},{id:`tally-training`,tab:`Tally Training`,title:`Empower Your Team with Tally Training`,icon:Br,description:`Tally Training is designed to equip businesses and their teams with the skills and knowledge to use Tally solutions effectively. Whether you’re a beginner or an experienced user, comprehensive training programs ensure you unlock the full potential of Tally, driving efficiency and accuracy in your business operations.`,points:[`Comprehensive Learning Modules`,`Customizable Training Programs`,`Hands-On Practice`,`On-site and Online Options`,`Expert Trainers`,`Certification for Users`]},{id:`invoice-customization`,tab:`Invoice Customization`,title:`Billing Your Process with Tally Invoice Customization`,icon:Nr,description:`Tally Invoice Customization enables businesses to create personalized invoices that reflect their brand identity and meet their specific operational needs. With the flexibility to design and modify invoice formats, this feature ensures that your billing process is both professional and efficient.`,points:[`Brand Identity Integration`,`Industry-Specific Templates`,`Customizable Fields`,`Language and Regional Adaptability`,`Multiple Format Options`,`Seamless Automation`]},{id:`priority-support-services`,tab:`Priority Support Services`,title:`Experience Seamless Assistance with Tally Priority Support Services`,icon:cr,description:`Tally Priority Support Services are designed to provide businesses with quick and dedicated assistance, ensuring uninterrupted operations and maximum efficiency. With a focus on delivering expert guidance and faster issue resolution, this service ensures your Tally experience remains smooth and hassle-free.`,points:[`Dedicated Support`,`24/7 Availability`,`Faster Response Times`,`Tailored Solutions`,`Proactive Assistance`,`Comprehensive Troubleshooting`]}],cta:{badge:`FREE CONSULTATION`,title:`Need Expert Tally Service Assistance?`,description:`Connect with our specialists for installation, customization, AMC support, migration, and cloud solutions tailored to your business needs.`,primaryBtn:`Get Started`,primaryLink:`/contact`,secondaryBtn:`Talk To Expert`,secondaryLink:`tel:+919849431943`}},{slug:`tally-mobile`,hero:{badge:`Mobile Business Solutions`,title:`Manage Tally Anywhere With `,highlight:` Mobile Apps`,description:`Access reports, approvals, inventory, sales, and financial insights securely from your mobile device with powerful Tally-integrated mobile applications.`,primaryBtn:`Book Free Demo`,primaryLink:`tel:+919849431943`},subServices:[{id:`bizanalyst-for-tally`,tab:`BizAnalyst for Tally`,title:`Unlock Business Insights with BizAnalyst for Tally`,icon:hr,description:`BizAnalyst is a powerful mobile and web-based solution designed to work seamlessly with Tally, empowering businesses to access real-time insights and reports on the go. By bridging the gap between your financial data and actionable decisions, BizAnalyst enhances productivity, streamlines operations, and provides better control over your business.`,points:[`Real-Time Access to Data`,`Seamless Data Synchronization`,`Smart Notifications`,`Collaborative Tools`,`Advanced Business Analytics`,`Secure and Reliable`]},{id:`credflow-for-tally`,tab:`CredFlow for Tally`,title:`Optimize Cash Flow Management with Credflow for Tally`,icon:Ni,description:`Credflow is an advanced cash flow management solution integrated with Tally, designed to help businesses manage their finances efficiently. By automating accounts receivables, improving collection processes, and providing real-time insights, Credflow empowers businesses to maintain a healthy cash flow and ensure financial stability.`,points:[`Automated Payment Reminders`,`Credit Risk Management`,`Real-Time Cash Flow Tracking `,`Seamless Tally Integration`,`Customizable Reports and Dashboards`,`Improved Collection Efficiency`]}],cta:{badge:`FREE CONSULTATION`,title:`Need Mobile Access To Your Tally Business Data?`,description:`Connect with our experts to discover the best Tally mobile apps for analytics, collections, payroll, sales, attendance, and business automation.`,primaryBtn:`Get Started`,primaryLink:`/contact`,secondaryBtn:`Talk To Expert`,secondaryLink:`tel:+919849431943`}},{slug:`tally-solutions`,hero:{badge:`Smart Business Solutions`,title:`Powerful Tally Solutions  `,highlight:`For Modern Businesses `,description:`Enhance productivity, automate workflows, streamline reporting, and integrate Tally with advanced business solutions designed for scalable operations.`,primaryBtn:`Book Free Demo`,primaryLink:`tel:+919849431943`},subServices:[{id:`tally-api-integration`,tab:`Tally API Integration`,title:`Enhance Functionality with Tally API Integration`,icon:Fi,description:`Tally API Integration enables seamless connectivity between Tally and other business applications, allowing for streamlined operations and real-time data synchronization. By integrating Tally with your existing systems, you can automate workflows, reduce manual tasks, and improve efficiency across various business processes.`,points:[`Seamless Data Exchange`,`Advanced Reporting and Analytics`,`Custom Workflow Automation`,`Secure and Reliable Integration`,`Third-Party Application Compatibility`,`Scalable Solutions`]},{id:`quickbooks-and-tally-integration`,tab:`QuickBooks and Tally Integration`,title:`Streamline Your Accounting with QuickBooks and Tally Integration`,icon:vi,description:`Integrating QuickBooks with Tally allows businesses to combine the strengths of both platforms—QuickBooks for managing accounting and Tally for financial and operational data. This integration ensures seamless data transfer, improved accuracy, and enhanced business efficiency by eliminating the need for manual data entry and duplication.`,points:[`Automated Data Synchronization`,`Minimized Data Entry Errors`,`Simplified Accounting and Taxation`,`Centralized Financial Management`,`Efficient Financial Reporting`,`Customizable Integration`]},{id:`excel-to-tally-import-utility`,tab:`Excel To Tally Import Utility`,title:`Simplify Data Import with Excel to Tally Import Utility`,icon:Mr,description:`The Excel to Tally Import Utility is a powerful tool designed to simplify the process of transferring data from Excel sheets into Tally. Whether it’s for managing transactions, inventory, or financial data, this utility streamlines data entry, reduces errors, and saves valuable time by automating the import process from Excel to Tally.`,points:[`Effortless Data Transfer`,`Error-Free Data Mapping`,`Customizable Import Formats`,`Real-Time Updates`,`Bulk Data Import`,`Seamless Integration`]},{id:`tally-invoice-customization`,tab:`Tally Invoice Customization`,title:`Billing Process with Tally Invoice Customization`,icon:Nr,description:`Tally Invoice Customization enables businesses to create personalized invoices that reflect their brand identity and meet their specific operational needs. With the flexibility to design and modify invoice formats, this feature ensures that your billing process is both professional and efficient.`,points:[`Brand Identity Integration`,`Industry-Specific Templates`,`Customizable Fields`,`Language and Regional Adaptability`,`Multiple Format Options`,`Seamless Automation`]},{id:`tally-voucher-customization`,tab:`Tally Voucher Formats Customization`,title:`Your Financial Transactions with Tally Voucher Formats Customization`,icon:gi,description:`Tally Voucher Formats Customization allows businesses to modify and design voucher templates to suit their specific accounting needs. Whether it’s for sales, purchases, payments, receipts, or journal entries, this feature ensures that all financial transactions are documented in a format that aligns with your business processes and compliance requirements.`,points:[`Customizable Voucher Layouts`,`Industry-Specific Formats`,`Inclusion of Business-Specific Fields`,`Multi-Language Support`,`Branding Integration`,`Flexible Reporting and Export Options`]},{id:`tally-gst-reports-customization`,tab:`Tally GST Reports Customization`,title:`Simplify GST Compliance with Tally GST Reports Customization`,icon:Vr,description:`Tally GST Reports Customization allows businesses to tailor their GST reports to meet specific compliance requirements, ensuring accurate tax calculations and streamlined reporting. By customizing GST reports, businesses can generate precise tax summaries, invoices, and returns that align with statutory norms while providing insights into the financial health of the business.`,points:[`Tailored GST Returns`,`Multi-Period Reporting`,`Dynamic Tax Classification`,`Detailed Summary and Ledger Reports`,`Customizable Tax Rate Setup`,`Easy Integration with GSTR Filing`]},{id:`vertical-solutions`,tab:`Vertical Solutions With Tally`,title:`Industry-Specific Vertical Solutions with Tally`,icon:pr,description:`Tally’s Vertical Solutions offer customized tools and features tailored to meet the specific needs of different industries. Whether you’re in retail, manufacturing, healthcare, or services, Tally provides specialized solutions designed to streamline operations, improve accuracy, and enhance efficiency across various business functions.`,points:[`Customized Features for Industry Needs`,`Seamless Integration`,`Enhanced Reporting for Each Industry`,`Scalable and Flexible Solutions`,`Compliance with Industry Regulations`,`Improved Decision-Making`]}],cta:{badge:`FREE CONSULTATION`,title:`Need Mobile Access To Your Tally Business Data?`,description:`Connect with our experts to discover the best Tally mobile apps for analytics, collections, payroll, sales, attendance, and business automation.`,primaryBtn:`Get Started`,primaryLink:`/contact`,secondaryBtn:`Talk To Expert`,secondaryLink:`tel:+919849431943`}},{slug:`tally-erp`,hero:{badge:`Enterprise ERP Solutions`,title:`Advanced Tally ERP 9 Solutions `,highlight:`For Smarter Operations`,description:`Optimize inventory, production, sales, finance, and operational workflows with powerful Tally ERP 9 enterprise-grade business solutions.`,primaryBtn:`Talk To Expert`,primaryLink:`tel:+919849431943`},subServices:[{id:`supply-chain-visibility`,tab:`Supply Chain Visibility`,title:`Achieve Full Supply Chain Transparency with Tally’s Supply Chain Visibility`,icon:Rr,description:`Tally’s Supply Chain Visibility feature provides businesses with real-time insights into their supply chain operations, enabling better decision-making, improved efficiency, and enhanced customer satisfaction. By tracking every step of the process, businesses can optimize inventory, streamline logistics, and reduce bottlenecks.`,points:[`Real-Time Inventory Tracking`,`Logistics and Shipment Tracking`,`Order Lifecycle Monitoring`,`Customizable Supply Chain Reports`,`Comprehensive Vendor and Supplier Insights`,`Enhanced Demand Forecasting`]},{id:`serial-number-management`,tab:`Serial Number Management`,title:`Streamline Inventory with Tally’s Serial Number Management`,icon:Xr,description:`Tally’s Serial Number Management feature enables businesses to track individual products and assets in their inventory through unique serial numbers. This enhances traceability, improves stock control, and simplifies warranty or service management, providing a complete overview of each item in the supply chain.`,points:[`Unique Serial Number Assignment`,`Batch and Serial Number Integration`,`Complete Traceability`,`Inventory Control and Stock Visibility`,`Warranty and Service Management`,`Customizable Reporting`]},{id:`kit-items-sales`,tab:`KIT Items Sales`,title:`Boost Sales Efficiency with Tally’s KIT Items Sales Management`,icon:ci,description:`Tally’s KIT Items Sales feature enables businesses to manage and sell bundled products or services efficiently. This functionality allows you to combine multiple items into a single sales unit or kit, simplifying the sales process, improving stock management, and providing a better experience for both the business and its customers.`,points:[`Bundling of Multiple Products`,`Simplified Billing and Invoicing`,`Automatic Stock Tracking`,`Comprehensive Sales Reporting`,`Customizable KIT Configuration`,`Discounts and Promotions`]},{id:`sales-activity-management`,tab:`Sales Activity Management`,title:`Optimize Sales Performance with Tally’s Sales Activity Management`,icon:gr,description:`Tally’s Sales Activity Management feature helps businesses track, analyze, and manage their sales activities efficiently. This functionality provides a comprehensive view of sales interactions, customer touchpoints, and performance metrics, empowering businesses to enhance sales productivity, drive growth, and improve customer relationships.`,points:[`Sales Tracking and Monitoring`,`Task Assignment and Collaboration`,`Lead and Opportunity Management`,`Customer Interaction History`,`Activy-Based Reporting`,`Sales Performance Analytics`]},{id:`quality-control`,tab:`Quality Control`,title:`Ensure Product Excellence with Tally’s Quality Control (QC)`,icon:Ci,description:`Tally’s Quality Control (QC) feature enables businesses to monitor and maintain the quality of their products throughout the manufacturing and procurement process. By incorporating quality checks at every stage, this functionality helps businesses reduce defects, improve product consistency, and meet customer expectations.`,points:[`Customizable Quality Parameters`,`Batch-wise Quality Control`,`Multiple Quality Checks`,`Quality Certificate Management`,`Defect Tracking and Reporting`,`Integration with Inventory Management`]}],cta:{badge:`FREE CONSULTATION`,title:`Need Mobile Access To Your Tally Business Data?`,description:`Connect with our experts to discover the best Tally mobile apps for analytics, collections, payroll, sales, attendance, and business automation.`,primaryBtn:`Get Started`,primaryLink:`/contact`,secondaryBtn:`Talk To Expert`,secondaryLink:`tel:+919849431943`}},{slug:`tally-addon`,hero:{badge:`Powerful Tally Add-Ons`,title:`Extend Tally Functionality With Smart`,highlight:` Business Add-Ons`,description:`Enhance accounting, compliance, billing, inventory, and workflow efficiency with advanced Tally add-ons customized for modern business operations.`,primaryBtn:`Talk To Expert`},subServices:[{id:`e-way-bill-management`,tab:`E-Way Bill Management`,title:`Simplify Compliance with Tally’s E-way Bill Management`,icon:_i,description:`Tally’s E-way Bill feature allows businesses to generate, track, and manage e-way bills seamlessly, ensuring compliance with GST regulations. This functionality streamlines the process of transporting goods and ensures that businesses stay on top of the documentation required for interstate and intrastate shipments.`,points:[`Automatic E-way Bill Generation`,`Bulk E-way Bill Generation`,`Real-Time E-way Bill Tracking`,`E-way Bill Reports`,`GST Integration`,`Validations and Compliance Checks`]},{id:`digitally-signed-invoices`,tab:`Digitally Signed Invoices`,title:`Ensure Authenticity with Digitally Signed Invoices in Tally`,icon:Ar,description:`Tally’s Digitally Signed Invoice feature enables businesses to generate invoices that are digitally signed, ensuring authenticity, security, and legal compliance. This feature helps streamline invoice validation processes, enhance trust with customers and partners, and ensure that invoices meet regulatory requirements.`,points:[`Secure Digital Signature Integration`,`Enhanced Invoice Authenticity`,`Compliance with Legal Requirements`,`Efficient Invoice Management`,`Automatic Signature Generation`,`Audit-Ready Records`]},{id:`gst-reminder`,tab:`GST Reminder`,title:`Stay Compliant with Tally’s GST Reminder Feature`,icon:lr,description:`Tally’s GST Reminder feature helps businesses stay on top of their tax filing deadlines by sending timely reminders for GST returns and other important compliance dates. This functionality ensures that you never miss a filing deadline, reducing the risk of penalties and ensuring seamless tax compliance.`,points:[`Automated GST Filing Reminders`,`Reminder Notifications via Email/SMS`,`Customizable Reminder Settings`,`Integrated with GST Reports`,`Multi-Return Support`,`Dashboard Overview of Due Dates`]},{id:`transaction-authorization`,tab:`Transaction Authorization`,title:`Secure Your Business Operations with Tally’s Transaction Authorization`,icon:xi,description:`Tally’s Transaction Authorization feature ensures that all financial transactions within your business are authorized by the relevant personnel before being recorded. This adds an extra layer of security and control, preventing unauthorized or erroneous transactions and ensuring accurate financial reporting.`,points:[`Role-Based Authorization`,`Real-Time Authorization Alerts`,`Multi-Level Authorization`,`Customizable Approval Workflow`,`Audit Trail of Authorizations`,`Integration with Financial Data`]},{id:`material-requirement-planning`,tab:`Material Requirement Planning`,title:`Optimize Inventory Management with Tally’s Material Requirement Planning`,icon:dr,description:`Tally’s Material Requirement Planning (MRP) feature enables businesses to forecast and manage their material needs, ensuring that the right materials are available at the right time for production. This functionality helps prevent overstocking or stockouts, reduces costs, and ensures smooth production processes by optimizing material flow.`,points:[`Automated Material Planning`,`Real-Time Inventory Monitoring`,`Forecasting and Demand Planning`,`Vendor and Supplier Integration`,`Multi-Item and Multi-Level BOM Support`,`Detailed MRP Reports`]}],cta:{badge:`SMART BUSINESS AUTOMATION`,title:`Upgrade Your Tally Experience With Powerful Add-Ons`,description:`Connect with our experts to discover custom Tally add-ons that improve productivity, compliance, automation, and business performance.`,primaryBtn:`Book Free Consultation`,primaryLink:`/contact`,secondaryBtn:`Contact Our Team`,secondaryLink:`tel:+919849431943`}}];function Wv(){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`section`,{className:`\r
      relative\r
      lg:min-h-screen\r
      text-white\r
      overflow-hidden\r
      bg-[#071426]\r
      border-b border-white/5\r
      px-4 sm:px-6 lg:px-10\r
      pt-24\r
      sm:pt-28\r
      lg:pt-0\r
      flex items-center`,children:[(0,P.jsx)(`div`,{className:`\r
            absolute\r
            top-[-200px]\r
            left-1/2\r
            -translate-x-1/2\r
            w-[450px]\r
            h-[450px]\r
            sm:w-[650px]\r
            sm:h-[650px]\r
            lg:w-[900px]\r
            lg:h-[900px]\r
            bg-gradient-to-r\r
            from-[#2F80FF]/20\r
            to-[#7B61FF]/20\r
            blur-3xl\r
            rounded-full\r
          `}),(0,P.jsx)(`div`,{className:`relative z-10 max-w-7xl mx-auto px-0 py-14 sm:py-20 md:py-24`,children:(0,P.jsxs)(`div`,{className:`max-w-4xl`,children:[(0,P.jsx)(`p`,{className:`\r
                inline-flex\r
                items-center\r
                gap-2\r
                px-4\r
                sm:px-5\r
                py-2\r
                rounded-full\r
                border border-white/10\r
                bg-white/5\r
                backdrop-blur-xl\r
                text-white/70\r
                text-sm\r
                mb-8\r
              `,children:`Services`}),(0,P.jsxs)(`h1`,{className:`\r
        text-[36px]\r
        sm:text-5xl\r
        md:text-6xl\r
        font-black\r
        leading-[1.05]\r
        tracking-tight\r
        max-w-4xl\r
      `,children:[`Transform Your Business `,(0,P.jsx)(`br`,{}),(0,P.jsx)(`span`,{className:` bg-gradient-to-r\r
                  from-[#2F80FF]\r
                  to-[#7B61FF]\r
                  bg-clip-text\r
                  text-transparent`,children:`With Smart Tally Services`})]}),(0,P.jsx)(`p`,{className:`\r
        mt-8\r
        text-[15px]\r
        sm:text-lg\r
        md:text-xl\r
        text-[#B6C2D1]\r
        leading-relaxed\r
        max-w-3xl\r
      `,children:`From implementation and customization to cloud hosting and support, we help businesses streamline operations, improve efficiency, and scale confidently with Tally solutions.`}),(0,P.jsxs)(`div`,{className:`mt-10\r
            flex\r
            flex-col\r
            sm:flex-row\r
            sm:flex-wrap\r
            gap-4`,children:[(0,P.jsx)(`a`,{href:`#services`,children:(0,P.jsx)(`button`,{className:`\r
          w-full sm:w-auto\r
          px-6\r
          sm:px-8\r
          py-4 rounded-2xl\r
          bg-gradient-to-r from-[#1178D4] to-[#6C63FF]\r
          hover:scale-105\r
          transition-all duration-300\r
          font-semibold\r
          shadow-[0_0_40px_rgba(17,120,212,0.35)]\r
        `,children:`Explore Services`})}),(0,P.jsx)(`a`,{href:`tel:+919849431943`,children:(0,P.jsx)(`button`,{className:`\r
          w-full sm:w-auto\r
          px-6\r
          sm:px-8\r
          py-4 rounded-2xl\r
          border border-white/10\r
          bg-white/5\r
          hover:bg-white/10\r
          transition-all duration-300\r
          backdrop-blur-md\r
          font-semibold\r
        `,children:`Talk To Experts`})})]})]})})]}),(0,P.jsxs)(`section`,{id:`services`,className:`relative bg-[#F8FBFF] py-16 sm:py-20 md:py-24 overflow-hidden`,children:[(0,P.jsxs)(`div`,{className:`absolute inset-0`,children:[(0,P.jsx)(`div`,{className:`\r
      absolute top-0 left-0\r
      w-[500px] h-[500px]\r
      bg-[#1178D4]\r
      opacity-[0.08] blur-[140px]\r
      rounded-full\r
    `}),(0,P.jsx)(`div`,{className:`\r
      absolute bottom-0 right-0\r
      w-[400px] h-[400px]\r
      bg-[#6C63FF]\r
      opacity-[0.06] blur-[120px]\r
      rounded-full\r
    `})]}),(0,P.jsxs)(`div`,{className:`relative z-10 max-w-6xl mx-auto px-4 sm:px-6`,children:[(0,P.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-20`,children:[(0,P.jsxs)(`div`,{className:`\r
              inline-flex\r
              items-center\r
              gap-2\r
              px-4\r
              py-2\r
              rounded-full\r
              bg-[#2F80FF]/10\r
              text-[#2F80FF]\r
              text-sm\r
              font-medium\r
              mb-6\r
            `,children:[(0,P.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-green-400 animate-pulse`}),`Our Services`]}),(0,P.jsxs)(`h2`,{className:`\r
        text-[32px]\r
        sm:text-5xl\r
        md:text-6xl\r
        font-black\r
        text-[#071426]\r
        leading-tight\r
      `,children:[`Smart Solutions For`,(0,P.jsx)(`span`,{className:`block text-[#071426]/90`,children:`Modern Businesses`})]}),(0,P.jsx)(`p`,{className:`\r
        mt-6\r
        text-[15px]\r
        sm:text-lg\r
        text-[#A8B3C7]\r
        leading-relaxed\r
      `,children:`From Tally implementation to cloud infrastructure, we deliver scalable business solutions tailored for growth and efficiency.`})]}),(0,P.jsx)(`div`,{className:`\r
      grid\r
      grid-cols-1\r
      sm:grid-cols-2\r
      lg:grid-cols-3\r
      gap-6\r
      sm:gap-8\r
    `,children:Hv.map((e,t)=>{let n=e.icon;return(0,P.jsxs)(Mn,{to:e.path,className:`\r
              group relative overflow-hidden\r
              rounded-[22px]\r
              sm:rounded-[28px]\r
              border border-[#E5EAF2]\r
              bg-white\r
              p-6\r
              sm:p-8\r
              lg:p-10\r
              transition-all duration-500\r
              hover:bg-[#F5F7FF]\r
              hover:-translate-y-2\r
              hover:shadow-[0_20px_60px_rgba(17,120,212,0.12)]\r
              `,children:[(0,P.jsx)(`div`,{className:`\r
          absolute inset-0\r
          opacity-0\r
          group-hover:opacity-100\r
          transition duration-500\r
          bg-gradient-to-br\r
          from-[#2F80FF]/10\r
          to-[#7B61FF]/10\r
        `}),(0,P.jsx)(`div`,{className:`\r
              w-14 h-14\r
              sm:w-16 sm:h-16 rounded-3xl\r
              bg-[#F5F7FF]\r
              border border-[#E8EEFF]\r
              flex items-center justify-center\r
              transition-all duration-500\r
              group-hover:bg-gradient-to-br\r
              group-hover:from-[#1178D4]\r
              group-hover:to-[#6C63FF]\r
              group-hover:shadow-[0_10px_30px_rgba(108,99,255,0.25)]\r
            `,children:(0,P.jsx)(n,{className:`w-7 h-7 sm:w-8 sm:h-8 text-[#1178D4] transition-all duration-500 group-hover:text-white`})}),(0,P.jsx)(`h3`,{className:`\r
                text-[24px]\r
                sm:text-[30px]\r
                md:text-[34px]\r
                font-[700]\r
                text-[#071426]\r
                mb-4\r
                `,children:e.title}),(0,P.jsx)(`p`,{className:`\r
                text-[15px]\r
                sm:text-[17px]\r
                leading-[1.8]\r
                text-[#5B6475]\r
                `,children:e.description}),(0,P.jsxs)(`div`,{className:`\r
                mt-10 flex items-center gap-3\r
                text-[#1178D4]\r
                font-[600]\r
                text-[17px]\r
                transition-all duration-300\r
                group-hover:text-[#6C63FF]\r
              `,children:[(0,P.jsx)(`span`,{children:`Explore Service`}),(0,P.jsx)(or,{className:`\r
                w-5 h-5\r
                transition-transform duration-300\r
                group-hover:translate-x-2\r
                `})]}),(0,P.jsx)(`div`,{className:`\r
              absolute bottom-0 left-0\r
              h-[3px] w-0\r
              bg-gradient-to-r from-[#1178D4] to-[#6C63FF]\r
              transition-all duration-500\r
              group-hover:w-full\r
              `})]},t)})})]})]}),(0,P.jsxs)(`section`,{className:`relative py-16 sm:py-20 bg-white overflow-hidden`,children:[(0,P.jsx)(`div`,{className:`\r
          absolute\r
          top-0\r
          left-1/2\r
          -translate-x-1/2\r
          w-[400px]\r
          h-[400px]\r
          sm:w-[550px]\r
          sm:h-[550px]\r
          lg:w-[700px]\r
          lg:h-[700px]\r
          bg-gradient-to-r\r
          from-[#2F80FF]/10\r
          to-[#7B61FF]/10\r
          blur-3xl\r
          rounded-full\r
        `}),(0,P.jsx)(`div`,{className:`absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#1178D4]/[0.05] blur-[120px] rounded-full`}),(0,P.jsx)(`div`,{className:`absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#6C63FF]/[0.05] blur-[120px] rounded-full`}),(0,P.jsxs)(`div`,{className:`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center`,children:[(0,P.jsx)(`div`,{className:`\r
      inline-flex items-center\r
      px-5 py-2\r
      rounded-full\r
      border border-[#D8E6FF]\r
      bg-[#F8FBFF]\r
      text-[#1178D4]\r
      text-sm font-semibold\r
      tracking-[0.22em]\r
      uppercase\r
      mb-8\r
      `,children:`Free Consultation`}),(0,P.jsx)(`h2`,{className:`\r
      text-[32px]\r
      sm:text-[45px]\r
      md:text-[60px]\r
      leading-[1.05]\r
      font-[800]\r
      text-[#071426]\r
      `,children:`Let’s Transform Your Business Workflow`}),(0,P.jsx)(`p`,{className:`\r
      mt-8\r
      text-[16px]\r
      md:text-[17px]\r
      leading-[1.9]\r
      text-[#5B6475]\r
      max-w-4xl\r
      mx-auto\r
      `,children:`Connect with our experts to discover the right Tally solutions, services, and automation tools tailored for your business growth.`}),(0,P.jsxs)(`div`,{className:`mt-14 flex flex-col sm:flex-row items-center justify-center gap-5`,children:[(0,P.jsx)(`a`,{href:`/contact`,children:(0,P.jsx)(`button`,{className:`\r
        w-full\r
        sm:w-auto\r
        px-6\r
        sm:px-10\r
        py-4\r
        sm:py-5\r
        rounded-2xl\r
        bg-gradient-to-r\r
        from-[#1178D4]\r
        to-[#6C63FF]\r
        text-white\r
        text-[17px]\r
        font-semibold\r
        shadow-[0_10px_40px_rgba(108,99,255,0.25)]\r
        transition-all duration-300\r
        hover:scale-[1.04]\r
        `,children:`Get Free Consultation`})}),(0,P.jsx)(`a`,{href:`tel:+919849431943`,children:(0,P.jsx)(`button`,{className:`\r
        px-10 py-5\r
        rounded-2xl\r
        border border-[#DDE7F5]\r
        bg-white\r
        text-[#071426]\r
        text-[17px]\r
        font-semibold\r
        transition-all duration-300\r
        hover:border-[#1178D4]\r
        hover:text-[#1178D4]\r
        hover:shadow-[0_10px_30px_rgba(17,120,212,0.08)]\r
        `,children:`Talk To Experts`})})]})]})]})]})}var Gv=()=>{let{slug:e}=ht(),t=Uv.find(t=>t.slug===e),[n,r]=(0,w.useState)(t?.subServices?.[0]||null);if((0,w.useEffect)(()=>{t?.subServices?.length>0&&r(t.subServices[0])},[e]),!t)return(0,P.jsx)(`div`,{className:`min-h-screen flex items-center justify-center text-2xl font-bold`,children:`Service Not Found`});let i=n?.icon;return(0,P.jsxs)(P.Fragment,{children:[t.hero&&(0,P.jsxs)(`section`,{className:`relative overflow-hidden bg-white`,children:[(0,P.jsx)(`div`,{className:`\r
          absolute\r
          top-0\r
          left-1/2\r
          -translate-x-1/2\r
          w-[400px]\r
          h-[400px]\r
          sm:w-[550px]\r
          sm:h-[550px]\r
          lg:w-[700px]\r
          lg:h-[700px]\r
          bg-gradient-to-r\r
          from-[#2F80FF]/10\r
          to-[#7B61FF]/10\r
          blur-3xl\r
          rounded-full\r
        `}),(0,P.jsxs)(`div`,{className:`absolute inset-0 overflow-hidden`,children:[(0,P.jsx)(`div`,{className:`\r
      absolute top-[-200px] left-[-150px]\r
      w-[420px] h-[420px]\r
      bg-[#1178D4]/10\r
      blur-[120px]\r
      rounded-full\r
    `}),(0,P.jsx)(`div`,{className:`\r
      absolute bottom-[-200px] right-[-150px]\r
      w-[420px] h-[420px]\r
      bg-[#6C63FF]/10\r
      blur-[120px]\r
      rounded-full\r
    `})]}),(0,P.jsxs)(`div`,{className:`\r
    relative z-10\r
    max-w-7xl mx-auto\r
    px-4 sm:px-6\r
    pt-24\r
    sm:pt-28\r
    lg:pt-32\r
    pb-16\r
    sm:pb-24\r
    text-center\r
  `,children:[(0,P.jsx)(`div`,{className:`\r
      inline-flex items-center\r
      px-4\r
      sm:px-5\r
      py-2\r
      rounded-full\r
      border border-[#DCEBFF]\r
      bg-[#F1F6FE]\r
      text-[#7B61FF]\r
      text-sm\r
      font-semibold\r
      tracking-[0.2em]\r
      uppercase\r
      mb-8\r
    `,children:t.hero.badge}),(0,P.jsxs)(`h1`,{className:`\r
      text-[34px]\r
      sm:text-[48px]\r
      lg:text-[60px]\r
      leading-[1]\r
      font-[800]\r
      text-[#071426]\r
      max-w-5xl\r
      mx-auto\r
    `,children:[t.hero.title,(0,P.jsx)(`span`,{className:`\r
                bg-gradient-to-r\r
                from-[#2F80FF]\r
                to-[#7B61FF]\r
                bg-clip-text\r
                text-transparent\r
              `,children:t.hero.highlight})]}),(0,P.jsx)(`p`,{className:`\r
      mt-8\r
      text-[15px]\r
      sm:text-[16px]\r
      md:text-[17px]\r
      leading-[1.9]\r
      text-[#475569]\r
      max-w-3xl\r
      mx-auto\r
    `,children:t.hero.description}),(0,P.jsx)(`div`,{className:`\r
      mt-10\r
      flex flex-col sm:flex-row\r
      items-center justify-center\r
      gap-5\r
    `,children:(0,P.jsx)(`a`,{href:t.hero.primaryLink,children:(0,P.jsx)(`button`,{className:`\r
        w-full\r
        sm:w-auto\r
        px-6\r
        sm:px-8\r
        py-4\r
        rounded-2xl\r
        bg-gradient-to-r\r
        from-[#1178D4]\r
        to-[#6C63FF]\r
        text-white\r
        font-semibold\r
        text-lg\r
        shadow-[0_10px_40px_rgba(17,120,212,0.20)]\r
        hover:scale-[1.03]\r
        transition-all duration-300\r
      `,children:t.hero.primaryBtn})})})]})]}),t.subServices&&(0,P.jsx)(`section`,{className:`py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white`,children:(0,P.jsxs)(`div`,{className:`max-w-7xl mx-auto`,children:[(0,P.jsxs)(`div`,{className:`text-center mb-14`,children:[(0,P.jsx)(`div`,{className:`\r
        inline-flex items-center\r
        px-5 py-2\r
        rounded-full\r
        bg-[#F1F6FE]\r
        border border-[#DCEBFF]\r
        text-[#1178D4]\r
        text-sm\r
        font-semibold\r
        tracking-[0.15em]\r
        uppercase\r
        mb-6\r
      `,children:`Explore Services`}),(0,P.jsx)(`h2`,{className:`\r
        text-[30px]\r
        sm:text-4xl\r
        lg:text-5xl\r
        font-bold\r
        text-[#071426]\r
        leading-tight\r
      `,children:`Business Solutions Tailored For You`})]}),(0,P.jsxs)(`div`,{className:`\r
        relative\r
        rounded-[24px]\r
        sm:rounded-[36px]\r
        border border-[#D9E3F0]\r
        bg-gradient-to-br\r
        from-white\r
        to-[#F8FBFF]\r
        overflow-hidden\r
\r
        shadow-[0_10px_40px_rgba(15,23,42,0.06)]\r
\r
        before:absolute\r
        before:inset-0\r
        before:rounded-[36px]\r
        before:border\r
        before:border-white/60\r
        before:pointer-events-none`,children:[(0,P.jsx)(`div`,{className:`\r
            absolute inset-0\r
            bg-[radial-gradient(circle_at_top_left,rgba(17,120,212,0.05),transparent_35%)]\r
            pointer-events-none\r
            `}),(0,P.jsxs)(`div`,{className:`flex flex-col lg:flex-row`,children:[(0,P.jsx)(`div`,{className:`\r
            lg:w-[300px]\r
            flex\r
            flex-col\r
            justify-center\r
            self-stretch\r
            border-b lg:border-b-0 lg:border-r\r
            border-[#E2E8F0]\r
            bg-[#F8FAFC]\r
            `,children:(0,P.jsx)(`div`,{className:`\r
            flex lg:flex-col\r
            gap-4\r
            overflow-x-auto\r
            p-4\r
            sm:p-6\r
            scrollbar-hide\r
            h-full\r
            `,children:t.subServices.map(e=>{let t=n?.id===e.id;return(0,P.jsx)(`button`,{onClick:()=>r(e),className:`
                    group
                    relative
                    px-5
                    sm:px-6
                    py-4
                    sm:py-5
                    rounded-2xl
                    text-left
                    border
                    whitespace-normal
                    break-words
                    transition-all duration-300
                    shrink-0

                    ${t?`bg-gradient-to-r from-[#1178D4] to-[#6C63FF] text-white border-transparent shadow-[0_10px_30px_rgba(17,120,212,0.20)]`:`bg-white border-[#E2E8F0] text-[#0F172A] hover:border-[#1178D4]/40 hover:bg-[#F8FBFF]`}
                  `,children:(0,P.jsxs)(`div`,{className:`\r
                    flex items-start justify-between\r
                    gap-4\r
                  `,children:[(0,P.jsx)(`span`,{className:`\r
                      font-semibold\r
                      text-[15px]\r
                      sm:text-base\r
                      leading-snug\r
                      pr-2\r
                    `,children:e.tab}),(0,P.jsx)(or,{className:`
                      w-5 h-5
                      transition-all duration-300

                      ${t?`text-white translate-x-1`:`text-[#94A3B8] group-hover:text-[#1178D4]`}
                    `})]})},e.id)})})}),(0,P.jsxs)(`div`,{className:`flex-1 relative overflow-hidden`,children:[(0,P.jsx)(`div`,{className:`\r
          absolute\r
          top-0\r
          left-1/2\r
          -translate-x-1/2\r
          w-[350px]\r
          h-[350px]\r
          sm:w-[500px]\r
          sm:h-[500px]\r
          lg:w-[700px]\r
          lg:h-[700px]\r
          bg-gradient-to-r\r
          from-[#2F80FF]/10\r
          to-[#7B61FF]/10\r
          blur-3xl\r
          rounded-full\r
        `}),(0,P.jsx)(`div`,{className:`\r
            absolute top-[-120px] right-[-120px]\r
            w-[320px] h-[320px]\r
            bg-[#1178D4]/10\r
            blur-[100px]\r
            rounded-full\r
            `}),(0,P.jsx)(`div`,{className:`\r
            absolute bottom-[-120px] left-[-120px]\r
            w-[320px] h-[320px]\r
            bg-[#6C63FF]/10\r
            blur-[100px]\r
            rounded-full\r
            `}),(0,P.jsx)($p,{mode:`wait`,children:(0,P.jsxs)($.div,{initial:{opacity:0,y:25},animate:{opacity:1,y:0},exit:{opacity:0,y:-25},transition:{duration:.35},className:`\r
                p-5\r
                sm:p-8\r
                md:p-12\r
                lg:p-16\r
              `,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-4 sm:gap-5`,children:[(0,P.jsx)(`div`,{className:`\r
                w-14 h-14\r
                sm:w-16 sm:h-16\r
                min-w-[56px]\r
                min-h-[56px]\r
                sm:min-w-[64px]\r
                sm:min-h-[64px]\r
                flex items-center justify-center\r
                rounded-2xl\r
                bg-gradient-to-br from-[#1178D4] to-[#6C63FF]\r
                shadow-[0_10px_30px_rgba(17,120,212,0.20)]\r
                shrink-0\r
              `,children:i&&(0,P.jsx)(i,{className:`w-8 h-8 text-white`})}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`p`,{className:`\r
                text-sm\r
                font-semibold\r
                tracking-[0.2em]\r
                uppercase\r
                text-[#1178D4]\r
                mb-2\r
                `,children:`Business Solution`}),(0,P.jsx)(`h3`,{className:`\r
                text-[24px]\r
                sm:text-2xl\r
                md:text-3xl\r
                font-bold\r
                text-[#071426]\r
                leading-tight\r
                `,children:n.title})]})]}),(0,P.jsx)(`p`,{className:`\r
                mt-6\r
                text-[15px]\r
                sm:text-lg\r
                leading-[1.9]\r
                text-[#475569]\r
                max-w-3xl\r
              `,children:n.description}),(0,P.jsx)(`div`,{className:`\r
                mt-10\r
                grid grid-cols-1 sm:grid-cols-2\r
                gap-x-10\r
                gap-y-6\r
                max-w-4xl\r
              `,children:n.points.map((e,t)=>(0,P.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,P.jsx)(`div`,{className:`\r
                      w-9 h-9\r
                      rounded-full\r
                      bg-[#F1F6FE]\r
                      flex items-center justify-center\r
                      shrink-0\r
                    `,children:(0,P.jsx)(_r,{className:`\r
                        w-4 h-4\r
                        text-[#1178D4]\r
                      `})}),(0,P.jsx)(`span`,{className:`\r
                      text-[#334155]\r
                      text-[15px]\r
                      sm:text-[17px]\r
                      leading-relaxed\r
                    `,children:e})]},t))})]},n.id)})]})]})]})]})}),t.cta&&(0,P.jsx)(`section`,{className:`py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-white`,children:(0,P.jsxs)(`div`,{className:`max-w-5xl mx-auto text-center`,children:[(0,P.jsx)(`div`,{className:`\r
              inline-flex items-center\r
              px-5 py-2\r
              rounded-full\r
              bg-[#F1F6FE]\r
              border border-[#DCEBFF]\r
              text-[#1178D4]\r
              text-sm\r
              font-semibold\r
              tracking-[0.15em]\r
              uppercase\r
              mb-8\r
            `,children:t.cta.badge}),(0,P.jsx)(`h2`,{className:`\r
              text-[30px]\r
              sm:text-5xl\r
              lg:text-6xl\r
              font-bold\r
              leading-tight\r
              text-[#071426]\r
            `,children:t.cta.title}),(0,P.jsx)(`p`,{className:`\r
              mt-8\r
              text-[15px]\r
              sm:text-lg\r
              md:text-xl\r
              leading-[1.9]\r
              text-[#64748B]\r
              max-w-3xl\r
              mx-auto\r
            `,children:t.cta.description}),(0,P.jsxs)(`div`,{className:`\r
              mt-10\r
              flex flex-col sm:flex-row\r
              items-center justify-center\r
              gap-5\r
            `,children:[(0,P.jsx)(Mn,{to:t.cta.primaryLink,children:(0,P.jsx)(`button`,{className:`\r
                w-full\r
                sm:w-auto\r
                px-6\r
                sm:px-8\r
                py-4\r
                rounded-2xl\r
                bg-gradient-to-r\r
                from-[#1178D4]\r
                to-[#6C63FF]\r
                text-white\r
                font-semibold\r
                text-lg\r
                shadow-[0_10px_40px_rgba(17,120,212,0.20)]\r
                hover:scale-[1.03]\r
                transition-all duration-300\r
              `,children:t.cta.primaryBtn})}),(0,P.jsx)(`a`,{href:t.cta.secondaryLink,children:(0,P.jsx)(`button`,{className:`\r
                w-full\r
                sm:w-auto\r
                px-6\r
                sm:px-8\r
                py-4\r
                rounded-2xl\r
                border border-[#CBD5E1]\r
                bg-white\r
                text-[#071426]\r
                font-semibold\r
                text-lg\r
                hover:border-[#1178D4]\r
                hover:text-[#1178D4]\r
                transition-all duration-300\r
              `,children:t.cta.secondaryBtn})})]})]})}),(0,P.jsx)(`button`,{className:`\r
        fixed bottom-6 right-6 z-50\r
        w-14 h-14\r
        sm:w-16 sm:h-16\r
        rounded-full\r
        bg-gradient-to-r\r
        from-[#1178D4]\r
        to-[#6C63FF]\r
        text-white\r
        shadow-[0_15px_50px_rgba(17,120,212,0.35)]\r
        flex items-center justify-center\r
        hover:scale-110\r
        transition-all duration-300\r
      `,children:(0,P.jsx)(ui,{className:`w-6 h-6 sm:w-7 sm:h-7`})})]})},Kv=`/Balaji-Infotech/assets/lmshero-Bd9EAadC.png`,qv=`/Balaji-Infotech/assets/basics-ChOuIBMf.png`,Jv=`/Balaji-Infotech/assets/gst-CwR4GFuj.png`,Yv=`/Balaji-Infotech/assets/inventory-DQLd9vdY.png`,Xv=`/Balaji-Infotech/assets/payroll-lGy70-lh.jpg`,Zv=`/Balaji-Infotech/assets/reports-BuKQqLAM.jpg`,Qv=`/Balaji-Infotech/assets/advanced-DodPshiB.jpg`;function $v(){let e=[{step:`01`,level:`Beginner`,title:`Basics & Ledgers`,description:`Learn company creation, ledgers, voucher entries, journals, and accounting fundamentals.`,time:`3–4 Hours`,image:qv},{step:`02`,level:`Intermediate`,title:`GST & Taxation`,description:`Master GST configuration, invoices, returns, debit notes, and compliance workflows.`,time:`6–8 Hours`,image:Jv},{step:`03`,level:`Intermediate`,title:`Inventory & Stock`,description:`Understand stock items, godowns, batching, reorder levels, and manufacturing basics.`,time:`4–6 Hours`,image:Yv},{step:`04`,level:`Advanced`,title:`Payroll Management`,description:`Learn employee setup, salary structures, PF/ESI deductions, and payroll processing.`,time:`5–7 Hours`,image:Xv},{step:`05`,level:`Advanced`,title:`Reports & MIS`,description:`Generate profit & loss reports, balance sheets, ratio analysis, and MIS dashboards.`,time:`4–5 Hours`,image:Zv},{step:`06`,level:`Expert`,title:`Advanced TallyPrime`,description:`Security controls, multi-company workflows, backup & restore, and advanced customization.`,time:`6–9 Hours`,image:Qv}],t=[{title:`GST Invoice Challenge`,description:`Create GST invoices, configure taxes, and manage debit/credit notes.`,time:`25 Minutes`,level:`Intermediate`},{title:`Payroll Workflow Setup`,description:`Configure employee salary structures and process payroll entries.`,time:`40 Minutes`,level:`Advanced`},{title:`Inventory Stock Transfer`,description:`Practice godown transfers, batching, and stock management workflows.`,time:`30 Minutes`,level:`Intermediate`}],n=[{title:`GST Cheat Sheet`,description:`Quick GST rates, shortcuts, filing process, and invoice formats.`,type:`PDF FILE`,icon:(0,P.jsx)(Nr,{className:`w-7 h-7`})},{title:`Sample Company Data`,description:`Practice with real-world TallyPrime business datasets and ledgers.`,type:`ZIP FILE`,icon:(0,P.jsx)(Tr,{className:`w-7 h-7`})},{title:`Payroll Templates`,description:`Ready-to-use employee salary structure and payroll templates.`,type:`XLS FILE`,icon:(0,P.jsx)(Mr,{className:`w-7 h-7`})},{title:`TallyPrime Notes`,description:`Detailed learning notes covering accounting, GST, and inventory.`,type:`DOC FILE`,icon:(0,P.jsx)(kr,{className:`w-7 h-7`})}];return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`section`,{className:`relative overflow-x-hidden pt-32 sm:pt-28 lg:pt-32 pb-14 sm:pb-20`,children:[(0,P.jsxs)(`div`,{className:`absolute inset-0`,children:[(0,P.jsx)(`img`,{src:Kv,alt:`LMS Hero`,className:`w-full h-full object-cover`}),(0,P.jsx)(`div`,{className:`absolute inset-0 bg-[#020817]/70`}),(0,P.jsx)(`div`,{className:`\r
      absolute inset-0\r
      bg-gradient-to-r\r
      from-[#020817]/80\r
      via-[#020817]/50\r
      to-[#020817]/35\r
    `})]}),(0,P.jsx)(`div`,{className:`\r
    absolute\r
    top-0 left-1/2\r
    -translate-x-1/2\r
    w-[400px] h-[400px]\r
    sm:w-[550px]\r
    sm:h-[550px]\r
    lg:w-[700px]\r
    lg:h-[700px]\r
    bg-[#3B82F6]/20\r
    blur-[160px]\r
    rounded-full\r
  `}),(0,P.jsx)(`div`,{className:`\r
    relative z-10\r
    max-w-7xl mx-auto\r
    px-4 sm:px-6\r
  `,children:(0,P.jsxs)(`div`,{className:`\r
      grid lg:grid-cols-2\r
      gap-10\r
      lg:gap-16\r
      items-center\r
    `,children:[(0,P.jsx)($.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:(0,P.jsxs)(`div`,{className:`min-w-0`,children:[(0,P.jsxs)(`div`,{className:`\r
          flex flex-wrap items-center justify-center sm:justify-start gap-2\r
          px-5 py-2\r
          rounded-full\r
          border border-white/15\r
          bg-white/10\r
          backdrop-blur-xl\r
          text-[#3B82F6]\r
          text-sm font-semibold\r
          mb-8\r
        `,children:[(0,P.jsx)(`span`,{children:`Certified`}),(0,P.jsx)(`span`,{children:`•`}),(0,P.jsx)(`span`,{children:`Hands-on`}),(0,P.jsx)(`span`,{children:`•`}),(0,P.jsx)(`span`,{children:`Job-ready`})]}),(0,P.jsxs)(`h1`,{className:`\r
            text-[26px]\r
            sm:text-5xl\r
            lg:text-6xl\r
            font-black\r
            font-semibold\r
            leading-[1.1]\r
            tracking-[-1px]\r
            text-white\r
            break-words\r
            max-w-full\r
\r
        `,children:[`Complete TallyPrime LMS —`,(0,P.jsx)(`span`,{className:`\r
            block\r
            mt-3\r
            leading-[1.15]\r
            break-words\r
            bg-gradient-to-r\r
            from-[#3B82F6]\r
            to-[#8B5CF6]\r
            bg-clip-text\r
            text-transparent\r
          `,children:`From Basics To Payroll & GST`})]}),(0,P.jsx)(`p`,{className:`\r
          mt-6 sm:mt-8\r
          text-[15px]\r
          sm:text-[16px]\r
          md:text-[17px]\r
          leading-8\r
          sm:leading-9\r
          text-white/70\r
          max-w-2xl\r
        `,children:`Structured curriculum, practical exercises, downloadable resources, and free trusted references to learn Tally ERP & TallyPrime fast.`}),(0,P.jsxs)(`div`,{className:`\r
          mt-8 sm:mt-10\r
          flex flex-col sm:flex-row\r
          items-stretch sm:items-center\r
          gap-4 sm:gap-5\r
          w-full\r
        `,children:[(0,P.jsxs)(`button`,{onClick:()=>window.open(`https://www.youtube.com/@balajiinfotechguntur7060`,`_blank`),className:`\r
            w-full\r
            sm:w-auto\r
            justify-center\r
            px-6\r
            sm:px-8\r
            py-4\r
            rounded-2xl\r
            bg-gradient-to-r\r
            from-[#2563EB]\r
            to-[#3B82F6]\r
            text-white\r
            font-semibold\r
            text-lg\r
            shadow-[0_20px_50px_rgba(37,99,235,0.35)]\r
            hover:scale-[1.03]\r
            transition-all duration-300\r
            flex items-center gap-3\r
          `,children:[(0,P.jsx)(di,{size:20,fill:`white`}),`Start Learning`]}),(0,P.jsxs)(`button`,{className:`\r
          w-full\r
          sm:w-auto\r
          justify-center\r
          px-6\r
          sm:px-8\r
          py-4\r
          rounded-2xl\r
          border border-white/15\r
          bg-white/10\r
          backdrop-blur-xl\r
          text-white\r
          font-semibold\r
          text-lg\r
          hover:bg-white/15\r
          transition-all duration-300\r
          flex items-center gap-3\r
        `,children:[(0,P.jsx)(Yr,{size:20}),`Free Resources`]})]})]})}),(0,P.jsx)($.div,{className:`\r
      relative\r
      flex justify-center lg:justify-end\r
      order-1 lg:order-2`,initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},transition:{duration:1,ease:`easeOut`,delay:`0.2`},viewport:{once:!0},children:(0,P.jsx)(`div`,{className:`relative mt-4 lg:mt-0`,children:(0,P.jsxs)(`div`,{className:`\r
          relative\r
          rounded-[24px]\r
          sm:rounded-[32px]\r
          border border-white/15\r
          bg-white/10\r
          backdrop-blur-2xl\r
          p-5\r
          sm:p-8\r
          md:p-10\r
          shadow-[0_25px_80px_rgba(0,0,0,0.45)]\r
        `,children:[(0,P.jsxs)(`div`,{className:`\r
            flex flex-col sm:flex-row\r
            items-start justify-between\r
            gap-5 sm:gap-6\r
          `,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`p`,{className:`\r
                text-sm\r
                font-semibold\r
                uppercase\r
                tracking-[2px]\r
                text-[#3B82F6]\r
              `,children:`Course Snapshot`}),(0,P.jsxs)(`h3`,{className:`\r
                mt-3\r
                text-[26px]\r
                sm:text-3xl\r
                font-black\r
                text-white\r
                leading-tight\r
              `,children:[`TallyPrime`,(0,P.jsx)(`span`,{className:`text-[#3B82F6]`,children:` • GST • `}),`Payroll`]})]}),(0,P.jsxs)(`div`,{className:`\r
            w-full sm:w-auto\r
              px-3\r
              sm:px-4\r
              py-3\r
              rounded-2xl\r
              bg-white/10\r
              border border-white/10\r
              text-center\r
            `,children:[(0,P.jsx)(`p`,{className:`text-xs text-white/60`,children:`Level`}),(0,P.jsxs)(`h4`,{className:`\r
                mt-1\r
                text-base sm:text-lg\r
                break-words\r
                font-bold\r
                text-white\r
              `,children:[`Beginner →`,(0,P.jsx)(`span`,{className:`text-[#3B82F6]`,children:`Advanced`})]})]})]}),(0,P.jsx)(`div`,{className:`\r
            h-px\r
            bg-white/10\r
            my-8\r
          `}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`p`,{className:`\r
              text-sm\r
              text-white/60\r
              mb-5\r
            `,children:`Core Topics`}),(0,P.jsx)(`div`,{className:`\r
              flex flex-wrap\r
              gap-3\r
            `,children:[`Accounting`,`GST`,`Inventory`,`Payroll`,`Banking`,`Reports`].map((e,t)=>(0,P.jsx)(`div`,{className:`\r
                    px-4 py-2\r
                    rounded-full\r
                    bg-white/10\r
                    border border-white/10\r
                    text-white\r
                    text-sm\r
                    font-medium\r
                  `,children:e},t))})]}),(0,P.jsx)(`div`,{className:`\r
            mt-10\r
            grid grid-cols-1\r
            sm:grid-cols-3\r
            gap-4\r
          `,children:[{number:`40+`,label:`Modules`},{number:`120+`,label:`Videos`},{number:`25+`,label:`Assignments`}].map((e,t)=>(0,P.jsxs)(`div`,{className:`\r
                  rounded-2xl\r
                  border border-white/10\r
                  bg-white/5\r
                  p-4\r
                  sm:p-5\r
                  text-center\r
                `,children:[(0,P.jsx)(`h4`,{className:`\r
                  text-2xl\r
                  font-black\r
                  text-white\r
                `,children:e.number}),(0,P.jsx)(`p`,{className:`\r
                  mt-1\r
                  text-sm\r
                  text-white/60\r
                `,children:e.label})]},t))}),(0,P.jsxs)(`div`,{className:`\r
            mt-10\r
            flex flex-wrap\r
            gap-4\r
          `,children:[(0,P.jsxs)(`button`,{onClick:()=>window.open(`https://tallysolutions.com/`,`_blank`),className:`\r
              px-5 py-3\r
              rounded-2xl\r
              bg-gradient-to-r\r
              from-[#2563EB]\r
              to-[#7C3AED]\r
              text-white\r
              font-semibold\r
              flex items-center gap-3\r
            `,children:[(0,P.jsx)(ur,{size:18}),`TallyOfficial`]}),(0,P.jsxs)(`button`,{onClick:()=>window.open(`https://www.youtube.com/@balajiinfotechguntur7060`,`_blank`),className:`\r
              px-5 py-3\r
              rounded-2xl\r
              bg-white/10\r
              border border-white/10\r
              text-white\r
              font-semibold\r
              flex items-center gap-3\r
            `,children:[(0,P.jsx)(ta,{size:18}),`YouTube Tutorials`]})]})]})})})]})})]}),(0,P.jsxs)(`section`,{className:`relative py-14 sm:py-16 md:py-20 overflow-hidden bg-[#F8FAFC]`,children:[(0,P.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full`}),(0,P.jsxs)(`div`,{className:`relative max-w-7xl mx-auto px-4 sm:px-6`,children:[(0,P.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-20`,children:[(0,P.jsxs)(`div`,{className:`\r
        inline-flex items-center gap-2\r
        px-5 py-2\r
        rounded-full\r
        border border-[#CBD5E1]\r
        bg-white\r
        text-[#2563EB]\r
        text-sm font-semibold\r
        shadow-sm\r
      `,children:[(0,P.jsx)(Ei,{className:`w-4 h-4`}),`Interactive Learning Journey`]}),(0,P.jsxs)(`h2`,{className:`\r
        mt-6\r
        text-[30px]\r
        sm:text-4xl\r
        md:text-5xl\r
        font-black\r
        tracking-tight\r
        text-[#0F172A]\r
        leading-tight\r
      `,children:[`Master TallyPrime`,` `,(0,P.jsx)(`span`,{className:`bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent`,children:`Step By Step`})]}),(0,P.jsx)(`p`,{className:`\r
        mt-6\r
        text-[15px]\r
        sm:text-[16px]\r
        md:text-[17px]\r
        text-[#64748B]\r
        leading-8\r
      `,children:`A structured roadmap designed to take you from accounting fundamentals to advanced GST, payroll, inventory, and reporting workflows.`})]}),(0,P.jsx)(`div`,{className:`relative grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`,children:e.map((e,t)=>(0,P.jsxs)(`div`,{className:`\r
            group\r
            relative\r
            rounded-[24px]\r
            sm:rounded-[30px]\r
            border border-[#E2E8F0]\r
            bg-white/70\r
            backdrop-blur-xl\r
            overflow-hidden\r
            shadow-[0_10px_40px_rgba(15,23,42,0.05)]\r
            hover:-translate-y-2\r
            hover:shadow-[0_25px_70px_rgba(37,99,235,0.15)]\r
            transition-all duration-500\r
          `,children:[(0,P.jsx)(`div`,{className:`\r
            absolute top-0 left-0\r
            h-1.5 w-full\r
            bg-gradient-to-r from-[#2563EB] to-[#7C3AED]\r
            scale-x-0\r
            group-hover:scale-x-100\r
            origin-left\r
            transition-transform duration-500\r
          `}),(0,P.jsx)(`div`,{className:`\r
            absolute top-5 right-5\r
            text-5xl\r
            font-black\r
            text-[#E2E8F0]\r
            select-none\r
          `,children:e.step}),(0,P.jsxs)(`div`,{className:`relative h-[200px] sm:h-[220px] overflow-hidden`,children:[(0,P.jsx)(`img`,{src:e.image,alt:e.title,className:`\r
                w-full h-full\r
                object-cover\r
                group-hover:scale-110\r
                transition-transform duration-700\r
              `}),(0,P.jsx)(`div`,{className:`\r
              absolute inset-0\r
              bg-gradient-to-t\r
              from-black/60\r
              via-black/10\r
              to-transparent\r
            `}),(0,P.jsx)(`div`,{className:`\r
              absolute top-5 left-5\r
              px-4 py-2\r
              rounded-full\r
              bg-white/20\r
              backdrop-blur-md\r
              border border-white/20\r
              text-white\r
              text-sm\r
              font-semibold\r
            `,children:e.level})]}),(0,P.jsxs)(`div`,{className:`p-5 sm:p-7`,children:[(0,P.jsx)(`h3`,{className:`\r
              text-[22px]\r
              sm:text-2xl\r
              font-black\r
              text-[#0F172A]\r
              leading-snug\r
            `,children:e.title}),(0,P.jsx)(`p`,{className:`\r
              mt-4\r
              text-[#64748B]\r
              leading-7\r
            `,children:e.description}),(0,P.jsxs)(`div`,{className:`\r
              mt-7\r
              flex flex-wrap gap-3\r
            `,children:[(0,P.jsxs)(`div`,{className:`\r
                flex items-center gap-2\r
                px-4 py-2\r
                rounded-full\r
                bg-[#EFF6FF]\r
                text-[#2563EB]\r
                text-sm\r
                font-semibold\r
              `,children:[(0,P.jsx)(br,{className:`w-4 h-4`}),e.time]}),(0,P.jsxs)(`div`,{className:`\r
                flex items-center gap-2\r
                px-4 py-2\r
                rounded-full\r
                bg-[#F5F3FF]\r
                text-[#7C3AED]\r
                text-sm\r
                font-semibold\r
              `,children:[(0,P.jsx)(Fr,{className:`w-4 h-4`}),`Hands-on Labs`]})]}),(0,P.jsxs)(`button`,{className:`\r
              mt-8\r
              flex items-center gap-2\r
              text-[#2563EB]\r
              font-bold\r
              group-hover:gap-4\r
              transition-all duration-300\r
            `,children:[`Start Module`,(0,P.jsx)(or,{className:`w-5 h-5`})]})]})]},t))})]})]}),(0,P.jsxs)(`section`,{className:`relative py-14 sm:py-16 md:py-20 bg-[#F8FAFC] overflow-hidden`,children:[(0,P.jsx)(`div`,{className:`absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full`}),(0,P.jsx)(`div`,{className:`absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 blur-[120px] rounded-full`}),(0,P.jsxs)(`div`,{className:`relative max-w-7xl mx-auto px-4 sm:px-6`,children:[(0,P.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-20`,children:[(0,P.jsxs)(`div`,{className:`\r
        inline-flex items-center gap-2\r
        px-5 py-2\r
        rounded-full\r
        border border-[#CBD5E1]\r
        bg-white\r
        text-[#2563EB]\r
        text-sm font-semibold\r
        shadow-sm\r
      `,children:[(0,P.jsx)(Ei,{className:`w-4 h-4`}),`Interactive LMS Resources`]}),(0,P.jsxs)(`h2`,{className:`\r
        mt-6\r
        text-3xl md:text-5xl\r
        font-black\r
        tracking-tight\r
        text-[#0F172A]\r
        leading-tight\r
      `,children:[`Practice, Download &`,(0,P.jsxs)(`span`,{className:`bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent`,children:[` `,`Master Faster`]})]}),(0,P.jsx)(`p`,{className:`\r
        mt-6\r
        text-[16px] md:text-[17px]\r
        text-[#64748B]\r
        leading-8\r
      `,children:`Strengthen your learning with practical exercises, downloadable resources, templates, and real-world accounting scenarios.`})]}),(0,P.jsxs)(`div`,{className:`grid lg:grid-cols-2 gap-8 lg:gap-10`,children:[(0,P.jsxs)(`div`,{className:`\r
        rounded-[28px]\r
        border border-[#E2E8F0]\r
        bg-white/70\r
        backdrop-blur-xl\r
        p-5\r
        sm:p-8\r
        md:p-10\r
        shadow-[0_20px_60px_rgba(15,23,42,0.05)]\r
      `,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between mb-10`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{className:`\r
              text-2xl\r
              sm:text-3xl\r
              font-black\r
              text-[#0F172A]\r
            `,children:`Practice Exercises`}),(0,P.jsx)(`p`,{className:`\r
              mt-3\r
              text-[#64748B]\r
              leading-7\r
            `,children:`Real business accounting scenarios designed to improve practical TallyPrime skills.`})]}),(0,P.jsx)(`div`,{className:`\r
              hidden md:flex\r
              items-center justify-center\r
              w-14 h-14\r
              rounded-2xl\r
              bg-gradient-to-br from-[#2563EB] to-[#7C3AED]\r
              shadow-lg shadow-blue-500/20\r
            `,children:(0,P.jsx)(si,{className:`w-7 h-7 text-white stroke-[2.5]`})})]}),(0,P.jsx)(`div`,{className:`space-y-5`,children:t.map((e,t)=>(0,P.jsxs)(`div`,{className:`\r
                group\r
                flex flex-col md:flex-row md:items-center md:justify-between\r
                gap-6\r
                rounded-[24px]\r
                border border-[#E2E8F0]\r
                bg-white\r
                p-5\r
                sm:p-6\r
                hover:-translate-y-1\r
                hover:shadow-[0_20px_50px_rgba(37,99,235,0.10)]\r
                transition-all duration-300\r
              `,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h4`,{className:`\r
                  text-xl\r
                  font-black\r
                  text-[#0F172A]\r
                `,children:e.title}),(0,P.jsx)(`p`,{className:`\r
                  mt-2\r
                  text-[#64748B]\r
                  leading-7\r
                `,children:e.description}),(0,P.jsxs)(`div`,{className:`flex flex-wrap gap-3 mt-5`,children:[(0,P.jsxs)(`div`,{className:`\r
                    flex items-center gap-2\r
                    px-4 py-2\r
                    rounded-full\r
                    bg-[#EFF6FF]\r
                    text-[#2563EB]\r
                    text-sm font-semibold\r
                  `,children:[(0,P.jsx)(br,{className:`w-4 h-4`}),e.time]}),(0,P.jsxs)(`div`,{className:`\r
                    flex items-center gap-2\r
                    px-4 py-2\r
                    rounded-full\r
                    bg-[#F5F3FF]\r
                    text-[#7C3AED]\r
                    text-sm font-semibold\r
                  `,children:[(0,P.jsx)(Fr,{className:`w-4 h-4`}),e.level]})]})]}),(0,P.jsxs)(`button`,{className:`\r
                shrink-0\r
                flex items-center justify-center gap-2\r
                px-6 py-4\r
                rounded-2xl\r
                bg-gradient-to-r from-[#2563EB] to-[#7C3AED]\r
                text-white\r
                font-semibold\r
                shadow-lg shadow-blue-500/20\r
                hover:scale-105\r
                transition-all duration-300\r
              `,children:[`Start`,(0,P.jsx)(or,{className:`w-5 h-5`})]})]},t))})]}),(0,P.jsxs)(`div`,{className:`\r
        rounded-[32px]\r
        border border-[#E2E8F0]\r
        bg-white/70\r
        backdrop-blur-xl\r
        p-8 md:p-10\r
        shadow-[0_20px_60px_rgba(15,23,42,0.05)]\r
      `,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between mb-10`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{className:`\r
              text-3xl\r
              font-black\r
              text-[#0F172A]\r
            `,children:`Download Center`}),(0,P.jsx)(`p`,{className:`\r
              mt-3\r
              text-[#64748B]\r
              leading-7\r
            `,children:`Access cheat sheets, sample company data, GST templates, and learning resources.`})]}),(0,P.jsx)(`div`,{className:`\r
            hidden md:flex\r
            items-center justify-center\r
            w-14 h-14\r
            rounded-2xl\r
            bg-gradient-to-br from-[#2563EB] to-[#7C3AED]\r
            shadow-lg shadow-blue-500/20\r
          `,children:(0,P.jsx)(Ir,{className:`w-7 h-7 text-white stroke-[2.5]`})})]}),(0,P.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-5`,children:n.map((e,t)=>(0,P.jsxs)(`div`,{className:`\r
                group\r
                rounded-[20px]\r
                sm:rounded-[24px]\r
                border border-[#E2E8F0]\r
                bg-white\r
                p-6\r
                hover:-translate-y-1\r
                hover:shadow-[0_20px_50px_rgba(37,99,235,0.10)]\r
                transition-all duration-300\r
              `,children:[(0,P.jsx)(`div`,{className:`\r
                flex items-center justify-center\r
                w-14 h-14\r
                rounded-2xl\r
                bg-gradient-to-br from-[#2563EB] to-[#7C3AED]\r
                text-white\r
                shadow-lg\r
              `,children:e.icon}),(0,P.jsx)(`h4`,{className:`\r
                mt-6\r
                text-xl\r
                font-black\r
                text-[#0F172A]\r
              `,children:e.title}),(0,P.jsx)(`p`,{className:`\r
                mt-3\r
                text-[#64748B]\r
                leading-7\r
              `,children:e.description}),(0,P.jsxs)(`div`,{className:`\r
                mt-6\r
                flex items-center justify-between\r
              `,children:[(0,P.jsx)(`span`,{className:`\r
                  text-sm\r
                  font-semibold\r
                  text-[#2563EB]\r
                `,children:e.type}),(0,P.jsxs)(`button`,{className:`\r
                  flex items-center gap-2\r
                  text-[#7C3AED]\r
                  font-bold\r
                  hover:gap-3\r
                  transition-all duration-300\r
                `,children:[`Download`,(0,P.jsx)(Dr,{className:`w-4 h-4`})]})]})]},t))})]})]})]})]}),(0,P.jsx)(`section`,{className:`py-14 sm:py-20 px-4 sm:px-6 bg-[#F8FAFC]`,children:(0,P.jsxs)(`div`,{className:`max-w-7xl mx-auto`,children:[(0,P.jsxs)(`div`,{className:`max-w-3xl mb-14`,children:[(0,P.jsx)(`span`,{className:`\r
        inline-flex items-center gap-2\r
        px-4 py-2\r
        rounded-full\r
        border border-[#CBD5E1]\r
        bg-white\r
        text-sm font-semibold\r
        text-[#2563EB]\r
      `,children:`Learning Resources`}),(0,P.jsxs)(`h2`,{className:`\r
        mt-6\r
        text-[30px] sm:text-4xl\r
        font-black\r
        leading-tight\r
        text-[#0F172A]\r
      `,children:[`Explore Learning`,(0,P.jsxs)(`span`,{className:`bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent`,children:[` `,`Platforms & Tools`]})]}),(0,P.jsx)(`p`,{className:`\r
        mt-5\r
        text-[16px] md:text-[17px]\r
        leading-8\r
        text-[#64748B]\r
      `,children:`Access curated resources, practice environments, video tutorials, cheat sheets, and external learning platforms to accelerate your TallyPrime mastery.`})]}),(0,P.jsxs)(`div`,{className:`\r
      grid grid-cols-1\r
      lg:grid-cols-4\r
      gap-6\r
    `,children:[(0,P.jsxs)(`div`,{className:`\r
        lg:col-span-2\r
        lg:row-span-2\r
        rounded-[32px]\r
        overflow-hidden\r
        relative\r
        bg-gradient-to-br from-[#0F172A] to-[#1E293B]\r
        p-6\r
        sm:p-10\r
        min-h-[420px]\r
        sm:min-h-[520px]\r
        group\r
      `,children:[(0,P.jsx)(`div`,{className:`\r
          absolute inset-0\r
          opacity-20\r
          bg-[radial-gradient(circle_at_top_right,#3B82F6,transparent_40%)]\r
        `}),(0,P.jsxs)(`div`,{className:`relative z-10`,children:[(0,P.jsx)(`div`,{className:`\r
            w-16 h-16\r
            rounded-2xl\r
            bg-white/10\r
            backdrop-blur-md\r
            flex items-center justify-center\r
          `,children:(0,P.jsx)(ai,{className:`w-8 h-8 text-white`})}),(0,P.jsx)(`h3`,{className:`\r
            mt-8\r
            text-2xl\r
            sm:text-3xl\r
            font-black\r
            text-white\r
          `,children:`TallyPrime Video Learning Hub`}),(0,P.jsx)(`p`,{className:`\r
            mt-5\r
            text-[16px] md:text-[17px]\r
            leading-8\r
            text-white/70\r
            max-w-xl\r
          `,children:`Step-by-step visual walkthroughs covering accounting workflows, GST filing, inventory, payroll, banking, and business reporting.`}),(0,P.jsx)(`div`,{className:`\r
            mt-10\r
            flex flex-wrap gap-3\r
          `,children:[`GST Tutorials`,`Payroll Setup`,`Inventory`,`Advanced Reports`].map((e,t)=>(0,P.jsx)(`div`,{className:`\r
                  px-4 py-2\r
                  rounded-full\r
                  bg-white/10\r
                  border border-white/10\r
                  text-sm\r
                  font-medium\r
                  text-white\r
                `,children:e},t))}),(0,P.jsxs)(`button`,{onClick:()=>window.open(`https://www.youtube.com/@balajiinfotechguntur7060`,`_blank`),className:`\r
            mt-10\r
            inline-flex items-center gap-3\r
            px-7 py-4\r
            rounded-2xl\r
            bg-white\r
            text-[#0F172A]\r
            font-bold\r
            hover:scale-[1.03]\r
            transition-all duration-300\r
          `,children:[`Start Watching`,(0,P.jsx)(or,{className:`w-5 h-5`})]})]})]}),(0,P.jsxs)(`div`,{className:`\r
        rounded-[28px]\r
        border border-[#E2E8F0]\r
        bg-white\r
        p-6\r
        sm:p-8\r
        group\r
        hover:-translate-y-2\r
        transition-all duration-500\r
      `,children:[(0,P.jsx)(`div`,{className:`\r
          w-14 h-14\r
          rounded-2xl\r
          bg-gradient-to-br from-[#2563EB] to-[#7C3AED]\r
          flex items-center justify-center\r
        `,children:(0,P.jsx)(Mr,{className:`w-7 h-7 text-white`})}),(0,P.jsx)(`h3`,{className:`\r
          mt-6\r
          text-2xl\r
          font-black\r
          text-[#0F172A]\r
        `,children:`GST Cheat Sheets`}),(0,P.jsx)(`p`,{className:`\r
          mt-4\r
          text-[#64748B]\r
          leading-7\r
        `,children:`Download quick GST references, invoice formats, tax rates, and filing shortcuts.`})]}),(0,P.jsxs)(`div`,{className:`\r
        rounded-[28px]\r
        border border-[#E2E8F0]\r
        bg-white\r
        p-6 sm:p-8\r
        group\r
        hover:-translate-y-2\r
        transition-all duration-500\r
      `,children:[(0,P.jsx)(`div`,{className:`\r
          w-14 h-14\r
          rounded-2xl\r
          bg-gradient-to-br from-[#2563EB] to-[#7C3AED]\r
          flex items-center justify-center\r
        `,children:(0,P.jsx)(Tr,{className:`w-7 h-7 text-white`})}),(0,P.jsx)(`h3`,{className:`\r
          mt-6\r
          text-2xl\r
          font-black\r
          text-[#0F172A]\r
        `,children:`Sample Company Data`}),(0,P.jsx)(`p`,{className:`\r
          mt-4\r
          text-[#64748B]\r
          leading-7\r
        `,children:`Practice real accounting scenarios using prebuilt TallyPrime datasets.`})]}),(0,P.jsxs)(`div`,{className:`\r
        lg:col-span-2\r
        rounded-[28px]\r
        border border-[#E2E8F0]\r
        bg-white\r
        p-8\r
        flex flex-col md:flex-row\r
        items-start md:items-center\r
        justify-between\r
        gap-8\r
      `,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{className:`\r
            w-14 h-14\r
            rounded-2xl\r
            bg-gradient-to-br from-[#2563EB] to-[#7C3AED]\r
            flex items-center justify-center\r
          `,children:(0,P.jsx)(zr,{className:`w-7 h-7 text-white`})}),(0,P.jsx)(`h3`,{className:`\r
            mt-6\r
            text-2xl\r
            sm:text-3xl\r
            font-black\r
            text-[#0F172A]\r
          `,children:`External Learning Platforms`}),(0,P.jsx)(`p`,{className:`\r
            mt-4\r
            text-[#64748B]\r
            leading-7\r
            max-w-2xl\r
          `,children:`Access official Tally resources, certification guides, community forums, and advanced business workflows.`})]}),(0,P.jsx)(`button`,{className:`\r
          px-6 py-4\r
          rounded-2xl\r
          bg-gradient-to-r from-[#2563EB] to-[#7C3AED]\r
          text-white\r
          font-bold\r
          whitespace-nowrap\r
        `,children:`Explore Resources`})]})]})]})}),(0,P.jsx)(`section`,{className:`py-14 sm:py-20 px-4 sm:px-6 bg-white`,children:(0,P.jsxs)(`div`,{className:`max-w-5xl mx-auto`,children:[(0,P.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto`,children:[(0,P.jsx)(`span`,{className:`\r
        inline-flex items-center gap-2\r
        px-4 py-2\r
        rounded-full\r
        border border-[#CBD5E1]\r
        bg-[#F8FAFC]\r
        text-sm font-semibold\r
        text-[#2563EB]\r
      `,children:`Learning Support`}),(0,P.jsxs)(`h2`,{className:`\r
        mt-6\r
        text-[30px]\r
        sm:text-4xl\r
        font-black\r
        leading-tight\r
        text-[#0F172A]\r
      `,children:[`Quick`,(0,P.jsxs)(`span`,{className:`bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent`,children:[` `,`Questions`]})]}),(0,P.jsx)(`p`,{className:`\r
        mt-5\r
        text-[16px] md:text-[17px]\r
        leading-8\r
        text-[#64748B]\r
      `,children:`Everything you need to know about the LMS, learning roadmap, exercises, downloads, and certification support.`})]}),(0,P.jsx)(`div`,{className:`mt-16 space-y-5`,children:[{question:`Do I need accounting knowledge before starting?`,answer:`No. The LMS roadmap starts from absolute basics including company creation, ledgers, vouchers, and accounting workflows.`},{question:`Will I get practice exercises and sample company data?`,answer:`Yes. Every major module includes practical exercises, downloadable datasets, GST templates, and workflow simulations.`},{question:`Can I learn GST, payroll, and inventory together?`,answer:`Absolutely. The roadmap is designed as a complete business accounting workflow covering GST, payroll, banking, inventory, and reports.`},{question:`Is this suitable for job preparation?`,answer:`Yes. The LMS includes real-world accounting scenarios, hands-on labs, invoice exercises, and business reporting workflows used in companies.`},{question:`Do you provide certification guidance?`,answer:`Yes. We help learners prepare for Tally certifications and provide guidance for practical business accounting implementation.`}].map((e,t)=>(0,P.jsxs)(`details`,{className:`\r
            group\r
            rounded-[28px]\r
            border border-[#E2E8F0]\r
            bg-[#F8FAFC]/70\r
            backdrop-blur-xl\r
            p-5 sm:p-7 md:p-8\r
            hover:border-[#CBD5E1]\r
            hover:shadow-[0_15px_50px_rgba(37,99,235,0.08)]\r
            transition-all duration-500\r
          `,children:[(0,P.jsxs)(`summary`,{className:`\r
            flex items-center justify-between\r
            cursor-pointer\r
            list-none\r
          `,children:[(0,P.jsx)(`h3`,{className:`\r
              text-[15px] sm:text-base md:text-lg\r
              font-bold\r
              text-[#0F172A]\r
              pr-8\r
            `,children:e.question}),(0,P.jsx)(`div`,{className:`\r
              flex items-center justify-center\r
              w-11 h-11\r
              rounded-2xl\r
              bg-gradient-to-br from-[#2563EB] to-[#7C3AED]\r
              text-white\r
              shrink-0\r
              transition-transform duration-500\r
              group-open:rotate-45\r
            `,children:(0,P.jsx)(fi,{className:`w-5 h-5`})})]}),(0,P.jsx)(`div`,{className:`\r
            overflow-hidden\r
            transition-all duration-500\r
          `,children:(0,P.jsx)(`p`,{className:`\r
              pt-6\r
              text-[#64748B]\r
              leading-8\r
              text-[15px]\r
              sm:text-[16px]\r
              md:text-[17px]\r
              max-w-4xl\r
            `,children:e.answer})})]},t))})]})})]})}var ey=`/Balaji-Infotech/assets/contact-hero-Dk74wo4A.png`;function ty(){let e=ut();return(0,w.useEffect)(()=>{if(e.hash){let t=document.querySelector(e.hash);t&&t.scrollIntoView({behavior:`smooth`})}},[e]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`section`,{className:`\r
    relative\r
    overflow-hidden\r
    pt-32 sm:pt-36 md:pt-36\r
    pb-14 sm:pb-16 md:pb-24\r
    bg-white\r
  `,children:[(0,P.jsx)(`div`,{className:`\r
      absolute inset-0\r
      bg-[radial-gradient(circle_at_top_right,rgba(17,120,212,0.08),transparent_35%)]\r
    `}),(0,P.jsxs)(`div`,{className:`\r
      relative\r
      max-w-7xl mx-auto\r
      px-4 sm:px-6\r
      grid lg:grid-cols-2\r
      gap-10 sm:gap-14 lg:gap-20\r
      items-center\r
    `,children:[(0,P.jsxs)($.div,{initial:{opacity:0,x:-80},whileInView:{opacity:1,x:0},transition:{duration:.8,ease:`easeOut`},viewport:{once:!0},children:[(0,P.jsxs)(`div`,{className:`\r
          inline-flex items-center\r
          gap-2\r
          px-4 py-2\r
          rounded-full\r
          border border-[#1178D4]/15\r
          bg-[#F8FBFF]\r
          mb-6\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
            w-2 h-2\r
            rounded-full\r
            bg-[#1178D4]\r
          `}),(0,P.jsx)(`span`,{className:`\r
            text-sm font-semibold\r
            tracking-wide\r
            text-[#1178D4]\r
            uppercase\r
          `,children:`Get In Touch`})]}),(0,P.jsxs)(`h1`,{className:`\r
          text-[32px]\r
          sm:text-4xl\r
          lg:text-5xl\r
          font-black\r
          leading-[1.05]\r
          tracking-[-0.03em]\r
          text-[#0F172A]\r
        `,children:[`Let’s Build`,(0,P.jsx)(`br`,{}),(0,P.jsx)(`span`,{className:`\r
            bg-gradient-to-r\r
            from-[#1178D4]\r
            to-[#6C63FF]\r
            bg-clip-text\r
            text-transparent\r
          `,children:`Better Business`}),(0,P.jsx)(`br`,{}),`Solutions Together`]}),(0,P.jsx)(`p`,{className:`\r
          mt-6 sm:mt-8\r
          text-[15px] sm:text-[16px] md:text-[17px]\r
          leading-8 sm:leading-9\r
          text-[#475569]\r
          max-w-2xl\r
        `,children:`Whether you need Tally solutions, professional training, cloud services, or business automation support, our experts are ready to help your business grow smarter and faster.`}),(0,P.jsxs)(`div`,{className:`\r
          flex flex-col sm:flex-row sm:flex-wrap\r
          gap-4\r
          mt-8 sm:mt-10\r
        `,children:[(0,P.jsxs)(`div`,{className:`\r
          w-full sm:w-auto\r
            flex items-center\r
            gap-3\r
            px-5 py-3\r
            rounded-2xl\r
            border border-[#E2E8F0]\r
            bg-white\r
            shadow-[0_10px_30px_rgba(15,23,42,0.04)]\r
          `,children:[(0,P.jsx)(Qr,{className:`w-5 h-5 text-[#1178D4]`}),(0,P.jsx)(`span`,{className:`\r
              text-sm md:text-base\r
              font-medium\r
              text-[#334155]\r
            `,children:`Guntur, Andhra Pradesh`})]}),(0,P.jsxs)(`div`,{className:`w-full sm:w-auto\r
            flex items-center\r
            gap-3\r
            px-5 py-3\r
            rounded-2xl\r
            border border-[#E2E8F0]\r
            bg-white\r
            shadow-[0_10px_30px_rgba(15,23,42,0.04)]\r
          `,children:[(0,P.jsx)(ui,{className:`w-5 h-5 text-[#1178D4]`}),(0,P.jsx)(`span`,{className:`\r
              text-sm md:text-base\r
              font-medium\r
              text-[#334155]\r
            `,children:`+91 9849431943`})]}),(0,P.jsxs)(`div`,{className:`w-full sm:w-auto\r
            flex items-center\r
            gap-3\r
            px-5 py-3\r
            rounded-2xl\r
            border border-[#E2E8F0]\r
            bg-white\r
            shadow-[0_10px_30px_rgba(15,23,42,0.04)]\r
          `,children:[(0,P.jsx)(Zr,{className:`w-5 h-5 text-[#1178D4]`}),(0,P.jsx)(`span`,{className:`\r
              text-sm md:text-base\r
              font-medium\r
              text-[#334155]\r
            `,children:`gunturtally@gmail.com`})]})]}),(0,P.jsxs)(`div`,{className:`\r
          flex flex-col sm:flex-row\r
          items-stretch sm:items-center\r
          gap-4 sm:gap-5\r
          mt-10 sm:mt-12\r
        `,children:[(0,P.jsx)(`a`,{href:`#contact-form`,children:(0,P.jsxs)(`button`,{className:`w-full sm:w-auto\r
            group\r
            inline-flex items-center justify-center\r
            gap-3\r
            px-8 py-5\r
            rounded-2xl\r
            bg-gradient-to-r\r
            from-[#1178D4]\r
            to-[#6C63FF]\r
            text-white\r
            font-semibold\r
            text-lg\r
            shadow-[0_20px_50px_rgba(17,120,212,0.20)]\r
            hover:scale-[1.02]\r
            transition-all duration-300\r
          `,children:[`Request A Quote`,(0,P.jsx)(or,{className:`\r
              w-5 h-5\r
              transition-transform duration-300\r
              group-hover:translate-x-1\r
            `})]})}),(0,P.jsx)(`a`,{href:`tel:91 9849431943`,children:(0,P.jsxs)(`button`,{className:`w-full sm:w-auto\r
            inline-flex items-center justify-center\r
            gap-3\r
            px-8 py-5\r
            rounded-2xl\r
            border border-[#DCE3EE]\r
            bg-white\r
            text-[#0F172A]\r
            font-semibold\r
            text-lg\r
            hover:border-[#1178D4]/30\r
            hover:bg-[#F8FBFF]\r
            transition-all duration-300\r
          `,children:[(0,P.jsx)(ui,{className:`w-5 h-5 text-[#1178D4]`}),`Call Our Team`]})})]})]}),(0,P.jsx)($.div,{className:`relative\r
      flex justify-center lg:justify-end\r
      order-1 lg:order-2`,initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},transition:{duration:1,ease:`easeOut`,delay:`0.2`},viewport:{once:!0},children:(0,P.jsxs)(`div`,{className:`relative`,children:[(0,P.jsxs)(`div`,{className:`\r
          relative\r
          rounded-[36px]\r
          overflow-hidden\r
          border border-[#E2E8F0]\r
          shadow-[0_30px_80px_rgba(15,23,42,0.10)]\r
        `,children:[(0,P.jsx)(`img`,{src:ey,alt:`Contact Balaji Infotech`,className:`\r
              w-full\r
              h-[420px]\r
              sm:h-[520px]\r
              lg:h-[620px]\r
              object-cover\r
            `}),(0,P.jsx)(`div`,{className:`\r
            absolute inset-0\r
            bg-gradient-to-tr\r
            from-[#0F172A]/55\r
            via-[#1178D4]/10\r
            to-transparent\r
          `})]}),(0,P.jsxs)(`div`,{className:`\r
          absolute\r
          top-4 left-4\r
          sm:top-8 sm:-left-6\r
          bg-white/90\r
          backdrop-blur-xl\r
          border border-white/60\r
          rounded-3xl\r
          px-4 sm:px-6\r
          py-4 sm:py-5\r
          shadow-[0_20px_60px_rgba(15,23,42,0.12)]\r
        `,children:[(0,P.jsx)(`p`,{className:`\r
            text-2xl sm:text-3xl\r
            font-black\r
            text-[#0F172A]\r
          `,children:`500+`}),(0,P.jsx)(`p`,{className:`\r
            mt-1\r
            text-sm\r
            font-medium\r
            text-[#475569]\r
          `,children:`Businesses Supported`})]}),(0,P.jsxs)(`div`,{className:`\r
          absolute\r
          bottom-4 right-4\r
          sm:bottom-8 sm:-right-6\r
          bg-white/90\r
          backdrop-blur-xl\r
          border border-white/60\r
          rounded-3xl\r
          px-4 sm:px-6\r
          py-4 sm:py-5\r
          shadow-[0_20px_60px_rgba(15,23,42,0.12)]\r
        `,children:[(0,P.jsx)(`p`,{className:`\r
            text-2xl sm:text-3xl\r
            font-black\r
            text-[#0F172A]\r
          `,children:`24/7`}),(0,P.jsx)(`p`,{className:`\r
            mt-1\r
            text-sm\r
            font-medium\r
            text-[#475569]\r
          `,children:`Expert Support Team`})]})]})})]})]}),(0,P.jsxs)(`section`,{id:`contact-form`,className:`\r
  relative\r
  py-16 sm:py-24 md:py-32\r
  bg-[#F8FBFF]\r
  overflow-hidden\r
`,children:[(0,P.jsx)(`div`,{className:`\r
    absolute inset-0\r
    bg-[radial-gradient(circle_at_top_left,rgba(17,120,212,0.08),transparent_30%)]\r
  `}),(0,P.jsxs)(`div`,{className:`\r
    relative\r
    max-w-6xl mx-auto\r
    px-4 sm:px-6\r
  `,children:[(0,P.jsxs)(`div`,{className:`\r
      text-center\r
      max-w-3xl\r
      mx-auto\r
      mb-16\r
    `,children:[(0,P.jsxs)(`div`,{className:`\r
        inline-flex items-center\r
        gap-2\r
        px-4 py-2\r
        rounded-full\r
        border border-[#1178D4]/15\r
        bg-white\r
        mb-6\r
      `,children:[(0,P.jsx)(`div`,{className:`\r
          w-2 h-2\r
          rounded-full\r
          bg-[#1178D4]\r
        `}),(0,P.jsx)(`span`,{className:`\r
          text-sm\r
          font-semibold\r
          tracking-wide\r
          uppercase\r
          text-[#1178D4]\r
        `,children:`Contact Our Team`})]}),(0,P.jsxs)(`h2`,{className:`\r
        text-[30px]\r
        sm:text-4xl\r
        md:text-5xl\r
        font-black\r
        leading-tight\r
        tracking-[-0.03em]\r
        text-[#0F172A]\r
      `,children:[`Let’s Discuss Your`,(0,P.jsxs)(`span`,{className:`\r
          bg-gradient-to-r\r
          from-[#1178D4]\r
          to-[#6C63FF]\r
          bg-clip-text\r
          text-transparent\r
        `,children:[` `,`Business Requirements`]})]}),(0,P.jsx)(`p`,{className:`\r
        mt-6\r
        text-[15px]\r
        sm:text-lg\r
        leading-7 sm:leading-8\r
        leading-8\r
        text-[#64748B]\r
      `,children:`Connect with our experts for Tally solutions, professional training, cloud services, and business automation support tailored to your organization.`})]}),(0,P.jsxs)(`div`,{className:`\r
      grid lg:grid-cols-[0.9fr_1.1fr]\r
      gap-10\r
      items-start\r
    `,children:[(0,P.jsxs)(`div`,{className:`\r
  flex flex-col\r
  justify-center\r
  h-full\r
  space-y-8 sm:space-y-10\r
`,children:[[{icon:Qr,title:`Office Address`,info:[`#5-37-197, Opp: Celekt Mobile Showroom,Upstairs.`,`Siddartha Photo city, 4/9 Brodipet, GUNTUR-522002.`]},{icon:ui,title:`Phone Support`,info:[`+91 9849431943`,`+91 92962 53948`]},{icon:Zr,title:`Email Address`,info:[`gunturtally@gmail.com`]}].map((e,t)=>{let n=e.icon;return(0,P.jsxs)(`div`,{className:`\r
          group\r
          flex items-start gap-5\r
          transition-all duration-300\r
          hover:translate-x-2\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
          w-14 h-14\r
          rounded-2xl\r
          bg-gradient-to-br from-[#1178D4] to-[#6C63FF]\r
          flex items-center justify-center\r
          shadow-[0_10px_30px_rgba(17,120,212,0.18)]\r
          shrink-0\r
        `,children:(0,P.jsx)(n,{className:`w-7 h-7 text-white`})}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{className:`\r
            text-[22px]\r
            sm:text-[25px]\r
            font-bold\r
            text-[#0F172A]\r
            mb-2\r
            transition-colors duration-300\r
            group-hover:text-[#1178D4]\r
          `,children:e.title}),(0,P.jsx)(`div`,{className:`space-y-1`,children:e.info.map((e,t)=>(0,P.jsx)(`p`,{className:`\r
                  text-[#475569]\r
                  text-[15px] md:text-[16px]\r
                  leading-relaxed\r
                `,children:e},t))})]})]},t)}),(0,P.jsxs)(`div`,{className:`pt-4`,children:[(0,P.jsx)(`h4`,{className:`\r
    text-2xl\r
    font-bold\r
    text-[#0F172A]\r
    mb-5\r
  `,children:`Follow Us`}),(0,P.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[{icon:ia,link:`https://facebook.com/balajiinfotechguntur`},{icon:ra,link:`https://www.instagram.com/balaji_ai_infotech_pvt_ltd?`},{icon:na,link:`https://linkedin.com`},{icon:Zr,link:`mailto:gunturtally@gmail.com`}].map((e,t)=>{let n=e.icon;return(0,P.jsx)(`a`,{href:e.link,className:`\r
            group\r
            w-14 h-14\r
            rounded-2xl\r
            border border-[#E2E8F0]\r
            bg-white\r
            flex items-center justify-center\r
            transition-all duration-300\r
            hover:-translate-y-1\r
            hover:border-transparent\r
            hover:bg-gradient-to-br\r
            hover:from-[#1178D4]\r
            hover:to-[#6C63FF]\r
            hover:shadow-[0_10px_30px_rgba(17,120,212,0.25)]\r
          `,children:(0,P.jsx)(n,{className:`\r
            w-5 h-5\r
            text-[#475569]\r
            transition-colors duration-300\r
            group-hover:text-white\r
          `})},t)})})]})]}),(0,P.jsxs)(`div`,{className:`space-y-5`,children:[(0,P.jsxs)(`div`,{className:`mb-8`,children:[(0,P.jsxs)(`h3`,{className:`\r
      text-2xl\r
      md:text-4xl\r
      font-black\r
      text-[#0F172A]\r
    `,children:[`Request A`,(0,P.jsxs)(`span`,{className:`bg-gradient-to-r from-[#1178D4] to-[#6C63FF] bg-clip-text text-transparent`,children:[` `,`Free Quote`]})]}),(0,P.jsx)(`p`,{className:`\r
      mt-4\r
      text-[#64748B]\r
      leading-6\r
      max-w-xl\r
    `,children:`Fill out the form below and our experts will contact you with the best solution for your business.`})]}),(0,P.jsx)(Ov,{})]})]})]})]}),(0,P.jsx)(`section`,{className:`\r
  py-10 sm:py-12 md:py-15\r
  px-4 sm:px-6\r
  bg-[#F8FAFC]\r
`,children:(0,P.jsxs)(`div`,{className:`max-w-7xl mx-auto`,children:[(0,P.jsxs)(`div`,{className:`\r
      text-center\r
      mb-14\r
    `,children:[(0,P.jsxs)(`div`,{className:`\r
        inline-flex items-center\r
        gap-2\r
        px-5 py-2\r
        rounded-full\r
        border border-[#DCE7F7]\r
        bg-white\r
        mb-5\r
      `,children:[(0,P.jsx)($r,{className:`w-4 h-4 text-[#1178D4]`}),(0,P.jsx)(`span`,{className:`\r
          text-sm\r
          font-semibold\r
          text-[#1178D4]\r
        `,children:`Visit Our Office`})]}),(0,P.jsxs)(`h2`,{className:`\r
        text-[30px]\r
        sm:text-4xl\r
        md:text-5xl\r
        font-black\r
        leading-tight\r
        text-[#0F172A]\r
      `,children:[`Find Us In`,(0,P.jsxs)(`span`,{className:`\r
          bg-gradient-to-r\r
          from-[#1178D4]\r
          to-[#6C63FF]\r
          bg-clip-text\r
          text-transparent\r
        `,children:[` `,`Guntur`]})]}),(0,P.jsx)(`p`,{className:`\r
        mt-5\r
        max-w-2xl\r
        mx-auto\r
        text-[15px]\r
        sm:text-lg\r
        leading-7 sm:leading-8\r
        text-[#64748B]\r
      `,children:`Visit our office for personalized consultation, product demos, and expert Tally solutions.`})]}),(0,P.jsxs)(`div`,{className:`\r
      relative\r
      overflow-hidden\r
      rounded-[32px]\r
      border border-[#E2E8F0]\r
      shadow-[0_20px_60px_rgba(15,23,42,0.08)]\r
    `,children:[(0,P.jsx)(`iframe`,{src:`https://www.google.com/maps?q=Balaji%20Infotech%20Upstairs:%20Siddartha%20Photo%20City,%204/9,%20Brodipet,%20Guntur,%20Andhra%20Pradesh%20522002&output=embed`,width:`100%`,height:`420`,allowFullScreen:``,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`,className:`border-0`}),(0,P.jsxs)(`div`,{className:`\r
        absolute\r
        left-6 bottom-6\r
        hidden md:flex\r
        items-start gap-4\r
        bg-white/95\r
        backdrop-blur-xl\r
        border border-white/50\r
        rounded-3xl\r
        p-5\r
        shadow-[0_10px_40px_rgba(15,23,42,0.12)]\r
      `,children:[(0,P.jsx)(`div`,{className:`\r
          w-14 h-14\r
          rounded-2xl\r
          bg-gradient-to-br\r
          from-[#1178D4]\r
          to-[#6C63FF]\r
          flex items-center justify-center\r
          shrink-0\r
        `,children:(0,P.jsx)(pr,{className:`w-6 h-6 text-white`})}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h4`,{className:`\r
            text-lg\r
            font-bold\r
            text-[#0F172A]\r
          `,children:`Balaji AI Infotech`}),(0,P.jsx)(`p`,{className:`\r
            mt-1\r
            text-[#64748B]\r
            leading-7\r
          `,children:`Guntur, Andhra Pradesh, India`})]})]})]})]})})]})}function ny(){let[e,t]=(0,w.useState)(`Essential`),n=[`Essential`,`Professional`,`International`],r={Essential:{badge:`Essential Certification Programs`,title:`Explore Our Essential Courses`,description:`Build strong accounting and Tally foundations with beginner-friendly practical learning.`},Professional:{badge:`Professional Certification Programs`,title:`Explore Our Professional Courses`,description:`Advanced industry-focused programs for accounting and business professionals.`},International:{badge:`International Accounting Programs`,title:`Global Finance & Accounting Courses`,description:`Learn international accounting standards and modern business finance workflows.`}},i=[{category:`Essential`,title:`TallyPrime Essentials`,description:`Learn accounting, GST, inventory, and billing fundamentals with practical Tally workflows.`,duration:`2 Months`,level:`Beginner`,skills:[`Accounting`,`GST`,`Inventory`],icon:mr},{category:`Essential`,title:`GST using TallyPrime`,description:`Learn complete guide Goods and Services Tax (GST) with practical Tally workflows.`,duration:`3 Months`,level:`Beginner`,skills:[`Accounting`,`GST`,`Inventory`],icon:mr},{category:`Essential`,title:`TDS using Tally`,description:`Learn Complete Guide on Tax Deducted at Source (TDS) with practical Tally workflows.`,duration:`2 Months`,level:`Beginner`,skills:[`Accounting`,`GST`,`TDS`],icon:mr},{category:`Essential`,title:`GCC VAT using TallyPrime`,description:`Learn Complete Guide on GCC VAT Concepts and its Usage with practical Tally workflows.`,duration:`2 Months`,level:`Beginner`,skills:[`Accounting`,`GST`,`VAT`],icon:mr},{category:`Professional`,title:`TallyPrime Professional`,description:`Complete guide on Advanced Business Accounting and Indian Taxation.`,duration:`6 Months`,level:`Advanced`,skills:[`Accounting`,`GST`,`Inventory`],icon:mr},{category:`Professional`,title:`GST using TallyPrime`,description:`Learn complete guide Goods and Services Tax (GST) with practical Tally workflows.`,duration:`6 Months`,level:`Advanced`,skills:[`Accounting`,`GST`,`Inventory`],icon:mr},{category:`Professional`,title:`TDS using Tally`,description:`Learn Complete Guide on Tax Deducted at Source (TDS) with practical Tally workflows.`,duration:`6 Months`,level:`Advanced`,skills:[`Accounting`,`GST`,`TDS`],icon:mr},{category:`Professional`,title:`GCC VAT using TallyPrime`,description:`Learn Complete Guide on GCC VAT Concepts and its Usage with practical Tally workflows.`,duration:`6 Months`,level:`Advanced`,skills:[`Accounting`,`GST`,`VAT`],icon:mr},{category:`International`,title:`TallyEssential International`,description:`A Complete Guide on Business Accounting in Middle East Countries.`,duration:`6 Months`,level:`Advanced`,skills:[`Accounting`,`GST`,`Inventory`],icon:mr},{category:`International`,title:`TallyEssential Oman`,description:`A Complete Guide on Fundamental to Advanced Accounting.`,duration:`6 Months`,level:`Advanced`,skills:[`Accounting`,`GST`,`Inventory`],icon:mr},{category:`International`,title:`TallyACE International`,description:`A Complete Guide on Business Accounting in Middle East Countries.`,duration:`6 Months`,level:`Advanced`,skills:[`Accounting`,`GST`,`Inventory`],icon:mr}].filter(t=>t.category===e);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`section`,{className:`relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-18 md:pb-20`,children:[(0,P.jsx)(`div`,{className:`\r
    absolute top-[-120px] left-[-120px]\r
    w-[320px] h-[320px]\r
    bg-[#1178D4]/10\r
    blur-[120px]\r
    rounded-full\r
  `}),(0,P.jsx)(`div`,{className:`\r
    absolute bottom-[-120px] right-[-120px]\r
    w-[320px] h-[320px]\r
    bg-[#6C63FF]/10\r
    blur-[120px]\r
    rounded-full\r
  `}),(0,P.jsx)(`div`,{className:`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:(0,P.jsxs)(`div`,{className:`\r
      grid lg:grid-cols-2\r
      gap-12\r
      lg:gap-10\r
      items-center\r
    `,children:[(0,P.jsxs)($.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},className:`order-2 lg:order-1`,children:[(0,P.jsxs)(`div`,{className:`\r
          inline-flex items-center gap-2\r
          px-4 py-2\r
          rounded-full\r
          border border-[#1178D4]/15\r
          bg-[#F8FBFF]\r
          text-[#1178D4]\r
          text-sm font-semibold\r
          tracking-wide\r
          mb-7\r
        `,children:[(0,P.jsx)(`div`,{className:`\r
            w-2 h-2 rounded-full\r
            bg-[#1178D4]\r
          `}),`Tally Education Programs`]}),(0,P.jsxs)(`h1`,{className:`\r
          text-[34px]\r
          sm:text-4xl\r
          lg:text-6xl\r
          font-bold\r
          leading-[1.05]\r
          tracking-[-0.03em]\r
          text-[#0F172A]\r
        `,children:[`Master Tally &`,(0,P.jsx)(`span`,{className:`\r
            block\r
            bg-gradient-to-r\r
            from-[#1178D4]\r
            to-[#6C63FF]\r
            bg-clip-text\r
            text-transparent\r
          `,children:`Build Industry-Ready Skills`})]}),(0,P.jsx)(`p`,{className:`\r
          mt-8\r
          max-w-2xl\r
          text-[15px]\r
          sm:text-[16px]\r
          md:text-[17px]\r
          leading-relaxed\r
          text-[#475569]\r
        `,children:`Learn practical accounting, GST, payroll, taxation, and business management through expert-led Tally certification programs designed for students, graduates, and working professionals.`}),(0,P.jsxs)(`div`,{className:`\r
          mt-10\r
          flex flex-col sm:flex-row\r
          gap-5\r
        `,children:[(0,P.jsx)(`a`,{href:`#courses`,children:(0,P.jsx)(`button`,{className:`\r
            group\r
            relative overflow-hidden\r
            w-full\r
            sm:w-auto\r
            px-6\r
            sm:px-8\r
            py-4\r
            rounded-2xl\r
            bg-gradient-to-r\r
            from-[#1178D4]\r
            to-[#6C63FF]\r
            text-white\r
            font-semibold\r
            text-lg\r
            shadow-[0_15px_40px_rgba(17,120,212,0.25)]\r
            hover:scale-[1.02]\r
            transition-all duration-300\r
          `,children:(0,P.jsxs)(`span`,{className:`\r
              relative z-10\r
              flex items-center justify-center gap-2\r
            `,children:[`Explore Courses`,(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:2,stroke:`currentColor`,className:`\r
                  w-5 h-5\r
                  group-hover:translate-x-1\r
                  transition-transform\r
                `,children:(0,P.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3`})})]})})}),(0,P.jsx)(Mn,{to:`/contact`,children:(0,P.jsx)(`button`,{className:`\r
            w-full\r
            sm:w-auto\r
            px-6\r
            sm:px-8\r
            py-4\r
            rounded-2xl\r
            border border-[#CBD5E1]\r
            bg-white\r
            text-[#0F172A]\r
            font-semibold\r
            text-lg\r
            hover:border-[#1178D4]/40\r
            hover:bg-[#F8FBFF]\r
            transition-all duration-300\r
          `,children:`Book Free Counseling`})})]}),(0,P.jsxs)(`div`,{className:`\r
          mt-14\r
          flex flex-wrap\r
          gap-8\r
          sm:gap-10\r
        `,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{className:`\r
              text-2xl\r
              sm:text-3xl font-bold\r
              text-[#0F172A]\r
            `,children:`10K+`}),(0,P.jsx)(`p`,{className:`\r
              mt-1\r
              text-[#64748B]\r
            `,children:`Students Trained`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{className:`\r
              text-3xl font-bold\r
              text-[#0F172A]\r
            `,children:`100%`}),(0,P.jsx)(`p`,{className:`\r
              mt-1\r
              text-[#64748B]\r
            `,children:`Practical Learning`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{className:`\r
              text-3xl font-bold\r
              text-[#0F172A]\r
            `,children:`Industry`}),(0,P.jsx)(`p`,{className:`\r
              mt-1\r
              text-[#64748B]\r
            `,children:`Recognized Courses`})]})]})]}),(0,P.jsx)($.div,{className:`\r
        relative\r
        flex justify-center lg:justify-end\r
        order-1 lg:order-2`,initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},transition:{duration:1,ease:`easeOut`,delay:`0.2`},viewport:{once:!0},children:(0,P.jsx)(`div`,{className:`relative`,children:(0,P.jsxs)(`div`,{className:`\r
          relative\r
          rounded-[24px]\r
          sm:rounded-[36px]\r
          border border-[#E2E8F0]\r
          bg-gradient-to-br\r
          from-[#F8FBFF]\r
          to-[#EEF2FF]\r
          p-5\r
          sm:p-8\r
          md:p-10\r
          shadow-[0_30px_80px_rgba(15,23,42,0.08)]\r
        `,children:[(0,P.jsxs)(`div`,{className:`\r
            flex items-center justify-between gap-4\r
            mb-8\r
          `,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h3`,{className:`\r
                text-xl font-bold\r
                text-[#0F172A]\r
              `,children:`Learning Dashboard`}),(0,P.jsx)(`p`,{className:`\r
                mt-1\r
                text-sm\r
                text-[#64748B]\r
              `,children:`Track your course progress`})]}),(0,P.jsx)(`div`,{className:`\r
              w-12 h-12\r
              sm:w-14 sm:h-14\r
              rounded-2xl\r
              bg-gradient-to-r\r
              from-[#1178D4]\r
              to-[#6C63FF]\r
              flex items-center justify-center\r
              shadow-lg\r
            `,children:(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.8,stroke:`currentColor`,className:`w-7 h-7 text-white`,children:(0,P.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M12 14 21 9 12 4 3 9l9 5Zm0 0 6.16-3.422A12.083 12.083 0 0 1 18 14.576c0 1.03-.391 2.03-1.094 2.78C15.773 18.6 14 19 12 19s-3.773-.4-4.906-1.644A3.978 3.978 0 0 1 6 14.576c0-1.4.285-2.75.84-3.998L12 14Z`})})})]}),(0,P.jsx)(`div`,{className:`space-y-5`,children:[`Advanced TallyPrime`,`GST & Taxation`,`Payroll Management`,`Business Accounting`].map((e,t)=>(0,P.jsxs)(`div`,{className:`\r
                  flex items-center justify-between\r
                  rounded-2xl\r
                  border border-white/60\r
                  bg-white/70\r
                  backdrop-blur-sm\r
                  px-4\r
                  sm:px-5\r
                  py-4\r
                `,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,P.jsx)(`div`,{className:`\r
                    w-10 h-10\r
                    sm:w-12 sm:h-12\r
                    rounded-xl\r
                    bg-gradient-to-r\r
                    from-[#1178D4]\r
                    to-[#6C63FF]\r
                    flex items-center justify-center\r
                    text-white font-bold\r
                  `,children:t+1}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h4`,{className:`\r
                      font-semibold\r
                      text-[#0F172A]\r
                    `,children:e}),(0,P.jsx)(`p`,{className:`\r
                      text-[12px]\r
                      sm:text-sm\r
                      text-[#64748B]\r
                    `,children:`Practical Certification Program`})]})]}),(0,P.jsx)(`div`,{className:`\r
                  px-3 py-1\r
                  rounded-full\r
                  bg-[#DCFCE7]\r
                  text-[#15803D]\r
                  text-sm font-medium\r
                `,children:`Active`})]},t))})]})})})]})})]}),(0,P.jsxs)(`section`,{id:`courses`,className:`relative py-14 sm:py-16 md:py-24 bg-white overflow-hidden`,children:[(0,P.jsx)(`div`,{className:`\r
    absolute top-0 left-1/2 -translate-x-1/2\r
    w-[500px] h-[250px]\r
    bg-[#1178D4]/5\r
    blur-[120px]\r
    rounded-full\r
  `}),(0,P.jsx)(`div`,{className:`\r
    absolute bottom-0 right-0\r
    w-[400px] h-[400px]\r
    bg-[#6C63FF]/5\r
    blur-[120px]\r
    rounded-full\r
  `}),(0,P.jsxs)(`div`,{className:`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,P.jsxs)(`div`,{className:`text-center`,children:[(0,P.jsxs)(`div`,{className:`\r
        inline-flex items-center gap-2\r
        px-4 py-2\r
        rounded-full\r
        border border-[#1178D4]/15\r
        bg-[#F8FBFF]\r
        text-[#1178D4]\r
        text-sm font-semibold\r
        tracking-wide\r
        mb-5\r
      `,children:[(0,P.jsx)(`div`,{className:`\r
          w-2 h-2 rounded-full\r
          bg-[#1178D4]\r
        `}),r[e].badge]}),(0,P.jsxs)(`h2`,{className:`\r
        text-[30px]\r
        sm:text-4xl\r
        lg:text-5xl\r
        font-bold\r
        tracking-[-0.03em]\r
        text-[#0F172A]\r
      `,children:[r[e].title.split(` `).slice(0,-1).join(` `),(0,P.jsxs)(`span`,{className:`\r
          bg-gradient-to-r\r
          from-[#1178D4]\r
          to-[#6C63FF]\r
          bg-clip-text\r
          text-transparent\r
        `,children:[` `,r[e].title.split(` `).slice(-1)]})]}),(0,P.jsx)(`p`,{className:`\r
        mt-5\r
        max-w-2xl\r
        mx-auto\r
        text-[15px]\r
        sm:text-[16px]\r
        md:text-[17px]\r
        leading-relaxed\r
        text-[#64748B]\r
      `,children:r[e].description})]}),(0,P.jsx)(`div`,{className:`\r
      mt-12\r
      flex justify-center\r
    `,children:(0,P.jsx)(`div`,{className:`\r
        flex items-center\r
        gap-3\r
        overflow-x-auto\r
        scrollbar-hide\r
        p-2\r
        rounded-full\r
        border border-[#E2E8F0]\r
        bg-white/80\r
        backdrop-blur-xl\r
        shadow-[0_10px_40px_rgba(15,23,42,0.06)]\r
        no-scrollbar\r
      `,children:n.map(n=>{let r=e===n;return(0,P.jsxs)($.button,{whileTap:{scale:.96},onClick:()=>t(n),className:`\r
                relative\r
                px-5\r
                sm:px-6\r
                md:px-7\r
                py-3.5\r
                rounded-full\r
                text-sm md:text-base\r
                font-semibold\r
                whitespace-nowrap\r
                transition-all duration-300\r
              `,children:[r&&(0,P.jsx)($.div,{layoutId:`activeEducationTab`,transition:{type:`spring`,bounce:.2,duration:.5},className:`\r
                    absolute inset-0\r
                    rounded-full\r
                    bg-gradient-to-r\r
                    from-[#1178D4]\r
                    to-[#6C63FF]\r
                    shadow-[0_10px_30px_rgba(17,120,212,0.20)]\r
                  `}),(0,P.jsx)(`span`,{className:`
                relative z-10
                transition-colors duration-300

                ${r?`text-white`:`text-[#475569] hover:text-[#1178D4]`}
              `,children:n})]},n)})})}),(0,P.jsx)(`div`,{className:`mt-16`,children:(0,P.jsx)($p,{mode:`wait`,children:(0,P.jsx)($.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.35},className:`\r
            grid\r
            md:grid-cols-2\r
            xl:grid-cols-3\r
            gap-6\r
            sm:gap-8\r
          `,children:i.map((e,t)=>{let n=e.icon;return(0,P.jsxs)($.div,{whileHover:{y:-8},transition:{duration:.3},className:`\r
                  group\r
                  relative\r
                  rounded-[24px]\r
                  sm:rounded-[32px]\r
                  border border-[#E2E8F0]\r
                  bg-white\r
                  overflow-hidden\r
\r
                  shadow-[0_10px_40px_rgba(15,23,42,0.06)]\r
\r
                  hover:shadow-[0_25px_70px_rgba(17,120,212,0.12)]\r
                  transition-all duration-500\r
                `,children:[(0,P.jsx)(`div`,{className:`\r
                  absolute top-0 inset-x-0\r
                  h-1\r
                  bg-gradient-to-r\r
                  from-[#1178D4]\r
                  to-[#6C63FF]\r
                `}),(0,P.jsxs)(`div`,{className:`p-5 sm:p-8`,children:[(0,P.jsxs)(`div`,{className:`\r
                    flex items-start justify-between\r
                    gap-5\r
                  `,children:[(0,P.jsx)(`div`,{className:`\r
                      w-14 h-14\r
                      sm:w-16 sm:h-16 shrink-0\r
                      rounded-2xl\r
                      bg-gradient-to-br\r
                      from-[#1178D4]\r
                      to-[#6C63FF]\r
                      flex items-center justify-center\r
                      shadow-[0_10px_30px_rgba(17,120,212,0.20)]\r
                    `,children:(0,P.jsx)(n,{className:`\r
                        w-8 h-8 text-white\r
                      `})}),(0,P.jsxs)(`div`,{className:`\r
                      flex flex-col\r
                      items-end\r
                      gap-3\r
                    `,children:[(0,P.jsxs)(`div`,{className:`\r
                        px-3\r
                        sm:px-4\r
                        py-2\r
                        rounded-full\r
                        bg-[#F8FAFC]\r
                        border border-[#E2E8F0]\r
                        text-sm\r
                        font-semibold\r
                        text-[#475569]\r
                      `,children:[`⏱ `,e.duration]}),(0,P.jsx)(`div`,{className:`\r
                        px-3\r
                        sm:px-4\r
                        py-2\r
                        rounded-full\r
                        bg-[#EEF2FF]\r
                        text-sm\r
                        font-semibold\r
                        text-[#4F46E5]\r
                      `,children:e.level})]})]}),(0,P.jsx)(`h3`,{className:`\r
                    mt-8\r
                    text-[22px]\r
                    sm:text-2xl\r
                    font-bold\r
                    leading-tight\r
                    text-[#0F172A]\r
\r
                    group-hover:text-[#1178D4]\r
                    transition-colors duration-300\r
                  `,children:e.title}),(0,P.jsx)(`p`,{className:`\r
                    mt-5\r
                    text-[15px]\r
                    sm:text-[17px]\r
                    leading-[1.8]\r
                    text-[#64748B]\r
                  `,children:e.description}),(0,P.jsx)(`div`,{className:`\r
                    mt-8\r
                    flex flex-wrap\r
                    gap-3\r
                  `,children:e.skills.map((e,t)=>(0,P.jsx)(`div`,{className:`\r
                          px-3\r
                          sm:px-4\r
                          py-2\r
                          rounded-full\r
                          border border-[#E2E8F0]\r
                          bg-[#F8FAFC]\r
                          text-sm\r
                          font-medium\r
                          text-[#475569]\r
                        `,children:e},t))}),(0,P.jsx)(Mn,{to:`/contact`,children:(0,P.jsxs)(`button`,{className:`\r
                    group/btn\r
                    mt-10\r
                    w-full\r
                    flex items-center justify-center gap-3\r
                    px-5\r
                    sm:px-6\r
                    py-4\r
                    rounded-2xl\r
\r
                    bg-gradient-to-r\r
                    from-[#1178D4]\r
                    to-[#6C63FF]\r
\r
                    text-white\r
                    font-semibold\r
                    text-lg\r
\r
                    shadow-[0_10px_30px_rgba(17,120,212,0.18)]\r
\r
                    hover:scale-[1.02]\r
                    transition-all duration-300\r
                  `,children:[`Enquire Now`,(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:2,stroke:`currentColor`,className:`\r
                        w-5 h-5\r
                        group-hover/btn:translate-x-1\r
                        transition-transform\r
                      `,children:(0,P.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3`})})]})})]})]},t)})},e)})})]})]}),(0,P.jsxs)(`section`,{className:`relative py-14 sm:py-20 md:py-24 bg-[#F8FBFF] overflow-hidden`,children:[(0,P.jsx)(`div`,{className:`\r
    absolute top-0 left-0\r
    w-[350px] h-[350px]\r
    bg-[#1178D4]/5\r
    blur-[120px]\r
    rounded-full\r
  `}),(0,P.jsx)(`div`,{className:`\r
    absolute bottom-0 right-0\r
    w-[350px] h-[350px]\r
    bg-[#6C63FF]/5\r
    blur-[120px]\r
    rounded-full\r
  `}),(0,P.jsxs)(`div`,{className:`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,P.jsxs)(`div`,{className:`text-center`,children:[(0,P.jsxs)(`div`,{className:`\r
        inline-flex items-center gap-2\r
        px-4 py-2\r
        rounded-full\r
        border border-[#1178D4]/15\r
        bg-white\r
        text-[#1178D4]\r
        text-sm\r
        font-semibold\r
        tracking-wide\r
        mb-5\r
      `,children:[(0,P.jsx)(`div`,{className:`\r
          w-2 h-2 rounded-full\r
          bg-[#1178D4]\r
        `}),`Why Students Choose Us`]}),(0,P.jsxs)(`h2`,{className:`text-[30px] sm:text-4xl lg:text-5xltext-3xl sm:text-4xl lg:text-5xl\r
        font-bold\r
        tracking-[-0.03em]\r
        text-[#0F172A]\r
      `,children:[`Why Choose`,(0,P.jsxs)(`span`,{className:`\r
          bg-gradient-to-r\r
          from-[#1178D4]\r
          to-[#6C63FF]\r
          bg-clip-text\r
          text-transparent\r
        `,children:[` `,`Tally Education`]})]}),(0,P.jsx)(`p`,{className:`\r
        mt-5\r
        max-w-3xl\r
        mx-auto\r
        text-[15px]\r
        sm:text-lg\r
        leading-relaxed\r
        text-[#64748B]\r
      `,children:`Gain practical accounting expertise with industry-focused training, expert mentors, certification support, and career guidance.`})]}),(0,P.jsx)(`div`,{className:`\r
      mt-16\r
      grid\r
      sm:grid-cols-2\r
      xl:grid-cols-4\r
      gap-5\r
      sm:gap-7\r
    `,children:[{title:`Expert Training`,description:`Learn directly from certified trainers with practical industry expertise.`,icon:Br},{title:`Practical Experience`,description:`Hands-on projects and real business workflows for job-ready skills.`,icon:fr},{title:`Career Support`,description:`Placement guidance, interview preparation, and career assistance.`,icon:Mi},{title:`Industry Recognition`,description:`Globally recognized Tally certifications valued across industries.`,icon:sr}].map((e,t)=>{let n=e.icon;return(0,P.jsxs)($.div,{whileHover:{y:-8},transition:{duration:.3},className:`\r
              group\r
              relative\r
              rounded-[22px]\r
              sm:rounded-[28px]\r
              border border-[#E2E8F0]\r
              bg-white\r
              p-6\r
              sm:p-8\r
\r
              shadow-[0_10px_40px_rgba(15,23,42,0.05)]\r
\r
              hover:border-[#1178D4]/20\r
              hover:shadow-[0_20px_60px_rgba(17,120,212,0.12)]\r
\r
              transition-all duration-500\r
            `,children:[(0,P.jsx)(`div`,{className:`\r
              w-14 h-14\r
              sm:w-16 sm:h-16\r
              rounded-2xl\r
              bg-gradient-to-br\r
              from-[#1178D4]\r
              to-[#6C63FF]\r
\r
              flex items-center justify-center\r
\r
              shadow-[0_10px_30px_rgba(17,120,212,0.18)]\r
            `,children:(0,P.jsx)(n,{className:`\r
                w-8 h-8 text-white\r
              `})}),(0,P.jsx)(`h3`,{className:`\r
              mt-7\r
              text-[22px]\r
              sm:text-2xl\r
              font-bold\r
              text-[#0F172A]\r
            `,children:e.title}),(0,P.jsx)(`p`,{className:`\r
              mt-4\r
              text-[15px]\r
              sm:text-[16px]\r
              leading-[1.8]\r
              text-[#64748B]\r
            `,children:e.description})]},t)})})]})]})]})}function ry(){return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(`div`,{className:`overflow-x-hidden`,children:[(0,P.jsx)(Bi,{}),(0,P.jsxs)(Vt,{children:[(0,P.jsx)(zt,{path:`/`,element:(0,P.jsx)(Pv,{})}),(0,P.jsx)(zt,{path:`/about`,element:(0,P.jsx)(Lv,{})}),(0,P.jsx)(zt,{path:`/products`,element:(0,P.jsx)(Rv,{})}),(0,P.jsx)(zt,{path:`/products/:slug`,element:(0,P.jsx)(Vv,{})}),(0,P.jsx)(zt,{path:`/services`,element:(0,P.jsx)(Wv,{})}),(0,P.jsx)(zt,{path:`/services/:slug`,element:(0,P.jsx)(Gv,{})}),(0,P.jsx)(zt,{path:`/education`,element:(0,P.jsx)(ny,{})}),(0,P.jsx)(zt,{path:`/lms`,element:(0,P.jsx)($v,{})}),(0,P.jsx)(zt,{path:`/contact`,element:(0,P.jsx)(ty,{})})]}),(0,P.jsx)(aa,{})]})})}N.createRoot(document.getElementById(`root`)).render((0,P.jsx)(kn,{basename:`/Balaji-Infotech`,children:(0,P.jsx)(ry,{})}));