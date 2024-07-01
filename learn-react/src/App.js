import "./App.css";
import { Theme } from "./components/ThemeToggle";
import Body from "./Body";
import UseStateHook from "./hooks/UseState";
import EffectHook from "./hooks/UseEffect";

function App() {
  return (
    <>
      <Theme>
        <Body />
      </Theme>
      <UseStateHook />
      <EffectHook />
    </>
  );
}

export default App;
