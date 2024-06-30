import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = (children) => {
  const [user] = useState({
    name: "shubham",
    email: "shubham@gmail.com",
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
