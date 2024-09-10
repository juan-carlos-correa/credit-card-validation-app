import express, { Request, Response } from "express";

const app = express();

app.post("/api/v1/credit-cards/validation", (request: Request, response: Response) => {
  response.status(200).send("Hello World");
});

export { app };
