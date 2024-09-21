import{a as x}from"./chunk-EZIYNRHJ.js";import{s as z}from"./chunk-OFVMJORF.js";import{k as R}from"./chunk-7JLWSSXP.js";function C(u,o){return[u,o]}function S(u,o,t){return u[0]=o,u[1]=t,u}function X(u,o,t,l,e){return u[0]=o,u[1]=t,u[2]=l,u[3]=e,u}var F=new x("0/0/0/0"),I=class u{static create(o,t,l=null){let e=z(o.spatialReference),r=t.origin||C(o.origin.x,o.origin.y),n=C(o.size[0]*t.resolution,o.size[1]*t.resolution),s=C(-1/0,-1/0),i=C(1/0,1/0),a=C(1/0,1/0);l!=null&&(S(s,Math.max(0,Math.floor((l.xmin-r[0])/n[0])),Math.max(0,Math.floor((r[1]-l.ymax)/n[1]))),S(i,Math.max(0,Math.floor((l.xmax-r[0])/n[0])),Math.max(0,Math.floor((r[1]-l.ymin)/n[1]))),S(a,i[0]-s[0]+1,i[1]-s[1]+1));let{cols:h,rows:m}=t,w,M,y,g;return!l&&h&&m&&(S(s,h[0],m[0]),S(i,h[1],m[1]),S(a,h[1]-h[0]+1,m[1]-m[0]+1)),o.isWrappable?(w=C(Math.ceil(Math.round((e.valid[1]-e.valid[0])/t.resolution)/o.size[0]),a[1]),M=C(Math.floor((e.origin[0]-r[0])/n[0]),s[1]),y=C(w[0]+M[0]-1,i[1]),g=!0):(M=s,y=i,w=a,g=!1),new u(t.level,t.resolution,t.scale,r,s,i,a,n,M,y,w,g)}constructor(o,t,l,e,r,n,s,i,a,h,m,w){this.level=o,this.resolution=t,this.scale=l,this.origin=e,this.first=r,this.last=n,this.size=s,this.norm=i,this.worldStart=a,this.worldEnd=h,this.worldSize=m,this.wrap=w}normalizeCol(o){if(!this.wrap)return o;let t=this.worldSize[0];return o<0?t-1-Math.abs((o+1)%t):o%t}denormalizeCol(o,t){return this.wrap?this.worldSize[0]*t+o:o}getWorldForColumn(o){return this.wrap?Math.floor(o/this.worldSize[0]):0}getFirstColumnForWorld(o){return o*this.worldSize[0]+this.first[0]}getLastColumnForWorld(o){return o*this.worldSize[0]+this.first[0]+this.size[0]-1}getColumnForX(o){return(o-this.origin[0])/this.norm[0]}getXForColumn(o){return this.origin[0]+o*this.norm[0]}getRowForY(o){return(this.origin[1]-o)/this.norm[1]}getYForRow(o){return this.origin[1]-o*this.norm[1]}getTileBounds(o,t,l=!1){F.set(t);let e=l?F.col:this.denormalizeCol(F.col,F.world),r=F.row;return X(o,this.getXForColumn(e),this.getYForRow(r+1),this.getXForColumn(e+1),this.getYForRow(r)),o}getTileCoords(o,t,l=!1){F.set(t);let e=l?F.col:this.denormalizeCol(F.col,F.world);return Array.isArray(o)?S(o,this.getXForColumn(e),this.getYForRow(F.row)):(o.x=this.getXForColumn(e),o.y=this.getYForRow(F.row)),o}};var B=class{constructor(){this.spans=[]}acquire(o){this.lodInfo=o}release(){this.lodInfo=null,this.spans.length=0}*keys(){let o=this.lodInfo;for(let{row:t,colFrom:l,colTo:e}of this.spans)for(let r=l;r<=e;r++){let n=o.getWorldForColumn(r);yield new x(o.level,t,o.normalizeCol(r),n)}}forEach(o,t){let{spans:l,lodInfo:e}=this,{level:r}=e;if(l.length!==0)for(let{row:n,colFrom:s,colTo:i}of l)for(let a=s;a<=i;a++)o.call(t,r,n,e.normalizeCol(a),e.getWorldForColumn(a))}};B.pool=new R(B);var _=class{constructor(o,t,l){this.row=o,this.colFrom=t,this.colTo=l}};var c=new x("0/0/0/0"),T=class u{static create(o,t){o[1]>t[1]&&([o,t]=[t,o]);let[l,e]=o,[r,n]=t,s=r-l,i=n-e,a=i!==0?s/i:0,h=(Math.ceil(e)-e)*a,m=(Math.floor(e)-e)*a;return new u(l,Math.floor(e),Math.ceil(n),a,s<0?h:m,s<0?m:h,s<0?r:l,s<0?l:r)}constructor(o,t,l,e,r,n,s,i){this.x=o,this.ymin=t,this.ymax=l,this.invM=e,this.leftAdjust=r,this.rightAdjust=n,this.leftBound=s,this.rightBound=i}incrRow(){this.x+=this.invM}getLeftCol(){return Math.max(this.x+this.leftAdjust,this.leftBound)}getRightCol(){return Math.min(this.x+this.rightAdjust,this.rightBound)}},p=[[0,0],[0,0],[0,0],[0,0]],Y=1e-6,L=class{constructor(o,t=null,l=o.lods[0].level,e=o.lods[o.lods.length-1].level){this.tileInfo=o,this.fullExtent=t,this.scales=[],this._infoByScale={},this._infoByLevel={};let r=o.lods.filter(s=>s.level>=l&&s.level<=e);this.minScale=r[0].scale,this.maxScale=r[r.length-1].scale;let n=this._lodInfos=r.map(s=>I.create(o,s,t));r.forEach((s,i)=>{this._infoByLevel[s.level]=n[i],this._infoByScale[s.scale]=n[i],this.scales[i]=s.scale},this),this._wrap=o.isWrappable}get spatialReference(){return this.tileInfo.spatialReference}getLODInfoAt(o){return this._infoByLevel[typeof o=="number"?o:o.level]}getTileBounds(o,t,l=!1){c.set(t);let e=this._infoByLevel[c.level];return e?e.getTileBounds(o,c,l):o}getTileCoords(o,t,l=!1){c.set(t);let e=this._infoByLevel[c.level];return e?e.getTileCoords(o,c,l):o}getTileCoverage(o,t=192,l=!0,e="closest"){if(!l&&(o.scale>this.minScale||o.scale<this.maxScale))return null;let r=e==="closest"?this.getClosestInfoForScale(o.scale):this.getSmallestInfoForScale(o.scale),n=B.pool.acquire(r),s=this._wrap,i,a,h,m=1/0,w=-1/0,M=n.spans;p[0][0]=p[0][1]=p[1][1]=p[3][0]=-t,p[1][0]=p[2][0]=o.size[0]+t,p[2][1]=p[3][1]=o.size[1]+t;for(let f of p)o.toMap(f,f),f[0]=r.getColumnForX(f[0]),f[1]=r.getRowForY(f[1]);let y=[],g=3;for(let f=0;f<4;f++){if(p[f][1]===p[g][1]){g=f;continue}let d=T.create(p[f],p[g]);m=Math.min(d.ymin,m),w=Math.max(d.ymax,w),y[d.ymin]===void 0&&(y[d.ymin]=[]),y[d.ymin].push(d),g=f}if(m==null||w==null||w-m>100)return null;let v=[];for(i=m;i<w;){y[i]!=null&&(v=v.concat(y[i])),a=1/0,h=-1/0;for(let f=v.length-1;f>=0;f--){let d=v[f];a=Math.min(a,d.getLeftCol()),h=Math.max(h,d.getRightCol())}if(a=Math.floor(a),h=Math.floor(h),i>=r.first[1]&&i<=r.last[1])if(s)if(r.size[0]<r.worldSize[0]){let f=Math.floor(h/r.worldSize[0]);for(let d=Math.floor(a/r.worldSize[0]);d<=f;d++)M.push(new _(i,Math.max(r.getFirstColumnForWorld(d),a),Math.min(r.getLastColumnForWorld(d),h)))}else M.push(new _(i,a,h));else a>r.last[0]||h<r.first[0]||(a=Math.max(a,r.first[0]),h=Math.min(h,r.last[0]),M.push(new _(i,a,h)));i+=1;for(let f=v.length-1;f>=0;f--){let d=v[f];d.ymax>=i?d.incrRow():v.splice(f,1)}}return n}getTileParentId(o){c.set(o);let t=this._infoByLevel[c.level],l=this._lodInfos.indexOf(t)-1;return l<0?null:(this._getTileIdAtLOD(c,this._lodInfos[l],c),c.id)}getTileResolution(o){let t=this._infoByLevel[typeof o=="object"?o.level:o];return t?t.resolution:-1}getTileScale(o){let t=this._infoByLevel[o.level];return t?t.scale:-1}intersects(o,t){c.set(t);let l=this._infoByLevel[c.level],e=o.lodInfo;if(e.resolution>l.resolution){this._getTileIdAtLOD(c,e,c);let n=e.denormalizeCol(c.col,c.world);for(let s of o.spans)if(s.row===c.row&&s.colFrom<=n&&s.colTo>=n)return!0}if(e.resolution<l.resolution){let[n,s,i,a]=o.spans.reduce((g,v)=>(g[0]=Math.min(g[0],v.row),g[1]=Math.max(g[1],v.row),g[2]=Math.min(g[2],v.colFrom),g[3]=Math.max(g[3],v.colTo),g),[1/0,-1/0,1/0,-1/0]),h=l.denormalizeCol(c.col,c.world),m=e.getColumnForX(l.getXForColumn(h)),w=e.getRowForY(l.getYForRow(c.row)),M=e.getColumnForX(l.getXForColumn(h+1))-1,y=e.getRowForY(l.getYForRow(c.row+1))-1;return!(m>a||M<i||w>s||y<n)}let r=e.denormalizeCol(c.col,c.world);return o.spans.some(n=>n.row===c.row&&n.colFrom<=r&&n.colTo>=r)}normalizeBounds(o,t,l){if(o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=t[3],this._wrap){let e=z(this.tileInfo.spatialReference),r=-l*(e.valid[1]-e.valid[0]);o[0]+=r,o[2]+=r}return o}getSmallestInfoForScale(o){let t=this.scales;if(this._infoByScale[o])return this._infoByScale[o];if(o>t[0])return this._infoByScale[t[0]];for(let l=1;l<t.length-1;l++)if(o>t[l]+Y)return this._infoByScale[t[l-1]];return this._infoByScale[t[t.length-1]]}getClosestInfoForScale(o){let t=this.scales;return this._infoByScale[o]||(o=t.reduce((l,e)=>Math.abs(e-o)<Math.abs(l-o)?e:l,t[0])),this._infoByScale[o]}scaleToLevel(o){let t=this.scales;if(this._infoByScale[o])return this._infoByScale[o].level;for(let l=t.length-1;l>=0;l--)if(o<t[l])return l===t.length-1?this._infoByScale[t[t.length-1]].level:this._infoByScale[t[l]].level+(t[l]-o)/(t[l]-t[l+1]);return this._infoByScale[t[0]].level}scaleToZoom(o){return this.tileInfo.scaleToZoom(o)}zoomToScale(o){return this.tileInfo.zoomToScale(o)}_getTileIdAtLOD(o,t,l){let e=this._infoByLevel[l.level];return o.set(l),t.resolution<e.resolution?null:(t.resolution===e.resolution||(o.level=t.level,o.col=Math.floor(l.col*e.resolution/t.resolution+.01),o.row=Math.floor(l.row*e.resolution/t.resolution+.01)),o)}};export{B as a,L as b};
