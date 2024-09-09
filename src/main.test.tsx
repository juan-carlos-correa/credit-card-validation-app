import { render, screen } from "@testing-library/react";

import { CreditCardValidationView } from "./features/credit-card-validation";

describe("main", () => {
  it("should render the credit card validation view", () => {
    render(<CreditCardValidationView />);
    const title = screen.getByText(/Credit Card Validation/i);
    expect(title).toBeInTheDocument();
  });
});
