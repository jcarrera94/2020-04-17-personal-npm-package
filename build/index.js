module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){t.exports=require("react")},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n);function i(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function u(t){return!!t&&!!t[$]}function c(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);return!e||e===Object.prototype}(t)||Array.isArray(t)||!!t[U]||!!t.constructor[U]||y(t)||d(t))}function f(t,e){0===a(t)?q(t).forEach((function(r){return e(r,t[r],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function a(t){var e=t[$];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:y(t)?2:d(t)?3:0}function l(t,e){return 2===a(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function s(t,e){return 2===a(t)?t.get(e):t[e]}function p(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function y(t){return N&&t instanceof Map}function d(t){return W&&t instanceof Set}function v(t){return t.o||t.t}function h(t,e){if(void 0===e&&(e=!1),Array.isArray(t))return t.slice();var r=Object.create(Object.getPrototypeOf(t));return f(t,(function(n){if(n!==$){var o=Object.getOwnPropertyDescriptor(t,n),u=o.value;o.get&&(e||i(1),u=o.get.call(t)),o.enumerable?r[n]=u:Object.defineProperty(r,n,{value:u,writable:!0,configurable:!0})}})),r}function b(t,e){u(t)||Object.isFrozen(t)||!c(t)||(a(t)>1&&(t.set=t.add=t.clear=t.delete=m),Object.freeze(t),e&&f(t,(function(t,e){return b(e,!0)})))}function m(){i(2)}function P(t){var e=J[t];return e||i(19,t),e}function g(){return R}function O(t,e){e&&(P("Patches"),t.u=[],t.s=[],t.v=e)}function j(t){A(t),t.p.forEach(w),t.p=null}function A(t){t===R&&(R=t.l)}function S(t){return R={p:[],l:R,h:t,m:!0,_:0}}function w(t){var e=t[$];0===e.i||1===e.i?e.j():e.O=!0}function x(t,e){e._=e.p.length;var r=e.p[0],n=void 0!==t&&t!==r;return e.h.g||P("ES5").S(e,t,n),n?(r[$].P&&(j(e),i(4)),c(t)&&(t=_(e,t),e.l||E(e,t)),e.u&&P("Patches").M(r[$],t,e.u,e.s)):t=_(e,r,[]),j(e),e.u&&e.v(e.u,e.s),t!==T?t:void 0}function _(t,e,r){if(Object.isFrozen(e))return e;var n=e[$];if(!n)return f(e,(function(o,i){return D(t,n,e,o,i,r)})),e;if(n.A!==t)return e;if(!n.P)return E(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=h(n.k,!0):n.o;f(o,(function(e,i){return D(t,n,o,e,i,r)})),E(t,o,!1),r&&t.u&&P("Patches").R(n,r,t.u,t.s)}return n.o}function D(t,e,r,n,o,i){if(u(o)){var f=_(t,o,i&&e&&3!==e.i&&!l(e.D,n)?i.concat(n):void 0);if(d=n,v=f,2===(h=a(y=r))?y.set(d,v):3===h?(y.delete(d),y.add(v)):y[d]=v,!u(f))return;t.m=!1}var y,d,v,h;if((!e||!p(o,s(e.t,n)))&&c(o)){if(!t.h.N&&t._<1)return;_(t,o),e&&e.A.l||E(t,o)}}function E(t,e,r){void 0===r&&(r=!1),t.h.N&&t.m&&b(e,r)}function k(t,e){var r=t[$],n=Reflect.getOwnPropertyDescriptor(r?v(r):t,e);return n&&n.value}function M(t){if(!t.P){if(t.P=!0,0===t.i||1===t.i){var e=t.o=h(t.t);f(t.p,(function(t,r){e[t]=r})),t.p=void 0}t.l&&M(t.l)}}function z(t){t.o||(t.o=h(t.t))}function F(t,e,r){var n=y(e)?P("MapSet").T(e,r):d(e)?P("MapSet").F(e,r):t.g?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:g(),P:!1,I:!1,D:{},l:e,t:t,k:null,p:{},o:null,j:null,C:!1},o=n,i=X;r&&(o=[n],i=B);var u=Proxy.revocable(o,i),c=u.revoke,f=u.proxy;return n.k=f,n.j=c,f}(e,r):P("ES5").J(e,r);return(r?r.A:g()).p.push(n),n}var I,R,C="undefined"!=typeof Symbol,N="undefined"!=typeof Map,W="undefined"!=typeof Set,K="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,T=C?Symbol("immer-nothing"):((I={})["immer-nothing"]=!0,I),U=C?Symbol("immer-draftable"):"__$immer_draftable",$=C?Symbol("immer-state"):"__$immer_state",q=(C&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames),J={},X={get:function(t,e){if(e===$)return t;var r=t.p;if(!t.P&&l(r,e))return r[e];var n=v(t)[e];if(t.I||!c(n))return n;if(t.P){if(n!==k(t.t,e))return n;r=t.o}return r[e]=F(t.A.h,n,t)},has:function(t,e){return e in v(t)},ownKeys:function(t){return Reflect.ownKeys(v(t))},set:function(t,e,r){if(!t.P){var n=k(t.t,e);if(r?p(n,r)||r===t.p[e]:p(n,r)&&e in t.t)return!0;z(t),M(t)}return t.D[e]=!0,t.o[e]=r,!0},deleteProperty:function(t,e){return void 0!==k(t.t,e)||e in t.t?(t.D[e]=!1,z(t),M(t)):t.D[e]&&delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=v(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n&&(n.writable=!0,n.configurable=1!==t.i||"length"!==e),n},defineProperty:function(){i(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){i(12)}},B={};f(X,(function(t,e){B[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),B.deleteProperty=function(t,e){return X.deleteProperty.call(this,t[0],e)},B.set=function(t,e,r){return X.set.call(this,t[0],e,r,t[0])};var G=new(function(){function t(t){this.g=K,this.N=!1,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var e=t.prototype;return e.produce=function(t,e,r){if("function"==typeof t&&"function"!=typeof e){var n=e;e=t;var o=this;return function(t){var r=this;void 0===t&&(t=n);for(var i=arguments.length,u=Array(i>1?i-1:0),c=1;c<i;c++)u[c-1]=arguments[c];return o.produce(t,(function(t){var n;return(n=e).call.apply(n,[r,t].concat(u))}))}}var u;if("function"!=typeof e&&i(6),void 0!==r&&"function"!=typeof r&&i(7),c(t)){var f=S(this),a=F(this,t,void 0),l=!0;try{u=e(a),l=!1}finally{l?j(f):A(f)}return"undefined"!=typeof Promise&&u instanceof Promise?u.then((function(t){return O(f,r),x(t,f)}),(function(t){throw j(f),t})):(O(f,r),x(u,f))}if((u=e(t))!==T)return void 0===u&&(u=t),this.N&&b(u,!0),u},e.produceWithPatches=function(t,e){var r,n,o=this;return"function"==typeof t?function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return o.produceWithPatches(e,(function(e){return t.apply(void 0,[e].concat(n))}))}:[this.produce(t,e,(function(t,e){r=t,n=e})),r,n]},e.createDraft=function(t){c(t)||i(8);var e=S(this),r=F(this,t,void 0);return r[$].C=!0,A(e),r},e.finishDraft=function(t,e){var r=(t&&t[$]).A;return O(r,e),x(void 0,r)},e.setAutoFreeze=function(t){this.N=t},e.setUseProxies=function(t){K||i(20),this.g=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}var o=P("Patches").U;return u(t)?o(t,e):this.produce(t,(function(t){return o(t,e.slice(r+1))}))},t}()),H=G.produce,L=(G.produceWithPatches.bind(G),G.setAutoFreeze.bind(G),G.setUseProxies.bind(G),G.applyPatches.bind(G),G.createDraft.bind(G),G.finishDraft.bind(G),H);function Q(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return V(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return V(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}e.default=function(t){var e=t.rows,r=t.cols,i=t.color,u=t.bgColor,c=t.tileSize,f=Q(Object(n.useState)(),2),a=f[0],l=f[1];return Object(n.useEffect)((function(){var t=Array.from({length:e||10}).map((function(){return Array.from({length:r||10}).fill(0)}));l(t)}),[e,r]),o.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(r,", ").concat(c||20,")")}},a.map((function(t,e){t.map((function(t,r){return o.a.createElement("div",{key:"".concat(e,"-").concat(r),onClick:function(){var t=L(a,(function(t){t[e][r]=a[e][r]?0:1}));l(t)},style:{width:c||20,height:c||20,backgroundColor:a[e][r]?i||"black":u,border:"solid 1px ".concat(i||"black")}})}))})))}}]);