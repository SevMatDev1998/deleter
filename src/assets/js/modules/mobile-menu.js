import selectors from "../selectors/selectors.js";
import { addClass, removeClass } from "../utils/utils.js";

const toggleMobileMenu = () => {
  selectors.mobile_menu_open.addEventListener("click", () => {
    addClass(selectors.mobile_menu, "open");
    selectors.mobile_menu.setAttribute("aria-expanded", String(true));
    document.documentElement.style.overflowY = "hidden";
  });

  selectors.mobile_menu_close.addEventListener("click", () => {
    removeClass(selectors.mobile_menu, "open");
    selectors.mobile_menu.setAttribute("aria-expanded", String(false));
    document.documentElement.style.overflowY = "auto";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      removeClass(selectors.mobile_menu, "open");
      selectors.mobile_menu.setAttribute("aria-expanded", String(false));
      document.documentElement.style.overflowY = "auto";
    }
  });

  const mobile_navs = selectors.mobile_menu.querySelectorAll("a");

  mobile_navs.forEach((mobile_nav) => {
    mobile_nav.addEventListener("click", () => {
      removeClass(selectors.mobile_menu, "open");
      document.documentElement.style.overflowY = "auto";
    });
  });
};

export default toggleMobileMenu;
