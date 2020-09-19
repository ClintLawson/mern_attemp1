(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){e.exports=n(51)},27:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(20),r=n.n(c),i=(n(27),n(5)),s=n(3),o=n(4),u=n.n(o),p=function(e){var t=e.pets;return l.a.createElement("div",null,l.a.createElement("h3",null,"These pets are looking for a good home"),l.a.createElement("table",{style:{width:"100%",border:"1px black solid"}},l.a.createElement("tbody",null,l.a.createElement("tr",{style:{backgroundColor:"lightgray"}},l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Actions")),t.map((function(e){return l.a.createElement("tr",{key:e._id,style:{textAlign:"center"}},l.a.createElement("td",null,e.petName),l.a.createElement("td",null,e.petType),l.a.createElement("td",null,l.a.createElement(s.a,{to:"pets/".concat(e._id,"/details")},"Details"),"` | `",l.a.createElement(s.a,{to:"pets/".concat(e._id,"/edit")},"Edit")))})))))},m=function(e){var t=e.id,n=e.pets,c=e.setPets,r=Object(a.useState)({}),o=Object(i.a)(r,2),p=o[0],m=o[1];Object(a.useEffect)((function(){u.a.get("http://127.0.0.1:8000/api/things/".concat(t,"/")).then((function(e){return m(e.data)})).catch((function(e){return console.log(e)}))}),[]);return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("h3",null,"Details about: ",p.petName),l.a.createElement("h3",null,l.a.createElement("button",{onClick:function(){return function(e){u.a.delete("http://127.0.0.1:8000/api/things/".concat(e,"/delete/")).then((function(t){return c(n.filter((function(t){return t._id!==e})))})).catch((function(e){return console.log(e)})),Object(s.c)("/")}(p._id)},style:{height:"30px"}},"Adopt ",p.petName))),l.a.createElement("div",null,l.a.createElement("h4",null,"Pet Type: ",l.a.createElement("span",{style:{fontWeight:"lighter"}},p.petType)),l.a.createElement("h4",null,"Description: ",l.a.createElement("span",{style:{fontWeight:"lighter"}},p.petDescription)),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("h4",null,"Skills:"),l.a.createElement("div",{style:{marginLeft:"25px"}},l.a.createElement("h4",null,l.a.createElement("span",{style:{fontWeight:"lighter"}},p.skill1)),l.a.createElement("h4",null,l.a.createElement("span",{style:{fontWeight:"lighter"}},p.skill2)),l.a.createElement("h4",null,l.a.createElement("span",{style:{fontWeight:"lighter"}},p.skill3))))))},d=n(9),h=n(2),f=function(e){var t=e.pet,n=e.setPet,a=e.submitPet,c=e.errors;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){return a(e,t)},style:{width:"100%"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("div",null,l.a.createElement("span",{style:{color:"red"}},void 0!=c.petName?c.petName.message:""),l.a.createElement("h4",{style:{display:"flex",justifyContent:"space-between"}},"Pet Name :",l.a.createElement("input",{type:"text",value:t.petName||"",onChange:function(e){return n(Object(h.a)(Object(h.a)({},t),{},{petName:e.target.value}))}})),l.a.createElement("span",{style:{color:"red"}},void 0!=c.petType?c.petType.message:""),l.a.createElement("h4",{style:{display:"flex",justifyContent:"space-between"}},"Pet Type :",l.a.createElement("input",{type:"text",value:t.petType||"",onChange:function(e){return n(Object(h.a)(Object(h.a)({},t),{},{petType:e.target.value}))}})),l.a.createElement("span",{style:{color:"red"}},void 0!=c.petDescription?c.petDescription.message:""),l.a.createElement("h4",{style:{display:"flex",justifyContent:"space-between"}},"Pet Description :",l.a.createElement("input",{type:"text",value:t.petDescription||"",onChange:function(e){return n(Object(h.a)(Object(h.a)({},t),{},{petDescription:e.target.value}))}}))),l.a.createElement("div",null,l.a.createElement("h4",{style:{display:"flex",justifyContent:"space-between"}},"Skill 1 :",l.a.createElement("input",{type:"text",value:t.skill1||"",onChange:function(e){return n(Object(h.a)(Object(h.a)({},t),{},{skill1:e.target.value}))}})),l.a.createElement("h4",{style:{display:"flex",justifyContent:"space-between"}},"Skill 2 :",l.a.createElement("input",{type:"text",value:t.skill2||"",onChange:function(e){return n(Object(h.a)(Object(h.a)({},t),{},{skill2:e.target.value}))}})),l.a.createElement("h4",{style:{display:"flex",justifyContent:"space-between"}},"Skill 3 :",l.a.createElement("input",{type:"text",value:t.skill3||"",onChange:function(e){return n(Object(h.a)(Object(h.a)({},t),{},{skill3:e.target.value}))}})))),l.a.createElement("input",{style:{margin:"auto"},type:"submit",value:"Submit"})))},E=function(e){var t=e.pets,n=e.setPets,c=Object(a.useState)({}),r=Object(i.a)(c,2),o=r[0],p=r[1],m=Object(a.useState)({}),h=Object(i.a)(m,2),E=h[0],y=h[1];return l.a.createElement("div",null,l.a.createElement(f,{setPet:p,pet:o,submitPet:function(e,a){e.preventDefault(),u.a.post("http://127.0.0.1:8000/api/things/new/",a).then((function(e){return n([].concat(Object(d.a)(t),[e.data])),Object(s.c)("/"),y({})})).catch((function(e){return y(e.response.data.errors)}))},errors:E}))},y=function(e){var t=e.id,n=e.pets,c=e.setPets,r=Object(a.useState)({}),s=Object(i.a)(r,2),o=s[0],p=s[1],m=Object(a.useState)({}),h=Object(i.a)(m,2),E=h[0],y=h[1];Object(a.useEffect)((function(){u.a.get("http://127.0.0.1:8000/api/things/".concat(t,"/")).then((function(e){return p(e.data)})).catch((function(e){return y(e.response.data)}))}),[]);return l.a.createElement("div",null,l.a.createElement(f,{pet:o,setPet:p,submitPet:function(e,a){e.preventDefault();var l=n.filter((function(e){return e._id!=t}));u.a.put("http://127.0.0.1:8000/api/things/".concat(t,"/update/"),a).then((function(e){return c([].concat(Object(d.a)(l),[e.data]))}),y({})).catch((function(e){return y(e.response.data.errors)}))},errors:E}))},b=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){u.a.get("http://127.0.0.1:8000/api/things/").then((function(e){return c(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",{style:{width:"500px"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement("div",{style:{paddingTop:"35px"}},l.a.createElement(s.a,{to:"pets/new"},"Add Pet"),"` | `",l.a.createElement(s.a,{to:"/"},"BackHome"))),l.a.createElement(s.b,null,l.a.createElement(p,{path:"/",pets:n}),l.a.createElement(E,{path:"pets/new/",pets:n,setPets:c}),l.a.createElement(y,{path:"pets/:id/edit",pets:n,setPets:c}),l.a.createElement(m,{path:"pets/:id/details",pets:n,setPets:c})))};var g=function(){return l.a.createElement("div",{style:{padding:"25px"}},l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.cfc9c1c2.chunk.js.map