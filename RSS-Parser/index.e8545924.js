import{a as F,b as T,c as _,w as l,r as t,o as u,e as n,u as o,f as N,h as S,F as B,i as s,t as r,j as D,k as U,l as $,v as E}from"./entry.c7d68b0b.js";const q={__name:"index",setup(P){const a=F(),v=T();return(Q,c)=>{const p=t("v-select"),x=t("v-text-field"),f=t("v-card-title"),d=t("v-card-subtitle"),i=t("v-btn"),h=t("v-spacer"),V=t("v-card-actions"),k=t("v-divider"),w=t("v-card-text"),b=t("v-expand-transition"),g=t("v-card"),C=t("v-pagination"),y=t("v-main");return u(),_(y,null,{default:l(()=>[n(p,{label:"\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E\u0441\u0442\u043E\u0432",rounded:"",items:["\u0411\u043E\u043B\u0435\u0435 \u0441\u0432\u0435\u0436\u0438\u0435","\u0411\u043E\u043B\u0435\u0435 \u0441\u0442\u0430\u0440\u044B\u0435"],variant:"solo",modelValue:o(a).selectedSort,"onUpdate:modelValue":c[0]||(c[0]=e=>o(a).selectedSort=e)},null,8,["modelValue"]),n(x,{label:"\u041F\u043E\u0438\u0441\u043A \u0441\u043B\u043E\u0432 \u0432 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0435",variant:"solo",modelValue:o(a).searchQuery,"onUpdate:modelValue":c[1]||(c[1]=e=>o(a).searchQuery=e)},null,8,["modelValue"]),(u(!0),N(B,null,S(o(a).slicedPosts,e=>(u(),_(g,{class:"mx-auto my-10 pa-3","max-width":"800px",key:e.time},{default:l(()=>[n(f,{class:"card__title",onClick:m=>o(v).push({path:"/post",query:{title:e.title}})},{default:l(()=>[s(r(e.title),1)]),_:2},1032,["onClick"]),n(d,null,{default:l(()=>[s(r(e.announcement),1)]),_:2},1024),n(d,null,{default:l(()=>[s(r(e.date)+" "+r(e.time),1)]),_:2},1024),e.fullText!==" "?(u(),_(V,{key:0},{default:l(()=>[n(i,{color:"#0028ed",variant:"text",onClick:m=>e.showFullText=!e.showFullText},{default:l(()=>[s(" \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0442\u0435\u043A\u0441\u0442 ")]),_:2},1032,["onClick"]),n(h),n(i,{icon:e.showFullText?"mdi-chevron-up":"mdi-chevron-down",onClick:m=>e.showFullText=!e.showFullText},null,8,["icon","onClick"])]),_:2},1024)):D("",!0),n(b,null,{default:l(()=>[U($("div",null,[n(k),n(w,null,{default:l(()=>[s(r(e.fullText),1)]),_:2},1024)],512),[[E,e.showFullText]])]),_:2},1024)]),_:2},1024))),128)),n(C,{modelValue:o(a).pageNumber,"onUpdate:modelValue":c[2]||(c[2]=e=>o(a).pageNumber=e),length:o(a).pagesCount,"total-visible":6,color:"#4D88FE"},null,8,["modelValue","length"])]),_:1})}}};export{q as default};
