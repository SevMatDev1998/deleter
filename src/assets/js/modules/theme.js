import selectors from "../selectors/selectors.js";
import { addClass, removeClass } from "../utils/utils.js";

/**
 * Обновляет атрибуты src у изображений и srcset у тегов <source> в зависимости от текущей темы.
 * Текущая тема берётся из localStorage, или определяется системной темой, если выбрана 'system'.
 */
const toggleModeImages = () => {
  const theme = localStorage.getItem("theme");
  const currentTheme =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;
  selectors.images.forEach((image) => {
    image.src = image.src
      .replace(/\/dark\//, `/${currentTheme}/`)
      .replace(/\/light\//, `/${currentTheme}/`);
  });
  selectors.sources.forEach((source) => {
    source.srcset = source.srcset
      .replace(/\/dark\//, `/${currentTheme}/`)
      .replace(/\/light\//, `/${currentTheme}/`);
  });
};

/**
 * Добавляет класс 'active' к кнопке темы, которая соответствует текущему сохранённому в localStorage значению,
 * и удаляет этот класс у остальных кнопок.
 */
const toggleActiveClass = () => {
  selectors.theme_buttons.forEach((btn) => {
    const theme = localStorage.getItem("theme");
    const dataTheme = btn.dataset.theme;
    if (theme === dataTheme) {
      addClass(btn, "active");
    } else {
      removeClass(btn, "active");
    }
  });
};

/**
 * Добавляет слушатель события на изменение системной темы (dark/light).
 * При изменении темы вызываются функции обновления картинок и активных классов кнопок.
 */
const preferColorMode = () => {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      toggleModeImages();
      toggleActiveClass();
    });
};

/**
 * Добавляет обработчики клика на кнопки выбора темы.
 * При выборе темы:
 * - Обновляет атрибут data-theme у <html>
 * - Сохраняет выбранную тему в localStorage
 * - Обновляет изображения и активные кнопки
 */
const themeButtonAction = () => {
  selectors.theme_buttons.forEach((button) => {
    removeClass(button, "active");
    button.addEventListener("click", (e) => {
      const theme = e.currentTarget.dataset.theme;
      if (theme === "system") {
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        const systemTheme = systemPrefersDark ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", systemTheme);
      } else {
        document.documentElement.setAttribute("data-theme", theme);
      }
      localStorage.setItem("theme", theme);
      toggleModeImages();
      toggleActiveClass();
    });
  });
};

/**
 * Инициализирует логику переключения темы:
 * - Устанавливает обработчики для кнопок темы
 * - Вешает слушатель на системную тему (dark/light)
 * - Устанавливает актуальное состояние картинок и кнопок при загрузке
 */
const theme = () => {
  themeButtonAction();
  preferColorMode();
  toggleModeImages();
  toggleActiveClass();
};

export default theme;
