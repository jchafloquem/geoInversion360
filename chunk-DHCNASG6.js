import{i as G}from"./chunk-CD7FGRAU.js";import{a as N,j as P}from"./chunk-3CM6CIFQ.js";import{e as S,f as q}from"./chunk-SSGUIPHM.js";import{a as b}from"./chunk-PSQRUING.js";import{b as R}from"./chunk-DFTBSFIN.js";import{E as L,c as Y}from"./chunk-VOH7XGOR.js";import{a as D}from"./chunk-AQ74ANSJ.js";import{l as C}from"./chunk-SO6OJFOM.js";import{b as A}from"./chunk-DG5QI6E2.js";import{E as U,s as O}from"./chunk-OFVMJORF.js";import{a as M,b as V,g as z}from"./chunk-JEGVIFEP.js";var m=null,B=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function _(n,e,s){return n.x<0?n.x+=e:n.x>s&&(n.x-=e),n}function ae(n,e,s,r){let i=U(s)?O(s):null,u=i?Math.round((i.valid[1]-i.valid[0])/e.scale[0]):null;return n.map(o=>{let l=new C(o.geometry);return R(e,l,l),o.geometry=i?_(l,u??0,r[0]):l,o})}function ue(n,e=18,s,r,i){let u=new Float64Array(r*i);e=Math.round(D(e));let o=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,w=q(s);for(let{geometry:p,attributes:v}of n){let{x:$,y:f}=p,g=Math.max(0,$-e),E=Math.max(0,f-e),T=Math.min(i,f+e),F=Math.min(r,$+e),h=+w(v);for(let c=E;c<T;c++)for(let d=g;d<F;d++){let I=c*r+d,x=S(d-$,c-f,e)*h,a=u[I]+=x;o=Math.min(o,a),l=Math.max(l,a)}}return{min:o,max:l}}function k(n){let e=B.exec(n);if(!e)return null;let{hh:s,mm:r,ss:i,ms:u}=e.groups;return Number(s)*b.hours+Number(r)*b.minutes+Number(i)*b.seconds+Number(u||0)}function fe(n,e,s=!0){return z(this,null,function*(){if(!e)return[];let{field:r,field2:i,field3:u,fieldDelimiter:o,fieldInfos:l,timeZone:w}=n,p=r&&l?.find(a=>a.name.toLowerCase()===r.toLowerCase()),v=!!p&&L(p),$=!!p&&G(p),f=n.valueExpression,g=n.normalizationType,E=n.normalizationField,T=n.normalizationTotal,F=[],h=n.viewInfoParams,c=null,d=null;if(f){if(!m){let{arcadeUtils:a}=yield Y();m=a}m.hasGeometryOperations(f)&&(yield m.enableGeometryOperations()),c=m.createFunction(f),d=h?m.getViewInfo({viewingMode:h.viewingMode,scale:h.scale,spatialReference:new A(h.spatialReference)}):null}let I=n.fieldInfos,x=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&I?{fields:I}:null;return e.forEach(a=>{let y=a.attributes,t;if(f){let j=x?V(M({},a),{layer:x}):a,W=m.createExecContext(j,d,w);t=m.executeFunction(c,W)}else y&&(t=y[r],i?(t=`${N(t)}${o}${N(y[i])}`,u&&(t=`${t}${o}${N(y[u])}`)):typeof t=="string"&&s&&($?t=t?new Date(t).getTime():null:v&&(t=t?k(t):null)));if(g&&typeof t=="number"&&isFinite(t)){let j=y&&parseFloat(y[E]);t=P(t,g,j,T)}F.push(t)}),F})}export{ae as a,ue as b,k as c,fe as d};
