import "./App.css";
import ToggleBtn from "./components/ToggleBtn/ToggleBtn";
import { useThemeContext } from "./context/themeContext";
function App() {
  const [theme, setTheme] = useThemeContext();
  return (
    <div className={"calc " + theme}>
      <h1>Calculator app</h1>
      <ToggleBtn />
    </div>
  );
}

export default App;
