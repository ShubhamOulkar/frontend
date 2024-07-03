import { useRef, useState } from "react";

export default function Mutation() {
  const [state, setState] = useState("Hello");
  //   setState("Shubham"); //infinite rendering error
  if (state === "Hello") {
    setState("Shubham");
  }

  //   initializing ref : initial value is null
  const inputRef = useRef(null);
  //   const inputRef = useRef("hi");
  //   const inputRef = useRef({ value: "bye" });

  // do not read/write while rendering component because it's initial value is null while rendering
  //   inputRef.current = "hi";
  // current value overwriting with "hi" on each re-render so we can not see updated current propety.

  console.log(inputRef);

  const changeRef = (e) => {
    console.log("ref changed");
    inputRef.current = e.target.value;
  };

  return (
    <div>
      <p>input state value: {state}</p>
      <input
        type="text"
        onChange={(e) => setState(e.target.value)}
        value={state}
      />
      <p>
        input ref value:{" "}
        {inputRef.current && typeof inputRef.current !== "object"
          ? inputRef.current
          : "null"}
      </p>
      <p>
        on inital render it value is 'null'. but if component is re-render due
        to some other reason then it will show value 'bye'.
      </p>
      <p>
        change following input field, then change above input filed. Above input
        onchange re-render component. It will show new changed values. Notice
        that on input change ref do not re-render component.
      </p>
      <input
        type="text"
        ref={inputRef}
        defaultValue="bye"
        onChange={changeRef}
      />
    </div>
  );
}
