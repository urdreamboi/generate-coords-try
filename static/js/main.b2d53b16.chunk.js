(this["webpackJsonpgenerate-coords-try"]=this["webpackJsonpgenerate-coords-try"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),o=n.n(a),s=(n(4),n(2)),i=n(0);function l(){return Object(i.jsxs)("nav",{className:"flex justify-between items-center bg-gray-800",children:[Object(i.jsx)("h1",{className:"text-4xl text-white p-3",children:"Coords Generator"}),Object(i.jsx)("a",{className:"text-2xl text-white p-3",href:"https://urdreamboi.github.io",children:"backhome"})]})}function u(){return Object(i.jsxs)("footer",{className:"flex justify-center my-3",children:[Object(i.jsxs)("p",{children:["Created By : ",Object(i.jsx)("a",{href:"https://github.com/urdreamboi",children:"urdreamboi"})]})," ","|",Object(i.jsxs)("p",{children:["Coordinate Algorithm by :"," ",Object(i.jsx)("a",{href:"https://gist.github.com/mkhatib",children:"mkhatib"})]})]})}function d(e,t,n){var c=e.coords.longitude,r=e.coords.latitude,a=t/111300,o=Math.random(),s=Math.random(),i=a*Math.sqrt(o),l=2*Math.PI*s,u=i*Math.cos(l),d=i*Math.sin(l),b=u/Math.cos(r);return{location:"Location ".concat(n),lat:d+r,lng:b+c}}function b(e){var t=260*Math.random()-180,n=180*Math.random()-90;return{location:"Location ".concat(e),lat:n,lng:t}}var j=function(){var e=Object(c.useState)({coords:{longitude:"",latitude:""}}),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),o=Object(s.a)(a,2),j=o[0],h=o[1],x=Object(c.useState)(""),m=Object(s.a)(x,2),g=m[0],f=m[1],O=Object(c.useState)(1e3),p=Object(s.a)(O,2),N=p[0],y=p[1],v=Object(c.useState)(10),k=Object(s.a)(v,2),C=k[0],w=k[1],M=Object(c.useState)([]),S=Object(s.a)(M,2),E=S[0],L=S[1];return Object(c.useEffect)((function(){L(function(e,t,n){for(var c=[],r=0;r<n;r++)c.push(d(e,t,r));return c}(n,N,C))}),[n]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsxs)("div",{className:"my-3",children:[Object(i.jsx)("h1",{className:"text-center",children:"This app generates random geo coordinates around you"}),Object(i.jsxs)("form",{className:"flex-row md:flex justify-center m-3",onSubmit:function(e){e.preventDefault(),!isNaN(j)&!isNaN(g)?r({coords:{longitude:parseInt(g,10),latitude:parseInt(j,10)}}):alert("Enter Numbers")},children:[Object(i.jsx)("input",{className:"text-center border-2 border-black mx-2 w-80",type:"text",placeholder:"Enter Radius ( Default : 1000/1km )",onChange:function(e){return y(e.target.value)}}),Object(i.jsx)("input",{className:"text-center border-2 border-black mx-2 w-80",type:"text",placeholder:"Enter How much ( Default : 10 )",onChange:function(e){return w(e.target.value)}}),Object(i.jsx)("input",{className:"text-center border-2 border-black mx-2",type:"text",placeholder:"Enter Latitude",onChange:function(e){return h(e.target.value)}}),Object(i.jsx)("input",{className:"text-center border-2 border-black mx-2",type:"text",placeholder:"Enter Longitude",onChange:function(e){return f(e.target.value)}}),Object(i.jsx)("button",{className:"text-center bg-gray-300 p-2 rounded-lg",type:"submit",children:"Submit"})]}),Object(i.jsxs)("div",{className:"flex justify-center",children:[Object(i.jsx)("div",{className:"px-5",children:Object(i.jsx)("button",{className:"text-center mx-auto block p-2 rounded-lg bg-gray-600 text-white",onClick:function(){navigator.geolocation.getCurrentPosition((function(e){r(e)}))},children:"Or Press me for current location"})}),Object(i.jsx)("div",{className:"px-5",children:Object(i.jsx)("button",{className:"text-center mx-auto block p-2 rounded-lg bg-gray-600 text-white",onClick:function(){C>9999?alert("To Much"):L(function(e){for(var t=[],n=0;n<e;n++)t.push(b(n)),console.log("cool");return t}(C))},children:"Or Press me for locations everywhere"})})]}),Object(i.jsx)("p",{className:"text-center",children:n.coords.latitude?"".concat(n.coords.latitude,", ").concat(n.coords.longitude):""})]}),Object(i.jsxs)("div",{className:"bg-gray-200 border-2 border-black container mx-auto relative"+(0===E.length?" hidden":""),children:[E?Object(i.jsx)("button",{className:"top-2 right-3 absolute border-2 border-black p-2 rounded-lg bg-white font-bold",onClick:function(){navigator.clipboard.writeText(JSON.stringify(E)),alert("copied")},children:"Copy Data"}):"",E.map((function(e){return Object(i.jsx)("div",{children:'{"location": "'.concat(e.location,'", "lat" : "').concat(e.lat,'", "lng" : "').concat(e.lng,'"},')})}))]}),Object(i.jsx)(u,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),h()},4:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.b2d53b16.chunk.js.map