(this["webpackJsonppomodoro-react"]=this["webpackJsonppomodoro-react"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(5),r=c.n(n),i=(c(11),c(12),c(0)),s=function(e){var t=e.title,c=e.activeClass,a=e._callback;return Object(i.jsx)("button",{className:c,onClick:a,children:t})},o=c(6),l=c(2),u=c(3),b=Object(a.createContext)();var j=function(e){var t=Object(a.useState)(0),c=Object(u.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)({}),o=Object(u.a)(s,2),j=o[0],d=o[1],m=Object(a.useState)(!1),O=Object(u.a)(m,2),v=O[0],h=O[1],f=function(e){d(e),p(e)},p=function(e){switch(e.active){case"work":r(e.work);break;case"short":r(e.short);break;case"long":r(e.long);break;default:r(0)}};return Object(i.jsx)(b.Provider,{value:{pomodoro:n,executing:j,updateExecute:f,startAnimate:v,startTimer:function(){h(!0)},pauseTimer:function(){h(!1)},children:function(e){var t=e.remainingTime,c=Math.floor(t/60),a=t%60;return a<10?"".concat(c,":0").concat(a):"".concat(c,":").concat(a)},SettingsBtn:function(){d({}),r(0)},setCurrentTimer:function(e){f(Object(l.a)(Object(l.a)({},j),{},{active:e})),p(j)},stopAnimate:function(){h(!1)}},children:e.children})},d=function(e){var t=e.key,c=e.timer,n=e.animate,r=e.children,s=Object(a.useContext)(b).stopAnimate;return Object(i.jsx)(o.CountdownCircleTimer,{isPlaying:n,duration:60*c,colors:[["#00ffbf",.33],["#00ffbf",.33],["#00ffbf",.33]],strokeWidth:6,size:305,trailColor:"#ccc",onComplete:function(){s()},children:r},t)},m=function(){var e=Object(a.useState)({work:30,short:5,long:15,active:"work"}),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(a.useContext)(b).updateExecute,s=function(e){var t=e.target,a=t.name,r=t.value;switch(a){case"work":n(Object(l.a)(Object(l.a)({},c),{},{work:parseInt(r)}));break;case"shortBreak":n(Object(l.a)(Object(l.a)({},c),{},{short:parseInt(r)}));break;case"longBreak":n(Object(l.a)(Object(l.a)({},c),{},{long:parseInt(r)}))}};return Object(i.jsx)("div",{className:"form-container",children:Object(i.jsxs)("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),r(c)},children:[Object(i.jsxs)("div",{className:"input-wrapper",children:[Object(i.jsx)("input",{className:"input",type:"number",name:"work",onChange:s,value:c.work}),Object(i.jsx)("input",{className:"input",type:"number",name:"shortBreak",onChange:s,value:c.short}),Object(i.jsx)("input",{className:"input",type:"number",name:"longBreak",onChange:s,value:c.long})]}),Object(i.jsx)("button",{type:"submit",children:"Pomodoro"})]})})},O=function(){var e=Object(a.useContext)(b),t=e.pomodoro,c=e.executing,n=e.startAnimate,r=e.children,o=e.startTimer,l=e.pauseTimer,u=e.updateExecute,j=e.setCurrentTimer,O=e.SettingsBtn;return Object(a.useEffect)((function(){u(c)}),[c,n]),Object(i.jsx)("div",{className:"container",children:0!==t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("ul",{className:"labels",children:[Object(i.jsx)("li",{children:Object(i.jsx)(s,{title:"Work",activeClass:"work"===c.active?"active-label":void 0,_callback:function(){return j("work")}})}),Object(i.jsx)("li",{children:Object(i.jsx)(s,{title:"Short",activeClass:"short"===c.active?"active-label":void 0,_callback:function(){return j("short")}})}),Object(i.jsx)("li",{children:Object(i.jsx)(s,{title:"Long",activeClass:"long"===c.active?"active-label":void 0,_callback:function(){return j("long")}})})]}),Object(i.jsx)(s,{title:"Intervals",_callback:O}),Object(i.jsx)("div",{className:"timer-container",children:Object(i.jsx)("div",{className:"time-wrapper",children:Object(i.jsx)(d,{timer:t,animate:n,children:r},t)})}),Object(i.jsxs)("div",{className:"button-wrapper",children:[Object(i.jsx)(s,{title:"Start",activeClass:n?void 0:"active",_callback:o}),Object(i.jsx)(s,{title:"Pause",activeClass:n?"active":void 0,_callback:l})]})]}):Object(i.jsx)(m,{})})};r.a.render(Object(i.jsx)(j,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4441c00d.chunk.js.map