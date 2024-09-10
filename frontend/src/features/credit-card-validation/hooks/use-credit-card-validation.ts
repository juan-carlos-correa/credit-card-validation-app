import { useState } from "react";
import { fetchCreditCardValidation } from "../services/fetch-credit-card-validation";

type FetchStatus = "idle" | "loading" | "success" | "error";

export const useCreditCardValidation = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus | null>(null);

  const resetMessages = () => {
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  const validateCreditCard = async (creditCardNumber: string) => {
    resetMessages();

    const creditCardValueWithoutSpaces = creditCardNumber.replace(/\s+/g, "");

    if (creditCardValueWithoutSpaces === "") {
      setErrorMessage("Please enter a credit card number");
      return;
    }

    try {
      setFetchStatus("loading");
      const data = await fetchCreditCardValidation(creditCardValueWithoutSpaces);
      setFetchStatus("success");

      if (!data.isValid) {
        setErrorMessage(data.errorMessage);
        return;
      }

      setSuccessMessage("Credit card number is valid");
    } catch (error) {
      console.error(error);
      setFetchStatus("error");
    }
  };

  return {
    errorMessage,
    successMessage,
    fetchStatus,
    validateCreditCard,
  };
};
