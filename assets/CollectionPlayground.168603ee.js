var C=Object.defineProperty,B=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var d=(o,t,e)=>t in o?C(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,m=(o,t)=>{for(var e in t||(t={}))w.call(t,e)&&d(o,e,t[e]);if(u)for(var e of u(t))P.call(t,e)&&d(o,e,t[e]);return o},p=(o,t)=>B(o,b(t));import{k as j,l as v,a as y,o as s,c as a,d as i,F,t as N,u as n,x as l,h,e as O,y as V}from"./index.6edaa24c.js";import{d as D}from"./actions.f0846f90.js";const E={class:"CollectionPlayground"},L=i("div",{class:"header"},null,-1),R={class:"actions"},S=["textContent"],q={key:0,class:"text-center py-32"},z={key:0},A={key:1},G={name:"CollectionPlayground"},M=Object.assign(G,{setup(o){const t=j(),e=Object.values(D).map(c=>(c.to={name:"action-playground",params:p(m({},t.params),{action:c.name})},c)),r=v(()=>t.params.collection),k=v(()=>t.params.action);return(c,H)=>{const f=y("router-link"),g=y("router-view");return s(),a("div",E,[L,i("div",R,[(s(!0),a(F,null,N(n(e),(_,x)=>(s(),h(f,{key:x,to:_.to,class:"action"},{default:O(()=>[i("div",{class:"label",textContent:V(_.name)},null,8,S)]),_:2},1032,["to"]))),128))]),!n(e)||!n(r)?(s(),a("div",q,[n(r)?l("",!0):(s(),a("div",z,"select a collection first")),n(k)?l("",!0):(s(),a("div",A,"select a action"))])):l("",!0),(s(),h(g,{key:n(r)}))])}}});export{M as default};
