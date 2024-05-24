import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import { default as App } from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
