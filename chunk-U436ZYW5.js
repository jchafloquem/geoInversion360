import{s as o}from"./chunk-BRWS572J.js";var c=class n{constructor(t,e,r=""){this.major=t,this.minor=e,this._context=r}lessThan(t,e){return this.major<t||t===this.major&&this.minor<e}since(t,e){return!this.lessThan(t,e)}validate(t){if(this.major!==t.major){let e=this._context&&this._context+":",r=this._context&&this._context+" ";throw new o(e+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:t})}}clone(){return new n(this.major,this.minor,this._context)}static parse(t,e=""){let[r,i]=t.split("."),s=/^\s*\d+\s*$/;if(!r?.match||!s.test(r))throw new o((e&&e+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!i?.match||!s.test(i))throw new o((e&&e+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});let a=parseInt(r,10),h=parseInt(i,10);return new n(a,h,e)}};export{c as a};
