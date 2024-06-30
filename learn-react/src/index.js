import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error-page";
import Contact from "./components/Contact";
import About from "./components/About";
import Products from "./components/Products";
import FeedBack from "./components/forms/FeedBack";
import RegistrationForm from "./components/forms/RegistrationForm";
import StandardForm from "./components/forms/StandardForm";
import ContextComponent from "./components/ContextComponent";
import MyApp from "./components/ReactMemo_1";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/products",
    element: <Products></Products>,
  },
  {
    path: "/feedback",
    element: <FeedBack></FeedBack>,
  },
  {
    path: "/registration",
    element: <RegistrationForm />,
  },
  {
    path: "/standard form",
    element: <StandardForm></StandardForm>,
  },
  {
    path: "/context",
    element: <ContextComponent />,
  },
  {
    path: "/ReactMemo",
    element: <MyApp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
