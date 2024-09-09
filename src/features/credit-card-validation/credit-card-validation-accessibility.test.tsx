import { render } from "@testing-library/react";
import { axe } from "jest-axe";

import { CreditCardValidationView } from "./";

describe("Credit Card Validation | Accessibility", () => {
  it("should not have basic automatically detectable accessibility issues", async () => {
    const { container } = render(<CreditCardValidationView />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
