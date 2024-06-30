import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export function Theme({ children }) {
  const [theme, setTheme] = useState("dark");

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme: theme, fun: handleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}
