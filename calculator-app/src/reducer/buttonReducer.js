const numericBtn = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const arithmaticeBtn = ["+", "-", "×", "/", "."];

function sanitizeString(state) {
  // replace '×' with asteric and remove leading zeros.
  const sanitizeValue = state.replace("×", "*").replace(/\b0+(?!\b|\.)/g, "");
  //.replace(/[/*]/, ""); //1st occuarance of * and /
  // remove last operator if exist
  const lastOperatorChecker = /[+\-×/.]$/;
  if (lastOperatorChecker.test(sanitizeValue)) {
    const cleanValue = sanitizeValue.slice(0, -1);
    return eval(cleanValue).toString();
  }
  return eval(sanitizeValue).toString();
}

export function findBtnType(buttonValue) {
  let type;
  if (numericBtn.includes(buttonValue)) type = "numeric";
  if (arithmaticeBtn.includes(buttonValue)) type = "arith";
  if (buttonValue === "RESET") type = "reset";
  if (buttonValue === "« DEL") type = "backspace";
  if (buttonValue === "=") type = "evaluate";

  return type;
}

export function buttonReducer(state, action) {
  switch (action.type) {
    case "numeric":
      return state === "0" ? action.buttonValue : state + action.buttonValue;

    case "arith":
      return state === "0"
        ? action.buttonValue
        : !arithmaticeBtn.includes(state.slice(-1)) // allow only 1 arith operator
        ? state + action.buttonValue
        : state;

    case "backspace":
      return state === "0" ? state : state.slice(0, -1) || "0"; //if slice return empty string then setState 0
    case "reset":
      return "0";
    case "evaluate":
      try {
        const calcValue = sanitizeString(state);
        return calcValue;
      } catch (e) {
        console.error("Value evaluation error:", e);
        return "Error";
      }
    default:
      throw Error("Invalid calculator action");
  }
}

// function expressionReducer(state, action) {
//   switch (action.type) {
//     case "evaluate":
//       const newValue = buttonReducer(state, action);
//       return (state += action.buttonValue + newValue);
//     case "reset":
//       return "";
//     case "backspace":
//       return state.slice(0, -1);
//     default:
//       return state + action.buttonValue;
//   }
// }
