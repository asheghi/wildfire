var x=Object.defineProperty,b=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var d=(o,t,e)=>t in o?x(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,m=(o,t)=>{for(var e in t||(t={}))w.call(t,e)&&d(o,e,t[e]);if(u)for(var e of u(t))P.call(t,e)&&d(o,e,t[e]);return o},p=(o,t)=>b(o,B(t));import{m as j,p as v,b as y,o as s,c as a,a as i,F,z as N,u as n,k as l,h,e as O,t as V}from"./index.81fc11e4.js";import{d as z}from"./actions.f0846f90.js";const D={class:"CollectionPlayground"},E=i("div",{class:"header"},null,-1),L={class:"actions"},R=["textContent"],S={key:0,class:"text-center py-32"},q={key:0},A={key:1},G={name:"CollectionPlayground"},M=Object.assign(G,{setup(o){const t=j(),e=Object.values(z).map(c=>(c.to={name:"action-playground",params:p(m({},t.params),{action:c.name})},c)),r=v(()=>t.params.collection),k=v(()=>t.params.action);return(c,H)=>{const f=y("router-link"),g=y("router-view");return s(),a("div",D,[E,i("div",L,[(s(!0),a(F,null,N(n(e),(_,C)=>(s(),h(f,{key:C,to:_.to,class:"action"},{default:O(()=>[i("div",{class:"label",textContent:V(_.name)},null,8,R)]),_:2},1032,["to"]))),128))]),!n(e)||!n(r)?(s(),a("div",S,[n(r)?l("",!0):(s(),a("div",q,"select a collection first")),n(k)?l("",!0):(s(),a("div",A,"select a action"))])):l("",!0),(s(),h(g,{key:n(r)}))])}}});export{M as default};