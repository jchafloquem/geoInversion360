import{o as D}from"./chunk-4HUAEW4D.js";import{l as d,t as A}from"./chunk-SO6OJFOM.js";import{g as O}from"./chunk-TMZNSBQB.js";import{Y as P}from"./chunk-OFVMJORF.js";import{a as y}from"./chunk-JEGVIFEP.js";function z(e,t,n){return Math.sqrt((e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]!==void 0&&t[2]!==void 0?(e[2]*n-t[2]*n)**2:0))}function N(e,t,n){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]!==void 0&&t[2]!==void 0?(e[2]*n-t[2]*n)**2:0)}var S=[];for(let e of[[9002,56146130,6131,6132,8050,8051,8228],[9003,5702,6358,6359,6360,8052,8053],[9095,5754]]){let t=e[0];for(let n=1;n<e.length;n++)S[e[n]]=t}var L=[];function k(e){return e.vcsWkid&&S[e.vcsWkid]!==void 0?L[S[e.vcsWkid]]:e.latestVcsWkid&&S[e.latestVcsWkid]!==void 0?L[S[e.latestVcsWkid]]:1}function J(e,t,n){let s={x:0,y:0};t&&(s.z=0),n&&(s.m=0);let r=0,i=e[0];for(let o=0;o<e.length;o++){let l=e[o];if(H(l,i)===!1){let c=I(i,l,t),a=j(i,l,t,n);a.x*=c,a.y*=c,s.x+=a.x,s.y+=a.y,t&&(a.z*=c,s.z+=a.z),n&&(a.m*=c,s.m+=a.m),r+=c,i=l}}return r>0?(s.x/=r,s.y/=r,t&&(s.z/=r),n&&(s.m/=r)):(s.x=e[0][0],s.y=e[0][1],t&&(s.z=e[0][2]),n&&t?s.m=e[0][3]:n&&(s.m=e[0][2])),s}function j(e,t,n,s){let r={x:(e[0]+t[0])/2,y:(e[1]+t[1])/2};return n&&(r.z=(e[2]+t[2])/2),n&&s?r.m=(e[3]+t[3])/2:s&&(r.m=(e[2]+t[2])/2),r}function G(e,t){if(e.length<=1)return 0;let n=0;for(let s=1;s<e.length;s++)n+=I(e[s-1],e[s],t);return n}function I(e,t,n){let s=t[0]-e[0],r=t[1]-e[1];if(n){let i=t[2]-t[2];return Math.sqrt(s*s+r*r+i*i)}return Math.sqrt(s*s+r*r)}function U(e,t,n){let s=t[0]-e[0],r=t[1]-e[1];if(n){let i=t[2]-t[2];return s*s+r*r+i*i}return s*s+r*r}function H(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function ce(e){let t={x:0,y:0,spatialReference:e.spatialReference.toJSON()},n={x:0,y:0,spatialReference:e.spatialReference.toJSON()},s=0,r=0;for(let i=0;i<e.paths.length;i++){if(e.paths[i].length===0)continue;let o=G(e.paths[i],e.hasZ===!0);if(o===0){let l=J(e.paths[i],e.hasZ===!0,e.hasM===!0);t.x+=l.x,t.y+=l.y,e.hasZ===!0&&(t.z+=l.z),e.hasM===!0&&(t.m+=l.m),++s}else{let l=J(e.paths[i],e.hasZ===!0,e.hasM===!0);n.x+=l.x*o,n.y+=l.y*o,e.hasZ===!0&&(n.z+=l.z*o),e.hasM===!0&&(n.m+=l.m*o),r+=o}}return r>0?(n.x/=r,n.y/=r,e.hasZ===!0&&(n.z/=r),e.hasM===!0&&(n.m/=r),new d(n)):s>0?(t.x/=s,t.y/=s,e.hasZ===!0&&(n.z/=s),e.hasM===!0&&(t.m/=s),new d(t)):null}function ue(e){if(e.points.length===0)return null;let t=0,n=0,s=0,r=0;for(let o=0;o<e.points.length;o++){let l=e.getPoint(o);l.hasZ===!0&&(s+=l.z),l.hasM===!0&&(r+=l.m),t+=l.x,n+=l.y,r+=l.m}let i={x:t/e.points.length,y:n/e.points.length,spatialReference:null};return i.spatialReference=e.spatialReference.toJSON(),e.hasZ===!0&&(i.z=s/e.points.length),e.hasM===!0&&(i.m=r/e.points.length),new d(i)}function K(e,t){return e.x*t.x+e.y*t.y}function Q(e,t){return e.x*t.y-t.x*e.y}function q(e,t,n=0){for(;e<n;)e+=t;let s=n+t;for(;e>=s;)e-=t;return e}function B(e,t){return Math.atan2(t.y-e.y,t.x-e.x)}function he(e,t){return q(B(e,t),2*Math.PI)*(180/Math.PI)}function fe(e,t){return q(Math.PI/2-B(e,t),2*Math.PI)*(180/Math.PI)}function C(e,t,n){let s={x:e.x-t.x,y:e.y-t.y},r={x:n.x-t.x,y:n.y-t.y};return Math.atan2(Q(s,r),K(s,r))}function pe(e,t,n){return O(q(C(e,t,n),2*Math.PI))}function ge(e,t,n){return O(q(-1*C(e,t,n),2*Math.PI))}L[9002]=.3048,L[9003]=.3048006096012192,L[9095]=.3048007491;var f=[0,0];function me(e){for(let t=0;t<e.length;t++){let n=e[t];for(let r=0;r<n.length-1;r++){let i=n[r],o=n[r+1];for(let l=t+1;l<e.length;l++)for(let c=0;c<e[l].length-1;c++){let a=e[l][c],p=e[l][c+1];if(A(i,o,a,p,f)&&!(f[0]===i[0]&&f[1]===i[1]||f[0]===a[0]&&f[1]===a[1]||f[0]===o[0]&&f[1]===o[1]||f[0]===p[0]&&f[1]===p[1]))return!0}}let s=n.length;if(!(s<3))for(let r=0;r<=s-2;r++){let i=n[r],o=n[r+1];for(let l=r+2;l<=s-2;l++){let c=n[l],a=n[l+1];if(A(i,o,c,a,f)&&!(f[0]===i[0]&&f[1]===i[1]||f[0]===c[0]&&f[1]===c[1]||f[0]===o[0]&&f[1]===o[1]||f[0]===a[0]&&f[1]===a[1]))return!0}}}return!1}function Y(e,t,n){return Math.max(t,Math.min(n,e))}function $(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function ee(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]}function F(e,t,n){let s=[n[0]-t[0],n[1]-t[1],n[2]-t[2]],r=Y($(s,[e[0]-t[0],e[1]-t[1],e[2]-t[2]])/ee(s),0,1);return[t[0]+(n[0]-t[0])*r,t[1]+(n[1]-t[1])*r,t[2]+(n[2]-t[2])*r]}function T(e,t,n){let s=0,r=n[0]-t[0],i=n[1]-t[1],o=r*r+i*i;return o===0?s=.5:(s=((e[0]-t[0])*r+(e[1]-t[1])*i)/o,s<0?s=0:s>1&&(s=1)),s<=.5?[t[0]+(n[0]-t[0])*s,t[1]+(n[1]-t[1])*s]:[n[0]-(n[0]-t[0])*(1-s),n[1]-(n[1]-t[1])*(1-s)]}function E(e,t,n){let s=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(s*s+r*r)}function te(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}function ne(e){let t=te(e);return[e[0]/t,e[1]/t,e[2]/t]}function X(e,t,n,s){let r=ne([t[0]-e[0],t[1]-e[1],t[2]*s-e[2]*s]);return[e[0]+r[0]*n,e[1]+r[1]*n,e[2]+r[2]*n]}function b(e,t,n,s){return e+(t-e)/n*s}function _(e,t,n){let s=t[0]-e[0],r=t[1]-e[1],i=Math.sqrt(s*s+r*r);return s/=i,r/=i,s*=n,r*=n,[e[0]+s,e[1]+r]}function Re(e,t){if(!e)return null;switch(e.type){case"extent":case"multipoint":case"mesh":case"point":return null}let n=e.type==="polygon"?e.rings:e.paths,s=1;if((e.spatialReference.vcsWkid||e.spatialReference.latestVcsWkid)&&(s=k(e.spatialReference)/P(e.spatialReference)),n.length===0||n[0].length===0||e.hasM===!1)return null;let r=-1,i=0,o=e.hasZ?z:E,l=e.hasZ?3:2,c=2;for(let a of n){if(r++,a.length>0&&a[0][l]===t)return{partId:r,distanceAlong:i,coordinate:new d(y(y({hasZ:e.hasZ,hasM:e.hasM,spatialReference:e.spatialReference,x:a[0][0],y:a[0][1]},e.hasZ?{z:a[0][c]}:{}),e.hasM?{m:a[0][l]}:{})),segmentId:0};let p=-1;for(let u=1;u<a.length;u++){let W=o(a[u-1],a[u],s);p++;let h=a[u][l]-a[u-1][l],g=a[u][l];if(g===t)return{partId:r,distanceAlong:W+i,coordinate:new d(y(y({hasZ:e.hasZ,hasM:e.hasM,spatialReference:e.spatialReference,x:a[u][0],y:a[u][1]},e.hasZ?{z:a[u][c]}:{}),e.hasM?{m:a[u][l]}:{})),segmentId:p};if(g>t&&t>a[u-1][l]){let M=(t-a[u-1][l])/h*W,w=e.hasZ?X(a[u-1],a[u],M,s):_(a[u-1],a[u],M);w=[...w,t];let Z=new d(y(y({hasZ:e.hasZ,hasM:e.hasM,spatialReference:e.spatialReference,x:w[0],y:w[1]},e.hasZ?{z:w[c]}:{}),e.hasM?{m:w[l]}:{}));return{partId:r,distanceAlong:i+o(a[u-1],[Z.x,Z.y,...Z.hasZ?[Z.z]:[],...Z.hasM?[Z.m]:[]],s),coordinate:Z,segmentId:p}}i+=W}}return null}function ze(e,t){if(!e)return null;switch(e.type){case"extent":case"multipoint":case"mesh":case"point":return null}let n=e.type==="polygon"?e.rings:e.paths;if(t<0)return null;let s=1;(e.spatialReference.vcsWkid||e.spatialReference.latestVcsWkid)&&(s=k(e.spatialReference)/P(e.spatialReference));let r=0,i=e.hasZ?3:2,o=2,l=e.hasZ?z:E,c=-1;if(t===0)return n.length===0||n[0].length===0?null:{partId:0,coordinate:new d(y(y({hasZ:e.hasZ,hasM:e.hasM,spatialReference:e.spatialReference,x:n[0][0][0],y:n[0][0][1]},e.hasZ?{z:n[0][0][o]}:{}),e.hasM?{m:n[0][0][i]}:{})),segmentId:0};for(let a of n){c++;let p=-1;for(let u=1;u<a.length;u++){p++;let W=l(a[u-1],a[u],s),h=r+W;if(h===t)return{partId:c,coordinate:new d(y(y({hasZ:e.hasZ,hasM:e.hasM,spatialReference:e.spatialReference,x:a[u][0],y:a[u][1]},e.hasZ?{z:a[u][o]}:{}),e.hasM?{m:a[u][i]}:{})),segmentId:p};if(h>t){let g=e.hasZ?X(a[u-1],a[u],t-r,s):_(a[u-1],a[u],t-r);return g=[...g,b(a[u-1][i],a[u][i],W,t-r)],{partId:c,coordinate:new d(y(y({hasZ:e.hasZ,hasM:e.hasM,spatialReference:e.spatialReference,x:g[0],y:g[1]},e.hasZ?{z:g[o]}:{}),e.hasM?{m:g[i]}:{})),segmentId:p}}r=h}}return null}function se(e,t){if(!e||!t)return null;let n=1;(t.spatialReference.vcsWkid||t.spatialReference.latestVcsWkid)&&(n=k(t.spatialReference)/P(t.spatialReference));let s=null,r=0;return s=e,r=e.hasZ&&t.hasZ?z([t.x,t.y,t.z],[e.x,e.y,e.z],n):I([t.x,t.y],[e.x,e.y],!1),{coordinate:s,distance:r}}function re(e,t){if(!e||!t)return null;let n=1;(t.spatialReference.vcsWkid||t.spatialReference.latestVcsWkid)&&(n=k(t.spatialReference)/P(t.spatialReference));let s=null,r=0,i=Number.MAX_VALUE,o=-1,l=-1;for(let c of e.points||[]){l++;let a=e.hasZ&&t.hasZ?N([c[0],c[1],c[2]],[t.x,t.y,t.z],n):U([c[0],c[1]],[t.x,t.y],!1);a<i&&(i=a,o=l)}return o<0?null:(r=i,s=e.getPoint(o),{coordinate:s,distance:Math.sqrt(r)})}function ae(e,t){if(!e||!t)return null;let n=e.type==="polygon"?e.rings:e.paths,s=1;(t.spatialReference.vcsWkid||t.spatialReference.latestVcsWkid)&&(s=k(t.spatialReference)/P(t.spatialReference));let r=Number.MAX_VALUE,i=-1,o=-1,l=-1,c=e.hasZ&&t.hasZ,a=null,p=c?[t.x,t.y,t.z]:[t.x,t.y];for(let R of n){o++;for(let m=1;m<R.length;m++){let v=c?F(p,R[m-1],R[m]):T(p,R[m-1],R[m]),x=c?N(v,p,s):U(v,p,!1);x<r&&(r=x,a=v,l=o,i=m-1)}}if(i<0)return null;let u=e.hasM&&e.hasZ?3:2,W=2,h=n[l][i],g=n[l][i+1],M=null,w=null,Z=c?a[2]:null;e.hasM&&(w=b(h[u],g[u],c?z(h,g,s):I(h,g,!1),c?z(h,a,s):I(h,a,!1))),e.hasZ&&t.hasZ===!1&&(Z=b(h[W],g[W],c?z(h,g,s):I(h,g,!1),c?z(h,a,s):I(h,a,!1))),M=new d(y(y({hasZ:c,hasM:e.hasM,spatialReference:t.spatialReference,x:a[0],y:a[1]},e.hasZ?{z:Z}:{}),e.hasM?{m:w}:{}));let V=0;for(let R=0;R<=l;R++){let m=n[R],v=R===l?i:m.length-1;for(let x=1;x<=v;x++)V+=e.hasZ?z(m[x-1],m[x],s):I([m[x-1][0],m[x-1][1]],[m[x][0],m[x][1]],!1)}return V+=e.hasZ?z(h,[M.x,M.y,M.z],s):I(h,[M.x,M.y],!1),{partId:l,segmentId:i,coordinate:M,distance:Math.sqrt(r),distanceAlong:V}}function Ie(e,t){if(!e||!t)return null;if(e.type==="extent"){let n=e;e=new D({spatialReference:e.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}switch(e.type){case"point":return se(e,t)??null;case"multipoint":return re(e,t)??null;case"polygon":case"polyline":return ae(e,t)??null;default:return null}}export{z as a,k as b,ce as c,ue as d,he as e,fe as f,pe as g,ge as h,me as i,Re as j,ze as k,Ie as l};
