/*! For license information please see extensions.js.LICENSE.txt */
(()=>{var e={896:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;const a=function(e){var t=Object.create(null);return function(e){return void 0===t[e]&&(t[e]=(n=e,r.test(n)||111===n.charCodeAt(0)&&110===n.charCodeAt(1)&&n.charCodeAt(2)<91)),t[e];var n}}()},355:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.processClasses=void 0;const r=n(184);t.processClasses=(e,n,r=[])=>(e=>Array.isArray(e)&&Object.prototype.hasOwnProperty.call(e,"raw"))(e)?a(e,n,r):"function"==typeof e?(0,t.processClasses)(e(n),n):Array.isArray(e)?e.map((e=>(0,t.processClasses)(e,n))):e;const a=(e,n,a)=>{const o=((e,n)=>e.map((e=>(0,r.default)((0,t.processClasses)(e,n)))))(a,n);return((e,t)=>(e.reduce(((e,n,r)=>e+t[r]+n),"")+t[t.length-1]).replace(/\s+/g," ").trim())(o,e)}},323:(e,t,n)=>{"use strict";t.ti=void 0;const r=n(184),a=n(196),o=n(355),s=n(177),i=e=>(t,...n)=>{const i=(0,a.forwardRef)(((i,l)=>{const c=(0,r.default)((0,o.processClasses)(t,i,n),i.className),d=(0,s.filterPropsToForward)(e,i);return(0,a.createElement)(e,Object.assign(Object.assign({},d),{ref:l,className:c}))}));return i.displayName=`Classed(${(e=>"string"==typeof e?e:e.displayName||e.name)(e)})`,i};s.tags.forEach((e=>{i[e]=i(e)})),t.ti=i,t.ZP=t.ti},177:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterPropsToForward=t.tags=void 0;const r=n(896);t.tags=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];const a=Symbol("Forward all props");t.filterPropsToForward=(e,n)=>{const o=(e=>(e=>"string"==typeof e&&t.tags.includes(e))(e)?r.default:a)(e);return o===a?Object.assign({},n):Object.fromEntries(Object.entries(n).filter((([e])=>o(e))))}},184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var s=a.apply(null,n);s&&e.push(s)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},265:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([e.id,'/*\n! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.mb-1\\.5 {\n  margin-bottom: 0.375rem;\n}\n.-mt-1\\.5 {\n  margin-top: -0.375rem;\n}\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n.-mt-1 {\n  margin-top: -0.25rem;\n}\n.mr-1 {\n  margin-right: 0.25rem;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: grid;\n}\n.h-full {\n  height: 100%;\n}\n.w-full {\n  width: 100%;\n}\n.grid-cols-\\[1fr_1fr_1fr_3fr_1fr\\] {\n  grid-template-columns: 1fr 1fr 1fr 3fr 1fr;\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-cols-\\[1fr_1fr_1fr_2fr_2fr\\] {\n  grid-template-columns: 1fr 1fr 1fr 2fr 2fr;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.gap-0\\.5 {\n  gap: 0.125rem;\n}\n.gap-0 {\n  gap: 0px;\n}\n.gap-2\\.5 {\n  gap: 0.625rem;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-6 {\n  gap: 1.5rem;\n}\n.\\!gap-0 {\n  gap: 0px !important;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.border-b-\\[1px\\] {\n  border-bottom-width: 1px;\n}\n.border-slate-400 {\n  --tw-border-opacity: 1;\n  border-color: rgba(148, 163, 184, 1);\n  border-color: rgba(148, 163, 184, var(--tw-border-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-neutral-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(229, 229, 229, 1);\n  background-color: rgba(229, 229, 229, var(--tw-bg-opacity));\n}\n.bg-\\[\\#cc1814\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(204, 24, 20, 1);\n  background-color: rgba(204, 24, 20, var(--tw-bg-opacity));\n}\n.bg-\\[\\#ffa500\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 165, 0, 1);\n  background-color: rgba(255, 165, 0, var(--tw-bg-opacity));\n}\n.bg-\\[\\#f0c20c\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(240, 194, 12, 1);\n  background-color: rgba(240, 194, 12, var(--tw-bg-opacity));\n}\n.bg-\\[\\#096ab0\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(9, 106, 176, 1);\n  background-color: rgba(9, 106, 176, var(--tw-bg-opacity));\n}\n.bg-\\[\\#00b09b\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(0, 176, 155, 1);\n  background-color: rgba(0, 176, 155, var(--tw-bg-opacity));\n}\n.bg-\\[\\#515456\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(81, 84, 86, 1);\n  background-color: rgba(81, 84, 86, var(--tw-bg-opacity));\n}\n.p-8 {\n  padding: 2rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-bold {\n  font-weight: 700;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.tracking-wider {\n  letter-spacing: 0.05em;\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, 1);\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n.text-neutral-600 {\n  --tw-text-opacity: 1;\n  color: rgba(82, 82, 82, 1);\n  color: rgba(82, 82, 82, var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, 1);\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.last\\:mr-0:last-child {\n  margin-right: 0px;\n}\n',""]);const i=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],i=0;i<e.length;i++){var l=e[i],c=r.base?l[0]+r.base:l[0],d=o[c]||0,p="".concat(c," ").concat(d);o[c]=d+1;var m=n(p),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var b=a(u,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:b,references:1})}s.push(p)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=n(o[s]);t[i].references--}for(var l=r(e,a),c=0;c<o.length;c++){var d=n(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},196:e=>{"use strict";e.exports=window.React}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var r={};(()=>{"use strict";n.r(r),n.d(r,{Extension:()=>T,component:()=>M});var e=n(196),t=n.n(e),a=n(323),o=a.ZP.table("flex flex-col rounded bg-white p-4"),s=a.ZP.thead("block mb-1.5 -mt-1.5"),i=a.ZP.th("flex items-center gap-0.5 text-purple-500 uppercase font-bold text-xs text-left tracking-wider"),l=a.ZP.tbody("flex flex-col gap-2.5"),c=a.ZP.tr("grid text-sm px-5 py-3"),d=a.ZP.td("flex"),p=function(t){return e.createElement(i,{className:t.className},t.children)},m=(0,a.ZP)(c)("bg-purple-50 flex items-center");function u(e){return console.log("Aici",e.data),t().createElement(t().Fragment,null,t().createElement(m,{className:"grid-cols-[1fr_1fr_1fr_3fr_1fr]"},t().createElement(d,{className:"h-full justify-center"},e.data.checkID),t().createElement(d,{className:"h-full items-center justify-center"},t().createElement("span",{className:"text-xs font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 "+b(e.data.severity)},e.data.severity)),t().createElement(d,{className:"h-full justify-center"},e.data.category),t().createElement(d,{className:"h-full justify-center text-center"},e.data.success?e.data.description:e.data.messages),t().createElement(d,{className:"justify-center"},e.data.success?t().createElement("p",{className:"bg-[#00b09b] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center"},"PASS"):t().createElement("p",{className:"bg-[#cc1814] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center"},"FAIL"))))}function b(e){switch(e){case"LOW":return"bg-[#096ab0]";case"MEDIUM":return"bg-[#f0c20c]";case"HIGH":return"bg-[#ffa500]";case"CRITICAL":return"bg-[#cc1814]"}}function f(e){return console.log(e.reportData),t().createElement(t().Fragment,null,t().createElement("div",{className:"grid grid-cols-2 gap-6 p-8"},t().createElement("p",{className:"border-b-[1px] border-slate-400"},"Created"),t().createElement("p",{className:"border-b-[1px] border-slate-400"},e.reportData.metadata.creationTimestamp),t().createElement("p",{className:"border-b-[1px] border-slate-400"},"Name"),t().createElement("p",{className:"border-b-[1px] border-slate-400"},e.reportData.metadata.name),t().createElement("p",{className:"border-b-[1px] border-slate-400"},"Namespace"),t().createElement("p",{className:"border-b-[1px] border-slate-400"},e.reportData.metadata.namespace),t().createElement("p",{className:"border-b-[1px] border-slate-400"},"Labels"),t().createElement("div",{className:"grid grid-cols-2 border-b-[1px] border-slate-400"},t().createElement("p",null,t().createElement("span",{className:"text-xs font-semibold inline-block py-1 px-2 rounded text-neutral-600 bg-neutral-200 last:mr-0 mr-1"},"plugin-config-hash:",e.reportData.metadata.labels?e.reportData.metadata.labels["plugin-config-hash"]:"-")),t().createElement("p",null,t().createElement("span",{className:"text-xs font-semibold inline-block py-1 px-2 rounded text-neutral-600 bg-neutral-200 last:mr-0 mr-1"},"resource-spec-hash:",e.reportData.metadata.labels?e.reportData.metadata.labels["resource-spec-hash"]:"-")),t().createElement("p",null,t().createElement("span",{className:"text-xs font-semibold inline-block py-1 px-2 rounded text-neutral-600 bg-neutral-200 last:mr-0 mr-1"},"trivy-operator-resource-kind:",e.reportData.metadata.labels?e.reportData.metadata.labels["trivy-operator.resource.kind"]:"-")),t().createElement("p",null,t().createElement("span",{className:"text-xs font-semibold inline-block py-1 px-2 rounded text-neutral-600 bg-neutral-200 last:mr-0 mr-1"},"trivy-operator-resource-name",e.reportData.metadata.labels?e.reportData.metadata.labels["trivy-operator.resource.name"]:"-"))),t().createElement("p",{className:"border-b-[1px] border-slate-400"},"Summary"),t().createElement("div",{className:"flex text-white gap-6 border-b-[1px] border-slate-400"},t().createElement("p",{className:"bg-[#cc1814] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center"},e.reportData.report.summary.criticalCount?e.reportData.report.summary.criticalCount:"0"),t().createElement("p",{className:"bg-[#ffa500] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center"},e.reportData.report.summary.highCount?e.reportData.report.summary.highCount:"0"),t().createElement("p",{className:"bg-[#f0c20c] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center"},e.reportData.report.summary.mediumCount?e.reportData.report.summary.mediumCount:"0"),t().createElement("p",{className:"bg-[#096ab0] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center"},e.reportData.report.summary.lowCount?e.reportData.report.summary.lowCount:"0"))),t().createElement(o,{className:"h-full w-full"},t().createElement(s,null,t().createElement(c,{className:"grid-cols-[1fr_1fr_1fr_3fr_1fr]"},t().createElement(p,{className:"justify-center"},"ID"),t().createElement(p,{className:"justify-center"},"Severity"),t().createElement(p,{className:"justify-center"},"Category"),t().createElement(p,{className:"justify-center"},"Message"),t().createElement(p,{className:"justify-center"},"Status"))),t().createElement(l,{className:"!gap-0 overflow-hidden overflow-y-auto"},e.reportData.report.checks.map((function(e){return t().createElement(u,{data:e})})))))}var g=n(379),h=n.n(g),y=n(795),w=n.n(y),x=n(569),v=n.n(x),k=n(565),E=n.n(k),N=n(216),C=n.n(N),S=n(589),D=n.n(S),A=n(265),j={};function z(e){return console.log("Aici",e.data),t().createElement(t().Fragment,null,t().createElement(m,{className:"grid-cols-[1fr_1fr_1fr_2fr_2fr]"},t().createElement(d,{className:"h-full justify-center"},e.data.vulnerabilityID),t().createElement(d,{className:"h-full items-center justify-center"},t().createElement("span",{className:"text-xs font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 "+R(e.data.severity)},e.data.severity)),t().createElement(d,{className:"h-full justify-center"},e.data.resource),t().createElement(d,{className:"h-full justify-center"},e.data.installedVersion),t().createElement(d,{className:"h-full justify-center"},e.data.fixedVersion)))}function R(e){switch(e){case"LOW":return"bg-[#096ab0]";case"MEDIUM":return"bg-[#f0c20c]";case"HIGH":return"bg-[#ffa500]";case"CRITICAL":return"bg-[#cc1814]";case"UNKNOWN":return"bg-[#515456]";case"NONE":return"bg-[#00b09b]"}}function P(e){return console.log(e.reportData),t().createElement(t().Fragment,null,t().createElement("div",{className:"grid grid-cols-2 gap-6 p-8"},t().createElement("p",{className:"border-b-[1px] border-slate-400"},"Created"),t().createElement("p",{className:"border-b-[1px] border-slate-400"},e.reportData.metadata.creationTimestamp),t().createElement("p",{className:"border-b-[1px] border-slate-400"},"Name"),t().createElement("p",{className:"border-b-[1px] border-slate-400"},e.reportData.metadata.name),t().createElement("p",{className:"border-b-[1px] border-slate-400"},"Namespace"),t().createElement("p",{className:"border-b-[1px] border-slate-400"},e.reportData.metadata.namespace),t().createElement("p",{className:"border-b-[1px] border-slate-400"},"Labels"),t().createElement("div",{className:"grid grid-cols-2 border-b-[1px] border-slate-400"},t().createElement("p",null,t().createElement("span",{className:"text-xs font-semibold inline-block py-1 px-2 rounded text-neutral-600 bg-neutral-200 last:mr-0 mr-1"},"plugin-config-hash:",e.reportData.metadata.labels?e.reportData.metadata.labels["plugin-config-hash"]:"-")),t().createElement("p",null,t().createElement("span",{className:"text-xs font-semibold inline-block py-1 px-2 rounded text-neutral-600 bg-neutral-200 last:mr-0 mr-1"},"resource-spec-hash:",e.reportData.metadata.labels?e.reportData.metadata.labels["resource-spec-hash"]:"-")),t().createElement("p",null,t().createElement("span",{className:"text-xs font-semibold inline-block py-1 px-2 rounded text-neutral-600 bg-neutral-200 last:mr-0 mr-1"},"trivy-operator-resource-kind:",e.reportData.metadata.labels?e.reportData.metadata.labels["trivy-operator.resource.kind"]:"-")),t().createElement("p",null,t().createElement("span",{className:"text-xs font-semibold inline-block py-1 px-2 rounded text-neutral-600 bg-neutral-200 last:mr-0 mr-1"},"trivy-operator-resource-name",e.reportData.metadata.labels?e.reportData.metadata.labels["trivy-operator.resource.name"]:"-"))),t().createElement("p",{className:"border-b-[1px] border-slate-400"},"Summary"),t().createElement("div",{className:"flex text-white gap-6 border-b-[1px] border-slate-400"},t().createElement("p",{className:"bg-[#cc1814] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center"},e.reportData.report.summary.criticalCount?e.reportData.report.summary.criticalCount:"0"),t().createElement("p",{className:"bg-[#ffa500] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center"},e.reportData.report.summary.highCount?e.reportData.report.summary.highCount:"0"),t().createElement("p",{className:"bg-[#f0c20c] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center"},e.reportData.report.summary.mediumCount?e.reportData.report.summary.mediumCount:"0"),t().createElement("p",{className:"bg-[#096ab0] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center"},e.reportData.report.summary.lowCount?e.reportData.report.summary.lowCount:"0"),t().createElement("p",{className:"bg-[#00b09b] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center"},e.reportData.report.summary.noneCount?e.reportData.report.summary.noneCount:"0"),t().createElement("p",{className:"bg-[#515456] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center"},e.reportData.report.summary.unknownCount?e.reportData.report.summary.unknownCount:"0"))),t().createElement(o,{className:"h-full w-full"},t().createElement(s,null,t().createElement(c,{className:"grid-cols-[1fr_1fr_1fr_2fr_2fr]"},t().createElement(p,{className:"justify-center"},"ID"),t().createElement(p,{className:"justify-center"},"Severity"),t().createElement(p,{className:"justify-center"},"Resource"),t().createElement(p,{className:"justify-center"},"Installed Version"),t().createElement(p,{className:"justify-center"},"Fixed Version"))),t().createElement(l,{className:"!gap-0 overflow-hidden overflow-y-auto"},e.reportData.report.vulnerabilities.map((function(e){return t().createElement(z,{data:e})})))))}j.styleTagTransform=D(),j.setAttributes=E(),j.insert=v().bind(null,"head"),j.domAPI=w(),j.insertStyleElement=C(),h()(A.Z,j),A.Z&&A.Z.locals&&A.Z.locals;var T=function(t){return console.log(t.resource),e.createElement("div",null,e.createElement("p",{className:"font-semibold text-black text-xl text-center p-8"},t.resource.kind),function(t,n){var r;switch(t.kind){case"ConfigAuditReport":case"ClusterRbacAssessmentReport":case"RbacAssessmentReport":case"InfraAssessmentReport":case"ExposedSecretReport":return r=t,e.createElement(f,{reportData:r,data:n});case"VulnerabilityReport":return r=t,e.createElement(P,{reportData:r,data:n})}}(t.resource,t.application))},M=T})(),((window.extensions=window.extensions||{}).resources=window.extensions.resources||{})["aquasecurity.github.io/*"]=r})();