import{L as u,Q as d,V as a,c as p,f as v,p as U,q as f,r as h,s as x,v as l,x as I}from"./chunk-BRGZVJPZ.js";function P(t,r){let s=r?.url?.path;if(t&&s&&(t=f(t,s,{preserveProtocolRelative:!0}),r.portalItem&&r.readResourcePaths)){let e=h(t,r.portalItem.itemUrl);e!=null&&K.test(e)&&r.readResourcePaths.push(r.portalItem.resourceFromPath(e).path)}return(t=g(t,r?.portal))&&m.test(t)?w(t):t}function R(t,r,s=n.YES){if((t=t&&m.test(t)?y(t):t)==null)return t;!l(t)&&r?.blockedRelativeUrls&&r.blockedRelativeUrls.push(t);let e=f(t);if(r){let o=r.verifyItemRelativeUrls?.rootPath||r.url?.path;if(o){let c=g(o,r.portal),i=g(e,r.portal);e=h(i,c,c),e!=null&&e!==i&&e!==t&&r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.writtenUrls.push(e)}}return e=O(e,r?.portal),l(e)&&(e=x(e)),r?.resources&&r?.portalItem&&!l(e)&&!I(e)&&s===n.YES&&r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(e),compress:!1}),e}function b(t,r,s){return P(t,s)}function D(t,r,s,e){let o=R(t,e);o!==void 0&&(r[s]=o)}var m=/\/items\/([^/]+)\/resources\/(.*)/,K=/^\.\/resources\//;function N(t){return(t?.match(m)??null)?.[1]??null}function $(t){let r=t?.match(m)??null;if(r==null)return null;let s=r[2],e=s.lastIndexOf("/");if(e===-1){let{path:i,extension:S}=d(s);return{prefix:null,filename:i,extension:S}}let{path:o,extension:c}=d(s.slice(e+1));return{prefix:s.slice(0,e),filename:o,extension:c}}function O(t,r){return r&&!r.isPortal&&r.urlKey&&r.customBaseUrl?u(t,`${r.urlKey}.${r.customBaseUrl}`,r.portalHostname):t}function g(t,r){if(!r||r.isPortal||!r.urlKey||!r.customBaseUrl)return t;let s=`${r.urlKey}.${r.customBaseUrl}`,e=v();return U(e,`${e.scheme}://${s}`)?u(t,r.portalHostname,s):u(t,s,r.portalHostname)}function w(t){if(!t)return t||null;let r=t;return r&&a&&!a.findCredential(r)&&(r=p(r),r=r.replace(/^https?:\/\/www\.arcgis\.com/,"https://cdn.arcgis.com"),r=r.replace(/^https?:\/\/devext\.arcgis\.com/,"https://cdndev.arcgis.com"),r=r.replace(/^https?:\/\/qaext\.arcgis\.com/,"https://cdnqa.arcgis.com")),r}function y(t){if(!t)return t||null;let r=t;return r=r.replace(/^https?:\/\/cdn\.arcgis\.com/,"https://www.arcgis.com"),r=r.replace(/^https?:\/\/cdndev\.arcgis\.com/,"https://devext.arcgis.com"),r=r.replace(/^https?:\/\/cdnqa\.arcgis\.com/,"https://qaext.arcgis.com"),r&&a&&!a.findCredential(r)&&(r=p(r)),r}var n;(function(t){t[t.YES=0]="YES",t[t.NO=1]="NO"})(n||(n={}));var F=Object.freeze(Object.defineProperty({__proto__:null,get MarkKeep(){return n},ensureMainOnlineDomain:O,fromCDNUrl:y,fromJSON:P,itemIdFromResourceUrl:N,prefixAndFilenameFromResourceUrl:$,read:b,toCDNUrl:w,toJSON:R,write:D},Symbol.toStringTag,{value:"Module"}));export{P as a,R as b,b as c,D as d,N as e,$ as f,O as g,w as h,n as i,F as j};
