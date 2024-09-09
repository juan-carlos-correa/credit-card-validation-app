import { useState } from "react";

import { cn } from "@/utils/cn";
import { fetchCreditCardValidation } from "../services/fetch-credit-card-validation";

interface FormElements extends HTMLFormControlsCollection {
  creditCardInput: HTMLInputElement;
}
interface CreditCardFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export const CreditCardValidationForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<CreditCardFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const creditCardInputValue = form.elements.creditCardInput.value;

    if (creditCardInputValue.trim() === "") {
      setErrorMessage("Please enter a credit card number");
      return;
    }

    const data = await fetchCreditCardValidation(creditCardInputValue);

    if (!data.isValid) {
      setErrorMessage(data.errorMessage);
      return;
    }

    setSuccessMessage("Credit card number is valid");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="credit-card-number" className="block text-sm font-medium text-gray-700">
          Credit card number to validate
        </label>
        <input
          id="credit-card-number"
          name="creditCardInput"
          type="text"
          placeholder="Enter your card number here"
          className={cn(
            "mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            errorMessage ? "border-red-500" : "border-gray-300",
          )}
          aria-invalid={!!errorMessage}
          aria-describedby={errorMessage ? "email-error" : undefined}
        />
        {errorMessage && (
          <p className="mt-2 text-sm text-red-600" id="email-error">
            {errorMessage}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
      >
        Submit
      </button>
      {successMessage && (
        <p className="mt-2 text-sm text-green-600" id="email-error">
          {successMessage}
        </p>
      )}
    </form>
  );
};
