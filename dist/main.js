(()=>{"use strict";var e={705:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=e(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(e,t,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),r.push(d))}},r}},579:(e,r,t)=>{t(273)},99:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(705),o=t.n(n)()((function(e){return e[1]}));o.push([e.id,':root{--font-primary: "Archivo", sans-serif;--font-secondary: serif;--text-base-size: 1em;--color-primary: #ee792f;--color-secondary: #508AA8;--padding-size: 2rem}@media screen and (max-width: 468px){:root{--padding-size: 1rem}}*{box-sizing:border-box}html,body{margin:0;padding:0;height:100%;width:100%}body{font-family:var(--font-primary);color:var(--color-primary)}p{margin:0;padding-bottom:1rem}a{color:inherit}a:hover{color:var(--color-secondary)}.hovered:hover~.hovering,.hovering:hover{opacity:1;position:initial;left:0}.hovering{opacity:0;position:fixed;left:-9999px}h2{margin:0 0 var(--padding-size);text-transform:uppercase;font-size:1.2em;font-weight:500}.container{display:grid;grid-template-columns:400px 1fr}@media screen and (max-width: 400px){.container{grid-template-columns:1fr}}.container>div{padding:var(--padding-size)}.intro{max-width:400px}.bordered{border-bottom:1px solid var(--color-primary);padding-bottom:1rem;margin-bottom:2rem}.header{margin:8px;width:400px}.header svg{width:100%;fill:var(--color-primary)}h1{font-size:13.95vw;margin-left:-0.81vw;line-height:0;font-weight:300}',""]);const i=o},273:(e,r,t)=>{var n=t(379),o=t.n(n),i=t(99);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals},379:(e,r,t)=>{var n,o=function(){var e={};return function(r){if(void 0===e[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[r]=t}return e[r]}}(),i=[];function a(e){for(var r=-1,t=0;t<i.length;t++)if(i[t].identifier===e){r=t;break}return r}function c(e,r){for(var t={},n=[],o=0;o<e.length;o++){var c=e[o],d=r.base?c[0]+r.base:c[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var f=a(l),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(u)):i.push({identifier:l,updater:v(u,r),references:1}),n.push(l)}return n}function d(e){var r=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=t.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){r.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(r);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var s,l=(s=[],function(e,r){return s[e]=r,s.filter(Boolean).join("\n")});function f(e,r,t,n){var o=t?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=l(r,o);else{var i=document.createTextNode(o),a=e.childNodes;a[r]&&e.removeChild(a[r]),a.length?e.insertBefore(i,a[r]):e.appendChild(i)}}function u(e,r,t){var n=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,m=0;function v(e,r){var t,n,o;if(r.singleton){var i=m++;t=p||(p=d(r)),n=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=d(r),n=u.bind(null,t,r),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else o()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var t=c(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<t.length;n++){var o=a(t[n]);i[o].references--}for(var d=c(e,r),s=0;s<t.length;s++){var l=a(t[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=d}}}}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={id:n,exports:{}};return e[n](i,i.exports,t),i.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t(579),t(273)})();