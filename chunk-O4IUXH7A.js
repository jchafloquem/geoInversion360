import{c as a,d as i,e as l}from"./chunk-6KRFVLII.js";import{a as n}from"./chunk-HHJJPMV6.js";import{b as u}from"./chunk-BRWS572J.js";import{a as o}from"./chunk-AKNRR36C.js";import{a as r}from"./chunk-JEGVIFEP.js";function b(t){return{renderer:{type:"simple",symbol:t==="esriGeometryPoint"||t==="esriGeometryMultipoint"?a:t==="esriGeometryPolyline"?i:l}}}var d=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,m=1;function $(t,s){if(o("esri-csp-restrictions"))return()=>r({[s]:null},t);try{let e=`this${c(s)} = null;`;for(let p in t)e+=`this${c(p)} = ${JSON.stringify(t[p])};`;let y=new Function(`
      return class AttributesClass$${m++} {
        constructor() {
          ${e};
        }
      }
    `)();return()=>new y}catch{return()=>r({[s]:null},t)}}function c(t){return d.test(t)?`.${t}`:`["${t}"]`}function C(t={}){return[{name:"New Feature",description:"",prototype:{attributes:u(t)}}]}function g(t,s){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:n,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}export{b as a,$ as b,C as c,g as d};
