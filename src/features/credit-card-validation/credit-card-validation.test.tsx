import { render, screen } from "@testing-library/react";

import { CreditCardValidation } from "./";

describe("Credit Card Validation", () => {
  it("renders the title", () => {
    render(<CreditCardValidation />);
    const title = screen.getByText(/Credit Card Validation/i);
    expect(title).toBeInTheDocument();
  });
});
