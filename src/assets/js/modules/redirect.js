import selectors from "../selectors/selectors.js";

const createRedirect = () => {
  /**
   * @type {Record<keyof typeof selectors, string>}
   */
  const links = {
    explore_docs: "/docs",
    browse_faq: "/faq",
    visit_website: "https://test.com",
    visit_auth_web: "https://auth.test.com",
    open_chat: "/chat",
  };

  Object.entries(links).forEach(([key, url]) => {
    const element = selectors[key];
    if (element) {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        if (url.startsWith("http")) {
          window.location.href = url;
        } else {
          window.location.assign(url);
        }
      });
    }
  });
};

export default createRedirect;
