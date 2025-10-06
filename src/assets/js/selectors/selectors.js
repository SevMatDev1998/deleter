/**
 * @typedef {Object} Selectors
 * @property {HTMLDivElement|null} sectionHero
 * @property {NodeListOf<HTMLDivElement>|null} sectionsWrapper
 * @property {HTMLDivElement|null} mobile_menu
 * @property {HTMLButtonElement|null} mobile_menu_open
 * @property {HTMLButtonElement|null} mobile_menu_close
 * @property {NodeListOf<HTMLInputElement>|null} checkbox
 * @property {NodeListOf<HTMLDivElement>|null} intersections
 * @property {HTMLDivElement|null} locale
 * @property {HTMLDivElement|null} lottie_solution
 * @property {HTMLDivElement|null} lottie_features
 * @property {HTMLDivElement|null} lottie_business_model
 * @property {HTMLDivElement|null} e_commerce_platforms
 * @property {HTMLDivElement|null} payment_gateways
 * @property {HTMLDivElement|null} document_management
 * @property {HTMLDivElement|null} communication_platforms
 * @property {HTMLDivElement|null} market_monitoring
 * @property {HTMLDivElement|null} key_benefits
 * @property {HTMLDivElement|null} how_it_works_1
 * @property {HTMLDivElement|null} how_it_works_2
 * @property {HTMLInputElement|null} solution
 * @property {HTMLDivElement|null} solutions_menu
 * @property {HTMLButtonElement|null} explore_docs
 * @property {HTMLButtonElement|null} browse_faq
 * @property {HTMLButtonElement|null} visit_website
 * @property {HTMLButtonElement|null} visit_auth_web
 * @property {HTMLButtonElement|null} open_chat
 *
 */

/** @type {Selectors} */
const selectors = {
  sectionHero: document.getElementById("hero"),
  sectionsWrapper: document.querySelectorAll("div.section_wrapper"),
  mobile_menu: document.getElementById("mobile-menu"),
  mobile_menu_open: document.getElementById("mobile-menu-open"),
  mobile_menu_close: document.getElementById("mobile-menu-close"),
  checkbox: document.querySelectorAll("input[type=checkbox]"),
  intersections: document.querySelectorAll(".intersection"),
  locale: document.getElementById("locale"),
  lottie_solution: document.getElementById("lottie-solution"),
  lottie_features: document.getElementById("lottie-features"),
  lottie_business_model: document.getElementById("lottie-business-model"),
  e_commerce_platforms: document.getElementById("e-commerce-platforms"),
  payment_gateways: document.getElementById("payment-gateways"),
  document_management: document.getElementById("document-management"),
  communication_platforms: document.getElementById("communication-platforms"),
  market_monitoring: document.getElementById("market-monitoring"),
  key_benefits: document.getElementById("key-benefits"),
  how_it_works_1: document.getElementById("how-it-works-1"),
  how_it_works_2: document.getElementById("how-it-works-2"),
  solution: document.getElementById("solution"),
  explore_docs: document.getElementById("explore-docs"),
  browse_faq: document.getElementById("browse-faq"),
  visit_website: document.getElementById("visit-website"),
  visit_auth_web: document.getElementById("visit-auth-web"),
  open_chat: document.getElementById("open-chat"),
};

export default selectors;
