import { useState, useEffect } from "react";

export default function Counter() {
  console.log("counter re-render");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1); // You want to increment the counter every second...
    }, 1000);
    return () => clearInterval(intervalId);
  }, [count]); // 🚩 ... but specifying `count` as a dependency always resets the interval.

  return <div>{count}</div>;
}
