window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const loader = document.querySelector("#preloader .loader");
  if (preloader && loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
      document.documentElement.style.overflowY = "auto";
    }, 300);
  }
});
