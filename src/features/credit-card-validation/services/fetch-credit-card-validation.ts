interface CreditCardValidationResponse {
  isValid: boolean;
  errorMessage?: string;
}

export async function fetchCreditCardValidation(
  creditCardNumner: string,
): Promise<CreditCardValidationResponse> {
  try {
    await fetch("/api/v1/credit-cards/validation", {
      method: "POST",
      body: JSON.stringify({ creditCardNumner }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return {
      isValid: true,
    };
  } catch (error) {
    console.log("Error fetching credit card validation", error);
    return {
      isValid: false,
    };
  }
}
