(function(){"use strict";var n={9700:function(n,t,r){var e=r(5130),o=r(6768);const c={class:"main-wrapper"},i={class:"second-wrapper"};function a(n,t,r,e,a,s){const u=(0,o.g2)("mobile-phones"),l=(0,o.g2)("last-items");return(0,o.uX)(),(0,o.CE)("div",c,[(0,o.Lk)("div",i,[t[0]||(t[0]=(0,o.Lk)("div",{class:"left"},[(0,o.Lk)("h1",null,"Списки порівнянь")],-1)),(0,o.bF)(u),t[1]||(t[1]=(0,o.Lk)("div",{class:"left"},[(0,o.Lk)("h2",null,"Останні переглянуті товари")],-1)),(0,o.bF)(l)])])}var s=r(4232);const u={class:"main-container"},l={class:"title-container"},p={class:"phone-container"};function d(n,t,r,e,c,i){const a=(0,o.g2)("phone-card");return(0,o.uX)(),(0,o.CE)("div",u,[(0,o.Lk)("div",l,[t[0]||(t[0]=(0,o.Lk)("h3",null,"Мобільні телефони",-1)),(0,o.Lk)("p",null,"Кількість товарів: "+(0,s.v_)(c.phonesArr.length),1)]),(0,o.Lk)("div",p,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(c.phonesArr,(n=>((0,o.uX)(),(0,o.Wv)(a,{key:n.id,phones:n},null,8,["phones"])))),128))])])}const f={class:"phone"},v=["src"];function k(n,t,r,e,c,i){return(0,o.uX)(),(0,o.CE)("div",f,[(0,o.Lk)("img",{src:r.phones.src,alt:"Smartphone"},null,8,v)])}var h={name:"PhoneCard",props:{phones:{type:Object,default:()=>({})}}},m=r(1241);const g=(0,m.A)(h,[["render",k],["__scopeId","data-v-1899ffac"]]);var b=g;const _=[{id:1,src:r(6717)},{id:2,src:r(7458)},{id:3,src:r(127)}],L=[{id:1,src:r(6288),title:"Телевізор Samsung OLED QE83S90DAEXUA",availability:!0,price:"189 999 ₴"},{id:2,src:r(639),title:'Ноутбук Apple MacBook Air 13" M1 8/256GB 2020 (MGN63) Space Gray',availability:!0,price:"36 999 ₴"},{id:3,src:r(8930),title:'Монітор 25" Samsung Odyssey G4 S25BG40 (LS25BG400EIXCI) IPS Full HD',availability:!1,price:"8 699 ₴"}];var y={name:"MobilePhones",components:{PhoneCard:b},data(){return{phonesArr:_}}};const C=(0,m.A)(y,[["render",d],["__scopeId","data-v-00b9f225"]]);var E=C;const O={class:"product-wrapper"};function j(n,t,r,e,c,i){const a=(0,o.g2)("product-item");return(0,o.uX)(),(0,o.CE)("div",O,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(c.products,(n=>((0,o.uX)(),(0,o.Wv)(a,{key:n.id,product:n},null,8,["product"])))),128))])}const I={class:"product"},A={class:"product__main"},X={class:"product__icon"},w={class:"product__image"},x=["src"],P={class:"product__title"},S={class:"product__available"},F={key:0,class:"green"},G={key:1},M={class:"product__price"};function B(n,t,r,e,c,i){return(0,o.uX)(),(0,o.CE)("div",I,[(0,o.Lk)("div",A,[(0,o.Lk)("div",X,[(0,o.Lk)("a",{class:(0,s.C4)(["icon-heart",i.likedHeart]),onClick:t[0]||(t[0]=(...n)=>i.like&&i.like(...n))},null,2)]),(0,o.Lk)("div",w,[(0,o.Lk)("img",{src:r.product.src,alt:"Image"},null,8,x)]),(0,o.Lk)("div",P,[(0,o.Lk)("h4",null,(0,s.v_)(r.product.title),1)])]),(0,o.Lk)("div",S,[r.product.availability?((0,o.uX)(),(0,o.CE)("p",F,"Є в наявності")):((0,o.uX)(),(0,o.CE)("p",G,"Немає в наявності"))]),(0,o.Lk)("div",M,[(0,o.Lk)("p",null,(0,s.v_)(r.product.price),1)]),t[1]||(t[1]=(0,o.Lk)("div",{class:"product__icon"},[(0,o.Lk)("a",{class:"icon-cart green"})],-1))])}var D={name:"ProductItem",props:{product:{type:Object,default:()=>({})}},data(){return{liked:!1}},methods:{like(){this.liked=!this.liked}},computed:{likedHeart(){let n;return this.liked&&(n="gold"),n}}};const H=(0,m.A)(D,[["render",B],["__scopeId","data-v-4ea90fef"]]);var K=H,T={name:"LastItems",components:{ProductItem:K},data(){return{products:L}}};const W=(0,m.A)(T,[["render",j],["__scopeId","data-v-d7663888"]]);var N=W,Q={name:"App",components:{MobilePhones:E,LastItems:N}};const U=(0,m.A)(Q,[["render",a]]);var q=U;(0,e.Ef)(q).mount("#app")},6717:function(n,t,r){n.exports=r.p+"/test/img/01.507fea74.jpg"},7458:function(n,t,r){n.exports=r.p+"/test/img/02.f470a31c.jpg"},127:function(n,t,r){n.exports=r.p+"/test/img/03.d4ff3900.jpg"},6288:function(n,t,r){n.exports=r.p+"/test/img/01.d7ac420f.jpg"},639:function(n,t,r){n.exports=r.p+"/test/img/02.19c1b7bb.jpg"},8930:function(n,t,r){n.exports=r.p+"/test/img/03.5024e100.jpg"}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var c=t[e]={exports:{}};return n[e].call(c.exports,c,c.exports,r),c.exports}r.m=n,function(){var n=[];r.O=function(t,e,o,c){if(!e){var i=1/0;for(l=0;l<n.length;l++){e=n[l][0],o=n[l][1],c=n[l][2];for(var a=!0,s=0;s<e.length;s++)(!1&c||i>=c)&&Object.keys(r.O).every((function(n){return r.O[n](e[s])}))?e.splice(s--,1):(a=!1,c<i&&(i=c));if(a){n.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}c=c||0;for(var l=n.length;l>0&&n[l-1][2]>c;l--)n[l]=n[l-1];n[l]=[e,o,c]}}(),function(){r.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(t,{a:t}),t}}(),function(){r.d=function(n,t){for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){r.p="/"}(),function(){var n={524:0};r.O.j=function(t){return 0===n[t]};var t=function(t,e){var o,c,i=e[0],a=e[1],s=e[2],u=0;if(i.some((function(t){return 0!==n[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(s)var l=s(r)}for(t&&t(e);u<i.length;u++)c=i[u],r.o(n,c)&&n[c]&&n[c][0](),n[c]=0;return r.O(l)},e=self["webpackChunktask_2"]=self["webpackChunktask_2"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=r.O(void 0,[504],(function(){return r(9700)}));e=r.O(e)})();
//# sourceMappingURL=app.c9c17489.js.map
