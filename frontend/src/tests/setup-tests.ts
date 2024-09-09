import "@testing-library/jest-dom";
import { toHaveNoViolations } from "jest-axe";
import { expect, beforeAll, afterEach, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";

import { server } from "./mocks/node";

expect.extend(toHaveNoViolations);

// Enable API mocking in test runs using the same request handlers
beforeAll(() => server.listen());
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
afterAll(() => server.close());
