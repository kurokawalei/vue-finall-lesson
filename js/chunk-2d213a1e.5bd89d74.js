(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213a1e"],{ae04:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c={class:"container"},r={class:"row justify-content-center"},a=Object(o["createElementVNode"])("div",{class:"text-center mt-3 mb-3"},[Object(o["createElementVNode"])("h2",null,"請先登入")],-1),s={class:"col-8"},i={class:"form-floating mb-3"},l=Object(o["createElementVNode"])("label",{for:"username"},"請輸入email",-1),d={class:"form-floating"},u=Object(o["createElementVNode"])("label",{for:"password"},"請輸入密碼",-1),m=Object(o["createElementVNode"])("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1);function b(e,t,n,b,p,f){var h=Object(o["resolveComponent"])("Loading");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(h,{active:p.isLoading},null,8,["active"]),Object(o["createElementVNode"])("div",c,[Object(o["createElementVNode"])("div",r,[a,Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("form",{id:"form",class:"form-signin mt-5 mb-5",onSubmit:t[2]||(t[2]=Object(o["withModifiers"])((function(){return f.signIn&&f.signIn.apply(f,arguments)}),["prevent"]))},[Object(o["createElementVNode"])("div",i,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":t[0]||(t[0]=function(e){return p.user.username=e})},null,512),[[o["vModelText"],p.user.username]]),l]),Object(o["createElementVNode"])("div",d,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return p.user.password=e})},null,512),[[o["vModelText"],p.user.password]]),u]),m],32)])])])],64)}n("99af");var p={data:function(){return{user:{},isLoading:!1}},methods:{signIn:function(){var e=this;this.isLoading=!0,this.$http.post("".concat("https://vue3-course-api.hexschool.io","/admin/signin"),this.user).then((function(t){var n=t.data,o=n.token,c=n.expired;document.cookie="hexToken=".concat(o,";expires=").concat(new Date(c),";"),e.$router.push("/admin/products")})).catch((function(e){alert(e)}))}}},f=n("6b0d"),h=n.n(f);const j=h()(p,[["render",b]]);t["default"]=j}}]);
//# sourceMappingURL=chunk-2d213a1e.5bd89d74.js.map