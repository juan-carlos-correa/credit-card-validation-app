import "@testing-library/jest-dom";
import { toHaveNoViolations } from "jest-axe";
import { expect } from "vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

expect.extend(toHaveNoViolations);

afterEach(() => {
  cleanup();
});
