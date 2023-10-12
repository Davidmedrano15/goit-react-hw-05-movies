/*! For license information please see movies-view.baa7256b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[163],{440:function(t,n,e){e.d(n,{Z:function(){return _}});var r,o,i,a,c,u,s,l=e(168),f=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],p=e(867),h=e(184),d=function(t){var n=Object.values(t),e=[];return f.forEach((function(t){n[0].includes(t.id)&&e.push(t.name)})),(0,h.jsx)(m,{children:e.slice(0,2).join(", ")+", Other"})},m=p.ZP.span(r||(r=(0,l.Z)(["\n  color: #ff6b01;\n"]))),y=e(87),g=(0,p.ZP)(y.rU)(o||(o=(0,l.Z)(["\n  text-decoration: none;\n  color: #fff;\n"]))),v=p.ZP.li(i||(i=(0,l.Z)(["\n  overflow: hidden;\n  border-radius: 10px;\n  box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.75);\n  background-color: RGBA(0, 0, 0, 1);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.02);\n  }\n\n  @media screen and (max-width: 480px) {\n    width: 80%;\n  }\n"]))),x=p.ZP.p(a||(a=(0,l.Z)(["\n  font-size: 20px;\n  margin-bottom: 5px;\n"]))),w=p.ZP.div(c||(c=(0,l.Z)(["\n  padding: 10px;\n"]))),b=p.ZP.img(u||(u=(0,l.Z)(["\n  display: block;\n  max-width: 100%;\n"]))),Z=function(t){var n=t.itemData,e=n.poster_path,r=n.title,o=n.genre_ids;return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(v,{children:[(0,h.jsx)(b,{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png",alt:""}),(0,h.jsxs)(w,{children:[(0,h.jsx)(x,{children:r}),(0,h.jsx)(d,{genresId:o})]})]})})},j=p.ZP.ul(s||(s=(0,l.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1em;\n  list-style: none;\n\n  @media screen and (max-width: 480px) {\n    grid-template-columns: repeat(1, 1fr);\n    justify-items: center;\n  }\n"]))),L=e(689),_=function(t){var n=t.data,e=(0,L.TH)();return(0,h.jsx)(j,{children:n.map((function(t){return(0,h.jsx)(g,{to:"/movies/".concat(t.id),state:{from:e},children:(0,h.jsx)(Z,{itemData:t})},t.id)}))})}},354:function(t,n,e){e.r(n),e.d(n,{default:function(){return _}});var r,o,i,a,c,u=e(168),s=e(439),l=e(791),f=e(87),p=e(660),h=e(440),d=e(867),m=e(185),y=d.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n"]))),g=d.ZP.button(o||(o=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  border: none;\n  outline: none;\n  padding: 4.5px;\n  padding-top: 4px;\n  cursor: pointer;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: #212229;\n  &:hover {\n  }\n"]))),v=d.ZP.input(i||(i=(0,u.Z)(["\n  width: 400px;\n  padding: 10px;\n  border: none;\n  outline: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  background-color: #212229;\n  caret-color: #ff6b01;\n  color: #fff;\n\n  @media screen and (max-width: 480px) {\n    max-width: 300px;\n  }\n"]))),x=(0,d.ZP)(m.PxJ)(a||(a=(0,u.Z)(["\n  color: #fff;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    color: #ff6b01;\n  }\n"]))),w=e(184),b=function(t){var n=t.handleSubmit,e=t.handleInputChange,r=t.query;return(0,w.jsx)("form",{onSubmit:n,children:(0,w.jsxs)(y,{children:[r?(0,w.jsx)(v,{placeholder:"Type to search",type:"text",onChange:e}):(0,w.jsx)(v,{type:"text",placeholder:"Type to search",onChange:e}),(0,w.jsx)(g,{type:"submit",children:(0,w.jsx)(x,{size:30})})]})})},Z=e(264),j=e(742),L=d.ZP.div(c||(c=(0,u.Z)(["\n  margin-top: 20px;\n"]))),_=function(){var t,n=(0,f.lr)(),e=(0,s.Z)(n,2),r=e[0],o=e[1],i=(0,l.useState)(null!==(t=r.get("query"))&&void 0!==t?t:""),a=(0,s.Z)(i,2),c=a[0],u=a[1],d=(0,l.useState)([]),m=(0,s.Z)(d,2),y=m[0],g=m[1],v=(0,l.useState)(""),x=(0,s.Z)(v,2),_=x[0],k=x[1];(0,l.useEffect)((function(){c&&(o("query=".concat(c)),p.Li(c).then((function(t){j.Loading.circle({svgColor:"#ff6b01"}),g(t)})).finally((function(){j.Loading.remove()})))}),[c,o]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(L,{children:(0,w.jsx)(b,{handleSubmit:function(t){t.preventDefault(),""!==_?u(_):Z.Notify.failure("\ud83e\udd84 Please enter the name!")},handleInputChange:function(t){k(t.target.value.toLowerCase().trim())},query:c})}),(0,w.jsx)(h.Z,{data:y})]})}},660:function(t,n,e){e.d(n,{Hx:function(){return h},Li:function(){return s},Zn:function(){return c},lu:function(){return f},xc:function(){return m}});var r=e(861),o=e(243);function i(){i=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var i=n&&n.prototype instanceof g?n:g,a=Object.create(i.prototype),c=new O(r||[]);return o(a,"_invoke",{value:k(t,e,c)}),a}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var h="suspendedStart",d="executing",m="completed",y={};function g(){}function v(){}function x(){}var w={};l(w,c,(function(){return this}));var b=Object.getPrototypeOf,Z=b&&b(b(T([])));Z&&Z!==e&&r.call(Z,c)&&(w=Z);var j=x.prototype=g.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function _(t,n){function e(o,i,a,c){var u=p(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):n.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}})}function k(n,e,r){var o=h;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=E(c,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var s=p(n,e,r);if("normal"===s.type){if(o=r.done?m:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=m,r.method="throw",r.arg=s.arg)}}}function E(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,E(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=p(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function S(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(n){if(n||""===n){var e=n[c];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return v.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:v,configurable:!0}),v.displayName=l(x,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},L(_.prototype),l(_.prototype,u,(function(){return this})),n.AsyncIterator=_,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new _(f(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),l(j,s,"Generator"),l(j,c,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=T,O.prototype={constructor:O,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:T(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),y}},n}var a="cd00d8c55831cbeec8ccdad1db16d6d2";function c(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/popular?api_key=".concat(a,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/search/movie?api_key=".concat(a,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(n,"?api_key=cd00d8c55831cbeec8ccdad1db16d6d2&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(a,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(n,"/credits?api_key=").concat(a,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=movies-view.baa7256b.chunk.js.map