!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=null;function n(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.querySelector("body").style.backgroundColor="".concat(t)}t.addEventListener("click",(function(){a=setInterval(n,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(a),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.6b054103.js.map
