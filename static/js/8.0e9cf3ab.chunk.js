(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{406:function(n,i,s){"use strict";s.r(i);var e=s(40),a=s(41),t=s(43),o=s(42),c=s(44),l=s(96),r=s(12),u=s.n(r),m=s(372),d=[{icon:m.h,class:"icon i-1 anim alt"},{icon:m.c,class:"icon i-7 anim"},{icon:m.j,class:"icon i-3 anim rev"},{icon:m.d,class:"icon i-4 anim"},{icon:m.m,class:"icon i-2 anim rev"},{icon:m.f,class:"icon i-6 anim rev"},{icon:m.l,class:"icon i-5 anim rev"},{icon:m.i,class:"size i-8 anim alt icon"},{icon:m.g,class:"size i-9 anim alt icon"},{icon:m.k,class:"size i-10 anim alt icon"},{icon:m.a,class:"size i-11 anim icon"}],b=s(6),h=s.n(b),f=s(52),k=s(31),v=s(371),y=Object(f.a)(function(){return s.e(12).then(s.bind(null,404)).then(function(n){return n.default})}),O=Object(f.a)(function(){return s.e(13).then(s.bind(null,405)).then(function(n){return n.default})}),p=function(n){function i(n){var s;return Object(e.a)(this,i),(s=Object(t.a)(this,Object(o.a)(i).call(this,n))).showSkills=s.showSkills.bind(Object(l.a)(Object(l.a)(s))),s.showIntro=s.showIntro.bind(Object(l.a)(Object(l.a)(s))),s}return Object(c.a)(i,n),Object(a.a)(i,[{key:"showSkills",value:function(){h()("#intro").css("display","none"),h()("#skills").css("display","block"),h()("#about-svg").css("display","none"),h()("#skills-svg").css("display","block"),h()("#about #head").text("SKILLS AND ABILITIES"),k.e.staggerFromTo(".card",.5,{x:1e3},{x:0},.01),k.e.fromTo("#svgs",2,{rotationY:0,transformOrigin:"center"},{rotationY:180,transformOrigin:"center"}).yoyo(!0)}},{key:"showIntro",value:function(){h()("#intro").css("display","block"),h()("#skills").css("display","none"),h()("#about-svg").css("display","block"),h()("#skills-svg").css("display","none"),h()("#about #head").text("INTRODUCTION"),k.e.fromTo("#intro-p",.5,{y:40},{y:0}),k.e.fromTo("#svgs",2,{rotationY:0,transformOrigin:"center"},{rotationY:180,transformOrigin:"center"}).yoyo(!0)}},{key:"render",value:function(){var n=d.map(function(n){return u.a.createElement(v.a,{className:n.class,icon:n.icon})});return u.a.createElement("section",{id:"about"},u.a.createElement("h3",{id:"head",class:"anim"},"Introduction"),u.a.createElement("h1",{class:"anim"},"About Me"),u.a.createElement("div",{class:"information"},u.a.createElement(y,null),u.a.createElement(O,{showIntro:this.showIntro,showSkills:this.showSkills})),u.a.createElement("div",{class:"container"},n))}}]),i}(u.a.Component);i.default=p}}]);
//# sourceMappingURL=8.0e9cf3ab.chunk.js.map