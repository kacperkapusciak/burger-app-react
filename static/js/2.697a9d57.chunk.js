(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{108:function(e,n,r){"use strict";r.r(n);var t=r(14),a=r(15),i=r(17),o=r(16),c=r(18),u=r(0),s=r.n(u),p=r(21),d=r(5);function l(){var e=Object(d.a)(["\n  width: 80%;\n  border: 1px solid #eee;\n  box-shadow: 0 2px 3px #ccc;\n  padding: 10px;\n  margin: 10px auto;\n  box-sizing: border-box;\n"]);return l=function(){return e},e}var m=r(6).a.div(l()),b=function(e){var n=[];for(var r in e.ingredients)n.push({name:r,amount:e.ingredients[r]});var t=n.map(function(e){return s.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")});return s.a.createElement(m,null,s.a.createElement("p",null,"Ingredients: ",t),s.a.createElement("p",null,"Price: ",s.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))},f=r(44),h=r(24),g=r(45),x=r(8),v=function(e){function n(){return Object(t.a)(this,n),Object(i.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=s.a.createElement(f.a,null);return this.props.loading||(e=this.props.orders.map(function(e){return s.a.createElement(b,{key:e.id,ingredients:e.ingredients,price:e.price})})),s.a.createElement("div",null,e)}}]),n}(u.Component);n.default=Object(p.b)(function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onFetchOrders:function(n,r){return e(x.j(n,r))}}})(Object(g.a)(v,h.a))}}]);
//# sourceMappingURL=2.697a9d57.chunk.js.map