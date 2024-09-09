import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
    expect(screen.getByLabelText(/Credit card number to validate/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  it("should display an error message when the form is submitted with an empty card number", async () => {
    const user = userEvent.setup();

    expect(screen.queryByText(/Please enter a credit card number/i)).not.toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: /Submit/i });
    await user.click(submitButton);

    expect(await screen.findByText(/Please enter a credit card number/i)).toBeInTheDocument();
  });
});
