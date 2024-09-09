interface CreditCardValidationResponse {
  isValid: boolean;
  errorMessage: string;
}

export async function fetchCreditCardValidation(
  creditCardNumber: string,
): Promise<CreditCardValidationResponse> {
  try {
    const response = await fetch("/api/v1/credit-cards/validation", {
      method: "POST",
      body: JSON.stringify({ creditCardNumber }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return {
      isValid: data?.isValid,
      errorMessage: data?.message,
    };
  } catch (error) {
    console.log("Error fetching credit card validation", error);
    return {
      isValid: false,
      errorMessage: "An error occurred while validating the credit card number",
    };
  }
}
