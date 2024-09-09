import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import { CreditCardValidationView } from "./";

describe("Credit Card Validation", () => {
  it("renders the title", () => {
    render(<CreditCardValidationView />);
    const title = screen.getByText(/Credit Card Validation/i);
    expect(title).toBeInTheDocument();
  });

  it("should not have basic automatically detectable accessibility issues", async () => {
    const { container } = render(<CreditCardValidationView />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
