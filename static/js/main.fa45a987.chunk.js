(this.webpackJsonpsigns=this.webpackJsonpsigns||[]).push([[0],{151:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(52),c=a.n(o),i=(a(151),a(59)),l=a(60),s=a(73),d=a(71),u=a(133),j=a(86),m=a(118),b=a(174),h=a(173),g=a(161),p=a(47),f=a(7),O={fName:"",lName:"",email:"",password:""},v=function(e,t){switch(t.type){case"HANDLE_INPUT":return Object(m.a)(Object(m.a)({},e),{},Object(j.a)({},t.field,t.payload));default:return e}},x=function(){var e=Object(n.useReducer)(v,O),t=Object(u.a)(e,2),a=t[0],r=t[1],o=function(e){r({type:"HANDLE_INPUT",field:e.target.name,payload:e.target.value})};return Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"ui raised very padded text container segment black inverted",id:"cont",children:Object(f.jsxs)(b.a,{inverted:!0,children:[Object(f.jsxs)(b.a.Group,{widths:"equal",children:[Object(f.jsx)(b.a.Field,{id:"form-input-control-first-name",control:h.a,label:"First name",required:!0,placeholder:"First name",onChange:function(e){o(e)},name:"fName",value:a.fName}),Object(f.jsx)(b.a.Field,{id:"form-input-control-last-name",control:h.a,label:"Last name",required:!0,placeholder:"Last name",onChange:function(e){o(e)},name:"lName",value:a.lName})]}),Object(f.jsxs)(b.a.Group,{children:[Object(f.jsx)(b.a.Field,{width:11,id:"form-input-control-error-email",control:h.a,label:"Email",type:"email",required:!0,placeholder:"Email Address",onChange:function(e){o(e)},name:"email",value:a.email}),Object(f.jsx)(b.a.Field,{width:5,id:"form-input-control-password",control:h.a,type:"password",label:"Password",placeholder:"Password",required:!0,onChange:function(e){o(e)},name:"password",value:a.password})]}),Object(f.jsx)(g.a,{color:"youtube",id:"form-button-control-public",onClick:function(e){r({type:"HANDLE_INPUT"}),function(e){var t=[];console.log("fname: ",e.target.form[0].value),console.log("lname: ",e.target.form[1].value),console.log("email: ",e.target.form[2].value),console.log("password: ",e.target.form[3].value),null==localStorage.getItem(e.target.form[2].value)?(t.push(e.target.form[0].value,e.target.form[1].value,e.target.form[3].value),localStorage.setItem(e.target.form[2].value,t)):alert("There has been an error! There exists an account witht the email address ",e.target.form[2].value,"already.."),function(e){e.target.form.reset()}(e)}(e)},children:"Sign Up"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(p.b,{to:"/login",children:Object(f.jsx)(g.a,{color:"youtube",floated:"right",children:"Log In instead"})})]})})})},y=a(175),w=a(57),I=a(176),C=a(178),N=a(131),F=a.n(N),k=function(){F()("#myForm").addClass("error")};var E=function(){return Object(f.jsxs)("div",{className:"ui very raised padded text container segment inverted",id:"cont",children:[Object(f.jsxs)(b.a,{inverted:!0,onSubmit:function(e){!function(e){localStorage.getItem(e.target[0].value)&&localStorage.getItem(e.target[0].value).split(",")[2]===e.target[1].value?console.log("login successful"):k()}(e)},id:"myForm",children:[Object(f.jsx)(b.a.Group,{widths:"equal",children:Object(f.jsx)(b.a.Field,{label:"Enter Email Id",required:!0,type:"email",placeholder:"User Email",control:h.a})}),Object(f.jsx)(b.a.Group,{widths:"equal",children:Object(f.jsx)(b.a.Field,{label:"Enter Password",required:!0,type:"password",placeholder:"User Password",control:h.a})}),Object(f.jsxs)(g.a,{color:"youtube",animated:"fade",children:[Object(f.jsx)(g.a.Content,{visible:!0,children:Object(f.jsx)(w.a,{name:"arrow right"})}),Object(f.jsx)(g.a.Content,{hidden:!0,children:"Log In"})]}),Object(f.jsx)(I.a,{error:!0,header:"Action Forbidden",content:"Invalid Login"})]}),Object(f.jsx)(C.a,{inverted:!0,children:Object(f.jsx)(p.b,{to:"/signup",children:Object(f.jsx)(g.a,{color:"youtube",floated:"right",type:"submit",children:"New User? SignUp!"})})})]})},L=a(10),S=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"ui raised very padded text inverted container segment",id:"cont",children:Object(f.jsx)("h1",{children:"Hi , Welcome back.."})})}}]),a}(n.Component),q=(n.Component,function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={activeItem:"signup"},e.state={},e.handleItemClick=function(t,a){var n=a.name;return e.setState({activeItem:n})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return Object(f.jsxs)(p.a,{children:[Object(f.jsxs)(y.a,{secondary:!0,size:"huge",inverted:!0,color:"red",children:[Object(f.jsx)(y.a.Item,{as:p.c,to:"/signup",name:"sign up",active:"signup"===e,onClick:this.handleItemClick}),Object(f.jsx)(y.a.Item,{as:p.c,to:"/login",name:"log in",active:"login"===e,onClick:this.handleItemClick})]}),Object(f.jsx)(L.a,{path:"/signup",exact:!0,render:function(){return Object(f.jsx)(x,{})}}),Object(f.jsx)(L.a,{path:"/login",exact:!0,render:function(){return Object(f.jsx)(E,{})}}),Object(f.jsx)(L.a,{exact:!0,path:"/home",render:function(){return Object(f.jsx)(S,{})}})]})}}]),a}(n.Component)),P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,179)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};a(159);c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(q,{})}),document.getElementById("root")),P()}},[[160,1,2]]]);
//# sourceMappingURL=main.fa45a987.chunk.js.map