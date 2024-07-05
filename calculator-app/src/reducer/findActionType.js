import { numericBtn, arithmaticeBtn } from "../utils/keypadLayout";

export default function findBtnType(buttonValue) {
  let type;
  if (numericBtn.includes(buttonValue)) type = "numeric";
  if (arithmaticeBtn.includes(buttonValue)) type = "arith";
  if (buttonValue === "RESET") type = "reset";
  if (buttonValue === "« DEL") type = "backspace";
  if (buttonValue === "=") type = "evaluate";

  return type;
}
