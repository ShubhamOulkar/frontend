import { useState } from "react";

export default function UseStateHook() {
  // console.log return value of useState
  const [func, setFunc] = useState(function add(a = 10, b = 10) {
    const c = a + b;
    return c;
  });
  console.log("Return value of useState:");
  // handleing state as object
  const [heading, setHeading] = useState({ head: "Hello" });
  //handling state as primitive
  let [state, setState] = useState(100);

  function handleHeading() {
    // following mutation updates the object heading but can not trigger re-rendering in react
    // React knows state is changed by comparing primitive values and reference for objects and array.
    /*
    heading.head = heading.head === "Hello" ? "Good morning" : "Hello";
    setHeading(heading);
    */
    // To trigger re-rendering pass new object
    setHeading({
      ...heading,
      head: heading.head === "Hello" ? "Good morning" : "Hello",
    });
  }

  function handlePrimitive() {
    // we can not assign to const so use let
    state = state === 100 ? 0 : 100;

    setState(state);
    // above code works because primitive are compared by values not by reference. But above code won't work with objects. Keep in mind that state and setState are declared as let variable not const.

    // OR we can pass new value in setState() function
  }

  return (
    <>
      <h1 onClick={handleHeading}>handleing state as object: {heading.head}</h1>
      <p onClick={handlePrimitive}>handling state as primitive: {state}</p>
    </>
  );
}
