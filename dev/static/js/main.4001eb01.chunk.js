(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/logo.54b0d79c.svg"},36:function(e,t,a){e.exports=a(49)},41:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),o=(a(41),a(20)),i=a.n(o),u=(a(42),a(65)),s=function(){return l.a.createElement("div",{className:"navbar-background"},l.a.createElement("div",{className:"flexbox-container"},l.a.createElement("div",null,l.a.createElement("a",{href:"#home"},"\u200e",l.a.createElement("button",{className:"home"},"Home"))),l.a.createElement("div",null,l.a.createElement("a",{href:"#about"},l.a.createElement("button",null,"\u200f\u200f\u200eAbout\u200e\u200f\u200f\u200e\u200e"))),l.a.createElement("div",null,l.a.createElement("a",{href:"#howtouse"},l.a.createElement("button",null,"How To Use?"))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://cod-ed.github.io/handwrite",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("button",null,"Documentation")))))},m=a(18),d=a.n(m),h=a(21),E=a(17),b="https://handwritetest.herokuapp.com",f=a(27),p=a(66),w=a(69),g=a(67),y=a(68);var v=function(e){var t=Object(n.useState)(["",null]),a=Object(E.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),i=Object(E.a)(o,2),s=i[0],m=i[1],v=Object(n.useState)(0),k=Object(E.a)(v,2),x=k[0],N=k[1],j=Object(n.useRef)(""),F=Object(f.a)({accept:"image/*",noClick:!0,noKeyboard:!0,maxFiles:1,onDrop:function(e){console.log(e[0]),e[0]&&function(e){var t=["jpeg","jpg","png"],a="";return e.size/1024/1024>2&&(a+="File size exceeds 2 MiB! "),t.includes(e.type.split("/")[1])||(a+="File type not supported! Allowed file extensions - "+t.join(", ")),!a||(alert(a),!1)}(e[0])&&(c([URL.createObjectURL(e[0]),e[0]]),N(1))}}),O=F.getRootProps,S=F.getInputProps,P=F.open;function C(e){return new Promise(function(t){return setTimeout(t,e)})}function H(){return[2,3,4].includes(x)}return l.a.createElement("div",null,l.a.createElement("div",{className:"loader",style:{display:H()?"":"none"}},{0:"Not doing anything",1:"Image uploaded.",2:"Sending image...",3:"Generating your font...",4:"Fetching your font...",5:"Fetched!",6:"Error"}[x],l.a.createElement("div",{className:"spinner"})),l.a.createElement("div",{className:"loader",style:{display:6===x?"":"none"}},l.a.createElement("font",{color:"red"}," ",j.current," ")),l.a.createElement("div",{className:"grid"},l.a.createElement("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),r[1]){var t,a,n=new FormData,l=document.getElementById("researchOption").checked;n.append("image",r[1]),n.append("research",l);var c,o,i=-1;N(2),fetch(b+"/handwrite/input",{method:"POST",body:n}).then(function(e){return e.json()}).then(function(){var e=Object(h.a)(d.a.mark(function e(n){var l,r,o,u;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l=n.response_code,r=n.message,j.current=r,1!==l){e.next=8;break}N(6),console.log(r),e.next=39;break;case 8:if(2!==l){e.next=13;break}N(6),console.log(r),e.next=39;break;case 13:if(3!==l){e.next=18;break}N(6),console.log(r),e.next=39;break;case 18:if(0!==l){e.next=39;break}N(3),c=n.path,o=0;case 22:if(!(o<10)){e.next=39;break}return e.next=25,fetch(b+"/handwrite/status/"+c);case 25:return t=e.sent,e.next=28,t.json();case 28:return a=e.sent,u=a.status,console.log(u),0===u?(console.log("Font file ready!"),i=0,N(4)):1===u?(console.log("Still Processing!"),i=-1):2===u?(console.log("Unable to Process!"),i=2,j.current="Unable to Process!",N(6)):3===u&&(console.log("Not Found!"),i=3,j.current="Not Found!",N(6)),e.next=34,C(5e3);case 34:if(-1===i){e.next=36;break}return e.abrupt("break",39);case 36:o++,e.next=22;break;case 39:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).then(function(){0===i&&fetch(b+"/handwrite/fetch/"+c,{method:"POST"}).then(function(e){return e.blob()}).then(function(e){console.log(e),o=URL.createObjectURL(e),console.log(o),m(o),N(5)})})}}(e)}},l.a.createElement(u.a,{container:!0,direction:"row",justify:"space-around",alignItems:"center"},l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("div",Object.assign({},O({className:"dropzone"}),{className:"image-container"})," ",l.a.createElement("input",S()),r[0]?l.a.createElement("div",{className:"input-image"},l.a.createElement("img",{src:r[0],alt:"Selected Form"})):l.a.createElement("div",null,l.a.createElement("h3",null,"Drag 'n' drop your handwritten sample"),l.a.createElement("h2",null,"OR"),l.a.createElement("center",null,l.a.createElement("button",{type:"button",onClick:P},l.a.createElement(p.a,null),"\u200e \u200e \u200eChoose file")))),r[1]?l.a.createElement("center",null,l.a.createElement("h6",null,r[1].path,l.a.createElement(g.a,{"aria-label":"delete",color:"secondary",size:"small",onClick:function(){c(["",null]),N(0)},disabled:H()},l.a.createElement(y.a,null)))):""),l.a.createElement("div",{className:"submit-button"},l.a.createElement(w.a,{variant:"outlined",href:"https://github.com/cod-ed/handwrite/raw/dev/handwrite_sample.pdf"},"Download Sample Form"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(w.a,{type:"submit",variant:"outlined",disabled:H()||0===x},"CREATE FONT"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"researchOption",defaultChecked:!0}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexCheckChecked"},"Opt-in for research use.")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(w.a,{variant:"outlined",href:s,download:"font.ttf",style:{display:Boolean(s)?"":"none"}},"Download your font"))))))},k=function(){return l.a.createElement("div",{className:"subsection",id:"howtouse"},l.a.createElement("h1",null,"How To Use?"),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement(u.a,{container:!0,direction:"row",justify:"space-around",alignItems:"center"},l.a.createElement("div",{align:"left"},l.a.createElement("h2",null,"Creating your Handwritten Sample"),l.a.createElement("br",null),l.a.createElement("ol",{type:"1"},l.a.createElement("li",null," Take a printout of the ",l.a.createElement("a",{href:"https://github.com/cod-ed/handwrite/raw/dev/handwrite_sample.pdf"},"sample form"),".")," ",l.a.createElement("br",null),l.a.createElement("li",null," Fill the form using the reference image.")," ",l.a.createElement("br",null),l.a.createElement("li",null," Scan the filled form using a scanner, or any scanning application on your phone.")," ",l.a.createElement("br",null),l.a.createElement("li",null," Save the scan in JPEG format.")," ",l.a.createElement("br",null)),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("h2",null,"Creating your font"),l.a.createElement("br",null),l.a.createElement("ol",{type:"1"},l.a.createElement("li",null,"Upload the scanned JPEG image ",l.a.createElement("a",{href:"#home"},"above"),".")," ",l.a.createElement("br",null),l.a.createElement("li",null,"Fill the form with the desired font details and click the CREATE FONT button.")," ",l.a.createElement("br",null),l.a.createElement("li",null,"Wait for a few seconds and download your TTF font. (If an error occurs try again with a new scan)")," ",l.a.createElement("br",null),l.a.createElement("li",null,"Install the font in your system!")," ",l.a.createElement("br",null))),l.a.createElement("div",null,"Your form should look like this:",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("img",{src:"https://raw.githubusercontent.com/cod-ed/assets/handwrite/handwrite_filled_form.jpg",className:"image-container",alt:"Filled Form Example"}))),l.a.createElement("br",null)," ",l.a.createElement("br",null),"Here's the end result!",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("img",{src:"https://raw.githubusercontent.com/cod-ed/assets/handwrite/handwrite_sentence.png",alt:"Output Example"}))},x=function(){return l.a.createElement("div",{className:"subsection",id:"about"},l.a.createElement("h1",null,"About"),l.a.createElement("br",null),l.a.createElement("div",null,"Ever had those long-winded assignments, that the teacher always wants handwritten? Is your written work messy because you think faster than you write? ",l.a.createElement("br",null),l.a.createElement("br",null)," ",l.a.createElement("i",null,"Wish there was a font for your handwriting?")," ",l.a.createElement("br",null),l.a.createElement("br",null)," Handwrite helps you do exactly that! Refer to the ",l.a.createElement("a",{href:"#howtouse"},"How to Use")," section for more details."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,"Why did we build this?"),l.a.createElement("div",null,l.a.createElement("br",null),"Handwriting stuff is a struggle, it\u2019s tiring, time consuming and inconsistent but still is a requirement for so many assignments, tests etc. We, as developers, love to type on our keyboard far more than writing and it\u2019s practical, isn\u2019t it? So we decided to build something that can help us type out our writing. Being experienced in Python and wanting to learn Image Processing, this was the perfect project, so we got started!"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,"Want to Contribute?"),l.a.createElement("div",null,l.a.createElement("br",null),"We \u2665 open-source! ",l.a.createElement("br",null)," We look forward to your contributions! Don\u2019t shy away if you are a beginner, we are happy to help you get started. ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"about-list"},l.a.createElement("ul",null,"The following repositories help handwrite work: ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/cod-ed/handwrite"},"Handwrite:")," Core Handwrite project build with Python. It also features a CLI interface for handwrite. (Python) ",l.a.createElement("br",null)," You can get started with how core handwrite works ",l.a.createElement("a",{href:"https://cod-ed.github.io/handwrite/"},"here.")),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/cod-ed/handwrite-web"},"Handwrite Web:")," Frontend of handwrite web. (React)"),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/cod-ed/handwrite-server"},"Handwrite Server:")," Backend for handwrite, hosted on heroku. (Python, Flask)"),l.a.createElement("br",null)))))};var N=function(){return l.a.createElement("div",{className:"handwrite",id:"home"},l.a.createElement("img",{src:i.a,alt:"handwrite logo",className:"Handwrite-Logo"}),l.a.createElement(s,null),l.a.createElement(v,null),l.a.createElement("br",null),l.a.createElement(x,null),l.a.createElement("hr",{className:"divider"}),l.a.createElement("br",null),l.a.createElement(k,null),l.a.createElement("div",{className:"bottom-container"}))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.4001eb01.chunk.js.map