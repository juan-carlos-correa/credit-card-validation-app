import express from "express";

import { baseUrl } from "./url-config";
import { creditCardRouter } from "./routes/credit-card";

const app = express();

app.use(express.json());

app.use(baseUrl, creditCardRouter);

export { app };
