import request from "supertest";

import { app } from "./app";

describe("POST /api/v1/credit-cards/validation", () => {
  it("should return 200 and a valid credit card message", async () => {
    const response = await request(app).post("/api/v1/credit-cards/validation");

    expect(response.status).toBe(200);
  });
});
