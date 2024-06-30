import "./App.css";
import { Theme } from "./components/ThemeToggle";
import Body from "./Body";
import UseStateHook from "./hooks/UseState";
import EffectHook from "./hooks/UseEffect";

function App() {
  return (
    <>
      <UseStateHook />
      <EffectHook />
      <Theme>
        <Body />
      </Theme>
    </>
  );
}

export default App;
