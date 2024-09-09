import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CreditCardValidationView } from "../";

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

  it("should display a success message when the form is submitted with a valid card number", async () => {
    const user = userEvent.setup();

    expect(screen.queryByText(/Credit card number is valid/i)).not.toBeInTheDocument();

    const cardNumberInput = screen.getByLabelText(/Credit card number to validate/i);
    await user.type(cardNumberInput, "4111111111111111");

    const submitButton = screen.getByRole("button", { name: /Submit/i });
    await user.click(submitButton);

    expect(await screen.findByText(/Credit card number is valid/i)).toBeInTheDocument();
  });

  it.skip("should display an error message when the form is submitted with an invalid card number", async () => {
    const user = userEvent.setup();

    expect(screen.queryByText(/Please enter a valid credit card number/i)).not.toBeInTheDocument();

    const cardNumberInput = screen.getByLabelText(/Credit card number to validate/i);
    await user.type(cardNumberInput, "1234");

    const submitButton = screen.getByRole("button", { name: /Submit/i });
    await user.click(submitButton);

    expect(await screen.findByText(/Please enter a valid credit card number/i)).toBeInTheDocument();
  });
});
