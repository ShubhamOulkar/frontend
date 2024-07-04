import "./keypad.css";
import { buttonsLayout } from "../../utils/keypadLayout";
import Btn from "../btn/btn";

export default function KeyPad({ handleButtonClick }) {
  return (
    <div className="keypad-container">
      {buttonsLayout.map((btn) => (
        // <button key={btn} onClick={() => handleButtonClick(btn)}>
        //   {btn}
        // </button>
        <Btn key={btn} onClick={handleButtonClick} value={btn} />
      ))}
    </div>
  );
}
