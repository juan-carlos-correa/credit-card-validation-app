import { CreditCardValidationForm } from "../components/credit-card-validation-form";

export const CreditCardValidationView = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Credit Card Validation
        </h1>
        <CreditCardValidationForm />
      </div>
    </div>
  );
};
