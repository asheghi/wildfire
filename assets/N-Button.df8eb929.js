import{_ as g,o as a,a as s,h as d,w as h,l,n as o,k as r,F as m,d as i}from"./index.af53e14a.js";var k="/assets/loading.dbcf92eb.svg";const B={name:"NButton",components:{IconLoading:k},props:{to:{default:null,required:!1},href:{default:null,required:!1},loading:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},computed:{extraClasses(){let e="";return e+=this.$attrs.class,this.loading&&(e+=" loading disabled"),this.disabled&&(e+=" disabled"),e}}},b=["href"],C=["disabled"];function y(e,n,t,N,v,u){const c=i("router-link"),f=i("IconLoading");return a(),s(m,null,[t.to?(a(),d(c,{key:0,to:t.to,class:o(["NButton",e.$attrs.class])},{default:h(()=>[l(e.$slots,"default")]),_:3},8,["to","class"])):r("",!0),t.href?(a(),s("a",{key:1,href:t.href,class:o(["NButton",e.$attrs.class])},[l(e.$slots,"default")],10,b)):(a(),s("button",{key:2,class:o(["NButton",u.extraClasses]),disabled:t.loading||t.disabled,onClick:n[0]||(n[0]=(..._)=>e.$attrs.onClick&&e.$attrs.onClick(..._))},[l(e.$slots,"default"),t.loading?(a(),d(f,{key:0,width:"24",height:"24",class:"icon-loading"})):r("",!0)],10,C))],64)}var $=g(B,[["render",y]]);export{$ as N};
