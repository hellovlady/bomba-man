(this["webpackJsonpbomba-man"]=this["webpackJsonpbomba-man"]||[]).push([[15],{518:function(t,e,n){"use strict";n.r(e);var r,o=n(9),i=n(80),a=n(34),c=n(8),u=n(60),s=n(549),l=n(201),d=n(200),f=n(545),b=n(656),j=n(591),p=n(29),v=n(548),O=n(202),m=n(44),g=n(40),h=n(573),y=n(2),x=n(6),k=function(t){return Object(x.jsx)(d.a,Object(c.a)({icon:l.i},t))},w=Object(p.d)(j.a)(r||(r=Object(a.a)(["\n\tborder: 2px solid;\n\tborder-radius: 4px;\n\tpadding: 10px;\n\tfont-weight: bold;\n\theight: 45px;\n\ttransition: 0.3s;\n\n\t","\n"])),(function(t){var e=t.$length,n=t.$size,r=t.$isPressed;return"\n\t\t\theight: ".concat(n,"px;\n\t\t\twidth: ").concat(n*e,"px;\n\t\t\t").concat(r?"\n\t\t\t\t\t\tbackground: white;\n\t\t\t\t\t\tcolor: ".concat(m.b.palette.background.primary,";\n\t\t\t\t\t\tborder: 2px dashed ").concat(m.b.palette.background.primary,";\n\t\t\t\t"):"","\n\t\t")})),I=function(t){var e=t.children,n=t.size,r=void 0===n?45:n,o=t.length,i=void 0===o?1:o,a=t.isPressed;return Object(x.jsx)(w,{$length:i,$size:r,$isPressed:a,children:e})},A=function(t){var e=t.keyboardConfig,n=e.DropBomb,r=e.MoveDown,a=e.MoveLeft,u=e.MoveRight,s=e.MoveUp,l=n.label.length>1?3:1,d=Object(y.useState)({}),f=Object(i.a)(d,2),j=f[0],p=f[1];return Object(h.b)({onKeyDown:function(t){p((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(o.a)({},t,!0))}))},onKeyUp:function(t){p((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(o.a)({},t,!1))}))}}),Object(x.jsxs)(b.a,{container:!0,children:[Object(x.jsxs)(b.a,{container:!0,style:{width:135},children:[Object(x.jsx)(b.a,{container:!0,item:!0,xs:12,justify:"center",children:Object(x.jsx)(I,{isPressed:j[s.keyCode],children:s.label})}),Object(x.jsx)(b.a,{container:!0,item:!0,xs:12,children:[a,r,u].map((function(t){var e=t.label,n=t.keyCode;return Object(x.jsx)(I,{isPressed:j[n],children:e},e)}))})]}),Object(x.jsx)(b.a,{style:{width:10}}),Object(x.jsx)(b.a,{container:!0,style:{width:135},justify:"center",alignItems:"flex-end",children:Object(x.jsx)(I,{isPressed:j[n.keyCode],length:l,children:n.label})})]})},C=function(t){var e=t.keyboardConfig,n=t.playerId,r=t.side,o="left"===(void 0===r?"left":r),i=Number(n.replace("P",""))-1;return Object(x.jsxs)(b.a,{container:!0,xs:12,justify:"center",children:[Object(x.jsx)(b.a,Object(c.a)(Object(c.a)({item:!0},!o&&{style:{order:3}}),{},{children:Object(x.jsx)(v.a,{size:80,name:n,id:n,showName:!0,isWalking:!0,isNPC:!1,keyboardConfig:{0:u.a.keyboardConfig[i]}})})),Object(x.jsx)(b.a,{item:!0,children:Object(x.jsx)(A,{keyboardConfig:e})})]})};e.default=function(){return Object(x.jsxs)(s.a,{style:{overflow:"hidden"},children:[Object(x.jsxs)(b.a,{container:!0,justify:"center",alignItems:"center",children:[Object(x.jsx)(k,{size:"3x"})," \xa0\xa0",Object(x.jsx)(f.a,{children:" Instructions "}),Object(x.jsx)(f.b,{style:{width:"100%"},children:"NOTE: In an online game, you can use both setup"}),Object(x.jsx)(f.b,{style:{width:"100%"},children:"NOTE2: You can test the keys on this screen :)"})]}),Object(x.jsx)(O.a,{spacing:"10"}),Object(x.jsx)(C,{playerId:"P1",keyboardConfig:{MoveUp:{label:"W",keyCode:g.j},MoveRight:{label:"D",keyCode:g.b},MoveDown:{label:"S",keyCode:g.f},MoveLeft:{label:"A",keyCode:g.a},DropBomb:{label:"Space",keyCode:g.h}}}),Object(x.jsx)(O.a,{spacing:"10"}),Object(x.jsx)(C,{playerId:"P2",keyboardConfig:{MoveUp:{label:"\u2191",keyCode:g.i},MoveRight:{label:"\u2192",keyCode:g.e},MoveDown:{label:" \u2193",keyCode:g.c},MoveLeft:{label:"\u2190",keyCode:g.d},DropBomb:{label:";",keyCode:g.g}},side:"right"})]})}},543:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return u}));var r,o,i=n(34),a=n(29),c=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(a.e)(r||(r=Object(i.a)(["\n\t0% { transform: scale(0, 0); }\n\t25% { transform: scale(0.9, 1.1); }\n\t50% { transform: scale(1.1, 0.9); }\n\t75% { transform: scale(0.95, 1.05); }\n\t100% { transform: scale(1, 1); "," }\n"])),t?"opacity: 1;":"")},u=function(t,e){return Object(a.e)(o||(o=Object(i.a)(["\n\t0%, 100% { \n\t\ttransform: translateY(0px); \n\t\tbox-shadow: 0 10px 10px #000000;\n\t}\n\t50% {\n\t\ttransform: translateY(-10px);\n\t\tbox-shadow: 0 20px ","px ",";\n\t}\n"])),Math.ceil(t/6)+10,e)}},544:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(e){setTimeout(e,t)}))},o=function(t){return function(e){e.currentTarget.blur(),t(e)}},i=function(t){return null===t||void 0===t},a=function(t,e){return Object.keys(t)[Object.values(t).indexOf(e)]}},547:function(t,e,n){"use strict";var r,o,i=n(34),a=n(543),c=n(29),u=c.d.div(r||(r=Object(i.a)(["\n\tposition: absolute;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\topacity: 0;\n\tsvg {\n\t\theight: 100% !important;\n\t\twidth: 100% !important;\n\t\tmax-width: 70%;\n\t\tmax-height: 80%;\n\t}\n\t","\n"])),(function(t){var e=t.$size,n=t.$animationDelay,r=t.$top,u=t.$left;return Object(c.c)(o||(o=Object(i.a)(["\n\t\ttop: ","px;\n\t\tleft: ","px;\n\t\twidth: ","px;\n\t\theight: ","px;\n\t\tanimation: "," var(--block-animation-duration)\n\t\t\t"," ease-out forwards;\n\t"])),r,u,e,e,Object(a.a)(!0),n||"")}));e.a=u},548:function(t,e,n){"use strict";n.d(e,"g",(function(){return b})),n.d(e,"b",(function(){return j})),n.d(e,"f",(function(){return p})),n.d(e,"c",(function(){return v})),n.d(e,"i",(function(){return O})),n.d(e,"j",(function(){return m})),n.d(e,"h",(function(){return g})),n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return x})),n.d(e,"k",(function(){return w})),n.d(e,"e",(function(){return k}));var r,o=n(65),i=n(34),a=n(8),c=n(201),u=n(200),s=(n(551),n(554)),l=n(29),d=n(561),f=n(6),b=function(t){return Object(f.jsx)(u.a,Object(a.a)({icon:c.e},t))},j=function(t){return Object(f.jsx)(u.a,Object(a.a)({icon:c.c},t))},p=function(t){return Object(f.jsx)(u.a,Object(a.a)({icon:c.n},t))},v=function(t){return Object(f.jsx)(u.a,Object(a.a)({icon:c.d},t))},O=function(t){return Object(f.jsx)(u.a,Object(a.a)({icon:c.m},t))},m=function(t){return Object(f.jsx)(u.a,Object(a.a)({icon:c.o},t))},g=function(t){return Object(f.jsx)(u.a,Object(a.a)({icon:c.k},t))},h=function(t){return Object(f.jsx)(u.a,Object(a.a)({icon:c.f},t))},y=l.d.div(r||(r=Object(i.a)(["\n\tposition: relative;\n\tpointer-events: none;\n\tmin-width: 50px;\n\n\t","\n\n\t","\n"])),(function(t){var e=t.$showName,n=t.$color;return"\n\t\t\t.name {\n\t\t\t\t".concat(e?"":"display: none;","\n\t\t\t\t").concat(n?"background-color: ".concat(n," !important;"):"","\n\t\t\t\t\n\t\t\t}\n\t\t")}),(function(t){var e=t.$size;return"\n\t\t\twidth: ".concat(e,"px;\n\t\t\theight: ").concat(e,"px;\n\n\t\t\t> div {\n\t\t\t\t/* Gotta override as char is taking coordinates by default */\n\t\t\t\ttop: ").concat(e/2,"px !important;\n\t\t\t\tleft: calc(50% - ").concat(e,"px / 2) !important;\n\t\t\t}\n\t\t")})),x=function(t){var e=t.size,n=t.showName,r=void 0!==n&&n,i=t.color,c=Object(o.a)(t,["size","showName","color"]);return Object(f.jsx)(y,{$size:e,$showName:r,$color:i,children:Object(f.jsx)(s.a,Object(a.a)({coordinates:{top:0,left:0},id:"P1",name:"Bomba-man",isNPC:!0,size:e},c))})},k={fontSize:40,width:50},w=Object(d.a)(k)},551:function(t,e,n){"use strict";var r=n(8),o=n(200),i=n(201),a=n(44),c=n(2),u=n(547),s=n(6),l=function(t){return Object(s.jsx)(o.a,Object(r.a)({icon:i.b},t))};e.a=function(t){var e=t.id,n=t.size,r=t.explodingDuration,o=t.coordinates,i=o.top,d=o.left,f=t.onDeathAnimationComplete;return Object(c.useEffect)((function(){setTimeout((function(){null===f||void 0===f||f(e)}),1e3*r+1e3)}),[]),Object(s.jsx)(u.a,{$top:i,$left:d,$size:n,$animationDelay:"".concat(r,"s"),children:Object(s.jsx)(l,{color:a.b.palette.color.default})})}},552:function(t,e,n){},553:function(t,e,n){"use strict";var r,o=n(9),i=n(8),a=n(200),c=n(201),u=n(4),s=n(44),l=n(6),d=(r={},Object(o.a)(r,u.j.Life,{color:s.b.palette.color.success,icon:function(t){return Object(l.jsx)(a.a,Object(i.a)({icon:c.g},t))}}),Object(o.a)(r,u.j.BombCount,{color:s.b.palette.color.error,icon:function(t){return Object(l.jsx)(a.a,Object(i.a)({icon:c.a},t))}}),Object(o.a)(r,u.j.BombSize,{color:s.b.palette.color.warning,icon:function(t){return Object(l.jsx)(a.a,Object(i.a)({icon:c.j},t))}}),Object(o.a)(r,u.j.MovementSpeed,{color:s.b.palette.color.info,icon:function(t){return Object(l.jsx)(a.a,Object(i.a)({icon:c.l},t))}}),r);e.a=d},554:function(t,e,n){"use strict";var r,o,i=n(8),a=n(80),c=n(65),u=n(34),s=n(4),l=n(2),d=n(11),f=n(29),b=n(44),j=(n(552),n(6)),p=f.d.div(r||(r=Object(u.a)(["\n\t","\n"])),(function(t){var e=t.$size,n=t.$name,r=e/32,i=32*r,a=4*i,c=-1*r*32,s=e/4*-1,l=Math.min(-15,2.5*s),d=Math.min(30,Math.ceil(i/6)),j=Math.floor(i/10),p=Math.floor(20*n.length+i*r/10),v="\n\t\t\twidth: ".concat(i,"px;\n\t\t\theight: ").concat(i,"px;\n\t\t"),O="\n\t\t\twidth: ".concat(a,"px;\n\t\t\theight: ").concat(a,"px;\n\t\t");return Object(f.c)(o||(o=Object(u.a)(["\n\t\t\tposition: absolute;\n\t\t\tz-index: 9999;\n\t\t\t",";\n\t\t\ttransition-duration: 450ms;\n\n\t\t\t&#P1 .name {\n\t\t\t\tbackground-color: ",";\n\t\t\t}\n\t\t\t&#P2 .name {\n\t\t\t\tbackground-color: ",";\n\t\t\t}\n\t\t\t&#P3 .name {\n\t\t\t\tbackground-color: ",";\n\t\t\t}\n\t\t\t&#P4 .name {\n\t\t\t\tbackground-color: ",";\n\t\t\t}\n\n\t\t\t.character {\n\t\t\t\ttop: ","px;\n\t\t\t\ttransform: translate(","px);\n\n\t\t\t\t",";\n\t\t\t\toverflow: hidden;\n\t\t\t\tposition: relative;\n\t\t\t\t/* MOVEMENT TRANSITION */\n\t\t\t\ttransition-duration: 400ms;\n\n\t\t\t\t& .name {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\tright: 0;\n\t\t\t\t\ttop: ","px;\n\t\t\t\t\tfont-size: ","px;\n\t\t\t\t\tmax-width: ","px;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tborder: 1px dashed white;\n\t\t\t\t\tborder-radius: 9999px;\n\t\t\t\t\topacity: 1;\n\t\t\t\t\tmargin: auto;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\n\t\t\t\t& .shadow {\n\t\t\t\t\t",";\n\t\t\t\t\topacity: 0.75;\n\t\t\t\t}\n\n\t\t\t\t& .spritesheet {\n\t\t\t\t\t",";\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t}\n\n\t\t\t\t/* DIRECTION */\n\t\t\t\t&[data-facing='Right'] .spritesheet {\n\t\t\t\t\ttop: ","px;\n\t\t\t\t}\n\t\t\t\t&[data-facing='Up'] .spritesheet {\n\t\t\t\t\ttop: ","px;\n\t\t\t\t}\n\t\t\t\t&[data-facing='Left'] .spritesheet {\n\t\t\t\t\ttop: ","px;\n\t\t\t\t}\n\n\t\t\t\t&[data-walking='true'] {\n\t\t\t\t\t/* MOVEMENT ANIMATION */\n\t\t\t\t\t.spritesheet {\n\t\t\t\t\t\tanimation: walkAnimation 0.6s steps(4) infinite;\n\t\t\t\t\t}\n\n\t\t\t\t\t/* SHADOW ANIMATION */\n\t\t\t\t\t.shadow {\n\t\t\t\t\t\tanimation: shadowAnimation 0.3s infinite;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t/* HIGHLIGHT/DAMAGE ANIMATION */\n\t\t\t\t&[data-highlight='true'] .spritesheet {\n\t\t\t\t\tanimation: opacityAnimation 0.6s steps(4) infinite;\n\t\t\t\t}\n\t\t\t}\n\t\t"])),v,b.b.palette.color.warning,b.b.palette.color.info,b.b.palette.color.success,b.b.palette.color.error,l,s,v,j,d,p,v,O,1*c,2*c,3*c)})),v=function(t){var e=t.id,n=t.shouldBindEvent,r=t.keyboardConfig,o=t.onPlayerIsWalking,i=t.setDirection,a=t.setIsWalking,c=Object(l.useRef)((new Date).getTime());Object(l.useEffect)((function(){var t=function(t){if(n){var u=function(t){return r?Object(d.j)(t.code,r):null}(t);if(!u)return null===o||void 0===o||o(!1,e),void a(!1);c.current=(new Date).getTime(),a(!0),function(t){i(t)}(u)}},u=function(){n&&setTimeout((function(){var t=(new Date).getTime()-200;c.current>=t||(a(!1),null===o||void 0===o||o(!1,e))}),200)};return n&&(document.addEventListener("keydown",t),document.addEventListener("keyup",u)),function(){document.removeEventListener("keydown",t),document.removeEventListener("keyup",u)}}),[e,r,o,i,a,n])};e.a=function(t){var e=t.id,n=t.currentOnlinePlayerId,r=t.name,o=t.coordinates,u=o.top,d=o.left,f=t.style,b=t.keyboardConfig,O=t.highlight,m=t.size,g=t.onPlayerIsWalking,h=t.isWalking,y=void 0!==h&&h,x=t.direction,k=void 0===x?s.b.DOWN:x,w=t.isNPC,I=void 0!==w&&w,A=Object(c.a)(t,["id","currentOnlinePlayerId","name","coordinates","style","keyboardConfig","highlight","size","onPlayerIsWalking","isWalking","direction","isNPC"]),C=Object(l.useState)(k),N=Object(a.a)(C,2),E=N[0],M=N[1],D=Object(l.useState)(y),P=Object(a.a)(D,2),T=P[0],B=P[1],S=!I&&(!n||e===n);v({id:e,currentOnlinePlayerId:n,keyboardConfig:b,shouldBindEvent:S,onPlayerIsWalking:g,setDirection:M,setIsWalking:B});var R=y,U=k;return S&&(R=T,U=E),Object(j.jsx)(p,Object(i.a)(Object(i.a)({id:e,style:Object(i.a)(Object(i.a)({},f),{},{top:u,left:d}),className:"character-wrapper"},A),{},{$size:2*m,$name:r,children:Object(j.jsxs)("div",{className:"character","data-facing":U,"data-walking":R.toString(),"data-highlight":O,children:[Object(j.jsx)("div",{className:"name",children:r}),Object(j.jsx)("img",{className:"shadow pixel-art",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAWUlEQVRYR+3XsQkAIAxEUe2cRXADx3cDwVksJYX970T41sE7Xqrk9Pjlx/nJAgoooIACCiiggAIKKKDAXwKt9k0uqblGIXMxgwVo+A2mJSyABYKWroHyx58Hv0cUIWfm8TkAAAAASUVORK5CYII=",alt:"sprite skin"}),Object(j.jsx)("img",{className:"spritesheet pixel-art",src:"data:image/png;base64,UklGRuYBAABXRUJQVlA4TNkBAAAvf8AfEDegkI0kaB1Wc63vv4M4DQUByDA6SKk4ex2mqG0bqCCKrfwp7N5em/8A4P9XnTtjLpKQBLi1tbdt/gbqnTCAN/D5RCygH6yhQ4C1GfefQQG/fjA4FhH9Z9i2bZjkAbZdhsAn0N9Qh3Rps6Tr7enSZ9lZ1PV+6bPsLO4q4Fj1ORugiqJzAdemHQCwqMszM8vOoq4wzXNrso4rVOW6YeXnwAFDfg66i/MBl3QOm5+DDrAmX0BjNK5QAfYsOYVzJHCjcr1VjGTyTmZhrj2PUeUKvuZIeWc7iQ6TdK4URIcJSXIQyS75V0Q70f+F9g48tFcs4Nq6A4Vd69w7RGdRF4UBhmRnWZd1wlhZB3tQuabj0JFQXb4+n2pMKlfoeHgRzhW9cK7ZcyKVa2Kehcn3SWRURueqkpdcSWIEE0jv+ne4d0DeKxZw7a5jV/aO4IDByDlGSZe/VvYc1dUpu+RzNrlqa+ZxyrtOPESNyzs+5s9FtbRGUT2mUeUKdapHZe4wkzZ3oH+muYNvAMjO8q5tO7CMS7MHeJRxrSt3gHsgVzBlXYOUG3QYOtK4yLpTq8oVqMX4dFDlEh+OrVHlConjTLpcgrklARpJcDYpKl0xNco1wgRTwLUPTQA=",alt:"sprite skin"})]})}))}},561:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return b}));var r=n(39),o=n(8),i=n(4),a=n(553),c=n(544),u=n(555),s=n(562),l=n(548),d=n(6),f=function(t){return Object.values(i.j).reduce((function(e,n){var r=a.a[n],o=r.icon,i=r.color;return e[n]={icon:Object(d.jsx)(o,{style:t}),color:i},e}),{})},b=function(t,e,n){return Object.values(i.j).map((function(a){var d="".concat(Object(c.b)(i.j,a));return Object(o.a)(Object(o.a)({type:u.a.Rating,label:"".concat(d," (number)"),name:"".concat(t,".").concat(a),max:e},l.k[a]),n&&a===i.j.MovementSpeed&&{label:"".concat(d," (action interval, milliseconds)"),type:u.a.Slider,step:null,min:Math.min.apply(Math,Object(r.a)(n)),max:Math.max.apply(Math,Object(r.a)(n)),marks:Object(s.a)(n)})}))}},562:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(8);function o(t,e){if(Array.isArray(t))return t.map((function(t){return{value:t,label:t}}));var n=e-t;return Array(n+1).fill(0).map((function(e,o){var i=t+o;return Object(r.a)({value:i},(0===o||o===n)&&{label:i})}))}},566:function(t,e,n){"use strict";var r=n(2);e.a=function(t,e,n){var o=Object(r.useRef)(),i=Object(r.useRef)();Object(r.useEffect)((function(){o.current=t}),[t]);var a=Object(r.useCallback)((function(){i.current&&clearInterval(i.current)}),[]),c=Object(r.useCallback)((function(){var t;null===(t=o.current)||void 0===t||t.call(o)}),[]);return Object(r.useEffect)((function(){return n||(i.current=setInterval(c,e)),function(){return a()}}),[e,n,a,c]),Object(r.useEffect)((function(){n&&a()}),[n,a]),a}},567:function(t,e,n){"use strict";var r=n(2);e.a=function(t){var e=Object(r.useRef)();return Object(r.useEffect)((function(){e.current=t}),[t]),e.current}},573:function(t,e,n){"use strict";n.d(e,"b",(function(){return D}));var r=n(9),o=n(4),i=n(2),a=n(11),c=n(80),u=n(8),s=n(39),l=n(151);window.NPC_DEBUG=!1;var d,f,b=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";window.NPC_DEBUG&&(e=console).log.apply(e,Object(s.a)([n,t].filter(Boolean)))};!function(t){t[t.IsDanger=-1e4]="IsDanger",t[t.IsNonBreakingTile=-100]="IsNonBreakingTile",t[t.IsNonAdjacentNonBreakingTile=-5]="IsNonAdjacentNonBreakingTile",t[t.IsStuck=0]="IsStuck",t[t.IsEmptyTile=2]="IsEmptyTile",t[t.IsBreakingTile=3]="IsBreakingTile",t[t.IsPlayer=4]="IsPlayer",t[t.IsPossibleFireExit=1]="IsPossibleFireExit",t[t.IsPowerUp=1e3]="IsPowerUp"}(f||(f={}));var j=function(t,e){var n=t.ySquare,r=t.xSquare,o=e.ySquare,i=e.xSquare;return n!==o||r!==i},p=function(t){var e=Object.values(d.bombs);if(!e.length)return!1;var n=[];return e.forEach((function(t){var e,r=t.playerId,i=t.top,c=t.left,u=d.players,s=Object(a.h)(d.gameMap,{top:i,left:c},(null===(e=u[r])||void 0===e?void 0:e.state)?Object(a.k)(u[r].state,o.j.BombSize,d.powerUpConfig):d.powerUpConfig.defaults[o.j.BombSize],d.sizes).coordinatesToSetOnFire;Object.values(s).flat().forEach((function(t){n.push(t)}))})),n.findIndex((function(e){return!j(e,t)}))>=0},v=function(t,e){var n=t.ySquare,r=t.xSquare,o=e.ySquare,i=e.xSquare;return r===i&&(n===o+1||n===o-1)||n===o&&(r===i+1||r===i-1)},O=function(t,e,n,r){if(v(t,e)){var o=(new Date).getTime();return d.lastBombTime<=o-1e3*Object.values(d.bombDuration).reduce((function(t,e){return t+e}),0)&&(d.dropBomb(),d.lastBombTime=o),r}return j(t,e)?n:null},m=function(t,e,n){var r=t.ySquare,i=t.xSquare;if(!Object(a.q)(t,d.sizes.map)){var c,u=d.gameMap[r][i];if(p(t))return p(e)?f.IsPossibleFireExit:f.IsDanger;if(Object.values(o.j).includes(u))return f.IsPowerUp*n;if(!j(t,e))return f.IsStuck;if(u===o.k.Empty)return f.IsEmptyTile;if(c=u,Object.values(o.h).includes(c)){var s=O(t,e,f.IsPlayer);if(null!==s)return s}if(u===o.k.Breaking){if(p(e))return f.IsDanger;var l=O(t,e,f.IsBreakingTile);if(null!==l)return l}return u===o.k.NonBreaking?v(t,e)?f.IsNonBreakingTile:f.IsNonAdjacentNonBreakingTile:f.IsStuck}},g=function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=e.ySquare,c=e.xSquare,s={};return Object.values(o.b).forEach((function(e){var l=a,f=c;switch(d.id++,e){case o.b.LEFT:f--;break;case o.b.UP:l--;break;case o.b.RIGHT:f++;break;case o.b.DOWN:l++}var b=m({ySquare:l,xSquare:f},n,r);s[d.id]={score:b,hasChildren:r>0&&void 0!==b,parentId:i,direction:e,level:r},r>0&&b&&(s=Object(u.a)(Object(u.a)({},s),t({ySquare:l,xSquare:f},n,r-1,d.id)))})),s},h=function(t){return t.reduce((function(t,e){var n=e;(void 0===e.score&&(n=t),t.score>e.score&&(n=t),t.score<e.score&&(n=e),t.score===e.score)&&(n=0===Object(l.a)(2)?e:t);return n}))},y=function(t){var e={};return t.forEach((function(t){var n=t.parentId;e[n]?e[n].push(t):e[n]=[t]})),e},x=function t(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(null!==r){n=void 0===r?Object.values(e).filter((function(t){return!t.hasChildren})):Object.values(e).filter((function(t){return t.parentId===e[r].parentId}));var o=y(n);Object.entries(o).forEach((function(n){var r=Object(c.a)(n,2),o=r[0],i=r[1],a="null"===o?null:Number(o),u=h(i);a?(e[a].score=e[a].score+(u.score?u.score:0),t(e,a)):d.parentNodes.some((function(t){return t.direction===u.direction}))||d.parentNodes.push(u)}))}},k=function(t){d.id=0,d.parentNodes=[];var e=g(t,t,void 0);return b(t,"currentCoordinates"),b(e,"originalMoves"),x(e),b(e,"scoredMoves"),h(d.parentNodes)},w=n(566),I=n(567),A=n(40),C=n(6),N=function(){var t=Object(i.useRef)({P1:document.getElementById("P1"),P2:document.getElementById("P2"),P3:document.getElementById("P3"),P4:document.getElementById("P4")});return{playerRefs:t,recalculate:function(){Object.keys(t.current).forEach((function(e){t.current[e]=document.getElementById(e)}))}}},E=function(){return Object(i.useRef)({P1:(new Date).getTime(),P2:(new Date).getTime(),P3:(new Date).getTime(),P4:(new Date).getTime()})},M=function(t,e){var n=E();return function(r){var i=t[r];if(!i)return!1;var c=i.state,u=(new Date).getTime(),s=Object(a.k)(c,o.j.MovementSpeed,e);return u-n.current[r]>s&&(n.current[r]=u,!0)}},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.onKeyDown,n=t.onKeyUp,r=Object(i.useRef)({});return Object(i.useEffect)((function(){var t=function(t){if(r.current){var o="keydown"===t.type;t.code===A.h&&t.preventDefault(),function(t,e){r.current[t.code]=e}(t,o),o?null===e||void 0===e||e(t.code):null===n||void 0===n||n(t.code)}};return window.addEventListener("keyup",t),window.addEventListener("keydown",t),function(){window.removeEventListener("keyup",t),window.removeEventListener("keydown",t)}}),[e,n]),r},P=function(t,e,n){var r=t[e];return!!r&&!Object(a.n)(r.state,n)},T=function(t,e,n,r){var c=function(t,e,n){return Object(i.useMemo)((function(){var r,i=null===(r=t[e])||void 0===r?void 0:r.state;return i?Object(a.k)(i,o.j.MovementSpeed,n):null}),[e,t,n])}(t,e,n);Object(w.a)((function(){P(t,e,n)&&r(e)}),c||Number.MAX_SAFE_INTEGER,!c)},B=function(t,e,n){return function(r){Object.keys(t).forEach((function(o){if(P(t,o,n)){var i=t[o].keyboardConfig;if(i)Object(a.r)(i,"DropBomb").includes(r)&&e(o)}}))}},S=function(t){var e=t.playerId,n=t.players,r=t.powerUpConfig,o=t.cb;return T(n,e,r,o),null};e.a=function(t){var e=t.state,n=t.provider,c=t.type,u=t.playerId,s=n.dropBomb,l=n.triggerMove,f=e.gameMap,j=e.bombs,p=e.players,v=e.is3D,O=e.config,m=O.powerUps,g=O.sizes,h=O.duration.bomb,y=N().playerRefs,x=Object(i.useMemo)((function(){return c===o.g.Local?p:Object(r.a)({},u,p[u])}),[p]),w=D({onKeyDown:B(x,s,m)}),A=E(),P=function(t){var e=t.triggerMove,n=t.players,r=t.timeOutRef,o=t.keyMap,c=t.is3D,u=t.powerUpConfig,s=N(),l=s.playerRefs,d=s.recalculate,f=Object(I.a)(c);Object(i.useEffect)((function(){f!==c&&d()}),[c,f,d]);var b=M(n,u),j=function(t,n){var r=Object(a.i)(o,n);r.length&&r.forEach((function(n){e({playerId:t,direction:n,ref:l.current[t]})}))};return{move:j,handleActions:function(t){if(o.current&&r.current&&Object.values(o.current).filter(Boolean).length){var e=n[t].keyboardConfig;if(e&&Object.keys(e).length){var i=l.current[t];i||(l.current[t]=document.getElementById(t)),i&&b(t)&&j(t,e)}}}}}({triggerMove:l,players:x,timeOutRef:A,keyMap:w,is3D:v,powerUpConfig:m}).handleActions,T=M(p,m),R=function(t){y.current[t]||(y.current[t]=document.getElementById(t)),function(t){var e=t.playerId,n=t.players,r=t.gameMap,o=t.bombs,i=t.triggerMove,c=t.dropBomb,u=t.ref,s=t.powerUpConfig,l=t.sizes,f=t.bombDuration,j=n[e];if(d={id:0,parentNodes:[],lastBombTime:0,dropBomb:function(){return c(e)},gameMap:r,bombs:o,players:n,powerUpConfig:s,sizes:l,bombDuration:f},j){var p=Object(a.l)(j.coordinates,l.movement),v=k(p);b(v,"bestMovementNode"),((null===v||void 0===v?void 0:v.score)||0)>0&&i({playerId:e,direction:v.direction,ref:u})}}({playerId:t,dropBomb:s,gameMap:f,bombs:j,players:x,triggerMove:function(e){T(t)&&l(e)},ref:y.current[t],powerUpConfig:m,sizes:g,bombDuration:h})};return Object.keys(x).map((function(t){var e=x[t].isNPC;return Object(C.jsx)(S,{playerId:t,players:x,powerUpConfig:m,cb:e?R:P},t)}))}},591:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r,o=n(34),i=n(29).d.div(r||(r=Object(o.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-wrap: wrap;\n"])))}}]);
//# sourceMappingURL=15.37d344c5.chunk.js.map