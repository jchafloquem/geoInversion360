import{i as T,j as A}from"./chunk-SRPI622Y.js";import{c as E}from"./chunk-2EA2KAER.js";import{A as s,k as _,l as g,n as x,o as d,p}from"./chunk-ZAQLF7TN.js";function b(e,a,t="nearest",n=!1){let r=!(n&&a.pixelType==="u8"),o=r?p.FLOAT:p.UNSIGNED_BYTE,u=a.pixels==null||a.pixels.length===0?null:r?a.getAsRGBAFloat():a.getAsRGBA(),f=e.capabilities.textureFloatLinear,i=new T;return i.width=a.width,i.height=a.height,i.internalFormat=r?d.RGBA32F:x.RGBA,i.samplingMode=!f||t!=="bilinear"&&t!=="cubic"?_.NEAREST:_.LINEAR,i.dataType=o,i.wrapMode=g.CLAMP_TO_EDGE,new A(e,i,u)}function w(e,a){let{spacing:t,offsets:n,coefficients:r,size:[o,u]}=a,f=t[0]>1,i=new T;i.width=f?4*o:o,i.height=u,i.internalFormat=d.RGBA32F,i.dataType=p.FLOAT,i.samplingMode=_.NEAREST,i.wrapMode=g.CLAMP_TO_EDGE;let l=new Float32Array(f?o*u*16:2*n.length);if(f&&r!=null)for(let m=0,c=0;m<r.length;m++)l[c++]=r[m],m%3==2&&(l[c++]=1);else for(let m=0;m<u;m++)for(let c=0;c<o;c++){let h=4*(m*o+c),O=2*(c*u+m);l[h]=n[O],l[h+1]=n[O+1],l[h+3]=n[O]===-1?0:1}return new A(e,i,l)}function G(e,a){let t=new T;return t.internalFormat=x.RGBA,t.width=a.length/4,t.height=1,t.samplingMode=_.NEAREST,t.wrapMode=g.CLAMP_TO_EDGE,new A(e,t,a)}function R(e,a,t,n=1,r=!0){return{u_flipY:r,u_applyTransform:!!e,u_opacity:n,u_transformSpacing:e?e.spacing:E,u_transformGridSize:e?e.size:E,u_targetImageSize:a,u_srcImageSize:t}}function S(e,a){return{u_colormapOffset:a||0,u_colormapMaxIndex:e?e.length/4-1:0}}function V(e,a){return{u_scale:e,u_offset:a}}function k(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function y(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function B(e,a){let t=e.gl,n=a.glName,r=new Map;if(n==null)return r;let o=t.getProgramParameter(n,t.ACTIVE_UNIFORMS),u;for(let f=0;f<o;f++)u=t.getActiveUniform(n,f),u&&r.set(u.name,{location:t.getUniformLocation(n,u.name),info:u});return r}function I(e,a,t){Object.keys(t).forEach(n=>{let r=a.get(n)||a.get(n+"[0]");r&&U(e,n,t[n],r)})}function N(e,a,t,n){t.length===n.length&&(n.some(r=>r==null)||t.some(r=>r==null)||t.forEach((r,o)=>{a.setUniform1i(r,o),e.bindTexture(n[o],o)}))}function U(e,a,t,n){if(n===null||t==null)return!1;let{info:r}=n;switch(r.type){case s.FLOAT:r.size>1?e.setUniform1fv(a,t):e.setUniform1f(a,t);break;case s.FLOAT_VEC2:e.setUniform2fv(a,t);break;case s.FLOAT_VEC3:e.setUniform3fv(a,t);break;case s.FLOAT_VEC4:e.setUniform4fv(a,t);break;case s.FLOAT_MAT3:e.setUniformMatrix3fv(a,t);break;case s.FLOAT_MAT4:e.setUniformMatrix4fv(a,t);break;case s.INT:r.size>1?e.setUniform1iv(a,t):e.setUniform1i(a,t);break;case s.BOOL:e.setUniform1i(a,t?1:0);break;case s.INT_VEC2:case s.BOOL_VEC2:e.setUniform2iv(a,t);break;case s.INT_VEC3:case s.BOOL_VEC3:e.setUniform3iv(a,t);break;case s.INT_VEC4:case s.BOOL_VEC4:e.setUniform4iv(a,t);break;default:return!1}return!0}export{b as a,w as b,G as c,R as d,S as e,V as f,k as g,y as h,B as i,I as j,N as k};
