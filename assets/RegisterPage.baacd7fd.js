import{l as c}from"./logo.cd107cd0.js";import{A as m,s as _}from"./api.12c2b3cd.js";import{_ as p,a as u,o as f,c as h,d as e,w as l,v as n,b as g,e as v,g as r}from"./index.004dc69e.js";const w={name:"RegisterPage",data(){return{logoImage:c,form:{email:"",password:""}}},mounted(){const o=this.$route.query.email;o&&(this.form.email=o),this.form.email?this.$refs.password.focus():this.$refs.email.focus()},methods:{async submit(){const{data:o,status:s}=await m.register(this.form);_(o.token),await this.$router.replace("/dash")}}},x={class:"LoginPage"},b={class:"cover"},y={class:"header"},k=["src"],P=e("h1",{class:"text-2xl text-center opacity-60"},[e("span",{class:""},"Join"),r(" NeoBase ")],-1),V={class:"form"},A={class:"form-group"},B=e("label",{for:"email"},"Email",-1),C={class:"form-group"},N=e("label",{for:"password"},"Password",-1),R={class:"msg opacity-75"},T=r(" Already registered? "),E=r("Login Here");function I(o,s,L,U,t,i){const d=u("router-link");return f(),h("div",x,[e("div",b,[e("div",y,[e("img",{src:t.logoImage,width:"120",height:"120"},null,8,k),P]),e("div",V,[e("div",A,[B,l(e("input",{id:"email",ref:"email","onUpdate:modelValue":s[0]||(s[0]=a=>t.form.email=a),name:"email",placeholder:"john@doe.com"},null,512),[[n,t.form.email]])]),e("div",C,[N,l(e("input",{id:"password",ref:"password","onUpdate:modelValue":s[1]||(s[1]=a=>t.form.password=a),type:"password",placeholder:"secure password"},null,512),[[n,t.form.password]])]),e("button",{class:"",onClick:s[2]||(s[2]=(...a)=>i.submit&&i.submit(...a))},"Continue")]),e("div",R,[e("p",null,[T,g(d,{class:"text-blue-700 font-bold",to:"/login"},{default:v(()=>[E]),_:1})])])])])}var H=p(w,[["render",I]]);export{H as default};