(this.webpackJsonpanime_database=this.webpackJsonpanime_database||[]).push([[0],[,,,,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,,function(e,t,n){e.exports={sidenav:"SideBar_sidenav__33iv7",list:"SideBar_list__1yrl9"}},function(e,t,n){e.exports={"search-container":"Search_search-container__21me3","search-bar":"Search_search-bar__1yoXK"}},function(e,t,n){e.exports={header:"Header_header__zSTUo"}},function(e,t,n){e.exports={"list-anime":"MainContent_list-anime__2OCk8"}},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),i=n.n(r),s=(n(16),n(4)),o=n.n(s),l=n(7),d=n(2),j=(n(18),n(10)),u=n.n(j),h=n(0);var b=function(e){return Object(h.jsx)("header",{className:u.a.header,children:Object(h.jsxs)("p",{children:["The ",Object(h.jsx)("strong",{children:"Anime"})," Database"]})})},m=n(8),O=n.n(m);var f=function(e){var t=e.top;return Object(h.jsxs)("div",{className:O.a.sidenav,children:[Object(h.jsx)("h2",{children:"Top Anime"}),Object(h.jsx)("ul",{className:O.a.list,children:t.map((function(e){return Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("li",{id:e.mal_id,children:e.title},e.mal_id)})}))})]})},x=n(9),p=n.n(x);var v=function(e){return Object(h.jsx)("form",{onSubmit:e.onSearchHandler,className:p.a["search-container"],children:Object(h.jsx)("input",{className:p.a["search-bar"],type:"search",placeholder:"What Anime are you into ?",value:e.search,onChange:function(t){return e.setSearch(t.target.value)}})})},_=n(11),S=n.n(_);var g=function(e){var t=e.item,n=e.animeHandler;return Object(h.jsx)("li",{id:t.mal_id,onClick:function(){return n(t)},children:Object(h.jsx)("a",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:t.image_url}),Object(h.jsx)("p",{children:t.title})]})})})},y=n(5),k=n.n(y),w=function(e){return Object(h.jsx)("div",{className:k.a.modal,children:Object(h.jsx)("div",{className:k.a.content,children:e.children})})},N=function(e){return Object(h.jsx)("div",{className:k.a.backdrop,onClick:e.hide})};var C=function(e){return Object(h.jsxs)(c.Fragment,{children:[i.a.createPortal(Object(h.jsx)(N,{hide:e.hide}),document.getElementById("overlays")),i.a.createPortal(Object(h.jsx)(w,{children:e.children}),document.getElementById("overlays"))]})};var H=function(e){var t=Object(c.useState)({}),n=Object(d.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(!1),s=Object(d.a)(i,2),o=s[0],l=s[1],j=function(e){r(e),l(!0),console.log(e)};return Object(h.jsxs)("div",{children:[o?Object(h.jsx)(C,{hide:function(){l(!1)},children:Object(h.jsxs)("div",{id:a.mal_id,children:[Object(h.jsx)("img",{src:a.image_url}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:a.score}),Object(h.jsx)("h2",{children:a.title}),Object(h.jsx)("p",{children:a.synopsis}),Object(h.jsx)("button",{onClick:function(){return window.open("".concat(a.url),"_blank")},children:"Learn More"})]})]})}):"",Object(h.jsx)(v,{onSearchHandler:e.onSearchHandler,search:e.search,setSearch:e.setSearch}),Object(h.jsx)("div",{children:Object(h.jsx)("ul",{className:S.a["list-anime"],children:e.animeList.map((function(e){return Object(h.jsx)(g,{item:e,animeHandler:j},e.mal_id)}))})})]})};var M=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),i=Object(d.a)(r,2),s=i[0],j=i[1],u=Object(c.useState)([]),m=Object(d.a)(u,2),O=m[0],x=m[1];Object(c.useEffect)((function(){p()}),[]);var p=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity").then((function(e){return e.json()}));case 2:t=e.sent,j(t.top.slice(0,5));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v3/search/anime?q=".concat(t,"&order_by=title&sort=asc&limit=10")).then((function(e){return e.json()}));case 2:n=e.sent,x(n.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{}),Object(h.jsx)(f,{top:s}),Object(h.jsx)(H,{onSearchHandler:function(e){e.preventDefault(),v(n)},search:n,setSearch:a,animeList:O})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root")),B()}],[[20,1,2]]]);
//# sourceMappingURL=main.588ac6e0.chunk.js.map