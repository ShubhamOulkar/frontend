import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { PathNameContext } from "./context/pathname/createPathnameContext";
import type { Route } from "./+types/root";
import "./app.css";
import { usePathnameContext } from "./context/pathname/createPathnameContext";

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon.png",
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Bellefair&family=Barlow:wght@400;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en">
            <head>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <Meta />
              <Links />
            </head>
            <PathNameContext>
              <Body>{children}</Body>
            </PathNameContext>
        </html>
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
  }

  return (
    <main className="">
      <h1>{message}</h1>
      <p>{details}</p>
    </main>
  );
}

function Body({ children }: { children: React.ReactNode }){
  const {pathname} = usePathnameContext();

  return (
      <body className={pathname}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
  );
}