import { forwardRef, useRef } from "react";

export default function ParentComponent() {
  const myInputRef = useRef(null);

  function focus() {
    myInputRef.current.focus();
  }
  return (
    <>
      <hr />
      <MyInput ref={myInputRef} />
      <button onClick={focus}>Focus input element</button>
    </>
  );
}

const MyInput = forwardRef((_, ref) => {
  return <input ref={ref} type="text" />;
});
