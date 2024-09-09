import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { CreditCardValidationView } from "./features/credit-card-validation";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main>
      <CreditCardValidationView />
    </main>
  </StrictMode>,
);
