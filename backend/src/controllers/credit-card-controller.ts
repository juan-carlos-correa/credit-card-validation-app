import { Request, Response } from "express";
import { validateCreditCardNumber } from "../services/validate-credit-card-number";

export const creditCardController = (request: Request, response: Response) => {
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
};
