import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  // get theme from local storage
  const themeLocal = localStorage.getItem("calculator_theme");
  // by default set theme1 on 1st visit
  const theme = useState(themeLocal || "theme1");

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
