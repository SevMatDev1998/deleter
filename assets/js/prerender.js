(()=>{(()=>{let e=localStorage.getItem("theme");if(e&&e!=="system")document.documentElement.setAttribute("data-theme",e);else{let t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme","system")}})();})();
//# sourceMappingURL=prerender.js.map
