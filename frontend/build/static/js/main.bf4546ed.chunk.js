(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{55:function(e,t,c){},56:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),r=c.n(n),s=c(20),i=c.n(s),j=(c(55),c(56),c(90)),o=c(87),l=c(33);function d(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(j.a,{bg:"dark",variant:"dark",children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)(l.LinkContainer,{to:"/",children:Object(a.jsx)(j.a.Brand,{children:"FilmBuffs"})}),Object(a.jsx)(l.LinkContainer,{to:"/signUp",children:Object(a.jsx)(j.a.Brand,{className:"text-white ml-auto",children:"Sign Up"})})]})})})}var b=c(88),h=c(49);function x(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(b.a,{children:Object(a.jsx)(h.a,{className:"text-center",children:"Copyright FilmBuffs \xa9 2020"})})})}var O=c(91),m=c(94);function u(){return Object(a.jsx)(o.a,{children:Object(a.jsxs)(O.a,{className:"py-3",children:[Object(a.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(O.a.Label,{children:"User Name"}),Object(a.jsx)(O.a.Control,{type:"text",placeholder:"Choose a name"}),Object(a.jsx)(O.a.Label,{className:"py-3",children:"Email address"}),Object(a.jsx)(O.a.Control,{type:"email",placeholder:"Enter email"}),Object(a.jsx)(O.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(a.jsxs)(O.a.Group,{controlId:"formBasicPassword",children:[Object(a.jsx)(O.a.Label,{children:"Password"}),Object(a.jsx)(O.a.Control,{type:"password",placeholder:"Password"})]}),Object(a.jsx)(m.a,{variant:"primary",type:"submit",children:"Submit"})]})})}var p=c(21),f=c.n(p),v=c(25),y=c(22),g=c(26),w=c.n(g),k=c(93),S=c(15);function N(e){var t=e.id,c=e.year,n=e.title,r=e.poster,s=e.plot;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(k.a,{children:Object(a.jsxs)(k.a.Body,{children:[Object(a.jsx)(k.a.Img,{src:r}),Object(a.jsx)(S.Link,{to:{pathname:"/search/".concat(t),state:{title:"".concat(n),year:"".concat(c),poster:"".concat(r),plot:"".concat(s)}},children:n})]})})})}function C(e){var t=e.onSearchChange,c=(e.movieTitle,e.onSubmitSearch);return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(b.a,{children:Object(a.jsx)(h.a,{children:Object(a.jsxs)(O.a,{onSubmit:c,className:"py-2",children:[Object(a.jsx)(O.a.Control,{className:"text-center",placeholder:"Any movie you like...",onChange:t}),Object(a.jsx)(m.a,{className:"my-2",type:"submit",children:"Search"})]})})})})}function B(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),i=Object(y.a)(s,2),j=i[0],l=i[1],d=function(){var e=Object(v.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,w.a.get("https://www.omdbapi.com/?s=".concat(c,"&type=movie&plot=short&apikey=").concat("c1476cd7"));case 3:return a=e.sent,e.next=6,a.data;case 6:n=e.sent,l(n.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)("h1",{className:"pt-3",children:"Welcome to FilmBuffs"}),Object(a.jsx)("i",{children:"We know movies"}),Object(a.jsx)(C,{onSearchChange:function(e){e.preventDefault();var t=e.target.value;r(t)},onSubmitSearch:d,movieTitle:c}),Object(a.jsx)(b.a,{children:j.map((function(e){return Object(a.jsx)(h.a,{sm:8,md:6,lg:3,children:Object(a.jsx)(N,{id:e.imdbID,title:e.Title,year:e.Year,poster:e.Poster,plot:e.Plot})},e.imdbID)}))})]})})}var I=c(6),F=c(89),P=c(92);function L(e){var t=Object(n.useState)({Plot:"",Director:"",Actors:"",Year:"",Poster:""}),c=Object(y.a)(t,2),r=c[0],s=c[1];Object(n.useEffect)((function(){(function(){var t=Object(v.a)(f.a.mark((function t(){var c,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.get("https://www.omdbapi.com/?i=".concat(e.match.params.id,"&type=movie&plot=full&apikey=").concat("c1476cd7"));case 2:c=t.sent,a=c.data,console.log(a),s(a);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var i=Object(I.l)();return console.log(i),Object(a.jsx)(o.a,{children:Object(a.jsxs)(b.a,{children:[Object(a.jsx)(h.a,{className:"py-5",children:Object(a.jsx)(F.a,{src:r.Poster,fluid:!0})}),Object(a.jsxs)(h.a,{className:"py-5",children:[Object(a.jsxs)(P.a,{variant:"flush",children:[Object(a.jsx)(P.a.Item,{children:r.Title}),Object(a.jsxs)(P.a.Item,{children:["Directed by: ",r.Director]}),Object(a.jsxs)(P.a.Item,{children:["Starring: ",r.Actors]}),Object(a.jsx)(P.a.Item,{children:r.Plot}),Object(a.jsxs)(P.a.Item,{children:[r.Genre," | ",r.Year]})]}),Object(a.jsx)(b.a,{className:"text-center",children:Object(a.jsxs)(h.a,{children:[Object(a.jsx)(m.a,{className:"bg-dark mr-2",children:Object(a.jsx)(S.Link,{to:"/",children:"Back To Search"})}),Object(a.jsx)(m.a,{className:"bg-dark ml-2",children:Object(a.jsx)(S.Link,{className:"text-center",children:"Add To Watchlist"})})]})})]})]})})}var T=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(S.BrowserRouter,{children:[Object(a.jsx)(d,{}),Object(a.jsx)(I.d,{path:"/",component:B,exact:!0}),Object(a.jsx)(I.d,{path:"/signUp",component:u,exact:!0}),Object(a.jsx)(I.d,{path:"/search/:id",component:L,exact:!0}),Object(a.jsx)(x,{})]})})},D=(c(84),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,95)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))});i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),D()}},[[85,1,2]]]);
//# sourceMappingURL=main.bf4546ed.chunk.js.map