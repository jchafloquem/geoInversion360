import{b as N}from"./chunk-VFGTXZIM.js";import{a as L}from"./chunk-NWPYI2UP.js";import{a as T}from"./chunk-TNPL7MIN.js";import{f as F,z as I}from"./chunk-VOH7XGOR.js";import{v as O}from"./chunk-OFVMJORF.js";import{s as w}from"./chunk-BRWS572J.js";import{j as h}from"./chunk-JEGVIFEP.js";var C={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function b(e){return C[e]}function*D(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(let t of e.features)t&&(yield t)}}function*R(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*h(e.coordinates);break;case"MultiLineString":case"Polygon":for(let t of e.coordinates)yield*h(t);break;case"MultiPolygon":for(let t of e.coordinates)for(let o of t)yield*h(o)}}function*$(e,t={}){let{geometryType:o,objectIdField:n}=t;for(let r of e){let{geometry:s,properties:y,id:i}=r;if(s&&b(s.type)!==o)continue;let l=y||{},c;n&&(c=l[n],i==null||c||(l[n]=c=i)),yield new L(s?W(new T,s,t):null,l,null,c??void 0)}}function A(e){for(let t of e)if(t.length>2)return!0;return!1}function Z(e){return!E(e)}function H(e){return E(e)}function E(e){let t=0;for(let o=0;o<e.length;o++){let n=e[o],r=e[(o+1)%e.length];t+=n[0]*r[1]-r[0]*n[1]}return t<=0}function J(e){let t=e[0],o=e[e.length-1];return t[0]===o[0]&&t[1]===o[1]&&t[2]===o[2]||e.push(t),e}function W(e,t,o){switch(t.type){case"LineString":return q(e,t,o);case"MultiLineString":return B(e,t,o);case"MultiPoint":return K(e,t,o);case"MultiPolygon":return Q(e,t,o);case"Point":return U(e,t,o);case"Polygon":return V(e,t,o)}}function q(e,t,o){return g(e,t.coordinates,o),e}function B(e,t,o){for(let n of t.coordinates)g(e,n,o);return e}function K(e,t,o){return g(e,t.coordinates,o),e}function Q(e,t,o){for(let n of t.coordinates){v(e,n[0],o);for(let r=1;r<n.length;r++)x(e,n[r],o)}return e}function U(e,t,o){return G(e,t.coordinates,o),e}function V(e,t,o){let n=t.coordinates;v(e,n[0],o);for(let r=1;r<n.length;r++)x(e,n[r],o);return e}function v(e,t,o){let n=J(t);Z(n)?z(e,n,o):g(e,n,o)}function x(e,t,o){let n=J(t);H(n)?z(e,n,o):g(e,n,o)}function g(e,t,o){for(let n of t)G(e,n,o);e.lengths.push(t.length)}function z(e,t,o){for(let n=t.length-1;n>=0;n--)G(e,t[n],o);e.lengths.push(t.length)}function G(e,t,o){let[n,r,s]=t;e.coords.push(n,r),o.hasZ&&e.coords.push(s||0)}function X(e){switch(typeof e){case"string":return N(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function re(e,t=4326){if(!e)throw new w("geojson-layer:empty","GeoJSON data is empty");if(e.type!=="Feature"&&e.type!=="FeatureCollection")throw new w("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});let{crs:o}=e;if(!o)return;let n=typeof o=="string"?o:o.type==="name"?o.properties.name:o.type==="EPSG"?o.properties.code:null,r=O({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${t})$`,"i");if(!n||!r.test(n))throw new w("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:o})}function ie(e,t={}){let o=[],n=new Set,r=new Set,s,y=!1,i=null,l=!1,{geometryType:c=null}=t,P=!1;for(let d of D(e)){let{geometry:m,properties:u,id:a}=d;if((!m||(c||(c=b(m.type)),b(m.type)===c))&&(y||(y=A(R(m))),l||(l=a!=null,l&&(s=typeof a,u&&(i=Object.keys(u).filter(p=>u[p]===a)))),u&&i&&l&&a!=null&&(i.length>1?i=i.filter(p=>u[p]===a):i.length===1&&(i=u[i[0]]===a?i:[])),!P&&u)){let p=!0;for(let f in u){if(n.has(f))continue;let j=u[f];if(j==null){p=!1,r.add(f);continue}let k=X(j);if(k==="unknown"){r.add(f);continue}r.delete(f),n.add(f);let M=F(f);M&&o.push({name:M,alias:f,type:k})}P=p}}let S=F(i?.length===1&&i[0]||null)??void 0;if(S){for(let d of o)if(d.name===S&&I(d)){d.type="esriFieldTypeOID";break}}return{fields:o,geometryType:c,hasZ:y,objectIdFieldName:S,objectIdFieldType:s,unknownFields:Array.from(r)}}function se(e,t){return Array.from($(D(e),t))}export{b as a,re as b,ie as c,se as d};
