"use strict";(self.webpackChunkelifetch_tech_task=self.webpackChunkelifetch_tech_task||[]).push([[728],{728:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n="ShoppingCartSection_shoppingCartBox__Nravw",a=t(434),s=t(165),i=t(861),c=t(243),u=t(686),o=t.n(u),l=t(382);c.Z.defaults.baseURL="https://64749bc27de100807b1b59c8.mockapi.io/";var m=(0,l.hg)("submitForm/addOrderList",function(){var e=(0,i.Z)((0,s.Z)().mark((function e(r,t){var n,a,i,u,l,m,d;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.name,a=r.number,i=r.adress,u=r.email,l=r.dishName,m=r.amount,d=r.totalPrice,e.prev=1,e.next=4,c.Z.post("/orders",{name:n,number:a,adress:i,email:u,dishName:l,amount:m,totalPrice:d});case 4:return e.sent,console.log("Yep"),e.abrupt("return",o().Notify.success("Successful order"));case 9:return e.prev=9,e.t0=e.catch(1),o().Notify.failure("Bad Request! Try It again!"),e.abrupt("return",t.rejectWithValue(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r,t){return e.apply(this,arguments)}}()),d=t(107),f="RegisterForm_registerForm__YdC2o",p="RegisterForm_registerInput__16xll",h=t(184),x=function(){var e=(0,a.I0)();return(0,h.jsxs)("form",{className:f,onSubmit:function(r){console.log(4);var t=r.currentTarget;r.preventDefault(),e(m({name:t.elements.name.value,email:t.elements.email.value,adress:t.elements.adress.value,phone:t.elements.phone.value})),t.reset(),e((0,d.kH)())},autoComplete:"off",id:"form1",children:[(0,h.jsxs)("label",{children:["Name",(0,h.jsx)("input",{className:p,type:"text",name:"name",required:!0})]}),(0,h.jsxs)("label",{children:["Email",(0,h.jsx)("input",{className:p,type:"email",name:"email",required:!0})]}),(0,h.jsxs)("label",{children:["Phone",(0,h.jsx)("input",{className:p,type:"number",name:"phone",required:!0})]}),(0,h.jsxs)("label",{children:["Address",(0,h.jsx)("input",{className:p,type:"text",name:"adress",required:!0})]})]})},j={cartBox:"CartItem_cartBox__ohZZf",infoCart:"CartItem_infoCart__A6YdT"},_=t(351),b=t(114),v=function(e){var r=e.name,t=e.price,n=e.id,s=(e.image,(0,a.v9)(_.K).products),i=(0,a.I0)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{src:b,alt:"",width:"200",height:"150"}),(0,h.jsxs)("div",{className:j.cartBox,children:[(0,h.jsxs)("div",{className:j.infoCart,children:[(0,h.jsxs)("p",{className:j.cartName,children:[" ",r]}),(0,h.jsx)("p",{className:j.cartPrice,children:t})]}),(0,h.jsx)("button",{className:j.cartButton,onClick:function(){return function(e){var r=s.find((function(r){return r.id===e}));i((0,d.aH)(r))}(n)},children:"Delete"})]})]})},N="CartList_cartItem__lD+W1",g="CartList_cartList__7xQyX",C=function(){var e=(0,a.v9)(_.K).products;return(0,h.jsx)("ul",{className:g,children:e?e.map((function(e){return(0,h.jsx)("li",{className:N,children:(0,h.jsx)(v,{name:e.name,price:e.price,id:e.id})},e.id)})):(0,h.jsx)("p",{children:"Choose your menu"})})},y="OrderButton_orderButton__jgcRr",k=function(){return(0,h.jsx)("button",{type:"submit",className:y,form:"form1",children:"Submit"})},B="OrderInfo_orderBox__12X7Y",I=function(){return(0,h.jsxs)("div",{className:B,children:[(0,h.jsx)("p",{children:"Total Price:"}),(0,h.jsx)(k,{})]})},Z=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:n,children:[(0,h.jsx)(x,{}),(0,h.jsx)(C,{})]}),(0,h.jsx)(I,{})]})},w=function(){return(0,h.jsx)(Z,{})}},351:function(e,r,t){t.d(r,{H:function(){return a},K:function(){return n}});var n=function(e){return e.cart},a=function(e){return e.auth}},114:function(e,r,t){e.exports=t.p+"static/media/food.0bb126abee98545f1eb6.jpg"}}]);
//# sourceMappingURL=728.ffb3c070.chunk.js.map