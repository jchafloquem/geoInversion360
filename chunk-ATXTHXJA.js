import{a as rt}from"./chunk-VFINLX57.js";import{c as st,g as it,h as _}from"./chunk-LM5MGO7W.js";import{a as tt,o as nt,p as et}from"./chunk-4HUAEW4D.js";import{l as U,v as $}from"./chunk-SO6OJFOM.js";import{b as G}from"./chunk-DG5QI6E2.js";import{a as Z}from"./chunk-ZGLJFDS6.js";import{F as d,P as q,Q as w,d as J,e as N,o as Q,r as x,v as O,x as B,y as K}from"./chunk-OFVMJORF.js";import{a as H}from"./chunk-5TSEU5EE.js";import{m as C}from"./chunk-7JLWSSXP.js";import{A as b,h as D}from"./chunk-JKP4I6UL.js";import{s as Y}from"./chunk-BRWS572J.js";import{g as W}from"./chunk-JEGVIFEP.js";function F(e,n,t,s,i,r){return M[0]=e,M[1]=n,M[2]=t,_(M,s,0,i,r,0,1)}var M=Z();var z=0,j=class e{static fromGE(n){let t=new e;return t._wkt=n.wkt,t._wkid=n.wkid,t._isInverse=n.isInverse,t}constructor(n){this.uid=z++,n?(this._wkt=n.wkt!=null?n.wkt:null,this._wkid=n.wkid!=null?n.wkid:-1,this._isInverse=n.isInverse!=null&&n.isInverse===!0):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}get wkt(){return this._wkt}set wkt(n){this._wkt=n,this.uid=z++}get wkid(){return this._wkid}set wkid(n){this._wkid=n,this.uid=z++}get isInverse(){return this._isInverse}set isInverse(n){this._isInverse=n,this.uid=z++}getInverse(){let n=new e;return n._wkt=this.wkt,n._wkid=this._wkid,n._isInverse=!this.isInverse,n}};var y=class e{static cacheKey(n,t){return[n.wkid?.toString()??"-1",n.wkt?.toString()??"",n.wkt2?.toString()??"",t.wkid?.toString()??"-1",t.wkt?.toString()??"",t.wkt2?.toString()??""].join()}static fromGE(n){let t=new e,s="";for(let i of n.steps){let r=j.fromGE(i);t.steps.push(r),s+=r.uid.toString()+","}return t._cachedProjection={},t._gtlistentry=null,t._chain=s,t}constructor(n){if(this.steps=[],this._cachedProjection={},this._chain="",this._gtlistentry=null,n?.steps)for(let t of n.steps)t instanceof j?this.steps.push(t):this.steps.push(new j({wkid:t.wkid,wkt:t.wkt,isInverse:t.isInverse}))}getInverse(){let n=new e;n.steps=[];for(let t=this.steps.length-1;t>=0;t--){let s=this.steps[t];n.steps.push(s.getInverse())}return n}getGTListEntry(){let n="";for(let t of this.steps)n+=t.uid.toString()+",";return n!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=n),this._gtlistentry}assignCachedGe(n,t,s){this._cachedProjection[e.cacheKey(n,t)]=s}getCachedGeTransformation(n,t){let s="";for(let r of this.steps)s+=r.uid.toString()+",";s!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=s);let i=this._cachedProjection[e.cacheKey(n,t)];return i===void 0?null:i}};var m=null,g=null,S=null,E={},X=new H;function L(){return!!m&&J()}function ht(){return!!L()||(C(X),T(),!1)}function Ft(e,n){return!e||!n||v(e,n)||ht()}function Vt(e,n){return!v(e,n)&&!L()}function T(e){return S==null&&(S=Promise.all([N(),import("./chunk-FULERIES.js").then(n=>n.g),import("./chunk-YNY7VSTR.js")])),S.then(([,n,{hydratedAdapter:t}])=>{D(e),g=t,m=n.default,m._enableProjection(Q),X.notify()})}function mt(e,n,t=null,s=null){return Array.isArray(e)?e.length===0?[]:ot(g,e,e[0].spatialReference,n,t,s):ot(g,[e],e.spatialReference,n,t,s)[0]}function ot(e,n,t,s,i=null,r=null){if(t==null||s==null)return n;if(v(t,s,i))return n.map(o=>V(o,t,s));if(i==null&&q(t))return n.map(o=>V(o,t,G.WGS84)).map(o=>A(o,s));if(i==null&&q(s))return n.map(o=>A(o,G.WGS84)).map(o=>V(o,G.WGS84,s));if(i==null){let o=y.cacheKey(t,s);E[o]!==void 0?i=E[o]:((i=gt(t,s,void 0))==null&&(i=new y),E[o]=i)}if(m==null||e==null)throw new R;return r!=null?m._project(e,n,t,s,i,r):m._project(e,n,t,s,i)}function Xt(e,n){let t=dt([e],n);return t.pending!=null?{pending:t.pending,geometry:null}:t.geometries!=null?{pending:null,geometry:t.geometries[0]}:{pending:null,geometry:null}}function dt(e,n){if(!L()){for(let t of e)if(t!=null&&!x(t.spatialReference,n)&&d(t.spatialReference)&&d(n)&&!v(t.spatialReference,n))return C(X),{pending:T(),geometries:null}}return{pending:null,geometries:e.map(t=>t==null?null:x(t.spatialReference,n)?t:d(t.spatialReference)&&d(n)?A(t,n):null)}}function gt(e,n,t=null){if(e==null||n==null)return null;if(m==null||g==null)throw new R;let s=m._getTransformation(g,e,n,t,t?.spatialReference);return s!==null?y.fromGE(s):null}function Yt(e,n,t=null){if(m==null||g==null)throw new R;let s=m._getTransformationBySuitability(g,e,n,t,t?.spatialReference);if(s!==null){let i=[];for(let r of s)i.push(y.fromGE(r));return i}return[]}var R=class extends Y{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}};function Dt(){m=null,g=null,S=null,E={}}var Ht={get loadPromise(){return S}};function A(e,n){try{let t=mt(e,n);if(t==null)return null;"xmin"in e&&"xmin"in t&&(t.zmin=e.zmin,t.zmax=e.zmax);let s=rt(t.type,e.spatialReference,n);return s?.(t),t}catch(t){if(!(t instanceof R))throw t;return null}}function Jt(e,n,t){return W(this,null,function*(){let s=e.spatialReference;return s!=null&&n!=null&&(yield wt(s,n,null,t)),A(e,n)})}function v(e,n,t){return!t&&(!!x(e,n)||d(e)&&d(n)&&!!st(e,n,it))}function Nt(e,n){if(x(e,n))return!0;if(!d(e)||!d(n))return!1;let t=O(e)||K(e)||B(e),s=O(n)||K(n)||B(n);return t&&s}function wt(e,n,t,s){return W(this,null,function*(){if(L())return b(s);if(Array.isArray(e)){for(let{source:i,dest:r,geographicTransformation:o}of e)if(i&&r&&!v(i,r,o))return T(s)}else if(e&&n&&!v(e,n,t))return T(s);return b(s)})}function V(e,n,t){return e?"x"in e?at(e,n,new U,t,0):"xmin"in e?ft(e,n,new $,t,0):"rings"in e?ct(e,n,new nt,t,0):"paths"in e?ut(e,n,new et,t,0):"points"in e?lt(e,n,new tt,t,0):null:null}function Qt(e,n,t=n.spatialReference,s=0){return t!=null&&e.spatialReference!=null&&at(e,e.spatialReference,n,t,s)!=null}function at(e,n,t,s,i){u[0]=e.x,u[1]=e.y;let r=e.z;return u[2]=r!==void 0?r:i,_(u,n,0,u,s,0,1)?(t.x=u[0],t.y=u[1],t.spatialReference=s,r!==void 0||w(s)?(t.z=u[2],t.hasZ=!0):(t.z=void 0,t.hasZ=!1),e.m===void 0?(t.m=void 0,t.hasM=!1):(t.m=e.m,t.hasM=!0),t):null}function Ut(e,n,t=n.spatialReference,s=0){return e.spatialReference!=null&&t!=null&&lt(e,e.spatialReference,n,t,s)!=null}function lt(e,n,t,s,i){let{points:r,hasZ:o,hasM:a}=e,l=[],p=r.length,h=[];for(let c of r)h.push(c[0],c[1],o?c[2]:i);if(!_(h,n,0,h,s,0,p))return null;let f=o||w(s);for(let c=0;c<p;++c){let k=3*c,I=h[k],P=h[k+1];f&&a?l.push([I,P,h[k+2],r[c][3]]):f?l.push([I,P,h[k+2]]):a?l.push([I,P,r[c][2]]):l.push([I,P])}return t.points=l,t.spatialReference=s,t.hasZ=o,t.hasM=a,t}function $t(e,n,t=n.spatialReference,s=0){return e.spatialReference!=null&&t!=null&&ut(e,e.spatialReference,n,t,s)!=null}function ut(e,n,t,s,i){let{paths:r,hasZ:o,hasM:a}=e,l=[];if(!pt(r,o??!1,a??!1,n,l,s,i))return null;let p=o||w(s);return t.paths=l,t.spatialReference=s,t.hasZ=p,t.hasM=a,t}function tn(e,n,t=n.spatialReference,s=0){return e.spatialReference!=null&&t!=null&&ct(e,e.spatialReference,n,t,s)!=null}function ct(e,n,t,s,i){let{rings:r,hasZ:o,hasM:a}=e,l=[];if(!pt(r,o??!1,a??!1,n,l,s,i))return null;let p=o||w(s);return t.rings=l,t.spatialReference=s,t.hasZ=p,t.hasM=a,t}function nn(e,n,t=n.spatialReference,s=0){return e.spatialReference!=null&&t!=null&&ft(e,e.spatialReference,n,t,s)!=null}function ft(e,n,t,s,i){let{xmin:r,ymin:o,xmax:a,ymax:l,hasZ:p,hasM:h}=e,f=p?e.zmin:i;if(!F(r,o,f,n,u,s))return null;let c=p||w(s);t.xmin=u[0],t.ymin=u[1],c&&(t.zmin=u[2]);let k=p?e.zmax:i;return F(a,l,k,n,u,s)?(t.xmax=u[0],t.ymax=u[1],c&&(t.zmax=u[2]),h&&(t.mmin=e.mmin,t.mmax=e.mmax),t.spatialReference=s,t):null}function pt(e,n,t,s,i,r,o=0){let a=new Array;for(let h of e)for(let f of h)a.push(f[0],f[1],n?f[2]:o);if(!_(a,s,0,a,r,0,a.length/3))return!1;let l=0;i.length=0;let p=n||w(r);for(let h of e){let f=new Array;for(let c of h)p&&t?f.push([a[l++],a[l++],a[l++],c[3]]):p?f.push([a[l++],a[l++],a[l++]]):t?(f.push([a[l++],a[l++],c[2]]),l++):(f.push([a[l++],a[l++]]),l++);i.push(f)}return!0}var u=Z();export{y as a,L as b,ht as c,Ft as d,Vt as e,T as f,mt as g,ot as h,Xt as i,dt as j,gt as k,Yt as l,Dt as m,Ht as n,A as o,Jt as p,v as q,Nt as r,wt as s,V as t,Qt as u,Ut as v,$t as w,tn as x,nn as y};
