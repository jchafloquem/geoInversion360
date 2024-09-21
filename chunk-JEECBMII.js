import{a as T,b as c,c as D}from"./chunk-27SQOLVY.js";import{a as A,b as R,c as j,d as S,e as B}from"./chunk-IWJQ3PU6.js";import{i as X}from"./chunk-4HUAEW4D.js";import{i as k}from"./chunk-XWRPBDYS.js";import{a as z}from"./chunk-TCCAOREC.js";import{s as L,y as b}from"./chunk-OFVMJORF.js";import{S as w}from"./chunk-Z5NXR7SL.js";function si(n){return N(n,!0)}function ni(n){return N(n,!1)}function N(n,i){if(n==null)return null;let t=n.spatialReference,s=L(t),e=w(n)?n.toJSON():n;if(!s)return e;let h=b(t)?102100:4326,o=T[h].maxX,l=T[h].minX;if(j(e))return E(e,o,l);if(R(e))return e.points=e.points.map(r=>E(r,o,l)),e;if(A(e))return W(e,s);if(B(e)||S(e)){let r=X(q,e),u={xmin:r[0],ymin:r[1],xmax:r[2],ymax:r[3]},m=c(u.xmin,l)*(2*o),a=m===0?e:D(e,m);return u.xmin+=m,u.xmax+=m,u.xmax>o?G(a,o,i):u.xmin<l?G(a,l,i):a}return e}function W(n,i){if(!i)return n;let t=Y(n,i).map(s=>s.extent);return t.length<2?t[0]||n:t.length>2?(n.xmin=i.valid[0],n.xmax=i.valid[1],n):{rings:t.map(s=>[[s.xmin,s.ymin],[s.xmin,s.ymax],[s.xmax,s.ymax],[s.xmax,s.ymin],[s.xmin,s.ymin]])}}function E(n,i,t){if(Array.isArray(n)){let s=n[0];if(s>i){let e=c(s,i);n[0]=s+e*(-2*i)}else if(s<t){let e=c(s,t);n[0]=s+e*(-2*t)}}else{let s=n.x;if(s>i){let e=c(s,i);n.x+=e*(-2*i)}else if(s<t){let e=c(s,t);n.x+=e*(-2*t)}}return n}function Y(n,i){let t=[],{ymin:s,ymax:e,xmin:h,xmax:o}=n,l=n.xmax-n.xmin,[r,u]=i.valid,{x:m,frameId:a}=F(n.xmin,i),{x:_,frameId:p}=F(n.xmax,i),V=m===_&&l>0;if(l>2*u){let v={xmin:h<o?m:_,ymin:s,xmax:u,ymax:e},C={xmin:r,ymin:s,xmax:h<o?_:m,ymax:e},O={xmin:0,ymin:s,xmax:u,ymax:e},P={xmin:r,ymin:s,xmax:0,ymax:e},f=[],y=[];g(v,O)&&f.push(a),g(v,P)&&y.push(a),g(C,O)&&f.push(p),g(C,P)&&y.push(p);for(let d=a+1;d<p;d++)f.push(d),y.push(d);t.push(new x(v,[a]),new x(C,[p]),new x(O,f),new x(P,y))}else m>_||V?t.push(new x({xmin:m,ymin:s,xmax:u,ymax:e},[a]),new x({xmin:r,ymin:s,xmax:_,ymax:e},[p])):t.push(new x({xmin:m,ymin:s,xmax:_,ymax:e},[a]));return t}function F(n,i){let[t,s]=i.valid,e=2*s,h,o=0;return n>s?(h=Math.ceil(Math.abs(n-s)/e),n-=h*e,o=h):n<t&&(h=Math.ceil(Math.abs(n-t)/e),n+=h*e,o=-h),{x:n,frameId:o}}function g(n,i){let{xmin:t,ymin:s,xmax:e,ymax:h}=i;return I(n,t,s)&&I(n,t,h)&&I(n,e,h)&&I(n,e,s)}function I(n,i,t){return i>=n.xmin&&i<=n.xmax&&t>=n.ymin&&t<=n.ymax}function G(n,i,t=!0){let s=!S(n);if(s&&k(n),t)return new M().cut(n,i);let e=s?n.rings:n.paths,h=s?4:2,o=e.length,l=-2*i;for(let r=0;r<o;r++){let u=e[r];if(u&&u.length>=h){let m=[];for(let a of u)m.push([a[0]+l,a[1]]);e.push(m)}}return s?n.rings=e:n.paths=e,n}var x=class{constructor(i,t){this.extent=i,this.frameIds=t}},q=z(),M=class{constructor(){this._linesIn=[],this._linesOut=[]}cut(i,t){let s;if(this._xCut=t,i.rings)this._closed=!0,s=i.rings,this._minPts=4;else{if(!i.paths)return null;this._closed=!1,s=i.paths,this._minPts=2}for(let h of s){if(!h||h.length<this._minPts)continue;let o=!0;for(let l of h)o?(this.moveTo(l),o=!1):this.lineTo(l);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),s=[];for(let h of this._linesIn)h&&h.length>=this._minPts&&s.push(h);let e=-2*this._xCut;for(let h of this._linesOut)if(h&&h.length>=this._minPts){for(let o of h)o[0]+=e;s.push(h)}return this._closed?i.rings=s:i.paths=s,i}moveTo(i){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(i[0]),this._moveTo(i[0],i[1],this._prevSide),this._prevPt=i,this._firstPt=i}lineTo(i){let t=this._side(i[0]);if(t*this._prevSide==-1){let s=this._intersect(this._prevPt,i);this._lineTo(this._xCut,s,0),this._prevSide=0,this._lineTo(i[0],i[1],t)}else this._lineTo(i[0],i[1],t);this._prevSide=t,this._prevPt=i}close(){let i=this._firstPt,t=this._prevPt;i[0]===t[0]&&i[1]===t[1]||this.lineTo(i),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(i,t,s){this._closed?(this._lineIn.push([s<=0?i:this._xCut,t]),this._lineOut.push([s>=0?i:this._xCut,t])):(s<=0&&this._lineIn.push([i,t]),s>=0&&this._lineOut.push([i,t]))}_lineTo(i,t,s){this._closed?(J(this._lineIn,s<=0?i:this._xCut,t),J(this._lineOut,s>=0?i:this._xCut,t)):s<0?(this._prevSide===0&&this._pushLineOut(),this._lineIn.push([i,t])):s>0?(this._prevSide===0&&this._pushLineIn(),this._lineOut.push([i,t])):this._prevSide<0?(this._lineIn.push([i,t]),this._lineOut.push([i,t])):this._prevSide>0&&(this._lineOut.push([i,t]),this._lineIn.push([i,t]))}_checkClosingPt(i){let t=i.length;t>3&&i[0][0]===this._xCut&&i[t-2][0]===this._xCut&&i[1][0]===this._xCut&&(i[0][1]=i[t-2][1],i.pop())}_side(i){return i<this._xCut?-1:i>this._xCut?1:0}_intersect(i,t){let s=(this._xCut-i[0])/(t[0]-i[0]);return i[1]+s*(t[1]-i[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}};function J(n,i,t){let s=n.length;s>1&&n[s-1][0]===i&&n[s-2][0]===i?n[s-1][1]=t:n.push([i,t])}export{si as a,ni as b};
