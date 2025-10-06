import selectors from "../selectors/selectors.js";

const toggleSolutionsMenu = () => {
  if (!selectors.solutions_menu) return;

  const links = selectors.solutions_menu.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      selectors.solution.checked = false;
    });
  });
};

export default toggleSolutionsMenu;
