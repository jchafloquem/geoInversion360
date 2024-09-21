import{a as s,b as u}from"./chunk-E565SJS7.js";import{l as p}from"./chunk-SO6OJFOM.js";import{I as g}from"./chunk-ZGLJFDS6.js";import{d as c}from"./chunk-Z5NXR7SL.js";import{q as a}from"./chunk-BRWS572J.js";function l(){return a.getLogger("esri.geometry.Mesh")}function f(e){return e.origin!=null}function V(e){return f(e.vertexSpace)}function M(e,r){if(!f(e))return null;let[i,n,o]=e.origin;return new p({x:i,y:n,z:o,spatialReference:r})}function b(e,r){let{x:i,y:n,z:o,spatialReference:m}=e,t=[i,n,o??0];return r?.geographic!==void 0&&(c(l(),"option: geographic",{replacement:"Use the `vertexSpace` option instead.",version:"4.29",warnOnce:!0}),r.vertexSpace&&l().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")),(r?.vertexSpace??v(r?.geographic)??x(m))==="local"?new u({origin:t}):new s({origin:t})}function x(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function v(e){return e==null?void 0:e?"local":"georeferenced"}function z(e,r){return e.type===r.type&&(e.origin===r.origin||e.origin!=null&&r.origin!=null&&g(e.origin,r.origin))}export{f as a,V as b,M as c,b as d,z as e};
