(() => {
  const theme = localStorage.getItem("theme");

  if (theme && theme !== "system") {
    document.documentElement.setAttribute('data-theme', theme);
  } else {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = systemPrefersDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', "system");
  }
})()
