(this.webpackJsonpzygote=this.webpackJsonpzygote||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){e.exports=n(206)},18:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(6),c=n.n(s),i=(n(18),n(9)),r=function(e){return e.filter((function(e){return!!e})).join(" ")},l=function(e){return""===e?"":"\n  "},u=n(7),m=n.n(u);function d(e){var t=[m.a.logo,e.className];return o.a.createElement("div",{className:r(t)},"zyg",o.a.createElement("span",{className:m.a.o}),"te")}var f=n(2),p=n(1),g=n(11),h=n.n(g),y=n(5),b=n.n(y);function v(e){var t=[b.a.toggleButton,e.className];return e.checked&&t.push(b.a.on),o.a.createElement("button",{className:r(t),onClick:e.onToggle},o.a.createElement("div",{className:b.a.knob}))}var _=n(3),j=n.n(_);function E(e){var t=e.filterId,n=e.onToggle,s=e.onChange,c=e.filterName,i=e.filterSettings,l=e.checked,u=e.settingsStates,m=Object(a.useCallback)((function(){n(t)}),[n,t]),d=Object(a.useCallback)((function(e,n){var a=Object(p.a)(Object(p.a)({},u),{},Object(f.a)({},e,n));s(t,a)}),[s,t,u]),g=[j.a.filter,e.className],h=[j.a.options];e.checked&&h.push(j.a.on);var y=i.map((function(e){var t=u[e.id];return o.a.createElement("div",{key:e.id,className:j.a.settings},o.a.createElement("p",null," ",e.name," "),o.a.createElement("input",{type:"text",value:t||e.default,onChange:function(t){d(e.id,t.target.value)}}))}));return o.a.createElement("div",{className:r(g)},o.a.createElement("div",{className:j.a.header},o.a.createElement("p",null," ",c," "),o.a.createElement(v,{checked:l,onToggle:m})),o.a.createElement("div",{className:r(h)},y))}function S(e){var t=e.filterStates,n=e.onChange,s=e.settingsStates,c=e.onSettingsChange,i=Object(a.useCallback)((function(e){var a=Object(p.a)(Object(p.a)({},t),{},Object(f.a)({},e,!t[e]));n(a)}),[t,n]),l=Object(a.useCallback)((function(e,t){var n=Object(p.a)(Object(p.a)({},s),{},Object(f.a)({},e,t));c(n)}),[s,c]),u=[h.a.filterList,e.className],m=e.filters.map((function(t){return o.a.createElement(E,{key:t.id,filterName:t.name,filterId:t.id,filterSettings:t.settings,onToggle:i,onChange:l,checked:!!e.filterStates[t.id],settingsStates:s[t.id]||{}})}));return o.a.createElement("div",{className:r(u)},m)}var k=n(8),N=n.n(k),C=n(12),x=n.n(C);function O(e){var t=e.filterStates,n=e.filters,s=e.className,c=e.settingsStates,i=n.filter((function(e){return t[e.id]})),u=i.filter((function(e){return"head"===e.location})).map((function(e){return e.content(c[e.id]||{})})).join("\n  "),m=i.filter((function(e){return"body"===e.location})).map((function(e){return e.content({})})).join("\n  "),d=l(u),f=l(m);u="".concat(d).concat(u),m="".concat(f).concat(m);var p="\n<!DOCTYPE html>\n<html>\n<head>\n  <meta charset='UTF-8'>".concat(u,"\n</head>\n<body>").concat(m,"\n</body>\n</html>"),g=Object(a.useCallback)((function(){navigator.clipboard.writeText(p)}),[p]),h=[N.a.codeBin,s];return o.a.createElement("div",{className:r(h)},o.a.createElement("button",{className:N.a.copy,title:"Copy",onClick:g},o.a.createElement("span",{className:"far fa-copy"})),o.a.createElement(x.a,{language:"html"},p))}var w=n(4),B=n.n(w),T=[{name:"Viewport",id:"viewport",content:function(e){return'<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">'},location:"head",settings:[]},{name:"Favicon",id:"favicon",content:function(e){return'<link rel="icon" type="image/'.concat(e.type||"png",'" href="').concat(e.filepath||"favicon.png",'">')},location:"head",settings:[{id:"type",name:"Type",inputType:"text",default:"png"},{id:"filepath",name:"Filepath",inputType:"text",default:"favicon.png"}]},{name:"Google Web Fonts",id:"googlefonts",content:function(e){return'<link href="https://fonts.googleapis.com/css?family=font1|font2|font3&display=swap" rel="stylesheet">'},location:"head",settings:[]},{name:"Linked CSS Stylesheet",id:"css-l",content:function(e){return'<link rel="stylesheet" href="'.concat(e.filepath||"index.css",'">')},location:"head",settings:[{id:"filepath",name:"Filepath",inputType:"string",default:"index.css"}]},{name:"Embedded CSS",id:"css-e",content:function(e){return'<style type="text/css"> \n    /* Enter your CSS here */ \n  </style>'},location:"head",settings:[]},{name:"JQuery",id:"jquery",content:function(e){return'<script src="https://code.jquery.com/jquery-3.4.1.min.js"><\/script>'},location:"head",settings:[]},{name:"Linked JavaScript",id:"js-l",content:function(e){return'<script type="text/javascript" src="'.concat(e.filepath||"index.js",'"><\/script>')},location:"head",settings:[{id:"filepath",name:"Filepath",inputType:"string",default:"index.js"}]},{name:"Embedded JavaScript",id:"js-e",content:function(e){return'<script type="text/javascript"> \n    /* Enter your JS here */ \n  <\/script>'},location:"body",settings:[]}];var F=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)({}),r=Object(i.a)(c,2),l=r[0],u=r[1];return o.a.createElement("div",null,o.a.createElement(d,{className:B.a.logo}),o.a.createElement("div",{className:B.a.main},o.a.createElement(S,{className:B.a.filterList,filters:T,filterStates:n,onChange:s,settingsStates:l,onSettingsChange:u}),o.a.createElement(O,{className:B.a.codeBin,filters:T,filterStates:n,settingsStates:l})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,n){e.exports={filter:"src-components-Filter-styles__filter--3ufKX",header:"src-components-Filter-styles__header--2eSCK",options:"src-components-Filter-styles__options--3PzCJ",on:"src-components-Filter-styles__on--2DaRH",settings:"src-components-Filter-styles__settings--19SMP"}},4:function(e,t,n){e.exports={logo:"src-styles__logo--1iXwd",main:"src-styles__main--15Nxd","filter-list":"src-styles__filter-list--1LS50",filterList:"src-styles__filter-list--1LS50","code-bin":"src-styles__code-bin--kN4dD",codeBin:"src-styles__code-bin--kN4dD"}},5:function(e,t,n){e.exports={"toggle-button":"src-components-ToggleButton-styles__toggle-button--1f5Kv",toggleButton:"src-components-ToggleButton-styles__toggle-button--1f5Kv",knob:"src-components-ToggleButton-styles__knob--3pGKy",on:"src-components-ToggleButton-styles__on--3lZlV"}},7:function(e,t,n){e.exports={logo:"src-components-Logo-styles__logo--1F9iq",o:"src-components-Logo-styles__o--52Ecf"}},8:function(e,t,n){e.exports={"code-bin":"src-components-CodeBin-styles__code-bin--cA2fx",codeBin:"src-components-CodeBin-styles__code-bin--cA2fx",copy:"src-components-CodeBin-styles__copy--3kBOF"}}},[[13,1,2]]]);
//# sourceMappingURL=main.2eea1014.chunk.js.map