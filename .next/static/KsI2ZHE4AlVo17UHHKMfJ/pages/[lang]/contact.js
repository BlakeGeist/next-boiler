(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"14or":function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/contact",function(){var e=a("lYAS");return{page:e.default||e}}])},lYAS:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),r=a.n(t),i=a("JwBy"),l=a("yvGL"),s=a("/MKj"),u=a("A00i"),c=r.a.createElement;n.default=Object(s.b)(function(e){return e})(function(e){var n=e.pageStrings,a=e.lang;return c(i.a,null,c("div",{className:"container"},c("h1",null,Object(u.translate)("CONTACT-US",n,a)),c(l.default,null)))})},yvGL:function(e,n,a){"use strict";a.r(n);var t=a("ln6h"),r=a.n(t),i=a("O40h"),l=a("q1tI"),s=a.n(l),u=a("KYPV"),c=a("/MKj"),m=a("A00i"),o=a("vDqi"),b=a.n(o),f=s.a.createElement;n.default=Object(c.b)(function(e){return e})(function(e){var n=e.strings,a=e.pageStrings,t=e.lang;return f(u.b,{initialValues:{name:"",email:"",message:""},validate:function(e){var n={};return e.name?e.email?e.message||(n.message="Required"):n.email="Required":n.name="Required",n},onSubmit:function(){var e=Object(i.a)(r.a.mark(function e(n,a){var t,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.setSubmitting,e.next=3,b.a.post("/api/sendContactMessage",n);case 3:i=e.sent,console.log(i),t(!1);case 6:case"end":return e.stop()}},e)}));return function(n,a){return e.apply(this,arguments)}}()},function(e){var r=e.errors,i=e.touched,l=e.handleSubmit,s=e.isSubmitting;return f("form",{onSubmit:l},f("label",null,f("div",null,Object(m.translate)("NAME",a,t)),f(u.a,{name:"name",className:"form-input"}),r.name&&i.name&&r.name),f("label",null,f("div",null,Object(m.translate)("EMAIL",a,t)),f(u.a,{name:"email",className:"form-input"}),r.email&&i.email&&r.email),f("label",null,f("div",null,Object(m.translate)("MESSAGE",a,t)),f(u.a,{name:"message",as:"textarea",className:"form-input"}),r.message&&i.message&&r.message),f("button",{type:"submit",disabled:s},Object(m.translate)("SUBMIT",n,t)))})})}},[["14or",1,0]]]);