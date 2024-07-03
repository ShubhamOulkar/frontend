import "./App.css";
import ToggleBtn from "./components/ToggleBtn/ToggleBtn";
import Screen from "./components/screen/Screen";
import KeyPad from "./components/keypad/KeyPad";

function App() {
  return (
    <div className="calculator">
      <div className="header">
        <h1>calc</h1>
        <ToggleBtn />
      </div>
      <Screen />
      <KeyPad />
    </div>
  );
}

export default App;
