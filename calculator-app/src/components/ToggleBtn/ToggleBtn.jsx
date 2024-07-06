import "./ToggleBtn.css";
import { useRef, useLayoutEffect, useEffect } from "react";
import { useThemeContext } from "../../context/useThemeContext";

export default function ToggleBtn() {
  // ref to change state of toggle btn in DOM
  const inputRef = useRef();
  // get prefered theme from theme context
  const [theme, setTheme] = useThemeContext();

  // add keyboard events on toggle btn
  useEffect(() => {
    const handleKeyDown = (e, i) => {
      if (e.key === "Enter") {
        if (i === 0) uncheckToggle();
        if (i === 1) indeterminateToggle();
        if (i === 2) checkedToggle();
      }
    };

    const spans = document.querySelectorAll(".toggle-btns > span");

    spans.forEach((span, i) => {
      span.addEventListener("keydown", (e) => handleKeyDown(e, i));
    });

    // Cleanup event listeners on component unmount
    return () => {
      spans.forEach((span, i) => {
        span.removeEventListener("keydown", (e) => handleKeyDown(e, i));
      });
    };
  }, [uncheckToggle, indeterminateToggle, checkedToggle]);

  // this side effect only run once
  useEffect(() => {
    // toggle btn position unchecked on revisiting
    if (theme === "theme1") {
      inputRef.current.checked = false;
      inputRef.current.indeterminate = false;
    }
    // toggle btn position indeterministic on revisiting
    if (theme === "theme2") {
      inputRef.current.checked = false;
      inputRef.current.indeterminate = true;
    }
    // toggle btn position checked on revisiting
    if (theme === "theme3") {
      inputRef.current.checked = true;
      inputRef.current.indeterminate = false;
    }
  }, []);

  useLayoutEffect(() => {
    // set theme in local storage
    localStorage.setItem("calculator_theme", theme);
    // get html element
    const root = document.documentElement;
    // get current theme from html element
    const currentTheme = root.getAttribute("class");
    // use array of themes to simplify logic
    const themesArray = ["theme1", "theme2", "theme3"];
    // change theme if it is valid from array of themes
    if (themesArray.includes(theme)) {
      // on 1st visit currentTheme is null
      // do not run remove() class on null
      currentTheme && root.classList.remove(currentTheme);
      // add theme class on root element
      root.classList.add(theme);
    }
  }, [theme]);

  // Following functions are used to toggle theme btn.
  // Theme btn use three states of type='checkbox' DOM element
  // on state change in checkbox (checked, indeterminate, unchecked) element,
  // checkbox renders corresponding style to that state.

  function uncheckToggle() {
    if (theme === "theme2") {
      inputRef.current.indeterminate = false;
    }

    if (theme === "theme3") {
      inputRef.current.checked = false;
    }

    setTheme("theme1");
  }

  function indeterminateToggle() {
    if (theme === "theme1") {
      inputRef.current.indeterminate = true;
    }

    if (theme === "theme3") {
      inputRef.current.checked = false;
      inputRef.current.indeterminate = true;
    }

    setTheme("theme2");
  }

  function checkedToggle() {
    if (theme === "theme2") {
      inputRef.current.indeterminate = false;
      inputRef.current.checked = true;
    }

    if (theme === "theme1") {
      inputRef.current.checked = true;
    }

    setTheme("theme3");
  }

  return (
    <div className="theme">
      <label aria-labelledby="theme-toggler">THEME</label>
      <div id="theme-toggler">
        <div className="theme-number">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div className="toggle-container">
          <input ref={inputRef} type="checkbox" />
          <label></label>
          <div className="toggle-btns">
            <span tabIndex="0" onClick={uncheckToggle}></span>
            <span tabIndex="0" onClick={indeterminateToggle}></span>
            <span tabIndex="0" onClick={checkedToggle}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
