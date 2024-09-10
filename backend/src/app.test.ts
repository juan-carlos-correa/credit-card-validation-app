import request from "supertest";

import { app } from "./app";
import { baseUrl, creditCardValidationUrl } from "./url-config";

const url = `${baseUrl}/${creditCardValidationUrl}`;

export const mockValidCreditCardNumber = "378282246310005";
export const mockInvalidCreditCardNumber = "378282246310006";

describe(`POST ${url}`, () => {
  it("should return 200 and a valid credit card message", async () => {
    const response = await request(app).post(url).send({
      creditCardNumber: mockValidCreditCardNumber,
    });

    expect(response.status).toBe(200);
  });

  it("should return status 400 when creditCardNumber is not provided", async () => {
    const response = await request(app).post(url);

    expect(response.status).toBe(400);
  });

  it("should return status 200 and an error message when the credit card number is invalid", async () => {
    const response = await request(app).post(url).send({
      creditCardNumber: mockInvalidCreditCardNumber,
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      isValid: false,
      message: "Please enter a valid credit card number",
    });
  });
});
