import{a as be,b as Ee,c as Ce,d as Fe,e as $e,f as Oe,g as je,h as Se}from"./chunk-7WFRJSY3.js";import{a as ye,c as Ae,d as we,e as xe}from"./chunk-SAOUSUZE.js";import{s as E}from"./chunk-BRWS572J.js";var qe,ze,ke={exports:{}};ze=function(){function n(o,g){function v(){this.constructor=o}v.prototype=g.prototype,o.prototype=new v}function c(o,g,v,r){var A=Error.call(this,o);return Object.setPrototypeOf&&Object.setPrototypeOf(A,c.prototype),A.expected=g,A.found=v,A.location=r,A.name="SyntaxError",A}function l(o,g,v){return v=v||" ",o.length>g?o:(g-=o.length,o+(v+=v.repeat(g)).slice(0,g))}function C(o,g){var v,r={},A=(g=g!==void 0?g:{}).grammarSource,O={start:ve},I=ve,M="none",N=")",p=",",d="(",j="%",w="px",W="cm",X="mm",Y="in",Z="pt",ee="pc",re="deg",te="rad",ne="grad",ue="turn",Me="#",Ne=".",Pe="e",ae=/^[ \t\n\r]/,oe=/^[a-z\-]/,ce=/^[0-9a-fA-F]/,ie=/^[+\-]/,R=/^[0-9]/,Be=z("none"),Te=x("none",!1),De=x(")",!1),fe=x(",",!1),He=z("whitespace"),se=B([" ","	",`
`,"\r"],!1,!1),Ue=z("function"),Ge=x("(",!1),_e=z("identifier"),le=B([["a","z"],"-"],!1,!1),Je=z("percentage"),Ke=x("%",!1),Le=z("length"),Qe=x("px",!1),Ve=x("cm",!1),We=x("mm",!1),Xe=x("in",!1),Ye=x("pt",!1),Ze=x("pc",!1),er=z("angle"),rr=x("deg",!1),tr=x("rad",!1),nr=x("grad",!1),ur=x("turn",!1),ar=z("number"),or=z("color"),cr=x("#",!1),pe=B([["0","9"],["a","f"],["A","F"]],!1,!1),he=B(["+","-"],!1,!1),k=B([["0","9"]],!1,!1),ir=x(".",!1),fr=x("e",!1),sr=function(){return[]},lr=function(e,u){return{type:"function",name:e,parameters:u||[]}},pr=function(e,u){return u.length>0?Jr(e,u,3):[e]},hr=function(e){return{type:"quantity",value:e.value,unit:e.unit}},mr=function(e){return{type:"color",colorType:e.type,value:e.value}},gr=function(e){return e},vr=function(){return H()},dr=function(e){return{value:e,unit:"%"}},yr=function(e){return{value:e,unit:"px"}},Ar=function(e){return{value:e,unit:"cm"}},wr=function(e){return{value:e,unit:"mm"}},xr=function(e){return{value:e,unit:"in"}},br=function(e){return{value:e,unit:"pt"}},Er=function(e){return{value:e,unit:"pc"}},Cr=function(e){return{value:e,unit:"deg"}},Fr=function(e){return{value:e,unit:"rad"}},$r=function(e){return{value:e,unit:"grad"}},Or=function(e){return{value:e,unit:"turn"}},jr=function(e){return{value:e,unit:null}},Sr=function(){return{type:"hex",value:H()}},qr=function(e){return{type:"function",value:e}},zr=function(){return{type:"named",value:H()}},Rr=function(){return parseFloat(H())},t=0,h=0,D=[{line:1,column:1}],q=0,_=[],i=0;if("startRule"in g){if(!(g.startRule in O))throw new Error(`Can't start parsing from rule "`+g.startRule+'".');I=O[g.startRule]}function H(){return o.substring(h,t)}function x(e,u){return{type:"literal",text:e,ignoreCase:u}}function B(e,u,a){return{type:"class",parts:e,inverted:u,ignoreCase:a}}function kr(){return{type:"end"}}function z(e){return{type:"other",description:e}}function me(e){var u,a=D[e];if(a)return a;for(u=e-1;!D[u];)u--;for(a={line:(a=D[u]).line,column:a.column};u<e;)o.charCodeAt(u)===10?(a.line++,a.column=1):a.column++,u++;return D[e]=a,a}function ge(e,u,a){var s=me(e),y=me(u);return{source:A,start:{offset:e,line:s.line,column:s.column},end:{offset:u,line:y.line,column:y.column}}}function f(e){t<q||(t>q&&(q=t,_=[]),_.push(e))}function Ir(e,u,a){return new c(c.buildMessage(e,u),e,u,a)}function ve(){var e;return(e=Mr())===r&&(e=Nr()),e}function Mr(){var e,u;return i++,e=t,b(),o.substr(t,4)===M?(u=M,t+=4):(u=r,i===0&&f(Te)),u!==r?(b(),h=e,e=sr()):(t=e,e=r),i--,e===r&&i===0&&f(Be),e}function Nr(){var e,u;if(e=[],(u=J())!==r)for(;u!==r;)e.push(u),u=J();else e=r;return e}function J(){var e,u,a,s;return e=t,b(),(u=Br())!==r?(b(),(a=Pr())===r&&(a=null),b(),o.charCodeAt(t)===41?(s=N,t++):(s=r,i===0&&f(De)),s!==r?(b(),h=e,e=lr(u,a)):(t=e,e=r)):(t=e,e=r),e}function Pr(){var e,u,a,s,y,m,$,U;if(e=t,(u=K())!==r){for(a=[],s=t,y=b(),o.charCodeAt(t)===44?(m=p,t++):(m=r,i===0&&f(fe)),m===r&&(m=null),$=b(),(U=K())!==r?s=y=[y,m,$,U]:(t=s,s=r);s!==r;)a.push(s),s=t,y=b(),o.charCodeAt(t)===44?(m=p,t++):(m=r,i===0&&f(fe)),m===r&&(m=null),$=b(),(U=K())!==r?s=y=[y,m,$,U]:(t=s,s=r);h=e,e=pr(u,a)}else t=e,e=r;return e}function K(){var e,u;return e=t,(u=Tr())===r&&(u=Dr())===r&&(u=Hr())===r&&(u=Ur()),u!==r&&(h=e,u=hr(u)),(e=u)===r&&(e=t,(u=Gr())!==r&&(h=e,u=mr(u)),e=u),e}function b(){var e,u;for(i++,e=[],ae.test(o.charAt(t))?(u=o.charAt(t),t++):(u=r,i===0&&f(se));u!==r;)e.push(u),ae.test(o.charAt(t))?(u=o.charAt(t),t++):(u=r,i===0&&f(se));return i--,u=r,i===0&&f(He),e}function Br(){var e,u,a;return i++,e=t,(u=de())!==r?(o.charCodeAt(t)===40?(a=d,t++):(a=r,i===0&&f(Ge)),a!==r?(h=e,e=gr(u)):(t=e,e=r)):(t=e,e=r),i--,e===r&&(u=r,i===0&&f(Ue)),e}function de(){var e,u,a;if(i++,e=t,u=[],oe.test(o.charAt(t))?(a=o.charAt(t),t++):(a=r,i===0&&f(le)),a!==r)for(;a!==r;)u.push(a),oe.test(o.charAt(t))?(a=o.charAt(t),t++):(a=r,i===0&&f(le));else u=r;return u!==r&&(h=e,u=vr()),i--,(e=u)===r&&(u=r,i===0&&f(_e)),e}function Tr(){var e,u,a;return i++,e=t,b(),(u=F())!==r?(o.charCodeAt(t)===37?(a=j,t++):(a=r,i===0&&f(Ke)),a!==r?(h=e,e=dr(u)):(t=e,e=r)):(t=e,e=r),i--,e===r&&i===0&&f(Je),e}function Dr(){var e,u,a;return i++,e=t,b(),(u=F())!==r?(o.substr(t,2)===w?(a=w,t+=2):(a=r,i===0&&f(Qe)),a!==r?(h=e,e=yr(u)):(t=e,e=r)):(t=e,e=r),e===r&&(e=t,b(),(u=F())!==r?(o.substr(t,2)===W?(a=W,t+=2):(a=r,i===0&&f(Ve)),a!==r?(h=e,e=Ar(u)):(t=e,e=r)):(t=e,e=r),e===r&&(e=t,b(),(u=F())!==r?(o.substr(t,2)===X?(a=X,t+=2):(a=r,i===0&&f(We)),a!==r?(h=e,e=wr(u)):(t=e,e=r)):(t=e,e=r),e===r&&(e=t,b(),(u=F())!==r?(o.substr(t,2)===Y?(a=Y,t+=2):(a=r,i===0&&f(Xe)),a!==r?(h=e,e=xr(u)):(t=e,e=r)):(t=e,e=r),e===r&&(e=t,b(),(u=F())!==r?(o.substr(t,2)===Z?(a=Z,t+=2):(a=r,i===0&&f(Ye)),a!==r?(h=e,e=br(u)):(t=e,e=r)):(t=e,e=r),e===r&&(e=t,b(),(u=F())!==r?(o.substr(t,2)===ee?(a=ee,t+=2):(a=r,i===0&&f(Ze)),a!==r?(h=e,e=Er(u)):(t=e,e=r)):(t=e,e=r)))))),i--,e===r&&i===0&&f(Le),e}function Hr(){var e,u,a;return i++,e=t,(u=F())!==r?(o.substr(t,3)===re?(a=re,t+=3):(a=r,i===0&&f(rr)),a!==r?(h=e,e=Cr(u)):(t=e,e=r)):(t=e,e=r),e===r&&(e=t,(u=F())!==r?(o.substr(t,3)===te?(a=te,t+=3):(a=r,i===0&&f(tr)),a!==r?(h=e,e=Fr(u)):(t=e,e=r)):(t=e,e=r),e===r&&(e=t,(u=F())!==r?(o.substr(t,4)===ne?(a=ne,t+=4):(a=r,i===0&&f(nr)),a!==r?(h=e,e=$r(u)):(t=e,e=r)):(t=e,e=r),e===r&&(e=t,(u=F())!==r?(o.substr(t,4)===ue?(a=ue,t+=4):(a=r,i===0&&f(ur)),a!==r?(h=e,e=Or(u)):(t=e,e=r)):(t=e,e=r)))),i--,e===r&&(u=r,i===0&&f(er)),e}function Ur(){var e,u;return i++,e=t,b(),(u=F())!==r?(h=e,e=jr(u)):(t=e,e=r),i--,e===r&&i===0&&f(ar),e}function Gr(){var e,u,a,s;if(i++,e=t,o.charCodeAt(t)===35?(u=Me,t++):(u=r,i===0&&f(cr)),u!==r){if(a=[],ce.test(o.charAt(t))?(s=o.charAt(t),t++):(s=r,i===0&&f(pe)),s!==r)for(;s!==r;)a.push(s),ce.test(o.charAt(t))?(s=o.charAt(t),t++):(s=r,i===0&&f(pe));else a=r;a!==r?(h=e,e=Sr()):(t=e,e=r)}else t=e,e=r;return e===r&&(e=t,(u=J())!==r&&(h=e,u=qr(u)),(e=u)===r&&(e=t,(u=de())!==r&&(h=e,u=zr()),e=u)),i--,e===r&&(u=r,i===0&&f(or)),e}function F(){var e,u,a,s,y,m,$;for(e=t,ie.test(o.charAt(t))?(o.charAt(t),t++):i===0&&f(he),u=t,a=[],R.test(o.charAt(t))?(s=o.charAt(t),t++):(s=r,i===0&&f(k));s!==r;)a.push(s),R.test(o.charAt(t))?(s=o.charAt(t),t++):(s=r,i===0&&f(k));if(o.charCodeAt(t)===46?(s=Ne,t++):(s=r,i===0&&f(ir)),s!==r){if(y=[],R.test(o.charAt(t))?(m=o.charAt(t),t++):(m=r,i===0&&f(k)),m!==r)for(;m!==r;)y.push(m),R.test(o.charAt(t))?(m=o.charAt(t),t++):(m=r,i===0&&f(k));else y=r;y!==r?u=a=[a,s,y]:(t=u,u=r)}else t=u,u=r;if(u===r)if(u=[],R.test(o.charAt(t))?(a=o.charAt(t),t++):(a=r,i===0&&f(k)),a!==r)for(;a!==r;)u.push(a),R.test(o.charAt(t))?(a=o.charAt(t),t++):(a=r,i===0&&f(k));else u=r;if(u!==r){if(a=t,o.charCodeAt(t)===101?(s=Pe,t++):(s=r,i===0&&f(fr)),s!==r){if(ie.test(o.charAt(t))?(y=o.charAt(t),t++):(y=r,i===0&&f(he)),y===r&&(y=null),m=[],R.test(o.charAt(t))?($=o.charAt(t),t++):($=r,i===0&&f(k)),$!==r)for(;$!==r;)m.push($),R.test(o.charAt(t))?($=o.charAt(t),t++):($=r,i===0&&f(k));else m=r;m!==r?a=s=[s,y,m]:(t=a,a=r)}else t=a,a=r;a===r&&(a=null),h=e,e=Rr()}else t=e,e=r;return e}function _r(e,u){return e.map(function(a){return a[u]})}function Jr(e,u,a){return[e].concat(_r(u,a))}if((v=I())!==r&&t===o.length)return v;throw v!==r&&t<o.length&&f(kr()),Ir(_,q<o.length?o.charAt(q):null,q<o.length?ge(q,q+1):ge(q,q))}return n(c,Error),c.prototype.format=function(o){var g="Error: "+this.message;if(this.location){var v,r=null;for(v=0;v<o.length;v++)if(o[v].source===this.location.source){r=o[v].text.split(/\r\n|\n|\r/g);break}var A=this.location.start,O=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(A):A,I=this.location.source+":"+O.line+":"+O.column;if(r){var M=this.location.end,N=l("",O.line.toString().length," "),p=r[A.line-1],d=(A.line===M.line?M.column:p.length+1)-A.column||1;g+=`
 --> `+I+`
`+N+` |
`+O.line+" | "+p+`
`+N+" | "+l("",A.column-1," ")+l("",d,"^")}else g+=`
 at `+I}return g},c.buildMessage=function(o,g){var v={literal:function(p){return'"'+A(p.text)+'"'},class:function(p){var d=p.parts.map(function(j){return Array.isArray(j)?O(j[0])+"-"+O(j[1]):O(j)});return"["+(p.inverted?"^":"")+d.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(p){return p.description}};function r(p){return p.charCodeAt(0).toString(16).toUpperCase()}function A(p){return p.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(d){return"\\x0"+r(d)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(d){return"\\x"+r(d)})}function O(p){return p.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(d){return"\\x0"+r(d)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(d){return"\\x"+r(d)})}function I(p){return v[p.type](p)}function M(p){var d,j,w=p.map(I);if(w.sort(),w.length>0){for(d=1,j=1;d<w.length;d++)w[d-1]!==w[d]&&(w[j]=w[d],j++);w.length=j}switch(w.length){case 1:return w[0];case 2:return w[0]+" or "+w[1];default:return w.slice(0,-1).join(", ")+", or "+w[w.length-1]}}function N(p){return p?'"'+A(p)+'"':"end of input"}return"Expected "+M(o)+" but "+N(g)+" found."},{SyntaxError:c,parse:C}},(qe=ke).exports&&(qe.exports=ze());var Kr=ke.exports;function vt(n){if(!n||n.length===0)return null;if(typeof n=="string"){let l=Re(n);return l&&l.length!==0?l:null}let c=n.map(l=>{if(!Number.isFinite(l.scale)||l.scale<=0)throw new E("effect:invalid-scale","scale must be finite and greater than 0",{stop:l});return{scale:l.scale,effects:Re(l.value)}});c.sort((l,C)=>C.effects.length-l.effects.length);for(let l=0;l<c.length-1;l++){if(!je(c[l].effects,c[l+1].effects))throw new E("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:c[l].effects,b:c[l+1].effects});Se(c[l].effects,c[l+1].effects)}return c.sort((l,C)=>C.scale-l.scale),c}function Re(n){let c;if(!n)return[];try{c=Kr.parse(n)}catch(l){throw new E("effect:invalid-syntax","Invalid effect syntax",{value:n,error:l})}return c.map(l=>Lr(l))}function Lr(n){try{switch(n.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return Qr(n);case"opacity":return Vr(n);case"hue-rotate":return Wr(n);case"blur":return Xr(n);case"drop-shadow":return Yr(n);case"bloom":return Zr(n)}}catch(c){throw c.details.filter=n,c}throw new E("effect:unknown-effect",`Effect '${n.name}' is not supported`,{effect:n})}function Qr(n){let c=1;return P(n.parameters,1),n.parameters.length===1&&(c=S(n.parameters[0])),new Ce(n.name,c)}function Vr(n){let c=1;return P(n.parameters,1),n.parameters.length===1&&(c=S(n.parameters[0])),new Oe(c)}function Wr(n){let c=0;return P(n.parameters,1),n.parameters.length===1&&(c=at(n.parameters[0])),new $e(c)}function Xr(n){let c=0;return P(n.parameters,1),n.parameters.length===1&&(c=V(n.parameters[0]),T(c,n.parameters[0])),new Ee(c)}function Yr(n){let c=[],l=null;for(let C of n.parameters)if(C.type==="color"){if(c.length&&Object.freeze(c),l)throw new E("effect:type-error","Accepts only one color",{});l=ot(C)}else{let o=V(C);if(Object.isFrozen(c))throw new E("effect:type-error","<length> parameters not consecutive",{lengths:c});c.push(o),c.length===3&&T(o,C)}if(c.length<2||c.length>3)throw new E("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${c.length}}`,{lengths:c});return new Fe(c[0],c[1],c[2]||0,l||Ie("black"))}function Zr(n){let c=1,l=0,C=0;return P(n.parameters,3),n.parameters[0]&&(c=S(n.parameters[0])),n.parameters[1]&&(l=V(n.parameters[1]),T(l,n.parameters[1])),n.parameters[2]&&(C=S(n.parameters[2])),new be(c,l,C)}function P(n,c){if(n.length>c)throw new E("effect:type-error",`Function supports up to ${c} parameters, Actual: ${n.length}`,{parameters:n})}function G(n){if(n.type==="color")return"<color>";if(n.unit){if(n.unit in Q)return"<length>";if(n.unit in L)return"<angle>";if(n.unit==="%")return"<percentage>"}return"<double>"}function T(n,c){if(n<0)throw new E("effect:type-error",`Negative values are not allowed, Actual: ${n}`,{term:c})}function et(n){if(n.type!=="quantity"||n.unit!==null)throw new E("effect:type-error",`Expected <double>, Actual: ${G(n)}`,{term:n})}function rt(n){if(n.type!=="quantity"||n.unit!==null&&n.unit!=="%")throw new E("effect:type-error",`Expected <double> or <percentage>, Actual: ${G(n)}`,{term:n})}var L={deg:1,grad:.9,rad:180/Math.PI,turn:360};function tt(n){if(n.type!=="quantity"||!(n.value===0&&n.unit===null||n.unit&&L[n.unit]!=null))throw new E("effect:type-error",`Expected <angle>, Actual: ${G(n)}`,{term:n})}var Q={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72};function nt(n){if(n.type!=="quantity"||!(n.value===0&&n.unit===null||n.unit&&Q[n.unit]!=null))throw new E("effect:type-error",`Expected <length>, Actual: ${G(n)}`,{term:n})}function S(n){rt(n);let c=n.value;return T(c,n),n.unit==="%"?.01*c:c}function ut(n){return et(n),T(n.value,n),n.value}function at(n){return tt(n),n.value*L[n.unit]||0}function V(n){return nt(n),n.value*Q[n.unit]||0}function ot(n){switch(n.colorType){case"hex":return xe(n.value);case"named":return Ie(n.value);case"function":return ft(n.value)}}function Ie(n){if(!ye(n))throw new E("effect:unknown-color",`color '${n}' isn't valid`,{namedColor:n});return Ae(n)}var ct=/^rgba?/i,it=/^hsla?/i;function ft(n){if(P(n.parameters,4),ct.test(n.name))return[S(n.parameters[0]),S(n.parameters[1]),S(n.parameters[2]),n.parameters[3]?S(n.parameters[3]):1];if(it.test(n.name))return we(ut(n.parameters[0]),S(n.parameters[1]),S(n.parameters[2]),n.parameters[3]?S(n.parameters[3]):1);throw new E("effect:syntax-error",`Invalid color function '${n.name}'`,{colorFunction:n})}export{vt as a};
