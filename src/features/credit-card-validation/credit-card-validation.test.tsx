import { render, screen } from "@testing-library/react";

import { CreditCardValidationView } from "./";

describe("Credit Card Validation", () => {
  beforeEach(() => {
    render(<CreditCardValidationView />);
  });

  it("renders the title", () => {
    const title = screen.getByText(/Credit Card Validation/i);
    expect(title).toBeInTheDocument();
  });

  it("should display the credit card form ui", () => {
    expect(screen.getByLabelText(/Credit Card Number/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });
});
