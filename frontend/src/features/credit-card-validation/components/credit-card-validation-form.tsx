import { cn } from "@/utils/cn";
import { CreditCardInput } from "./credit-card-input";
import { useCreditCardValidation } from "../hooks/use-credit-card-validation";

interface FormElements extends HTMLFormControlsCollection {
  creditCardInput: HTMLInputElement;
}
interface CreditCardFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export const CreditCardValidationForm = () => {
  const { errorMessage, successMessage, fetchStatus, validateCreditCard } =
    useCreditCardValidation();

  const handleSubmit = async (event: React.FormEvent<CreditCardFormElement>) => {
    try {
      event.preventDefault();
      const form = event.currentTarget;
      const creditCardInputValue = form.elements.creditCardInput.value;
      await validateCreditCard(creditCardInputValue);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="credit-card-number" className="block text-sm font-medium text-gray-700">
          Credit card number to validate
        </label>
        <CreditCardInput errorMessage={errorMessage} />
        {errorMessage && (
          <p className="mt-2 text-sm text-red-600" id="email-error">
            {errorMessage}
          </p>
        )}
        {fetchStatus === "error" && (
          <p className="mt-2 text-sm text-red-600" id="email-error">
            Something went wrong. Please try again later.
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={fetchStatus === "loading"}
        className={cn(
          "w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150",
          fetchStatus === "loading" && "cursor-not-allowed opacity-50",
        )}
      >
        Submit
      </button>
      {successMessage && (
        <p className="mt-2 text-sm text-green-600" id="email-error">
          {successMessage} 👯‍♂️
        </p>
      )}
    </form>
  );
};
