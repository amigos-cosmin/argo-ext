(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var l in a)e.o(a,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:a[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Extension:()=>n,component:()=>o});const a=window.React;var l=e.n(a);function r(e){return l().createElement("div",null,l().createElement("table",null,l().createElement("tr",null,l().createElement("th",null),l().createElement("th",null)),l().createElement("tr",null,l().createElement("td",null,"Created"),l().createElement("td",null,e.data.metadata.creationTimestamp)),l().createElement("tr",null,l().createElement("td",null,"Name"),l().createElement("td",null,e.data.metadata.name)),l().createElement("tr",null,l().createElement("td",null,"Namespace"),l().createElement("td",null,e.data.metadata.namespace)),l().createElement("tr",null,l().createElement("td",null,"Labels"),l().createElement("td",null,l().createElement("p",null,"plugin-config-hash",e.data.metadata.labels?e.data.metadata.labels["plugin-config-hash"]:"-"),l().createElement("p",null,"resource-spec-hash",e.data.metadata.labels?e.data.metadata.labels["resource-spec-hash"]:"-"),l().createElement("p",null,"trivy-operator.resource.kind",e.data.metadata.labels?e.data.metadata.labels["trivy-operator.resource.kind"]:"-"),l().createElement("p",null,"trivy-operator.resource.name",e.data.metadata.labels?e.data.metadata.labels["trivy-operator.resource.name"]:"-"),l().createElement("p",null,"trivy-operator.resource.namespace",e.data.metadata.labels?e.data.metadata.labels["trivy-operator.resource.namespace"]:"-")),l().createElement("tr",null,l().createElement("td",null,"Sumamry"),l().createElement("td",null,l().createElement("span",{style:{background:"red"}},e.data.report),l().createElement("span",{style:{background:"orange"}}),l().createElement("span",{style:{background:"yellow"}}),l().createElement("span",{style:{background:"blue"}}))))))}var n=function(e){var t=e.resource;return console.log(e.resource),a.createElement("div",null,a.createElement(r,{data:t}))},o=n;((window.extensions=window.extensions||{}).resources=window.extensions.resources||{})["aquasecurity.github.io/*"]=t})();