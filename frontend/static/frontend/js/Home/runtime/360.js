(self.webpackChunkiha_ecommerce=self.webpackChunkiha_ecommerce||[]).push([[360],{4360:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(7294),a=r(9583),l=r(3727),c=function(e){var t=e.data;return n.createElement(l.OL,{className:"group transition cursor-pointer  w-40  rounded-lg shadow-none hover:shadow-lg border bg-white focus:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-green-500 transform hover:scale-105",to:"/product/".concat(t.id),style:{content:"contain"}},t.images[0]&&n.createElement("img",{className:"object-contain object-center w-full h-32 my-auto bg-cover bg-center rounded-lg p-2",src:t.images[0].url}),n.createElement("div",{className:"p-2"},n.createElement("h1",{className:"group-hover:text-blue-600 overflow-ellipsis overflow-hidden h-12 "},t.productName),n.createElement("div",{className:"flex flex-wrap my-1 text-xs space-x-0.5"},n.createElement("span",{className:" fill-current text-yellow-400"},n.createElement(a.QJe,null)),n.createElement("span",{className:"fill-current text-yellow-400 "},n.createElement(a.QJe,null)),n.createElement("span",{className:"fill-current text-yellow-400 "},n.createElement(a.QJe,null)),n.createElement("span",{className:" fill-current text-gray-400"},n.createElement(a.QJe,null)),n.createElement("span",{className:"fill-current text-gray-400"},n.createElement(a.QJe,null)),n.createElement("span",{className:"text-blue-600 inline-block align-top"},"(100)")),n.createElement("div",{className:"flex overflow-x-hidden"},"₹",n.createElement("h5",{className:"font-2xl"},Intl.NumberFormat("en-IN").format(t.price)),n.createElement("small",{className:"text-gray-600 line-through mt-auto mx-1"},"₹",Intl.NumberFormat("en-IN").format(1.2*t.price))),n.createElement("div",null)))};function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(){var e,t,r=(e=(0,n.useState)([]),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,a,l=[],c=!0,o=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){o=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],l=r[1];return(0,n.useEffect)((function(){fetch("/api/product/").then((function(e){return e.json()})).then((function(e){console.log(e),l(e.data)}))}),[]),a!==[]?n.createElement("div",{className:"space-y-2"},n.createElement("h1",{className:"text-3xl p-2 sm:p-4  max-w-screen-2xl mx-auto "},"Recently Added Products"),n.createElement("div",{className:" bg-green-50 px-2 sm:px-4"},n.createElement("div",{className:"px-2 py-4 grid-flow-col grid  overflow-x-auto space-x-4 max-w-screen-2xl mx-auto overflow-x-auto"},a.map((function(e,t){return n.createElement(c,{key:t,data:e})})),n.createElement("div",{className:"h-full w-2"})))):n.createElement(n.Fragment,null)}}}]);