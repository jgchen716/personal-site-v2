(this["webpackJsonppersonal-site-v2"]=this["webpackJsonppersonal-site-v2"]||[]).push([[0],{35:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s(2),c=s(12),a=s.n(c),l=s(8),r=(s(35),s(21)),o=s(5),j=s(3),b=(s(45),["btn--primary","btn--outline"]),d=["btn--medium","btn--large","btn--mobile","btn--wide"],h=["primary","blue","red","green"],m=function(e){var t=e.children,s=e.type,i=e.onClick,c=e.buttonStyle,a=e.buttonSize,l=e.buttonColor,r=b.includes(c)?c:b[0],o=d.includes(a)?a:d[0],j=h.includes(l)?l:null;return Object(n.jsx)("button",{className:"btn ".concat(r," ").concat(o," ").concat(j),onClick:i,type:s,children:t})},x=(s(46),s(0));var O=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),s=t[0],c=t[1],a=Object(i.useState)(!0),l=Object(r.a)(a,2),b=l[0],d=l[1],h=function(){return c(!1)},O=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(i.useEffect)((function(){O()}),[]),window.addEventListener("resize",O),Object(n.jsx)(x.b.Provider,{value:{color:"#31de79"},children:Object(n.jsx)("div",{className:"navbar",children:Object(n.jsxs)("div",{className:"navbar-container container",children:[Object(n.jsxs)(o.Link,{to:"/",className:"navbar-logo",onClick:function(){h(),o.animateScroll.scrollToTop()},children:["jonathan chen",Object(n.jsx)(j.f,{className:"navbar-icon"})]}),Object(n.jsx)("div",{className:"menu-icon",onClick:function(){return c(!s)},children:s?Object(n.jsx)(j.k,{}):Object(n.jsx)(j.a,{})}),Object(n.jsxs)("ul",{className:s?"nav-menu active":"nav-menu",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.Link,{to:"home",spy:!0,smooth:!0,offset:-70,duration:500,className:"nav-links",onClick:h,children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.Link,{to:"skills",spy:!0,smooth:!0,offset:-70,duration:500,className:"nav-links",onClick:h,children:"Skills"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.Link,{to:"experience",spy:!0,smooth:!0,offset:-70,duration:500,className:"nav-links",onClick:h,children:"Experience"})}),Object(n.jsx)("li",{className:"nav-item last",children:Object(n.jsx)(o.Link,{to:"projects",spy:!0,smooth:!0,offset:-70,duration:500,className:"nav-links",onClick:h,children:"Projects"})}),Object(n.jsx)("li",{className:"nav-btn",children:b?Object(n.jsx)(o.Link,{to:"contact",spy:!0,smooth:!0,offset:-70,duration:500,className:"btn--link",children:Object(n.jsx)(m,{buttonStyle:"btn--outline",children:"Contact"})}):Object(n.jsx)(o.Link,{to:"contact",spy:!0,smooth:!0,offset:-70,duration:500,className:"btn--link",onClick:h,children:Object(n.jsx)(m,{buttonStyle:"btn--outline",buttonSize:"btn--mobile",children:"Contact"})})})]})]})})})},u=(s(47),s(7)),g=s(28);var p=function(){var e=new Date;return Object(n.jsxs)("div",{className:"footer-container",children:[Object(n.jsxs)("section",{className:"footer-subscription",children:[Object(n.jsx)("p",{className:"footer-subscription-heading",children:"Contact Me"}),Object(n.jsxs)("div",{className:"social-icons",children:[Object(n.jsx)(u.b,{className:"social-icon-link",to:"//www.linkedin.com/in/jonathan-c-6350a7121/",target:"_blank","aria-label":"LinkedIn",children:Object(n.jsx)(j.g,{})}),Object(n.jsx)(u.b,{className:"social-icon-link",to:"//github.com/jgchen716",target:"_blank","aria-label":"GitHub",children:Object(n.jsx)(j.c,{})}),Object(n.jsx)("a",{className:"social-icon-link",href:"mailto:jgchen@sas.upenn.edu",children:Object(n.jsx)(g.a,{})})]})]}),Object(n.jsx)("section",{className:"social-media",children:Object(n.jsxs)("p",{className:"website-rights",children:["Jonathan Chen  \xa9 ",e.getFullYear()]})})]})};s(50);var v=function(e){var t=e.lightBg,s=e.topLine,i=e.lightText,c=e.lightTextDesc,a=e.headline,l=e.subtitle,r=e.descriptions,j=e.hasButton,b=e.buttonLabel,d=e.img,h=e.alt,x=e.imgStart,O=e.project;return Object(n.jsx)("div",{className:O?"project":"",children:Object(n.jsx)("div",{className:t?"home__hero-section":"home__hero-section darkBg",children:Object(n.jsx)("div",{className:O?"container project":"container",children:Object(n.jsxs)("div",{className:"row home__hero-row",style:{display:"flex",flexDirection:"start"===x?"row-reverse":"row"},children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("div",{className:"home__hero-text-wrapper",children:[Object(n.jsx)("div",{className:"top-line",children:s}),Object(n.jsx)("h1",{className:i?"heading":"heading dark",children:a}),""!==l&&Object(n.jsx)("h2",{children:l}),1===r.length?Object(n.jsx)("p",{className:c?"home__hero-subtitle":"home__hero-subtitle dark",children:r[0]}):r.map((function(e,t){return Object(n.jsx)("li",{className:"desc-item",children:e},t)})),j&&Object(n.jsx)(o.Link,{to:"contact",spy:!0,smooth:!0,offset:-70,duration:500,children:Object(n.jsx)(m,{buttonSize:"btn--wide",buttonColor:"green",children:b})})]})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("div",{className:"home__hero-img-wrapper",children:Object(n.jsx)("img",{src:d,alt:h,className:"home__hero-img"})})})]})})})})},f=s(9),N=s(29);s(51);var k=function(){return Object(n.jsx)(x.b.Provider,{value:{color:"#fff",size:64},children:Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"skills__section",children:Object(n.jsxs)("div",{className:"skills__wrapper",children:[Object(n.jsx)("h1",{className:"skills__heading",children:"Skills"}),Object(n.jsxs)("div",{className:"skills__container",children:[Object(n.jsx)(u.b,{to:"/",className:"skills__container-card",children:Object(n.jsxs)("div",{className:"pricing__container-cardInfo",children:[Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("img",{src:"images/general.svg",alt:"general",className:"card-img"})}),Object(n.jsx)("h3",{children:"General"}),Object(n.jsxs)("ul",{className:"skills__container-features",children:[Object(n.jsxs)("li",{children:[Object(n.jsx)(j.e,{size:24}),"    Java"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(j.i,{size:24}),"   Python"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(f.d,{size:24}),"    OCaml"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(f.a,{size:24}),"    C++"]})]})]})}),Object(n.jsx)(u.b,{to:"/",className:"skills__container-card",children:Object(n.jsxs)("div",{className:"pricing__container-cardInfo",children:[Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("img",{src:"images/web.svg",alt:"web",className:"card-img"})}),Object(n.jsx)("h3",{children:"Web"}),Object(n.jsxs)("ul",{className:"skills__container-features",children:[Object(n.jsxs)("li",{children:[Object(n.jsx)(j.j,{size:20}),"   React"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(j.h,{size:20}),"   Node"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(f.b,{size:20}),"     JavaScript"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(j.d,{size:20}),"   HTML"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(j.b,{size:20}),"   CSS"]})]})]})}),Object(n.jsx)(u.b,{to:"/",className:"skills__container-card",children:Object(n.jsxs)("div",{className:"pricing__container-cardInfo",children:[Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("img",{src:"images/database.svg",alt:"database",className:"card-img"})}),Object(n.jsx)("h3",{children:"Database"}),Object(n.jsxs)("ul",{className:"skills__container-features",children:[Object(n.jsxs)("li",{children:[Object(n.jsx)(f.c,{size:20}),"  MongoDB"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)(N.a,{size:20}),"  SQL"]})]})]})})]})]})})})})},_={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Welcome to My Personal Site",headline:"Hi, I'm Jonathan",subtitle:"",descriptions:["A programmer studying CS and Cognitive Science at UPenn"],hasButton:!0,buttonLabel:"Get In Touch",imgStart:"",img:"images/pro.png",alt:"Jonathan Chen"},y={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"",headline:"Experience",subtitle:"Teaching Assistant for CIS 120 @ UPenn",descriptions:["Teach coding fundamentals in Java and OCaml to over 400 students per semester","Create and update programming assignments","Lead weekly recitation of up to 25 students to review concepts and do practice problems","Answer questions and clarify course content during office hours and on Piazza"],hasButton:!1,buttonLabel:"",imgStart:"start",img:"images/penn.png",alt:"University of Pennsylvania"},S={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"",headline:"Projects",subtitle:"Keeper Web App",descriptions:["December 2020 - January 2021","Implemented a keeper app (based on Google Keep) that allows users to generate and delete personal notes","Tech: React, HTML, CSS, JS, Material-UI"],hasButton:!1,buttonLabel:"",imgStart:"",img:"images/keeper.png",alt:"University of Pennsylvania",project:!0},w={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"",headline:"",subtitle:"Secrets Web App",descriptions:["December 2020 - January 2021","Developed a secrets web app that allows users to anonymously and securely submit secrets that are persisted on a page only accessible after login","Tech: OAuth 2.0, Node, MongoDB, Mongoose, EJS, HTML, CSS"],hasButton:!1,buttonLabel:"",imgStart:"",img:"images/secrets.png",alt:"University of Pennsylvania",project:!0},L={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"",headline:"",subtitle:"Journal Web App",descriptions:["December 2020 - January 2021","Developed a personal blog app that records user-generated blog posts into a database and renders each as its own route","Tech: Node, MongoDB, Mongoose, EJS, HTML, CSS"],hasButton:!1,buttonLabel:"",imgStart:"",img:"images/journal.png",alt:"University of Pennsylvania",project:!0},T={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"",headline:"",subtitle:"Twitter Bot",descriptions:["October 2020 - November 2020","Developed a machine learning program to randomly generate tweets using Markov chains based on data gathered from pre-written tweets","Tech: Java"],hasButton:!1,buttonLabel:"",imgStart:"",img:"images/bot.svg",alt:"University of Pennsylvania",project:!0};var C=function(){return Object(n.jsxs)(u.a,{children:[Object(n.jsx)(O,{}),Object(n.jsx)("div",{id:"home",children:Object(n.jsx)(v,Object(l.a)({},_))}),Object(n.jsx)("div",{id:"skills",children:Object(n.jsx)(k,{})}),Object(n.jsx)("div",{id:"experience",children:Object(n.jsx)(v,Object(l.a)({},y))}),Object(n.jsx)("div",{id:"projects",children:Object(n.jsx)(v,Object(l.a)({},S))}),Object(n.jsx)(v,Object(l.a)({},w)),Object(n.jsx)(v,Object(l.a)({},L)),Object(n.jsx)(v,Object(l.a)({},T)),Object(n.jsx)("div",{id:"contact",children:Object(n.jsx)(p,{})})]})};a.a.render(Object(n.jsx)(C,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.100e4ea3.chunk.js.map