(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],h=0,p=[];h<o.length;h++)s=o[h],a[s]&&p.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/HeliumPhenotypeSearch/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04f9":function(e,t,n){"use strict";var r=n("ad8e"),a=n.n(r);a.a},"10e5":function(e,t,n){"use strict";var r=n("147f"),a=n.n(r);a.a},"147f":function(e,t,n){},"183b":function(e){e.exports={}},"1ece":function(e,t,n){e.exports=n.p+"img/CommonsShare.248fb748.png"},2856:function(e,t,n){},"370e":function(e,t,n){e.exports=n.p+"img/monarch-logo.e914b108.png"},"4e5b":function(e,t,n){},5068:function(e,t,n){"use strict";var r=n("4e5b"),a=n.n(r);a.a},5576:function(e){e.exports={}},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s=(n("5c0b"),n("2877")),o={},c=Object(s["a"])(o,a,i,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,l=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home container-fluid p-4"},[n("div",{staticClass:"card bg-light mb-2"},[n("div",{staticClass:"card-body"},[e._m(0),n("monarch-autocomplete",{attrs:{"home-search":!0,"auto-focus":!0},on:{interface:e.emitInterface}})],1)]),e.selection?n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("monarch-associations",{attrs:{curie:e.selection.curie,category:e.selection.category}})],1)]):e._e(),e.selection?n("div",{staticClass:"row"},[n("div",{staticClass:"col-4",staticStyle:{"padding-right":"4px","padding-top":"8px"}},[n("monarch-counts",{attrs:{curie:e.selection.curie,category:e.selection.category}})],1),n("div",{staticClass:"col-8",staticStyle:{"padding-left":"4px","padding-top":"8px"}},[n("assets-view",{attrs:{term:e.selection}})],1)]):e._e(),!e.selection&&e.searchMore?n("div",[n("results-table",{attrs:{value:e.searchMore},on:{resultInterface:e.emitRowInterface}})],1):e._e()])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("strong",[e._v("Helium Phenotype Search")])])}],d=(n("6b54"),n("96cf"),n("3040")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"monarch-autocomplete autocomplete autorootdiv",class:{"home-search":e.homeSearch,open:e.open}},[n("div",{staticClass:"input-group",class:{"input-group-sm":!e.homeSearch}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-control xform-control-sm",class:{loading:e.loading},attrs:{type:"text",autofocus:"autoFocus",placeholder:"Search for diseases and phenotypes ex: 'Heart disease' or 'abnormality of skeletal morphology'"},domProps:{value:e.value},on:{input:[function(t){t.target.composing||(e.value=t.target.value)},e.debounceInput],keydown:[e.inputChanged,function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.enter(t):null},function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?e.down(t):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?e.up(t):null},function(t){return"button"in t||!e._k(t.keyCode,"esc",27,t.key,"Escape")?e.clearSearch(t):null}],blur:e.clearSearch}}),n("div",{staticClass:"input-group-append"},[n("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.topright",modifiers:{topright:!0}}],staticClass:"btn xbtn-sm btn-outline-info py-0",attrs:{type:"button",title:"Show all matching results"},on:{click:e.showMore}},[e._v("\n        search\n      ")])]),e.open?n("div",{staticClass:"dropdown-menu list-group dropList px-4",staticStyle:{"overflow-y":"auto"}},[e._l(e.suggestions,function(t,r){return n("div",{key:r,staticClass:"border-bottom px-1",class:{active:e.isActive(r)},on:{mousedown:function(t){e.suggestionClick(r)},mouseover:function(t){e.mouseOver(r)}}},[n("div",{staticClass:"row p-0"},[t.has_hl?n("div",{staticClass:"col-5"},[n("span",{domProps:{innerHTML:e._s(t.highlight)}})]):n("div",{staticClass:"col-5"},[n("strong",[e._v(e._s(t.match))])]),n("div",{staticClass:"col-4"},[n("i",[e._v(e._s(t.taxon))])]),n("div",{staticClass:"col-3 text-align-right"},[n("small",[e._v(e._s(t.category))])])])])}),n("div",{staticClass:"row"},[0===e.suggestions.length?n("div",{staticClass:"btn col m-2"},[e._v("\n          No results for '"+e._s(e.value)+"'\n        ")]):e._e()])],2):e._e()])])},m=[],f=(n("456d"),n("4917"),n("ac6a"),n("6bde")),v=(n("673e"),n("bc3a")),y=n.n(v),b={development:{type:"development",app_base:"https://beta.monarchinitiative.org",scigraph_url:"https://scigraph-ontology-dev.monarchinitiative.org/scigraph/",scigraph_data_url:"https://scigraph-data-dev.monarchinitiative.org/scigraph/",golr_url:"https://solr.monarchinitiative.org/solr/golr/",search_url:"https://solr.monarchinitiative.org/solr/search/",owlsim_services_url:"https://beta.monarchinitiative.org/owlsim",analytics_id:"",biolink_url:"https://api.monarchinitiative.org/api/"},beta:{type:"beta",app_base:"https://beta.monarchinitiative.org",scigraph_url:"https://scigraph-ontology-dev.monarchinitiative.org/scigraph/",scigraph_data_url:"https://scigraph-data-dev.monarchinitiative.org/scigraph/",golr_url:"https://solr.monarchinitiative.org/solr/golr/",search_url:"https://solr.monarchinitiative.org/solr/search/",owlsim_services_url:"https://beta.monarchinitiative.org/owlsim",analytics_id:"",biolink_url:"https://api-dev.monarchinitiative.org/api/"},cgrb:{type:"beta",app_base:"https://monarch-app-beta.cgrb.oregonstate.edu",scigraph_url:"https://monarch-scigraph-ontology-dev.cgrb.oregonstate.edu/scigraph/",scigraph_data_url:"https://monarch-scigraph-data-dev.cgrb.oregonstate.edu/scigraph/",golr_url:"https://monarch-solr6-dev.cgrb.oregonstate.edu/solr/golr/",search_url:"https://monarch-solr6-dev.cgrb.oregonstate.edu/solr/search/",owlsim_services_url:"https://monarch-app-beta.cgrb.oregonstate.edu/owlsim",analytics_id:"",biolink_url:"https://api.monarchinitiative.org/api/"}},C=b.cgrb,_=C.biolink_url;C.scigraph_url;var w={anatomy:["gene"],disease:["gene","phenotype","model","variant","genotype","literature"],function:["gene"],gene:["disease","phenotype","model","variant","genotype","literature"],genotype:["disease","gene","phenotype","model","variant","literature"],homolog:["gene"],interaction:["gene"],literature:["disease"],model:["disease","gene","genotype","phenotype","variant","literature"],orthoPhenotype:["gene"],orthoDisease:["gene"],pathway:["disease","gene"],phenotype:["disease","gene","genotype","variant","literature"],variant:["disease","gene","phenotype","model","genotype","literature"]};function x(e,t,n){return O.apply(this,arguments)}function O(){return O=Object(d["a"])(regeneratorRuntime.mark(function e(t,n,r){var a,i,s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return"literature"!==r&&(r+="s"),a="".concat(_,"bioentity/").concat(n,"/").concat(t,"/").concat(r),i={fetch_objects:!1,unselect_evidence:!0,exclude_automatic_assertions:!1,use_compact_associations:!0,rows:1},e.next=5,y.a.get(a,{params:i});case 5:return s=e.sent,o=s.data,e.abrupt("return",o);case 8:case"end":return e.stop()}},e,this)})),O.apply(this,arguments)}function k(e,t){return T.apply(this,arguments)}function T(){return T=Object(d["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=n.toLowerCase(),r=w[n],!r){e.next=10;break}return a=r.map(function(e){var r=x(t,n,e);return r}),e.next=6,Promise.all(a);case 6:return i=e.sent,s={},r.forEach(function(e,t){var n=i[t].numFound;s[e]={facetCount:n,totalCount:n}}),e.abrupt("return",s);case 10:return console.log("getCountsForNode",t,n,"NO ASSOCIATIONS KNOWN"),e.abrupt("return",null);case 12:case"end":return e.stop()}},e,this)})),T.apply(this,arguments)}function I(e,t){return N.apply(this,arguments)}function N(){return N=Object(d["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,s,o,c,u,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r="".concat(_,"bioentity/").concat(n,"/").concat(t),a={fetch_objects:!0,unselect_evidence:!1,exclude_automatic_assertions:!1,use_compact_associations:!1,rows:100},e.next=4,y.a.get(r,{params:a});case 4:return i=e.sent,s=i.data,s.xrefs||(s.xrefs=[{url:"",label:"BioLink:FIXME/xrefs",blank:!1}]),o="".concat(_,"graph/node/").concat(t),e.next=10,y.a.get(o);case 10:return c=e.sent,u=c.data,s.edges=u.edges,s.nodes=u.nodes,e.next=16,k(t,n);case 16:return l=e.sent,s.counts=l,e.abrupt("return",s);case 19:case"end":return e.stop()}},e,this)})),N.apply(this,arguments)}function R(e,t){return P.apply(this,arguments)}function P(){return P=Object(d["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,s,o,c=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=c.length>2&&void 0!==c[2]?c[2]:"10",a="".concat(_,"search/entity/autocomplete/"),i="".concat(a).concat(t),s=new URLSearchParams,s.append("rows",r),s.append("start",0),s.append("highlight_class","hilite"),s.append("boost_q","category:genotype^-10"),"gene"===n.toString()&&(s.append("boost_fx","pow(edges,0.334)"),s.append("prefix","NCBIGene")),"Phenotype"===n.toString()&&(s.append("prefix","HP"),s.append("prefix","MONDO"),s.append("prefix","EFO"),s.append("prefix","OBA"),s.append("prefix","NCIT")),s.append("prefix","-OMIA"),o=new Promise(function(e,t){y.a.get(i,{params:s}).then(function(n){var r=n.data;"object"!==Object(f["a"])(r)?t(r):e(r)}).catch(function(e){t(e)})}),e.abrupt("return",o);case 13:case"end":return e.stop()}},e,this)})),P.apply(this,arguments)}function A(e){var t="".concat(_,"bioentity/").concat(e),n={fetch_objects:!0,rows:100},r=new Promise(function(e,r){y.a.get(t,{params:n}).then(function(t){var n=t;"object"!==Object(f["a"])(n)?r(n):e(n)}).catch(function(e){r(e)})});return r}function S(e){var t="https://scigraph-ontology.monarchinitiative.org/scigraph/graph/".concat(e),n=new Promise(function(e,n){y.a.get(t).then(function(t){var r=t;"object"!==Object(f["a"])(r)?n(r):e(r)}).catch(function(e){n(e)})});return n}function M(e){return D.apply(this,arguments)}function D(){return D=Object(d["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n="https://deepakunni3.com/solr/genophenosearch-core/select/",r={defType:"edismax",fl:"*,score",facet:!0,q:"isa_closure:".concat(t),wt:"json"},e.next=4,y.a.get(n,{params:r});case 4:return a=e.sent,i=a.data,e.abrupt("return",i);case 7:case"end":return e.stop()}},e,this)})),D.apply(this,arguments)}function j(e){return H.apply(this,arguments)}function H(){return H=Object(d["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n="https://deepakunni3.com/solr/genophenosearch-core/select/",r={defType:"edismax",fl:"*,score",facet:!0,q:"isa_closure_label:".concat(t),wt:"json"},e.next=4,y.a.get(n,{params:r});case 4:return a=e.sent,i=a.data,e.abrupt("return",i);case 7:case"end":return e.stop()}},e,this)})),H.apply(this,arguments)}var E=n("b047"),B=[{searchString:"Marfan Syndrome"},{searchString:"Spinocerebellar Ataxia 2",category:"disease"},{searchString:"Multicystic kidney dysplasia",category:"Phenotype"},{searchString:"Shh",category:"gene"}],$={name:"AutoComplete",filters:{allLower:function(e){return e.toLowerCase()}},props:{showSearchButton:{type:Boolean,required:!1,default:!1},autoFocus:{type:Boolean,required:!1,default:!1},homeSearch:{type:Boolean,required:!1,default:!1},singleCategory:{type:String,required:!1,default:""}},data:function(){return{destroying:!1,exampleSearches:B,selected:"Phenotype",options:[{text:"Gene",value:"gene"},{text:"Phenotype",value:"Phenotype"}],catDropDown:!1,value:"",suggestions:[],open:!1,current:-1,loading:!1}},watch:{value:function(){this.value||(this.open=!1)},selected:function(e){this.value="",this.fetchData()}},beforeDestroy:function(){this.destroying=!0},methods:{debounceInput:E(function(){this.destroying||this.fetchData()},500,{leading:!1,trailing:!0}),fetchData:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(){var t,n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.selected,e.next=4,R(this.value,t);case 4:n=e.sent,this.suggestions=[],this.current=-1,n.docs.forEach(function(e){var t={match:e.match,category:r.categoryMap(e.category),taxon:r.checkTaxon(e.taxon_label),curie:e.id,highlight:e.highlight,has_hl:e.has_highlight};r.suggestions.push(t)}),this.open=!0,this.loading=!1,e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.log("nodeResponse ERROR",e.t0,this);case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(){return e.apply(this,arguments)}}(),enter:function(){var e=this.suggestions[this.current];e?(e["selected"]=!0,e["searchTerm"]=this.value,this.$emit("interface",e)):this.showMore(),this.open=!1,this.suggestions=[]},up:function(){this.current>0&&(this.current-=1)},toggleFilterBox:function(){this.catDropDown=!this.catDropDown},inputChanged:function(){this.catDropDown=!1},down:function(){this.current<this.suggestions.length-1&&(this.current+=1)},isActive:function(e){return e===this.current},mouseOver:function(e){this.current=e},suggestionClick:function(e){var t=this.suggestions[e];t["selected"]=!0,t["searchTerm"]=this.value,this.$emit("interface",t),this.open=!1,this.suggestions=[]},showMore:function(){this.$emit("interface",{selected:!1,searchTerm:this.value,category:"Phenotype"}),this.value=""},clearSearch:function(){this.suggestions=[],this.open=!1},categoryMap:function(e){var t={gene:"gene","variant locus":"variant",Phenotype:"phenotype",genotype:"genotype",disease:"disease"},n=e.reduce(function(e,n){var r=t[n];return r&&(e[r]=r),e},{});return n.gene||n.variant||Object.keys(n).join(",")},checkTaxon:function(e){return"string"===typeof e?e:null},useExample:function(e,t){this.selected=[],t&&this.selected.push(t),this.value=e}}},L=$,V=(n("10e5"),Object(s["a"])(L,g,m,!1,null,null,null));V.options.__file="MonarchAutocomplete.vue";var F=V.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card bg-light mb-3",staticStyle:{height:"100%"}},[e._m(0),n("div",{staticClass:"card-body"},[n("b-table",{attrs:{small:"",hover:"",items:e.items,fields:e.fields},scopedSlots:e._u([{key:"study",fn:function(t){return[n("a",{attrs:{href:t.item.url}},[e._v(e._s(t.item.study))])]}},{key:"matching_tag",fn:function(t){return[n("router-link",{attrs:{to:t.item.matching_tag.id}},[n("span",{staticClass:"badge badge-primary badge-info"},[e._v(e._s(t.item.matching_tag.label)),n("br"),e._v(e._s(t.item.matching_tag.id))])])]}},{key:"other_tags",fn:function(t){return e._l(t.item.other_tags,function(t){return n("div",[n("div",{staticClass:"py-1"},[n("router-link",{attrs:{to:t.id}},[n("span",{staticClass:"badge badge-secondary"},[e._v(e._s(t.label)),n("br"),e._v(e._s(t.id))])])],1)])})}}])}),e.items.length?e._e():n("div",[e._v("\n      No assets\n    ")])],1)])},U=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-header"},[r("strong",[e._v("CommonsShare Data Assets")]),r("img",{staticStyle:{"max-height":"20px",float:"right"},attrs:{src:n("1ece")}})])}],G=(n("5576"),n("183b"),{name:"AssetsView",props:{term:{type:Object,required:!0}},data:function(){return{termMap:{"NCIT:C17357":"Gender","NCIT:C17049":"race","NCIT:C25347":"Height","NCIT:C25208":"Weight","NCIT:C16358":"body mass index","NCIT:C100948":"Waist Circumference","NCIT:C100947":"Hip Circumference","NCIT:C17651":"Waist-Hip Ratio","NCIT:C2931":"Cardiovascular disease","NCIT:C27996":"Myocardial infarction","NCIT:C100085":"Coronary Angiography","NCIT:C51998":"coronary artery bypass graft surgery","NCIT:C50577":"Heart Failure","NCIT:C25298":"Systolic Blood Pressure","NCIT:C25299":"Diastolic blood pressure","NCIT:C3117":"Hypertension","NCIT:C92744":"Blood Glucose Measurement","NCIT:C74788":"Insulin Measurement","NCIT:C64849":"Glycosylated Hemoglobin Measurement","NCIT:C2985":"Diabetes Mellitus","NCIT:C50466":"Atrial Fibrillation","NCIT:C62087":"Mean QRS Duration","NCIT:C83501":"QT interval","NCIT:C83502":"PR interval","NCIT:C49677":"heart rate","NCIT:C50631":"Left ventricular hypertrophy","NCIT:C111285":"Pacemaker ECG Assessment","NCIT:C64796":"Hematocrit Measurement","NCIT:C64848":"Hemoglobin Measurement","NCIT:C51951":"platelet count","NCIT:C51946":"Erythrocyte Count","NCIT:C51948":"Leukocyte Count","NCIT:C64606 ":"Fibrinogen Measurement","NCIT:C81960":"Factor VII Measurement","NCIT:C81961":"Factor VIII Measurement","NCIT:C98799":"von Willebrand Factor Measurement","NCIT:C99537":"Venous Thromboembolism","NCIT:C64548":"C-Reactive Protein Measurement","NCIT:C74834":"Interleukin 6 Measurement","NCIT:C64547":"Creatinine Measurement","NCIT:C92290":"Cystatin C Measurement","NCIT:C74761":"Albumin To Creatinine Protein Ratio Measurement","NCIT:C90505":"Glomerular Filtration Rate","NCIT:C105588":"Low Density Lipoprotein Cholesterol Measurement","NCIT:C105587":"High Density Lipoprotein Cholesterol Measurement","NCIT:C64812":"Triglyceride Measurement","NCIT:C105586":"Cholesterol Measurement","NCIT:C111361":"Forced Vital Capacity","NCIT:C38084":"Forced Expiratory Volume in 1 Second","NCIT:C28397":"asthma","NCIT:C3199":"Chronic Obstructive Pulmonary Disease","NCIT:C26884":"Sleep Apnea","NCIT:C18270":"Cigarette smoking","NCIT:C95802 ":"Ischemic Cerebrovascular Accident","NCIT:C95803 ":"Hemorrhagic Cerebrovascular Accident","NCIT:C3390":"Cerebrovascular Accident","NCIT:C25150":"Age","NCIT:C63663":"Fasting","NCIT:C16632":"Geographic Area","HP:0001717":"Coronary artery calcification","HP:0012273":"Increased carotid artery intimal medial thickness","HP:0001658":"Myocardial infarction","HP:0000822":"Hypertension","HP:0040217":"Elevated hemoglobin A1c","HP:0005110":"Atrial fibrillation","HP:0031547":"Abnormal QT interval","HP:0031593":"Abnormal PR interval","HP:0003115":"Abnormal EKG","HP:0001712":"Left ventricular hypertrophy","HP:0002099":"asthma","HP:0012824":"Severity","HP:0006510":"Chronic Obstructive Pulmonary Disease","HP:0010535":"Sleep Apnea","HP:0002140":"Ischemic stroke","HP:0001342":"Cerebral hemorrhage","EFO:0007117":"carotid artery intima media thickness","OBA:1001089":"sex","OBA:1001088":"race","OBA:VT0001253":"body height","OBA:VT0001259":"body mass","OBA:1001084":"waist circumference","OBA:1000032":"hip circumference","OBA:VT0000188":"blood glucose amount","OBA:VT0001560":"blood insulin amount","OBA:1001085":"QRS duration","OBA:1001087":"heart rate","OBA:VT0001588":"blood hemoglobin amount","OBA:VT0003179":"platelet quantity","OBA:VT0001586":"erythrocyte quantity","OBA:VT0000217":"leukocyte quantity","OBA:0000061":"circulating fibrinogen levels","OBA:VT0008595":"blood interleukin-6 amount","OBA:VT0005328":"blood creatinine amount","OBA:0003747":"glomerular filtration rate","OBA:VT0000181":"blood LDL cholesterol amount","OBA:VT0000184":"blood HDL cholesterol amount","OBA:VT0002644":"blood triglyceride amount","OBA:VT0000180":"blood cholesterol amount","MONDO:0005068":"myocardial infarction (disease)","MONDO:0005252":"Heart Failure","MONDO:0005044 ":"hypertensive disorder","MONDO:0005015":"diabetes mellitus (disease)","MONDO:0005399":"venous thromboembolism","MONDO:0004979":"asthma","MONDO:0005002":"Chronic Obstructive Pulmonary Disease","MONDO:0007147":"obstructive sleep apnea syndrome"},dataPacketCurie:"",dataPacketTerm:"",items:[],fields:[{key:"study",label:"Study",class:"fieldHeaders"},{key:"matching_tag",label:"Matching Term",class:"fieldHeaders"},{key:"other_tags",label:"Other Annotations",class:"fieldHeaders"}]}},mounted:function(){this.gatherData()},watch:{term:function(){this.gatherData()}},methods:{formatOtherAnnotations:function(e){var t=this,n=[];return e.forEach(function(e){n.push({id:e,label:t.termMap[e]})}),n},gatherData:function(){this.dataPacketCurie="",this.fetchAssettsCurie(this.term.curie)},fetchAssettsCurie:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M(t);case 3:n=e.sent,this.parseItems(n),this.dataPacketCurie=n,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("nodeResponse ERROR",e.t0,this);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),fetchAssettsTerm:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j(t);case 3:n=e.sent,this.dataPacketTerm=n,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("nodeResponse ERROR",e.t0,this);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),parseItems:function(e){var t=this;this.items=[],e.response.docs.forEach(function(e){t.items.push({study:e.study_accession,url:e.study_dataset_url,matching_tag:{id:e.ontology_class,label:t.termMap[e.ontology_class]},other_tags:t.formatOtherAnnotations(e.other_annotations)})})}}}),Q=G,W=(n("d92c"),Object(s["a"])(Q,q,U,!1,null,null,null));W.options.__file="AssetsView.vue";var X=W.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card  bg-light"},[e._m(0),n("div",{staticClass:"card-body"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-4",staticStyle:{"padding-left":"20px"}},[n("h3",[n("strong",[e._v("Preferred Label: ")]),n("br"),n("a",{staticClass:"hlink",attrs:{href:e.monarchUrl}},[n("span",{staticStyle:{"font-size":"1.2em"}},[e._v(e._s(e.dataPacket.label)+" ")]),n("font-awesome-icon",{attrs:{size:"xs",icon:"external-link-alt"}})],1)])]),n("div",{staticClass:"col-4"},[e._m(1),n("h3",[n("span",{staticClass:"badge badge-primary badge-info"},[e._v(e._s(e.dataPacket.id))])])]),n("div",{staticClass:"col-4"},[e._m(2),n("h5",e._l(e.dataPacket.synonyms,function(t){return n("span",{staticClass:"badge badge-info badge-large mx-1"},[e._v("\n        "+e._s(t.val)+"\n          ")])}))])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-4",staticStyle:{"padding-left":"20px"}},[e._m(3),n("br"),n("p",{staticStyle:{"font-size":"1.3em"}},[e._v(e._s(e.dataPacket.description))])]),n("div",{staticClass:"col-4"},[e._m(4),n("div",{staticClass:"mt-3"},[n("a",{staticClass:"btn btn-outline-info btn-block my-2",attrs:{target:"_blank",id:"hippoLink",href:e.hippoUrl}},[e._v("Hippo Literature Query\n        ")]),n("b-tooltip",{attrs:{target:"hippoLink",title:"Retrieves co-mentions of genes, phentoypes, diseases, variants, etc. in the literature",placement:"bottomright"}})],1)]),n("div",{staticClass:"col-4"},[n("h3",[n("strong",[e._v("Cross References:")]),n("h5",e._l(e.xRefs,function(t){return n("span",{staticClass:"badge badge-secondary badge-large mx-1"},[e._v(e._s(t))])}))])])])])])},K=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-header"},[r("strong",[e._v("Monarch Knowledge Summary")]),r("img",{staticStyle:{"max-height":"20px",float:"right"},attrs:{src:n("370e")}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("strong",[e._v("Primary Identifier:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("strong",[e._v("Synonyms:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("strong",[e._v("Description: ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("strong",[e._v("Literature Co-Mentions: ")])])}],J={name:"MonarchAssociations",props:{curie:{type:String,required:!0},category:{type:String,required:!0}},data:function(){return{fields:["Association Type","Count"],items:[],dataPacket:"",xRefs:""}},computed:{monarchUrl:function(){return"https://monarchinitiative.org/".concat(this.category,"/").concat(this.curie)},hippoUrl:function(){return"http://hippo.monarchinitiative.org/#/query/".concat(this.curie)}},mounted:function(){this.fetchData(this.curie,this.category),this.getXrefs(this.curie)},watch:{curie:function(){this.fetchData(this.curie,this.category),this.getXrefs(this.curie)}},methods:{fetchData:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I(t,n);case 3:r=e.sent,this.dataPacket=r,this.$emit("monarchInterface",this.dataPacket),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("nodeResponse ERROR",e.t0,this);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t,n){return e.apply(this,arguments)}}(),getXrefs:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(t);case 3:n=e.sent,this.xRefs=n.data.nodes[0].meta["http://www.geneontology.org/formats/oboInOwl#hasDbXref"],e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("nodeResponse ERROR",e.t0,this);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()}},Y=J,Z=(n("c248"),Object(s["a"])(Y,z,K,!1,null,null,null));Z.options.__file="MonarchAssociations.vue";var ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-2"},[e._v("\n  "+e._s(e.items.length)+" total terms found\n  "),n("b-table",{attrs:{small:"",striped:"",hover:"",bordered:"","per-page":10,"current-page":e.currentPage,items:e.items,fields:e.fields},on:{"row-clicked":e.emitSelection},scopedSlots:e._u([{key:"index",fn:function(t){return[e._v("\n      "+e._s(t.index+1)+"\n    ")]}},{key:"data",fn:function(t){return[e._v("\n      "+e._s(t.value.curie)+"\n    ")]}}])}),n("b-pagination",{attrs:{align:"center",size:"md","total-rows":e.items.length,"per-page":10},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)},ne=[],re={name:"ResultTable",props:{value:{type:Object,required:!0}},computed:{searchTerm:function(){return this.value.searchTerm},searchCategory:function(){return this.value.category}},data:function(){return{currentPage:1,fields:["index","match","category","curie"],items:[]}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(){var t,n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.searchCategory,e.next=4,R(this.searchTerm,t,500);case 4:n=e.sent,this.items=[],this.current=-1,n.docs.forEach(function(e){var t={match:e.match,category:r.categoryMap(e.category),taxon:r.checkTaxon(e.taxon_label),curie:e.id,highlight:e.highlight,has_hl:e.has_highlight};r.items.push(t)}),this.open=!0,this.loading=!1,e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.log("nodeResponse ERROR",e.t0,this);case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(){return e.apply(this,arguments)}}(),categoryMap:function(e){var t={gene:"gene","variant locus":"variant",Phenotype:"phenotype",genotype:"genotype",disease:"disease"},n=e.reduce(function(e,n){var r=t[n];return r&&(e[r]=r),e},{});return n.gene||n.variant||Object.keys(n).join(",")},checkTaxon:function(e){return"string"===typeof e?e:null},emitSelection:function(e){this.$emit("resultInterface",e)}}},ae=re,ie=(n("04f9"),Object(s["a"])(ae,te,ne,!1,null,null,null));ie.options.__file="ResultsTable.vue";var se=ie.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card bg-light",staticStyle:{height:"100%","max-height":"450px"}},[e._m(0),n("div",{staticClass:"card-body"},[e.hasData?n("div",[n("b-table",{attrs:{small:"",hover:"",items:e.items,fields:e.fields},on:{"row-clicked":e.nodePage},scopedSlots:e._u([{key:"association",fn:function(t){return[n("div",{staticClass:"py-2"},[e._v(e._s(e.firstCap(t.item.association)))])]}},{key:"count",fn:function(t){return[n("div",{staticClass:"py-2"},[n("a",{attrs:{target:"_blank",href:e.monarchUrlAnchored(t.item.category)}},[e._v(e._s(t.item.count))])])]}}])})],1):n("div",[e._v("No Associations")])])])},ce=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-header"},[r("strong",[e._v("Monarch Association Counts")]),r("img",{staticStyle:{"max-height":"20px",float:"right"},attrs:{src:n("370e")}})])}],ue=(n("ffc1"),{name:"MonarchCounts",props:{curie:{type:String,required:!0},category:{type:String,required:!0}},data:function(){return{hasData:!1,items:[],fields:[{key:"association",label:"Association",class:"bold"},{key:"count",label:"Count",class:"bold"}]}},mounted:function(){this.fetchCounts(this.curie,this.category)},watch:{curie:function(){this.fetchCounts(this.curie,this.category)}},methods:{fetchCounts:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(t,n);case 3:r=e.sent,this.formatCounts(r),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("nodeResponse ERROR",e.t0,this);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t,n){return e.apply(this,arguments)}}(),formatCounts:function(e){var t=this;this.items=[],e?(this.hasData=!0,Object.entries(e).forEach(function(e,n){t.items.push({association:e[0],count:e[1].totalCount})})):this.hasData=!1},firstCap:function(e){return e.charAt(0).toUpperCase()+e.substr(1)},monarchUrlAnchored:function(e){var t="https://monarchinitiative.org/".concat(this.category.toLowerCase(),"/").concat(this.curie,"#").concat(e,"s");return"literature"===e&&(t=t.substring(0,t.length-1)),t},dictToList:function(e,t){return{association:e,count:{url:e,count:t["totalCount"]}}},nodePage:function(e){location.assign(this.monarchUrlAnchored(e.association))}}}),le=ue,he=(n("5068"),Object(s["a"])(le,oe,ce,!1,null,null,null));he.options.__file="MonarchCounts.vue";var pe=he.exports,de={name:"home",data:function(){return{exampleUrls:{example1:{name:"Abnormality of skeletal morphology",id:"/HP:0011842"},example2:{name:"heart disease",id:"/MONDO:0005267"}},selection:"",searchMore:"",selected:!1}},components:{"monarch-associations":ee,"monarch-autocomplete":F,"assets-view":X,"results-table":se,"monarch-counts":pe},mounted:function(){this.$route.params.id&&this.changeRouted()},watch:{"$route.params.id":function(){this.$route.params.id&&this.changeRouted()}},methods:{fetchObjectData:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.selection="",e.next=4,A(t);case 4:n=e.sent,this.selection=this.parseObjectData(n),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("nodeResponse ERROR",e.t0,this);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),parseObjectData:function(e){return{category:e.data.categories.toString(),curie:e.data.id,match:e.data.label}},emitRowInterface:function(e){this.$router.push("/".concat(e.curie))},emitInterface:function(e){e.selected?this.$router.push("/".concat(e.curie)):(this.$router.push("/"),this.selection="",this.searchMore=e)},changeRouted:function(){this.fetchObjectData(this.$route.params.id)}}},ge=de,me=(n("cccb"),Object(s["a"])(ge,h,p,!1,null,null,null));me.options.__file="Home.vue";var fe=me.exports;r["a"].use(l["a"]);var ve=new l["a"]({mode:"history",base:"/HeliumPhenotypeSearch/",routes:[{path:"/",name:"home",component:fe},{path:"/:id",name:"home/",component:fe}]}),ye=n("1e18"),be=(n("2dd8"),n("ecee")),Ce=n("c074"),_e=n("ad3d"),we=n("2ef0"),xe=n.n(we);be["c"].add(Ce["a"]),r["a"].component("font-awesome-icon",_e["a"]),r["a"].config.productionTip=!1,r["a"].use(ye["a"]),r["a"].use(xe.a),new r["a"]({router:ve,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("2856"),a=n.n(r);a.a},"8f59":function(e,t,n){},"9e49":function(e,t,n){},ad8e:function(e,t,n){},c248:function(e,t,n){"use strict";var r=n("9e49"),a=n.n(r);a.a},cccb:function(e,t,n){"use strict";var r=n("8f59"),a=n.n(r);a.a},d92c:function(e,t,n){"use strict";var r=n("e076"),a=n.n(r);a.a},e076:function(e,t,n){}});
//# sourceMappingURL=app.6e1da008.js.map