import { Request, Response } from "express";
import { validateCreditCardNumber } from "../services/validate-credit-card-number";

export const creditCardController = (request: Request, response: Response) => {
  try {
    const { creditCardNumber } = request.body;

    const isValid = validateCreditCardNumber(creditCardNumber);

    if (!isValid) {
      return response.status(200).json({
        isValid,
        message: "The credit card number is invalid",
      });
    }

    response.status(200).send({
      isValid,
      message: "Credit card number is valid",
    });
  } catch (error) {
    console.log(error);
    response.status(500).send("Internal Server Error");
  }
};
