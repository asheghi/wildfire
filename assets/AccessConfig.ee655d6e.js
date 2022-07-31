import{A as M,S as g,t as B}from"./api.9cb1a443.js";import{J as E}from"./JsonEditor.f7f689c5.js";import{I as J}from"./plus.ff32d595.js";import{_ as S,r as O,b as h,o as c,c as r,a as t,d as v,e as p,h as m,k as u,F as A,z as N,w as R,v as D,E as F,t as d,n as I,g as y}from"./index.7b1a8b90.js";import{N as V}from"./N-Button.b8575741.js";const U={createdBy:"$uid"},j={name:"ConfigEditor",components:{NButton:V,JsonEditor:E,IconAdd:J},props:{config:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["saved","canceled"],setup(e){const s=O(e.config),o=JSON.parse(JSON.stringify(e.config));return{tempConfig:s,initialConfig:o}},computed:{hasUnAuthenticatedRole(){return this.tempConfig.find(e=>!e.user)},hasAuthenticatedRole(){return this.tempConfig.find(e=>e.user===!0)},configChanged(){try{let e=JSON.stringify(this.tempConfig),s=JSON.stringify(this.initialConfig);return console.log("check",e,s),e!==s}catch{return!0}}},methods:{getUserMode(e){return e.user&&e.user.role!==void 0?"role":e.user===!0?"authed":"un_authed"},removeRole(e){this.tempConfig.splice(e,1)},addRole(){this.hasUnAuthenticatedRole?this.hasAuthenticatedRole?this.tempConfig.splice(0,0,{user:{role:""},create:!1,read:!1,delete:!1,update:!1}):this.tempConfig.splice(0,0,{user:!0,create:!1,read:!1,delete:!1,update:!1}):this.tempConfig.splice(0,0,{user:!1,create:!1,read:!1,delete:!1,update:!1})},getFilterMode(e){return e?e===!0?"all":JSON.stringify(U)===JSON.stringify(e)?"own":"custom":"none"},onUserModeChanged(e,s){const o=s.target.value;this.getUserMode(e)!==o&&(o==="role"?e.user={role:""}:e.user=o==="authed")},onFilterChanged(e,s,o){const f=e[s],l=o.target.value;f!==l&&(l==="none"?e[s]=!1:l==="all"?e[s]=!0:l==="own"?e[s]=U:e[s]={})},discardChanges(){this.tempConfig.splice(0,this.tempConfig.length),this.tempConfig.push(...this.initialConfig)},saveChanges(){this.$emit("save",this.tempConfig)}}},L={class:"ConfigEditor"},T={class:"flex pb-4 gap-4 items-center"},z=y(" Add Role "),q=y(" Discard changes "),Y=t("span",{class:"ml-auto"},null,-1),Z=y(" Save Changes "),G={class:"user w-full flex gap-4 items-center mb-2"},H=["value","onChange"],K=t("option",{value:"role"},"users with role",-1),P=t("option",{value:"authed"},"authenticated users",-1),Q=t("option",{value:"un_authed"},"un-authenticated users",-1),W=[K,P,Q],X=["onUpdate:modelValue"],$=["onClick"],ee={class:"access flex flex-col justify-center space-y-2 px-4"},te={class:"create flex items-center gap-1 w-full"},se=["id","onUpdate:modelValue","disabled","textContent"],ne=["for"],oe=["value","disabled","onChange"],ae={value:"all"},ie={value:"own"},ce={value:"custom"},le={value:"none"},re=t("br",null,null,-1);function de(e,s,o,f,l,a){const x=h("IconAdd"),_=h("NButton"),b=h("JsonEditor");return c(),r("div",L,[t("div",T,[v(_,{class:"primary",disabled:o.loading,onClick:a.addRole},{default:p(()=>[v(x),z]),_:1},8,["disabled","onClick"]),a.configChanged?(c(),m(_,{key:0,disabled:o.loading,class:"",onClick:a.discardChanges},{default:p(()=>[q]),_:1},8,["disabled","onClick"])):u("",!0),Y,a.configChanged?(c(),m(_,{key:1,loading:o.loading,class:"success",onClick:a.saveChanges},{default:p(()=>[Z]),_:1},8,["loading","onClick"])):u("",!0)]),(c(!0),r(A,null,N(f.tempConfig,(i,C)=>(c(),r("div",{key:C,class:"config mb-4 border px-2 py-4 card"},[t("div",G,[t("select",{value:a.getUserMode(i),onChange:n=>a.onUserModeChanged(i,n)},W,40,H),a.getUserMode(i)==="role"?R((c(),r("input",{key:0,"onUpdate:modelValue":n=>i.user.role=n,type:"text"},null,8,X)),[[D,i.user.role]]):u("",!0),t("button",{class:"text-white ml-auto bg-red-400 px-2 py-1 rounded",onClick:n=>a.removeRole(C)}," Remove Role ",8,$)]),t("div",ee,[t("div",te,[R(t("input",{id:"create_"+C,"onUpdate:modelValue":n=>i.create=n,name:"create",type:"checkbox",disabled:o.loading,textContent:d("can create")},null,8,se),[[F,i.create]]),t("label",{for:"create_"+C},"can create documents",8,ne)]),(c(),r(A,null,N(["read","update","delete"],n=>t("div",{key:n,class:I(n)},[t("select",{value:a.getFilterMode(i[n]),class:"w-full",disabled:o.loading,onChange:k=>a.onFilterChanged(i,n,k)},[t("option",ae,"can "+d(n)+" all documents",1),t("option",ie,"can "+d(n)+" documents created by him",1),t("option",ce,"can "+d(n)+" some documents",1),t("option",le,"can't "+d(n)+" any documents",1)],40,oe),a.getFilterMode(i[n])==="custom"?(c(),m(b,{key:0,modelValue:i[n],"onUpdate:modelValue":k=>i[n]=k},null,8,["modelValue","onUpdate:modelValue"])):u("",!0)],2)),64))]),re]))),128))])}var ue=S(j,[["render",de]]);const w={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},he=t("path",{d:"M12.63 2c5.53 0 10.01 4.5 10.01 10s-4.48 10-10.01 10c-3.51 0-6.58-1.82-8.37-4.57l1.58-1.25C7.25 18.47 9.76 20 12.64 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8C8.56 4 5.2 7.06 4.71 11h2.76l-3.74 3.73L0 11h2.69c.5-5.05 4.76-9 9.94-9m2.96 8.24c.5.01.91.41.91.92v4.61c0 .5-.41.92-.92.92h-5.53c-.51 0-.92-.42-.92-.92v-4.61c0-.51.41-.91.91-.92V9.23c0-1.53 1.25-2.77 2.77-2.77 1.53 0 2.78 1.24 2.78 2.77v1.01m-2.78-2.38c-.75 0-1.37.61-1.37 1.37v1.01h2.75V9.23c0-.76-.62-1.37-1.38-1.37Z"},null,-1),fe=[he];function _e(e,s){return c(),r("svg",w,fe)}w.width="24";w.height="24";w.viewBox="0 0 24 24";var ge={render:_e};const Ce={name:"AccessConfig",components:{NButton:V,ConfigEditor:ue,IconReset:ge},beforeRouteUpdate(){this.fetchData()},data(){return{accessConfig:null,render_counter:1,loading:!1,fetching:!1}},computed:{api(){return M.AccessControl(this.project)},collection(){return this.$route.params.collection},project(){return this.$route.params.project}},mounted(){this.fetchData()},methods:{async fetchData(){this.fetching=!0;try{const{data:e}=await this.api.getAccessConfig(this.collection);this.accessConfig=e}catch(e){console.error(e)}finally{this.fetching=!1}},async resetConfig(){const{isConfirmed:e}=await g.fire({title:"Reset Config",text:"Are you sure?",cancelButtonText:"cancel",cancelButtonColor:"gray",confirmButtonText:"Yes, reset config",confirmButtonColor:"red",showCancelButton:!0,preConfirm:async s=>{if(!s)return s;g.showLoading(g.getConfirmButton());try{await this.api.resetConfig(this.collection),await this.fetchData(),this.render_counter++,g.close(),B("Config has been reset")}catch(o){console.error(o)}finally{g.hideLoading()}}})},async updateConfig(e){try{this.loading=!0,await this.api.updateConfig(this.collection,e),this.render_counter++,B("Saved Changes")}catch(s){console.error(s)}finally{this.loading=!1}}}},pe={class:"AccessConfig"},me={class:"card mb-4"},ve={class:"flex header"},ye=y(" Access Config "),we={class:"pl-2 normal-case"},xe=t("span",{class:"ml-auto"},null,-1),be={key:1,class:"skeloading"};function ke(e,s,o,f,l,a){const x=h("IconReset"),_=h("NButton"),b=h("ConfigEditor");return c(),r("div",pe,[t("div",me,[t("div",ve,[ye,t("span",we,d(a.collection),1),xe,v(_,{class:"",onClick:a.resetConfig},{default:p(()=>[v(x)]),_:1},8,["onClick"])])]),l.fetching?u("",!0):(c(),m(b,{key:l.render_counter,config:l.accessConfig,loading:l.loading,onSave:a.updateConfig},null,8,["config","loading","onSave"])),l.fetching?(c(),r("div",be)):u("",!0)])}var Se=S(Ce,[["render",ke]]);export{Se as default};
