/*! For license information please see extensions.js.LICENSE.txt */
(()=>{"use strict";var e={d:(o,t)=>{for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{Extension:()=>i,component:()=>c});const t=window.React;function n(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)e[n]=t[n]}return e}const r=function e(o,t){function r(e,r,i){if("undefined"!=typeof document){"number"==typeof(i=n({},t,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var a in i)i[a]&&(c+="; "+a,!0!==i[a]&&(c+="="+i[a].split(";")[0]));return document.cookie=e+"="+o.write(r,e)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],n={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var a=decodeURIComponent(i[0]);if(n[a]=o.read(c,a),e===a)break}catch(e){}}return e?n[e]:n}},remove:function(e,o){r(e,"",n({},o,{expires:-1}))},withAttributes:function(o){return e(this.converter,n({},this.attributes,o))},withConverter:function(o){return e(n({},this.converter,o),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(o)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});var i=function(e){console.log(e.manifest),console.log(e.app),console.log(e.appTree);var o=document.cookie;console.log(o),console.log(window.document.cookie);var n=r.get("argocd.token");return console.log(n),t.createElement("div",null,n,t.createElement("p",null,"TRY AGAIN"))},c=i;((window.extensions=window.extensions||{}).resources=window.extensions.resources||{})["argoproj.io/Application/ApplicationSet"]=o})();