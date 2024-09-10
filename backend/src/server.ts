import dotenv from "dotenv";
import cors from "cors";

import { app } from "./app";

dotenv.config();

const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

if (!PORT) {
  throw new Error("PORT is not defined");
}

if (!FRONTEND_URL) {
  throw new Error("FRONTEND_URL is not defined");
}

app.use(
  cors({
    origin: FRONTEND_URL,
  }),
);

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
