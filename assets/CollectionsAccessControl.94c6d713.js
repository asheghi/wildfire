import{A as u}from"./api.6f9d2f33.js";import{_ as f,a as t,b as s,F as i,j as v,k as l,e as g,w as r,T as k,o as e,h as _,g as p,t as C,n as y,d}from"./index.af53e14a.js";const x={name:"CollectionsAccessControl",data(){return{form:{name:""},collections:[],fetching:!1}},computed:{collection(){return this.$route.params.collection}},mounted(){this.fetchData()},methods:{async fetchData(){this.fetching=!0;try{const{data:o}=await u.Collections().list();this.collections=o}catch(o){console.error(o)}finally{this.fetching=!1}}}},w={class:"CollectionsAccessControl"},A={class:"card side-bar"},N=s("div",{class:"header"},"Collections",-1),B={class:"items"},V={key:0,class:"text-center text-gray-500"},D=s("div",{class:"item h-8 skeloading"},null,-1),T=s("div",{class:"item h-8 skeloading"},null,-1),b=s("div",{class:"item h-8 skeloading"},null,-1),F={key:0,class:"document w-full h-full relative"};function j(o,z,E,L,c,a){const m=d("router-link"),h=d("router-view");return e(),t("div",w,[s("div",A,[N,s("div",B,[c.fetching?l("",!0):(e(),t(i,{key:0},[(e(!0),t(i,null,v(c.collections,n=>(e(),_(m,{key:n,to:{name:"access-config",params:{collection:n.name}},class:y(["item name",{selected:n.name===a.collection}])},{default:r(()=>[p(C(n.name),1)]),_:2},1032,["to","class"]))),128)),c.collections.length?l("",!0):(e(),t("div",V," No Collection yet "))],64)),c.fetching?(e(),t(i,{key:1},[D,T,b],64)):l("",!0)])]),a.collection?(e(),t("div",F,[g(k,{name:"fade"},{default:r(()=>[(e(),_(h,{key:a.collection}))]),_:1})])):l("",!0)])}var G=f(x,[["render",j]]);export{G as default};
