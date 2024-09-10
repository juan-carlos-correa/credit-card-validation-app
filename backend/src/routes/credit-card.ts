import { Router } from "express";

import { creditCardValidationUrl } from "../url-config";
import { creditCardController } from "src/controllers/credit-card-controller";
import { creditCardMiddleware } from "src/middlewares/credict-card-middleware";

const creditCardRouter = Router();

creditCardRouter.post(creditCardValidationUrl, creditCardMiddleware, creditCardController);

export { creditCardRouter };
