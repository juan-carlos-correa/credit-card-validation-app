import request from "supertest";

import { app } from "./app";
import { baseUrl, creditCardValidationUrl } from "./url-config";

const url = `${baseUrl}/${creditCardValidationUrl}`;

describe(`POST ${url}`, () => {
  it("should return 200 and a valid credit card message", async () => {
    const response = await request(app).post(url);

    expect(response.status).toBe(200);
  });
});
