"use strict";(self.webpackChunktastyspore=self.webpackChunktastyspore||[]).push([[188],{2636:function(e,t,l){l.r(t),l.d(t,{default:function(){return f}});var n=l(7294),a=l(3083),r=l(5785),i=l(6125);function c(e){var t=e.data,l=null==t?void 0:t.frontmatter;return l?n.createElement("div",{className:"full-description"},n.createElement("h2",null,"Profile "),n.createElement("div",{className:"profile"},n.createElement("div",{className:"flavor"},n.createElement("h3",null,"Flavor: "),n.createElement("ul",null,l.profile.flavor.map((function(e,t){return n.createElement("li",{key:t},e)})))),n.createElement("div",{className:"texture"},n.createElement("h3",null,"Texture: "),n.createElement("ul",null,l.profile.texture.map((function(e,t){return n.createElement("li",{key:t},e)})))),n.createElement("div",{className:"aroma"},n.createElement("h3",null,"Aroma: "),n.createElement("ul",null,l.profile.aroma.map((function(e,t){return n.createElement("li",{key:t},e)})))),n.createElement("div",{className:"similar",style:{minWidth:"200px"}},n.createElement("h3",null,"Similar flavor to: "),n.createElement("ul",null,l.profile.similar.map((function(e,t){return n.createElement("li",{key:t},e)}))))),n.createElement("div",{className:"aliases"},n.createElement("h2",null,"Common Names"),n.createElement("ul",null,l.aka.map((function(e,t){return n.createElement("li",{key:t},e)})))),n.createElement("div",{className:"description"},n.createElement("h2",null,"Description"),n.createElement("p",null,l.description," They prefer ",l.grow.temp.readable," temperatures of around ",l.grow.temp.degrees.min,"°F ~",l.grow.temp.degrees.max,"°F at a humidity of ",l.grow.humidity,"% and take approximatly ",l.grow.time," ","to mature to the size of around ",l.grow.size,"in.")),n.createElement("div",{className:"benefits"},n.createElement("h2",null,"Benefits"),n.createElement("ul",null,l.benefits.map((function(e,t){return n.createElement("li",{key:t},e)})))),n.createElement("div",{className:"nutrition"},n.createElement("h2",null,"Nutrition Values"),n.createElement("i",null,"In 1 cup:"),n.createElement("ul",null,n.createElement("li",null,"calories: ",l.nutrition.calories),n.createElement("li",null,"carbs: ",l.nutrition.carbs),n.createElement("li",null,"protein: ",l.nutrition.protein),n.createElement("li",null,"fat: ",l.nutrition.fat),n.createElement("li",null,"fiber: ",l.nutrition.fiber)),n.createElement("hr",null),n.createElement("h3",null,"Vitamins"),n.createElement("ul",{className:"vitamins"},l.nutrition.vitamins.map((function(e,t){return n.createElement("li",{key:t},e.name,": ",e.value)}))))):null}function u(e){var t=e.inventory,l=e.size,a=e.setSize;return t&&l&&a?n.createElement("div",{className:"sizes"},t&&t.map((function(e,t){return n.createElement("div",{key:t,className:(null==e?void 0:e.size)+((null==e?void 0:e.size)==l?" selected":"")+(0==e.quantity?" out-of-stock":""),onClick:function(){a(null==e?void 0:e.size)}},n.createElement("p",{className:"size-label"},null==e?void 0:e.size),null==e?void 0:e.weight,n.createElement("span",{className:"unit"},"lbs"),0==e.quantity?n.createElement("p",{className:"out-label"},"out of stock"):n.createElement("p",{className:"price price-label"},n.createElement("span",null,"$"),e.price.msrp))}))):null}var o=l(9555),m=l(1072);function s(e){var t,l,a,s,d=e.d,E=null==d?void 0:d.mdx,f=E.frontmatter,p=(0,n.useState)("medium"),v=p[0],y=p[1],h=(0,n.useState)(1),N=h[0],b=h[1],g=(0,m._)("my_cart",null),k=(g[0],g[1]),z=null==f?void 0:f.inventory.filter((function(e){return(null==e?void 0:e.size)==v}))[0],q=z.quantity,w=null==f?void 0:f.accent_color,_={"--accentColor":w};if(null==f||!f.logo||null==f||!f.logo.source)return null;var x=(0,i.d)(null==f||null===(t=f.logo)||void 0===t||null===(l=t.source.childImageSharp)||void 0===l?void 0:l.gatsbyImageData),C=null!=z&&null!==(a=z.price)&&void 0!==a&&a.sale?z.price.sale*N:(null==z||null===(s=z.price)||void 0===s?void 0:s.msrp)*N;return(0,n.useEffect)((function(){N>z.quantity&&b(z.quantity)}),[v]),n.createElement("div",{className:"product-page",style:_},n.createElement(o.Z,{title:f.readable_class+" "+f.readable_category+" | TastySpore",description:f.description,keywords:["mushroom","mushroom growing kit","how to grow mushrooms",f.scientific_name].concat((0,r.Z)(f.aka),(0,r.Z)(f.benefits))}),n.createElement("div",{className:"content"},n.createElement("div",{className:"image"},x&&n.createElement(i.G,{image:x,alt:null==f?void 0:f.title})),n.createElement("h3",null,null==f?void 0:f.readable_category),n.createElement("h2",{style:{color:w}},null==f?void 0:f.readable_class," ",n.createElement("span",null,"(",null==f?void 0:f.scientific_name,")")),n.createElement("p",{className:"select-size-label"},"(select a size)"),n.createElement(u,{inventory:f.inventory,size:v,setSize:y}),n.createElement("hr",null),n.createElement(c,{data:E}),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null)),n.createElement("div",{className:"bottom content"},n.createElement("p",{className:"price",style:{color:w}},n.createElement("span",null,"$"),C),function(e,t,l){return n.createElement("div",{className:"quantity-and-price"},n.createElement("div",{className:"quantity"},n.createElement("button",{className:"add",onClick:function(){e((function(e){return e<t?e+1:t}))}},"+"),n.createElement("span",{className:"num"},l),n.createElement("button",{className:"minus",onClick:function(){e((function(e){return e>1?e-1:1}))}},"-")))}(b,q,N),n.createElement("button",{className:"buy"+(0==z.quantity?" out-of-stock":""),style:{backgroundColor:w},onClick:function(){!function(e,t,l){k((function(n){if(console.log(n),null==n)return[{id:e,size:t,quantity:l}];var a=0;return n.filter((function(l){if(l.id+l.size!==e+t)return!0;a=l.quantity})).concat({id:e,size:t,quantity:l+a<=q?l+a:q})})),b(1)}(f.id,v,N)}},0==z.quantity?n.createElement("span",null,"No Stock"):n.createElement("span",null,"+"))))}var d=l(3870);function E(e){var t=e.d,l=null==t?void 0:t.mdx,a=(0,m._)("my_cart",null),r=a[0],i=(a[1],(0,n.useState)(!1)),c=i[0],u=i[1],o=(0,n.useRef)(null),s=(0,d.q_)({transform:c?"translateY(0%)":"translateY(-101%)",opacity:c?1:0});(0,m.OR)("local-storage",(function(){c||u(!0),clearTimeout(o.current),o.current=setTimeout((function(){u(!1)}),3e3)}));var E=0;r&&r.forEach((function(e){return E+=e.quantity}));var f=r&&r.length?r[r.length-1]:null,p=f&&l?l.frontmatter.inventory.filter((function(e){return e.size==f.size}))[0].quantity:0,v=l.frontmatter.readable_class+" "+l.frontmatter.readable_category;return r&&r.length>0&&n.createElement(d.q.div,{style:s,className:"notification-popup shadow"},n.createElement("p",null,"Added ",v," to your cart. 🎉",n.createElement("br",null),(null==f?void 0:f.quantity)==p&&n.createElement("span",{className:"max-10"},"[Max: ",null==f?void 0:f.quantity,"]")))}function f(e){var t=e.data;return n.createElement(a.T,{navigation:{cart:!0,home:!0}},n.createElement(E,{d:t}),n.createElement(s,{d:t}))}}}]);
//# sourceMappingURL=component---src-page-templates-product-template-index-tsx-f9db923c6b3a910d710d.js.map