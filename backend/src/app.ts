import express, { Request, Response } from "express";

import { baseUrl, creditCardValidationUrl } from "./url-config";
import { validateCreditCardNumber } from "./services/validate-credit-card-number";

const app = express();

app.use(express.json());

app.post(`${baseUrl}/${creditCardValidationUrl}`, (request: Request, response: Response) => {
  try {
    const { creditCardNumber } = request.body;

    if (!creditCardNumber) {
      return response.status(400).send("creditCardNumber is required");
    }

    const isValid = validateCreditCardNumber(creditCardNumber);

    if (!isValid) {
      return response.status(200).json({
        isValid,
        message: "Please enter a valid credit card number",
      });
    }

    response.status(200).send("Hello World");
  } catch (error) {
    console.log(error);
    response.status(500).send("Internal Server Error");
  }
});

export { app };
