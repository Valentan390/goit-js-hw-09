!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("h6c0i");function r(e,o){return new Promise((function(n,t){setTimeout((function(){Math.random()>.3?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var o=Number(e.target.delay.value),n=Number(e.target.amount.value),t=Number(e.target.step.value);console.log(o),console.log(n),console.log(t);for(var a=1;a<n+1;a++)r(a,o).then((function(e){var o=e.position,n=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;i.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))})),o+=t}))}();
//# sourceMappingURL=03-promises.66619e69.js.map