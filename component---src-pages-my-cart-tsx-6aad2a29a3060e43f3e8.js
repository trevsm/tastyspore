"use strict";(self.webpackChunktastyspore=self.webpackChunktastyspore||[]).push([[268],{1e3:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.color,a=e.width;return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 32 32",width:a,height:a},n.createElement("path",{fill:t,d:"M23 28h-2a3.003 3.003 0 01-3-3v-2a1.001 1.001 0 00-1-1h-2a1.001 1.001 0 00-1 1v2a3.003 3.003 0 01-3 3H9a3.003 3.003 0 01-3-3v-8.022a2.981 2.981 0 011.158-2.368l8.228-6.4a1.001 1.001 0 011.228 0l8.228 6.4A2.982 2.982 0 0126 16.978V25a3.003 3.003 0 01-3 3zm-8-8h2a3.003 3.003 0 013 3v2a1.001 1.001 0 001 1h2a1.001 1.001 0 001-1v-8.022a.994.994 0 00-.386-.79L16 10.268l-7.614 5.921a.993.993 0 00-.386.789V25a1.001 1.001 0 001 1h2a1.001 1.001 0 001-1v-2a3.003 3.003 0 013-3zm14.608-5.794L17.772 5.143a3.001 3.001 0 00-3.661.01L2.423 14.21a1 1 0 001.225 1.582l11.688-9.057a1.002 1.002 0 011.22-.004l11.836 9.064a1 1 0 001.216-1.588z"}))}},3747:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),r=a(9555),l=a(6125);var i=function(e){var t=e.color,a=e.width;return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"300 300 600 600"},n.createElement("path",{fill:t,d:"M822 600c0 122.61-99.395 222-222 222s-222-99.395-222-222 99.395-222 222-222 222 99.395 222 222zm-408 0c0 102.73 83.273 186 186 186s186-83.273 186-186-83.273-186-186-186-186 83.273-186 186zm211.46 0l59.27 59.273c7.031 7.027 7.031 18.426 0 25.453-7.027 7.031-18.426 7.031-25.453 0l-59.273-59.27-59.273 59.27c-7.027 7.031-18.426 7.031-25.453 0-7.031-7.027-7.031-18.426 0-25.453L574.548 600l-59.27-59.273c-7.031-7.027-7.031-18.426 0-25.453 7.027-7.031 18.426-7.031 25.453 0l59.273 59.27 59.273-59.27c7.027-7.031 18.426-7.031 25.453 0 7.031 7.027 7.031 18.426 0 25.453z"}))},c=a(8917);function o(e){var t=e.item,a=e.removeItem;return n.createElement("div",{className:"item"},n.createElement("div",{className:"flex"},n.createElement(c.Z,{paintDrip:!0,hex:t.accent_color,to:"/"+t.id},n.createElement(l.G,{image:(0,l.d)(t.image),alt:t.title})),n.createElement("div",{className:"info"},n.createElement("h2",null,t.title),n.createElement("p",{className:"price"},"$",t.price.msrp),n.createElement("div",{className:"quantity"},"Quantity: ",t.quantity),n.createElement("p",{className:"size"},t.size[0]," : ",t.weight,"lbs"),n.createElement("button",{className:"delete",onClick:function(){a(t.id,t.size)}},n.createElement(i,{color:"#f36766",width:30})))))}var s=a(1e3),m=a(3796),u=a(330),h=a(9487);function d(e){var t=e.data,a=(0,h._)("my_cart",null),l=a[0],i=a[1],d=[];l&&l.length&&l.forEach((function(e){var a=e.id,n=e.size,r=e.quantity;t.allMdx.edges.forEach((function(e){var t=e.node.frontmatter;t.id==a&&t.inventory.forEach((function(e){e.size==n&&d.push({id:a,title:t.title,size:e.size,quantity:r,price:{msrp:e.price.msrp},image:t.logo.source.childImageSharp,weight:e.weight,accent_color:t.accent_color})}))}))}));var p,f,E,v=d?d.map((function(e){return e.quantity*e.price.msrp})).reduce((function(e,t){return e+t}),0):0,w=+(.16*v).toFixed(2),g=(w+v).toFixed(2),y=function(e,t){i((function(a){return a.filter((function(a){return a.id+a.size!==e+t}))}))};return n.createElement(u.T,null,n.createElement(r.Z,{title:"Delicious Mushrooms & Tasty Recipes! | TastySpore",description:"Our Mushrooms grow kits are the best kits available for growing mushrooms indoors. With a 100% guarantee, we know you will love our mushrooms as much as we do.",keywords:["mushroom","mushroom growing kit","mushroom drawing","mushroom menu","lion's mane mushroom","shiitake mushroom","enoki mushroom","reishi mushroom"]}),n.createElement("div",null,n.createElement("div",{className:"cart-tab"},n.createElement(c.Z,{paintDrip:!0,hex:"#fff0e4",to:"/",className:"back-button"},n.createElement(s.Z,{color:"#3e3e3e",width:40})),n.createElement("h3",{className:"cart"},"My Cart"),n.createElement("section",null,d&&d.length?d.map((function(e,t){return n.createElement(o,{item:e,removeItem:y,key:t})})):n.createElement("div",{className:"no-items"},n.createElement(m.Z,{color:"#dddddd",width:150}),n.createElement("p",null,"No Items In Cart"))),l&&l.length&&n.createElement("div",{className:"nav"},n.createElement("p",{className:"sub"},"Sub total: ",n.createElement("span",null,"$",v)),n.createElement("p",{className:"sub"},"Tax: ",n.createElement("span",null,"$",(f=(p=w+"").split(".")[1],E=f&&f.length>2?f.length:2,Number(p).toFixed(E)))),n.createElement("p",{className:"price"},"Total: ",n.createElement("span",null,"$",g)),n.createElement("button",{onClick:function(){alert("Thank you for your interest! Orders are currently disabled until we officially launch. Check back here soon for updates!")}},"Continue to shipping")))))}}}]);
//# sourceMappingURL=component---src-pages-my-cart-tsx-6aad2a29a3060e43f3e8.js.map