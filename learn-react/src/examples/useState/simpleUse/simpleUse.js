import { useState } from "react";

export default function SimpleUseCase() {
  const [state, setState] = useState("initial value");

  function handleClick() {
    setState("next value");

    console.log(
      "calling state after setState('new value'), but it returns old value because it is called before re-rendering with new value: ",
      state
    );

    // setTimeout(() => {
    //   console.log(
    //     "asynchronous callback also shows old value because it is registed during old render",
    //     state
    //   );
    // }, 5000);

    for (let i = 0; i <= 5000; i++) {
      console.log("block tread for 5 sec");
    }
  }

  return (
    <>
      <p>state: {state}</p>
      <button onClick={handleClick}>change state</button>
    </>
  );
}
