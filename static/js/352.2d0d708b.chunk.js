"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[352,287],{238:function(t,n,e){e.d(n,{Hj:function(){return l},R8:function(){return s},Yc:function(){return d},dU:function(){return o},gW:function(){return h}});var r=e(861),a=e(757),c=e.n(a),i="90cb713cbad21b579532fb5c59ca1f23";function o(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/trending/all/day",t.next=3,fetch("".concat("https://api.themoviedb.org/3/trending/all/day","?api_key=").concat(i)).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/search/movie",t.next=3,fetch("".concat("https://api.themoviedb.org/3/search/movie","?query=").concat(n,"&api_key=").concat(i,"&language=en-US&page=1&include_adult=false")).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie",t.next=3,fetch("".concat("https://api.themoviedb.org/3/movie","/").concat(n,"?api_key=").concat(i));case 3:if(!(e=t.sent).ok){t.next=6;break}return t.abrupt("return",e.json());case 6:return t.abrupt("return",Promise.reject(new Error(" Error: 404")));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie",t.next=3,fetch("".concat("https://api.themoviedb.org/3/movie","/").concat(n,"/credits?api_key=").concat(i)).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie",t.next=3,fetch("".concat("https://api.themoviedb.org/3/movie","/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1")).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},287:function(t,n,e){e.r(n),e.d(n,{default:function(){return u}});var r=e(885),a=e(791),c=e(238),i=e(384),o=e(184);function u(t){var n=t.filmId,e=(0,a.useState)([]),u=(0,r.Z)(e,2),s=u[0],p=u[1];return(0,a.useEffect)((function(){(0,c.Hj)(n).then((function(t){return p(t.cast)}))}),[n]),(0,o.jsx)(o.Fragment,{children:s&&(s.length>0?(0,o.jsx)("ul",{children:s.map((function(t){var n=t.id,e=t.name,r=t.original_name,a=t.profile_path,c=t.character;return(0,o.jsxs)("li",{className:"cast_list",children:[(0,o.jsx)(i.Z,{tags:r,path:a,className:"cast_move"}),(0,o.jsx)("h4",{children:e}),(0,o.jsx)("p",{children:c})]},n)}))}):(0,o.jsx)("h3",{children:" Sorry . Not find cast for this film"}))})}},352:function(t,n,e){e.r(n),e.d(n,{default:function(){return r.default}});var r=e(287)},384:function(t,n,e){e.d(n,{Z:function(){return a}});var r=e(184);function a(t){var n=t.tags,e=t.path,a=t.className;return(0,r.jsx)("img",{alt:n,src:e?"https://image.tmdb.org/t/p/w300".concat(e):"https://image.shutterstock.com/image-vector/no-image-available-photo-coming-600w-2059817444.jpg",className:a})}}}]);
//# sourceMappingURL=352.2d0d708b.chunk.js.map