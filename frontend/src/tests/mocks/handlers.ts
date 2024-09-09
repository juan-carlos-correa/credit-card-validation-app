import { http, HttpResponse } from "msw";

export const mockValidCreditCardNumber = "4539148803436467";
export const mockInvalidCreditCardNumber = "4539148803436466";

interface ValidateCreditCardRequestBody {
  creditCardNumber: string;
}

interface ValidateCreditCardResponseBody {
  isValid: boolean;
  message: string;
  creditCardNumber?: string; // Optional, only for the invalid case
}

export const handlers = [
  http.post<ValidateCreditCardRequestBody, ValidateCreditCardResponseBody>(
    "/api/v1/credit-cards/validation",
    async ({ request }) => {
      const data = await request.json();
      const creditCardNumber = data.creditCardNumber;

      const isValid = creditCardNumber === mockValidCreditCardNumber;

      return HttpResponse.json(
        {
          isValid,
          message: isValid
            ? "Credit card number is valid"
            : "Please enter a valid credit card number",
        },
        { status: 200 },
      );
    },
  ),
];
