(this["webpackJsonpreact-chance"]=this["webpackJsonpreact-chance"]||[]).push([[0],{19:function(e,t,s){},21:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},30:function(e){e.exports=JSON.parse('[{"id":"pink_oyster_kit","class":"pink_oyster","category":"mushroom_kit","logo":{"width":100,"source":"/pink_oyster.png"},"price":{"msrp":25,"sale":20},"title":"Pink Oyster Kit","summary":"Pink Oyster mushrooms are beautiful, succulent, and savory.","full_description":"[TODO]","featured":true},{"id":"golden_oyster_kit","class":"golden_oyster","category":"mushroom_kit","logo":{"width":110,"source":"/golden_oyster.png"},"price":{"msrp":25},"title":"Golden Oyster Kit","summary":"Golden Oyster mushrooms are aromatic and delicate with a hint of nuttiness.","full_description":"[TODO]"},{"id":"lions_oyster_kit","class":"lions_mane","category":"mushroom_kit","logo":{"width":100,"source":"/lions_mane.png"},"price":{"msrp":25},"title":"Lion\'s Mane Kit","summary":"Lion\'s mane mushrooms can be cooked, dried, or even steeped as a tea!","full_description":"[TODO]"}]')},31:function(e,t,s){},32:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),n=s(10),r=s(5),o=s(2),a=(s(19),s(0));function l(){return Object(a.jsx)("div",{className:"navigation content",children:Object(a.jsxs)("nav",{children:[Object(a.jsx)("div",{className:"blob link shop",children:Object(a.jsx)(r.b,{to:"/",children:Object(a.jsx)("section",{children:"Shop"})})}),Object(a.jsx)("div",{className:"blob link login",children:Object(a.jsx)(r.b,{to:"/",children:Object(a.jsx)("section",{children:"Log In"})})})]})})}s(21);function j(){return Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("img",{src:"/tastyspore.png",alt:"TastySpore Logo",width:300})})}var d=s(4),b=s(9);s(25);var u=function(){var e=Object(b.b)("xpzbznrw"),t=Object(d.a)(e,2),s=t[0],c=t[1];return s.succeeded?Object(a.jsx)("p",{children:"Thanks for joining! \ud83d\ude4c We will notify you when our site goes live!"}):Object(a.jsxs)("form",{onSubmit:c,children:[Object(a.jsx)("input",{id:"email",type:"email",name:"email"}),Object(a.jsx)(b.a,{prefix:"Email",field:"email",errors:s.errors}),Object(a.jsx)("button",{type:"submit",disabled:s.submitting,children:"Join"})]})};s(26);function h(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),s=t[0],i=t[1];return Object(c.useEffect)((function(){setTimeout((function(){i(!0)}),2e3)}),[]),Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)("div",{className:"notice"+(s?" show":""),children:[Object(a.jsx)("button",{style:{position:"absolute",right:"0",top:"0",padding:"10px",opacity:".5",background:"none",border:"none",fontSize:"15px",color:"inherit",cursor:"pointer"},onClick:function(){i(!1)},children:"(hide popup)"}),Object(a.jsxs)("p",{style:{paddingBottom:"10px"},children:[Object(a.jsx)("b",{style:{fontSize:"20px"},children:"Hey!"})," \ud83d\ude04 ",Object(a.jsx)("br",{})," We\u2019re still getting things set up, so some pages might not work quite yet. Check back here soon or join our mailing list to get notified when we officially launch. ",Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{})," (Enter your email below to get notified \ud83d\udce3)"]}),Object(a.jsx)(u,{})]})})}s(27);function m(e){var t=e.title,s=e.subtitle;return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h1",{children:t}),Object(a.jsx)("h3",{children:s})]})}s(28);function O(e){var t=e.title,s=e.summary,c=e.logo,i=e.price;return Object(a.jsx)("div",{className:"blob card",children:Object(a.jsx)("section",{children:Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsx)("div",{className:"image",children:Object(a.jsx)("img",{src:c.source,alt:t,style:{maxWidth:c.width}})}),Object(a.jsxs)("div",{className:"text",children:[Object(a.jsx)("h2",{children:t}),Object(a.jsx)("p",{className:"summary",children:s}),Object(a.jsxs)("div",{className:"bottom",children:[i.sale?Object(a.jsxs)("p",{className:"sale",children:[Object(a.jsxs)("span",{className:"cross",children:["$",i.msrp]}),Object(a.jsxs)("span",{className:"cost",children:["$",i.sale]})]}):Object(a.jsx)("span",{className:"cost",children:i.msrp}),Object(a.jsxs)("p",{className:"more-info",children:["more info ",Object(a.jsx)("span",{children:"+"})]})]})]})]})})})}s(29);function x(e){var t=e.children;return Object(a.jsx)("div",{className:"blob card block",children:Object(a.jsx)("section",{children:t})})}var p=s(30);function f(){return Object(a.jsx)(a.Fragment,{children:p.map((function(e,t){return e.featured&&Object(a.jsx)(O,{title:e.title,summary:e.summary,logo:e.logo,price:e.price},t)}))})}function g(){return Object(a.jsx)("div",{className:"page",children:Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("div",{className:"top",children:Object(a.jsx)(j,{})}),Object(a.jsx)(m,{title:"Today's Featured:",subtitle:""}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"split",children:Object(a.jsx)(f,{})}),Object(a.jsx)("hr",{}),Object(a.jsx)(m,{title:"Introduction:",subtitle:"Welcome to TastySpore!"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"split",children:Object(a.jsxs)(x,{children:[Object(a.jsx)("p",{children:"The only thing better than eating mushrooms is growing them yourself. Our Mushrooms grow kits are the best kits available for growing gourmet mushrooms indoors."}),Object(a.jsxs)("p",{children:["Our kits are designed to be easy to use, and contain a complete list of what you will need to grow your own mushrooms. We strive to provide premium quality at an affordable price. With a"," ",Object(a.jsx)("b",{children:" 100% guarantee "}),", we are confident you will love our mushrooms as much as we do!"]})]})}),Object(a.jsx)("div",{className:"blob",style:{opacity:0},children:Object(a.jsx)("section",{style:{minHeight:"100px"}})})]})})}function y(){return Object(a.jsx)("div",{className:"page",children:Object(a.jsx)("div",{className:"content",children:"asdf"})})}console.log(p);s(31),s(32);var v=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h,{}),Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{path:"/",element:Object(a.jsx)(g,{})}),Object(a.jsx)(o.a,{path:"/shop",element:Object(a.jsx)(y,{})})]}),Object(a.jsx)(l,{})]})},N=(s(33),s(34),function(){return Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(r.a,{children:Object(a.jsx)(v,{})})})});Object(n.render)(Object(a.jsx)(N,{}),document.querySelector("#entry"))}},[[35,1,2]]]);
//# sourceMappingURL=main.12fd5e53.chunk.js.map