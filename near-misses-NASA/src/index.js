import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const root = createRoot(document.getElementById("app"));

root.render(<App />);

if (module.hot) {
  module.hot.accept(function () {
    window.location.reload();
  });
}
