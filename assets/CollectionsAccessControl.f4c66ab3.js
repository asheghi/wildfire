import{A as f}from"./api.9e09c6a2.js";import{_ as p,b as r,o as e,c as s,a as o,F as i,z as v,k as a,d as g,T as k,e as d,h as _,g as C,t as y,n as x}from"./index.b7488eef.js";const w={name:"CollectionsAccessControl",data(){return{form:{name:""},collections:[],fetching:!1}},computed:{project(){return this.$route.params.project},collection(){return this.$route.params.collection}},watch:{"$route.params.project":{handler(t,h){t&&this.fetchData()}}},mounted(){this.fetchData()},methods:{async fetchData(){this.fetching=!0;try{const{data:t}=await f.Collections(this.project).list();this.collections=t}catch(t){console.error(t)}finally{this.fetching=!1}}}},A={class:"CollectionsAccessControl"},N={class:"card side-bar"},j=o("div",{class:"header"},"Collections",-1),B={class:"items"},D={key:0,class:"text-center text-gray-500"},V=o("div",{class:"item h-8 skeloading"},null,-1),T=o("div",{class:"item h-8 skeloading"},null,-1),b=o("div",{class:"item h-8 skeloading"},null,-1),z={key:0,class:"document w-full h-full relative"};function F(t,h,E,L,c,l){const m=r("router-link"),u=r("router-view");return e(),s("div",A,[o("div",N,[j,o("div",B,[c.fetching?a("",!0):(e(),s(i,{key:0},[(e(!0),s(i,null,v(c.collections,n=>(e(),_(m,{key:n,to:{name:"access-config",params:{collection:n.name}},class:x(["item name",{selected:n.name===l.collection}])},{default:d(()=>[C(y(n.name),1)]),_:2},1032,["to","class"]))),128)),c.collections.length?a("",!0):(e(),s("div",D," No Collection yet "))],64)),c.fetching?(e(),s(i,{key:1},[V,T,b],64)):a("",!0)])]),l.collection?(e(),s("div",z,[g(k,{name:"fade"},{default:d(()=>[(e(),_(u,{key:l.collection}))]),_:1})])):a("",!0)])}var G=p(w,[["render",F]]);export{G as default};