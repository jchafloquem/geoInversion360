import{a as J,b as ln,c as dn,d as mn,j as wn,k as hn,l as pn}from"./chunk-WANJNLEB.js";import{a as Y}from"./chunk-6YNGFTDW.js";import{a as X}from"./chunk-I6FBO5KL.js";import{c as O}from"./chunk-C3UHYQBM.js";import{Aa as Q,Ba as D,Ca as Z,Na as S,T as m,X as k,_ as v,aa as L,b as i,c as s,ea as P,fa as B,ga as G,ha as K,ja as w,oa as q,ra as R,ta as on,ua as U,za as l}from"./chunk-FXWBXMPB.js";import{A as $,D as qn,E as nn,F as en,G as rn,H as M,I as tn,J as z,b as yn,c as gn,d as vn,e as Pn,f as In,g as An,h as Fn,i as Rn,j as xn,k as Nn,l as bn,m as Sn,n as On,o as _,p as Tn,q as jn,r as Cn,s as Dn,t as Ln,u as Un,v as Jn,w as Mn,x as En,y as kn}from"./chunk-RMJ37HEO.js";import{d as C,f as p,g as F}from"./chunk-IBDPR46F.js";import{f as H}from"./chunk-IWJQ3PU6.js";import{c as an}from"./chunk-7S6PD5JC.js";import{a as W,o as b,p as A}from"./chunk-4HUAEW4D.js";import{b as d,l as N,v as j}from"./chunk-SO6OJFOM.js";import{Y as fn}from"./chunk-OFVMJORF.js";import{U as un,V as cn,aa as V}from"./chunk-BRGZVJPZ.js";import{g as I}from"./chunk-JEGVIFEP.js";function sn(a,e,r){return I(this,null,function*(){if(!cn?.findCredential(a.restUrl))return null;if(a.loadStatus==="loaded"&&e===""&&a.user?.sourceJSON&&r===!1)return a.user.sourceJSON;let f={responseType:"json",query:{f:"json"}};if(r&&(f.query.returnUserLicenseTypeExtensions=!0),e===""){let t=yield V(a.restUrl+"/community/self",f);if(t.data){let u=t.data;if(u?.username)return u}return null}let n=yield V(a.restUrl+"/community/users/"+e,f);if(n.data){let t=n.data;return t.error?null:t}return null})}function Zn(a){return un.indexOf("4.")===0?b.fromExtent(a):new b({spatialReference:a.spatialReference,rings:[[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]]})}function x(a,e,r){if(w(a,2,2,e,r),!(a[0]instanceof d&&a[1]instanceof d)){if(!(a[0]instanceof d&&a[1]===null)){if(!(a[1]instanceof d&&a[0]===null)){if(a[0]!==null||a[1]!==null)throw new s(e,i.InvalidParameter,r)}}}}function zn(a,e){return I(this,null,function*(){if(a.type!=="polygon"&&a.type!=="polyline"&&a.type!=="extent")return 0;let r=1;(a.spatialReference.vcsWkid||a.spatialReference.latestVcsWkid)&&(r=ln(a.spatialReference)/fn(a.spatialReference));let c=0;if(a.type==="polyline")for(let n of a.paths)for(let t=1;t<n.length;t++)c+=J(n[t],n[t-1],r);else if(a.type==="polygon")for(let n of a.rings){for(let t=1;t<n.length;t++)c+=J(n[t],n[t-1],r);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(c+=J(n[0],n[n.length-1],r))}else a.type==="extent"&&(c+=2*J([a.xmin,a.ymin,0],[a.xmax,a.ymin,0],r),c+=2*J([a.xmin,a.ymin,0],[a.xmin,a.ymax,0],r),c*=2,c+=4*Math.abs(m(a.zmax,0)*r-m(a.zmin,0)*r));let f=new A({hasZ:!1,hasM:!1,spatialReference:a.spatialReference,paths:[[0,0],[0,c]]});return M(f,e)})}function me(a){a.mode==="async"&&(a.functions.disjoint=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>(x(n=l(n),e,r),n[0]===null||n[1]===null||Nn(n[0],n[1])))},a.functions.intersects=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>(x(n=l(n),e,r),n[0]!==null&&n[1]!==null&&Fn(n[0],n[1])))},a.functions.touches=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>(x(n=l(n),e,r),n[0]!==null&&n[1]!==null&&Rn(n[0],n[1])))},a.functions.crosses=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>(x(n=l(n),e,r),n[0]!==null&&n[1]!==null&&Pn(n[0],n[1])))},a.functions.within=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>(x(n=l(n),e,r),n[0]!==null&&n[1]!==null&&xn(n[0],n[1])))},a.functions.contains=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>(x(n=l(n),e,r),n[0]!==null&&n[1]!==null&&vn(n[0],n[1])))},a.functions.overlaps=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>(x(n=l(n),e,r),n[0]!==null&&n[1]!==null&&bn(n[0],n[1])))},a.functions.equals=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>(w(n,2,2,e,r),n[0]===n[1]||(n[0]instanceof d&&n[1]instanceof d?An(n[0],n[1]):(B(n[0])&&B(n[1])||!!(K(n[0])&&K(n[1])||G(n[0])&&G(n[1])))&&n[0].equals(n[1]))))},a.functions.relate=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,3,3,e,r),n[0]instanceof d&&n[1]instanceof d)return Sn(n[0],n[1],q(n[2]));if(n[0]instanceof d&&n[1]===null||n[1]instanceof d&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new s(e,i.InvalidParameter,r)})},a.functions.intersection=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>(x(n=l(n),e,r),n[0]===null||n[1]===null?null:Dn(n[0],n[1])))},a.functions.union=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{let t=[];if((n=l(n)).length===0)throw new s(e,i.WrongNumberOfParameters,r);if(n.length===1)if(v(n[0])){let u=l(n[0]);for(let o=0;o<u.length;o++)if(u[o]!==null){if(!(u[o]instanceof d))throw new s(e,i.InvalidParameter,r);t.push(u[o])}}else{if(!P(n[0])){if(n[0]instanceof d)return U(F(n[0]),e.spatialReference);if(n[0]===null)return null;throw new s(e,i.InvalidParameter,r)}{let u=l(n[0].toArray());for(let o=0;o<u.length;o++)if(u[o]!==null){if(!(u[o]instanceof d))throw new s(e,i.InvalidParameter,r);t.push(u[o])}}}else for(let u=0;u<n.length;u++)if(n[u]!==null){if(!(n[u]instanceof d))throw new s(e,i.InvalidParameter,r);t.push(n[u])}return t.length===0?null:Ln(t)})},a.functions.difference=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>(x(n=l(n),e,r),n[0]===null?null:n[1]===null?F(n[0]):jn(n[0],n[1])))},a.functions.symmetricdifference=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>(x(n=l(n),e,r),n[0]===null&&n[1]===null?null:n[0]===null?F(n[1]):n[1]===null?F(n[0]):Cn(n[0],n[1])))},a.functions.clip=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,2,e,r),!(n[1]instanceof j)&&n[1]!==null)throw new s(e,i.InvalidParameter,r);if(n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return n[1]===null?null:yn(n[0],n[1])})},a.functions.cut=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,2,e,r),!(n[1]instanceof A)&&n[1]!==null)throw new s(e,i.InvalidParameter,r);if(n[0]===null)return[];if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return n[1]===null?[F(n[0])]:gn(n[0],n[1])})},a.functions.area=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>I(this,null,function*(){if(w(n,1,2,e,r),(n=l(n))[0]===null)return 0;if(L(n[0])){let t=yield n[0].sumArea(C(m(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new s(e,i.Cancelled,r);return t}if(v(n[0])||P(n[0])){let t=Q(n[0],e.spatialReference);return t===null?0:rn(t,C(m(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return rn(n[0],C(m(n[1],-1)))}))},a.functions.areageodetic=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>I(this,null,function*(){if(w(n,1,2,e,r),(n=l(n))[0]===null)return 0;if(L(n[0])){let t=yield n[0].sumArea(C(m(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new s(e,i.Cancelled,r);return t}if(v(n[0])||P(n[0])){let t=Q(n[0],e.spatialReference);return t===null?0:tn(t,C(m(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return tn(n[0],C(m(n[1],-1)))}))},a.functions.length=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>I(this,null,function*(){if(w(n,1,2,e,r),(n=l(n))[0]===null)return 0;if(L(n[0])){let t=yield n[0].sumLength(p(m(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new s(e,i.Cancelled,r);return t}if(v(n[0])||P(n[0])){let t=D(n[0],e.spatialReference);return t===null?0:M(t,p(m(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return M(n[0],p(m(n[1],-1)))}))},a.functions.length3d=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(w(n,1,2,e,r),(n=l(n))[0]===null)return 0;if(v(n[0])||P(n[0])){let t=D(n[0],e.spatialReference);return t===null?0:t.hasZ===!0?zn(t,p(m(n[1],-1))):M(t,p(m(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return n[0].hasZ===!0?zn(n[0],p(m(n[1],-1))):M(n[0],p(m(n[1],-1)))})},a.functions.lengthgeodetic=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>I(this,null,function*(){if(w(n,1,2,e,r),(n=l(n))[0]===null)return 0;if(L(n[0])){let t=yield n[0].sumLength(p(m(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new s(e,i.Cancelled,r);return t}if(v(n[0])||P(n[0])){let t=D(n[0],e.spatialReference);return t===null?0:z(t,p(m(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return z(n[0],p(m(n[1],-1)))}))},a.functions.distance=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{n=l(n),w(n,2,3,e,r);let t=n[0];(v(n[0])||P(n[0]))&&(t=Z(n[0],e.spatialReference));let u=n[1];if((v(n[1])||P(n[1]))&&(u=Z(n[1],e.spatialReference)),!(t instanceof d))throw new s(e,i.InvalidParameter,r);if(!(u instanceof d))throw new s(e,i.InvalidParameter,r);return In(t,u,p(m(n[2],-1)))})},a.functions.distancegeodetic=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{n=l(n),w(n,2,3,e,r);let t=n[0],u=n[1];if(!(t instanceof N))throw new s(e,i.InvalidParameter,r);if(!(u instanceof N))throw new s(e,i.InvalidParameter,r);let o=new A({paths:[],spatialReference:t.spatialReference});return o.addPath([t,u]),z(o,p(m(n[2],-1)))})},a.functions.densify=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);let t=R(n[1]);if(isNaN(t))throw new s(e,i.InvalidParameter,r);if(t<=0)throw new s(e,i.InvalidParameter,r);return n[0]instanceof b||n[0]instanceof A?nn(n[0],t,p(m(n[2],-1))):n[0]instanceof j?nn(Zn(n[0]),t,p(m(n[2],-1))):n[0]})},a.functions.densifygeodetic=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);let t=R(n[1]);if(isNaN(t))throw new s(e,i.InvalidParameter,r);if(t<=0)throw new s(e,i.InvalidParameter,r);return n[0]instanceof b||n[0]instanceof A?en(n[0],t,p(m(n[2],-1))):n[0]instanceof j?en(Zn(n[0]),t,p(m(n[2],-1))):n[0]})},a.functions.generalize=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,4,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);let t=R(n[1]);if(isNaN(t))throw new s(e,i.InvalidParameter,r);return qn(n[0],t,on(m(n[2],!0)),p(m(n[3],-1)))})},a.functions.buffer=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);let t=R(n[1]);if(isNaN(t))throw new s(e,i.InvalidParameter,r);return t===0?F(n[0]):Jn(n[0],t,p(m(n[2],-1)))})},a.functions.buffergeodetic=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);let t=R(n[1]);if(isNaN(t))throw new s(e,i.InvalidParameter,r);return t===0?F(n[0]):Mn(n[0],t,p(m(n[2],-1)))})},a.functions.offset=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,6,e,r),n[0]===null)return null;if(!(n[0]instanceof b||n[0]instanceof A))throw new s(e,i.InvalidParameter,r);let t=R(n[1]);if(isNaN(t))throw new s(e,i.InvalidParameter,r);let u=R(m(n[4],10));if(isNaN(u))throw new s(e,i.InvalidParameter,r);let o=R(m(n[5],0));if(isNaN(o))throw new s(e,i.InvalidParameter,r);return Un(n[0],t,p(m(n[2],-1)),q(m(n[3],"round")).toLowerCase(),u,o)})},a.functions.rotate=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);let t=n[0]instanceof j?b.fromExtent(n[0]):n[0],u=R(n[1]);if(isNaN(u))throw new s(e,i.InvalidParameter,r);let o=m(n[2],null);if(o===null)return $(t,u);if(o instanceof N)return $(t,u,o);throw new s(e,i.InvalidParameter,r)})},a.functions.centroid=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,1,1,e,r),n[0]===null)return null;let t=n[0];if((v(n[0])||P(n[0]))&&(t=Z(n[0],e.spatialReference)),t===null)return null;if(!(t instanceof d))throw new s(e,i.InvalidParameter,r);return t instanceof N?U(F(t),e.spatialReference):t instanceof b?t.centroid:t instanceof A?dn(t):t instanceof W?mn(t):t instanceof j?t.center:null})},a.functions.measuretocoordinate=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,2,e,r),n[0]===null)return null;let t=n[0];if((v(n[0])||P(n[0]))&&(t=D(n[0],e.spatialReference)),t===null)return null;if(!(t instanceof d))throw new s(e,i.InvalidParameter,r);if(!(t instanceof A))throw new s(e,i.InvalidParameter,r);if(k(n[1]===!1))throw new s(e,i.InvalidParameter,r);let u=wn(t,n[1]);return u?O.convertObjectToArcadeDictionary(u,S(e),!1,!0):null})},a.functions.pointtocoordinate=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,2,e,r),n[0]===null)return null;let t=n[0];if((v(n[0])||P(n[0]))&&(t=D(n[0],e.spatialReference)),t===null)return null;if(!(t instanceof d))throw new s(e,i.InvalidParameter,r);if(!(t instanceof A))throw new s(e,i.InvalidParameter,r);let u=n[1];if(u===null)return null;if(!(u instanceof N))throw new s(e,i.InvalidParameter,r);if(k(n[1]===!1))throw new s(e,i.InvalidParameter,r);let o=pn(t,u);return o?O.convertObjectToArcadeDictionary(o,S(e),!1,!0):null})},a.functions.distancetocoordinate=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,2,e,r),n[0]===null)return null;let t=n[0];if((v(n[0])||P(n[0]))&&(t=D(n[0],e.spatialReference)),t===null)return null;if(!(t instanceof d))throw new s(e,i.InvalidParameter,r);if(!(t instanceof A))throw new s(e,i.InvalidParameter,r);if(k(n[1]===!1))throw new s(e,i.InvalidParameter,r);let u=hn(t,n[1]);return u?O.convertObjectToArcadeDictionary(u,S(e),!1,!0):null})},a.functions.multiparttosinglepart=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>I(this,null,function*(){if(n=l(n),w(n,1,1,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);if(n[0]instanceof N)return[U(F(n[0]),e.spatialReference)];if(n[0]instanceof j)return[U(F(n[0]),e.spatialReference)];let t=yield _(n[0]);if(t instanceof b){let u=[],o=[];for(let h=0;h<t.rings.length;h++)if(t.isClockwise(t.rings[h])){let y=H({rings:[t.rings[h]],hasZ:t.hasZ===!0,hasM:t.hasM===!0,spatialReference:t.spatialReference.toJSON()});u.push(y)}else o.push({ring:t.rings[h],pt:t.getPoint(h,0)});for(let h=0;h<o.length;h++)for(let y=0;y<u.length;y++)if(u[y].contains(o[h].pt)){u[y].addRing(o[h].ring);break}return u}if(t instanceof A){let u=[];for(let o=0;o<t.paths.length;o++){let h=H({paths:[t.paths[o]],hasZ:t.hasZ===!0,hasM:t.hasM===!0,spatialReference:t.spatialReference.toJSON()});u.push(h)}return u}if(n[0]instanceof W){let u=[],o=U(F(n[0]),e.spatialReference);for(let h=0;h<o.points.length;h++)u.push(o.getPoint(h));return u}return null}))},a.functions.issimple=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,1,1,e,r),n[0]===null)return!0;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return On(n[0])})},a.functions.simplify=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,1,1,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return _(n[0])})},a.functions.convexhull=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,1,1,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return Tn(n[0])})},a.functions.getuser=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>I(this,null,function*(){w(n,0,2,e,r);let t=m(n[1],""),u=t===!0;if(t=t===!0||t===!1?"":q(t),n.length===0||n[0]instanceof X){let h;h=e.services?.portal?e.services.portal:an.getDefault(),n.length>0&&(h=Y(n[0],h));let y=yield sn(h,t,u);if(y){let T=JSON.parse(JSON.stringify(y));for(let g of["lastLogin","created","modified"])T[g]!==void 0&&T[g]!==null&&(T[g]=new Date(T[g]));return O.convertObjectToArcadeDictionary(T,S(e))}return null}let o=null;if(L(n[0])&&(o=n[0]),o){if(u=!1,t)return null;yield o.load();let h=yield o.getOwningSystemUrl();if(!h){if(!t){let g=yield o.getIdentityUser();return g?O.convertObjectToArcadeDictionary({username:g},S(e)):null}return null}let y;y=e.services?.portal?e.services.portal:an.getDefault(),y=Y(new X(h),y);let T=yield sn(y,t,u);if(T){let g=JSON.parse(JSON.stringify(T));for(let E of["lastLogin","created","modified"])g[E]!==void 0&&g[E]!==null&&(g[E]=new Date(g[E]));return O.convertObjectToArcadeDictionary(g,S(e))}return null}throw new s(e,i.InvalidParameter,r)}))},a.functions.nearestcoordinate=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>I(this,null,function*(){if(n=l(n),w(n,2,2,e,r),!(n[0]instanceof d||n[0]===null))throw new s(e,i.InvalidParameter,r);if(!(n[1]instanceof N||n[1]===null))throw new s(e,i.InvalidParameter,r);if(n[0]===null||n[1]===null)return null;let t=yield En(n[0],n[1]);return t===null?null:O.convertObjectToArcadeDictionary({coordinate:t.coordinate,distance:t.distance,sideOfLine:t.distance===0?"straddle":t.isRightSide?"right":"left"},S(e),!1,!0)}))},a.functions.nearestvertex=function(e,r){return a.standardFunctionAsync(e,r,(c,f,n)=>I(this,null,function*(){if(n=l(n),w(n,2,2,e,r),!(n[0]instanceof d||n[0]===null))throw new s(e,i.InvalidParameter,r);if(!(n[1]instanceof N||n[1]===null))throw new s(e,i.InvalidParameter,r);if(n[0]===null||n[1]===null)return null;let t=yield kn(n[0],n[1]);return t===null?null:O.convertObjectToArcadeDictionary({coordinate:t.coordinate,distance:t.distance,sideOfLine:t.distance===0?"straddle":t.isRightSide?"right":"left"},S(e),!1,!0)}))})}export{me as a};
