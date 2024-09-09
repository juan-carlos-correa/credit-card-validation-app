import { render, screen } from "@testing-library/react";

import { CreditCardValidation } from "./features/credit-card-validation";

describe("main", () => {
  it("renders the title", () => {
    render(<CreditCardValidation />);
    const title = screen.getByText(/Credit Card Validation/i);
    expect(title).toBeInTheDocument();
  });
});
