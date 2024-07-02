import "./App.css";
import { Theme } from "./components/ThemeToggle";
import Body from "./Body";
import UseStateHook from "./hooks/UseState";
import EffectHook from "./hooks/UseEffect";
import MyComponent from "./client-api/createPortal";
function App() {
  return (
    <>
      <Theme>
        <Body />
      </Theme>
      <UseStateHook />
      <EffectHook />
      <MyComponent />
    </>
  );
}

export default App;
