(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{379:function(e,a,t){"use strict";t.r(a);var n=t(40),i=t(41),r=t(43),s=t(42),c=t(44),o=t(96),p=t(12),d=t.n(p),h=t(6),u=t.n(h),b=t(31),m=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(r.a)(this,Object(s.a)(a).call(this,e))).createGraph=t.createGraph.bind(Object(o.a)(Object(o.a)(t))),t.animate=t.animate.bind(Object(o.a)(Object(o.a)(t))),t}return Object(c.a)(a,e),Object(i.a)(a,[{key:"animate",value:function(){var e=this.createGraph()+" 0px inset #CD7635";u()("#"+this.props.id+" .shadow").css("box-shadow",e);var a=u()("#"+this.props.id+" .shadow");new b.d({delay:1.6}).fromTo(a,.8,{boxShadow:"0px 0px inset #CD7635"},{boxShadow:e})}},{key:"createGraph",value:function(){var e,a=this.props.src;switch(this.props.name){case a[0].name:e=a[0].width;break;case a[1].name:e=a[1].width;break;case a[2].name:e=a[2].width;break;case a[3].name:e=a[3].width;break;default:return}return e}},{key:"componentDidMount",value:function(){this.animate()}},{key:"componentDidUpdate",value:function(){this.animate()}},{key:"render",value:function(){return d.a.createElement("div",{id:this.props.id,class:"bar"},d.a.createElement("p",null,this.props.name),d.a.createElement("div",{class:"shadow"}))}}]),a}(d.a.Component);a.default=m}}]);
//# sourceMappingURL=2.25e336de.chunk.js.map