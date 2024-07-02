import "./ToggleBtn.css";
import { useRef, useState, useLayoutEffect } from "react";
import { useThemeContext } from "../../context/useThemeContext";

export default function ToggleBtn() {
  // toggle btn state
  const [state, setState] = useState("");
  // ref to change state of toggle btn in DOM
  const inputRef = useRef();
  // get prefered theme from theme context
  const [theme, setTheme] = useThemeContext();

  useLayoutEffect(() => {
    // localStorage.setItem("DINO_TV_THEME", theme);

    const root = document.documentElement;
    const currentTheme = root.getAttribute("class");
    const themesArray = ["theme1", "theme2", "theme3"];

    if (themesArray.includes(theme)) {
      root.classList.remove(currentTheme);
      root.classList.add(theme);
    }
  }, [theme]);

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
