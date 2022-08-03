var ie=Object.defineProperty,re=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var K=(a,o,n)=>o in a?ie(a,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[o]=n,V=(a,o)=>{for(var n in o||(o={}))de.call(o,n)&&K(a,n,o[n]);if(Y)for(var n of Y(o))pe.call(o,n)&&K(a,n,o[n]);return a},H=(a,o)=>re(a,ue(o));import{A as ee,b as _e,a as he,p as me}from"./api.9e09c6a2.js";import{o as s,c,a as t,_ as F,b as L,z as A,t as _,h as B,k as x,w as ye,v as ve,F as O,e as Z,g as G,n as I,D as te,r as q,m as fe,p as M,q as ge,l as xe,x as be,d as S,u as i,i as we}from"./index.3c335428.js";import{J as je}from"./JsonInput.c744a629.js";import{N as z}from"./N-Button.1e8f368b.js";const N={find:{name:"find",url:"documents/:project/:collection/find",method:"post",options:{body:{type:"json",fields:{filter:{type:"json",value:""},projection:{type:"json",optional:!0,value:""},options:{type:"json",optional:!0,fields:{sort:{type:"json",value:""},skip:{type:"integer",value:""},limit:{type:"integer",value:""}}}}}}},findOne:{name:"findOne",url:"documents/:project/:collection/findOne",method:"post",options:{body:{type:"json",fields:{filter:{type:"json",value:""},projection:{type:"json",optional:!0,value:""}}}}},count:{name:"count",url:"documents/:project/:collection/count",method:"post",options:{body:{type:"json",fields:{filter:{type:"json",value:""}}}}},create:{name:"create",url:"documents/:project/:collection/create",method:"post",options:{body:{type:"json",value:""}}},updateOne:{name:"updateOne",url:"documents/:project/:collection/updateOne",method:"post",options:{body:{type:"json",fields:{filter:{type:"json",value:""},update:{type:"json",value:""}}}}},deleteOne:{name:"deleteOne",url:"documents/:project/:collection/deleteOne",method:"post",options:{body:{type:"json"}}},deleteMany:{name:"deleteMany",url:"documents/:project/:collection/deleteMany",method:"post",options:{body:{type:"json"}}},register:{name:"register",url:"auth/:project/register",method:"post",hideAuthToken:!0,options:{body:{type:"json",fields:{email:{type:"string",value:""},password:{type:"string",value:""}}}}},login:{name:"login",url:"auth/:project/login",method:"post",hideAuthToken:!0,options:{body:{type:"json",fields:{email:{type:"string",value:""},password:{type:"string",value:""}}}}},me:{name:"me",url:"auth/:project/me",method:"get",options:{}}},D={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},ke=t("path",{d:"M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"},null,-1),Oe=[ke];function $e(a,o){return s(),c("svg",D,Oe)}D.width="24";D.height="24";D.viewBox="0 0 24 24";var Ce={render:$e};const P={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},Ae=t("path",{d:"M11.83 9 15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8 1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22 21 20.73 3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"},null,-1),Te=[Ae];function qe(a,o){return s(),c("svg",P,Te)}P.width="24";P.height="24";P.viewBox="0 0 24 24";var Me={render:qe};const Se={name:"ActionOptions",components:{JsonInput:je},props:{options:{type:Object,required:!0},showOptionals:{type:Boolean,default:!1}},emits:["@update:form"],data(){return{t_form:this.form}},methods:{onUpdate(a,o){console.log("updated",a,o)},checkOptional(a){return this.showOptionals?!0:!a.optional}}},Ne={key:0,class:"row"},Be={class:"label flex gap-1 whitespace-nowrap"},Ee=["textContent"],Ve=["textContent"],Ie=["onUpdate:modelValue"];function De(a,o,n,u,d,h){const r=L("JsonInput"),y=L("ActionOptions",!0);return s(!0),c(O,null,A(n.options,(l,k)=>(s(),c("div",{key:k,class:"option"},[!l.fields&&h.checkOptional(l)?(s(),c("div",Ne,[t("div",Be,[t("div",{class:"text",textContent:_(k)},null,8,Ee),t("div",{class:"type opacity-50",textContent:_("("+l.type+")")},null,8,Ve)]),l.type==="json"?(s(),B(r,{key:0,class:"input","model-value":l.value,"onUpdate:modelValue":b=>l.value=b},null,8,["model-value","onUpdate:modelValue"])):x("",!0),l.type!=="json"?ye((s(),c("input",{key:1,"onUpdate:modelValue":b=>l.value=b,class:"input",type:"text"},null,8,Ie)),[[ve,l.value]]):x("",!0)])):x("",!0),l.fields&&h.checkOptional(l)?(s(),B(y,{key:1,options:l.fields,"show-optionals":n.showOptionals},null,8,["options","show-optionals"])):x("",!0)]))),128)}var Pe=F(Se,[["render",De]]);const oe={response_body:"Response",headers:"Headers"},Re={name:"ExecutionResult",components:{NButton:z},props:{execution:{type:Object,default:()=>({})}},data(){return{tabs:oe,currentTab:Object.values(oe)[0]}}},Ue={class:"ExecutionResult max-w-[1200px]"},Je={key:0,class:"loading"},He={class:"row"},Le={class:"tabs"},Ze={class:"ml-auto"},ze=t("div",{class:""},"status:",-1),Fe={class:""},Ge=t("div",null,"time:",-1),Qe={key:0,class:"body card overflow-x-auto"},We={key:1,class:"card overflow-x-auto border border-gray-100 p-2"},Xe={class:"header-name opacity-50 font-bold"},Ye={class:"header-value"};function Ke(a,o,n,u,d,h){const r=L("NButton");return s(),c("div",Ue,[n.execution.loading?(s(),c("div",Je,"Loading ...")):x("",!0),!n.execution.loading&&Object.keys(n.execution).length?(s(),c(O,{key:1},[t("div",He,[t("div",Le,[(s(!0),c(O,null,A(d.tabs,(y,l)=>(s(),B(r,{key:l,class:I(["tab",{primary:y===d.currentTab,secondary:y!==d.currentTab}]),onClick:k=>d.currentTab=y},{default:Z(()=>[G(_(y),1)]),_:2},1032,["class","onClick"]))),128))]),t("div",Ze,[ze,t("div",{class:I(["res-code",{"text-red-500":n.execution.status&&n.execution.status>=400}])},_(n.execution.status),3)]),t("div",Fe,[Ge,t("div",null,_(n.execution.responseTime)+"ms",1)])]),d.currentTab===d.tabs.response_body?(s(),c("div",Qe,[t("pre",null,[t("code",null,_(JSON.stringify(n.execution.data,null,"	")),1)])])):x("",!0),d.currentTab===d.tabs.headers?(s(),c("div",We,[(s(!0),c(O,null,A(n.execution.res_headers,(y,l)=>(s(),c("div",{key:l,class:"the-header flex gap-2 py-2"},[t("div",Xe,_(l)+":",1),t("div",Ye,_(y),1)]))),128))])):x("",!0)],64)):x("",!0)])}var et=F(Re,[["render",Ke]]);const R={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},tt=t("path",{d:"M8 5.14v14l11-7-11-7Z"},null,-1),ot=[tt];function st(a,o){return s(),c("svg",R,ot)}R.width="24";R.height="24";R.viewBox="0 0 24 24";var nt={render:st};const at={name:"PlaygroundActionsMenu",props:{selected:{type:String,required:!1}},emits:["select"],computed:{items(){return Object.keys(N).map(a=>V({name:a},N[a]))}},methods:{onItemSelected(a){this.$emit("select",a)}}},ct={class:"PlaygroundActionsMenu"},lt={class:"side-menu card items"},it=t("div",{class:"header"},"Actions",-1),rt=["onClick"];function ut(a,o,n,u,d,h){return s(),c("div",ct,[t("div",lt,[it,(s(!0),c(O,null,A(h.items,r=>(s(),c("button",{key:r.name,class:I(["item",{selected:n.selected===r.name}]),onClick:y=>h.onItemSelected(r.name)},_(r.name),11,rt))),128))])])}var dt=F(at,[["render",ut]]);const pt={class:"ActionPlayground"},_t={key:0,class:"Playground"},ht={class:"card api"},mt={class:"url pl-4 flex gap-2 items-center"},yt={class:"value"},vt={class:"opacity-75 p-1"},ft={class:"py-1 bg-gray-200 dark:bg-gray-600 pr-2 pl-1 -ml-2"},gt=G(" Send "),xt={class:"header flex items-center"},bt=G(" options "),wt=t("span",{class:"ml-auto"},null,-1),jt={class:"options-content px-4 pt-4"},kt={key:0,class:"collection-option grid grid-cols-8 gap-2 mb-2"},Ot=t("div",{class:"label"},"collection",-1),$t=["value"],Ct=t("option",{value:""},"Select a Collection",-1),At=["value","textContent"],Tt=t("div",{class:"row flex items-center justify-between py-4"},null,-1),qt={name:"ActionPlayground"},Vt=Object.assign(qt,{setup(a){const o=te(N),n=q("");Object.keys(N).forEach(e=>{o[e].hideAuthToken||(o[e].options||(o[e].options={}),o[e].options.headers={type:"json",fields:{"x-auth-token":{optional:!0,type:"string",value:n}}})});const u=fe(),d=M(()=>u.params.project),h=M(()=>u.query.collection),r=M(()=>u.query.action),y=M(()=>N[r.value]);M(()=>ee.Documents(d,h));const l=q(0);function k(e){if(!e)return{};let j={};return typeof e=="object"&&e&&Object.keys(e).forEach(v=>{if(!e[v])return;let f=e[v].fields;f?Object.keys(f).forEach(m=>{if(f[m].fields)j[m]=k({[m]:f[m]});else{let p=f[m].value;p.__v_isRef?j[m]=p.value:j[m]=p}}):j=e[v].value}),j}const b=te([]),se=async()=>{const e={action:r.value};b.splice(0,0,e);const{url:j,options:v,method:f}=y.value,m=j.replace(":project",d.value).replace(":collection",h.value);let p=k({body:v.body});const $=k({headers:v.headers});if(typeof p=="string"&&v.body.type==="json")try{p=JSON.parse(p)}catch(g){console.error(g)}e.loading=!0;const T=new Date().getTime();try{const{data:g,status:C,headers:w}=await he({url:m,data:p,method:f,params:{},headers:$,skipAccountToken:!0,skipInterceptors:!0});e.responseTime=new Date().getTime()-T,e.data=g,e.status=C,e.body=p,e.res_headers=w,e.req_headers=$}catch(g){const{status:C,data:w,msg:J,headers:le}=me(g);e.error=g.message,e.responseTime=new Date().getTime()-T,e.data=w,e.status=C,e.body=p,e.res_headers=le,e.req_headers=$,e.error_msg=J,console.error(g)}finally{e.loading=!1,b.length>3&&b.splice(2,b.length-3),l.value++}},E=q(!1),ne=()=>{E.value=!E.value};ge(()=>o,()=>{l.value=l.value+1},{deep:!0,immediate:!0});const Q=xe(),ae=e=>{Q.push({name:u.name,params:u.params,query:H(V({},u.query),{action:e})})},W=q([]),X=q(!1),ce=async()=>{X.value=!0;try{const{data:e}=await ee.Collections(u.params.project).list();W.value=e,h.value||U(e[0].name)}catch(e){console.error(e)}finally{X.value=!1}};be(()=>{ce()});const U=e=>{typeof e!="string"&&(e=e.target.value),Q.push({name:u.name,params:u.params,query:H(V({},u.query),{collection:e})})};return(e,j)=>{var v,f,m,p,$,T,g,C;return s(),c("div",pt,[S(dt,{selected:(v=e.$route.query)==null?void 0:v.action,onSelect:ae},null,8,["selected"]),i(r)?(s(),c("div",_t,[t("div",ht,[t("div",mt,[t("div",{class:I(["method text-lg font-bold uppercase",(f=i(o)[i(r)])==null?void 0:f.method])},_((m=i(o)[i(r)])==null?void 0:m.method),3),t("div",yt,[t("span",vt,_(i(_e)),1),t("span",ft,_((p=i(o)[i(r)])==null?void 0:p.url),1)]),S(z,{class:"ml-auto flex px-4 font-bold items-center py-2 text-primary dark:text-white",disabled:!i(h)&&!i(h).length,onClick:se},{default:Z(()=>[gt,S(i(nt),{class:"fill-primary dark:fill-white"})]),_:1},8,["disabled"])])]),(s(),c("div",{key:i(r),class:"options card relative border border-gray-200"},[t("div",xt,[bt,wt,S(z,{class:"",onClick:ne},{default:Z(()=>[(s(),B(we(E.value?i(Me):i(Ce))))]),_:1})]),t("div",jt,[S(Pe,{"show-optionals":E.value,options:($=i(o)[i(r)])==null?void 0:$.options},null,8,["show-optionals","options"]),(g=(T=i(o)[i(r)])==null?void 0:T.url)!=null&&g.includes(":collection")?(s(),c("div",kt,[Ot,t("select",{value:(C=e.$route.query)==null?void 0:C.collection,onSelect:U,onChange:U},[Ct,(s(!0),c(O,null,A(W.value,w=>(s(),c("option",{key:w,value:w.name,textContent:_(w.name)},null,8,At))),128))],40,$t)])):x("",!0)])])),Tt,(s(!0),c(O,null,A(i(b),(w,J)=>(s(),B(et,{key:J+l.value,execution:w},null,8,["execution"]))),128))])):x("",!0)])}}});export{Vt as default};
