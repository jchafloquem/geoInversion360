import{a as l}from"./chunk-PCE3ZAVU.js";import{b as u}from"./chunk-GMW3QDVG.js";import{a as i}from"./chunk-RHABF3KL.js";import{a as T}from"./chunk-I46GU3Q4.js";import{a as A}from"./chunk-H5IJXG2U.js";import{a as y}from"./chunk-2EA2KAER.js";import{b as w}from"./chunk-J57HR4DB.js";import{q as x,s as F}from"./chunk-BRWS572J.js";var E=class extends l{constructor(e,n){super(e,"sampler2D",i.Pass,(t,s,a)=>t.bindTexture(e,n(s,a)))}};var p=class extends l{constructor(e,n){super(e,"vec2",i.Pass,(t,s,a)=>t.setUniform2fv(e,n(s,a)))}};function V(r,e=!0){r.attributes.add(A.POSITION,"vec2"),e&&r.varyings.add("uv","vec2"),r.vertex.code.add(u`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?u`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}function Z(r){r.uniforms.add(new p("zProjectionMap",(e,n)=>M(n.camera))),r.code.add(u`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),r.code.add(u`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),r.code.add(u`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function M(r){let e=r.projectionMatrix;return w(P,e[14],e[10])}var P=y();var R=()=>x.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder"),f=class{constructor(){this._includedModules=new Map}include(e,n){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,n),e(this.builder,n))}},D=class extends f{constructor(){super(...arguments),this.vertex=new g,this.fragment=new g,this.attributes=new b,this.varyings=new $,this.extensions=new d,this.constants=new v,this.outputs=new h}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){let n=this.extensions.generateSource(e),t=this.attributes.generateSource(e),s=this.varyings.generateSource(e),a=e==="vertex"?this.vertex:this.fragment,o=a.uniforms.generateSource(),c=a.code.generateSource(),m=e==="vertex"?j:U,I=this.constants.generateSource().concat(a.constants.generateSource()),L=this.outputs.generateSource(e);return`#version 300 es
${n.join(`
`)}

${m}

${I.join(`
`)}

${o.join(`
`)}

${t.join(`
`)}

${s.join(`
`)}

${L.join(`
`)}

${c.join(`
`)}`}generateBindPass(e){let n=new Map;this.vertex.uniforms.entries.forEach(a=>{let o=a.bind[i.Pass];o&&n.set(a.name,o)}),this.fragment.uniforms.entries.forEach(a=>{let o=a.bind[i.Pass];o&&n.set(a.name,o)});let t=Array.from(n.values()),s=t.length;return(a,o)=>{for(let c=0;c<s;++c)t[c](e,a,o)}}generateBindDraw(e){let n=new Map;this.vertex.uniforms.entries.forEach(a=>{let o=a.bind[i.Draw];o&&n.set(a.name,o)}),this.fragment.uniforms.entries.forEach(a=>{let o=a.bind[i.Draw];o&&n.set(a.name,o)});let t=Array.from(n.values()),s=t.length;return(a,o,c)=>{for(let m=0;m<s;++m)t[m](e,a,o,c)}}},S=class{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(let n of e)this._add(n);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new F(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else R().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},_=class{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}},g=class extends f{constructor(){super(...arguments),this.uniforms=new S(this),this.code=new _(this),this.constants=new v}get builder(){return this}},b=class{constructor(){this._entries=new Array}add(e,n){this._entries.push([e,n])}generateSource(e){return e==="fragment"?[]:this._entries.map(n=>`in ${n[1]} ${n[0]};`)}},$=class{constructor(){this._entries=new Map}add(e,n){this._entries.has(e)&&T(this._entries.get(e)===n),this._entries.set(e,n)}generateSource(e){let n=new Array;return this._entries.forEach((t,s)=>n.push(e==="vertex"?`out ${t} ${s};`:`in ${t} ${s};`)),n}},d=class r{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){let n=e==="vertex"?r.ALLOWLIST_VERTEX:r.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(t=>n.includes(t)).map(t=>`#extension ${t} : enable`)}};d.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],d.ALLOWLIST_VERTEX=[];var h=class r{constructor(){this._entries=new Map}add(e,n,t=0){let s=this._entries.get(t);s?T(s.name===e&&s.type===n,`Fragment shader output location ${t} occupied`):this._entries.set(t,{name:e,type:n})}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:r.DEFAULT_NAME,type:r.DEFAULT_TYPE});let n=new Array;return this._entries.forEach((t,s)=>n.push(`layout(location = ${s}) out ${t.type} ${t.name};`)),n}};h.DEFAULT_TYPE="vec4",h.DEFAULT_NAME="fragColor";var v=class r{constructor(){this._entries=new Set}add(e,n,t){let s="ERROR_CONSTRUCTOR_STRING";switch(n){case"float":s=r._numberToFloatStr(t);break;case"int":s=r._numberToIntStr(t);break;case"bool":s=t.toString();break;case"vec2":s=`vec2(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])})`;break;case"vec3":s=`vec3(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])},                            ${r._numberToFloatStr(t[2])})`;break;case"vec4":s=`vec4(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])},                            ${r._numberToFloatStr(t[2])},                            ${r._numberToFloatStr(t[3])})`;break;case"ivec2":s=`ivec2(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])})`;break;case"ivec3":s=`ivec3(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])},                             ${r._numberToIntStr(t[2])})`;break;case"ivec4":s=`ivec4(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])},                             ${r._numberToIntStr(t[2])},                             ${r._numberToIntStr(t[3])})`;break;case"mat2":case"mat3":case"mat4":s=`${n}(${Array.prototype.map.call(t,a=>r._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${n} ${e} = ${s};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}},U=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,j=`precision highp float;
precision highp sampler2D;`;export{E as a,p as b,V as c,Z as d,D as e};
