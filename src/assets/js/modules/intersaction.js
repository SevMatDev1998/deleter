import selectors from "../selectors/selectors.js";
import { addClass } from "../utils/utils";

const createInteraction = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(123123123);
        
        addClass(entry.target, "show")
      }
    });
  }, {
    threshold: 0.25,
  });

  const createObserver = (node) => observer.observe(node);

  selectors.sectionsWrapper.forEach(createObserver);
  selectors.intersections.forEach(createObserver);
}

export default createInteraction;
