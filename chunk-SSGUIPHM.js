import{a as l,b as f}from"./chunk-AQ74ANSJ.js";import{a as p}from"./chunk-Z5Q76SB7.js";import{i as m}from"./chunk-E5R4OI7X.js";import{b as u}from"./chunk-TMZNSBQB.js";var y=2.4;function D(r){return f(r*y)}function A(r){return l(r)/y}function d(r,i,a,n){let{color:s,ratio:e}=i,{color:c,ratio:t}=a;t===e&&(t===1?e-=1e-6:t+=1e-6);let o=u((n-e)/(t-e),0,1);m(r,s.toArray(),c.toArray(),o)}function K(r){let a=new Uint8ClampedArray(2048);if(r=r.filter(({ratio:t})=>t>=0&&t<=1).sort((t,o)=>t.ratio-o.ratio).map(({color:t,ratio:o})=>({color:t,ratio:Math.max(o,.001)})),r.length<1)return a;let n=r[0],s=r[0],e=1,c=p();for(let t=0;t<512;t++){let o=(t+.5)/512;for(;o>s.ratio&&e<r.length;)n=s,s=r[e++];d(c,n,s,o),a.set(c,4*t)}return a}function M(r,i,a){let n=Math.sqrt(r**2+i**2)/a;return n>1?0:3/(Math.PI*a**2)*(1-n**2)**2}function B(r){return typeof r=="function"?r:r?i=>+i[r]:()=>1}export{y as a,D as b,A as c,K as d,M as e,B as f};
