(this.webpackJsonpinfoskjerm=this.webpackJsonpinfoskjerm||[]).push([[0],{26:function(e,t,n){e.exports=n(68)},31:function(e,t,n){},32:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(24),l=n.n(r),o=(n(31),n(32),n(4)),i=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1").then((function(e){return e.json()})).then((function(e){return r(e.data.children[0].data)})).catch((function(e){return console.log(e)}))}),[]),n?c.a.createElement("div",{className:"reddit"},c.a.createElement("p",null," ",n.title," "),c.a.createElement("p",null," ",n.selftext," ")):c.a.createElement(c.a.Fragment,null)},u=n(25),s=n.n(u)()({clientName:"hognestad-infoskjerm"}),m=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){s.getBikeRentalStationsByPosition({latitude:63.428311,longitude:10.392514},230).then((function(e){return r(e)}))}),[]),console.log(n),c.a.createElement("div",{className:"bikes"},c.a.createElement("b",null,c.a.createElement("h3",null,"Bysykkel")),n.map((function(e){return c.a.createElement(f,{key:e.id,station:e})})))},f=function(e){var t=e.station;return c.a.createElement("div",{className:"station"},t.name," - ",t.bikesAvailable," : ",t.spacesAvailable)},d=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://quotes.rest/qod?language=en").then((function(e){return e.json()})).then((function(e){return r(e.contents.quotes[0].quote)})).catch((function(e){return console.log(e)}))}),[]),n?c.a.createElement("div",{class:"QOTD"},c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h1",null,n)):c.a.createElement(c.a.Fragment,null)};var h=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Infoskjerm"),c.a.createElement(i,null),c.a.createElement(m,null),c.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.207bd8a8.chunk.js.map