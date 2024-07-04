import "./App.css";
import ToggleBtn from "./components/ToggleBtn/ToggleBtn";
import Screen from "./components/screen/Screen";
import KeyPad from "./components/keypad/KeyPad";
import { useEffect, useReducer } from "react";
import { keyMap } from "./utils/keysMap";
import { buttonReducer } from "./reducer/buttonReducer";
import { findBtnType } from "./reducer/buttonReducer";

function App() {
  const [value, dispatchValue] = useReducer(buttonReducer, "0");
  // const [expression, setExpression] = useState("");
  // const [expression, dispatchExpression] = useReducer(expressionReducer, "");

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key;

      if (keyMap[key]) {
        handleButtonClick(keyMap[key]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleButtonClick = (buttonValue) => {
    const type = findBtnType(buttonValue);

    dispatchValue({
      type: type,
      buttonValue: buttonValue,
    });

    // let newExpression = expression;
    // if (type === "evaluate") {
    //   const newValue = buttonReducer(value, { type, buttonValue });
    //   newExpression += buttonValue + newValue + " ";
    // } else if (type === "reset") {
    //   newExpression = "";
    // } else if (type === "backspace") {
    //   newExpression = newExpression.slice(0, -1);
    // } else {
    //   newExpression += buttonValue;
    // }

    // dispatchExpression({
    //   type: type,
    //   buttonValue: buttonValue,
    // });
    // setExpression(newExpression);
  };

  return (
    <div className="calculator">
      <div className="header">
        <h1>calc</h1>
        <ToggleBtn />
      </div>
      <Screen value={value} />
      <KeyPad handleButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
