import{L as d,k as e}from"./chunk-Z5NXR7SL.js";import{S as p,b as m}from"./chunk-7JLWSSXP.js";import{a as f}from"./chunk-W3WDPWBE.js";import{a as S}from"./chunk-TZHKPIVH.js";import{c as C}from"./chunk-BRWS572J.js";var y=g=>{let l=class extends g{clone(){let c=m(this);S(c,"unable to clone instance of non-accessor class");let u=c.metadata,x=c.store,b={},a=new Map;for(let o in u){let s=u[o],t=x?.originOf(o),n=s.clonable;if(s.readOnly||n===!1||t!==e.USER&&t!==e.DEFAULTS&&t!==e.WEB_MAP&&t!==e.WEB_SCENE)continue;let r=this[o],i=null;i=typeof n=="function"?n(r):n==="reference"?r:C(r),r!=null&&i==null||(t===e.DEFAULTS?a.set(o,i):b[o]=i)}let E=new(Object.getPrototypeOf(this)).constructor(b);if(a.size){let o=m(E)?.store;if(o)for(let[s,t]of a)o.set(s,t,e.DEFAULTS)}return E}};return l=f([p("esri.core.Clonable")],l),l},O=class extends y(d){};O=f([p("esri.core.Clonable")],O);export{y as a,O as b};
