import{u as E}from"./vue-request.6886b8d7.js";import{k as b,K as O,F as k,M as A}from"./index.f4b9065c.js";import{_ as B}from"./Duration.09f97f87.js";import{M as C}from"./@arco-design.55369db5.js";import{i as g,j as i,k as r,l as h,m as s,v as e,p,F as y,$ as o,y as w,z as D,s as V,Q as I,O as P,aA as R,n as S}from"./@vue.0987707a.js";import"./vue-router.0ed66d6f.js";import"./vue-i18n.e3137642.js";import"./@intlify.bed9fa1a.js";import"./source-map.205bdfab.js";import"./vue.5c5bb0aa.js";import"./@vueuse.d5398ce4.js";import"./pinia.2e07300c.js";import"./vue-demi.b3a9cad9.js";import"./naive-ui.506a45a0.js";import"./date-fns.a06005bd.js";import"./seemly.d0f7d7a4.js";import"./evtd.9eee5233.js";import"./@css-render.6ced7bf3.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./vooks.3f61458b.js";import"./vueuc.5f5811a3.js";import"./vdirs.ab69c576.js";import"./@juggle.32c34d6c.js";import"./lodash-es.33d1f95f.js";import"./date-fns-tz.c3c7eb03.js";import"./axios.b9f958b0.js";/* empty css                    */import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.17358474.js";import"./b-tween.87ffe365.js";import"./dayjs.396bdce9.js";import"./b-validate.ee581f7d.js";import"./number-precision.6dad9ff9.js";import"./scroll-into-view-if-needed.61c672a4.js";const _={__name:"Item",props:{data:Object,name:String},setup(m){const t=g("data"),{run:n}=E(O,{manual:!0,onSuccess:d=>{!d.success||C.success(b("message.success",[b("clear")]))}});return(d,a)=>{const l=i("a-switch"),u=i("a-button"),v=i("a-space");return r(),h(v,null,{default:s(()=>[e(l,{type:"round",modelValue:m.data.enable,"onUpdate:modelValue":a[0]||(a[0]=c=>m.data.enable=c)},null,8,["modelValue"]),m.data.enable?(r(),p(y,{key:0},[e(B,{data:m.data.ttl},null,8,["data"]),e(u,{size:"mini",disabled:o(t).active_driver==="memcached",type:"text",onClick:a[1]||(a[1]=c=>o(n)(m.name))},{default:s(()=>[w(D(d.$t("clear")),1)]),_:1},8,["disabled"]),o(t).active_driver==="memcached"&&m.name==="index"?(r(),h(u,{key:0,size:"mini",type:"text",onClick:a[2]||(a[2]=c=>o(n)("index"))},{default:s(()=>[w(D(d.$t("clearAll")),1)]),_:1})):V("",!0)],64)):V("",!0)]),_:1})}}},j={__name:"Options",setup(m){const t=g("data");return(n,d)=>{const a=i("a-form-item");return r(),p(y,null,[e(a,{label:n.$t("home"),class:"mt-5"},{default:s(()=>[e(_,{data:o(t).options.home,name:"home"},null,8,["data"])]),_:1},8,["label"]),e(a,{label:n.$t("article")},{default:s(()=>[e(_,{data:o(t).options.article,name:"article"},null,8,["data"])]),_:1},8,["label"]),e(a,{label:n.$t("category")},{default:s(()=>[e(_,{data:o(t).options.category,name:"category"},null,8,["data"])]),_:1},8,["label"]),e(a,{label:n.$t("tag")},{default:s(()=>[e(_,{data:o(t).options.tag,name:"tag"},null,8,["data"])]),_:1},8,["label"]),e(a,{label:n.$t("sitemap")},{default:s(()=>[e(_,{data:o(t).options.sitemap,name:"sitemap"},null,8,["data"])]),_:1},8,["label"]),e(a,{label:n.$t("templatePage")},{default:s(()=>[e(_,{data:o(t).options.page,name:"page"},null,8,["data"])]),_:1},8,["label"])],64)}}},z={key:0,class:"overflow-auto",style:{"max-height":"280px"}},L={__name:"Storage",setup(m){const t=g("data"),n=Object.assign({"./drivers/badger.vue":()=>k(()=>import("./badger.7c7c302a.js"),["assets/badger.7c7c302a.js","assets/Duration.09f97f87.js","assets/index.f4b9065c.js","assets/@vue.0987707a.js","assets/vue-router.0ed66d6f.js","assets/vue-i18n.e3137642.js","assets/@intlify.bed9fa1a.js","assets/source-map.205bdfab.js","assets/vue.5c5bb0aa.js","assets/@arco-design.55369db5.js","assets/resize-observer-polyfill.8deb1e21.js","assets/compute-scroll-into-view.17358474.js","assets/b-tween.87ffe365.js","assets/dayjs.396bdce9.js","assets/b-validate.ee581f7d.js","assets/number-precision.6dad9ff9.js","assets/scroll-into-view-if-needed.61c672a4.js","assets/@arco-design.bd8c29bd.css","assets/@vueuse.d5398ce4.js","assets/pinia.2e07300c.js","assets/vue-demi.b3a9cad9.js","assets/naive-ui.506a45a0.js","assets/date-fns.a06005bd.js","assets/seemly.d0f7d7a4.js","assets/evtd.9eee5233.js","assets/@css-render.6ced7bf3.js","assets/css-render.20ab466e.js","assets/@emotion.6322e2ae.js","assets/vooks.3f61458b.js","assets/vueuc.5f5811a3.js","assets/vdirs.ab69c576.js","assets/@juggle.32c34d6c.js","assets/lodash-es.33d1f95f.js","assets/date-fns-tz.c3c7eb03.js","assets/axios.b9f958b0.js","assets/vue-request.6886b8d7.js","assets/index.2e19c31e.css","assets/tailwindcss.9251579c.css"]),"./drivers/memcached.vue":()=>k(()=>import("./memcached.78b94051.js"),["assets/memcached.78b94051.js","assets/@vue.0987707a.js"]),"./drivers/redis.vue":()=>k(()=>import("./redis.f1b9700c.js"),["assets/redis.f1b9700c.js","assets/@vue.0987707a.js"])});function d(a){let l=n["./drivers/"+a+".vue"];if(!!l)return R(l)}return(a,l)=>{const u=i("a-select"),v=i("a-form-item"),c=i("a-card");return r(),p(y,null,[e(v,{class:"my-5",label:a.$t("storage")},{default:s(()=>[e(u,{class:"w-64",modelValue:o(t).active_driver,"onUpdate:modelValue":l[0]||(l[0]=f=>o(t).active_driver=f),options:["badger","redis","memcached"]},null,8,["modelValue"])]),_:1},8,["label"]),e(c,{class:"mb-5 max-w-2xl py-5"},{default:s(()=>[(r(!0),p(y,null,I(o(t).driver,(f,$)=>(r(),p("div",null,[$===o(t).active_driver?(r(),p("div",z,[(r(),h(P(d($)),{data:f},null,8,["data"]))])):V("",!0)]))),256))]),_:1})],64)}}},N={class:"p-5"},T={class:"p-3"},x={class:"p-3"},Ve={__name:"cache",setup(m){const t=g("data");let n;const{run:d}=E(A,{manual:!0,onBefore:()=>{n=C.loading({content:b("init")+"...",duration:0})},onSuccess:l=>{l.success||C.error(b("message.failed",[b("init")])),n.close()}});return g("useSaveSuccess").value.push(()=>{d()}),(l,u)=>{const v=i("a-switch"),c=i("a-tab-pane"),f=i("a-tabs");return r(),p(y,null,[S("div",N,[w(D(l.$t("enable"))+": ",1),e(v,{type:"round",modelValue:o(t).enable,"onUpdate:modelValue":u[0]||(u[0]=$=>o(t).enable=$)},null,8,["modelValue"])]),o(t).enable?(r(),h(f,{key:0,type:"card-gutter","destroy-on-hide":"","lazy-load":""},{default:s(()=>[e(c,{key:"options",title:l.$t("options")},{default:s(()=>[S("div",T,[e(j)])]),_:1},8,["title"]),e(c,{key:"storage",title:l.$t("storage")},{default:s(()=>[S("div",x,[e(L)])]),_:1},8,["title"])]),_:1})):V("",!0)],64)}}};export{Ve as default};
