const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a="";t.addEventListener("click",(function(){a=setInterval(`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(a),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.267e7464.js.map
