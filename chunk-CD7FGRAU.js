import{a as c,b as p}from"./chunk-G4NJ66JB.js";import{j as F}from"./chunk-7WFRJSY3.js";import{B as $,C as k,D as q}from"./chunk-VOH7XGOR.js";import{c as y,f as I,h as u,i as m,j as w,k as D,l as U}from"./chunk-K4GPNFIS.js";import{b as R}from"./chunk-RP7XSKHE.js";import{s as T}from"./chunk-BRGZVJPZ.js";import{z as S}from"./chunk-7JLWSSXP.js";import{b as v,i as L}from"./chunk-TZHKPIVH.js";import{k as d,q as h}from"./chunk-BRWS572J.js";import{a as l,b as f}from"./chunk-JEGVIFEP.js";var B=()=>h.getLogger("esri.support.basemapUtils");function re(){return{}}function ne(e){for(let t in e){let a=e[t];v(a),delete e[t]}}function ie(e,t){let a;if(typeof e=="string"){let r=e in c,n=!r&&e.includes("/");if(!r&&!n){let s=Object.entries(c).filter(([o,i])=>d.apiKey&&!i.classic||!d.apiKey&&(i.classic||i.is3d)).map(([o])=>`"${o}"`).sort().join(", ");return B().warn(`Unable to find basemap definition for: ${e}. Try one of these: ${s}`),null}t&&(a=t[e]),a||(a=r?p.fromId(e):new p({style:{id:e}}),t&&(t[e]=a))}else a=S(p,e);return a?.destroyed&&(B().warn("The provided basemap is already destroyed",{basemap:a}),a=null),a}function se(e){return e.portalItem?.type==="Web Scene"||e.referenceLayers.some(t=>t.type==="scene")}function oe(e){return!!e?.portalItem?.tags?.some(t=>t.toLowerCase()==="beta")}var M;function A(e){if(M)return M(e);let t=null,a=g(e),r=!a?.baseLayers.length;for(let n in c){let s=E(a,O(c[n]),{mustMatchReferences:r});if(s==="equal"){t=n;break}s==="base-layers-equal"&&(t=n)}return t}function le(e,t){return e===t||e?.portalItem?.id!=null&&e.portalItem.id===t?.portalItem?.id?!0:E(g(e),g(t),{mustMatchReferences:!0})==="equal"}function ue(e,t){if(t==null||e==null)return{spatialReference:null,updating:!1};if(t.loadStatus==="not-loaded")return t.load(),{spatialReference:null,updating:!0};if(t.spatialReference)return{spatialReference:t.spatialReference,updating:!1};if(t.baseLayers.length===0)return{spatialReference:null,updating:!1};let a=t.baseLayers.at(0);switch(a.loadStatus){case"not-loaded":a.load();case"loading":return{spatialReference:null,updating:!0};case"failed":return{spatialReference:null,updating:!1}}let r=(("supportedSpatialReferences"in a?a.supportedSpatialReferences:null)||["tileInfo"in a?a.tileInfo?.spatialReference:a.spatialReference]).filter(Boolean),n=e.spatialReference;return n?{spatialReference:r.find(s=>n.equals(s))??r[0]??null,updating:!1}:{spatialReference:r[0],updating:!1}}function g(e){return e?!e.loaded&&e.resourceInfo?O(e.resourceInfo.data):{baseLayers:x(e.baseLayers),referenceLayers:x(e.referenceLayers)}:null}function x(e){return(R.isCollection(e)?e.toArray():e).map(G)}function G(e){return{type:e.type,effect:"effect"in e?e.effect:void 0,url:z("urlTemplate"in e&&e.urlTemplate||e.url||"styleUrl"in e&&e.styleUrl||""),minScale:"minScale"in e&&e.minScale!=null?e.minScale:0,maxScale:"maxScale"in e&&e.maxScale!=null?e.maxScale:0,opacity:e.opacity!=null?e.opacity:1,visible:e.visible==null||!!e.visible,sublayers:e.type!=="map-image"&&e.type!=="wms"||e.sublayers==null?void 0:e.sublayers?.map(t=>({id:t.id,visible:t.visible})),activeLayerId:e.type==="wmts"?e.activeLayer?.id:void 0}}function C(e){return e.isReference||e.layerType==="ArcGISSceneServiceLayer"}function O(e){return e?{baseLayers:Z((e.baseMapLayers??[]).filter(t=>!C(t))),referenceLayers:Z((e.baseMapLayers??[]).filter(t=>C(t)))}:null}function Z(e){return e.map(t=>K(t))}function K(e){let t;switch(e.layerType){case"VectorTileLayer":t="vector-tile";break;case"ArcGISTiledMapServiceLayer":t="tile";break;case"ArcGISSceneServiceLayer":t="scene";break;default:t="unknown"}return{type:t,effect:e.effect,url:z(e.templateUrl||e.urlTemplate||e.styleUrl||e.url),minScale:e.minScale??0,maxScale:e.maxScale??0,opacity:e.opacity??1,visible:e.visibility==null||!!e.visibility,sublayers:void 0,activeLayerId:void 0}}function E(e,t,a){return e!=null!=(t!=null)?"not-equal":!e||!t?"equal":N(e.baseLayers,t.baseLayers)?N(e.referenceLayers,t.referenceLayers)?"equal":a.mustMatchReferences?"not-equal":"base-layers-equal":"not-equal"}function N(e,t){if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(!W(e[a],t[a]))return!1;return!0}function W(e,t){if(e.type!==t.type||e.url!==t.url||e.minScale!==t.minScale||e.maxScale!==t.maxScale||e.visible!==t.visible||e.opacity!==t.opacity||!F(e.effect,t.effect))return!1;if(e.activeLayerId!=null||t.activeLayerId!=null)return e.activeLayerId===t.activeLayerId;if(e.sublayers!=null||t.sublayers!=null){if(e.sublayers==null||t.sublayers==null||e.sublayers.length!==t.sublayers.length)return!1;for(let a=0;a<e.sublayers.length;a++){let r=e.sublayers.at(a),n=t.sublayers.at(a);if(r?.id!==n?.id||r?.visible!==n?.visible)return!1}}return!0}function z(e){return e?T(e).replace(/^\s*https?:/i,"").toLowerCase():""}function ce(e){if(!e)return null;let{thumbnailUrl:t}=e;if(t)return t;let a=A(e);return a?c[a].thumbnailUrl:L(e.baseLayers,j)}function j(e){return"portalItem"in e?e.portalItem?.thumbnailUrl:void 0}var he={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5};function ve(e){return $(e)||k(e)||q(e)}function Le(e,t){let{format:a,timeZoneOptions:r,fieldType:n}=t??{},s,o;if(r&&({timeZone:s,timeZoneName:o}=I(r.layerTimeZone,r.datesInUnknownTimezone,r.viewTimeZone,u(a||"short-date-short-time"),n)),typeof e=="string"&&isNaN(Date.parse(n==="time-only"?`1970-01-01T${e}Z`:e)))return e;switch(n){case"date-only":{let i=u(a||"short-date");return typeof e=="string"?w(e,l({},i)):m(e,f(l({},i),{timeZone:y}))}case"time-only":{let i=u(a||"short-time");return typeof e=="string"?D(e,i):m(e,f(l({},i),{timeZone:y}))}case"timestamp-offset":{if(!s&&typeof e=="string"&&new Date(e).toISOString()!==e)return e;let i=a||r?u(a||"short-date-short-time"):void 0,b=i?f(l({},i),{timeZone:s,timeZoneName:o}):void 0;return typeof e=="string"?U(e,b):m(e,b)}default:{let i=a||r?u(a||"short-date-short-time"):void 0;return m(typeof e=="string"?new Date(e):e,i?f(l({},i),{timeZone:s,timeZoneName:o}):void 0)}}}export{re as a,ne as b,ie as c,se as d,oe as e,le as f,ue as g,ce as h,ve as i,Le as j};
