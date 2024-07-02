import { useState } from "react";

export default function ValueTracker() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>value tracker</h1>
      <button onClick={() => setCount(count + 1)}>Increment value</button>
      <button onClick={() => setCount(count - 1)}>Decrement value</button>
      <CounterTracker count={count} />
    </>
  );
}

function CounterTracker({ count }) {
  const [preCount, setPrecount] = useState(count);
  const [status, setStatus] = useState(null);

  // do not call set update while rendering , it will render component infinitly
  //setPrecount(count);

  if (preCount !== count) {
    setStatus(count > preCount ? "⏫" : "⏬");
    setPrecount(count);
  }

  return (
    <>
      <p>
        New updated count: {count} <span>{status}</span>
      </p>
    </>
  );
}
