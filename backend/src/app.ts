import express, { Request, Response } from "express";

import { baseUrl, creditCardValidationUrl } from "./url-config";

const app = express();

app.post(`${baseUrl}/${creditCardValidationUrl}`, (request: Request, response: Response) => {
  response.status(200).send("Hello World");
});

export { app };
