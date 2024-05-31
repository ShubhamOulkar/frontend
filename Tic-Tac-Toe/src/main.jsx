import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { default as App } from "./App";
// import App from "./demo";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
