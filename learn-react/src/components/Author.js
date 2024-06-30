import Component2 from "./Blog";
import { memo } from "react";

export const MemoComponent1 = function Component1() {
  return (
    <>
      <h2>Component 1</h2>
      <Component2 />
    </>
  );
};
