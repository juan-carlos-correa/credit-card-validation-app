import { cn } from "@/utils/cn";

interface CreditCardInputProps {
  errorMessage: string | null;
}

export const CreditCardInput = ({ errorMessage }: CreditCardInputProps) => {
  const formatCardNumber = (value: string) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, "");
    // Format into groups of 4 digits
    const formatted = cleaned.match(/.{1,4}/g)?.join(" ") || cleaned;
    return formatted;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedValue = formatCardNumber(value);
    e.target.value = formattedValue; // Directly modify the input value
  };

  return (
    <input
      id="credit-card-number"
      name="creditCardInput"
      type="text"
      placeholder="Enter your card number here"
      className={cn(
        "mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
        errorMessage ? "border-red-500" : "border-gray-300",
      )}
      maxLength={19}
      aria-invalid={!!errorMessage}
      aria-describedby={errorMessage ? "email-error" : undefined}
      onChange={handleInputChange}
    />
  );
};
