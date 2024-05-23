import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeate", completed: false },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App tasks={DATA} />
    <footer>
      <div className="attribution">
        Coded by
        <a href="https://twitter.com/shubhuoulkar"> Shubham Oulkar</a>
      </div>
    </footer>
  </React.StrictMode>
);
