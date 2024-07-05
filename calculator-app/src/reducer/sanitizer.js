import addComma from "../utils/addComma";

export default function sanitizeString(state) {
  // replace '×' with asteric , remove leading zeros, remove commans globally
  const sanitizeValue = state
    .replace(/,/g, "")
    .replace("×", "*")
    .replace(/\b0+(?!\b|\.)/g, "");

  //.replace(/[/*]/, ""); //1st occuarance of * and /
  // remove last operator if exist
  const lastOperatorChecker = /[+\-×/.]$/;
  if (lastOperatorChecker.test(sanitizeValue)) {
    const cleanValue = sanitizeValue.slice(0, -1);
    const evalValue = eval(cleanValue).toString();
    return addComma(evalValue);
  }
  return addComma(eval(sanitizeValue).toString());
}
