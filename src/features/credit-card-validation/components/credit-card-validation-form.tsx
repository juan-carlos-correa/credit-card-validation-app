export const CreditCardValidationForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="credit-card-number" className="block text-sm font-medium text-gray-700">
          Credit card number to validate
        </label>
        <input
          id="credit-card-number"
          type="text"
          placeholder="Enter your card number here"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
      >
        Submit
      </button>
    </form>
  );
};
