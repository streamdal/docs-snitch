import{_ as l,p as h,h as c}from"./hooks.module.b9808d06.js";import{o as t}from"./jsxRuntime.module.6316ea77.js";import"./preact.module.9adf8a76.js";const v={depth:2,slug:"overview",text:"Overview"},m=({headings:p=[]})=>{const d=l([]),n=l(null),[o,u]=h("");return c(()=>{const e=()=>{const i=document.querySelectorAll("article :is(h1, h2, h3, h4)");d.current=Array.from(i).map(r=>({id:r.id,topOffset:r.getBoundingClientRect().top+window.scrollY}))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),c(()=>{const e=r=>{r.forEach(s=>{s?.isIntersecting&&u(s.target.id)})};return n.current=new IntersectionObserver(e,{rootMargin:"-10% 0px -65% 0px"}),document.querySelectorAll("article :is(h1,h2,h3)").forEach(r=>n?.current?.observe(r)),()=>n.current?.disconnect()}),t("div",{children:[t("h2",{className:"heading",children:"On this page"}),t("ul",{children:[v,...p].filter(({depth:e})=>e>1&&e<4).map(e=>t("li",{class:`list-none pt-1 pb-1 pr-4 border-l-4 border-purple-divider hover:border-purple-bright active:border-purple-bright
              ${e.depth>2?"pl-8":"pl-4"}
              ${e.slug===o?"text-purple-bright border-purple-bright":""}`,children:t("a",{href:`#${e.slug}`,class:`hover:no-underline hover:text-purple-bright 
                ${e.slug===o?"text-purple-bright":"text-white"}`,children:e.text})}))})]})};export{m as default};