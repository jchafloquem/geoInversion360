import{a as P}from"./chunk-IM7ZT3FY.js";import{a as R}from"./chunk-DDZ3KR2Q.js";import{d as j}from"./chunk-4R5DT3TR.js";import{a as F}from"./chunk-RQQJT345.js";import{g as O}from"./chunk-IWJQ3PU6.js";import{t as f}from"./chunk-OFVMJORF.js";import{aa as g,h as S,t as E}from"./chunk-BRGZVJPZ.js";import{a as o,b as d,g as y}from"./chunk-JEGVIFEP.js";var b="Layer does not support extent calculation.";function J(r,t){if(t&&r.type==="extent")return`${r.xmin},${r.ymin},${r.xmax},${r.ymax}`;if(t&&r.type==="point")return`${r.x},${r.y}`;let a=r.toJSON();return delete a.spatialReference,JSON.stringify(a)}function w(r,t){let a=r.geometry,e=r.toJSON();delete e.compactGeometryEnabled,delete e.defaultSpatialReferenceEnabled;let n=e,i,u,p;if(a!=null&&(u=a.spatialReference,p=f(u),n.geometryType=O(a),n.geometry=J(a,r.compactGeometryEnabled),n.inSR=p),e.groupByFieldsForStatistics&&(n.groupByFieldsForStatistics=e.groupByFieldsForStatistics.join(",")),e.objectIds&&(n.objectIds=e.objectIds.join(",")),e.orderByFields&&(n.orderByFields=e.orderByFields.join(",")),!e.outFields||!e.returnDistinctValues&&(t?.returnCountOnly||t?.returnExtentOnly||t?.returnIdsOnly)?delete n.outFields:e.outFields.includes("*")?n.outFields="*":n.outFields=e.outFields.join(","),e.outSR?(n.outSR=f(e.outSR),i=r.outSpatialReference):a&&(e.returnGeometry||e.returnCentroid)&&(n.outSR=n.inSR,i=u),e.returnGeometry&&delete e.returnGeometry,e.outStatistics&&(n.outStatistics=JSON.stringify(e.outStatistics)),e.fullText&&(n.fullText=JSON.stringify(e.fullText)),e.pixelSize&&(n.pixelSize=JSON.stringify(e.pixelSize)),e.quantizationParameters&&(r.defaultSpatialReferenceEnabled&&u!=null&&r.quantizationParameters?.extent!=null&&u.equals(r.quantizationParameters.extent.spatialReference)&&delete e.quantizationParameters.extent.spatialReference,n.quantizationParameters=JSON.stringify(e.quantizationParameters)),e.parameterValues&&(n.parameterValues=JSON.stringify(e.parameterValues)),e.rangeValues&&(n.rangeValues=JSON.stringify(e.rangeValues)),e.dynamicDataSource&&(n.layer=JSON.stringify({source:e.dynamicDataSource}),delete e.dynamicDataSource),e.timeExtent){let m=e.timeExtent,{start:s,end:l}=m;s==null&&l==null||(n.time=s===l?s:`${s??"null"},${l??"null"}`),delete e.timeExtent}return r.defaultSpatialReferenceEnabled&&u!=null&&i!=null&&u.equals(i)&&(n.defaultSR=n.inSR,delete n.inSR,delete n.outSR),n}function h(r,t,a,e){return y(this,null,function*(){let n=t.timeExtent!=null&&t.timeExtent.isEmpty?{data:{features:[]}}:yield c(r,t,"json",e);return P(t,a,n.data),n})}function D(r,t,a,e){return y(this,null,function*(){if(t.timeExtent!=null&&t.timeExtent.isEmpty)return{data:a.createFeatureResult()};let n=yield z(r,t,e),i=n;return i.data=j(n.data,a),i})}function z(r,t,a){return c(r,t,"pbf",a)}function v(r,t,a){return t.timeExtent!=null&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):c(r,t,"json",a,{returnIdsOnly:!0})}function L(r,t,a){return t.timeExtent!=null&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):c(r,t,"json",a,{returnIdsOnly:!0,returnCountOnly:!0})}function M(r,t,a){return y(this,null,function*(){if(t.timeExtent!=null&&t.timeExtent.isEmpty)return{data:{count:0,extent:null}};let e=yield c(r,t,"json",a,{returnExtentOnly:!0,returnCountOnly:!0}),n=e.data;if(n.hasOwnProperty("extent"))return e;if(n.features)throw new Error(b);if(n.hasOwnProperty("count"))throw new Error(b);return e})}function c(i,u,p){return y(this,arguments,function*(r,t,a,e={},n={}){let m=typeof r=="string"?S(r):r,s=t.geometry?[t.geometry]:[],l=yield F(s,null,{signal:e.signal}),x=l?.[0];x!=null&&((t=t.clone()).geometry=x);let q=R(o(o(d(o({},m.query),{f:a}),n),w(t,n)));return g(E(m.path,B(t,n)?"query3d":"query"),d(o({},e),{responseType:a==="pbf"?"array-buffer":"json",query:o(o({},q),e.query)}))})}function B(r,t){return r.formatOf3DObjects!=null&&!(t.returnCountOnly||t.returnExtentOnly||t.returnIdsOnly)}export{h as a,D as b,z as c,v as d,L as e,M as f};
