import "./ToggleBtn.css";
import { useRef, useState } from "react";
import { useThemeContext } from "../../context/themeContext";

export default function ToggleBtn() {
  const [state, setState] = useState("");
  const inputRef = useRef();
  const [theme, setTheme] = useThemeContext();

  function uncheckToggle() {
    if (state === "indeterminate") {
      inputRef.current.indeterminate = false;
    }

    if (state === "checked") {
      inputRef.current.checked = false;
    }
    setState("");
    setTheme("theme1");
  }

  function indeterminateToggle() {
    if (state === "") {
      inputRef.current.indeterminate = true;
    }

    if (state === "checked") {
      inputRef.current.checked = false;
      inputRef.current.indeterminate = true;
    }
    setState("indeterminate");
    setTheme("theme2");
  }

  function checkedToggle() {
    if (state === "indeterminate") {
      inputRef.current.indeterminate = false;
      inputRef.current.checked = true;
    }

    if (state === "") {
      inputRef.current.checked = true;
    }
    setState("checked");
    setTheme("theme3");
  }

  return (
    <>
      <div className={"theme-number " + theme}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div className={"toggle-container " + theme}>
        <input ref={inputRef} type="checkbox" />
        <label htmlFor="toggle"></label>
        <div className="toggle-btns">
          <span onClick={uncheckToggle}></span>
          <span onClick={indeterminateToggle}></span>
          <span onClick={checkedToggle}></span>
        </div>
      </div>
    </>
  );
}
