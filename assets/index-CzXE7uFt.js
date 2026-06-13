var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function ee(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return ee(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function O(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?O(``+e.key):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ie(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=ie(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=ie(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ie(re(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ae(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},A={map:ae,forEach:function(e,t,n){ae(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ae(e,function(){t++}),t},toArray:function(e){return ae(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=A,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ee(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ee(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,k)}catch(e){k(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.6`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&ne(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function ee(){return g?!0:!(e.unstable_now()-T<w)}function E(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ne(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var O=new MessageChannel,te=O.port2;O.port1.onmessage=E,D=function(){te.postMessage(null)}}else D=function(){_(E,0)};function ne(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ne(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for(`react.element`),g=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),ee=Symbol.for(`react.suspense_list`),E=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),O=Symbol.for(`react.activity`),te=Symbol.for(`react.memo_cache_sentinel`),ne=Symbol.iterator;function re(e){return typeof e!=`object`||!e?null:(e=ne&&e[ne]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case ee:return`SuspenseList`;case O:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case E:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var oe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function de(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function j(e,t){le++,ce[le]=e.current,e.current=t}var fe=ue(null),pe=ue(null),me=ue(null),he=ue(null);function ge(e,t){switch(j(me,t),j(pe,e),j(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}de(fe),j(fe,e)}function _e(){de(fe),de(pe),de(me)}function ve(e){e.memoizedState!==null&&j(he,e);var t=fe.current,n=Ud(t,e.type);t!==n&&(j(pe,e),j(fe,n))}function ye(e){pe.current===e&&(de(fe),de(pe)),he.current===e&&(de(he),$f._currentValue=se)}var be,xe;function Se(e){if(be===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);be=t&&t[1]||``,xe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+be+e+xe}var Ce=!1;function we(e,t){if(!e||Ce)return``;Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Se(n):``}function Te(e,t){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se(`Lazy`);case 13:return e.child!==t&&t!==null?Se(`Suspense Fallback`):Se(`Suspense`);case 19:return Se(`SuspenseList`);case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Se(`Activity`);default:return``}}function Ee(e){try{var t=``,n=null;do t+=Te(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,ke=t.unstable_cancelCallback,Ae=t.unstable_shouldYield,je=t.unstable_requestPaint,Me=t.unstable_now,Ne=t.unstable_getCurrentPriorityLevel,Pe=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,Ie=t.unstable_NormalPriority,Le=t.unstable_LowPriority,Re=t.unstable_IdlePriority,ze=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function Ue(e){if(typeof ze==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=A.p;return e===0?(e=window.event,e===void 0?32:hp(e.type)):e}function dt(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[pt])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return De.call(Nt,e)?!0:De.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(xu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,`passive`,{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=f({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=f({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=En(f({},Pn,{dataTransfer:0})),Ln=En(f({},kn,{relatedTarget:0})),Rn=En(f({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=En(f({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=En(f({},Dn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=En(f({},kn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=En(f({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=En(f({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=En(f({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=En(f({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=En(f({},Dn,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=gn&&`CompositionEvent`in window,er=null;gn&&`documentMode`in document&&(er=document.documentMode);var tr=gn&&`TextEvent`in window&&!er,nr=gn&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var M=!1;function sr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function cr(e,t){if(M)return e===`compositionend`||!$n&&ar(e,t)?(e=Sn(),xn=bn=yn=null,M=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!lr[e.type]:t===`textarea`}function dr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Dd(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function mr(e){bd(e,0)}function hr(e){if(Ht(wt(e)))return e}function gr(e,t){if(e===`change`)return t}var _r=!1;if(gn){var vr;if(gn){var yr=`oninput`in document;if(!yr){var br=document.createElement(`div`);br.setAttribute(`oninput`,`return;`),yr=typeof br.oninput==`function`}vr=yr}else vr=!1;_r=vr&&(!document.documentMode||9<document.documentMode)}function xr(){fr&&(fr.detachEvent(`onpropertychange`,Sr),pr=fr=null)}function Sr(e){if(e.propertyName===`value`&&hr(pr)){var t=[];dr(t,pr,e,ln(e)),mn(mr,t)}}function Cr(e,t,n){e===`focusin`?(xr(),fr=t,pr=n,fr.attachEvent(`onpropertychange`,Sr)):e===`focusout`&&xr()}function wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return hr(pr)}function Tr(e,t){if(e===`click`)return hr(t)}function Er(e,t){if(e===`input`||e===`change`)return hr(t)}function Dr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Or=typeof Object.is==`function`?Object.is:Dr;function kr(e,t){if(Or(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!Or(e[i],t[i]))return!1}return!0}function Ar(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n=Ar(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ar(n)}}function Mr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Fr=gn&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function Br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==Ut(r)||(r=Ir,`selectionStart`in r&&Pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&kr(Rr,r)||(Rr=r,r=Dd(Lr,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Hr={animationend:Vr(`Animation`,`AnimationEnd`),animationiteration:Vr(`Animation`,`AnimationIteration`),animationstart:Vr(`Animation`,`AnimationStart`),transitionrun:Vr(`Transition`,`TransitionRun`),transitionstart:Vr(`Transition`,`TransitionStart`),transitioncancel:Vr(`Transition`,`TransitionCancel`),transitionend:Vr(`Transition`,`TransitionEnd`)},Ur={},Wr={};gn&&(Wr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),`TransitionEvent`in window||delete Hr.transitionend.transition);function Gr(e){if(Ur[e])return Ur[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wr)return Ur[e]=t[n];return e}var Kr=Gr(`animationend`),qr=Gr(`animationiteration`),Jr=Gr(`animationstart`),Yr=Gr(`transitionrun`),Xr=Gr(`transitionstart`),Zr=Gr(`transitioncancel`),Qr=Gr(`transitionend`),$r=new Map,ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ei.push(`scrollEnd`);function ti(e,t){$r.set(e,t),kt(t,[e])}var ni=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ri=[],ii=0,ai=0;function oi(){for(var e=ii,t=ai=ii=0;t<e;){var n=ri[t];ri[t++]=null;var r=ri[t];ri[t++]=null;var i=ri[t];ri[t++]=null;var a=ri[t];if(ri[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ui(n,i,a)}}function si(e,t,n,r){ri[ii++]=e,ri[ii++]=t,ri[ii++]=n,ri[ii++]=r,ai|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ci(e,t,n,r){return si(e,t,n,r),di(e)}function li(e,t){return si(e,null,null,t),di(e)}function ui(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function di(e){if(50<fu)throw fu=0,pu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fi={};function pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,t,n,r){return new pi(e,t,n,r)}function hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gi(e,t){var n=e.alternate;return n===null?(n=mi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _i(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)hi(e)&&(s=1);else if(typeof e==`string`)s=Wf(e,n,fe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case O:return e=mi(31,n,t,a),e.elementType=O,e.lanes=o,e;case y:return yi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=mi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=mi(13,n,t,a),e.elementType=T,e.lanes=o,e;case ee:return e=mi(19,n,t,a),e.elementType=ee,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case E:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=mi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function yi(e,t,n,r){return e=mi(7,e,r,t),e.lanes=n,e}function bi(e,t,n){return e=mi(6,e,null,t),e.lanes=n,e}function xi(e){var t=mi(18,null,null,0);return t.stateNode=e,t}function Si(e,t,n){return t=mi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ci=new WeakMap;function wi(e,t){if(typeof e==`object`&&e){var n=Ci.get(e);return n===void 0?(t={value:e,source:t,stack:Ee(t)},Ci.set(e,t),t):n}return{value:e,source:t,stack:Ee(t)}}var Ti=[],Ei=0,Di=null,Oi=0,ki=[],Ai=0,ji=null,Mi=1,Ni=``;function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=Di,Di=e,Oi=t}function Fi(e,t,n){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,ji=e;var r=Mi;e=Ni;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mi=1<<32-We(t)+i|n<<i|r,Ni=a+e}else Mi=1<<a|n<<i|r,Ni=e}function Ii(e){e.return!==null&&(Pi(e,1),Fi(e,1,0))}function Li(e){for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null;for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Ni=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null}function Ri(e,t){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,Mi=t.id,Ni=t.overflow,ji=e}var zi=null,N=null,P=!1,Bi=null,Vi=!1,Hi=Error(i(519));function Ui(e){throw Yi(wi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Hi}function Wi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Z(`cancel`,t),Z(`close`,t);break;case`iframe`:case`object`:case`embed`:Z(`load`,t);break;case`video`:case`audio`:for(n=0;n<vd.length;n++)Z(vd[n],t);break;case`source`:Z(`error`,t);break;case`img`:case`image`:case`link`:Z(`error`,t),Z(`load`,t);break;case`details`:Z(`toggle`,t);break;case`input`:Z(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Z(`invalid`,t);break;case`textarea`:Z(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Nd(t.textContent,n)?(r.popover!=null&&(Z(`beforetoggle`,t),Z(`toggle`,t)),r.onScroll!=null&&Z(`scroll`,t),r.onScrollEnd!=null&&Z(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Ui(e,!0)}function Gi(e){for(zi=e.return;zi;)switch(zi.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:zi=zi.return}}function Ki(e){if(e!==zi)return!1;if(!P)return Gi(e),P=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Wd(e.type,e.memoizedProps)),n=!n),n&&N&&Ui(e),Gi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=df(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=df(e)}else t===27?(t=N,Qd(e.type)?(e=uf,uf=null,N=e):N=t):N=zi?lf(e.stateNode.nextSibling):null;return!0}function qi(){N=zi=null,P=!1}function Ji(){var e=Bi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Bi=null),e}function Yi(e){Bi===null?Bi=[e]:Bi.push(e)}var Xi=ue(null),Zi=null,Qi=null;function $i(e,t,n){j(Xi,t._currentValue),t._currentValue=n}function F(e){e._currentValue=Xi.current,de(Xi)}function ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ta(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ea(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ea(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function na(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Or(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===he.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[$f]:e.push($f))}a=a.return}e!==null&&ta(t,e,n,r),t.flags|=262144}function ra(e){for(e=e.firstContext;e!==null;){if(!Or(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ia(e){Zi=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function aa(e){return sa(Zi,e)}function oa(e,t){return Zi===null&&ia(e),sa(e,t)}function sa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qi===null){if(e===null)throw Error(i(308));Qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qi=Qi.next=t;return n}var ca=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},la=t.unstable_scheduleCallback,ua=t.unstable_NormalPriority,da={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fa(){return{controller:new ca,data:new Map,refCount:0}}function pa(e){e.refCount--,e.refCount===0&&la(ua,function(){e.controller.abort()})}var ma=null,ha=0,ga=0,_a=null;function va(e,t){if(ma===null){var n=ma=[];ha=0,ga=fd(),_a={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ha++,t.then(ya,ya),t}function ya(){if(--ha===0&&ma!==null){_a!==null&&(_a.status=`fulfilled`);var e=ma;ma=null,ga=0,_a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ba(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var xa=k.S;k.S=function(e,t){tu=Me(),typeof t==`object`&&t&&typeof t.then==`function`&&va(e,t),xa!==null&&xa(e,t)};var Sa=ue(null);function Ca(){var e=Sa.current;return e===null?K.pooledCache:e}function wa(e,t){t===null?j(Sa,Sa.current):j(Sa,t.pool)}function Ta(){var e=Ca();return e===null?null:{parent:da._currentValue,pool:e}}var Ea=Error(i(460)),Da=Error(i(474)),Oa=Error(i(542)),ka={then:function(){}};function Aa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ja(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e}throw Na=t,Ea}}function Ma(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Na=e,Ea):e}}var Na=null;function Pa(){if(Na===null)throw Error(i(459));var e=Na;return Na=null,e}function Fa(e){if(e===Ea||e===Oa)throw Error(i(483))}var Ia=null,La=0;function Ra(e){var t=La;return La+=1,Ia===null&&(Ia=[]),ja(Ia,e,t)}function za(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ba(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Va(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=gi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&Ma(i)===t.type)?(t=a(t,n.props),za(t,n),t.return=e,t):(t=vi(n.type,n.key,n.props,null,e.mode,r),za(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case g:return n=vi(t.type,t.key,t.props,null,e.mode,n),za(n,t),n.return=e,n;case v:return t=Si(t,e.mode,n),t.return=e,t;case D:return t=Ma(t),f(e,t,n)}if(oe(t)||re(t))return t=yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ra(t),n);if(t.$$typeof===C)return f(e,oa(e,t),n);Ba(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case g:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=Ma(n),p(e,t,n,r)}if(oe(n)||re(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ra(n),r);if(n.$$typeof===C)return p(e,t,oa(e,n),r);Ba(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case g:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=Ma(r),m(e,t,n,r,i)}if(oe(r)||re(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ra(r),i);if(r.$$typeof===C)return m(e,t,n,oa(t,r),i);Ba(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),P&&Pi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return P&&Pi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),P&&Pi(i,h),l}function _(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),P&&Pi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return P&&Pi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),P&&Pi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case g:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&Ma(l)===r.type){n(e,r.sibling),c=a(r,o.props),za(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=yi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=vi(o.type,o.key,o.props,null,e.mode,c),za(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Si(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=Ma(o),b(e,r,o,c)}if(oe(o))return h(e,r,o,c);if(re(o)){if(l=re(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),_(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ra(o),c);if(o.$$typeof===C)return b(e,r,oa(e,o),c);Ba(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{La=0;var i=b(e,t,n,r);return Ia=null,i}catch(t){if(t===Ea||t===Oa)throw t;var a=mi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ha=Va(!0),Ua=Va(!1),Wa=!1;function Ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ka(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=di(e),ui(e,null,n),t}return si(e,r,t,n),di(e)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Xa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Za=!1;function Qa(){if(Za){var e=_a;if(e!==null)throw e}}function $a(e,t,n,r){Za=!1;var i=e.updateQueue;Wa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(J&p)===p:(r&p)===p){p!==0&&p===ga&&(Za=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:Wa=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function eo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function to(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)eo(n[e],t)}var no=ue(null),ro=ue(0);function io(e,t){e=Wl,j(ro,e),j(no,t),Wl=e|t.baseLanes}function ao(){j(ro,Wl),j(no,no.current)}function oo(){Wl=ro.current,de(no),de(ro)}var so=ue(null),co=null;function lo(e){var t=e.alternate;j(ho,ho.current&1),j(so,e),co===null&&(t===null||no.current!==null||t.memoizedState!==null)&&(co=e)}function uo(e){j(ho,ho.current),j(so,e),co===null&&(co=e)}function fo(e){e.tag===22?(j(ho,ho.current),j(so,e),co===null&&(co=e)):po(e)}function po(){j(ho,ho.current),j(so,so.current)}function mo(e){de(so),co===e&&(co=null),de(ho)}var ho=ue(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,vo=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,R=null,wo=0;function z(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Or(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Vs:H,xo=!1,a=n(r,i),xo=!1,bo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){k.H=Bs;var t=L!==null&&L.next!==null;if(_o=0,vo=L=I=null,yo=!1,Co=0,R=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ra(e)&&(ic=!0))}function Oo(e,t,n,r){I=e;var a=0;do{if(bo&&(R=null),Co=0,bo=!1,25<=a)throw Error(i(301));if(a+=1,vo=L=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=Hs,o=t(n,r)}while(bo);return o}function ko(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function Ao(){var e=So!==0;return So=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}_o=0,vo=L=I=null,bo=!1,Co=So=0,R=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vo===null?I.memoizedState=vo=e:vo=vo.next=e,vo}function Po(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=vo===null?I.memoizedState:vo.next;if(t!==null)vo=t,L=e;else{if(e===null)throw I.alternate===null?Error(i(467)):Error(i(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},vo===null?I.memoizedState=vo=e:vo=vo.next=e}return vo}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,R===null&&(R=[]),e=ja(R,e,t),t=I,(vo===null?t.memoizedState:vo.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Vs:H),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===C)return aa(e)}throw Error(i(438,String(e)))}function Ro(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=te;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(Po(),L,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ga&&(d=!0);else if((_o&p)===p){u=u.next,p===ga&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,Kl|=p;f=u.action,xo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Or(o,e.memoizedState)&&(ic=!0,d&&(n=_a,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=Po(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Or(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uo(e,t,n){var r=I,a=Po(),o=P;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Or((L||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ps(Ko.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||vo!==null&&vo.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||_o&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Fo(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Or(e,n)}catch{return!0}}function Jo(e){var t=li(e,2);t!==null&&gu(t,e,2)}function Yo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),xo){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,L,typeof r==`function`?r:zo)}function Zo(e,t,n,r,a){if(Ls(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),B(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),B(e,t,a)}catch(n){es(e,t,n)}}function B(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(P){var n=K.formState;if(n!==null){a:{var r=I;if(P){if(N){b:{for(var i=N,a=Vi;i.nodeType!==8;){if(!a){i=null;break b}if(i=lf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){N=lf(i.nextSibling),r=i.data===`F!`;break a}}Ui(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Ps.bind(null,I,r),r.dispatch=n,r=Yo(!1),a=Is.bind(null,I,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(Po(),L,e)}function as(e,t,n){if(t=Vo(e,t,ns)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Ea?Oa:e}else r=t;t=Po();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=Po(),n=L;if(n!==null)return as(t,n,e);Po(),t=t.memoizedState,n=Po();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Fo(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return Po().memoizedState}function us(e,t,n,r){var i=No();I.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=Po();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&To(r,L.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(I.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Fo(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=Po().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),xo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function V(e,t,n){return n===void 0||_o&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=hu(),I.lanes|=e,Kl|=e,n)}function Cs(e,t,n,r){return Or(n,t)?n:no.current===null?!(_o&42)||_o&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=hu(),I.lanes|=e,Kl|=e,t):(e=V(e,n,r),Or(e,t)||(ic=!0),e)}function ws(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Is(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Fs(e,t,ba(c,r),mu(e)):Fs(e,t,r,mu(e))}catch(n){Fs(e,t,{then:function(){},status:`rejected`,reason:n},mu())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function Ts(){}function Es(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ds(e).queue;ws(e,a,t,se,n===null?Ts:function(){return Os(e),n(r)})}function Ds(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Os(e){var t=Ds(e);t.next===null&&(t=e.alternate.memoizedState),Fs(e,t.next.queue,{},mu())}function ks(){return aa($f)}function As(){return Po().memoizedState}function js(){return Po().memoizedState}function Ms(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=mu();e=qa(n);var r=Ja(t,e,n);r!==null&&(gu(r,t,n),Ya(r,t,n)),t={cache:fa()},e.payload=t;return}t=t.return}}function Ns(e,t,n){var r=mu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ls(e)?Rs(t,n):(n=ci(e,t,n,r),n!==null&&(gu(n,e,r),zs(n,t,r)))}function Ps(e,t,n){Fs(e,t,n,mu())}function Fs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ls(e))Rs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Or(s,o))return si(e,t,i,0),K===null&&oi(),!1}catch{}if(n=ci(e,t,i,r),n!==null)return gu(n,e,r),zs(n,t,r),!0}return!1}function Is(e,t,n,r){if(r={lane:2,revertLane:fd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ls(e)){if(t)throw Error(i(479))}else t=ci(e,n,r,2),t!==null&&gu(t,e,2)}function Ls(e){var t=e.alternate;return e===I||t!==null&&t===I}function Rs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var Bs={readContext:aa,use:Lo,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Bs.useEffectEvent=z;var Vs={readContext:aa,use:Lo,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:aa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(xo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(xo){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ns.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Ps.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return V(No(),e,t)},useTransition:function(){var e=Yo(!1);return e=ws.bind(null,I,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,a=No();if(P){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Wo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Ko.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Go.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(P){var n=Ni,r=Mi;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ks,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Is.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return No().memoizedState=Ms.bind(null,I)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},H={readContext:aa,use:Lo,useCallback:xs,useContext:aa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Bo,useRef:ls,useState:function(){return Bo(zo)},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(Po(),L.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=Po().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:As,useHostTransitionStatus:ks,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Xo(Po(),L,e,t)},useMemoCache:Ro,useCacheRefresh:js};H.useEffectEvent=hs;var Hs={readContext:aa,use:Lo,useCallback:xs,useContext:aa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Ho,useRef:ls,useState:function(){return Ho(zo)},useDebugValue:bs,useDeferredValue:function(e,t){var n=Po();return L===null?V(n,e,t):Cs(n,L.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=Po().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:As,useHostTransitionStatus:ks,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=Po();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,L,e,t)},useMemoCache:Ro,useCacheRefresh:js};Hs.useEffectEvent=hs;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mu(),i=qa(r);i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(gu(t,e,r),Ya(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mu(),i=qa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(gu(t,e,r),Ya(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mu(),r=qa(n);r.tag=2,t!=null&&(r.callback=t),t=Ja(e,r,n),t!==null&&(gu(t,e,n),Ya(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ni(e)}function Ys(e){console.error(e)}function Xs(e){ni(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=qa(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=qa(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&na(t,n,a,!0),n=so.current,n!==null){switch(n.tag){case 31:case 13:return co===null?Ou():n.alternate===null&&Gl===0&&(Gl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ku(e,r,a)),!1;case 22:return n.flags|=65536,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ku(e,r,a)),!1}throw Error(i(435,n.tag))}return Ku(e,r,a),Ou(),!1}if(P)return t=so.current,t===null?(r!==Hi&&(t=Error(i(423),{cause:r}),Yi(wi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=wi(r,n),a=$s(e.stateNode,r,a),Xa(e,a),Gl!==4&&(Gl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Hi&&(e=Error(i(422),{cause:r}),Yi(wi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=wi(o,n),Zl===null?Zl=[o]:Zl.push(o),Gl!==4&&(Gl=2),t===null)return!0;r=wi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Xa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Xa(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Ua(t,null,n,r):Ha(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ia(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!ic?(jo(e,t,i),Ac(e,t,i)):(P&&s&&Ii(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!hi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?kr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=gi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wa(t,a===null?null:a.cachePool),a===null?ao():io(t,a),fo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&wa(t,null),ao(),po(t)):(wa(t,a.cachePool),io(t,a),po(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=Ca();return a=a===null?null:{parent:da._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&wa(t,null),ao(),fo(t),e!==null&&na(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ha(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,mo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(P){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(uo(t),(e=N)?(e=af(e,Vi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(uo(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||na(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,li(e,s),gu(r,e,s),rc;Ou(),t=pc(e,t,n)}else e=o.treeContext,N=lf(s.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=fc(t,r),t.flags|=4096;return t}return e=gi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ia(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!ic?(jo(e,t,i),Ac(e,t,i)):(P&&r&&Ii(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ia(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!ic?(jo(e,t,a),Ac(e,t,a)):(P&&r&&Ii(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ia(t),t.stateNode===null){var a=fi,o=n.contextType;typeof o==`object`&&o&&(a=aa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ga(t),o=n.contextType,a.context=typeof o==`object`&&o?aa(o):fi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),$a(t,r,a,i),Qa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=fi,typeof u==`object`&&u&&(o=aa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Wa=!1;var f=t.memoizedState;a.state=f,$a(t,r,a,i),Qa(),l=t.memoizedState,s||f!==l||Wa?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Wa||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ka(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=fi,typeof l==`object`&&l&&(c=aa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Wa=!1,f=t.memoizedState,a.state=f,$a(t,r,a,i),Qa();var p=t.memoizedState;o!==d||f!==p||Wa||e!==null&&e.dependencies!==null&&ra(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Wa||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ra(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ha(t,e.child,null,i),t.child=Ha(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return qi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ta()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(ho.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(P){if(a?lo(t):po(t),(e=N)?(e=af(e,Vi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(po(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=yi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(lo(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(lo(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(po(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=yi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ha(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(po(t),t.child=e.child,t.flags|=128,t=null);else if(lo(t),sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Yi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||na(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,li(e,r),gu(s,e,r),rc;of(c)||Ou(),t=Ec(e,t,n)}else of(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,N=lf(c.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(po(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=gi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=yi(c,a,n,null),c.flags|=2):c=gi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ta():(l=da._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(lo(t),n=e.child,e=n.sibling,n=gi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=mi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ha(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ea(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=ho.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,j(ho,o),ac(e,t,r,n),r=P?Oi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(na(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ra(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:ge(t,t.stateNode.containerInfo),$i(t,da,e.memoizedState.cache),qi();break;case 27:case 5:ve(t);break;case 4:ge(t,t.stateNode.containerInfo);break;case 10:$i(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,uo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(lo(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(lo(t),t.flags|=128,null);lo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(na(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(ho,ho.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:$i(t,da,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,P&&t.flags&1048576&&Fi(t,Oi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ma(t.elementType),t.type=e,typeof e==`function`)hi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===E){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=ae(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ge(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ka(e,t),$a(t,r,null,n);var s=t.memoizedState;if(r=s.cache,$i(t,da,r),r!==o.cache&&ta(t,[da],n,!0),Qa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=wi(Error(i(424)),t),Yi(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(N=lf(e.firstChild),zi=t,P=!0,Bi=null,Vi=!0,n=Ua(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(qi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=Af(t.type,null,t.pendingProps,null))?t.memoizedState=n:P||(n=t.type,e=t.pendingProps,r=Vd(me.current).createElement(n),r[pt]=t,r[mt]=e,Fd(r,n,e),Et(r),t.stateNode=r):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ve(t),e===null&&P&&(r=t.stateNode=pf(t.type,t.pendingProps,me.current),zi=t,Vi=!0,a=N,Qd(t.type)?(uf=a,N=lf(r.firstChild)):N=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((a=r=N)&&(r=nf(r,t.type,t.pendingProps,Vi),r===null?a=!1:(t.stateNode=r,zi=t,N=lf(r.firstChild),Vi=!1,a=!0)),a||Ui(t)),ve(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),$f._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&P&&((e=n=N)&&(n=rf(n,t.pendingProps,Vi),n===null?e=!1:(t.stateNode=n,zi=t,N=null,e=!0)),e||Ui(t)),null;case 13:return Cc(e,t,n);case 4:return ge(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ha(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,$i(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ia(t),a=aa(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return ia(t),r=aa(da),e===null?(a=Ca(),a===null&&(a=K,o=fa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ga(t),$i(t,da,a)):((e.lanes&n)!==0&&(Ka(e,t),$a(t,null,null,n),Qa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,$i(t,da,r),r!==a.cache&&ta(t,[da],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),$i(t,da,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Tu())e.flags|=8192;else throw Na=ka,Da}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t))if(Tu())e.flags|=8192;else throw Na=ka,Da}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,Xl|=t)}function Rc(e,t){if(!P)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Li(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),F(da),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ji())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(ye(t),n=me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=fe.current,Ki(t)?Wi(t,e):(e=pf(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(ye(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=fe.current,Ki(t))Wi(t,o);else{var s=Vd(me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Fd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=me.current,Ki(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=zi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Nd(e.nodeValue,n)),e||Ui(t,!0)}else e=Vd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ki(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(mo(t),t):(mo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(mo(t),t):(mo(t),null)}return mo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return _e(),e===null&&Cd(t.stateNode.containerInfo),U(t),null;case 10:return F(t.type),U(t),null;case 19:if(de(ho),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(Gl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_i(n,e),n=n.sibling;return j(ho,ho.current&1|2),P&&Pi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Me()>nu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!P)return U(t),null}else 2*Me()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Me(),e.sibling=null,n=ho.current,j(ho,a?n&1|2:n&1),P&&Pi(t,r.treeForkCount),e);case 22:case 23:return mo(t),oo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&de(Sa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),F(da),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Li(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return F(da),_e(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ye(t),null;case 31:if(t.memoizedState!==null){if(mo(t),t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(ho),null;case 4:return _e(),null;case 10:return F(t.type),null;case 22:case 23:return mo(t),oo(),e!==null&&de(Sa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return F(da),null;case 25:return null;default:return null}}function Vc(e,t){switch(Li(t),t.tag){case 3:F(da),_e();break;case 26:case 27:case 5:ye(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&mo(t);break;case 13:mo(t);break;case 19:de(ho);break;case 10:F(t.type);break;case 22:case 23:mo(t),oo(),e!==null&&de(Sa);break;case 24:F(da)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){X(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){X(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){X(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{to(t,n)}catch(t){X(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){X(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){X(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){X(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){X(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){X(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[mt]=t}catch(t){X(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[pt]=e,t[mt]=n}catch(t){X(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,zd=cp,e=Nr(e),Pr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},cp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){X(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:tf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){X(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){X(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{to(e,t)}catch(e){X(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yu.bind(null,n),cf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Qd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),mf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){X(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){X(n,t,e)}break;case 18:W!==null&&(ll?(e=W,$d(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):$d(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){X(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){X(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Xu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Qd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Fd(o,r,n),o[pt]=e,Et(o),r=o;break a;case`link`:var s=Hf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Hf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,Et(o),r=o}e.stateNode=r}else Uf(a,e.type,e.stateNode);else e.stateNode=Lf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Uf(a,e.type,e.stateNode):Lf(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){X(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){X(e,e.return,t)}}break;case 3:if(Vf=null,a=_l,_l=_f(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){X(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=_f(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Me()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){X(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){X(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?ef(m,!0):ef(l.stateNode,!1)}catch(e){X(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){X(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:mf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){X(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)eo(c[i],s)}catch(e){X(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pa(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){X(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Kf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=_f(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:pa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=aa(da),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return aa(da).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,au=0,ou=null,su=null,cu=0,lu=0,uu=null,du=null,fu=0,pu=null;function mu(){return G&2&&J!==0?J&-J:k.T===null?ut():fd()}function hu(){if(Yl===0)if(!(J&536870912)||P){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),Yl=e}else Yl=536870912;return e=so.current,e!==null&&(e.flags|=32),Yl}function gu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Cu(e,0),bu(e,J,Yl,!1)),rt(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(ql|=n),Gl===4&&bu(e,J,Yl,!1)),id(e))}function _u(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||$e(e,t),a=r?ju(e,t):ku(e,t,!0),o=r;do{if(a===0){Hl&&!r&&bu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!yu(n)){a=ku(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Cu(c,s).flags|=256),s=ku(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Cu(e,0),bu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:bu(r,t,Yl,!Vl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Me(),10<a)){if(bu(r,t,Yl,!Vl),Qe(r,0,!0)!==0)break a;cu=t,r.timeoutHandle=qd(vu.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,`Throttled`,-0,0),a);break a}vu(r,n,Ql,ru,$l,t,Yl,ql,Xl,Vl,o,null,-0,0)}}break}while(1);id(e)}function vu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Ml(t,a,d);var m=(a&62914560)===a?eu-Me():(a&4194048)===a?tu-Me():0;if(m=Jf(d,m),m!==null){cu=a,e.cancelPendingCommit=m(Ru.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),bu(e,a,o,!l);return}}Ru(e,t,a,n,r,i,o,s,c)}function yu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Or(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function xu(){return G&6?!0:(ad(0,!1),!1)}function Su(){if(q!==null){if(Y===0)var e=q.return;else e=q,Qi=Zi=null,Mo(e),Ia=null,La=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Cu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),cu=0,Su(),K=e,q=n=gi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=$e(e,t),Ul=!1,Xl=Yl=Jl=ql=Kl=Gl=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,oi(),n}function wu(e,t){I=null,k.H=Bs,t===Ea||t===Oa?(t=Pa(),Y=3):t===Da?(t=Pa(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(Gl=1,Zs(e,wi(t,e.current)))}function Tu(){var e=so.current;return e===null?!0:(J&4194048)===J?co===null:(J&62914560)===J||J&536870912?e===co:!1}function Eu(){var e=k.H;return k.H=Bs,e===null?Bs:e}function Du(){var e=k.A;return k.A=Rl,e}function Ou(){Gl=4,Vl||(J&4194048)!==J&&so.current!==null||(Hl=!0),!(Kl&134217727)&&!(ql&134217727)||K===null||bu(K,J,Yl,!1)}function ku(e,t,n){var r=G;G|=2;var i=Eu(),a=Du();(K!==e||J!==t)&&(ru=null,Cu(e,t)),t=!1;var o=Gl;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:Su(),o=6;break a;case 3:case 2:case 9:case 6:so.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Fu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Fu(e,s,c,l)}}Au(),o=Gl;break}catch(t){wu(e,t)}while(1);return t&&e.shellSuspendCounter++,Qi=Zi=null,G=r,k.H=i,k.A=a,q===null&&(K=null,J=0,oi()),o}function Au(){for(;q!==null;)Nu(q)}function ju(e,t){var n=G;G|=2;var r=Eu(),a=Du();K!==e||J!==t?(ru=null,nu=Me()+500,Cu(e,t)):Hl=$e(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Fu(e,t,o,1);break;case 2:case 9:if(Aa(o)){Y=0,Bl=null,Pu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),id(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Aa(o)?(Y=0,Bl=null,Pu(t)):(Y=0,Bl=null,Fu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Gf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Iu(u))}break b}}Y=0,Bl=null,Fu(e,t,o,5);break;case 6:Y=0,Bl=null,Fu(e,t,o,6);break;case 8:Su(),Gl=6;break a;default:throw Error(i(462))}}Mu();break}catch(t){wu(e,t)}while(1);return Qi=Zi=null,k.H=r,k.A=a,G=n,q===null?(K=null,J=0,oi(),Gl):0}function Mu(){for(;q!==null&&!Ae();)Nu(q)}function Nu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Iu(e):q=t}function Pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Vc(n,t),t=q=_i(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Iu(e):q=t}function Fu(e,t,n,r){Qi=Zi=null,Mo(t),Ia=null,La=0;var i=t.return;try{if(nc(e,i,t,n,J)){Gl=1,Zs(e,wi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;Gl=1,Zs(e,wi(n,e.current)),q=null;return}t.flags&32768?(P||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=so.current,r!==null&&r.tag===13&&(r.flags|=16384))),Lu(t,e)):Iu(t)}function Iu(e){var t=e;do{if(t.flags&32768){Lu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);Gl===0&&(Gl=5)}function Lu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);Gl=6,q=null}function Ru(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Uu();while(au!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ai,it(e,n,o,s,c,l),e===K&&(q=K=null,J=0),su=t,ou=e,cu=n,lu=o,uu=a,du=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Zu(Ie,function(){return Wu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=k.T,k.T=null,a=A.p,A.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,A.p=a,k.T=r}}au=1,zu(),Bu(),Vu()}}function zu(){if(au===1){au=0;var e=ou,t=su,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=G;G|=4;try{vl(t,e);var a=Bd,o=Nr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Mr(s.ownerDocument.documentElement,s)){if(c!==null&&Pr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=jr(s,h),v=jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}cp=!!zd,Bd=zd=null}finally{G=i,A.p=r,k.T=n}}e.current=t,au=2}}function Bu(){if(au===2){au=0;var e=ou,t=su,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,A.p=r,k.T=n}}au=3}}function Vu(){if(au===4||au===3){au=0,je();var e=ou,t=su,n=cu,r=du;t.subtreeFlags&10256||t.flags&10256?au=5:(au=0,su=ou=null,Hu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),lt(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=A.p,A.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,A.p=i}}cu&3&&Uu(),id(e),i=e.pendingLanes,n&261930&&i&42?e===pu?fu++:(fu=0,pu=e):fu=0,ad(0,!1)}}function Hu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pa(t)))}function Uu(){return zu(),Bu(),Vu(),Wu()}function Wu(){if(au!==5)return!1;var e=ou,t=lu;lu=0;var n=lt(cu),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=uu,uu=null;var o=ou,s=cu;if(au=0,su=ou=null,cu=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,ad(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{A.p=a,k.T=r,Hu(e,t)}}function Gu(e,t,n){t=wi(n,t),t=$s(e.stateNode,t,2),e=Ja(e,t,2),e!==null&&(rt(e,2),id(e))}function X(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=wi(n,e),n=ec(2),r=Ja(t,n,2),r!==null&&(tc(n,r,t,e),rt(r,2),id(r));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=qu.bind(null,e,t,n),t.then(e,e))}function qu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(Gl===4||Gl===3&&(J&62914560)===J&&300>Me()-eu?!(G&2)&&Cu(e,0):Jl|=n,Xl===J&&(Xl=0)),id(e)}function Ju(e,t){t===0&&(t=tt()),e=li(e,t),e!==null&&(rt(e,t),id(e))}function Yu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Xu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ju(e,n)}function Zu(e,t){return Oe(e,t)}var Qu=null,$u=null,ed=!1,td=!1,nd=!1,rd=0;function id(e){e!==$u&&e.next===null&&($u===null?Qu=$u=e:$u=$u.next=e),td=!0,ed||(ed=!0,dd())}function ad(e,t){if(!nd&&td){nd=!0;do for(var n=!1,r=Qu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ud(r,a))}else a=J,a=Qe(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,ud(r,a));r=r.next}while(n);nd=!1}}function od(){sd()}function sd(){td=ed=!1;var e=0;rd!==0&&Kd()&&(e=rd);for(var t=Me(),n=null,r=Qu;r!==null;){var i=r.next,a=cd(r,t);a===0?(r.next=null,n===null?Qu=i:n.next=i,i===null&&($u=n)):(n=r,(e!==0||a&3)&&(td=!0)),r=i}au!==0&&au!==5||ad(e,!1),rd!==0&&(rd=0)}function cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ke(r),lt(n)){case 2:case 8:n=Fe;break;case 32:n=Ie;break;case 268435456:n=Re;break;default:n=Ie}return r=ld.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function ld(e,t){if(au!==0&&au!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Uu()&&e.callbackNode!==n)return null;var r=J;return r=Qe(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(_u(e,r,t),cd(e,Me()),e.callbackNode!=null&&e.callbackNode===n?ld.bind(null,e):null)}function ud(e,t){if(Uu())return null;_u(e,t,!0)}function dd(){Xd(function(){G&6?Oe(Pe,od):sd()})}function fd(){if(rd===0){var e=ga;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),rd=e}return rd}function pd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function md(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=pd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?pd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rd!==0){var e=o?md(i,o):new FormData(i);Es(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?md(i,o):new FormData(i),Es(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var gd=0;gd<ei.length;gd++){var _d=ei[gd];ti(_d.toLowerCase(),`on`+(_d[0].toUpperCase()+_d.slice(1)))}ti(Kr,`onAnimationEnd`),ti(qr,`onAnimationIteration`),ti(Jr,`onAnimationStart`),ti(`dblclick`,`onDoubleClick`),ti(`focusin`,`onFocus`),ti(`focusout`,`onBlur`),ti(Yr,`onTransitionRun`),ti(Xr,`onTransitionStart`),ti(Zr,`onTransitionCancel`),ti(Qr,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var vd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),yd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(vd));function bd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}}}}function Z(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(wd(t,e,2,!1),n.add(r))}function xd(e,t,n){var r=0;t&&(r|=4),wd(n,e,r,t)}var Sd=`_reactListening`+Math.random().toString(36).slice(2);function Cd(e){if(!e[Sd]){e[Sd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(yd.has(t)||xd(t,!1,e),xd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sd]||(t[Sd]=!0,xd(`selectionchange`,!1,t))}}function wd(e,t,n,r){switch(hp(t)){case 2:var i=lp;break;case 8:i=up;break;default:i=dp}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Td(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=$r.get(e);if(c!==void 0){var l=On,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case Kr:case qr:case Jr:l=Rn;break;case Qr:l=Yn;break;case`scroll`:case`scrollend`:l=An;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Ed(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Od,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&kd(s,c,l,d,!1),u!==null&&f!==null&&kd(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=gr;else if(ur(c))if(_r)v=Er;else{v=wr;var y=Cr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=gr):v=Tr;if(v&&=v(e,r)){dr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(ur(y)||y.contentEditable===`true`)&&(Ir=y,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,Br(s,n,i);break;case`selectionchange`:if(Fr)break;case`keydown`:case`keyup`:Br(s,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else M?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(M||x!==`onCompositionStart`?x===`onCompositionEnd`&&M&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,M=!0)),y=Dd(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?sr(e,n):cr(e,n))&&(x=Dd(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),hd(s,e,r,n,i)}bd(s,t)})}function Ed(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Ed(e,i,a)),i=hn(e,t),i!=null&&r.push(Ed(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Od(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Ed(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Ed(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ad=/\r\n?/g,jd=/\u0000|\uFFFD/g;function Md(e){return(typeof e==`string`?e:``+e).replace(Ad,`
`).replace(jd,``)}function Nd(e,t){return t=Md(t),Md(e)===t}function Q(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Q(e,t,`name`,a.name,a,null),Q(e,t,`formEncType`,a.formEncType,a,null),Q(e,t,`formMethod`,a.formMethod,a,null),Q(e,t,`formTarget`,a.formTarget,a,null)):(Q(e,t,`encType`,a.encType,a,null),Q(e,t,`method`,a.method,a,null),Q(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Z(`beforetoggle`,e),Z(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Pd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Z(`error`,e),Z(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,o,s,n,null)}}a&&Q(e,t,`srcSet`,n.srcSet,n,null),r&&Q(e,t,`src`,n.src,n,null);return;case`input`:Z(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Q(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Z(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Q(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Z(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Q(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Q(e,t,l,r,n,null)}return;case`dialog`:Z(`beforetoggle`,e),Z(`toggle`,e),Z(`cancel`,e),Z(`close`,e);break;case`iframe`:case`object`:Z(`load`,e);break;case`video`:case`audio`:for(r=0;r<vd.length;r++)Z(vd[r],e);break;case`image`:Z(`error`,e),Z(`load`,e);break;case`details`:Z(`toggle`,e);break;case`embed`:case`source`:case`link`:Z(`error`,e),Z(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Q(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Q(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Q(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Q(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Q(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Q(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Q(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Q(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Q(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Q(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Q(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Q(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Q(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e===Gd?!1:(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function Qd(e){return e===`head`}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)mf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,mf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&mf(e.ownerDocument.body);n=i}while(n);Pp(t)}function ef(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function tf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:tf(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lf(e.nextSibling),e===null)break}return null}function rf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lf(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lf(e.nextSibling),e===null))return null;return e}function of(e){return e.data===`$?`||e.data===`$~`}function sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var uf=null;function df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pf(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var hf=new Map,gf=new Set;function _f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vf=A.d;A.d={f:yf,r:bf,D:Cf,C:wf,L:Tf,m:Ef,X:Of,S:Df,M:kf};function yf(){var e=vf.f(),t=xu();return e||t}function bf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?Os(t):vf.r(e)}var xf=typeof document>`u`?null:document;function Sf(e,t,n){var r=xf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),gf.has(i)||(gf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Cf(e){vf.D(e),Sf(`dns-prefetch`,e,null)}function wf(e,t){vf.C(e,t),Sf(`preconnect`,e,t)}function Tf(e,t,n){vf.L(e,t,n);var r=xf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=jf(e);break;case`script`:a=Ff(e)}hf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),hf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Mf(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Fd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Ef(e,t){vf.m(e,t);var n=xf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!hf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),hf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Df(e,t,n){vf.S(e,t,n);var r=xf;if(r&&e){var i=Tt(r).hoistableStyles,a=jf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Mf(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=hf.get(a))&&zf(e,n);var c=o=r.createElement(`link`);Et(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Rf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Of(e,t){vf.X(e,t);var n=xf;if(n&&e){var r=Tt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=f({src:e,async:!0},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),Et(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t){vf.M(e,t);var n=xf;if(n&&e){var r=Tt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),Et(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t,n,r){var a=(a=me.current)?_f(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=jf(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=jf(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Mf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),hf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hf.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function jf(e){return`href="`+Gt(e)+`"`}function Mf(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),Et(t),e.head.appendChild(t))}function Ff(e){return`[src="`+Gt(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Fd(r,`style`,a),Rf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=jf(n.href);var o=e.querySelector(Mf(a));if(o)return t.state.loading|=4,t.instance=o,Et(o),o;r=Nf(n),(a=hf.get(a))&&zf(r,a),o=(e.ownerDocument||e).createElement(`link`),Et(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Fd(o,`link`,r),t.state.loading|=4,Rf(o,n.precedence,e),t.instance=o;case`script`:return o=Ff(n.src),(a=e.querySelector(If(o)))?(t.instance=a,Et(a),a):(r=n,(a=hf.get(o))&&(r=f({},n),Bf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Et(a),Fd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Rf(r,n.precedence,e));return t.instance}function Rf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Vf=null;function Hf(e,t,n){if(Vf===null){var r=new Map,i=Vf=new Map;i.set(n,r)}else i=Vf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Wf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Gf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Kf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=jf(r.href),a=t.querySelector(Mf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Nf(r),(i=hf.get(i))&&zf(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Yf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var qf=0;function Jf(e,t){return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&qf===0&&(qf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xf=null;function Zf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xf=new Map,t.forEach(Qf,e),Xf=null,Yf.call(e))}function Qf(e,t){if(!(t.state.loading&4)){var n=Xf.get(e);if(n)var r=n.get(null);else{n=new Map,Xf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $f={$$typeof:C,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function ep(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function tp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ep(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=mi(3,null,null,t),e.current=a,a.stateNode=e,t=fa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ga(a),e}function np(e){return e?(e=fi,e):fi}function rp(e,t,n,r,i,a){i=np(i),r.context===null?r.context=i:r.pendingContext=i,r=qa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ja(e,r,t),n!==null&&(gu(n,e,t),Ya(n,e,t))}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ap(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function op(e){if(e.tag===13||e.tag===31){var t=li(e,67108864);t!==null&&gu(t,e,67108864),ap(e,67108864)}}function sp(e){if(e.tag===13||e.tag===31){var t=mu();t=ct(t);var n=li(e,t);n!==null&&gu(n,e,t),ap(e,t)}}var cp=!0;function lp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,dp(e,t,n,r)}finally{A.p=a,k.T=i}}function up(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,dp(e,t,n,r)}finally{A.p=a,k.T=i}}function dp(e,t,n,r){if(cp){var i=fp(r);if(i===null)Td(e,t,r,pp,n),wp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(wp(e,r),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}id(a),!(G&6)&&(nu=Me()+500,ad(0,!1))}}break;case 31:case 13:s=li(a,2),s!==null&&gu(s,a,2),xu(),ap(a,2)}if(a=fp(r),a===null&&Td(e,t,r,pp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Td(e,t,r,null,n)}}function fp(e){return e=ln(e),mp(e)}var pp=null;function mp(e){if(pp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pp=e,null}function hp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ne()){case Pe:return 2;case Fe:return 8;case Ie:case Le:return 32;case Re:return 268435456;default:return 32}default:return 32}}var gp=!1,_p=null,vp=null,yp=null,bp=new Map,xp=new Map,Sp=[],Cp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function wp(e,t){switch(e){case`focusin`:case`focusout`:_p=null;break;case`dragenter`:case`dragleave`:vp=null;break;case`mouseover`:case`mouseout`:yp=null;break;case`pointerover`:case`pointerout`:bp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:xp.delete(t.pointerId)}}function Tp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&op(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return _p=Tp(_p,e,t,n,r,i),!0;case`dragenter`:return vp=Tp(vp,e,t,n,r,i),!0;case`mouseover`:return yp=Tp(yp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return bp.set(a,Tp(bp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,xp.set(a,Tp(xp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=Ct(n),t!==null&&op(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){gp=!1,_p!==null&&Op(_p)&&(_p=null),vp!==null&&Op(vp)&&(vp=null),yp!==null&&Op(yp)&&(yp=null),bp.forEach(kp),xp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,gp||(gp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(mp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,Es(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}_p!==null&&jp(_p,e),vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp.forEach(t),xp.forEach(t);for(var n=0;n<Sp.length;n++){var r=Sp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sp.length&&(n=Sp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Sp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(mp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;rp(n,mu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rp(e.current,2,null,e,null,null),xu(),t[ht]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sp.length&&t!==0&&t<Sp[n].priority;n++);Sp.splice(n,0,e),n===0&&Dp(e)}};var Rp=n.version;if(Rp!==`19.2.6`)throw Error(i(527,Rp,`19.2.6`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{Ve=Bp.inject(zp),He=Bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,r,null,o,s,c,Fp),e[ht]=t.current,Cd(e),new Ip(t)}})),y=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()})),b=`modulepreload`,x=function(e){return`/Balaji-Infotech/`+e},S={},C=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=x(t,n),t in S)return;S[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:b,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},w=u(p(),1),T=`popstate`;function ee(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function E(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return re(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ie(t)}return oe(t,n,null,e)}function D(e,t){if(e===!1||e==null)throw Error(t)}function O(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function te(){return Math.random().toString(36).substring(2,10)}function ne(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function re(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ae(t):t,state:n,key:t&&t.key||r||te(),mask:i}}function ie({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ae(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function oe(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ee(e)?e:re(h.location,e,t);n&&n(r,e),l=u()+1;let d=ne(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ee(e)?e:re(h.location,e,t);n&&n(r,e),l=u();let i=ne(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return k(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(T,d),c=e,()=>{i.removeEventListener(T,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function k(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),D(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:ie(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function A(e,t,n=`/`){return se(e,t,n,!1)}function se(e,t,n,r,i){let a=Te((typeof t==`string`?ae(t):t).pathname||`/`,n);if(a==null)return null;let o=i??le(e),s=null,c=we(a);for(let e=0;s==null&&e<o.length;++e)s=xe(o[e],c,r);return s}function ce(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function le(e){let t=ue(e);return j(t),t}function ue(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;D(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Pe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(D(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ue(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ye(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of de(e.path))a(e,t,!0,n)}),t}function de(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=de(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function j(e){e.sort((e,t)=>e.score===t.score?be(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var fe=/^:[\w-]+$/,pe=3,me=2,he=1,ge=10,_e=-2,ve=e=>e===`*`;function ye(e,t){let n=e.split(`/`),r=n.length;return n.some(ve)&&(r+=_e),t&&(r+=me),n.filter(e=>!ve(e)).reduce((e,t)=>e+(fe.test(t)?pe:t===``?he:ge),r)}function be(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function xe(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Pe([a,u.pathname]),pathnameBase:Ie(Pe([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Pe([a,u.pathnameBase]))}return o}function Se(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ce(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ce(e,t=!1,n=!0){O(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function we(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return O(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Te(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function De(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ae(e):e,a;return n?(n=Ne(n),a=n.startsWith(`/`)?Oe(n.substring(1),`/`):Oe(n,t)):a=t,{pathname:a,search:Le(r),hash:Re(i)}}function Oe(e,t){let n=Fe(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ke(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ae(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function je(e){let t=Ae(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Me(e,t,n,r=!1){let i;typeof e==`string`?i=ae(e):(i={...e},D(!i.pathname||!i.pathname.includes(`?`),ke(`?`,`pathname`,`search`,i)),D(!i.pathname||!i.pathname.includes(`#`),ke(`#`,`pathname`,`hash`,i)),D(!i.search||!i.search.includes(`#`),ke(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=De(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ne=e=>e.replace(/\/\/+/g,`/`),Pe=e=>Ne(e.join(`/`)),Fe=e=>e.replace(/\/+$/,``),Ie=e=>Fe(e).replace(/^\/*/,`/`),Le=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Re=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,ze=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Be(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ve(e){return Pe(e.map(e=>e.route.path).filter(Boolean))||`/`}var He=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ue(e,t){let n=e;if(typeof n!=`string`||!Ee.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(He)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Te(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{O(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var We=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(We);var Ge=[`GET`,...We];new Set(Ge);var Ke=w.createContext(null);Ke.displayName=`DataRouter`;var qe=w.createContext(null);qe.displayName=`DataRouterState`;var Je=w.createContext(!1);function Ye(){return w.useContext(Je)}var Xe=w.createContext({isTransitioning:!1});Xe.displayName=`ViewTransition`;var Ze=w.createContext(new Map);Ze.displayName=`Fetchers`;var Qe=w.createContext(null);Qe.displayName=`Await`;var $e=w.createContext(null);$e.displayName=`Navigation`;var et=w.createContext(null);et.displayName=`Location`;var tt=w.createContext({outlet:null,matches:[],isDataRoute:!1});tt.displayName=`Route`;var nt=w.createContext(null);nt.displayName=`RouteError`;var rt=`REACT_ROUTER_ERROR`,it=`REDIRECT`,at=`ROUTE_ERROR_RESPONSE`;function ot(e){if(e.startsWith(`${rt}:${it}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function st(e){if(e.startsWith(`${rt}:${at}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new ze(t.status,t.statusText,t.data)}catch{}}function ct(e,{relative:t}={}){D(lt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=w.useContext($e),{hash:i,pathname:a,search:o}=gt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Pe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function lt(){return w.useContext(et)!=null}function ut(){return D(lt(),`useLocation() may be used only in the context of a <Router> component.`),w.useContext(et).location}var dt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ft(e){w.useContext($e).static||w.useLayoutEffect(e)}function pt(){let{isDataRoute:e}=w.useContext(tt);return e?Ft():mt()}function mt(){D(lt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=w.useContext(Ke),{basename:t,navigator:n}=w.useContext($e),{matches:r}=w.useContext(tt),{pathname:i}=ut(),a=JSON.stringify(je(r)),o=w.useRef(!1);return ft(()=>{o.current=!0}),w.useCallback((r,s={})=>{if(O(o.current,dt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Me(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Pe([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}w.createContext(null);function ht(){let{matches:e}=w.useContext(tt);return e[e.length-1]?.params??{}}function gt(e,{relative:t}={}){let{matches:n}=w.useContext(tt),{pathname:r}=ut(),i=JSON.stringify(je(n));return w.useMemo(()=>Me(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function _t(e,t){return vt(e,t)}function vt(e,t,n){D(lt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=w.useContext($e),{matches:i}=w.useContext(tt),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Lt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ut(),d;if(t){let e=typeof t==`string`?ae(t):t;D(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):A(e,{pathname:p});O(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),O(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Tt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Pe([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Pe([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?w.createElement(et.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function yt(){let e=Pt(),t=Be(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=w.createElement(w.Fragment,null,w.createElement(`p`,null,`💿 Hey developer 👋`),w.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,w.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,w.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),w.createElement(w.Fragment,null,w.createElement(`h2`,null,`Unexpected Application Error!`),w.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?w.createElement(`pre`,{style:i},n):null,o)}var bt=w.createElement(yt,null),xt=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=st(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:w.createElement(tt.Provider,{value:this.props.routeContext},w.createElement(nt.Provider,{value:e,children:this.props.component}));return this.context?w.createElement(Ct,{error:e},t):t}};xt.contextType=Je;var St=new WeakMap;function Ct({children:e,error:t}){let{basename:n}=w.useContext($e);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=ot(t.digest);if(e){let r=St.get(t);if(r)throw r;let i=Ue(e.location,n);if(He&&!St.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw St.set(t,n),n}return w.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function wt({routeContext:e,match:t,children:n}){let r=w.useContext(Ke);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(tt.Provider,{value:e},n)}function Tt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);D(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ve(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||bt,o&&(s<0&&c===0?(Lt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?w.createElement(n.route.Component,null):n.route.element?n.route.element:e,w.createElement(wt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?w.createElement(xt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Et(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dt(e){let t=w.useContext(Ke);return D(t,Et(e)),t}function Ot(e){let t=w.useContext(qe);return D(t,Et(e)),t}function kt(e){let t=w.useContext(tt);return D(t,Et(e)),t}function At(e){let t=kt(e),n=t.matches[t.matches.length-1];return D(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function jt(){return At(`useRouteId`)}function Mt(){return Ot(`useNavigation`).navigation}function Nt(){let{matches:e,loaderData:t}=Ot(`useMatches`);return w.useMemo(()=>e.map(e=>ce(e,t)),[e,t])}function Pt(){let e=w.useContext(nt),t=Ot(`useRouteError`),n=At(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Ft(){let{router:e}=Dt(`useNavigate`),t=At(`useNavigate`),n=w.useRef(!1);return ft(()=>{n.current=!0}),w.useCallback(async(r,i={})=>{O(n.current,dt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var It={};function Lt(e,t,n){!t&&!It[e]&&(It[e]=!0,O(!1,n))}w.memo(Rt);function Rt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return vt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function zt(e){D(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Bt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){D(!lt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=w.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ae(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=w.useMemo(()=>{let e=Te(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return O(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:w.createElement($e.Provider,{value:c},w.createElement(et.Provider,{children:t,value:h}))}function Vt({children:e,location:t}){return _t(Ht(e),t)}w.Component;function Ht(e,t=[]){let n=[];return w.Children.forEach(e,(e,r)=>{if(!w.isValidElement(e))return;let i=[...t,r];if(e.type===w.Fragment){n.push.apply(n,Ht(e.props.children,i));return}D(e.type===zt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),D(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Ht(e.props.children,i)),n.push(a)}),n}var Ut=`get`,Wt=`application/x-www-form-urlencoded`;function Gt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Kt(e){return Gt(e)&&e.tagName.toLowerCase()===`button`}function qt(e){return Gt(e)&&e.tagName.toLowerCase()===`form`}function Jt(e){return Gt(e)&&e.tagName.toLowerCase()===`input`}function Yt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Xt(e,t){return e.button===0&&(!t||t===`_self`)&&!Yt(e)}var Zt=null;function Qt(){if(Zt===null)try{new FormData(document.createElement(`form`),0),Zt=!1}catch{Zt=!0}return Zt}var $t=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function en(e){return e!=null&&!$t.has(e)?(O(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wt}"`),null):e}function tn(e,t){let n,r,i,a,o;if(qt(e)){let o=e.getAttribute(`action`);r=o?Te(o,t):null,n=e.getAttribute(`method`)||Ut,i=en(e.getAttribute(`enctype`))||Wt,a=new FormData(e)}else if(Kt(e)||Jt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Te(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Ut,i=en(e.getAttribute(`formenctype`))||en(o.getAttribute(`enctype`))||Wt,a=new FormData(o,e),!Qt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Gt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Ut,r=null,i=Wt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var nn={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},rn=/[&><\u2028\u2029]/g;function an(e){return e.replace(rn,e=>nn[e])}function on(e,t){if(e===!1||e==null)throw Error(t)}function sn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Te(i.pathname,t)===`/`?i.pathname=`${Fe(t)}/_root.${r}`:i.pathname=`${Fe(i.pathname)}.${r}`,i}async function cn(e,t){if(e.id in t)return t[e.id];try{let n=await C(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ln(e){return e!=null&&typeof e.page==`string`}function un(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function dn(e,t,n){return gn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await cn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(un).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function fn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function pn(e,t,{includeHydrateFallback:n}={}){return mn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function mn(e){return[...new Set(e)]}function hn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function gn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!ln(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(hn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function _n(){let e=w.useContext(Ke);return on(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function vn(){let e=w.useContext(qe);return on(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var yn=w.createContext(void 0);yn.displayName=`FrameworkContext`;function bn(){let e=w.useContext(yn);return on(e,`You must render this element inside a <HydratedRouter> element`),e}function xn(e,t){let n=w.useContext(yn),[r,i]=w.useState(!1),[a,o]=w.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=w.useRef(null);w.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),w.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Sn(s,p),onBlur:Sn(c,m),onMouseEnter:Sn(l,p),onMouseLeave:Sn(u,m),onTouchStart:Sn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Sn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Cn({page:e,...t}){let n=Ye(),{router:r}=_n(),i=w.useMemo(()=>A(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?w.createElement(Tn,{page:e,matches:i,...t}):w.createElement(En,{page:e,matches:i,...t}):null}function wn(e){let{manifest:t,routeModules:n}=bn(),[r,i]=w.useState([]);return w.useEffect(()=>{let r=!1;return dn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Tn({page:e,matches:t,...n}){let r=ut(),{future:i}=bn(),{basename:a}=_n(),o=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=sn(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return w.createElement(w.Fragment,null,o.map(e=>w.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function En({page:e,matches:t,...n}){let r=ut(),{future:i,manifest:a,routeModules:o}=bn(),{basename:s}=_n(),{loaderData:c,matches:l}=vn(),u=w.useMemo(()=>fn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=w.useMemo(()=>fn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=sn(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=w.useMemo(()=>pn(d,a),[d,a]),m=wn(d);return w.createElement(w.Fragment,null,f.map(e=>w.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>w.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>w.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Dn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}w.Component;var On=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{On&&(window.__reactRouterVersion=`7.15.0`)}catch{}function kn({basename:e,children:t,useTransitions:n,window:r}){let i=w.useRef();i.current??=E({window:r,v5Compat:!0});let a=i.current,[o,s]=w.useState({action:a.action,location:a.location}),c=w.useCallback(e=>{n===!1?s(e):w.startTransition(()=>s(e))},[n]);return w.useLayoutEffect(()=>a.listen(c),[a,c]),w.createElement(Bt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function An({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=w.useState({action:n.action,location:n.location}),o=w.useCallback(e=>{r===!1?a(e):w.startTransition(()=>a(e))},[r]);return w.useLayoutEffect(()=>n.listen(o),[n,o]),w.createElement(Bt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}An.displayName=`unstable_HistoryRouter`;var jn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mn=w.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=w.useContext($e),v=typeof l==`string`&&jn.test(l),y=Ue(l,h);l=y.to;let b=ct(l,{relative:r}),x=ut(),S=null;if(o){let e=Me(o,[],x.mask?x.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Pe([h,e.pathname])),S=g.createHref(e)}let[C,T,ee]=xn(n,p),E=zn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function D(t){e&&e(t),t.defaultPrevented||E(t)}let O=!(y.isExternal||i),te=w.createElement(`a`,{...p,...ee,href:(O?S:void 0)||y.absoluteURL||b,onClick:O?D:e,ref:Dn(m,T),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return C&&!v?w.createElement(w.Fragment,null,te,w.createElement(Cn,{page:b})):te});Mn.displayName=`Link`;var Nn=w.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=gt(a,{relative:c.relative}),d=ut(),f=w.useContext(qe),{navigator:p,basename:m}=w.useContext($e),h=f!=null&&Yn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Te(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,x=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:x,isTransitioning:h},C=b?e:void 0,T;T=typeof n==`function`?n(S):[n,b?`active`:null,x?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ee=typeof i==`function`?i(S):i;return w.createElement(Mn,{...c,"aria-current":C,className:T,ref:l,style:ee,to:a,viewTransition:o},typeof s==`function`?s(S):s)});Nn.displayName=`NavLink`;var Pn=w.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Ut,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=w.useContext($e),g=Hn(),_=Un(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&jn.test(s);return w.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?w.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Pn.displayName=`Form`;function Fn({getKey:e,storageKey:t,...n}){let r=w.useContext(yn),{basename:i}=w.useContext($e),a=ut(),o=Nt();qn({getKey:e,storageKey:t});let s=w.useMemo(()=>{if(!r||!e)return null;let t=Kn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return w.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${an(JSON.stringify(t||Wn))}, ${an(JSON.stringify(s))})`}})}Fn.displayName=`ScrollRestoration`;function In(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ln(e){let t=w.useContext(Ke);return D(t,In(e)),t}function Rn(e){let t=w.useContext(qe);return D(t,In(e)),t}function zn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=pt(),d=ut(),f=gt(e,{relative:o});return w.useCallback(p=>{if(Xt(p,t)){p.preventDefault();let t=n===void 0?ie(d)===ie(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?w.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Bn=0,Vn=()=>`__${String(++Bn)}__`;function Hn(){let{router:e}=Ln(`useSubmit`),{basename:t}=w.useContext($e),n=jt(),r=e.fetch,i=e.navigate;return w.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=tn(e,t);a.navigate===!1?await r(a.fetcherKey||Vn(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Un(e,{relative:t}={}){let{basename:n}=w.useContext($e),r=w.useContext(tt);D(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...gt(e||`.`,{relative:t})},o=ut();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Pe([n,a.pathname])),ie(a)}var Wn=`react-router-scroll-positions`,Gn={};function Kn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Te(e.pathname,n)||e.pathname},t)),i??=e.key,i}function qn({getKey:e,storageKey:t}={}){let{router:n}=Ln(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Rn(`useScrollRestoration`),{basename:a}=w.useContext($e),o=ut(),s=Nt(),c=Mt();w.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Jn(w.useCallback(()=>{if(c.state===`idle`){let t=Kn(o,s,a,e);Gn[t]=window.scrollY}try{sessionStorage.setItem(t||Wn,JSON.stringify(Gn))}catch(e){O(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(w.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Wn);e&&(Gn=JSON.parse(e))}catch{}},[t]),w.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Gn,()=>window.scrollY,e?(t,n)=>Kn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),w.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{O(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Jn(e,t){let{capture:n}=t||{};w.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Yn(e,{relative:t}={}){let n=w.useContext(Xe);D(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ln(`useViewTransitionState`),i=gt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Te(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Te(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Se(i.pathname,o)!=null||Se(i.pathname,a)!=null}var Xn=u(y(),1);function Zn(){let{pathname:e}=ut();return(0,w.useEffect)(()=>{window.scrollTo({top:0,left:0,behavior:`instant`})},[e]),null}var Qn=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),$n=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),er=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),tr=e=>{let t=er(e);return t.charAt(0).toUpperCase()+t.slice(1)},nr={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},rr=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},ir=(0,w.createContext)({}),ar=()=>(0,w.useContext)(ir),or=(0,w.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=ar()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,w.createElement)(`svg`,{ref:c,...nr,width:t??l??nr.width,height:t??l??nr.height,stroke:e??f,strokeWidth:m,className:Qn(`lucide`,p,i),...!a&&!rr(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,w.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),M=(e,t)=>{let n=(0,w.forwardRef)(({className:n,...r},i)=>(0,w.createElement)(or,{ref:i,iconNode:t,className:Qn(`lucide-${$n(tr(e))}`,`lucide-${e}`,n),...r}));return n.displayName=tr(e),n},sr=M(`activity`,[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]),cr=M(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),lr=M(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),ur=M(`badge-check`,[[`path`,{d:`M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z`,key:`3c2336`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),dr=M(`bell-ring`,[[`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`,key:`vwvbt9`}],[`path`,{d:`M22 8c0-2.3-.8-4.3-2-6`,key:`5bb3ad`}],[`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,key:`11g9vi`}],[`path`,{d:`M4 2C2.8 3.7 2 5.7 2 8`,key:`tap9e0`}]]),fr=M(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),pr=M(`boxes`,[[`path`,{d:`M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z`,key:`lc1i9w`}],[`path`,{d:`m7 16.5-4.74-2.85`,key:`1o9zyk`}],[`path`,{d:`m7 16.5 5-3`,key:`va8pkn`}],[`path`,{d:`M7 16.5v5.17`,key:`jnp8gn`}],[`path`,{d:`M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z`,key:`8zsnat`}],[`path`,{d:`m17 16.5-5-3`,key:`8arw3v`}],[`path`,{d:`m17 16.5 4.74-2.85`,key:`8rfmw`}],[`path`,{d:`M17 16.5v5.17`,key:`k6z78m`}],[`path`,{d:`M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z`,key:`1xygjf`}],[`path`,{d:`M12 8 7.26 5.15`,key:`1vbdud`}],[`path`,{d:`m12 8 4.74-2.85`,key:`3rx089`}],[`path`,{d:`M12 13.5V8`,key:`1io7kd`}]]),mr=M(`briefcase-business`,[[`path`,{d:`M12 12h.01`,key:`1mp3jc`}],[`path`,{d:`M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2`,key:`1ksdt3`}],[`path`,{d:`M22 13a18.15 18.15 0 0 1-20 0`,key:`12hx5q`}],[`rect`,{width:`20`,height:`14`,x:`2`,y:`6`,rx:`2`,key:`i6l2r4`}]]),hr=M(`briefcase`,[[`path`,{d:`M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`,key:`jecpp`}],[`rect`,{width:`20`,height:`14`,x:`2`,y:`6`,rx:`2`,key:`i6l2r4`}]]),gr=M(`building-2`,[[`path`,{d:`M10 12h4`,key:`a56b0p`}],[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M14 21v-3a2 2 0 0 0-4 0v3`,key:`1rgiei`}],[`path`,{d:`M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2`,key:`secmi2`}],[`path`,{d:`M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16`,key:`16ra0t`}]]),_r=M(`building`,[[`path`,{d:`M12 10h.01`,key:`1nrarc`}],[`path`,{d:`M12 14h.01`,key:`1etili`}],[`path`,{d:`M12 6h.01`,key:`1vi96p`}],[`path`,{d:`M16 10h.01`,key:`1m94wz`}],[`path`,{d:`M16 14h.01`,key:`1gbofw`}],[`path`,{d:`M16 6h.01`,key:`1x0f13`}],[`path`,{d:`M8 10h.01`,key:`19clt8`}],[`path`,{d:`M8 14h.01`,key:`6423bh`}],[`path`,{d:`M8 6h.01`,key:`1dz90k`}],[`path`,{d:`M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3`,key:`cabbwy`}],[`rect`,{x:`4`,y:`2`,width:`16`,height:`20`,rx:`2`,key:`1uxh74`}]]),vr=M(`calculator`,[[`rect`,{width:`16`,height:`20`,x:`4`,y:`2`,rx:`2`,key:`1nb95v`}],[`line`,{x1:`8`,x2:`16`,y1:`6`,y2:`6`,key:`x4nwl0`}],[`line`,{x1:`16`,x2:`16`,y1:`14`,y2:`18`,key:`wjye3r`}],[`path`,{d:`M16 10h.01`,key:`1m94wz`}],[`path`,{d:`M12 10h.01`,key:`1nrarc`}],[`path`,{d:`M8 10h.01`,key:`19clt8`}],[`path`,{d:`M12 14h.01`,key:`1etili`}],[`path`,{d:`M8 14h.01`,key:`6423bh`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}],[`path`,{d:`M8 18h.01`,key:`lrp35t`}]]),yr=M(`calendar-days`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}],[`path`,{d:`M8 14h.01`,key:`6423bh`}],[`path`,{d:`M12 14h.01`,key:`1etili`}],[`path`,{d:`M16 14h.01`,key:`1gbofw`}],[`path`,{d:`M8 18h.01`,key:`lrp35t`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}],[`path`,{d:`M16 18h.01`,key:`kzsmim`}]]),br=M(`chart-column`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]]),xr=M(`chart-line`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`m19 9-5 5-4-4-3 3`,key:`2osh9i`}]]),Sr=M(`chart-pie`,[[`path`,{d:`M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z`,key:`pzmjnu`}],[`path`,{d:`M21.21 15.89A10 10 0 1 1 8 2.83`,key:`k2fpak`}]]),Cr=M(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),wr=M(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),Tr=M(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),Er=M(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),Dr=M(`circle-arrow-down`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 8v8`,key:`napkw2`}],[`path`,{d:`m8 12 4 4 4-4`,key:`k98ssh`}]]),Or=M(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),kr=M(`circle-play`,[[`path`,{d:`M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z`,key:`kmsa83`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),Ar=M(`circle-question-mark`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),jr=M(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),Mr=M(`clipboard-check`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`m9 14 2 2 4-4`,key:`df797q`}]]),Nr=M(`clock-3`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6h4`,key:`135r8i`}]]),Pr=M(`cloud-cog`,[[`path`,{d:`m10.852 19.772-.383.924`,key:`r7sl7d`}],[`path`,{d:`m13.148 14.228.383-.923`,key:`1d5zpm`}],[`path`,{d:`M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923`,key:`1ydik7`}],[`path`,{d:`m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544`,key:`1m1vsf`}],[`path`,{d:`m14.772 15.852.923-.383`,key:`660p6e`}],[`path`,{d:`m14.772 18.148.923.383`,key:`hrcpis`}],[`path`,{d:`M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2`,key:`j2q98n`}],[`path`,{d:`m9.228 15.852-.923-.383`,key:`1p9ong`}],[`path`,{d:`m9.228 18.148-.923.383`,key:`6558rz`}]]),Fr=M(`cloud`,[[`path`,{d:`M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z`,key:`p7xjir`}]]),Ir=M(`database-backup`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 12a9 3 0 0 0 5 2.69`,key:`1ui2ym`}],[`path`,{d:`M21 9.3V5`,key:`6k6cib`}],[`path`,{d:`M3 5v14a9 3 0 0 0 6.47 2.88`,key:`i62tjy`}],[`path`,{d:`M12 12v4h4`,key:`1bxaet`}],[`path`,{d:`M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16`,key:`1f4ei9`}]]),Lr=M(`database`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]),Rr=M(`database-zap`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 15 21.84`,key:`14ibmq`}],[`path`,{d:`M21 5V8`,key:`1marbg`}],[`path`,{d:`M21 12L18 17H22L19 22`,key:`zafso`}],[`path`,{d:`M3 12A9 3 0 0 0 14.59 14.87`,key:`1y4wr8`}]]),zr=M(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),Br=M(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Vr=M(`file-pen-line`,[[`path`,{d:`M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z`,key:`ukzhwg`}],[`path`,{d:`M14.487 7.858A1 1 0 0 1 14 7V2`,key:`1klhew`}],[`path`,{d:`M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516`,key:`rxaxab`}],[`path`,{d:`M8 18h1`,key:`13wk12`}]]),Hr=M(`file-search`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`circle`,{cx:`11.5`,cy:`14.5`,r:`2.5`,key:`1bq0ko`}],[`path`,{d:`M13.3 16.3 15 18`,key:`2quom7`}]]),Ur=M(`file-spreadsheet`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M8 13h2`,key:`yr2amv`}],[`path`,{d:`M14 13h2`,key:`un5t4a`}],[`path`,{d:`M8 17h2`,key:`2yhykz`}],[`path`,{d:`M14 17h2`,key:`10kma7`}]]),Wr=M(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),Gr=M(`flag`,[[`path`,{d:`M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528`,key:`1jaruq`}]]),Kr=M(`flask-conical`,[[`path`,{d:`M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2`,key:`18mbvz`}],[`path`,{d:`M6.453 15h11.094`,key:`3shlmq`}],[`path`,{d:`M8.5 2h7`,key:`csnxdl`}]]),qr=M(`folder-archive`,[[`circle`,{cx:`15`,cy:`19`,r:`2`,key:`u2pros`}],[`path`,{d:`M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1`,key:`1jj40k`}],[`path`,{d:`M15 11v-1`,key:`cntcp`}],[`path`,{d:`M15 17v-2`,key:`1279jj`}]]),Jr=M(`folder-sync`,[[`path`,{d:`M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5`,key:`1dkoa9`}],[`path`,{d:`M12 10v4h4`,key:`1czhmt`}],[`path`,{d:`m12 14 1.535-1.605a5 5 0 0 1 8 1.5`,key:`lvuxfi`}],[`path`,{d:`M22 22v-4h-4`,key:`1ewp4q`}],[`path`,{d:`m22 18-1.535 1.605a5 5 0 0 1-8-1.5`,key:`14ync0`}]]),Yr=M(`git-branch`,[[`path`,{d:`M15 6a9 9 0 0 0-9 9V3`,key:`1cii5b`}],[`circle`,{cx:`18`,cy:`6`,r:`3`,key:`1h7g24`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}]]),Xr=M(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),Zr=M(`graduation-cap`,[[`path`,{d:`M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,key:`j76jl0`}],[`path`,{d:`M22 10v6`,key:`1lu8f3`}],[`path`,{d:`M6 12.5V16a6 3 0 0 0 12 0v-3.5`,key:`1r8lef`}]]),Qr=M(`hand-coins`,[[`path`,{d:`M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17`,key:`geh8rc`}],[`path`,{d:`m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9`,key:`1fto5m`}],[`path`,{d:`m2 16 6 6`,key:`1pfhp9`}],[`circle`,{cx:`16`,cy:`9`,r:`2.9`,key:`1n0dlu`}],[`circle`,{cx:`6`,cy:`5`,r:`3`,key:`151irh`}]]),$r=M(`handshake`,[[`path`,{d:`m11 17 2 2a1 1 0 1 0 3-3`,key:`efffak`}],[`path`,{d:`m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4`,key:`9pr0kb`}],[`path`,{d:`m21 3 1 11h-2`,key:`1tisrp`}],[`path`,{d:`M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3`,key:`1uvwmv`}],[`path`,{d:`M3 4h8`,key:`1ep09j`}]]),ei=M(`headset`,[[`path`,{d:`M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z`,key:`12oyoe`}],[`path`,{d:`M21 16v2a4 4 0 0 1-4 4h-5`,key:`1x7m43`}]]),ti=M(`headphones`,[[`path`,{d:`M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3`,key:`1xhozi`}]]),ni=M(`inbox`,[[`polyline`,{points:`22 12 16 12 14 15 10 15 8 12 2 12`,key:`o97t9d`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}]]),ri=M(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),ii=M(`landmark`,[[`path`,{d:`M10 18v-7`,key:`wt116b`}],[`path`,{d:`M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z`,key:`1m329m`}],[`path`,{d:`M14 18v-7`,key:`vav6t3`}],[`path`,{d:`M18 18v-7`,key:`aexdmj`}],[`path`,{d:`M3 22h18`,key:`8prr45`}],[`path`,{d:`M6 18v-7`,key:`1ivflk`}]]),ai=M(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),oi=M(`layout-template`,[[`rect`,{width:`18`,height:`7`,x:`3`,y:`3`,rx:`1`,key:`f1a2em`}],[`rect`,{width:`9`,height:`7`,x:`3`,y:`14`,rx:`1`,key:`jqznyg`}],[`rect`,{width:`5`,height:`7`,x:`16`,y:`14`,rx:`1`,key:`q5h2i8`}]]),si=M(`link-2`,[[`path`,{d:`M9 17H7A5 5 0 0 1 7 7h2`,key:`8i5ue5`}],[`path`,{d:`M15 7h2a5 5 0 1 1 0 10h-2`,key:`1b9ql8`}],[`line`,{x1:`8`,x2:`16`,y1:`12`,y2:`12`,key:`1jonct`}]]),ci=M(`list-checks`,[[`path`,{d:`M13 5h8`,key:`a7qcls`}],[`path`,{d:`M13 12h8`,key:`h98zly`}],[`path`,{d:`M13 19h8`,key:`c3s6r1`}],[`path`,{d:`m3 17 2 2 4-4`,key:`1jhpwq`}],[`path`,{d:`m3 7 2 2 4-4`,key:`1obspn`}]]),li=M(`list-ordered`,[[`path`,{d:`M11 5h10`,key:`1cz7ny`}],[`path`,{d:`M11 12h10`,key:`1438ji`}],[`path`,{d:`M11 19h10`,key:`11t30w`}],[`path`,{d:`M4 4h1v5`,key:`10yrso`}],[`path`,{d:`M4 9h2`,key:`r1h2o0`}],[`path`,{d:`M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02`,key:`xtkcd5`}]]),ui=M(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),di=M(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),fi=M(`map-pinned`,[[`path`,{d:`M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0`,key:`11u0oz`}],[`circle`,{cx:`12`,cy:`8`,r:`2`,key:`1822b1`}],[`path`,{d:`M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712`,key:`q8zwxj`}]]),pi=M(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),mi=M(`message-circle-check`,[[`path`,{d:`M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,key:`1sd12s`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),hi=M(`message-circle-more`,[[`path`,{d:`M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,key:`1sd12s`}],[`path`,{d:`M8 12h.01`,key:`czm47f`}],[`path`,{d:`M12 12h.01`,key:`1mp3jc`}],[`path`,{d:`M16 12h.01`,key:`1l6xoz`}]]),gi=M(`message-square`,[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}]]),_i=M(`network`,[[`rect`,{x:`16`,y:`16`,width:`6`,height:`6`,rx:`1`,key:`4q2zg0`}],[`rect`,{x:`2`,y:`16`,width:`6`,height:`6`,rx:`1`,key:`8cvhb9`}],[`rect`,{x:`9`,y:`2`,width:`6`,height:`6`,rx:`1`,key:`1egb70`}],[`path`,{d:`M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3`,key:`1jsf9p`}],[`path`,{d:`M12 12V8`,key:`2874zd`}]]),vi=M(`package-check`,[[`path`,{d:`M12 22V12`,key:`d0xqtd`}],[`path`,{d:`m16 17 2 2 4-4`,key:`uh5qu3`}],[`path`,{d:`M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753`,key:`kpkbpo`}],[`path`,{d:`M3.29 7 12 12l8.71-5`,key:`19ckod`}],[`path`,{d:`m7.5 4.27 8.997 5.148`,key:`9yrvtv`}]]),yi=M(`package`,[[`path`,{d:`M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z`,key:`1a0edw`}],[`path`,{d:`M12 22V12`,key:`d0xqtd`}],[`polyline`,{points:`3.29 7 12 12 20.71 7`,key:`ousv84`}],[`path`,{d:`m7.5 4.27 9 5.15`,key:`1c824w`}]]),bi=M(`phone-call`,[[`path`,{d:`M13 2a9 9 0 0 1 9 9`,key:`1itnx2`}],[`path`,{d:`M13 6a5 5 0 0 1 5 5`,key:`11nki7`}],[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]),xi=M(`phone`,[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]),Si=M(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),Ci=M(`puzzle`,[[`path`,{d:`M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z`,key:`w46dr5`}]]),wi=M(`receipt-indian-rupee`,[[`path`,{d:`M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z`,key:`ycz6yz`}],[`path`,{d:`M8 11h8`,key:`vwpz6n`}],[`path`,{d:`M8 7h8`,key:`i86dvs`}],[`path`,{d:`M9 7a4 4 0 0 1 0 8H8l3 2`,key:`1xaco0`}]]),Ti=M(`receipt-text`,[[`path`,{d:`M13 16H8`,key:`wsln4y`}],[`path`,{d:`M14 8H8`,key:`1l3xfs`}],[`path`,{d:`M16 12H8`,key:`1fr5h0`}],[`path`,{d:`M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z`,key:`ycz6yz`}]]),Ei=M(`receipt`,[[`path`,{d:`M12 17V7`,key:`pyj7ub`}],[`path`,{d:`M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8`,key:`1elt7d`}],[`path`,{d:`M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z`,key:`ycz6yz`}]]),Di=M(`refresh-ccw`,[[`path`,{d:`M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`14sxne`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}],[`path`,{d:`M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16`,key:`1hlbsb`}],[`path`,{d:`M16 16h5v5`,key:`ccwih5`}]]),Oi=M(`refresh-cw`,[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]),ki=M(`repeat`,[[`path`,{d:`m17 2 4 4-4 4`,key:`nntrym`}],[`path`,{d:`M3 11v-1a4 4 0 0 1 4-4h14`,key:`84bu3i`}],[`path`,{d:`m7 22-4-4 4-4`,key:`1wqhfi`}],[`path`,{d:`M21 13v1a4 4 0 0 1-4 4H3`,key:`1rx37r`}]]),Ai=M(`rocket`,[[`path`,{d:`M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5`,key:`qeys4`}],[`path`,{d:`M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09`,key:`u4xsad`}],[`path`,{d:`M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z`,key:`676m9`}],[`path`,{d:`M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05`,key:`92ym6u`}]]),ji=M(`scale`,[[`path`,{d:`M12 3v18`,key:`108xh3`}],[`path`,{d:`m19 8 3 8a5 5 0 0 1-6 0zV7`,key:`zcdpyk`}],[`path`,{d:`M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1`,key:`1yorad`}],[`path`,{d:`m5 8 3 8a5 5 0 0 1-6 0zV7`,key:`eua70x`}],[`path`,{d:`M7 21h10`,key:`1b0cd5`}]]),Mi=M(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),Ni=M(`settings-2`,[[`path`,{d:`M14 17H5`,key:`gfn3mx`}],[`path`,{d:`M19 7h-9`,key:`6i9tg`}],[`circle`,{cx:`17`,cy:`17`,r:`3`,key:`18b49y`}],[`circle`,{cx:`7`,cy:`7`,r:`3`,key:`dfmy0x`}]]),Pi=M(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Fi=M(`share-2`,[[`circle`,{cx:`18`,cy:`5`,r:`3`,key:`gq8acd`}],[`circle`,{cx:`6`,cy:`12`,r:`3`,key:`w7nqdw`}],[`circle`,{cx:`18`,cy:`19`,r:`3`,key:`1xt0gg`}],[`line`,{x1:`8.59`,x2:`15.42`,y1:`13.51`,y2:`17.49`,key:`47mynk`}],[`line`,{x1:`15.41`,x2:`8.59`,y1:`6.51`,y2:`10.49`,key:`1n3mei`}]]),Ii=M(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Li=M(`shield-user`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M6.376 18.91a6 6 0 0 1 11.249.003`,key:`hnjrf2`}],[`circle`,{cx:`12`,cy:`11`,r:`4`,key:`1gt34v`}]]),Ri=M(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),zi=M(`shopping-cart`,[[`circle`,{cx:`8`,cy:`21`,r:`1`,key:`jimo8o`}],[`circle`,{cx:`19`,cy:`21`,r:`1`,key:`13723u`}],[`path`,{d:`M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12`,key:`9zh506`}]]),N=M(`smartphone`,[[`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`,ry:`2`,key:`1yt0o3`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}]]),P=M(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),Bi=M(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),Vi=M(`trending-up`,[[`path`,{d:`M16 7h6v6`,key:`box55l`}],[`path`,{d:`m22 7-8.5 8.5-5-5L2 17`,key:`1t1m79`}]]),Hi=M(`trophy`,[[`path`,{d:`M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978`,key:`1n3hpd`}],[`path`,{d:`M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978`,key:`rfe1zi`}],[`path`,{d:`M18 9h1.5a1 1 0 0 0 0-5H18`,key:`7xy6bh`}],[`path`,{d:`M4 22h16`,key:`57wxv0`}],[`path`,{d:`M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`,key:`1mhfuq`}],[`path`,{d:`M6 9H4.5a1 1 0 0 1 0-5H6`,key:`tex48p`}]]),Ui=M(`user-round`,[[`circle`,{cx:`12`,cy:`8`,r:`5`,key:`1hypcn`}],[`path`,{d:`M20 21a8 8 0 0 0-16 0`,key:`rfgkzh`}]]),Wi=M(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),Gi=M(`users-round`,[[`path`,{d:`M18 21a8 8 0 0 0-16 0`,key:`3ypg7q`}],[`circle`,{cx:`10`,cy:`8`,r:`5`,key:`o932ke`}],[`path`,{d:`M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3`,key:`10s06x`}]]),Ki=M(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),qi=M(`wallet-cards`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2`,key:`4125el`}],[`path`,{d:`M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21`,key:`1dpki6`}]]),Ji=M(`wallet`,[[`path`,{d:`M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1`,key:`18etb6`}],[`path`,{d:`M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4`,key:`xoc0q4`}]]),Yi=M(`workflow`,[[`rect`,{width:`8`,height:`8`,x:`3`,y:`3`,rx:`2`,key:`by2w9f`}],[`path`,{d:`M7 11v4a2 2 0 0 0 2 2h4`,key:`xkn7yn`}],[`rect`,{width:`8`,height:`8`,x:`13`,y:`13`,rx:`2`,key:`1cgmvn`}]]),Xi=M(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Zi=M(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]),Qi=`/Balaji-Infotech/assets/logo-BM3h6lYF.png`,$i=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),F=s(((e,t)=>{t.exports=$i()}))();function ea(){let[e,t]=(0,w.useState)(!1),[n,r]=(0,w.useState)(!1),i=pt();return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(`header`,{className:`\r
    fixed\r
    top-0\r
    left-0\r
    right-0\r
    z-50\r
    bg-white/95\r
    backdrop-blur-md\r
    border-b\r
    border-slate-200\r
  `,children:[(0,F.jsxs)(`nav`,{className:`\r
      max-w-7xl mx-auto \r
      flex items-center justify-between\r
      px-4 lg:px-5\r
      py-3\r
      bg-white/95\r
      backdrop-blur-md\r
      border-b border-slate-200\r
    `,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsx)(`img`,{src:Qi,alt:`Balaji Infotech`,className:`h-12 w-auto object-contain`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h1`,{className:`text-[15px] font-semibold text-[#071426]`,children:`Balaji Infotech`}),(0,F.jsx)(`p`,{className:`text-xs text-slate-500`,children:`Tally Solutions Partner`})]})]}),(0,F.jsxs)(`div`,{className:`hidden lg:flex items-center gap-2 xl:gap-3`,children:[(0,F.jsx)(Nn,{to:`/`,className:({isActive:e})=>`
          relative
          px-2
          py-2
          rounded-full
          transition-all
          ${e?`bg-[#EEF4FF] text-[#155A96] font-medium`:`text-slate-700 hover:text-[#155A96]`}
          
        `,children:`Home`}),(0,F.jsx)(Nn,{to:`/about`,className:({isActive:e})=>`relative
           px-4 py-2.5
           rounded-full
           transition-all duration-300
           ${e?`bg-[#EEF4FF] text-[#155A96] font-medium`:`text-slate-700 hover:text-[#155A96]`}`,children:`About`}),(0,F.jsxs)(`div`,{className:`relative group`,children:[(0,F.jsxs)(Nn,{to:`/products`,className:({isActive:e})=>`relative
            px-4 py-2.5
            rounded-full
            transition-all duration-300
            flex items-center gap-1
            ${e?`bg-[#EEF4FF] text-[#155A96] font-medium`:`text-slate-700 hover:text-[#155A96]`}`,children:[`Products`,(0,F.jsx)(wr,{size:18,className:`\r
              transition-transform duration-300\r
              group-hover:rotate-180\r
            `})]}),(0,F.jsx)(`div`,{className:`\r
            absolute\r
            top-[120%]\r
            left-1/2\r
            -translate-x-1/2\r
            w-[300px]\r
            rounded-2xl\r
            bg-white\r
            border border-slate-200\r
            shadow-xl\r
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
          `,children:[{name:`TallyPrime`,link:`/products/tallyprime`},{name:`TallyPrime Server`,link:`/products/tally-server`},{name:`TallyPrime powered by AWS`,link:`/products/aws`},{name:`TallyPrime with WhatsApp`,link:`/products/whatsapp`}].map((e,t)=>(0,F.jsx)(Nn,{to:e.link,className:`\r
                block\r
                px-6 py-4\r
                text-[15px]\r
                font-medium\r
                text-black\r
                hover:text-[#155A96]\r
                hover:bg-[#F8FAFC]\r
                transition-all duration-300\r
                border-b border-slate-100\r
                last:border-none\r
              `,children:e.name},t))})]}),(0,F.jsxs)(`div`,{className:`relative group`,children:[(0,F.jsxs)(Nn,{to:`/services`,className:({isActive:e})=>`relative
            px-4 py-2.5
            rounded-full
            transition-all duration-300
            flex items-center gap-1
            ${e?`bg-[#EEF4FF] text-[#155A96] font-medium`:`text-slate-700 hover:text-[#155A96]`}`,children:[`Services`,(0,F.jsx)(wr,{size:18,className:`\r
              transition-transform duration-300\r
              group-hover:rotate-180\r
            `})]}),(0,F.jsx)(`div`,{className:`\r
            absolute\r
            top-[120%]\r
            left-1/2\r
            -translate-x-1/2\r
            w-[300px]\r
            rounded-2xl\r
            bg-white\r
            border border-slate-200\r
            shadow-xl\r
            overflow-hidden\r
            opacity-0\r
            invisible\r
            translate-y-3\r
            group-hover:opacity-100\r
            group-hover:visible\r
            group-hover:translate-y-0\r
            transition-all duration-300\r
            z-50\r
          `,children:[{name:`Tally Software`,link:`/services/tally-software`},{name:`Tally Services`,link:`/services/tally-services`},{name:`Tally Apps For Mobile`,link:`/services/tally-mobile`},{name:`Tally Solutions`,link:`/services/tally-solutions`},{name:`Tally ERP 9 Solutions`,link:`/services/tally-erp`},{name:`Tally Add-Ons`,link:`/services/tally-addon`}].map((e,t)=>(0,F.jsx)(Nn,{to:e.link,className:`\r
                block\r
                px-6 py-4\r
                text-[15px]\r
                font-medium\r
                text-slate-600\r
                hover:text-[#155A96]\r
                hover:bg-[#F8FAFC]\r
                transition-all duration-300\r
                border-b border-slate-100\r
                last:border-none\r
              `,children:e.name},t))})]}),(0,F.jsx)(Nn,{to:`/education`,className:({isActive:e})=>`relative
           px-4 py-2.5
           rounded-full
           transition-all duration-300
           ${e?`bg-[#EEF4FF] text-[#155A96] font-medium`:`text-slate-700 hover:text-[#155A96]`}`,children:`Education`}),(0,F.jsx)(Nn,{to:`/lms`,className:({isActive:e})=>`relative
           px-4 py-2.5
           rounded-full
           transition-all duration-300
           ${e?`bg-[#EEF4FF] text-[#155A96] font-medium`:`text-slate-700 hover:text-[#155A96]`}`,children:`LMS`}),(0,F.jsx)(Nn,{to:`/contact`,className:({isActive:e})=>`relative
           px-4 py-2.5
           rounded-full
           transition-all duration-300
           ${e?`bg-[#EEF4FF] text-[#155A96] font-medium`:`text-slate-700 hover:text-[#155A96]`}`,children:`Contact`})]}),(0,F.jsx)(`div`,{className:`hidden lg:flex items-center gap-4`,children:(0,F.jsx)(`button`,{onClick:()=>i(`/contact#contact-form`),className:`\r
      px-4 py-2.5\r
      rounded-lg\r
      text-sm\r
      whitespace-nowrap\r
      text-white\r
      font-medium\r
      bg-[#155A96]\r
      hover:scale-105\r
      transition duration-300\r
    `,children:`Get Started`})}),(0,F.jsx)(`button`,{onClick:()=>t(!e),className:`\r
        lg:hidden\r
        text-[#155A96]\r
        flex items-center justify-center\r
      `,children:e?(0,F.jsx)(Xi,{size:28}):(0,F.jsx)(pi,{size:28})})]}),e&&(0,F.jsx)(`div`,{className:`\r
        lg:hidden\r
        mt-3\r
        rounded-2xl\r
        bg-white\r
border border-slate-200\r
shadow-xl\r
        p-6\r
        shadow-2xl\r
        mx-1\r
      `,children:(0,F.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,F.jsx)(Nn,{to:`/`,className:`text-[#155A96] py-3 border-b border-slate-200`,onClick:()=>t(!1),children:`Home`}),(0,F.jsx)(Nn,{to:`/about`,className:`text-[#155A96] py-3 border-b border-slate-200`,onClick:()=>t(!1),children:`About`}),(0,F.jsx)(Nn,{to:`/products`,className:`text-[#155A96] py-3 border-b border-slate-200`,onClick:()=>t(!1),children:`Products`}),(0,F.jsx)(Nn,{to:`/services`,className:`text-[#155A96] py-3 border-b border-slate-200`,onClick:()=>t(!1),children:`Services`}),(0,F.jsx)(Nn,{to:`/education`,className:`text-[#155A96] py-3 border-b border-slate-200`,onClick:()=>t(!1),children:`Education`}),(0,F.jsx)(Nn,{to:`/lms`,className:`text-[#155A96] py-3 border-b border-slate-200`,onClick:()=>t(!1),children:`LMS`}),(0,F.jsx)(Nn,{to:`/contact`,className:`text-[#155A96] py-3`,onClick:()=>t(!1),children:`Contact`}),(0,F.jsx)(`button`,{className:`\r
            mt-5\r
            w-full\r
            py-3\r
            rounded-xl\r
            bg-[#155A96]\r
            text-white\r
            font-medium\r
          `,children:`Get Started`})]})})]})})}var ta={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},na=w.createContext&&w.createContext(ta),ra=[`attr`,`size`,`title`];function ia(e,t){if(e==null)return{};var n,r,i=aa(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function aa(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function oa(){return oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oa.apply(null,arguments)}function sa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ca(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?sa(Object(n),!0).forEach(function(t){la(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sa(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function la(e,t,n){return(t=ua(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ua(e){var t=da(e,`string`);return typeof t==`symbol`?t:t+``}function da(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function fa(e){return e&&e.map((e,t)=>w.createElement(e.tag,ca({key:t},e.attr),fa(e.child)))}function pa(e){return t=>w.createElement(ma,oa({attr:ca({},e.attr)},t),fa(e.child))}function ma(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=ia(e,ra),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),w.createElement(`svg`,oa({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:ca(ca({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&w.createElement(`title`,null,i),e.children)};return na===void 0?t(ta):w.createElement(na.Consumer,null,e=>t(e))}function ha(e){return pa({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z`},child:[]}]})(e)}function ga(e){return pa({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`},child:[]}]})(e)}function _a(e){return pa({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z`},child:[]}]})(e)}function va(){return(0,F.jsxs)(`footer`,{className:`relative overflow-hidden bg-[#155A96] text-white`,children:[(0,F.jsxs)(`div`,{className:`absolute inset-0 overflow-hidden`,children:[(0,F.jsx)(`div`,{className:`\r
        absolute\r
        top-0\r
        left-[-10%]\r
        w-[500px]\r
        h-[450px]\r
        bg-[#155A96]/15\r
        blur-3xl\r
        rounded-full\r
      `}),(0,F.jsx)(`div`,{className:`\r
        absolute\r
        bottom-[-20%]\r
        right-[-10%]\r
        w-[500px]\r
        h-[480px]\r
        bg-[#155A96]/10\r
        blur-3xl\r
        rounded-full\r
      `})]}),(0,F.jsxs)(`div`,{className:`\r
      relative\r
      max-w-7xl\r
      mx-auto\r
      px-3 sm:px-5 lg:px-7\r
      py-8\r
      sm:py-10\r
    `,children:[(0,F.jsxs)(`div`,{className:`\r
        grid\r
        grid-cols-1\r
        sm:grid-cols-2\r
        lg:grid-cols-4\r
        gap-8\r
        lg:gap-10\r
        items-start\r
      `,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-3 sm:gap-4 mb-3`,children:[(0,F.jsx)(`div`,{className:`\r
              w-12 h-12\r
              sm:w-14 sm:h-14\r
              rounded-2xl\r
              bg-[#155A96]\r
              flex\r
              items-center\r
              justify-center\r
              text-white\r
              text-2xl\r
              font-bold\r
              shadow-[0_10px_30px_rgba(21,90,150,0.35)]\r
            `,children:(0,F.jsx)(`img`,{src:Qi,alt:`Balaji Infotech`,className:`h-12 w-auto object-contain`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`text-xl sm:text-2xl font-bold`,children:`Balaji Infotech`}),(0,F.jsx)(`p`,{className:`text-gray-300 text-sm`,children:`Tally Solutions Partner`})]})]}),(0,F.jsx)(`p`,{className:`\r
            text-white\r
            leading-7\r
            text-sm\r
            sm:text-[16px]\r
            max-w-sm\r
          `,children:`Empowering businesses with modern Tally solutions, enterprise support, automation services, and smart accounting infrastructure.`}),(0,F.jsx)(`div`,{className:`flex flex-wrap items-center gap-3 sm:gap-4 mt-4 sm:mt-6`,children:[{icon:_a,link:`https://facebook.com/balajiinfotechguntur`},{icon:ga,link:`https://www.instagram.com/balaji_ai_infotech_pvt_ltd?`},{icon:ha,link:`https://linkedin.com`},{icon:ui,link:`mailto:gunturtally@gmail.com`}].map((e,t)=>{let n=e.icon;return(0,F.jsx)(`a`,{href:e.link,target:`_blank`,rel:`noopener noreferrer`,className:`\r
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
        hover:bg-[#155A96]\r
        hover:border-transparent\r
        hover:shadow-[0_10px_25px_rgba(21,90,150,0.35)]\r
      `,children:(0,F.jsx)(n,{size:20,className:`\r
          text-white\r
          transition-all\r
          duration-300\r
          group-hover:text-white\r
        `})},t)})})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{className:`\r
            text-lg\r
            sm:text-xl\r
            font-semibold\r
            mb-3\r
          `,children:`Quick Links`}),(0,F.jsx)(`div`,{className:`space-y-3`,children:[{name:`Home`,path:`/`},{name:`About`,path:`/about`},{name:`Services`,path:`/services`},{name:`Products`,path:`/products`},{name:`Education`,path:`/education`},{name:`LMS`,path:`/lms`},{name:`Contact`,path:`/contact`}].map((e,t)=>(0,F.jsxs)(Mn,{to:e.path,className:`\r
        group\r
        flex\r
        items-center\r
        gap-2\r
        text-white\r
        hover:text-white\r
        transition-all\r
        duration-300\r
      `,children:[(0,F.jsx)(cr,{size:16,className:`\r
          opacity-0\r
          -translate-x-2\r
          transition-all\r
          duration-300\r
          group-hover:opacity-100\r
          group-hover:translate-x-0\r
        `}),(0,F.jsx)(`span`,{children:e.name})]},t))})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{className:`\r
            text-lg\r
            sm:text-xl\r
            font-semibold\r
            mb-4\r
          `,children:`Services`}),(0,F.jsx)(`div`,{className:`space-y-4`,children:[{name:`Tally Software`,path:`/services/tally-software`},{name:`Tally Services`,path:`/services/tally-services`},{name:`Tally ERP Solutions`,path:`/services/tally-erp`},{name:`TallyPrime Server`,path:`/products/tally-server`},{name:`Tally Add-Ons`,path:`/services/tally-addon`},{name:`Tally Mobile Apps`,path:`/services/tally-mobile`}].map((e,t)=>(0,F.jsx)(Mn,{to:e.path,className:`\r
              block\r
              text-white\r
              hover:text-white\r
              transition-all\r
              duration-300\r
              hover:translate-x-1\r
            `,children:e.name},t))})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{className:`\r
            text-lg\r
            sm:text-xl\r
            font-semibold\r
            mb-5\r
          `,children:`Contact`}),(0,F.jsxs)(`div`,{className:`space-y-5`,children:[(0,F.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,F.jsx)(`div`,{className:`\r
                w-11\r
                h-11\r
                rounded-xl\r
                bg-white/5\r
                border border-white/10\r
                flex\r
                items-center\r
                justify-center\r
                shrink-0\r
              `,children:(0,F.jsx)(di,{size:18,className:`text-[#F0AE11]`})}),(0,F.jsx)(`div`,{children:(0,F.jsx)(`p`,{className:`text-white leading-6`,children:`Brodipet, Guntur, Andhra Pradesh 522002`})})]}),(0,F.jsxs)(`div`,{className:`flex gap-4`,children:[(0,F.jsx)(`div`,{className:`\r
                w-11\r
                h-11\r
                rounded-xl\r
                bg-white/5\r
                border border-white/10\r
                flex\r
                items-center\r
                justify-center\r
                shrink-0\r
              `,children:(0,F.jsx)(xi,{size:18,className:`text-[#F0AE11]`})}),(0,F.jsx)(`div`,{children:(0,F.jsx)(`p`,{className:`text-white`,children:`+91 98494 31943`})})]}),(0,F.jsxs)(`div`,{className:`flex gap-4`,children:[(0,F.jsx)(`div`,{className:`\r
                w-11\r
                h-11\r
                rounded-xl\r
                bg-white/5\r
                border border-white/10\r
                flex\r
                items-center\r
                justify-center\r
                shrink-0\r
              `,children:(0,F.jsx)(ui,{size:18,className:`text-[#F0AE11]`})}),(0,F.jsx)(`div`,{children:(0,F.jsx)(`p`,{className:`text-white`,children:`gunturtally@gmail.com`})})]})]})]})]}),(0,F.jsxs)(`div`,{className:`\r
        mt-2\r
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
      `,children:[(0,F.jsx)(`p`,{className:`text-white text-sm`,children:`© 2026 Balaji Infotech. All rights reserved.`}),(0,F.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-5`,children:[(0,F.jsx)(`a`,{href:`#`,className:`\r
            text-white\r
            text-sm\r
            hover:text-white\r
            transition-all\r
            duration-300\r
          `,children:`Privacy Policy`}),(0,F.jsx)(`a`,{href:`#`,className:`\r
            text-white\r
            text-sm\r
            hover:text-white\r
            transition-all\r
            duration-300\r
          `,children:`Terms & Conditions`})]})]})]})]})}function ya(e,t,n,r){return new(n||=Promise)((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((r=r.apply(e,t||[])).next())}))}function ba(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==`function`&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw TypeError(`Generator is already executing.`);for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(i=o.trys,!((i=i.length>0&&i[i.length-1])||a[0]!==6&&a[0]!==2)){o=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(a[0]===6&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}function xa(e){var t=typeof Symbol==`function`&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length==`number`)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?`Object is not iterable.`:`Symbol.iterator is not defined.`)}function Sa(e,t){var n=typeof Symbol==`function`&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),o=[];try{for(;(t===void 0||t-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return o}function Ca(e,t,n){if(n||arguments.length===2)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||=Array.prototype.slice.call(t,0,i),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}function wa(e,t,n,r,i){var a=[...arguments].slice(5);return ya(this,void 0,void 0,(function(){var o,s,c,l,u,d;return ba(this,(function(f){switch(f.label){case 0:f.trys.push([0,12,13,14]),o=xa(a),s=o.next(),f.label=1;case 1:if(s.done)return[3,11];switch(c=s.value,typeof c){case`string`:return[3,2];case`number`:return[3,4];case`function`:return[3,6]}return[3,8];case 2:return[4,Ta(e,t,c,n,r,i)];case 3:return f.sent(),[3,10];case 4:return[4,Ea(c)];case 5:return f.sent(),[3,10];case 6:return[4,c.apply(void 0,Ca([e,t,n,r,i],Sa(a),!1))];case 7:return f.sent(),[3,10];case 8:return[4,c];case 9:f.sent(),f.label=10;case 10:return s=o.next(),[3,1];case 11:return[3,14];case 12:return l=f.sent(),u={error:l},[3,14];case 13:try{s&&!s.done&&(d=o.return)&&d.call(o)}finally{if(u)throw u.error}return[7];case 14:return[2]}}))}))}function Ta(e,t,n,r,i,a){return ya(this,void 0,void 0,(function(){var o,s;return ba(this,(function(c){switch(c.label){case 0:return o=e.textContent||``,s=function(e,t){var n=Sa(t).slice(0);return Ca(Ca([],Sa(e),!1),[NaN],!1).findIndex((function(e,t){return n[t]!==e}))}(o,n),[4,Da(e,Ca(Ca([],Sa(ka(o,t,s)),!1),Sa(Oa(n,t,s)),!1),r,i,a)];case 1:return c.sent(),[2]}}))}))}function Ea(e){return ya(this,void 0,void 0,(function(){return ba(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t){return setTimeout(t,e)}))];case 1:return t.sent(),[2]}}))}))}function Da(e,t,n,r,i){return ya(this,void 0,void 0,(function(){var a,o,s,c,l,u,d,f,p,m,h,g,_;return ba(this,(function(v){switch(v.label){case 0:if(a=t,i){for(o=0,s=1;s<t.length;s++)if(c=Sa([t[s-1],t[s]],2),l=c[0],(u=c[1]).length>l.length||u===``){o=s;break}a=t.slice(o,t.length)}v.label=1;case 1:v.trys.push([1,6,7,8]),d=xa(function(e){var t,n,r,i,a,o,s;return ba(this,(function(c){switch(c.label){case 0:t=function(e){return ba(this,(function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame((function(){return t.textContent=e}))},opCode:function(t){var n=t.textContent||``;return e===``||n.length>e.length?`DELETE`:`WRITING`}}];case 1:return t.sent(),[2]}}))},c.label=1;case 1:c.trys.push([1,6,7,8]),n=xa(e),r=n.next(),c.label=2;case 2:return r.done?[3,5]:(i=r.value,[5,t(i)]);case 3:c.sent(),c.label=4;case 4:return r=n.next(),[3,2];case 5:return[3,8];case 6:return a=c.sent(),o={error:a},[3,8];case 7:try{r&&!r.done&&(s=n.return)&&s.call(n)}finally{if(o)throw o.error}return[7];case 8:return[2]}}))}(a)),f=d.next(),v.label=2;case 2:return f.done?[3,5]:(p=f.value,m=p.opCode(e)===`WRITING`?n+n*(Math.random()-.5):r+r*(Math.random()-.5),p.op(e),[4,Ea(m)]);case 3:v.sent(),v.label=4;case 4:return f=d.next(),[3,2];case 5:return[3,8];case 6:return h=v.sent(),g={error:h},[3,8];case 7:try{f&&!f.done&&(_=d.return)&&_.call(d)}finally{if(g)throw g.error}return[7];case 8:return[2]}}))}))}function Oa(e,t,n){var r,i;return n===void 0&&(n=0),ba(this,(function(a){switch(a.label){case 0:r=t(e),i=r.length,a.label=1;case 1:return n<i?[4,r.slice(0,++n).join(``)]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}}))}function ka(e,t,n){var r,i;return n===void 0&&(n=0),ba(this,(function(a){switch(a.label){case 0:r=t(e),i=r.length,a.label=1;case 1:return i>n?[4,r.slice(0,--i).join(``)]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}}))}var Aa=`index-module_type__E-SaG`;(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<`u`){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var ja=(0,w.memo)((0,w.forwardRef)((function(e,t){var n=e.sequence,r=e.repeat,i=e.className,a=e.speed,o=a===void 0?40:a,s=e.deletionSpeed,c=e.omitDeletionAnimation,l=c!==void 0&&c,u=e.preRenderFirstString,d=u!==void 0&&u,f=e.wrapper,p=f===void 0?`span`:f,m=e.splitter,h=m===void 0?function(e){return Ca([],Sa(e),!1)}:m,g=e.cursor,_=g===void 0||g,v=e.style,y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,[`sequence`,`repeat`,`className`,`speed`,`deletionSpeed`,`omitDeletionAnimation`,`preRenderFirstString`,`wrapper`,`splitter`,`cursor`,`style`]),b=y[`aria-label`],x=y[`aria-hidden`],S=y.role;s||=o;var C=[,,].fill(40);[o,s].forEach((function(e,t){switch(typeof e){case`number`:C[t]=Math.abs(e-100);break;case`object`:var n=e.type,r=e.value;if(typeof r!=`number`)break;n===`keyStrokeDelayInMs`&&(C[t]=r)}}));var T,ee,E,D,O,te,ne=C[0],re=C[1],ie=function(e,t){t===void 0&&(t=null);var n=(0,w.useRef)(t);return(0,w.useEffect)((function(){e&&(typeof e==`function`?e(n.current):e.current=n.current)}),[e]),n}(t),ae=Aa;T=i?`${_?ae+` `:``}${i}`:_?ae:``,ee=(0,w.useRef)((function(){var e,t=n;r===1/0?e=wa:typeof r==`number`&&(t=Array(1+r).fill(n).flat());var i=e?Ca(Ca([],Sa(t),!1),[e],!1):Ca([],Sa(t),!1);return wa.apply(void 0,Ca([ie.current,h,ne,re,l],Sa(i),!1)),function(){ie.current}})),E=(0,w.useRef)(),D=(0,w.useRef)(!1),O=(0,w.useRef)(!1),te=Sa((0,w.useState)(0),2)[1],D.current&&(O.current=!0),(0,w.useEffect)((function(){return D.current||(E.current=ee.current(),D.current=!0),te((function(e){return e+1})),function(){O.current&&E.current&&E.current()}}),[]);var oe=p,k=d?n.find((function(e){return typeof e==`string`}))||``:null;return w.createElement(oe,{"aria-hidden":x,"aria-label":b,role:S,style:v,className:T,children:b?w.createElement(`span`,{"aria-hidden":`true`,ref:ie,children:k}):k,ref:b?void 0:ie})})),(function(e,t){return!0})),Ma=(0,w.createContext)({});function Na(e){let t=(0,w.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Pa=typeof window<`u`?w.useLayoutEffect:w.useEffect,Fa=(0,w.createContext)(null);function Ia(e,t){e.indexOf(t)===-1&&e.push(t)}function La(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Ra=(e,t,n)=>n>t?t:n<e?e:n,za={},Ba=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Va(e){return typeof e==`object`&&!!e}var Ha=e=>/^0[^.\s]+$/u.test(e);function Ua(e){let t;return()=>(t===void 0&&(t=e()),t)}var Wa=e=>e,Ga=(e,t)=>n=>t(e(n)),Ka=(...e)=>e.reduce(Ga),qa=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},Ja=class{constructor(){this.subscriptions=[]}add(e){return Ia(this.subscriptions,e),()=>La(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},Ya=e=>e*1e3,Xa=e=>e/1e3;function Za(e,t){return t?1e3/t*e:0}var Qa=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,$a=1e-7,eo=12;function to(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Qa(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>$a&&++s<eo);return o}function no(e,t,n,r){if(e===t&&n===r)return Wa;let i=t=>to(t,0,1,e,n);return e=>e===0||e===1?e:Qa(i(e),t,r)}var ro=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,io=e=>t=>1-e(1-t),ao=no(.33,1.53,.69,.99),oo=io(ao),so=ro(oo),co=e=>e>=1?1:(e*=2)<1?.5*oo(e):.5*(2-2**(-10*(e-1))),lo=e=>1-Math.sin(Math.acos(e)),uo=io(lo),fo=ro(lo),po=no(.42,0,1,1),mo=no(0,0,.58,1),ho=no(.42,0,.58,1),go=e=>Array.isArray(e)&&typeof e[0]!=`number`,_o=e=>Array.isArray(e)&&typeof e[0]==`number`,I={linear:Wa,easeIn:po,easeInOut:ho,easeOut:mo,circIn:lo,circInOut:fo,circOut:uo,backIn:oo,backInOut:so,backOut:ao,anticipate:co},L=e=>typeof e==`string`,vo=e=>{if(_o(e)){e.length;let[t,n,r,i]=e;return no(t,n,r,i)}else if(L(e))return I[e],`${e}`,I[e];return e},yo=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],bo={value:null,addProjectionMetrics:null};function xo(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0;let o=n;n=r,r=o,n.forEach(l),t&&bo.value&&bo.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var So=40;function Co(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=yo.reduce((e,n)=>(e[n]=xo(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=za.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,So),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:yo.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<yo.length;t++)o[yo[t]].cancel(e)},state:i,steps:o}}var{schedule:R,cancel:wo,state:z,steps:To}=Co(typeof requestAnimationFrame<`u`?requestAnimationFrame:Wa,!0),Eo;function Do(){Eo=void 0}var Oo={now:()=>(Eo===void 0&&Oo.set(z.isProcessing||za.useManualTiming?z.timestamp:performance.now()),Eo),set:e=>{Eo=e,queueMicrotask(Do)}},ko={layout:0,mainThread:0,waapi:0},Ao=e=>t=>typeof t==`string`&&t.startsWith(e),jo=Ao(`--`),Mo=Ao(`var(--`),No=e=>Mo(e)?Po.test(e.split(`/*`)[0].trim()):!1,Po=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Fo(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var Io={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Lo={...Io,transform:e=>Ra(0,1,e)},Ro={...Io,default:1},zo=e=>Math.round(e*1e5)/1e5,Bo=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Vo(e){return e==null}var Ho=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Uo=(e,t)=>n=>!!(typeof n==`string`&&Ho.test(n)&&n.startsWith(e)||t&&!Vo(n)&&Object.prototype.hasOwnProperty.call(n,t)),Wo=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Bo);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Go=e=>Ra(0,255,e),Ko={...Io,transform:e=>Math.round(Go(e))},qo={test:Uo(`rgb`,`red`),parse:Wo(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Ko.transform(e)+`, `+Ko.transform(t)+`, `+Ko.transform(n)+`, `+zo(Lo.transform(r))+`)`};function Jo(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var Yo={test:Uo(`#`),parse:Jo,transform:qo.transform},Xo=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Zo=Xo(`deg`),Qo=Xo(`%`),B=Xo(`px`),$o=Xo(`vh`),es=Xo(`vw`),ts={...Qo,parse:e=>Qo.parse(e)/100,transform:e=>Qo.transform(e*100)},ns={test:Uo(`hsl`,`hue`),parse:Wo(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+Qo.transform(zo(t))+`, `+Qo.transform(zo(n))+`, `+zo(Lo.transform(r))+`)`},rs={test:e=>qo.test(e)||Yo.test(e)||ns.test(e),parse:e=>qo.test(e)?qo.parse(e):ns.test(e)?ns.parse(e):Yo.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?qo.transform(e):ns.transform(e),getAnimatableNone:e=>{let t=rs.parse(e);return t.alpha=0,rs.transform(t)}},is=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function as(e){return isNaN(e)&&typeof e==`string`&&(e.match(Bo)?.length||0)+(e.match(is)?.length||0)>0}var os=`number`,ss=`color`,cs=`var`,ls=`var(`,us="${}",ds=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function fs(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(ds,e=>(rs.test(e)?(r.color.push(a),i.push(ss),n.push(rs.parse(e))):e.startsWith(ls)?(r.var.push(a),i.push(cs),n.push(e)):(r.number.push(a),i.push(os),n.push(parseFloat(e))),++a,us)).split(us),indexes:r,types:i}}function ps(e){return fs(e).values}function ms({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===os?i+=zo(r[a]):e===ss?i+=rs.transform(r[a]):i+=r[a]}return i}}function hs(e){return ms(fs(e))}var gs=e=>typeof e==`number`?0:rs.test(e)?rs.getAnimatableNone(e):e,_s=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:gs(e);function vs(e){let t=fs(e);return ms(t)(t.values.map((e,n)=>_s(e,t.split[n])))}var ys={test:as,parse:ps,createTransformer:hs,getAnimatableNone:vs};function bs(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function xs({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=bs(s,r,e+1/3),a=bs(s,r,e),o=bs(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function Ss(e,t){return n=>n>0?t:e}var V=(e,t,n)=>e+(t-e)*n,Cs=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},ws=[Yo,qo,ns],Ts=e=>ws.find(t=>t.test(e));function Es(e){let t=Ts(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===ns&&(n=xs(n)),n}var Ds=(e,t)=>{let n=Es(e),r=Es(t);if(!n||!r)return Ss(e,t);let i={...n};return e=>(i.red=Cs(n.red,r.red,e),i.green=Cs(n.green,r.green,e),i.blue=Cs(n.blue,r.blue,e),i.alpha=V(n.alpha,r.alpha,e),qo.transform(i))},Os=new Set([`none`,`hidden`]);function ks(e,t){return Os.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function As(e,t){return n=>V(e,t,n)}function js(e){return typeof e==`number`?As:typeof e==`string`?No(e)?Ss:rs.test(e)?Ds:Fs:Array.isArray(e)?Ms:typeof e==`object`?rs.test(e)?Ds:Ns:Ss}function Ms(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>js(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Ns(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=js(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Ps(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Fs=(e,t)=>{let n=ys.createTransformer(t),r=fs(e),i=fs(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Os.has(e)&&!i.values.length||Os.has(t)&&!r.values.length?ks(e,t):Ka(Ms(Ps(r,i),i.values),n):(`${e}${t}`,Ss(e,t))};function Is(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?V(e,t,n):js(e)(e,t)}var Ls=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>R.update(t,e),stop:()=>wo(t),now:()=>z.isProcessing?z.timestamp:Oo.now()}},Rs=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},zs=2e4;function Bs(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Vs(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Bs(r),zs);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:Xa(i)}}var H={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Hs(e,t){return e*Math.sqrt(1-t*t)}var Us=12;function Ws(e,t,n){let r=n;for(let n=1;n<Us;n++)r-=e(r)/t(r);return r}var Gs=.001;function Ks({duration:e=H.duration,bounce:t=H.bounce,velocity:n=H.velocity,mass:r=H.mass}){let i,a;H.maxDuration;let o=1-t;o=Ra(H.minDamping,H.maxDamping,o),e=Ra(H.minDuration,H.maxDuration,Xa(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Hs(t,o),c=Math.exp(-i);return Gs-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Hs(t**2,o);return(-i(t)+Gs>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-Gs+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Ws(i,a,s);if(e=Ya(e),isNaN(c))return{stiffness:H.stiffness,damping:H.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var qs=[`duration`,`bounce`],Js=[`stiffness`,`damping`,`mass`];function Ys(e,t){return t.some(t=>e[t]!==void 0)}function Xs(e){let t={velocity:H.velocity,stiffness:H.stiffness,damping:H.damping,mass:H.mass,isResolvedFromDuration:!1,...e};if(!Ys(e,Js)&&Ys(e,qs))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Ra(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:H.mass,stiffness:i,damping:a}}else{let n=Ks({...e,velocity:0});t={...t,...n,mass:H.mass},t.isResolvedFromDuration=!0}return t}function Zs(e=H.visualDuration,t=H.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=Xs({...n,velocity:-Xa(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=Xa(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?H.restSpeed.granular:H.restSpeed.default,i||=v?H.restDelta.granular:H.restDelta.default;let y,b,x,S,C,w;if(h<1)x=Hs(_,h),S=(m+h*_*g)/x,y=e=>o-Math.exp(-h*_*e)*(S*Math.sin(x*e)+g*Math.cos(x*e)),C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let T={calculatedDuration:p&&d||null,velocity:e=>Ya(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=Ya(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=Ya(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Bs(T),zs),t=Rs(t=>T.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return T}Zs.applyToOptions=e=>{let t=Vs(e,100,Zs);return e.ease=t.ease,e.duration=Ya(t.duration),e.type=`keyframes`,e};var Qs=5;function $s(e,t,n){let r=Math.max(t-Qs,0);return Za(n-e(r),t-r)}function ec({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=Zs({keyframes:[f.value,m(f.value)],velocity:$s(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function tc(e,t,n){let r=[],i=n||za.mix||Is,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Ka(Array.isArray(t)?t[n]||Wa:t,a)),r.push(a)}return r}function nc(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=tc(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=qa(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Ra(e[0],e[a-1],t)):l}function rc(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=qa(0,t,r);e.push(V(n,1,i))}}function ic(e){let t=[0];return rc(t,e.length-1),t}function ac(e,t){return e.map(e=>e*t)}function oc(e,t){return e.map(()=>t||ho).splice(0,e.length-1)}function sc({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=go(r)?r.map(vo):vo(r),a={done:!1,value:t[0]},o=nc(ac(n&&n.length===t.length?n:ic(t),e),t,{ease:Array.isArray(i)?i:oc(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var cc=e=>e!==null;function lc(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(cc),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var uc={decay:ec,inertia:ec,tween:sc,keyframes:sc,spring:Zs};function dc(e){typeof e.type==`string`&&(e.type=uc[e.type])}var fc=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},pc=e=>e/100,mc=class extends fc{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Oo.now()&&this.tick(Oo.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},ko.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;dc(e);let{type:t=sc,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||sc;s!==sc&&typeof o[0]!=`number`&&(this.mixKeyframes=Ka(pc,Is(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Bs(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Ra(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==ec&&(b.value=lc(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return Xa(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Xa(e)}get time(){return Xa(this.currentTime)}set time(e){e=Ya(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return $s(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Oo.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Xa(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Ls,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Oo.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,ko.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function hc(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var gc=e=>e*180/Math.PI,_c=e=>yc(gc(Math.atan2(e[1],e[0]))),vc={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:_c,rotateZ:_c,skewX:e=>gc(Math.atan(e[1])),skewY:e=>gc(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},yc=e=>(e%=360,e<0&&(e+=360),e),bc=_c,xc=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Sc=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Cc={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:xc,scaleY:Sc,scale:e=>(xc(e)+Sc(e))/2,rotateX:e=>yc(gc(Math.atan2(e[6],e[5]))),rotateY:e=>yc(gc(Math.atan2(-e[2],e[0]))),rotateZ:bc,rotate:bc,skewX:e=>gc(Math.atan(e[4])),skewY:e=>gc(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function wc(e){return+!!e.includes(`scale`)}function Tc(e,t){if(!e||e===`none`)return wc(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Cc,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=vc,i=t}if(!i)return wc(t);let a=r[t],o=i[1].split(`,`).map(Dc);return typeof a==`function`?a(o):o[a]}var Ec=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Tc(n,t)};function Dc(e){return parseFloat(e.trim())}var Oc=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],kc=new Set(Oc),Ac=e=>e===Io||e===B,jc=new Set([`x`,`y`,`z`]),Mc=Oc.filter(e=>!jc.has(e));function Nc(e){let t=[];return Mc.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var Pc={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Tc(t,`x`),y:(e,{transform:t})=>Tc(t,`y`)};Pc.translateX=Pc.x,Pc.translateY=Pc.y;var Fc=new Set,Ic=!1,Lc=!1,Rc=!1;function U(){if(Lc){let e=Array.from(Fc).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Nc(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Lc=!1,Ic=!1,Fc.forEach(e=>e.complete(Rc)),Fc.clear()}function zc(){Fc.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Lc=!0)})}function Bc(){Rc=!0,zc(),U(),Rc=!1}var Vc=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Fc.add(this),Ic||(Ic=!0,R.read(zc),R.resolveKeyframes(U))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}hc(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Fc.delete(this)}cancel(){this.state===`scheduled`&&(Fc.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Hc=e=>e.startsWith(`--`);function Uc(e,t,n){Hc(t)?e.style.setProperty(t,n):e.style[t]=n}var Wc={};function Gc(e,t){let n=Ua(e);return()=>Wc[t]??n()}var Kc=Gc(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),qc=Gc(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Jc=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Yc={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Jc([0,.65,.55,1]),circOut:Jc([.55,0,1,.45]),backIn:Jc([.31,.01,.66,-.59]),backOut:Jc([.33,1.53,.69,.99])};function Xc(e,t){if(e)return typeof e==`function`?qc()?Rs(e,t):`ease-out`:_o(e)?Jc(e):Array.isArray(e)?e.map(e=>Xc(e,t)||Yc.easeOut):Yc[e]}function Zc(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Xc(s,i);Array.isArray(d)&&(u.easing=d),bo.value&&ko.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return bo.value&&p.finished.finally(()=>{ko.waapi--}),p}function Qc(e){return typeof e==`function`&&`applyToOptions`in e}function $c({type:e,...t}){return Qc(e)&&qc()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var el=class extends fc{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=$c(e);this.animation=Zc(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=lc(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),Uc(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return Xa(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Xa(e)}get time(){return Xa(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ya(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Kc()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),Wa):r(this)}},tl={anticipate:co,backInOut:so,circInOut:fo};function nl(e){return e in tl}function rl(e){typeof e.ease==`string`&&nl(e.ease)&&(e.ease=tl[e.ease])}var il=10,al=class extends el{constructor(e){rl(e),dc(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new mc({...a,autoplay:!1}),s=Math.max(il,Oo.now()-this.startTime),c=Ra(0,il,s-il),l=o.sample(s).value,{name:u}=this.options;i&&u&&Uc(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},ol=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(ys.test(e)||e===`0`)&&!e.startsWith(`url(`));function sl(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function cl(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=ol(i,t),s=ol(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:sl(e)||(n===`spring`||Qc(n))&&r}function W(e){e.duration=0,e.type=`keyframes`}var ll=new Set([`opacity`,`clipPath`,`filter`,`transform`]),ul=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function dl(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&ul.test(e[t]))return!0;return!1}var fl=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),pl=Ua(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function ml(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return pl()&&n&&(ll.has(n)||fl.has(n)&&dl(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var hl=40,gl=class extends fc{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Oo.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||Vc;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Oo.now();let u=!0;cl(e,i,a,o)||(u=!1,(za.instantAnimations||!s)&&l?.(lc(e,n,t)),e[0]=e[e.length-1],W(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>hl?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&ml(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new al({...d,element:p})}catch{m=new mc(d)}else m=new mc(d);m.finished.then(()=>{this.notifyFinished()}).catch(Wa),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Bc()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function _l(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var vl=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function yl(e){let t=vl.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function bl(e,t,n=1){`${e}`;let[r,i]=yl(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Ba(e)?parseFloat(e):e}return No(i)?bl(i,t,n+1):i}var xl={type:`spring`,stiffness:500,damping:25,restSpeed:10},Sl=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Cl={type:`keyframes`,duration:.8},wl={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Tl=(e,{keyframes:t})=>t.length>2?Cl:kc.has(e)?e.startsWith(`scale`)?Sl(t[1]):xl:wl;function El(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function Dl(e,t){let n=e?.[t]??e?.default??e;return n===e?n:El(n,e)}var Ol=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function kl(e){for(let t in e)if(!Ol.has(t))return!0;return!1}var Al=(e,t,n,r={},i,a)=>o=>{let s=Dl(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=Ya(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};kl(s)||Object.assign(u,Tl(e,u)),u.duration&&=Ya(u.duration),u.repeatDelay&&=Ya(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(W(u),u.delay===0&&(d=!0)),(za.instantAnimations||za.skipAnimations||i?.shouldSkipAnimations)&&(d=!0,W(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=lc(u.keyframes,s);if(e!==void 0){R.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new mc(u):new gl(u)};function jl(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Ml(e,t,n,r){if(typeof t==`function`){let[i,a]=jl(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=jl(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Nl(e,t,n){let r=e.getProps();return Ml(r,t,n===void 0?r.custom:n,e)}var Pl=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Oc]),Fl=30,Il=e=>!isNaN(parseFloat(e)),Ll={current:void 0},Rl=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Oo.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Oo.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Il(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new Ja);let n=this.events[e].add(t);return e===`change`?()=>{n(),R.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ll.current&&Ll.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Oo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Fl)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Fl);return Za(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function zl(e,t){return new Rl(e,t)}var G=e=>Array.isArray(e);function K(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,zl(n))}function q(e){return G(e)?e[e.length-1]||0:e}function J(e,t){let{transitionEnd:n={},transition:r={},...i}=Nl(e,t)||{};i={...i,...n};for(let t in i)K(e,t,q(i[t]))}var Y=e=>!!(e&&e.getVelocity);function Bl(e){return!!(Y(e)&&e.add)}function Vl(e,t){let n=e.getValue(`willChange`);if(Bl(n))return n.add(t);if(!n&&za.WillChange){let n=new za.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Hl(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Ul=`data-`+Hl(`framerAppearId`);function Wl(e){return e.props[Ul]}function Gl({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Kl(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?El(a,c):c;let l=a?.reduceMotion;r&&(a=r);let u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||d&&Gl(d,t))continue;let o={delay:n,...Dl(a||{},t)},c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){R.update(()=>r.set(i));continue}let f=!1;if(window.MotionHandoffAnimation){let n=Wl(e);if(n){let e=window.MotionHandoffAnimation(n,t,R);e!==null&&(o.startTime=e,f=!0)}}Vl(e,t);let p=l??e.shouldReduceMotion;r.start(Al(t,r,i,p&&Pl.has(t)?{type:!1}:o,e,f));let m=r.animation;m&&u.push(m)}if(o){let t=()=>R.update(()=>{o&&J(e,o)});u.length?Promise.all(u).then(t):t()}return u}function ql(e,t,n={}){let r=Nl(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(Kl(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return Jl(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function Jl(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(ql(c,t,{...o,delay:n+(typeof r==`function`?0:r)+_l(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function Yl(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>ql(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=ql(e,t,n);else{let i=typeof t==`function`?Nl(e,t,n.custom):t;r=Promise.all(Kl(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var Xl={test:e=>e===`auto`,parse:e=>e},Zl=e=>t=>t.test(e),Ql=[Io,B,Qo,Zo,es,$o,Xl],$l=e=>Ql.find(Zl(e));function eu(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||Ha(e)}var tu=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function nu(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Bo)||[];if(!r)return e;let i=n.replace(r,``),a=+!!tu.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var ru=/\b([a-z-]*)\(.*?\)/gu,iu={...ys,getAnimatableNone:e=>{let t=e.match(ru);return t?t.map(nu).join(` `):e}},au={...ys,getAnimatableNone:e=>{let t=ys.parse(e);return ys.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},ou={...Io,transform:Math.round},su={borderWidth:B,borderTopWidth:B,borderRightWidth:B,borderBottomWidth:B,borderLeftWidth:B,borderRadius:B,borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomRightRadius:B,borderBottomLeftRadius:B,width:B,maxWidth:B,height:B,maxHeight:B,top:B,right:B,bottom:B,left:B,inset:B,insetBlock:B,insetBlockStart:B,insetBlockEnd:B,insetInline:B,insetInlineStart:B,insetInlineEnd:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,paddingBlock:B,paddingBlockStart:B,paddingBlockEnd:B,paddingInline:B,paddingInlineStart:B,paddingInlineEnd:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,marginBlock:B,marginBlockStart:B,marginBlockEnd:B,marginInline:B,marginInlineStart:B,marginInlineEnd:B,fontSize:B,backgroundPositionX:B,backgroundPositionY:B,rotate:Zo,rotateX:Zo,rotateY:Zo,rotateZ:Zo,scale:Ro,scaleX:Ro,scaleY:Ro,scaleZ:Ro,skew:Zo,skewX:Zo,skewY:Zo,distance:B,translateX:B,translateY:B,translateZ:B,x:B,y:B,z:B,perspective:B,transformPerspective:B,opacity:Lo,originX:ts,originY:ts,originZ:B,zIndex:ou,fillOpacity:Lo,strokeOpacity:Lo,numOctaves:ou},cu={...su,color:rs,backgroundColor:rs,outlineColor:rs,fill:rs,stroke:rs,borderColor:rs,borderTopColor:rs,borderRightColor:rs,borderBottomColor:rs,borderLeftColor:rs,filter:iu,WebkitFilter:iu,mask:au,WebkitMask:au},lu=e=>cu[e],uu=new Set([iu,au]);function du(e,t){let n=lu(e);return uu.has(n)||(n=ys),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var fu=new Set([`auto`,`none`,`0`]);function pu(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!fu.has(t)&&fs(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=du(n,i)}var mu=class extends Vc{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),No(r))){let i=bl(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Pl.has(n)||e.length!==2)return;let[r,i]=e,a=$l(r),o=$l(i);if(Fo(r)!==Fo(i)&&Pc[n]){this.needsMeasurement=!0;return}if(a!==o)if(Ac(a)&&Ac(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Pc[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||eu(e[t]))&&n.push(t);n.length&&pu(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Pc[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Pc[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function hu(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var gu=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function _u(e){return Va(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:vu,cancel:yu}=Co(queueMicrotask,!1),bu={x:!1,y:!1};function xu(){return bu.x||bu.y}function Su(e){return e===`x`||e===`y`?bu[e]?null:(bu[e]=!0,()=>{bu[e]=!1}):bu.x||bu.y?null:(bu.x=bu.y=!0,()=>{bu.x=bu.y=!1})}function Cu(e,t){let n=hu(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function wu(e){return!(e.pointerType===`touch`||xu())}function Tu(e,t,n={}){let[r,i,a]=Cu(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!wu(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var Eu=(e,t)=>t?e===t?!0:Eu(e,t.parentElement):!1,Du=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Ou=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function ku(e){return Ou.has(e.tagName)||e.isContentEditable===!0}var Au=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function ju(e){return Au.has(e.tagName)||e.isContentEditable===!0}var Mu=new WeakSet;function Nu(e){return t=>{t.key===`Enter`&&e(t)}}function Pu(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Fu=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Nu(()=>{if(Mu.has(n))return;Pu(n,`down`);let e=Nu(()=>{Pu(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Pu(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Iu(e){return Du(e)&&!xu()}var Lu=new WeakSet;function Ru(e,t,n={}){let[r,i,a]=Cu(e,n),o=e=>{let r=e.currentTarget;if(!Iu(e)||Lu.has(e))return;Mu.add(r),n.stopPropagation&&Lu.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),Mu.has(r)&&Mu.delete(r),Iu(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Eu(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),_u(e)&&(e.addEventListener(`focus`,e=>Fu(e,i)),!ku(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function zu(e){return Va(e)&&`ownerSVGElement`in e}var Bu=new WeakMap,Vu,Hu=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:zu(r)&&`getBBox`in r?r.getBBox()[t]:r[n],Uu=Hu(`inline`,`width`,`offsetWidth`),Wu=Hu(`block`,`height`,`offsetHeight`);function Gu({target:e,borderBoxSize:t}){Bu.get(e)?.forEach(n=>{n(e,{get width(){return Uu(e,t)},get height(){return Wu(e,t)}})})}function X(e){e.forEach(Gu)}function Ku(){typeof ResizeObserver>`u`||(Vu=new ResizeObserver(X))}function qu(e,t){Vu||Ku();let n=hu(e);return n.forEach(e=>{let n=Bu.get(e);n||(n=new Set,Bu.set(e,n)),n.add(t),Vu?.observe(e)}),()=>{n.forEach(e=>{let n=Bu.get(e);n?.delete(t),n?.size||Vu?.unobserve(e)})}}var Ju=new Set,Yu;function Xu(){Yu=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Ju.forEach(t=>t(e))},window.addEventListener(`resize`,Yu)}function Zu(e){return Ju.add(e),Yu||Xu(),()=>{Ju.delete(e),!Ju.size&&typeof Yu==`function`&&(window.removeEventListener(`resize`,Yu),Yu=void 0)}}function Qu(e,t){return typeof e==`function`?Zu(e):qu(e,t)}function $u(e){return zu(e)&&e.tagName===`svg`}var ed=[...Ql,rs,ys],td=e=>ed.find(Zl(e)),nd=()=>({translate:0,scale:1,origin:0,originPoint:0}),rd=()=>({x:nd(),y:nd()}),id=()=>({min:0,max:0}),ad=()=>({x:id(),y:id()}),od=new WeakMap;function sd(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function cd(e){return typeof e==`string`||Array.isArray(e)}var ld=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],ud=[`initial`,...ld];function dd(e){return sd(e.animate)||ud.some(t=>cd(e[t]))}function fd(e){return!!(dd(e)||e.variants)}function pd(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Y(i))e.addValue(r,i);else if(Y(a))e.addValue(r,zl(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,zl(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var md={current:null},hd={current:!1},gd=typeof window<`u`;function _d(){if(hd.current=!0,gd)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>md.current=e.matches;e.addEventListener(`change`,t),t()}else md.current=!1}var vd=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],yd={};function bd(e){yd=e}function Z(){return yd}var xd=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Vc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Oo.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,R.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=dd(t),this.isVariantNode=fd(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&Y(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,od.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(hd.current||_d(),this.shouldReduceMotion=md.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),wo(this.notifyUpdate),wo(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&ll.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new el({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:Ya(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=kc.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&R.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in yd){let t=yd[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ad()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<vd.length;t++){let n=vd[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=pd(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=zl(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Ba(n)||Ha(n))?n=parseFloat(n):!td(n)&&ys.test(t)&&(n=du(e,t)),this.setBaseTarget(e,Y(n)?n.get():n)),Y(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Ml(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Y(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Ja),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){vu.render(this.render)}},Sd=class extends xd{constructor(){super(...arguments),this.KeyframeResolver=mu}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Y(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},Cd=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function wd({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Td({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Ed(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Dd(e){return e===void 0||e===1}function Od({scale:e,scaleX:t,scaleY:n}){return!Dd(e)||!Dd(t)||!Dd(n)}function kd(e){return Od(e)||Ad(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Ad(e){return jd(e.x)||jd(e.y)}function jd(e){return e&&e!==`0%`}function Md(e,t,n){return n+t*(e-n)}function Nd(e,t,n,r,i){return i!==void 0&&(e=Md(e,i,r)),Md(e,n,r)+t}function Q(e,t=0,n=1,r,i){e.min=Nd(e.min,t,n,r,i),e.max=Nd(e.max,t,n,r,i)}function Pd(e,{x:t,y:n}){Q(e.x,t.translate,t.scale,t.originPoint),Q(e.y,n.translate,n.scale,n.originPoint)}var Fd=.999999999999,Id=1.0000000000001;function Ld(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Rd(e.x,-a.scroll.offset.x),Rd(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Pd(e,o)),r&&kd(a.latestValues)&&Vd(e,a.latestValues,a.layout?.layoutBox))}t.x<Id&&t.x>Fd&&(t.x=1),t.y<Id&&t.y>Fd&&(t.y=1)}function Rd(e,t){e.min+=t,e.max+=t}function zd(e,t,n,r,i=.5){Q(e,t,n,V(e.min,e.max,i),r)}function Bd(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function Vd(e,t,n){let r=n??e;zd(e.x,Bd(t.x,r.x),t.scaleX,t.scale,t.originX),zd(e.y,Bd(t.y,r.y),t.scaleY,t.scale,t.originY)}function Hd(e,t){return wd(Ed(e.getBoundingClientRect(),t))}function Ud(e,t,n){let r=Hd(e,n),{scroll:i}=t;return i&&(Rd(r.x,i.offset.x),Rd(r.y,i.offset.y)),r}var Wd={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Gd=Oc.length;function Kd(e,t,n){let r=``,i=!0;for(let a=0;a<Gd;a++){let o=Oc[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=gu(s,su[o]);if(!c){i=!1;let t=Wd[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function qd(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(kc.has(e)){o=!0;continue}else if(jo(e)){i[e]=n;continue}else{let t=gu(n,su[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Kd(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Jd(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Yd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Xd={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(B.test(e))e=parseFloat(e);else return e;return`${Yd(e,t.target.x)}% ${Yd(e,t.target.y)}%`}},Zd={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=ys.parse(e);if(i.length>5)return r;let a=ys.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=V(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Qd={borderRadius:{...Xd,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:Xd,borderTopRightRadius:Xd,borderBottomLeftRadius:Xd,borderBottomRightRadius:Xd,boxShadow:Zd};function $d(e,{layout:t,layoutId:n}){return kc.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Qd[e]||e===`opacity`)}function ef(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Y(r[t])||i&&Y(i[t])||$d(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function tf(e){return window.getComputedStyle(e)}var nf=class extends Sd{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Jd}readValueFromInstance(e,t){if(kc.has(t))return this.projection?.isProjecting?wc(t):Ec(e,t);{let n=tf(e),r=(jo(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Hd(e,t)}build(e,t,n){qd(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return ef(e,t,n)}},rf={offset:`stroke-dashoffset`,array:`stroke-dasharray`},af={offset:`strokeDashoffset`,array:`strokeDasharray`};function of(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?rf:af;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var sf=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function cf(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(qd(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of sf)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&of(d,i,a,o,!1)}var lf=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),uf=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function df(e,t,n,r){Jd(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(lf.has(n)?n:Hl(n),t.attrs[n])}function ff(e,t,n){let r=ef(e,t,n);for(let n in e)if(Y(e[n])||Y(t[n])){let t=Oc.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var pf=class extends Sd{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=ad}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(kc.has(t)){let e=lu(t);return e&&e.default||0}return t=lf.has(t)?t:Hl(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return ff(e,t,n)}build(e,t,n){cf(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){df(e,t,n,r)}mount(e){this.isSVGTag=uf(e.tagName),super.mount(e)}},mf=ud.length;function hf(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&hf(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<mf;n++){let r=ud[n],i=e.props[r];(cd(i)||i===!1)&&(t[r]=i)}return t}function gf(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var _f=[...ld].reverse(),vf=ld.length;function yf(e){return t=>Promise.all(t.map(({animation:t,options:n})=>Yl(e,t,n)))}function bf(e){let t=yf(e),n=Cf(),r=!0,i=!1,a=t=>(n,r)=>{let i=Nl(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=hf(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<vf;t++){let p=_f[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=cd(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||sd(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=xf(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,T={...w,...C},ee=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in T){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=G(t)&&G(n)?!gf(t,n):t!==n,r?t==null?u.add(e):ee(e):t!==void 0&&u.has(e)?ee(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let E=v&&y;b&&(!E||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!E&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Nl(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=_l(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=Nl(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Cf(),i=!0}}}function xf(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!gf(t,e):!1}function Sf(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Cf(){return{animate:Sf(!0),whileInView:Sf(),whileHover:Sf(),whileTap:Sf(),whileDrag:Sf(),whileFocus:Sf(),exit:Sf()}}function wf(e,t){e.min=t.min,e.max=t.max}function Tf(e,t){wf(e.x,t.x),wf(e.y,t.y)}function Ef(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Df=1e-4,Of=1-Df,kf=1+Df,Af=.01,jf=0-Af,Mf=0+Af;function Nf(e){return e.max-e.min}function Pf(e,t,n){return Math.abs(e-t)<=n}function Ff(e,t,n,r=.5){e.origin=r,e.originPoint=V(t.min,t.max,e.origin),e.scale=Nf(n)/Nf(t),e.translate=V(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Of&&e.scale<=kf||isNaN(e.scale))&&(e.scale=1),(e.translate>=jf&&e.translate<=Mf||isNaN(e.translate))&&(e.translate=0)}function If(e,t,n,r){Ff(e.x,t.x,n.x,r?r.originX:void 0),Ff(e.y,t.y,n.y,r?r.originY:void 0)}function Lf(e,t,n,r=0){e.min=(r?V(n.min,n.max,r):n.min)+t.min,e.max=e.min+Nf(t)}function Rf(e,t,n,r){Lf(e.x,t.x,n.x,r?.x),Lf(e.y,t.y,n.y,r?.y)}function zf(e,t,n,r=0){let i=r?V(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+Nf(t)}function Bf(e,t,n,r){zf(e.x,t.x,n.x,r?.x),zf(e.y,t.y,n.y,r?.y)}function Vf(e,t,n,r,i){return e-=t,e=Md(e,1/n,r),i!==void 0&&(e=Md(e,1/i,r)),e}function Hf(e,t=0,n=1,r=.5,i,a=e,o=e){if(Qo.test(t)&&(t=parseFloat(t),t=V(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=V(a.min,a.max,r);e===a&&(s-=t),e.min=Vf(e.min,t,n,s,i),e.max=Vf(e.max,t,n,s,i)}function Uf(e,t,[n,r,i],a,o){Hf(e,t[n],t[r],t[i],t.scale,a,o)}var Wf=[`x`,`scaleX`,`originX`],Gf=[`y`,`scaleY`,`originY`];function Kf(e,t,n,r){Uf(e.x,t,Wf,n?n.x:void 0,r?r.x:void 0),Uf(e.y,t,Gf,n?n.y:void 0,r?r.y:void 0)}function qf(e){return e.translate===0&&e.scale===1}function Jf(e){return qf(e.x)&&qf(e.y)}function Yf(e,t){return e.min===t.min&&e.max===t.max}function Xf(e,t){return Yf(e.x,t.x)&&Yf(e.y,t.y)}function Zf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Qf(e,t){return Zf(e.x,t.x)&&Zf(e.y,t.y)}function $f(e){return Nf(e.x)/Nf(e.y)}function ep(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function tp(e){return[e(`x`),e(`y`)]}function np(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var rp=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`],ip=rp.length,ap=e=>typeof e==`string`?parseFloat(e):e,op=e=>typeof e==`number`||B.test(e);function sp(e,t,n,r,i,a){i?(e.opacity=V(0,n.opacity??1,lp(r)),e.opacityExit=V(t.opacity??1,0,up(r))):a&&(e.opacity=V(t.opacity??1,n.opacity??1,r));for(let i=0;i<ip;i++){let a=rp[i],o=cp(t,a),s=cp(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||op(o)===op(s)?(e[a]=Math.max(V(ap(o),ap(s),r),0),(Qo.test(s)||Qo.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=V(t.rotate||0,n.rotate||0,r))}function cp(e,t){return e[t]===void 0?e.borderRadius:e[t]}var lp=dp(0,.5,uo),up=dp(.5,.95,Wa);function dp(e,t,n){return r=>r<e?0:r>t?1:n(qa(e,t,r))}function fp(e,t,n){let r=Y(e)?e:zl(e);return r.start(Al(``,r,t,n)),r.animation}function pp(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var mp=(e,t)=>e.depth-t.depth,hp=class{constructor(){this.children=[],this.isDirty=!1}add(e){Ia(this.children,e),this.isDirty=!0}remove(e){La(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(mp),this.isDirty=!1,this.children.forEach(e)}};function gp(e,t){let n=Oo.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(wo(r),e(a-t))};return R.setup(r,!0),()=>wo(r)}function _p(e){return Y(e)?e.get():e}var vp=class{constructor(){this.members=[]}add(e){Ia(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(La(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(La(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},yp={hasAnimatedSinceResize:!0,hasEverUpdated:!1},bp={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},xp=[``,`X`,`Y`,`Z`],Sp=1e3,Cp=0;function wp(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Tp(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Wl(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,R,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Tp(r)}function Ep({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Cp++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,bo.value&&(bp.nodes=bp.calculatedTargetDeltas=bp.calculatedProjections=0),this.nodes.forEach(kp),this.nodes.forEach(Rp),this.nodes.forEach(zp),this.nodes.forEach(Ap),bo.addProjectionMetrics&&bo.addProjectionMetrics(bp)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new hp)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Ja),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=zu(t)&&!$u(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;R.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=gp(i,250),yp.hasAnimatedSinceResize&&(yp.hasAnimatedSinceResize=!1,this.nodes.forEach(Lp)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Kp,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Qf(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Dl(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||Lp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),wo(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Bp),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Tp(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(Np),this.nodes.forEach(Mp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Pp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Fp),this.nodes.forEach(Ip),this.nodes.forEach(Dp),this.nodes.forEach(Op)):this.nodes.forEach(Pp),this.clearAllSnapshots();let e=Oo.now();z.delta=Ra(0,1e3/60,e-z.timestamp),z.timestamp=e,z.isProcessing=!0,To.update.process(z),To.preRender.process(z),To.render.process(z),z.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,vu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(jp),this.sharedNodes.forEach(Vp)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,R.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){R.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Nf(this.snapshot.measuredBox.x)&&!Nf(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=ad(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Jf(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||kd(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Xp(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return ad();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Qp))){let{scroll:e}=this.root;e&&(Rd(t.x,e.offset.x),Rd(t.y,e.offset.y))}return t}removeElementScroll(e){let t=ad();if(Tf(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&Tf(t,e),Rd(t.x,i.offset.x),Rd(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||ad();Tf(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(Rd(r.x,-n.scroll.offset.x),Rd(r.y,-n.scroll.offset.y)),kd(n.latestValues)&&Vd(r,n.latestValues,n.layout?.layoutBox)}return kd(this.latestValues)&&Vd(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=ad();Tf(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!kd(n.latestValues))continue;let r;n.instance&&(Od(n.latestValues)&&n.updateSnapshot(),r=ad(),Tf(r,n.measurePageBox())),Kf(t,n.latestValues,n.snapshot?.layoutBox,r)}return kd(this.latestValues)&&Kf(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==z.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=z.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ad(),this.targetWithTransforms=ad()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Rf(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Tf(this.target,this.layout.layoutBox),Pd(this.target,this.targetDelta)):Tf(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),bo.value&&bp.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Od(this.parent.latestValues)||Ad(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ad(),this.relativeTargetOrigin=ad(),Bf(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),Tf(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===z.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;Tf(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Ld(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=ad());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ef(this.prevProjectionDelta.x,this.projectionDelta.x),Ef(this.prevProjectionDelta.y,this.projectionDelta.y)),If(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!ep(this.projectionDelta.x,this.prevProjectionDelta.x)||!ep(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),bo.value&&bp.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=rd(),this.projectionDelta=rd(),this.projectionDeltaWithTransform=rd()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=rd();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=ad(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(Gp));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;Hp(a.x,e.x,n),Hp(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bf(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Wp(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Xf(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=ad(),Tf(d,this.relativeTarget)),s&&(this.animationValues=i,sp(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(wo(this.pendingAnimation),void 0),this.pendingAnimation=R.update(()=>{yp.hasAnimatedSinceResize=!0,ko.layout++,this.motionValue||=zl(0),this.motionValue.jump(0,!1),this.currentAnimation=fp(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{ko.layout--},onComplete:()=>{ko.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Sp),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Zp(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||ad();let t=Nf(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Nf(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Tf(t,n),Vd(t,i),If(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new vp),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&wp(`z`,e,r,this.animationValues);for(let t=0;t<xp.length;t++)wp(`rotate${xp[t]}`,e,r,this.animationValues),wp(`skew${xp[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=_p(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=_p(t?.pointerEvents)||``),this.hasProjected&&!kd(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=np(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in Qd){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Qd[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?_p(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Mp),this.root.sharedNodes.clear()}}}function Dp(e){e.updateLayout()}function Op(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)tp(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Nf(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;wf(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else Zp(i,t.layoutBox,n)&&tp(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Nf(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=rd();If(o,n,t.layoutBox);let s=rd();a?If(s,e.applyTransform(r,!0),t.measuredBox):If(s,n,t.layoutBox);let c=!Jf(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=ad();Bf(s,t.layoutBox,i.layoutBox,o);let c=ad();Bf(c,n,a.layoutBox,o),Qf(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function kp(e){bo.value&&bp.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function Ap(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function jp(e){e.clearSnapshot()}function Mp(e){e.clearMeasurements()}function Np(e){e.isLayoutDirty=!0,e.updateLayout()}function Pp(e){e.isLayoutDirty=!1}function Fp(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Ip(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Lp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Rp(e){e.resolveTargetDelta()}function zp(e){e.calcProjection()}function Bp(e){e.resetSkewAndRotation()}function Vp(e){e.removeLeadSnapshot()}function Hp(e,t,n){e.translate=V(t.translate,0,n),e.scale=V(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Up(e,t,n,r){e.min=V(t.min,n.min,r),e.max=V(t.max,n.max,r)}function Wp(e,t,n,r){Up(e.x,t.x,n.x,r),Up(e.y,t.y,n.y,r)}function Gp(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Kp={duration:.45,ease:[.4,0,.1,1]},qp=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Jp=qp(`applewebkit/`)&&!qp(`chrome/`)?Math.round:Wa;function Yp(e){e.min=Jp(e.min),e.max=Jp(e.max)}function Xp(e){Yp(e.x),Yp(e.y)}function Zp(e,t,n){return e===`position`||e===`preserve-aspect`&&!Pf($f(t),$f(n),.2)}function Qp(e){return e!==e.root&&e.scroll?.wasRoot}var $p=Ep({attachResizeListener:(e,t)=>pp(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),em={current:void 0},tm=Ep({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!em.current){let e=new $p({});e.mount(window),e.setOptions({layoutScroll:!0}),em.current=e}return em.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),nm=(0,w.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function rm(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function im(...e){return t=>{let n=!1,r=e.map(e=>{let r=rm(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():rm(e[t],null)}}}}function am(...e){return w.useCallback(im(...e),e)}var om=class extends w.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(_u(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=_u(e)&&e.offsetWidth||0,r=_u(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}};function sm({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,w.useId)(),s=(0,w.useRef)(null),c=(0,w.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:l}=(0,w.useContext)(nm),u=am(s,e.props?.ref??e?.ref);return(0,w.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m}=c.current;if(t||a===!1||!s.current||!e||!u)return;let h=n===`left`?`left: ${f}`:`right: ${p}`,g=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let _=document.createElement(`style`);l&&(_.nonce=l);let v=i??document.head;return v.appendChild(_),_.sheet&&_.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),v.contains(_)&&v.removeChild(_)}},[t]),(0,F.jsx)(om,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:w.cloneElement(e,{ref:u})})}var cm=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Na(lm),d=(0,w.useId)(),f=!0,p=(0,w.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,w.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),w.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,F.jsx)(sm,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,F.jsx)(Fa.Provider,{value:p,children:e})};function lm(){return new Map}function um(e=!0){let t=(0,w.useContext)(Fa);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,w.useId)();(0,w.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,w.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var dm=e=>e.key||``;function fm(e){let t=[];return w.Children.forEach(e,e=>{(0,w.isValidElement)(e)&&t.push(e)}),t}var pm=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=um(o),f=(0,w.useMemo)(()=>fm(e),[e]),p=o&&!u?[]:f.map(dm),m=(0,w.useRef)(!0),h=(0,w.useRef)(f),g=Na(()=>new Map),_=(0,w.useRef)(new Set),[v,y]=(0,w.useState)(f),[b,x]=(0,w.useState)(f);Pa(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=dm(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=dm(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(fm(e)),y(f),null}let{forceRender:C}=(0,w.useContext)(Ma);return(0,F.jsx)(F.Fragment,{children:b.map(e=>{let v=dm(e),y=o&&!u?!1:f===b||p.includes(v);return(0,F.jsx)(cm,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(g.has(v))_.current.add(v),g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},mm=(0,w.createContext)({strict:!1}),hm={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},gm=!1;function _m(){if(gm)return;let e={};for(let t in hm)e[t]={isEnabled:e=>hm[t].some(t=>!!e[t])};bd(e),gm=!0}function vm(){return _m(),Z()}function ym(e){let t=vm();for(let n in e)t[n]={...t[n],...e[n]};bd(t)}var bm=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function xm(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||bm.has(e)}var Sm=c({default:()=>Cm}),Cm,wm=o((()=>{throw Cm={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),Tm=e=>!xm(e);function Em(e){typeof e==`function`&&(Tm=t=>t.startsWith(`on`)?!xm(t):e(t))}try{Em((wm(),d(Sm)).default)}catch{}function Dm(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||Y(e[i])||(Tm(i)||n===!0&&xm(i)||!t&&!xm(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var Om=(0,w.createContext)({});function km(e,t){if(dd(e)){let{initial:t,animate:n}=e;return{initial:t===!1||cd(t)?t:void 0,animate:cd(n)?n:void 0}}return e.inherit===!1?{}:t}function Am(e){let{initial:t,animate:n}=km(e,(0,w.useContext)(Om));return(0,w.useMemo)(()=>({initial:t,animate:n}),[jm(t),jm(n)])}function jm(e){return Array.isArray(e)?e.join(` `):e}var Mm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Nm(e,t,n){for(let r in t)!Y(t[r])&&!$d(r,n)&&(e[r]=t[r])}function Pm({transformTemplate:e},t){return(0,w.useMemo)(()=>{let n=Mm();return qd(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Fm(e,t){let n=e.style||{},r={};return Nm(r,n,e),Object.assign(r,Pm(e,t)),r}function Im(e,t){let n={},r=Fm(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Lm=()=>({...Mm(),attrs:{}});function Rm(e,t,n,r){let i=(0,w.useMemo)(()=>{let n=Lm();return cf(n,t,uf(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};Nm(t,e.style,e),i.style={...t,...i.style}}return i}var zm=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Bm(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(zm.indexOf(e)>-1||/[A-Z]/u.test(e))}function Vm(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Bm(e)?Rm:Im)(t,r,i,e),c=Dm(t,typeof e==`string`,a),l=e===w.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,w.useMemo)(()=>Y(u)?u.get():u,[u]);return(0,w.createElement)(e,{...l,children:d})}function Hm({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Um(n,r,i,e),renderState:t()}}function Um(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=_p(a[e]);let{initial:o,animate:s}=e,c=dd(e),l=fd(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!sd(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Ml(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Wm=e=>(t,n)=>{let r=(0,w.useContext)(Om),i=(0,w.useContext)(Fa),a=()=>Hm(e,t,r,i);return n?a():Na(a)},Gm=Wm({scrapeMotionValuesFromProps:ef,createRenderState:Mm}),Km=Wm({scrapeMotionValuesFromProps:ff,createRenderState:Lm}),qm=Symbol.for(`motionComponentSymbol`);function Jm(e,t,n){let r=(0,w.useRef)(n);(0,w.useInsertionEffect)(()=>{r.current=n});let i=(0,w.useRef)(null);return(0,w.useCallback)(n=>{n&&e.onMount?.(n);let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n);t&&(n?t.mount(n):t.unmount())},[t])}var Ym=(0,w.createContext)({});function Xm(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Zm(e,t,n,r,i,a){let{visualElement:o}=(0,w.useContext)(Om),s=(0,w.useContext)(mm),c=(0,w.useContext)(Fa),l=(0,w.useContext)(nm),u=l.reducedMotion,d=l.skipAnimations,f=(0,w.useRef)(null),p=(0,w.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,w.useContext)(Ym);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&Qm(f.current,n,i,h);let g=(0,w.useRef)(!1);(0,w.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[Ul],v=(0,w.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return Pa(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,w.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function Qm(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:$m(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Xm(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function $m(e){if(e)return e.options.allowProjection===!1?$m(e.parent):e.projection}function eh(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&ym(r);let a=n?n===`svg`:Bm(e),o=a?Km:Gm;function s(n,s){let c,l={...(0,w.useContext)(nm),...n,layoutId:th(n)},{isStatic:u}=l,d=Am(n),f=o(n,u);if(!u&&typeof window<`u`){nh(l,r);let t=rh(l);c=t.MeasureLayout,d.visualElement=Zm(e,f,l,i,t.ProjectionNode,a)}return(0,F.jsxs)(Om.Provider,{value:d,children:[c&&d.visualElement?(0,F.jsx)(c,{visualElement:d.visualElement,...l}):null,Vm(e,n,Jm(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,w.forwardRef)(s);return c[qm]=e,c}function th({layoutId:e}){let t=(0,w.useContext)(Ma).id;return t&&e!==void 0?t+`-`+e:e}function nh(e,t){(0,w.useContext)(mm).strict}function rh(e){let{drag:t,layout:n}=vm();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function ih(e,t){if(typeof Proxy>`u`)return eh;let n=new Map,r=(n,r)=>eh(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,eh(a,void 0,e,t)),n.get(a))})}var ah=(e,t)=>t.isSVG??Bm(e)?new pf(t):new nf(t,{allowProjection:e!==w.Fragment}),oh=class extends Cd{constructor(e){super(e),e.animationState||=bf(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();sd(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},sh=0,ch={animation:{Feature:oh},exit:{Feature:class extends Cd{constructor(){super(...arguments),this.id=sh++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`){let n=Nl(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function lh(e){return{point:{x:e.pageX,y:e.pageY}}}var uh=e=>t=>Du(t)&&e(t,lh(t));function dh(e,t,n,r){return pp(e,t,uh(n),r)}var fh=({current:e})=>e?e.ownerDocument.defaultView:null,ph=(e,t)=>Math.abs(e-t);function mh(e,t){let n=ph(e.x,t.x),r=ph(e.y,t.y);return Math.sqrt(n**2+r**2)}var hh=new Set([`auto`,`scroll`]),gh=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=_h(this.lastRawMoveEventInfo,this.transformPagePoint));let e=yh(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=mh(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=z;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=_h(t,this.transformPagePoint),R.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=yh(e.type===`pointercancel`?this.lastMoveEventInfo:_h(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Du(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=_h(lh(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=z;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,yh(s,this.history)),this.removeListeners=Ka(dh(this.contextWindow,`pointermove`,this.handlePointerMove),dh(this.contextWindow,`pointerup`,this.handlePointerUp),dh(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(hh.has(e.overflowX)||hh.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),R.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),wo(this.updatePoint)}};function _h(e,t){return t?{point:t(e.point)}:e}function vh(e,t){return{x:e.x-t.x,y:e.y-t.y}}function yh({point:e},t){return{point:e,delta:vh(e,xh(t)),offset:vh(e,bh(t)),velocity:Sh(t,.1)}}function bh(e){return e[0]}function xh(e){return e[e.length-1]}function Sh(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=xh(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Ya(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>Ya(t)*2&&(r=e[1]);let a=Xa(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Ch(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?V(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?V(n,e,r.max):Math.min(e,n)),e}function wh(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function Th(e,{top:t,left:n,bottom:r,right:i}){return{x:wh(e.x,n,i),y:wh(e.y,t,r)}}function Eh(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Dh(e,t){return{x:Eh(e.x,t.x),y:Eh(e.y,t.y)}}function Oh(e,t){let n=.5,r=Nf(e),i=Nf(t);return i>r?n=qa(t.min,t.max-r,e.min):r>i&&(n=qa(e.min,e.max-i,t.min)),Ra(0,1,n)}function kh(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var Ah=.35;function jh(e=Ah){return e===!1?e=0:e===!0&&(e=Ah),{x:Mh(e,`left`,`right`),y:Mh(e,`top`,`bottom`)}}function Mh(e,t,n){return{min:Nh(e,t),max:Nh(e,n)}}function Nh(e,t){return typeof e==`number`?e:e[t]||0}var Ph=new WeakMap,Fh=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ad(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(lh(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Su(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),tp(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Qo.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Nf(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&R.update(()=>i(e,t),!1,!0),Vl(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=zh(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&R.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new gh(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:fh(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&R.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Rh(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=Ch(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Xm(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=Th(n.layoutBox,e):this.constraints=!1,this.elastic=jh(t),r!==this.constraints&&!Xm(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&tp(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=kh(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Xm(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=Ud(n,r.root,this.visualElement.getTransformPagePoint()),a=Dh(r.layout.layoutBox,i);if(t){let e=t(Td(a));this.hasMutatedConstraints=!!e,e&&(a=wd(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=tp(o=>{if(!Rh(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Vl(this.visualElement,e),n.start(Al(e,n,0,t,this.visualElement,!1))}stopAnimation(){tp(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){tp(t=>{let{drag:n}=this.getProps();if(!Rh(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-V(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Xm(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};tp(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=Oh({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),tp(t=>{if(!Rh(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(V(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Ph.set(this.visualElement,this);let e=this.visualElement.current,t=dh(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&ju(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();Xm(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=Lh(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),R.read(r);let o=pp(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(tp(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=Ah,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Ih(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function Lh(e,t,n){let r=Qu(e,Ih(n)),i=Qu(t,Ih(n));return()=>{r(),i()}}function Rh(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function zh(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Bh=class extends Cd{constructor(e){super(e),this.removeGroupControls=Wa,this.removeListeners=Wa,this.controls=new Fh(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Wa}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Vh=e=>(t,n)=>{e&&R.update(()=>e(t,n),!1,!0)},Hh=class extends Cd{constructor(){super(...arguments),this.removePointerDownListener=Wa}onPointerDown(e){this.session=new gh(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:fh(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Vh(e),onStart:Vh(t),onMove:Vh(n),onEnd:(e,t)=>{delete this.session,r&&R.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=dh(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Uh=!1,Wh=class extends w.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Uh&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),yp.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Uh=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||R.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),vu.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Uh=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Gh(e){let[t,n]=um(),r=(0,w.useContext)(Ma);return(0,F.jsx)(Wh,{...e,layoutGroup:r,switchLayoutGroup:(0,w.useContext)(Ym),isPresent:t,safeToRemove:n})}var Kh={pan:{Feature:Hh},drag:{Feature:Bh,ProjectionNode:tm,MeasureLayout:Gh}};function qh(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&R.postRender(()=>i(t,lh(t)))}var Jh=class extends Cd{mount(){let{current:e}=this.node;e&&(this.unmount=Tu(e,(e,t)=>(qh(this.node,t,`Start`),e=>qh(this.node,e,`End`))))}unmount(){}},Yh=class extends Cd{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Ka(pp(this.node.current,`focus`,()=>this.onFocus()),pp(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Xh(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&R.postRender(()=>i(t,lh(t)))}var Zh=class extends Cd{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=Ru(e,(e,t)=>(Xh(this.node,t,`Start`),(e,{success:t})=>Xh(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},Qh=new WeakMap,$h=new WeakMap,eg=e=>{let t=Qh.get(e.target);t&&t(e)},tg=e=>{e.forEach(eg)};function ng({root:e,...t}){let n=e||document;$h.has(n)||$h.set(n,{});let r=$h.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(tg,{root:e,...t})),r[i]}function rg(e,t,n){let r=ng(t);return Qh.set(e,n),r.observe(e),()=>{Qh.delete(e),r.unobserve(e)}}var ig={some:0,all:1},ag=class extends Cd{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:ig[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=rg(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(og(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function og({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var sg={inView:{Feature:ag},tap:{Feature:Zh},focus:{Feature:Yh},hover:{Feature:Jh}},cg={layout:{ProjectionNode:tm,MeasureLayout:Gh}},$=ih({...ch,...sg,...Kh,...cg},ah),lg=`/Balaji-Infotech/assets/dashboard4-GHgf_liq.png`;function ug(){return(0,F.jsxs)(F.Fragment,{children:[!1,(0,F.jsxs)(`section`,{className:`\r
    relative\r
    min-h-[80vh]\r
    overflow-hidden\r
    bg-white\r
    px-4 sm:px-6 lg:px-10\r
    flex items-center\r
  `,children:[(0,F.jsx)(`div`,{className:`\r
          absolute\r
          top-[-200px]\r
          right-[-100px]\r
          w-[700px]\r
          h-[700px]\r
          rounded-full\r
          bg-[#155A96]/10\r
          blur-3xl\r
        `}),(0,F.jsxs)(`div`,{className:`\r
        relative\r
        max-w-7xl\r
        mx-auto\r
        w-full\r
        grid\r
        lg:grid-cols-[1.2fr_1fr]\r
        items-center\r
        pt-20 sm:pt-24 lg:pt-24\r
        pb-6\r
        gap-8 lg:gap-10\r
      `,children:[(0,F.jsxs)($.div,{initial:{opacity:0,x:-80},whileInView:{opacity:1,x:0},transition:{duration:.8,ease:`easeOut`},viewport:{once:!0},className:`order-2 lg:order-1`,children:[(0,F.jsxs)(`div`,{className:`\r
          inline-flex\r
          items-center\r
          gap-2\r
          px-4 py-2\r
          rounded-full\r
          border border-slate-200\r
          bg-[#155A96]/5\r
          text-[#155A96]\r
          text-sm\r
          mb-5\r
          `,children:[(0,F.jsx)(`div`,{className:`\r
    flex\r
    items-center\r
    justify-center\r
    w-6\r
    h-6\r
    rounded-full\r
    bg-[#155A96]\r
  `,children:(0,F.jsx)(ur,{size:14,className:`text-white`})}),(0,F.jsx)(`span`,{className:`truncate`,children:`Trusted Tally Solutions Partner`})]}),(0,F.jsxs)(`h1`,{className:`\r
              text-[#071426]\r
              text-[34px]\r
              sm:text-[46px]\r
              lg:text-[58px]\r
              font-bold\r
              leading-[1.05]\r
              max-w-[700px]\r
            `,children:[`Balaji AI Infotech`,(0,F.jsx)(`div`,{className:`mt-3 sm:mt-4`,children:(0,F.jsx)(ja,{sequence:[`Tally solutions and trainings`,2e3,`Tally sales and services`,2e3,`Tally certified partner`,2e3],wrapper:`h1`,speed:50,repeat:1/0,className:`\r
                  text-[20px]\r
                  sm:text-[26px]\r
                  lg:text-[30px]\r
                  font-bold\r
                  leading-[1.3]\r
                  text-[#155A96]\r
                `})})]}),(0,F.jsx)(`p`,{className:`\r
              mt-4 sm:mt-5\r
              max-w-[560px]\r
              text-[15px] sm:text-base\r
              leading-7\r
              text-slate-600\r
            `,children:`We specialize in providing professional Tally services that enhance your business productivity. From implementation to troubleshooting, we ensure smooth operations every step of the way.`}),(0,F.jsxs)(`div`,{className:`mt-6 flex flex-col sm:flex-row gap-4`,children:[(0,F.jsx)(`a`,{href:`tel:+919849431943`,children:(0,F.jsxs)(`button`,{className:`\r
                group\r
                px-7 py-4\r
                rounded-2xl\r
                bg-[#155A96]\r
                text-white\r
                font-medium\r
                flex items-center justify-center gap-2\r
                transition-all\r
                duration-300\r
                `,children:[`Call Us`,(0,F.jsx)(bi,{size:18,className:`group-hover:translate-x-1 transition`})]})}),(0,F.jsx)(`a`,{href:`https://wa.me/919849431943`,target:`_blank`,rel:`noopener noreferrer`,children:(0,F.jsxs)(`button`,{className:`\r
                group\r
                w-full sm:w-auto\r
                px-7 sm:px-10\r
                py-4\r
                rounded-2xl\r
                border border-slate-200\r
                bg-white\r
                text-[#071426]\r
                hover:bg-slate-50\r
                flex items-center justify-center gap-2\r
                hover:bg-white/10\r
                transition duration-300\r
              `,children:[`Chat with Us`,(0,F.jsx)(mi,{size:18,className:`group-hover:translate-x-1 transition`})]})})]}),(0,F.jsxs)(`div`,{className:`\r
              mt-6\r
              grid\r
              grid-cols-1\r
              sm:grid-cols-2\r
              lg:grid-cols-3\r
              gap-3\r
            `,children:[(0,F.jsxs)(`div`,{className:`\r
                flex items-center gap-3\r
                px-4 py-4\r
              `,children:[(0,F.jsx)(Ii,{className:`text-[#155A96] shrink-0`,size:24}),(0,F.jsx)(`div`,{children:(0,F.jsx)(`h4`,{className:`text-[#155A96] font-medium text-sm sm:text-base`,children:`Trusted Experts`})})]}),(0,F.jsxs)(`div`,{className:`\r
                flex items-center gap-3\r
                px-4 py-4\r
              `,children:[(0,F.jsx)(ur,{className:`text-[#155A96] shrink-0`,size:24}),(0,F.jsx)(`div`,{children:(0,F.jsx)(`h4`,{className:`text-[#155A96] font-medium text-sm sm:text-base`,children:`Experienced`})})]}),(0,F.jsxs)(`div`,{className:`\r
                flex items-center gap-3\r
                px-4 py-4\r
              `,children:[(0,F.jsx)(ur,{className:`text-[#155A96] shrink-0`,size:24}),(0,F.jsx)(`div`,{children:(0,F.jsx)(`h4`,{className:`text-[#155A96] font-medium text-sm sm:text-base`,children:`Professional`})})]})]})]}),(0,F.jsxs)($.div,{className:`\r
            relative\r
            flex justify-center lg:justify-end\r
            order-1 lg:order-2\r
          `,initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},transition:{duration:1,ease:`easeOut`,delay:.2},viewport:{once:!0},children:[(0,F.jsx)(`div`,{className:`\r
    absolute\r
    -top-4\r
    right-10\r
    bg-[#F4B400]/85\r
    text-white\r
    px-4\r
    py-2\r
    rounded-xl\r
    shadow-lg\r
    font-medium\r
    z-20\r
  `,children:`GST Ready ✓`}),(0,F.jsxs)(`div`,{className:`\r
                rounded-[28px] sm:rounded-[30px]\r
                overflow-hidden\r
              `,children:[(0,F.jsx)(`div`,{className:`\r
          absolute\r
          top-[-200px]\r
          right-[-100px]\r
          w-[700px]\r
          h-[700px]\r
          rounded-full\r
          bg-[#155A96]/10\r
          blur-3xl\r
        `}),(0,F.jsx)(`img`,{src:lg,alt:`Dashboard`,className:`\r
                  w-full\r
                  h-auto\r
                  object-contain\r
                `})]})]})]})]}),!1,!1]})}function dg(e){return typeof e==`object`&&!!e&&`constructor`in e&&e.constructor===Object}function fg(e={},t={}){let n=[`__proto__`,`constructor`,`prototype`];Object.keys(t).filter(e=>n.indexOf(e)<0).forEach(n=>{e[n]===void 0?e[n]=t[n]:dg(t[n])&&dg(e[n])&&Object.keys(t[n]).length>0&&fg(e[n],t[n])})}var pg={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:``},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:``,host:``,hostname:``,href:``,origin:``,pathname:``,protocol:``,search:``}};function mg(){let e=typeof document<`u`?document:{};return fg(e,pg),e}var hg={document:pg,navigator:{userAgent:``},location:{hash:``,host:``,hostname:``,href:``,origin:``,pathname:``,protocol:``,search:``},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return``}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>`u`?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>`u`||clearTimeout(e)}};function gg(){let e=typeof window<`u`?window:{};return fg(e,hg),e}function _g(e=``){return e.trim().split(` `).filter(e=>!!e.trim())}function vg(e){let t=e;Object.keys(t).forEach(e=>{try{t[e]=null}catch{}try{delete t[e]}catch{}})}function yg(e,t=0){return setTimeout(e,t)}function bg(){return Date.now()}function xg(e){let t=gg(),n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||=e.style,n}function Sg(e,t=`x`){let n=gg(),r,i,a,o=xg(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(`,`).length>6&&(i=i.split(`, `).map(e=>e.replace(`,`,`.`)).join(`, `)),a=new n.WebKitCSSMatrix(i===`none`?``:i)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue(`transform`).replace(`translate(`,`matrix(1, 0, 0, 1,`),r=a.toString().split(`,`)),t===`x`&&(i=n.WebKitCSSMatrix?a.m41:r.length===16?parseFloat(r[12]):parseFloat(r[4])),t===`y`&&(i=n.WebKitCSSMatrix?a.m42:r.length===16?parseFloat(r[13]):parseFloat(r[5])),i||0}function Cg(e){return typeof e==`object`&&!!e&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)===`Object`}function wg(e){return typeof window<`u`&&window.HTMLElement!==void 0?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Tg(...e){let t=Object(e[0]);for(let n=1;n<e.length;n+=1){let r=e[n];if(r!=null&&!wg(r)){let e=Object.keys(Object(r)).filter(e=>e!==`__proto__`&&e!==`constructor`&&e!==`prototype`);for(let n=0,i=e.length;n<i;n+=1){let i=e[n],a=Object.getOwnPropertyDescriptor(r,i);a!==void 0&&a.enumerable&&(Cg(t[i])&&Cg(r[i])?r[i].__swiper__?t[i]=r[i]:Tg(t[i],r[i]):!Cg(t[i])&&Cg(r[i])?(t[i]={},r[i].__swiper__?t[i]=r[i]:Tg(t[i],r[i])):t[i]=r[i])}}}return t}function Eg(e,t,n){e.style.setProperty(t,n)}function Dg({swiper:e,targetPosition:t,side:n}){let r=gg(),i=-e.translate,a=null,o,s=e.params.speed;e.wrapperEl.style.scrollSnapType=`none`,r.cancelAnimationFrame(e.cssModeFrameID);let c=t>i?`next`:`prev`,l=(e,t)=>c===`next`&&e>=t||c===`prev`&&e<=t,u=()=>{o=new Date().getTime(),a===null&&(a=o);let c=Math.max(Math.min((o-a)/s,1),0),d=i+(.5-Math.cos(c*Math.PI)/2)*(t-i);if(l(d,t)&&(d=t),e.wrapperEl.scrollTo({[n]:d}),l(d,t)){e.wrapperEl.style.overflow=`hidden`,e.wrapperEl.style.scrollSnapType=``,setTimeout(()=>{e.wrapperEl.style.overflow=``,e.wrapperEl.scrollTo({[n]:d})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(u)};u()}function Og(e,t=``){let n=gg(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(e=>e.matches(t)):r}function kg(e,t){let n=[t];for(;n.length>0;){let t=n.shift();if(e===t)return!0;n.push(...t.children,...t.shadowRoot?t.shadowRoot.children:[],...t.assignedElements?t.assignedElements():[])}}function Ag(e,t){let n=gg(),r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||=kg(e,t)),r}function jg(e){try{console.warn(e);return}catch{}}function Mg(e,t=[]){let n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:_g(t)),n}function Ng(e,t){let n=[];for(;e.previousElementSibling;){let r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Pg(e,t){let n=[];for(;e.nextElementSibling;){let r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Fg(e,t){return gg().getComputedStyle(e,null).getPropertyValue(t)}function Ig(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Lg(e,t){let n=[],r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Rg(e,t,n){let r=gg();return n?e[t===`width`?`offsetWidth`:`offsetHeight`]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t===`width`?`margin-right`:`margin-top`))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t===`width`?`margin-left`:`margin-bottom`)):e.offsetWidth}function zg(e,t=``){typeof trustedTypes<`u`?e.innerHTML=trustedTypes.createPolicy(`html`,{createHTML:e=>e}).createHTML(t):e.innerHTML=t}var Bg;function Vg(){let e=gg(),t=mg();return{smoothScroll:t.documentElement&&t.documentElement.style&&`scrollBehavior`in t.documentElement.style,touch:!!(`ontouchstart`in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Hg(){return Bg||=Vg(),Bg}var Ug;function Wg({userAgent:e}={}){let t=Hg(),n=gg(),r=n.navigator.platform,i=e||n.navigator.userAgent,a={ios:!1,android:!1},o=n.screen.width,s=n.screen.height,c=i.match(/(Android);?[\s\/]+([\d.]+)?/),l=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/),u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!l&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=r===`Win32`,p=r===`MacIntel`;return!l&&p&&t.touch&&[`1024x1366`,`1366x1024`,`834x1194`,`1194x834`,`834x1112`,`1112x834`,`768x1024`,`1024x768`,`820x1180`,`1180x820`,`810x1080`,`1080x810`].indexOf(`${o}x${s}`)>=0&&(l=i.match(/(Version)\/([\d.]+)/),l||=[0,1,`13_0_0`],p=!1),c&&!f&&(a.os=`android`,a.android=!0),(l||d||u)&&(a.os=`ios`,a.ios=!0),a}function Gg(e={}){return Ug||=Wg(e),Ug}var Kg;function qg(){let e=gg(),t=Gg(),n=!1;function r(){let t=e.navigator.userAgent.toLowerCase();return t.indexOf(`safari`)>=0&&t.indexOf(`chrome`)<0&&t.indexOf(`android`)<0}if(r()){let t=String(e.navigator.userAgent);if(t.includes(`Version/`)){let[e,r]=t.split(`Version/`)[1].split(` `)[0].split(`.`).map(e=>Number(e));n=e<16||e===16&&r<2}}let i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),a=r(),o=a||i&&t.ios;return{isSafari:n||a,needPerspectiveFix:n,need3dFix:o,isWebView:i}}function Jg(){return Kg||=qg(),Kg}function Yg({swiper:e,on:t,emit:n}){let r=gg(),i=null,a=null,o=()=>{!e||e.destroyed||!e.initialized||(n(`beforeResize`),n(`resize`))},s=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(t=>{a=r.requestAnimationFrame(()=>{let{width:n,height:r}=e,i=n,a=r;t.forEach(({contentBoxSize:t,contentRect:n,target:r})=>{r&&r!==e.el||(i=n?n.width:(t[0]||t).inlineSize,a=n?n.height:(t[0]||t).blockSize)}),(i!==n||a!==r)&&o()})}),i.observe(e.el))},c=()=>{a&&r.cancelAnimationFrame(a),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},l=()=>{!e||e.destroyed||!e.initialized||n(`orientationchange`)};t(`init`,()=>{if(e.params.resizeObserver&&r.ResizeObserver!==void 0){s();return}r.addEventListener(`resize`,o),r.addEventListener(`orientationchange`,l)}),t(`destroy`,()=>{c(),r.removeEventListener(`resize`,o),r.removeEventListener(`orientationchange`,l)})}function Xg({swiper:e,extendParams:t,on:n,emit:r}){let i=[],a=gg(),o=(t,n={})=>{let o=new(a.MutationObserver||a.WebkitMutationObserver)(t=>{if(e.__preventObserver__)return;if(t.length===1){r(`observerUpdate`,t[0]);return}let n=function(){r(`observerUpdate`,t[0])};a.requestAnimationFrame?a.requestAnimationFrame(n):a.setTimeout(n,0)});o.observe(t,{attributes:n.attributes===void 0?!0:n.attributes,childList:e.isElement||(n.childList===void 0?!0:n).childList,characterData:n.characterData===void 0?!0:n.characterData}),i.push(o)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n(`init`,()=>{if(e.params.observer){if(e.params.observeParents){let t=Lg(e.hostEl);for(let e=0;e<t.length;e+=1)o(t[e])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}}),n(`destroy`,()=>{i.forEach(e=>{e.disconnect()}),i.splice(0,i.length)})}var Zg={on(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;let i=n?`unshift`:`push`;return e.split(` `).forEach(e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][i](t)}),r},once(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;function i(...n){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,n)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){let n=this;if(!n.eventsListeners||n.destroyed||typeof e!=`function`)return n;let r=t?`unshift`:`push`;return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;let n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){let n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(` `).forEach(e=>{t===void 0?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach((r,i)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(i,1)})}),n},emit(...e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]==`string`||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(` `)).forEach(e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(t=>{t.apply(i,[e,...r])}),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach(e=>{e.apply(i,r)})}),t}};function Qg(){let e=this,t,n,r=e.el;t=e.params.width!==void 0&&e.params.width!==null?e.params.width:r.clientWidth,n=e.params.height!==void 0&&e.params.height!==null?e.params.height:r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Fg(r,`padding-left`)||0,10)-parseInt(Fg(r,`padding-right`)||0,10),n=n-parseInt(Fg(r,`padding-top`)||0,10)-parseInt(Fg(r,`padding-bottom`)||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function $g(){let e=this;function t(t,n){return parseFloat(t.getPropertyValue(e.getDirectionLabel(n))||0)}let n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:a,wrongRTL:o}=e,s=e.virtual&&n.virtual.enabled,c=s?e.virtual.slides.length:e.slides.length,l=Og(i,`.${e.params.slideClass}, swiper-slide`),u=s?e.virtual.slides.length:l.length,d=[],f=[],p=[],m=n.slidesOffsetBefore;typeof m==`function`&&(m=n.slidesOffsetBefore.call(e));let h=n.slidesOffsetAfter;typeof h==`function`&&(h=n.slidesOffsetAfter.call(e));let g=e.snapGrid.length,_=e.slidesGrid.length,v=e.size-m-h,y=n.spaceBetween,b=-m,x=0,S=0;if(v===void 0)return;typeof y==`string`&&y.indexOf(`%`)>=0?y=parseFloat(y.replace(`%`,``))/100*v:typeof y==`string`&&(y=parseFloat(y)),e.virtualSize=-y-m-h,l.forEach(e=>{a?e.style.marginLeft=``:e.style.marginRight=``,e.style.marginBottom=``,e.style.marginTop=``}),n.centeredSlides&&n.cssMode&&(Eg(r,`--swiper-centered-offset-before`,``),Eg(r,`--swiper-centered-offset-after`,``)),n.cssMode&&(Eg(r,`--swiper-slides-offset-before`,`${m}px`),Eg(r,`--swiper-slides-offset-after`,`${h}px`));let C=n.grid&&n.grid.rows>1&&e.grid;C?e.grid.initSlides(l):e.grid&&e.grid.unsetSlides();let w,T=n.slidesPerView===`auto`&&n.breakpoints&&Object.keys(n.breakpoints).filter(e=>n.breakpoints[e].slidesPerView!==void 0).length>0;for(let r=0;r<u;r+=1){w=0;let i=l[r];if(!(i&&(C&&e.grid.updateSlide(r,i,l),Fg(i,`display`)===`none`))){if(s&&n.slidesPerView===`auto`)n.virtual.slidesPerViewAutoSlideSize&&(w=n.virtual.slidesPerViewAutoSlideSize),w&&i&&(n.roundLengths&&(w=Math.floor(w)),i.style[e.getDirectionLabel(`width`)]=`${w}px`);else if(n.slidesPerView===`auto`){T&&(i.style[e.getDirectionLabel(`width`)]=``);let r=getComputedStyle(i),a=i.style.transform,o=i.style.webkitTransform;if(a&&(i.style.transform=`none`),o&&(i.style.webkitTransform=`none`),n.roundLengths)w=e.isHorizontal()?Rg(i,`width`,!0):Rg(i,`height`,!0);else{let e=t(r,`width`),n=t(r,`padding-left`),a=t(r,`padding-right`),o=t(r,`margin-left`),s=t(r,`margin-right`),c=r.getPropertyValue(`box-sizing`);if(c&&c===`border-box`)w=e+o+s;else{let{clientWidth:t,offsetWidth:r}=i;w=e+n+a+o+s+(r-t)}}a&&(i.style.transform=a),o&&(i.style.webkitTransform=o),n.roundLengths&&(w=Math.floor(w))}else w=(v-(n.slidesPerView-1)*y)/n.slidesPerView,n.roundLengths&&(w=Math.floor(w)),i&&(i.style[e.getDirectionLabel(`width`)]=`${w}px`);i&&(i.swiperSlideSize=w),p.push(w),n.centeredSlides?(b=b+w/2+x/2+y,x===0&&r!==0&&(b=b-v/2-y),r===0&&(b=b-v/2-y),Math.abs(b)<1/1e3&&(b=0),n.roundLengths&&(b=Math.floor(b)),S%n.slidesPerGroup===0&&d.push(b),f.push(b)):(n.roundLengths&&(b=Math.floor(b)),(S-Math.min(e.params.slidesPerGroupSkip,S))%e.params.slidesPerGroup===0&&d.push(b),f.push(b),b=b+w+y),e.virtualSize+=w+y,x=w,S+=1}}if(e.virtualSize=Math.max(e.virtualSize,v)+h,a&&o&&(n.effect===`slide`||n.effect===`coverflow`)&&(r.style.width=`${e.virtualSize+y}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel(`width`)]=`${e.virtualSize+y}px`),C&&e.grid.updateWrapperSize(w,d),!n.centeredSlides){let t=n.slidesPerView!==`auto`&&n.slidesPerView%1!=0,r=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView===`auto`||t),i=d.length;if(r){let e;if(n.slidesPerView===`auto`){e=1;let t=0;for(let n=p.length-1;n>=0&&(t+=p[n]+(n<p.length-1?y:0),t<=v);--n)e=p.length-n}else e=Math.floor(n.slidesPerView);i=Math.max(u-e,0)}let a=[];for(let t=0;t<d.length;t+=1){let o=d[t];n.roundLengths&&(o=Math.floor(o)),r?t<=i&&a.push(o):d[t]<=e.virtualSize-v&&a.push(o)}d=a,Math.floor(e.virtualSize-v)-Math.floor(d[d.length-1])>1&&(r||d.push(e.virtualSize-v))}if(s&&n.loop){let t=p[0]+y;if(n.slidesPerGroup>1){let r=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),i=t*n.slidesPerGroup;for(let e=0;e<r;e+=1)d.push(d[d.length-1]+i)}for(let r=0;r<e.virtual.slidesBefore+e.virtual.slidesAfter;r+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+t),f.push(f[f.length-1]+t),e.virtualSize+=t}if(d.length===0&&(d=[0]),y!==0){let t=e.isHorizontal()&&a?`marginLeft`:e.getDirectionLabel(`marginRight`);l.filter((e,t)=>!n.cssMode||n.loop?!0:t!==l.length-1).forEach(e=>{e.style[t]=`${y}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let e=0;p.forEach(t=>{e+=t+(y||0)}),e-=y;let t=e>v?e-v:0;d=d.map(e=>e<=0?-m:e>t?t+h:e)}if(n.centerInsufficientSlides){let e=0;if(p.forEach(t=>{e+=t+(y||0)}),e-=y,e<v){let t=(v-e)/2;d.forEach((e,n)=>{d[n]=e-t}),f.forEach((e,n)=>{f[n]=e+t})}}if(Object.assign(e,{slides:l,snapGrid:d,slidesGrid:f,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Eg(r,`--swiper-centered-offset-before`,`${-d[0]}px`),Eg(r,`--swiper-centered-offset-after`,`${e.size/2-p[p.length-1]/2}px`);let t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(e=>e+t),e.slidesGrid=e.slidesGrid.map(e=>e+n)}if(u!==c&&e.emit(`slidesLengthChange`),d.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit(`snapGridLengthChange`)),f.length!==_&&e.emit(`slidesGridLengthChange`),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit(`slidesUpdated`),!s&&!n.cssMode&&(n.effect===`slide`||n.effect===`fade`)){let t=`${n.containerModifierClass}backface-hidden`,r=e.el.classList.contains(t);u<=n.maxBackfaceHiddenSlides?r||e.el.classList.add(t):r&&e.el.classList.remove(t)}}function e_(e){let t=this,n=[],r=t.virtual&&t.params.virtual.enabled,i=0,a;typeof e==`number`?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);let o=e=>r?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if(t.params.slidesPerView!==`auto`&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(e=>{n.push(e)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){let e=t.activeIndex+a;if(e>t.slides.length&&!r)break;n.push(o(e))}else n.push(o(t.activeIndex));for(a=0;a<n.length;a+=1)if(n[a]!==void 0){let e=n[a].offsetHeight;i=e>i?e:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function t_(){let e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}var n_=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function r_(e=this&&this.translate||0){let t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(r.length===0)return;r[0].swiperSlideOffset===void 0&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s==`string`&&s.indexOf(`%`)>=0?s=parseFloat(s.replace(`%`,``))/100*t.size:typeof s==`string`&&(s=parseFloat(s));for(let e=0;e<r.length;e+=1){let c=r[e],l=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(l-=r[0].swiperSlideOffset);let u=(o+(n.centeredSlides?t.minTranslate():0)-l)/(c.swiperSlideSize+s),d=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-l)/(c.swiperSlideSize+s),f=-(o-l),p=f+t.slidesSizesGrid[e],m=f>=0&&f<=t.size-t.slidesSizesGrid[e],h=f>=0&&f<t.size-1||p>1&&p<=t.size||f<=0&&p>=t.size;h&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(e)),n_(c,h,n.slideVisibleClass),n_(c,m,n.slideFullyVisibleClass),c.progress=i?-u:u,c.originalProgress=i?-d:d}}function i_(e){let t=this;if(e===void 0){let n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}let n=t.params,r=t.maxTranslate()-t.minTranslate(),{progress:i,isBeginning:a,isEnd:o,progressLoop:s}=t,c=a,l=o;if(r===0)i=0,a=!0,o=!0;else{i=(e-t.minTranslate())/r;let n=Math.abs(e-t.minTranslate())<1,s=Math.abs(e-t.maxTranslate())<1;a=n||i<=0,o=s||i>=1,n&&(i=0),s&&(i=1)}if(n.loop){let n=t.getSlideIndexByData(0),r=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[n],a=t.slidesGrid[r],o=t.slidesGrid[t.slidesGrid.length-1],c=Math.abs(e);s=c>=i?(c-i)/o:(c+o-a)/o,s>1&&--s}Object.assign(t,{progress:i,progressLoop:s,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!c&&t.emit(`reachBeginning toEdge`),o&&!l&&t.emit(`reachEnd toEdge`),(c&&!a||l&&!o)&&t.emit(`fromEdge`),t.emit(`progress`,i)}var a_=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function o_(){let e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,a=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,s=e=>Og(r,`.${n.slideClass}${e}, swiper-slide${e}`)[0],c,l,u;if(a)if(n.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),c=s(`[data-swiper-slide-index="${t}"]`)}else c=s(`[data-swiper-slide-index="${i}"]`);else o?(c=t.find(e=>e.column===i),u=t.find(e=>e.column===i+1),l=t.find(e=>e.column===i-1)):c=t[i];c&&(o||(u=Pg(c,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),l=Ng(c,`.${n.slideClass}, swiper-slide`)[0],n.loop)),t.forEach(e=>{a_(e,e===c,n.slideActiveClass),a_(e,e===u,n.slideNextClass),a_(e,e===l,n.slidePrevClass)}),e.emitSlidesClasses()}var s_=(e,t)=>{if(!e||e.destroyed||!e.params)return;let n=t.closest(e.isElement?`swiper-slide`:`.${e.params.slideClass}`);if(n){let t=n.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(n.shadowRoot?t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),t&&!t.lazyPreloaderManaged&&t.remove())})),t&&!t.lazyPreloaderManaged&&t.remove()}},c_=(e,t)=>{if(!e.slides[t])return;let n=e.slides[t].querySelector(`[loading="lazy"]`);n&&n.removeAttribute(`loading`)},l_=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext,n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);let r=e.params.slidesPerView===`auto`?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){let n=i,a=[n-t];a.push(...Array.from({length:t}).map((e,t)=>n+r+t)),e.slides.forEach((t,n)=>{a.includes(t.column)&&c_(e,n)});return}let a=i+r-1;if(e.params.rewind||e.params.loop)for(let r=i-t;r<=a+t;r+=1){let t=(r%n+n)%n;(t<i||t>a)&&c_(e,t)}else for(let r=Math.max(i-t,0);r<=Math.min(a+t,n-1);r+=1)r!==i&&(r>a||r<i)&&c_(e,r)};function u_(e){let{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate,i;for(let e=0;e<t.length;e+=1)t[e+1]===void 0?r>=t[e]&&(i=e):r>=t[e]&&r<t[e+1]-(t[e+1]-t[e])/2?i=e:r>=t[e]&&r<t[e+1]&&(i=e+1);return n.normalizeSlideIndex&&(i<0||i===void 0)&&(i=0),i}function d_(e){let t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:a,realIndex:o,snapIndex:s}=t,c=e,l,u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(c===void 0&&(c=u_(t)),r.indexOf(n)>=0)l=r.indexOf(n);else{let e=Math.min(i.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/i.slidesPerGroup)}if(l>=r.length&&(l=r.length-1),c===a&&!t.params.loop){l!==s&&(t.snapIndex=l,t.emit(`snapIndexChange`));return}if(c===a&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(c);return}let d=t.grid&&i.grid&&i.grid.rows>1,f;if(t.virtual&&i.virtual.enabled)f=i.loop?u(c):c;else if(d){let e=t.slides.find(e=>e.column===c),n=parseInt(e.getAttribute(`data-swiper-slide-index`),10);Number.isNaN(n)&&(n=Math.max(t.slides.indexOf(e),0)),f=Math.floor(n/i.grid.rows)}else if(t.slides[c]){let e=t.slides[c].getAttribute(`data-swiper-slide-index`);f=e?parseInt(e,10):c}else f=c;Object.assign(t,{previousSnapIndex:s,snapIndex:l,previousRealIndex:o,realIndex:f,previousIndex:a,activeIndex:c}),t.initialized&&l_(t),t.emit(`activeIndexChange`),t.emit(`snapIndexChange`),(t.initialized||t.params.runCallbacksOnInit)&&(o!==f&&t.emit(`realIndexChange`),t.emit(`slideChange`))}function f_(e,t){let n=this,r=n.params,i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(e=>{!i&&e.matches&&e.matches(`.${r.slideClass}, swiper-slide`)&&(i=e)});let a=!1,o;if(i){for(let e=0;e<n.slides.length;e+=1)if(n.slides[e]===i){a=!0,o=e;break}}if(i&&a)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute(`data-swiper-slide-index`),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var p_={updateSize:Qg,updateSlides:$g,updateAutoHeight:e_,updateSlidesOffset:t_,updateSlidesProgress:r_,updateProgress:i_,updateSlidesClasses:o_,updateActiveIndex:d_,updateClickedSlide:f_};function m_(e=this.isHorizontal()?`x`:`y`){let t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:a}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=Sg(a,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function h_(e,t){let n=this,{rtlTranslate:r,params:i,wrapperEl:a,progress:o}=n,s=0,c=0;n.isHorizontal()?s=r?-e:e:c=e,i.roundLengths&&(s=Math.floor(s),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:c,i.cssMode?a[n.isHorizontal()?`scrollLeft`:`scrollTop`]=n.isHorizontal()?-s:-c:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${s}px, ${c}px, 0px)`);let l,u=n.maxTranslate()-n.minTranslate();l=u===0?0:(e-n.minTranslate())/u,l!==o&&n.updateProgress(e),n.emit(`setTranslate`,n.translate,t)}function g_(){return-this.snapGrid[0]}function __(){return-this.snapGrid[this.snapGrid.length-1]}function v_(e=0,t=this.params.speed,n=!0,r=!0,i){let a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;let c=a.minTranslate(),l=a.maxTranslate(),u;if(u=r&&e>c?c:r&&e<l?l:e,a.updateProgress(u),o.cssMode){let e=a.isHorizontal();if(t===0)s[e?`scrollLeft`:`scrollTop`]=-u;else{if(!a.support.smoothScroll)return Dg({swiper:a,targetPosition:-u,side:e?`left`:`top`}),!0;s.scrollTo({[e?`left`:`top`]:-u,behavior:`smooth`})}return!0}return t===0?(a.setTransition(0),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionEnd`))):(a.setTransition(t),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionStart`)),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit(`transitionEnd`))},a.wrapperEl.addEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd))),!0}var y_={getTranslate:m_,setTranslate:h_,minTranslate:g_,maxTranslate:__,translateTo:v_};function b_(e,t){let n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?`0ms`:``),n.emit(`setTransition`,e,t)}function x_({swiper:e,runCallbacks:t,direction:n,step:r}){let{activeIndex:i,previousIndex:a}=e,o=n;o||=i>a?`next`:i<a?`prev`:`reset`,e.emit(`transition${r}`),t&&o===`reset`?e.emit(`slideResetTransition${r}`):t&&i!==a&&(e.emit(`slideChangeTransition${r}`),o===`next`?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function S_(e=!0,t){let n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),x_({swiper:n,runCallbacks:e,direction:t,step:`Start`}))}function C_(e=!0,t){let n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),x_({swiper:n,runCallbacks:e,direction:t,step:`End`}))}var w_={setTransition:b_,transitionStart:S_,transitionEnd:C_};function T_(e=0,t,n=!0,r,i){typeof e==`string`&&(e=parseInt(e,10));let a=this,o=e;o<0&&(o=0);let{params:s,snapGrid:c,slidesGrid:l,previousIndex:u,activeIndex:d,rtlTranslate:f,wrapperEl:p,enabled:m}=a;if(!m&&!r&&!i||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;t===void 0&&(t=a.params.speed);let h=Math.min(a.params.slidesPerGroupSkip,o),g=h+Math.floor((o-h)/a.params.slidesPerGroup);g>=c.length&&(g=c.length-1);let _=-c[g];if(s.normalizeSlideIndex)for(let e=0;e<l.length;e+=1){let t=-Math.floor(_*100),n=Math.floor(l[e]*100),r=Math.floor(l[e+1]*100);l[e+1]===void 0?t>=n&&(o=e):t>=n&&t<r-(r-n)/2?o=e:t>=n&&t<r&&(o=e+1)}if(a.initialized&&o!==d&&(!a.allowSlideNext&&(f?_>a.translate&&_>a.minTranslate():_<a.translate&&_<a.minTranslate())||!a.allowSlidePrev&&_>a.translate&&_>a.maxTranslate()&&(d||0)!==o))return!1;o!==(u||0)&&n&&a.emit(`beforeSlideChangeStart`),a.updateProgress(_);let v;v=o>d?`next`:o<d?`prev`:`reset`;let y=a.virtual&&a.params.virtual.enabled;if(!(y&&i)&&(f&&-_===a.translate||!f&&_===a.translate))return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),s.effect!==`slide`&&a.setTranslate(_),v!==`reset`&&(a.transitionStart(n,v),a.transitionEnd(n,v)),!1;if(s.cssMode){let e=a.isHorizontal(),n=f?_:-_;if(t===0)y&&(a.wrapperEl.style.scrollSnapType=`none`,a._immediateVirtual=!0),y&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[e?`scrollLeft`:`scrollTop`]=n})):p[e?`scrollLeft`:`scrollTop`]=n,y&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType=``,a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return Dg({swiper:a,targetPosition:n,side:e?`left`:`top`}),!0;p.scrollTo({[e?`left`:`top`]:n,behavior:`smooth`})}return!0}let b=Jg().isSafari;return y&&!i&&b&&a.isElement&&a.virtual.update(!1,!1,o),a.setTransition(t),a.setTranslate(_),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit(`beforeTransitionStart`,t,r),a.transitionStart(n,v),t===0?a.transitionEnd(n,v):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,v))},a.wrapperEl.addEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd)),!0}function E_(e=0,t,n=!0,r){typeof e==`string`&&(e=parseInt(e,10));let i=this;if(i.destroyed)return;t===void 0&&(t=i.params.speed);let a=i.grid&&i.params.grid&&i.params.grid.rows>1,o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o+=i.virtual.slidesBefore;else{let e;if(a){let t=o*i.params.grid.rows;e=i.slides.find(e=>e.getAttribute(`data-swiper-slide-index`)*1===t).column}else e=i.getSlideIndexByData(o);let t=a?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:n,slidesOffsetBefore:s,slidesOffsetAfter:c}=i.params,l=n||!!s||!!c,u=i.params.slidesPerView;u===`auto`?u=i.slidesPerViewDynamic():(u=Math.ceil(parseFloat(i.params.slidesPerView,10)),l&&u%2==0&&(u+=1));let d=t-e<u;if(l&&(d||=e<Math.ceil(u/2)),r&&l&&i.params.slidesPerView!==`auto`&&!a&&(d=!1),d){let n=l?e<i.activeIndex?`prev`:`next`:e-i.activeIndex-1<i.params.slidesPerView?`next`:`prev`;i.loopFix({direction:n,slideTo:!0,activeSlideIndex:n===`next`?e+1:e-t+1,slideRealIndex:n===`next`?i.realIndex:void 0})}if(a){let e=o*i.params.grid.rows;o=i.slides.find(t=>t.getAttribute(`data-swiper-slide-index`)*1===e).column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}function D_(e,t=!0,n){let r=this,{enabled:i,params:a,animating:o}=r;if(!i||r.destroyed)return r;e===void 0&&(e=r.params.speed);let s=a.slidesPerGroup;a.slidesPerView===`auto`&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic(`current`,!0),1));let c=r.activeIndex<a.slidesPerGroupSkip?1:s,l=r.virtual&&a.virtual.enabled;if(a.loop){if(o&&!l&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:`next`}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+c,e,t,n)}),!0}return a.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+c,e,t,n)}function O_(e,t=!0,n){let r=this,{params:i,snapGrid:a,slidesGrid:o,rtlTranslate:s,enabled:c,animating:l}=r;if(!c||r.destroyed)return r;e===void 0&&(e=r.params.speed);let u=r.virtual&&i.virtual.enabled;if(i.loop){if(l&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:`prev`}),r._clientLeft=r.wrapperEl.clientLeft}let d=s?r.translate:-r.translate;function f(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}let p=f(d),m=a.map(e=>f(e)),h=i.freeMode&&i.freeMode.enabled,g=a[m.indexOf(p)-1];if(g===void 0&&(i.cssMode||h)){let e;a.forEach((t,n)=>{p>=t&&(e=n)}),e!==void 0&&(g=h?a[e]:a[e>0?e-1:e])}let _=0;if(g!==void 0&&(_=o.indexOf(g),_<0&&(_=r.activeIndex-1),i.slidesPerView===`auto`&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(_=_-r.slidesPerViewDynamic(`previous`,!0)+1,_=Math.max(_,0))),i.rewind&&r.isBeginning){let i=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(i,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(_,e,t,n)}),!0;return r.slideTo(_,e,t,n)}function k_(e,t=!0,n){let r=this;if(!r.destroyed)return e===void 0&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function A_(e,t=!0,n,r=.5){let i=this;if(i.destroyed)return;e===void 0&&(e=i.params.speed);let a=i.activeIndex,o=Math.min(i.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/i.params.slidesPerGroup),c=i.rtlTranslate?i.translate:-i.translate;if(c>=i.snapGrid[s]){let e=i.snapGrid[s],t=i.snapGrid[s+1];c-e>(t-e)*r&&(a+=i.params.slidesPerGroup)}else{let e=i.snapGrid[s-1],t=i.snapGrid[s];c-e<=(t-e)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function j_(){let e=this;if(e.destroyed)return;let{params:t,slidesEl:n}=e,r=t.slidesPerView===`auto`?e.slidesPerViewDynamic():t.slidesPerView,i=e.getSlideIndexWhenGrid(e.clickedIndex),a,o=e.isElement?`swiper-slide`:`.${t.slideClass}`,s=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;a=parseInt(e.clickedSlide.getAttribute(`data-swiper-slide-index`),10),t.centeredSlides?e.slideToLoop(a):i>(s?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(Og(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),yg(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var M_={slideTo:T_,slideToLoop:E_,slideNext:D_,slidePrev:O_,slideReset:k_,slideToClosest:A_,slideToClickedSlide:j_};function N_(e,t){let n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;let a=()=>{Og(i,`.${r.slideClass}, swiper-slide`).forEach((e,t)=>{e.setAttribute(`data-swiper-slide-index`,t)})},o=()=>{let e=Og(i,`.${r.slideBlankClass}`);e.forEach(e=>{e.remove()}),e.length>0&&(n.recalcSlides(),n.updateSlides())},s=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||s)&&o();let c=r.slidesPerGroup*(s?r.grid.rows:1),l=n.slides.length%c!==0,u=s&&n.slides.length%r.grid.rows!==0,d=e=>{for(let t=0;t<e;t+=1){let e=n.isElement?Mg(`swiper-slide`,[r.slideBlankClass]):Mg(`div`,[r.slideClass,r.slideBlankClass]);n.slidesEl.append(e)}};l?(r.loopAddBlankSlides?(d(c-n.slides.length%c),n.recalcSlides(),n.updateSlides()):jg(`Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`),a()):(u&&(r.loopAddBlankSlides?(d(r.grid.rows-n.slides.length%r.grid.rows),n.recalcSlides(),n.updateSlides()):jg(`Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`)),a());let f=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:f?void 0:`next`,initial:t})}function P_({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:a,byController:o,byMousewheel:s}={}){let c=this;if(!c.params.loop)return;c.emit(`beforeLoopFix`);let{slides:l,allowSlidePrev:u,allowSlideNext:d,slidesEl:f,params:p}=c,{centeredSlides:m,slidesOffsetBefore:h,slidesOffsetAfter:g,initialSlide:_}=p,v=m||!!h||!!g;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&p.virtual.enabled){t&&(!v&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):v&&c.snapIndex<p.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=u,c.allowSlideNext=d,c.emit(`loopFix`);return}let y=p.slidesPerView;y===`auto`?y=c.slidesPerViewDynamic():(y=Math.ceil(parseFloat(p.slidesPerView,10)),v&&y%2==0&&(y+=1));let b=p.slidesPerGroupAuto?y:p.slidesPerGroup,x=v?Math.max(b,Math.ceil(y/2)):b;x%b!==0&&(x+=b-x%b),x+=p.loopAdditionalSlides,c.loopedSlides=x;let S=c.grid&&p.grid&&p.grid.rows>1;l.length<y+x||c.params.effect===`cards`&&l.length<y+x*2?jg(`Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters`):S&&p.grid.fill===`row`&&jg("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let C=[],w=[],T=S?Math.ceil(l.length/p.grid.rows):l.length,ee=a&&T-_<y&&!v,E=ee?_:c.activeIndex;i===void 0?i=c.getSlideIndex(l.find(e=>e.classList.contains(p.slideActiveClass))):E=i;let D=n===`next`||!n,O=n===`prev`||!n,te=0,ne=0,re=(S?l[i].column:i)+(v&&r===void 0?-y/2+.5:0);if(re<x){te=Math.max(x-re,b);for(let e=0;e<x-re;e+=1){let t=e-Math.floor(e/T)*T;if(S){let e=T-t-1;for(let t=l.length-1;t>=0;--t)l[t].column===e&&C.push(t)}else C.push(T-t-1)}}else if(re+y>T-x){ne=Math.max(re-(T-x*2),b),ee&&(ne=Math.max(ne,y-T+_+1));for(let e=0;e<ne;e+=1){let t=e-Math.floor(e/T)*T;S?l.forEach((e,n)=>{e.column===t&&w.push(n)}):w.push(t)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect===`cards`&&l.length<y+x*2&&(w.includes(i)&&w.splice(w.indexOf(i),1),C.includes(i)&&C.splice(C.indexOf(i),1)),O&&C.forEach(e=>{l[e].swiperLoopMoveDOM=!0,f.prepend(l[e]),l[e].swiperLoopMoveDOM=!1}),D&&w.forEach(e=>{l[e].swiperLoopMoveDOM=!0,f.append(l[e]),l[e].swiperLoopMoveDOM=!1}),c.recalcSlides(),p.slidesPerView===`auto`?c.updateSlides():S&&(C.length>0&&O||w.length>0&&D)&&c.slides.forEach((e,t)=>{c.grid.updateSlide(t,e,c.slides)}),p.watchSlidesProgress&&c.updateSlidesOffset(),t){if(C.length>0&&O){if(e===void 0){let e=c.slidesGrid[E],t=c.slidesGrid[E+te]-e;s?c.setTranslate(c.translate-t):(c.slideTo(E+Math.ceil(te),0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-t,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-t))}else if(r){let e=S?C.length/p.grid.rows:C.length;c.slideTo(c.activeIndex+e,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(w.length>0&&D)if(e===void 0){let e=c.slidesGrid[E],t=c.slidesGrid[E-ne]-e;s?c.setTranslate(c.translate-t):(c.slideTo(E-ne,0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-t,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-t))}else{let e=S?w.length/p.grid.rows:w.length;c.slideTo(c.activeIndex-e,0,!1,!0)}}if(c.allowSlidePrev=u,c.allowSlideNext=d,c.controller&&c.controller.control&&!o){let a={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(e=>{!e.destroyed&&e.params.loop&&e.loopFix({...a,slideTo:e.params.slidesPerView===p.slidesPerView?t:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...a,slideTo:c.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}c.emit(`loopFix`)}function F_(){let e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();let r=[];e.slides.forEach(e=>{let t=e.swiperSlideIndex===void 0?e.getAttribute(`data-swiper-slide-index`)*1:e.swiperSlideIndex;r[t]=e}),e.slides.forEach(e=>{e.removeAttribute(`data-swiper-slide-index`)}),r.forEach(e=>{n.append(e)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var I_={loopCreate:N_,loopFix:P_,loopDestroy:F_};function L_(e){let t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;let n=t.params.touchEventsTarget===`container`?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor=`move`,n.style.cursor=e?`grabbing`:`grab`,t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function R_(){let e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget===`container`?`el`:`wrapperEl`].style.cursor=``,e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var z_={setGrabCursor:L_,unsetGrabCursor:R_};function B_(e,t=this){function n(t){if(!t||t===mg()||t===gg())return null;t.assignedSlot&&(t=t.assignedSlot);let r=t.closest(e);return!r&&!t.getRootNode?null:r||n(t.getRootNode().host)}return n(t)}function V_(e,t,n){let r=gg(),{params:i}=e,a=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return a&&(n<=o||n>=r.innerWidth-o)?a===`prevent`?(t.preventDefault(),!0):!1:!0}function H_(e){let t=this,n=mg(),r=e;r.originalEvent&&(r=r.originalEvent);let i=t.touchEventsData;if(r.type===`pointerdown`){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type===`touchstart`&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type===`touchstart`){V_(t,r,r.targetTouches[0].pageX);return}let{params:a,touches:o,enabled:s}=t;if(!s||!a.simulateTouch&&r.pointerType===`mouse`||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let c=r.target;if(a.touchEventsTarget===`wrapper`&&!Ag(c,t.wrapperEl)||`which`in r&&r.which===3||`button`in r&&r.button>0||i.isTouched&&i.isMoved)return;let l=!!a.noSwipingClass&&a.noSwipingClass!==``,u=r.composedPath?r.composedPath():r.path;l&&r.target&&r.target.shadowRoot&&u&&(c=u[0]);let d=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,f=!!(r.target&&r.target.shadowRoot);if(a.noSwiping&&(f?B_(d,c):c.closest(d))){t.allowClick=!0;return}if(a.swipeHandler&&!c.closest(a.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;let p=o.currentX,m=o.currentY;if(!V_(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=m,i.touchStartTime=bg(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(i.allowThresholdMove=!1);let h=!0;c.matches(i.focusableElements)&&(h=!1,c.nodeName===`SELECT`&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==c&&(r.pointerType===`mouse`||r.pointerType!==`mouse`&&!c.matches(i.focusableElements))&&n.activeElement.blur();let g=h&&t.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||g)&&!c.isContentEditable&&r.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit(`touchStart`,r)}function U_(e){let t=mg(),n=this,r=n.touchEventsData,{params:i,touches:a,rtlTranslate:o,enabled:s}=n;if(!s||!i.simulateTouch&&e.pointerType===`mouse`)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),c.type===`pointermove`&&(r.touchId!==null||c.pointerId!==r.pointerId))return;let l;if(c.type===`touchmove`){if(l=[...c.changedTouches].find(e=>e.identifier===r.touchId),!l||l.identifier!==r.touchId)return}else l=c;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit(`touchMoveOpposite`,c);return}let u=l.pageX,d=l.pageY;if(c.preventedByNestedSwiper){a.startX=u,a.startY=d;return}if(!n.allowTouchMove){c.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d}),r.touchStartTime=bg());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(d<a.startY&&n.translate<=n.maxTranslate()||d>a.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(o&&(u>a.startX&&-n.translate<=n.maxTranslate()||u<a.startX&&-n.translate>=n.minTranslate()))return;else if(!o&&(u<a.startX&&n.translate<=n.maxTranslate()||u>a.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==c.target&&c.pointerType!==`mouse`&&t.activeElement.blur(),t.activeElement&&c.target===t.activeElement&&c.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit(`touchMove`,c),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=u,a.currentY=d;let f=a.currentX-a.startX,p=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(f**2+p**2)<n.params.threshold)return;if(r.isScrolling===void 0){let e;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?r.isScrolling=!1:f*f+p*p>=25&&(e=Math.atan2(Math.abs(p),Math.abs(f))*180/Math.PI,r.isScrolling=n.isHorizontal()?e>i.touchAngle:90-e>i.touchAngle)}if(r.isScrolling&&n.emit(`touchMoveOpposite`,c),r.startMoving===void 0&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(r.startMoving=!0),r.isScrolling||c.type===`touchmove`&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&c.cancelable&&c.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&c.stopPropagation();let m=n.isHorizontal()?f:p,h=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;i.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),h=Math.abs(h)*(o?1:-1)),a.diff=m,m*=i.touchRatio,o&&(m=-m,h=-h);let g=n.touchesDirection;n.swipeDirection=m>0?`prev`:`next`,n.touchesDirection=h>0?`prev`:`next`;let _=n.params.loop&&!i.cssMode,v=n.touchesDirection===`next`&&n.allowSlideNext||n.touchesDirection===`prev`&&n.allowSlidePrev;if(!r.isMoved){if(_&&v&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){let e=new window.CustomEvent(`transitionend`,{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(e)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit(`sliderFirstMove`,c)}if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&g!==n.touchesDirection&&_&&v&&Math.abs(m)>=1){Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit(`sliderMove`,c),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let y=!0,b=i.resistanceRatio;if(i.touchReleaseOnEdges&&(b=0),m>0?(_&&v&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!==`auto`&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:`prev`,setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(y=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**b))):m<0&&(_&&v&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!==`auto`&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:`next`,setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView===`auto`?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(y=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**b))),y&&(c.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection===`next`&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection===`prev`&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(m)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,r.currentTranslate=r.startTranslate,a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function W_(e){let t=this,n=t.touchEventsData,r=e;r.originalEvent&&(r=r.originalEvent);let i;if(!(r.type===`touchend`||r.type===`touchcancel`)){if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}else if(i=[...r.changedTouches].find(e=>e.identifier===n.touchId),!i||i.identifier!==n.touchId)return;if([`pointercancel`,`pointerout`,`pointerleave`,`contextmenu`].includes(r.type)&&!([`pointercancel`,`contextmenu`].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;let{params:a,touches:o,rtlTranslate:s,slidesGrid:c,enabled:l}=t;if(!l||!a.simulateTouch&&r.pointerType===`mouse`)return;if(n.allowTouchCallbacks&&t.emit(`touchEnd`,r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);let u=bg(),d=u-n.touchStartTime;if(t.allowClick){let e=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(e&&e[0]||r.target,e),t.emit(`tap click`,r),d<300&&u-n.lastClickTime<300&&t.emit(`doubleTap doubleClick`,r)}if(n.lastClickTime=bg(),yg(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||o.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let f;if(f=a.followFinger?s?t.translate:-t.translate:-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}let p=f>=-t.maxTranslate()&&!t.params.loop,m=0,h=t.slidesSizesGrid[0];for(let e=0;e<c.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){let t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;c[e+t]===void 0?(p||f>=c[e])&&(m=e,h=c[c.length-1]-c[c.length-2]):(p||f>=c[e]&&f<c[e+t])&&(m=e,h=c[e+t]-c[e])}let g=null,_=null;a.rewind&&(t.isBeginning?_=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));let v=(f-c[m])/h,y=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(d>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection===`next`&&(v>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:m+y):t.slideTo(m)),t.swipeDirection===`prev`&&(v>1-a.longSwipesRatio?t.slideTo(m+y):_!==null&&v<0&&Math.abs(v)>a.longSwipesRatio?t.slideTo(_):t.slideTo(m))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(m+y):t.slideTo(m):(t.swipeDirection===`next`&&t.slideTo(g===null?m+y:g),t.swipeDirection===`prev`&&t.slideTo(_===null?m:_))}}function G_(){let e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();let{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();let s=o&&t.loop;if((t.slidesPerView===`auto`||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s){let t=o?e.virtual.slides:e.slides;e.slideTo(t.length-1,0,!1,!0)}else e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function K_(e){let t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function q_(){let e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i,a=e.maxTranslate()-e.minTranslate();i=a===0?0:(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit(`setTranslate`,e.translate,!1)}function J_(e){let t=this;s_(t,e.target),!(t.params.cssMode||t.params.slidesPerView!==`auto`&&!t.params.autoHeight)&&t.update()}function Y_(){let e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction=`auto`))}var X_=(e,t)=>{let n=mg(),{params:r,el:i,wrapperEl:a,device:o}=e,s=!!r.nested,c=t===`on`?`addEventListener`:`removeEventListener`,l=t;!i||typeof i==`string`||(n[c](`touchstart`,e.onDocumentTouchStart,{passive:!1,capture:s}),i[c](`touchstart`,e.onTouchStart,{passive:!1}),i[c](`pointerdown`,e.onTouchStart,{passive:!1}),n[c](`touchmove`,e.onTouchMove,{passive:!1,capture:s}),n[c](`pointermove`,e.onTouchMove,{passive:!1,capture:s}),n[c](`touchend`,e.onTouchEnd,{passive:!0}),n[c](`pointerup`,e.onTouchEnd,{passive:!0}),n[c](`pointercancel`,e.onTouchEnd,{passive:!0}),n[c](`touchcancel`,e.onTouchEnd,{passive:!0}),n[c](`pointerout`,e.onTouchEnd,{passive:!0}),n[c](`pointerleave`,e.onTouchEnd,{passive:!0}),n[c](`contextmenu`,e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[c](`click`,e.onClick,!0),r.cssMode&&a[c](`scroll`,e.onScroll),r.updateOnWindowResize?e[l](o.ios||o.android?`resize orientationchange observerUpdate`:`resize observerUpdate`,G_,!0):e[l](`observerUpdate`,G_,!0),i[c](`load`,e.onLoad,{capture:!0}))};function Z_(){let e=this,{params:t}=e;e.onTouchStart=H_.bind(e),e.onTouchMove=U_.bind(e),e.onTouchEnd=W_.bind(e),e.onDocumentTouchStart=Y_.bind(e),t.cssMode&&(e.onScroll=q_.bind(e)),e.onClick=K_.bind(e),e.onLoad=J_.bind(e),X_(e,`on`)}function Q_(){X_(this,`off`)}var $_={attachEvents:Z_,detachEvents:Q_},ev=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function tv(){let e=this,{realIndex:t,initialized:n,params:r,el:i}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;let o=mg(),s=r.breakpointsBase===`window`||!r.breakpointsBase?r.breakpointsBase:`container`,c=[`window`,`container`].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:o.querySelector(r.breakpointsBase),l=e.getBreakpoint(a,s,c);if(!l||e.currentBreakpoint===l)return;let u=(l in a?a[l]:void 0)||e.originalParams,d=ev(e,r),f=ev(e,u),p=e.params.grabCursor,m=u.grabCursor,h=r.enabled;d&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill===`column`||!u.grid.fill&&r.grid.fill===`column`)&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!m?e.unsetGrabCursor():!p&&m&&e.setGrabCursor(),[`navigation`,`pagination`,`scrollbar`].forEach(t=>{if(u[t]===void 0)return;let n=r[t]&&r[t].enabled,i=u[t]&&u[t].enabled;n&&!i&&e[t].disable(),!n&&i&&e[t].enable()});let g=u.direction&&u.direction!==r.direction,_=r.loop&&(u.slidesPerView!==r.slidesPerView||g),v=r.loop;g&&n&&e.changeDirection(),Tg(e.params,u);let y=e.params.enabled,b=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),h&&!y?e.disable():!h&&y&&e.enable(),e.currentBreakpoint=l,e.emit(`_beforeBreakpoint`,u),n&&(_?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!v&&b?(e.loopCreate(t),e.updateSlides()):v&&!b&&e.loopDestroy()),e.emit(`breakpoint`,u)}function nv(e,t=`window`,n){if(!e||t===`container`&&!n)return;let r=!1,i=gg(),a=t===`window`?i.innerHeight:n.clientHeight,o=Object.keys(e).map(e=>typeof e==`string`&&e.indexOf(`@`)===0?{value:a*parseFloat(e.substr(1)),point:e}:{value:e,point:e});o.sort((e,t)=>parseInt(e.value,10)-parseInt(t.value,10));for(let e=0;e<o.length;e+=1){let{point:a,value:s}=o[e];t===`window`?i.matchMedia(`(min-width: ${s}px)`).matches&&(r=a):s<=n.clientWidth&&(r=a)}return r||`max`}var rv={setBreakpoint:tv,getBreakpoint:nv};function iv(e,t){let n=[];return e.forEach(e=>{typeof e==`object`?Object.keys(e).forEach(r=>{e[r]&&n.push(t+r)}):typeof e==`string`&&n.push(t+e)}),n}function av(){let e=this,{classNames:t,params:n,rtl:r,el:i,device:a}=e,o=iv([`initialized`,n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill===`column`},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function ov(){let e=this,{el:t,classNames:n}=e;!t||typeof t==`string`||(t.classList.remove(...n),e.emitContainerClasses())}var sv={addClasses:av,removeClasses:ov};function cv(){let e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){let t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+r*2;e.isLocked=e.size>n}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?`lock`:`unlock`)}var lv={checkOverflow:cv},uv={init:!0,direction:`horizontal`,oneWayMovement:!1,swiperElementNodeName:`SWIPER-CONTAINER`,touchEventsTarget:`wrapper`,initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:`swiper`,enabled:!0,focusableElements:`input, select, option, textarea, button, video, label`,width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:`slide`,breakpoints:void 0,breakpointsBase:`window`,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:`swiper-no-swiping`,noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:`swiper-`,slideClass:`swiper-slide`,slideBlankClass:`swiper-slide-blank`,slideActiveClass:`swiper-slide-active`,slideVisibleClass:`swiper-slide-visible`,slideFullyVisibleClass:`swiper-slide-fully-visible`,slideNextClass:`swiper-slide-next`,slidePrevClass:`swiper-slide-prev`,wrapperClass:`swiper-wrapper`,lazyPreloaderClass:`swiper-lazy-preloader`,lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function dv(e,t){return function(n={}){let r=Object.keys(n)[0],i=n[r];if(typeof i!=`object`||!i){Tg(t,n);return}if(e[r]===!0&&(e[r]={enabled:!0}),r===`navigation`&&e[r]&&e[r].enabled&&!e[r].prevEl&&!e[r].nextEl&&(e[r].auto=!0),[`pagination`,`scrollbar`].indexOf(r)>=0&&e[r]&&e[r].enabled&&!e[r].el&&(e[r].auto=!0),!(r in e&&`enabled`in i)){Tg(t,n);return}typeof e[r]==`object`&&!(`enabled`in e[r])&&(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),Tg(t,n)}}var fv={eventsEmitter:Zg,update:p_,translate:y_,transition:w_,slide:M_,loop:I_,grabCursor:z_,events:$_,breakpoints:rv,checkOverflow:lv,classes:sv},pv={},mv=class e{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)===`Object`?r=t[0]:[n,r]=t,r||={},r=Tg({},r),n&&!r.el&&(r.el=n);let i=mg();if(r.el&&typeof r.el==`string`&&i.querySelectorAll(r.el).length>1){let t=[];return i.querySelectorAll(r.el).forEach(n=>{let i=Tg({},r,{el:n});t.push(new e(i))}),t}let a=this;a.__swiper__=!0,a.support=Hg(),a.device=Gg({userAgent:r.userAgent}),a.browser=Jg(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(e=>{typeof e==`function`&&a.modules.indexOf(e)<0&&a.modules.push(e)});let o={};return a.modules.forEach(e=>{e({params:r,swiper:a,extendParams:dv(r,o),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})}),a.params=Tg({},Tg({},uv,o),pv,r),a.originalParams=Tg({},a.params),a.passedParams=Tg({},r),a.params&&a.params.on&&Object.keys(a.params.on).forEach(e=>{a.on(e,a.params.on[e])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction===`horizontal`},isVertical(){return a.params.direction===`vertical`},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit(`_swiper`),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:`height`,"margin-top":`margin-left`,"margin-bottom ":`margin-right`,"margin-left":`margin-top`,"margin-right":`margin-bottom`,"padding-left":`padding-top`,"padding-right":`padding-bottom`,marginRight:`marginBottom`}[e]}getSlideIndex(e){let{slidesEl:t,params:n}=this,r=Ig(Og(t,`.${n.slideClass}, swiper-slide`)[0]);return Ig(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute(`data-swiper-slide-index`)*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill===`column`?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill===`row`&&(e%=Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){let e=this,{slidesEl:t,params:n}=e;e.slides=Og(t,`.${n.slideClass}, swiper-slide`)}enable(){let e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit(`enable`))}disable(){let e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit(`disable`))}setProgress(e,t){let n=this;e=Math.min(Math.max(e,0),1);let r=n.minTranslate(),i=(n.maxTranslate()-r)*e+r;n.translateTo(i,t===void 0?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=e.el.className.split(` `).filter(t=>t.indexOf(`swiper`)===0||t.indexOf(e.params.containerModifierClass)===0);e.emit(`_containerClasses`,t.join(` `))}getSlideClasses(e){let t=this;return t.destroyed?``:e.className.split(` `).filter(e=>e.indexOf(`swiper-slide`)===0||e.indexOf(t.params.slideClass)===0).join(` `)}emitSlidesClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=[];e.slides.forEach(n=>{let r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit(`_slideClass`,n,r)}),e.emit(`_slideClasses`,t)}slidesPerViewDynamic(e=`current`,t=!1){let{params:n,slides:r,slidesGrid:i,slidesSizesGrid:a,size:o,activeIndex:s}=this,c=1;if(typeof n.slidesPerView==`number`)return n.slidesPerView;if(n.centeredSlides){let e=r[s]?Math.ceil(r[s].swiperSlideSize):0,t;for(let n=s+1;n<r.length;n+=1)r[n]&&!t&&(e+=Math.ceil(r[n].swiperSlideSize),c+=1,e>o&&(t=!0));for(let n=s-1;n>=0;--n)r[n]&&!t&&(e+=r[n].swiperSlideSize,c+=1,e>o&&(t=!0))}else if(e===`current`)for(let e=s+1;e<r.length;e+=1)(t?i[e]+a[e]-i[s]<o:i[e]-i[s]<o)&&(c+=1);else for(let e=s-1;e>=0;--e)i[s]-i[e]<o&&(c+=1);return c}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll(`[loading="lazy"]`)].forEach(t=>{t.complete&&s_(e,t)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){let t=e.rtlTranslate?e.translate*-1:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)r(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView===`auto`||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){let t=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(t.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit(`update`)}changeDirection(e,t=!0){let n=this,r=n.params.direction;return e||=r===`horizontal`?`vertical`:`horizontal`,e===r||e!==`horizontal`&&e!==`vertical`?n:(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(t=>{e===`vertical`?t.style.width=``:t.style.height=``}),n.emit(`changeDirection`),t&&n.update(),n)}changeLanguageDirection(e){let t=this;t.rtl&&e===`rtl`||!t.rtl&&e===`ltr`||(t.rtl=e===`rtl`,t.rtlTranslate=t.params.direction===`horizontal`&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir=`rtl`):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir=`ltr`),t.update())}mount(e){let t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n==`string`&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);let r=()=>`.${(t.params.wrapperClass||``).trim().split(` `).join(`.`)}`,i=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(r()):Og(n,r())[0];return!i&&t.params.createElements&&(i=Mg(`div`,t.params.wrapperClass),n.append(i),Og(n,`.${t.params.slideClass}`).forEach(e=>{i.append(e)})),Object.assign(t,{el:n,wrapperEl:i,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:i,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()===`rtl`||Fg(n,`direction`)===`rtl`,rtlTranslate:t.params.direction===`horizontal`&&(n.dir.toLowerCase()===`rtl`||Fg(n,`direction`)===`rtl`),wrongRTL:Fg(i,`display`)===`-webkit-box`}),!0}init(e){let t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit(`beforeInit`),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();let n=[...t.el.querySelectorAll(`[loading="lazy"]`)];return t.isElement&&n.push(...t.hostEl.querySelectorAll(`[loading="lazy"]`)),n.forEach(e=>{e.complete?s_(t,e):e.addEventListener(`load`,e=>{s_(t,e.target)})}),l_(t),t.initialized=!0,l_(t),t.emit(`init`),t.emit(`afterInit`),t}destroy(e=!0,t=!0){let n=this,{params:r,el:i,wrapperEl:a,slides:o}=n;return n.params===void 0||n.destroyed?null:(n.emit(`beforeDestroy`),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),i&&typeof i!=`string`&&i.removeAttribute(`style`),a&&a.removeAttribute(`style`),o&&o.length&&o.forEach(e=>{e.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),e.removeAttribute(`style`),e.removeAttribute(`data-swiper-slide-index`)})),n.emit(`destroy`),Object.keys(n.eventsListeners).forEach(e=>{n.off(e)}),e!==!1&&(n.el&&typeof n.el!=`string`&&(n.el.swiper=null),vg(n)),n.destroyed=!0,null)}static extendDefaults(e){Tg(pv,e)}static get extendedDefaults(){return pv}static get defaults(){return uv}static installModule(t){e.prototype.__modules__||(e.prototype.__modules__=[]);let n=e.prototype.__modules__;typeof t==`function`&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(t=>e.installModule(t)),e):(e.installModule(t),e)}};Object.keys(fv).forEach(e=>{Object.keys(fv[e]).forEach(t=>{mv.prototype[t]=fv[e][t]})}),mv.use([Yg,Xg]);var hv=`eventsPrefix.injectStyles.injectStylesUrls.modules.init._direction.oneWayMovement.swiperElementNodeName.touchEventsTarget.initialSlide._speed.cssMode.updateOnWindowResize.resizeObserver.nested.focusableElements._enabled._width._height.preventInteractionOnTransition.userAgent.url._edgeSwipeDetection._edgeSwipeThreshold._freeMode._autoHeight.setWrapperSize.virtualTranslate._effect.breakpoints.breakpointsBase._spaceBetween._slidesPerView.maxBackfaceHiddenSlides._grid._slidesPerGroup._slidesPerGroupSkip._slidesPerGroupAuto._centeredSlides._centeredSlidesBounds._slidesOffsetBefore._slidesOffsetAfter.normalizeSlideIndex._centerInsufficientSlides._snapToSlideEdge._watchOverflow.roundLengths.touchRatio.touchAngle.simulateTouch._shortSwipes._longSwipes.longSwipesRatio.longSwipesMs._followFinger.allowTouchMove._threshold.touchMoveStopPropagation.touchStartPreventDefault.touchStartForcePreventDefault.touchReleaseOnEdges.uniqueNavElements._resistance._resistanceRatio._watchSlidesProgress._grabCursor.preventClicks.preventClicksPropagation._slideToClickedSlide._loop.loopAdditionalSlides.loopAddBlankSlides.loopPreventsSliding._rewind._allowSlidePrev._allowSlideNext._swipeHandler._noSwiping.noSwipingClass.noSwipingSelector.passiveListeners.containerModifierClass.slideClass.slideActiveClass.slideVisibleClass.slideFullyVisibleClass.slideNextClass.slidePrevClass.slideBlankClass.wrapperClass.lazyPreloaderClass.lazyPreloadPrevNext.runCallbacksOnInit.observer.observeParents.observeSlideChildren.a11y._autoplay._controller.coverflowEffect.cubeEffect.fadeEffect.flipEffect.creativeEffect.cardsEffect.hashNavigation.history.keyboard.mousewheel._navigation._pagination.parallax._scrollbar._thumbs.virtual.zoom.control`.split(`.`);function gv(e){return typeof e==`object`&&!!e&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)===`Object`&&!e.__swiper__}function _v(e,t){let n=[`__proto__`,`constructor`,`prototype`];Object.keys(t).filter(e=>n.indexOf(e)<0).forEach(n=>{e[n]===void 0?e[n]=t[n]:gv(t[n])&&gv(e[n])&&Object.keys(t[n]).length>0?t[n].__swiper__?e[n]=t[n]:_v(e[n],t[n]):e[n]=t[n]})}function vv(e={}){return e.navigation&&e.navigation.nextEl===void 0&&e.navigation.prevEl===void 0}function yv(e={}){return e.pagination&&e.pagination.el===void 0}function bv(e={}){return e.scrollbar&&e.scrollbar.el===void 0}function xv(e=``){let t=e.split(` `).map(e=>e.trim()).filter(e=>!!e),n=[];return t.forEach(e=>{n.indexOf(e)<0&&n.push(e)}),n.join(` `)}function Sv(e=``){return e?e.includes(`swiper-wrapper`)?e:`swiper-wrapper ${e}`:`swiper-wrapper`}function Cv({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:a,scrollbarEl:o,paginationEl:s}){let c=r.filter(e=>e!==`children`&&e!==`direction`&&e!==`wrapperClass`),{params:l,pagination:u,navigation:d,scrollbar:f,virtual:p,thumbs:m}=e,h,g,_,v,y,b,x,S;r.includes(`thumbs`)&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&l.thumbs&&(!l.thumbs.swiper||l.thumbs.swiper.destroyed)&&(h=!0),r.includes(`controller`)&&n.controller&&n.controller.control&&l.controller&&!l.controller.control&&(g=!0),r.includes(`pagination`)&&n.pagination&&(n.pagination.el||s)&&(l.pagination||l.pagination===!1)&&u&&!u.el&&(_=!0),r.includes(`scrollbar`)&&n.scrollbar&&(n.scrollbar.el||o)&&(l.scrollbar||l.scrollbar===!1)&&f&&!f.el&&(v=!0),r.includes(`navigation`)&&n.navigation&&(n.navigation.prevEl||a)&&(n.navigation.nextEl||i)&&(l.navigation||l.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(y=!0);let C=t=>{e[t]&&(e[t].destroy(),t===`navigation`?(e.isElement&&(e[t].prevEl.remove(),e[t].nextEl.remove()),l[t].prevEl=void 0,l[t].nextEl=void 0,e[t].prevEl=void 0,e[t].nextEl=void 0):(e.isElement&&e[t].el.remove(),l[t].el=void 0,e[t].el=void 0))};r.includes(`loop`)&&e.isElement&&(l.loop&&!n.loop?b=!0:!l.loop&&n.loop?x=!0:S=!0),c.forEach(e=>{if(gv(l[e])&&gv(n[e]))Object.assign(l[e],n[e]),(e===`navigation`||e===`pagination`||e===`scrollbar`)&&`enabled`in n[e]&&!n[e].enabled&&C(e);else{let t=n[e];(t===!0||t===!1)&&(e===`navigation`||e===`pagination`||e===`scrollbar`)?t===!1&&C(e):l[e]=n[e]}}),c.includes(`controller`)&&!g&&e.controller&&e.controller.control&&l.controller&&l.controller.control&&(e.controller.control=l.controller.control),r.includes(`children`)&&t&&p&&l.virtual.enabled?(p.slides=t,p.update(!0)):r.includes(`virtual`)&&p&&l.virtual.enabled&&(t&&(p.slides=t),p.update(!0)),r.includes(`children`)&&t&&l.loop&&(S=!0),h&&m.init()&&m.update(!0),g&&(e.controller.control=l.controller.control),_&&(e.isElement&&(!s||typeof s==`string`)&&(s=document.createElement(`div`),s.classList.add(`swiper-pagination`),s.part.add(`pagination`),e.el.appendChild(s)),s&&(l.pagination.el=s),u.init(),u.render(),u.update()),v&&(e.isElement&&(!o||typeof o==`string`)&&(o=document.createElement(`div`),o.classList.add(`swiper-scrollbar`),o.part.add(`scrollbar`),e.el.appendChild(o)),o&&(l.scrollbar.el=o),f.init(),f.updateSize(),f.setTranslate()),y&&(e.isElement&&((!i||typeof i==`string`)&&(i=document.createElement(`div`),i.classList.add(`swiper-button-next`),zg(i,e.navigation.arrowSvg),i.part.add(`button-next`),e.el.appendChild(i)),(!a||typeof a==`string`)&&(a=document.createElement(`div`),a.classList.add(`swiper-button-prev`),zg(a,e.navigation.arrowSvg),a.part.add(`button-prev`),e.el.appendChild(a))),i&&(l.navigation.nextEl=i),a&&(l.navigation.prevEl=a),d.init(),d.update()),r.includes(`allowSlideNext`)&&(e.allowSlideNext=n.allowSlideNext),r.includes(`allowSlidePrev`)&&(e.allowSlidePrev=n.allowSlidePrev),r.includes(`direction`)&&e.changeDirection(n.direction,!1),(b||S)&&e.loopDestroy(),(x||S)&&e.loopCreate(),e.update()}function wv(e={},t=!0){let n={on:{}},r={},i={};_v(n,uv),n._emitClasses=!0,n.init=!1;let a={},o=hv.map(e=>e.replace(/_/,``)),s=Object.assign({},e);return Object.keys(s).forEach(s=>{e[s]!==void 0&&(o.indexOf(s)>=0?gv(e[s])?(n[s]={},i[s]={},_v(n[s],e[s]),_v(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]==`function`?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:a[s]=e[s])}),[`navigation`,`pagination`,`scrollbar`].forEach(e=>{n[e]===!0&&(n[e]={}),n[e]===!1&&delete n[e]}),{params:n,passedParams:i,rest:a,events:r}}function Tv({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:a},o){vv(o)&&t&&n&&(a.params.navigation.nextEl=t,a.originalParams.navigation.nextEl=t,a.params.navigation.prevEl=n,a.originalParams.navigation.prevEl=n),yv(o)&&r&&(a.params.pagination.el=r,a.originalParams.pagination.el=r),bv(o)&&i&&(a.params.scrollbar.el=i,a.originalParams.scrollbar.el=i),a.init(e)}function Ev(e,t,n,r,i){let a=[];if(!t)return a;let o=e=>{a.indexOf(e)<0&&a.push(e)};if(n&&r){let e=r.map(i),t=n.map(i);e.join(``)!==t.join(``)&&o(`children`),r.length!==n.length&&o(`children`)}return hv.filter(e=>e[0]===`_`).map(e=>e.replace(/_/,``)).forEach(n=>{if(n in e&&n in t)if(gv(e[n])&&gv(t[n])){let r=Object.keys(e[n]),i=Object.keys(t[n]);r.length===i.length?(r.forEach(r=>{e[n][r]!==t[n][r]&&o(n)}),i.forEach(r=>{e[n][r]!==t[n][r]&&o(n)})):o(n)}else e[n]!==t[n]&&o(n)}),a}var Dv=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit(`_virtualUpdated`),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Ov(){return Ov=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ov.apply(this,arguments)}function kv(e){return e.type&&e.type.displayName&&e.type.displayName.includes(`SwiperSlide`)}function Av(e){let t=[];return w.Children.toArray(e).forEach(e=>{kv(e)?t.push(e):e.props&&e.props.children&&Av(e.props.children).forEach(e=>t.push(e))}),t}function jv(e){let t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return w.Children.toArray(e).forEach(e=>{if(kv(e))t.push(e);else if(e.props&&e.props.slot&&n[e.props.slot])n[e.props.slot].push(e);else if(e.props&&e.props.children){let r=Av(e.props.children);r.length>0?r.forEach(e=>t.push(e)):n[`container-end`].push(e)}else n[`container-end`].push(e)}),{slides:t,slots:n}}function Mv(e,t,n){if(!n)return null;let r=e=>{let n=e;return e<0?n=t.length+e:n>=t.length&&(n-=t.length),n},i=e.isHorizontal()?{[e.rtlTranslate?`right`:`left`]:`${n.offset}px`}:{top:`${n.offset}px`},{from:a,to:o}=n,s=e.params.loop?-t.length:0,c=e.params.loop?t.length*2:t.length,l=[];for(let e=s;e<c;e+=1)e>=a&&e<=o&&l.push(t[r(e)]);return l.map((t,n)=>w.cloneElement(t,{swiper:e,style:i,key:t.props.virtualIndex||t.key||`slide-${n}`}))}function Nv(e,t){return typeof window>`u`?(0,w.useEffect)(e,t):(0,w.useLayoutEffect)(e,t)}var Pv=(0,w.createContext)(null),Fv=(0,w.createContext)(null),Iv=(0,w.forwardRef)(({className:e,tag:t=`div`,wrapperTag:n=`div`,children:r,onSwiper:i,...a}={},o)=>{let s=!1,[c,l]=(0,w.useState)(`swiper`),[u,d]=(0,w.useState)(null),[f,p]=(0,w.useState)(!1),m=(0,w.useRef)(!1),h=(0,w.useRef)(null),g=(0,w.useRef)(null),_=(0,w.useRef)(null),v=(0,w.useRef)(null),y=(0,w.useRef)(null),b=(0,w.useRef)(null),x=(0,w.useRef)(null),S=(0,w.useRef)(null),{params:C,passedParams:T,rest:ee,events:E}=wv(a),{slides:D,slots:O}=jv(r),te=()=>{p(!f)};Object.assign(C.on,{_containerClasses(e,t){l(t)}});let ne=()=>{Object.assign(C.on,E),s=!0;let e={...C};if(delete e.wrapperClass,g.current=new mv(e),g.current.virtual&&g.current.params.virtual.enabled){g.current.virtual.slides=D;let e={cache:!1,slides:D,renderExternal:d,renderExternalUpdate:!1};_v(g.current.params.virtual,e),_v(g.current.originalParams.virtual,e)}};h.current||ne(),g.current&&g.current.on(`_beforeBreakpoint`,te);let re=()=>{s||!E||!g.current||Object.keys(E).forEach(e=>{g.current.on(e,E[e])})},ie=()=>{!E||!g.current||Object.keys(E).forEach(e=>{g.current.off(e,E[e])})};(0,w.useEffect)(()=>()=>{g.current&&g.current.off(`_beforeBreakpoint`,te)}),(0,w.useEffect)(()=>{!m.current&&g.current&&(g.current.emitSlidesClasses(),m.current=!0)}),Nv(()=>{if(o&&(o.current=h.current),h.current)return g.current.destroyed&&ne(),Tv({el:h.current,nextEl:y.current,prevEl:b.current,paginationEl:x.current,scrollbarEl:S.current,swiper:g.current},C),i&&!g.current.destroyed&&i(g.current),()=>{g.current&&!g.current.destroyed&&g.current.destroy(!0,!1)}},[]),Nv(()=>{re();let e=Ev(T,_.current,D,v.current,e=>e.key);return _.current=T,v.current=D,e.length&&g.current&&!g.current.destroyed&&Cv({swiper:g.current,slides:D,passedParams:T,changedParams:e,nextEl:y.current,prevEl:b.current,scrollbarEl:S.current,paginationEl:x.current}),()=>{ie()}}),Nv(()=>{Dv(g.current)},[u]);function ae(){return C.virtual?Mv(g.current,D,u):D.map((e,t)=>w.cloneElement(e,{swiper:g.current,swiperSlideIndex:t}))}return w.createElement(t,Ov({ref:h,className:xv(`${c}${e?` ${e}`:``}`)},ee),w.createElement(Fv.Provider,{value:g.current},O[`container-start`],w.createElement(n,{className:Sv(C.wrapperClass)},O[`wrapper-start`],ae(),O[`wrapper-end`]),vv(C)&&w.createElement(w.Fragment,null,w.createElement(`div`,{ref:b,className:`swiper-button-prev`}),w.createElement(`div`,{ref:y,className:`swiper-button-next`})),bv(C)&&w.createElement(`div`,{ref:S,className:`swiper-scrollbar`}),yv(C)&&w.createElement(`div`,{ref:x,className:`swiper-pagination`}),O[`container-end`]))});Iv.displayName=`Swiper`;var Lv=(0,w.forwardRef)(({tag:e=`div`,children:t,className:n=``,swiper:r,zoom:i,lazy:a,virtualIndex:o,swiperSlideIndex:s,...c}={},l)=>{let u=(0,w.useRef)(null),[d,f]=(0,w.useState)(`swiper-slide`),[p,m]=(0,w.useState)(!1);function h(e,t,n){t===u.current&&f(n)}Nv(()=>{if(s!==void 0&&(u.current.swiperSlideIndex=s),l&&(l.current=u.current),!(!u.current||!r)){if(r.destroyed){d!==`swiper-slide`&&f(`swiper-slide`);return}return r.on(`_slideClass`,h),()=>{r&&r.off(`_slideClass`,h)}}}),Nv(()=>{r&&u.current&&!r.destroyed&&f(r.getSlideClasses(u.current))},[r]);let g={isActive:d.indexOf(`swiper-slide-active`)>=0,isVisible:d.indexOf(`swiper-slide-visible`)>=0,isFullyVisible:d.indexOf(`swiper-slide-fully-visible`)>=0,isPrev:d.indexOf(`swiper-slide-prev`)>=0,isNext:d.indexOf(`swiper-slide-next`)>=0},_=()=>typeof t==`function`?t(g):t;return w.createElement(e,Ov({ref:u,className:xv(`${d}${n?` ${n}`:``}`),"data-swiper-slide-index":o,onLoad:()=>{m(!0)}},c),i&&w.createElement(Pv.Provider,{value:g},w.createElement(`div`,{className:`swiper-zoom-container`,"data-swiper-zoom":typeof i==`number`?i:void 0},_(),a&&!p&&w.createElement(`div`,{className:`swiper-lazy-preloader`,ref:e=>{e&&(e.lazyPreloaderManaged=!0)}}))),!i&&w.createElement(Pv.Provider,{value:g},_(),a&&!p&&w.createElement(`div`,{className:`swiper-lazy-preloader`,ref:e=>{e&&(e.lazyPreloaderManaged=!0)}})))});Lv.displayName=`SwiperSlide`;var Rv=()=>{let[e,t]=(0,w.useState)({name:``,email:``,phone:``,company:``,employees:``,invoices:``,product:``}),[n,r]=(0,w.useState)({});(0,w.useEffect)(()=>{let e=localStorage.getItem(`quoteForm`);e&&t(JSON.parse(e))},[]),(0,w.useEffect)(()=>{localStorage.setItem(`quoteForm`,JSON.stringify(e))},[e]);let i=(e,t)=>{let n=``;if([`employees`,`invoices`].includes(e)&&t!==``){let r=Number(t);(isNaN(r)||r<0)&&(n=`Please enter a valid number`),e===`employees`&&r>1e4&&(n=`Employee count too large`),e===`invoices`&&r>1e6&&(n=`Invoice count too large`)}e===`email`&&t!==``&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)||(n=`Enter valid email`)),r(t=>({...t,[e]:n}))},a=n=>{let{name:r,value:a}=n.target;t({...e,[r]:a}),i(r,a)};return(0,F.jsx)(F.Fragment,{children:(0,F.jsx)($.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.7},viewport:{once:!0},className:`\r
              relative\r
            `,children:(0,F.jsxs)(`form`,{onSubmit:r=>{r.preventDefault(),!Object.values(n).some(e=>e!==``)&&(console.log(`Submitted Form:`,e),alert(`Quote request submitted successfully!`),localStorage.removeItem(`quoteForm`),t({name:``,email:``,phone:``,company:``,employees:``,invoices:``,product:``}))},className:`\r
            relative\r
                border\r
                border-white/60\r
                bg-white/70\r
                backdrop-blur-2xl\r
                rounded-3xl\r
                p-5\r
                sm:p-6\r
                lg:p-7\r
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]\r
              `,children:[(0,F.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:[{name:`name`,placeholder:`Full Name`,type:`text`},{name:`email`,placeholder:`Business Email`,type:`email`},{name:`phone`,placeholder:`Phone Number`,type:`tel`},{name:`employees`,placeholder:`Employees`,type:`number`},{name:`invoices`,placeholder:`Monthly Invoices`,type:`number`},{name:`outgoing invoices`,placeholder:`Outgoing Invoices`,type:`number`}].map((t,r)=>(0,F.jsxs)(`div`,{className:`\r
                      flex\r
                      flex-col\r
                    `,children:[(0,F.jsx)(`input`,{required:!0,type:t.type,name:t.name,value:e[t.name],onChange:a,placeholder:t.placeholder,className:`
                        h-12
                        rounded-xl
                        px-4
                        text-sm
                        border
                        bg-white/80
                        outline-none
                        transition-all
                        duration-300
                        text-[#071426]
                        placeholder:text-gray-400
                        focus:border-[#2F80FF]
                        focus:ring-4
                        focus:ring-[#2F80FF]/10
                        ${n[t.name]?`border-red-400`:`border-gray-200`}
                      `}),n[t.name]&&(0,F.jsx)(`span`,{className:`\r
                          text-red-500\r
                          text-sm\r
                          mt-2\r
                        `,children:n[t.name]})]},r))}),(0,F.jsx)(`div`,{className:`mt-4`,children:(0,F.jsxs)(`select`,{required:!0,name:`product`,value:e.product,onChange:a,className:`\r
                    w-full\r
                    h-12\r
                    rounded-xl\r
                    px-4\r
                    text-sm\r
                    border\r
                    border-gray-200\r
                    bg-white/80\r
                    outline-none\r
                    transition-all\r
                    duration-300\r
                    text-[#071426]\r
                    focus:border-[#2F80FF]\r
                    focus:ring-4\r
                    focus:ring-[#2F80FF]/10\r
                  `,children:[(0,F.jsx)(`option`,{value:``,children:`Interested Product`}),(0,F.jsx)(`option`,{children:`TallyPrime`}),(0,F.jsx)(`option`,{children:`TallyPrime Server`}),(0,F.jsx)(`option`,{children:`TallyPrime AWS`}),(0,F.jsx)(`option`,{children:`Customization`}),(0,F.jsx)(`option`,{children:`Training`})]})}),(0,F.jsxs)($.button,{type:`submit`,whileHover:{scale:1.02},whileTap:{scale:.98},className:`\r
                  group\r
                  w-full\r
                  mt-5\r
                  h-12\r
                  rounded-xl\r
                  text-sm\r
                  bg-[#155A96]\r
                  text-white\r
                  font-semibold\r
                  shadow-[0_15px_35px_rgba(47,128,255,0.35)]\r
                  flex\r
                  items-center\r
                  justify-center\r
                  gap-3\r
                `,children:[`Get Free Quote`,(0,F.jsx)(cr,{className:`\r
                    w-5\r
                    h-5\r
                    transition-transform\r
                    duration-300\r
                    group-hover:translate-x-1\r
                  `})]})]})})})},zv=`/Balaji-Infotech/assets/about-Bx3Mik-s.png`,Bv=`/Balaji-Infotech/assets/testimonial-n4sWEPeA.png`,Vv=`/Balaji-Infotech/assets/tally-software-BpJ4yyWx.png`,Hv=`/Balaji-Infotech/assets/tally-services-Cnac5sSO.png`,Uv=`/Balaji-Infotech/assets/tally-apps-ClExmanD.png`,Wv=`/Balaji-Infotech/assets/tally-solutions-DpP2Su39.png`,Gv=`/Balaji-Infotech/assets/tally-erp-ibDW76yi.png`,Kv=`/Balaji-Infotech/assets/tally-addon-Ck1TrUKm.png`,qv=`/Balaji-Infotech/assets/tallyPrime-DON61ItX.png`,Jv=`/Balaji-Infotech/assets/tallyServer-Cq-rE9-D.png`,Yv=`/Balaji-Infotech/assets/tallyAws-C4vDBHbz.png`,Xv=`/Balaji-Infotech/assets/tallyMobile-tVZw2t7G.png`,Zv=()=>{let e=pt(),t=[{id:`prime`,path:`tallyprime`,label:`TallyPrime`,icon:(0,F.jsx)(Or,{className:`w-4 h-4`}),title:`Optimize Business Operations With TallyPrime`,description:`TallyPrime is a comprehensive business management software tailored to simplify and enhance the way businesses handle their financial and operational workflows. TallyPrime enables businesses to manage accounts, inventory, payroll, and taxation with unmatched efficiency.`,features:[`Simplified accounting workflows`,`Inventory & GST management`,`Multi-user collaboration`,`Customizable to Business Needs`,`Data Accuracy and Security`,`Reliable performance & support`],image:qv},{id:`server`,path:`tally-server`,label:`TallyPrime Server`,icon:(0,F.jsx)(Mi,{className:`w-4 h-4`}),title:`Enhance Business Efficiency With TallyPrime Server`,description:`TallyPrime Server is a powerful solution designed to revolutionize how businesses manage their financial and operational data. Whether you’re a growing business or an established enterprise, TallyPrime Server offers tools that streamline operations and boost productivity.`,features:[`Centralized Data Management`,`Enhanced data security`,`Server-Based Architecture`,`Streamlined Troubleshooting`,`Customization and Integration`,`Improved Multi-User Efficiency`],image:Jv},{id:`aws`,path:`aws`,label:`TallyPrime Powered by AWS`,icon:(0,F.jsx)(Fr,{className:`w-4 h-4`}),title:`Cloud-Powered Tally Experience With AWS`,description:`TallyPrime powered by AWS is a cutting-edge solution that leverages the flexibility and scalability of the cloud to revolutionize how businesses manage their financial and operational data. TallyPrime on AWS offers tools that boost productivity and streamline operations.`,features:[`Cloud-Based Accessibility`,`High Performance and Scalability`,`Streamlined Integration`,`Scalable deployment`,`Business continuity support`,`Enhanced Data Security`],image:Yv},{id:`Whatsapp`,path:`whatsapp`,label:`Tally Prime Server Whatsapp`,icon:(0,F.jsx)(mi,{className:`w-4 h-4`}),title:`Simplify Business Interactions With Tally On Whatsapp`,description:`Tally on WhatsApp revolutionizes the way businesses communicate and manage key operations by integrating TallyPrime with the power of WhatsApp. This feature enables businesses to access important financial and operational information instantly, ensuring faster decision-making and better collaboration.`,features:[`Instant Reports on Demand`,`Easy Setup and Integration`,`Automated Notifications`,`Enhanced User Convenience`,`Seamless Communication`,`Secure and Reliable`],image:Xv}],n=[{title:`Tally Software`,description:`Complete accounting, GST billing, inventory, and business management.`,image:Vv,link:`/services/tally-software`},{title:`Tally Services`,description:`Professional installation, troubleshooting, remote support, and operational assistance.`,image:Hv,link:`/services/tally-services`},{title:`Tally Apps for Mobile`,description:`Access business reports, invoices, and analytics securely from anywhere using mobile integrations.`,image:Uv,link:`/services/tally-mobile`},{title:`Tally Solutions`,description:`Tailored enterprise solutions designed to simplify workflow automation.`,image:Wv,link:`/services/tally-solutions`},{title:`Tally ERP 9 Solutions`,description:`Legacy Tally ERP 9 implementation, migration support, and business continuity services.`,image:Gv,link:`/services/tally-erp`},{title:`Tally Add-Ons`,description:`Enhance Tally functionality with specialized plugins, integrations, and smart business tools.`,image:Kv,link:`/services/tally-addon`}],[r,i]=(0,w.useState)(t[0]);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(ug,{}),!1,(0,F.jsxs)(`section`,{className:`relative py-14 lg:py-16 px-4 sm:px-6 overflow-hidden bg-white`,children:[(0,F.jsx)(`div`,{className:`\r
      absolute\r
      top-1/2\r
      left-1/2\r
      -translate-x-1/2\r
      -translate-y-1/2\r
      w-[700px]\r
      h-[700px]\r
      rounded-full\r
      bg-[#155A96]/5\r
      blur-3xl\r
    `}),(0,F.jsxs)(`div`,{className:`max-w-4xl mx-auto text-center mb-14`,children:[(0,F.jsxs)(`div`,{className:`\r
      inline-flex\r
      items-center\r
      gap-2\r
      px-4 py-2\r
      rounded-full\r
      border\r
      border-[#155A96]/10\r
      bg-[#155A96]/5\r
      text-[#155A96]\r
      text-sm\r
      font-medium\r
      mb-5\r
    `,children:[(0,F.jsx)(Ii,{size:16}),`Why Choose Balaji`]}),(0,F.jsx)(`h2`,{className:`\r
      text-3xl\r
      md:text-4xl\r
      font-bold\r
      text-[#071426]\r
      leading-tight\r
      mb-5\r
    `,children:`Trusted Expertise`}),(0,F.jsx)(`div`,{className:`\r
    w-20\r
    h-1\r
    bg-[#F0AE11]\r
    rounded-full\r
    mx-auto\r
    mt-5\r
    mb-6\r
  `})]}),(0,F.jsxs)(`div`,{className:`\r
      relative\r
      max-w-7xl\r
      mx-auto\r
      grid\r
      grid-cols-1\r
      lg:grid-cols-2\r
      gap-6 lg:gap-8\r
      items-center\r
    `,children:[(0,F.jsx)(`div`,{children:(0,F.jsxs)(`div`,{className:`space-y-4`,children:[(0,F.jsx)(`h3`,{className:`\r
      text-xl\r
      md:text-2xl\r
      lg:text-3xl\r
      font-semibold\r
      text-[#071426]\r
      leading-tight\r
      mb-4\r
    `,children:`Built on Experience. Driven by Results.`}),(0,F.jsx)(`p`,{className:`\r
      text-slate-600\r
      max-w-2xl\r
      mx-auto\r
      leading-8\r
    `,children:`Over two decades of experience delivering innovative Tally solutions.`}),[`Authorized Training Programs`,`TallyPrime Implementation`,`GST & Accounting Solutions`,`Dedicated Technical Support`].map(e=>(0,F.jsxs)(`div`,{className:`\r
              flex\r
              items-center\r
              gap-4\r
            `,children:[(0,F.jsx)(`div`,{className:`\r
                flex\r
                items-center\r
                justify-center\r
                w-7\r
                h-7\r
                rounded-full\r
                bg-[#155A96]\r
                shrink-0\r
              `,children:(0,F.jsx)(ur,{size:14,className:`text-white`})}),(0,F.jsx)(`span`,{className:`\r
                text-[#071426]\r
                font-medium\r
                text-lg\r
              `,children:e})]},e))]})}),(0,F.jsxs)(`div`,{className:`\r
        grid\r
        grid-cols-2\r
        gap-5\r
      `,children:[(0,F.jsxs)(`div`,{className:`\r
          bg-white\r
          border\r
          border-slate-200\r
          rounded-[28px]\r
          p-6\r
          shadow-sm\r
          hover:-translate-y-1\r
          hover:shadow-lg\r
          transition-all\r
          duration-300\r
        `,children:[(0,F.jsx)(`h3`,{className:`\r
            text-4xl\r
            font-bold\r
            text-[#155A96]\r
            text-center\r
          `,children:`500+`}),(0,F.jsx)(`p`,{className:`mt-3 text-center text-slate-500`,children:`Businesses Served`})]}),(0,F.jsxs)(`div`,{className:`\r
          bg-white\r
          border\r
          border-slate-200\r
          rounded-[28px]\r
          p-6\r
          shadow-sm\r
          hover:-translate-y-1\r
          hover:shadow-lg\r
          transition-all\r
          duration-300\r
        `,children:[(0,F.jsx)(`h3`,{className:`\r
            text-4xl\r
            font-bold\r
            text-center\r
            text-[#155A96]\r
          `,children:`20+`}),(0,F.jsx)(`p`,{className:`mt-3 text-center text-slate-500`,children:`Years Experience`})]}),(0,F.jsxs)(`div`,{className:`\r
          bg-white\r
          border\r
          border-slate-200\r
          rounded-[28px]\r
          p-6\r
          shadow-sm\r
          hover:-translate-y-1\r
          hover:shadow-lg\r
          transition-all\r
          duration-300\r
        `,children:[(0,F.jsx)(`h3`,{className:`\r
            text-4xl\r
            font-bold\r
            text-center\r
            text-[#155A96]\r
          `,children:`24/7`}),(0,F.jsx)(`p`,{className:`mt-3 text-center text-slate-500`,children:`Support Assistance`})]}),(0,F.jsxs)(`div`,{className:`\r
          bg-white\r
          border\r
          border-slate-200\r
          rounded-[28px]\r
          p-6\r
          shadow-sm\r
          hover:-translate-y-1\r
          hover:shadow-lg\r
          transition-all\r
          duration-300\r
        `,children:[(0,F.jsx)(`h3`,{className:`\r
            text-4xl\r
            text-center\r
            font-bold\r
            text-[#155A96]\r
          `,children:`100+`}),(0,F.jsx)(`p`,{className:`mt-3 text-center text-slate-500`,children:`Students Trained`})]})]})]})]}),!1,(0,F.jsx)(`section`,{className:`py-10 md:py-14 px-4 sm:px-6 bg-white`,children:(0,F.jsxs)(`div`,{className:`max-w-6xl mx-auto`,children:[(0,F.jsxs)(`div`,{className:`text-center max-w-4xl mx-auto mb-8`,children:[(0,F.jsxs)(`div`,{className:`\r
        inline-flex\r
        items-center\r
        gap-2\r
        px-4\r
        py-2\r
        rounded-full\r
        bg-[#155A96]/5\r
        border\r
        border-[#155A96]/10\r
        text-[#155A96]\r
        text-sm\r
        font-medium\r
        mb-5\r
      `,children:[(0,F.jsx)(ur,{size:16,className:`text-[#155A96]`}),`Trusted Tally Partner`]}),(0,F.jsx)(`h2`,{className:`\r
            text-3xl\r
            sm:text-4xl\r
            font-bold\r
            text-[#071426]\r
            leading-tight\r
            mb-5\r
          `,children:`About Balaji AI Infotech`}),(0,F.jsx)(`div`,{className:`\r
    w-20\r
    h-1\r
    bg-[#F0AE11]\r
    rounded-full\r
    mx-auto\r
    mt-5\r
    mb-6\r
  `})]}),(0,F.jsxs)(`div`,{className:`\r
    grid\r
    lg:grid-cols-[1fr_1fr]\r
    gap-10\r
    items-center\r
  `,children:[(0,F.jsx)(`div`,{children:(0,F.jsx)(`div`,{className:`\r
        overflow-hidden\r
        rounded-[32px]\r
        border\r
        border-slate-200\r
        \r
        shadow-sm\r
      `,children:(0,F.jsx)(`img`,{src:zv,alt:`About Balaji AI Infotech`,className:`\r
          w-full\r
          h-[460px]\r
          object-cover\r
          \r
        `})})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`\r
        text-3xl\r
        md:text-3xl\r
        font-semibold\r
        text-[#155A96]\r
        leading-tight\r
        mb-5\r
      `,children:`Your Trusted Tally Partner`}),(0,F.jsx)(`p`,{className:`\r
        text-slate-600\r
        leading-8\r
        text-lg\r
        mb-8\r
      `,children:`Since 2000, Balaji AI Infotech has been helping businesses streamline accounting, GST compliance, inventory management, payroll processing, and financial operations through trusted Tally solutions and certified training programs.`}),(0,F.jsx)(`div`,{className:`space-y-5 mt-8`,children:[`Tally Software Sales and Support`,`Tally API Service`,`Training and Consultation`,`Tally Customization`].map(e=>(0,F.jsxs)(`div`,{className:`\r
        flex\r
        items-center\r
        gap-3\r
        pb-3\r
        \r
      `,children:[(0,F.jsx)(`div`,{className:`\r
          w-8\r
          h-8\r
          rounded-xl\r
          bg-[#155A96]\r
          flex\r
          items-center\r
          justify-center\r
          shrink-0\r
        `,children:(0,F.jsx)(ur,{size:18,className:`text-white`})}),(0,F.jsx)(`h4`,{className:`\r
          text-xl\r
          font-semibold\r
          text-[#071426]\r
        `,children:e})]},e))})]})]})]})}),(0,F.jsxs)(`section`,{className:`relative py-10 md:py-14 bg-white overflow-hidden`,children:[(0,F.jsx)(`div`,{className:`\r
      absolute\r
      top-0\r
      left-1/2\r
      -translate-x-1/2\r
      w-[700px]\r
      h-[700px]\r
      rounded-full\r
      bg-[#155A96]/5\r
      blur-[140px]\r
    `}),(0,F.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 relative z-10`,children:[(0,F.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-12`,children:[(0,F.jsx)(`p`,{className:`\r
          text-[#155A96]\r
          uppercase\r
          tracking-[0.25em]\r
          text-sm\r
          font-semibold\r
          mb-4\r
        `,children:`Services`}),(0,F.jsx)(`h2`,{className:`\r
          text-3xl\r
          md:text-4xl\r
          font-bold\r
          text-[#071426]\r
          mb-5\r
        `,children:`Complete Tally Solutions`}),(0,F.jsx)(`p`,{className:`\r
          text-slate-600\r
          text-lg\r
          leading-relaxed\r
        `,children:`Everything your business needs—from implementation and cloud hosting to customization, training, and ongoing support.`})]}),(0,F.jsx)(`div`,{className:`\r
        flex\r
        gap-5\r
        overflow-x-auto\r
        snap-x\r
        snap-mandatory\r
        pb-3\r
        scrollbar-hide\r
      `,children:n.map((e,t)=>(0,F.jsxs)(Mn,{to:e.link,className:`\r
            min-w-[300px]\r
            md:min-w-[320px]\r
            max-w-[320px]\r
            snap-start\r
            shrink-0\r
            rounded-[28px]\r
            bg-[#F8FBFF]\r
            border\r
            border-slate-200\r
            overflow-hidden\r
            hover:-translate-y-1\r
            hover:shadow-xl\r
            transition-all\r
            duration-300\r
          `,children:[(0,F.jsx)(`div`,{className:`h-50 bg-[#F5F9FF] overflow-hidden`,children:(0,F.jsx)(`img`,{src:e.image,alt:e.title,className:`\r
                w-full\r
                h-full\r
                object-cover\r
                transition-transform\r
                duration-500\r
                hover:scale-105\r
              `})}),(0,F.jsxs)(`div`,{className:`p-5`,children:[(0,F.jsx)(`h3`,{className:`\r
                text-2xl\r
                font-bold\r
                text-[#071426]\r
                mb-3\r
              `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
                text-slate-600\r
                leading-relaxed\r
                mb-4\r
              `,children:e.description}),(0,F.jsx)(Mn,{to:e.link,className:`\r
              inline-flex\r
              items-center\r
              gap-2\r
              text-[#155A96]\r
              font-semibold\r
              hover:gap-3\r
              transition-all\r
              duration-300\r
            `,children:`Learn More →`})]})]},t))}),(0,F.jsx)(`div`,{className:`flex justify-center mt-4`,children:(0,F.jsx)(`div`,{className:`\r
          px-4\r
          py-2\r
          rounded-full\r
          bg-[#F0AE11]/10\r
          text-[#F0AE11]\r
          text-sm\r
          font-medium\r
        `,children:`← Scroll to explore services →`})})]})]}),(0,F.jsxs)(`section`,{className:`relative pt-4 pb-10 md:pt-6 md:pb-14 overflow-hidden bg-white`,children:[(0,F.jsx)(`div`,{className:`absolute top-20 left-10 w-72 h-72 bg-[#155A96]/8 blur-3xl rounded-full`}),(0,F.jsx)(`div`,{className:`absolute bottom-0 right-10 w-72 h-72 bg-[#F0AE11]/8 blur-3xl rounded-full`}),(0,F.jsxs)(`div`,{className:`max-w-6xl mx-auto px-4 sm:px-6 relative z-10`,children:[(0,F.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-8`,children:[(0,F.jsx)(`p`,{className:`\r
            text-[#155A96]\r
            uppercase\r
            tracking-[0.3em]\r
            text-sm\r
            font-semibold\r
            mb-4\r
          `,children:`PRODUCTS`}),(0,F.jsx)(`h2`,{className:`\r
              text-3xl\r
              md:text-4xl\r
              font-bold\r
              text-[#071426]\r
              leading-tight\r
              tracking-tight\r
            `,children:`Solutions Built For Your Business`}),(0,F.jsx)(`div`,{className:`\r
            w-20\r
            h-1\r
            bg-[#F0AE11]\r
            rounded-full\r
            mx-auto\r
            mt-5\r
            mb-6\r
          `}),(0,F.jsx)(`p`,{className:`\r
              mt-4\r
              text-[16px] md:text-[17px]\r
              text-slate-600\r
              leading-relaxed\r
            `,children:`Powerful Tally products designed to simplify accounting, automation, reporting, and business operations.`})]}),(0,F.jsx)(`div`,{className:`flex justify-center mb-8`,children:(0,F.jsx)(`div`,{className:`\r
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
            `,children:t.map(e=>(0,F.jsxs)(`button`,{onClick:()=>i(e),className:`
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

                  ${r.id===e.id?`bg-[#155A96] text-white shadow-lg`:`text-gray-500 hover:text-[#071426]`}
                `,children:[e.icon,e.label]},e.id))})}),(0,F.jsx)(`div`,{className:`\r
            relative\r
            rounded-[36px]\r
            border border-gray-200\r
            bg-white/80\r
            backdrop-blur-xl\r
            shadow-[0_10px_50px_rgba(0,0,0,0.06)]\r
            overflow-hidden\r
          `,children:(0,F.jsx)(pm,{mode:`wait`,children:(0,F.jsxs)($.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-30},transition:{duration:.45},className:`\r
                grid\r
                grid-cols-1\r
                lg:grid-cols-2\r
                gap-6 lg:gap-8\r
                items-center\r
                p-5 sm:p-6 md:p-8\r
              `,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`\r
                    text-xl\r
                    sm:text-2xl\r
                    md:text-2xl\r
                    font-bold\r
                    text-[#071426]\r
                    leading-tight\r
                    tracking-tight\r
                    mb-5\r
                  `,children:r.title}),(0,F.jsx)(`p`,{className:`\r
                    text-gray-500\r
                    text-[15px] md:text-[16px]\r
                    leading-relaxed\r
                    mb-6\r
                  `,children:r.description}),(0,F.jsx)(`div`,{className:`space-y-3 mb-6`,children:r.features.map((e,t)=>(0,F.jsxs)($.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:t*.08},className:`\r
                        flex\r
                        items-start\r
                        gap-3\r
                      `,children:[(0,F.jsx)(`div`,{className:`\r
                          w-6 h-6\r
                          rounded-full\r
                          bg-[#155A96]\r
                          flex\r
                          items-center\r
                          justify-center\r
                          mt-0.5\r
                          shrink-0\r
                        `,children:(0,F.jsx)(Or,{className:`w-3.5 h-3.5 text-white`})}),(0,F.jsx)(`span`,{className:`\r
                          text-gray-700\r
                          leading-relaxed\r
                        `,children:e})]},t))}),(0,F.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:(0,F.jsx)(`button`,{onClick:()=>e(`/products/${r.path}`),className:`\r
    inline-flex items-center justify-center\r
    px-5 py-3\r
rounded-xl\r
    bg-[#155A96]\r
    hover:bg-[#124C80]\r
    text-white\r
    font-medium\r
    shadow-lg\r
    hover:scale-[1.03]\r
    transition-all\r
    duration-300\r
  `,children:`Explore Features`})})]}),(0,F.jsxs)($.div,{className:`relative`,children:[(0,F.jsx)(`div`,{className:`\r
      absolute\r
      inset-0\r
      bg-[#155A96]/10\r
      blur-3xl\r
      rounded-full\r
      scale-90\r
    `}),(0,F.jsx)(`div`,{className:`\r
      relative\r
      h-[260px]\r
      sm:h-[340px]\r
      lg:h-[430px]\r
      rounded-[32px]\r
      overflow-hidden\r
      border border-gray-200\r
      shadow-[0_20px_60px_rgba(0,0,0,0.12)]\r
      bg-white\r
    `,children:(0,F.jsx)(`img`,{src:r.image,alt:r.label,className:`\r
        w-full\r
        h-full\r
        object-cover\r
      `})})]})]},r.id)})})]})]}),!1,(0,F.jsx)(`section`,{className:`py-10 lg:py-14 bg-[#F8FAFC]`,children:(0,F.jsx)(`div`,{className:`max-w-6xl mx-auto px-4 sm:px-6`,children:(0,F.jsxs)(`div`,{className:`\r
        bg-white\r
        rounded-[40px]\r
        border border-slate-200\r
        p-5 md:p-6\r
        shadow-sm\r
      `,children:[(0,F.jsxs)(`div`,{className:`grid lg:grid-cols-[1.2fr_0.8fr] gap-6`,children:[(0,F.jsxs)(`div`,{className:`relative`,children:[(0,F.jsx)(`div`,{className:`\r
              relative\r
              overflow-hidden\r
              rounded-[32px]\r
              h-[600px]\r
            `,children:(0,F.jsx)(`img`,{src:Bv,alt:`Client Success`,className:`\r
                w-full\r
                h-full\r
                object-cover\r
              `})}),(0,F.jsxs)(`div`,{className:`\r
              absolute\r
              top-0\r
              left-0\r
              bg-white\r
              px-8\r
              py-7\r
              max-w-[340px]\r
              rounded-tl-[30px]\r
              rounded-tr-[32px]\r
              rounded-br-[80px]\r
            `,children:[(0,F.jsxs)(`h2`,{className:`\r
                text-3xl\r
                font-bold\r
                text-[#071426]\r
                leading-tight\r
              `,children:[`Hear From Our`,(0,F.jsx)(`br`,{}),`Satisfied Clients`]}),(0,F.jsxs)(`div`,{className:`mt-5`,children:[(0,F.jsx)(`p`,{className:`text-[#155A96] font-semibold`,children:`Trusted By 500+ Businesses`}),(0,F.jsx)(`p`,{className:`text-slate-500 text-sm mt-1`,children:`Delivering Tally excellence since 2000.`})]})]})]}),(0,F.jsx)(`div`,{className:`flex flex-col gap-4`,children:[{name:`Rajesh Kumar`,role:`Manufacturing Business`,quote:`Excellent support during TallyPrime implementation. The team handled migration and training smoothly.`},{name:`Suresh Reddy`,role:`Retail Store Owner`,quote:`Quick GST setup and reliable technical assistance whenever required. Highly recommended.`},{name:`Anita Sharma`,role:`Accounting Professional`,quote:`The training programs were practical and easy to understand. Great experience overall.`}].map((e,t)=>(0,F.jsxs)(`div`,{className:`
              rounded-[28px]
              border
              p-3
              transition-all
              hover:shadow-md

              ${t===0?`
                    bg-[#155A96]
                    backdrop-blur-xl
                    border-white/20
                    shadow-[0_10px_40px_rgba(21,90,150,0.25)]
                  `:`
                    bg-[#FCFCFD]
                    border-slate-200
                  `}
            `,children:[t===0&&(0,F.jsx)(`div`,{className:`\r
                    absolute\r
                    inset-0\r
                    bg-gradient-to-br\r
                    from-white/10\r
                    via-transparent\r
                    to-transparent\r
                    pointer-events-none\r
                    rounded-[28px]\r
                  `}),(0,F.jsx)(`div`,{className:`
                  text-base mb-3
                  text-[#F0AE11]
                `,children:`★★★★★`}),(0,F.jsxs)(`p`,{className:`
                  leading-relaxed mb-3
                  ${t===0?`text-white/90`:`text-slate-600`}
                `,children:[`"`,e.quote,`"`]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{className:`
                    text-lg font-bold
                    ${t===0?`text-white`:`text-[#071426]`}
                  `,children:e.name}),(0,F.jsx)(`p`,{className:t===0?`text-white/70`:`text-slate-500`,children:e.role})]})]},t))})]}),(0,F.jsxs)(`div`,{className:`\r
          mt-4\r
          bg-[#155A96]\r
          rounded-[28px]\r
          px-5\r
          py-3\r
          flex\r
          flex-col\r
          md:flex-row\r
          items-center\r
          justify-between\r
          gap-4\r
        `,children:[(0,F.jsx)(`h3`,{className:`\r
            text-white\r
            text-2xl\r
            font-semibold\r
          `,children:`Ready To Simplify Your Business Operations?`}),(0,F.jsx)(`button`,{onClick:()=>e(`/contact`),className:`\r
            bg-white\r
            text-[#155A96]\r
            px-5\r
            py-3\r
            rounded-xl\r
            font-semibold\r
            hover:scale-105\r
            transition-all\r
          `,children:`Get Started`})]})]})})}),(0,F.jsx)(`section`,{className:` relative py-10 md:py-14 overflow-hidden bg-[#F8FAFC]`,children:(0,F.jsx)(`div`,{className:`max-w-6xl mx-auto px-4 sm:px-6 relative z-10`,children:(0,F.jsxs)(`div`,{className:`\r
            grid\r
            grid-cols-1\r
            lg:grid-cols-2\r
            gap-8 lg:gap-10\r
            items-center\r
          `,children:[(0,F.jsxs)($.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.7},viewport:{once:!0},children:[(0,F.jsxs)(`div`,{className:`\r
                inline-flex\r
                items-center\r
                gap-2\r
                px-4\r
                py-1.5\r
                mb-4\r
                text-sm\r
                rounded-full\r
                bg-[#155A96]/10\r
                border border-[#155A96]/20\r
                text-[#155A96]\r
                font-medium\r
                \r
              `,children:[(0,F.jsx)(ur,{className:`w-4 h-4`}),`Free Consultation`]}),(0,F.jsxs)(`h2`,{className:`\r
                text-3xl\r
                sm:text-4xl\r
                md:text-5xl\r
                font-bold\r
                text-[#071426]\r
                leading-tight\r
                mb-4\r
              `,children:[`Request A`,(0,F.jsxs)(`span`,{className:`text-[#155A96]`,children:[` `,`Quote`]})]}),(0,F.jsx)(`p`,{className:`\r
                text-sm sm:text-[15px]\r
                leading-7\r
                mb-6\r
                text-gray-600\r
                leading-relaxed\r
                max-w-lg\r
                mb-10\r
              `,children:`Let our certified Tally experts help you choose the right solution for your business operations, accounting workflows, and scalable growth.`}),(0,F.jsx)(`div`,{className:`space-y-3 mb-6`,children:[{icon:Ii,title:`Certified Tally Experts`},{icon:ti,title:`24/7 Technical Support`},{icon:gr,title:`Trusted By 500+ Businesses`}].map((e,t)=>(0,F.jsxs)($.div,{whileHover:{x:5},className:`\r
                    flex\r
                    items-center\r
                    gap-4\r
                  `,children:[(0,F.jsx)(`div`,{className:`\r
                      w-10\r
                      h-10\r
                      rounded-xl\r
                      flex\r
                      items-center\r
                      justify-center\r
                      bg-[#155A96]\r
                      shadow-lg\r
                    `,children:(0,F.jsx)(e.icon,{className:`w-4 h-4 text-white`})}),(0,F.jsx)(`p`,{className:`\r
                      text-sm sm:text-base\r
                      font-medium\r
                      text-[#071426]\r
                    `,children:e.title})]},t))})]}),(0,F.jsx)(Rv,{})]})})})]})},Qv=s(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?r(e):typeof define==`function`&&define.amd?define([`exports`],r):r((n=typeof globalThis<`u`?globalThis:n||self).countUp={})})(e,(function(e){var t=function(){return t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},t.apply(this,arguments)};e.CountUp=function(){function e(e,n,r){var i=this;this.endVal=n,this.options=r,this.version=`2.10.0`,this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:`,`,decimal:`.`,prefix:``,suffix:``,autoAnimate:!1,autoAnimateDelay:200,autoAnimateOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error=``,this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){i.startTime||=e;var t=e-i.startTime;i.remaining=i.duration-t,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(t,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(t,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(t/i.duration),i.frameVal=(i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal)?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),t<i.duration?i.rAF=requestAnimationFrame(i.count):i.finalEndVal===null?i.options.onCompleteCallback&&i.options.onCompleteCallback():i.update(i.finalEndVal)},this.formatNumber=function(e){var t,n,r,a,o=e<0?`-`:``;t=Math.abs(e).toFixed(i.options.decimalPlaces);var s=(t+=``).split(`.`);if(n=s[0],r=s.length>1?i.options.decimal+s[1]:``,i.options.useGrouping){a=``;for(var c=3,l=0,u=0,d=n.length;u<d;++u)i.options.useIndianSeparators&&u===4&&(c=2,l=1),u!==0&&l%c==0&&(a=i.options.separator+a),l++,a=n[d-u-1]+a;n=a}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]}))),o+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(e,t,n,r){return n*(1-2**(-10*e/r))*1024/1023+t},this.options=t(t({},this.defaults),r),this.options.enableScrollSpy&&(this.options.autoAnimate=!0),this.options.scrollSpyDelay!==void 0&&(this.options.autoAnimateDelay=this.options.scrollSpyDelay),this.options.scrollSpyOnce&&(this.options.autoAnimateOnce=!0),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.el=typeof e==`string`?document.getElementById(e):e,n??=this.parse(this.el.innerHTML),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===``&&(this.options.useGrouping=!1),this.el?this.printValue(this.startVal):this.error=`[CountUp] target is null or undefined`,typeof window<`u`&&this.options.autoAnimate&&(this.error||typeof IntersectionObserver>`u`?this.error?console.error(this.error,e):console.error(`IntersectionObserver is not supported by this browser`):this.setupObserver())}return e.prototype.setupObserver=function(){var t=this,n=e.observedElements.get(this.el);n&&n.unobserve(),e.observedElements.set(this.el,this),this.observer=new IntersectionObserver((function(e){for(var n=0,r=e;n<r.length;n++){var i=r[n];i.isIntersecting&&t.paused&&!t.once?(t.paused=!1,t.autoAnimateTimeout=setTimeout((function(){return t.start()}),t.options.autoAnimateDelay),t.options.autoAnimateOnce&&(t.once=!0,t.observer.disconnect())):i.isIntersecting||t.paused||(clearTimeout(t.autoAnimateTimeout),t.reset())}}),{threshold:0}),this.observer.observe(this.el)},e.prototype.unobserve=function(){var t;clearTimeout(this.autoAnimateTimeout),(t=this.observer)==null||t.disconnect(),e.observedElements.delete(this.el)},e.prototype.onDestroy=function(){clearTimeout(this.autoAnimateTimeout),cancelAnimationFrame(this.rAF),this.paused=!0,this.unobserve(),this.options.onCompleteCallback=null,this.options.onStartCallback=null},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration/=2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal===null?this.useEasing=this.options.useEasing:this.useEasing=!1},e.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){clearTimeout(this.autoAnimateTimeout),cancelAnimationFrame(this.rAF),this.paused=!0,this.once=!1,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal??this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){if(this.el){var t=this.formattingFn(e);this.options.plugin?.render?this.options.plugin.render(this.el,t):this.el.tagName===`INPUT`?this.el.value=t:this.el.tagName===`text`||this.el.tagName===`tspan`?this.el.textContent=t:this.el.innerHTML=t}},e.prototype.ensureNumber=function(e){return typeof e==`number`&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error=`[CountUp] invalid start or end value: ${e}`,null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e.prototype.parse=function(e){var t=function(e){return e.replace(/([.,'  ])/g,`\\$1`)},n=t(this.options.separator),r=t(this.options.decimal),i=e.replace(new RegExp(n,`g`),``).replace(new RegExp(r,`g`),`.`);return parseFloat(i)},e.observedElements=new WeakMap,e}()}))}));s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=p();Qv(),typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0?t.useLayoutEffect:t.useEffect}))();var $v=new Map,ey=new WeakMap,ty=0,ny;function ry(e){return e?ey.has(e)?ey.get(e):(ty+=1,ey.set(e,ty.toString()),ey.get(e)):`0`}function iy(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t===`root`?ry(e.root):e[t]}`).toString()}function ay(e){let t=iy(e),n=$v.get(t);if(!n){let r=new Map,i,a=new IntersectionObserver(t=>{t.forEach(t=>{let n=t.isIntersecting&&i.some(e=>t.intersectionRatio>=e);e.trackVisibility&&t.isVisible===void 0&&(t.isVisible=n),[...r.get(t.target)??[]].forEach(e=>{e(n,t)})})},e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},$v.set(t,n)}return n}function oy(e,t,n={},r=ny){if(window.IntersectionObserver===void 0&&r!==void 0){let i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold==`number`?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:i,observer:a,elements:o}=ay(n),s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(o.delete(e),a.unobserve(e)),o.size===0&&(a.disconnect(),$v.delete(i))}}w.Component;function sy({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:a,skip:o,initialInView:s,fallbackInView:c,onChange:l}={}){let[u,d]=w.useState(null),f=w.useRef(l),p=w.useRef(s),[m,h]=w.useState({inView:!!s,entry:void 0});f.current=l,w.useEffect(()=>{if(p.current===void 0&&(p.current=s),o||!u)return;let l;return l=oy(u,(e,t)=>{let n=p.current;p.current=e,!(n===void 0&&!e)&&(h({inView:e,entry:t}),f.current&&f.current(e,t),t.isIntersecting&&a&&l&&(l(),l=void 0))},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},c),()=>{l&&l()}},[Array.isArray(e)?e.toString():e,u,i,r,a,o,n,c,t]);let g=m.entry?.target,_=w.useRef(void 0);!u&&g&&!a&&!o&&_.current!==g&&(_.current=g,h({inView:!!s,entry:void 0}),p.current=s);let v=[d,m.inView,m.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}(`useInsertionEffect`in w?w.useInsertionEffect:void 0)??w.useLayoutEffect??w.useEffect;var cy=`/Balaji-Infotech/assets/about-hero-oohS97_j.png`;function ly({value:e,suffix:t=``}){let[n,r]=(0,w.useState)(0);return(0,w.useEffect)(()=>{let t=0,n=e/(1500/16),i=setInterval(()=>{t+=n,t>=e?(r(e),clearInterval(i)):r(Math.floor(t))},16);return()=>clearInterval(i)},[e]),(0,F.jsxs)(F.Fragment,{children:[n,t]})}function uy(){let e=pt(),{ref:t,inView:n}=sy({triggerOnce:!0,threshold:.3}),[r,i]=(0,w.useState)(0),a=[{icon:Bi,title:`Our Mission`,description:`Our mission is to provide tailored, efficient, and user-friendly Tally solutions that enhance operational efficiency, improve financial accuracy, and support sustainable business growth.`,chips:[`Efficiency`,`Accuracy`,`Growth`,`Support`,`Compliance`]},{icon:Br,title:`Our Vision`,description:`To be a leading provider of innovative Tally solutions recognized for excellence, customer satisfaction, and continuous improvement in financial management.`,chips:[`Innovation`,`Trust`,`Excellence`,`Leadership`,`Technology`]},{icon:Gr,title:`Our Goals`,description:`Deliver comprehensive Tally solutions that simplify accounting, inventory management, payroll processing, taxation, and compliance operations.`,chips:[`GST`,`Payroll`,`Inventory`,`Training`,`Automation`]}];return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`section`,{className:`\r
        relative\r
        overflow-hidden\r
        bg-white\r
        flex\r
        items-center\r
        lg:min-h-[70vh]\r
        pt-24\r
        sm:pt-28\r
        pb-10\r
        sm:pb-14\r
      `,children:[(0,F.jsxs)(`div`,{className:`absolute inset-0 overflow-hidden`,children:[(0,F.jsx)(`div`,{className:`\r
          absolute\r
          top-[-200px]\r
          right-[-100px]\r
          w-[700px]\r
          h-[700px]\r
          rounded-full\r
          bg-[#155A96]/10\r
          blur-3xl\r
        `}),(0,F.jsx)(`div`,{className:`\r
            absolute\r
            bottom-[-20%]\r
            right-[-10%]\r
            w-[500px]\r
            h-[500px]\r
            rounded-full\r
            bg-[#7B61FF]/10\r
            blur-3xl\r
          `})]}),(0,F.jsxs)(`div`,{className:`\r
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
        `,children:[(0,F.jsxs)($.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[(0,F.jsxs)(`div`,{className:`\r
              inline-flex\r
              items-center\r
              gap-2\r
              px-4\r
              py-2\r
              rounded-full\r
              bg-[#155A96]/8\r
              border-[#155A96]/15\r
              shadow-sm\r
              mb-6\r
            `,children:[(0,F.jsx)(Ii,{size:18,className:`text-[#155A96]`}),(0,F.jsx)(`span`,{className:`\r
                text-sm\r
                font-medium\r
                text-[#155A96]\r
              `,children:`Trusted Tally Solutions Partner`})]}),(0,F.jsxs)(`h1`,{className:`\r
              text-[30px]\r
              sm:text-4xl\r
              md:text-5xl\r
              lg:text-6xl\r
              font-bold\r
              leading-[1.05]\r
              tracking-[-2px]\r
              text-[#071426]\r
            `,children:[`20+ Years`,(0,F.jsx)(`br`,{}),(0,F.jsx)(`span`,{className:`\r
                text-[#155A96]\r
                bg-clip-text\r
                \r
              `,children:`of Excellence`}),(0,F.jsx)(`br`,{}),`in Tally Solutions`]}),(0,F.jsx)(`p`,{className:`\r
              mt-4 sm:mt-5\r
              leading-7\r
              text-[15px]\r
              md:text-[16px]\r
              leading-8\r
              sm:leading-9\r
              text-gray-600\r
              max-w-2xl\r
            `,children:`At Balaji Ai Infotech Pvt Ltd, we make it easier for businesses to manage their accounts and operations using Tally software. Since  2000, we have been helping businesses improve efficiency, manage accounts, track inventory, handle payroll, and meet tax compliance.`}),(0,F.jsxs)(`div`,{className:`\r
              flex\r
              flex-col\r
              sm:flex-row\r
              flex-wrap\r
              gap-4\r
              mt-6 sm:mt-8\r
            `,children:[(0,F.jsxs)(`button`,{onClick:()=>e(`/contact`),className:`\r
                group\r
                w-full\r
                sm:w-auto\r
                justify-center\r
                px-7\r
                py-4\r
                rounded-2xl\r
                bg-gradient-to-r\r
                bg-[#155A96]\r
                hover:bg-[#124A7C]\r
                text-white\r
                font-medium\r
                flex\r
                items-center\r
                gap-2\r
                transition-all\r
                duration-300\r
                hover:scale-[1.03]\r
                hover:shadow-[0_15px_35px_rgba(47,128,255,0.35)]\r
              `,children:[`Contact Us`,(0,F.jsx)(cr,{size:18,className:`\r
                  transition-transform\r
                  duration-300\r
                  group-hover:translate-x-1\r
                `})]}),(0,F.jsx)(`button`,{onClick:()=>e(`/services`),className:`\r
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
                hover:border-[#155A96]\r
                hover:text-[#155A96]\r
                hover:shadow-lg\r
              `,children:`Explore Services`})]})]}),(0,F.jsxs)($.div,{initial:{opacity:0,x:60},whileInView:{opacity:1,x:0},transition:{duration:.9},viewport:{once:!0},className:`relative`,children:[(0,F.jsx)(`div`,{className:`\r
              absolute\r
              inset-0\r
              bg-gradient-to-r\r
              from-[#2F80FF]/20\r
              to-[#7B61FF]/20\r
              blur-3xl\r
              rounded-full\r
              scale-90\r
            `}),(0,F.jsxs)(`div`,{className:`relative mt-4 lg:mt-0\r
              rounded-[28px]\r
              overflow-hidden\r
              border border-[#155A96]/10\r
              shadow-[0_20px_80px_rgba(0,0,0,0.12)]\r
              bg-white\r
            `,children:[(0,F.jsx)(`img`,{src:cy,alt:`About Balaji Infotech`,className:`\r
                w-full\r
                h-[240px]\r
                sm:h-[360px]\r
                lg:h-[460px]\r
                object-cover\r
              `}),(0,F.jsx)(`div`,{className:`absolute inset-0 bg-black/10`})]})]})]})]}),(0,F.jsx)(`section`,{ref:t,className:`relative z-28 -mt-12 lg:-mt-6`,children:(0,F.jsx)(`div`,{className:`max-w-5xl mx-auto px-4 sm:px-6`,children:(0,F.jsx)(`div`,{className:`\r
        bg-[#155A96]\r
        rounded-[24px]\r
        border border-white/10\r
        shadow-[0_15px_40px_rgba(21,90,150,0.18)]\r
        overflow-hidden\r
      `,children:(0,F.jsx)(`div`,{className:`\r
          grid\r
          grid-cols-2\r
          lg:grid-cols-4\r
        `,children:[{value:24,suffix:`+`,label:`Years Experience`,icon:yr},{value:1e3,suffix:`+`,label:`Happy Clients`,icon:Ki},{value:500,suffix:`+`,label:`Business Partners`,icon:gr},{value:99,suffix:`%`,label:`Customer Satisfaction`,icon:ur}].map((e,t)=>(0,F.jsxs)(`div`,{className:`\r
              relative\r
              px-5\r
              py-3 lg:py-4\r
              text-center\r
            `,children:[t!==3&&(0,F.jsx)(`div`,{className:`\r
                  hidden\r
                  lg:block\r
                  absolute\r
                  right-0\r
                  top-1/2\r
                  -translate-y-1/2\r
                  h-20\r
                  w-px\r
                  bg-white/10\r
                `}),(0,F.jsx)(`div`,{className:`\r
                w-8 h-8\r
                mx-auto\r
                mb-3\r
                rounded-2xl\r
                bg-white/10\r
                flex\r
                items-center\r
                justify-center\r
              `,children:(0,F.jsx)(e.icon,{className:`\r
                  w-5\r
                  h-5\r
                  text-[#F0AE11]\r
                `})}),(0,F.jsx)(`h3`,{className:`\r
                text-2xl lg:text-3xl\r
                font-bold\r
                text-white\r
                mb-2\r
              `,children:n&&(0,F.jsx)(ly,{value:e.value,suffix:e.suffix})}),(0,F.jsx)(`p`,{className:`\r
                text-white/80\r
                text-xs lg:text-sm\r
              `,children:e.label})]},t))})})})}),(0,F.jsxs)(`section`,{className:`relative py-10 lg:py-14 overflow-hidden`,children:[(0,F.jsx)(`div`,{className:`\r
      absolute\r
      top-1/2\r
      left-1/2\r
      -translate-x-1/2\r
      -translate-y-1/2\r
      w-[700px]\r
      h-[700px]\r
      rounded-full\r
      bg-[#155A96]/5\r
      blur-3xl\r
    `}),(0,F.jsxs)(`div`,{className:`max-w-6xl mx-auto px-4 sm:px-6 relative z-10`,children:[(0,F.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-10`,children:[(0,F.jsx)(`p`,{className:`\r
          text-[#155A96]\r
          font-semibold\r
          tracking-[0.25em]\r
          uppercase\r
          mb-4\r
        `,children:`Our Foundation`}),(0,F.jsx)(`h2`,{className:`\r
          text-3xl\r
          md:text-4xl\r
          font-bold\r
          text-[#071426]\r
          mb-4\r
        `,children:`Mission, Vision & Goals`}),(0,F.jsx)(`p`,{className:`\r
          text-[#5B6475]\r
          text-lg\r
          leading-relaxed\r
        `,children:`We empower businesses with reliable Tally solutions, enterprise support, and modern accounting systems designed for long-term growth.`})]}),(0,F.jsxs)(`div`,{className:`grid lg:grid-cols-[180px_1fr] gap-8 items-start`,children:[(0,F.jsx)(`div`,{className:`hidden lg:flex justify-center self-stretch`,children:(0,F.jsxs)(`div`,{className:`sticky top-32`,children:[(0,F.jsx)(`div`,{className:`\r
    absolute\r
    left-4\r
    top-8\r
    h-[320px]\r
    w-[2px]\r
    bg-slate-200\r
  `}),(0,F.jsx)(`div`,{className:`\r
    absolute\r
    left-4\r
    top-4\r
    w-[2px]\r
    bg-[#155A96]\r
    transition-all\r
    duration-500\r
  `,style:{height:r===0?`0px`:r===1?`210px`:`335px`}}),[`Mission`,`Vision`,`Goals`].map((e,t)=>(0,F.jsxs)(`div`,{onClick:()=>i(t),className:`
          relative
          flex
          items-start
          gap-4
          cursor-pointer
          z-10
          ${t===2?``:`pb-35`}
        `,children:[(0,F.jsx)(`div`,{className:`
            w-8
            h-8
            rounded-full
            flex
            items-center
            justify-center
            font-semibold
            z-10
            transition-all
            ${r>=t?`bg-[#155A96] text-white`:`bg-slate-200 text-slate-500`}
          `,children:t+1}),(0,F.jsx)(`div`,{children:(0,F.jsx)(`h4`,{className:`
              text-2xl
              font-bold
              transition-all
              ${r===t?`text-[#155A96]`:`text-slate-500`}
            `,children:e})})]},t))]})}),(0,F.jsx)(`div`,{className:`\r
        max-w-3xl\r
        mx-auto\r
        bg-white\r
        rounded-[32px]\r
        border\r
        border-slate-200\r
        p-5\r
        md:p-8\r
        shadow-[0_15px_50px_rgba(0,0,0,0.05)]\r
      `,children:(()=>{let e=a[r],t=e.icon;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-5 mb-5`,children:[(0,F.jsx)(`div`,{className:`\r
                  w-16 h-16\r
                  rounded-2xl\r
                  bg-[#155A96]\r
                  flex items-center justify-center\r
                  shrink-0\r
                `,children:(0,F.jsx)(t,{className:`w-8 h-8 text-white`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-[#155A96] font-medium`,children:`Foundation Pillar`}),(0,F.jsx)(`h3`,{className:`text-4xl font-bold text-[#071426]`,children:e.title}),(0,F.jsx)(`p`,{className:`\r
                    text-xl\r
                    font-medium\r
                    text-[#155A96]\r
                    mb-5\r
                  `,children:`Driving Business Growth Through Smarter Tally Solutions`})]})]}),(0,F.jsx)(`p`,{className:`\r
                text-[#5B6475]\r
                leading-8\r
                text-lg\r
                max-w-3xl\r
              `,children:e.description}),(0,F.jsx)(`div`,{className:`flex flex-wrap gap-3 mt-8`,children:e.chips.map((e,t)=>(0,F.jsx)(`div`,{className:`\r
                    px-4\r
                    py-2\r
                    rounded-full\r
                    bg-[#155A96]/10\r
                    text-[#155A96]\r
                    font-medium\r
                  `,children:e},t))}),(0,F.jsxs)(`div`,{className:`\r
                flex\r
                justify-between\r
                items-center\r
                mt-8\r
                pt-4\r
                border-t\r
                border-slate-200\r
              `,children:[(0,F.jsx)(`button`,{onClick:()=>i(Math.max(r-1,0)),disabled:r===0,className:`\r
                  text-slate-500\r
                  font-medium\r
                  disabled:opacity-30\r
                `,children:`← Previous`}),(0,F.jsx)(`button`,{onClick:()=>i(Math.min(r+1,2)),disabled:r===2,className:`\r
                  px-5\r
                  py-3\r
                  rounded-xl\r
                  bg-[#155A96]\r
                  text-white\r
                  font-medium\r
                  disabled:opacity-30\r
                `,children:`Next →`})]})]})})()})]})]})]}),(0,F.jsxs)(`section`,{className:`\r
    relative\r
    py-10\r
sm:py-12\r
md:py-14\r
    overflow-hidden\r
  `,children:[(0,F.jsx)(`div`,{className:`\r
      absolute\r
      top-1/2\r
      left-1/2\r
      -translate-x-1/2\r
      -translate-y-1/2\r
      w-[700px]\r
      h-[700px]\r
      bg-[#155A96]/8\r
      blur-3xl\r
      rounded-full\r
    `}),(0,F.jsxs)(`div`,{className:`max-w-6xl mx-auto px-4 sm:px-6 relative z-10`,children:[(0,F.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-10`,children:[(0,F.jsx)(`p`,{className:`\r
          text-[#155A96]\r
          font-semibold\r
          tracking-[0.25em]\r
          uppercase\r
          mb-4\r
        `,children:`Our Values`}),(0,F.jsx)(`h2`,{className:`\r
          text-3xl\r
          md:text-4xl\r
          font-bold\r
          text-[#0B1220]\r
          leading-tight\r
          mb-6\r
        `,children:`Business Objectives & Core Values`}),(0,F.jsx)(`p`,{className:`\r
          text-[16px]\r
          md:text-[17px]\r
          text-[#5B6475]\r
          leading-relaxed\r
        `,children:`We focus on innovation, reliability, customer success, and modern accounting solutions that help businesses grow efficiently.`})]}),(0,F.jsxs)(`div`,{className:`\r
        grid\r
        grid-cols-1\r
        md:grid-cols-2\r
        gap-6\r
      `,children:[(0,F.jsxs)($.div,{whileHover:{y:-6,boxShadow:`0 20px 50px rgba(21,90,150,0.12)`},transition:{duration:.3},className:`\r
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
          border border-slate-200\r
          hover:border-[#155A96]/30\r
          transition-all\r
          duration-300\r
          shadow-[0_15px_40px_rgba(0,0,0,0.05)]\r
        `,children:[(0,F.jsx)(`div`,{className:`\r
            min-w-[58px]\r
            h-[58px]\r
            rounded-2xl\r
            bg-[#155A96]\r
            flex\r
            items-center\r
            justify-center\r
            shadow-lg\r
          `,children:(0,F.jsx)(ur,{className:`w-6 h-6 text-white`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`\r
              text-xl\r
              font-semibold\r
              text-[#071426]\r
              mb-3\r
            `,children:`Industry-Certified Training`}),(0,F.jsx)(`p`,{className:`\r
              text-[#5B6475]\r
              leading-relaxed\r
              text-[15px]\r
            `,children:`We provide recognized Tally certification programs for students, professionals, and business owners.`})]})]}),(0,F.jsxs)($.div,{whileHover:{y:-6,boxShadow:`0 20px 50px rgba(21,90,150,0.12)`},transition:{duration:.3},className:`\r
          group\r
          flex\r
          gap-5\r
          items-start\r
          p-5\r
          rounded-[22px]\r
          bg-white/80\r
          backdrop-blur-xl\r
          border border-slate-200\r
          hover:border-[#155A96]/30\r
          transition-all\r
          duration-300\r
          shadow-[0_15px_40px_rgba(0,0,0,0.05)]\r
        `,children:[(0,F.jsx)(`div`,{className:`\r
            min-w-[58px]\r
            h-[58px]\r
            rounded-2xl\r
            bg-[#155A96]\r
            flex\r
            items-center\r
            justify-center\r
            shadow-lg\r
          `,children:(0,F.jsx)(Ki,{className:`w-6 h-6 text-white`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`\r
              text-lg\r
              font-semibold\r
              text-[#071426]\r
              mb-3\r
            `,children:`Customer-Centric Solutions`}),(0,F.jsx)(`p`,{className:`\r
              text-[#5B6475]\r
              leading-relaxed\r
              text-[15px]\r
            `,children:`We build scalable accounting and ERP solutions tailored for businesses of all sizes.`})]})]}),(0,F.jsxs)($.div,{whileHover:{y:-6,boxShadow:`0 20px 50px rgba(21,90,150,0.12)`},transition:{duration:.3},className:`\r
          group\r
          flex\r
          gap-5\r
          items-start\r
          p-7\r
          rounded-[28px]\r
          bg-white/80\r
          backdrop-blur-xl\r
          border border-slate-200\r
          hover:border-[#155A96]/30\r
          transition-all\r
          duration-300\r
          shadow-[0_15px_40px_rgba(0,0,0,0.05)]\r
        `,children:[(0,F.jsx)(`div`,{className:`\r
            min-w-[48px]\r
            h-[48px]\r
            rounded-2xl\r
            bg-[#155A96]\r
            flex\r
            items-center\r
            justify-center\r
            shadow-lg\r
          `,children:(0,F.jsx)(Nr,{className:`w-6 h-6 text-white`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`\r
              text-xl\r
              font-semibold\r
              text-[#071426]\r
              mb-3\r
            `,children:`Operational Efficiency`}),(0,F.jsx)(`p`,{className:`\r
              text-[#5B6475]\r
              leading-relaxed\r
              text-[15px]\r
            `,children:`We help organizations improve productivity, compliance, and financial accuracy through automation.`})]})]}),(0,F.jsxs)($.div,{whileHover:{y:-6,boxShadow:`0 20px 50px rgba(21,90,150,0.12)`},transition:{duration:.3},className:`\r
          group\r
          flex\r
          gap-5\r
          items-start\r
          p-7\r
          rounded-[28px]\r
          bg-white/80\r
          backdrop-blur-xl\r
          border border-slate-200\r
          hover:border-[#155A96]/30\r
          transition-all\r
          duration-300\r
          shadow-[0_15px_40px_rgba(0,0,0,0.05)]\r
        `,children:[(0,F.jsx)(`div`,{className:`\r
            min-w-[58px]\r
            h-[58px]\r
            rounded-2xl\r
            bg-[#155A96]\r
            flex\r
            items-center\r
            justify-center\r
            shadow-lg\r
          `,children:(0,F.jsx)(Ii,{className:`w-6 h-6 text-white`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`\r
              text-xl\r
              font-semibold\r
              text-[#071426]\r
              mb-3\r
            `,children:`Reliable Long-Term Support`}),(0,F.jsx)(`p`,{className:`\r
              text-[#5B6475]\r
              leading-relaxed\r
              text-[15px]\r
            `,children:`Our dedicated support ensures businesses receive continuous assistance and enterprise-grade reliability.`})]})]})]})]})]})]})}var dy=`/Balaji-Infotech/assets/products-hero-BRdbZqfx.png`;function fy(){return(0,F.jsxs)(F.Fragment,{children:[!1,(0,F.jsxs)(`section`,{className:`\r
    relative\r
    pt-24\r
    pb-10\r
    lg:pt-20\r
    lg:pb-12\r
    overflow-hidden\r
    bg-gradient-to-br\r
    from-slate-50\r
    via-white\r
    to-blue-50\r
  `,children:[(0,F.jsx)(`div`,{className:`\r
      absolute\r
      top-0\r
      left-1/2\r
      -translate-x-1/2\r
      w-[700px]\r
      h-[700px]\r
      bg-[#155A96]/10\r
      rounded-full\r
      blur-3xl\r
    `}),(0,F.jsx)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full`,children:(0,F.jsxs)(`div`,{className:`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`\r
            inline-flex\r
            items-center\r
            px-5\r
            py-2\r
            rounded-full\r
            bg-white\r
            border\r
            border-slate-200\r
            text-[#155A96]\r
            text-sm\r
            font-medium\r
            shadow-sm\r
          `,children:`Enterprise Tally Solutions`}),(0,F.jsxs)(`h1`,{className:`\r
            mt-5\r
            text-3xl sm:text-4xl lg:text-[44px]\r
            font-black\r
            leading-tight\r
            text-[#071426]\r
          `,children:[`Smart Tally Solutions`,(0,F.jsx)(`br`,{}),(0,F.jsx)(`span`,{className:`text-[#155A96]`,children:`For Modern Businesses`})]}),(0,F.jsx)(`p`,{className:`\r
            mt-4\r
            text-base lg:text-lg\r
            text-slate-600\r
            leading-8\r
            max-w-xl\r
          `,children:`Explore intelligent Tally solutions designed for accounting, automation, cloud infrastructure, business management and enterprise productivity.`}),(0,F.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-4 mt-8`,children:[(0,F.jsx)(`a`,{href:`#products`,className:`\r
              px-7\r
              py-3.5\r
              rounded-xl\r
              bg-[#155A96]\r
              text-white\r
              font-semibold\r
              shadow-lg\r
              hover:shadow-xl\r
              transition\r
            `,children:`Explore Products`}),(0,F.jsx)(`a`,{href:`tel:+919849431943`,children:(0,F.jsx)(`button`,{className:`\r
              px-7\r
              py-3.5\r
              rounded-xl\r
              border\r
              border-slate-300\r
              bg-white\r
              font-semibold\r
              hover:bg-slate-50\r
              transition\r
            `,children:`Book Free Demo`})})]}),(0,F.jsxs)(`div`,{className:`flex flex-wrap gap-8 mt-6`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`text-2xl font-bold text-[#071426]`,children:`5000+`}),(0,F.jsx)(`p`,{className:`text-slate-500 text-sm`,children:`Businesses Served`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`text-2xl font-bold text-[#071426]`,children:`15+`}),(0,F.jsx)(`p`,{className:`text-slate-500 text-sm`,children:`Years Experience`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`text-2xl font-bold text-[#071426]`,children:`24/7`}),(0,F.jsx)(`p`,{className:`text-slate-500 text-sm`,children:`Support`})]})]})]}),(0,F.jsxs)(`div`,{className:`relative flex justify-center items-center`,children:[(0,F.jsx)(`div`,{className:`\r
      absolute\r
      w-[550px]\r
      h-[550px]\r
      rounded-full\r
      bg-gradient-to-br\r
      from-[#155A96]/10\r
      to-[#2F80FF]/5\r
      blur-3xl\r
    `}),(0,F.jsx)(`div`,{className:`\r
      absolute\r
      w-[400px]\r
      h-[400px]\r
      rounded-full\r
      bg-[#155A96]/5\r
    `}),(0,F.jsx)(`img`,{src:dy,alt:`Tally Dashboard`,className:`\r
      relative\r
      z-10\r
      w-full\r
      max-w-[650px]\r
      object-contain\r
      drop-shadow-[0_40px_60px_rgba(0,0,0,0.15)]\r
    `})]})]})})]}),!1,(0,F.jsx)(`section`,{id:`products`,className:`relative py-16 bg-[#F8FAFC] overflow-hidden`,children:(0,F.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6`,children:[(0,F.jsxs)(`div`,{className:`text-center mb-16`,children:[(0,F.jsx)(`p`,{className:`text-[#155A96] font-semibold uppercase tracking-[0.25em] mb-4`,children:`Our Products`}),(0,F.jsx)(`h2`,{className:`text-4xl font-bold text-[#071426] mb-5`,children:`Smart Tally Solutions`}),(0,F.jsx)(`p`,{className:`max-w-3xl mx-auto text-lg text-slate-600`,children:`Powerful accounting, cloud and automation solutions designed to help businesses grow efficiently.`})]}),(0,F.jsxs)(Mn,{to:`/products/tallyprime`,className:`\r
        group\r
        grid\r
        lg:grid-cols-2\r
        gap-10\r
        items-center\r
        bg-white\r
        rounded-[32px]\r
        border border-slate-200\r
        overflow-hidden\r
        shadow-[0_20px_60px_rgba(0,0,0,0.06)]\r
        hover:-translate-y-1\r
        transition-all\r
      `,children:[(0,F.jsx)(`div`,{className:`bg-[#EDF4FB] p-10`,children:(0,F.jsx)(`img`,{src:qv,alt:`TallyPrime`,className:`\r
            w-full\r
            rounded-[28px]\r
            transition-transform\r
            duration-700\r
            group-hover:scale-105\r
          `})}),(0,F.jsxs)(`div`,{className:`p-10`,children:[(0,F.jsx)(`div`,{className:`\r
            inline-flex\r
            px-4\r
            py-2\r
            rounded-full\r
            bg-[#155A96]/10\r
            text-[#155A96]\r
            font-medium\r
            mb-5\r
          `,children:`Featured Product`}),(0,F.jsx)(`h3`,{className:`text-3xl font-bold text-[#071426] mb-4`,children:`TallyPrime`}),(0,F.jsx)(`p`,{className:`text-lg text-slate-600 leading-relaxed mb-6`,children:`Complete business accounting, GST compliance, inventory management and financial reporting in one powerful platform.`}),(0,F.jsx)(`div`,{className:`grid grid-cols-2 gap-4 mb-6`,children:[`GST Billing`,`Inventory`,`Accounting`,`Reports`].map(e=>(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsx)(`div`,{className:`w-2 h-2 rounded-full bg-[#155A96]`}),(0,F.jsx)(`span`,{children:e})]},e))}),(0,F.jsxs)(`div`,{className:`flex items-center gap-3 text-[#155A96] font-semibold`,children:[`Explore Product`,(0,F.jsx)(cr,{size:18})]})]})]}),(0,F.jsx)(`div`,{className:`grid md:grid-cols-3 gap-6 mt-10`,children:[{title:`TallyPrime Server`,image:Jv,route:`/products/tally-server`},{title:`TallyPrime on AWS`,image:Yv,route:`/products/aws`},{title:`Tally + WhatsApp`,image:Xv,route:`/products/whatsapp`}].map(e=>(0,F.jsxs)(Mn,{to:e.route,className:`\r
            group\r
            bg-white\r
            rounded-[28px]\r
            border\r
            border-slate-200\r
            overflow-hidden\r
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]\r
            hover:-translate-y-2\r
            hover:border-[#155A96]/30\r
            transition-all\r
          `,children:[(0,F.jsx)(`div`,{className:`bg-[#EDF4FB] p-6`,children:(0,F.jsx)(`img`,{src:e.image,alt:e.title,className:`\r
                w-full\r
                h-44\r
                object-cover\r
                rounded-2xl\r
                transition-transform\r
                duration-700\r
                group-hover:scale-105\r
              `})}),(0,F.jsxs)(`div`,{className:`p-6`,children:[(0,F.jsx)(`h3`,{className:`text-2xl font-bold text-[#071426] mb-3`,children:e.title}),(0,F.jsxs)(`div`,{className:`flex items-center gap-2 text-[#155A96] font-medium`,children:[`Explore`,(0,F.jsx)(cr,{size:16})]})]})]},e.title))})]})})]})}function py({plan:e,index:t}){let n=e.variants?.length>0,[r,i]=(0,w.useState)(e.variants?.[0]||null);return(0,w.useEffect)(()=>{i(e.variants?.[0]||null)},[e]),(0,F.jsxs)(`div`,{className:`
    relative flex flex-col
    rounded-[30px]
    border
    bg-white
    overflow-hidden
    transition-all duration-300
    hover:-translate-y-2
    hover:shadow-[0_20px_60px_rgba(17,120,212,0.12)]
    ${t===1?`border-[#155A96] shadow-[0_10px_40px_rgba(17,120,212,0.10)]`:`border-gray-200`}
  `,children:[(0,F.jsx)(`div`,{className:`
      h-[4px] w-full
      ${t===1?`bg-[#155A96]`:`bg-[#D6E6F5]`}
    `}),(0,F.jsxs)(`div`,{className:`p-8 flex flex-col h-full`,children:[(0,F.jsxs)(`div`,{className:`flex flex-col items-center text-center gap-4`,children:[(0,F.jsx)(`div`,{className:`w-14 h-14 rounded-2xl bg-[#EDF4FA] flex items-center justify-center shrink-0`,children:(0,F.jsx)(ai,{className:`w-7 h-7 text-[#155A96]`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`text-[24px] leading-[1.2] font-[800] text-[#0B132B]`,children:e.name}),(0,F.jsx)(`p`,{className:`mt-2 text-[15px] leading-[1.6] text-gray-500 max-w-[280px]`,children:e.subtitle}),e.description&&(0,F.jsx)(`p`,{className:`text-gray-500 text-sm leading-relaxed mt-5 max-w-[300px] mx-auto`,children:e.description})]})]}),n&&(0,F.jsx)(`div`,{className:`flex flex-wrap justify-center gap-2 mt-8`,children:e.variants?.map((e,t)=>(0,F.jsx)(`button`,{onClick:()=>i(e),className:`
              w-11 h-11 rounded-xl border
              text-[15px] font-semibold
              transition-all duration-300
              ${r?.pack===e.pack?`bg-[#155A96] text-white border-[#155A96]`:`border-[#155A96] text-[#155A96] hover:bg-[#155A96] hover:text-white`}
            `,children:e.pack},t))}),(0,F.jsxs)(`div`,{className:`mt-10 text-center`,children:[n&&(0,F.jsx)(`p`,{className:`text-[18px] text-gray-500 mb-4`,children:r?.packageName}),(0,F.jsxs)(`div`,{className:`flex items-end justify-center gap-2`,children:[(0,F.jsx)(`span`,{className:`text-[14px] font-semibold text-gray-500 mb-2`,children:`INR`}),(0,F.jsx)(`h2`,{className:`text-[30px] leading-none font-[900] text-[#0B132B]`,children:n?r?.price:e.price})]}),(0,F.jsxs)(`div`,{className:`flex items-center justify-center gap-2 mt-3 relative group`,children:[(0,F.jsxs)(`p`,{className:`text-gray-500 text-[15px]`,children:[`+18% GST (INR `,e.gst,`)`]}),(0,F.jsxs)(`div`,{className:`relative`,children:[(0,F.jsx)(ri,{size:16,className:`text-[#155A96] cursor-pointer`}),(0,F.jsxs)(`div`,{className:`\r
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
      `,children:[`Total Price: INR `,e.total]})]})]})]}),(n&&r||e.features)&&(0,F.jsx)(`div`,{className:`mt-4 space-y-4 flex-1 max-w-[260px] mx-auto`,children:(n?[r?.users,r?.cpu,r?.ram,r?.storage,r?.backup]:e.features)?.filter(Boolean).map((e,t)=>(0,F.jsxs)(`div`,{className:`flex items-center justify-start gap-3`,children:[(0,F.jsx)(`div`,{className:`w-8 h-8 rounded-full bg-[#EDF4FA] flex items-center justify-center shrink-0`,children:(0,F.jsx)(Cr,{className:`w-4 h-4 text-[#155A96]`})}),(0,F.jsx)(`span`,{className:`text-[15px] text-[#1E293B]`,children:e})]},t))}),(0,F.jsx)(`button`,{className:`
        mt-6 w-full h-[50px]
        rounded-[18px]
        text-[22px]
        font-[700]
        transition-all duration-300
        ${t===1?`bg-[#155A96] text-white hover:bg-[#1D6FB8]`:`bg-[#071426] text-white hover:bg-[#0D223C]`}
      `,children:`Buy Now`})]})]})}var my={tallyprime:{title:`TallyPrime`,subtitle:`Complete Business Accounting Solution`,icon:Lr,image:`https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop`,description:`TallyPrime helps businesses streamline accounting, inventory, GST compliance, payroll, invoicing, and financial reporting with a simplified and powerful interface.`,keyFeatures:[{tag:`Business Growth`,title:`Your Trusted Partner For Business Growth`,description:`Achieve your business goals effortlessly with TallyPrime, your ultimate growth companion. Designed to empower businesses with insightful decision-making, seamless accounting workflows, and advanced operational control.`,icon:Vi},{tag:`Cash Flow Management`,title:`Effortless Cash Flow Management`,description:`TallyPrime simplifies cash flow management with quick and hassle-free bill receivables and payables tracking, ensuring faster payments and better financial control. Monitor stock movement, access real-time insights, and make confident business decisions with ease.`,icon:Ji},{tag:`Business Efficiency`,title:`Boost Your Business Efficiency`,description:`TallyPrime accelerates your workflow by helping you manage tasks faster and more efficiently. Switch between reports, vouchers, and multiple companies seamlessly while gaining deeper operational insights through smart reporting tools.`,icon:Zi},{tag:`Tax Compliance`,title:`Simplified Tax Compliance`,description:`TallyPrime makes GST and tax compliance effortless with integrated tools for return filing, reconciliation, e-invoicing, and e-way bill generation. Stay compliant, reduce manual errors, and manage taxation confidently from a single platform.`,icon:Ii}],pricing:[{name:`Silver`,subtitle:`Single User Edition`,description:`Perfect for standalone businesses and individual systems.`,price:`22,500`,gst:`4,050`,total:`26,550`},{name:`Gold`,subtitle:`Unlimited Multi-User Edition`,description:`Ideal for businesses working across multiple systems on LAN.`,price:`67,500`,gst:`12,150`,total:`79,650`}],testimonials:[{name:`Sri Balaji Traders`,role:`Retail Business Owner`,review:`TallyPrime simplified our billing, GST filing, and inventory management. Our daily accounting workflow is now much faster and more organized.`},{name:`Venkateswara Agencies`,role:`Wholesale Distributor`,review:`The reports and stock tracking features in TallyPrime helped us manage multiple product categories without confusion.`},{name:`Sai Lakshmi Enterprises`,role:`Manufacturing Business`,review:`We moved from manual accounting to TallyPrime and saw immediate improvement in efficiency and financial accuracy.`}],cta:{badge:`Get Started Today`,title:`Simplify Your Business Accounting With TallyPrime`,description:`Manage billing, GST, inventory, banking, and accounting seamlessly with a powerful business management solution designed for growing businesses.`,primaryBtn:`Start Free Trial`,primaryLink:`#pricing`,secondaryBtn:`Talk To Expert`,secondaryLink:`tel:+919849431943`}},"tally-server":{title:`TallyPrime Server`,subtitle:`Enterprise Data Security & Performance`,icon:Mi,image:`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop`,description:`TallyPrime Server delivers centralized data management, enhanced security, high-speed performance, and reliable business continuity for growing enterprises.`,keyFeatures:[{icon:_i,tag:`High Concurrency`,title:`Advanced Concurrency For Smooth Business Operations`,description:`With TallyPrime Server, multiple users can effortlessly perform data-intensive operations simultaneously without any delays. Whether it’s loading companies, recording transactions, exporting reports, or taking backups, every activity is executed smoothly in a frictionless environment. This ensures optimal utilization of time and resources, allowing tasks to be completed faster and with greater efficiency.`},{icon:Ii,tag:`Advanced Security`,title:`Secured Operations With Permission-Based Control`,description:`TallyPrime Server ensures enterprise-grade data security with its robust permission-based architecture. Critical operations such as backup, restore, and data management are safeguarded with server-level permissions accessible only through proper authorization. This guarantees enhanced control over user access and ensures your business data remains secure, organized, and protected at all times.`},{icon:ur,tag:`System Reliability`,title:`Stay Productive With High System Reliability`,description:`TallyPrime Server delivers uninterrupted productivity by ensuring seamless access to reports and transactions even during backup processes. Any discrepancies are isolated at the client level, ensuring server operations remain unaffected. This reliability minimizes downtime, improves accuracy, and guarantees continuous business performance without disruption.`},{icon:br,tag:`Performance Optimization`,title:`Streamline Operations For Enhanced Business Performance`,description:`TallyPrime Server provides powerful monitoring capabilities that help businesses optimize workflows and track system activities efficiently. Authorized users can manage sessions, monitor active users, and even disconnect operations when necessary. This feature ensures better resource utilization, smoother workflows, and increased business productivity.`}],whyChooseCards:[{icon:Ki,title:`Scalable Multi-User Support`,description:`TallyPrime Server enables multiple users to work on the same data simultaneously without performance drops or interruptions. Perfect for growing businesses managing larger teams and expanding operations.`},{icon:Ii,title:`Enhanced Security & Data Control`,description:`With advanced server-level permissions and controlled access, TallyPrime Server keeps sensitive business data secure while giving administrators complete control over operations and backups.`},{icon:sr,title:`Zero Downtime Operations`,description:`Ensure uninterrupted business continuity with reliable access to reports, backups, and company data. TallyPrime Server minimizes downtime and keeps workflows running smoothly at all times.`}],testimonials:[{name:`RK Group Of Companies`,role:`Multi-Branch Business`,review:`TallyPrime Server improved our multi-user performance significantly. Teams can now work simultaneously without slowdowns.`},{name:`Sree Durga Industries`,role:`Manufacturing Company`,review:`The security controls and uninterrupted access made TallyPrime Server the perfect solution for our growing operations.`},{name:`Navya Distributors`,role:`Distribution Network`,review:`Data reliability and server stability helped us avoid downtime and maintain smooth business operations every day.`}],cta:{badge:`Scale With Confidence`,title:`Power Your Team With TallyPrime Server`,description:`Enable secure multi-user collaboration, centralized data access, and uninterrupted business operations with TallyPrime Server.`,primaryBtn:`Request Demo`,primaryLink:`tel:+919849431943`,secondaryBtn:`Contact Sales`,secondaryLink:`/contact`}},aws:{title:`TallyPrime Powered by AWS`,subtitle:`Secure Cloud Accounting Infrastructure`,icon:Fr,image:Yv,description:`Run TallyPrime securely on AWS cloud with anywhere access, automatic backups, enterprise-grade infrastructure, and seamless remote collaboration.`,keyFeatures:[{icon:Xr,tag:`Remote Accessibility`,title:`Effortless Access To TallyPrime, Anytime, Anywhere`,description:`TallyPrime powered by AWS allows you to securely access your business data from anywhere through web browsers or virtual clients. Whether you're working remotely, traveling, or managing multiple offices, your operations stay connected and uninterrupted. Experience seamless accessibility with enterprise-grade AWS reliability and security.`},{icon:Ii,tag:`Advanced Security`,title:`Dual-Layer Security For Your Peace Of Mind`,description:`Protect your business data with dual-factor authentication powered by AWS. TallyPrime combines Tally.NET credentials with Secure PIN protection to ensure only authorized users can access your system. With advanced cloud security and encrypted access, your operations remain safe, protected, and fully under your control.`},{icon:Ni,tag:`Self-Service Portal`,title:`Empower Your Workspace With The Self-Service Portal (SSP)`,description:`Manage users, systems, and backups effortlessly through the intuitive Self-Service Portal. Designed for flexibility and control, SSP allows businesses to monitor and manage virtual workspaces with ease. Simplify administrative operations while improving efficiency and user management from a single platform.`},{icon:Ir,tag:`Data Protection`,title:`Secure And Effortless Data Backup And Recovery`,description:`Never worry about losing critical business data again. TallyPrime powered by AWS automatically secures backups in the cloud with enhanced encryption and reliable recovery options. Access and restore your data quickly whenever needed while ensuring business continuity without disruptions.`},{icon:Fi,tag:`Controlled Sharing`,title:`Precise Data Sharing With Enhanced Control`,description:`Control how your business data is shared with selective access permissions. Administrators can define who can access, restrict, or manage specific information in TallyPrime. This feature improves confidentiality, enhances collaboration, and gives businesses complete control over sensitive data.`},{icon:Oi,tag:`Easy Upgrades`,title:`Seamless Upgrades For A Dynamic Experience`,description:`Stay ahead with effortless upgrades and instant access to the latest TallyPrime features. Businesses can switch between versions smoothly without technical complexity or downtime. AWS-powered infrastructure ensures updates are reliable, fast, and optimized for business growth.`},{icon:Yi,tag:`Application Integration`,title:`Enhance Efficiency With Seamless Application Integration`,description:`Integrate third-party applications with TallyPrime effortlessly to streamline business operations and improve workflow efficiency. Share data securely between systems, automate processes, and unlock greater operational flexibility through robust integration capabilities powered by AWS.`},{icon:Vi,tag:`Scalable Growth`,title:`Affordable, Scalable Solutions For Growing Businesses`,description:`Scale your business confidently with flexible and cost-effective AWS-powered solutions. TallyPrime adapts to your evolving operational needs while maintaining high performance and reliability. Designed for growing businesses, it provides enterprise-grade capabilities without increasing complexity.`},{icon:mr,tag:`Productivity Suite`,title:`Integrated Productivity Tools At Your Fingertips`,description:`Boost productivity with built-in tools that simplify document management, collaboration, and daily business tasks. TallyPrime powered by AWS creates a fully integrated virtual workspace where users can manage operations efficiently without switching between multiple platforms.`}],pricing:[{name:`Personal And Regular Pack`,subtitle:`TallyPrime latest release pre-installed`,packageName:`Personal Pack`,variants:[{pack:1,packageName:`Personal Pack`,price:`600`,gst:`108`,total:`708`,users:`Upto 1 User`,cpu:`2 vCPU`,ram:`4 GB RAM`,storage:`5 GB Storage`,backup:`5 GB Backup Storage`},{pack:2,packageName:`Regular Pack`,price:`600`,users:`Upto 2 Users`,cpu:`2 vCPU`,ram:`4 GB RAM`,storage:`5 GB Storage`,backup:`5 GB Backup Storage`},{pack:4,packageName:`Regular-Plus Pack`,price:`450`,users:`Upto 4 Users`,cpu:`2 vCPU`,ram:`8 GB RAM`,storage:`10 GB Storage`,backup:`10 GB Backup Storage`},{pack:8,packageName:`Regular-Plus Pack`,price:`450`,users:`Upto 8 Users`,cpu:`4 vCPU`,ram:`16 GB RAM`,storage:`20 GB Storage`,backup:`20 GB Backup Storage`},{pack:12,packageName:`Performance Pack`,price:`450`,users:`Upto 12 Users`,cpu:`8 vCPU`,ram:`32 GB RAM`,storage:`40 GB Storage`,backup:`40 GB Backup Storage`},{pack:16,packageName:`Performance-Plus Pack`,price:`450`,users:`Upto 16 Users`,cpu:`8 vCPU`,ram:`32 GB RAM`,storage:`40 GB Storage`,backup:`40 GB Backup Storage`}]},{name:`TallyPrime + TallyPrime Server Pack `,subtitle:`TallyPrime and TallyPrime Server latest release pre-installed`,packageName:`TPSPerformance Pack`,variants:[{pack:8,packageName:`TPSPerformance Pack`,price:`750`,users:`Upto 8 User`,cpu:`8 vCPU`,ram:`16 GB RAM`,storage:`20 GB Storage`,backup:`20 GB Backup Storage`},{pack:12,packageName:`TPSPerformanceMax Pack`,price:`750`,users:`Upto 12 Users`,cpu:`6 vCPU`,ram:`32 GB RAM`,storage:`40 GB Storage`,backup:`40 GB Backup Storage`},{pack:16,packageName:`TPSPerformance-Plus Pack`,price:`750`,users:`Upto 16 Users`,cpu:`6 vCPU`,ram:`32 GB RAM`,storage:`40 GB Storage`,backup:`40 GB Backup Storage`},{pack:24,packageName:`TPSPerformance-MaxPlus Pack`,price:`750`,users:`Upto 24 Users`,cpu:`32 vCPU`,ram:`64 GB RAM`,storage:`50 GB Storage`,backup:`50 GB Backup Storage`},{pack:32,packageName:`TPSPerformance-Pro Pack`,price:`750`,users:`Upto 32 Users`,cpu:`32 vCPU`,ram:`64 GB RAM`,storage:`80 GB Storage`,backup:`80 GB Backup Storage`}]},{name:`Enterprises Pack`,subtitle:`TallyPrime and TallyPrime Server latest release pre-installed`,packageName:`TPSEnterprise Pack`,variants:[{pack:48,packageName:`TPSEnterprise Pack`,price:`750`,users:`Upto 48 Users`,cpu:`48 vCPU`,ram:`96 GB RAM`,storage:`100 GB Storage`,backup:`100 GB Backup Storage`},{pack:64,packageName:`TPSEnterprise Pack`,price:`750`,users:`Upto 64 Users`,cpu:`64 vCPU`,ram:`128 GB RAM`,storage:`100 GB Storage`,backup:`100 GB Backup Storage`},{pack:96,packageName:`TPSEnterprise-MaxPlus Pack`,price:`750`,users:`Upto 96 Users`,cpu:`96 vCPU`,ram:`192 GB RAM`,storage:`100 GB Storage`,backup:`100 GB Backup Storage`},{pack:128,packageName:`TPSEnterprise-MaxPlus Pack`,price:`750`,users:`Upto 128 Users`,cpu:`128 vCPU`,ram:`256 GB RAM`,storage:`100 GB Storage`,backup:`100 GB Backup Storage`}]}],whyChooseCards:[{icon:Xr,title:`Secure Anytime Access`,description:`Access your TallyPrime data 24/7 from anywhere with AWS’s secure and reliable cloud infrastructure.`},{icon:Ki,title:`Seamless Collaboration`,description:`Enable multiple users to work on the same business data in real-time with smooth and uninterrupted collaboration.`},{icon:Vi,title:`Scalability For Growth`,description:`Scale your business operations effortlessly with flexible AWS-powered plans designed for businesses of all sizes.`}],testimonials:[{name:`Aadhya Retail Solutions`,role:`Retail Chain`,review:`With TallyPrime on AWS, our team can securely access accounting data from anywhere without depending on local systems.`},{name:`Global Tech Services`,role:`Remote Operations Team`,review:`The cloud infrastructure and automatic scalability helped us expand operations without worrying about performance.`},{name:`MNR Enterprises`,role:`Enterprise Business`,review:`AWS integration gave us better backup reliability, remote collaboration, and uninterrupted access to TallyPrime.`}],cta:{badge:`Cloud Accounting Simplified`,title:`Access TallyPrime Anywhere With AWS Cloud`,description:`Run TallyPrime securely on AWS cloud infrastructure with scalable performance, remote accessibility, and enterprise-grade reliability.`,primaryBtn:`Get Started`,primaryLink:`#pricing`,secondaryBtn:`Talk To Expert`,secondaryLink:`tel:+919849431943`}},whatsapp:{title:`TallyPrime with WhatsApp`,subtitle:`Smart Business Communication Automation`,icon:gi,image:`https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1600&auto=format&fit=crop`,description:`Integrate WhatsApp with TallyPrime to instantly send invoices, payment reminders, statements, and customer updates directly from your business workflow.`,keyFeatures:[{icon:hi,tag:`Instant Sharing`,title:`Instant Document Sharing Made Simple`,description:`Share invoices, reports, orders, payment reminders, and business documents instantly through WhatsApp with just a single click. Improve communication speed, reduce manual effort, and deliver a smoother customer experience with real-time document delivery.`},{icon:Gi,tag:`Bulk Communication`,title:`Streamlined Bulk Communication`,description:`Connect with multiple customers simultaneously by sharing documents, updates, and notifications in bulk through WhatsApp. Save time, simplify customer outreach, and manage large-scale communication more efficiently from within TallyPrime.`},{icon:Jr,tag:`Flexible Formats`,title:`Versatile Document Sharing`,description:`Easily share business documents in multiple formats including PDF, JPEG, and Excel. Provide customers and teams with the flexibility to access files in the format most convenient for them while maintaining seamless communication workflows.`},{icon:wi,tag:`Payment Collection`,title:`Simplify Invoicing And Payment Collection`,description:`Speed up payment collection by sending invoices directly through WhatsApp with embedded payment links and QR codes. Help customers make payments quickly while reducing delays and improving cash flow management for your business.`},{icon:oi,tag:`Message Templates`,title:`Pre-Designed Message Templates`,description:`Choose from professionally designed and ready-to-use WhatsApp templates for invoices, reminders, confirmations, and customer communication. Deliver consistent and personalized messages while reducing manual typing and repetitive tasks.`},{icon:ni,tag:`Centralized Inbox`,title:`Centralized WhatsApp Inbox`,description:`Manage customer conversations and business communications effortlessly through a dedicated centralized WhatsApp inbox. Keep track of messages, improve response management, and maintain organized communication from a single place.`}],pricing:[{name:`Recharge Wallet`,subtitle:`Get your wallet recharged to continue uninterrupted messaging experience anytime, using WhatsApp for your Business.`,variants:[{pack:`675`,packageName:`Recharge`,price:`675`,gst:`121`,total:`796`,validity:`Flexible Usage`,support:`WhatsApp Messaging`,access:`Business Communication`,updates:`Instant Wallet Recharge`},{pack:`2700`,packageName:`Recharge`,price:`2700`,gst:`486`,total:`3186`}]},{name:`Renew Subscription`,subtitle:`Engage with your parties uninterrupted with an active WhatsApp for Business subscription.`,variants:[{pack:`Yearly`,packageName:`Recharge`,price:`1300`,gst:`234`,total:`1534`}]}],testimonials:[{name:`Karthik Fashions`,role:`Retail Store`,review:`Sending invoices and payment reminders through WhatsApp improved customer communication and reduced follow-up time.`},{name:`Vasavi Electronics`,role:`Electronics Distributor`,review:`TallyPrime with WhatsApp helped us instantly connect with customers and share order updates professionally.`},{name:`Srinidhi Mobiles`,role:`Mobile Accessories Business`,review:`The WhatsApp integration made customer engagement easier and helped us improve response time and service quality.`}],cta:{badge:`Automate Business Communication`,title:`Connect TallyPrime With WhatsApp Instantly`,description:`Send invoices, payment reminders, notifications, and customer updates directly through WhatsApp using TallyPrime integration.`,primaryBtn:`Activate WhatsApp`,primaryLink:`#pricing`,secondaryBtn:`Schedule Demo`,secondaryLink:`tel:+919849431943`}}};function hy(){let{slug:e}=ht(),[t,n]=(0,w.useState)(null),[r,i]=(0,w.useState)(0),a=my[e];a?.pricing;let o=a.icon;return a?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`section`,{className:`\r
          relative\r
          overflow-hidden\r
          pt-20\r
          sm:pt-24\r
          md:pt-28\r
\r
          pb-10\r
          sm:pb-12\r
          md:pb-16\r
          bg-[#F5F7FF]\r
        `,children:(0,F.jsx)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 relative z-10`,children:(0,F.jsxs)(`div`,{className:`\r
              grid\r
              lg:grid-cols-2\r
              gap-6\r
              lg:gap-10\r
              lg:gap-16\r
              items-center\r
            `,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`\r
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
                  mb-5\r
                `,children:[(0,F.jsx)(`div`,{className:`\r
                    w-6\r
                    h-6\r
                    sm:w-12\r
                    sm:h-12\r
                    rounded-2xl\r
                    bg-[#155A96]\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-white\r
                  `,children:(0,F.jsx)(o,{size:20})}),(0,F.jsx)(`span`,{className:`\r
                    text-[#071426]\r
                    font-semibold\r
                    text-[15px]\r
                    sm:text-lg\r
                  `,children:a.title})]}),(0,F.jsx)(`p`,{className:`\r
                  text-[#155A96]\r
                  font-semibold\r
                  uppercase\r
                  tracking-[0.2em]\r
                  mb-3\r
                `,children:`Professional Tally Solution`}),(0,F.jsx)(`h1`,{className:`\r
                  text-[28px]\r
                  sm:text-[36px]\r
                  md:text-[40px]\r
                  font-black\r
                  leading-tight\r
                  text-[#111827]\r
                  mb-4\r
                `,children:a.subtitle}),(0,F.jsx)(`p`,{className:`\r
                  text-[15px]\r
                  sm:text-base\r
                  md:text-lg\r
                  leading-relaxed\r
                  text-[#6B7280]\r
                  mb-6\r
                  max-w-xl\r
                `,children:a.description}),(0,F.jsxs)(`div`,{className:`flex flex-col sm:flex-row sm:flex-wrap gap-4`,children:[(0,F.jsx)(`a`,{href:`tel:+919849431943`,children:(0,F.jsx)(`button`,{className:`\r
                    px-6\r
                    sm:px-8\r
                    py-4\r
                    rounded-2xl\r
                    bg-[#155A96]\r
                    hover:bg-[#124A7C]\r
                    text-white\r
                    font-semibold\r
                    shadow-lg\r
                    hover:scale-105\r
                    transition-all\r
                    duration-300\r
                  `,children:`Request Demo`})}),(0,F.jsx)(Mn,{to:`/products`,className:`\r
                    px-8\r
                    py-4\r
                    rounded-2xl\r
                    border\r
                    border-[#D1D5DB]\r
                    bg-white\r
                    text-[#111827]\r
                    font-semibold\r
                    hover:border-[#155A96]\r
                    hover:text-[#155A96]\r
                    transition-all\r
                    duration-300\r
                  `,children:`Back to Products`})]})]}),(0,F.jsxs)(`div`,{className:`relative`,children:[(0,F.jsx)(`div`,{className:`\r
                  absolute\r
                  inset-0\r
                  bg-[#155A96]/10\r
                  blur-3xl\r
                  rounded-[40px]\r
                `}),(0,F.jsx)(`div`,{className:`\r
                  relative\r
                  overflow-hidden\r
                  rounded-[24px]\r
                  sm:rounded-[32px]\r
                  border\r
                  border-white/40\r
                  bg-[#EDF4FB]\r
                  shadow-[0_20px_80px_rgba(0,0,0,0.12)]\r
                `,children:(0,F.jsx)(`img`,{src:a.image,alt:a.title,className:`\r
                    w-full\r
                    h-[200px]\r
                    sm:h-[300px]\r
                    lg:h-[380px]\r
                    object-cover\r
                  `})})]})]})})}),(0,F.jsx)(`section`,{className:`relative py-10 sm:py-12 md:py-16 bg-white overflow-hidden`,children:(0,F.jsxs)(`div`,{className:`max-w-6xl mx-auto px-4 sm:px-6 relative z-10`,children:[(0,F.jsxs)(`div`,{className:`text-center mb-12`,children:[(0,F.jsx)(`p`,{className:`\r
                text-[#155A96]\r
                font-semibold\r
                uppercase\r
                tracking-[0.2em]\r
                mb-4\r
              `,children:`Key Features`}),(0,F.jsx)(`h2`,{className:`\r
                text-[28px]\r
                sm:text-[34px]\r
                md:text-[40px]\r
                font-black\r
                text-[#111827]\r
                mb-6\r
              `,children:`Powerful Features Designed For Business Growth`}),(0,F.jsx)(`p`,{className:`\r
                text-[15px]\r
                sm:text-lg\r
                text-[#6B7280]\r
                leading-relaxed\r
                max-w-3xl\r
                mx-auto\r
              `,children:`Discover enterprise-grade capabilities that simplify accounting, improve productivity, and help businesses operate more efficiently.`})]}),(0,F.jsxs)(`div`,{className:`\r
    grid\r
    lg:grid-cols-[320px_1fr]\r
    gap-8\r
    lg:gap-12\r
    items-start\r
  `,children:[(0,F.jsxs)(`div`,{className:`lg:sticky lg:top-32`,children:[(0,F.jsx)(`p`,{className:`\r
        text-[#155A96]\r
        font-semibold\r
        uppercase\r
        tracking-[0.25em]\r
        mb-4\r
      `,children:`Capabilities`}),(0,F.jsxs)(`h3`,{className:`\r
        text-3xl\r
        md:text-4xl\r
        font-bold\r
        text-[#071426]\r
        leading-tight\r
        mb-5\r
      `,children:[`What Makes`,(0,F.jsx)(`br`,{}),a.title,(0,F.jsx)(`br`,{}),`Powerful?`]}),(0,F.jsx)(`p`,{className:`\r
        text-[#64748B]\r
        leading-relaxed\r
        max-w-sm\r
      `,children:`Explore the key capabilities that help businesses simplify operations, improve productivity, and accelerate growth.`})]}),(0,F.jsx)(`div`,{className:`\r
      flex\r
      gap-5\r
      overflow-x-auto\r
      pb-4\r
      snap-x\r
      snap-mandatory\r
      scrollbar-hide\r
    `,children:a.keyFeatures.map((e,r)=>{let i=e.icon;return(0,F.jsxs)(`div`,{className:`\r
            snap-start\r
            min-w-[300px]\r
            sm:min-w-[340px]\r
            lg:min-w-[380px]\r
\r
            bg-white\r
            border\r
            border-[#E5E7EB]\r
            rounded-[32px]\r
\r
            p-6\r
\r
            hover:-translate-y-2\r
            hover:border-[#155A96]/20\r
            hover:shadow-[0_20px_60px_rgba(21,90,150,0.08)]\r
\r
            transition-all\r
            duration-300\r
\r
            relative\r
            overflow-hidden\r
          `,children:[(0,F.jsx)(`div`,{className:`\r
              absolute\r
              top-4\r
              right-6\r
\r
              text-7xl\r
              font-black\r
              text-[#155A96]/10\r
              select-none\r
            `,children:String(r+1).padStart(2,`0`)}),(0,F.jsx)(`div`,{className:`\r
              w-12\r
              h-12\r
              rounded-2xl\r
\r
              bg-[#155A96]\r
\r
              flex\r
              items-center\r
              justify-center\r
\r
              text-white\r
\r
              mb-8\r
            `,children:(0,F.jsx)(i,{size:24})}),(0,F.jsx)(`h4`,{className:`\r
              text-xl\r
              font-semibold\r
              text-[#071426]\r
              mb-4\r
              leading-tight\r
              max-w-[220px]\r
            `,children:e.title}),(0,F.jsx)(`p`,{className:`text-[#64748B] leading-relaxed mb-4`,children:t===r?e.description:`${e.description.slice(0,90)}...`}),(0,F.jsxs)(`button`,{onClick:()=>n(t===r?null:r),className:`\r
            flex\r
            items-center\r
            gap-2\r
            text-[#155A96]\r
            font-semibold\r
            hover:gap-3\r
            transition-all\r
          `,children:[t===r?`Show Less`:`Learn More`,t===r?(0,F.jsx)(Er,{size:18}):(0,F.jsx)(Tr,{size:18})]})]},r)})})]})]})}),!1,a?.whyChooseCards?.length>0&&(0,F.jsx)(`section`,{className:`relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 overflow-hidden bg-[#F7FAFF]`,children:(0,F.jsxs)(`div`,{className:`relative max-w-7xl mx-auto`,children:[(0,F.jsxs)(`div`,{className:`text-center max-w-4xl mx-auto mb-10 md:mb-12`,children:[(0,F.jsx)(`p`,{className:`text-[#155A96] font-semibold uppercase tracking-[0.25em] mb-4`,children:`Why Choose`}),(0,F.jsxs)(`h2`,{className:`text-[28px]\r
sm:text-[38px]\r
md:text-[40px] font-bold leading-tight text-[#0B132B]`,children:[`Why Businesses Choose`,` `,(0,F.jsx)(`span`,{className:`text-[#155A96]`,children:a.title})]}),(0,F.jsx)(`p`,{className:`mt-4 text-base md:text-lg text-[#5B6475] leading-relaxed`,children:`Built for growing businesses that need speed, security, multi-user efficiency, and uninterrupted access to critical data.`})]}),(0,F.jsx)(`div`,{className:`max-w-5xl mx-auto`,children:a.whyChooseCards.map((e,t)=>{let n=e.icon;return(0,F.jsxs)(`div`,{className:`relative`,children:[t!==0&&(0,F.jsx)(`div`,{className:`\r
              w-full\r
              h-px\r
              bg-gradient-to-r\r
              from-transparent\r
              via-slate-300\r
              to-transparent\r
              my-8\r
            `}),(0,F.jsxs)(`div`,{className:`\r
            grid\r
            md:grid-cols-[120px_80px_1fr]\r
            gap-5\r
            items-start\r
          `,children:[(0,F.jsx)(`div`,{className:`\r
              text-5xl\r
              md:text-6xl\r
              font-black\r
              text-[#155A96]/10\r
              leading-none\r
            `,children:String(t+1).padStart(2,`0`)}),(0,F.jsx)(`div`,{className:`\r
              w-14\r
              h-14\r
              rounded-2xl\r
              bg-[#EDF4FB]\r
              flex\r
              items-center\r
              justify-center\r
            `,children:(0,F.jsx)(n,{size:25,className:`text-[#155A96]`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`\r
                text-xl\r
                md:text-2xl\r
                font-bold\r
                text-[#071426]\r
                mb-3\r
                leading-tight\r
              `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
                text-[#64748B]\r
                text-base\r
                leading-relaxed\r
                max-w-3xl\r
              `,children:e.description})]})]})]},t)})})]})}),a?.pricing?.length>0&&(0,F.jsx)(`section`,{id:`pricing`,className:`relative py-10 sm:py-12 md:py-12 px-4 sm:px-6 bg-[#F5F8FB] overflow-hidden`,children:(0,F.jsxs)(`div`,{className:`max-w-5xl mx-auto relative z-10`,children:[(0,F.jsxs)(`div`,{className:`text-center mb-10 md:mb-8`,children:[(0,F.jsx)(`p`,{className:`\r
            text-[#155A96]\r
            font-semibold\r
            uppercase\r
            tracking-[0.2em]\r
            mb-3\r
          `,children:`Pricing`}),(0,F.jsxs)(`h2`,{className:`mt-6 text-3xl sm:text-4xl md:text-[46px] font-black tracking-tight text-[#071426]`,children:[`Choose Your `,a.title]}),(0,F.jsx)(`p`,{className:`mt-6 max-w-2xl mx-auto text-base md:text-lg leading-8 text-[#64748B]`,children:`Flexible pricing plans designed for businesses of every size — from standalone systems to enterprise-scale infrastructure.`})]}),(0,F.jsx)(`div`,{className:`
          grid gap-5 mx-auto
          ${a.pricing?.length===2?`grid-cols-1 md:grid-cols-2 max-w-4xl`:`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl`}
        `,children:a.pricing.map((e,t)=>(0,F.jsx)(py,{plan:e},t))})]})}),a.testimonials&&(0,F.jsx)(`section`,{className:`relative py-10 md:py-12 bg-[#F8FAFC] overflow-hidden`,children:(0,F.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6`,children:[(0,F.jsxs)(`div`,{className:`text-center mb-8`,children:[(0,F.jsx)(`p`,{className:`\r
          text-[#155A96]\r
          font-semibold\r
          uppercase\r
          tracking-[0.25em]\r
          mb-4\r
        `,children:`Success Stories`}),(0,F.jsxs)(`h2`,{className:`\r
          text-3xl\r
          md:text-4xl\r
          font-bold\r
          text-[#071426]\r
          leading-tight\r
        `,children:[`What Businesses Say About `,a.name]}),(0,F.jsx)(`p`,{className:`\r
          mt-3\r
          text-[#64748B]\r
          max-w-3xl\r
          mx-auto\r
          leading-relaxed\r
        `,children:`Trusted by businesses across industries for smarter accounting, faster operations and reliable management.`})]}),(0,F.jsxs)(`div`,{className:`\r
        grid\r
        lg:grid-cols-[320px_1fr]\r
        gap-4\r
        items-center\r
      `,children:[(0,F.jsxs)(`div`,{className:`\r
          bg-white\r
          border\r
          border-slate-200\r
          rounded-[32px]\r
          p-4\r
        `,children:[(0,F.jsxs)(`div`,{className:`mb-6`,children:[(0,F.jsx)(`h3`,{className:`\r
              text-4xl\r
              font-black\r
              text-[#155A96]\r
            `,children:`4.9`}),(0,F.jsx)(`p`,{className:`text-[#64748B] mt-2`,children:`Average Customer Rating`})]}),(0,F.jsxs)(`div`,{className:`space-y-5`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{className:`text-2xl font-bold text-[#071426]`,children:`500+`}),(0,F.jsx)(`p`,{className:`text-[#64748B]`,children:`Businesses Served`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{className:`text-2xl font-bold text-[#071426]`,children:`98%`}),(0,F.jsx)(`p`,{className:`text-[#64748B]`,children:`Client Satisfaction`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{className:`text-2xl font-bold text-[#071426]`,children:`24+`}),(0,F.jsx)(`p`,{className:`text-[#64748B]`,children:`Years Experience`})]})]})]}),(0,F.jsxs)(`div`,{className:`\r
          bg-white\r
          border\r
          border-slate-200\r
          rounded-[32px]\r
          p-6\r
          md:p-10\r
          shadow-[0_20px_50px_rgba(0,0,0,0.05)]\r
        `,children:[(0,F.jsx)(`div`,{className:`flex gap-1 mb-4`,children:[1,2,3,4,5].map(e=>(0,F.jsx)(`span`,{className:`text-[#F0AE11] text-2xl`,children:`★`},e))}),(0,F.jsxs)(`blockquote`,{className:`\r
            text-lg\r
            md:text-xl\r
            leading-relaxed\r
            text-[#334155]\r
            mb-8\r
          `,children:[`"`,a.testimonials[r].review,`"`]}),(0,F.jsxs)(`div`,{className:`flex items-center justify-between flex-wrap gap-4`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,F.jsx)(`div`,{className:`\r
                w-10\r
                h-10\r
                rounded-full\r
                bg-[#155A96]\r
                text-white\r
                flex\r
                items-center\r
                justify-center\r
                font-bold\r
                text-lg\r
              `,children:a.testimonials[r].name.charAt(0)}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{className:`\r
                  font-bold\r
                  text-[#071426]\r
                `,children:a.testimonials[r].name}),(0,F.jsx)(`p`,{className:`text-[#64748B]`,children:a.testimonials[r].role})]})]}),(0,F.jsxs)(`div`,{className:`flex gap-3`,children:[(0,F.jsx)(`button`,{onClick:()=>i(r===0?a.testimonials.length-1:r-1),className:`\r
                w-11\r
                h-11\r
                rounded-full\r
                border\r
                border-slate-200\r
                hover:border-[#155A96]\r
              `,children:`←`}),(0,F.jsx)(`button`,{onClick:()=>i(r===a.testimonials.length-1?0:r+1),className:`\r
                w-11\r
                h-11\r
                rounded-full\r
                bg-[#155A96]\r
                text-white\r
              `,children:`→`})]})]}),(0,F.jsx)(`div`,{className:`flex gap-2 mt-8`,children:a.testimonials.map((e,t)=>(0,F.jsx)(`button`,{onClick:()=>i(t),className:`
                h-2
                rounded-full
                transition-all
                ${r===t?`w-8 bg-[#155A96]`:`w-2 bg-slate-300`}
              `},t))})]})]})]})}),a.cta&&(0,F.jsxs)(`section`,{className:`relative py-10 sm:py-12 md:py-12 bg-white overflow-hidden`,children:[(0,F.jsx)(`div`,{className:`\r
    absolute\r
    top-0\r
    left-1/2\r
    -translate-x-1/2\r
    w-[700px]\r
    h-[700px]\r
    rounded-full\r
    bg-[#155A96]/5\r
    blur-3xl\r
  `}),(0,F.jsxs)(`div`,{className:`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center`,children:[(0,F.jsx)(`div`,{className:`\r
      inline-flex items-center\r
      px-5 py-2\r
      rounded-full\r
      border-[#D9E7F5]\r
      bg-[#EDF4FA]\r
      text-[#155A96]\r
      text-sm\r
      font-semibold\r
      tracking-[0.22em]\r
      uppercase\r
      mb-5\r
    `,children:a.cta.badge}),(0,F.jsx)(`h2`,{className:`\r
      text-[24px] sm:text-[34px] md:text-[40px]\r
      leading-[1.05]\r
      font-[800]\r
      text-[#071426]\r
      max-w-4xl\r
      mx-auto\r
    `,children:a.cta.title}),(0,F.jsx)(`p`,{className:`\r
      mt-5\r
      text-[16px]\r
      md:text-[17px]\r
      leading-7\r
      text-[#5B6475]\r
      max-w-3xl\r
      mx-auto\r
    `,children:a.cta.description}),(0,F.jsxs)(`div`,{className:`\r
      mt-8\r
      flex flex-col sm:flex-row\r
      items-center justify-center\r
      gap-3\r
    `,children:[(0,F.jsx)(`a`,{href:a.cta.primaryLink,target:a.cta.primaryLink.includes(`http`)?`_blank`:`_self`,rel:`noopener noreferrer`,children:(0,F.jsx)(`button`,{className:`\r
        group relative overflow-hidden\r
        px-5 sm:px-8\r
        py-3 sm:py-4\r
        rounded-2xl\r
        bg-[#155A96]\r
        hover:bg-[#1D6FB8]\r
        text-white\r
        text-[17px]\r
        font-semibold\r
        shadow-[0_10px_30px_rgba(21,90,150,0.08)]\r
        hover:scale-[1.04]\r
        transition-all duration-300\r
      `,children:(0,F.jsxs)(`span`,{className:`relative z-10 flex items-center gap-2`,children:[a.cta.primaryBtn,(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:2,stroke:`currentColor`,className:`\r
              w-5 h-5\r
              transition-transform duration-300\r
              group-hover:translate-x-1\r
            `,children:(0,F.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3`})})]})})}),(0,F.jsx)(`a`,{href:a.cta.secondaryLink,children:(0,F.jsx)(`button`,{className:`\r
        px-5 sm:px-8\r
        py-3 sm:py-4\r
        rounded-2xl\r
        border border-[#DDE7F5]\r
        bg-white\r
        text-[#071426]\r
        text-[17px]\r
        font-semibold\r
        transition-all duration-300\r
        hover:border-[#155A96]\r
        hover:text-[#155A96]\r
        hover:shadow-[0_10px_30px_rgba(21,90,150,0.08)]\r
      `,children:a.cta.secondaryBtn})})]}),(0,F.jsxs)(`div`,{className:`\r
      mt-8\r
      flex flex-wrap\r
      items-center justify-center\r
      gap-3 sm:gap-4\r
      text-[#64748B]\r
      text-sm\r
    `,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(`div`,{className:`w-2 h-2 rounded-full bg-[#F0AE11]`}),`Trusted Business Solution`]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(`div`,{className:`w-2 h-2 rounded-full bg-[#F0AE11]`}),`Expert Support Available`]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(`div`,{className:`w-2 h-2 rounded-full bg-[#F0AE11]`}),`Fast & Secure Setup`]})]})]})]})]}):(0,F.jsx)(`div`,{className:`min-h-screen flex items-center justify-center text-center px-4`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h1`,{className:`text-4xl font-bold mb-4`,children:`Product Not Found`}),(0,F.jsx)(Mn,{to:`/products`,className:`text-[#2F80FF] font-semibold`,children:`Back to Products`})]})})}var gy=[{title:`Tally Software`,description:`Complete Tally solutions for accounting, GST, inventory, payroll, and business management.`,icon:Lr,path:`/services/tally-software`},{title:`Tally Services`,description:`Professional support, implementation, migration and training services for businesses.`,icon:Ii,path:`/services/tally-services`},{title:`Tally Apps For Mobile`,description:`Access reports, inventory, and business insights securely from anywhere on mobile.`,icon:N,path:`/services/tally-mobile`},{title:`Tally Solutions`,description:`Tailor-made integrations and workflow automations designed for your operations.`,icon:Ci,path:`/services/tally-solutions`},{title:`Tally ERP 9 Solutions`,description:`Advanced ERP solutions for enterprise accounting, reporting, and multi-user management.`,icon:Vi,path:`/services/tally-erp`},{title:`Tally Add-Ons`,description:`Powerful Tally add-ons for scalability. Seamless connectivity and secure operations in one platform`,icon:Ni,path:`/services/tally-addon`}],_y=[{slug:`tally-software`,hero:{badge:`Business Accounting Solutions`,title:`Smart Tally Software For`,highlight:` Every Business`,description:`Manage accounting, GST, inventory, payroll, banking, and business operations seamlessly with powerful Tally software solutions tailored for modern businesses.`,primaryBtn:`Book Free Demo`,primaryLink:`tel:+919849431943`},subServices:[{id:`tally-prime-silver`,tab:`Tally Prime Silver`,title:`Tally Prime Silver (Single-User)`,icon:Wi,description:`TallyPrime Silver is a single-user edition designed for small businesses and individual users. This version allows seamless management of accounts, inventory, taxation, and other financial tasks on a single computer. With its intuitive interface and robust features, TallyPrime Silver is perfect for efficient and reliable business operations.`,points:[`Simplified Accounting`,`Comprehensive GST Support`,`Inventory Management`,`Banking Integration`,`Data Security`,`Customizable Reports`]},{id:`tally-prime-gold`,tab:`TallyPrime Gold`,title:`TallyPrime Gold (Multi-User)`,icon:Ki,description:`TallyPrime Gold is the multi-user edition designed for businesses that require concurrent access to Tally across multiple systems within the same network. It is ideal for organizations with multiple departments or users, enabling seamless collaboration, data sharing, and efficient management of business operations.`,points:[`Multi-User Access`,`Comprehensive Inventory Management`,`Efficient Collaboration`,`Advanced Security Controls`,`GST Compliance`,`Real-Time Data Synchronization`]},{id:`tvu`,tab:`TVU`,title:`Tally Virtual User (TVU)`,icon:Li,description:`The Tally Virtual User (TVU) License is a specially designed licensing option that allows businesses to access TallyPrime over a virtual environment. Ideal for remote work setups or businesses using cloud infrastructure, TVU licenses enable secure and efficient usage of Tally across diverse locations without compromising performance or data security.`,points:[`Remote Accessibility`,`Cost-Efficient Scalability`,`Cloud Compatibility`,`Multi-Device Support`,`Enhanced Security`,`Centralized Data Management`]},{id:`tally-erp-9`,tab:`Tally ERP 9`,title:`Tally ERP 9 Solutions`,icon:Lr,description:`Tally.ERP 9 is a comprehensive business management software designed to streamline accounting, inventory, payroll, and taxation processes. It is a trusted solution for small to medium-sized businesses, offering advanced features to simplify operations, enhance compliance, and provide valuable insights for decision-making.`,points:[`Complete Accounting Solutions`,`Advanced Inventory Tracking`,`Payroll Management`,`GST & Tax Compliance`,`Multi-Language Support`,`Remote Access`]},{id:`tss`,tab:`TSS`,title:`Tally Software Services (TSS)`,icon:Ii,description:`Tally Software Services (TSS) is a subscription-based service that ensures your TallyPrime software remains up-to-date with the latest features, security patches, and compliance updates. TSS offers access to a range of value-added services, including product support, data synchronization, and cloud access, helping businesses optimize their use of Tally software for smoother operations.`,points:[`Latest Product Updates`,`Cloud Access`,`Product Support`,`Remote Access`,`Data Synchronization`,`Enhanced Security`]},{id:`auditors-edition`,tab:`Auditors Edition`,title:`TallyPrime Auditors Edition`,icon:Hr,description:`TallyPrime Auditors Edition is a specialized version of TallyPrime designed to cater to the needs of auditors and tax professionals. It provides advanced features for auditing, compliance, and detailed financial analysis. This edition allows auditors to access client data securely, perform audits efficiently, and ensure complete compliance with regulatory standards.`,points:[`Detailed Financial Reports`,`Remote Access`,`Tax Compliance`,`Data Integrity`,`Audit Trail`,`Client Data Management`]}],cta:{badge:`Free Consultation`,title:`Upgrade Your Business With Tally Solutions`,description:`Connect with our experts to discover the right Tally software package tailored for your accounting and business management needs.`,primaryBtn:`Enquire Now`,primaryLink:`/contact`,secondaryBtn:`Talk To Expert`,secondaryLink:`tel:+919849431943`}},{slug:`tally-services`,hero:{badge:`Business Support Services`,title:`Professional Tally Services`,highlight:` For Smooth Operations`,description:`Get expert assistance for installation, migration, customization, AMC support, troubleshooting, and training services designed to keep your business operations running efficiently.`,primaryBtn:`Book Free Demo`,primaryLink:`tel:+919849431943`},subServices:[{id:`tally-on-cloud`,tab:`Tally On Cloud`,title:`Simplify Business Operations with Tally on Cloud`,icon:Pr,description:`Tally on Cloud is a revolutionary solution designed to make TallyPrime accessible from anywhere, anytime. By hosting Tally on a secure cloud platform, businesses can eliminate the need for traditional hardware and infrastructure while enjoying the flexibility and scalability of the cloud. This solution ensures secure data access, enhanced collaboration, and cost efficiency, making it an ideal choice for businesses of all sizes.`,points:[`Anywhere, Anytime Accessibility`,`Multi-User Collaboration`,`Cost-Effective Solution`,`Scalable and Flexible`,`Enhanced Data Security`,`Reduced IT Overhead`]},{id:`tally-support`,tab:`Tally Support`,title:`Unparalleled Support for Seamless Business Operations`,icon:ei,description:`Support is the backbone of any successful business solution, and with Tally, you get top-notch assistance to ensure your operations run smoothly. Tally’s support services are designed to address your queries, resolve issues promptly, and provide expert guidance to maximize the efficiency of your business processes.`,points:[`24/7 Assistance`,`Regular Updates and Training`,`Expert Guidance`,`Custom Solutions`,`On-Demand Troubleshooting`,`Proactive Maintenance`]},{id:`amc`,tab:`AMC`,title:`Ensure Hassle-Free Operations with Tally Annual Maintenance Contract (AMC)`,icon:$r,description:`Tally AMC (Annual Maintenance Contract) is designed to provide businesses with continuous support, timely updates, and uninterrupted access to Tally services. With a focus on proactive maintenance and expert assistance, AMC ensures your Tally system operates smoothly and remains up-to-date with the latest features and compliance requirements.`,points:[`Regular Updates and Upgrades`,`Data Security and Backup Support`,`Priority Support`,`Custom Solutions`,`Proactive System Maintenance`,`Cost-Effective and Time-Saving`]},{id:`data-synchronization`,tab:`Data Synchronization`,title:`Streamline Business Operations with Tally Data Synchronization`,icon:Rr,description:`Tally Data Synchronization ensures seamless sharing and updating of data across multiple locations, enabling businesses to operate efficiently and maintain consistency in their financial and operational records. This feature is ideal for businesses with distributed operations, ensuring that all users work with the latest and most accurate data.`,points:[`Real-Time Data Updates`,`Multi-Loacation Accessibility`,`Centralized Control`,`Offline Synchronization`,`Secure Data Exchange`,`Improved Efficiency`]},{id:`tally-training`,tab:`Tally Training`,title:`Empower Your Team with Tally Training`,icon:Zr,description:`Tally Training is designed to equip businesses and their teams with the skills and knowledge to use Tally solutions effectively. Whether you’re a beginner or an experienced user, comprehensive training programs ensure you unlock the full potential of Tally, driving efficiency and accuracy in your business operations.`,points:[`Comprehensive Learning Modules`,`Customizable Training Programs`,`Hands-On Practice`,`On-site and Online Options`,`Expert Trainers`,`Certification for Users`]},{id:`invoice-customization`,tab:`Invoice Customization`,title:`Billing Your Process with Tally Invoice Customization`,icon:Wr,description:`Tally Invoice Customization enables businesses to create personalized invoices that reflect their brand identity and meet their specific operational needs. With the flexibility to design and modify invoice formats, this feature ensures that your billing process is both professional and efficient.`,points:[`Brand Identity Integration`,`Industry-Specific Templates`,`Customizable Fields`,`Language and Regional Adaptability`,`Multiple Format Options`,`Seamless Automation`]},{id:`priority-support-services`,tab:`Priority Support Services`,title:`Experience Seamless Assistance with Tally Priority Support Services`,icon:ur,description:`Tally Priority Support Services are designed to provide businesses with quick and dedicated assistance, ensuring uninterrupted operations and maximum efficiency. With a focus on delivering expert guidance and faster issue resolution, this service ensures your Tally experience remains smooth and hassle-free.`,points:[`Dedicated Support`,`24/7 Availability`,`Faster Response Times`,`Tailored Solutions`,`Proactive Assistance`,`Comprehensive Troubleshooting`]}],cta:{badge:`FREE CONSULTATION`,title:`Need Expert Tally Service Assistance?`,description:`Connect with our specialists for installation, customization, AMC support, migration, and cloud solutions tailored to your business needs.`,primaryBtn:`Get Started`,primaryLink:`/contact`,secondaryBtn:`Talk To Expert`,secondaryLink:`tel:+919849431943`}},{slug:`tally-mobile`,hero:{badge:`Mobile Business Solutions`,title:`Manage Tally Anywhere With `,highlight:` Mobile Apps`,description:`Access reports, approvals, inventory, sales, and financial insights securely from your mobile device with powerful Tally-integrated mobile applications.`,primaryBtn:`Book Free Demo`,primaryLink:`tel:+919849431943`},subServices:[{id:`bizanalyst-for-tally`,tab:`BizAnalyst for Tally`,title:`Unlock Business Insights with BizAnalyst for Tally`,icon:br,description:`BizAnalyst is a powerful mobile and web-based solution designed to work seamlessly with Tally, empowering businesses to access real-time insights and reports on the go. By bridging the gap between your financial data and actionable decisions, BizAnalyst enhances productivity, streamlines operations, and provides better control over your business.`,points:[`Real-Time Access to Data`,`Seamless Data Synchronization`,`Smart Notifications`,`Collaborative Tools`,`Advanced Business Analytics`,`Secure and Reliable`]},{id:`credflow-for-tally`,tab:`CredFlow for Tally`,title:`Optimize Cash Flow Management with Credflow for Tally`,icon:qi,description:`Credflow is an advanced cash flow management solution integrated with Tally, designed to help businesses manage their finances efficiently. By automating accounts receivables, improving collection processes, and providing real-time insights, Credflow empowers businesses to maintain a healthy cash flow and ensure financial stability.`,points:[`Automated Payment Reminders`,`Credit Risk Management`,`Real-Time Cash Flow Tracking `,`Seamless Tally Integration`,`Customizable Reports and Dashboards`,`Improved Collection Efficiency`]}],cta:{badge:`FREE CONSULTATION`,title:`Need Mobile Access To Your Tally Business Data?`,description:`Connect with our experts to discover the best Tally mobile apps for analytics, collections, payroll, sales, attendance, and business automation.`,primaryBtn:`Get Started`,primaryLink:`/contact`,secondaryBtn:`Talk To Expert`,secondaryLink:`tel:+919849431943`}},{slug:`tally-solutions`,hero:{badge:`Smart Business Solutions`,title:`Powerful Tally Solutions  `,highlight:`For Modern Businesses `,description:`Enhance productivity, automate workflows, streamline reporting, and integrate Tally with advanced business solutions designed for scalable operations.`,primaryBtn:`Book Free Demo`,primaryLink:`tel:+919849431943`},subServices:[{id:`tally-api-integration`,tab:`Tally API Integration`,title:`Enhance Functionality with Tally API Integration`,icon:Yi,description:`Tally API Integration enables seamless connectivity between Tally and other business applications, allowing for streamlined operations and real-time data synchronization. By integrating Tally with your existing systems, you can automate workflows, reduce manual tasks, and improve efficiency across various business processes.`,points:[`Seamless Data Exchange`,`Advanced Reporting and Analytics`,`Custom Workflow Automation`,`Secure and Reliable Integration`,`Third-Party Application Compatibility`,`Scalable Solutions`]},{id:`quickbooks-and-tally-integration`,tab:`QuickBooks and Integration`,title:`Streamline Your Accounting with QuickBooks and Tally Integration`,icon:Di,description:`Integrating QuickBooks with Tally allows businesses to combine the strengths of both platforms—QuickBooks for managing accounting and Tally for financial and operational data. This integration ensures seamless data transfer, improved accuracy, and enhanced business efficiency by eliminating the need for manual data entry and duplication.`,points:[`Automated Data Synchronization`,`Minimized Data Entry Errors`,`Simplified Accounting and Taxation`,`Centralized Financial Management`,`Efficient Financial Reporting`,`Customizable Integration`]},{id:`excel-to-tally-import-utility`,tab:`Excel To Tally Import Utility`,title:`Simplify Data Import with Excel to Tally Import Utility`,icon:Ur,description:`The Excel to Tally Import Utility is a powerful tool designed to simplify the process of transferring data from Excel sheets into Tally. Whether it’s for managing transactions, inventory, or financial data, this utility streamlines data entry, reduces errors, and saves valuable time by automating the import process from Excel to Tally.`,points:[`Effortless Data Transfer`,`Error-Free Data Mapping`,`Customizable Import Formats`,`Real-Time Updates`,`Bulk Data Import`,`Seamless Integration`]},{id:`tally-invoice-customization`,tab:`Tally Invoice`,title:`Billing Process with Tally Invoice Customization`,icon:Wr,description:`Tally Invoice Customization enables businesses to create personalized invoices that reflect their brand identity and meet their specific operational needs. With the flexibility to design and modify invoice formats, this feature ensures that your billing process is both professional and efficient.`,points:[`Brand Identity Integration`,`Industry-Specific Templates`,`Customizable Fields`,`Language and Regional Adaptability`,`Multiple Format Options`,`Seamless Automation`]},{id:`tally-voucher-customization`,tab:`Tally Voucher`,title:`Your Financial Transactions with Tally Voucher Formats Customization`,icon:Ti,description:`Tally Voucher Formats Customization allows businesses to modify and design voucher templates to suit their specific accounting needs. Whether it’s for sales, purchases, payments, receipts, or journal entries, this feature ensures that all financial transactions are documented in a format that aligns with your business processes and compliance requirements.`,points:[`Customizable Voucher Layouts`,`Industry-Specific Formats`,`Inclusion of Business-Specific Fields`,`Multi-Language Support`,`Branding Integration`,`Flexible Reporting and Export Options`]},{id:`tally-gst-reports-customization`,tab:`Tally GST Reports`,title:`Simplify GST Compliance with Tally GST Reports Customization`,icon:Qr,description:`Tally GST Reports Customization allows businesses to tailor their GST reports to meet specific compliance requirements, ensuring accurate tax calculations and streamlined reporting. By customizing GST reports, businesses can generate precise tax summaries, invoices, and returns that align with statutory norms while providing insights into the financial health of the business.`,points:[`Tailored GST Returns`,`Multi-Period Reporting`,`Dynamic Tax Classification`,`Detailed Summary and Ledger Reports`,`Customizable Tax Rate Setup`,`Easy Integration with GSTR Filing`]},{id:`vertical-solutions`,tab:`Vertical Solutions`,title:`Industry-Specific Vertical Solutions with Tally`,icon:gr,description:`Tally’s Vertical Solutions offer customized tools and features tailored to meet the specific needs of different industries. Whether you’re in retail, manufacturing, healthcare, or services, Tally provides specialized solutions designed to streamline operations, improve accuracy, and enhance efficiency across various business functions.`,points:[`Customized Features for Industry Needs`,`Seamless Integration`,`Enhanced Reporting for Each Industry`,`Scalable and Flexible Solutions`,`Compliance with Industry Regulations`,`Improved Decision-Making`]}],cta:{badge:`FREE CONSULTATION`,title:`Need Mobile Access To Your Tally Business Data?`,description:`Connect with our experts to discover the best Tally mobile apps for analytics, collections, payroll, sales, attendance, and business automation.`,primaryBtn:`Get Started`,primaryLink:`/contact`,secondaryBtn:`Talk To Expert`,secondaryLink:`tel:+919849431943`}},{slug:`tally-erp`,hero:{badge:`Enterprise ERP Solutions`,title:`Advanced Tally ERP 9 Solutions `,highlight:`For Smarter Operations`,description:`Optimize inventory, production, sales, finance, and operational workflows with powerful Tally ERP 9 enterprise-grade business solutions.`,primaryBtn:`Talk To Expert`,primaryLink:`tel:+919849431943`},subServices:[{id:`supply-chain-visibility`,tab:`Supply Chain Visibility`,title:`Achieve Full Supply Chain Transparency with Tally’s Supply Chain Visibility`,icon:Yr,description:`Tally’s Supply Chain Visibility feature provides businesses with real-time insights into their supply chain operations, enabling better decision-making, improved efficiency, and enhanced customer satisfaction. By tracking every step of the process, businesses can optimize inventory, streamline logistics, and reduce bottlenecks.`,points:[`Real-Time Inventory Tracking`,`Logistics and Shipment Tracking`,`Order Lifecycle Monitoring`,`Customizable Supply Chain Reports`,`Comprehensive Vendor and Supplier Insights`,`Enhanced Demand Forecasting`]},{id:`serial-number-management`,tab:`Serial Number Management`,title:`Streamline Inventory with Tally’s Serial Number Management`,icon:li,description:`Tally’s Serial Number Management feature enables businesses to track individual products and assets in their inventory through unique serial numbers. This enhances traceability, improves stock control, and simplifies warranty or service management, providing a complete overview of each item in the supply chain.`,points:[`Unique Serial Number Assignment`,`Batch and Serial Number Integration`,`Complete Traceability`,`Inventory Control and Stock Visibility`,`Warranty and Service Management`,`Customizable Reporting`]},{id:`kit-items-sales`,tab:`KIT Items Sales`,title:`Boost Sales Efficiency with Tally’s KIT Items Sales Management`,icon:vi,description:`Tally’s KIT Items Sales feature enables businesses to manage and sell bundled products or services efficiently. This functionality allows you to combine multiple items into a single sales unit or kit, simplifying the sales process, improving stock management, and providing a better experience for both the business and its customers.`,points:[`Bundling of Multiple Products`,`Simplified Billing and Invoicing`,`Automatic Stock Tracking`,`Comprehensive Sales Reporting`,`Customizable KIT Configuration`,`Discounts and Promotions`]},{id:`sales-activity-management`,tab:`Sales Activity Management`,title:`Optimize Sales Performance with Tally’s Sales Activity Management`,icon:xr,description:`Tally’s Sales Activity Management feature helps businesses track, analyze, and manage their sales activities efficiently. This functionality provides a comprehensive view of sales interactions, customer touchpoints, and performance metrics, empowering businesses to enhance sales productivity, drive growth, and improve customer relationships.`,points:[`Sales Tracking and Monitoring`,`Task Assignment and Collaboration`,`Lead and Opportunity Management`,`Customer Interaction History`,`Activy-Based Reporting`,`Sales Performance Analytics`]},{id:`quality-control`,tab:`Quality Control`,title:`Ensure Product Excellence with Tally’s Quality Control (QC)`,icon:Ii,description:`Tally’s Quality Control (QC) feature enables businesses to monitor and maintain the quality of their products throughout the manufacturing and procurement process. By incorporating quality checks at every stage, this functionality helps businesses reduce defects, improve product consistency, and meet customer expectations.`,points:[`Customizable Quality Parameters`,`Batch-wise Quality Control`,`Multiple Quality Checks`,`Quality Certificate Management`,`Defect Tracking and Reporting`,`Integration with Inventory Management`]}],cta:{badge:`FREE CONSULTATION`,title:`Need Mobile Access To Your Tally Business Data?`,description:`Connect with our experts to discover the best Tally mobile apps for analytics, collections, payroll, sales, attendance, and business automation.`,primaryBtn:`Get Started`,primaryLink:`/contact`,secondaryBtn:`Talk To Expert`,secondaryLink:`tel:+919849431943`}},{slug:`tally-addon`,hero:{badge:`Powerful Tally Add-Ons`,title:`Extend Tally Functionality With Smart`,highlight:` Business Add-Ons`,description:`Enhance accounting, compliance, billing, inventory, and workflow efficiency with advanced Tally add-ons customized for modern business operations.`,primaryBtn:`Talk To Expert`},subServices:[{id:`e-way-bill-management`,tab:`E-Way Bill Management`,title:`Simplify Compliance with Tally’s E-way Bill Management`,icon:Ei,description:`Tally’s E-way Bill feature allows businesses to generate, track, and manage e-way bills seamlessly, ensuring compliance with GST regulations. This functionality streamlines the process of transporting goods and ensures that businesses stay on top of the documentation required for interstate and intrastate shipments.`,points:[`Automatic E-way Bill Generation`,`Bulk E-way Bill Generation`,`Real-Time E-way Bill Tracking`,`E-way Bill Reports`,`GST Integration`,`Validations and Compliance Checks`]},{id:`digitally-signed-invoices`,tab:`Digitally Signed Invoices`,title:`Ensure Authenticity with Digitally Signed Invoices in Tally`,icon:Vr,description:`Tally’s Digitally Signed Invoice feature enables businesses to generate invoices that are digitally signed, ensuring authenticity, security, and legal compliance. This feature helps streamline invoice validation processes, enhance trust with customers and partners, and ensure that invoices meet regulatory requirements.`,points:[`Secure Digital Signature Integration`,`Enhanced Invoice Authenticity`,`Compliance with Legal Requirements`,`Efficient Invoice Management`,`Automatic Signature Generation`,`Audit-Ready Records`]},{id:`gst-reminder`,tab:`GST Reminder`,title:`Stay Compliant with Tally’s GST Reminder Feature`,icon:dr,description:`Tally’s GST Reminder feature helps businesses stay on top of their tax filing deadlines by sending timely reminders for GST returns and other important compliance dates. This functionality ensures that you never miss a filing deadline, reducing the risk of penalties and ensuring seamless tax compliance.`,points:[`Automated GST Filing Reminders`,`Reminder Notifications via Email/SMS`,`Customizable Reminder Settings`,`Integrated with GST Reports`,`Multi-Return Support`,`Dashboard Overview of Due Dates`]},{id:`transaction-authorization`,tab:`Transaction Authorization`,title:`Secure Your Business Operations with Tally’s Transaction Authorization`,icon:Ni,description:`Tally’s Transaction Authorization feature ensures that all financial transactions within your business are authorized by the relevant personnel before being recorded. This adds an extra layer of security and control, preventing unauthorized or erroneous transactions and ensuring accurate financial reporting.`,points:[`Role-Based Authorization`,`Real-Time Authorization Alerts`,`Multi-Level Authorization`,`Customizable Approval Workflow`,`Audit Trail of Authorizations`,`Integration with Financial Data`]},{id:`material-requirement-planning`,tab:`Material Requirement Planning`,title:`Optimize Inventory Management with Tally’s Material Requirement Planning`,icon:pr,description:`Tally’s Material Requirement Planning (MRP) feature enables businesses to forecast and manage their material needs, ensuring that the right materials are available at the right time for production. This functionality helps prevent overstocking or stockouts, reduces costs, and ensures smooth production processes by optimizing material flow.`,points:[`Automated Material Planning`,`Real-Time Inventory Monitoring`,`Forecasting and Demand Planning`,`Vendor and Supplier Integration`,`Multi-Item and Multi-Level BOM Support`,`Detailed MRP Reports`]}],cta:{badge:`SMART BUSINESS AUTOMATION`,title:`Upgrade Your Tally Experience With Powerful Add-Ons`,description:`Connect with our experts to discover custom Tally add-ons that improve productivity, compliance, automation, and business performance.`,primaryBtn:`Book Free Consultation`,primaryLink:`/contact`,secondaryBtn:`Contact Our Team`,secondaryLink:`tel:+919849431943`}}];function vy(){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`section`,{className:`\r
    relative\r
    lg:min-h-[50vh]\r
    overflow-hidden\r
    bg-[#F4F8FC]\r
    px-4 sm:px-4 lg:px-8\r
    pt-12\r
    \r
    flex items-center\r
  `,children:(0,F.jsx)(`div`,{className:`relative z-10 max-w-7xl mx-auto w-full py-6 sm:py-8 md:py-10`,children:(0,F.jsxs)(`div`,{className:`\r
        grid\r
        lg:grid-cols-[1.2fr_0.8fr]\r
        gap-10 lg:gap-16\r
        items-center\r
      `,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`\r
            inline-flex\r
            items-center\r
            gap-2\r
            px-4\r
            sm:px-5\r
            py-2\r
            rounded-full\r
            bg-[#EDF4FA]\r
            text-[#155A96]\r
            text-sm\r
            font-medium\r
            mb-6\r
          `,children:`Services`}),(0,F.jsxs)(`h1`,{className:`\r
            text-3xl\r
            sm:text-4xl\r
            md:text-[42px]\r
            font-bold\r
            text-[#071426]\r
            leading-[1.05]\r
            tracking-tight\r
            max-w-4xl\r
          `,children:[`Transform Your Business`,(0,F.jsx)(`br`,{}),`With Smart Tally Services`]}),(0,F.jsx)(`p`,{className:`\r
            mt-6\r
            text-[15px]\r
            sm:text-lg\r
            text-slate-600\r
            leading-relaxed\r
            max-w-3xl\r
          `,children:`From implementation and customization to cloud hosting and support, we help businesses streamline operations, improve efficiency, and scale confidently with Tally solutions.`}),(0,F.jsxs)(`div`,{className:`\r
            mt-8\r
            flex\r
            flex-col\r
            sm:flex-row\r
            gap-4\r
          `,children:[(0,F.jsx)(`a`,{href:`#services`,children:(0,F.jsx)(`button`,{className:`\r
                w-full sm:w-auto\r
                px-6 sm:px-8\r
                py-4\r
                rounded-2xl\r
                bg-[#155A96]\r
                hover:bg-[#1D6FB8]\r
                text-white\r
                font-semibold\r
                transition-all\r
                duration-300\r
              `,children:`Explore Services`})}),(0,F.jsx)(`a`,{href:`tel:+919849431943`,children:(0,F.jsx)(`button`,{className:`\r
                w-full sm:w-auto\r
                px-6 sm:px-8\r
                py-4\r
                rounded-2xl\r
                border\r
                border-[#D9E7F5]\r
                hover:border-[#155A96]\r
                bg-white\r
                text-[#071426]\r
                font-semibold\r
                transition-all\r
                duration-300\r
              `,children:`Talk To Experts`})})]})]}),(0,F.jsx)(`div`,{className:`hidden lg:flex justify-center items-center`,children:(0,F.jsxs)(`div`,{className:`w-[520px]`,children:[(0,F.jsx)(`div`,{className:`flex justify-center mb-5`,children:(0,F.jsxs)(`div`,{className:`service-pill`,children:[(0,F.jsx)(ti,{size:18}),`Support`]})}),(0,F.jsxs)(`div`,{className:`flex justify-center gap-4 items-center mb-5`,children:[(0,F.jsxs)(`div`,{className:`service-pill`,children:[(0,F.jsx)(Pi,{size:18}),`Customization`]}),(0,F.jsxs)(`div`,{className:`\r
    px-7\r
    py-4\r
    rounded-2xl\r
    bg-[#155A96]\r
    text-white\r
    shadow-[0_20px_40px_rgba(21,90,150,0.20)]\r
    flex\r
    items-center\r
    gap-4\r
  `,children:[(0,F.jsx)(`div`,{className:`\r
      w-10 h-10\r
      rounded-xl\r
      bg-white/15\r
      flex\r
      items-center\r
      justify-center\r
    `,children:(0,F.jsx)(hr,{size:18})}),(0,F.jsx)(`div`,{children:(0,F.jsx)(`p`,{className:`font-bold text-lg`,children:`Tally Services`})})]}),(0,F.jsxs)(`div`,{className:`service-pill`,children:[(0,F.jsx)(Fr,{size:18}),`Cloud Hosting`]})]}),(0,F.jsxs)(`div`,{className:`flex justify-center gap-4`,children:[(0,F.jsxs)(`div`,{className:`service-pill`,children:[(0,F.jsx)(Zr,{size:18}),`Training`]}),(0,F.jsxs)(`div`,{className:`service-pill`,children:[(0,F.jsx)(Ai,{size:18}),`Implementation`]})]})]})})]})})}),(0,F.jsx)(`section`,{id:`services`,className:`relative bg-white py-10 sm:py-12 md:py-14 overflow-hidden`,children:(0,F.jsxs)(`div`,{className:`relative z-10 max-w-6xl mx-auto px-4 sm:px-6`,children:[(0,F.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-10`,children:[(0,F.jsxs)(`div`,{className:`\r
              inline-flex\r
              items-center\r
              gap-2\r
              px-4\r
              py-2\r
              rounded-full\r
              bg-[#EEF4F8]\r
              text-[#155A96]\r
              text-sm\r
              font-medium\r
              mb-6\r
            `,children:[(0,F.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-green-400 animate-pulse`}),`Our Services`]}),(0,F.jsx)(`h2`,{className:`\r
        text-3xl\r
        sm:text-4xl\r
        md:text-[46px]\r
        font-black\r
        text-[#071426]\r
        leading-tight\r
      `,children:`Smart Solutions For Modern Businesses`}),(0,F.jsx)(`p`,{className:`\r
        mt-6\r
        text-[15px]\r
        sm:text-lg\r
        text-[#64748B]\r
        leading-relaxed\r
      `,children:`From Tally implementation to cloud infrastructure, we deliver scalable business solutions tailored for growth and efficiency.`})]}),(0,F.jsx)(`div`,{className:`\r
      grid\r
      grid-cols-1\r
      sm:grid-cols-2\r
      lg:grid-cols-3\r
      gap-6\r
      sm:gap-8\r
    `,children:gy.map((e,t)=>{let n=e.icon;return(0,F.jsxs)(Mn,{to:e.path,className:`\r
              group relative overflow-hidden\r
              rounded-[22px]\r
              sm:rounded-[28px]\r
              border border-[#E2E8F0]\r
              bg-white\r
              hover:border-[#155A96]/20\r
              hover:shadow-[0_20px_60px_rgba(21,90,150,0.08)]\r
              transition-all duration-500\r
              hover:-translate-y-2\r
              p-5\r
              sm:p-6\r
              lg:p-7\r
              `,children:[(0,F.jsx)(`div`,{className:`\r
              w-14 h-14\r
              sm:w-16 sm:h-16 rounded-3xl\r
              bg-[#F4F7FA]\r
              border border-[#E2E8F0]\r
              flex items-center justify-center\r
              transition-all duration-500\r
              group-hover:bg-gradient-to-br\r
              group-hover:bg-[#155A96]\r
              group-hover:shadow-[0_10px_30px_rgba(21,90,150,0.18)]\r
            `,children:(0,F.jsx)(n,{className:`w-7 h-7 sm:w-8 sm:h-8 text-[#155A96] transition-all duration-500 group-hover:text-white`})}),(0,F.jsx)(`h3`,{className:`\r
                text-[20px]\r
                sm:text-[24px]\r
                md:text-[26px]\r
                font-[700]\r
                text-[#071426]\r
                mb-4\r
                `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
                text-[14px]\r
                sm:text-[15px]\r
                leading-7\r
                text-[#5B6475]\r
                `,children:e.description}),(0,F.jsxs)(`div`,{className:`\r
                mt-10 flex items-center gap-3\r
                text-[#155A96]\r
                group-hover:text-[#0F4D82]\r
                font-[600]\r
                text-[17px]\r
                transition-all duration-300\r
                \r
              `,children:[(0,F.jsx)(`span`,{children:`Explore Service`}),(0,F.jsx)(cr,{className:`\r
                w-5 h-5\r
                transition-transform duration-300\r
                group-hover:translate-x-2\r
                `})]}),(0,F.jsx)(`div`,{className:`\r
              absolute bottom-0 left-0\r
              h-[3px] w-0\r
              bg-[#155A96]\r
              transition-all duration-500\r
              group-hover:w-full\r
              `})]},t)})})]})}),(0,F.jsxs)(`section`,{className:`relative py-10 sm:py-12 bg-white overflow-hidden`,children:[(0,F.jsx)(`div`,{className:`\r
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
          bg-[#155A96]/10\r
          blur-3xl\r
          rounded-full\r
        `}),(0,F.jsxs)(`div`,{className:`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center`,children:[(0,F.jsx)(`div`,{className:`\r
      inline-flex items-center\r
      px-5 py-2\r
      rounded-full\r
      border border-[#155A96]\r
      bg-[#F8FBFF]\r
      text-[#155A96]\r
      text-sm font-semibold\r
      tracking-[0.22em]\r
      uppercase\r
      mb-5\r
      `,children:`Free Consultation`}),(0,F.jsx)(`h2`,{className:`\r
      text-[26px]\r
      sm:text-[34px]\r
      md:text-[42px]\r
      leading-[1.05]\r
      font-[800]\r
      text-[#071426]\r
      `,children:`Let’s Transform Your Business Workflow`}),(0,F.jsx)(`p`,{className:`\r
      mt-5\r
      text-[16px]\r
      md:text-[17px]\r
      leading-[1.9]\r
      text-[#5B6475]\r
      max-w-4xl\r
      mx-auto\r
      `,children:`Connect with our experts to discover the right Tally solutions, services, and automation tools tailored for your business growth.`}),(0,F.jsxs)(`div`,{className:`mt-8 flex flex-col sm:flex-row items-center justify-center gap-3`,children:[(0,F.jsx)(`a`,{href:`/contact`,children:(0,F.jsx)(`button`,{className:`\r
        w-full\r
        sm:w-auto\r
        px-5 sm:px-7\r
        py-3 sm:py-4\r
        rounded-2xl\r
        bg-[#155A96]\r
        text-white\r
        text-[17px]\r
        font-semibold\r
        shadow-[0_10px_30px_rgba(21,90,150,0.08)]\r
        transition-all duration-300\r
        hover:scale-[1.04]\r
        `,children:`Get Free Consultation`})}),(0,F.jsx)(`a`,{href:`tel:+919849431943`,children:(0,F.jsx)(`button`,{className:`\r
        px-10 py-5\r
        rounded-2xl\r
        border border-[#155A96]\r
        bg-white\r
        text-[#071426]\r
        text-[17px]\r
        font-semibold\r
        transition-all duration-300\r
        hover:border-[#155A96]\r
        hover:text-[#1178D4]\r
        shadow-[0_10px_30px_rgba(21,90,150,0.08)]\r
        `,children:`Talk To Experts`})})]})]})]})]})}var yy=()=>{let{slug:e}=ht(),t=_y.find(t=>t.slug===e),[n,r]=(0,w.useState)(t?.subServices?.[0]||null);if((0,w.useEffect)(()=>{t?.subServices?.length>0&&r(t.subServices[0])},[e]),!t)return(0,F.jsx)(`div`,{className:`min-h-screen flex items-center justify-center text-2xl font-bold`,children:`Service Not Found`});let i=n?.icon;return console.log(t.cta.secondaryLink),(0,F.jsxs)(F.Fragment,{children:[t.hero&&(0,F.jsxs)(`section`,{className:`relative overflow-hidden bg-white`,children:[(0,F.jsxs)(`div`,{className:`absolute inset-0 overflow-hidden`,children:[(0,F.jsx)(`div`,{className:`\r
      absolute top-[-200px] left-[-150px]\r
      w-[420px] h-[420px]\r
      bg-[#155A96]/10\r
      blur-[120px]\r
      rounded-full\r
    `}),(0,F.jsx)(`div`,{className:`\r
      absolute bottom-[-200px] right-[-150px]\r
      w-[420px] h-[420px]\r
      bg-[#6C63FF]/10\r
      blur-[120px]\r
      rounded-full\r
    `})]}),(0,F.jsxs)(`div`,{className:`\r
    relative z-10\r
    max-w-7xl mx-auto\r
    px-4 sm:px-6\r
    pt-16 sm:pt-20 lg:pt-20\r
    pb-12 sm:pb-14\r
    text-center\r
  `,children:[(0,F.jsx)(`div`,{className:`\r
      inline-flex items-center\r
      px-4\r
      sm:px-5\r
      py-2\r
      rounded-full\r
      border border-[#D7E5EF]\r
      bg-[#EEF4F8]\r
      text-[#155A96]\r
      text-sm\r
      font-semibold\r
      tracking-[0.2em]\r
      uppercase\r
      mb-8\r
    `,children:t.hero.badge}),(0,F.jsxs)(`h1`,{className:`\r
      text-[30px]\r
      sm:text-[40px]\r
      lg:text-[48px]\r
      leading-[1]\r
      font-[800]\r
      text-[#071426]\r
      max-w-5xl\r
      mx-auto\r
    `,children:[t.hero.title,(0,F.jsx)(`span`,{className:`text-[#155A96]`,children:t.hero.highlight})]}),(0,F.jsx)(`p`,{className:`\r
      mt-6\r
      text-[15px]\r
      sm:text-[15px]\r
      md:text-[16px]\r
      leading-[1.9]\r
      text-[#475569]\r
      max-w-3xl\r
      mx-auto\r
    `,children:t.hero.description}),(0,F.jsx)(`div`,{className:`mt-6 flex flex-wrap justify-center gap-2`,children:[`Implementation`,`Customization`,`Cloud Hosting`,`Training`,`Support`].map(e=>(0,F.jsx)(`div`,{className:`\r
        px-4 py-2\r
        text-[#155A96]\r
        text-sm\r
        font-medium\r
        \r
      `,children:e},e))}),(0,F.jsx)(`div`,{className:`\r
      mt-10\r
      flex flex-col sm:flex-row\r
      items-center justify-center\r
      gap-5\r
    `,children:(0,F.jsx)(`a`,{href:t.hero.primaryLink,children:(0,F.jsx)(`button`,{className:`\r
        w-full\r
        sm:w-auto\r
        px-6\r
        sm:px-8\r
        py-4\r
        rounded-2xl\r
        bg-[#155A96]\r
        hover:bg-[#0F4D82]\r
        text-white\r
        font-semibold\r
        text-lg\r
        hover:scale-[1.03]\r
        transition-all duration-300\r
      `,children:t.hero.primaryBtn})})})]})]}),t.subServices&&(0,F.jsx)(`section`,{className:`py-8 sm:py-10 md:py-12 px-4 sm:px-4 bg-white`,children:(0,F.jsxs)(`div`,{className:`max-w-7xl mx-auto`,children:[(0,F.jsxs)(`div`,{className:`text-center mb-8`,children:[(0,F.jsx)(`div`,{className:`\r
        inline-flex items-center\r
        px-5 py-2\r
        rounded-full\r
        bg-[#EEF4F8]\r
        border border-[#D7E5EF]\r
        text-[#155A96]\r
        text-sm\r
        font-semibold\r
        tracking-[0.15em]\r
        uppercase\r
        mb-4\r
      `,children:`Explore Services`}),(0,F.jsx)(`h2`,{className:`\r
        text-[26px]\r
        sm:text-3xl\r
        lg:text-4xl\r
        font-bold\r
        text-[#071426]\r
        leading-tight\r
      `,children:`Business Solutions Tailored For You`})]}),(0,F.jsx)(`div`,{className:`\r
        relative\r
        rounded-[24px]\r
        sm:rounded-[36px]\r
        border border-[#D9E3F0]\r
        bg-white\r
        overflow-hidden`,children:(0,F.jsxs)(`div`,{className:`flex flex-col lg:flex-row`,children:[(0,F.jsx)(`div`,{className:`\r
            lg:w-[300px]\r
            flex\r
            flex-col\r
            justify-center\r
            self-stretch\r
            border-b lg:border-b-0 lg:border-r\r
            border-[#E2E8F0]\r
            bg-[#F8FAFC]\r
            `,children:(0,F.jsx)(`div`,{className:`\r
            flex lg:flex-col\r
            gap-4\r
            overflow-x-auto\r
            p-4\r
            sm:p-6\r
            scrollbar-hide\r
            h-full\r
            `,children:t.subServices.map(e=>{let t=n?.id===e.id;return(0,F.jsx)(`button`,{onClick:()=>r(e),className:`
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

                    ${t?`bg-[#155A96] text-white border-transparent`:`bg-white border-[#E2E8F0] text-[#0F172A] hover:border-[#155A96]/30 hover:bg-[#F8FBFD]`}
                  `,children:(0,F.jsxs)(`div`,{className:`\r
                    flex items-start justify-between\r
                    gap-4\r
                  `,children:[(0,F.jsx)(`span`,{className:`\r
                      font-semibold\r
                      text-[15px]\r
                      sm:text-base\r
                      leading-snug\r
                      pr-2\r
                    `,children:e.tab}),(0,F.jsx)(cr,{className:`
                      w-5 h-5
                      transition-all duration-300

                      ${t?`text-white translate-x-1`:`text-[#94A3B8] group-hover:text-[#1178D4]`}
                    `})]})},e.id)})})}),(0,F.jsx)(`div`,{className:`flex-1 relative overflow-hidden`,children:(0,F.jsx)(pm,{mode:`wait`,children:(0,F.jsxs)($.div,{initial:{opacity:0,y:25},animate:{opacity:1,y:0},exit:{opacity:0,y:-25},transition:{duration:.35},className:`\r
                p-5\r
                sm:p-6\r
                md:p-8\r
                lg:p-10\r
              `,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-4 sm:gap-5`,children:[(0,F.jsx)(`div`,{className:`\r
                w-14 h-14\r
                sm:w-16 sm:h-16\r
                min-w-[56px]\r
                min-h-[56px]\r
                sm:min-w-[64px]\r
                sm:min-h-[64px]\r
                flex items-center justify-center\r
                rounded-2xl\r
                bg-[#155A96]\r
                shadow-[0_10px_30px_rgba(17,120,212,0.20)]\r
                shrink-0\r
              `,children:i&&(0,F.jsx)(i,{className:`w-8 h-8 text-white`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`\r
                text-sm\r
                font-semibold\r
                tracking-[0.2em]\r
                uppercase\r
                text-[#155A96]\r
                mb-2\r
                `,children:`Business Solution`}),(0,F.jsx)(`h3`,{className:`\r
                text-[22px]\r
                sm:text-[24px]\r
                md:text-[28px]\r
                font-bold\r
                text-[#071426]\r
                leading-tight\r
                `,children:n.title})]})]}),(0,F.jsx)(`p`,{className:`\r
                mt-6\r
                text-[15px]\r
                sm:text-lg\r
                leading-[1.9]\r
                text-[#475569]\r
                max-w-3xl\r
              `,children:n.description}),(0,F.jsx)(`div`,{className:`\r
                mt-8\r
                gap-x-6\r
                gap-y-4\r
                grid grid-cols-1 sm:grid-cols-2\r
                max-w-4xl\r
              `,children:n.points.map((e,t)=>(0,F.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,F.jsx)(`div`,{className:`\r
                      w-9 h-9\r
                      rounded-full\r
                      bg-[#EEF4F8]\r
                      flex items-center justify-center\r
                      shrink-0\r
                    `,children:(0,F.jsx)(Cr,{className:`\r
                        w-4 h-4\r
                        text-[#155A96]\r
                      `})}),(0,F.jsx)(`span`,{className:`\r
                      text-[#334155]\r
                      text-[15px]\r
                      sm:text-[17px]\r
                      leading-relaxed\r
                    `,children:e})]},t))})]},n.id)})})]})})]})}),t.cta&&(0,F.jsx)(`section`,{className:`py-8 sm:py-10 md:py-12 px-4 sm:px-4 bg-white`,children:(0,F.jsxs)(`div`,{className:`max-w-5xl mx-auto text-center`,children:[(0,F.jsx)(`div`,{className:`\r
              inline-flex items-center\r
              px-5 py-2\r
              rounded-full\r
              bg-[#F1F6FE]\r
              border border-[#D7E5EF]\r
              text-[#155A96]\r
              text-sm\r
              font-semibold\r
              tracking-[0.15em]\r
              uppercase\r
              mb-8\r
            `,children:t.cta.badge}),(0,F.jsx)(`h2`,{className:`\r
              text-[26px]\r
              sm:text-3xl\r
              lg:text-4xl\r
              font-bold\r
              leading-tight\r
              text-[#071426]\r
            `,children:t.cta.title}),(0,F.jsx)(`p`,{className:`\r
              mt-5\r
              text-[15px]\r
              sm:text-lg\r
              md:text-xl\r
              leading-[1.9]\r
              text-[#64748B]\r
              max-w-3xl\r
              mx-auto\r
            `,children:t.cta.description}),(0,F.jsxs)(`div`,{className:`\r
              mt-6\r
              flex flex-col sm:flex-row\r
              items-center justify-center\r
              gap-5\r
            `,children:[(0,F.jsx)(Mn,{to:t.cta.primaryLink,children:(0,F.jsx)(`button`,{className:`\r
                w-full\r
                sm:w-auto\r
                px-6\r
                sm:px-8\r
                py-4\r
                rounded-2xl\r
                bg-[#155A96]\r
                hover:bg-[#155A96]/95\r
                text-white\r
                font-semibold\r
                text-lg\r
                hover:scale-[1.03]\r
                transition-all duration-300\r
              `,children:t.cta.primaryBtn})}),(0,F.jsx)(`a`,{href:t.cta.secondaryLink,children:(0,F.jsx)(`button`,{className:`\r
                w-full\r
                sm:w-auto\r
                px-6\r
                sm:px-8\r
                py-4\r
                rounded-2xl\r
                border border-[#155A96]\r
                bg-white\r
                text-[#071426]\r
                font-semibold\r
                text-lg\r
                hover:border-[#155A96]\r
                hover:text-[#155A96]\r
                transition-all duration-300\r
              `,children:t.cta.secondaryBtn})})]})]})})]})},by=`/Balaji-Infotech/assets/basics-ChOuIBMf.png`,xy=`/Balaji-Infotech/assets/gst-CwR4GFuj.png`,Sy=`/Balaji-Infotech/assets/inventory-DQLd9vdY.png`,Cy=`/Balaji-Infotech/assets/payroll-lGy70-lh.jpg`,wy=`/Balaji-Infotech/assets/reports-BuKQqLAM.jpg`,Ty=`/Balaji-Infotech/assets/advanced-DodPshiB.jpg`;function Ey(){let e=pt(),t=[{step:`01`,slug:`basics-ledgers`,level:`Beginner`,title:`Basics & Ledgers`,description:`Learn company creation, ledgers, voucher entries, journals, and accounting fundamentals.`,time:`3–4 Hours`,image:by},{step:`02`,slug:`gst-taxation`,level:`Intermediate`,title:`GST & Taxation`,description:`Master GST configuration, invoices, returns, debit notes, and compliance workflows.`,time:`6–8 Hours`,image:xy},{step:`03`,slug:`inventory-stock`,level:`Intermediate`,title:`Inventory & Stock`,description:`Understand stock items, godowns, batching, reorder levels, and manufacturing basics.`,time:`4–6 Hours`,image:Sy},{step:`04`,slug:`payroll-management`,level:`Advanced`,title:`Payroll Management`,description:`Learn employee setup, salary structures, PF/ESI deductions, and payroll processing.`,time:`5–7 Hours`,image:Cy},{step:`05`,slug:`reports-mis`,level:`Advanced`,title:`Reports & MIS`,description:`Generate profit & loss reports, balance sheets, ratio analysis, and MIS dashboards.`,time:`4–5 Hours`,image:wy},{step:`06`,slug:`advanced-tallyprime`,level:`Expert`,title:`Advanced TallyPrime`,description:`Security controls, multi-company workflows, backup & restore, and advanced customization.`,time:`6–9 Hours`,image:Ty}],n=[{title:`Official Tally Resources`,description:`Explore official product documentation, learning materials, certifications, and support resources directly from Tally.`,points:[`Official Documentation`,`Learning & Certification`,`Support Knowledge Base`],icon:fr,iconBg:`bg-blue-50`,iconColor:`text-blue-600`,lineColor:`bg-blue-500`,shadowColor:`hover:shadow-[0_15px_40px_rgba(59,130,246,0.18)]`,buttonText:`Official Resources`,buttonClass:`bg-blue-50 text-blue-600 hover:bg-blue-100`,link:`https://tallysolutions.com`},{title:`Video Tutorials`,description:`Learn through step-by-step video tutorials covering accounting, GST, inventory management, payroll, and business workflows.`,points:[`Beginner Friendly`,`Practical Examples`,`Complete Playlists`],icon:kr,iconBg:`bg-red-50`,iconColor:`text-red-500`,lineColor:`bg-red-500`,shadowColor:`hover:shadow-[0_15px_40px_rgba(239,68,68,0.18)]`,buttonText:`Watch Tutorials`,buttonClass:`bg-red-50 text-red-500 hover:bg-red-100`,link:`https://www.youtube.com/results?search_query=tally+prime+tutorial`},{title:`Guides & Documentation`,description:`Access tutorials, knowledge articles, quick references, and detailed documentation to improve your understanding.`,points:[`Step-by-Step Guides`,`Reference Articles`,`Quick Learning Notes`],icon:Wr,iconBg:`bg-slate-100`,iconColor:`text-slate-700`,lineColor:`bg-slate-500`,shadowColor:`hover:shadow-[0_15px_40px_rgba(100,116,139,0.18)]`,buttonText:`View Guides`,buttonClass:`bg-slate-100 text-slate-700 hover:bg-slate-200`,link:`https://help.tallysolutions.com`},{title:`GST & Compliance`,description:`Stay updated with GST compliance, tax filing procedures, and government resources relevant to business accounting.`,points:[`GST Portal Access`,`Return Filing Help`,`Compliance Updates`],icon:ur,iconBg:`bg-green-50`,iconColor:`text-green-600`,lineColor:`bg-green-500`,shadowColor:`hover:shadow-[0_15px_40px_rgba(34,197,94,0.18)]`,buttonText:`GST Resources`,buttonClass:`bg-green-50 text-green-600 hover:bg-green-100`,link:`https://www.gst.gov.in`},{title:`Practice Materials`,description:`Download sample company data, exercises, worksheets, and practice files to build hands-on experience.`,points:[`Sample Data Files`,`Practice Exercises`,`Learning Worksheets`],icon:zr,iconBg:`bg-purple-50`,iconColor:`text-purple-600`,lineColor:`bg-purple-500`,shadowColor:`hover:shadow-[0_15px_40px_rgba(168,85,247,0.18)]`,buttonText:`Download Files`,buttonClass:`bg-purple-50 text-purple-600 hover:bg-purple-100`,link:`https://tallysolutions.com/download`}],r=[{slug:`company-setup`,level:`Level 01`,title:`Company Setup & Opening Balances`,description:`Create a new company, set financial year, create primary ledgers and enter opening balances. Generate a trial balance.`,difficulty:`Beginner`,duration:`30-45 mins`,icon:gr,color:`blue`},{slug:`gst-invoice-return`,level:`Level 02`,title:`GST Invoice & Return`,description:`Create GST compliant invoices, post sales & purchases, generate GSTR reports and reconcile data.`,difficulty:`Intermediate`,duration:`60-90 mins`,icon:Ti,color:`purple`},{slug:`inventory-stock`,level:`Level 03`,title:`Inventory Movement`,description:`Configure stock items, manage godowns, stock journals and inventory valuation reports.`,difficulty:`Intermediate`,duration:`45-60 mins`,icon:yi,color:`indigo`},{slug:`payroll-management`,level:`Level 04`,title:`Payroll Month End`,description:`Create employees, assign salary structures and generate payslips.`,difficulty:`Advanced`,duration:`60 mins`,icon:Ji,color:`orange`}],i={default:{dot:`from-[#155A96] to-[#1D6FB8]`,badge:`bg-[#EAF3F8] text-[#155A96]`,border:`border-[#155A96]`,activeBg:`from-[#F4F8FB] to-white`}},a={software:{title:`TallyPrime Software`,description:`Download the latest TallyPrime installer with official updates and business management features.`,button:`Download Tally`,link:`https://tallysolutions.com`},guides:{title:`Cheat Sheets & Guides`,description:`GST workflows, voucher shortcuts, accounting references and quick learning PDFs.`,button:`Download Guides`,link:`https://tallysolutions.com/download/`},sampleData:{title:`Sample Company Data`,description:`Practice datasets containing companies, ledgers, vouchers and GST transactions.`,button:`Get Sample Data`,link:`https://tallysolutions.com/`}},o=[{title:`Accounts Executive`,level:`Entry Level`,salary:`₹2L - ₹4L`,icon:hr,color:`blue`,description:`Manage ledgers, vouchers, bank reconciliation and daily accounting operations.`},{title:`GST Executive`,level:`Intermediate`,salary:`₹2.5L - ₹5L`,icon:Ti,color:`purple`,description:`Handle GST filing, compliance reporting, invoices and tax documentation.`},{title:`MIS Analyst`,level:`Intermediate`,salary:`₹3L - ₹6L`,icon:br,color:`emerald`,description:`Generate reports, business insights and data analysis for management.`},{title:`Payroll Executive`,level:`Advanced`,salary:`₹3L - ₹5.5L`,icon:Ji,color:`orange`,description:`Manage employee salaries, statutory deductions and payroll processing.`}],[s,c]=(0,w.useState)(0);return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(`div`,{className:`overflow-hidden`,children:[(0,F.jsxs)(`section`,{className:` \r
relative\r
overflow-hidden\r
scrollbar-hide\r
bg-white\r
pt-20 sm:pt-24 lg:pt-24\r
pb-10 sm:pb-12 md:pb-14\r
`,children:[(0,F.jsx)(`div`,{className:`\r
    hidden lg:block\r
    absolute\r
    top-0\r
    left-1/2\r
    -translate-x-1/2\r
    w-[700px]\r
    h-[700px]\r
    bg-[#155A96]/5\r
    blur-[150px]\r
    rounded-full\r
  `}),(0,F.jsx)(`div`,{className:`\r
    relative z-10\r
    max-w-7xl mx-auto\r
    px-4 sm:px-6\r
  `,children:(0,F.jsxs)(`div`,{className:`\r
      grid lg:grid-cols-2\r
      gap-8 lg:gap-12\r
      items-center\r
    `,children:[(0,F.jsx)($.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:(0,F.jsxs)(`div`,{className:`min-w-0`,children:[(0,F.jsxs)(`div`,{className:`\r
          flex flex-wrap items-center justify-center sm:justify-start gap-2\r
          px-5 py-2\r
          text-[#155A96]\r
          text-sm font-semibold\r
          mb-8\r
        `,children:[(0,F.jsx)(`span`,{children:`Certified`}),(0,F.jsx)(`span`,{children:`•`}),(0,F.jsx)(`span`,{children:`Hands-on`}),(0,F.jsx)(`span`,{children:`•`}),(0,F.jsx)(`span`,{children:`Job-ready`})]}),(0,F.jsxs)(`h1`,{className:`\r
            text-3xl\r
            sm:text-4xl\r
            lg:text-[48px]\r
            font-black\r
            font-bold\r
            leading-[1.1]\r
            tracking-[-1px]\r
            text-[#071426]\r
            \r
            max-w-full\r
\r
        `,children:[`Complete TallyPrime LMS-`,(0,F.jsx)(`span`,{className:`text-[#155A96]`,children:`From Basics To Payroll & GST`})]}),(0,F.jsx)(`p`,{className:`\r
          mt-5\r
          text-[15px]\r
          sm:text-[16px]\r
          md:text-[17px]\r
          leading-8\r
          sm:leading-9\r
          text-slate-600\r
          max-w-2xl\r
        `,children:`Structured curriculum, practical exercises, downloadable resources, and free trusted references to learn Tally ERP & TallyPrime fast.`}),(0,F.jsxs)(`div`,{className:`\r
          mt-8 sm:mt-10\r
          flex flex-col sm:flex-row\r
          items-stretch sm:items-center\r
          gap-4 sm:gap-5\r
          w-full\r
        `,children:[(0,F.jsxs)(`button`,{onClick:()=>window.open(`https://www.youtube.com/@balajiinfotechguntur7060`,`_blank`),className:`\r
            w-full\r
            sm:w-auto\r
            justify-center\r
            px-5 sm:px-7\r
            py-3\r
            text-base\r
            rounded-2xl\r
            bg-[#155A96]\r
            hover:bg-[#0F4D82]\r
            text-white\r
            font-semibold\r
            shadow-[0_20px_50px_rgba(21,90,150,0.20)]\r
            hover:scale-[1.03]\r
            transition-all duration-300\r
            flex items-center gap-3\r
          `,children:[(0,F.jsx)(Si,{size:20,fill:`white`}),`Start Learning`]}),(0,F.jsx)(`a`,{href:`#resourses`,children:(0,F.jsxs)(`button`,{className:`\r
          w-full\r
          sm:w-auto\r
          justify-center\r
          px-5 sm:px-7\r
          py-3\r
          text-base\r
          rounded-2xl\r
          border border-[#155A96]/15\r
          bg-white/10\r
          backdrop-blur-xl\r
          text-black\r
          font-semibold\r
          hover:bg-white/15\r
          transition-all duration-300\r
          flex items-center gap-3\r
        `,children:[(0,F.jsx)(si,{size:20}),`Free Resources`]})})]})]})}),(0,F.jsx)($.div,{className:`\r
      relative\r
      flex justify-center lg:justify-end\r
      order-1 lg:order-2`,initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},transition:{duration:1,ease:`easeOut`,delay:`0.2`},viewport:{once:!0},children:(0,F.jsx)(`div`,{className:`relative mt-4 lg:mt-0`,children:(0,F.jsxs)(`div`,{className:`\r
    bg-white\r
    border border-slate-200\r
    rounded-[28px]\r
    p-6\r
    shadow-sm\r
    w-full\r
    max-w-full\r
    sm:max-w-[500px]\r
  `,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between mb-5`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-xs uppercase tracking-wider text-[#155A96] font-semibold`,children:`Course Snapshot`}),(0,F.jsx)(`h3`,{className:`mt-2 text-2xl font-bold text-[#071426]`,children:`TallyPrime LMS`})]}),(0,F.jsx)(`div`,{className:`\r
        px-3 py-2\r
        rounded-xl\r
        bg-[#EEF4F8]\r
        text-[#155A96]\r
        text-sm\r
        font-medium\r
      `,children:`Beginner → Advanced`})]}),(0,F.jsx)(`div`,{className:`flex flex-wrap gap-2 mb-6`,children:[`Accounting`,`GST`,`Inventory`,`Payroll`,`Banking`,`Reports`].map(e=>(0,F.jsx)(`span`,{className:`\r
          px-3 py-1.5\r
          rounded-full\r
          bg-[#F8FAFC]\r
          border border-slate-200\r
          text-sm\r
          text-slate-700\r
        `,children:e},e))}),(0,F.jsxs)(`div`,{className:`grid grid-cols-3 gap-3 mb-6`,children:[(0,F.jsxs)(`div`,{className:`text-center p-4 rounded-2xl bg-[#F8FAFC]`,children:[(0,F.jsx)(`h4`,{className:`text-2xl font-bold text-[#071426]`,children:`40+`}),(0,F.jsx)(`p`,{className:`text-xs text-[#64748B]`,children:`Modules`})]}),(0,F.jsxs)(`div`,{className:`text-center p-4 rounded-2xl bg-[#F8FAFC]`,children:[(0,F.jsx)(`h4`,{className:`text-2xl font-bold text-[#071426]`,children:`120+`}),(0,F.jsx)(`p`,{className:`text-xs text-[#64748B]`,children:`Videos`})]}),(0,F.jsxs)(`div`,{className:`text-center p-4 rounded-2xl bg-[#F8FAFC]`,children:[(0,F.jsx)(`h4`,{className:`text-2xl font-bold text-[#071426]`,children:`25+`}),(0,F.jsx)(`p`,{className:`text-xs text-[#64748B]`,children:`Assignments`})]})]}),(0,F.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,F.jsx)(`button`,{onClick:()=>window.open(`https://tallysolutions.com/`,`_blank`),className:`\r
        px-5 py-3\r
        rounded-xl\r
        bg-[#155A96]\r
        hover:bg-[#0F4D82]\r
        text-white\r
        font-medium\r
      `,children:`Tally Official`}),(0,F.jsx)(`button`,{onClick:()=>window.open(`https://www.youtube.com/@balajiinfotechguntur7060`,`_blank`),className:`\r
        px-5 py-3\r
        rounded-xl\r
        border border-slate-200\r
        text-[#071426]\r
        font-medium\r
      `,children:`YouTube Tutorials`})]})]})})})]})})]}),(0,F.jsxs)(`section`,{className:`relative py-10 sm:py-12 md:py-12 px-4 sm:px-6 bg-white overflow-hidden`,children:[(0,F.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px]\r
sm:w-[500px] sm:h-[500px]\r
lg:w-[700px] lg:h-[700px] bg-[#155A96]/5 blur-[150px] rounded-full`}),(0,F.jsx)(`div`,{className:`max-w-7xl mx-auto relative z-10`,children:(0,F.jsxs)(`div`,{className:`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`\r
        inline-flex \r
        items-center\r
        px-3 py-1.5\r
        rounded-full\r
        bg-[#EEF4FF]\r
        text-[#155A96]\r
        font-medium\r
        text-sm`,children:`About TallyPrime`}),(0,F.jsxs)(`h2`,{className:`\r
        mt-6\r
        text-2xl\r
sm:text-3xl\r
md:text-4xl\r
        font-bold\r
        text-[#071426]\r
        leading-tight`,children:[`Why Learn`,(0,F.jsxs)(`span`,{className:`text-[#155A96]`,children:[` `,`TallyPrime?`]})]}),(0,F.jsx)(`p`,{className:`\r
        mt-4\r
text-[15px]\r
        text-slate-600\r
        leading-relaxed`,children:`TallyPrime (previously Tally.ERP) is the leading accounting & business management software used widely by SMEs and Enterprises. Learn how to manage books perform GST compliance, control inventory and process payroll - all within one powerful platform.`}),(0,F.jsxs)(`div`,{className:`mt-6 grid sm:grid-cols-2 gap-4`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsx)(`div`,{className:`w-9 h-9 rounded-xl bg-[#EEF4FF] flex items-center justify-center`,children:(0,F.jsx)(fr,{className:`w-4 h-4 text-[#071426]`})}),(0,F.jsx)(`span`,{className:`font-medium text-[#071426] text-sm sm:text-base`,children:`Accounting & BookKeeping`})]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsx)(`div`,{className:`w-9 h-9 rounded-xl bg-[#EEF4FF] flex items-center justify-center`,children:(0,F.jsx)(Ei,{className:`w-4 h-4 text-[#071426]`})}),(0,F.jsx)(`span`,{className:`font-medium text-[#071426] text-sm sm:text-base`,children:`GST & TAX compliance`})]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsx)(`div`,{className:`w-9 h-9 rounded-xl bg-[#EEF4FF] flex items-center justify-center`,children:(0,F.jsx)(pr,{className:`w-4 h-4 text-[#071426]`})}),(0,F.jsx)(`span`,{className:`font-medium text-[#071426] text-sm sm:text-base`,children:`Inventory & Stock Management`})]}),(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsx)(`div`,{className:`w-9 h-9 rounded-xl bg-[#EEF4FF] flex items-center justify-center`,children:(0,F.jsx)(Ki,{className:`w-4 h-4 text-[#071426]`})}),(0,F.jsx)(`span`,{className:`font-medium text-[#071426] text-sm sm:text-base`,children:`Payroll Processing`})]})]})]}),(0,F.jsx)(`div`,{className:`\r
      rounded-3xl sm:rounded-[32px]\r
      overflow-hidden\r
      border border-slate-200\r
      bg-white/ 70\r
      shadow-sm`,children:(0,F.jsxs)(`div`,{className:`p-5 sm:p-6`,children:[(0,F.jsx)(`h3`,{className:`\r
            text-xl sm:text-2xl\r
            font-bold\r
            text-[#071426]\r
            mb-4`,children:`Who can Learn?`}),(0,F.jsx)(`p`,{className:`\r
          text-slate-600\r
          leading-relaxed\r
          mb-8`,children:`Our training programs are designed for beginners as well as professionals looking to strengthen their accounting and business management skills.`}),(0,F.jsxs)(`div`,{className:`flex flex-wrap gap-3 mb-6`,children:[(0,F.jsx)(`span`,{className:`px-3 py-1.5 text-sm rounded-full bg-[#F8FAFC] border border-slate-200`,children:`Students`}),(0,F.jsx)(`span`,{className:`px-3 py-1.5 text-sm rounded-full bg-[#F8FAFC] border border-slate-200`,children:`Accountants`}),(0,F.jsx)(`span`,{className:`px-3 py-1.5 text-sm rounded-full bg-[#F8FAFC] border border-slate-200`,children:`Business Owners`}),(0,F.jsx)(`span`,{className:`px-3 py-1.5 text-sm rounded-full bg-[#F8FAFC] border border-slate-200`,children:`Finance Professionals`})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3 gap-5`,children:[(0,F.jsxs)(`div`,{className:`text-center`,children:[(0,F.jsx)(ur,{className:`mx-auto mb-3 text-[#155A96]`}),(0,F.jsx)(`p`,{className:`font-medium text-sm`,children:`No Prior Experience Needed`})]}),(0,F.jsxs)(`div`,{className:`text-center`,children:[(0,F.jsx)(mr,{className:`mx-auto mb-3 text-[#155A96]`}),(0,F.jsx)(`p`,{className:`font-medium text-sm`,children:`Practical Exercises`})]}),(0,F.jsxs)(`div`,{className:`text-center`,children:[(0,F.jsx)(gr,{className:`mx-auto mb-3 text-[#155A96]`}),(0,F.jsx)(`p`,{className:`font-medium text-sm`,children:`Industry-Relevant Training`})]})]})]})})]})})]}),(0,F.jsx)(`section`,{className:`relative py-10 sm:py-12 md:py-12 overflow-hidden bg-[#FAFBFC]`,children:(0,F.jsxs)(`div`,{className:`relative max-w-7xl mx-auto px-4 sm:px-6`,children:[(0,F.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-6`,children:[(0,F.jsxs)(`div`,{className:`\r
        inline-flex items-center gap-2\r
        px-5 py-1\r
        rounded-full\r
        border border-[#D7E5EF]\r
        bg-[#EEF4F8]\r
        text-[#155A96]\r
        text-sm font-semibold\r
        shadow-sm\r
      `,children:[(0,F.jsx)(P,{className:`w-4 h-4`}),`Interactive Learning Journey`]}),(0,F.jsxs)(`h2`,{className:`\r
        mt-4\r
        text-2xl\r
        sm:text-3xl\r
        md:text-4xl\r
        font-black\r
        tracking-tight\r
        text-[#0F172A]\r
        leading-tight\r
      `,children:[`Master TallyPrime`,` `,(0,F.jsx)(`span`,{className:`text-[#155A96]`,children:`Step By Step`})]}),(0,F.jsx)(`p`,{className:`\r
        mt-4\r
text-[14px]\r
sm:text-[15px]\r
leading-8\r
      `,children:`A structured roadmap designed to take you from accounting fundamentals to advanced GST, payroll, inventory, and reporting workflows.`})]}),(0,F.jsx)(`div`,{className:`relative grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6`,children:t.map((e,t)=>(0,F.jsxs)(`div`,{className:`\r
            group\r
            relative\r
            rounded-2xl\r
            border border-[#D7E5EF]\r
            bg-white\r
            overflow-hidden\r
            shadow-[0_10px_40px_rgba(15,23,42,0.05)]\r
            hover:-translate-y-2\r
            hover:shadow-[0_25px_70px_rgba(21,90,150,0.10)]\r
            transition-all duration-500\r
          `,children:[(0,F.jsx)(`div`,{className:`\r
            absolute top-5 right-5\r
            text-3xl\r
            font-black\r
            text-[#D7E5EF]\r
            select-none\r
          `,children:e.step}),(0,F.jsxs)(`div`,{className:`relative h-[150px] sm:h-[170px] overflow-hidden`,children:[(0,F.jsx)(`img`,{src:e.image,alt:e.title,className:`\r
    w-full\r
    h-full\r
    object-cover\r
    group-hover:scale-110\r
    transition-transform duration-700\r
  `}),(0,F.jsx)(`div`,{className:`\r
              absolute inset-0\r
              bg-gradient-to-t\r
              from-black/60\r
              via-black/10\r
              to-transparent\r
            `}),(0,F.jsx)(`div`,{className:`\r
              absolute top-5 left-5\r
              px-3 py-1.5\r
              rounded-full\r
              bg-white/20\r
              backdrop-blur-md\r
              border border-white/20\r
              text-white\r
              text-sm\r
              font-semibold\r
            `,children:e.level})]}),(0,F.jsxs)(`div`,{className:`p-4 sm:p-5`,children:[(0,F.jsx)(`h3`,{className:`\r
              text-lg\r
              sm:text-xl\r
              font-black\r
              text-[#0F172A]\r
              leading-snug\r
            `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
              mt-3\r
              text-sm\r
              leading-6\r
              text-[#64748B]\r
            `,children:e.description}),(0,F.jsxs)(`div`,{className:`\r
              mt-5\r
              flex flex-wrap gap-3\r
            `,children:[(0,F.jsxs)(`div`,{className:`\r
                flex items-center gap-2\r
                px-3 py-1.5\r
                rounded-full\r
                bg-[#EEF4F8]\r
                text-[#155A96]\r
                text-sm\r
                font-semibold\r
              `,children:[(0,F.jsx)(Nr,{className:`w-4 h-4`}),e.time]}),(0,F.jsxs)(`div`,{className:`\r
                flex items-center gap-2\r
                px-4 py-2\r
                rounded-full\r
                bg-[#EEF4F8]\r
                text-[#155A96]\r
                text-xs\r
                font-semibold\r
              `,children:[(0,F.jsx)(Kr,{className:`w-4 h-4`}),`Hands-on Labs`]})]}),(0,F.jsxs)(Mn,{to:`/courses/${e.slug}`,className:`\r
                mt-5\r
                inline-flex\r
                items-center\r
                gap-2\r
                text-[#155A96]\r
                font-bold\r
                group-hover:gap-4\r
                transition-all duration-300\r
              `,children:[`Start Module`,(0,F.jsx)(cr,{className:`w-5 h-5`})]})]})]},t))})]})}),(0,F.jsxs)(`section`,{id:`resourses`,className:`relative py-10 md:py-12 px-4 sm:px-6 bg-[#F8FAFC] overflow-hidden`,children:[(0,F.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#2F80FF]/5 blur-[150px] rounded-full`}),(0,F.jsxs)(`div`,{className:`max-w-7xl mx-auto relative z-10`,children:[(0,F.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-6`,children:[(0,F.jsx)(`span`,{className:`\r
          inline-flex\r
          items-center\r
          px-4 py-2\r
          rounded-full\r
          border border-[#D7E5EF]\r
          bg-[#EEF4F8]\r
          text-[#155A96]\r
          font-medium\r
          text-sm\r
        `,children:`Learning Resources`}),(0,F.jsx)(`h2`,{className:`\r
          mt-4\r
          text-2xl\r
          sm:text-3xl\r
          md:text-4xl\r
          font-bold\r
          text-[#071426]\r
        `,children:`Trusted Learning Resources`}),(0,F.jsx)(`p`,{className:`\r
          mt-4\r
          text-slate-600\r
          text-base\r
          sm:text-lg\r
          leading-relaxed\r
        `,children:`Access trusted tutorials, documentation, government resources, and practice materials to strengthen your TallyPrime knowledge.`})]}),(0,F.jsx)(`div`,{className:`\r
    max-w-6xl\r
    mx-auto\r
    grid\r
    grid-cols-1\r
    md:grid-cols-3\r
    gap-5\r
  `,children:n.map((e,t)=>(0,F.jsxs)(`a`,{href:e.link,target:`_blank`,rel:`noopener noreferrer`,className:`
        group
        relative
        overflow-hidden
        rounded-[28px]
        border border-[#D7E5EF]
        bg-white
        p-5 sm:p-6
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_20px_60px_rgba(21,90,150,0.08)]

        ${t===0?`md:col-span-2 md:row-span-1`:``}
      `,children:[(0,F.jsx)(`div`,{className:`\r
          w-14 h-14\r
          rounded-2xl\r
          bg-[#EEF4F8]\r
          flex items-center justify-center\r
          mb-4\r
        `,children:(0,F.jsx)(e.icon,{className:`\r
            w-7 h-7\r
            text-[#155A96]\r
          `})}),(0,F.jsx)(`h3`,{className:`\r
          text-[22px]\r
          sm:text-[24px]\r
          font-bold\r
          text-[#071426]\r
          mb-4\r
        `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
          text-[#64748B]\r
          leading-7\r
          text-[15px]\r
          sm:text-base\r
          mb-6\r
        `,children:e.description}),(0,F.jsxs)(`div`,{className:`\r
          flex items-center\r
          gap-2\r
          text-[#155A96]\r
          font-semibold\r
          group-hover:gap-4\r
          transition-all duration-300\r
        `,children:[`Explore Resource`,(0,F.jsx)(cr,{className:`\r
            w-5 h-5\r
          `})]}),(0,F.jsx)(`div`,{className:`\r
          absolute\r
          bottom-0\r
          left-0\r
          h-[4px]\r
          w-0\r
          bg-[#155A96]\r
          transition-all duration-500\r
          group-hover:w-full\r
        `})]},t))})]})]}),(0,F.jsx)(`section`,{id:`practice-cards`,className:`py-10 bg-white`,children:(0,F.jsxs)(`div`,{className:`max-w-6xl mx-auto px-6`,children:[(0,F.jsxs)(`div`,{className:`text-center mb-12`,children:[(0,F.jsx)(`span`,{className:`\r
          inline-flex\r
          items-center\r
          px-4 py-2\r
          rounded-full\r
          bg-[#EAF3F8]\r
          text-[#155A96]\r
          text-sm\r
          font-medium\r
        `,children:`Practice Lab`}),(0,F.jsx)(`h2`,{className:`\r
          mt-5\r
          text-2xl\r
          sm:text-3xl\r
          md:text-4xl\r
          font-bold\r
          text-[#071426]\r
        `,children:`Hands-On Practice Lab`}),(0,F.jsx)(`p`,{className:`\r
          mt-4\r
          text-slate-600\r
          text-base\r
          sm:text-lg\r
          leading-relaxed\r
        `,children:`Apply your knowledge with real-world accounting, GST, inventory and payroll scenarios.`})]}),(0,F.jsx)(`div`,{className:`relative`,children:r.map((t,n)=>{console.log(`Exercise:`,t),console.log(`Slug:`,t.slug);let a=i.default,o=t.icon;return(0,F.jsxs)(`div`,{className:`relative pl-12 pb-8`,children:[n!==r.length-1&&(0,F.jsx)(`div`,{className:`\r
                absolute\r
                left-[15px]\r
                top-10\r
                w-[2px]\r
                h-full\r
                bg-slate-200\r
              `}),(0,F.jsx)(`div`,{className:`\r
              absolute\r
              left-0\r
              top-2\r
              w-10 h-10\r
              rounded-full\r
              bg-[#155A96]\r
              text-white\r
              flex\r
              items-center\r
              justify-center\r
              font-bold\r
              shadow-lg\r
            `,children:n+1}),(0,F.jsxs)(`div`,{className:`
              rounded-3xl
              overflow-hidden
              border
              border-slate-200
              transition-all
              duration-500

              ${s===n?`border-l-4 ${a.border} bg-[#F4F8FB] ${a.activeBg}`:`bg-white`}

              hover:shadow-xl
            `,children:[(0,F.jsxs)(`button`,{onClick:()=>c(s===n?null:n),className:`\r
                w-full\r
                flex\r
                items-center\r
                justify-between\r
                text-left\r
                p-6\r
              `,children:[(0,F.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,F.jsx)(`div`,{className:`
                    w-14 h-14
                    rounded-2xl
                    flex items-center justify-center
                    ${a.badge}
                  `,children:(0,F.jsx)(o,{size:28})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`span`,{className:`\r
                      text-xs\r
                      font-semibold\r
                      uppercase\r
                      tracking-[2px]\r
                      text-[#155A96]\r
                    `,children:t.level}),(0,F.jsx)(`h3`,{className:`\r
                      mt-2\r
                      text-lg\r
                      sm:text-xl\r
                      font-bold\r
                      text-[#071426]\r
                    `,children:t.title})]})]}),(0,F.jsx)(`div`,{className:`
                  transition-transform duration-300
                  ${s===n?`rotate-180`:``}
                `,children:(0,F.jsx)(wr,{size:20,className:`
                  transition-transform duration-300
                  ${s===n?`rotate-180`:``}
                `})})]}),s===n&&(0,F.jsxs)(`div`,{className:`\r
                  px-5\r
                  pb-5\r
                  border-t\r
                  border-slate-100\r
                `,children:[(0,F.jsx)(`p`,{className:`\r
                    mt-4\r
                    text-slate-600\r
                    leading-relaxed\r
                  `,children:t.description}),(0,F.jsxs)(`div`,{className:`\r
                    mt-5\r
                    flex\r
                    flex-wrap\r
                    gap-3\r
                  `,children:[(0,F.jsxs)(`span`,{className:`
                      px-4 py-2
                      rounded-full
                      text-[#155A96]
                      text-sm
                      font-medium
                      ${a.badge}
                    `,children:[`● `,t.difficulty]}),(0,F.jsxs)(`span`,{className:`\r
                      px-4 py-2\r
                      rounded-full\r
                      bg-slate-100\r
                      text-slate-600\r
                      text-sm\r
                      font-medium\r
                    `,children:[`⏱ `,t.duration]})]}),(0,F.jsx)(`button`,{onClick:()=>e(`/lms/${t.slug}`),className:`\r
                    mt-4\r
                    flex\r
                    items-center\r
                    gap-2\r
                    text-[#155A96]\r
                    hover:text-[#0F4E82]\r
                    font-semibold\r
                    hover:gap-4\r
                    transition-all\r
                  `,children:`Start Exercise →`})]})]})]},n)})})]})}),(0,F.jsx)(`section`,{className:`py-10 md:py-12 px-4 sm:px-6 bg-[#F8FAFC]`,children:(0,F.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6`,children:[(0,F.jsx)(`div`,{className:`absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#155A96]/5 blur-[150px] rounded-full`}),(0,F.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-8`,children:[(0,F.jsx)(`span`,{className:`\r
          inline-flex\r
          items-center\r
          px-4 py-2\r
          rounded-full\r
          bg-[#EAF3F8]\r
          text-[#155A96]\r
          text-sm\r
          font-medium\r
        `,children:`Downloads`}),(0,F.jsx)(`h2`,{className:`\r
          mt-4\r
          text-3xl\r
          md:text-4xl\r
          font-bold\r
          text-[#071426]\r
        `,children:`Download Center`}),(0,F.jsx)(`p`,{className:`\r
          mt-4\r
          text-slate-600\r
          text-lg\r
          leading-relaxed\r
        `,children:`Everything you need to practice, learn, and master TallyPrime.`})]}),(0,F.jsxs)(`div`,{className:`grid md:grid-cols-2 lg:grid-cols-4 gap-5`,children:[(0,F.jsxs)(`div`,{className:`\r
            flex-1\r
            rounded-[28px]\r
            border\r
            border-slate-200\r
            bg-white\r
            p-4\r
            hover:shadow-xl\r
            transition-all\r
          `,children:[(0,F.jsx)(`div`,{className:`\r
              w-10 h-10\r
              rounded-2xl\r
              bg-[#F4F8FB]\r
              flex\r
              items-center\r
              justify-center\r
            `,children:(0,F.jsx)(zr,{size:24,className:`text-[#155A96]`})}),(0,F.jsx)(`h3`,{className:`\r
              mt-4\r
              text-lg\r
              font-bold\r
              text-[#071426]\r
            `,children:a.software.title}),(0,F.jsx)(`p`,{className:`\r
              mt-3\r
              text-slate-600\r
              text-sm leading-6\r
            `,children:a.software.description}),(0,F.jsxs)(`a`,{href:a.software.link,className:`\r
              mt-4\r
              inline-flex\r
              items-center\r
              gap-2\r
              font-semibold\r
              text-[#155A96]\r
            `,children:[a.software.button,(0,F.jsx)(cr,{size:18})]})]}),(0,F.jsxs)(`div`,{className:`\r
            flex-1\r
            rounded-[28px]\r
            border\r
            border-slate-200\r
            bg-white\r
            p-4\r
            hover:shadow-xl\r
            transition-all\r
          `,children:[(0,F.jsx)(`div`,{className:`\r
              w-10 h-10\r
              rounded-2xl\r
              bg-[#F4F8FB]\r
              flex\r
              items-center\r
              justify-center\r
            `,children:(0,F.jsx)(Wr,{size:24,className:`text-[#155A96]`})}),(0,F.jsx)(`h3`,{className:`\r
              mt-4\r
              text-lg\r
              font-bold\r
              text-[#071426]\r
            `,children:a.guides.title}),(0,F.jsx)(`p`,{className:`\r
              mt-3\r
              text-slate-600\r
              text-sm leading-6\r
            `,children:a.guides.description}),(0,F.jsxs)(`a`,{href:a.guides.link,className:`\r
              mt-4\r
              inline-flex\r
              items-center\r
              gap-2\r
              font-semibold\r
              text-[#155A96]\r
            `,children:[a.guides.button,(0,F.jsx)(cr,{size:18})]})]}),(0,F.jsxs)(`div`,{className:`\r
            flex-1\r
            rounded-[28px]\r
            border\r
            border-slate-200\r
            bg-white\r
            p-4\r
            hover:shadow-xl\r
            transition-all\r
          `,children:[(0,F.jsx)(`div`,{className:`\r
              w-10 h-10\r
              rounded-2xl\r
              bg-[#F4F8FB]\r
              flex\r
              items-center\r
              justify-center\r
            `,children:(0,F.jsx)(qr,{size:24,className:`text-[#155A96]`})}),(0,F.jsx)(`h3`,{className:`\r
              mt-4\r
              text-lg\r
              font-bold\r
              text-[#071426]\r
            `,children:a.sampleData.title}),(0,F.jsx)(`p`,{className:`\r
              mt-3\r
              text-slate-600\r
              text-sm leading-6\r
            `,children:a.sampleData.description}),(0,F.jsxs)(`a`,{href:a.sampleData.link,className:`\r
              mt-4\r
              inline-flex\r
              items-center\r
              gap-2\r
              font-semibold\r
              text-[#155A96]\r
            `,children:[a.sampleData.button,(0,F.jsx)(cr,{size:18})]})]}),(0,F.jsxs)(`div`,{className:`\r
      rounded-2xl\r
      border border-slate-200\r
      bg-white\r
      p-4\r
      hover:shadow-xl\r
      transition-all\r
    `,children:[(0,F.jsx)(`div`,{className:`\r
        w-10 h-10\r
        rounded-xl\r
        bg-[#F4F8FB]\r
        flex items-center justify-center\r
        mb-4\r
      `,children:(0,F.jsx)(Mr,{size:20,className:`text-[#155A96]`})}),(0,F.jsx)(`h3`,{className:`\r
        text-lg\r
        font-bold\r
        text-[#071426]\r
        mb-2\r
      `,children:`Practice Worksheets`}),(0,F.jsx)(`p`,{className:`\r
        text-sm\r
        text-slate-600\r
        leading-6\r
        mb-4\r
      `,children:`Test your TallyPrime knowledge with practical exercises, worksheets, and real-world accounting scenarios.`}),(0,F.jsx)(`a`,{href:`#practice-cards`,className:`\r
        inline-flex\r
        items-center\r
        gap-2\r
        text-[#155A96]\r
        font-semibold\r
      `,children:`Start Practice →`})]})]})]})}),(0,F.jsx)(`section`,{className:`py-10 md:py-12 px-4 sm:px-6 bg-[#F8FAFC]`,children:(0,F.jsxs)(`div`,{className:`container mx-auto px-6`,children:[(0,F.jsxs)(`div`,{className:`text-center max-w-4xl mx-auto mb-8`,children:[(0,F.jsx)(`span`,{className:`inline-flex px-4 py-2 rounded-full bg-[#EAF3F8] text-[#155A96] text-sm font-medium`,children:`Career Opportunities`}),(0,F.jsx)(`h2`,{className:`mt-4 text-3xl\r
          md:text-4xl font-bold text-[#071426]`,children:`Career Impact & Job Roles`}),(0,F.jsx)(`p`,{className:`mt-4 text-lg text-slate-600 leading-relaxed`,children:`Build practical accounting skills and qualify for multiple finance and business operation roles across SMEs, retail, manufacturing and enterprise organizations.`})]}),(0,F.jsx)(`div`,{className:`relative`,children:(0,F.jsx)(`div`,{className:`grid lg:grid-cols-4 gap-6 relative`,children:o.map((e,t)=>{let n=e.icon;return(0,F.jsxs)(`div`,{className:`\r
            group\r
            bg-white\r
            rounded-3xl\r
            border border-slate-200\r
            p-5\r
            text-center\r
            hover:-translate-y-2\r
            hover:shadow-2xl\r
            transition-all\r
            duration-300\r
          `,children:[(0,F.jsx)(`div`,{className:`\r
              w-16 h-16\r
              mx-auto\r
              rounded-2xl\r
              bg-[#EEF4FF]\r
              flex items-center justify-center\r
              mb-4\r
            `,children:(0,F.jsx)(n,{className:`w-8 h-8 text-[#155A96]`})}),(0,F.jsx)(`h3`,{className:`text-xl font-bold text-[#071426]`,children:e.title}),(0,F.jsx)(`span`,{className:`\r
              inline-flex\r
              mt-3\r
              px-4 py-2\r
              rounded-full\r
              bg-slate-100\r
              text-slate-600\r
              text-sm\r
            `,children:e.level}),(0,F.jsx)(`p`,{className:`mt-4 text-slate-600 leading-relaxed`,children:e.description}),(0,F.jsx)(`div`,{className:`\r
              mt-5\r
              inline-flex\r
              px-4 py-2\r
              rounded-full\r
              bg-green-50\r
              text-green-700\r
              font-semibold\r
            `,children:e.salary})]},t)})})})]})}),(0,F.jsx)(`section`,{className:`py-10 sm:py-12 px-4 sm:px-6 bg-white`,children:(0,F.jsxs)(`div`,{className:`max-w-6xl mx-auto`,children:[(0,F.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto`,children:[(0,F.jsx)(`span`,{className:`\r
        inline-flex items-center gap-2\r
        px-4 py-2\r
        rounded-full\r
        border border-[#155A96]\r
        bg-[#EAF3F8]\r
        text-sm font-semibold\r
        text-[#155A96]\r
      `,children:`Learning Support`}),(0,F.jsxs)(`h2`,{className:`\r
        mt-4\r
        text-[30px]\r
        sm:text-4xl\r
        font-black\r
        leading-tight\r
        text-[#0F172A]\r
      `,children:[`Quick`,(0,F.jsxs)(`span`,{className:`text-#155A96`,children:[` `,`Questions`]})]}),(0,F.jsx)(`p`,{className:`\r
        mt-4\r
        text-[15px] md:text-[16px]\r
        leading-8\r
        text-[#64748B]\r
      `,children:`Everything you need to know about the LMS, learning roadmap, exercises, downloads, and certification support.`})]}),(0,F.jsx)(`div`,{className:`mt-8 grid md:grid-cols-2 gap-6`,children:[{category:`Learning`,question:`Do I need accounting knowledge before starting?`,answer:`No. The LMS roadmap starts from absolute basics including company creation, ledgers, vouchers, and accounting workflows.`},{category:`Practice`,question:`Will I get practice exercises and sample company data?`,answer:`Yes. Every major module includes practical exercises, downloadable datasets, GST templates, and workflow simulations.`},{category:`Learning`,question:`Can I learn GST, payroll, and inventory together?`,answer:`Absolutely. The roadmap is designed as a complete business accounting workflow covering GST, payroll, banking, inventory, and reports.`},{category:`Career`,question:`Is this suitable for job preparation?`,answer:`Yes. The LMS includes real-world accounting scenarios, hands-on labs, invoice exercises, and business reporting workflows used in companies.`},{category:`Certification`,question:`Do you provide certification guidance?`,answer:`Yes. We help learners prepare for Tally certifications and provide guidance for practical business accounting implementation.`}].map((e,t)=>(0,F.jsxs)(`details`,{className:`\r
            group\r
            h-fit\r
            rounded-[25px]\r
            border border-[#E2E8F0]\r
            bg-[#F8FAFC]/70\r
            backdrop-blur-xl\r
            p-5 sm:p-7 md:p-8\r
            hover:border-[#CBD5E1]\r
            hover:shadow-[0_15px_50px_rgba(37,99,235,0.08)]\r
            transition-all duration-500\r
            `,children:[(0,F.jsxs)(`summary`,{className:`\r
              flex items-start justify-between\r
              gap-6\r
              cursor-pointer\r
              list-none\r
            `,children:[(0,F.jsxs)(`div`,{className:`flex-1`,children:[(0,F.jsx)(`span`,{className:`\r
                  inline-flex\r
                  mb-3\r
                  px-3 py-1\r
                  rounded-full\r
                  bg-[#EEF4FF]\r
                  text-[#155A96]\r
                  text-xs\r
                  font-semibold\r
                `,children:e.category}),(0,F.jsx)(`h3`,{className:`\r
                  text-[15px]\r
                  sm:text-[18px]\r
                  font-bold\r
                  text-[#0F172A]\r
                  leading-snug\r
                `,children:e.question})]}),(0,F.jsx)(`div`,{className:`\r
                flex items-center justify-center\r
                w-12 h-12\r
                rounded-2xl\r
                bg-[#155A96]\r
                text-white\r
                shrink-0\r
                transition-transform\r
                duration-500\r
                group-open:rotate-180\r
              `,children:(0,F.jsx)(wr,{className:`w-5 h-5`})})]}),(0,F.jsx)(`div`,{className:`\r
            overflow-hidden\r
            transition-all duration-500\r
          `,children:(0,F.jsx)(`p`,{className:`\r
              pt-6\r
              text-[#64748B]\r
              leading-8\r
              text-[12px]\r
              sm:text-[15px]\r
              md:text-[16px]\r
              max-w-4xl\r
            `,children:e.answer})})]},t))})]})})]})})}var Dy=[{slug:`basics-ledgers`,title:`Accounting Basics & Ledgers`,subtitle:`Learn company creation, ledgers, voucher entries and accounting fundamentals in TallyPrime.`,level:`Beginner`,duration:`3-4 Hours`,lessons:4,resources:6,heroImage:`https://images.unsplash.com/photo-1554224155-6726b3ff858f`,sections:[{id:`overview`,type:`overview`,title:`Overview`,content:`This course introduces accounting fundamentals using TallyPrime. You will learn company creation, ledgers, groups and voucher entries through practical examples.`,learn:[{icon:`download`,title:`Installation`,description:`Install and set prerequisites.`},{icon:`building`,title:`Company Creation`,description:`Set up companies with financial year and base currency.`},{icon:`book`,title:`Ledgers & Groups`,description:`Create chart of accounts and organize transactions.`},{icon:`receipt`,title:`Voucher Entries`,description:`Record Payment, Receipt, Contra and Journal vouchers.`}],note:`Every accounting transaction follows the double-entry system where every debit has an equal credit.`},{id:`install`,type:`steps`,title:`Installation & Setup`,duration:`5-10 Minutes`,intro:`Install TallyPrime and configure your environment before creating your first company.`,steps:[{title:`Download & Install`,description:`Get the latest installer from the vendor. Choose 64‑bit. Follow default prompts (path, desktop shortcut, allow firewall if asked).`},{title:`Prerequisites`,description:`Ensure you have admin rights, stable internet (for activation), and system date set correctly. Keep your organization’s GSTIN/PAN handy (if applicable).`},{title:`Create Data Folder`,description:`Make a dedicated D:AccountingDataYourCompany folder. Enable automatic backups in the software to a cloud drive.`},{title:`Regional Settings`,description:`Set base currency (INR), locale (India), and financial year start (commonly April 1 in India).`}],note:`Always keep a backup folder on another drive or cloud storage.`},{id:`company`,type:`steps`,title:`Creating A Company`,description:`Company master for books of accounts.`,steps:[{title:`Name & Legal Details`,description:`Enter Company Name, Address, Country, State, GSTIN and PAN details.`},{title:`Financial Year`,description:`Set the financial year start date and books beginning date.`},{title:`Currency & Symbols`,description:`Configure INR ₹ and number format settings.`},{title:`Security`,description:`Set an Admin password and optionally enable user roles such as Data Entry and Auditor.`},{title:`Backups`,description:`Enable auto-backup and maintain a weekly offsite backup.`}],note:`Keep separate Demo and Live companies. Use Demo for learning and Live for actual business transactions.`},{id:`ledgers`,type:`ledger`,icon:`book`,title:`Ledgers & Groups (Chart Of Accounts)`,description:`Groups organize ledgers into major accounting heads.`,groups:[{title:`Assets`,description:`Cash, Bank, Debtors, Inventory, Fixed Assets`},{title:`Liabilities`,description:`Creditors, Loans, Duties & Taxes`},{title:`Income`,description:`Sales, Interest Income`},{title:`Expenses`,description:`Purchases, Rent, Salaries, Utilities`}],examples:[{ledger:`Cash`,group:`Cash-in-Hand`},{ledger:`HDFC Bank`,group:`Banks`},{ledger:`Sales`,group:`Sales Accounts`},{ledger:`Purchases`,group:`Purchase Accounts`},{ledger:`Rent Expense`,group:`Indirect Expenses`},{ledger:`ABC Traders`,group:`Sundry Debtors`},{ledger:`XYZ Supplies`,group:`Sundry Creditors`}],note:`Avoid duplicate ledgers. Use one consistent naming convention throughout the organization.`,table:[{ledger:`Cash`,group:`Cash-in-Hand`,type:`Asset`,notes:`Petty cash and hand cash balances`},{ledger:`Bank A/C (HDFC)`,group:`Banks`,type:`Asset`,notes:`Enable bank reconciliation`},{ledger:`Sales`,group:`Sales Accounts`,type:`Income`,notes:`Set GST class if applicable`},{ledger:`Purchases`,group:`Purchase Accounts`,type:`Expense`,notes:`Link inventory if stock is used`},{ledger:`Rent Expense`,group:`Indirect Expenses`,type:`Expense`,notes:`Attach landlord details if required`},{ledger:`ABC Traders`,group:`Sundry Debtors`,type:`Asset`,notes:`Customer credit limit and terms`},{ledger:`XYZ Supplies`,group:`Sundry Creditors`,type:`Liability`,notes:`Vendor GSTIN and payment terms`}]},{id:`vouchers`,type:`voucher`,title:`Basic Voucher Entries`,description:`Payment, Receipt, Contra and Journal vouchers are used to record daily accounting transactions.`,rules:[`Assets/Expenses ↑ → Debit, ↓ → Credit`,`Liabilities/Income/Capital ↑ → Credit, ↓ → Debit`],vouchers:[{type:`payment`,badge:`PAYMENT`,title:`Payment Voucher`,subtitle:`Cash/Bank going out`,useWhen:`Paying expenses, suppliers, purchases and withdrawals.`,entry:[{date:`05-Apr-2025`,particulars:`Rent Expense A/c Dr`,dr:`₹25,000`,cr:``},{date:``,particulars:`To HDFC Bank A/c`,dr:``,cr:`₹25,000`}],narration:`Being office rent for April paid by NEFT.`},{type:`receipt`,badge:`RECEIPT`,title:`Receipt Voucher`,subtitle:`Cash/Bank coming in`,useWhen:`Receiving money from customers or other sources.`,entry:[{date:`06-Apr-2025`,particulars:`HDFC Bank A/c Dr`,dr:`₹40,000`,cr:``},{date:``,particulars:`To ABC Traders`,dr:``,cr:`₹40,000`}],narration:`Being part payment received against Inv# 112. Add receipt number/UTR.`},{type:`contra`,badge:`CONTRA`,title:`Contra Voucher`,subtitle:`Cash ↔ Bank transfers`,useWhen:`Cash deposited into bank or withdrawn from bank.`,entry:[{date:`07-Apr-2025`,particulars:`HDFC Bank A/c Dr`,dr:`₹15,000`,cr:``},{date:``,particulars:`To Cash A/c`,dr:``,cr:`₹15,000`}],narration:`Cash deposited into HDFC Bank. No income/expense ledgers involved.`},{type:`journal`,badge:`JOURNAL`,title:`Journal Voucher`,subtitle:`Adjustments, Non-cash`,useWhen:`Depreciation, provisions and adjustment entries.`,entry:[{date:`30-Apr-2025`,particulars:`Depreciation Expense A/c Dr`,dr:`₹5,000`,cr:``},{date:``,particulars:`To Furniture & Fixtures A/c`,dr:``,cr:`₹5,000`}],narration:`Monthly depreciation provided @ 10% p.a. Attach working papers.`}],mistakes:[`Using Payment/Receipt instead of Journal for non-cash adjustments.`,`Posting sales/purchase without proper tax ledgers configured.`,`Creating customer/vendor as Income/Expense ledgers.`]},{id:`roadmap`,type:`roadmap`,title:`Roadmap: From Zero To Confident Beginner`,description:`Follow this learning path step-by-step to build a strong foundation in Tally.`,steps:[{step:`01`,title:`Install & Configure`,description:`Install TallyPrime, set financial year, company data path, users and backups.`},{step:`02`,title:`Create Company & Masters`,description:`Create a company and configure groups, ledgers, customers and vendors.`},{step:`03`,title:`Record Basic Vouchers`,description:`Practice Payment, Receipt, Contra and Journal vouchers.`},{step:`04`,title:`Reconcile & Review`,description:`Perform bank reconciliation and verify accounting accuracy.`}]},{id:`practice`,type:`practice`,title:`Practice Labs & Quick Quiz`,description:`Apply your learning using practical accounting scenarios.`,labs:[{title:`Opening Balances`,difficulty:`Easy`,duration:`10 min`,tasks:[`Create Cash Ledger ₹8,000`,`Create HDFC Bank Ledger ₹22,000`,`Create Capital Ledger ₹30,000`,`Pass opening balance entry using Journal`]},{title:`Day-To-Day Entries`,difficulty:`Easy`,duration:`15 min`,tasks:[`Pay office rent ₹20,000 through bank`,`Receive ₹35,000 from ABC Traders`,`Deposit ₹10,000 cash into bank`]},{title:`Adjustments`,difficulty:`Medium`,duration:`20 min`,tasks:[`Provide depreciation ₹3,000 on Furniture`,`Create provision for expenses ₹5,000`,`Verify ledger balances`]}],quiz:[{question:`Which voucher is used for bank deposits?`,options:[`Payment`,`Receipt`,`Contra`,`Journal`],answer:`Contra`},{question:`ABC Traders usually belongs to?`,options:[`Sundry Creditors`,`Sundry Debtors`,`Indirect Expenses`,`Sales Accounts`],answer:`Sundry Debtors`},{question:`Depreciation entry is normally passed through?`,options:[`Payment`,`Receipt`,`Contra`,`Journal`],answer:`Journal`}]}]},{slug:`gst-taxation`,title:`GST & Taxation`,subtitle:`Configure GST, create tax-ledgers, prepare GST invoices, manage returns, RCM, credit/debit notes and learn e-invoice basics with real-world examples.`,level:`Intermediate`,duration:`6-8 Hours`,lessons:6,resources:6,heroImage:`/Balaji-Infotech/assets/taxation-Cygl-Kb6.png`,sections:[{id:`overview`,type:`overview`,title:`Overview`,content:`Learn GST configuration, tax ledgers, purchase and sales transactions, credit/debit notes, reverse charge mechanism (RCM), GST returns and e-invoicing through practical business examples.`,learn:[{icon:`book`,title:`GST Fundamentals`,description:`Understand GST concepts, GSTIN, HSN/SAC and tax structure.`},{icon:`receipt`,title:`Tax Ledgers`,description:`Create CGST, SGST, IGST and GST-related ledgers.`},{icon:`building`,title:`GST Transactions`,description:`Record GST purchases, sales and expenses.`},{icon:`download`,title:`Returns & Compliance`,description:`Prepare GST returns and understand filing workflow.`}],note:`GST compliance starts with correct ledger creation and accurate transaction recording.`},{id:`configure-gst`,type:`steps`,title:`Configure GST & Tax Ledgers`,duration:`15-20 Minutes`,intro:`Learn how to enable GST, create tax ledgers, configure HSN/SAC codes and ensure compliance settings are correctly applied.`,steps:[{title:`Enable GST Module`,description:`Enter GSTIN, state and place of supply rules.`},{title:`Create Tax Ledgers`,description:`Create CGST, SGST, IGST and Cess ledgers with proper naming conventions.`},{title:`Map Tax Rates`,description:`Link ledgers to GST rate slabs and assign them to products and services.`},{title:`HSN / SAC Codes`,description:`Configure HSN and SAC codes for products and services to ensure compliance.`},{title:`Compliance Settings`,description:`Enable automatic GST calculation in invoices and configure e-way bill settings.`}],checklist:[`GSTIN validated`,`Correct state mapping`,`Tax ledgers created`,`HSN/SAC codes added`,`Auto-calculation enabled`],note:`For interstate supplies IGST applies. For intrastate transactions GST is split between CGST and SGST. Always verify the place of supply.`},{id:`gst-invoices`,type:`invoiceTypes`,title:`GST Invoice Types & Creation`,invoices:[{title:`B2B Invoice (Taxable)`,description:`Show HSN, tax breakup and GSTINs for both parties.`,invoice:[`Invoice #INV1001`,`Date: 12-Aug-2025`,`Buyer: XYZ Pvt Ltd (GSTIN: 27XYZDE6789H1Z2)`,`Items: Supply – ₹50,000`,`Tax: CGST 9% ₹4,500 + SGST 9% ₹4,500`,`Total: ₹59,000`]},{title:`B2C Invoice (Retail)`,description:`Simplified format for consumers; show tax where applicable.`,invoice:[`Invoice #INV1002`,`Date: 13-Aug-2025`,`Buyer: Retail Customer`,`Items: Goods sold – ₹2,000`,`GST 18%: ₹360`,`Total: ₹2,360`]}],note:`Always capture HSN/SAC and tax breakup on B2B invoices for proper reconciliation. For exports, ensure LUT/Bond details are included.`},{id:`returns-rcm`,type:`gstReturns`,title:`Returns, RCM, Credit & Debit Notes`,cards:[{title:`Returns Overview`,content:`Know which returns (GSTR-1, GSTR-3B, annual) you need to file and reconcile sales before filing. Learn about due dates, late fees and input tax credit rules.`},{title:`Reverse Charge Mechanism (RCM)`,content:`When the recipient pays tax instead of the supplier. Common for imports and notified supplies. Record correctly to avoid mismatches and claim ITC where applicable.`}],creditDebitNote:{title:`Credit / Debit Notes`,content:`Reference the original invoice, specify the reason and adjust taxable values in returns. Common reasons include goods returned, price revisions and clerical corrections.`},tip:`Always reconcile sales, purchases and GST liability before filing returns to avoid notices and mismatches.`},{id:`e-invoice`,type:`eInvoice`,title:`E-Invoice Basics`,description:`E-invoice (IRP) applies beyond turnover thresholds. Generate IRN & QR after submitting JSON to IRP. Keep signed JSON for audit trail.`,process:[`Prepare invoice JSON per schema with seller, buyer, item and tax blocks.`,`Submit to IRP via software to obtain IRN and signed QR code.`,`Store IRN and signed JSON for compliance and audit requirements.`],note:`Thresholds change periodically. Verify current government rules before enabling e-invoicing. Businesses above prescribed turnover limits must comply.`},{id:`faq`,type:`faq`,title:`Frequently Asked Questions`,questions:[{question:`What is GST and why was it introduced?`,answer:`GST (Goods and Services Tax) is a single indirect tax system replacing multiple taxes like VAT, service tax, and excise duty.It was introduced to simplify taxation, eliminate cascading of taxes (tax on tax), and create a unified market across India.GST (Goods and Services Tax) is a single indirect tax system replacing multiple taxes like VAT, Service Tax and Excise Duty. It was introduced to simplify taxation and eliminate cascading taxes.`},{question:`What is the difference between CGST, SGST and IGST?`,answer:`CGST – Central Goods and Services Tax, collected by the central government. SGST – State Goods and Services Tax, collected by the state government for intra-state sales. IGST – Integrated Goods and Services Tax, collected by the central government for inter-state sales.CGST and SGST apply to intra-state transactions, while IGST applies to inter-state transactions.`},{question:`What is Reverse Charge Mechanism (RCM)?`,answer:`In RCM, the buyer (recipient of goods/services) is liable to pay GST instead of the seller. Example: Services taken from a lawyer or import of services from abroad.Under RCM, the recipient pays GST instead of the supplier for specified goods and services.`},{question:`How are GST returns filed?`,answer:`GST returns are filed online using the GST portal. Common returns include: GSTR-1: Outward supplies (sales), GSTR-3B: Summary of sales, purchases, and tax liability, GSTR-9: Annual return, GSTR-9C: Reconciliation statement (for audits)`},{question:`What is an e-Invoice and who needs to generate it?`,answer:`An e-invoice is a digital invoice authenticated by the GST portal.Businesses with turnover above the government-specified threshold (currently ₹10 crore and above) must generate e-invoices for B2B transactions.`}]}]},{slug:`inventory-stock`,title:`Inventory & Stock Management`,badge:`Inventory & Stock`,duration:`4-6 Hours`,heroDescription:`Stock items, units of measure, godown setup, batching, transfers, reorder levels and Bill of Materials (BOM). Templates, use-cases and best practices.`,heroImage:`/Balaji-Infotech/assets/stock-BY1a1bdb.jpg`,level:`Intermediate`,sections:[{id:`overview`,type:`overview`,title:`Overview`,content:`Learn how to manage inventory efficiently in TallyPrime through stock items, units of measure, godown management, batch tracking, stock transfers, reorder levels and Bill of Materials (BOM). Gain practical experience with real-world inventory workflows used in trading, retail and manufacturing businesses.`,learn:[{icon:`package`,title:`Stock Items`,description:`Create stock masters and manage item classifications.`},{icon:`ruler`,title:`Units of Measure`,description:`Configure UOMs for accurate inventory tracking and reporting.`},{icon:`building`,title:`Godown Management`,description:`Organize inventory across multiple warehouses and locations.`},{icon:`arrow-right-left`,title:`Stock Movement`,description:`Handle stock transfers, batching, expiry tracking and reorder levels.`}],note:`A well-structured inventory system improves stock accuracy, purchasing decisions and overall business efficiency.`},{id:`stock-items`,type:`inventoryCards`,title:`Stock Items & Item Master`,description:`Stock items represent goods or raw materials. Key fields in the item master include:`,cards:[{title:`Item Code & Name`,description:`Unique identifier used for inventory tracking.`},{title:`Category / Group`,description:`Used for classification and reporting.`},{title:`HSN / SKU`,description:`Optional codes useful for taxation and cataloguing.`},{title:`Default UOM`,description:`Base unit of measure used for transactions.`},{title:`Valuation Method`,description:`FIFO, LIFO or Weighted Average valuation.`},{title:`Reorder Levels`,description:`Configure reorder level and reorder quantity.`},{title:`Batch / Serial Tracking`,description:`Enable tracking when required.`}],tip:`Use concise item codes (e.g. RM-CU-001) to prevent duplicates and speed up data entry.`},{id:`uom`,type:`inventoryCards`,title:`Units Of Measure (UOM)`,description:`Define standard units for quantity tracking and inventory conversions.`,cards:[{title:`Piece (pcs)`,description:`Commonly used for finished goods and individual products.`},{title:`Kilogram (kg)`,description:`Used for raw materials and bulk inventory.`},{title:`Meter (m)`,description:`Suitable for fabrics, wires, cables and rolls.`},{title:`Box / Carton`,description:`Used for packaging and wholesale inventory.`},{title:`Litre (ltr)`,description:`Ideal for liquids, oils and chemicals.`},{title:`Dozen`,description:`Used when items are sold in groups of twelve.`}],tip:`Configure UOM conversions (e.g. 1 Box = 12 Pieces) to simplify purchasing, sales and stock reporting.`},{id:`godown-setup`,type:`warehouse`,title:`Godown / Warehouse Setup`,description:`Organise physical inventory locations and define how stock is stored and moved.`,setupPoints:[`Create godown names (Main Warehouse, Finished Goods, Raw Materials).`,`Assign default godowns to purchase and sales transactions.`,`Use zones, racks and bins for detailed storage management.`,`Enable multi-warehouse stock valuation where supported.`],useCases:[{title:`Retail Distribution`,description:`Multiple stores connected to a central distribution warehouse. Stock is replenished and transferred regularly.`},{title:`Manufacturing`,description:`Separate Raw Material, Work-in-Progress (WIP) and Finished Goods godowns for better production control.`}],tip:`Use separate godowns for raw materials, finished goods and damaged stock to improve inventory visibility.`},{id:`batching-expiry`,type:`batching`,title:`Batching, Serial Numbers & Expiry Management`,description:`Track inventory using batch numbers, serial numbers and expiry dates for better traceability and stock control.`,points:[{title:`Consumables with expiry`,description:`food, pharma and FMCG products`},{title:`Tracked assets`,description:`electronics and equipment with serial numbers`},{title:`Manufactured lots`,description:`use batch numbers for production traceability`}],bestPractice:`Capture batch number, manufacture date and expiry date. Follow FIFO (First In First Out) for expiry-sensitive inventory.`,tip:`Batch tracking helps identify affected stock quickly during recalls and quality checks.`},{id:`stock-transfers`,type:`batching`,title:`Stock Transfers & Movements`,description:`Track inventory movement across warehouses, production units and business locations while maintaining accurate stock records.`,points:[{title:`Inter-godown transfers`,description:`movement of stock between warehouses or storage locations`},{title:`Material issue / consumption`,description:`issue raw materials to production or assembly processes`},{title:`Stock adjustments`,description:`record damage, shrinkage, shortages or write-offs`},{title:`Stock receipts`,description:`receive inventory from purchases, production or transfers`}],bestPractice:`Maintain proper transfer vouchers and update stock ledgers immediately after every movement to avoid quantity mismatches.`,tip:`Regular stock reconciliation helps identify discrepancies between physical inventory and system records.`},{id:`reorder-levels`,type:`batching`,title:`Reorder Levels & Safety Stock`,description:`Automate replenishment planning by defining reorder levels, lead times and safety stock requirements.`,points:[{title:`Average daily usage`,description:`track normal consumption or sales quantity per day`},{title:`Lead time`,description:`number of days required to receive stock from suppliers`},{title:`Safety stock`,description:`maintain a buffer quantity to handle demand fluctuations`},{title:`Reorder point`,description:`(Average Daily Usage × Lead Time) + Safety Stock`}],bestPractice:`Review reorder levels regularly based on seasonal demand, supplier performance and historical consumption patterns.`,tip:`Example: If daily usage is 10 pcs, lead time is 7 days and safety stock is 20 pcs, reorder point = (10 × 7) + 20 = 90 pcs.`},{id:`bom`,type:`bom`,title:`Bill Of Materials (BOM)`,description:`Define components, quantities and production requirements needed to manufacture a finished product.`,points:[{title:`BOM Header`,description:`finished item, unit and version information`},{title:`Component Lines`,description:`item, quantity, UOM and wastage percentage`},{title:`Routing / Operations`,description:`optional production or assembly process steps`},{title:`Yield & Scrap`,description:`account for expected production output and losses`}],example:{title:`Example BOM: Wooden Chair (1 Unit)`,items:[`Seat (1 pcs)`,`Backrest (1 pcs)`,`Legs (4 pcs)`,`Screws (12 pcs)`],assemblyTime:`20 mins`},tip:`Maintain BOM versions so changes in materials, quantities and production methods can be tracked over time.`},{id:`roadmap`,type:`roadmap`,title:`Roadmap: Inventory & Stock Management`,description:`Follow this structured learning path to master inventory control, warehouse management and stock movement workflows in Tally.`,steps:[{step:`01`,title:`Setup Stock Masters`,description:`Create stock items, groups, categories and define inventory masters (30-45 mins).`},{step:`02`,title:`Configure UOM & Godowns`,description:`Set up units of measure, warehouse locations and inventory structure (30-45 mins).`},{step:`03`,title:`Manage Batches & Stock Movement`,description:`Track batches, expiry dates, stock transfers and inventory adjustments (45-60 mins).`},{step:`04`,title:`Reorder Levels & BOM`,description:`Configure reorder controls, safety stock and bill of materials for manufacturing (90–120 mins).`}]},{id:`practice`,type:`practice`,title:`Practice Labs & Templates`,description:`Apply inventory concepts using practical stock management scenarios.`,labs:[{title:`Stock Masters Setup`,difficulty:`Easy`,duration:`15 min`,tasks:[`Create 10 stock items with categories and groups`,`Assign appropriate Units of Measure (UOM)`,`Enter opening stock quantities`,`Verify item master reports`]},{title:`Godown & Stock Transfer`,difficulty:`Medium`,duration:`20 min`,tasks:[`Create Main Warehouse and Branch Godown`,`Transfer 100 units between godowns`,`Verify stock movement reports`,`Check location-wise stock balances`]},{title:`Batching & Expiry Management`,difficulty:`Medium`,duration:`20 min`,tasks:[`Create batch-wise inventory items`,`Enter manufacturing and expiry dates`,`Track batch availability`,`Generate expiry monitoring report`]},{title:`BOM & Production Exercise`,difficulty:`Advanced`,duration:`30 min`,tasks:[`Create a BOM for a finished product`,`Add raw materials and quantities`,`Record production of finished goods`,`Verify consumption and stock updates`]},{title:`Reorder & Safety Stock`,difficulty:`Medium`,duration:`15 min`,tasks:[`Configure reorder levels for inventory items`,`Set safety stock quantities`,`Generate reorder reports`,`Identify items requiring replenishment`]}],note:`Practice all exercises using a demo company before applying inventory controls to live business data.`}]},{slug:`payroll-management`,title:`Payroll Management — From Employee Master To Payslip`,badge:`Payroll Management`,duration:`5-7 Hours`,heroDescription:`Employee masters, salary heads, statutory deductions (PF/ESI), payslip generation and monthly payroll processing. Includes templates and compliance notes.`,heroImage:Cy,level:`Advanced`,sections:[{id:`overview`,type:`overview`,title:`Overview`,content:`This module guides students through practical payroll management in Tally, including employee master creation, salary structure configuration, statutory compliance, payslip generation and month-end payroll processing.`,learn:[{icon:`users`,title:`Employee Masters`,description:`Create employee records with personal, banking and employment details.`},{icon:`wallet`,title:`Salary Structures`,description:`Configure earnings, deductions and salary templates.`},{icon:`shield`,title:`PF & ESI Compliance`,description:`Understand statutory payroll deductions and contributions.`},{icon:`receipt`,title:`Payroll Processing`,description:`Generate payslips and process monthly salaries accurately.`}],note:`Accurate employee data and salary structures are essential for compliant payroll processing.`},{id:`employee-master`,type:`batching`,title:`Employee Master`,description:`Create and maintain employee records with personal, banking and employment details required for payroll processing.`,points:[{title:`Employee code & name`,description:`Unique employee identifier used for payroll records and reporting.`},{title:`Personal details`,description:`PAN, Aadhaar, date of birth, address and contact information.`},{title:`Bank details`,description:`Account number, IFSC code and payment preferences for salary transfers.`},{title:`Employment details`,description:`Date of joining, department, designation and employee category.`},{title:`Salary structure`,description:`Assign earnings, deductions and salary templates to employees.`},{title:`Statutory flags`,description:`Configure PF, ESI and other statutory applicability settings.`}],tip:`Use unique employee codes and verify PAN, Aadhaar and bank details before processing payroll to avoid payment failures.`},{id:`salary-heads`,type:`batching`,title:`Salary Heads & Components`,description:`Configure earnings, deductions and employer contributions that form an employee's salary structure.`,points:[{title:`Basic Pay`,description:`Primary fixed salary component, usually forming the foundation for statutory calculations.`},{title:`HRA`,description:`House Rent Allowance provided to employees for accommodation expenses.`},{title:`Conveyance & Allowances`,description:`Additional benefits such as conveyance, medical and special allowances.`},{title:`Gross Pay`,description:`Total earnings before deductions are applied.`},{title:`Deductions`,description:`Employee PF, Employee ESI, Professional Tax, TDS and other recoveries.`},{title:`Employer Contributions`,description:`Employer PF and ESI contributions maintained separately from employee deductions.`}],tip:`Create salary templates with predefined earnings and deductions to simplify employee onboarding and payroll processing.`},{id:`statutory-deductions`,type:`batching`,title:`Statutory Deductions: PF, ESI & Tax Compliance`,description:`Configure statutory payroll deductions and ensure compliance with government regulations.`,points:[{title:`Provident Fund (PF)`,description:`Configure employee and employer PF contributions, PF numbers and wage categories.`},{title:`Employee State Insurance (ESI)`,description:`Set up ESI eligibility, contribution rates and employee coverage details.`},{title:`Professional Tax (PT)`,description:`Apply state-specific Professional Tax slabs and deduction rules.`},{title:`Tax Deducted at Source (TDS)`,description:`Configure income tax calculations, exemptions and monthly tax deductions.`},{title:`Contribution Rates`,description:`Maintain employee and employer contribution percentages as per current regulations.`},{title:`Compliance Monitoring`,description:`Verify statutory settings regularly to ensure accurate payroll processing and reporting.`}],tip:`PF, ESI and tax regulations may change periodically. Always verify the latest contribution rates, salary limits and statutory rules before processing payroll.`},{id:`payslip-generation`,type:`bom`,title:`Payslip Generation & Templates`,description:`Generate professional payslips with complete salary, deduction and payment details.`,points:[{title:`Company & Employee Details`,description:`Include company information, employee name, code and designation.`},{title:`Pay Period & Payment Date`,description:`Specify salary month, payroll period and payment date.`},{title:`Earnings Breakdown`,description:`Display Basic Pay, HRA, allowances and other earning components.`},{title:`Deductions Breakdown`,description:`Show PF, ESI, Professional Tax, TDS and other deductions.`},{title:`Net Pay`,description:`Calculate final payable salary in numbers and words.`},{title:`Bank & Payment Details`,description:`Display bank account details and payment method.`}],example:{title:`Sample Payslip Summary`,items:[`Employee: EMP001 - Sai Varma`,`Payroll Period: August 2025`,`Gross Earnings: ₹50,000`,`PF Deduction: ₹6,000`,`TDS Deduction: ₹1,200`,`Net Salary: ₹42,800`],assemblyTime:`20 mins`},tip:`Provide both PDF payslips and digital copies for employees. Maintain payslip archives for audits and future reference.`},{id:`monthly-payroll`,type:`steps`,title:`Monthly Payroll Processing`,duration:`20-30 Minutes`,intro:`Follow a structured payroll workflow from attendance verification to salary disbursement and accounting entries.`,steps:[{title:`Verify Attendance & Leaves`,description:`Review employee attendance, leave records, overtime and attendance exceptions for the payroll period.`},{title:`Apply Salary Structures`,description:`Load salary templates, earnings, allowances, deductions and employee-specific adjustments.`},{title:`Process Loans & Recoveries`,description:`Calculate loan repayments, salary advances and other employee recoveries.`},{title:`Compute Statutory Contributions`,description:`Calculate PF, ESI, Professional Tax, TDS and generate required statutory reports.`},{title:`Post Payroll Entries`,description:`Transfer payroll expenses, liabilities and deduction entries to the accounting system.`},{title:`Generate Salary Payments`,description:`Create bank transfer files, NEFT payment files or salary disbursement reports.`}],checklist:[`Attendance approved`,`Salary structures verified`,`Loans and recoveries processed`,`PF, ESI and tax calculations reviewed`,`Payroll entries posted`,`Bank payment file generated`],note:`Always run a payroll preview before final processing. Verify statutory reports, payment amounts and employee balances, and take a backup before posting the final payroll.`},{id:`roadmap`,type:`roadmap`,title:`Roadmap: From Employee Setup To Payroll Processing`,description:`Follow this learning path step-by-step to master employee management, salary structures, statutory compliance and payroll processing.`,steps:[{step:`01`,title:`Employee Masters`,description:`Set up employee records with personal details, bank information, salary structures and statutory settings (30–40 mins).`},{step:`02`,title:`Salary Heads`,description:`Create earnings, allowances, deductions and employer contribution components (30–40 mins).`},{step:`03`,title:`Statutory Setup`,description:`Configure statutory deductions, contribution rates and compliance settings (45–60 mins).`},{step:`04`,title:`Generate Payslips`,description:`Create payroll templates, calculate salaries and generate employee payslips (60–90 mins).`}]},{id:`practice`,type:`practice`,title:`Practice Labs & Templates`,description:`Apply your payroll knowledge using real-world employee, salary and compliance scenarios.`,labs:[{title:`Employee Master Setup`,difficulty:`Easy`,duration:`15 min`,tasks:[`Create 10 employee masters with unique employee codes`,`Add PAN, Aadhaar and bank account details`,`Assign departments and designations`,`Configure PF and ESI eligibility`]},{title:`Salary Structure Configuration`,difficulty:`Easy`,duration:`20 min`,tasks:[`Create monthly and hourly salary templates`,`Configure Basic, HRA and Special Allowance`,`Add deduction components for PF, ESI and PT`,`Assign salary structures to employees`]},{title:`Payroll Processing`,difficulty:`Medium`,duration:`25 min`,tasks:[`Run payroll preview for all employees`,`Verify earnings and deduction calculations`,`Generate final payslips in PDF format`,`Review payroll summary reports`]},{title:`Compliance & Payments`,difficulty:`Medium`,duration:`20 min`,tasks:[`Generate PF and ESI challans`,`Prepare monthly TDS summary`,`Export NEFT bank payment file`,`Simulate salary disbursement process`]}],note:`Always test payroll on a demo company and verify statutory calculations before processing live employee salaries.`}]},{slug:`reports-mis`,title:`Reports & MIS — Financial Insights & Dashboards`,badge:`Reports & MIS`,duration:`4-5 Hours`,heroDescription:`Learn how to generate accounting reports, analyze business performance, and create management dashboards using Trial Balance, Profit & Loss, Balance Sheet, Ratio Analysis and Daybook reports.`,heroImage:`/Balaji-Infotech/assets/reportsmis-DBopqaA2.jpg`,level:`Advanced`,sections:[{id:`overview`,type:`overview`,title:`Overview`,content:`This module teaches how to generate accounting reports and build MIS dashboards for better business decision-making. Learn to analyze Trial Balance, Profit & Loss, Balance Sheet, Ratio Analysis and Daybook reports while using filters and export options to create meaningful financial insights.`,learn:[{icon:`scale`,title:`Trial Balance`,description:`Verify ledger balances, analyze groups and validate accounting accuracy.`},{icon:`chartcolumn`,title:`Profit & Loss`,description:`Evaluate income, expenses and profitability across different periods.`},{icon:`building`,title:`Balance Sheet`,description:`Understand assets, liabilities and business financial position.`},{icon:`chartpie`,title:`MIS & Ratio Analysis`,description:`Track key performance indicators and generate management reports.`}],note:`Regular review of financial reports helps identify trends, improve decision-making and maintain business control.`},{id:`trial-balance`,type:`report`,title:`Trial Balance`,description:`Trial balance is a summary of ledger balances used to verify that total debits equal total credits.`,points:[{title:`Group & Ledger Drill-Down`,description:`Analyze balances at group and ledger level for detailed review.`},{title:`Period Selection`,description:`Generate monthly, quarterly or yearly trial balance reports.`},{title:`Opening & Closing Balances`,description:`Include opening balances, closing balances and zero-balance ledgers.`},{title:`Export Options`,description:`Export reports to PDF or Excel for audit and management review.`}],sampleTitle:`Sample Trial Balance`,sample:[{ledger:`Cash`,debit:`₹120,000`,credit:`-`},{ledger:`Bank`,debit:`₹250,000`,credit:`-`},{ledger:`Capital`,debit:`-`,credit:`₹300,000`},{ledger:`Sales`,debit:`-`,credit:`₹70,000`}],totalDebit:`₹370,000`,totalCredit:`₹370,000`,note:`A balanced trial balance confirms arithmetic accuracy but does not guarantee that all accounting errors are eliminated.`},{id:`profit-loss`,type:`batching`,title:`Profit & Loss Account`,description:`Shows revenue and expense performance over a period to help evaluate profitability and business growth.`,points:[{title:`Revenue`,description:`Track sales income, service income and other operating revenue.`},{title:`Direct Costs & Gross Profit`,description:`Analyze cost of goods sold and calculate gross profit margins.`},{title:`Operating Expenses`,description:`Review administrative, selling and operational expenses.`},{title:`Net Profit`,description:`Measure overall profitability after deducting all expenses and taxes.`},{title:`Comparative Analysis`,description:`Compare current performance with previous periods and identify trends.`}],tip:`Use comparative reports and percentage analysis to identify profit drivers and control business costs.`},{id:`balance-sheet`,type:`batching`,title:`Balance Sheet`,description:`Provides a snapshot of the company's financial position by showing assets, liabilities and owner's equity at a specific date.`,points:[{title:`Assets`,description:`View current and non-current assets such as cash, bank balances, inventory, debtors and fixed assets.`},{title:`Liabilities`,description:`Track short-term and long-term obligations including creditors, loans and outstanding expenses.`},{title:`Owner's Equity`,description:`Analyze capital invested, retained earnings and accumulated profits.`},{title:`Working Capital Analysis`,description:`Compare current assets against current liabilities to assess liquidity.`},{title:`Debtor & Creditor Drill-Down`,description:`Review ageing analysis and outstanding balances for better financial control.`}],tip:`A healthy balance sheet maintains an appropriate balance between assets, liabilities and equity while ensuring sufficient working capital.`},{id:`ratio-analysis`,type:`bom`,title:`Ratio Analysis`,description:`Financial ratios help evaluate liquidity, profitability, efficiency and leverage to measure business performance and financial health.`,points:[{title:`Liquidity`,description:`Current Ratio = Current Assets ÷ Current Liabilities. Measures the ability to meet short-term obligations.`},{title:`Profitability`,description:`Net Profit Margin = Net Profit ÷ Net Sales. Indicates overall profitability.`},{title:`Efficiency`,description:`Inventory Turnover = Cost of Goods Sold ÷ Average Inventory. Measures inventory utilization.`},{title:`Leverage`,description:`Debt-to-Equity Ratio = Total Debt ÷ Equity. Evaluates financial risk and dependence on borrowing.`}],example:{title:`Example Ratio Calculation`,items:[`Current Assets = ₹200,000`,`Current Liabilities = ₹100,000`,`Current Ratio = 200,000 ÷ 100,000`,`Current Ratio = 2.0`],assemblyTime:`Analysis Time: 5 mins`},tip:`Compare ratios across multiple periods and industry benchmarks to identify trends and performance gaps.`},{id:`daybook`,type:`batching`,title:`Daybook / Journal`,description:`Daybook records all accounting transactions in chronological order, helping users review entries, verify activity and trace financial movements.`,points:[{title:`Transaction History`,description:`View all vouchers and accounting entries recorded during a selected period.`},{title:`Receipt & Payment Review`,description:`Monitor daily cash receipts, bank receipts, payments and fund movements.`},{title:`Error Detection`,description:`Identify unusual entries, duplicate vouchers or incorrect postings quickly.`},{title:`Advanced Filtering`,description:`Filter transactions by voucher type, ledger, party name, amount or date range.`},{title:`Audit Trail`,description:`Trace the source of transactions and drill down into supporting vouchers.`}],tip:`Regularly review the daybook to identify posting errors, unusual transactions and missing entries before generating financial reports.`},{id:`custom-filters`,type:`batching`,title:`Customizable Report Filters`,description:`Use advanced filters to generate focused reports and gain deeper business insights across departments, periods and business segments.`,points:[{title:`Date & Period Filters`,description:`Analyze reports by custom date range, month, quarter or financial year.`},{title:`Cost Center Analysis`,description:`Filter data by department, branch, project or profit center.`},{title:`Customer & Vendor Segmentation`,description:`Review performance and transactions for specific customers, suppliers or business groups.`},{title:`Inventory & SKU Filters`,description:`Generate reports for selected products, categories, stock groups or warehouses.`},{title:`Currency & Consolidation`,description:`View multi-currency reports and consolidated business performance where applicable.`}],tip:`Save frequently used filter combinations as custom views to speed up report generation and improve decision-making.`},{id:`roadmap`,type:`roadmap`,title:`Roadmap: 2–4 Hour Learning Plan`,description:`Follow this structured path to understand financial reports, analyze business performance and build management information reports.`,steps:[{step:`01`,title:`Trial Balance`,description:`Learn to verify ledger balances, drill down into accounts and validate accounting accuracy (20–30 mins).`},{step:`02`,title:`Profit & Loss Analysis`,description:`Analyze revenue, expenses, gross profit and net profit using comparative reporting (30–45 mins).`},{step:`03`,title:`Balance Sheet`,description:`Understand assets, liabilities, equity and evaluate the overall financial position of the business (20–30 mins).`},{step:`04`,title:`Ratio Analysis & MIS`,description:`Interpret key financial ratios and use customizable filters to generate business insights (30–40 mins).`}]},{id:`practice`,type:`practice`,title:`Practice Labs & Report Walkthroughs`,description:`Apply your reporting knowledge through practical exercises that focus on financial analysis, dashboard creation and management reporting.`,labs:[{title:`Trial Balance Review`,difficulty:`Easy`,duration:`15 min`,tasks:[`Generate a Trial Balance for Q1`,`Identify debit and credit totals`,`Verify ledger balances`,`Investigate any differences`]},{title:`Profit & Loss Analysis`,difficulty:`Medium`,duration:`20 min`,tasks:[`Generate a Profit & Loss report`,`Enable comparative columns`,`Identify major expense categories`,`Analyze gross profit and net profit trends`]},{title:`Balance Sheet & Ratios`,difficulty:`Medium`,duration:`20 min`,tasks:[`Generate a Balance Sheet report`,`Calculate working capital`,`Compute Current Ratio`,`Evaluate liquidity position`]},{title:`MIS Dashboard Reporting`,difficulty:`Advanced`,duration:`25 min`,tasks:[`Filter top 5 customers by revenue`,`Analyze receivable ageing`,`Export reports to Excel`,`Prepare a management summary dashboard`]}],note:`Practice using report filters and saved views regularly to improve reporting efficiency and decision-making.`}]},{slug:`advanced-tallyprime`,title:`Advanced TallyPrime — Business Intelligence`,badge:`Advanced TallyPrime`,duration:`4-5 Hours`,heroDescription:`Master advanced TallyPrime features including cost centers, budgets, multi-currency accounting, interest calculations, scenario management, security controls and business automation.`,heroImage:Ty,level:`Expert`,sections:[{id:`overview`,type:`overview`,title:`Overview`,content:`This module focuses on advanced TallyPrime capabilities used by growing businesses and accounting professionals. Learn cost center accounting, budget management, multi-currency transactions, interest calculations, scenario analysis, security controls, audit features and workflow automation to improve operational efficiency and financial decision-making.`,learn:[{icon:`building`,title:`Cost Centers & Budgeting`,description:`Track department-wise profitability and monitor budget versus actual performance.`},{icon:`globe`,title:`Multi-Currency Accounting`,description:`Manage foreign currency transactions, exchange rates and international business reporting.`},{icon:`shield`,title:`Security & Audit Controls`,description:`Configure user permissions, audit trails and data protection settings.`},{icon:`settings`,title:`Automation & Productivity`,description:`Use voucher classes, recurring transactions and advanced Tally features to reduce manual work.`}],note:`Advanced TallyPrime features help organizations improve control, automate processes and gain deeper financial insights for better decision-making.`},{id:`cost-centers`,type:`batching`,title:`Cost Centers & Cost Categories`,description:`Cost centers help track income and expenses department-wise, project-wise or branch-wise without creating separate companies. They provide deeper insight into business performance and profitability.`,points:[{title:`Cost Centers`,description:`Create departments, branches or projects as cost centers to track financial performance individually.`},{title:`Cost Categories`,description:`Group multiple cost centers under a common category for consolidated reporting.`},{title:`Department Tracking`,description:`Analyze expenses and revenues separately for Sales, Marketing, HR, Production and other departments.`},{title:`Project Profitability`,description:`Track project-specific costs and revenues to measure profitability and performance.`},{title:`Branch Performance Analysis`,description:`Compare income, expenses and profit across multiple business locations.`}],tip:`Use cost centers consistently across vouchers to generate meaningful departmental and project-wise reports.`},{id:`budgets-controls`,type:`steps`,title:`Budgets & Controls`,duration:`20-30 Minutes`,intro:`Learn how to create budgets, define spending limits, compare actual performance against targets and use budget controls for effective financial planning.`,steps:[{title:`Create Budget Groups`,description:`Define budgets for departments, cost centers, projects or ledger groups.`},{title:`Set Budget Amounts`,description:`Enter monthly, quarterly or annual budget targets for income and expenses.`},{title:`Assign Cost Centers`,description:`Link budgets to specific cost centers for department-wise monitoring.`},{title:`Monitor Actual vs Budget`,description:`Compare actual transactions against budgeted figures and identify variances.`},{title:`Analyze Variances`,description:`Review overspending, underutilization and performance gaps using budget reports.`}],checklist:[`Budget groups created`,`Budget targets assigned`,`Cost centers linked`,`Variance reports generated`,`Performance reviewed`],note:`Budgets are most effective when reviewed regularly. Compare actual results with targets every month to maintain financial discipline and improve planning accuracy.`},{id:`interest-calculation`,type:`batching`,title:`Interest Calculation`,description:`Automate interest calculations for receivables and payables to improve accuracy, reduce manual effort and monitor outstanding balances effectively.`,points:[{title:`Simple Interest`,description:`Calculate interest based on principal amount, rate and time period using standard interest formulas.`},{title:`Compound Interest`,description:`Apply interest on both principal and accumulated interest for long-term receivables and payables.`},{title:`Customer Interest`,description:`Automatically calculate interest on overdue customer balances and outstanding invoices.`},{title:`Supplier Interest`,description:`Track interest payable to suppliers and vendors based on agreed payment terms.`},{title:`Interest Reports`,description:`Generate detailed reports showing interest receivable, payable and outstanding amounts.`}],tip:`Configure interest parameters directly in ledger masters to automate calculations and ensure consistency across transactions.`},{id:`security-audit`,type:`steps`,title:`Security & Audit Controls`,duration:`20-30 Minutes`,intro:`Learn how to secure company data, manage user permissions, maintain audit trails and implement best practices for data protection and compliance.`,steps:[{title:`Create User Roles`,description:`Define users such as Administrator, Accountant, Auditor and Data Entry Operator with appropriate responsibilities.`},{title:`Configure Access Rights`,description:`Control access to vouchers, reports, masters and company features based on user roles.`},{title:`Enable Security Controls`,description:`Set passwords, user authentication rules and company-level security settings.`},{title:`Monitor Audit Trail`,description:`Track modifications, deletions and user activities to maintain accountability and transparency.`},{title:`Backup & Data Protection`,description:`Schedule regular backups and implement recovery procedures to safeguard business data.`}],checklist:[`User roles created`,`Access rights configured`,`Security settings enabled`,`Audit trail reviewed`,`Backup schedule established`],note:`Review user permissions regularly and maintain secure backups to prevent unauthorized access, accidental data loss and compliance issues.`},{id:`tally-automation`,type:`batching`,title:`Tally Automation`,description:`Leverage advanced automation features in TallyPrime to reduce manual effort, improve accuracy and streamline day-to-day accounting operations.`,points:[{title:`Voucher Classes`,description:`Automate accounting allocations and ledger postings while recording transactions.`},{title:`Memorandum Vouchers`,description:`Record provisional transactions for review without affecting actual books of accounts.`},{title:`Recurring Transactions`,description:`Automate repetitive entries such as rent, salaries, subscriptions and utility expenses.`},{title:`Auto Calculations`,description:`Configure automatic tax, discount, interest and inventory calculations to minimize errors.`},{title:`Data Import & Export`,description:`Import transactions from Excel and export reports in multiple formats for analysis and sharing.`}],tip:`Use automation features carefully and test configurations in a demo company before applying them to live business data.`},{id:`roadmap`,type:`roadmap`,title:`Roadmap: From Advanced Accounting To Business Automation`,description:`Follow this structured learning path to master advanced TallyPrime features used by accountants, finance teams and business managers.`,steps:[{step:`01`,title:`Cost Centers & Budgeting`,description:`Track department-wise profitability and compare budgeted versus actual performance.`},{step:`02`,title:`Interest & Scenario Management`,description:`Automate interest calculations and create business scenarios for forecasting and analysis.`},{step:`03`,title:`Security & Audit Controls`,description:`Configure user permissions, audit trails and data protection mechanisms.`},{step:`04`,title:`Tally Automation`,description:`Automate recurring transactions, voucher entries, calculations and reporting workflows.`}]},{id:`practice`,type:`practice`,title:`Practice Labs & Advanced Scenarios`,description:`Apply advanced TallyPrime concepts through hands-on exercises involving budgeting, multi-currency accounting, automation and security controls.`,labs:[{title:`Department Cost Tracking`,difficulty:`Easy`,duration:`15 min`,tasks:[`Create Sales and Marketing cost centers`,`Allocate expenses to each department`,`Record department-wise transactions`,`Generate cost center profitability report`]},{title:`Budget Variance Analysis`,difficulty:`Medium`,duration:`20 min`,tasks:[`Create an annual sales budget`,`Define monthly expense budgets`,`Record actual transactions`,`Analyze Budget vs Actual reports`]},{title:`Multi-Currency Transactions`,difficulty:`Medium`,duration:`20 min`,tasks:[`Create a USD customer ledger`,`Record an export sales invoice`,`Configure exchange rates`,`Review forex gain/loss reports`]},{title:`Interest & Scenario Management`,difficulty:`Advanced`,duration:`25 min`,tasks:[`Enable interest calculation for customers`,`Generate interest receivable report`,`Create optional vouchers`,`Analyze business scenarios without affecting actual books`]},{title:`Security & Automation Setup`,difficulty:`Advanced`,duration:`30 min`,tasks:[`Create Accountant and Auditor user roles`,`Configure access permissions`,`Enable audit trail`,`Create recurring transaction templates`,`Export reports to Excel and PDF`]}],note:`Complete all labs using a demo company first. Advanced features such as security controls, automation and scenario management should be tested thoroughly before implementation in a live business environment.`}]}],Oy={download:zr,building:gr,book:fr,receipt:Ei,scale:ji,chartcolumn:br,building:_r,chartpie:Sr,users:Ui,shield:Ri,wallet:Ji,globe:Xr,settings:Pi},ky={Assets:Ji,Liabilities:ii,Income:Vi,Expenses:Ei},Ay={payment:Ji,receipt:Dr,contra:ki,journal:fr,purchase:zi,sales:Ei},jy={payment:`bg-blue-50 text-[#155A96]`,receipt:`bg-blue-50 text-[#155A96]`,contra:`bg-blue-50 text-[#155A96]`,journal:`bg-blue-50 text-[#155A96]`};function My(){let{slug:e}=ht();console.log(e);let t=Dy.find(t=>t.slug===e);if(!t)return(0,F.jsx)(`div`,{className:`min-h-screen flex items-center justify-center`,children:`Course Not Found`});let[n,r]=(0,w.useState)(0),[i,a]=(0,w.useState)({}),[o,s]=(0,w.useState)(null),[c,l]=(0,w.useState)(`overview`),u=window.innerWidth<1024,d=e=>{let t=0;e.forEach((e,n)=>{i[n]===e.answer&&t++}),s(t)};return c===`overview`||t.sections.filter(e=>e.id===c),(0,F.jsxs)(`main`,{className:`bg-[#F8FAFC]`,children:[(0,F.jsxs)(`section`,{className:`relative min-h-[420px] md:min-h-[520px] lg:h-[600px] overflow-hidden`,children:[(0,F.jsx)(`img`,{src:t.heroImage,alt:t.title,className:`absolute inset-0 w-full h-full object-cover`}),(0,F.jsx)(`div`,{className:`absolute inset-0 bg-black/70`}),(0,F.jsx)(`div`,{className:`\r
  relative z-10\r
  max-w-6xl mx-auto\r
  px-4 sm:px-6\r
  h-full\r
  flex items-center justify-center\r
  py-20\r
  lg:py-0\r
`,children:(0,F.jsxs)(`div`,{className:`\r
    max-w-4xl\r
    text-center\r
  `,children:[(0,F.jsxs)(`div`,{className:`\r
        flex flex-wrap\r
        justify-center\r
        gap-3\r
        mb-5 sm:mb-6\r
        `,children:[(0,F.jsx)(`span`,{className:`\r
          px-3 py-1.5\r
text-xs sm:text-sm\r
          rounded-full\r
          bg-white/20\r
          backdrop-blur-md\r
          text-white\r
          font-medium\r
        `,children:t.level}),(0,F.jsx)(`span`,{className:`\r
          px-4 py-2\r
          rounded-full\r
          bg-white/20\r
          backdrop-blur-md\r
          text-white\r
          font-medium\r
        `,children:t.duration})]}),(0,F.jsx)(`h1`,{className:`\r
        text-3xl\r
sm:text-4xl\r
lg:text-6xl\r
        font-black\r
        text-white\r
        leading-[1.1]\r
        `,children:t.title}),(0,F.jsx)(`p`,{className:`\r
        mt-4 sm:mt-6\r
        mx-auto\r
        max-w-3xl\r
        text-sm\r
sm:text-base\r
lg:text-xl\r
        text-white/80\r
        leading-relaxed\r
      `,children:t.subtitle}),(0,F.jsx)(`div`,{className:`mt-6 flex flex-col sm:flex-row justify-center gap-4`,children:(0,F.jsx)(`a`,{href:`#overview`,className:`\r
            px-6 py-3\r
            sm:px-8 sm:py-4\r
            rounded-xl\r
            bg-[#155A96]\r
            text-white\r
            font-semibold\r
          `,children:`Start Learning`})}),(0,F.jsxs)(`div`,{className:`\r
    mt-6\r
    flex flex-wrap\r
    justify-center\r
    gap-2 sm:gap-3\r
  `,children:[(0,F.jsx)(`div`,{className:`px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/10 backdrop-blur-md text-white/80`,children:`4 Lessons`}),(0,F.jsx)(`div`,{className:`px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/10 backdrop-blur-md text-white/80`,children:`Practice Exercises`}),(0,F.jsx)(`div`,{className:`px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/10 backdrop-blur-md text-white/80`,children:`Certificate Guidance`})]})]})})]}),(0,F.jsxs)(`section`,{className:`\r
    max-w-7xl\r
    mx-auto\r
    px-4 sm:px-6\r
    mt-8 lg:mt-14\r
    lg:h-[calc(100vh-96px)]\r
    lg:overflow-hidden\r
  `,children:[(0,F.jsxs)(`div`,{className:`\r
    lg:hidden\r
    flex\r
    gap-2\r
    overflow-x-auto\r
    pb-2\r
    mb-6\r
  `,children:[(0,F.jsx)(`button`,{onClick:()=>l(`overview`),className:`
    whitespace-nowrap
    px-4 py-2
    rounded-xl
    text-sm
    font-medium
    ${c===`overview`?`bg-[#155A96] text-white`:`bg-white border border-slate-200`}
  `,children:`Overview`}),t.sections.filter(e=>e.id!==`overview`).map(e=>(0,F.jsx)(`button`,{onClick:()=>l(e.id),className:`
        whitespace-nowrap
        px-4 py-2
        rounded-xl
        text-sm
        font-medium
        ${c===e.id?`bg-[#155A96] text-white`:`bg-white border border-slate-200`}
      `,children:e.title},e.id))]}),(0,F.jsxs)(`div`,{className:`\r
    grid grid-cols-1 lg:grid-cols-[360px_1fr]\r
    gap-6 lg:gap-8\r
    lg:h-[calc(100vh-100px)]\r
    lg:overflow-hidden\r
  `,children:[(0,F.jsx)(`aside`,{className:`\r
    sidebar-scroll\r
    sticky\r
    top-24\r
    h-full\r
    overflow-y-auto\r
    hidden lg:block\r
  `,children:(0,F.jsxs)(`div`,{className:`\r
          bg-white\r
          rounded-[32px]\r
          border\r
          border-[#E2E8F0]\r
          p-8\r
          shadow-sm\r
        `,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-4 mb-8`,children:[(0,F.jsx)(`div`,{className:`\r
              w-14 h-14\r
              rounded-2xl\r
              bg-[#155A96]\r
              flex\r
              items-center\r
              justify-center\r
              text-white\r
              text-xl\r
            `,children:(0,F.jsx)(fr,{className:`w-7 h-7`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`\r
                font-bold\r
                text-xl\r
                text-[#071426]\r
              `,children:`Course Contents`}),(0,F.jsxs)(`p`,{className:`\r
                text-sm\r
                text-slate-500\r
              `,children:[t.level,` • `,t.duration]})]})]}),(0,F.jsx)(`div`,{className:`space-y-2`,children:t.sections.map((e,t)=>(0,F.jsxs)(`a`,{href:`#${e.id}`,className:`\r
                flex\r
                items-center\r
                gap-4\r
                px-4\r
                min-h-[64px]\r
                rounded-2xl\r
                hover:bg-[#F8FAFC]\r
                transition-colors\r
                duration-300\r
                group\r
              `,children:[(0,F.jsx)(`div`,{className:`\r
                  w-9\r
                  h-9\r
                  rounded-full\r
                  bg-[#EEF4FF]\r
                  text-[#155A96]\r
                  flex\r
                  items-center\r
                  justify-center\r
                  font-bold\r
                  text-sm\r
                  shrink-0\r
                `,children:String(t+1).padStart(2,`0`)}),(0,F.jsx)(`button`,{onClick:()=>l(e.id),className:`\r
                group\r
                flex\r
                items-center\r
                gap-4\r
                flex-1\r
              `,children:(0,F.jsx)(`span`,{className:`
                  h-10
                  flex
                  items-center
                  leading-5
                  text-sm
                  transition-colors
                  duration-200
                  ${c===e.id?`text-[#155A96] font-semibold`:`text-[#334155] font-medium group-hover:text-[#155A96]`}
                `,children:e.title})})]},e.id))})]})}),(0,F.jsxs)(`main`,{className:`\r
    lg:h-full\r
    lg:overflow-y-auto\r
    pr-1\r
    scroll-smooth\r
    content-scroll\r
  `,children:[(0,F.jsxs)(`section`,{id:`overview`,className:`
    mb-12 lg:mb-16
    scroll-mt-32
    ${u&&c!==`overview`?`hidden`:``}
  `,children:[(0,F.jsx)(`h2`,{className:`\r
      text-2xl sm:text-3xl lg:text-4xl\r
      font-black\r
      text-[#071426]\r
      mb-4\r
    `,children:`What You'll Learn`}),(0,F.jsx)(`div`,{className:`space-y-5 lg:space-y-6`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`\r
          text-base lg:text-lg\r
          text-slate-700\r
          leading-7 lg:leading-9\r
          mb-6\r
        `,children:t.sections.find(e=>e.id===`overview`)?.content}),(0,F.jsx)(`div`,{className:`space-y-5`,children:t.sections.find(e=>e.id===`overview`)?.learn.map((e,t)=>(Oy[e.icon],(0,F.jsxs)(`div`,{className:`\r
                grid\r
                md:grid-cols-[240px_1fr]\r
                gap-1\r
                items-start\r
                pb-3\r
                border-b\r
                border-slate-100\r
                `,children:[(0,F.jsx)(`h3`,{className:`\r
                    text-[15px]\r
                    font-bold\r
                    text-[#155A96]\r
                    min-w-[240px]\r
                    shrink-0\r
                  `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
                    text-slate-700\r
                    leading-7\r
                  `,children:e.description})]},t)))}),(0,F.jsxs)(`div`,{className:`\r
          mt-10\r
          bg-[#ECFEFF]\r
          border border-[#A5F3FC]\r
          rounded-[24px]\r
          p-4 sm:p-6\r
          flex flex-col sm:flex-row gap-4\r
        `,children:[(0,F.jsx)(ri,{className:`\r
            w-6 h-6\r
            text-cyan-600\r
            shrink-0\r
            mt-1\r
          `}),(0,F.jsxs)(`p`,{className:`\r
            text-slate-700\r
            leading-7\r
          `,children:[(0,F.jsx)(`span`,{className:`font-bold`,children:`Double-entry Rule:`}),` `,t.sections.find(e=>e.id===`overview`)?.note]})]})]})})]}),t.sections.filter(e=>window.innerWidth>=1024?e.id!==`overview`:e.id!==`overview`&&e.id===c).map(e=>e.type===`steps`?(0,F.jsxs)(`section`,{id:e.id,className:`mb-12 lg:mb-16`,children:[(0,F.jsx)(`h2`,{className:`\r
              text-2xl lg:text-3xl\r
              font-bold\r
              text-[#071426]\r
              mb-4\r
            `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
              text-lg\r
              text-slate-600\r
              leading-7 lg:leading-8\r
              mb-10\r
            `,children:e.description}),(0,F.jsx)(`div`,{className:`space-y-8`,children:e.steps?.map((e,t)=>(0,F.jsxs)(`div`,{className:`\r
                flex\r
                flex-col sm:flex-row\r
                gap-4 sm:gap-6\r
                items-start\r
              `,children:[(0,F.jsx)(`div`,{className:`\r
                    w-10 h-10\r
                    rounded-full\r
                    bg-[#155A96]\r
                    text-white\r
                    flex\r
                    items-center\r
                    justify-center\r
                    font-bold\r
                    shrink-0\r
                  `,children:t+1}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`\r
                      text-lg\r
                      font-bold\r
                      text-[#071426]\r
                      mb-2\r
                    `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
                      text-slate-600\r
                      leading-8\r
                    `,children:e.description})]})]},t))}),e.note&&(0,F.jsxs)(`div`,{className:`\r
                mt-6\r
                bg-amber-50\r
                border\r
                border-amber-200\r
                rounded-[24px]\r
                p-6\r
              `,children:[(0,F.jsx)(`h4`,{className:`\r
                  font-bold\r
                  text-amber-800\r
                  mb-2\r
                `,children:`Important Note`}),(0,F.jsx)(`p`,{className:`text-amber-700`,children:e.note})]})]},e.id):e.type===`ledger`?(0,F.jsxs)(`section`,{id:e.id,className:`mb-16 scroll-mt-32`,children:[(0,F.jsx)(`h2`,{className:`\r
            text-2xl sm:text-3xl \r
            font-bold\r
            text-[#071426]\r
            mb-2\r
          `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
              text-slate-600\r
              text-base\r
              lg:text-lg\r
              leading-7\r
              lg:leading-8\r
              mb-6\r
              lg:mb-10\r
            `,children:e.description}),(0,F.jsxs)(`div`,{className:`space-y-5 lg:space-y-6`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`text-lg sm:text-xl font-bold text-[#071426] mb-4`,children:`Major Account Groups`}),(0,F.jsx)(`div`,{className:`\r
    grid\r
    grid-cols-1\r
    md:grid-cols-2\r
    gap-3\r
    md:gap-5\r
  `,children:e.groups?.map((e,t)=>{let n=ky[e.title];return(0,F.jsxs)(`div`,{className:`\r
  bg-white\r
  border\r
  border-slate-200\r
  rounded-xl\r
  sm:rounded-2xl\r
  lg:rounded-3xl\r
  p-4\r
  sm:p-5\r
  lg:p-6\r
  overflow-hidden\r
`,children:[(0,F.jsxs)(`div`,{className:`\r
            flex\r
            items-center\r
            gap-3\r
            mb-4\r
          `,children:[n&&(0,F.jsx)(n,{className:`\r
                w-6 h-6\r
                text-[#155A96]\r
              `}),(0,F.jsx)(`h4`,{className:`\r
              text-lg\r
              sm:text-xl\r
              font-bold\r
              text-[#071426]\r
            `,children:e.title})]}),(0,F.jsx)(`p`,{className:`\r
    text-slate-600\r
    text-sm\r
    sm:text-base\r
    leading-5\r
    break-words\r
  `,children:e.description})]},t)})})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`\r
      text-xl\r
      font-bold\r
      text-[#071426]\r
      mb-6\r
    `,children:`Creating Ledgers`}),(0,F.jsx)(`div`,{className:`\r
  grid\r
  grid-cols-1\r
  md:grid-cols-2\r
  gap-4\r
  md:gap-x-6\r
  md:gap-y-4\r
`,children:e.examples?.map((e,t)=>(0,F.jsxs)(`div`,{className:`\r
    group\r
    flex\r
    items-start\r
    gap-3\r
    sm:gap-4\r
    py-2\r
    min-w-0\r
  `,children:[(0,F.jsx)(`div`,{className:`pt-2 overflow-visible`,children:(0,F.jsx)(`div`,{className:`\r
      w-3 h-3\r
      rounded-full\r
      bg-[#155A96]\r
      \r
    `})}),(0,F.jsxs)(`div`,{className:`\r
    min-w-0\r
    flex-1\r
    \r
  `,children:[(0,F.jsx)(`h4`,{className:`\r
            text-lg\r
            sm:text-xl\r
            font-semibold\r
            text-[#071426]\r
          `,children:e.ledger}),(0,F.jsxs)(`p`,{className:`text-slate-600 mt-1`,children:[`Group:`,(0,F.jsx)(`span`,{className:`\r
              ml-2\r
              font-medium\r
              text-slate-700\r
              \r
            `,children:e.group})]})]})]},t))})]}),(0,F.jsx)(`div`,{className:`\r
    overflow-x-auto\r
    w-full\r
    rounded-xl\r
    sm:rounded-2xl\r
    lg:rounded-3xl\r
    border\r
    border-slate-200\r
    bg-white\r
    -mx-4\r
    sm:mx-0\r
  `,children:(0,F.jsxs)(`table`,{className:`min-w-[650px] w-full\r
  overflow-hidden\r
  rounded-[24px]\r
  border\r
  border-slate-200\r
  bg-white\r
  shadow-sm\r
`,children:[(0,F.jsx)(`thead`,{className:`\r
  bg-gradient-to-r\r
  from-[#EEF4FF]\r
  to-[#F5F3FF]\r
`,children:(0,F.jsxs)(`tr`,{className:`\r
  hover:bg-slate-50\r
  transition-colors\r
`,children:[(0,F.jsx)(`th`,{className:`p-4 text-left`,children:`Ledger`}),(0,F.jsx)(`th`,{className:`p-4 text-left`,children:`Group`}),(0,F.jsx)(`th`,{className:`p-4 text-left`,children:`Type`}),(0,F.jsx)(`th`,{className:`p-4 text-left`,children:`Notes`})]})}),(0,F.jsx)(`tbody`,{children:e.table?.map((e,t)=>(0,F.jsxs)(`tr`,{className:`border-t`,children:[(0,F.jsx)(`td`,{className:`p-4`,children:e.ledger}),(0,F.jsx)(`td`,{className:`p-4`,children:e.group}),(0,F.jsx)(`td`,{className:`px-6 py-4`,children:(0,F.jsx)(`span`,{className:`\r
                  px-3 py-1\r
                  rounded-full\r
                  text-sm\r
                  font-medium\r
                  bg-[#EEF4FF]\r
                  text-[#155A96]\r
                `,children:e.type})}),(0,F.jsx)(`td`,{className:`p-4`,children:e.notes})]},t))})]})}),e.note&&(0,F.jsxs)(`div`,{className:`\r
    mt-6\r
    bg-gradient-to-r\r
    from-amber-50\r
    to-orange-50\r
    border\r
    border-amber-200\r
    rounded-2xl\r
    lg:rounded-3xl\r
    p-4\r
    sm:p-6\r
  `,children:[(0,F.jsx)(`h4`,{className:`\r
      text-lg\r
      font-bold\r
      text-amber-800\r
      mb-2\r
    `,children:`⚠ Best Practice`}),(0,F.jsx)(`p`,{className:`\r
      text-amber-700\r
      leading-8\r
    `,children:e.note})]})]})]},e.id):e.type===`voucher`?(0,F.jsxs)(`section`,{id:e.id,className:`mb-16 scroll-mt-32`,children:[(0,F.jsx)(`h2`,{className:`\r
          text-2xl\r
          sm:text-3xl\r
          lg:text-4xl\r
          font-black\r
          text-[#071426]\r
          mb-3\r
        `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
          text-sm\r
          sm:text-base\r
          lg:text-lg\r
          leading-8\r
          text-slate-600\r
          mb-6\r
        `,children:e.description}),(0,F.jsxs)(`div`,{className:`\r
          p-4\r
          sm:p-6\r
          lg:p-8\r
          rounded-xl\r
          sm:rounded-2xl\r
          lg:rounded-[24px]\r
          bg-slate-50\r
          border\r
          border-slate-200\r
          mb-6\r
        `,children:[(0,F.jsx)(`h3`,{className:`\r
            text-lg\r
            sm:text-xl\r
            font-bold\r
            text-[#071426]\r
            mb-4\r
          `,children:`Golden Rules`}),(0,F.jsx)(`ul`,{className:`space-y-3`,children:e.rules?.map((e,t)=>(0,F.jsxs)(`li`,{className:`\r
                text-slate-700\r
                leading-6\r
                sm:leading-8\r
                font-semibold\r
              `,children:[`• `,e]},t))})]}),(0,F.jsx)(`div`,{className:`\r
    overflow-hidden\r
    rounded-xl\r
    sm:rounded-2xl\r
    lg:rounded-[28px]\r
    border\r
    border-slate-200\r
    bg-white\r
  `,children:e.vouchers?.map((e,t)=>(0,F.jsxs)(`div`,{className:`\r
    border-b\r
    border-slate-200\r
    last:border-b-0\r
  `,children:[(0,F.jsxs)(`button`,{onClick:()=>r(n===t?null:t),className:`\r
    w-full\r
    px-4\r
sm:px-6\r
lg:px-8\r
py-4\r
sm:py-5\r
lg:py-6\r
    flex\r
    items-center\r
    justify-between\r
    hover:bg-slate-50\r
    transition-all\r
    duration-300\r
    group\r
  `,children:[(0,F.jsxs)(`div`,{className:`flex items-start gap-3 min-w-0`,children:[(()=>{let t=Ay[e.type];return(0,F.jsx)(`div`,{className:`\r
            mt-1\r
            text-[#155A96]\r
            group-hover:translate-x-1\r
            transition-transform\r
            duration-300\r
          `,children:(0,F.jsx)(t,{size:22})})})(),(0,F.jsxs)(`div`,{className:`text-left min-w-0 flex-1`,children:[(0,F.jsx)(`span`,{className:`
          inline-flex
          items-center
          px-3
          py-1
          rounded-full
          text-xs
          font-semibold
          tracking-wide
          mb-3
          ${jy[e.type]}
        `,children:e.badge}),(0,F.jsx)(`h3`,{className:`\r
          text-base\r
sm:text-lg\r
lg:text-xl\r
          font-bold\r
          text-[#071426]\r
          group-hover:text-[#155A96]\r
          transition-colors\r
        `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
          text-slate-500\r
          mt-1\r
        `,children:e.subtitle})]})]}),n===t?(0,F.jsx)(Er,{size:24}):(0,F.jsx)(wr,{size:24})]}),n===t&&(0,F.jsxs)(`div`,{className:`\r
                  px-4\r
sm:px-6\r
lg:px-8\r
pb-4\r
sm:pb-6\r
lg:pb-8\r
                  border-t\r
                  border-slate-100\r
                `,children:[(0,F.jsxs)(`p`,{className:`\r
                    mt-4\r
                    text-slate-700\r
                    leading-8\r
                  `,children:[(0,F.jsx)(`strong`,{children:`Use when:`}),` `,e.useWhen]}),e.entry&&(0,F.jsx)(`div`,{className:`\r
                    mt-4\r
                    overflow-x-auto\r
                    rounded-xl\r
                    sm:rounded-2xl\r
                    border\r
                    border-slate-200\r
                    w-full\r
                  `,children:(0,F.jsxs)(`table`,{className:`min-w-[650px] w-full`,children:[(0,F.jsx)(`thead`,{className:`\r
                          bg-[#EEF4FF]\r
                        `,children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{className:`px-3 py-3sm:px-4 sm:py-4 text-left`,children:`Date`}),(0,F.jsx)(`th`,{className:`px-3 py-3sm:px-4 sm:py-4 text-left`,children:`Particulars`}),(0,F.jsx)(`th`,{className:`px-3 py-3sm:px-4 sm:py-4 text-left`,children:`Dr`}),(0,F.jsx)(`th`,{className:`px-3 py-3sm:px-4 sm:py-4 text-left`,children:`Cr`})]})}),(0,F.jsx)(`tbody`,{children:e.entry.map((e,t)=>(0,F.jsxs)(`tr`,{className:`\r
                                border-t\r
                              `,children:[(0,F.jsx)(`td`,{className:`p-4`,children:e.date}),(0,F.jsx)(`td`,{className:`p-4`,children:e.particulars}),(0,F.jsx)(`td`,{className:`p-4`,children:e.dr}),(0,F.jsx)(`td`,{className:`p-4`,children:e.cr})]},t))})]})}),e.narration&&(0,F.jsxs)(`div`,{className:`\r
                      mt-4\r
                      text-slate-600\r
                    `,children:[(0,F.jsx)(`strong`,{children:`Narration:`}),` `,e.narration]})]})]},t))}),(0,F.jsxs)(`div`,{className:`\r
          mt-6\r
          p-4 sm:p-6 lg:p-8\r
          rounded-[24px]\r
          border\r
          border-amber-200\r
          bg-amber-50\r
        `,children:[(0,F.jsx)(`h3`,{className:`\r
            text-lg\r
            sm:text-xl\r
            font-bold\r
            text-amber-900\r
            mb-4\r
          `,children:`Common Mistakes To Avoid`}),(0,F.jsx)(`ul`,{className:`space-y-3`,children:e.mistakes?.map((e,t)=>(0,F.jsxs)(`li`,{className:`\r
                  text-amber-800\r
                  leading-6\r
                  sm:leading-8\r
                `,children:[`• `,e]},t))})]})]},e.id):e.type===`roadmap`?(0,F.jsxs)(`section`,{id:e.id,className:`mb-16 lg:mb-24 scroll-mt-32`,children:[(0,F.jsx)(`h2`,{className:`\r
          text-xl\r
          sm:text-2xl\r
          lg:text-3xl\r
          font-bold\r
          text-[#071426]\r
          mb-3\r
        `,children:e.title}),(0,F.jsx)(`div`,{className:`lg:hidden mt-6`,children:(0,F.jsxs)(`div`,{className:`relative pl-8`,children:[(0,F.jsx)(`div`,{className:`\r
              absolute\r
              left-2\r
              top-0\r
              bottom-0\r
              w-[2px]\r
              bg-[#155A96]\r
            `}),e.steps.map((e,t)=>(0,F.jsxs)(`div`,{className:`relative pb-6`,children:[(0,F.jsx)(`div`,{className:`\r
                  absolute\r
                  -left-[31px]\r
                  top-4\r
                  w-5\r
                  h-5\r
                  rounded-full\r
                  bg-white\r
                  border-4\r
                  border-[#155A96]\r
                `}),(0,F.jsxs)(`div`,{className:`\r
                  bg-white\r
                  border\r
                  border-slate-200\r
                  rounded-xl\r
                  p-4\r
                `,children:[(0,F.jsxs)(`span`,{className:`\r
                    text-xs\r
                    font-semibold\r
                    text-[#155A96]\r
                  `,children:[`STEP `,e.step]}),(0,F.jsx)(`h3`,{className:`\r
                    mt-2\r
                    text-lg\r
                    font-bold\r
                    text-[#071426]\r
                  `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
                    mt-2\r
                    text-sm\r
                    text-slate-600\r
                    leading-6\r
                  `,children:e.description})]})]},t))]})}),(0,F.jsx)(`div`,{className:`hidden lg:block mt-12`,children:(0,F.jsxs)(`div`,{className:`\r
    relative\r
    flex\r
    flex-col\r
    md:flex-row\r
    md:justify-between\r
    items-start\r
    gap-6\r
    md:gap-0\r
    pb-6\r
  `,children:[(0,F.jsx)(`div`,{className:`\r
              absolute\r
              top-5\r
              left-0\r
              w-3\r
              h-3\r
              rounded-full\r
              bg-[#155A96]\r
              -translate-y-1/2\r
            `}),(0,F.jsx)(`div`,{className:`\r
              absolute\r
              top-5\r
              left-0\r
              right-0\r
              h-[2px]\r
              bg-[#155A96]\r
            `}),(0,F.jsx)(`div`,{className:`\r
              absolute\r
              top-5\r
              right-0\r
              w-3\r
              h-3\r
              rounded-full\r
              bg-[#155A96]\r
              -translate-y-1/2\r
            `}),e.steps.map((e,t)=>(0,F.jsxs)(`div`,{className:`\r
                relative\r
                z-10\r
                flex\r
                flex-col\r
                items-center\r
                text-center\r
                w-40\r
              `,children:[(0,F.jsx)(`div`,{className:`\r
                  w-12\r
                  h-12\r
                  rounded-full\r
                  bg-white\r
                  border-4\r
                  border-[#155A96]\r
                  flex\r
                  items-center\r
                  justify-center\r
                  font-bold\r
                  text-[#155A96]\r
                `,children:e.step}),(0,F.jsx)(`h3`,{className:`\r
                  mt-5\r
                  text-lg\r
                  font-bold\r
                  text-[#071426]\r
                `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
                  mt-2\r
                  text-sm\r
                  text-slate-500\r
                  leading-6\r
                `,children:e.description})]},t))]})})]},e.id):e.type===`practice`?(0,F.jsxs)(`section`,{id:e.id,className:`mb-16 scroll-mt-32`,children:[(0,F.jsx)(`h2`,{className:`\r
          text-2xl\r
          sm:text-3xl\r
          lg:text-4xl\r
          font-bold\r
          text-[#071426]\r
          mb-3\r
        `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
          text-lg\r
          text-slate-600\r
          mb-6\r
        `,children:e.description}),(0,F.jsx)(`div`,{className:`\r
          grid\r
          md:grid-cols-2\r
          xl:grid-cols-3\r
          gap-6\r
        `,children:e.labs.map((e,t)=>(0,F.jsxs)(`div`,{className:`\r
              group\r
              bg-white\r
              border\r
              border-slate-200\r
              rounded-[28px]\r
              p-4\r
              transition-all\r
              duration-300\r
              hover:-translate-y-2\r
              hover:shadow-xl\r
            `,children:[(0,F.jsxs)(`div`,{className:`\r
                flex\r
                items-center\r
                justify-between\r
                mb-4\r
              `,children:[(0,F.jsxs)(`span`,{className:`\r
                  text-sm\r
                  font-bold\r
                  text-[#155A96]\r
                  uppercase\r
                  tracking-wider\r
                `,children:[`Lab `,t+1]}),(0,F.jsx)(`span`,{className:`\r
                  px-3\r
                  py-1\r
                  rounded-full\r
                  bg-[#EEF4FF]\r
                  text-[#155A96]\r
                  text-sm\r
                  font-medium\r
                `,children:e.duration})]}),(0,F.jsx)(`h3`,{className:`\r
                text-lg\r
                font-bold\r
                text-[#071426]\r
                mb-4\r
              `,children:e.title}),(0,F.jsx)(`span`,{className:`
                inline-block
                mb-4
                px-3 py-1
                rounded-full
                text-sm
                font-medium
                ${e.difficulty===`Easy`?`bg-green-100 text-green-700`:`bg-amber-100 text-amber-700`}
              `,children:e.difficulty}),(0,F.jsx)(`ul`,{className:`space-y-2`,children:e.tasks.map((e,t)=>(0,F.jsxs)(`li`,{className:`\r
                    flex\r
                    gap-3\r
                    text-slate-600\r
                  `,children:[(0,F.jsx)(`span`,{className:`text-[#155A96]`,children:`✓`}),(0,F.jsx)(`span`,{children:e})]},t))})]},t))}),e.quiz?.length>0&&(0,F.jsxs)(`div`,{className:`\r
    mt-8\r
    bg-white\r
    border\r
    border-slate-200\r
    rounded-[28px]\r
    p-6\r
  `,children:[(0,F.jsx)(`h3`,{className:`\r
      text-xl\r
      font-bold\r
      text-[#071426]\r
      mb-6\r
    `,children:`Self Check Quiz`}),(0,F.jsxs)(`div`,{className:`space-y-6`,children:[e.quiz.map((e,t)=>(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`p`,{className:`\r
            font-medium\r
            text-[#071426]\r
            mb-3\r
          `,children:[t+1,`. `,e.question]}),(0,F.jsxs)(`select`,{value:i[t]||``,onChange:e=>a({...i,[t]:e.target.value}),className:`\r
    w-full\r
    border\r
    border-slate-200\r
    rounded-xl\r
    px-4\r
    py-3\r
  `,children:[(0,F.jsx)(`option`,{value:``,children:`Select Answer`}),e.options.map(e=>(0,F.jsx)(`option`,{value:e,children:e},e))]})]},t)),(0,F.jsx)(`button`,{onClick:()=>d(e.quiz),className:`\r
    px-5\r
    py-2\r
    rounded-xl\r
    bg-[#155A96]\r
    text-white\r
    font-medium\r
  `,children:`Submit Quiz`}),o!==null&&(0,F.jsx)(`div`,{className:`mt-4`,children:(0,F.jsx)(`p`,{className:`
        font-semibold text-lg
        ${o===3?`text-green-600`:o>=2?`text-amber-600`:`text-red-600`}
      `,children:o===3?` Excellent! Score: ${o}/3`:o>=2?` Good Job! Score: ${o}/3`:` Keep Practicing! Score: ${o}/3`})})]})]})]},e.id):e.type===`invoiceTypes`?(0,F.jsxs)(`section`,{id:e.id,className:`mb-24 scroll-mt-32`,children:[(0,F.jsx)(`h2`,{className:`\r
          text-3xl\r
          sm:text-4xl\r
          lg:text-5xl\r
          font-bold\r
          text-[#071426]\r
          mb-5\r
        `,children:e.title}),(0,F.jsx)(`div`,{className:`grid md:grid-cols-2 gap-6`,children:e.invoices.map(e=>(0,F.jsxs)(`div`,{className:`rounded-3xl border border-slate-200 p-6 bg-white`,children:[(0,F.jsx)(`h3`,{className:`text-xl font-bold mb-2`,children:e.title}),(0,F.jsx)(`p`,{className:`text-slate-600 mb-5`,children:e.description}),(0,F.jsx)(`div`,{className:`rounded-2xl bg-[#020C24] text-white p-5 font-mono text-sm`,children:e.invoice.map(e=>(0,F.jsx)(`div`,{children:e},e))})]},e.title))}),(0,F.jsx)(`div`,{className:`mt-5 rounded-2xl bg-amber-50 border border-amber-200 p-5 text-amber-800`,children:e.note})]},e.id):e.type===`gstReturns`?(0,F.jsxs)(`section`,{id:e.id,className:`mb-16 scroll-mt-32`,children:[(0,F.jsx)(`h2`,{className:`\r
          text-2xl\r
          sm:text-3xl\r
          lg:text-4xl\r
          font-bold\r
          text-[#071426]\r
          mb-4\r
        `,children:e.title}),(0,F.jsx)(`div`,{className:`grid md:grid-cols-2 gap-8`,children:e.cards.map((e,t)=>(0,F.jsxs)(`div`,{className:`\r
          group\r
          rounded-2xl\r
          border\r
          border-slate-200\r
          p-6\r
          bg-white\r
          transition-all\r
          duration-300\r
          hover:-translate-y-2\r
          hover:shadow-xl\r
          hover:border-blue-200\r
        `,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-3 mb-5`,children:[(0,F.jsx)(`div`,{className:`\r
              w-12 h-12\r
              rounded-2xl\r
              bg-blue-50\r
              flex items-center justify-center\r
              text-[#155A96]\r
              transition-all\r
              duration-300\r
              group-hover:bg-[#155A96]\r
              group-hover:text-white\r
            `,children:(0,F.jsx)(t===0?Wr:Oi,{size:24})}),(0,F.jsx)(`h3`,{className:`text-xl font-bold text-[#071426]`,children:e.title})]}),(0,F.jsx)(`p`,{className:`text-slate-600 leading-relaxed`,children:e.content})]},e.title))}),(0,F.jsxs)(`div`,{className:`\r
    mt-6\r
    rounded-3xl\r
    border\r
    border-slate-200\r
    p-6\r
    bg-white\r
    transition-all\r
    duration-300\r
    hover:shadow-xl\r
    hover:border-blue-200\r
  `,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-3 mb-5`,children:[(0,F.jsx)(`div`,{className:`\r
        w-12 h-12\r
        rounded-2xl\r
        bg-blue-50\r
        flex items-center justify-center\r
        text-[#155A96]\r
      `,children:(0,F.jsx)(Ei,{size:24})}),(0,F.jsx)(`h3`,{className:`text-xl font-bold text-[#071426]`,children:e.creditDebitNote.title})]}),(0,F.jsx)(`p`,{className:`text-slate-600 leading-relaxed`,children:e.creditDebitNote.content})]}),(0,F.jsx)(`div`,{className:`\r
    mt-4\r
    rounded-2xl\r
    bg-gradient-to-r\r
    from-blue-50\r
    to-cyan-50\r
    border\r
    border-blue-200\r
    p-4\r
    text-[#0F172A]\r
    font-medium\r
    shadow-sm\r
  `,children:e.tip})]},e.id):e.type===`eInvoice`?(0,F.jsx)(`section`,{id:e.id,className:`mb-16 scroll-mt-32`,children:(0,F.jsxs)(`div`,{className:`bg-white rounded-3xl border border-slate-200 p-5 sm:p-8 lg:p-10`,children:[(0,F.jsx)(`h2`,{className:`text-2xl\r
          sm:text-3xl\r
          lg:text-4xl font-bold text-[#071426] mb-6`,children:e.title}),(0,F.jsx)(`p`,{className:`text-slate-600 text-lg leading-relaxed mb-6`,children:e.description}),(0,F.jsx)(`div`,{className:`space-y-5 pl-6`,children:e.process.map((e,t)=>(0,F.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,F.jsx)(`div`,{className:`\r
                  w-8 h-8\r
                  rounded-full\r
                  bg-blue-100\r
                  text-blue-600\r
                  flex items-center justify-center\r
                  font-bold\r
                  shrink-0\r
                `,children:t+1}),(0,F.jsx)(`p`,{className:`text-lg text-slate-700`,children:e})]},t))}),(0,F.jsxs)(`div`,{className:`\r
            mt-6\r
            rounded-2xl\r
            bg-amber-50\r
            border\r
            border-amber-200\r
            p-4\r
            text-slate-700\r
          `,children:[(0,F.jsx)(`span`,{className:`font-semibold`,children:`Note:`}),` `,e.note]})]})},e.id):e.type===`faq`?(0,F.jsxs)(`section`,{id:e.id,className:`mb-16 scroll-mt-32`,children:[(0,F.jsx)(`h2`,{className:`\r
          text-2xl\r
          sm:text-3xl\r
          lg:text-4xl\r
          font-bold\r
          text-[#071426]\r
          mb-6\r
        `,children:e.title}),(0,F.jsx)(`div`,{className:`space-y-4`,children:e.questions.map((e,t)=>(0,F.jsxs)(`details`,{className:`\r
              group\r
              bg-white\r
              border\r
              border-slate-200\r
              rounded-2xl\r
              overflow-hidden\r
            `,children:[(0,F.jsxs)(`summary`,{className:`\r
                cursor-pointer\r
                list-none\r
                px-6\r
                py-4\r
                text-[15px] sm:text-[18px] lg:text-[14px]\r
                text-[#071426]\r
                flex\r
                items-center\r
                justify-between\r
              `,children:[e.question,(0,F.jsx)(`span`,{className:`\r
                  transition-transform\r
                  duration-300\r
                  group-open:rotate-180\r
                `,children:`▼`})]}),(0,F.jsx)(`div`,{className:`\r
                px-6\r
                pb-5\r
                text-slate-600\r
                leading-relaxed\r
                border-t\r
                border-slate-100\r
              `,children:e.answer})]},t))})]},e.id):e.type===`inventoryCards`?(0,F.jsxs)(`section`,{id:e.id,className:`mb-16 scroll-mt-32`,children:[(0,F.jsx)(`h2`,{className:`\r
          text-2xl\r
          sm:text-3xl\r
          lg:text-4xl\r
          font-bold\r
          text-[#071426]\r
          mb-4\r
        `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
          text-lg\r
          text-slate-600\r
          leading-relaxed\r
          mb-5 lg:mb-8\r
        `,children:e.description}),(0,F.jsx)(`div`,{className:`grid md:grid-cols-2 gap-x-12 gap-y-8`,children:e.cards.map((e,t)=>(0,F.jsxs)($.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:t*.08},className:`\r
              flex\r
              items-start\r
              gap-4\r
              group\r
            `,children:[(0,F.jsx)(`div`,{className:`\r
                w-3\r
                h-3\r
                rounded-full\r
                bg-[#155A96]\r
                mt-2.5\r
                group-hover:scale-125\r
                transition-transform\r
              `}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`\r
                  text-[16px]\r
                  font-semibold\r
                  text-[#071426]\r
                  mb-2\r
                `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
                  text-slate-600\r
                  text-base\r
                  leading-relaxed\r
                `,children:e.description})]})]},e.title))}),(0,F.jsxs)(`div`,{className:`\r
          mt-6\r
          p-4\r
          rounded-2xl\r
          bg-cyan-50\r
          border\r
          border-cyan-200\r
        `,children:[(0,F.jsx)(`span`,{className:`font-semibold`,children:`Tip:`}),` `,e.tip]})]},e.id):e.type===`warehouse`?(0,F.jsxs)(`section`,{id:e.id,className:`mb-16 scroll-mt-32`,children:[(0,F.jsx)(`h2`,{className:`\r
          text-2xl\r
          sm:text-3xl\r
          lg:text-4xl\r
          font-bold\r
          text-[#071426]\r
          mb-4\r
        `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
          text-lg\r
          text-slate-600\r
          mb-7\r
        `,children:e.description}),(0,F.jsx)(`div`,{className:`space-y-6 mb-10 mt-6`,children:e.setupPoints.map((e,t)=>(0,F.jsxs)($.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.4,delay:t*.08},className:`\r
                flex\r
                items-start\r
                gap-4\r
              `,children:[(0,F.jsx)(`div`,{className:`\r
                  w-3\r
                  h-3\r
                  rounded-full\r
                  bg-[#155A96]\r
                  mt-2.5\r
                  shrink-0\r
                `}),(0,F.jsx)(`p`,{className:`\r
                  text-lg\r
                  text-slate-700\r
                  leading-relaxed\r
                `,children:e})]},t))}),(0,F.jsx)(`div`,{className:`grid md:grid-cols-2 gap-6`,children:e.useCases.map((e,t)=>(0,F.jsxs)($.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:t*.1},className:`\r
              rounded-3xl\r
              border\r
              border-slate-200\r
              bg-white\r
              p-6\r
              hover:border-[#155A96]\r
              hover:shadow-lg\r
              transition-all\r
              duration-300\r
            `,children:[(0,F.jsx)(`h3`,{className:`\r
                text-xl\r
                font-bold\r
                text-[#071426]\r
                mb-4\r
              `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
                text-slate-600\r
                leading-relaxed\r
              `,children:e.description})]},e.title))}),(0,F.jsxs)($.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5},className:`\r
          mt-6\r
          rounded-2xl\r
          bg-cyan-50\r
          border\r
          border-cyan-200\r
          p-4\r
        `,children:[(0,F.jsx)(`span`,{className:`font-semibold text-[#0F766E]`,children:`Tip:`}),` `,(0,F.jsx)(`span`,{className:`text-slate-700`,children:e.tip})]})]},e.id):e.type===`batching`?(0,F.jsxs)(`section`,{id:e.id,className:`mb-16 scroll-mt-32`,children:[(0,F.jsx)(`h2`,{className:`\r
          text-2xl\r
          sm:text-3xl\r
          lg:text-4Sxl\r
          font-bold\r
          text-[#071426]\r
          mb-4\r
        `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
          text-lg\r
          text-slate-600\r
          leading-relaxed\r
          mb-6\r
        `,children:e.description}),(0,F.jsx)(`div`,{className:`space-y-5 mb-10`,children:e.points.map((e,t)=>(0,F.jsxs)($.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.4,delay:t*.08},className:`\r
              flex items-start gap-4\r
              group\r
              cursor-pointer\r
              transition-all\r
              duration-300\r
              hover:translate-x-2\r
            `,children:[(0,F.jsx)(`div`,{className:`\r
                w-3 h-3\r
                rounded-full\r
                bg-[#155A96]\r
                mt-3\r
                shrink-0\r
                transition-all\r
                duration-300\r
                group-hover:scale-125\r
              `}),(0,F.jsxs)(`p`,{className:`\r
              text-lg\r
              text-slate-700\r
              leading-relaxed\r
            `,children:[(0,F.jsx)(`span`,{className:`\r
                font-bold\r
                text-[#071426]\r
                transition-colors\r
                duration-300\r
              `,children:e.title}),(0,F.jsxs)(`span`,{className:`text-slate-600`,children:[` `,`— `,e.description]})]})]},t))}),e.bestPractice?.length>0&&(0,F.jsxs)($.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:`\r
          rounded-3xl\r
          border\r
          border-amber-200\r
          bg-amber-50\r
          p-6\r
          mb-4\r
        `,children:[(0,F.jsx)(`h3`,{className:`\r
            text-xl\r
            font-bold\r
            text-amber-900\r
            mb-3\r
          `,children:`Best Practice`}),(0,F.jsx)(`p`,{className:`\r
            text-lg\r
            text-amber-800\r
            leading-relaxed\r
          `,children:e.bestPractice})]}),(0,F.jsx)(`div`,{className:`\r
          rounded-2xl\r
          bg-blue-50\r
          border\r
          border-blue-200\r
          p-4\r
        `,children:(0,F.jsx)(`p`,{className:`text-blue-900 text-lg`,children:e.tip})})]},e.id):e.type===`bom`?(0,F.jsxs)(`section`,{id:e.id,className:`mb-16 scroll-mt-32`,children:[(0,F.jsx)(`h2`,{className:`\r
          text-2xl\r
          sm:text-3xl\r
          lg:text-4xl\r
          font-bold\r
          text-[#071426]\r
          mb-4\r
        `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
          text-lg\r
          text-slate-600\r
          leading-relaxed\r
          mb-6\r
        `,children:e.description}),(0,F.jsx)(`div`,{className:`space-y-5 mb-10`,children:e.points.map((e,t)=>(0,F.jsxs)($.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.4,delay:t*.08},className:`\r
              flex items-start gap-4\r
              group\r
              cursor-pointer\r
              transition-all\r
              duration-300\r
              hover:translate-x-2\r
            `,children:[(0,F.jsx)(`div`,{className:`\r
                w-3 h-3\r
                rounded-full\r
                bg-[#155A96]\r
                mt-3\r
                shrink-0\r
                transition-all\r
                duration-300\r
                group-hover:scale-125\r
              `}),(0,F.jsxs)(`p`,{className:`text-lg leading-relaxed`,children:[(0,F.jsx)(`span`,{className:`\r
                  font-bold\r
                  text-[#071426]\r
                  transition-colors\r
                  duration-300\r
                  group-hover:text-[#155A96]\r
                `,children:e.title}),(0,F.jsxs)(`span`,{className:`text-slate-600`,children:[` `,`— `,e.description]})]})]},t))}),(0,F.jsxs)($.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:`\r
          rounded-3xl\r
          bg-[#071426]\r
          text-white\r
          p-6\r
          mb-6\r
          font-mono\r
        `,children:[(0,F.jsx)(`h3`,{className:`font-bold text-xl mb-4`,children:e.example.title}),(0,F.jsx)(`div`,{className:`space-y-3 text-lg`,children:e.example.items.map((e,t)=>(0,F.jsxs)(`p`,{children:[`• `,e]},t))}),(0,F.jsxs)(`div`,{className:`mt-5 pt-5 border-t border-white/20`,children:[`Assembly Time: `,e.example.assemblyTime]})]}),(0,F.jsx)(`div`,{className:`\r
          rounded-2xl\r
          bg-blue-50\r
          border\r
          border-blue-200\r
          p-5\r
        `,children:(0,F.jsx)(`p`,{className:`text-blue-900 text-lg`,children:e.tip})})]},e.id):e.type===`report`?(0,F.jsxs)(`section`,{id:e.id,className:`mb-16 scroll-mt-32`,children:[(0,F.jsx)(`h2`,{className:`\r
          text-2xl\r
          sm:text-3xl\r
          lg:text-4xl\r
          font-bold\r
          text-[#071426]\r
          mb-4\r
        `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
          text-lg\r
          text-slate-600\r
          leading-relaxed\r
          mb-6\r
        `,children:e.description}),(0,F.jsx)(`div`,{className:`space-y-4 mb-8`,children:e.points.map((e,t)=>(0,F.jsxs)($.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.4,delay:t*.08},className:`\r
              flex items-start gap-4\r
              group\r
              cursor-pointer\r
              transition-all\r
              duration-300\r
              hover:translate-x-2\r
            `,children:[(0,F.jsx)(`div`,{className:`\r
                w-3 h-3\r
                rounded-full\r
                bg-[#155A96]\r
                mt-3\r
                shrink-0\r
                transition-all\r
                duration-300\r
                group-hover:scale-125\r
              `}),(0,F.jsxs)(`p`,{className:`text-lg leading-relaxed`,children:[(0,F.jsx)(`span`,{className:`\r
                  font-bold\r
                  text-[#071426]\r
                  transition-colors\r
                  duration-300\r
                  group-hover:text-[#155A96]\r
                `,children:e.title}),(0,F.jsxs)(`span`,{className:`text-slate-600`,children:[` `,`— `,e.description]})]})]},t))}),(0,F.jsxs)($.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:`\r
          rounded-3xl\r
          bg-[#071426]\r
          text-white\r
          p-6\r
          mb-6\r
          overflow-x-auto\r
        `,children:[(0,F.jsx)(`h3`,{className:`font-bold text-xl mb-5`,children:e.sampleTitle}),(0,F.jsxs)(`table`,{className:`w-full text-left`,children:[(0,F.jsx)(`thead`,{children:(0,F.jsxs)(`tr`,{className:`border-b border-white/20`,children:[(0,F.jsx)(`th`,{className:`pb-3`,children:`Ledger`}),(0,F.jsx)(`th`,{className:`pb-3`,children:`Debit (₹)`}),(0,F.jsx)(`th`,{className:`pb-3`,children:`Credit (₹)`})]})}),(0,F.jsxs)(`tbody`,{children:[e.sample.map((e,t)=>(0,F.jsxs)(`tr`,{className:`border-b border-white/10`,children:[(0,F.jsx)(`td`,{className:`py-3`,children:e.ledger}),(0,F.jsx)(`td`,{className:`py-3`,children:e.debit}),(0,F.jsx)(`td`,{className:`py-3`,children:e.credit})]},t)),(0,F.jsxs)(`tr`,{className:`font-bold`,children:[(0,F.jsx)(`td`,{className:`pt-4`,children:`Total`}),(0,F.jsx)(`td`,{className:`pt-4`,children:e.totalDebit}),(0,F.jsx)(`td`,{className:`pt-4`,children:e.totalCredit})]})]})]})]}),(0,F.jsx)(`div`,{className:`\r
          rounded-2xl\r
          bg-blue-50\r
          border\r
          border-blue-200\r
          p-5\r
        `,children:(0,F.jsx)(`p`,{className:`text-blue-900 text-lg`,children:e.note})})]},e.id):null)]})]})]})]})}var Ny=[{id:`learn`,label:`What You'll Learn`},{id:`steps`,label:`Lab Steps`},{id:`dataset`,label:`Practice Dataset`},{id:`quiz`,label:`Quiz Assessment`}],Py=[{slug:`company-setup`,id:1,slug:`company-setup`,title:`Company Setup & Opening Balances`,level:`Beginner`,duration:`30-45 mins`,description:`Create a new company, configure financial year, create ledgers and enter opening balances.`,objectives:[`Create a company`,`Configure financial year`,`Create primary ledgers`,`Generate Trial Balance`],heroHighlights:[`Hands-on Practice`,`Real-world Scenario`,`Quiz Assessment`],checklist:[`Company created`,`Ledgers created`,`Opening balances entered`,`Trial Balance generated`],steps:[{id:1,title:`Create Company`,duration:`5 mins`,objective:`Create a new company in Tally Prime.`,instructions:[`Open Gateway of Tally`,`Select Create Company`,`Enter company name as DemoCo Pvt Ltd`,`Set Financial Year Start Date`,`Save the company`],expectedResult:`Company is created successfully and opens in Gateway of Tally.`},{id:2,title:`Set Preferences`,duration:`3 mins`,objective:`Configure company preferences for accounting.`,instructions:[`Open Company Features`,`Enable required accounting options`,`Enable Opening Balance option`,`Save settings`],expectedResult:`Company settings are configured correctly.`},{id:3,title:`Create Ledgers & Groups`,duration:`10 mins`,objective:`Create the required ledgers for the exercise.`,instructions:[`Create Cash ledger`,`Create HDFC Bank ledger`,`Create Capital Account ledger`,`Create Outstanding Expenses ledger`],expectedResult:`All required ledgers are available.`},{id:4,title:`Enter Opening Balances`,duration:`10 mins`,objective:`Enter opening balances using the provided dataset.`,instructions:[`Open Ledger Alteration`,`Enter opening balances`,`Verify debit and credit values`,`Save changes`],expectedResult:`All balances are entered successfully.`},{id:5,title:`Reconcile & Adjust`,duration:`5 mins`,objective:`Balance debits and credits if required.`,instructions:[`Check Trial Balance`,`Identify difference`,`Create adjustment entry`,`Verify totals`],expectedResult:`Trial Balance is balanced.`},{id:6,title:`Generate Trial Balance`,duration:`5 mins`,objective:`Generate and export Trial Balance report.`,instructions:[`Open Reports`,`Select Trial Balance`,`Verify balances`,`Export PDF`],expectedResult:`Trial Balance report exported successfully.`}],practiceDataset:{title:`Opening Balance Dataset`,description:`Use these sample balances while completing the exercise.`,columns:[`Ledger`,`Group`,`Opening Balance`],entries:[{ledger:`Capital Account`,group:`Capital`,balance:`300,000 (Cr)`},{ledger:`Cash`,group:`Cash-in-Hand`,balance:`8,000 (Dr)`},{ledger:`HDFC Bank`,group:`Banks`,balance:`22,000 (Dr)`},{ledger:`Stock in Hand`,group:`Assets`,balance:`50,000 (Dr)`},{ledger:`Outstanding Expenses`,group:`Liabilities`,balance:`4,000 (Cr)`}],note:`Total Debits and Credits may require adjustment depending on migration data.`},quiz:[{id:1,question:`Which voucher type is commonly used to enter opening balances?`,options:[`Payment Voucher`,`Receipt Voucher`,`Journal Voucher`,`Contra Voucher`],correctAnswer:`Journal Voucher`},{id:2,question:`Which report helps verify ledger balances?`,options:[`Day Book`,`Trial Balance`,`Cash Flow`,`Purchase Register`],correctAnswer:`Trial Balance`},{id:3,question:`Which ledger group should HDFC Bank belong to?`,options:[`Capital`,`Banks`,`Expenses`,`Liabilities`],correctAnswer:`Banks`}]},{id:2,slug:`gst-invoice-return`,title:`GST Invoice & Return`,level:`Intermediate`,duration:`60-90 mins`,description:`Create GST-compliant invoices, post sales and purchase vouchers, generate GSTR-1 and GSTR-3B summaries, and reconcile outward supplies.`,objectives:[`Configure GST settings`,`Create GST invoices`,`Generate GSTR-1`,`Prepare GSTR-3B summary`],checklist:[`GST enabled & tax ledgers created`,`Customer & supplier GSTIN validated`,`Invoices raised with HSN/SAC & tax breakup`,`GSTR-1 & GSTR-3B prepared`,`Reconciliation completed`,`Quiz completed`],steps:[{id:1,title:`Enable GST & Create Tax Ledgers`,duration:`10 mins`,objective:`Configure GST in company settings and create tax ledgers.`,instructions:[`Open Company Features`,`Enable GST`,`Set GST Registration Type`,`Create CGST 9% ledger`,`Create SGST 9% ledger`,`Create IGST 18% ledger`],expectedResult:`GST is enabled and tax ledgers are available.`},{id:2,title:`Create Customer & Supplier Masters`,duration:`10 mins`,objective:`Create party ledgers with GST details.`,instructions:[`Create customer ledger`,`Enter GSTIN`,`Select state and registration type`,`Create supplier ledger`,`Save all parties`],expectedResult:`Customer and supplier masters are ready.`},{id:3,title:`Raise GST Invoices`,duration:`15 mins`,objective:`Create B2B, B2C and Export invoices.`,instructions:[`Create Sales Voucher`,`Select customer`,`Enter item details`,`Apply GST taxes`,`Save invoice`],expectedResult:`All invoices are generated successfully.`},{id:4,title:`Post Purchase & Sales Entries`,duration:`10 mins`,objective:`Record GST transactions correctly.`,instructions:[`Create purchase voucher`,`Create sales voucher`,`Verify GST calculation`,`Save entries`],expectedResult:`Sales and purchase vouchers are recorded.`},{id:5,title:`Generate GSTR-1`,duration:`10 mins`,objective:`Generate outward supplies report.`,instructions:[`Open GST Reports`,`Select GSTR-1`,`Choose return period`,`Verify values`,`Export CSV`],expectedResult:`GSTR-1 report generated successfully.`},{id:6,title:`Prepare GSTR-3B Summary`,duration:`10 mins`,objective:`Review tax liability and summary values.`,instructions:[`Open GSTR-3B report`,`Review taxable supplies`,`Verify tax liability`,`Save summary`],expectedResult:`GSTR-3B summary is prepared.`},{id:7,title:`Reconcile GST Reports`,duration:`15 mins`,objective:`Match invoices with GST returns.`,instructions:[`Compare sales register`,`Verify invoice values`,`Identify mismatches`,`Document corrections`],expectedResult:`GST reconciliation completed successfully.`}],practiceDataset:{title:`GST Invoice Dataset`,description:`Use the following invoices while completing the lab.`,columns:[`Invoice`,`Type`,`Tax`,`Amount`],entries:[{invoice:`INV-2001`,type:`B2B (Taxable)`,tax:`CGST 9% + SGST 9%`,amount:`₹50,000`},{invoice:`INV-2002`,type:`B2C (Taxable)`,tax:`IGST 18%`,amount:`₹2,500`},{invoice:`INV-2003`,type:`Export (Zero Rated)`,tax:`Nil (Export)`,amount:`₹120,000`}],note:`Ensure HSN/SAC codes and GST rates are entered correctly.`},quiz:[{id:1,question:`Which GST return contains outward supply details?`,options:[`GSTR-1`,`GSTR-2A`,`GSTR-3B`,`GSTR-9`],correctAnswer:`GSTR-1`},{id:2,question:`Which tax applies to an interstate taxable supply?`,options:[`CGST`,`SGST`,`IGST`,`CESS`],correctAnswer:`IGST`},{id:3,question:`What is required for GST invoice reporting?`,options:[`PAN only`,`GSTIN`,`Aadhaar`,`Passport`],correctAnswer:`GSTIN`}]},{id:3,slug:`inventory-stock`,title:`Inventory Movement & Stock Valuation`,level:`Intermediate`,duration:`45-60 mins`,description:`Create stock items, configure godowns, perform stock transfers, record stock journals and generate stock valuation reports.`,objectives:[`Create stock items`,`Configure godowns`,`Transfer inventory`,`Generate valuation reports`],checklist:[`Stock items created`,`Godowns configured`,`Stock transfer completed`,`Stock journal recorded`,`Valuation report generated`,`Quiz completed`],steps:[{id:1,title:`Create Stock Items & UOM`,duration:`10 mins`,objective:`Create stock masters with units of measure and opening quantities.`,instructions:[`Open Stock Item Creation`,`Enter item name and code`,`Assign UOM`,`Enter opening quantity`,`Save stock item`],expectedResult:`Stock items are created successfully.`},{id:2,title:`Configure Godowns`,duration:`5 mins`,objective:`Create warehouses for inventory tracking.`,instructions:[`Open Godown Creation`,`Create Main Warehouse`,`Create Branch Warehouse`,`Save configuration`],expectedResult:`Godowns are available for stock movement.`},{id:3,title:`Transfer Stock Between Godowns`,duration:`10 mins`,objective:`Move inventory from one warehouse to another.`,instructions:[`Open Stock Transfer Voucher`,`Select source godown`,`Select destination godown`,`Enter transfer quantity`,`Save transaction`],expectedResult:`Inventory transferred successfully.`},{id:4,title:`Create Stock Journal Entry`,duration:`10 mins`,objective:`Record production and consumption entries.`,instructions:[`Open Stock Journal`,`Select raw materials`,`Enter consumption quantity`,`Enter finished goods quantity`,`Save journal`],expectedResult:`Stock journal entry recorded successfully.`},{id:5,title:`Generate Stock Valuation Report`,duration:`5 mins`,objective:`Review stock value and inventory balances.`,instructions:[`Open Inventory Reports`,`Select Stock Valuation`,`Choose valuation method`,`Verify balances`,`Export report`],expectedResult:`Stock valuation report generated.`},{id:6,title:`Perform Inventory Reconciliation`,duration:`5 mins`,objective:`Compare physical stock with system stock.`,instructions:[`Review stock balances`,`Compare physical count`,`Identify differences`,`Record adjustments`],expectedResult:`Inventory reconciliation completed.`}],practiceDataset:{title:`Stock Inventory Dataset`,description:`Use the following stock items while completing the lab.`,columns:[`Item Code`,`Description`,`UOM`,`Opening Qty`],entries:[{itemCode:`RM-COT-001`,description:`Cotton Fabric`,uom:`m`,openingQty:`500`},{itemCode:`RM-WOOD-01`,description:`Timber`,uom:`kg`,openingQty:`200`},{itemCode:`FG-CH-01`,description:`Wooden Chair`,uom:`pcs`,openingQty:`50`},{itemCode:`PK-BOX-01`,description:`Packaging Box`,uom:`pcs`,openingQty:`200`}],note:`Ensure opening quantities and UOM values are entered correctly.`},quiz:[{id:1,question:`Which inventory valuation method assumes oldest stock is consumed first?`,options:[`FIFO`,`Weighted Average`,`Standard Cost`,`Moving Average`],correctAnswer:`FIFO`},{id:2,question:`Which feature is used to transfer stock between warehouses?`,options:[`Payment Voucher`,`Receipt Voucher`,`Stock Transfer`,`Contra Voucher`],correctAnswer:`Stock Transfer`},{id:3,question:`What is the purpose of a godown in inventory management?`,options:[`Customer Management`,`Tax Calculation`,`Stock Storage`,`Payroll Processing`],correctAnswer:`Stock Storage`}]},{id:4,slug:`payroll-management`,title:`Payroll Month End`,level:`Advanced`,duration:`60 mins`,description:`Create employee records, configure salary structures, process attendance, compute payroll and generate payslips with statutory deductions.`,objectives:[`Create employee masters`,`Configure salary templates`,`Process attendance`,`Generate payslips`],checklist:[`Employees created with PAN & bank details`,`Salary templates configured`,`Attendance imported / verified`,`Payroll processed successfully`,`Payslips generated & bank file exported`,`Quiz completed`],steps:[{id:1,title:`Create Employee Masters`,duration:`10 mins`,objective:`Create employee records with personal, bank and statutory details.`,instructions:[`Create employee master`,`Enter PAN details`,`Enter bank details`,`Assign department`,`Save employee record`],expectedResult:`Employee masters are created successfully.`},{id:2,title:`Define Salary Templates`,duration:`10 mins`,objective:`Configure salary structures and earning components.`,instructions:[`Create salary template`,`Add Basic Pay`,`Add HRA`,`Add Special Allowance`,`Configure deductions`],expectedResult:`Salary templates are configured.`},{id:3,title:`Process Attendance`,duration:`10 mins`,objective:`Import or enter monthly attendance records.`,instructions:[`Open attendance module`,`Import attendance data`,`Verify working days`,`Check leave entries`,`Save attendance`],expectedResult:`Attendance records processed successfully.`},{id:4,title:`Compute Payroll`,duration:`10 mins`,objective:`Calculate gross salary, deductions and net pay.`,instructions:[`Run payroll process`,`Verify earnings`,`Verify deductions`,`Check PF and ESI`,`Approve payroll`],expectedResult:`Payroll calculated successfully.`},{id:5,title:`Process Loan & Recoveries`,duration:`5 mins`,objective:`Apply employee loan deductions and recoveries.`,instructions:[`Open employee loan details`,`Enter recovery amount`,`Verify deduction`,`Save payroll changes`],expectedResult:`Loan deductions processed successfully.`},{id:6,title:`Generate Payslips`,duration:`10 mins`,objective:`Generate employee payslips and salary reports.`,instructions:[`Open payroll reports`,`Generate payslips`,`Review salary details`,`Export PDF`],expectedResult:`Payslips generated successfully.`},{id:7,title:`Export Bank File & Reports`,duration:`5 mins`,objective:`Generate bank transfer file and statutory reports.`,instructions:[`Generate bank file`,`Review PF report`,`Review ESI report`,`Export reports`],expectedResult:`Payroll reports exported successfully.`}],practiceDataset:{title:`Employee Salary Dataset`,description:`Use the following employee data while completing the payroll exercise.`,columns:[`Emp Code`,`Name`,`Template`,`CTC (₹)`],entries:[{empCode:`EMP001`,name:`Asha Rao`,template:`Monthly-Fixed`,ctc:`600000`},{empCode:`EMP002`,name:`Ravi Kumar`,template:`Monthly-Fixed`,ctc:`480000`},{empCode:`EMP003`,name:`Neha Singh`,template:`Hourly-Contract`,ctc:`240000`},{empCode:`EMP004`,name:`Vikram Patel`,template:`Monthly-Fixed`,ctc:`720000`}],note:`Verify attendance, deductions and salary structure before processing payroll.`},quiz:[{id:1,question:`Which document provides salary details to an employee?`,options:[`Invoice`,`Payslip`,`Purchase Order`,`Voucher`],correctAnswer:`Payslip`},{id:2,question:`Which deduction is commonly applicable to salaried employees in India?`,options:[`GST`,`PF`,`Custom Duty`,`Excise Duty`],correctAnswer:`PF`},{id:3,question:`What is calculated after deducting taxes and deductions from gross salary?`,options:[`CTC`,`Net Pay`,`Basic Pay`,`HRA`],correctAnswer:`Net Pay`}]}];function Fy(){let{exerciseSlug:e}=ht(),[t,n]=(0,w.useState)(0),r=Py.find(t=>t.slug===e);if(!r)return(0,F.jsx)(`div`,{className:`pt-32 text-center`,children:`Exercise not found`});let[i,a]=(0,w.useState)(0),[o,s]=(0,w.useState)({}),[c,l]=(0,w.useState)(!1),u=r.quiz,d=u[i],f=u.reduce((e,t)=>e+ +(o[t.id]===t.correctAnswer),0),[p,m]=(0,w.useState)({}),h=e=>{m(t=>({...t,[e]:!t[e]}))},g=r.steps.length+1,_=Object.values(p).filter(Boolean).length,v=_/g*100;return(0,F.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16`,children:[(0,F.jsxs)(`section`,{className:`\r
  relative\r
  overflow-hidden\r
    bg-[#F8FBFD]\r
    border\r
    border-slate-200\r
    rounded-2xl\r
sm:rounded-3xl\r
p-5\r
sm:p-8\r
md:p-10\r
    shadow-sm\r
    mb-10\r
  `,children:[(0,F.jsx)(`div`,{className:`\r
    absolute\r
    top-0\r
    left-1/2\r
    -translate-x-1/2\r
    w-[600px]\r
    h-[600px]\r
    bg-[#155A96]/5\r
    blur-[120px]\r
    rounded-full\r
  `}),(0,F.jsx)(`div`,{className:`grid lg:grid-cols-1 gap-10 items-center`,children:(0,F.jsxs)(`div`,{className:`\r
    max-w-4xl\r
    mx-auto\r
    text-center\r
  `,children:[(0,F.jsxs)(`div`,{className:`\r
          inline-flex\r
          items-center\r
          gap-2\r
          px-4\r
          py-2\r
          rounded-full\r
          bg-[#EEF4F8]\r
          text-[#155A96]\r
          text-sm\r
          font-medium\r
        `,children:[(0,F.jsx)(fr,{size:15}),`Practice Lab`]}),(0,F.jsx)(`h1`,{className:`\r
          mt-4\r
          text-2xl\r
sm:text-3xl\r
md:text-4xl\r
lg:text-5xl\r
          font-bold\r
          text-slate-900\r
          leading-tight\r
        `,children:r.title}),(0,F.jsx)(`p`,{className:`\r
          mt-4\r
          text-sm\r
sm:text-base\r
md:text-lg\r
          text-slate-600\r
          max-w-3xl\r
          mx-auto\r
          leading-relaxed\r
        `,children:r.description}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8`,children:[(0,F.jsxs)(`div`,{className:`\r
    bg-white\r
    border border-[#D7E5EF]\r
    rounded-2xl\r
    p-5\r
    text-center\r
  `,children:[(0,F.jsx)(Bi,{size:18,className:`mx-auto text-[#155A96]`}),(0,F.jsx)(`p`,{className:`mt-2 text-xs uppercase tracking-wider text-[#64748B]`,children:`Level`}),(0,F.jsx)(`h3`,{className:`mt-1 font-bold text-[#155A96]`,children:r.level})]}),(0,F.jsxs)(`div`,{className:`\r
    bg-white\r
    border border-[#D7E5EF]\r
    rounded-2xl\r
    p-5\r
    text-center\r
  `,children:[(0,F.jsx)(Nr,{size:18,className:`mx-auto text-[#155A96]`}),(0,F.jsx)(`p`,{className:`mt-2 text-xs uppercase tracking-wider text-[#64748B]`,children:`Duration`}),(0,F.jsx)(`h3`,{className:`mt-1 font-bold text-[#155A96]`,children:r.duration})]}),(0,F.jsxs)(`div`,{className:`\r
    bg-white\r
    border border-[#D7E5EF]\r
    rounded-2xl\r
    p-5\r
    text-center\r
  `,children:[(0,F.jsx)(Or,{size:18,className:`mx-auto text-[#155A96]`}),(0,F.jsx)(`p`,{className:`mt-2 text-xs uppercase tracking-wider text-[#64748B]`,children:`Steps`}),(0,F.jsx)(`h3`,{className:`mt-1 font-bold text-[#155A96]`,children:r.steps?.length||0})]})]}),(0,F.jsxs)(`div`,{className:`\r
    mt-6\r
    bg-white\r
    border border-[#D7E5EF]\r
    rounded-2xl\r
    p-5\r
    max-w-xl\r
    mx-auto\r
  `,children:[(0,F.jsxs)(`div`,{className:`flex justify-between items-center mb-2`,children:[(0,F.jsx)(`span`,{className:`text-sm text-[#64748B]`,children:`Lab Completion`}),(0,F.jsxs)(`span`,{className:`text-sm font-semibold text-[#155A96]`,children:[_,`/`,r.steps.length]})]}),(0,F.jsx)(`div`,{className:`h-2 bg-[#EEF4F8] rounded-full`,children:(0,F.jsx)(`div`,{className:`\r
    h-2\r
    bg-[#155A96]\r
    rounded-full\r
    transition-all\r
    duration-500\r
  `,style:{width:`${_/r.steps.length*100}%`}})})]}),(0,F.jsx)(`div`,{className:`flex flex-wrap justify-center gap-4 mt-6`,children:(0,F.jsxs)(`button`,{onClick:()=>document.getElementById(`steps`)?.scrollIntoView({behavior:`smooth`}),className:`\r
            flex\r
            items-center\r
            gap-2\r
            px-6\r
            py-3\r
            rounded-xl\r
            bg-[#155A96]\r
            hover:bg-[#246AE8]\r
            text-white\r
            font-medium\r
          `,children:[(0,F.jsx)(Si,{size:18}),`Start Lab`]})})]})})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-8`,children:[(0,F.jsxs)(`div`,{className:`lg:col-span-8 space-y-8`,children:[(0,F.jsxs)(`section`,{id:`learn`,className:`\r
    bg-white\r
    border\r
    border-slate-200\r
    rounded-2xl\r
    lg:rounded-3xl\r
    p-4\r
    sm:p-6\r
    lg:p-8\r
  `,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-3 mb-6`,children:[(0,F.jsx)(`div`,{className:`\r
      w-10 h-10\r
      rounded-xl\r
      bg-[#EEF4F8]\r
      flex items-center justify-center\r
    `,children:(0,F.jsx)(fr,{className:`w-5 h-5 text-[#155A96]`})}),(0,F.jsx)(`div`,{className:`\r
    absolute\r
    top-0\r
    left-0\r
    w-full\r
    h-1\r
    bg-[#155A96]\r
    rounded-t-3xl\r
  `}),(0,F.jsx)(`h2`,{className:`\r
      text-xl\r
      sm:text-2xl\r
      font-bold\r
      text-[#071426]\r
    `,children:`What You'll Learn`})]}),(0,F.jsx)(`div`,{className:`\r
      grid\r
      grid-cols-1\r
      md:grid-cols-2\r
      gap-3\r
      sm:gap-4\r
      md:gap-6\r
    `,children:r.checklist.map(e=>(0,F.jsxs)(`div`,{className:`\r
flex\r
items-start\r
gap-3\r
rounded-2xl\r
border border-[#D7E5EF]\r
bg-white\r
p-4\r
transition-all\r
duration-300\r
hover:border-[#155A96]/30\r
hover:shadow-md\r
`,children:[(0,F.jsx)(`div`,{className:`\r
    w-8 h-8\r
    rounded-full\r
    bg-[#EEF4F8]\r
    flex items-center justify-center\r
    shrink-0\r
    mt-0.5\r
  `,children:(0,F.jsx)(Or,{size:16,className:`text-[#155A96]`})}),(0,F.jsx)(`span`,{className:`\r
            text-sm\r
            sm:text-base\r
            text-slate-700\r
            leading-6\r
          `,children:e})]},e))})]}),(0,F.jsxs)(`section`,{id:`steps`,className:`\r
    bg-[#F5F7FF]\r
    border\r
    border-slate-200\r
    rounded-2xl\r
lg:rounded-3xl\r
p-5\r
sm:p-6\r
lg:p-8\r
  `,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between mb-8`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-sm font-semibold text-[#155A96] uppercase tracking-[0.15em]`,children:`Practice Workflow`}),(0,F.jsx)(`h2`,{className:`text-2xl font-bold text-[#071426] mt-1`,children:`Lab Steps`})]}),(0,F.jsxs)(`span`,{className:`\r
        px-3\r
        py-1\r
        rounded-full\r
        bg-[#EEF4F8]\r
text-[#155A96]\r
        text-sm\r
        font-medium\r
      `,children:[r.steps.length,` Steps`]})]}),(0,F.jsx)(`div`,{className:`space-y-4`,children:r.steps.map((e,r)=>{let i=t===r;return(0,F.jsxs)(`div`,{className:`
  border
  rounded-2xl
  overflow-hidden
  transition-all duration-300

  ${i?`border-[#155A96] shadow-lg`:`border-slate-200`}
`,children:[(0,F.jsxs)(`button`,{onClick:()=>n(i?null:r),className:`\r
              w-full\r
              flex\r
              items-center\r
              justify-between\r
              p-5\r
              text-left\r
              hover:bg-slate-50\r
              transition\r
            `,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,F.jsx)(`div`,{className:`\r
                  w-10\r
                  h-10\r
                  rounded-xl\r
                  bg-blue-100\r
                  text-blue-700\r
                  flex\r
                  items-center\r
                  justify-center\r
                  font-bold\r
                  shrink-0\r
                `,children:e.id}),(0,F.jsx)(`div`,{className:`hidden sm:block w-6 h-[2px] bg-[#D7E5EF]`}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`\r
                    text-lg\r
                    font-semibold\r
                    text-slate-900\r
                  `,children:e.title}),(0,F.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    gap-2\r
                    mt-1\r
                    text-sm\r
                    text-[#64748B]\r
                  `,children:[(0,F.jsx)(Nr,{size:14}),e.duration]})]})]}),(0,F.jsx)(wr,{size:20,className:`
                transition-transform
                duration-300
                ${i?`rotate-180`:``}
              `})]}),i&&(0,F.jsxs)(`div`,{className:`\r
                border-t\r
                border-slate-100\r
                p-6\r
                bg-[#FAFCFE]\r
              `,children:[(0,F.jsxs)(`div`,{className:`mb-6`,children:[(0,F.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    gap-2\r
                    mb-2\r
                  `,children:[(0,F.jsx)(Bi,{size:18,className:`text-[#155A96]`}),(0,F.jsx)(`h4`,{className:`font-semibold`,children:`Objective`})]}),(0,F.jsx)(`p`,{className:`text-slate-600`,children:e.objective})]}),(0,F.jsxs)(`div`,{className:`mb-6`,children:[(0,F.jsx)(`h4`,{className:`\r
                    font-semibold\r
                    mb-3\r
                  `,children:`Instructions`}),(0,F.jsx)(`ul`,{className:`space-y-3`,children:e.instructions.map((e,t)=>(0,F.jsxs)(`li`,{className:`\r
                          flex\r
                          items-start\r
                          gap-3\r
                        `,children:[(0,F.jsx)(`div`,{className:`\r
                            w-6\r
                            h-6\r
                            rounded-full\r
                            bg-[#EEF4F8]\r
text-[#155A96]\r
                            text-xs\r
                            flex\r
                            items-center\r
                            justify-center\r
                            font-medium\r
                            shrink-0\r
                            mt-0.5\r
                          `,children:t+1}),(0,F.jsx)(`span`,{className:`text-slate-700`,children:e})]},t))})]}),(0,F.jsxs)(`div`,{className:`\r
                  rounded-2xl\r
                  bg-[#EEF4F8]\r
                  border\r
                  border-[#D7E5EF]\r
                  p-4\r
                `,children:[(0,F.jsxs)(`div`,{className:`\r
                    flex\r
                    items-center\r
                    gap-2\r
                    mb-2\r
                  `,children:[(0,F.jsx)(Or,{size:18,className:`\r
                      text-[#155A96]\r
                    `}),(0,F.jsx)(`h4`,{className:`\r
                      font-semibold\r
                      text-[#155A96]\r
                    `,children:`Expected Result`})]}),(0,F.jsx)(`p`,{className:`\r
                    text-[#475569]\r
                  `,children:e.expectedResult})]})]})]},e.id)})})]}),(0,F.jsxs)(`section`,{id:`dataset`,className:`\r
    bg-white\r
    border\r
    border-slate-200\r
    rounded-3xl\r
    p-8\r
  `,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between mb-6`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-sm font-semibold text-[#155A96] uppercase tracking-[0.15em]`,children:`Practice Resources`}),(0,F.jsx)(`h2`,{className:`text-2xl font-bold text-[#071426] mt-1`,children:`Practice Dataset`})]}),(0,F.jsx)(`p`,{className:`text-slate-500 mt-2`,children:`Use these values while completing the lab exercise.`})]}),(0,F.jsxs)(`div`,{className:`\r
        hidden\r
        md:flex\r
        items-center\r
        gap-2\r
        px-4\r
        py-2\r
        rounded-full\r
        bg-[#EEF4F8]\r
text-[#155A96]\r
border border-[#D7E5EF]\r
      `,children:[(0,F.jsx)(Lr,{size:16}),`Sample Data`,(0,F.jsxs)(`button`,{onClick:()=>{let e=[[`Ledger`,`Group`,`Opening Balance`],...r.practiceDataset.entries.map(e=>[e.ledger,e.group,e.balance])].map(e=>e.join(`,`)).join(`
`),t=new Blob([e],{type:`text/csv`}),n=window.URL.createObjectURL(t),i=document.createElement(`a`);i.href=n,i.download=`opening-balance-dataset.csv`,i.click()},className:`\r
flex\r
items-center\r
gap-2\r
px-4\r
py-2\r
rounded-xl\r
bg-white\r
border border-[#D7E5EF]\r
text-[#155A96]\r
font-medium\r
hover:bg-[#F8FBFD]\r
transition-all\r
`,children:[(0,F.jsx)(Ur,{size:16}),`Download`]})]})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6`,children:[(0,F.jsxs)(`div`,{className:`bg-[#F8FBFD] border border-[#D7E5EF] rounded-xl p-4`,children:[(0,F.jsx)(`p`,{className:`text-xs text-[#64748B]`,children:`Records`}),(0,F.jsx)(`p`,{className:`text-xl font-bold text-[#071426]`,children:r.practiceDataset.entries.length})]}),(0,F.jsxs)(`div`,{className:`bg-[#F8FBFD] border border-[#D7E5EF] rounded-xl p-4`,children:[(0,F.jsx)(`p`,{className:`text-xs text-[#64748B]`,children:`Fields`}),(0,F.jsx)(`p`,{className:`text-xl font-bold text-[#071426]`,children:r.practiceDataset.columns.length})]})]}),(0,F.jsx)(`div`,{className:`\r
    overflow-x-auto\r
    rounded-2xl\r
    border\r
    border-slate-200\r
  `,children:(0,F.jsxs)(`table`,{className:`min-w-[650px] w-full`,children:[(0,F.jsx)(`thead`,{children:(0,F.jsx)(`tr`,{className:`bg-[#F8FBFD]`,children:r.practiceDataset.columns.map(e=>(0,F.jsx)(`th`,{className:`\r
    text-left\r
    px-6\r
    py-4\r
    text-[#155A96]\r
    font-semibold\r
    uppercase\r
    text-sm\r
    tracking-wide\r
  `,children:e},e))})}),(0,F.jsx)(`tbody`,{children:r.practiceDataset.entries.map((e,t)=>(0,F.jsx)(`tr`,{className:`\r
    border-t\r
    border-slate-100\r
    hover:bg-[#F8FBFD]\r
    transition-colors\r
  `,children:Object.values(e).map((e,t)=>(0,F.jsx)(`td`,{className:`px-6 py-4`,children:e},t))},t))})]})}),(0,F.jsx)(`div`,{className:`\r
      mt-6\r
      rounded-2xl\r
      bg-[#EEF4F8]\r
      border\r
      border-[#D7E5EF]\r
      p-4\r
    `,children:(0,F.jsx)(`p`,{className:`text-[#155A96] text-sm`,children:r.practiceDataset.note})})]}),(0,F.jsx)(`section`,{id:`quiz`,className:`\r
    bg-[#F5F7FF]\r
    border\r
    border-slate-200\r
    rounded-3xl\r
    p-8\r
  `,children:c?(0,F.jsxs)(`div`,{className:`text-center`,children:[(0,F.jsx)(`div`,{className:`\r
          w-20\r
          h-20\r
          rounded-full\r
          bg-[#EEF4F8]\r
          flex\r
          items-center\r
          justify-center\r
          mx-auto\r
          mb-6\r
        `,children:(0,F.jsx)(Hi,{size:36,className:`text-[#155A96]`})}),(0,F.jsx)(`h2`,{className:`\r
          text-3xl\r
          font-bold\r
          text-slate-900\r
        `,children:`Quiz Completed`}),(0,F.jsx)(`p`,{className:`\r
          text-slate-500\r
          mt-3\r
          mb-8\r
        `,children:`Assessment submitted successfully.`}),(0,F.jsxs)(`div`,{className:`\r
          inline-flex\r
          items-center\r
          gap-3\r
          px-6\r
          py-4\r
          rounded-2xl\r
          bg-[#EEF4F8]\r
\r
          border\r
          border-[#D7E5EF]\r
        `,children:[(0,F.jsx)(Or,{className:`text-green-600`}),(0,F.jsxs)(`span`,{className:`\r
            text-lg\r
            font-semibold\r
            text-[#155A96]\r
          `,children:[`Score: `,f,` /`,` `,u.length]}),(0,F.jsxs)(`p`,{className:`mt-3 text-[#64748B]`,children:[Math.round(f/u.length*100),`% Accuracy`]})]}),(0,F.jsx)(`p`,{className:`mt-6 text-slate-600`,children:`You have completed the assessment for this lab.`})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`div`,{className:`mb-8`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-sm font-semibold text-[#155A96] uppercase tracking-[0.15em]`,children:`Knowledge Check`}),(0,F.jsx)(`h2`,{className:`\r
      text-2xl\r
      font-bold\r
      text-[#071426]\r
      mt-1\r
    `,children:`Assessment Quiz`})]}),(0,F.jsx)(`p`,{className:`text-slate-500 mt-2`,children:`Complete the assessment to validate your learning.`})]}),(0,F.jsxs)(`div`,{className:`mb-8`,children:[(0,F.jsxs)(`div`,{className:`flex justify-between mb-2`,children:[(0,F.jsxs)(`span`,{className:`text-sm text-slate-500`,children:[`Question `,i+1,` of`,` `,u.length]}),(0,F.jsxs)(`span`,{className:`text-sm text-slate-500`,children:[Math.round((i+1)/u.length*100),`%`]})]}),(0,F.jsx)(`div`,{className:`h-2 bg-[#EEF4F8] rounded-full`,children:(0,F.jsx)(`div`,{className:`\r
              h-2\r
              bg-[#155A96]\r
              rounded-full\r
              transition-all\r
            `,style:{width:`${(i+1)/u.length*100}%`}})})]}),(0,F.jsxs)(`div`,{className:`mb-8`,children:[(0,F.jsx)(`h3`,{className:`\r
            text-xl\r
            font-semibold\r
            text-slate-900\r
            mb-6\r
          `,children:d.question}),(0,F.jsx)(`div`,{className:`space-y-3`,children:d.options.map(e=>(0,F.jsx)(`button`,{onClick:()=>s({...o,[d.id]:e}),className:`
  w-full
  text-left
  p-4
  rounded-2xl
  border
  transition-all
  duration-300


                  ${o[d.id]===e?`border-[#155A96] bg-[#EEF4F8]`:`border-slate-200 hover:border-[#155A96]/40`}
                `,children:(0,F.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,F.jsx)(`div`,{className:`
                      w-5
                      h-5
                      rounded-full
                      border-2

                      ${o[d.id]===e?`border-[#155A96] bg-[#155A96]`:`border-slate-300`}
                    `}),(0,F.jsx)(`span`,{children:e})]})},e))})]}),(0,F.jsxs)(`div`,{className:`flex justify-between`,children:[(0,F.jsx)(`button`,{onClick:()=>a(i-1),disabled:i===0,className:`\r
            px-5\r
            py-3\r
            rounded-xl\r
            border\r
            border-[#D7E5EF]\r
text-[#475569]\r
            disabled:opacity-50\r
          `,children:`Previous`}),i<u.length-1?(0,F.jsx)(`button`,{onClick:()=>a(i+1),className:`\r
              px-5\r
              py-3\r
              rounded-xl\r
              bg-[#155A96]\r
hover:bg-[#0F4D82]\r
              text-white\r
            `,children:`Next`}):(0,F.jsx)(`button`,{onClick:()=>l(!0),className:`\r
              px-5\r
              py-3\r
              rounded-xl\r
              bg-[#155A96]\r
hover:bg-[#0F4D82]\r
              text-white\r
            `,children:`Submit Quiz`})]})]})})]}),(0,F.jsx)(`aside`,{className:`hidden lg:block lg:col-span-4`,children:(0,F.jsxs)(`div`,{className:`sticky top-28 space-y-6`,children:[(0,F.jsxs)(`div`,{className:`\r
        bg-white\r
        border\r
        border-slate-200\r
        rounded-3xl\r
        p-6\r
      `,children:[(0,F.jsx)(`h3`,{className:`\r
font-semibold\r
text-[#071426]\r
 mb-4`,children:`Progress`}),(0,F.jsx)(`div`,{className:`\r
          h-3\r
          bg-[#EEF4F8]\r
          rounded-full\r
          overflow-hidden\r
        `,children:(0,F.jsx)(`div`,{className:`\r
            h-full\r
            bg-[#155A96]\r
            transition-all\r
            duration-500\r
          `,style:{width:`${v}%`}})}),(0,F.jsxs)(`div`,{className:`mt-4 flex justify-between`,children:[(0,F.jsxs)(`span`,{className:`text-sm text-slate-500`,children:[_,` of `,g,` completed`]}),(0,F.jsxs)(`span`,{className:`\r
            text-sm\r
            font-medium\r
            text-[#155A96]\r
          `,children:[Math.round(v),`%`]})]})]}),(0,F.jsxs)(`div`,{className:`\r
        bg-white\r
        border\r
        border-slate-200\r
        rounded-3xl\r
        p-6\r
      `,children:[(0,F.jsx)(`h3`,{className:`\r
font-semibold\r
text-[#071426]\r
 mb-4`,children:`Lab Checklist`}),(0,F.jsxs)(`div`,{className:`space-y-4`,children:[r.steps.map(e=>(0,F.jsxs)(`button`,{onClick:()=>h(e.title),className:`\r
              w-full\r
              flex\r
              items-center\r
              gap-3\r
              text-left\r
            `,children:[p[e.title]?(0,F.jsx)(Or,{size:18,className:`text-[#155A96]`}):(0,F.jsx)(jr,{size:18,className:`text-slate-300`}),(0,F.jsx)(`span`,{className:`text-sm`,children:e.title})]},e.id)),(0,F.jsxs)(`button`,{onClick:()=>h(`Quiz Completed`),className:`\r
            w-full\r
            flex\r
            items-center\r
            gap-3\r
            text-left\r
          `,children:[p[`Quiz Completed`]?(0,F.jsx)(Or,{size:18,className:`text-green-500`}):(0,F.jsx)(jr,{size:18,className:`text-slate-300`}),(0,F.jsx)(`span`,{className:`text-sm`,children:`Quiz Completed`})]})]})]}),(0,F.jsxs)(`div`,{className:`\r
        bg-[#F8FBFD]\r
        border\r
        border-slate-200\r
        rounded-3xl\r
        p-6\r
      `,children:[(0,F.jsx)(`h3`,{className:`\r
font-semibold\r
text-[#071426]\r
 mb-4`,children:`Quick Navigation`}),(0,F.jsx)(`div`,{className:`space-y-3`,children:Ny.map(e=>(0,F.jsx)(`a`,{href:`#${e.id}`,className:`\r
            block\r
            text-sm\r
            text-slate-600\r
            hover:text-[#155A96]\r
            transition\r
          `,children:e.label},e.id))})]}),(0,F.jsxs)(`div`,{className:`\r
    bg-white\r
    border\r
    border-slate-200\r
    rounded-3xl\r
    p-6\r
  `,children:[(0,F.jsx)(`h3`,{className:`\r
font-semibold\r
text-[#071426]\r
 mb-4`,children:`Lab Details`}),(0,F.jsxs)(`div`,{className:`space-y-4`,children:[(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(br,{size:16,className:`text-[#155A96]`}),(0,F.jsx)(`span`,{className:`text-slate-600`,children:`Level`})]}),(0,F.jsx)(`span`,{className:`font-medium`,children:r.level})]}),(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(Nr,{size:16,className:`text-[#155A96]`}),(0,F.jsx)(`span`,{className:`text-slate-600`,children:`Duration`})]}),(0,F.jsx)(`span`,{className:`font-medium`,children:r.duration})]}),(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(ci,{size:16,className:`text-[#155A96]`}),(0,F.jsx)(`span`,{className:`text-slate-600`,children:`Steps`})]}),(0,F.jsx)(`span`,{className:`font-medium`,children:r.steps.length})]}),(0,F.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(Ar,{size:16,className:`text-[#155A96]`}),(0,F.jsx)(`span`,{className:`text-slate-600`,children:`Quiz`})]}),(0,F.jsx)(`span`,{className:`font-medium`,children:r.quiz.length})]})]})]}),(0,F.jsxs)(`div`,{className:`\r
    bg-white\r
    border\r
    border-slate-200\r
    rounded-3xl\r
    p-6\r
  `,children:[(0,F.jsx)(`h3`,{className:`font-semibold mb-4`,children:`Quick Tips`}),(0,F.jsxs)(`div`,{className:`space-y-3 text-sm`,children:[(0,F.jsxs)(`div`,{className:`flex gap-2`,children:[(0,F.jsx)(Or,{size:16,className:`text-[#155A96] mt-0.5`}),`Use a demo company while practicing.`]}),(0,F.jsxs)(`div`,{className:`flex gap-2`,children:[(0,F.jsx)(Or,{size:16,className:`text-[#155A96] mt-0.5`}),`Complete every lab step in sequence.`]}),(0,F.jsxs)(`div`,{className:`flex gap-2`,children:[(0,F.jsx)(Or,{size:16,className:`text-[#155A96] mt-0.5`}),`Review the dataset before submitting.`]}),(0,F.jsxs)(`div`,{className:`flex gap-2`,children:[(0,F.jsx)(Or,{size:16,className:`text-[#155A96] mt-0.5`}),`Finish the assessment to complete the lab.`]})]})]})]})})]})]})}var Iy=`/Balaji-Infotech/assets/contact-hero-Dk74wo4A.png`;function Ly(){let e=ut();return(0,w.useEffect)(()=>{if(e.hash){let t=document.querySelector(e.hash);t&&t.scrollIntoView({behavior:`smooth`})}},[e]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`section`,{className:`\r
    relative\r
    overflow-hidden\r
    pt-24 sm:pt-28\r
    pb-10 sm:pb-12\r
    bg-white\r
  `,children:[(0,F.jsx)(`div`,{className:`\r
      absolute inset-0\r
      bg-[radial-gradient(circle_at_top_right,rgba(17,120,212,0.08),transparent_35%)]\r
    `}),(0,F.jsxs)(`div`,{className:`\r
      relative\r
      max-w-7xl mx-auto\r
      px-4 sm:px-6\r
      grid lg:grid-cols-2\r
      gap-10 sm:gap-14 lg:gap-20\r
      items-center\r
    `,children:[(0,F.jsxs)($.div,{initial:{opacity:0,x:-80},whileInView:{opacity:1,x:0},transition:{duration:.8,ease:`easeOut`},viewport:{once:!0},children:[(0,F.jsxs)(`div`,{className:`\r
          inline-flex items-center\r
          gap-2\r
          px-4 py-2\r
          rounded-full\r
          border border-[#155A96]/15\r
          bg-[#F8FBFF]\r
          mb-4\r
        `,children:[(0,F.jsx)(`div`,{className:`\r
            w-2 h-2\r
            rounded-full\r
            bg-[#155A96]\r
          `}),(0,F.jsx)(`span`,{className:`\r
            text-sm font-semibold\r
            tracking-wide\r
            text-[#155A96]\r
            uppercase\r
          `,children:`Get In Touch`})]}),(0,F.jsxs)(`h1`,{className:`\r
          text-3xl\r
          sm:text-4xl\r
          lg:text-[44px]\r
          font-black\r
          leading-[1.05]\r
          tracking-[-0.03em]\r
          text-[#0F172A]\r
        `,children:[`Let’s Build`,(0,F.jsx)(`br`,{}),(0,F.jsx)(`span`,{className:`\r
            bg-[#155A96]\r
            bg-clip-text\r
            text-transparent\r
          `,children:`Better Business`}),(0,F.jsx)(`br`,{}),`Solutions Together`]}),(0,F.jsx)(`p`,{className:`\r
  mt-4 sm:mt-5\r
          text-sm\r
          sm:text-base\r
          leading-7\r
          text-[#475569]\r
          max-w-2xl\r
        `,children:`Whether you need Tally solutions, professional training, cloud services, or business automation support, our experts are ready to help your business grow smarter and faster.`}),(0,F.jsxs)(`div`,{className:`\r
          flex flex-col sm:flex-row sm:flex-wrap\r
          gap-4\r
          mt-5 sm:mt-6\r
        `,children:[(0,F.jsxs)(`div`,{className:`\r
          w-full sm:w-auto\r
            flex items-center\r
            gap-3\r
            px-4 py-2.5\r
            \r
          `,children:[(0,F.jsx)(di,{className:`w-5 h-5 text-[#155A96]`}),(0,F.jsx)(`span`,{className:`\r
              text-sm\r
              font-medium\r
              text-[#334155]\r
            `,children:`Guntur, Andhra Pradesh`})]}),(0,F.jsxs)(`div`,{className:`w-full sm:w-auto\r
            flex items-center\r
            gap-3\r
            px-4 py-2.5\r
          `,children:[(0,F.jsx)(xi,{className:`w-5 h-5 text-[#155A96]`}),(0,F.jsx)(`span`,{className:`\r
              text-sm md:text-base\r
              font-medium\r
              text-[#334155]\r
            `,children:`+91 9849431943`})]}),(0,F.jsxs)(`div`,{className:`w-full sm:w-auto\r
            flex items-center\r
            gap-3\r
            px-4 py-2.5\r
          `,children:[(0,F.jsx)(ui,{className:`w-5 h-5 text-[#155A96]`}),(0,F.jsx)(`span`,{className:`\r
              text-sm md:text-base\r
              font-medium\r
              text-[#334155]\r
            `,children:`gunturtally@gmail.com`})]})]}),(0,F.jsxs)(`div`,{className:`\r
          flex flex-col sm:flex-row\r
          items-stretch sm:items-center\r
          gap-4 sm:gap-5\r
          mt-6 sm:mt-7\r
        `,children:[(0,F.jsx)(`a`,{href:`#contact-form`,children:(0,F.jsxs)(`button`,{className:`w-full sm:w-auto\r
            group\r
            inline-flex items-center justify-center\r
            gap-3\r
            px-6 py-3\r
            text-sm\r
            rounded-2xl\r
            bg-[#155A96]\r
            text-white\r
            font-semibold\r
            shadow-[0_20px_50px_rgba(17,120,212,0.20)]\r
            hover:scale-[1.02]\r
            transition-all duration-300\r
          `,children:[`Request A Quote`,(0,F.jsx)(cr,{className:`\r
              w-5 h-5\r
              transition-transform duration-300\r
              group-hover:translate-x-1\r
            `})]})}),(0,F.jsx)(`a`,{href:`tel:91 9849431943`,children:(0,F.jsxs)(`button`,{className:`w-full sm:w-auto\r
            inline-flex items-center justify-center\r
            gap-3\r
            px-6 py-3\r
            text-sm\r
            rounded-2xl\r
            border border-[#155A96]\r
            bg-white\r
            text-[#0F172A]\r
            font-semibold\r
            hover:border-[#155A96]/30\r
            hover:bg-[#F8FBFF]\r
            transition-all duration-300\r
          `,children:[(0,F.jsx)(xi,{className:`w-5 h-5 text-[#155A96]`}),`Call Our Team`]})})]})]}),(0,F.jsx)($.div,{className:`relative\r
      flex justify-center lg:justify-end\r
      order-1 lg:order-2`,initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},transition:{duration:1,ease:`easeOut`,delay:`0.2`},viewport:{once:!0},children:(0,F.jsxs)(`div`,{className:`relative`,children:[(0,F.jsxs)(`div`,{className:`\r
          relative\r
          rounded-[28px]\r
          overflow-hidden\r
          border border-[#E2E8F0]\r
          shadow-[0_30px_80px_rgba(15,23,42,0.10)]\r
        `,children:[(0,F.jsx)(`img`,{src:Iy,alt:`Contact Balaji Infotech`,className:`\r
              w-full\r
              h-[320px]\r
              sm:h-[320px]\r
              lg:h-[420px]\r
              object-cover\r
            `}),(0,F.jsx)(`div`,{className:`\r
            absolute inset-0\r
            bg-gradient-to-tr\r
            from-[#0F172A]/55\r
            via-[#1178D4]/10\r
            to-transparent\r
          `})]}),(0,F.jsxs)(`div`,{className:`\r
          absolute\r
          top-4 left-4\r
          sm:top-8 sm:-left-6\r
          bg-white/90\r
          backdrop-blur-xl\r
          border border-white/60\r
          rounded-2xl\r
          px-3 sm:px-4\r
          py-3\r
          shadow-[0_20px_60px_rgba(15,23,42,0.12)]\r
        `,children:[(0,F.jsx)(`p`,{className:`\r
            text-xl sm:text-2xl\r
            font-black\r
            text-[#0F172A]\r
          `,children:`500+`}),(0,F.jsx)(`p`,{className:`\r
            mt-1\r
            text-sm\r
            font-medium\r
            text-[#475569]\r
          `,children:`Businesses Supported`})]}),(0,F.jsxs)(`div`,{className:`\r
          absolute\r
          bottom-4 right-4\r
          sm:bottom-8 sm:-right-6\r
          bg-white/90\r
          backdrop-blur-xl\r
          border border-white/60\r
          rounded-2xl\r
          px-3 sm:px-4\r
          py-3\r
          shadow-[0_20px_60px_rgba(15,23,42,0.12)]\r
        `,children:[(0,F.jsx)(`p`,{className:`\r
            text-xl sm:text-2xl\r
            font-black\r
            text-[#0F172A]\r
          `,children:`24/7`}),(0,F.jsx)(`p`,{className:`\r
            mt-1\r
            text-sm\r
            font-medium\r
            text-[#475569]\r
          `,children:`Expert Support Team`})]})]})})]})]}),(0,F.jsxs)(`section`,{id:`contact-form`,className:`\r
  relative\r
  py-10 sm:py-14\r
  bg-[#F8FBFF]\r
  overflow-hidden\r
`,children:[(0,F.jsx)(`div`,{className:`\r
    absolute inset-0\r
    bg-[radial-gradient(circle_at_top_left,rgba(17,120,212,0.08),transparent_30%)]\r
  `}),(0,F.jsxs)(`div`,{className:`\r
    relative\r
    max-w-6xl mx-auto\r
    px-4 sm:px-6\r
  `,children:[(0,F.jsxs)(`div`,{className:`\r
      text-center\r
      max-w-3xl\r
      mx-auto\r
      mb-10\r
    `,children:[(0,F.jsxs)(`div`,{className:`\r
        inline-flex items-center\r
        gap-2\r
        px-4 py-2\r
        rounded-full\r
        border border-[#155A96]/15\r
        bg-white\r
        mb-6\r
      `,children:[(0,F.jsx)(`div`,{className:`\r
          w-2 h-2\r
          rounded-full\r
          bg-[#155A96]\r
        `}),(0,F.jsx)(`span`,{className:`\r
          text-sm\r
          font-semibold\r
          tracking-wide\r
          uppercase\r
          text-[#155A96]\r
        `,children:`Contact Our Team`})]}),(0,F.jsxs)(`h2`,{className:`\r
        text-2xl\r
        sm:text-3xl\r
        md:text-4xl\r
        font-black\r
        leading-tight\r
        tracking-[-0.03em]\r
        text-[#0F172A]\r
      `,children:[`Let’s Discuss Your`,(0,F.jsxs)(`span`,{className:`\r
          bg-[#155A96]\r
          bg-clip-text\r
          text-transparent\r
        `,children:[` `,`Business Requirements`]})]}),(0,F.jsx)(`p`,{className:`\r
        mt-6\r
        text-sm\r
        sm:text-base\r
        leading-7 sm:leading-8\r
        leading-8\r
        text-[#64748B]\r
      `,children:`Connect with our experts for Tally solutions, professional training, cloud services, and business automation support tailored to your organization.`})]}),(0,F.jsxs)(`div`,{className:`\r
      grid lg:grid-cols-[0.9fr_1.1fr]\r
      gap-10\r
      items-start\r
    `,children:[(0,F.jsxs)(`div`,{className:`\r
  flex flex-col\r
  justify-center\r
  h-full\r
  space-y-6\r
`,children:[[{icon:di,title:`Office Address`,info:[`#5-37-197, Opp: Celekt Mobile Showroom,Upstairs.`,`Siddartha Photo city, 4/9 Brodipet, GUNTUR-522002.`]},{icon:xi,title:`Phone Support`,info:[`+91 9849431943`,`+91 92962 53948`]},{icon:ui,title:`Email Address`,info:[`gunturtally@gmail.com`]}].map((e,t)=>{let n=e.icon;return(0,F.jsxs)(`div`,{className:`\r
          group\r
          flex items-start gap-5\r
          transition-all duration-300\r
          hover:translate-x-2\r
        `,children:[(0,F.jsx)(`div`,{className:`\r
          w-12 h-12\r
          rounded-2xl\r
          bg-[#155A96]\r
          flex items-center justify-center\r
          shadow-[0_10px_30px_rgba(17,120,212,0.18)]\r
          shrink-0\r
        `,children:(0,F.jsx)(n,{className:`w-7 h-7 text-white`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`\r
            text-lg\r
            sm:text-xl\r
            font-bold\r
            text-[#0F172A]\r
            mb-2\r
            transition-colors duration-300\r
            group-hover:text-[#155A96]\r
          `,children:e.title}),(0,F.jsx)(`div`,{className:`space-y-1`,children:e.info.map((e,t)=>(0,F.jsx)(`p`,{className:`\r
                  text-[#475569]\r
                  text-sm\r
                  leading-relaxed\r
                `,children:e},t))})]})]},t)}),(0,F.jsxs)(`div`,{className:`pt-4`,children:[(0,F.jsx)(`h4`,{className:`\r
    text-2xl\r
    font-bold\r
    text-[#0F172A]\r
    mb-5\r
  `,children:`Follow Us`}),(0,F.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[{icon:_a,link:`https://facebook.com/balajiinfotechguntur`},{icon:ga,link:`https://www.instagram.com/balaji_ai_infotech_pvt_ltd?`},{icon:ha,link:`https://linkedin.com`},{icon:ui,link:`mailto:gunturtally@gmail.com`}].map((e,t)=>{let n=e.icon;return(0,F.jsx)(`a`,{href:e.link,className:`\r
            group\r
            w-11 h-11\r
            rounded-2xl\r
            border border-[#155A96]\r
            bg-white\r
            flex items-center justify-center\r
            transition-all duration-300\r
            hover:-translate-y-1\r
          \r
            hover:bg[#155A96]\r
           \r
            hover:shadow-[0_10px_30px_rgba(17,120,212,0.25)]\r
          `,children:(0,F.jsx)(n,{className:`\r
            w-5 h-5\r
            text-[#475569]\r
            transition-colors duration-300\r
            group-hover:text-[#155A96]\r
          `})},t)})})]})]}),(0,F.jsxs)(`div`,{className:`space-y-5`,children:[(0,F.jsx)(`div`,{className:`mb-8`,children:(0,F.jsxs)(`h3`,{className:`\r
      text-xl\r
md:text-3xl\r
      font-black\r
      text-[#0F172A]\r
    `,children:[`Request A`,(0,F.jsxs)(`span`,{className:`bg-[gradient-to-r from-[#1178D4] to-[#6C63FF] bg-clip-text text-transparent]`,children:[` `,`Free Quote`]})]})}),(0,F.jsx)(Rv,{})]})]})]})]}),(0,F.jsx)(`section`,{className:`\r
 py-8 sm:py-10\r
  px-4 sm:px-6\r
  bg-[#F8FAFC]\r
`,children:(0,F.jsxs)(`div`,{className:`max-w-7xl mx-auto`,children:[(0,F.jsxs)(`div`,{className:`\r
      text-center\r
      mb-8\r
    `,children:[(0,F.jsxs)(`div`,{className:`\r
        inline-flex items-center\r
        gap-2\r
        px-5 py-2\r
        rounded-full\r
        border border-[#DCE7F7]\r
        bg-white\r
        mb-5\r
      `,children:[(0,F.jsx)(fi,{className:`w-4 h-4 text-[#155A96]`}),(0,F.jsx)(`span`,{className:`\r
          text-sm\r
          font-semibold\r
          text-[#155A96]\r
        `,children:`Visit Our Office`})]}),(0,F.jsxs)(`h2`,{className:`\r
        text-2xl\r
sm:text-3xl\r
md:text-4xl\r
        font-black\r
        leading-tight\r
        text-[#0F172A]\r
      `,children:[`Find Us In`,(0,F.jsxs)(`span`,{className:`\r
          bg-[#155A96]\r
          bg-clip-text\r
          text-transparent\r
        `,children:[` `,`Guntur`]})]}),(0,F.jsx)(`p`,{className:`\r
        mt-5\r
        max-w-2xl\r
        mx-auto\r
        text-[15px]\r
        sm:text-lg\r
        leading-7 sm:leading-8\r
        text-[#64748B]\r
      `,children:`Visit our office for personalized consultation, product demos, and expert Tally solutions.`})]}),(0,F.jsxs)(`div`,{className:`\r
      relative\r
      overflow-hidden\r
      rounded-[32px]\r
      border border-[#E2E8F0]\r
      shadow-[0_20px_60px_rgba(15,23,42,0.08)]\r
    `,children:[(0,F.jsx)(`iframe`,{src:`https://www.google.com/maps?q=Balaji%20Infotech%20Upstairs:%20Siddartha%20Photo%20City,%204/9,%20Brodipet,%20Guntur,%20Andhra%20Pradesh%20522002&output=embed`,width:`100%`,height:`420`,allowFullScreen:``,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`,className:`border-0`}),(0,F.jsxs)(`div`,{className:`\r
        absolute\r
        left-6 bottom-6\r
        hidden md:flex\r
        items-start gap-4\r
        bg-white/95\r
        backdrop-blur-xl\r
        border border-white/50\r
        rounded-2xl\r
        p-4\r
        shadow-[0_10px_40px_rgba(15,23,42,0.12)]\r
      `,children:[(0,F.jsx)(`div`,{className:`\r
          w-14 h-14\r
          rounded-2xl\r
          bg-[#155A96]\r
          flex items-center justify-center\r
          shrink-0\r
        `,children:(0,F.jsx)(gr,{className:`w-6 h-6 text-white`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{className:`\r
            text-lg\r
            font-bold\r
            text-[#0F172A]\r
          `,children:`Balaji AI Infotech`}),(0,F.jsx)(`p`,{className:`\r
            mt-1\r
            text-[#64748B]\r
            leading-7\r
          `,children:`Guntur, Andhra Pradesh, India`})]})]})]})]})})]})}function Ry(){let[e,t]=(0,w.useState)(`Essential`),n=[`Essential`,`Professional`,`International`],r={Essential:{badge:`Essential Certification Programs`,title:`Explore Our Essential Courses`,description:`Build strong accounting and Tally foundations with beginner-friendly practical learning.`},Professional:{badge:`Professional Certification Programs`,title:`Explore Our Professional Courses`,description:`Advanced industry-focused programs for accounting and business professionals.`},International:{badge:`International Accounting Programs`,title:`Global Finance & Accounting Courses`,description:`Learn international accounting standards and modern business finance workflows.`}},i=[{category:`Essential`,title:`TallyPrime Essentials`,description:`Learn accounting, GST, inventory, and billing fundamentals with practical Tally workflows.`,duration:`2 Months`,level:`Beginner`,skills:[`Accounting`,`GST`,`Inventory`],icon:vr},{category:`Essential`,title:`GST using TallyPrime`,description:`Learn complete guide Goods and Services Tax (GST) with practical Tally workflows.`,duration:`3 Months`,level:`Beginner`,skills:[`Accounting`,`GST`,`Inventory`],icon:vr},{category:`Essential`,title:`TDS using Tally`,description:`Learn Complete Guide on Tax Deducted at Source (TDS) with practical Tally workflows.`,duration:`2 Months`,level:`Beginner`,skills:[`Accounting`,`GST`,`TDS`],icon:vr},{category:`Essential`,title:`GCC VAT using TallyPrime`,description:`Learn Complete Guide on GCC VAT Concepts and its Usage with practical Tally workflows.`,duration:`2 Months`,level:`Beginner`,skills:[`Accounting`,`GST`,`VAT`],icon:vr},{category:`Professional`,title:`TallyPrime Professional`,description:`Complete guide on Advanced Business Accounting and Indian Taxation.`,duration:`6 Months`,level:`Advanced`,skills:[`Accounting`,`GST`,`Inventory`],icon:vr},{category:`Professional`,title:`GST using TallyPrime`,description:`Learn complete guide Goods and Services Tax (GST) with practical Tally workflows.`,duration:`6 Months`,level:`Advanced`,skills:[`Accounting`,`GST`,`Inventory`],icon:vr},{category:`Professional`,title:`TDS using Tally`,description:`Learn Complete Guide on Tax Deducted at Source (TDS) with practical Tally workflows.`,duration:`6 Months`,level:`Advanced`,skills:[`Accounting`,`GST`,`TDS`],icon:vr},{category:`Professional`,title:`GCC VAT using TallyPrime`,description:`Learn Complete Guide on GCC VAT Concepts and its Usage with practical Tally workflows.`,duration:`6 Months`,level:`Advanced`,skills:[`Accounting`,`GST`,`VAT`],icon:vr},{category:`International`,title:`TallyEssential International`,description:`A Complete Guide on Business Accounting in Middle East Countries.`,duration:`6 Months`,level:`Advanced`,skills:[`Accounting`,`GST`,`Inventory`],icon:vr},{category:`International`,title:`TallyEssential Oman`,description:`A Complete Guide on Fundamental to Advanced Accounting.`,duration:`6 Months`,level:`Advanced`,skills:[`Accounting`,`GST`,`Inventory`],icon:vr},{category:`International`,title:`TallyACE International`,description:`A Complete Guide on Business Accounting in Middle East Countries.`,duration:`6 Months`,level:`Advanced`,skills:[`Accounting`,`GST`,`Inventory`],icon:vr}].filter(t=>t.category===e);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`section`,{className:`relative overflow-hidden bg-white pt-20 sm:pt-24 lg:pt-24\r
pb-10 sm:pb-12 md:pb-14`,children:[(0,F.jsx)(`div`,{className:`\r
    absolute top-[-120px] left-[-120px]\r
    w-[320px] h-[320px]\r
    bg-[#155A96]/10\r
    blur-[120px]\r
    rounded-full\r
  `}),(0,F.jsx)(`div`,{className:`\r
    absolute bottom-[-120px] right-[-120px]\r
    w-[320px] h-[320px]\r
    bg-[#0F4D82]/10\r
    blur-[120px]\r
    rounded-full\r
  `}),(0,F.jsx)(`div`,{className:`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:(0,F.jsxs)(`div`,{className:`\r
      grid lg:grid-cols-2\r
      gap-10\r
      lg:gap-8\r
      items-center\r
    `,children:[(0,F.jsxs)($.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},className:`order-2 lg:order-1`,children:[(0,F.jsxs)(`div`,{className:`\r
          inline-flex items-center gap-2\r
          px-4 py-2\r
          rounded-full\r
          border border-[#D7E5EF]\r
          bg-[#EEF4F8]\r
          text-[#155A96]\r
          text-sm font-semibold\r
          tracking-wide\r
          mb-7\r
        `,children:[(0,F.jsx)(`div`,{className:`\r
            w-2 h-2 rounded-full\r
            bg-[#155A96]\r
          `}),`Tally Education Programs`]}),(0,F.jsxs)(`h1`,{className:`\r
          text-3xl\r
          sm:text-4xl\r
          lg:text-[46px]\r
          font-bold\r
          leading-[1.05]\r
          tracking-[-0.03em]\r
          text-[#0F172A]\r
        `,children:[`Master Tally &`,(0,F.jsx)(`span`,{className:`\r
            block\r
            text-[#155A96]\r
            bg-clip-text\r
            \r
          `,children:`Build Industry-Ready Skills`})]}),(0,F.jsx)(`p`,{className:`\r
          mt-5\r
          max-w-2xl\r
          text-[15px]\r
          sm:text-[16px]\r
          md:text-[17px]\r
          leading-relaxed\r
          text-[#475569]\r
        `,children:`Learn practical accounting, GST, payroll, taxation, and business management through expert-led Tally certification programs designed for students, graduates, and working professionals.`}),(0,F.jsxs)(`div`,{className:`\r
          mt-6\r
          flex flex-col sm:flex-row\r
          gap-5\r
        `,children:[(0,F.jsx)(`a`,{href:`#courses`,children:(0,F.jsx)(`button`,{className:`\r
            group\r
            relative overflow-hidden\r
            w-full\r
            sm:w-auto\r
            px-6\r
            sm:px-8\r
            py-4\r
            rounded-2xl\r
            bg-[#155A96]\r
            hover:bg-[#0F4D82]\r
            text-white\r
            font-semibold\r
            text-lg\r
            shadow-[0_15px_40px_rgba(17,120,212,0.25)]\r
            hover:scale-[1.02]\r
            transition-all duration-300\r
          `,children:(0,F.jsxs)(`span`,{className:`\r
              relative z-10\r
              flex items-center justify-center gap-2\r
            `,children:[`Explore Courses`,(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:2,stroke:`currentColor`,className:`\r
                  w-5 h-5\r
                  group-hover:translate-x-1\r
                  transition-transform\r
                `,children:(0,F.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3`})})]})})}),(0,F.jsx)(Mn,{to:`/contact`,children:(0,F.jsx)(`button`,{className:`\r
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
            hover:border-[#155A96]/30\r
            hover:bg-[#EEF4F8]\r
            transition-all duration-300\r
          `,children:`Book Free Counseling`})})]}),(0,F.jsxs)(`div`,{className:`\r
          mt-8\r
          flex flex-wrap\r
          gap-8\r
          sm:gap-10\r
        `,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`\r
              text-xl\r
              sm:text-2xl font-bold\r
              text-[#0F172A]\r
            `,children:`10K+`}),(0,F.jsx)(`p`,{className:`\r
              mt-1\r
              text-[#64748B]\r
            `,children:`Students Trained`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`\r
              text-xl\r
              sm:text-2xl  font-bold\r
              text-[#0F172A]\r
            `,children:`100%`}),(0,F.jsx)(`p`,{className:`\r
              mt-1\r
              text-[#64748B]\r
            `,children:`Practical Learning`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`\r
              text-xl\r
              sm:text-2xl  font-bold\r
              text-[#0F172A]\r
            `,children:`Industry`}),(0,F.jsx)(`p`,{className:`\r
              mt-1\r
              text-[#64748B]\r
            `,children:`Recognized Courses`})]})]})]}),(0,F.jsx)($.div,{className:`\r
        relative\r
        flex justify-center lg:justify-end\r
        order-1 lg:order-2`,initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},transition:{duration:1,ease:`easeOut`,delay:`0.2`},viewport:{once:!0},children:(0,F.jsx)(`div`,{className:`relative`,children:(0,F.jsxs)(`div`,{className:`\r
          relative\r
          rounded-[24px]\r
          sm:rounded-[36px]\r
          border border-[#E2E8F0]\r
          bg-gradient-to-br\r
          from-[#F8FAFC]\r
          to-[#EEF4F8]\r
          p-4\r
          sm:p-6\r
          md:p-7\r
          shadow-sm\r
        `,children:[(0,F.jsxs)(`div`,{className:`\r
            flex items-center justify-between gap-4\r
            mb-8\r
          `,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`\r
                text-xl font-bold\r
                text-[#0F172A]\r
              `,children:`Learning Dashboard`}),(0,F.jsx)(`p`,{className:`\r
                mt-1\r
                text-sm\r
                text-[#64748B]\r
              `,children:`Track your course progress`})]}),(0,F.jsx)(`div`,{className:`\r
              w-12 h-12\r
              sm:w-14 sm:h-14\r
              rounded-2xl\r
              bg-[#155A96]\r
              flex items-center justify-center\r
              shadow-lg\r
            `,children:(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.8,stroke:`currentColor`,className:`w-7 h-7 text-white`,children:(0,F.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M12 14 21 9 12 4 3 9l9 5Zm0 0 6.16-3.422A12.083 12.083 0 0 1 18 14.576c0 1.03-.391 2.03-1.094 2.78C15.773 18.6 14 19 12 19s-3.773-.4-4.906-1.644A3.978 3.978 0 0 1 6 14.576c0-1.4.285-2.75.84-3.998L12 14Z`})})})]}),(0,F.jsx)(`div`,{className:`space-y-3`,children:[`Advanced TallyPrime`,`GST & Taxation`,`Payroll Management`,`Business Accounting`].map((e,t)=>(0,F.jsxs)(`div`,{className:`\r
                  flex items-center justify-between\r
                  rounded-2xl\r
                  border border-white/60\r
                  bg-white/70\r
                  backdrop-blur-sm\r
                  px-4\r
                  sm:px-5\r
                  py-4\r
                `,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,F.jsx)(`div`,{className:`\r
                    w-10 h-10\r
                    sm:w-12 sm:h-12\r
                    rounded-xl\r
                    bg-[#155A96]\r
                    flex items-center justify-center\r
                    text-white font-bold\r
                  `,children:t+1}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h4`,{className:`\r
                      font-semibold\r
                      text-[#155A96]\r
                    `,children:e}),(0,F.jsx)(`p`,{className:`\r
                      text-[12px]\r
                      sm:text-sm\r
                      text-[#64748B]\r
                    `,children:`Practical Certification Program`})]})]}),(0,F.jsx)(`div`,{className:`\r
                  px-3 py-1\r
                  rounded-full\r
                  bg-[#DCFCE7]\r
                  text-[#15803D]\r
                  text-sm font-medium\r
                `,children:`Active`})]},t))})]})})})]})})]}),(0,F.jsxs)(`section`,{id:`courses`,className:`relative py-10 sm:py-12 md:py-14 bg-white overflow-hidden`,children:[(0,F.jsx)(`div`,{className:`\r
    absolute bottom-0 right-0\r
    w-[400px] h-[400px]\r
    bg-[#155A96]/5\r
    blur-[120px]\r
    rounded-full\r
  `}),(0,F.jsxs)(`div`,{className:`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,F.jsxs)(`div`,{className:`text-center`,children:[(0,F.jsxs)(`div`,{className:`\r
        inline-flex items-center gap-2\r
        px-4 py-2\r
        rounded-full\r
        border border-[#D7E5EF]\r
        bg-[#EEF4F8]\r
        text-[#155A96]\r
        text-sm font-semibold\r
        tracking-wide\r
        mb-5\r
      `,children:[(0,F.jsx)(`div`,{className:`\r
          w-2 h-2 rounded-full\r
          bg-[#155A96]\r
        `}),r[e].badge]}),(0,F.jsxs)(`h2`,{className:`\r
        text-[26px]\r
        sm:text-3xl\r
        lg:text-4xl\r
        font-bold\r
        tracking-[-0.03em]\r
        text-[#0F172A]\r
      `,children:[r[e].title.split(` `).slice(0,-1).join(` `),(0,F.jsxs)(`span`,{className:`\r
          text-[#155A96]\r
          bg-clip-text\r
        `,children:[` `,r[e].title.split(` `).slice(-1)]})]}),(0,F.jsx)(`p`,{className:`\r
        mt-5\r
        max-w-2xl\r
        mx-auto\r
        text-[15px]\r
        sm:text-[16px]\r
        md:text-[17px]\r
        leading-relaxed\r
        text-[#64748B]\r
      `,children:r[e].description})]}),(0,F.jsx)(`div`,{className:`\r
      mt-8\r
      flex justify-center\r
    `,children:(0,F.jsx)(`div`,{className:`\r
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
      `,children:n.map(n=>{let r=e===n;return(0,F.jsxs)($.button,{whileTap:{scale:.96},onClick:()=>t(n),className:`\r
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
              `,children:[r&&(0,F.jsx)($.div,{layoutId:`activeEducationTab`,transition:{type:`spring`,bounce:.2,duration:.5},className:`\r
                    absolute inset-0\r
                    rounded-full\r
                    bg-[#155A96]\r
                    shadow-lg\r
                  `}),(0,F.jsx)(`span`,{className:`
                relative z-10
                transition-colors duration-300

                ${r?`text-white`:`text-[#475569] hover:text-[#155A96]`}
              `,children:n})]},n)})})}),(0,F.jsx)(`div`,{className:`mt-10`,children:(0,F.jsx)(pm,{mode:`wait`,children:(0,F.jsx)($.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.35},className:`\r
            grid\r
            md:grid-cols-2\r
            xl:grid-cols-3\r
            gap-6\r
            sm:gap-8\r
          `,children:i.map((e,t)=>{let n=e.icon;return(0,F.jsxs)($.div,{whileHover:{y:-8},transition:{duration:.3},className:`\r
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
                `,children:[(0,F.jsx)(`div`,{className:`\r
                  absolute top-0 inset-x-0\r
                  h-1\r
                  bg-[#155A96]\r
                `}),(0,F.jsxs)(`div`,{className:`p-4 sm:p-6`,children:[(0,F.jsxs)(`div`,{className:`\r
                    flex items-start justify-between\r
                    gap-5\r
                  `,children:[(0,F.jsx)(`div`,{className:`\r
                      w-14 h-14\r
                      sm:w-16 sm:h-16 shrink-0\r
                      rounded-2xl\r
                      bg-[#155A96]\r
                      flex items-center justify-center\r
                      shadow-[0_10px_30px_rgba(17,120,212,0.20)]\r
                    `,children:(0,F.jsx)(n,{className:`\r
                        w-8 h-8 text-white\r
                      `})}),(0,F.jsxs)(`div`,{className:`\r
                      flex flex-col\r
                      items-end\r
                      gap-3\r
                    `,children:[(0,F.jsxs)(`div`,{className:`\r
                        px-3\r
                        sm:px-4\r
                        py-2\r
                        rounded-full\r
                        bg-[#F8FAFC]\r
                        border border-[#E2E8F0]\r
                        text-sm\r
                        font-semibold\r
                        text-[#475569]\r
                      `,children:[`⏱ `,e.duration]}),(0,F.jsx)(`div`,{className:`\r
                        px-3\r
                        sm:px-4\r
                        py-2\r
                        rounded-full\r
                        bg-[#EEF4F8]\r
                        text-sm\r
                        font-semibold\r
                        text-[#155A96]\r
                      `,children:e.level})]})]}),(0,F.jsx)(`h3`,{className:`\r
                    mt-5\r
                    text-[20px]\r
                    sm:text-[22px]\r
                    font-bold\r
                    leading-tight\r
                    text-[#0F172A]\r
\r
                    group-hover:text-[#155A96]\r
                    transition-colors duration-300\r
                  `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
                    mt-5\r
                    text-[15px]\r
                    sm:text-[17px]\r
                    leading-[1.8]\r
                    text-[#64748B]\r
                  `,children:e.description}),(0,F.jsx)(`div`,{className:`\r
                    mt-5\r
                    flex flex-wrap\r
                    gap-3\r
                  `,children:e.skills.map((e,t)=>(0,F.jsx)(`div`,{className:`\r
                          px-3\r
                          sm:px-4\r
                          py-2\r
                          rounded-full\r
                          border border-[#D7E5EF]\r
                          bg-[#EEF4F8]\r
                          text-sm\r
                          font-medium\r
                          text-[#475569]\r
                        `,children:e},t))}),(0,F.jsx)(Mn,{to:`/contact`,children:(0,F.jsxs)(`button`,{className:`\r
                    group/btn\r
                    mt-4\r
                    w-full\r
                    flex items-center justify-center gap-3\r
                    px-3\r
                    sm:px-4\r
                    py-3\r
                    rounded-2xl\r
\r
                    bg-[#155A96]\r
                    hover:bg-[#0F4D82]\r
\r
                    text-white\r
                    font-semibold\r
                    text-lg\r
\r
                    shadow-lg\r
\r
                    hover:scale-[1.02]\r
                    transition-all duration-300\r
                  `,children:[`Enquire Now`,(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:2,stroke:`currentColor`,className:`\r
                        w-5 h-5\r
                        group-hover/btn:translate-x-1\r
                        transition-transform\r
                      `,children:(0,F.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3`})})]})})]})]},t)})},e)})})]})]}),(0,F.jsx)(`section`,{className:`relative py-10 sm:py-12 md:py-14 bg-[#FAFBFC] overflow-hidden`,children:(0,F.jsxs)(`div`,{className:`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,F.jsxs)(`div`,{className:`text-center`,children:[(0,F.jsxs)(`div`,{className:`\r
        inline-flex items-center gap-2\r
        px-4 py-2\r
        rounded-full\r
        border border-[#D7E5EF]\r
        bg-[#EEF4F8]\r
        text-[#155A96]\r
        text-sm\r
        font-semibold\r
        tracking-wide\r
        mb-5\r
      `,children:[(0,F.jsx)(`div`,{className:`\r
          w-2 h-2 rounded-full\r
          bg-[#155A96]\r
        `}),`Why Students Choose Us`]}),(0,F.jsxs)(`h2`,{className:`text-[26px]\r
sm:text-3xl\r
lg:text-4xl\r
        font-bold\r
        tracking-[-0.03em]\r
        text-[#0F172A]\r
      `,children:[`Why Choose`,(0,F.jsxs)(`span`,{className:`\r
          text-[#155A96]\r
        `,children:[` `,`Tally Education`]})]}),(0,F.jsx)(`p`,{className:`\r
        mt-5\r
        max-w-3xl\r
        mx-auto\r
        text-[15px]\r
        sm:text-lg\r
        leading-relaxed\r
        text-[#64748B]\r
      `,children:`Gain practical accounting expertise with industry-focused training, expert mentors, certification support, and career guidance.`})]}),(0,F.jsx)(`div`,{className:`\r
      mt-10\r
      grid\r
      sm:grid-cols-2\r
      xl:grid-cols-4\r
      gap-5\r
      sm:gap-7\r
    `,children:[{title:`Expert Training`,description:`Learn directly from certified trainers with practical industry expertise.`,icon:Zr},{title:`Practical Experience`,description:`Hands-on projects and real business workflows for job-ready skills.`,icon:mr},{title:`Career Support`,description:`Placement guidance, interview preparation, and career assistance.`,icon:Ki},{title:`Industry Recognition`,description:`Globally recognized Tally certifications valued across industries.`,icon:lr}].map((e,t)=>{let n=e.icon;return(0,F.jsxs)($.div,{whileHover:{y:-8},transition:{duration:.3},className:`\r
              group\r
              relative\r
              rounded-[22px]\r
              sm:rounded-[28px]\r
              border border-[#D7E5EF]\r
              bg-white\r
              p-5\r
              sm:p-6\r
\r
              shadow-[0_10px_40px_rgba(15,23,42,0.05)]\r
            `,children:[(0,F.jsx)(`div`,{className:`\r
              w-14 h-14\r
              sm:w-16 sm:h-16\r
              rounded-2xl\r
              bg-[#155A96]\r
\r
              flex items-center justify-center\r
\r
              shadow-[0_10px_30px_rgba(21,90,150,0.18)]\r
            `,children:(0,F.jsx)(n,{className:`\r
                w-8 h-8 text-white\r
              `})}),(0,F.jsx)(`h3`,{className:`\r
              mt-7\r
              text-[20px]\r
              sm:text-[22px]\r
              font-bold\r
              text-[#0F172A]\r
            `,children:e.title}),(0,F.jsx)(`p`,{className:`\r
              mt-4\r
              text-[15px]\r
              sm:text-[16px]\r
              leading-[1.8]\r
              text-[#64748B]\r
            `,children:e.description})]},t)})})]})})]})}function zy(){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Zn,{}),(0,F.jsxs)(`div`,{className:`overflow-x-hidden`,children:[(0,F.jsx)(ea,{}),(0,F.jsxs)(Vt,{children:[(0,F.jsx)(zt,{path:`/`,element:(0,F.jsx)(Zv,{})}),(0,F.jsx)(zt,{path:`/about`,element:(0,F.jsx)(uy,{})}),(0,F.jsx)(zt,{path:`/products`,element:(0,F.jsx)(fy,{})}),(0,F.jsx)(zt,{path:`/products/:slug`,element:(0,F.jsx)(hy,{})}),(0,F.jsx)(zt,{path:`/services`,element:(0,F.jsx)(vy,{})}),(0,F.jsx)(zt,{path:`/services/:slug`,element:(0,F.jsx)(yy,{})}),(0,F.jsx)(zt,{path:`/education`,element:(0,F.jsx)(Ry,{})}),(0,F.jsx)(zt,{path:`/lms`,element:(0,F.jsx)(Ey,{})}),(0,F.jsx)(zt,{path:`/courses/:slug`,element:(0,F.jsx)(My,{})}),(0,F.jsx)(zt,{path:`/lms/:exerciseSlug`,element:(0,F.jsx)(Fy,{})}),(0,F.jsx)(zt,{path:`/contact`,element:(0,F.jsx)(Ly,{})})]}),(0,F.jsx)(va,{})]})]})}Xn.createRoot(document.getElementById(`root`)).render((0,F.jsx)(kn,{basename:`/Balaji-Infotech`,children:(0,F.jsx)(zy,{})}));