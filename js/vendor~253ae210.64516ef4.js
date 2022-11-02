(window.webpackJsonp=window.webpackJsonp||[]).push([["vendor~253ae210"],{"00ee":function(t,e,n){var r={};r[n("b622")("toStringTag")]="z",t.exports="[object z]"===String(r)},"04f8":function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"06cf":function(t,e,n){var r=n("83ab"),i=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),h=n("0cfb"),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=a(t),e=c(e),h)try{return l(t,e)}catch(t){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},"07fa":function(t,e,n){var r=n("50c4");t.exports=function(t){return r(t.length)}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Xo})),n.d(e,"b",(function(){return Os})),n.d(e,"c",(function(){return Yo})),n.d(e,"d",(function(){return Ns})),n.d(e,"e",(function(){return zo})),n.d(e,"f",(function(){return Go})),n.d(e,"g",(function(){return Hs})),n.d(e,"h",(function(){return No})),n.d(e,"i",(function(){return Do})),n.d(e,"j",(function(){return So})),n.d(e,"k",(function(){return na})),n.d(e,"l",(function(){return Wo})),n.d(e,"m",(function(){return Lo})),n.d(e,"n",(function(){return Qo})),n.d(e,"o",(function(){return ko})),n.d(e,"p",(function(){return ra}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.12.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new s.b("@firebase/firestore");function d(){return l.logLevel}function f(t,...e){if(l.logLevel<=s.a.DEBUG){const n=e.map(g);l.debug(`Firestore (${h}): ${t}`,...n)}}function p(t,...e){if(l.logLevel<=s.a.ERROR){const n=e.map(g);l.error(`Firestore (${h}): ${t}`,...n)}}function m(t,...e){if(l.logLevel<=s.a.WARN){const n=e.map(g);l.warn(`Firestore (${h}): ${t}`,...n)}}function g(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function v(t,e){t||y()}function w(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends o.c{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class _{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class S{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class A{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new I;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new I,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new I)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new T(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new u(t)}}class k{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=u.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(v(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class C{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}getToken(){return Promise.resolve(new k(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message);const n=t.token!==this.A;return this.A=t.token,f("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(v("string"==typeof t.token),this.A=t.token,new D(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=N(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function L(t,e){return t<e?-1:t>e?1:0}function M(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new E(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new E(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new E(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return x.fromMillis(Date.now())}static fromDate(t){return x.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new x(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?L(this.nanoseconds,t.nanoseconds):L(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.timestamp=t}static fromTimestamp(t){return new P(t)}static min(){return new P(new x(0,0))}static max(){return new P(new x(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===U.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof U?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class V extends U{construct(t,e,n){return new V(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new E(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new V(e)}static emptyPath(){return new V([])}}const F=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class j extends U{construct(t,e,n){return new j(t,e,n)}static isValidIdentifier(t){return F.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),j.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new j(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new E(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new E(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new E(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new E(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new j(e)}static emptyPath(){return new j([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.path=t}static fromPath(t){return new $(V.fromString(t))}static fromName(t){return new $(V.fromString(t).popFirst(5))}static empty(){return new $(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===V.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return V.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new $(new V(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}B.UNKNOWN_ID=-1;function q(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=P.fromTimestamp(1e9===r?new x(n+1,0):new x(n,r));return new z(i,$.empty(),e)}function H(t){return new z(t.readTime,t.key,-1)}class z{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new z(P.min(),$.empty(),-1)}static max(){return new z(P.max(),$.empty(),-1)}}function K(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=$.comparator(t.documentKey,e.documentKey),0!==n?n:L(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==G)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Y((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Y?e:Y.resolve(e)}catch(t){return Y.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Y.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Y.reject(e)}static resolve(t){return new Y((e,n)=>{e(t)})}static reject(t){return new Y((e,n)=>{n(t)})}static waitFor(t){return new Y((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=Y.resolve(!1);for(const n of t)e=e.next(t=>t?Y.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new Y((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next(t=>{s[c]=t,++o,o===i&&n(s)},t=>r(t))}})}static doWhile(t,e){return new Y((n,r)=>{const i=()=>{!0===t()?e().next(()=>{i()},r):n()};i()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function tt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function et(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */J.at=-1;class nt{constructor(t,e){this.comparator=t,this.root=e||it.EMPTY}insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,it.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,it.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new rt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new rt(this.root,t,this.comparator,!1)}getReverseIterator(){return new rt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new rt(this.root,t,this.comparator,!0)}}class rt{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class it{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:it.RED,this.left=null!=r?r:it.EMPTY,this.right=null!=i?i:it.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new it(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return it.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1,it.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,r,i){return this}insert(t,e,n){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ot(this.data.getIterator())}getIteratorFrom(t){return new ot(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof st))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class ot{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at{constructor(t){this.fields=t,t.sort(j.comparator)}static empty(){return new at([])}unionWith(t){let e=new st(j.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new at(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return M(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new ct(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return L(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const ut=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ht(t){if(v(!!t),"string"==typeof t){let e=0;const n=ut.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:lt(t.seconds),nanos:lt(t.nanos)}}function lt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function dt(t){return"string"==typeof t?ct.fromBase64String(t):ct.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function pt(t){const e=ht(t.mapValue.fields.__local_write_time__.timestampValue);return new x(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class gt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new gt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof gt&&t.projectId===this.projectId&&t.database===this.database}}function yt(t){return null==t}function vt(t){return 0===t&&1/t==-1/0}function wt(t){return"number"==typeof t&&Number.isInteger(t)&&!vt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Et(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ft(t)?4:Mt(t)?9007199254740991:10:y()}function It(t,e){if(t===e)return!0;const n=Et(t);if(n!==Et(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pt(t).isEqual(pt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ht(t.timestampValue),r=ht(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return dt(t.bytesValue).isEqual(dt(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return lt(t.geoPointValue.latitude)===lt(e.geoPointValue.latitude)&&lt(t.geoPointValue.longitude)===lt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return lt(t.integerValue)===lt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=lt(t.doubleValue),r=lt(e.doubleValue);return n===r?vt(n)===vt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return M(t.arrayValue.values||[],e.arrayValue.values||[],It);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Z(n)!==Z(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!It(n[t],r[t])))return!1;return!0}(t,e);default:return y()}}function Tt(t,e){return void 0!==(t.values||[]).find(t=>It(t,e))}function _t(t,e){if(t===e)return 0;const n=Et(t),r=Et(e);if(n!==r)return L(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return L(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=lt(t.integerValue||t.doubleValue),r=lt(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return St(t.timestampValue,e.timestampValue);case 4:return St(pt(t),pt(e));case 5:return L(t.stringValue,e.stringValue);case 6:return function(t,e){const n=dt(t),r=dt(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=L(n[t],r[t]);if(0!==e)return e}return L(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=L(lt(t.latitude),lt(e.latitude));return 0!==n?n:L(lt(t.longitude),lt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=_t(n[t],r[t]);if(e)return e}return L(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===bt.mapValue&&e===bt.mapValue)return 0;if(t===bt.mapValue)return 1;if(e===bt.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=L(r[t],s[t]);if(0!==e)return e;const o=_t(n[r[t]],i[s[t]]);if(0!==o)return o}return L(r.length,s.length)}(t.mapValue,e.mapValue);default:throw y()}}function St(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return L(t,e);const n=ht(t),r=ht(e),i=L(n.seconds,r.seconds);return 0!==i?i:L(n.nanos,r.nanos)}function At(t){return function t(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(t){const e=ht(t);return`time(${e.seconds},${e.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?dt(e.bytesValue).toBase64():"referenceValue"in e?(r=e.referenceValue,$.fromName(r).toString()):"geoPointValue"in e?`geo(${(n=e.geoPointValue).latitude},${n.longitude})`:"arrayValue"in e?function(e){let n="[",r=!0;for(const i of e.values||[])r?r=!1:n+=",",n+=t(i);return n+"]"}(e.arrayValue):"mapValue"in e?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",i=!0;for(const s of n)i?i=!1:r+=",",r+=`${s}:${t(e.fields[s])}`;return r+"}"}(e.mapValue):y();var n,r}(t)}function kt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ct(t){return!!t&&"integerValue"in t}function Dt(t){return!!t&&"arrayValue"in t}function Ot(t){return!!t&&"nullValue"in t}function Nt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rt(t){return!!t&&"mapValue"in t}function Lt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return tt(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Lt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Lt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Mt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt{constructor(t){this.value=t}static empty(){return new xt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Rt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Lt(e)}setAll(t){let e=j.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Lt(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Rt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return It(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Rt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){tt(e,(e,n)=>t[e]=n);for(const e of n)delete t[e]}clone(){return new xt(Lt(this.value))}}function Pt(t){const e=[];return tt(t.fields,(t,n)=>{const r=new j([t]);if(Rt(n)){const t=Pt(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new at(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ut{constructor(t,e,n,r,i,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(t){return new Ut(t,0,P.min(),P.min(),xt.empty(),0)}static newFoundDocument(t,e,n){return new Ut(t,1,e,P.min(),n,0)}static newNoDocument(t,e){return new Ut(t,2,e,P.min(),xt.empty(),0)}static newUnknownDocument(t,e){return new Ut(t,3,e,P.min(),xt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ut&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ht=null}}function Ft(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Vt(t,e,n,r,i,s,o)}function jt(t){const e=w(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>{return(e=t).field.canonicalString()+e.op.toString()+At(e.value);var e}).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),yt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>At(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>At(t)).join(",")),e.ht=t}return e.ht}function $t(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!te(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!It(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ne(t.startAt,e.startAt)&&ne(t.endAt,e.endAt)}function Bt(t){return $.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class qt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new Ht(t,e,n):"array-contains"===e?new Wt(t,n):"in"===e?new Qt(t,n):"not-in"===e?new Yt(t,n):"array-contains-any"===e?new Xt(t,n):new qt(t,e,n)}static lt(t,e,n){return"in"===e?new zt(t,n):new Kt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(_t(e,this.value)):null!==e&&Et(this.value)===Et(e)&&this.ft(_t(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ht extends qt{constructor(t,e,n){super(t,e,n),this.key=$.fromName(n.referenceValue)}matches(t){const e=$.comparator(t.key,this.key);return this.ft(e)}}class zt extends qt{constructor(t,e){super(t,"in",e),this.keys=Gt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Kt extends qt{constructor(t,e){super(t,"not-in",e),this.keys=Gt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Gt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>$.fromName(t.referenceValue))}class Wt extends qt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Dt(e)&&Tt(e.arrayValue,this.value)}}class Qt extends qt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Tt(this.value.arrayValue,e)}}class Yt extends qt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Tt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Tt(this.value.arrayValue,e)}}class Xt extends qt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Dt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>Tt(this.value.arrayValue,t))}}class Jt{constructor(t,e){this.position=t,this.inclusive=e}}class Zt{constructor(t,e="asc"){this.field=t,this.dir=e}}function te(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ee(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?$.comparator($.fromName(o.referenceValue),n.key):_t(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ne(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!It(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function ie(t,e,n,r,i,s,o,a){return new re(t,e,n,r,i,s,o,a)}function se(t){return new re(t)}function oe(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ae(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ce(t){for(const e of t.filters)if(e.dt())return e.field;return null}function ue(t){return null!==t.collectionGroup}function he(t){const e=w(t);if(null===e._t){e._t=[];const t=ce(e),n=ae(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new Zt(t)),e._t.push(new Zt(j.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Zt(j.keyField(),t))}}}return e._t}function le(t){const e=w(t);if(!e.wt)if("F"===e.limitType)e.wt=Ft(e.path,e.collectionGroup,he(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of he(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Zt(n.field,e))}const n=e.endAt?new Jt(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Jt(e.startAt.position,e.startAt.inclusive):null;e.wt=Ft(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.wt}function de(t,e,n){return new re(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fe(t,e){return $t(le(t),le(e))&&t.limitType===e.limitType}function pe(t){return`${jt(le(t))}|lt:${t.limitType}`}function me(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${At(e.value)}`;var e}).join(", ")}]`),yt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>At(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>At(t)).join(",")),`Target(${e})`}(le(t))}; limitType=${t.limitType})`}function ge(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):$.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=ee(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,he(t),e))&&!(t.endAt&&!function(t,e,n){const r=ee(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,he(t),e))}(t,e)}function ye(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ve(t){return(e,n)=>{let r=!1;for(const i of he(t)){const t=we(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function we(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?_t(r,i):y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vt(e)?"-0":e}}function Ee(t){return{integerValue:""+t}}function Ie(t,e){return wt(e)?Ee(e):be(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(){this._=void 0}}function _e(t,e,n){return t instanceof ke?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ce?De(t,e):t instanceof Oe?Ne(t,e):function(t,e){const n=Ae(t,e),r=Le(n)+Le(t.yt);return Ct(n)&&Ct(t.yt)?Ee(r):be(t.It,r)}(t,e)}function Se(t,e,n){return t instanceof Ce?De(t,e):t instanceof Oe?Ne(t,e):n}function Ae(t,e){return t instanceof Re?Ct(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ke extends Te{}class Ce extends Te{constructor(t){super(),this.elements=t}}function De(t,e){const n=Me(e);for(const e of t.elements)n.some(t=>It(t,e))||n.push(e);return{arrayValue:{values:n}}}class Oe extends Te{constructor(t){super(),this.elements=t}}function Ne(t,e){let n=Me(e);for(const e of t.elements)n=n.filter(t=>!It(t,e));return{arrayValue:{values:n}}}class Re extends Te{constructor(t,e){super(),this.It=t,this.yt=e}}function Le(t){return lt(t.integerValue||t.doubleValue)}function Me(t){return Dt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t,e){this.field=t,this.transform=e}}class Pe{constructor(t,e){this.version=t,this.transformResults=e}}class Ue{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ue}static exists(t){return new Ue(void 0,t)}static updateTime(t){return new Ue(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ve(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Fe{}function je(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Ye(t.key,Ue.none()):new ze(t.key,t.data,Ue.none());{const n=t.data,r=xt.empty();let i=new st(j.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Ke(t.key,r,new at(i.toArray()),Ue.none())}}function $e(t,e,n){t instanceof ze?function(t,e,n){const r=t.value.clone(),i=We(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ke?function(t,e,n){if(!Ve(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=We(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ge(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Be(t,e,n,r){return t instanceof ze?function(t,e,n,r){if(!Ve(t.precondition,e))return n;const i=t.value.clone(),s=Qe(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ke?function(t,e,n,r){if(!Ve(t.precondition,e))return n;const i=Qe(t.fieldTransforms,r,e),s=e.data;return s.setAll(Ge(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):function(t,e,n){return Ve(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function qe(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Ae(r.transform,t||null);null!=i&&(null===n&&(n=xt.empty()),n.set(r.field,i))}return n||null}function He(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&M(t,e,(t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ce&&e instanceof Ce||t instanceof Oe&&e instanceof Oe?M(t.elements,e.elements,It):t instanceof Re&&e instanceof Re?It(t.yt,e.yt):t instanceof ke&&e instanceof ke}(t.transform,e.transform)}(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ze extends Fe{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ke extends Fe{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ge(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function We(t,e,n){const r=new Map;v(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Se(o,a,n[i]))}return r}function Qe(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,_e(t,s,e))}return r}class Ye extends Fe{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xe extends Fe{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,tn;function en(t){switch(t){default:return y();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function nn(t){if(void 0===t)return p("GRPC error has no .code"),b.UNKNOWN;switch(t){case Ze.OK:return b.OK;case Ze.CANCELLED:return b.CANCELLED;case Ze.UNKNOWN:return b.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return b.INTERNAL;case Ze.UNAVAILABLE:return b.UNAVAILABLE;case Ze.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Ze.NOT_FOUND:return b.NOT_FOUND;case Ze.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Ze.ABORTED:return b.ABORTED;case Ze.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Ze.DATA_LOSS:return b.DATA_LOSS;default:return y()}}(tn=Ze||(Ze={}))[tn.OK=0]="OK",tn[tn.CANCELLED=1]="CANCELLED",tn[tn.UNKNOWN=2]="UNKNOWN",tn[tn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tn[tn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tn[tn.NOT_FOUND=5]="NOT_FOUND",tn[tn.ALREADY_EXISTS=6]="ALREADY_EXISTS",tn[tn.PERMISSION_DENIED=7]="PERMISSION_DENIED",tn[tn.UNAUTHENTICATED=16]="UNAUTHENTICATED",tn[tn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tn[tn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tn[tn.ABORTED=10]="ABORTED",tn[tn.OUT_OF_RANGE=11]="OUT_OF_RANGE",tn[tn.UNIMPLEMENTED=12]="UNIMPLEMENTED",tn[tn.INTERNAL=13]="INTERNAL",tn[tn.UNAVAILABLE=14]="UNAVAILABLE",tn[tn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){tt(this.inner,(e,n)=>{for(const[e,r]of n)t(e,r)})}isEmpty(){return et(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new nt($.comparator);function on(){return sn}const an=new nt($.comparator);function cn(...t){let e=an;for(const n of t)e=e.insert(n.key,n);return e}function un(t){let e=an;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function hn(){return dn()}function ln(){return dn()}function dn(){return new rn(t=>t.toString(),(t,e)=>t.isEqual(e))}const fn=new nt($.comparator),pn=new st($.comparator);function mn(...t){let e=pn;for(const n of t)e=e.add(n);return e}const gn=new st(L);function yn(){return gn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,wn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new vn(P.min(),r,yn(),on(),mn())}}class wn{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new wn(n,e,mn(),mn(),mn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e,n,r){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=r}}class En{constructor(t,e){this.targetId=t,this.At=e}}class In{constructor(t,e,n=ct.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Tn{constructor(){this.Rt=0,this.bt=An(),this.Pt=ct.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=mn(),e=mn(),n=mn();return this.bt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:y()}}),new wn(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=An()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class _n{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=on(),this.qt=Sn(),this.Kt=new st(L)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach((t,n)=>{this.Ht(n)&&e(n)})}Yt(t){const e=t.targetId,n=t.At.count,r=this.Xt(e);if(r){const t=r.target;if(Bt(t))if(0===n){const n=new $(t.path);this.jt(e,n,Ut.newNoDocument(n,P.min()))}else v(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach((n,r)=>{const i=this.Xt(r);if(i){if(n.current&&Bt(i.target)){const e=new $(i.target.path);null!==this.Ut.get(e)||this.ee(r,e)||this.jt(r,e,Ut.newNoDocument(e,t))}n.Dt&&(e.set(r,n.xt()),n.Nt())}});let n=mn();this.qt.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.Xt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.Ut.forEach((e,n)=>n.setReadTime(t));const r=new vn(t,e,this.Kt,this.Ut,n);return this.Ut=on(),this.qt=Sn(),this.Kt=new st(L),r}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const r=this.zt(t);this.ee(t,e)?r.kt(e,1):r.Ot(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let e=this.Lt.get(t);return e||(e=new Tn,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new st(L),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Tn),this.Bt.getRemoteKeysForTarget(t).forEach(e=>{this.jt(t,e,null)})}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function Sn(){return new nt($.comparator)}function An(){return new nt($.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn={asc:"ASCENDING",desc:"DESCENDING"},Cn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Dn{constructor(t,e){this.databaseId=t,this.gt=e}}function On(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nn(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Rn(t,e){return On(t,e.toTimestamp())}function Ln(t){return v(!!t),P.fromTimestamp(function(t){const e=ht(t);return new x(e.seconds,e.nanos)}(t))}function Mn(t,e){return function(t){return new V(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function xn(t){const e=V.fromString(t);return v(tr(e)),e}function Pn(t,e){return Mn(t.databaseId,e.path)}function Un(t,e){const n=xn(e);if(n.get(1)!==t.databaseId.projectId)throw new E(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $($n(n))}function Vn(t,e){return Mn(t.databaseId,e)}function Fn(t){const e=xn(t);return 4===e.length?V.emptyPath():$n(e)}function jn(t){return new V(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $n(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Bn(t,e,n){return{name:Pn(t,e),fields:n.value.mapValue.fields}}function qn(t,e){let n;if(e instanceof ze)n={update:Bn(t,e.key,e.value)};else if(e instanceof Ye)n={delete:Pn(t,e.key)};else if(e instanceof Ke)n={update:Bn(t,e.key,e.data),updateMask:Zn(e.fieldMask)};else{if(!(e instanceof Xe))return y();n={verify:Pn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ke)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ce)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Oe)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Re)return{fieldPath:e.field.canonicalString(),increment:n.yt};throw y()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Rn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:y()}(t,e.precondition)),n}function Hn(t,e){return{documents:[Vn(t,e.path)]}}function zn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Vn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Vn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(Nt(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NAN"}};if(Ot(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Nt(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NOT_NAN"}};if(Ot(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qn(t.field),op:Wn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Qn(t.field),direction:Gn(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.gt||yt(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Kn(t){let e=Fn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){v(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function t(e){return e?void 0!==e.unaryFilter?[Jn(e)]:void 0!==e.fieldFilter?[Xn(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>t(e)).reduce((t,e)=>t.concat(e)):y():[]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Zt(Yn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,yt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Jt(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Jt(n,e)}(n.endAt)),ie(e,i,o,s,a,"F",c,u)}function Gn(t){return kn[t]}function Wn(t){return Cn[t]}function Qn(t){return{fieldPath:t.canonicalString()}}function Yn(t){return j.fromServerFormat(t.fieldPath)}function Xn(t){return qt.create(Yn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function Jn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Yn(t.unaryFilter.field);return qt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Yn(t.unaryFilter.field);return qt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Yn(t.unaryFilter.field);return qt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Yn(t.unaryFilter.field);return qt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function Zn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function tr(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],nr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],rr=nr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ir{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&$e(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Be(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Be(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ln();return this.mutations.forEach(r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=je(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(P.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),mn())}isEqual(t){return this.batchId===t.batchId&&M(this.mutations,t.mutations,(t,e)=>He(t,e))&&M(this.baseMutations,t.baseMutations,(t,e)=>He(t,e))}}class sr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){v(t.mutations.length===n.length);let r=fn;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new sr(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e,n,r,i=P.min(),s=P.min(),o=ct.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new ar(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t){this.re=t}}function ur(t){const e=Kn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?de(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(lt(t.integerValue));else if("doubleValue"in t){const n=lt(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),vt(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(""+(n.seconds||"")),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(dt(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?Mt(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):y()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const t of Object.keys(n))this._e(t,e),this.ae(n[t],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const t of n)this.ae(t,e)}ge(t,e){this.le(e,37),$.fromName(t).path.forEach(t=>{this.le(e,60),this.Ie(t,e)})}le(t,e){t.fe(e)}we(t){t.fe(2)}}hr.Te=new hr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lr{constructor(){this.Ye=new dr}addToCollectionParentIndex(t,e){return this.Ye.add(e),Y.resolve()}getCollectionParents(t,e){return Y.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return Y.resolve()}deleteFieldIndex(t,e){return Y.resolve()}getDocumentsMatchingTarget(t,e){return Y.resolve(null)}getIndexType(t,e){return Y.resolve(0)}getFieldIndexes(t,e){return Y.resolve([])}getNextCollectionGroupToUpdate(t){return Y.resolve(null)}getMinOffset(t,e){return Y.resolve(z.min())}getMinOffsetFromCollectionGroup(t,e){return Y.resolve(z.min())}updateCollectionGroup(t,e,n){return Y.resolve()}updateIndexEntries(t,e){return Y.resolve()}}class dr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new st(V.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new st(V.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class fr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new fr(t,fr.DEFAULT_COLLECTION_PERCENTILE,fr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr.DEFAULT_COLLECTION_PERCENTILE=10,fr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fr.DEFAULT=new fr(41943040,fr.DEFAULT_COLLECTION_PERCENTILE,fr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fr.DISABLED=new fr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pr{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new pr(0)}static vn(){return new pr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr{constructor(){this.changes=new rn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ut.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Y.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gr{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.getBaseDocument(t,e,n))).next(t=>(null!==n&&Be(n.mutation,t,at.empty(),x.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,mn()).next(()=>e))}getLocalViewOfDocuments(t,e,n=mn()){const r=hn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=cn();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=hn();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,mn()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let i=on();const s=dn(),o=dn();return e.forEach((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Ke)?i=i.insert(e.key,e):void 0!==o&&(s.set(e.key,o.mutation.getFieldMask()),Be(o.mutation,e,o.mutation.getFieldMask(),x.now()))}),this.recalculateAndSaveOverlays(t,i).next(t=>(t.forEach((t,e)=>s.set(t,e)),e.forEach((t,e)=>{var n;return o.set(t,new gr(e,null!==(n=s.get(t))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(t,e){const n=dn();let r=new nt((t,e)=>t-e),i=mn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const i of t)i.keys().forEach(t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||at.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||mn()).add(t);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=ln();c.forEach(t=>{if(!i.has(t)){const r=je(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}}),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Y.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n){return function(t){return $.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ue(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Y.resolve(hn());let o=-1,a=i;return s.next(e=>Y.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Y.resolve():this.getBaseDocument(t,e,n).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,i)).next(()=>this.computeViews(t,a,e,mn())).next(t=>({batchId:o,changes:un(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new $(e)).next(t=>{let e=cn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=cn();return this.indexManager.getCollectionParents(t,r).next(s=>Y.forEach(s,s=>{const o=function(t,e){return new re(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId))).next(t=>{t.forEach((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,Ut.newInvalidDocument(n)))});let n=cn();return r.forEach((r,i)=>{const s=t.get(r);void 0!==s&&Be(s.mutation,i,at.empty(),x.now()),ge(e,i)&&(n=n.insert(r,i))}),n})}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Y.resolve(Ut.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return Y.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:Ln(n.createTime)}),Y.resolve()}getNamedQuery(t,e){return Y.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:ur(t.bundledQuery),readTime:Ln(t.readTime)}}(e)),Y.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.overlays=new nt($.comparator),this.es=new Map}getOverlay(t,e){return Y.resolve(this.overlays.get(e))}getOverlays(t,e){const n=hn();return Y.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.ue(t,e,r)}),Y.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.es.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.es.delete(n)),Y.resolve()}getOverlaysForCollection(t,e,n){const r=hn(),i=e.length+1,s=new $(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Y.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new nt((t,e)=>t-e);const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=hn(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=hn(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((t,e)=>o.set(t,e)),!(o.size()>=r)););return Y.resolve(o)}ue(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new or(e,n));let i=this.es.get(e);void 0===i&&(i=mn(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.ns=new st(Er.ss),this.rs=new st(Er.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Er(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.cs(new Er(t,e))}hs(t,e){t.forEach(t=>this.removeReference(t,e))}ls(t){const e=new $(new V([])),n=new Er(e,t),r=new Er(e,t+1),i=[];return this.rs.forEachInRange([n,r],t=>{this.cs(t),i.push(t.key)}),i}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new $(new V([])),n=new Er(e,t),r=new Er(e,t+1);let i=mn();return this.rs.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Er(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Er{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return $.comparator(t.key,e.key)||L(t._s,e._s)}static os(t,e){return L(t._s,e._s)||$.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new st(Er.ss)}checkEmpty(t){return Y.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ir(i,e,n,r);this.mutationQueue.push(s);for(const e of r)this.gs=this.gs.add(new Er(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Y.resolve(s)}lookupMutationBatch(t,e){return Y.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ps(n),i=r<0?0:r;return Y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Er(e,0),r=new Er(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],t=>{const e=this.ys(t._s);i.push(e)}),Y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new st(L);return e.forEach(t=>{const e=new Er(t,0),r=new Er(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,r],t=>{n=n.add(t._s)})}),Y.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;$.isDocumentKey(i)||(i=i.child(""));const s=new Er(new $(i),0);let o=new st(L);return this.gs.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t._s)),!0)},s),Y.resolve(this.Is(o))}Is(t){const e=[];return t.forEach(t=>{const n=this.ys(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return Y.forEach(e.mutations,r=>{const i=new Er(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.gs=n})}An(t){}containsKey(t,e){const n=new Er(e,0),r=this.gs.firstAfterOrEqual(n);return Y.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Y.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t){this.Es=t,this.docs=new nt($.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Y.resolve(n?n.document.mutableCopy():Ut.newInvalidDocument(e))}getEntries(t,e){let n=on();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Ut.newInvalidDocument(t))}),Y.resolve(n)}getAllFromCollection(t,e,n){let r=on();const i=new $(e.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||K(H(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Y.resolve(r)}getAllFromCollectionGroup(t,e,n,r){y()}As(t,e){return Y.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new _r(this)}getSize(t){return Y.resolve(this.size)}}class _r extends mr{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(n)}),Y.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t){this.persistence=t,this.Rs=new rn(t=>jt(t),$t),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.bs=0,this.Ps=new br,this.targetCount=0,this.vs=pr.Pn()}forEachTarget(t,e){return this.Rs.forEach((t,n)=>e(n)),Y.resolve()}getLastRemoteSnapshotVersion(t){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Y.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),Y.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new pr(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,Y.resolve()}updateTargetData(t,e){return this.Dn(e),Y.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,Y.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Rs.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),Y.waitFor(i).next(()=>r)}getTargetCount(t){return Y.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return Y.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),Y.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),Y.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),Y.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return Y.resolve(n)}containsKey(t,e){return Y.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new J(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Sr(this),this.indexManager=new lr,this.remoteDocumentCache=function(t){return new Tr(t)}(t=>this.referenceDelegate.xs(t)),this.It=new cr(e),this.Ns=new vr(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new wr,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Ir(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const r=new kr(this.Ss.next());return this.referenceDelegate.ks(),n(r).next(t=>this.referenceDelegate.Os(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ms(t,e){return Y.or(Object.values(this.Vs).map(n=>()=>n.containsKey(t,e)))}}class kr extends W{constructor(t){super(),this.currentSequenceNumber=t}}class Cr{constructor(t){this.persistence=t,this.Fs=new br,this.$s=null}static Bs(t){return new Cr(t)}get Ls(){if(this.$s)return this.$s;throw y()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),Y.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),Y.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),Y.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach(t=>this.Ls.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Ls.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.Ls,n=>{const r=$.fromPath(n);return this.Us(t,r).next(t=>{t||e.removeEntry(r,P.min())})}).next(()=>(this.$s=null,e.apply(t)))}updateLimboDocument(t,e){return this.Us(t,e).next(t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())})}xs(t){return 0}Us(t,e){return Y.or([()=>Y.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dr{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=r}static Ci(t,e){let n=mn(),r=mn();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Dr(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.ki(t,e).next(i=>i||this.Oi(t,e,r,n)).next(n=>n||this.Mi(t,e))}ki(t,e){if(oe(e))return Y.resolve(null);let n=le(e);return this.indexManager.getIndexType(t,n).next(r=>0===r?null:(null!==e.limit&&1===r&&(e=de(e,null,"F"),n=le(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(r=>{const i=mn(...r);return this.Ni.getDocuments(t,i).next(r=>this.indexManager.getMinOffset(t,n).next(n=>{const s=this.Fi(e,r);return this.$i(e,s,i,n.readTime)?this.ki(t,de(e,null,"F")):this.Bi(t,s,e,n)}))})))}Oi(t,e,n,r){return oe(e)||r.isEqual(P.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next(i=>{const o=this.Fi(e,i);return this.$i(e,o,n,r)?this.Mi(t,e):(d()<=s.a.DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),me(e)),this.Bi(t,o,e,q(r,-1)))})}Fi(t,e){let n=new st(ve(t));return e.forEach((e,r)=>{ge(t,r)&&(n=n.add(r))}),n}$i(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,e){return d()<=s.a.DEBUG&&f("QueryEngine","Using full collection scan to execute query:",me(e)),this.Ni.getDocumentsMatchingQuery(t,e,z.min())}Bi(t,e,n,r){return this.Ni.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,e,n,r){this.persistence=t,this.Li=e,this.It=r,this.Ui=new nt(L),this.qi=new rn(t=>jt(t),$t),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new yr(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ui))}}function Rr(t,e,n,r){return new Nr(t,e,n,r)}async function Lr(t,e){const n=w(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const i=[],s=[];let o=mn();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({ji:t,removedBatchIds:i,addedBatchIds:s}))})})}function Mr(t){const e=w(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function xr(t,e,n){let r=mn(),i=mn();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=on();return n.forEach((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(P.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{Wi:r,zi:i}})}function Pr(t,e){const n=w(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}function Ur(t,e){const n=w(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.Cs.getTargetData(t,e).next(i=>i?(r=i,Y.resolve(r)):n.Cs.allocateTargetId(t).next(i=>(r=new ar(e,i,0,t.currentSequenceNumber),n.Cs.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Ui.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t})}async function Vr(t,e,n){const r=w(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!X(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function Fr(t,e,n){const r=w(t);let i=P.min(),s=mn();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=w(t),i=r.qi.get(n);return void 0!==i?Y.resolve(r.Ui.get(i)):r.Cs.getTargetData(e,n)}(r,t,le(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Li.getDocumentsMatchingQuery(t,e,n?i:P.min(),n?s:mn())).next(t=>(jr(r,ye(e),t),{documents:t,Hi:s})))}function jr(t,e,n){let r=t.Ki.get(e)||P.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.Ki.set(e,r)}class $r{constructor(){this.activeTargetIds=yn()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Br{constructor(){this.Lr=new $r,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new $r,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,r,i){const s=this.ho(t,e);f("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(t,s,o,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw m("RestConnection",t+" failed with error: ",e,"url: ",s,"request:",n),e})}_o(t,e,n,r,i,s){return this.ao(t,e,n,r,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}ho(t,e){const n=zr[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,r){return new Promise((i,s)=>{const o=new a.g;o.setWithCredentials(!0),o.listenOnce(a.c.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a.a.NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a.a.TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),s(new E(b.DEADLINE_EXCEEDED,"Request time out"));break;case a.a.HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(e)>=0?e:b.UNKNOWN}(t.status);s(new E(e,t.message))}else s(new E(b.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new E(b.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}wo(t,e,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Object(a.h)(),s=Object(a.i)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new a.d({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const c=r.join("");f("Connection","Creating WebChannel: "+c,o);const u=i.createWebChannel(c,o);let h=!1,l=!1;const d=new Kr({Hr:t=>{l?f("Connection","Not sending because WebChannel is closed:",t):(h||(f("Connection","Opening WebChannel transport."),u.open(),h=!0),f("Connection","WebChannel sending:",t),u.send(t))},Jr:()=>u.close()}),p=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return p(u,a.f.EventType.OPEN,()=>{l||f("Connection","WebChannel transport opened.")}),p(u,a.f.EventType.CLOSE,()=>{l||(l=!0,f("Connection","WebChannel transport closed"),d.io())}),p(u,a.f.EventType.ERROR,t=>{l||(l=!0,m("Connection","WebChannel transport errored:",t),d.io(new E(b.UNAVAILABLE,"The operation could not be completed")))}),p(u,a.f.EventType.MESSAGE,t=>{var e;if(!l){const n=t.data[0];v(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){f("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Ze[t];if(void 0!==e)return nn(e)}(t),n=i.message;void 0===e&&(e=b.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,d.io(new E(e,n)),u.close()}else f("Connection","WebChannel received:",n),d.ro(n)}}),p(s,a.b.STAT_EVENT,t=>{t.stat===a.e.PROXY?f("Connection","Detected buffering proxy"):t.stat===a.e.NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t){return new Dn(t,!0)}class Yr{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t,e,n,r,i,s,o,a){this.Hs=t,this.vo=n,this.Vo=r,this.So=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Yr(t,e)}ko(){return 1===this.state||5===this.state||this.Oo()}Oo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&null===this.Co&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(t){this.Uo(),this.stream.send(t)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(t,e){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==t?this.No.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):e&&e.code===b.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Ko(){}auth(){this.state=1;const t=this.Go(this.Do),e=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.Do===e&&this.Qo(t,n)},e=>{t(()=>{const t=new E(b.UNKNOWN,"Fetching auth token failed: "+e.message);return this.jo(t)})})}Qo(t,e){const n=this.Go(this.Do);this.stream=this.Wo(t,e),this.stream.Yr(()=>{n(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(t=>{n(()=>this.jo(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Go(t){return e=>{this.Hs.enqueueAndForget(()=>this.Do===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jr extends Xr{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.It=i}Wo(t,e){return this.So.wo("Listen",t,e)}onMessage(t){this.No.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.gt?(v(void 0===e||"string"==typeof e),ct.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),ct.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?b.UNKNOWN:nn(t.code);return new E(e,t.message||"")}(o);n=new In(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Un(t,r.document.name),s=Ln(r.document.updateTime),o=new xt({mapValue:{fields:r.document.fields}}),a=Ut.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new bn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Un(t,r.document),s=r.readTime?Ln(r.readTime):P.min(),o=Ut.newNoDocument(i,s),a=r.removedTargetIds||[];n=new bn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Un(t,r.document),s=r.removedTargetIds||[];n=new bn([],s,i,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Je(r),s=t.targetId;n=new En(s,i)}}return n}(this.It,t),n=function(t){if(!("targetChange"in t))return P.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?P.min():e.readTime?Ln(e.readTime):P.min()}(t);return this.listener.zo(e,n)}Ho(t){const e={};e.database=jn(this.It),e.addTarget=function(t,e){let n;const r=e.target;return n=Bt(r)?{documents:Hn(t,r)}:{query:zn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Nn(t,e.resumeToken):e.snapshotVersion.compareTo(P.min())>0&&(n.readTime=On(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.It,t);n&&(e.labels=n),this.Lo(e)}Jo(t){const e={};e.database=jn(this.It),e.removeTarget=t,this.Lo(e)}}class Zr extends Xr{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.It=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(t,e){return this.So.wo("Write",t,e)}onMessage(t){if(v(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Yo){this.No.reset();const e=function(t,e){return t&&t.length>0?(v(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?Ln(t.updateTime):Ln(e);return n.isEqual(P.min())&&(n=Ln(e)),new Pe(n,t.transformResults||[])}(t,e))):[]}(t.writeResults,t.commitTime),n=Ln(t.commitTime);return this.listener.tu(n,e)}return v(!t.writeResults||0===t.writeResults.length),this.Yo=!0,this.listener.eu()}nu(){const t={};t.database=jn(this.It),this.Lo(t)}Zo(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>qn(this.It,t))};this.Lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.So=n,this.It=r,this.su=!1}iu(){if(this.su)throw new E(b.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So.ao(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(b.UNKNOWN,t.toString())})}_o(t,e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So._o(t,e,n,i,s,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(b.UNKNOWN,t.toString())})}terminate(){this.su=!0}}class ei{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){0===this.ru&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(t){"Online"===this.state?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu("Connection failed 1 times. Most recent error: "+t.toString()),this.au("Offline")))}set(t){this.fu(),this.ru=0,"Online"===t&&(this.uu=!1),this.au(t)}au(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}hu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(p(e),this.uu=!1):f("OnlineStateTracker",e)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.qr(t=>{n.enqueueAndForget(async()=>{li(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=w(t);e.wu.add(4),await ii(e),e.yu.set("Unknown"),e.wu.delete(4),await ri(e)}(this))})}),this.yu=new ei(n,r)}}async function ri(t){if(li(t))for(const e of t.mu)await e(!0)}async function ii(t){for(const e of t.mu)await e(!1)}function si(t,e){const n=w(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),hi(n)?ui(n):Di(n).Oo()&&ai(n,e))}function oi(t,e){const n=w(t),r=Di(n);n._u.delete(e),r.Oo()&&ci(n,e),0===n._u.size&&(r.Oo()?r.$o():li(n)&&n.yu.set("Unknown"))}function ai(t,e){t.pu.Mt(e.targetId),Di(t).Ho(e)}function ci(t,e){t.pu.Mt(e),Di(t).Jo(e)}function ui(t){t.pu=new _n({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Di(t).start(),t.yu.cu()}function hi(t){return li(t)&&!Di(t).ko()&&t._u.size>0}function li(t){return 0===w(t).wu.size}function di(t){t.pu=void 0}async function fi(t){t._u.forEach((e,n)=>{ai(t,e)})}async function pi(t,e){di(t),hi(t)?(t.yu.lu(e),ui(t)):t.yu.set("Unknown")}async function mi(t,e,n){if(t.yu.set("Online"),e instanceof In&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t._u.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t._u.delete(r),t.pu.removeTarget(r))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await gi(t,n)}else if(e instanceof bn?t.pu.Gt(e):e instanceof En?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(P.min()))try{const e=await Mr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.pu.te(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t._u.get(r);i&&t._u.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t._u.get(e);if(!n)return;t._u.set(e,n.withResumeToken(ct.EMPTY_BYTE_STRING,n.snapshotVersion)),ci(t,e);const r=new ar(n.target,e,1,n.sequenceNumber);ai(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await gi(t,e)}}async function gi(t,e,n){if(!X(e))throw e;t.wu.add(1),await ii(t),t.yu.set("Offline"),n||(n=()=>Mr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await ri(t)})}function yi(t,e){return e().catch(n=>gi(t,n,e))}async function vi(t){const e=w(t),n=Oi(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;wi(e);)try{const t=await Pr(e.localStore,r);if(null===t){0===e.du.length&&n.$o();break}r=t.batchId,bi(e,t)}catch(t){await gi(e,t)}Ei(e)&&Ii(e)}function wi(t){return li(t)&&t.du.length<10}function bi(t,e){t.du.push(e);const n=Oi(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function Ei(t){return li(t)&&!Oi(t).ko()&&t.du.length>0}function Ii(t){Oi(t).start()}async function Ti(t){Oi(t).nu()}async function _i(t){const e=Oi(t);for(const n of t.du)e.Zo(n.mutations)}async function Si(t,e,n){const r=t.du.shift(),i=sr.from(r,e,n);await yi(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await vi(t)}async function Ai(t,e){e&&Oi(t).Xo&&await async function(t,e){if(en(n=e.code)&&n!==b.ABORTED){const n=t.du.shift();Oi(t).Fo(),await yi(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await vi(t)}var n}(t,e),Ei(t)&&Ii(t)}async function ki(t,e){const n=w(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=li(n);n.wu.add(3),await ii(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await ri(n)}async function Ci(t,e){const n=w(t);e?(n.wu.delete(2),await ri(n)):e||(n.wu.add(2),await ii(n),n.yu.set("Unknown"))}function Di(t){return t.Iu||(t.Iu=function(t,e,n){const r=w(t);return r.iu(),new Jr(e,r.So,r.authCredentials,r.appCheckCredentials,r.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Yr:fi.bind(null,t),Zr:pi.bind(null,t),zo:mi.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),hi(t)?ui(t):t.yu.set("Unknown")):(await t.Iu.stop(),di(t))})),t.Iu}function Oi(t){return t.Tu||(t.Tu=function(t,e,n){const r=w(t);return r.iu(),new Zr(e,r.So,r.authCredentials,r.appCheckCredentials,r.It,n)}(t.datastore,t.asyncQueue,{Yr:Ti.bind(null,t),Zr:Ai.bind(null,t),eu:_i.bind(null,t),tu:Si.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await vi(t)):(await t.Tu.stop(),t.du.length>0&&(f("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ni{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Ni(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ri(t,e){if(p("AsyncQueue",`${e}: ${t}`),X(t))return new E(b.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t){this.comparator=t?(e,n)=>t(e,n)||$.comparator(e.key,n.key):(t,e)=>$.comparator(t.key,e.key),this.keyedMap=cn(),this.sortedSet=new nt(this.comparator)}static emptySet(t){return new Li(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Li))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Li;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.Eu=new nt($.comparator)}track(t){const e=t.doc.key,n=this.Eu.get(e);n?0!==t.type&&3===n.type?this.Eu=this.Eu.insert(e,t):3===t.type&&1!==n.type?this.Eu=this.Eu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Eu=this.Eu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Eu=this.Eu.remove(e):1===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):y():this.Eu=this.Eu.insert(e,t)}Au(){const t=[];return this.Eu.inorderTraversal((e,n)=>{t.push(n)}),t}}class xi{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach(t=>{s.push({type:0,doc:t})}),new xi(t,e,Li.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&fe(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.Ru=void 0,this.listeners=[]}}class Ui{constructor(){this.queries=new rn(t=>pe(t),fe),this.onlineState="Unknown",this.bu=new Set}}async function Vi(t,e){const n=w(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Pi),i)try{s.Ru=await n.onListen(r)}catch(t){const n=Ri(t,`Initialization of query '${me(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.Ru&&e.vu(s.Ru)&&Bi(n)}async function Fi(t,e){const n=w(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ji(t,e){const n=w(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.vu(t)&&(r=!0);i.Ru=t}}r&&Bi(n)}function $i(t,e,n){const r=w(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function Bi(t){t.bu.forEach(t=>{t.next()})}class qi{constructor(t,e,n){this.query=t,this.Vu=e,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new xi(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Su?this.Cu(t)&&(this.Vu.next(t),e=!0):this.xu(t,this.onlineState)&&(this.Nu(t),e=!0),this.Du=t,e}onError(t){this.Vu.error(t)}Pu(t){this.onlineState=t;let e=!1;return this.Du&&!this.Su&&this.xu(this.Du,t)&&(this.Nu(this.Du),e=!0),e}xu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Cu(t){if(t.docChanges.length>0)return!0;const e=this.Du&&this.Du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Nu(t){t=xi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Su=!0,this.Vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hi{constructor(t){this.key=t}}class zi{constructor(t){this.key=t}}class Ki{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=mn(),this.mutatedKeys=mn(),this.Gu=ve(t),this.Qu=new Li(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new Mi,r=e?e.Qu:this.Qu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),h=ge(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Hu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Gu(h,a)>0||c&&this.Gu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(s=s.add(h),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Au();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Gu(t.doc,e.doc)),this.Ju(n);const s=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new xi(this.query,t.Qu,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}Pu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Mi,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(t=>this.Uu=this.Uu.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Uu=this.Uu.delete(t)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=mn(),this.Qu.forEach(t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))});const e=[];return t.forEach(t=>{this.Ku.has(t)||e.push(new zi(t))}),this.Ku.forEach(n=>{t.has(n)||e.push(new Hi(n))}),e}tc(t){this.Uu=t.Hi,this.Ku=mn();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return xi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Gi{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Wi{constructor(t){this.key=t,this.nc=!1}}class Qi{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new rn(t=>pe(t),fe),this.rc=new Map,this.oc=new Set,this.uc=new nt($.comparator),this.cc=new Map,this.ac=new br,this.hc={},this.lc=new Map,this.fc=pr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Yi(t,e){const n=ps(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const t=await Ur(n.localStore,le(e));n.isPrimaryClient&&si(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Xi(n,e,r,"current"===s,t.resumeToken)}return i}async function Xi(t,e,n,r,i){t._c=(e,n,r)=>async function(t,e,n,r){let i=e.view.Wu(n);i.$i&&(i=await Fr(t.localStore,e.query,!1).then(({documents:t})=>e.view.Wu(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return cs(t,e.targetId,o.Xu),o.snapshot}(t,e,n,r);const s=await Fr(t.localStore,e,!0),o=new Ki(e,s.Hi),a=o.Wu(s.documents),c=wn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);cs(t,n,u.Xu);const h=new Gi(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function Ji(t,e){const n=w(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(t=>!fe(t,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Vr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),oi(n.remoteStore,r.targetId),os(n,r.targetId)}).catch(Q)):(os(n,r.targetId),await Vr(n.localStore,r.targetId,!0))}async function Zi(t,e){const n=w(t);try{const t=await function(t,e){const n=w(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const o=[];e.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,s.removedDocuments,a).next(()=>n.Cs.addMatchingKeys(t,s.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(ct.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Cs.updateTargetData(t,u))});let a=on(),c=mn();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(xr(t,s,e.documentUpdates).next(t=>{a=t.Wi,c=t.zi})),!r.isEqual(P.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next(e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return Y.waitFor(o).next(()=>s.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.Ui=i,t))}(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.cc.get(e);r&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.nc=!0:t.modifiedDocuments.size>0?v(r.nc):t.removedDocuments.size>0&&(v(r.nc),r.nc=!1))}),await ls(n,t,e)}catch(t){await Q(t)}}function ts(t,e,n){const r=w(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ic.forEach((n,r)=>{const i=r.view.Pu(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=w(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const t of n.listeners)t.Pu(e)&&(r=!0)}),r&&Bi(n)}(r.eventManager,e),t.length&&r.sc.zo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function es(t,e,n){const r=w(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let t=new nt($.comparator);t=t.insert(s,Ut.newNoDocument(s,P.min()));const n=mn().add(s),i=new vn(P.min(),new Map,new st(L),t,n);await Zi(r,i),r.uc=r.uc.remove(s),r.cc.delete(e),hs(r)}else await Vr(r.localStore,e,!1).then(()=>os(r,e,n)).catch(Q)}async function ns(t,e){const n=w(t),r=e.batch.batchId;try{const t=await function(t,e){const n=w(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Y.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);v(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=mn();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,r))})}(n.localStore,e);ss(n,r,null),is(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ls(n,t)}catch(t){await Q(t)}}async function rs(t,e,n){const r=w(t);try{const t=await function(t,e){const n=w(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(v(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>n.localDocuments.getDocuments(t,r))})}(r.localStore,e);ss(r,e,n),is(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ls(r,t)}catch(n){await Q(n)}}function is(t,e){(t.lc.get(e)||[]).forEach(t=>{t.resolve()}),t.lc.delete(e)}function ss(t,e,n){const r=w(t);let i=r.hc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function os(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(e=>{t.ac.containsKey(e)||as(t,e)})}function as(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(oi(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),hs(t))}function cs(t,e,n){for(const r of n)r instanceof Hi?(t.ac.addReference(r.key,e),us(t,r)):r instanceof zi?(f("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||as(t,r.key)):y()}function us(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(f("SyncEngine","New document in limbo: "+n),t.oc.add(r),hs(t))}function hs(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new $(V.fromString(e)),r=t.fc.next();t.cc.set(r,new Wi(n)),t.uc=t.uc.insert(n,r),si(t.remoteStore,new ar(le(se(n.path)),r,2,J.at))}}async function ls(t,e,n){const r=w(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((t,a)=>{o.push(r._c(a,e,n).then(t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Dr.Ci(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.sc.zo(i),await async function(t,e){const n=w(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Y.forEach(e,e=>Y.forEach(e.Si,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Y.forEach(e.Di,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!X(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ui.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(e,i)}}}(r.localStore,s))}async function ds(t,e){const n=w(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await Lr(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach(t=>{t.forEach(t=>{t.reject(new E(b.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),t.lc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ls(n,t.ji)}}function fs(t,e){const n=w(t),r=n.cc.get(e);if(r&&r.nc)return mn().add(r.key);{let t=mn();const r=n.rc.get(e);if(!r)return t;for(const e of r){const r=n.ic.get(e);t=t.unionWith(r.view.ju)}return t}}function ps(t){const e=w(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zi.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fs.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=es.bind(null,e),e.sc.zo=ji.bind(null,e.eventManager),e.sc.wc=$i.bind(null,e.eventManager),e}function ms(t){const e=w(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ns.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rs.bind(null,e),e}class gs{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=Qr(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return Rr(this.persistence,new Or,t.initialUser,this.It)}yc(t){return new Ar(Cr.Bs,this.It)}gc(t){return new Br}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ys{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ts(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ds.bind(null,this.syncEngine),await Ci(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ui}createDatastore(t){const e=Qr(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Gr(r));var r;return function(t,e,n,r){return new ti(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>ts(this.syncEngine,t,0),s=Hr.C()?new Hr:new qr,new ni(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Qi(t,e,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=w(t);f("RemoteStore","RemoteStore shutting down."),e.wu.add(5),await ii(e),e.gu.shutdown(),e.yu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t,e,n){if(!n)throw new E(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ws(t){if(!$.isDocumentKey(t))throw new E(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bs(t){if($.isDocumentKey(t))throw new E(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Es(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function Is(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Es(t);throw new E(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Ts(t,e){if(e<=0)throw new E(b.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new Map;class Ss{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new E(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new E(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new E(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ss({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new E(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ss(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new _;switch(t.type){case"gapi":const e=t.client;return new C(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new E(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=_s.get(t);e&&(f("ComponentProvider","Removing Datastore"),_s.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ks{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ds(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ks(this.firestore,t,this._key)}}class Cs{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Cs(this.firestore,t,this._query)}}class Ds extends Cs{constructor(t,e,n){super(t,e,se(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ks(this.firestore,null,new $(t))}withConverter(t){return new Ds(this.firestore,t,this._path)}}function Os(t,e,...n){if(t=Object(o.n)(t),vs("collection","path",e),t instanceof As){const r=V.fromString(e,...n);return bs(r),new Ds(t,null,r)}{if(!(t instanceof ks||t instanceof Ds))throw new E(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(V.fromString(e,...n));return bs(r),new Ds(t.firestore,null,r)}}function Ns(t,e,...n){if(t=Object(o.n)(t),1===arguments.length&&(e=R.R()),vs("doc","path",e),t instanceof As){const r=V.fromString(e,...n);return ws(r),new ks(t,null,new $(r))}{if(!(t instanceof ks||t instanceof Ds))throw new E(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(V.fromString(e,...n));return ws(r),new ks(t.firestore,t instanceof Ds?t.converter:null,new $(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rs{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):p("Uncaught Error in snapshot listener:",t)}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ls{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=R.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{f("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(f("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ri(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ms(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Lr(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function xs(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ps(t);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>ki(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>ki(e.remoteStore,n)),t.onlineComponents=e}async function Ps(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await Ms(t,new gs)),t.offlineComponents}async function Us(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await xs(t,new ys)),t.onlineComponents}function Vs(t){return Us(t).then(t=>t.syncEngine)}async function Fs(t){const e=await Us(t),n=e.eventManager;return n.onListen=Yi.bind(null,e.syncEngine),n.onUnlisten=Ji.bind(null,e.syncEngine),n}function js(t,e,n={}){const r=new I;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new Rs({next:s=>{e.enqueueAndForget(()=>Fi(t,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new E(b.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new E(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new qi(se(n.path),s,{includeMetadataChanges:!0,ku:!0});return Vi(t,o)}(await Fs(t),t.asyncQueue,e,n,r)),r.promise}function $s(t,e,n={}){const r=new I;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new Rs({next:n=>{e.enqueueAndForget(()=>Fi(t,o)),n.fromCache&&"server"===r.source?i.reject(new E(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new qi(n,s,{includeMetadataChanges:!0,ku:!0});return Vi(t,o)}(await Fs(t),t.asyncQueue,e,n,r)),r.promise}class Bs{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Yr(this,"async_queue_retry"),this.Wc=()=>{const t=Wr();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.No.Po()};const t=Wr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const e=Wr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise(()=>{});const e=new I;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(t){if(!X(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(t){const e=this.Bc.then(()=>(this.Gc=!0,t().catch(t=>{this.Kc=t,this.Gc=!1;throw p("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t}).then(t=>(this.Gc=!1,t))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const r=Ni.createAndSchedule(this,t,e,n,t=>this.Yc(t));return this.qc.push(r),r}zc(){this.Kc&&y()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.qc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.qc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.qc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const e=this.qc.indexOf(t);this.qc.splice(e,1)}}class qs extends As{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Bs,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ks(this),this._firestoreClient.terminate()}}function Hs(t,e){const n="object"==typeof t?t:Object(r.e)(),i="string"==typeof t?t:e||"(default)",s=Object(r.b)(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const t=Object(o.l)("firestore");t&&function(t,e,n,r={}){var i;const s=(t=Is(t,As))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&m("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=u.MOCK_USER;else{e=Object(o.f)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new E(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}t._authCredentials=new S(new T(e,n))}}(s,...t)}return s}function zs(t){return t._firestoreClient||Ks(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ks(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new mt(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ls(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gs{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Gs(ct.fromBase64String(t))}catch(t){throw new E(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Gs(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new E(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new j(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new E(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new E(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return L(this._lat,t._lat)||L(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=/^__.*__$/;class Js{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ke(t,this.data,this.fieldMask,e,this.fieldTransforms):new ze(t,this.data,e,this.fieldTransforms)}}class Zs{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ke(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function to(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class eo{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.It=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new eo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.ua(t),r}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return vo(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(to(this.sa)&&Xs.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class no{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.It=n||Qr(t)}da(t,e,n,r=!1){return new eo({sa:t,methodName:e,fa:n,path:j.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function ro(t){const e=t._freezeSettings(),n=Qr(t._databaseId);return new no(t._databaseId,!!e.ignoreUndefinedProperties,n)}function io(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);po("Data must be an object, but it was:",o,r);const a=lo(r,o);let c,u;if(s.merge)c=new at(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=mo(e,r,n);if(!o.contains(i))throw new E(b.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);wo(t,i)||t.push(i)}c=new at(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new Js(new xt(a),c,u)}class so extends Qs{_toFieldTransform(t){if(2!==t.sa)throw 1===t.sa?t.ha(this._methodName+"() can only appear at the top level of your update data"):t.ha(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof so}}class oo extends Qs{_toFieldTransform(t){return new xe(t.path,new ke)}isEqual(t){return t instanceof oo}}function ao(t,e,n,r){const i=t.da(1,e,n);po("Data must be an object, but it was:",i,r);const s=[],a=xt.empty();tt(r,(t,r)=>{const c=yo(e,t,n);r=Object(o.n)(r);const u=i.ca(c);if(r instanceof so)s.push(c);else{const t=ho(r,u);null!=t&&(s.push(c),a.set(c,t))}});const c=new at(s);return new Zs(a,c,i.fieldTransforms)}function co(t,e,n,r,i,s){const a=t.da(1,e,n),c=[mo(e,r,n)],u=[i];if(s.length%2!=0)throw new E(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<s.length;t+=2)c.push(mo(e,s[t])),u.push(s[t+1]);const h=[],l=xt.empty();for(let t=c.length-1;t>=0;--t)if(!wo(h,c[t])){const e=c[t];let n=u[t];n=Object(o.n)(n);const r=a.ca(e);if(n instanceof so)h.push(e);else{const t=ho(n,r);null!=t&&(h.push(e),l.set(e,t))}}const d=new at(h);return new Zs(l,d,a.fieldTransforms)}function uo(t,e,n,r=!1){return ho(n,t.da(r?4:3,e))}function ho(t,e){if(fo(t=Object(o.n)(t)))return po("Unsupported field value:",e,t),lo(t,e);if(t instanceof Qs)return function(t,e){if(!to(e.sa))throw e.ha(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.ha(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=ho(i,e.aa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o.n)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ie(e.It,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=x.fromDate(t);return{timestampValue:On(e.It,n)}}if(t instanceof x){const n=new x(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:On(e.It,n)}}if(t instanceof Ys)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Gs)return{bytesValue:Nn(e.It,t._byteString)};if(t instanceof ks){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Mn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha("Unsupported field value: "+Es(t))}(t,e)}function lo(t,e){const n={};return et(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tt(t,(t,r)=>{const i=ho(r,e.ra(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function fo(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof x||t instanceof Ys||t instanceof Gs||t instanceof ks||t instanceof Qs)}function po(t,e,n){if(!fo(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Es(n);throw"an object"===r?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function mo(t,e,n){if((e=Object(o.n)(e))instanceof Ws)return e._internalPath;if("string"==typeof e)return yo(t,e);throw vo("Field path arguments must be of type string or ",t,!1,void 0,n)}const go=new RegExp("[~\\*/\\[\\]]");function yo(t,e,n){if(e.search(go)>=0)throw vo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ws(...e.split("."))._internalPath}catch(r){throw vo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vo(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new E(b.INVALID_ARGUMENT,a+t+c)}function wo(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ks(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Eo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Io("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Eo extends bo{data(){return super.data()}}function Io(t,e){return"string"==typeof e?yo(t,e):e instanceof Ws?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new E(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _o{}function So(t,...e){for(const n of e)t=n._apply(t);return t}class Ao extends _o{constructor(t,e,n){super(),this.ma=t,this.ga=e,this.ya=n,this.type="where"}_apply(t){const e=ro(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new E(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Po(o,s);const e=[];for(const n of o)e.push(xo(r,t,n));a={arrayValue:{values:e}}}else a=xo(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Po(o,s),a=uo(n,"where",o,"in"===s||"not-in"===s);const c=qt.create(i,s,a);return function(t,e){if(e.dt()){const n=ce(t);if(null!==n&&!n.isEqual(e.field))throw new E(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=ae(t);null!==r&&Uo(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new E(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,0,e,t.firestore._databaseId,this.ma,this.ga,this.ya);return new Cs(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new re(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function ko(t,e,n){const r=e,i=Io("where",t);return new Ao(i,r,n)}class Co extends _o{constructor(t,e){super(),this.ma=t,this.pa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new E(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new E(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Zt(e,n);return function(t,e){if(null===ae(t)){const n=ce(t);null!==n&&Uo(t,n,e.field)}}(t,r),r}(t._query,this.ma,this.pa);return new Cs(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new re(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Do(t,e="asc"){const n=e,r=Io("orderBy",t);return new Co(r,n)}class Oo extends _o{constructor(t,e,n){super(),this.type=t,this.Ia=e,this.Ta=n}_apply(t){return new Cs(t.firestore,t.converter,de(t._query,this.Ia,this.Ta))}}function No(t){return Ts("limit",t),new Oo("limit",t,"F")}class Ro extends _o{constructor(t,e,n){super(),this.type=t,this.Ea=e,this.Aa=n}_apply(t){const e=Mo(t,this.type,this.Ea,this.Aa);return new Cs(t.firestore,t.converter,function(t,e){return new re(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Lo(...t){return new Ro("startAfter",t,!1)}function Mo(t,e,n,r){if(n[0]=Object(o.n)(n[0]),n[0]instanceof bo)return function(t,e,n,r,i){if(!r)throw new E(b.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const n of he(t))if(n.field.isKeyField())s.push(kt(e,r.key));else{const t=r.data.field(n.field);if(ft(t))throw new E(b.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=n.field.canonicalString();throw new E(b.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}s.push(t)}return new Jt(s,i)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ro(t.firestore);return function(t,e,n,r,i,s){const o=t.explicitOrderBy;if(i.length>o.length)throw new E(b.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let s=0;s<i.length;s++){const c=i[s];if(o[s].field.isKeyField()){if("string"!=typeof c)throw new E(b.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`);if(!ue(t)&&-1!==c.indexOf("/"))throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`);const n=t.path.child(V.fromString(c));if(!$.isDocumentKey(n))throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new $(n);a.push(kt(e,i))}else{const t=uo(n,r,c);a.push(t)}}return new Jt(a,s)}(t._query,t.firestore._databaseId,i,e,n,r)}}function xo(t,e,n){if("string"==typeof(n=Object(o.n)(n))){if(""===n)throw new E(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ue(e)&&-1!==n.indexOf("/"))throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(V.fromString(n));if(!$.isDocumentKey(r))throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return kt(t,new $(r))}if(n instanceof ks)return kt(t,n._key);throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Es(n)}.`)}function Po(t,e){if(!Array.isArray(t)||0===t.length)throw new E(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new E(b.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Uo(t,e,n){if(!n.isEqual(e))throw new E(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{convertValue(t,e="none"){switch(Et(t)){case 0:return null;case 1:return t.booleanValue;case 2:return lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(dt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return tt(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new Ys(lt(t.latitude),lt(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=function t(e){const n=e.mapValue.fields.__previous_value__;return ft(n)?t(n):n}(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(pt(t));default:return null}}convertTimestamp(t){const e=ht(t);return new x(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=V.fromString(t);v(tr(n));const r=new gt(n.get(1),n.get(3)),i=new $(n.popFirst(5));return r.isEqual(e)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jo{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $o extends bo{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Io("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Bo extends $o{data(t={}){return super.data(t)}}class qo{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new jo(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Bo(this._firestore,this._userDataWriter,n.key,n,new jo(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new E(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Bo(t._firestore,t._userDataWriter,n.doc.key,n.doc,new jo(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Bo(t._firestore,t._userDataWriter,e.doc.key,e.doc,new jo(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Ho(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Ho(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zo(t){t=Is(t,ks);const e=Is(t.firestore,qs);return js(zs(e),t._key).then(n=>Zo(e,t,n))}class Ko extends Vo{constructor(t){super(),this.firestore=t}convertBytes(t){return new Gs(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ks(this.firestore,null,e)}}function Go(t){t=Is(t,Cs);const e=Is(t.firestore,qs),n=zs(e),r=new Ko(e);return To(t._query),$s(n,t._query).then(n=>new qo(e,r,t,n))}function Wo(t,e,n){t=Is(t,ks);const r=Is(t.firestore,qs),i=Fo(t.converter,e,n);return Jo(r,[io(ro(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Ue.none())])}function Qo(t,e,n,...r){t=Is(t,ks);const i=Is(t.firestore,qs),s=ro(i);let a;return a="string"==typeof(e=Object(o.n)(e))||e instanceof Ws?co(s,"updateDoc",t._key,e,n,r):ao(s,"updateDoc",t._key,e),Jo(i,[a.toMutation(t._key,Ue.exists(!0))])}function Yo(t){return Jo(Is(t.firestore,qs),[new Ye(t._key,Ue.none())])}function Xo(t,e){const n=Is(t.firestore,qs),r=Ns(t),i=Fo(t.converter,e);return Jo(n,[io(ro(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Ue.exists(!1))]).then(()=>r)}function Jo(t,e){return function(t,e){const n=new I;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){const r=ms(t);try{const t=await function(t,e){const n=w(t),r=x.now(),i=e.reduce((t,e)=>t.add(e.key),mn());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=on(),c=mn();return n.Gi.getEntries(t,i).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(i=>{s=i;const o=[];for(const t of e){const e=qe(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Ke(t.key,e,Pt(e.value.mapValue),Ue.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)}).next(e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)})}).then(()=>({batchId:o.batchId,changes:un(s)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.hc[t.currentUser.toKey()];r||(r=new nt(L)),r=r.insert(e,n),t.hc[t.currentUser.toKey()]=r}(r,t.batchId,n),await ls(r,t.changes),await vi(r.remoteStore)}catch(t){const e=Ri(t,"Failed to persist write");n.reject(e)}}(await Vs(t),e,n)),n.promise}(zs(t),e)}function Zo(t,e,n){const r=n.docs.get(e._key),i=new Ko(t);return new $o(t,i,e._key,r,new jo(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ta{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=ro(t)}set(t,e,n){this._verifyNotCommitted();const r=ea(t,this._firestore),i=Fo(r.converter,e,n),s=io(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,Ue.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const i=ea(t,this._firestore);let s;return s="string"==typeof(e=Object(o.n)(e))||e instanceof Ws?co(this._dataReader,"WriteBatch.update",i._key,e,n,r):ao(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(s.toMutation(i._key,Ue.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ea(t,this._firestore);return this._mutations=this._mutations.concat(new Ye(e._key,Ue.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(b.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ea(t,e){if((t=Object(o.n)(t)).firestore!==e)throw new E(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(){return new oo("serverTimestamp")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ra(t){return zs(t=Is(t,qs)),new ta(t,e=>Jo(t,e))
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}!function(t,e=!0){!function(t){h=t}(r.a),Object(r.c)(new i.a("firestore",(t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new qs(new A(t.getProvider("auth-internal")),new O(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new E(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gt(t.options.projectId,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Object(r.g)(c,"3.7.1",t),Object(r.g)(c,"3.7.1","esm2017")}()}).call(this,n("f28c"))},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),s=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d26":function(t,e,n){var r=n("e330"),i=Error,s=r("".replace),o=String(i("zxcasd").stack),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)for(;e--;)t=s(t,a,"");return t}},"0d51":function(t,e){var n=String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},"0ecf":function(t,e,n){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,i,s){var o=i.prototype;s.utc=function(t){var e={date:t,utc:!0,args:arguments};return new i(e)},o.utc=function(e){var n=s(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},o.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var a=o.parse;o.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var c=o.init;o.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else c.call(this)};var u=o.utcOffset;o.utcOffset=function(r,i){var s=this.$utils().u;if(s(r))return this.$u?0:s(this.$offset)?u.call(this):this.$offset;if("string"==typeof r&&null===(r=function(t){void 0===t&&(t="");var r=t.match(e);if(!r)return null;var i=(""+r[0]).match(n)||["-",0,0],s=i[0],o=60*+i[1]+ +i[2];return 0===o?0:"+"===s?o:-o}(r)))return this;var o=Math.abs(r)<=16?60*r:r,a=this;if(i)return a.$offset=o,a.$u=0===r,a;if(0!==r){var c=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(o+c,t)).$offset=o,a.$x.$localOffset=c}else a=this.utc();return a};var h=o.format;o.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,e)},o.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},o.isUTC=function(){return!!this.$u},o.toISOString=function(){return this.toDate().toISOString()},o.toString=function(){return this.toDate().toUTCString()};var l=o.toDate;o.toDate=function(t){return"s"===t&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var d=o.diff;o.diff=function(t,e,n){if(t&&this.$u===t.$u)return d.call(this,t,e,n);var r=this.local(),i=s(t).local();return d.call(r,i,e,n)}}}()},"13d2":function(t,e,n){var r=n("d039"),i=n("1626"),s=n("1a2d"),o=n("83ab"),a=n("5e77").CONFIGURABLE,c=n("8925"),u=n("69f3"),h=u.enforce,l=u.get,d=Object.defineProperty,f=o&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||a&&t.name!==e)&&(o?d(t,"name",{value:e,configurable:!0}):t.name=e),f&&n&&s(n,"arity")&&t.length!==n.arity&&d(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=h(t);return s(r,"source")||(r.source=p.join("string"==typeof e?e:"")),t};Function.prototype.toString=m((function(){return i(this)&&l(this).source||c(this)}),"toString")},"13d5":function(t,e,n){"use strict";var r=n("23e7"),i=n("d58f").left,s=n("a640"),o=n("2d00"),a=n("605d");r({target:"Array",proto:!0,forced:!s("reduce")||!a&&o>79&&o<83},{reduce:function(t){var e=arguments.length;return i(this,t,e,e>1?arguments[1]:void 0)}})},"14d9":function(t,e,n){"use strict";var r=n("23e7"),i=n("7b0b"),s=n("07fa"),o=n("3a34"),a=n("3511"),c=n("d039")((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:c||u},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return o(e,n),n}})},1626:function(t,e,n){var r=n("8ea1"),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},1953:function(t,e,n){t.exports=function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,r,i){var s,o=function(t,n,r){void 0===r&&(r={});var i=new Date(t);return function(t,n){void 0===n&&(n={});var r=n.timeZoneName||"short",i=t+"|"+r,s=e[i];return s||(s=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),e[i]=s),s}(n,r).formatToParts(i)},a=function(e,n){for(var r=o(e,n),s=[],a=0;a<r.length;a+=1){var c=r[a],u=c.type,h=c.value,l=t[u];l>=0&&(s[l]=parseInt(h,10))}var d=s[3],f=24===d?0:d,p=s[0]+"-"+s[1]+"-"+s[2]+" "+f+":"+s[4]+":"+s[5]+":000",m=+e;return(i.utc(p).valueOf()-(m-=m%1e3))/6e4},c=r.prototype;c.tz=function(t,e){void 0===t&&(t=s);var n=this.utcOffset(),r=this.toDate(),o=r.toLocaleString("en-US",{timeZone:t}),a=Math.round((r-new Date(o))/1e3/60),c=i(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(r.getTimezoneOffset()/15)-a,!0);if(e){var u=c.utcOffset();c=c.add(n-u,"minute")}return c.$x.$timezone=t,c},c.offsetName=function(t){var e=this.$x.$timezone||i.tz.guess(),n=o(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var u=c.startOf;c.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return u.call(this,t,e);var n=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return u.call(n,t,e).tz(this.$x.$timezone,!0)},i.tz=function(t,e,n){var r=n&&e,o=n||e||s,c=a(+i(),o);if("string"!=typeof t)return i(t).tz(o);var u=function(t,e,n){var r=t-60*e*1e3,i=a(r,n);if(e===i)return[r,e];var s=a(r-=60*(i-e)*1e3,n);return i===s?[r,i]:[t-60*Math.min(i,s)*1e3,Math.max(i,s)]}(i.utc(t,r).valueOf(),c,o),h=u[0],l=u[1],d=i(h).utcOffset(l);return d.$x.$timezone=o,d},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(t){s=t}}}()},"19aa":function(t,e,n){var r=n("3a9b"),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},"1a2d":function(t,e,n){var r=n("e330"),i=n("7b0b"),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},"1d80":function(t,e,n){var r=n("7234"),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t}},"1fd5":function(t,e,n){"use strict";(function(t,r){n.d(e,"a",(function(){return I})),n.d(e,"b",(function(){return S})),n.d(e,"c",(function(){return _})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return T})),n.d(e,"g",(function(){return L})),n.d(e,"h",(function(){return C})),n.d(e,"i",(function(){return R})),n.d(e,"j",(function(){return b})),n.d(e,"k",(function(){return v})),n.d(e,"l",(function(){return w})),n.d(e,"m",(function(){return E})),n.d(e,"n",(function(){return P})),n.d(e,"o",(function(){return c})),n.d(e,"p",(function(){return h})),n.d(e,"q",(function(){return k})),n.d(e,"r",(function(){return d})),n.d(e,"s",(function(){return p})),n.d(e,"t",(function(){return u})),n.d(e,"u",(function(){return l})),n.d(e,"v",(function(){return f})),n.d(e,"w",(function(){return O})),n.d(e,"x",(function(){return N})),n.d(e,"y",(function(){return m}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,h=(3&i)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){return function(t){const e=i(t);return s.encodeByteArray(e,!0)}(t).replace(/\./g,"")},a=function(t){try{return s.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function u(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function h(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function l(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function d(){const t=c();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function f(){return!function(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function p(){return"object"==typeof indexedDB}function m(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const g=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,y=()=>{try{return g()||(()=>{if(void 0===r)return;const t=Object({NODE_ENV:"production",BASE_URL:"/BooksOrderSystem/"}).__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&a(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+t)}},v=t=>{var e,n;return null===(n=null===(e=y())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},w=t=>{const e=v(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},b=()=>{var t;return null===(t=y())||void 0===t?void 0:t.config},E=t=>{var e;return null===(e=y())||void 0===e?void 0:e["_"+t]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[o(JSON.stringify({alg:"none",type:"JWT"})),o(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _ extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(A,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new _(r,o,n)}}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function C(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(D(n)&&D(s)){if(!C(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function D(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function N(t){const e={};return t.replace(/^\?/,"").split("&").forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function R(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){const n=new M(t,e);return n.subscribe.bind(n)}class M{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=x),void 0===r.error&&(r.error=x),void 0===r.complete&&(r.complete=x);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function x(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"),n("f28c"))},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var r=n("1fd5");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.a;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,"[DEFAULT]"===r?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class o{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(t,e,n){var r=n("5926"),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,s=n("9112"),o=n("cb2d"),a=n("6374"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,h,l,d,f,p=t.target,m=t.global,g=t.stat;if(n=m?r:g?r[p]||a(p,{}):(r[p]||{}).prototype)for(h in e){if(d=e[h],l=t.dontCallGetSet?(f=i(n,h))&&f.value:n[h],!u(m?h:p+(g?".":"#")+h,t.forced)&&void 0!==l){if(typeof d==typeof l)continue;c(d,l)}(t.sham||l&&l.sham)&&s(d,"sham",!0),o(n,h,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"260b":function(t,e,n){"use strict";var r=n("589b");n.d(e,"a",(function(){return r.f}));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r.g)("firebase","9.12.1","app")},"2ba4":function(t,e,n){var r=n("40d5"),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},"2d00":function(t,e,n){var r,i,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,h=u&&u.v8;h&&(i=(r=h.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(!(r=o.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/))&&(i=+r[1]),t.exports=i},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},3511:function(t,e){var n=TypeError;t.exports=function(t){if(t>9007199254740991)throw n("Maximum allowed index exceeded");return t}},"3a34":function(t,e,n){"use strict";var r=n("83ab"),i=n("e8b5"),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},"3a9b":function(t,e,n){var r=n("e330");t.exports=r({}.isPrototypeOf)},"3bbe":function(t,e,n){var r=n("1626"),i=String,s=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw s("Can't set "+i(t)+" as a prototype")}},"40d5":function(t,e,n){var r=n("d039");t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},"44ad":function(t,e,n){var r=n("e330"),i=n("d039"),s=n("c6b6"),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?a(t,""):o(t)}:o},"485a":function(t,e,n){var r=n("c65b"),i=n("1626"),s=n("861d"),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw o("Can't convert object to primitive value")}},"4d64":function(t,e,n){var r=n("fc6a"),i=n("23cb"),s=n("07fa"),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),h=i(o,u);if(t&&n!=n){for(;u>h;)if((a=c[h++])!=a)return!0}else for(;u>h;h++)if((t||h in c)&&c[h]===n)return t||h||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},"50c4":function(t,e,n){var r=n("5926"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.25.5",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(t,e,n){var r=n("d066"),i=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},"577e":function(t,e,n){var r=n("f5df"),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return x})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return D})),n.d(e,"d",(function(){return N})),n.d(e,"e",(function(){return U})),n.d(e,"f",(function(){return P})),n.d(e,"g",(function(){return V}));var r=n("22e5"),i=n("e691"),s=n("1fd5");let o,a;const c=new WeakMap,u=new WeakMap,h=new WeakMap,l=new WeakMap,d=new WeakMap;let f={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return u.get(t);if("objectStoreNames"===e)return t.objectStoreNames||h.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function p(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(y(this),e),g(c.get(this))}:function(...e){return g(t.apply(y(this),e))}:function(e,...n){const r=t.call(y(this),e,...n);return h.set(r,e.sort?e.sort():[e]),g(r)}}function m(t){return"function"==typeof t?p(t):(t instanceof IDBTransaction&&function(t){if(u.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});u.set(t,e)}(t),e=t,(o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(t=>e instanceof t)?new Proxy(t,f):t);var e}function g(t){if(t instanceof IDBRequest)return function(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(g(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&c.set(e,t)}).catch(()=>{}),d.set(e,t),e}(t);if(l.has(t))return l.get(t);const e=m(t);return e!==t&&(l.set(t,e),d.set(e,t)),e}const y=t=>d.get(t);const v=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],b=new Map;function E(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(b.get(e))return b.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=w.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!v.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return b.set(e,s),s}f=(t=>({...t,get:(e,n,r)=>E(e,n)||t.get(e,n,r),has:(e,n)=>!!E(e,n)||t.has(e,n)}))(f);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const T="@firebase/app",_=new i.b("@firebase/app"),S={[T]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},A=new Map,k=new Map;function C(t,e){try{t.container.addComponent(e)}catch(n){_.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function D(t){const e=t.name;if(k.has(e))return _.debug(`There were multiple attempts to register component ${e}.`),!1;k.set(e,t);for(const e of A.values())C(e,t);return!0}function O(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function N(t,e,n="[DEFAULT]"){O(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},L=new s.b("app","Firebase",R);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class M{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw L.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x="9.12.1";function P(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!=typeof o||!o)throw L.create("bad-app-name",{appName:String(o)});if(n||(n=Object(s.j)()),!n)throw L.create("no-options");const a=A.get(o);if(a){if(Object(s.h)(n,a.options)&&Object(s.h)(i,a.config))return a;throw L.create("duplicate-app",{appName:o})}const c=new r.b(o);for(const t of k.values())c.addComponent(t);const u=new M(n,i,c);return A.set(o,u),u}function U(t="[DEFAULT]"){const e=A.get(t);if(!e&&"[DEFAULT]"===t)return P();if(!e)throw L.create("no-app",{appName:t});return e}function V(t,e,n){var i;let s=null!==(i=S[t])&&void 0!==i?i:t;n&&(s+="-"+n);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void _.warn(t.join(" "))}D(new r.a(s+"-version",()=>({library:s,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F="firebase-heartbeat-store";let j=null;function $(){return j||(j=function(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=g(o);return r&&o.addEventListener("upgradeneeded",t=>{r(g(o.result),t.oldVersion,t.newVersion,g(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(t=>{s&&t.addEventListener("close",()=>s()),i&&t.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(F)}}}).catch(t=>{throw L.create("idb-open",{originalErrorMessage:t.message})})),j}async function B(t,e){var n;try{const n=(await $()).transaction(F,"readwrite"),r=n.objectStore(F);return await r.put(e,q(t)),n.done}catch(t){if(t instanceof s.c)_.warn(t.message);else{const e=L.create("idb-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message});_.warn(e.message)}}}function q(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new K(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=z();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some(t=>t.date===e))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=z(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find(t=>t.agent===i.agent);if(t){if(t.dates.push(i.date),G(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),G(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Object(s.e)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function z(){return(new Date).toISOString().substring(0,10)}class K{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s.s)()&&Object(s.y)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){var e;try{return(await $()).transaction(F).objectStore(F).get(q(t))}catch(t){if(t instanceof s.c)_.warn(t.message);else{const n=L.create("idb-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message});_.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return B(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return B(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function G(t){return Object(s.e)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;W="",D(new r.a("platform-logger",t=>new I(t),"PRIVATE")),D(new r.a("heartbeat",t=>new H(t),"PRIVATE")),V(T,"0.8.2",W),V(T,"0.8.2","esm2017"),V("fire-js","")},5926:function(t,e,n){var r=n("b42e");t.exports=function(t){var e=+t;return e!=e||0===e?0:r(e)}},"59ed":function(t,e,n){var r=n("1626"),i=n("0d51"),s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not a function")}},"5a0c":function(t,e,n){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",o="day",a="week",c="month",u="quarter",h="year",l="date",d="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,o=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:a,d:o,D:l,h:s,m:i,s:r,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",w={};w[v]=m;var b=function(t){return t instanceof _},E=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();w[s]&&(i=s),n&&(w[s]=n,i=s);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var a=e.name;w[a]=e,i=a}return!r&&i&&(v=i),i||!r&&v},I=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},T=y;T.l=E,T.i=b,T.w=function(t,e){return I(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function m(t){this.$L=E(t.locale,null,!0),this.parse(t)}var g=m.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(T.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return T},g.isValid=function(){return!(this.$d.toString()===d)},g.isSame=function(t,e){var n=I(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return I(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<I(t)},g.$g=function(t,e,n){return T.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,u=!!T.u(e)||e,d=T.p(t),f=function(t,e){var r=T.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?r:r.endOf(o)},p=function(t,e){return T.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case h:return u?f(1,0):f(31,11);case c:return u?f(1,g):f(0,g+1);case a:var w=this.$locale().weekStart||0,b=(m<w?m+7:m)-w;return f(u?y-b:y+(6-b),g);case o:case l:return p(v+"Hours",0);case s:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case r:return p(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var a,u=T.p(t),d="set"+(this.$u?"UTC":""),f=(a={},a[o]=d+"Date",a[l]=d+"Date",a[c]=d+"Month",a[h]=d+"FullYear",a[s]=d+"Hours",a[i]=d+"Minutes",a[r]=d+"Seconds",a[n]=d+"Milliseconds",a)[u],p=u===o?this.$D+(e-this.$W):e;if(u===c||u===h){var m=this.clone().set(l,1);m.$d[f](p),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[T.p(t)]()},g.add=function(n,u){var l,d=this;n=Number(n);var f=T.p(u),p=function(t){var e=I(d);return T.w(e.date(e.date()+Math.round(t*n)),d)};if(f===c)return this.set(c,this.$M+n);if(f===h)return this.set(h,this.$y+n);if(f===o)return p(1);if(f===a)return p(7);var m=(l={},l[i]=t,l[s]=e,l[r]=1e3,l)[f]||1,g=this.$d.getTime()+n*m;return T.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=T.z(this),s=this.$H,o=this.$m,a=this.$M,c=n.weekdays,u=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},l=function(t){return T.s(s%12||12,t,"0")},f=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:T.s(a+1,2,"0"),MMM:h(n.monthsShort,a,u,3),MMMM:h(u,a),D:this.$D,DD:T.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,c,2),ddd:h(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:T.s(s,2,"0"),h:l(1),hh:l(2),a:f(s,o,!0),A:f(s,o,!1),m:String(o),mm:T.s(o,2,"0"),s:String(this.$s),ss:T.s(this.$s,2,"0"),SSS:T.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||m[t]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,l,d){var f,p=T.p(l),m=I(n),g=(m.utcOffset()-this.utcOffset())*t,y=this-m,v=T.m(this,m);return v=(f={},f[h]=v/12,f[c]=v,f[u]=v/3,f[a]=(y-g)/6048e5,f[o]=(y-g)/864e5,f[s]=y/e,f[i]=y/t,f[r]=y/1e3,f)[p]||y,d?v:T.a(v)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return w[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=E(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return T.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},m}(),S=_.prototype;return I.prototype=S,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",o],["$M",c],["$y",h],["$D",l]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),I.extend=function(t,e){return t.$i||(t(e,_,I),t.$i=!0),I},I.locale=E,I.isDayjs=b,I.unix=function(t){return I(1e3*t)},I.en=w[v],I.Ls=w,I.p={},I}()},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,n){var r=n("83ab"),i=n("1a2d"),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6374:function(t,e,n){var r=n("da84"),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},"69f3":function(t,e,n){var r,i,s,o=n("cdce"),a=n("da84"),c=n("861d"),u=n("9112"),h=n("1a2d"),l=n("c6cd"),d=n("f772"),f=n("d012"),p=a.TypeError,m=a.WeakMap;if(o||l.state){var g=l.state||(l.state=new m);g.get=g.get,g.has=g.has,g.set=g.set,r=function(t,e){if(g.has(t))throw p("Object already initialized");return e.facade=t,g.set(t,e),e},i=function(t){return g.get(t)||{}},s=function(t){return g.has(t)}}else{var y=d("state");f[y]=!0,r=function(t,e){if(h(t,y))throw p("Object already initialized");return e.facade=t,u(t,y,e),e},i=function(t){return h(t,y)?t[y]:{}},s=function(t){return h(t,y)}}t.exports={set:r,get:i,has:s,enforce:function(t){return s(t)?i(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw p("Incompatible receiver, "+t+" required");return n}}}},7156:function(t,e,n){var r=n("1626"),i=n("861d"),s=n("d2bb");t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},7234:function(t,e){t.exports=function(t){return null==t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var r=n("1d80"),i=Object;t.exports=function(t){return i(r(t))}},"7d7e":function(t,e,n){var r=n("40d5"),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=function(t){return r?o(t):function(){return s.apply(t,arguments)}}},"825a":function(t,e,n){var r=n("861d"),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,e,n){var r=n("1626"),i=n("8ea1"),s=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===s}:function(t){return"object"==typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("e330"),i=n("1626"),s=n("c6cd"),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},"8ea1":function(t,e){var n="object"==typeof document&&document.all,r=void 0===n&&void 0!==n;t.exports={all:n,IS_HTMLDDA:r}},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Xn})),n.d(e,"b",(function(){return Zn})),n.d(e,"c",(function(){return Jn})),n.d(e,"d",(function(){return er})),n.d(e,"e",(function(){return tr})),n.d(e,"f",(function(){return nr})),n.d(e,"g",(function(){return rr})),n.d(e,"h",(function(){return Qn})),n.d(e,"i",(function(){return Yn}));var r,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var l="closure_uid_"+(1e9*Math.random()>>>0),d=0;function f(t,e,n){return t.call.apply(t.bind,arguments)}function p(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:p).apply(null,arguments)}function g(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function y(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function v(){this.s=this.s,this.o=this.o}var w={};v.prototype.s=!1,v.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,l)&&t[l]||(t[l]=++d)}(this);delete w[t]}},v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function E(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function I(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(u(n)){const e=t.length||0,r=n.length||0;t.length=e+r;for(let i=0;i<r;i++)t[e+i]=n[i]}else t.push(n)}}function T(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var _=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(t){}return t}();function S(t){return/^[\s\xa0]*$/.test(t)}var A=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function k(t,e){return t<e?-1:t>e?1:0}function C(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function D(t){return-1!=C().indexOf(t)}function O(t){return O[" "](t),t}O[" "]=c;var N,R,L=D("Opera"),M=D("Trident")||D("MSIE"),x=D("Edge"),P=x||M,U=D("Gecko")&&!(-1!=C().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),V=-1!=C().toLowerCase().indexOf("webkit")&&!D("Edge");function F(){var t=a.document;return t?t.documentMode:void 0}t:{var j="",$=(R=C(),U?/rv:([^\);]+)(\)|;)/.exec(R):x?/Edge\/([\d\.]+)/.exec(R):M?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(R):V?/WebKit\/(\S+)/.exec(R):L?/(?:Version)[ \/]?(\S+)/.exec(R):void 0);if($&&(j=$?$[1]:""),M){var B=F();if(null!=B&&B>parseFloat(j)){N=String(B);break t}}N=j}var q,H={};function z(){return function(t){var e=H;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=A(String(N)).split("."),n=A("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=k(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||k(0==i[2].length,0==s[2].length)||k(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(a.document&&M){var K=F();q=K||(parseInt(N,10)||void 0)}else q=void 0;var G=q;function W(t,e){if(T.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(U){t:{try{O(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Q[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&W.X.h.call(this)}}y(W,T);var Q={2:"touch",3:"pen",4:"mouse"};W.prototype.h=function(){W.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Y="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++X,this.ba=this.ea=!1}function Z(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function tt(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function et(t){const e={};for(const n in t)e[n]=t[n];return e}const nt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rt(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<nt.length;e++)n=nt[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function it(t){this.src=t,this.g={},this.h=0}function st(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=b(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ot(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}it.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=ot(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new J(e,this.src,s,!!r,i)).ea=n,t.push(e)),e};var at="closure_lm_"+(1e6*Math.random()|0),ct={};function ut(t,e,n,r,i){if(r&&r.once)return function t(e,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)t(e,n[o],r,i,s);return null}return r=gt(r),e&&e[Y]?e.O(n,r,h(i)?!!i.capture:!!i,s):ht(e,n,r,!0,i,s)}(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ut(t,e[s],n,r,i);return null}return n=gt(n),t&&t[Y]?t.N(e,n,h(r)?!!r.capture:!!r,i):ht(t,e,n,!1,r,i)}function ht(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=h(i)?!!i.capture:!!i,a=pt(t);if(a||(t[at]=a=new it(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){const t=ft;return function e(n){return t.call(e.src,e.listener,n)}}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)_||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(dt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function lt(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[Y])st(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(dt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=pt(e))?(st(n,t),0==n.h&&(n.src=null,e[at]=null)):Z(t)}}}function dt(t){return t in ct?ct[t]:ct[t]="on"+t}function ft(t,e){if(t.ba)t=!0;else{e=new W(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&lt(t),t=n.call(r,e)}return t}function pt(t){return(t=t[at])instanceof it?t:null}var mt="__closure_events_fn_"+(1e9*Math.random()>>>0);function gt(t){return"function"==typeof t?t:(t[mt]||(t[mt]=function(e){return t.handleEvent(e)}),t[mt])}function yt(){v.call(this),this.i=new it(this),this.P=this,this.I=null}function vt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new T(e,t);else if(e instanceof T)e.target=e.target||t;else{var i=e;rt(e=new T(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=wt(o,r,!0,e)&&i}if(i=wt(o=e.g=t,r,!0,e)&&i,i=wt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=wt(o=e.g=n[s],r,!1,e)&&i}function wt(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&st(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(yt,v),yt.prototype[Y]=!0,yt.prototype.removeEventListener=function(t,e,n,r){!function t(e,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)t(e,n[o],r,i,s);else i=h(i)?!!i.capture:!!i,r=gt(r),e&&e[Y]?(e=e.i,(n=String(n).toString())in e.g&&(-1<(r=ot(o=e.g[n],r,i,s))&&(Z(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete e.g[n],e.h--)))):e&&(e=pt(e))&&(n=e.g[n.toString()],e=-1,n&&(e=ot(n,r,i,s)),(r=-1<e?n[e]:null)&&lt(r))}(this,t,e,n,r)},yt.prototype.M=function(){if(yt.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Z(n[r]);delete e.g[t],e.h--}}this.I=null},yt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},yt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var bt=a.JSON.stringify;function Et(){var t=Ct;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var It,Tt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new _t,t=>t.reset());class _t{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function St(t){a.setTimeout(()=>{throw t},0)}function At(t,e){It||function(){var t=a.Promise.resolve(void 0);It=function(){t.then(Dt)}}(),kt||(It(),kt=!0),Ct.add(t,e)}var kt=!1,Ct=new class{constructor(){this.h=this.g=null}add(t,e){const n=Tt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Dt(){for(var t;t=Et();){try{t.h.call(t.g)}catch(t){St(t)}var e=Tt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}kt=!1}function Ot(t,e){yt.call(this),this.h=t||1,this.g=e||a,this.j=m(this.lb,this),this.l=Date.now()}function Nt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Rt(t,e,n){if("function"==typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}y(Ot,yt),(r=Ot.prototype).ca=!1,r.R=null,r.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),vt(this,"tick"),this.ca&&(Nt(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ot.X.M.call(this),Nt(this),delete this.g};class Lt extends v{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:function t(e){e.g=Rt(()=>{e.g=null,e.i&&(e.i=!1,t(e))},e.j);const n=e.h;e.h=null,e.m.apply(null,n)}(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mt(t){v.call(this),this.h=t,this.g={}}y(Mt,v);var xt=[];function Pt(t,e,n,r){Array.isArray(n)||(n&&(xt[0]=n.toString()),n=xt);for(var i=0;i<n.length;i++){var s=ut(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ut(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&lt(t)}),t),t.g={}}function Vt(){this.g=!0}function Ft(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return bt(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Mt.prototype.M=function(){Mt.X.M.call(this),Ut(this)},Mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Vt.prototype.Aa=function(){this.g=!1},Vt.prototype.info=function(){};var jt={},$t=null;function Bt(){return $t=$t||new yt}function qt(t){T.call(this,jt.Pa,t)}function Ht(t){const e=Bt();vt(e,new qt(e,t))}function zt(t,e){T.call(this,jt.STAT_EVENT,t),this.stat=e}function Kt(t){const e=Bt();vt(e,new zt(e,t))}function Gt(t,e){T.call(this,jt.Qa,t),this.size=e}function Wt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}jt.Pa="serverreachability",y(qt,T),jt.STAT_EVENT="statevent",y(zt,T),jt.Qa="timingevent",y(Gt,T);var Qt={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Yt={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Xt(){}function Jt(t){return t.h||(t.h=t.i())}function Zt(){}Xt.prototype.h=null;var te,ee={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ne(){T.call(this,"d")}function re(){T.call(this,"c")}function ie(){}function se(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Mt(this),this.O=ae,t=P?125:void 0,this.T=new Ot(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new oe}function oe(){this.i=null,this.g="",this.h=!1}y(ne,T),y(re,T),y(ie,Xt),ie.prototype.g=function(){return new XMLHttpRequest},ie.prototype.i=function(){return{}},te=new ie;var ae=45e3,ce={},ue={};function he(t,e,n){t.K=1,t.v=De(_e(e)),t.s=n,t.P=!0,le(t,null)}function le(t,e){t.F=Date.now(),me(t),t.A=_e(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Be(n.i,"t",r),t.C=0,n=t.l.H,t.h=new oe,t.g=Bn(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Lt(m(t.La,t,t.g),t.N)),Pt(t.S,t.g,"readystatechange",t.ib),e=t.H?et(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ht(1),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function de(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function fe(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=pe(t,n),r==ue){4==e&&(t.o=4,Kt(14),i=!1),Ft(t.j,t.m,null,"[Incomplete Response]");break}if(r==ce){t.o=4,Kt(15),Ft(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Ft(t.j,t.m,r,null),be(t,r)}de(t)&&r!=ue&&r!=ce&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Kt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mn(e),e.K=!0,Kt(11))):(Ft(t.j,t.m,n,"[Invalid Chunked Response]"),we(t),ve(t))}function pe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ue:(n=Number(e.substring(n,r)),isNaN(n)?ce:(r+=1)+n>e.length?ue:(e=e.substr(r,n),t.C=r+n,e))}function me(t){t.V=Date.now()+t.O,ge(t,t.O)}function ge(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Wt(m(t.gb,t),e)}function ye(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function ve(t){0==t.l.G||t.I||Un(t.l,t)}function we(t){ye(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Nt(t.T),Ut(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function be(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||We(n.h,t)))if(!t.J&&We(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Pn(n),An(n)}Ln(n),Kt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=Wt(m(n.cb,n),6e3));if(1>=Ge(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Fn(n,11)}else if((t.J||n.g==t)&&Pn(n),!S(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Qe(s,s.h),s.h=null))}if(r.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,Ce(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((r=n).sa=$n(r,r.H?r.ka:null,r.V),o.J){Ye(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(ye(a),me(a)),r.g=o}else Rn(r);0<n.i.length&&Cn(n)}else"stop"!=u[0]&&"close"!=u[0]||Fn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Fn(n,7):Sn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}Ht(4)}catch(t){}}function Ee(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(u(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}(r=se.prototype).setTimeout=function(t){this.O=t},r.ib=function(t){t=t.target;const e=this.L;e&&3==wn(t)?e.l():this.La(t)},r.La=function(t){try{if(t==this.g)t:{const l=wn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>l)&&(3!=l||P||this.g&&(this.h.h||this.g.fa()||bn(this.g)))){this.I||4!=l||7==e||Ht(8==e||0>=d?3:2),ye(this);var n=this.g.aa();this.Y=n;e:if(de(this)){var r=bn(this.g);t="";var i=r.length,s=4==wn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){we(this),ve(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(c)){var h=c;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,Kt(12),we(this),ve(this);break t}Ft(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,be(this,n)}this.P?(fe(this,l,o),P&&this.i&&3==l&&(Pt(this.S,this.T,"tick",this.hb),this.T.start())):(Ft(this.j,this.m,o,null),be(this,o)),4==l&&we(this),this.i&&!this.I&&(4==l?Un(this.l,this):(this.i=!1,me(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Kt(12)):(this.o=0,Kt(13)),we(this),ve(this)}}}catch(t){}},r.hb=function(){if(this.g){var t=wn(this.g),e=this.g.fa();this.C<e.length&&(ye(this),fe(this,t,e),this.i&&4!=t&&me(this))}},r.cancel=function(){this.I=!0,we(this)},r.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Ht(3),Kt(17)),we(this),this.o=2,ve(this)):ge(this,this.V-t)};var Ie=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Te(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Te){this.h=void 0!==e?e:t.h,Se(this,t.j),this.s=t.s,this.g=t.g,Ae(this,t.m),this.l=t.l,e=t.i;var n=new Ve;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ke(this,n),this.o=t.o}else t&&(n=String(t).match(Ie))?(this.h=!!e,Se(this,n[1]||"",!0),this.s=Oe(n[2]||""),this.g=Oe(n[3]||"",!0),Ae(this,n[4]),this.l=Oe(n[5]||"",!0),ke(this,n[6]||"",!0),this.o=Oe(n[7]||"")):(this.h=!!e,this.i=new Ve(null,this.h))}function _e(t){return new Te(t)}function Se(t,e,n){t.j=n?Oe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ae(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ke(t,e,n){e instanceof Ve?(t.i=e,function(t,e){e&&!t.j&&(Fe(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(je(this,e),Be(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Ne(e,Pe)),t.i=new Ve(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function De(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Oe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ne(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Re),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Re(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Te.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ne(e,Le,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ne(e,Le,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ne(n,"/"==n.charAt(0)?xe:Me,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ne(n,Ue)),t.join("")};var Le=/[#\/\?@]/g,Me=/[#\?:]/g,xe=/[#\?]/g,Pe=/[#\?@]/g,Ue=/#/g;function Ve(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fe(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function je(t,e){Fe(t),e=qe(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $e(t,e){return Fe(t),e=qe(t,e),t.g.has(e)}function Be(t,e,n){je(t,e),0<n.length&&(t.i=null,t.g.set(qe(t,e),E(n)),t.h+=n.length)}function qe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(r=Ve.prototype).add=function(t,e){Fe(this),this.i=null,t=qe(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){Fe(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.oa=function(){Fe(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.W=function(t){Fe(this);let e=[];if("string"==typeof t)$e(this,t)&&(e=e.concat(this.g.get(qe(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return Fe(this),this.i=null,$e(this,t=qe(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function He(t){this.l=t||ze,a.PerformanceNavigationTiming?t=0<(t=a.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(a.g&&a.g.Ga&&a.g.Ga()&&a.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ze=10;function Ke(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ge(t){return t.h?1:t.g?t.g.size:0}function We(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Qe(t,e){t.g?t.g.add(e):t.h=e}function Ye(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Xe(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return E(t.i)}function Je(){}function Ze(){this.g=new Je}function tn(t,e,n){const r=n||"";try{Ee(t,(function(t,n){let i=t;h(t)&&(i=bt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function en(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function nn(t){this.l=t.ac||null,this.j=t.jb||!1}function rn(t,e){yt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=sn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He.prototype.cancel=function(){if(this.i=Xe(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Je.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},Je.prototype.parse=function(t){return a.JSON.parse(t,void 0)},y(nn,Xt),nn.prototype.g=function(){return new rn(this.l,this.j)},nn.prototype.i=function(t){return function(){return t}}({}),y(rn,yt);var sn=0;function on(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function an(t){t.readyState=4,t.l=null,t.j=null,t.A=null,cn(t)}function cn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(r=rn.prototype).open=function(t,e){if(this.readyState!=sn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,cn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,an(this)),this.readyState=sn},r.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,cn(this)),this.g&&(this.readyState=3,cn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;on(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?an(this):cn(this),3==this.readyState&&on(this)}},r.Va=function(t){this.g&&(this.response=this.responseText=t,an(this))},r.Ua=function(t){this.g&&(this.response=t,an(this))},r.ga=function(){this.g&&an(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(rn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var un=a.JSON.parse;function hn(t){yt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ln,this.K=this.L=!1}y(hn,yt);var ln="",dn=/^https?$/i,fn=["POST","PUT"];function pn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,mn(t),yn(t)}function mn(t){t.D||(t.D=!0,vt(t,"complete"),vt(t,"error"))}function gn(t){if(t.h&&void 0!==o&&(!t.C[1]||4!=wn(t)||2!=t.aa()))if(t.v&&4==wn(t))Rt(t.Ha,0,t);else if(vt(t,"readystatechange"),4==wn(t)){t.h=!1;try{const o=t.aa();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.H).match(Ie)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!dn.test(i?i.toLowerCase():"")}n=r}if(n)vt(t,"complete"),vt(t,"success");else{t.m=6;try{var c=2<wn(t)?t.g.statusText:""}catch(t){c=""}t.j=c+" ["+t.aa()+"]",mn(t)}}finally{yn(t)}}}function yn(t,e){if(t.g){vn(t);const n=t.g,r=t.C[0]?c:null;t.g=null,t.C=null,e||vt(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function vn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function wn(t){return t.g?t.g.readyState:0}function bn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ln:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function En(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function In(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=En(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ce(t,e,n))}function Tn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _n(t){this.Ca=0,this.i=[],this.j=new Vt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Tn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Tn("baseRetryDelayMs",5e3,t),this.bb=Tn("retryDelaySeedMs",1e4,t),this.$a=Tn("forwardChannelMaxRetries",2,t),this.ta=Tn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new He(t&&t.concurrentRequestLimit),this.Fa=new Ze,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Sn(t){if(kn(t),3==t.G){var e=t.U++,n=_e(t.F);Ce(n,"SID",t.I),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),On(t,n),(e=new se(t,t.j,e,void 0)).K=2,e.v=De(_e(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=Bn(e.l,null),e.g.da(e.v)),e.F=Date.now(),me(e)}jn(t)}function An(t){t.g&&(Mn(t),t.g.cancel(),t.g=null)}function kn(t){An(t),t.u&&(a.clearTimeout(t.u),t.u=null),Pn(t),t.h.cancel(),t.m&&("number"==typeof t.m&&a.clearTimeout(t.m),t.m=null)}function Cn(t){Ke(t.h)||t.m||(t.m=!0,At(t.Ja,t),t.C=0)}function Dn(t,e){var n;n=e?e.m:t.U++;const r=_e(t.F);Ce(r,"SID",t.I),Ce(r,"RID",n),Ce(r,"AID",t.T),On(t,r),t.o&&t.s&&In(r,t.o,t.s),n=new se(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Nn(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Qe(t.h,n),he(n,r,e)}function On(t,e){t.ia&&tt(t.ia,(function(t,n){Ce(e,n,t)})),t.l&&Ee({},(function(t,n){Ce(e,n,t)}))}function Nn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?m(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{tn(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Rn(t){t.g||t.u||(t.Z=1,At(t.Ia,t),t.A=0)}function Ln(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Wt(m(t.Ia,t),Vn(t,t.A)),t.A++,!0)}function Mn(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function xn(t){t.g=new se(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=_e(t.sa);Ce(e,"RID","rpc"),Ce(e,"SID",t.I),Ce(e,"CI",t.L?"0":"1"),Ce(e,"AID",t.T),Ce(e,"TYPE","xmlhttp"),On(t,e),t.o&&t.s&&In(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=De(_e(e)),n.s=null,n.P=!0,le(n,t)}function Pn(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function Un(t,e){var n=null;if(t.g==e){Pn(t),Mn(t),t.g=null;var r=2}else{if(!We(t.h,e))return;n=e.D,Ye(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;vt(r=Bt(),new Gt(r,n,e,i)),Cn(t)}else Rn(t);else if(3==(i=e.o)||0==i&&0<t.pa||!(1==r&&function(t,e){return!(Ge(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=Wt(m(t.Ja,t,e),Vn(t,t.C)),t.C++,!0))}(t,e)||2==r&&Ln(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Fn(t,5);break;case 4:Fn(t,10);break;case 3:Fn(t,6);break;default:Fn(t,2)}}function Vn(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Fn(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=m(t.kb,t);n||(n=new Te("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Se(n,"https"),De(n)),function(t,e){const n=new Vt;if(a.Image){const r=new Image;r.onload=g(en,n,r,"TestLoadImage: loaded",!0,e),r.onerror=g(en,n,r,"TestLoadImage: error",!1,e),r.onabort=g(en,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=g(en,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Kt(2);t.G=0,t.l&&t.l.va(e),jn(t),kn(t)}function jn(t){if(t.G=0,t.la=[],t.l){const e=Xe(t.h);0==e.length&&0==t.i.length||(I(t.la,e),I(t.la,t.i),t.h.i.length=0,E(t.i),t.i.length=0),t.l.ua()}}function $n(t,e,n){var r=n instanceof Te?_e(n):new Te(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),Ae(r,r.m);else{var i=a.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Te(null,void 0);r&&Se(s,r),e&&(s.g=e),i&&Ae(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Ce(r,n,e),Ce(r,"VER",t.ma),On(t,r),r}function Bn(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new hn(new nn({jb:!0})):new hn(t.ra)).Ka(t.H),e}function qn(){}function Hn(){if(M&&!(10<=Number(G)))throw Error("Environmental error: no available transport.")}function zn(t,e){yt.call(this),this.g=new _n(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!S(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!S(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Wn(this)}function Kn(t){ne.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Gn(){re.call(this),this.status=1}function Wn(t){this.g=t}(r=hn.prototype).Ka=function(t){this.L=t},r.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():te.g(),this.C=this.u?Jt(this.u):Jt(te),this.g.onreadystatechange=m(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void pn(this,t)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),i=a.FormData&&t instanceof a.FormData,!(0<=b(fn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vn(this),0<this.B&&((this.K=function(t){return M&&z()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.qa,this)):this.A=Rt(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){pn(this,t)}},r.qa=function(){void 0!==o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,vt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,vt(this,"complete"),vt(this,"abort"),yn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yn(this,!0)),hn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?gn(this):this.fb())},r.fb=function(){gn(this)},r.aa=function(){try{return 2<wn(this)?this.g.status:-1}catch(t){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),un(e)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=_n.prototype).ma=8,r.G=1,r.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new se(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=et(s),rt(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Nn(this,i,e),Ce(n=_e(this.F),"RID",t),Ce(n,"CVER",22),this.D&&Ce(n,"X-HTTP-Session-Id",this.D),On(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(En(s)))+"&"+e:this.o&&In(n,this.o,s)),Qe(this.h,i),this.Ya&&Ce(n,"TYPE","init"),this.O?(Ce(n,"$req",e),Ce(n,"SID","null"),i.Z=!0,he(i,n,null)):he(i,n,e),this.G=2}}else 3==this.G&&(t?Dn(this,t):0==this.i.length||Ke(this.h)||Dn(this))},r.Ia=function(){if(this.u=null,xn(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Wt(m(this.eb,this),t)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Kt(10),An(this),xn(this))},r.cb=function(){null!=this.v&&(this.v=null,An(this),Ln(this),Kt(19))},r.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Kt(2)):(this.j.info("Failed to ping google.com"),Kt(1))},(r=qn.prototype).xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},Hn.prototype.g=function(t,e){return new zn(t,e)},y(zn,yt),zn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Kt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=$n(t,null,t.V),Cn(t)},zn.prototype.close=function(){Sn(this.g)},zn.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=bt(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&Cn(e)},zn.prototype.M=function(){this.g.l=null,delete this.j,Sn(this.g),delete this.g,zn.X.M.call(this)},y(Kn,ne),y(Gn,re),y(Wn,qn),Wn.prototype.xa=function(){vt(this.g,"a")},Wn.prototype.wa=function(t){vt(this.g,new Kn(t))},Wn.prototype.va=function(t){vt(this.g,new Gn(t))},Wn.prototype.ua=function(){vt(this.g,"b")},Hn.prototype.createWebChannel=Hn.prototype.g,zn.prototype.send=zn.prototype.u,zn.prototype.open=zn.prototype.m,zn.prototype.close=zn.prototype.close,Qt.NO_ERROR=0,Qt.TIMEOUT=8,Qt.HTTP_ERROR=6,Yt.COMPLETE="complete",Zt.EventType=ee,ee.OPEN="a",ee.CLOSE="b",ee.ERROR="c",ee.MESSAGE="d",yt.prototype.listen=yt.prototype.N,hn.prototype.listenOnce=hn.prototype.O,hn.prototype.getLastError=hn.prototype.Oa,hn.prototype.getLastErrorCode=hn.prototype.Ea,hn.prototype.getStatus=hn.prototype.aa,hn.prototype.getResponseJson=hn.prototype.Sa,hn.prototype.getResponseText=hn.prototype.fa,hn.prototype.send=hn.prototype.da,hn.prototype.setWithCredentials=hn.prototype.Ka;var Qn=s.createWebChannelTransport=function(){return new Hn},Yn=s.getStatEventTarget=function(){return Bt()},Xn=s.ErrorCode=Qt,Jn=s.EventType=Yt,Zn=s.Event=jt,tr=s.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},er=s.FetchXmlHttpFactory=nn,nr=s.WebChannel=Zt,rr=s.XhrIo=hn}).call(this,n("c8ba"))},"90e3":function(t,e,n){var r=n("e330"),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),s=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),i=n("1626"),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==h||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",h=o.POLYFILL="P";t.exports=o},"9bf2":function(t,e,n){var r=n("83ab"),i=n("0cfb"),s=n("aed9"),o=n("825a"),a=n("a04b"),c=TypeError,u=Object.defineProperty,h=Object.getOwnPropertyDescriptor;e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=h(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){return 1},1)}))}},ab36:function(t,e,n){var r=n("861d"),i=n("9112");t.exports=function(t,e){r(e)&&"cause"in e&&i(t,"cause",e.cause)}},aeb0:function(t,e,n){var r=n("9bf2").f;t.exports=function(t,e,n){n in t||r(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},aed9:function(t,e,n){var r=n("83ab"),i=n("d039");t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b42e:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var e=+t;return(e>0?r:n)(e)}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("04f8"),c=n("fdbf"),u=i("wks"),h=r.Symbol,l=h&&h.for,d=c?h:h&&h.withoutSetter||o;t.exports=function(t){if(!s(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&s(h,t)?u[t]=h[t]:u[t]=c&&l?l(e):d(e)}return u[t]}},b7ef:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("d066"),o=n("5c6c"),a=n("9bf2").f,c=n("1a2d"),u=n("19aa"),h=n("7156"),l=n("e391"),d=n("cf98"),f=n("0d26"),p=n("83ab"),m=n("c430"),g=s("Error"),y=s("DOMException"),v=function(){u(this,w);var t=arguments.length,e=l(t<1?void 0:arguments[0]),n=l(t<2?void 0:arguments[1],"Error"),r=new y(e,n),i=g(e);return i.name="DOMException",a(r,"stack",o(1,f(i.stack,1))),h(r,this,v),r},w=v.prototype=y.prototype,b="stack"in g("DOMException"),E="stack"in new y(1,2),I=y&&p&&Object.getOwnPropertyDescriptor(i,"DOMException"),T=!(!I||I.writable&&I.configurable),_=b&&!T&&!E;r({global:!0,constructor:!0,forced:m||_},{DOMException:_?v:y});var S=s("DOMException"),A=S.prototype;if(A.constructor!==S)for(var k in m||a(A,"constructor",o(1,S)),d)if(c(d,k)){var C=d[k],D=C.s;c(S,D)||a(S,D,o(6,C.c))}},b980:function(t,e,n){var r=n("d039"),i=n("5c6c");t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)}))},c04e:function(t,e,n){var r=n("c65b"),i=n("861d"),s=n("d9b5"),o=n("dc4a"),a=n("485a"),c=n("b622"),u=TypeError,h=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,h);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},c430:function(t,e){t.exports=!1},c65b:function(t,e,n){var r=n("40d5"),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},c6b6:function(t,e,n){var r=n("7d7e"),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("6374"),s=r["__core-js_shared__"]||i("__core-js_shared__",{});t.exports=s},ca84:function(t,e,n){var r=n("e330"),i=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,h=[];for(n in r)!i(a,n)&&i(r,n)&&c(h,n);for(;e.length>u;)i(r,n=e[u++])&&(~o(h,n)||c(h,n));return h}},cb2d:function(t,e,n){var r=n("1626"),i=n("9bf2"),s=n("13d2"),o=n("6374");t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(t){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},cdce:function(t,e,n){var r=n("da84"),i=n("1626"),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},cf98:function(t,e){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},d066:function(t,e,n){var r=n("da84"),i=n("1626"),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!r.call({1:2},1);e.f=s?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("e330"),i=n("825a"),s=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},d58f:function(t,e,n){var r=n("59ed"),i=n("7b0b"),s=n("44ad"),o=n("07fa"),a=TypeError,c=function(t){return function(e,n,c,u){r(n);var h=i(e),l=s(h),d=o(h),f=t?d-1:0,p=t?-1:1;if(c<2)for(;;){if(f in l){u=l[f],f+=p;break}if(f+=p,t?f<0:d<=f)throw a("Reduce of empty array with no initial value")}for(;t?f>=0:d>f;f+=p)f in l&&(u=n(u,l[f],f,h));return u}};t.exports={left:c(!1),right:c(!0)}},d9b5:function(t,e,n){var r=n("d066"),i=n("1626"),s=n("3a9b"),o=n("fdbf"),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},d9e2:function(t,e,n){var r=n("23e7"),i=n("da84"),s=n("2ba4"),o=n("e5cb"),a=i.WebAssembly,c=7!==Error("e",{cause:7}).cause,u=function(t,e){var n={};n[t]=o(t,e,c),r({global:!0,constructor:!0,arity:1,forced:c},n)},h=function(t,e){if(a&&a[t]){var n={};n[t]=o("WebAssembly."+t,e,c),r({target:"WebAssembly",stat:!0,constructor:!0,arity:1,forced:c},n)}};u("Error",(function(t){return function(e){return s(t,this,arguments)}})),u("EvalError",(function(t){return function(e){return s(t,this,arguments)}})),u("RangeError",(function(t){return function(e){return s(t,this,arguments)}})),u("ReferenceError",(function(t){return function(e){return s(t,this,arguments)}})),u("SyntaxError",(function(t){return function(e){return s(t,this,arguments)}})),u("TypeError",(function(t){return function(e){return s(t,this,arguments)}})),u("URIError",(function(t){return function(e){return s(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return s(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return s(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return s(t,this,arguments)}}))},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(t,e,n){var r=n("59ed"),i=n("7234");t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},e330:function(t,e,n){var r=n("c6b6"),i=n("7d7e");t.exports=function(t){if("Function"===r(t))return i(t)}},e391:function(t,e,n){var r=n("577e");t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},e5cb:function(t,e,n){"use strict";var r=n("d066"),i=n("1a2d"),s=n("9112"),o=n("3a9b"),a=n("d2bb"),c=n("e893"),u=n("aeb0"),h=n("7156"),l=n("e391"),d=n("ab36"),f=n("0d26"),p=n("b980"),m=n("83ab"),g=n("c430");t.exports=function(t,e,n,y){var v=y?2:1,w=t.split("."),b=w[w.length-1],E=r.apply(null,w);if(E){var I=E.prototype;if(!g&&i(I,"cause")&&delete I.cause,!n)return E;var T=r("Error"),_=e((function(t,e){var n=l(y?e:t,void 0),r=y?new E(t):new E;return void 0!==n&&s(r,"message",n),p&&s(r,"stack",f(r.stack,2)),this&&o(I,this)&&h(r,this,_),arguments.length>v&&d(r,arguments[v]),r}));if(_.prototype=I,"Error"!==b?a?a(_,T):c(_,T,{name:!0}):m&&"stackTraceLimit"in E&&(u(_,E,"stackTraceLimit"),u(_,E,"prepareStackTrace")),c(_,E),!g)try{I.name!==b&&s(I,"name",b),I.constructor=_}catch(t){}return _}}},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return l}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function h(t){r.forEach(e=>{e.setLogLevel(t)})}function l(t,e){for(const n of r){let r=null;e&&e.level&&(r=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}}).filter(t=>t).join(" ");n>=(null!=r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}},e71f:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r.a})),n.d(e,"b",(function(){return r.b})),n.d(e,"c",(function(){return r.c})),n.d(e,"d",(function(){return r.d})),n.d(e,"e",(function(){return r.e})),n.d(e,"f",(function(){return r.f})),n.d(e,"g",(function(){return r.g})),n.d(e,"h",(function(){return r.h})),n.d(e,"i",(function(){return r.i})),n.d(e,"j",(function(){return r.j})),n.d(e,"k",(function(){return r.k})),n.d(e,"l",(function(){return r.l})),n.d(e,"m",(function(){return r.m})),n.d(e,"n",(function(){return r.n})),n.d(e,"o",(function(){return r.o})),n.d(e,"p",(function(){return r.p}))},e893:function(t,e,n){var r=n("1a2d"),i=n("56ef"),s=n("06cf"),o=n("9bf2");t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,h=0;h<a.length;h++){var l=a[h];r(t,l)||n&&r(n,l)||c(t,l,u(e,l))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},ea7b:function(t,e,n){"use strict";n.d(e,"a",(function(){return Wt})),n.d(e,"b",(function(){return Ft})),n.d(e,"c",(function(){return Qe})),n.d(e,"d",(function(){return Bt})),n.d(e,"e",(function(){return jt})),n.d(e,"f",(function(){return qt})),n.d(e,"g",(function(){return $t}));var r=n("1fd5"),i=n("589b"),s=n("e691"),o=n("9ab4"),a=n("22e5");function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,h=new r.b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),l=new s.b("@firebase/auth");function d(t,...e){l.logLevel<=s.a.ERROR&&l.error(`Auth (${i.a}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw g(t,...e)}function p(t,...e){return g(t,...e)}function m(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n});return new r.b("auth","Firebase",i).create(e,{appName:t.name})}function g(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return h.create(t,...e)}function y(t,e,...n){if(!t)throw g(e,...n)}function v(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function w(t,e){t||v(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function E(t){w(t instanceof Function,"Expected a class definition");let e=b.get(t);return e?(w(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,b.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function I(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function T(){return"http:"===_()||"https:"===_()}function _(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{constructor(t,e){this.shortDelay=t,this.longDelay=e,w(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(r.t)()||Object(r.u)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(T()||Object(r.p)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){w(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},D=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function N(t,e,n,i,s={}){return R(t,s,async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=Object(r.w)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),k.fetch()(M(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function R(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},C),e);try{const e=new x(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw P(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw P(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw P(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw P(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);f(t,a)}}catch(e){if(e instanceof r.c)throw e;f(t,"network-request-failed")}}async function L(t,e,n,r,i={}){const s=await N(t,e,n,r,i);return"mfaPendingCredential"in s&&f(t,"multi-factor-auth-required",{_serverResponse:s}),s}function M(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?A(t.config,i):`${t.config.apiScheme}://${i}`}class x{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(p(this.auth,"network-request-failed")),D.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function P(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){return 1e3*Number(t)}function F(t){var e;const[n,i,s]=t.split(".");if(void 0===n||void 0===i||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(r.d)(i);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(t){return d("Caught error parsing JWT payload as JSON",null===(e=t)||void 0===e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function j(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof r.c&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class ${constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===(t=e)||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(t){var e;const n=t.auth,r=await t.getIdToken(),i=await j(t,async function(t,e){return N(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));y(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map(t=>{var{providerId:e}=t,n=Object(o.a)(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[];const c=(u=t.providerData,h=a,[...u.filter(t=>!h.some(e=>e.providerId===t.providerId)),...h]);var u,h;const l=t.isAnonymous,d=!(t.email&&s.passwordHash||(null==c?void 0:c.length)),f=!!l&&d,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new B(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){y(t.idToken,"internal-error"),y(void 0!==t.idToken,"internal-error"),y(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=F(t);return y(e,"internal-error"),y(void 0!==e.exp,"internal-error"),y(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return y(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await R(t,{},async()=>{const n=Object(r.w)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=M(t,i,"/v1/token","key="+s),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",k.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new H;return n&&(y("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(y("string"==typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(y("number"==typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new H,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t,e){y("string"==typeof t||void 0===t,"internal-error",{appName:e})}class K{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=Object(o.a)(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new B(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await j(this,this.stsTokenManager.getToken(this.auth,t));return y(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Object(r.n)(t),i=await n.getIdToken(e),s=F(i);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:U(V(s.auth_time)),issuedAtTime:U(V(s.iat)),expirationTime:U(V(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Object(r.n)(t);await q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new K(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await j(this,async function(t,e){return N(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const h=null!==(n=e.displayName)&&void 0!==n?n:void 0,l=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:b,isAnonymous:E,providerData:I,stsTokenManager:T}=e;y(w&&T,t,"internal-error");const _=H.fromJSON(this.name,T);y("string"==typeof w,t,"internal-error"),z(h,t.name),z(l,t.name),y("boolean"==typeof b,t,"internal-error"),y("boolean"==typeof E,t,"internal-error"),z(d,t.name),z(f,t.name),z(p,t.name),z(m,t.name),z(g,t.name),z(v,t.name);const S=new K({uid:w,auth:t,email:l,emailVerified:b,displayName:h,isAnonymous:E,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:g,lastLoginAt:v});return I&&Array.isArray(I)&&(S.providerData=I.map(t=>Object.assign({},t))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new H;r.updateFromServerResponse(e);const i=new K({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await q(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}G.type="NONE";const W=G;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){return`firebase:${t}:${e}:${n}`}class Y{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Q(this.userKey,r.apiKey,i),this.fullPersistenceKey=Q("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?K._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Y(E(W),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||E(W);const s=Q(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const r=K._fromJSON(t,e);n!==i&&(o=r),i=n;break}}catch(t){}const a=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(s)}catch(t){}})),new Y(i,t,n)):new Y(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(et(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(J(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rt(e))return"Blackberry";if(it(e))return"Webos";if(Z(e))return"Safari";if((e.includes("chrome/")||tt(e))&&!e.includes("edge/"))return"Chrome";if(nt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function J(t=Object(r.o)()){return/firefox\//i.test(t)}function Z(t=Object(r.o)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tt(t=Object(r.o)()){return/crios\//i.test(t)}function et(t=Object(r.o)()){return/iemobile/i.test(t)}function nt(t=Object(r.o)()){return/android/i.test(t)}function rt(t=Object(r.o)()){return/blackberry/i.test(t)}function it(t=Object(r.o)()){return/webos/i.test(t)}function st(t=Object(r.o)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ot(t=Object(r.o)()){return st(t)||nt(t)||it(t)||rt(t)||/windows phone/i.test(t)||et(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function at(t,e=[]){let n;switch(t){case"Browser":n=X(Object(r.o)());break;case"Worker":n=`${X(Object(r.o)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.a}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise((n,r)=>{try{n(t(e))}catch(t){r(t)}});n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(t){n.reverse();for(const t of n)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=t)||void 0===e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lt(this),this.idTokenSubscription=new lt(this),this.beforeStateQueue=new ct(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=E(e)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Y.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(t){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(t))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){var e;try{await q(t)}catch(t){if("auth/network-request-failed"!==(null===(e=t)||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(r.n)(t):null;return e&&y(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(E(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.b("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&E(t)||this._popupRedirectResolver;y(e,this,"argument-error"),this.redirectPersistenceManager=await Y.create(this,[E(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return y(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"==typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=at(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function ht(t){return Object(r.n)(t)}class lt{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(r.g)(t=>this.observer=t)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function dt(t,e,n){const r=ht(t);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=ft(e),{host:o,port:a}=function(t){const e=ft(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:pt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:pt(e)}}}(e),c=null===a?"":":"+a;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ft(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class mt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return v("not implemented")}_getIdTokenResponse(t){return v("not implemented")}_linkToIdToken(t,e){return v("not implemented")}_getReauthenticationResolver(t){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(t,e){return N(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt extends mt{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new yt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new yt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return L(t,"POST","/v1/accounts:signInWithPassword",O(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",O(t,e))}(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return gt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",O(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t,e){return L(t,"POST","/v1/accounts:signInWithIdp",O(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends mt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new wt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=Object(o.a)(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new wt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){return vt(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,vt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,vt(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Object(r.w)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends mt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Et({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Et({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return L(t,"POST","/v1/accounts:signInWithPhoneNumber",O(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await L(t,"POST","/v1/accounts:signInWithPhoneNumber",O(t,e));if(n.temporaryProof)throw P(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return L(t,"POST","/v1/accounts:signInWithPhoneNumber",O(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),bt)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Et({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){var e,n,i,s,o,a;const c=Object(r.x)(Object(r.i)(t)),u=null!==(e=c.apiKey)&&void 0!==e?e:null,h=null!==(n=c.oobCode)&&void 0!==n?n:null,l=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=c.mode)&&void 0!==i?i:null);y(u&&h&&l,"argument-error"),this.apiKey=u,this.operation=l,this.code=h,this.continueUrl=null!==(s=c.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=c.tenantId)&&void 0!==a?a:null}static parseLink(t){const e=function(t){const e=Object(r.x)(Object(r.i)(t)).link,n=e?Object(r.x)(Object(r.i)(e)).deep_link_id:null,i=Object(r.x)(Object(r.i)(t)).deep_link_id;return(i?Object(r.x)(Object(r.i)(i)).link:null)||i||n||e||t}(t);try{return new It(e)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt{constructor(){this.providerId=Tt.PROVIDER_ID}static credential(t,e){return yt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=It.parseLink(e);return y(n,"argument-error"),yt._fromEmailAndCode(t,n.code,n.tenantId)}}Tt.PROVIDER_ID="password",Tt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Tt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends _t{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At extends St{constructor(){super("facebook.com")}static credential(t){return wt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return At.credential(t.oauthAccessToken)}catch(t){return null}}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com",At.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt extends St{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return wt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return kt.credential(e,n)}catch(t){return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com",kt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct extends St{constructor(){super("github.com")}static credential(t){return wt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ct.credential(t.oauthAccessToken)}catch(t){return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com",Ct.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt extends St{constructor(){super("twitter.com")}static credential(t,e){return wt._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Dt.credential(e,n)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ot(t,e){return L(t,"POST","/v1/accounts:signUp",O(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.TWITTER_SIGN_IN_METHOD="twitter.com",Dt.PROVIDER_ID="twitter.com";class Nt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await K._fromIdTokenResponse(t,n,r),s=Rt(n);return new Nt({user:i,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Rt(n);return new Nt({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Rt(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lt extends r.c{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Lt.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new Lt(t,e,n,r)}}function Mt(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Lt._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(t,e,n=!1){const r=await j(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nt._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pt(t,e,n=!1){var r;const{auth:i}=t;try{const r=await j(t,Mt(i,"reauthenticate",e,t),n);y(r.idToken,i,"internal-error");const s=F(r.idToken);y(s,i,"internal-error");const{sub:o}=s;return y(t.uid===o,i,"user-mismatch"),Nt._forOperation(t,"reauthenticate",r)}catch(t){throw"auth/user-not-found"===(null===(r=t)||void 0===r?void 0:r.code)&&f(i,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(t,e,n=!1){const r=await Mt(t,"signIn",e),i=await Nt._fromIdTokenResponse(t,"signIn",r);return n||await t._updateCurrentUser(i.user),i}async function Vt(t,e){return Ut(ht(t),e)}async function Ft(t,e,n){const r=ht(t),i=await Ot(r,{returnSecureToken:!0,email:e,password:n}),s=await Nt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function jt(t,e,n){return Vt(Object(r.n)(t),Tt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $t(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const i=Object(r.n)(t),s={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await j(i,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){return N(t,"POST","/v1/accounts:update",e)}(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:t})=>"password"===t);a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bt(t,e){return Object(r.n)(t).setPersistence(e)}function qt(t){return Object(r.n)(t).signOut()}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Ht{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=Object(r.o)();return Z(t)||st(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=ot(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);Object(r.r)()&&10===document.documentMode&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}zt.type="LOCAL";const Kt=zt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Ht{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Gt.type="SESSION";const Wt=Gt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new Qt(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async t=>t(e.origin,i)),a=await function(t){return Promise.all(t.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}}))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yt(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.receivers=[];class Xt{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Yt("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zt(){return void 0!==Jt().WorkerGlobalScope&&"function"==typeof Jt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const te="firebaseLocalStorageDb";class ee{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function ne(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function re(){const t=indexedDB.open(te,1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(te);return new ee(t).toPromise()}(),e(await re()))})})}async function ie(t,e,n){const r=ne(t,!0).put({fbase_key:e,value:n});return new ee(r).toPromise()}function se(t,e){const n=ne(t,!0).delete(e);return new ee(n).toPromise()}class oe{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await re()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qt._getInstance(Zt()?self:null),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Xt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await re();return await ie(t,"__sak","1"),await se(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ie(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>async function(t,e){const n=ne(t,!1).get(e),r=await new ee(n).toPromise();return void 0===r?null:r.value}(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>se(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=ne(t,!1).getAll();return new ee(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}oe.type="LOCAL";const ae=oe;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t){return new Promise((e,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,s;r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)})}function ue(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ue("rcb"),new S(3e4,6e4);async function he(t,e,n){var r;const i=await n.verify();try{let s;if(y("string"==typeof i,t,"argument-error"),y("recaptcha"===n.type,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){y("enroll"===e.type,t,"internal-error");return(await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return N(t,"POST","/v2/accounts/mfaEnrollment:start",O(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo}{y("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;y(n,t,"missing-multi-factor-info");return(await function(t,e){return N(t,"POST","/v2/accounts/mfaSignIn:start",O(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return N(t,"POST","/v1/accounts:sendVerificationCode",O(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(t){this.providerId=le.PROVIDER_ID,this.auth=ht(t)}verifyPhoneNumber(t,e){return he(this.auth,t,Object(r.n)(e))}static credential(t,e){return Et._fromVerification(t,e)}static credentialFromResult(t){const e=t;return le.credentialFromTaggedObject(e)}static credentialFromError(t){return le.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Et._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function de(t,e){return e?E(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */le.PROVIDER_ID="phone",le.PHONE_SIGN_IN_METHOD="phone";class fe extends mt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return vt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return vt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return vt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function pe(t){return Ut(t.auth,new fe(t),t.bypassAuthState)}function me(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Pt(n,new fe(t),t.bypassAuthState)}async function ge(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),xt(n,new fe(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return pe;case"linkViaPopup":case"linkViaRedirect":return ge;case"reauthViaPopup":case"reauthViaRedirect":return me;default:f(this.auth,"internal-error")}}resolve(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=new S(2e3,1e4);class we extends ye{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,we.currentPopupAction&&we.currentPopupAction.cancel(),we.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return y(t,this.auth,"internal-error"),t}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const t=Yt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,we.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,ve.get())};t()}}we.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be=new Map;class Ee extends ye{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=be.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=_e(e),r=Te(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}be.set(this.auth._key(),t)}return this.bypassAuthState||be.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ie(t,e){be.set(t._key(),e)}function Te(t){return E(t._redirectPersistence)}function _e(t){return Q("pendingRedirect",t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(t,e,n=!1){const r=ht(t),i=de(r,e),s=new Ee(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}class Ae{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ce(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Ce(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ke(t))}saveEventToCache(t){this.cachedEventUids.add(ke(t)),this.lastProcessedEventTime=Date.now()}}function ke(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function Ce({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const De=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Oe=/^https?/;async function Ne(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return N(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Re(t))return}catch(t){}f(t,"unauthorized-domain")}function Re(t){const e=I(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Oe.test(n))return!1;if(De.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=new S(3e4,6e4);function Me(){const t=Jt().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let xe=null;function Pe(t){return xe=xe||function(t){return new Promise((e,n)=>{var r,i,s;function o(){Me(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Me(),n(p(t,"network-request-failed"))},timeout:Le.get()})}if(null===(i=null===(r=Jt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Jt().gapi)||void 0===s?void 0:s.load)){const e=ue("iframefcb");return Jt()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},ce("https://apis.google.com/js/api.js?onload="+e).catch(t=>n(t))}o()}}).catch(t=>{throw xe=null,t})}(t),xe}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=new S(5e3,15e3),Ve={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fe=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function je(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?A(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,s={apiKey:e.apiKey,appName:t.name,v:i.a},o=Fe.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r.w)(s).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $e={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Be{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function qe(t,e,n,i=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},$e),{width:i.toString(),height:s.toString(),top:o,left:a}),h=Object(r.o)().toLowerCase();n&&(c=tt(h)?"_blank":n),J(h)&&(e=e||"http://localhost",u.scrollbars="yes");const l=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(function(t=Object(r.o)()){var e;return st(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(h)&&"_self"!==c)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",c),new Be(null);const d=window.open(e||"",c,l);y(d,t,"popup-blocked");try{d.focus()}catch(t){}return new Be(d)}function He(t,e,n,s,o,a){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.a,eventId:o};if(e instanceof _t){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(r.q)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof St){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const t of Object.keys(u))void 0===u[t]&&delete u[t];return`${function({config:t}){if(!t.emulator)return`https://${t.authDomain}/__/auth/handler`;return A(t,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${Object(r.w)(u).slice(1)}`}const ze=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wt,this._completeRedirectFn=Se,this._overrideRedirectResult=Ie}async _openPopup(t,e,n,r){var i;w(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return qe(t,He(t,e,n,I(),r),Yt())}async _openRedirect(t,e,n,r){var i;return await this._originValidation(t),i=He(t,e,n,I(),r),Jt().location.href=i,new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch(()=>{delete this.eventManagers[e]}),n}async initAndGetManager(t){const e=await async function(t){const e=await Pe(t),n=Jt().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:je(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ve,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),s=Jt().setTimeout(()=>{r(i)},Ue.get());function o(){Jt().clearTimeout(s),n(e)}e.ping(o).then(o,()=>{r(i)})}))}(t),n=new Ae(t);return e.register("authEvent",e=>{y(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&e(!!i),f(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Ne(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return ot()||Z()||st()}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ge=Object(r.m)("authIdTokenMaxAge")||300;let We=null;function Qe(t=Object(i.e)()){const e=Object(i.b)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=Object(i.b)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if(Object(r.h)(i,null!=e?e:{}))return t;f(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:ze,persistence:[ae,Kt,Wt]}),s=Object(r.m)("authTokenSyncURL");if(s){const t=(o=s,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>Ge)return;const r=null==e?void 0:e.token;We!==r&&(We=r,await fetch(o,{method:r?"POST":"DELETE",headers:r?{Authorization:"Bearer "+r}:{}}))});!function(t,e,n){Object(r.n)(t).beforeAuthStateChanged(e,n)}(n,t,()=>t(n.currentUser)),function(t,e,n,i){Object(r.n)(t).onIdTokenChanged(e,n,i)}(n,e=>t(e))}var o;const a=Object(r.k)("auth");return a&&dt(n,"http://"+a),n}var Ye;Ye="Browser",Object(i.c)(new a.a("auth",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((t,n)=>{y(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),y(!(null==s?void 0:s.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:s,clientPlatform:Ye,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:at(Ye)},o=new ut(t,n,r);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(E);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider("auth-internal").initialize()})),Object(i.c)(new a.a("auth-internal",t=>(t=>new Ke(t))(ht(t.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i.g)("@firebase/auth","0.20.10",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ye)),Object(i.g)("@firebase/auth","0.20.10","esm2017")},f5df:function(t,e,n){var r=n("00ee"),i=n("1626"),s=n("c6b6"),o=n("b622")("toStringTag"),a=Object,c="Arguments"==s(function(){return arguments}());t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=a(t),o))?n:c?s(e):"Object"==(r=s(e))&&i(e.callee)?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fdbf:function(t,e,n){var r=n("04f8");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}}]);