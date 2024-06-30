import { createContext, useState } from "react";
import { MemoComponent1 } from "./Author";

export const Context = createContext(null);

export default function ContextComponent() {
  const [state, setState] = useState({
    name: "shubham",
    email: "shubham@oulkar.com",
  });

  const [address, setAddress] = useState("India");

  return (
    <>
      <h1>this is context component for testing</h1>
      <Context.Provider value={state}>
        <input
          type="text"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <MemoComponent1 />
        <p onClick={(e) => setAddress("USA")}>{address}</p>
      </Context.Provider>
    </>
  );
}
