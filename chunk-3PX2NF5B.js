import{a as u,b as g,c as V}from"./chunk-X2T2CBLR.js";import{a as l}from"./chunk-IFFYADB3.js";import{a as x}from"./chunk-BVW6ULEA.js";import{d as _,n as q,o as S,q as E}from"./chunk-5QLB7ZJ7.js";import{f as U,g as A}from"./chunk-TMZNSBQB.js";import{a as v,b as i,c as M,d as w,g as j,h as I,i as T,k as R}from"./chunk-ZGLJFDS6.js";import{I as n,T as b}from"./chunk-Z5NXR7SL.js";import{S as N}from"./chunk-7JLWSSXP.js";import{a as s}from"./chunk-W3WDPWBE.js";function e(t=h){return[t[0],t[1],t[2],t[3]]}function m(t,o,r=e()){return R(r,t),r[3]=o,r}function $(t,o=e()){let r=q(p,t);return F(o,A(g(o,r))),o}function k(t,o,r=e()){return u(p,t,f(t)),u(z,o,f(o)),V(p,z,p),F(r,A(g(r,p)))}function tt(t,o,r,d=e()){return m(j,t,c),m(I,o,B),m(T,r,C),k(c,B,c),k(c,C,d),d}function D(t){return t[3]}function f(t){return U(t[3])}function F(t,o){return t[3]=o,t}var h=[0,0,1,0],p=l(),z=l(),ot=e(),c=e(),B=e(),C=e();var y,a=y=class extends b{constructor(t){super(t),this.translation=v(),this.rotationAxis=w(h),this.rotationAngle=0,this.scale=M(1,1,1)}get rotation(){return m(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=i(t),this.rotationAngle=D(t)}get localMatrix(){let t=x();return u(G,this.rotation,f(this.rotation)),S(t,G,this.translation,this.scale),t}get localMatrixInverse(){return _(x(),this.localMatrix)}equals(t){return this===t||t!=null&&E(this.localMatrix,t.localMatrix)}clone(){let t={translation:i(this.translation),rotationAxis:i(this.rotationAxis),rotationAngle:this.rotationAngle,scale:i(this.scale)};return new y(t)}};s([n({type:[Number],nonNullable:!0,json:{write:!0}})],a.prototype,"translation",void 0),s([n({type:[Number],nonNullable:!0,json:{write:!0}})],a.prototype,"rotationAxis",void 0),s([n({type:Number,nonNullable:!0,json:{write:!0}})],a.prototype,"rotationAngle",void 0),s([n({type:[Number],nonNullable:!0,json:{write:!0}})],a.prototype,"scale",void 0),s([n()],a.prototype,"rotation",null),s([n()],a.prototype,"localMatrix",null),s([n()],a.prototype,"localMatrixInverse",null),a=y=s([N("esri.geometry.support.MeshTransform")],a);var G=l(),ht=a;export{e as a,$ as b,tt as c,f as d,ht as e};
