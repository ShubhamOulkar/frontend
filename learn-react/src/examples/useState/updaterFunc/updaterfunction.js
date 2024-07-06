import { useState } from "react";

export default function UpdateWithPreviousState() {
  const [age, setAge] = useState(50);

  function handleClick() {
    for (let i = 1; i <= 10; i++) {
      console.log(`age ${age} incremented by`, i);
      setAge((preAge) => preAge + 1);
    }

    // setAge((preAge) => preAge + 1);
    // setAge((preAge) => preAge + 1);
    // setAge((preAge) => preAge + 1);
    //  do not use following it updates by 1
    // setAge(age + 1);
    // setAge(age + 1);
  }

  return (
    <>
      <p>Age: {age}</p>
      <button onClick={handleClick}>update age by 10</button>
    </>
  );
}
