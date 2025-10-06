/**
 * Создаёт слайдер Siema
 * @param {HTMLElement|string} target
 * @param {Options} options
 * @returns {Splide|undefined} Экземпляр слайдера или undefined, если элемент не найден
 */
export const createSlider = (target, options) => {
  /**
   * @param {Options} options
   */
  const defaultOptions = {
    ...options,
    accessibility: false,
    role: undefined,
    arrows: false,
    pagination: false,
  };

  /** @type {Splide} */
  return new Splide(target, defaultOptions).mount();
};

/**
 * Добавляет CSS класс на элемент
 * @param {Element} element DOM-элемент
 * @param {string} [className='active'] Имя класса
 */
export const addClass = (element, className = "active") => {
  if (!(element instanceof Element)) {
    throw new Error("Expected a DOM Element");
  }

  element.classList.add(className);
};

/**
 * Удаляет CSS класс с элемента
 * @param {Element} element - DOM-элемент
 * @param {string} [className='active'] - Имя класса
 */
export const removeClass = (element, className) => {
  if (!(element instanceof Element)) {
    throw new Error("Expected a DOM Element");
  }
  element.classList.remove(className);
};

/**
 * Создаёт слайдер Siema
 * @param {AnimationConfigWithPath} options
 * @returns {AnimationItem|undefined} Экземпляр слайдера или undefined, если элемент не найден
 */
export const createLottie = (options) => {
  /**
   * @type {AnimationConfigWithPath}
   */
  const defaultOptions = {
    ...options,
    renderer: "svg",
    loop: true,
    autoplay: true,
  };

  return lottie.loadAnimation(defaultOptions);
};
