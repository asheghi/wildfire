import{o as n,c as i,a as d,_ as B,m as j,r as p,B as N,p as V,x as D,b as y,h as w,e as g,k as f,F as A,z as F,d as C,g as U,t as b,w as M,v as O}from"./index.b7488eef.js";import{A as E,t as I}from"./api.9e09c6a2.js";import{N as R}from"./N-Button.05a78315.js";const m={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},S=d("path",{d:"M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"},null,-1),H=[S];function T(r,c){return n(),i("svg",m,H)}m.width="24";m.height="24";m.viewBox="0 0 24 24";var z={render:T};const L={name:"User",components:{NButton:R,DeleteIcon:z},beforeRouteUpdate(){this.fetchUser()},emits:["delete"],setup(){const r=j(),c=r.params.project,_=E.Users(c),e=p(),o=N({}),h=p(!1),u=p(!1),l=async()=>{h.value=!0;let t={};try{const a=r.params.uid,x=await _.fetchUser(a);t=x.data,e.value=x.data}catch(a){console.error(a)}finally{h.value=!1}Object.keys(t).filter(a=>!["_id","createdAt","updatedAt","createdBy"].includes(a)).forEach(a=>{o[a]=t[a]}),"role"in o||(o.role=null)},s=V(()=>Object.keys(o).find(t=>{var a;return((a=e.value)==null?void 0:a[t])!=o[t]})),v=async()=>{if(!!s.value)try{u.value=!0,await _.updateUser(e.value._id,o),await l(),I("Updated User")}catch(t){console.error(t)}finally{u.value=!1}},k=()=>{Object.keys(o).forEach(t=>{o[t]=e.value[t]})};return D(()=>{l()}),{project:c,api:_,fetchUser:l,user:e,form:o,formChanged:s,resetForm:k,fetching:h,updateUser:v,loading:u}},watch:{"$route.params.project":{handler(r,c){r&&this.$router.push({name:"auth",params:{project:r}})}}}},Z={class:"User"},q={class:"card"},G={class:"header flex items-center"},J=U(" User "),K=d("span",{class:"ml-auto"},null,-1),P={key:0,class:"form"},Q=["for","textContent"],W=["id","onUpdate:modelValue","disabled"],X={class:"flex gap-2 justify-end"},Y=U(" Reset Changes "),$={key:1,class:"skeloading"};function ee(r,c,_,e,o,h){const u=y("DeleteIcon"),l=y("NButton");return n(),i("div",Z,[d("div",q,[d("div",G,[J,K,e.user?(n(),w(l,{key:0,onClick:c[0]||(c[0]=s=>r.$emit("delete",e.user))},{default:g(()=>[C(u)]),_:1})):f("",!0)]),e.fetching?f("",!0):(n(),i("div",P,[(n(!0),i(A,null,F(Object.keys(e.form),s=>(n(),i("div",{key:s,class:"form-group"},[d("label",{for:s,textContent:b(s)},null,8,Q),M(d("input",{id:s,"onUpdate:modelValue":v=>e.form[s]=v,disabled:e.loading,type:"text"},null,8,W),[[O,e.form[s]]])]))),128)),d("div",X,[e.formChanged?(n(),w(l,{key:0,class:"text-gray-500",onClick:e.resetForm},{default:g(()=>[Y]),_:1},8,["onClick"])):f("",!0),C(l,{loading:e.loading,disabled:!e.formChanged,class:"primary",onClick:e.updateUser},{default:g(()=>[U(b(e.loading?"Saving":"Save"),1)]),_:1},8,["loading","disabled","onClick"])])])),e.fetching?(n(),i("div",$)):f("",!0)])])}var se=B(L,[["render",ee]]);export{se as default};