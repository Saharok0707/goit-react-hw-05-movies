"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[15,785],{238:function(t,n,e){e.d(n,{Hj:function(){return d},R8:function(){return s},Yc:function(){return v},dU:function(){return i},gW:function(){return h}});var r=e(861),c=e(757),a=e.n(c),u="90cb713cbad21b579532fb5c59ca1f23";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/trending/all/day",t.next=3,fetch("".concat("https://api.themoviedb.org/3/trending/all/day","?api_key=").concat(u)).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/search/movie",t.next=3,fetch("".concat("https://api.themoviedb.org/3/search/movie","?query=").concat(n,"&api_key=").concat(u,"&language=en-US&page=1&include_adult=false")).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie",t.next=3,fetch("".concat("https://api.themoviedb.org/3/movie","/").concat(n,"?api_key=").concat(u));case 3:if(!(e=t.sent).ok){t.next=6;break}return t.abrupt("return",e.json());case 6:return t.abrupt("return",Promise.reject(new Error(" Error: 404")));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie",t.next=3,fetch("".concat("https://api.themoviedb.org/3/movie","/").concat(n,"/credits?api_key=").concat(u)).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie",t.next=3,fetch("".concat("https://api.themoviedb.org/3/movie","/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US&page=1")).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},785:function(t,n,e){e.r(n),e.d(n,{default:function(){return i}});var r=e(885),c=e(791),a=e(238),u=e(184);function i(t){var n=t.filmId,e=(0,c.useState)([]),i=(0,r.Z)(e,2),o=i[0],s=i[1];return(0,c.useEffect)((function(){(0,a.Yc)(n).then((function(t){s(t.results)}))}),[n]),(0,u.jsx)(u.Fragment,{children:o.length>0?(0,u.jsx)("ul",{children:o.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,u.jsxs)("li",{children:[(0,u.jsx)("h3",{children:"Author : ".concat(e)}),(0,u.jsx)("p",{children:r})]},n)}))}):(0,u.jsx)("h3",{children:"We don't have any reviews for this movie"})})}},15:function(t,n,e){e.r(n),e.d(n,{default:function(){return r.default}});var r=e(785)}}]);
//# sourceMappingURL=15.a58b8fba.chunk.js.map