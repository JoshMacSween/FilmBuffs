(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{61:function(e,t,c){},62:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),r=c.n(a),s=c(22),i=c.n(s),j=(c(61),c(62),c(23)),o=c.n(j),l=c(27),d=c(24),h=c(6),b=c(28),u=c.n(b),x=Object(a.createContext)();function O(e){var t=Object(a.useState)(""),c=Object(d.a)(t,2),r=c[0],s=c[1],i=Object(a.useState)([]),j=Object(d.a)(i,2),b=j[0],O=j[1],m=Object(h.k)(),p=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,u.a.get("https://www.omdbapi.com/?s=".concat(r,"&type=movie&plot=short&apikey=").concat("c1476cd7"));case 3:return c=e.sent,e.next=6,c.data;case 6:n=e.sent,O(n.Search),m.push("/search/".concat(r));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(x.Provider,{value:{movieData:b,onSearchChange:function(e){e.preventDefault();var t=e.target.value;s(t)},onSubmitSearch:p,q:r},children:e.children})}var m=c(98),p=c(93),f=c(94),v=c(100),g=c(36);function y(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(m.a,{bg:"dark",variant:"dark",children:Object(n.jsxs)(p.a,{children:[Object(n.jsx)(g.LinkContainer,{to:"/",children:Object(n.jsx)(m.a.Brand,{children:Object(n.jsx)(f.a,{className:"navLogo",src:"/images/favicon_movie2.png",alt:"FilmBuffs",fluid:!0})})}),Object(n.jsx)(g.LinkContainer,{to:"/signUp",children:Object(n.jsx)(v.a.Link,{className:"text-white ml-auto",children:"[ Sign Up ]"})}),Object(n.jsx)(g.LinkContainer,{to:"/logIn",children:Object(n.jsx)(v.a.Item,{className:"text-white ml-3",children:"[ Log In ]"})})]})})})}var k=c(95),w=c(55);function N(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(k.a,{children:Object(n.jsx)(w.a,{className:"text-center",children:"Copyright FilmBuffs \xa9 2020"})})})}var C=c(99),S=c(96);function I(){return Object(n.jsx)(p.a,{children:Object(n.jsxs)(C.a,{className:"py-3",children:[Object(n.jsxs)(C.a.Group,{controlId:"formBasicEmail",children:[Object(n.jsx)(C.a.Label,{children:"User Name"}),Object(n.jsx)(C.a.Control,{type:"text",placeholder:"Choose a name"}),Object(n.jsx)(C.a.Label,{className:"py-3",children:"Email address"}),Object(n.jsx)(C.a.Control,{type:"email",placeholder:"Enter email"}),Object(n.jsx)(C.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(n.jsxs)(C.a.Group,{controlId:"formBasicPassword",children:[Object(n.jsx)(C.a.Label,{children:"Password"}),Object(n.jsx)(C.a.Control,{type:"password",placeholder:"Password"})]}),Object(n.jsx)(S.a,{variant:"primary",type:"submit",children:"Submit"})]})})}function L(){var e=Object(a.useContext)(x),t=e.onSearchChange,c=e.onSubmitSearch;return Object(n.jsxs)("div",{className:"mt-5",children:[Object(n.jsx)(k.a,{children:Object(n.jsxs)(w.a,{children:[Object(n.jsx)("h1",{children:"Welcome To FilmBuffs"}),Object(n.jsx)("p",{children:"We know movies"})]})}),Object(n.jsx)(k.a,{children:Object(n.jsx)(w.a,{children:Object(n.jsxs)(C.a,{onSubmit:c,className:"py-2",children:[Object(n.jsx)(C.a.Control,{autoFocus:!0,className:"text-center",placeholder:"Any movie you like...",onChange:t}),Object(n.jsx)(S.a,{className:"my-3",type:"submit",children:"Search"})]})})})]})}var P=c(101),F=c(16);function B(e){var t=e.id,c=e.year,a=e.title,r=e.poster,s=e.plot;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(F.Link,{to:{pathname:"/selected/".concat(t),state:{title:"".concat(a),year:"".concat(c),poster:"".concat(r),plot:"".concat(s)}},children:Object(n.jsx)(P.a.Img,{className:"moviePoster mb-3",src:r})})})}var D=c(97);function T(){return Object(n.jsx)(p.a,{children:Object(n.jsxs)(D.a,{children:[Object(n.jsx)("h2",{children:"Uh oh!"}),Object(n.jsx)("h4",{children:"Looks like your tastes are so underground, even we haven't seen it."}),Object(n.jsx)("h4",{children:"I guess you win!"})]})})}function E(){var e=Object(a.useContext)(x).movieData;return Object(n.jsx)(p.a,{className:"mt-3",children:Object(n.jsx)(k.a,{children:e?e.map((function(e){return Object(n.jsx)(w.a,{sm:8,md:6,lg:3,children:Object(n.jsx)(B,{id:e.imdbID,title:e.Title,year:e.Year,poster:e.Poster,plot:e.Plot})},e.imdbID)})):Object(n.jsx)(T,{})})})}var U=c(102);function A(e){var t=Object(a.useState)({Plot:"",Director:"",Actors:"",Year:"",Poster:""}),c=Object(d.a)(t,2),r=c[0],s=c[1],i=Object(h.k)();return Object(a.useEffect)((function(){(function(){var t=Object(l.a)(o.a.mark((function t(){var c,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://www.omdbapi.com/?i=".concat(e.match.params.id,"&type=movie&plot=full&apikey=").concat("c1476cd7"));case 2:c=t.sent,n=c.data,console.log(n),s(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(n.jsx)(p.a,{children:Object(n.jsxs)(k.a,{children:[Object(n.jsx)(w.a,{className:"py-5",children:Object(n.jsx)(f.a,{src:r.Poster,fluid:!0})}),Object(n.jsxs)(w.a,{className:"py-5",children:[Object(n.jsxs)(U.a,{variant:"flush",children:[Object(n.jsx)(U.a.Item,{children:r.Title}),Object(n.jsxs)(U.a.Item,{children:["Directed by: ",r.Director]}),Object(n.jsxs)(U.a.Item,{children:["Starring: ",r.Actors]}),Object(n.jsx)(U.a.Item,{children:r.Plot}),Object(n.jsxs)(U.a.Item,{children:[r.Genre," | ",r.Year]})]}),Object(n.jsx)(k.a,{className:"text-center",children:Object(n.jsxs)(w.a,{children:[Object(n.jsx)(S.a,{onClick:function(){return i.goBack()},className:"bg-dark mr-2",children:"Search Results"}),Object(n.jsx)(S.a,{className:"bg-dark ml-2",children:"Watchlist"})]})}),Object(n.jsx)(S.a,{className:"bg-dark mt-2 text-light",onClick:function(){return i.push("/")},children:"Home"})]})]})})}var W=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(F.BrowserRouter,{children:[Object(n.jsx)(y,{}),Object(n.jsx)(p.a,{children:Object(n.jsxs)(O,{children:[Object(n.jsx)(h.d,{path:"/",component:L,exact:!0}),Object(n.jsx)(h.d,{path:"/signUp",component:I,exact:!0}),Object(n.jsx)(h.d,{path:"/selected/:id",component:A,exact:!0}),Object(n.jsx)(h.d,{path:"/search/:title",component:E,exact:!0})]})}),Object(n.jsx)(N,{})]})})},G=(c(90),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,103)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))});i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(W,{})}),document.getElementById("root")),G()}},[[91,1,2]]]);
//# sourceMappingURL=main.29ef53da.chunk.js.map