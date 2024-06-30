import { Context } from "./ContextComponent";
import { useContext } from "react";

export default function Component3() {
  const data = useContext(Context);
  return (
    <>
      <h4>Component 3</h4>
      <p>{data.name} </p>
      <p>{data.email}</p>
    </>
  );
}
