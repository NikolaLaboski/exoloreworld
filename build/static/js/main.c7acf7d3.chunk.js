(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{17:function(e,a,t){e.exports=t(35)},22:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(14),r=t.n(c),s=t(12),i=(t(22),t(2)),o=["btn--primary","btn--outline","btn--test"],m=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=e.onClick,c=e.buttonStyle,r=e.buttonSize,s=o.includes(c)?c:o[0],u=m.includes(r)?r:m[0];return l.a.createElement(i.b,{to:"/sign-up",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(s," ").concat(u),onClick:n,type:t},a))};t(31);var E=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!0),o=Object(s.a)(r,2),m=o[0],E=o[1],b=function(){return c(!1)},d=function(){window.innerWidth<=960?E(!1):E(!0)};return Object(n.useEffect)((function(){d()}),[]),window.addEventListener("resize",d),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(i.b,{to:"/explore",className:"navbar-logo",onClick:b},"Explore",l.a.createElement("i",{class:"fas fa-globe-europe"})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/explore",className:"nav-links",onClick:b},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/services",className:"nav-links",onClick:b},"Offers")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/products",className:"nav-links",onClick:b},"Careers")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/sign-up",className:"nav-links-mobile",onClick:b},"Sign Up"))),m&&l.a.createElement(u,{buttonStyle:"btn--outline"},"SIGN UP"))))};t(8),t(32);var b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(i.b,{className:"cards__item__link",to:e.path},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var d=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Choose from our destinations"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(b,{src:"images/img9.jpg",text:"Plan your holiday in Austria with free guides and videos",label:"Adventure",path:"/services"}),l.a.createElement(b,{src:"images/img2.jpg",text:"Discover Dubai with world class tourism",label:"Luxury",path:"/services"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(b,{src:"images/img3.jpg",text:"Enjoy the fjords, mountain air, and marvel at the northern lights. ",label:"Mystery",path:"/services"}),l.a.createElement(b,{src:"images/img4.jpg",text:"Probably one of the most iconic Greek islands to visit",label:"Adventure",path:"/products"}),l.a.createElement(b,{src:"images/img8.jpg",text:"Ohrid is a tourist treasure trove just waiting to be discovered",label:"Adrenaline",path:"/sign-up"})))))};t(33);var p=function(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:"/videos/video.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,"BEAUTIFUL WORLD"),l.a.createElement("p",null,"WE ARE HERE TO HELP YOU"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(u,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"GET STARTED"),l.a.createElement(u,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"CONTACT ",l.a.createElement("i",{className:"fas fa-phone-square"}))))};t(34);var f=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Join our newsletter to receive the newest deals and offers"),l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(u,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("div",{class:"footer-logo"},l.a.createElement(i.b,{to:"/",className:"social-logo"},"EXPLORE",l.a.createElement("i",{class:"fas fa-globe-europe"}))),l.a.createElement("small",{class:"website-rights"},"EXPLORE \xa9 2020"),l.a.createElement("div",{class:"social-icons"},l.a.createElement(i.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{class:"fab fa-facebook-f"})),l.a.createElement(i.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"})),l.a.createElement(i.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{class:"fab fa-youtube"})),l.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))};var v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(d,null),l.a.createElement(f,null))},g=t(1);function N(){return l.a.createElement("h1",{className:"services"},"OFFERS")}function h(){return l.a.createElement("h1",{className:"products"},"CAREERS")}function _(){return l.a.createElement("h1",{className:"sign-up"},"LIKE & SUBSCRIBE")}var k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(E,null),l.a.createElement(g.c,null,l.a.createElement(g.a,{path:"/explore",exact:!0,component:v}),l.a.createElement(g.a,{path:"/services",component:N}),l.a.createElement(g.a,{path:"/products",component:h}),l.a.createElement(g.a,{path:"/sign-up",component:_}))))};r.a.render(l.a.createElement(k,null),document.getElementById("root"))},8:function(e,a,t){}},[[17,1,2]]]);
//# sourceMappingURL=main.c7acf7d3.chunk.js.map