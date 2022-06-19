import{_ as v,q as y,o as i,c as n,b as s,i as _,v as p,l as x,s as C,f as c,F as D,k as M,a as m,T as V,w as f,j as h,g as w,e as j,t as B}from"./index.46219c50.js";import{A as U}from"./api.93f647bf.js";import{D as T}from"./trash.472b32d1.js";import{M as I}from"./Modal.baf5f64c.js";const $={name:"NewUser",emits:["created"],setup(){const e=y().params.project;return{api:U.Users(e),project:e}},data(){return{form:{},loading:!1}},methods:{async submit(){if(!this.loading){this.loading=!0;try{const t=this.form,{data:e,status:d}=await this.api.newUser(t);this.$emit("created",e)}finally{this.loading=!1}}}}},A={class:"NewUser"},E={class:"form-group"},F=s("label",{for:"email"},"Email",-1),K={class:"form-group"},R=s("label",{for:"password"},"Password",-1),S={class:"form-group"},q=s("label",{for:"role"},"Role:",-1),L=["disabled"];function P(t,e,d,u,o,a){return i(),n("div",A,[s("div",{class:"form",onKeydown:e[4]||(e[4]=x((...r)=>a.submit&&a.submit(...r),["enter"]))},[s("div",E,[F,_(s("input",{id:"email","onUpdate:modelValue":e[0]||(e[0]=r=>o.form.email=r),name:"email",type:"email",placeholder:"enter your email address"},null,512),[[p,o.form.email]])]),s("div",K,[R,_(s("input",{id:"password","onUpdate:modelValue":e[1]||(e[1]=r=>o.form.password=r),name:"password",type:"password",placeholder:"enter a secure password"},null,512),[[p,o.form.password]])]),s("div",S,[q,_(s("input",{id:"role","onUpdate:modelValue":e[2]||(e[2]=r=>o.form.role=r),name:"role",type:"text",placeholder:"enter a user role"},null,512),[[p,o.form.role]])]),s("button",{disabled:o.loading,class:"btn",onClick:e[3]||(e[3]=(...r)=>a.submit&&a.submit(...r))},"Submit",8,L)],32)])}var z=v($,[["render",P]]);const G={name:"Users",components:{Modal:I,NewUser:z,DeleteIcon:T},setup(){const t=y(),e=t.params.project,d=C(()=>t.params.uid);return{api:U.Users(e),uid:d}},data(){return{users:[]}},mounted(){this.fetchData()},methods:{async fetchData(){const{data:t}=await this.api.find();this.users=t},showNewUserModal(){this.$refs.modal.show()},async deleteUser(t){await this.api.deleteUser(t),await this.fetchData(),await this.$router.replace({name:"auth"})},async onCreated(t){this.$refs.modal.hide(),await this.fetchData(),await this.$router.push({name:"user",params:{uid:t._id}})}}},H={class:"Users"},J={class:"side-bar"},O=s("div",{class:"head"},"Users",-1),Q={class:"items"},W=["onClick"],X={key:0,class:"document w-full h-full relative"},Y={key:1,class:"select-document"},Z={key:0},ee={key:1,class:""};function se(t,e,d,u,o,a){const r=c("DeleteIcon"),b=c("router-link"),k=c("router-view"),g=c("NewUser"),N=c("Modal");return i(),n("div",H,[s("div",J,[O,s("button",{class:"btn btn-text btn-sm",onClick:e[0]||(e[0]=(...l)=>a.showNewUserModal&&a.showNewUserModal(...l))}," New User "),s("div",Q,[(i(!0),n(D,null,M(o.users,l=>(i(),w(b,{key:l,to:{name:"user",params:{uid:l._id}},class:"item name"},{default:f(()=>[j(B(l.email)+" ",1),s("div",{class:"drop",onClick:te=>a.deleteUser(l)},[m(r,{class:"fill-red-500 opacity-75",width:"24",height:"24"})],8,W)]),_:2},1032,["to"]))),128))])]),u.uid?(i(),n("div",X,[m(V,{name:"fade"},{default:f(()=>[(i(),w(k,{key:u.uid}))]),_:1})])):h("",!0),u.uid?h("",!0):(i(),n("div",Y,[o.users&&o.users.length?(i(),n("div",Z,"select a user first")):(i(),n("div",ee,"create a user first"))])),m(N,{ref:"modal"},{default:f(()=>[m(g,{onCreated:a.onCreated},null,8,["onCreated"])]),_:1},512)])}var ne=v(G,[["render",se]]);export{ne as default};
