import { createContext, useContext } from "react";

const DataContext = createContext(undefined);

export const UseProvider = ({ children }) => {
  const state = {
    name: "shubham oulkar",
    email: "shubham@oulkar.com",
  };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export const useDataContext = () => useContext(DataContext);
