import { useEffect, useState } from "react";

export default function EffectHook() {
  const [title, setTitle] = useState("Home");
  const [state, setState] = useState("");

  useEffect(() => {
    console.log(
      "useEffect performs side effect on re-render or on dependency array."
    );
    document.title = title;
  }, [title]);

  function changeTabTitle() {
    setTitle(title === "Home" ? "New tab title" : "Home");
  }

  function changeState() {
    setState(state === "" ? "gg" : "");
    console.log("state:", state);
  }

  return (
    <>
      <p>{state}</p>
      <button onClick={changeTabTitle}>Change tab title</button>
      <button onClick={changeState}>change state</button>
    </>
  );
}
