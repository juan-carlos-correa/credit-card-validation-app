import express, { Request, Response } from "express";

import { baseUrl, creditCardValidationUrl } from "./url-config";

const app = express();

app.use(express.json());

app.post(`${baseUrl}/${creditCardValidationUrl}`, (request: Request, response: Response) => {
  try {
    const { creditCardNumber } = request.body;

    if (!creditCardNumber) {
      return response.status(400).send("creditCardNumber is required");
    }

    response.status(200).send("Hello World");
  } catch (error) {
    console.log(error);
    response.status(500).send("Internal Server Error");
  }
});

export { app };
