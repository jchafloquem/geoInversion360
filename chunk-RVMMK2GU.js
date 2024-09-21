import{b as v}from"./chunk-SPJDFBYB.js";import{a as p}from"./chunk-N566L3JG.js";import{c as I}from"./chunk-7S6PD5JC.js";import{V as g,aa as y}from"./chunk-BRGZVJPZ.js";import{k as f}from"./chunk-JKP4I6UL.js";import{s as u}from"./chunk-BRWS572J.js";import{a as c,b as d,g as o}from"./chunk-JEGVIFEP.js";function R(e,t){return o(this,null,function*(){let a=v(e);if(!a)throw new u("invalid-url","Invalid scene service url");let r=d(c({},t),{sceneServerUrl:a.url.path,layerId:a.sublayer??void 0});if(r.sceneLayerItem??=yield q(r),r.sceneLayerItem==null)return U(r.sceneServerUrl.replace("/SceneServer","/FeatureServer"),r);let n=yield F(r);if(!n?.url)throw new u("related-service-not-found","Could not find feature service through portal item relationship");r.featureServiceItem=n;let i=yield U(n.url,r);return i.portalItem=n,i})}function q(e){return o(this,null,function*(){let t=(yield j(e)).serviceItemId;if(!t)return null;let a=new p({id:t,apiKey:e.apiKey}),r=yield E(e);r!=null&&(a.portal=new I({url:r}));try{return a.load({signal:e.signal})}catch(n){return f(n),null}})}function j(e){return o(this,null,function*(){if(e.rootDocument)return e.rootDocument;let t={query:d(c({f:"json"},e.customParameters),{token:e.apiKey}),responseType:"json",signal:e.signal};try{let a=yield y(e.sceneServerUrl,t);e.rootDocument=a.data}catch{e.rootDocument={}}return e.rootDocument})}function E(e){return o(this,null,function*(){let t=g?.findServerInfo(e.sceneServerUrl);if(t?.owningSystemUrl)return t.owningSystemUrl;let a=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{let r=(yield y(a,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(r)return r}catch(r){f(r)}return null})}function U(e,t){return o(this,null,function*(){let a=v(e);if(!a)throw new u("invalid-feature-service-url","Invalid feature service url");let r=a.url.path,n=t.layerId;if(n==null)return{serverUrl:r};let i=j(t),w=t.featureServiceItem?yield t.featureServiceItem.fetchData("json"):null,A=(w?.layers?.[0]||w?.tables?.[0])?.customParameters,h=s=>{let T={query:c({f:"json"},A),responseType:"json",authMode:s,signal:t.signal};return y(r,T)},D=h("anonymous").catch(()=>h("no-prompt")),[S,b]=yield Promise.all([D,i]),m=b?.layers,l=S.data&&S.data.layers;if(!Array.isArray(l))throw new Error("expected layers array");if(Array.isArray(m)){for(let s=0;s<Math.min(m.length,l.length);s++)if(m[s].id===n)return{serverUrl:r,layerId:l[s].id}}else if(n!=null&&n<l.length)return{serverUrl:r,layerId:l[n].id};throw new Error("could not find matching associated sublayer")})}function F(a){return o(this,arguments,function*({sceneLayerItem:e,signal:t}){if(!e)return null;try{let r=(yield e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:t})).find(i=>i.type==="Feature Service")||null;if(!r)return null;let n=new p({portal:r.portal,id:r.id});return yield n.load(),n}catch(r){return f(r),null}})}export{R as a};
