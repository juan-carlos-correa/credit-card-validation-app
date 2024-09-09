import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import { CreditCardValidation } from "./";

describe("Credit Card Validation", () => {
  it("renders the title", () => {
    render(<CreditCardValidation />);
    const title = screen.getByText(/Credit Card Validation/i);
    expect(title).toBeInTheDocument();
  });

  it("should not have basic automatically detectable accessibility issues", async () => {
    const { container } = render(<CreditCardValidation />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
