import toggleMobileMenu from "./modules/mobile-menu.js";
import createAnimation from "./modules/lottie.js";
import createInteraction from "./modules/intersaction.js";
import toggleSolutionsMenu from "./modules/solutions-menu.js";
import createRedirect from "./modules/redirect.js";
import createHeroAnimation from "./modules/hero-animation.js";

document.addEventListener("DOMContentLoaded", () => {
  toggleMobileMenu();
  createInteraction();
  createAnimation();
  toggleSolutionsMenu();
  createRedirect();
  createHeroAnimation()
});
