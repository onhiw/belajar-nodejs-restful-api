import { logger } from "./applications/logging.js";
import { web } from "./applications/web.js";

web.listen(3000, () => {
  logger.info("App start in localhost:300");
});
