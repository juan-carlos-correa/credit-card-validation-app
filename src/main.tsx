import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { CreditCardValidation } from "./features/credit-card-validation";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main>
      <CreditCardValidation />
    </main>
  </StrictMode>,
);
