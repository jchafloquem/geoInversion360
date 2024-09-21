import{a as p}from"./chunk-FVCUBGKZ.js";import{e as a}from"./chunk-IATQ4WNP.js";var l=class{constructor(e){this._rctx=e,this._store=new p}dispose(){this._store.forEach(e=>e.forEach(t=>t.dispose())),this._store.clear()}acquire(e,t,o,r){let n=this._store.get(e,t);if(n!=null)return n.ref(),n;let s=new a(this._rctx,e,t,o,r);return s.ref(),this._store.set(e,t,s),s}get test(){}};function u(i){let{options:e,value:t}=i;return typeof e[t]=="number"}function _(i){let e="";for(let t in i){let o=i[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(u(o)){let{value:r,options:n,namespace:s}=o,f=s?`${s}_`:"";for(let c in n)e+=`#define ${f}${c} ${n[c].toFixed()}
`;e+=`#define ${t} ${f}${r}
`}else{let r=o.options,n=0;for(let s in r)e+=`#define ${r[s]} ${(n++).toFixed()}
`;e+=`#define ${t} ${r[o.value]}
`}}return e}export{l as a,_ as b};
