import { Request, Response, NextFunction } from "express";

export const creditCardMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { creditCardNumber } = req.body;

  if (!creditCardNumber) {
    return res.status(400).json({
      isValid: false,
      message: "Please enter a valid credit card number",
    });
  }

  const hasNonDigitCharacters = !/^\d+$/.test(creditCardNumber);

  if (hasNonDigitCharacters) {
    return res.status(400).json({
      isValid: false,
      message: "Please enter a valid credit card number",
    });
  }

  next();
};
