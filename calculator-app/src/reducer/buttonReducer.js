import sanitizeString from "./sanitizer";
import { arithmaticeBtn } from "../utils/keypadLayout";
import addComma from "../utils/addComma";

export default function buttonReducer(state, action) {
  switch (action.type) {
    case "numeric":
      return state === "0"
        ? action.buttonValue
        : addComma(state.replace(/,/g, "") + action.buttonValue);

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
