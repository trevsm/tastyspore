"use strict";(self.webpackChunktastyspore=self.webpackChunktastyspore||[]).push([[268],{8695:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.color,n=e.width;return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 128 128",fill:t},r.createElement("path",{fillRule:"evenodd",d:"M30.371 58.25L86.324 2.297c3.258-3.066 8.238-3.066 11.305 0s3.066 8.047 0 11.305L47.234 63.997l50.395 50.395c3.066 3.066 3.066 8.238 0 11.305-3.066 3.066-8.047 3.066-11.305 0L30.371 69.552c-3.066-3.066-3.066-8.047 0-11.305z"}))}},3747:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(7294),a=n(5444),l=n(9555),i=n(6125);var c=function(e){var t=e.color,n=e.width;return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"300 300 600 600"},r.createElement("path",{fill:t,d:"M822 600c0 122.61-99.395 222-222 222s-222-99.395-222-222 99.395-222 222-222 222 99.395 222 222zm-408 0c0 102.73 83.273 186 186 186s186-83.273 186-186-83.273-186-186-186-186 83.273-186 186zm211.46 0l59.27 59.273c7.031 7.027 7.031 18.426 0 25.453-7.027 7.031-18.426 7.031-25.453 0l-59.273-59.27-59.273 59.27c-7.027 7.031-18.426 7.031-25.453 0-7.031-7.027-7.031-18.426 0-25.453L574.548 600l-59.27-59.273c-7.031-7.027-7.031-18.426 0-25.453 7.027-7.031 18.426-7.031 25.453 0l59.273 59.27 59.273-59.27c7.027-7.031 18.426-7.031 25.453 0 7.031 7.027 7.031 18.426 0 25.453z"}))};function o(e){var t=e.item,n=e.removeItem;return r.createElement("div",{className:"item"},r.createElement("div",{className:"flex"},r.createElement(a.Link,{to:"/"+t.id},r.createElement(i.G,{image:(0,i.d)(t.image),alt:t.title})),r.createElement("div",{className:"info"},r.createElement("h2",null,t.title),r.createElement("p",{className:"price"},"$",t.price.msrp),r.createElement("div",{className:"quantity"},"Quantity: ",t.quantity),r.createElement("p",{className:"size"},t.size[0]," : ",t.weight,"lbs"),r.createElement("button",{className:"delete",onClick:function(){n(t.id,t.size)}},r.createElement(c,{color:"#f36766",width:30})))))}var s=n(8695),m=n(3796),u=n(330),h=n(9487);function d(e){var t=e.data,n=(0,h._)("my_cart",null),i=n[0],c=n[1],d=[];i&&i.length&&i.forEach((function(e){var n=e.id,r=e.size,a=e.quantity;t.allMdx.edges.forEach((function(e){var t=e.node.frontmatter;t.id==n&&t.inventory.forEach((function(e){e.size==r&&d.push({id:n,title:t.title,size:e.size,quantity:a,price:{msrp:e.price.msrp},image:t.logo.source.childImageSharp,weight:e.weight})}))}))}));var p,f,E,v=d?d.map((function(e){return e.quantity*e.price.msrp})).reduce((function(e,t){return e+t}),0):0,w=+(.16*v).toFixed(2),g=(w+v).toFixed(2),k=function(e,t){c((function(n){return n.filter((function(n){return n.id+n.size!==e+t}))}))};return r.createElement(u.T,null,r.createElement(l.Z,{title:"Delicious Mushrooms & Tasty Recipes! | TastySpore",description:"Our Mushrooms grow kits are the best kits available for growing mushrooms indoors. With a 100% guarantee, we know you will love our mushrooms as much as we do.",keywords:["mushroom","mushroom growing kit","mushroom drawing","mushroom menu","lion's mane mushroom","shiitake mushroom","enoki mushroom","reishi mushroom"]}),r.createElement("div",null,r.createElement("div",{className:"cart-tab"},r.createElement("button",{className:"back-button",onClick:function(){return(0,a.navigate)(-1)}},r.createElement(s.Z,{color:"#3e3e3e",width:20})),r.createElement("h3",{className:"cart"},"My Cart"),r.createElement("section",null,d&&d.length?d.map((function(e,t){return r.createElement(o,{item:e,removeItem:k,key:t})})):r.createElement("div",{className:"no-items"},r.createElement(m.Z,{color:"#dddddd",width:150}),r.createElement("p",null,"No Items In Cart"))),i&&i.length&&r.createElement("div",{className:"nav"},r.createElement("p",{className:"sub"},"Sub total: ",r.createElement("span",null,"$",v)),r.createElement("p",{className:"sub"},"Tax: ",r.createElement("span",null,"$",(f=(p=w+"").split(".")[1],E=f&&f.length>2?f.length:2,Number(p).toFixed(E)))),r.createElement("p",{className:"price"},"Total: ",r.createElement("span",null,"$",g)),r.createElement("button",{onClick:function(){alert("Thank you for your interest! Orders are currently disabled until we officially launch. Check back here soon for updates!")}},"Continue to shipping")))))}}}]);
//# sourceMappingURL=component---src-pages-my-cart-tsx-10cca19fff76ecab9b54.js.map