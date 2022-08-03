import{_ as U,m as b,b as d,o as i,c,a as s,w as f,v as w,d as _,e as p,D,g as k,p as B,F as g,z as M,k as y,n as V,T,h as v,t as j}from"./index.cdcacdc3.js";import{A as N,S as m,t as S}from"./api.9e09c6a2.js";import{D as A}from"./trash.d071f0d1.js";import{N as z}from"./N-Button.ff915318.js";import{M as E}from"./Modal.85e7a6c6.js";const F={name:"NewUser",components:{NButton:z},emits:["created"],setup(){const e=b().params.project;return{api:N.Users(e),project:e}},data(){return{form:{},loading:!1}},methods:{async submit(){if(!this.loading){this.loading=!0;try{const t=this.form,{data:e,status:l}=await this.api.newUser(t);this.$emit("created",e)}finally{this.loading=!1}}}}},K={class:"NewUser"},L={class:"form-group"},R=s("label",{for:"email"},"Email",-1),I=["disabled"],P={class:"form-group"},Y=s("label",{for:"password"},"Password",-1),$=["disabled"],q={class:"form-group"},G=s("label",{for:"role"},"Role:",-1),H=["disabled"],J=k(" Submit ");function O(t,e,l,u,o,a){const h=d("NButton");return i(),c("div",K,[s("div",{class:"form",onKeydown:e[3]||(e[3]=D((...r)=>a.submit&&a.submit(...r),["enter"]))},[s("div",L,[R,f(s("input",{id:"email","onUpdate:modelValue":e[0]||(e[0]=r=>o.form.email=r),name:"email",type:"email",disabled:o.loading,placeholder:"enter your email address"},null,8,I),[[w,o.form.email]])]),s("div",P,[Y,f(s("input",{id:"password","onUpdate:modelValue":e[1]||(e[1]=r=>o.form.password=r),name:"password",type:"password",disabled:o.loading,placeholder:"enter a secure password"},null,8,$),[[w,o.form.password]])]),s("div",q,[G,f(s("input",{id:"role","onUpdate:modelValue":e[2]||(e[2]=r=>o.form.role=r),name:"role",type:"text",disabled:o.loading,placeholder:"enter a user role"},null,8,H),[[w,o.form.role]])]),_(h,{loading:o.loading,class:"primary",onClick:a.submit},{default:p(()=>[J]),_:1},8,["loading","onClick"])],32)])}var Q=U(F,[["render",O]]);const W={name:"Users",components:{Modal:E,NewUser:Q,DeleteIcon:A},setup(){const t=b();return{uid:B(()=>t.params.uid)}},data(){return{users:[],fetching:!1}},computed:{api(){return N.Users(this.$route.params.project)}},watch:{"$route.params.project":{handler(t,e){t&&this.fetchData()}}},mounted(){this.fetchData()},methods:{async fetchData(){this.fetching=!0;try{const{data:t}=await this.api.find();this.users=t}catch(t){console.error(t)}finally{this.fetching=!1}},showNewUserModal(){this.$refs.modal.show()},async deleteUser(t){await m.fire({title:"Delete User",html:"Are you sure?",cancelButtonText:"cancel",customClass:{confirmButton:"danger",cancelButton:"secondary"},confirmButtonText:"Yes, Delete it",showCancelButton:!0,preConfirm:async e=>{if(e){m.showLoading(m.getConfirmButton());try{await this.api.deleteUser(t),await this.fetchData(),await this.$router.replace({name:"auth"}),S("Deleted User"),m.close()}catch(l){console.error(l)}return!1}return!1}})},async onCreated(t){this.$refs.modal.hide(),await this.fetchData(),await this.$router.push({name:"user",params:{uid:t._id}})}}},X={class:"Users"},Z=s("div",{class:"header"},"Users",-1),ee={class:"items"},se=s("div",{class:"item h-8 skeloading"},null,-1),te=s("div",{class:"item h-8 skeloading"},null,-1),oe=s("div",{class:"item h-8 skeloading"},null,-1),re={key:0,class:"card user-info"};function ae(t,e,l,u,o,a){const h=d("router-link"),r=d("router-view"),x=d("NewUser"),C=d("Modal");return i(),c("div",X,[s("div",{class:V(["side-bar card",{showingUser:u.uid}])},[Z,s("button",{class:"px-4 text-primary dark:text-primary-300 font-bold py-2",onClick:e[0]||(e[0]=(...n)=>a.showNewUserModal&&a.showNewUserModal(...n))}," New User "),s("div",ee,[o.fetching?y("",!0):(i(!0),c(g,{key:0},M(o.users,n=>(i(),v(h,{key:n,to:{name:"user",params:{uid:n._id}},class:"item name"},{default:p(()=>[k(j(n.email),1)]),_:2},1032,["to"]))),128)),o.fetching?(i(),c(g,{key:1},[se,te,oe],64)):y("",!0)])],2),u.uid?(i(),c("div",re,[_(T,{name:"fade"},{default:p(()=>[(i(),v(r,{key:u.uid,onDelete:e[1]||(e[1]=n=>a.deleteUser(n))}))]),_:1})])):y("",!0),_(C,{ref:"modal"},{default:p(()=>[_(x,{onCreated:a.onCreated},null,8,["onCreated"])]),_:1},512)])}var ue=U(W,[["render",ae]]);export{ue as default};
