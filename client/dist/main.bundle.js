/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{var t={633:(t,e,n)=>{var r=n(738).default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var e,n={},i=Object.prototype,a=i.hasOwnProperty,c=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",f=s.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(e){h=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new T(r||[]);return c(i,"_invoke",{value:I(t,n,a)}),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var v="suspendedStart",y="suspendedYield",g="executing",m="completed",w={};function b(){}function _(){}function x(){}var E={};h(E,u,(function(){return this}));var L=Object.getPrototypeOf,j=L&&L(L(M([])));j&&j!==i&&a.call(j,u)&&(E=j);var S=x.prototype=b.prototype=Object.create(E);function P(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,i,c,s){var u=d(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==r(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var o;c(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function I(t,n,r){var o=v;return function(i,a){if(o===g)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=O(c,r);if(s){if(s===w)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===v)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=g;var u=d(t,n,r);if("normal"===u.type){if(o=r.done?m:y,u.arg===w)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=m,r.method="throw",r.arg=u.arg)}}}function O(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),w;var i=d(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,w;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,w):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,w)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function B(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function M(t){if(t||""===t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(a.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(r(t)+" is not iterable")}return _.prototype=x,c(S,"constructor",{value:x,configurable:!0}),c(x,"constructor",{value:_,configurable:!0}),_.displayName=h(x,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,f,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},P(k.prototype),h(k.prototype,l,(function(){return this})),n.AsyncIterator=k,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new k(p(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(S),h(S,f,"Generator"),h(S,u,(function(){return this})),h(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=M,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(B),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,w):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),w},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),B(n),w}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;B(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:M(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),w}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},738:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},756:(t,e,n)=>{var r=n(633)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";try{self["workbox:window:6.5.4"]&&_()}catch(t){}function t(t,e){return new Promise((function(n){var r=new MessageChannel;r.port1.onmessage=function(t){n(t.data)},t.postMessage(e,[r.port2])}))}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t,n){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.5.4"]&&_()}catch(t){}var o=function(){var t=this;this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))};function i(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var a=function(t,e){this.type=t,Object.assign(this,e)};function c(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function s(){}var u={type:"SKIP_WAITING"};function l(t,e){if(!e)return t&&t.then?t.then(s):Promise.resolve()}var f=function(e){var n,r;function s(t,n){var r,s;return void 0===n&&(n={}),(r=e.call(this)||this).nn={},r.tn=0,r.rn=new o,r.en=new o,r.on=new o,r.un=0,r.an=new Set,r.cn=function(){var t=r.fn,e=t.installing;r.tn>0||!i(e.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=e,t.removeEventListener("updatefound",r.cn)):(r.hn=e,r.an.add(e),r.rn.resolve(e)),++r.tn,e.addEventListener("statechange",r.ln)},r.ln=function(t){var e=r.fn,n=t.target,o=n.state,i=n===r.vn,c={sw:n,isExternal:i,originalEvent:t};!i&&r.mn&&(c.isUpdate=!0),r.dispatchEvent(new a(o,c)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&e.waiting===n&&r.dispatchEvent(new a("waiting",c))}),200):"activating"===o&&(clearTimeout(r.wn),i||r.en.resolve(n))},r.dn=function(t){var e=r.hn,n=e!==navigator.serviceWorker.controller;r.dispatchEvent(new a("controlling",{isExternal:n,originalEvent:t,sw:e,isUpdate:r.mn})),n||r.on.resolve(e)},r.gn=(s=function(t){var e=t.data,n=t.ports,o=t.source;return c(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new a("message",{data:e,originalEvent:t,ports:n,sw:o}))}))},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return Promise.resolve(s.apply(this,t))}catch(t){return Promise.reject(t)}}),r.sn=t,r.nn=n,navigator.serviceWorker.addEventListener("message",r.gn),r}r=e,(n=s).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var f,h=s.prototype;return h.register=function(t){var e=(void 0===t?{}:t).immediate,n=void 0!==e&&e;try{var r=this;return function(t,e){var n=t();return n&&n.then?n.then(e):e()}((function(){if(!n&&"complete"!==document.readyState)return l(new Promise((function(t){return window.addEventListener("load",t)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),c(r.bn(),(function(t){r.fn=t,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var e=r.fn.waiting;return e&&i(e.scriptURL,r.sn.toString())&&(r.hn=e,Promise.resolve().then((function(){r.dispatchEvent(new a("waiting",{sw:e,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(t){return Promise.reject(t)}},h.update=function(){try{return this.fn?l(this.fn.update()):void 0}catch(t){return Promise.reject(t)}},h.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},h.messageSW=function(e){try{return c(this.getSW(),(function(n){return t(n,e)}))}catch(t){return Promise.reject(t)}},h.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&t(this.fn.waiting,u)},h.pn=function(){var t=navigator.serviceWorker.controller;return t&&i(t.scriptURL,this.sn.toString())?t:void 0},h.bn=function(){try{var t=this;return function(t,e){try{var n=t()}catch(t){return e(t)}return n&&n.then?n.then(void 0,e):n}((function(){return c(navigator.serviceWorker.register(t.sn,t.nn),(function(e){return t.un=performance.now(),e}))}),(function(t){throw t}))}catch(t){return Promise.reject(t)}},(f=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(s.prototype,f),s}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(t,e){this.Sn(t).add(e)},e.removeEventListener=function(t,e){this.Sn(t).delete(e)},e.dispatchEvent=function(t){t.target=this;for(var e,n=r(this.Sn(t.type));!(e=n()).done;)(0,e.value)(t)},e.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},t}());function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function p(t){var e=function(t,e){if("object"!=h(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==h(e)?e:e+""}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function v(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function y(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function g(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){y(i,r,o,a,c,"next",t)}function c(t){y(i,r,o,a,c,"throw",t)}a(void 0)}))}}var m=n(756),w=n.n(m);const b=(t,e)=>e.some((e=>t instanceof e));let x,E;const L=new WeakMap,j=new WeakMap,S=new WeakMap,P=new WeakMap,k=new WeakMap;let I={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return j.get(t);if("objectStoreNames"===e)return t.objectStoreNames||S.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return D(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function O(t){return"function"==typeof t?(e=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(E||(E=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(B(this),t),D(L.get(this))}:function(...t){return D(e.apply(B(this),t))}:function(t,...n){const r=e.call(B(this),t,...n);return S.set(r,t.sort?t.sort():[t]),D(r)}:(t instanceof IDBTransaction&&function(t){if(j.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)}));j.set(t,e)}(t),b(t,x||(x=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,I):t);var e}function D(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{e(D(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&L.set(e,t)})).catch((()=>{})),k.set(e,t),e}(t);if(P.has(t))return P.get(t);const e=O(t);return e!==t&&(P.set(t,e),k.set(e,t)),e}const B=t=>k.get(t);function T(t,e,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(t,e),c=D(a);return r&&a.addEventListener("upgradeneeded",(t=>{r(D(a.result),t.oldVersion,t.newVersion,D(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),c.then((t=>{i&&t.addEventListener("close",(()=>i())),o&&t.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const M=["get","getKey","getAll","getAllKeys","count"],W=["put","add","delete","clear"],N=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(N.get(e))return N.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=W.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!M.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(e.shift())),(await Promise.all([a[n](...e),o&&i.done]))[0]};return N.set(e,i),i}var C;C=I,I={...C,get:(t,e,n)=>A(t,e)||C.get(t,e,n),has:(t,e)=>!!A(t,e)||C.has(t,e)};var R=function(){var t=g(w().mark((function t(){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",T("jate",1,{upgrade:function(t){t.objectStoreNames.contains("jate")?console.log("jate database already exists"):(t.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),G=function(){var t=g(w().mark((function t(e){var n,r,o,i;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.error("putDb not implemented"),t.next=3,T("jate",1);case 3:return n=t.sent,r=n.transaction("jate","readwrite"),o=r.objectStore("jate"),i=o.put({content:e}),t.next=9,i;case 9:t.sent;case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=g(w().mark((function t(){var e,n,r,o,i;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.error("getDb not implemented"),t.next=3,T("jate",1);case 3:return e=t.sent,n=e.transaction("jate","readonly"),r=n.objectStore("jate"),o=r.getAll(),t.next=9,o;case 9:return i=t.sent,console.log("result.value",i),t.abrupt("return",i);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();R();var F,K=v((function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),U().then((function(t){console.info("Loaded data from IndexedDB, injecting into editor"),e.editor.setValue(t||n||"\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n")})),this.editor.on("change",(function(){localStorage.setItem("content",e.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),G(localStorage.getItem("content"))}))})),V=document.querySelector("#main");V.innerHTML="",void 0===new K&&((F=document.createElement("div")).classList.add("spinner"),F.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',V.appendChild(F)),"serviceWorker"in navigator?new f("/src-sw.js").register():console.error("Service workers are not supported in this browser.")})()})();