(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{Qebf:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/login",function(){var e=n("aqZc");return{page:e.default||e}}])},aqZc:function(e,a,n){"use strict";n.r(a);var t=n("zrwo"),s=n("MX0m"),i=n.n(s),o=n("q1tI"),r=n.n(o),c=n("Wcq6"),p=n.n(c),d=(n("6nsN"),n("hmoh")),l=n.n(d),u=n("JwBy"),g=n("nOHt"),f=n.n(g),m=n("eHHv"),w=n("Bqhj"),b=n("D9KS"),h=n("/MKj"),j=n("p46w"),x=n.n(j),v=r.a.createElement,y=Object(m.a)(Object(m.b)("state","setState",{email:"",password:"",isLoading:!1,errorMessage:""}))(function(e){var a=e.setState,n=e.state,s=e.dispatch,o=e.lang;p.a.apps.length||p.a.initializeApp(l.a);var r=n.email,c=n.password,d=n.isLoading,g=n.errorMessage;function m(e,s){var i=Object(t.a)({},n);i[e]=s,a(i)}return v(u.a,{pageMod:"about"},v("div",{className:"jsx-2762284588 container"},v("h1",{className:"jsx-2762284588"},"Login page"),v("p",{className:"jsx-2762284588"},"Login page content"),v("div",{className:"jsx-2762284588 login-form-wrapper"},v("div",{className:"jsx-2762284588 login-form"},v(w.a,{errorMessage:g,email:r,password:c,handleEmailPassAuth:function(e){e.preventDefault(),m("isLoading",!0);var a=n.email,t=n.password;p.a.auth().signInWithEmailAndPassword(a,t).then(function(e){e.user.getIdToken().then(function(e){x.a.set("token2",e,{expires:1}),f.a.push("/".concat(o,"/dashboard"))}),s({type:"SET_ITEM",name:"user",payload:e.user}),s({type:"SET_ITEM",name:"isLoggedIn",payload:!0})}).catch(function(e){var a=e.code,n=e.message;m("isLoading",!1),"auth/user-not-found"===a&&(n="User not found please register"),m("errorMessage",n)})},handleChange:function(e){var s=Object(t.a)({},n);s[e.target.name]=e.target.value,a(s)}}),v("div",{className:"jsx-2762284588"},v("button",{className:"jsx-2762284588"},"Sign In with Google"))),v(b.a,{isLoading:d}))),v(i.a,{id:"2762284588"},[".login-form-wrapper.jsx-2762284588{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:50px;position:relative;}"]))});a.default=Object(h.b)(function(e){return e})(y)}},[["Qebf",1,0]]]);