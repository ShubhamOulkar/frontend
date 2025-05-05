import {
    type RouteConfig,
    route,
    layout,
    index,
  } from "@react-router/dev/routes";
  
  export default [
    layout("./layout/layout.tsx", [
      index("./pages/home.tsx"),
      route("destination", "./pages/destination.tsx"),
      route("crew", "./pages/crew.tsx"),
      route("technology", "./pages/technology.tsx"),
    ]),
  ] satisfies RouteConfig;
  