(this.webpackJsonptravelprj=this.webpackJsonptravelprj||[]).push([[0],{21:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(15),i=c.n(a),l=(c(21),c(5)),r=c(0),o=function(){var e=function(){window.location.href="/"};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark",children:Object(r.jsxs)("div",{className:"container-fluid ",children:[Object(r.jsx)("img",{onClick:e,className:"p-home",src:"./images/title.jpeg",atl:"homepage img",style:{height:"3rem",width:"3rem"}}),Object(r.jsxs)("h3",{onClick:e,className:"p-home navbar-brand text-white text-center ps-2",href:"#",children:["SAFE ",Object(r.jsx)("br",{})," TRAVEL"]}),Object(r.jsx)("button",{onClick:function(){var e=document.getElementById("navbarSupportedContent");"collapse navbar-collapse"===e.className?e.className="collapse navbar-collapse show":e.className="collapse navbar-collapse"},className:"navbar-toggler  bg-white ",id:"btn-nav",type:"button",children:Object(r.jsx)("span",{className:"navbar-toggler-icon "})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{className:"nav-link navu-link text-white",to:"/",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{className:"nav-link navu-link  text-white",to:"/contactjs",children:"Contact Us"})})]}),Object(r.jsxs)("form",{className:"d-flex",children:[Object(r.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(r.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})},j=c(7),b=c(8),d=c(4),m=c(6),h=c.n(m),x={name:"",is_day:"",temp_c:"",temp_f:"",condition:"",wind_kph:""},u={name:"",is_day:"",temp_c:"",temp_f:"",condition:"",wind_kph:""},f=function(){var e=Object(s.useState)({source:"",destination:""}),t=Object(d.a)(e,2),c=t[0],n=t[1],a=function(e){var t=e.target.name,s=e.target.value;n(Object(b.a)(Object(b.a)({},c),{},Object(j.a)({},t,s)))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("section",{className:"sect-body",children:Object(r.jsxs)("div",{className:"div-body bg-dark mx-auto p-4",children:[Object(r.jsx)("div",{className:"search-heading text-center pt-4",children:Object(r.jsx)("h3",{className:"blu-font text-white",children:"Kindly Type Your..."})}),Object(r.jsxs)("div",{className:"search-body text-center mt-4",children:[Object(r.jsx)("input",{onChange:a,name:"source",type:"text",className:"blu-font ps-2",placeholder:"  Source"}),Object(r.jsx)("h4",{className:"pt-2 blu-font text-white",children:"TO"}),Object(r.jsx)("input",{onChange:a,name:"destination",type:"text",className:"blu-font ps-2",placeholder:"  Destination"}),Object(r.jsxs)("div",{className:"res-btn pt-4",children:[Object(r.jsx)("button",{onClick:function(){if(""==c.source||""==c.destination)h.a.fire({icon:"error",title:"Something went wrong",text:"Source and Destination cannot be empty"});else{document.getElementById("start").className="hide";var e=document.getElementById("sync");e.className="sync-class",fetch("https://api.weatherapi.com/v1/current.json?key=337eaa8e8d0647e9b62122153210412&q=".concat(c.source),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){e.json().then((function(e){x.name=c.source,x.is_day=e.current.is_day,x.temp_c=e.current.temp_c,x.temp_f=e.current.temp_f,x.condition=e.current.condition,x.wind_kph=e.current.wind_kph,console.log(x)})).catch((function(e){h.a.fire({icon:"error",title:"Something went wrong",text:"Source location invalid"}),setTimeout((function(){window.location.href="/"}),2e3)}))})),fetch("https://api.weatherapi.com/v1/current.json?key=337eaa8e8d0647e9b62122153210412&q=".concat(c.destination),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){e.json().then((function(e){u.name=c.destination,u.is_day=e.current.is_day,u.temp_c=e.current.temp_c,u.temp_f=e.current.temp_f,u.condition=e.current.condition,u.wind_kph=e.current.wind_kph,console.log(u)})).catch((function(e){h.a.fire({icon:"error",title:"Something went wrong",text:"Destination location invalid"}),setTimeout((function(){window.location.href="/"}),2e3)}))})),setTimeout((function(){e.className="hide",document.getElementById("done").className="show-class"}),4e3)}},id:"start",className:"btn-body text-white",type:"submit",children:"GET LIVE STATUS"}),Object(r.jsx)("button",{id:"sync",className:"hide btn-body text-white",children:"Syncing Data  ..."}),Object(r.jsxs)("button",{id:"done",className:"hide btn-body",children:[" ",Object(r.jsx)(l.b,{className:"text-white text-decoration-none",to:"result",children:"Check results !!"})]})]})]})]})})})},O=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("section",{className:"footer-sect bg-dark",children:[Object(r.jsxs)("div",{className:"container footer-div1 text-white ",children:[Object(r.jsxs)("div",{className:"f-subdiv text-center",children:[Object(r.jsx)("p",{className:"subdiv-mainh font-h",children:Object(r.jsx)("li",{children:"Let us Help"})}),Object(r.jsx)("p",{className:"subdiv-bodyh  blu-font",children:Object(r.jsx)("li",{children:"My Page"})}),Object(r.jsx)("p",{className:"subdiv-bodyh  blu-font",children:Object(r.jsx)("li",{children:"Help Center"})}),Object(r.jsx)("p",{className:"subdiv-bodyh  blu-font",children:Object(r.jsx)("li",{children:"Contact Us"})})]}),Object(r.jsxs)("div",{className:"f-subdiv text-center",children:[Object(r.jsx)("p",{className:"subdiv-mainh font-h",children:Object(r.jsx)("li",{children:"What we Offer"})}),Object(r.jsx)("p",{className:"subdiv-bodyh  blu-font",children:Object(r.jsx)("li",{children:"Our Products"})}),Object(r.jsx)("p",{className:"subdiv-bodyh  blu-font",children:Object(r.jsx)("li",{children:"Upload Your Designs"})})]}),Object(r.jsxs)("div",{className:"f-subdiv text-center",children:[Object(r.jsx)("p",{className:"subdiv-mainh font-h",children:Object(r.jsx)("li",{children:"Our Company"})}),Object(r.jsx)("p",{className:"subdiv-bodyh  blu-font",children:Object(r.jsx)("li",{children:"About Us"})}),Object(r.jsx)("p",{className:"subdiv-bodyh  blu-font",children:Object(r.jsx)("li",{children:"Carrers"})}),Object(r.jsx)("p",{className:"subdiv-bodyh  blu-font",children:Object(r.jsx)("li",{children:"For Media"})}),Object(r.jsx)("p",{className:"subdiv-bodyh  blu-font",children:Object(r.jsx)("li",{children:"For Investors"})})]}),Object(r.jsxs)("div",{className:"f-subdiv text-center",children:[Object(r.jsx)("p",{className:"subdiv-mainh font-h",children:Object(r.jsx)("li",{children:"Our Policies"})}),Object(r.jsx)("p",{className:"subdiv-bodyh  blu-font",children:Object(r.jsx)("li",{children:"Terms of Use"})}),Object(r.jsx)("p",{className:"subdiv-bodyh  blu-font",children:Object(r.jsx)("li",{children:"Copyright matters"})}),Object(r.jsx)("p",{className:"subdiv-bodyh  blu-font",children:Object(r.jsx)("li",{children:"Patents and Trademarks"})})]})]}),Object(r.jsx)("div",{className:"container text-white",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-lg-6 blu-font",children:[Object(r.jsx)("p",{className:" font-h",children:"Connect Us"}),Object(r.jsxs)("p",{children:[Object(r.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",children:Object(r.jsx)("i",{class:"footer-fa fab fa-facebook"})}),Object(r.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",children:Object(r.jsx)("i",{class:"footer-fa fab fa-instagram"})}),Object(r.jsx)("a",{href:"https://www.twitter.com/login/",target:"_blank",children:Object(r.jsx)("i",{class:"footer-fa fab fa-twitter"})}),Object(r.jsx)("a",{href:"https://www.linkedin.com/login/",target:"_blank",children:Object(r.jsx)("i",{class:"footer-fa fab fa-linkedin"})})]})]}),Object(r.jsxs)("div",{className:"col-lg-6 email-footer m-auto",children:[Object(r.jsx)("p",{className:"ms-2  font-h",children:"Sign Up for More Services"}),Object(r.jsx)("input",{className:"input-email ps-2",type:"text",placeholder:"Email Address"}),Object(r.jsx)("button",{className:"btn-email",children:Object(r.jsx)("i",{class:"email-f-icon fas fa-envelope"})})]}),Object(r.jsx)("div",{className:"container l-footer text-white text-center mt-2",children:Object(r.jsx)("p",{className:" blu-font",children:"\xa9 SafeTravel 2020-2021 All rights reserved"})})]})})]})})},p=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(f,{}),Object(r.jsx)(O,{})]})},v=c(12),N=c.n(v),y=c(16),g=function(){var e=Object(s.useState)({name:"",email:"",phone:"",city:"",concern:""}),t=Object(d.a)(e,2),c=t[0],n=t[1],a=function(e){var t=e.target.name,s=e.target.value;n(Object(b.a)(Object(b.a)({},c),{},Object(j.a)({},t,s)))};Object(s.useEffect)((function(){""==c.name&&""==c.email&&""==c.phone&&""==c.city&&""==c.concern||function(){var e=c.name.trim(),t=c.email.trim(),s=c.phone.trim(),n=c.city.trim(),a=c.concern.trim(),i=document.getElementById("username");""===e?l(i,"Username cannot be blank"):e.length<=2?l(i,"User should include full name"):m(i);var r=document.getElementById("email");""===t?l(r,"Email cannot be blank"):function(e){var t=e.indexOf("@");if(t<1)return!1;var c=e.lastIndexOf(".");return!(c<=t+2)&&c!==e.length-1}(t)?m(r):l(r,"Not a valid Email");var o=document.getElementById("phone");""===s?l(o,"Phone number cannot be blank"):10!=s.length?l(o,"Not a valid Phone number"):m(o);var j=document.getElementById("city");""===n?l(j,"Name of the city cannot be blank"):m(j);var b=document.getElementById("concern");""===a?l(b,"Message cannot be blank"):m(b)}()}),[c]);var i=function(){var e=Object(y.a)(N.a.mark((function e(t){var s,n,a,i,l,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),5!=document.getElementsByClassName("success").length){e.next=11;break}return s=c.name,n=c.email,a=c.phone,i=c.city,l=c.concern,e.next=6,fetch("/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,email:n,phone:a,city:i,concern:l})});case 6:r=e.sent,r.json()&&404!==r.status&&201==r.status?(h.a.fire({icon:"success",title:"Sucessfully sent!!",text:"Thank you for your views!!"}),setTimeout((function(){c.name="",c.email="",c.phone="",c.city="",c.concern=""}),3e3)):h.a.fire({icon:"error",title:"Server is Sleeping",text:"Something went wrong!"}),e.next=12;break;case 11:h.a.fire({icon:"question",title:"Please fill all the Details",text:"Something went wrong!"});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function l(e,t){var c=e.parentElement,s=c.querySelector("small");c.className="form-controlf error",s.innerText=t}function m(e){e.parentElement.className="form-controlf success"}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)("section",{className:"contact-section mt-4",children:Object(r.jsxs)("div",{className:"contact-container",children:[Object(r.jsx)("div",{className:"header",children:Object(r.jsx)("h2",{className:"font-h",children:"Contact Us"})}),Object(r.jsxs)("form",{className:"form",id:"form",children:[Object(r.jsxs)("div",{className:"form-controlf",children:[Object(r.jsx)("label",{className:"blu-font",children:"Username"}),Object(r.jsx)("input",{type:"text",name:"name",id:"username",onChange:a,placeholder:"Enter you full name",autocomplete:"off"}),Object(r.jsx)("i",{class:"fas fa-check-circle"}),Object(r.jsx)("i",{class:"fas fa-exclamation-circle"}),Object(r.jsx)("small",{children:"Error mssg"})]}),Object(r.jsxs)("div",{className:"form-controlf",children:[Object(r.jsx)("label",{children:"Email"}),Object(r.jsx)("input",{type:"text",name:"email",id:"email",onChange:a,placeholder:"Enter your full email",autocomplete:"off"}),Object(r.jsx)("i",{class:"fas fa-check-circle"}),Object(r.jsx)("i",{class:"fas fa-exclamation-circle"}),Object(r.jsx)("small",{children:"Error mssg"})]})," ",Object(r.jsxs)("div",{className:"form-controlf",children:[Object(r.jsx)("label",{children:"Mobile Number"}),Object(r.jsx)("input",{type:"number",name:"phone",id:"phone",onChange:a,placeholder:"Enter you mobile number",autocomplete:"off"}),Object(r.jsx)("i",{class:"fas fa-check-circle"}),Object(r.jsx)("i",{class:"fas fa-exclamation-circle"}),Object(r.jsx)("small",{children:"Error mssg"})]})," ",Object(r.jsxs)("div",{className:"form-controlf",children:[Object(r.jsx)("label",{children:"City"}),Object(r.jsx)("input",{type:"text",name:"city",id:"city",onChange:a,placeholder:"Enter you Live Location",autocomplete:"off"}),Object(r.jsx)("i",{class:"fas fa-check-circle"}),Object(r.jsx)("i",{class:"fas fa-exclamation-circle"}),Object(r.jsx)("small",{children:"Error mssg"})]})," ",Object(r.jsxs)("div",{className:"form-controlf",children:[Object(r.jsx)("label",{children:"Your Concern"}),Object(r.jsx)("textarea",{type:"text",name:"concern",onChange:a,id:"concern",className:"input-concern",placeholder:"Type Your Concern here...",autocomplete:"off"}),Object(r.jsx)("i",{class:"fas fa-check-circle"}),Object(r.jsx)("i",{class:"fas fa-exclamation-circle"}),Object(r.jsx)("small",{children:"Error mssg"})]}),Object(r.jsx)("input",{type:"submit",name:"",onClick:i,value:"Submit",className:"btn-s blu-font"})]})]})}),Object(r.jsx)(O,{})]})},w=function(){""!==x.temp_c&&""!==u.temp_c||(window.location.href="/errorpg");var e=function(){return 1==x.is_day?Object(r.jsxs)("p",{className:"text-center sun res-bodyt blu-font",children:["Day Light ",Object(r.jsx)("i",{class:"fas  fa-sun"})]}):Object(r.jsxs)("p",{className:"text-center moon res-bodyt blu-font",children:["Moon Light ",Object(r.jsx)("i",{class:"far fa-moon"})]})};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsxs)("section",{className:"respart my-2 text-white",children:[Object(r.jsxs)("div",{className:"container src res mt-4",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("p",{className:"text-center  py-2 res-mainh blu-font",children:[" ",x.name,Object(r.jsx)("i",{class:"far ps-2 fa-arrow-alt-circle-down"})]}),Object(r.jsx)("div",{className:"col-lg-4",children:e()}),Object(r.jsx)("div",{className:"col-lg-4",children:Object(r.jsxs)("p",{className:"text-center temp-c res-bodyt blu-font",children:["Temp: ",x.temp_c,"\u2103"]})}),Object(r.jsx)("div",{className:"col-lg-4",children:Object(r.jsxs)("p",{className:"text-center temp-f res-bodyt blu-font",children:["Temp: ",x.temp_f," F "]})})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsxs)("p",{className:"text-center wind res-bodyt blu-font",children:["Wind Speed ",x.wind_kph," kph"]})}),Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsxs)("p",{className:"text-center condt res-bodyt blu-font",children:["Condition: ",x.condition.text,function(){var e=x.condition.text;return"Sunny"==e||"Dusty"==e?Object(r.jsx)("i",{class:"fas text-white ps-2 fa-sun"}):"Mist"==e||"Light rain"==e?Object(r.jsx)("i",{class:"fas ps-2 text-white fa-cloud-sun-rain"}):"Rain"==e||"Heavy rain"==e?Object(r.jsx)("i",{class:"fas ps-2 text-white fa-cloud-showers-heavy"}):Object(r.jsx)("i",{class:"fas ps-2 text-white fa-cloud-sun"})}()]})})]})]}),Object(r.jsxs)("div",{className:"container dest mt-4 res",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("p",{className:"text-center py-2 res-mainh",children:[" ",u.name,Object(r.jsx)("i",{class:"far ps-2 fa-arrow-alt-circle-up"})]}),Object(r.jsx)("div",{className:"col-lg-4",children:e()}),Object(r.jsx)("div",{className:"col-lg-4",children:Object(r.jsxs)("p",{className:"text-center temp-c res-bodyt",children:["Temp: ",u.temp_c,"\u2103"]})}),Object(r.jsx)("div",{className:"col-lg-4",children:Object(r.jsxs)("p",{className:"text-center temp-f res-bodyt",children:["Temp: ",u.temp_f," F"]})})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsxs)("p",{className:"text-center wind res-bodyt",children:["Wind Speed ",u.wind_kph," kph"]})}),Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsxs)("p",{className:"text-center condt res-bodyt",children:["Condition: ",u.condition.text,function(){var e=u.condition.text;return"Sunny"==e||"Dusty"==e?Object(r.jsx)("i",{class:"fas ps-2 text-white fa-sun"}):"Mist"==e||"Light rain"==e?Object(r.jsx)("i",{class:"fas ps-2 text-white fa-cloud-sun-rain"}):"Rain"==e||"Heavy rain"==e?Object(r.jsx)("i",{class:"fas ps-2 text-white fa-cloud-showers-heavy"}):Object(r.jsx)("i",{class:"fas ps-2 text-white fa-cloud-sun"})}()]})})]})]})]}),Object(r.jsx)(O,{})]})},k=c(2),_=function(){var e=Object(k.f)();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsxs)("h1",{className:"text-white mt-4 text-center",children:["Error Page !! ",Object(r.jsx)("button",{onClick:function(){e("/")},className:"btn btn-primary",children:"Click here"})," to go to Home Page"]})]})},C=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(k.c,{children:[Object(r.jsx)(k.a,{exact:!0,path:"/",element:Object(r.jsx)(p,{})}),Object(r.jsx)(k.a,{path:"/contactjs",element:Object(r.jsx)(g,{})}),Object(r.jsx)(k.a,{path:"/result",element:Object(r.jsx)(w,{})}),Object(r.jsx)(k.a,{path:"/errorpg",element:Object(r.jsx)(_,{})})]})})};c(34);i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(l.a,{children:Object(r.jsx)(C,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.a44aa652.chunk.js.map