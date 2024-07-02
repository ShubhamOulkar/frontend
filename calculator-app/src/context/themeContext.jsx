import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const theme = useState("theme1");

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
