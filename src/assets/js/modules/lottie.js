import { createLottie } from "../utils/utils.js";
import selectors from "../selectors/selectors.js";

const genLottiePath = (name) => `/deleter/assets/img/lottie/${name}.json`;

const createAnimation = () => {
  createLottie({ container: selectors.lottie_solution, path: genLottiePath("cube-loop-red") });
  createLottie({ container: selectors.lottie_features, path: genLottiePath("features") });
  createLottie({ container: selectors.lottie_business_model, path: genLottiePath("business-model") });
  createLottie({ container: selectors.e_commerce_platforms, path: genLottiePath("e-commerce-platforms") });
  createLottie({ container: selectors.payment_gateways, path: genLottiePath("payment-gateways") });
  createLottie({ container: selectors.document_management, path: genLottiePath("document-management") });
  createLottie({ container: selectors.communication_platforms, path: genLottiePath("communication-platforms") });
  createLottie({ container: selectors.market_monitoring, path: genLottiePath("market-monitoring") });
  createLottie({ container: selectors.key_benefits, path: genLottiePath("key-benefits") });
  createLottie({ container: selectors.how_it_works_1, path: genLottiePath("how-it-works-1") });
  createLottie({ container: selectors.how_it_works_2, path: genLottiePath("how-it-works-2") });
};

export default createAnimation;
