import{l as c}from"./logo.cd107cd0.js";import{A as _,s as m}from"./api.93f647bf.js";import{_ as p,f as u,o as g,c as h,b as e,i as n,v as l,a as f,w as v,e as a}from"./index.46219c50.js";const w={name:"LoginPage",data(){return{logoImage:c,form:{email:"",password:""}}},methods:{async submit(){const{data:i}=await _.login(this.form);m(i.token),await this.$router.replace("/dash")}}},x={class:"LoginPage"},b={class:"cover"},k={class:"header"},y=["src"],L=e("h1",{class:"text-2xl text-center opacity-60"},[e("span",{class:""},"Login to"),a(" NeoBase ")],-1),N={class:"form"},P={class:"form-group"},V=e("label",{for:"email"},"Email",-1),B={class:"form-group"},A=e("label",{for:"password"},"Password",-1),C={class:"msg opacity-75"},T=a(" New here? "),E=a("Register Here");function I(i,o,U,j,s,r){const d=u("router-link");return g(),h("div",x,[e("div",b,[e("div",k,[e("img",{src:s.logoImage,width:"120",height:"120"},null,8,y),L]),e("div",N,[e("div",P,[V,n(e("input",{id:"email","onUpdate:modelValue":o[0]||(o[0]=t=>s.form.email=t),name:"email",placeholder:"john@doe.com"},null,512),[[l,s.form.email]])]),e("div",B,[A,n(e("input",{id:"password","onUpdate:modelValue":o[1]||(o[1]=t=>s.form.password=t),type:"password",placeholder:"secure password"},null,512),[[l,s.form.password]])]),e("button",{class:"",onClick:o[2]||(o[2]=(...t)=>r.submit&&r.submit(...t))},"Sign in")]),e("div",C,[e("p",null,[T,f(d,{class:"text-blue-700 font-bold",to:"/register"},{default:v(()=>[E]),_:1})])])])])}var R=p(w,[["render",I]]);export{R as default};
