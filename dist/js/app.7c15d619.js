(function(t){function e(e){for(var r,o,c=e[0],u=e[1],i=e[2],f=0,h=[];f<c.length;f++)o=c[f],s[o]&&h.push(s[o][0]),s[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(h.length)h.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==s[u]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},s={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),s=n.n(r);s.a},"048d":function(t,e,n){"use strict";var r=n("9621"),s=n.n(r);s.a},"2a78":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[(this.suggestions.length,n("div",{attrs:{id:"app"}},[n("Header",{staticClass:"head"}),n("Search",{on:{searchThesaurus:t.searchThesaurus}}),n("Synonyms",{attrs:{synonymObject:this.currentSearch},on:{searchThesaurus:t.searchThesaurus}})],1))])},a=[],o=(n("96cf"),n("3b8d")),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title-icon"},[r("img",{staticClass:"icon",attrs:{src:n("9bfb"),alt:"book icon"}}),r("h1",[t._v("My Thesaurus")]),r("h2",{staticClass:"prompt"},[t._v("Where would you like to take your vocabulary today?")])])}],i={name:"title-icon"},l=i,f=(n("746c"),n("2877")),h=Object(f["a"])(l,c,u,!1,null,"3f7f51d7",null),p=h.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("form",{staticClass:"form",on:{submit:t.searchThesaurus}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.word,expression:"word"}],staticClass:"input",attrs:{type:"text",name:"word",placeholder:"ex: Verbose"},domProps:{value:t.word},on:{input:function(e){e.target.composing||(t.word=e.target.value)}}}),n("input",{staticClass:"submit-btn",attrs:{type:"submit",value:"Submit"}})])])},m=[],y={name:"Search",data:function(){return{word:""}},methods:{searchThesaurus:function(t){t.preventDefault(),this.$emit("searchThesaurus",this.word),this.word=""}}},v=y,b=(n("048d"),Object(f["a"])(v,d,m,!1,null,"6de9d9ce",null)),g=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[this.$attrs.synonymObject.word?n("h2",[t._v(t._s("You searched: "+this.$attrs.synonymObject.word))]):t._e(),this.$attrs.synonymObject.word?n("h2",{staticClass:"definition"},[t._v(t._s("Definition: "+this.$attrs.synonymObject.shortDef))]):t._e(),n("section",{staticClass:"flex-container"},t._l(this.$attrs.synonymObject.synonyms,function(e){return n("div",{key:e.id},[n("Synonym",{staticClass:"synonym",attrs:{synonym:e},on:{searchThesaurus:function(n){return t.$emit("searchThesaurus",e)}}})],1)}),0)])},_=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(t){t.preventDefault()}}},[n("button",{on:{click:function(e){return t.$emit("searchThesaurus",t.synonym)}}},[t._v(t._s(t.synonym))])])},O=[],x={name:"synonym",props:["synonym"]},S=x,T=(n("c14d"),Object(f["a"])(S,j,O,!1,null,"2595fd1e",null)),$=T.exports,C={name:"synonyms",components:{Synonym:$},data:function(){return{synonymObject:{}}},props:["currentSearch"]},k=C,P=(n("a9c5"),Object(f["a"])(k,w,_,!1,null,"2c760312",null)),D=P.exports,E="3b2ba464-9af8-465e-a3b7-e87a1c7deea8",M={name:"app",components:{Header:p,Search:g,Synonyms:D},data:function(){return{currentSearch:{},suggestions:[]}},methods:{searchThesaurus:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.dictionaryapi.com/api/v3/references/thesaurus/json/".concat(e,"?key=").concat(E));case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,console.log(r),"string"===typeof r[0]?this.suggestions=r:this.cleanResults(r,e);case 8:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),cleanResults:function(t,e){var n={word:e,shortDef:t[0].shortdef[0]||null,synonyms:t[0].meta.syns[0]||null,antonyms:t[0].meta.ants[0]||null};this.currentSearch=n},searchAgain:function(t){event.preventDefault()}}},R=M,H=(n("034f"),Object(f["a"])(R,s,a,!1,null,null,null)),J=H.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(J)}}).$mount("#app")},"64a9":function(t,e,n){},"699e":function(t,e,n){},"746c":function(t,e,n){"use strict";var r=n("2a78"),s=n.n(r);s.a},9621:function(t,e,n){},"9bfb":function(t,e,n){t.exports=n.p+"img/bookFavicon.af5498e0.png"},a9c5:function(t,e,n){"use strict";var r=n("c428"),s=n.n(r);s.a},c14d:function(t,e,n){"use strict";var r=n("699e"),s=n.n(r);s.a},c428:function(t,e,n){}});
//# sourceMappingURL=app.7c15d619.js.map