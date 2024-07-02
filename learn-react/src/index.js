import React from "react";
import ReactDOM from "react-dom/client";
import { hydrateRoot } from "react-dom/client";
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
import UseEffectExamples from "./examples/useEffect/UseEffect";
import UseStateExamples from "./examples/useState/useState";
import UseRefExamples from "./examples/useRef/useRef";
import UseReducerExamples from "./examples/useReducer/useReducer";

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
  {
    path: "/useEffect",
    element: <UseEffectExamples></UseEffectExamples>,
  },
  {
    path: "/useState",
    element: <UseStateExamples></UseStateExamples>,
  },
  {
    path: "/useRef",
    element: <UseRefExamples></UseRefExamples>,
  },
  {
    path: "/useReducer",
    element: <UseReducerExamples></UseReducerExamples>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>
);

const secoundRoot = ReactDOM.createRoot(
  document.getElementById("secoundRoot"),
  {
    onUncaughtError: (error, errorInfo) => {
      console.error("Uncaught error", error, errorInfo.componentStack);
    },
  }
);

secoundRoot.render(UseStateExamples());

// Error : - Hydration failed because the initial UI does not match what was rendered on the server.
// const root2 = hydrateRoot(
//   document.getElementById("hydrateRoot"),
//   <UseRefExamples />
// );

// calling render twotimes do not render complete tree
// secoundRoot.render(<UseStateExamples />);

// destroy all content from secoundRoot by using unmount()
// secoundRoot.unmount();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
