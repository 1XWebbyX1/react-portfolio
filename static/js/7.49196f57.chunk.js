(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{243:function(e,t,a){"use strict";a.r(t);var i=a(19),n=a(20),r=a(22),o=a(21),c=a(23),s=a(43),d=a(1),p=a.n(d),l=a(17),h=a.n(l),u=a(244),m=a(314),b=a.n(m),g=a(245),f=a(241),w=a(242),x=a(247),j=a(386),v=a(248),y=a(249),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={index:0,project:function(){return g.default[this.index].project},details:function(){return g.default[this.index].details},description:function(){return g.default[this.index].description},src:function(){return u.default[this.index]},graph:function(){return g.default[this.index].graph},code:function(){return g.default[this.index].code},github:function(){return g.default[this.index].github}},a.handleNext=a.handleNext.bind(Object(s.a)(Object(s.a)(a))),a.handlePrev=a.handlePrev.bind(Object(s.a)(Object(s.a)(a))),a.animateChange=a.animateChange.bind(Object(s.a)(Object(s.a)(a))),a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){h()(".fa-arrow-circle-left").css("opacity","0.1")}},{key:"animateChange",value:function(){var e;e=window.matchMedia("(max-width: 800px)").matches?"auto":"350px",new f.d({delay:.3,repeat:1,repeatDelay:.2,yoyo:!0,ease:f.c.easeOut}).fromTo(".arrow",.4,{visibility:"visible"},{visibility:"hidden"},"-=0.4").fromTo(".mask",.2,{boxShadow:"0px 0px 0px inset #CA7564"},{boxShadow:"0px -350px 0px inset #CA7564"}).fromTo(".graph",.2,{height:"45%"},{height:"0px"},"-=0.25").fromTo(".inner img, .inner .mask",.5,{height:e},{height:"175px",boxShadow:"0px -350px 0px inset #212121\t"})}},{key:"handleNext",value:function(){this.state.index<=8&&(this.animateChange(),this.setState({index:this.state.index+1}),h()(".inner #project").css("filter","blur(45px)"),setTimeout(function(){a(315)(""+this.state.src()).then(function(e){h()("#project").attr("src",e.default)}).then(function(){h()(".inner img").on("load",function(){(new f.d).fromTo("#project",.4,{filter:"blur(45px)"},{filter:"blur(0px)"})})})}.bind(this),200))}},{key:"handlePrev",value:function(){this.state.index>=1&&(this.animateChange(),this.setState({index:this.state.index-1}),setTimeout(function(){a(315)(""+this.state.src()).then(function(e){h()("#project").attr("src",e.default)})}.bind(this),200))}},{key:"componentDidUpdate",value:function(){this.state.index<1?(h()(".fa-arrow-circle-left").css("opacity","0.1"),h()(".fa-arrow-circle-right").css("opacity","1")):this.state.index>8?(h()(".fa-arrow-circle-left").css("opacity","1"),h()(".fa-arrow-circle-right").css("opacity","0.1")):(h()(".fa-arrow-circle-left").css("opacity","1"),h()(".fa-arrow-circle-right").css("opacity","1"))}},{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement("h1",{class:"anim"},this.state.project()),p.a.createElement("div",{class:"small-icon"},p.a.createElement("div",{class:"holder",onClick:this.handlePrev},p.a.createElement(w.a,{className:"icon-s",icon:j.a})),p.a.createElement("p",{class:"anim"},"A ",this.state.details(),", designed and coded by following an iterative approach. The Project used ",p.a.createElement("span",{class:"highlight"},this.state.description()),". The design is responsive and has wide browser support."),p.a.createElement("div",{class:"holder",onClick:this.handleNext},p.a.createElement(w.a,{className:"icon-s",onClick:this.handleNext,icon:j.b}))),p.a.createElement("div",{class:"slider anim"},p.a.createElement(v.default,{id:"left",direction:j.a,onClick:this.handlePrev}),p.a.createElement("figure",{class:"inner"},p.a.createElement("div",{class:"mask"}),p.a.createElement("img",{id:"project",src:b.a,alt:"project-img"}),p.a.createElement(y.default,{src:this.state.graph()})),p.a.createElement(v.default,{id:"right",direction:j.b,onClick:this.handleNext})),p.a.createElement("div",{id:"buttons"},p.a.createElement("a",{href:this.state.code(),target:"_blank",rel:"noopener noreferrer"},p.a.createElement("button",{class:"code-pen button anim-butt "},"View the Code ",p.a.createElement(w.a,{icon:j.c}))),p.a.createElement("a",{href:this.state.github(),target:"_blank",rel:"noopener noreferrer"},p.a.createElement("button",{class:"git-hub button anim-butt"},"View the Demo ",p.a.createElement(w.a,{icon:x.e})))))}}]),t}(p.a.Component);t.default=k},244:function(e,t,a){"use strict";a.r(t);t.default=["./data/images/markdown.png","./data/images/pomodoro.png","./data/images/quote.png","./data/images/shortener.png","./data/images/landing_page.png","./data/images/drums.png","./data/images/calculator.png","./data/images/documentation.png","./data/images/tribute.png","./data/images/survey.png"]},245:function(e,t,a){"use strict";a.r(t);var i=a(246),n=[{project:"Markdown Previewer",details:"Markdown Previewer for live markdown preview",description:"JavaScript, React, Sass, Redux, Jest and chai-enzyme",graph:i.default[1],code:"https://github.com/1XWebbyX1/markdown-previewer-pwa",github:"https://1xwebbyx1.github.io/markdown-previewer-pwa/"},{project:"Pomodoro Clock",details:"Pomodoro Clock timer app",description:"JavaScript, React, Sass, Redux, Jest and chai-enzyme",graph:i.default[7],code:"https://github.com/1XWebbyX1/pomodoro-clock-pwa",github:"https://1xwebbyx1.github.io/pomodoro-clock-pwa/"},{project:"Quote Machine",details:"Quote Machine Full Stack MERN app",description:"Node, React, Express, Sass, Redux, MongoDB, Mongoose,  Jest and chai-enzyme",graph:i.default[4],code:"https://github.com/1XWebbyX1/quote-machine-pwa",github:"https://quote-machine-pwa.herokuapp.com/"},{project:"URL Shortener",details:"URL Shortener Microservice using RESTful API",description:"HTML, Node, Sass, Express, MongoDB, Mongoose, Chai and Mocha",graph:i.default[9],code:"https://github.com/1XWebbyX1/url-shortener",github:"https://my-miniurl.herokuapp.com/"},{project:"Product Landing Page",details:"Product Landing Page",description:"JavaScript, jQuery, mousewheel, Sass and React",graph:i.default[6],code:"https://github.com/1XWebbyX1/landing-page",github:"https://1xwebbyx1.github.io/landing-page/"},{project:"Drum Machine",details:"Drum Machine app, (currently not supported in safari), to play electric drum kit",description:"JavaScript, React, Sass, Jest and chai-enzyme",graph:i.default[2],code:"https://github.com/1XWebbyX1/drum-machine-pwa",github:"https://1xwebbyx1.github.io/electric-drums-pwa/"},{project:"Calculator",details:"Calculator web app",description:"JavaScript, jQuery, Redux, Sass and React",graph:i.default[8],code:"https://github.com/1XWebbyX1/calculator-pwa",github:"https://1xwebbyx1.github.io/calculator-pwa/"},{project:"Documentation Page",details:"Technical Documentation Page",description:"JavaScript, Sass, jQuery and React",graph:i.default[0],code:"https://github.com/1XWebbyX1/react-documentation-page",github:"https://1xwebbyx1.github.io/react-documentation-page/"},{project:"Tribute Page",details:"Tribute page to Dr.Norman Borlaug",description:"JavaScript, jQuery, HTML and Sass",graph:i.default[3],code:"https://github.com/1XWebbyX1/tribute-webpage",github:"https://1xwebbyx1.github.io/tribute-webpage/"},{project:"Survey Form",details:"Survey Form template",description:"JavaScript, jQuery, Sass and React",graph:i.default[5],code:"https://github.com/1XWebbyX1/survey-form",github:"https://codepen.io/1xwebbyx1/full/NEPymW"}];t.default=n},246:function(e,t,a){"use strict";a.r(t);t.default=[[{color:"#CD7635",name:"React",width:"350px"},{color:"#CD7635",name:"jQuery",width:"150px"},{color:"#CD7635",name:"Sass",width:"150px"}],[{color:"#CD7635",name:"React",width:"250px"},{color:"#CD7635",name:"Sass",width:"380px"},{color:"#CD7635",name:"Redux",width:"50px"}],[{color:"#e68a00",name:"React",width:"150px"},{color:"#330066",name:"Sass",width:"150px"}],[{color:"white",name:"jQuery",width:"80px"},{color:"#330066",name:"Sass",width:"200px"}],[{color:"#e68a00",name:"React",width:"360px"},{color:"#e68a00",name:"Redux",width:"160px"},{color:"#e68a00",name:"Express",width:"160px"},{color:"#e68a00",name:"Sass",width:"160px"}],[{color:"#e68a00",name:"React",width:"200px"},{color:"white",name:"jQuery",width:"30px"},{color:"#330066",name:"Sass",width:"350px"}],[{color:"#e68a00",name:"React",width:"120px"},{color:"white",name:"jQuery",width:"100px"},{color:"#330066",name:"Sass",width:"400px"}],[{color:"#e68a00",name:"React",width:"280px"},{color:"#330066",name:"Sass",width:"200px"},{color:"#608000",name:"Redux",width:"100px"}],[{color:"#e68a00",name:"React",width:"300px"},{color:"white",name:"jQuery",width:"50px"},{color:"#330066",name:"Sass",width:"140px"},{color:"#608000",name:"Redux",width:"80px"}],[{color:"#e68a00",name:"HTML",width:"150px"},{color:"white",name:"Node",width:"300px"},{color:"#330066",name:"Express",width:"300px"},{color:"#608000",name:"Sass",width:"150px"}]]},248:function(e,t,a){"use strict";a.r(t);var i=a(19),n=a(20),r=a(22),o=a(21),c=a(23),s=a(1),d=a.n(s),p=a(242),l=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return d.a.createElement("div",{id:this.props.id,class:"arrow",onClick:this.props.onClick},d.a.createElement("div",{class:"outer-circle "},d.a.createElement("div",{class:"inner-circle "},d.a.createElement(p.a,{icon:this.props.direction,className:"icon",onClick:this.props.onClick}))))}}]),t}(d.a.Component);t.default=l},249:function(e,t,a){"use strict";a.r(t);var i=a(19),n=a(20),r=a(22),o=a(21),c=a(23),s=a(1),d=a.n(s),p=a(250),l=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=this.props.src,a=1,i=t.map(function(t){var i="bar-"+a;return a++,d.a.createElement(p.default,{id:i,name:t.name,src:e.props.src})});return d.a.createElement("div",{class:"graph"},i)}}]),t}(d.a.Component);t.default=l},250:function(e,t,a){"use strict";a.r(t);var i=a(19),n=a(20),r=a(22),o=a(21),c=a(23),s=a(43),d=a(1),p=a.n(d),l=a(17),h=a.n(l),u=a(241),m=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).createGraph=a.createGraph.bind(Object(s.a)(Object(s.a)(a))),a.animate=a.animate.bind(Object(s.a)(Object(s.a)(a))),a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"animate",value:function(){var e=this.createGraph()+" 0px inset #CD7635";h()("#"+this.props.id+" .shadow").css("box-shadow",e);var t=h()("#"+this.props.id+" .shadow");new u.d({delay:1.6}).fromTo(t,.8,{boxShadow:"0px 0px inset #CD7635"},{boxShadow:e})}},{key:"createGraph",value:function(){var e,t=this.props.src;switch(this.props.name){case t[0].name:e=t[0].width;break;case t[1].name:e=t[1].width;break;case t[2].name:e=t[2].width;break;case t[3].name:e=t[3].width;break;default:return}return e}},{key:"componentDidMount",value:function(){this.animate()}},{key:"componentDidUpdate",value:function(){this.animate()}},{key:"render",value:function(){return p.a.createElement("div",{id:this.props.id,class:"bar"},p.a.createElement("p",null,this.props.name),p.a.createElement("div",{class:"shadow"}))}}]),t}(p.a.Component);t.default=m},251:function(e,t,a){"use strict";a.r(t);var i=a(19),n=a(20),r=a(22),o=a(21),c=a(23),s=a(1),d=a.n(s),p=a(243),l=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return d.a.createElement("section",{id:"projects"},d.a.createElement("h3",null,"PROJECT"),d.a.createElement(p.default,null))}}]),t}(d.a.Component);t.default=l},314:function(e,t,a){e.exports=a.p+"static/media/markdown.f5a89c03.png"},315:function(e,t,a){var i={"./Arrow":[248,9],"./Arrow.js":[248,9],"./Article":[243,9],"./Article.js":[243,9],"./Bar":[250,9],"./Bar.js":[250,9],"./Graph":[249,9],"./Graph.js":[249,9],"./Projects":[251,9],"./Projects.js":[251,9],"./data/graphs":[246,9],"./data/graphs.js":[246,9],"./data/imageStrings":[244,9],"./data/imageStrings.js":[244,9],"./data/images/calculator.png":[388,7,10],"./data/images/documentation.png":[389,7,11],"./data/images/drums.png":[390,7,12],"./data/images/landing_page.png":[391,7,13],"./data/images/markdown.png":[314,7],"./data/images/pomodoro.png":[392,7,14],"./data/images/quote.png":[393,7,15],"./data/images/shortener.png":[394,7,16],"./data/images/survey.png":[395,7,17],"./data/images/tribute.png":[396,7,18],"./data/projectsData":[245,9],"./data/projectsData.js":[245,9]};function n(e){var t=i[e];return t?Promise.all(t.slice(2).map(a.e)).then(function(){var e=t[0];return a.t(e,t[1])}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return Object.keys(i)},n.id=315,e.exports=n}}]);
//# sourceMappingURL=7.49196f57.chunk.js.map