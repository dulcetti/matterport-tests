(this["webpackJsonpmatterport-tests"]=this["webpackJsonpmatterport-tests"]||[]).push([[0],{12:function(n,e,t){n.exports=t(19)},19:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(7),c=t.n(a),i=t(2),u=t(1);function l(){var n=Object(i.a)(["\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  html {\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n    min-height: 100%;\n  }\n\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,\n      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n    min-height: 100%;\n    overflow-x: hidden;\n  }\n\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  main,\n  menu,\n  nav,\n  section,\n  summary {\n    display: block;\n  }\n"]);return l=function(){return n},n}var m,f=Object(u.a)(l()),s=[{anchorPosition:{x:1.09,y:1,z:.122},stemVector:{x:.32,y:.55,z:1},color:{r:0,g:0,b:0},description:"Deveria ter aqui o v\xeddeo do Jon Gom",label:"Jon Gom",media:{src:"https://www.youtube.com/watch?v=nY7GnAq6Znw",type:"mattertag.media.video"}},{anchorPosition:{x:2.09,y:.7,z:.25},stemVector:{x:.72,y:.45,z:.5},color:{r:.5,g:.2,b:.3},description:"Mais um v\xeddeo da m\xfasica Ocean",label:"John Buttler",media:{src:"https://www.youtube.com/watch?v=jdYJf_ybyVo",type:"mattertag.media.video"}}],d=function(n){return console.info(m),m.Camera.moveInDirection(n).then(h).catch(v)},b=function(n,e){return m.Camera.rotate(n,e).then(h).catch(v)},h=function(n){console.info(n)},v=function(n){console.error(n)};function p(){m.Mattertag.add(s).then((function(n){console.info(n)}))}var g=t(11);function E(){var n=Object(i.a)(["\n  font-size: 2rem;\n  padding: 0.5rem 1rem;\n"]);return E=function(){return n},n}function y(){var n=Object(i.a)(["\n  font-size: 1.5rem;\n  margin-bottom: 1.5rem;\n"]);return y=function(){return n},n}function w(){var n=Object(i.a)(["\n  font-size: 2rem;\n  margin-bottom: 2rem;\n"]);return w=function(){return n},n}function j(){var n=Object(i.a)([""]);return j=function(){return n},n}function O(){var n=Object(i.a)([""]);return O=function(){return n},n}function k(){var n=Object(i.a)(["\n  border: 0;\n  margin-bottom: 2rem;\n"]);return k=function(){return n},n}function x(){var n=Object(i.a)(["\n    margin: 0 auto;\n  "]);return x=function(){return n},n}function C(){var n=Object(i.a)(["\n  max-width: 70rem;\n  text-align: center;\n\n  ","\n"]);return C=function(){return n},n}var z=u.c.main(C(),g.a.greaterThan("medium")(x())),S=u.c.iframe(k()),D=u.c.section(O()),M=u.c.div(j()),I=u.c.h1(w()),J=u.c.h2(y()),A=u.c.button(E());function B(){var n=Object(r.useRef)(null);return Object(r.useEffect)((function(){(null===n||void 0===n?void 0:n.current)&&function(n){var e=function(e){console.info(e),n.removeEventListener("load",t),(m=e).Model.getData().then(p)},t=function(){return window.MP_SDK.connect(n,"c6518f79da3d4dcaa185916fb6b8041e","3.3").then(e).catch(v)};n.addEventListener("load",t,!1)}(n.current)}),[n]),o.a.createElement(z,null,o.a.createElement(I,null,"Matterport tests"),o.a.createElement(S,{allow:"vr",allowFullScreen:!0,frameBorder:"0",height:"480",id:"tests-matterport",ref:n,src:"https://my.matterport.com/show?m=SxQL3iGyoDo&play=1",title:"tests-matterport",width:"853"}),o.a.createElement(D,null,o.a.createElement(J,null,"Direcionamento"),o.a.createElement(M,null,o.a.createElement(A,{onClick:function(){return d("LEFT")}},"\u21d0"),o.a.createElement(A,{onClick:function(){return d("FORWARD")}},"\u21d1"),o.a.createElement(A,{onClick:function(){return d("BACK")}},"\u21d3"),o.a.createElement(A,{onClick:function(){return d("RIGHT")}},"\u21d2")),o.a.createElement(M,null,o.a.createElement(A,{onClick:function(){return b(-15,0)}},"\u2939"),o.a.createElement(A,{onClick:function(){return b(15,0)}},"\u2938"),o.a.createElement(A,{onClick:function(){return b(0,15)}},"\u293b"),o.a.createElement(A,{onClick:function(){return b(0,-15)}},"\u293a"))))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null),o.a.createElement(B,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.c7465d26.chunk.js.map