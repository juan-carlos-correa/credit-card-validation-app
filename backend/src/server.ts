import dotenv from "dotenv";

import { app } from "./app";

dotenv.config();

const PORT = process.env.PORT;

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
