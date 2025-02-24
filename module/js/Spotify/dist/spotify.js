// Build Spotify: 2/24/2025, 10:32:39 PM
(()=>{var Ke=Object.create;var Q=Object.defineProperty;var Ye=Object.getOwnPropertyDescriptor;var et=Object.getOwnPropertyNames;var tt=Object.getPrototypeOf,rt=Object.prototype.hasOwnProperty;var d=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var it=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of et(e))!rt.call(t,n)&&n!==r&&Q(t,n,{get:()=>e[n],enumerable:!(i=Ye(e,n))||i.enumerable});return t};var nt=(t,e,r)=>(r=t!=null?Ke(tt(t)):{},it(e||!t||!t.__esModule?Q(r,"default",{value:t,enumerable:!0}):r,t));var Y=d((yt,K)=>{"use strict";K.exports=ot;function ot(t,e){for(var r=new Array(arguments.length-1),i=0,n=2,s=!0;n<arguments.length;)r[i++]=arguments[n++];return new Promise(function(a,o){r[i]=function(h){if(s)if(s=!1,h)o(h);else{for(var m=new Array(arguments.length-1),S=0;S<m.length;)m[S++]=arguments[S];a.apply(null,m)}};try{t.apply(e||null,r)}catch(l){s&&(s=!1,o(l))}})}});var ie=d(re=>{"use strict";var q=re;q.length=function(e){var r=e.length;if(!r)return 0;for(var i=0;--r%4>1&&e.charAt(r)==="=";)++i;return Math.ceil(e.length*3)/4-i};var F=new Array(64),te=new Array(123);for(b=0;b<64;)te[F[b]=b<26?b+65:b<52?b+71:b<62?b-4:b-59|43]=b++;var b;q.encode=function(e,r,i){for(var n=null,s=[],u=0,a=0,o;r<i;){var l=e[r++];switch(a){case 0:s[u++]=F[l>>2],o=(l&3)<<4,a=1;break;case 1:s[u++]=F[o|l>>4],o=(l&15)<<2,a=2;break;case 2:s[u++]=F[o|l>>6],s[u++]=F[l&63],a=0;break}u>8191&&((n||(n=[])).push(String.fromCharCode.apply(String,s)),u=0)}return a&&(s[u++]=F[o],s[u++]=61,a===1&&(s[u++]=61)),n?(u&&n.push(String.fromCharCode.apply(String,s.slice(0,u))),n.join("")):String.fromCharCode.apply(String,s.slice(0,u))};var ee="invalid encoding";q.decode=function(e,r,i){for(var n=i,s=0,u,a=0;a<e.length;){var o=e.charCodeAt(a++);if(o===61&&s>1)break;if((o=te[o])===void 0)throw Error(ee);switch(s){case 0:u=o,s=1;break;case 1:r[i++]=u<<2|(o&48)>>4,u=o,s=2;break;case 2:r[i++]=(u&15)<<4|(o&60)>>2,u=o,s=3;break;case 3:r[i++]=(u&3)<<6|o,s=0;break}}if(s===1)throw Error(ee);return i-n};q.test=function(e){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)}});var oe=d((mt,ne)=>{"use strict";ne.exports=O;function O(){this._listeners={}}O.prototype.on=function(e,r,i){return(this._listeners[e]||(this._listeners[e]=[])).push({fn:r,ctx:i||this}),this};O.prototype.off=function(e,r){if(e===void 0)this._listeners={};else if(r===void 0)this._listeners[e]=[];else for(var i=this._listeners[e],n=0;n<i.length;)i[n].fn===r?i.splice(n,1):++n;return this};O.prototype.emit=function(e){var r=this._listeners[e];if(r){for(var i=[],n=1;n<arguments.length;)i.push(arguments[n++]);for(n=0;n<r.length;)r[n].fn.apply(r[n++].ctx,i)}return this}});var ce=d((_t,he)=>{"use strict";he.exports=se(se);function se(t){return typeof Float32Array<"u"?function(){var e=new Float32Array([-0]),r=new Uint8Array(e.buffer),i=r[3]===128;function n(o,l,h){e[0]=o,l[h]=r[0],l[h+1]=r[1],l[h+2]=r[2],l[h+3]=r[3]}function s(o,l,h){e[0]=o,l[h]=r[3],l[h+1]=r[2],l[h+2]=r[1],l[h+3]=r[0]}t.writeFloatLE=i?n:s,t.writeFloatBE=i?s:n;function u(o,l){return r[0]=o[l],r[1]=o[l+1],r[2]=o[l+2],r[3]=o[l+3],e[0]}function a(o,l){return r[3]=o[l],r[2]=o[l+1],r[1]=o[l+2],r[0]=o[l+3],e[0]}t.readFloatLE=i?u:a,t.readFloatBE=i?a:u}():function(){function e(i,n,s,u){var a=n<0?1:0;if(a&&(n=-n),n===0)i(1/n>0?0:2147483648,s,u);else if(isNaN(n))i(2143289344,s,u);else if(n>34028234663852886e22)i((a<<31|2139095040)>>>0,s,u);else if(n<11754943508222875e-54)i((a<<31|Math.round(n/1401298464324817e-60))>>>0,s,u);else{var o=Math.floor(Math.log(n)/Math.LN2),l=Math.round(n*Math.pow(2,-o)*8388608)&8388607;i((a<<31|o+127<<23|l)>>>0,s,u)}}t.writeFloatLE=e.bind(null,ue),t.writeFloatBE=e.bind(null,le);function r(i,n,s){var u=i(n,s),a=(u>>31)*2+1,o=u>>>23&255,l=u&8388607;return o===255?l?NaN:a*(1/0):o===0?a*1401298464324817e-60*l:a*Math.pow(2,o-150)*(l+8388608)}t.readFloatLE=r.bind(null,ae),t.readFloatBE=r.bind(null,fe)}(),typeof Float64Array<"u"?function(){var e=new Float64Array([-0]),r=new Uint8Array(e.buffer),i=r[7]===128;function n(o,l,h){e[0]=o,l[h]=r[0],l[h+1]=r[1],l[h+2]=r[2],l[h+3]=r[3],l[h+4]=r[4],l[h+5]=r[5],l[h+6]=r[6],l[h+7]=r[7]}function s(o,l,h){e[0]=o,l[h]=r[7],l[h+1]=r[6],l[h+2]=r[5],l[h+3]=r[4],l[h+4]=r[3],l[h+5]=r[2],l[h+6]=r[1],l[h+7]=r[0]}t.writeDoubleLE=i?n:s,t.writeDoubleBE=i?s:n;function u(o,l){return r[0]=o[l],r[1]=o[l+1],r[2]=o[l+2],r[3]=o[l+3],r[4]=o[l+4],r[5]=o[l+5],r[6]=o[l+6],r[7]=o[l+7],e[0]}function a(o,l){return r[7]=o[l],r[6]=o[l+1],r[5]=o[l+2],r[4]=o[l+3],r[3]=o[l+4],r[2]=o[l+5],r[1]=o[l+6],r[0]=o[l+7],e[0]}t.readDoubleLE=i?u:a,t.readDoubleBE=i?a:u}():function(){function e(i,n,s,u,a,o){var l=u<0?1:0;if(l&&(u=-u),u===0)i(0,a,o+n),i(1/u>0?0:2147483648,a,o+s);else if(isNaN(u))i(0,a,o+n),i(2146959360,a,o+s);else if(u>17976931348623157e292)i(0,a,o+n),i((l<<31|2146435072)>>>0,a,o+s);else{var h;if(u<22250738585072014e-324)h=u/5e-324,i(h>>>0,a,o+n),i((l<<31|h/4294967296)>>>0,a,o+s);else{var m=Math.floor(Math.log(u)/Math.LN2);m===1024&&(m=1023),h=u*Math.pow(2,-m),i(h*4503599627370496>>>0,a,o+n),i((l<<31|m+1023<<20|h*1048576&1048575)>>>0,a,o+s)}}}t.writeDoubleLE=e.bind(null,ue,0,4),t.writeDoubleBE=e.bind(null,le,4,0);function r(i,n,s,u,a){var o=i(u,a+n),l=i(u,a+s),h=(l>>31)*2+1,m=l>>>20&2047,S=4294967296*(l&1048575)+o;return m===2047?S?NaN:h*(1/0):m===0?h*5e-324*S:h*Math.pow(2,m-1075)*(S+4503599627370496)}t.readDoubleLE=r.bind(null,ae,0,4),t.readDoubleBE=r.bind(null,fe,4,0)}(),t}function ue(t,e,r){e[r]=t&255,e[r+1]=t>>>8&255,e[r+2]=t>>>16&255,e[r+3]=t>>>24}function le(t,e,r){e[r]=t>>>24,e[r+1]=t>>>16&255,e[r+2]=t>>>8&255,e[r+3]=t&255}function ae(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0}function fe(t,e){return(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}});var pe=d((exports,module)=>{"use strict";module.exports=inquire;function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(t){}return null}});var ye=d(de=>{"use strict";var M=de;M.length=function(e){for(var r=0,i=0,n=0;n<e.length;++n)i=e.charCodeAt(n),i<128?r+=1:i<2048?r+=2:(i&64512)===55296&&(e.charCodeAt(n+1)&64512)===56320?(++n,r+=4):r+=3;return r};M.read=function(e,r,i){var n=i-r;if(n<1)return"";for(var s=null,u=[],a=0,o;r<i;)o=e[r++],o<128?u[a++]=o:o>191&&o<224?u[a++]=(o&31)<<6|e[r++]&63:o>239&&o<365?(o=((o&7)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,u[a++]=55296+(o>>10),u[a++]=56320+(o&1023)):u[a++]=(o&15)<<12|(e[r++]&63)<<6|e[r++]&63,a>8191&&((s||(s=[])).push(String.fromCharCode.apply(String,u)),a=0);return s?(a&&s.push(String.fromCharCode.apply(String,u.slice(0,a))),s.join("")):String.fromCharCode.apply(String,u.slice(0,a))};M.write=function(e,r,i){for(var n=i,s,u,a=0;a<e.length;++a)s=e.charCodeAt(a),s<128?r[i++]=s:s<2048?(r[i++]=s>>6|192,r[i++]=s&63|128):(s&64512)===55296&&((u=e.charCodeAt(a+1))&64512)===56320?(s=65536+((s&1023)<<10)+(u&1023),++a,r[i++]=s>>18|240,r[i++]=s>>12&63|128,r[i++]=s>>6&63|128,r[i++]=s&63|128):(r[i++]=s>>12|224,r[i++]=s>>6&63|128,r[i++]=s&63|128);return i-n}});var me=d((wt,ge)=>{"use strict";ge.exports=st;function st(t,e,r){var i=r||8192,n=i>>>1,s=null,u=i;return function(o){if(o<1||o>n)return t(o);u+o>i&&(s=t(i),u=0);var l=e.call(s,u,u+=o);return u&7&&(u=(u|7)+1),l}}});var be=d((Bt,_e)=>{"use strict";_e.exports=y;var L=V();function y(t,e){this.lo=t>>>0,this.hi=e>>>0}var R=y.zero=new y(0,0);R.toNumber=function(){return 0};R.zzEncode=R.zzDecode=function(){return this};R.length=function(){return 1};var ut=y.zeroHash="\0\0\0\0\0\0\0\0";y.fromNumber=function(e){if(e===0)return R;var r=e<0;r&&(e=-e);var i=e>>>0,n=(e-i)/4294967296>>>0;return r&&(n=~n>>>0,i=~i>>>0,++i>4294967295&&(i=0,++n>4294967295&&(n=0))),new y(i,n)};y.from=function(e){if(typeof e=="number")return y.fromNumber(e);if(L.isString(e))if(L.Long)e=L.Long.fromString(e);else return y.fromNumber(parseInt(e,10));return e.low||e.high?new y(e.low>>>0,e.high>>>0):R};y.prototype.toNumber=function(e){if(!e&&this.hi>>>31){var r=~this.lo+1>>>0,i=~this.hi>>>0;return r||(i=i+1>>>0),-(r+i*4294967296)}return this.lo+this.hi*4294967296};y.prototype.toLong=function(e){return L.Long?new L.Long(this.lo|0,this.hi|0,Boolean(e)):{low:this.lo|0,high:this.hi|0,unsigned:Boolean(e)}};var A=String.prototype.charCodeAt;y.fromHash=function(e){return e===ut?R:new y((A.call(e,0)|A.call(e,1)<<8|A.call(e,2)<<16|A.call(e,3)<<24)>>>0,(A.call(e,4)|A.call(e,5)<<8|A.call(e,6)<<16|A.call(e,7)<<24)>>>0)};y.prototype.toHash=function(){return String.fromCharCode(this.lo&255,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,this.hi&255,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)};y.prototype.zzEncode=function(){var e=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^e)>>>0,this.lo=(this.lo<<1^e)>>>0,this};y.prototype.zzDecode=function(){var e=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^e)>>>0,this.hi=(this.hi>>>1^e)>>>0,this};y.prototype.length=function(){var e=this.lo,r=(this.lo>>>28|this.hi<<4)>>>0,i=this.hi>>>24;return i===0?r===0?e<16384?e<128?1:2:e<2097152?3:4:r<16384?r<128?5:6:r<2097152?7:8:i<128?9:10}});var V=d(I=>{"use strict";var f=I;f.asPromise=Y();f.base64=ie();f.EventEmitter=oe();f.float=ce();f.inquire=pe();f.utf8=ye();f.pool=me();f.LongBits=be();f.isNode=Boolean(typeof global<"u"&&global&&global.process&&global.process.versions&&global.process.versions.node);f.global=f.isNode&&global||typeof window<"u"&&window||typeof self<"u"&&self||I;f.emptyArray=Object.freeze?Object.freeze([]):[];f.emptyObject=Object.freeze?Object.freeze({}):{};f.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};f.isString=function(e){return typeof e=="string"||e instanceof String};f.isObject=function(e){return e&&typeof e=="object"};f.isset=f.isSet=function(e,r){var i=e[r];return i!=null&&e.hasOwnProperty(r)?typeof i!="object"||(Array.isArray(i)?i.length:Object.keys(i).length)>0:!1};f.Buffer=function(){try{var t=f.inquire("buffer").Buffer;return t.prototype.utf8Write?t:null}catch{return null}}();f._Buffer_from=null;f._Buffer_allocUnsafe=null;f.newBuffer=function(e){return typeof e=="number"?f.Buffer?f._Buffer_allocUnsafe(e):new f.Array(e):f.Buffer?f._Buffer_from(e):typeof Uint8Array>"u"?e:new Uint8Array(e)};f.Array=typeof Uint8Array<"u"?Uint8Array:Array;f.Long=f.global.dcodeIO&&f.global.dcodeIO.Long||f.global.Long||f.inquire("long");f.key2Re=/^true|false|0|1$/;f.key32Re=/^-?(?:0|[1-9][0-9]*)$/;f.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;f.longToHash=function(e){return e?f.LongBits.from(e).toHash():f.LongBits.zeroHash};f.longFromHash=function(e,r){var i=f.LongBits.fromHash(e);return f.Long?f.Long.fromBits(i.lo,i.hi,r):i.toNumber(Boolean(r))};function we(t,e,r){for(var i=Object.keys(e),n=0;n<i.length;++n)(t[i[n]]===void 0||!r)&&(t[i[n]]=e[i[n]]);return t}f.merge=we;f.lcFirst=function(e){return e.charAt(0).toLowerCase()+e.substring(1)};function Be(t){function e(r,i){if(!(this instanceof e))return new e(r,i);Object.defineProperty(this,"message",{get:function(){return r}}),Error.captureStackTrace?Error.captureStackTrace(this,e):Object.defineProperty(this,"stack",{value:new Error().stack||""}),i&&we(this,i)}return e.prototype=Object.create(Error.prototype,{constructor:{value:e,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return t},set:void 0,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),e}f.newError=Be;f.ProtocolError=Be("ProtocolError");f.oneOfGetter=function(e){for(var r={},i=0;i<e.length;++i)r[e[i]]=1;return function(){for(var n=Object.keys(this),s=n.length-1;s>-1;--s)if(r[n[s]]===1&&this[n[s]]!==void 0&&this[n[s]]!==null)return n[s]}};f.oneOfSetter=function(e){return function(r){for(var i=0;i<e.length;++i)e[i]!==r&&delete this[e[i]]}};f.toJSONOptions={longs:String,enums:String,bytes:String,json:!0};f._configure=function(){var t=f.Buffer;if(!t){f._Buffer_from=f._Buffer_allocUnsafe=null;return}f._Buffer_from=t.from!==Uint8Array.from&&t.from||function(r,i){return new t(r,i)},f._Buffer_allocUnsafe=t.allocUnsafe||function(r){return new t(r)}}});var H=d((At,ve)=>{"use strict";ve.exports=c;var _=V(),j,D=_.LongBits,Ee=_.base64,Ae=_.utf8;function k(t,e,r){this.fn=t,this.len=e,this.next=void 0,this.val=r}function z(){}function lt(t){this.head=t.head,this.tail=t.tail,this.len=t.len,this.next=t.states}function c(){this.len=0,this.head=new k(z,0,0),this.tail=this.head,this.states=null}var Ve=function(){return _.Buffer?function(){return(c.create=function(){return new j})()}:function(){return new c}};c.create=Ve();c.alloc=function(e){return new _.Array(e)};_.Array!==Array&&(c.alloc=_.pool(c.alloc,_.Array.prototype.subarray));c.prototype._push=function(e,r,i){return this.tail=this.tail.next=new k(e,r,i),this.len+=r,this};function T(t,e,r){e[r]=t&255}function at(t,e,r){for(;t>127;)e[r++]=t&127|128,t>>>=7;e[r]=t}function U(t,e){this.len=t,this.next=void 0,this.val=e}U.prototype=Object.create(k.prototype);U.prototype.fn=at;c.prototype.uint32=function(e){return this.len+=(this.tail=this.tail.next=new U((e=e>>>0)<128?1:e<16384?2:e<2097152?3:e<268435456?4:5,e)).len,this};c.prototype.int32=function(e){return e<0?this._push($,10,D.fromNumber(e)):this.uint32(e)};c.prototype.sint32=function(e){return this.uint32((e<<1^e>>31)>>>0)};function $(t,e,r){for(;t.hi;)e[r++]=t.lo&127|128,t.lo=(t.lo>>>7|t.hi<<25)>>>0,t.hi>>>=7;for(;t.lo>127;)e[r++]=t.lo&127|128,t.lo=t.lo>>>7;e[r++]=t.lo}c.prototype.uint64=function(e){var r=D.from(e);return this._push($,r.length(),r)};c.prototype.int64=c.prototype.uint64;c.prototype.sint64=function(e){var r=D.from(e).zzEncode();return this._push($,r.length(),r)};c.prototype.bool=function(e){return this._push(T,1,e?1:0)};function N(t,e,r){e[r]=t&255,e[r+1]=t>>>8&255,e[r+2]=t>>>16&255,e[r+3]=t>>>24}c.prototype.fixed32=function(e){return this._push(N,4,e>>>0)};c.prototype.sfixed32=c.prototype.fixed32;c.prototype.fixed64=function(e){var r=D.from(e);return this._push(N,4,r.lo)._push(N,4,r.hi)};c.prototype.sfixed64=c.prototype.fixed64;c.prototype.float=function(e){return this._push(_.float.writeFloatLE,4,e)};c.prototype.double=function(e){return this._push(_.float.writeDoubleLE,8,e)};var ft=_.Array.prototype.set?function(e,r,i){r.set(e,i)}:function(e,r,i){for(var n=0;n<e.length;++n)r[i+n]=e[n]};c.prototype.bytes=function(e){var r=e.length>>>0;if(!r)return this._push(T,1,0);if(_.isString(e)){var i=c.alloc(r=Ee.length(e));Ee.decode(e,i,0),e=i}return this.uint32(r)._push(ft,r,e)};c.prototype.string=function(e){var r=Ae.length(e);return r?this.uint32(r)._push(Ae.write,r,e):this._push(T,1,0)};c.prototype.fork=function(){return this.states=new lt(this),this.head=this.tail=new k(z,0,0),this.len=0,this};c.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new k(z,0,0),this.len=0),this};c.prototype.ldelim=function(){var e=this.head,r=this.tail,i=this.len;return this.reset().uint32(i),i&&(this.tail.next=e.next,this.tail=r,this.len+=i),this};c.prototype.finish=function(){for(var e=this.head.next,r=this.constructor.alloc(this.len),i=0;e;)e.fn(e.val,r,i),i+=e.len,e=e.next;return r};c._configure=function(t){j=t,c.create=Ve(),j._configure()}});var xe=d((Vt,Re)=>{"use strict";Re.exports=E;var Se=H();(E.prototype=Object.create(Se.prototype)).constructor=E;var v=V();function E(){Se.call(this)}E._configure=function(){E.alloc=v._Buffer_allocUnsafe,E.writeBytesBuffer=v.Buffer&&v.Buffer.prototype instanceof Uint8Array&&v.Buffer.prototype.set.name==="set"?function(e,r,i){r.set(e,i)}:function(e,r,i){if(e.copy)e.copy(r,i,0,e.length);else for(var n=0;n<e.length;)r[i++]=e[n++]}};E.prototype.bytes=function(e){v.isString(e)&&(e=v._Buffer_from(e,"base64"));var r=e.length>>>0;return this.uint32(r),r&&this._push(E.writeBytesBuffer,r,e),this};function ht(t,e,r){t.length<40?v.utf8.write(t,e,r):e.utf8Write?e.utf8Write(t,r):e.write(t,r)}E.prototype.string=function(e){var r=v.Buffer.byteLength(e);return this.uint32(r),r&&this._push(ht,r,e),this};E._configure()});var Z=d((vt,qe)=>{"use strict";qe.exports=p;var w=V(),J,ke=w.LongBits,ct=w.utf8;function B(t,e){return RangeError("index out of range: "+t.pos+" + "+(e||1)+" > "+t.len)}function p(t){this.buf=t,this.pos=0,this.len=t.length}var Fe=typeof Uint8Array<"u"?function(e){if(e instanceof Uint8Array||Array.isArray(e))return new p(e);throw Error("illegal buffer")}:function(e){if(Array.isArray(e))return new p(e);throw Error("illegal buffer")},Ce=function(){return w.Buffer?function(r){return(p.create=function(n){return w.Buffer.isBuffer(n)?new J(n):Fe(n)})(r)}:Fe};p.create=Ce();p.prototype._slice=w.Array.prototype.subarray||w.Array.prototype.slice;p.prototype.uint32=function(){var e=4294967295;return function(){if(e=(this.buf[this.pos]&127)>>>0,this.buf[this.pos++]<128||(e=(e|(this.buf[this.pos]&127)<<7)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&127)<<14)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&127)<<21)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&15)<<28)>>>0,this.buf[this.pos++]<128))return e;if((this.pos+=5)>this.len)throw this.pos=this.len,B(this,10);return e}}();p.prototype.int32=function(){return this.uint32()|0};p.prototype.sint32=function(){var e=this.uint32();return e>>>1^-(e&1)|0};function P(){var t=new ke(0,0),e=0;if(this.len-this.pos>4){for(;e<4;++e)if(t.lo=(t.lo|(this.buf[this.pos]&127)<<e*7)>>>0,this.buf[this.pos++]<128)return t;if(t.lo=(t.lo|(this.buf[this.pos]&127)<<28)>>>0,t.hi=(t.hi|(this.buf[this.pos]&127)>>4)>>>0,this.buf[this.pos++]<128)return t;e=0}else{for(;e<3;++e){if(this.pos>=this.len)throw B(this);if(t.lo=(t.lo|(this.buf[this.pos]&127)<<e*7)>>>0,this.buf[this.pos++]<128)return t}return t.lo=(t.lo|(this.buf[this.pos++]&127)<<e*7)>>>0,t}if(this.len-this.pos>4){for(;e<5;++e)if(t.hi=(t.hi|(this.buf[this.pos]&127)<<e*7+3)>>>0,this.buf[this.pos++]<128)return t}else for(;e<5;++e){if(this.pos>=this.len)throw B(this);if(t.hi=(t.hi|(this.buf[this.pos]&127)<<e*7+3)>>>0,this.buf[this.pos++]<128)return t}throw Error("invalid varint encoding")}p.prototype.bool=function(){return this.uint32()!==0};function W(t,e){return(t[e-4]|t[e-3]<<8|t[e-2]<<16|t[e-1]<<24)>>>0}p.prototype.fixed32=function(){if(this.pos+4>this.len)throw B(this,4);return W(this.buf,this.pos+=4)};p.prototype.sfixed32=function(){if(this.pos+4>this.len)throw B(this,4);return W(this.buf,this.pos+=4)|0};function Le(){if(this.pos+8>this.len)throw B(this,8);return new ke(W(this.buf,this.pos+=4),W(this.buf,this.pos+=4))}p.prototype.float=function(){if(this.pos+4>this.len)throw B(this,4);var e=w.float.readFloatLE(this.buf,this.pos);return this.pos+=4,e};p.prototype.double=function(){if(this.pos+8>this.len)throw B(this,4);var e=w.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,e};p.prototype.bytes=function(){var e=this.uint32(),r=this.pos,i=this.pos+e;if(i>this.len)throw B(this,e);if(this.pos+=e,Array.isArray(this.buf))return this.buf.slice(r,i);if(r===i){var n=w.Buffer;return n?n.alloc(0):new this.buf.constructor(0)}return this._slice.call(this.buf,r,i)};p.prototype.string=function(){var e=this.bytes();return ct.read(e,0,e.length)};p.prototype.skip=function(e){if(typeof e=="number"){if(this.pos+e>this.len)throw B(this,e);this.pos+=e}else do if(this.pos>=this.len)throw B(this);while(this.buf[this.pos++]&128);return this};p.prototype.skipType=function(t){switch(t){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;(t=this.uint32()&7)!==4;)this.skipType(t);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+t+" at offset "+this.pos)}return this};p._configure=function(t){J=t,p.create=Ce(),J._configure();var e=w.Long?"toLong":"toNumber";w.merge(p.prototype,{int64:function(){return P.call(this)[e](!1)},uint64:function(){return P.call(this)[e](!0)},sint64:function(){return P.call(this).zzDecode()[e](!1)},fixed64:function(){return Le.call(this)[e](!0)},sfixed64:function(){return Le.call(this)[e](!1)}})}});var Me=d((St,We)=>{"use strict";We.exports=x;var De=Z();(x.prototype=Object.create(De.prototype)).constructor=x;var Oe=V();function x(t){De.call(this,t)}x._configure=function(){Oe.Buffer&&(x.prototype._slice=Oe.Buffer.prototype.slice)};x.prototype.string=function(){var e=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+e,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+e,this.len))};x._configure()});var je=d((Rt,Ie)=>{"use strict";Ie.exports=C;var X=V();(C.prototype=Object.create(X.EventEmitter.prototype)).constructor=C;function C(t,e,r){if(typeof t!="function")throw TypeError("rpcImpl must be a function");X.EventEmitter.call(this),this.rpcImpl=t,this.requestDelimited=Boolean(e),this.responseDelimited=Boolean(r)}C.prototype.rpcCall=function t(e,r,i,n,s){if(!n)throw TypeError("request must be specified");var u=this;if(!s)return X.asPromise(t,u,e,r,i,n);if(!u.rpcImpl){setTimeout(function(){s(Error("already ended"))},0);return}try{return u.rpcImpl(e,r[u.requestDelimited?"encodeDelimited":"encode"](n).finish(),function(o,l){if(o)return u.emit("error",o,e),s(o);if(l===null){u.end(!0);return}if(!(l instanceof i))try{l=i[u.responseDelimited?"decodeDelimited":"decode"](l)}catch(h){return u.emit("error",h,e),s(h)}return u.emit("data",l,e),s(null,l)})}catch(a){u.emit("error",a,e),setTimeout(function(){s(a)},0);return}};C.prototype.end=function(e){return this.rpcImpl&&(e||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}});var ze=d(Ne=>{"use strict";var pt=Ne;pt.Service=je()});var Ue=d((Ft,Te)=>{"use strict";Te.exports={}});var Pe=d(He=>{"use strict";var g=He;g.build="minimal";g.Writer=H();g.BufferWriter=xe();g.Reader=Z();g.BufferReader=Me();g.util=V();g.rpc=ze();g.roots=Ue();g.configure=$e;function $e(){g.util._configure(),g.Writer._configure(g.BufferWriter),g.Reader._configure(g.BufferReader)}$e()});var Ze=d((kt,Je)=>{"use strict";Je.exports=Pe()});var G=nt(Ze(),1),Xe={options:{java_package:"com.smile.spotify.model"},nested:{BootstrapResponse:{oneofs:{ucsResponse:{oneof:["ucsResponseV0","trialsFacadeResponseV1"]}},fields:{ucsResponseV0:{type:"UcsResponseWrapperV0",id:2},trialsFacadeResponseV1:{type:"TrialsFacadeResponseWrapperV1",id:3}}},UcsResponseWrapperV0:{oneofs:{result:{oneof:["success","error"]}},fields:{success:{type:"UcsResponseWrapperSuccess",id:1},error:{type:"UcsResponseWrapperError",id:2}}},UcsResponseWrapperSuccess:{fields:{customization:{type:"UcsResponseWrapper",id:1}}},UcsResponseWrapperError:{fields:{errorCode:{type:"int32",id:1},message:{type:"string",id:2},logId:{type:"string",id:3}}},TrialsFacadeResponseWrapperV1:{oneofs:{result:{oneof:["success","error"]}},fields:{success:{type:"TrialsFacadeResponseWrapperSuccess",id:1},error:{type:"TrialsFacadeResponseWrapperError",id:2}}},TrialsFacadeResponseWrapperError:{fields:{errorCode:{type:"int32",id:1},message:{type:"string",id:2},logId:{type:"string",id:3}}},TrialsFacadeResponseWrapperSuccess:{fields:{field1:{type:"int32",id:1}}},UcsResponseWrapper:{oneofs:{result:{oneof:["success","error"]}},fields:{success:{type:"UcsResponse",id:1},error:{type:"Error",id:2}}},UcsResponse:{oneofs:{resolveResult:{oneof:["resolveSuccess","resolveError"]},accountAttributesResult:{oneof:["accountAttributesSuccess","accountAttributesError"]}},fields:{resolveSuccess:{type:"ResolveResponse",id:1},resolveError:{type:"Error",id:2},accountAttributesSuccess:{type:"AccountAttributesResponse",id:3},accountAttributesError:{type:"Error",id:4},fetchTimeMillis:{type:"int64",id:5}}},ResolveResponse:{fields:{configuration:{type:"Configuration",id:1}}},Configuration:{fields:{configurationAssignmentId:{type:"string",id:1},fetchTimeMillis:{type:"int64",id:2},assignedValues:{rule:"repeated",type:"AssignedValue",id:3},policySnapshotId:{type:"int64",id:4}}},AssignedValue:{oneofs:{structuredValue:{oneof:["boolValue","intValue","enumValue"]}},fields:{propertyId:{type:"Identifier",id:1},metadata:{type:"Metadata",id:2},boolValue:{type:"BoolValue",id:3},intValue:{type:"IntValue",id:4},enumValue:{type:"EnumValue",id:5}}},Identifier:{fields:{scope:{type:"string",id:1},name:{type:"string",id:2}}},Metadata:{fields:{policyId:{type:"int64",id:1},externalRealm:{type:"string",id:2},externalRealmId:{type:"int64",id:3}}},BoolValue:{fields:{value:{type:"bool",id:1}}},EnumValue:{fields:{value:{type:"string",id:1}}},IntValue:{fields:{value:{type:"int32",id:1}}},AccountAttributesResponse:{fields:{accountAttributes:{keyType:"string",type:"AccountAttribute",id:1}}},AccountAttribute:{oneofs:{value:{oneof:["boolValue","longValue","stringValue"]}},fields:{boolValue:{type:"bool",id:2},longValue:{type:"int64",id:3},stringValue:{type:"string",id:4}}},Error:{fields:{errorCode:{type:"int32",id:1},errorMessage:{type:"string",id:2}}}}},Ge=$response.status?$response.status:$response.statusCode;if(Ge!==200)console.log(`$response.:${Ge}`),$done({});else{let t=$request.url,e=$request.method,r="POST",i=typeof $task<"u",n=i?new Uint8Array($response.bodyBytes):$response.body,s,u;if(t.includes("bootstrap/v1/bootstrap")&&e===r){let a=G.default.fromJSON(Xe).lookupType("BootstrapResponse"),o=a.decode(n);s=o.ucsResponseV0.success.customization.success.accountAttributesSuccess.accountAttributes,Qe(s),u=a.encode(o).finish(),console.log("bootstrap")}else if(t.includes("user-customization-service/v1/customize")&&e===r){let a=G.default.fromJSON(Xe).lookupType("UcsResponseWrapper"),o=a.decode(n);s=o.success.accountAttributesSuccess.accountAttributes,Qe(s),u=a.encode(o).finish(),console.log("customize")}else $notification.post("spotify premium","\u0110\u01B0\u1EDDng d\u1EABn/ph\u01B0\u01A1ng ph\xE1p y\xEAu c\u1EA7u kh\xF4ng kh\u1EDBp:",e+","+t);i?$done({bodyBytes:u.buffer.slice(u.byteOffset,u.byteLength+u.byteOffset)}):$done({body:u})}function Qe(t){t["player-license"]={stringValue:"premium"},t.mobile={boolValue:!0},t["streaming-rules"]={stringValue:""},t["financial-product"]={stringValue:"pr:premium,tc:0"},t["license-acceptance-grace-days"]={longValue:30},t["mobile-login"]={boolValue:!0},t.name={stringValue:"Premium++"},t["on-demand"]={boolValue:!0},t.ads={boolValue:!1},t.catalogue={stringValue:"premium"},t["high-bitrate"]={boolValue:!0},t.libspotify={boolValue:!0},t["nft-disabled"]={stringValue:"1"},t.shuffle={boolValue:!1},t["audio-quality"]={stringValue:"1"},t.offline={boolValue:!0},t["pause-after"]={longValue:0},t.can_use_superbird={boolValue:!0},t.type={stringValue:"premium"},t["loudness-levels"]={stringValue:"1:-9.0,0.0,3.0:-2.0"},t["payments-initial-campaign"]={stringValue:"web"},t["shuffle-eligible"]={boolValue:!0},t.unrestricted={boolValue:!0},t["com.spotify.madprops.use.ucs.product.state"]={boolValue:!0},delete t["ad-use-adlogic"],delete t["ad-catalogues"]}})();
