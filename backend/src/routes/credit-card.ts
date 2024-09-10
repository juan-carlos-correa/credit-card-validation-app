import { Router } from "express";

import { creditCardValidationUrl } from "../url-config";
import { creditCardController } from "src/controllers/credit-card-controller";

const creditCardRouter = Router();

creditCardRouter.post(creditCardValidationUrl, creditCardController);

export { creditCardRouter };
