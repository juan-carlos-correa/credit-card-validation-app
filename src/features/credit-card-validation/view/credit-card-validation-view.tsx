export const CreditCardValidationView = () => {
  return (
    <div>
      <h1>Credit Card Validation</h1>
      <form>
        <label htmlFor="credit-card-number">Credit Card Number</label>
        <input id="credit-card-number" type="text" placeholder="Enter your card number here" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
