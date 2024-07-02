import logo from "./assets/logo.svg";
// import Section from "./context/Section";
// import Heading from "./context/Heading";
import { MealContext } from "./context/MealContext";
import MealList from "./context/MealList";
import Nav from "./components/Nav";
// import ReactPlayer from "react-player/youtube";
import BookList from "./components/ListComponents";
import Test from "./components/test";
import Footer from "./components/Footer";
import { ThemeContext } from "./components/ThemeToggle";
import { useContext } from "react";

const todayMeals = ["roti", "curry", "rice", "papad"];

const navbar = [
  "home",
  "about",
  "contact",
  "products",
  "feedback",
  "registration",
  "context",
  "ReactMemo",
  "useEffect",
  "useState",
  "useRef",
  "useReducer",
];

export default function Body() {
  const { theme, fun } = useContext(ThemeContext);

  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  }

  function toggle2() {
    if (bird2.paused) {
      bird2.play();
    } else {
      bird2.pause();
    }
  }
  return (
    <div id="body" className={theme}>
      <button className={theme} onClick={() => fun()}>
        Theme {theme}
      </button>

      <Nav navbar={navbar} />

      <BookList />

      <div>
        <button className={theme} onClick={toggle1}>
          Caspian Tern 1
        </button>
        <button className={theme} onClick={toggle2}>
          Caspian Tern 2
        </button>
      </div>

      {/* <ReactPlayer
        url={"https://youtu.be/i1VeFUbWrjU?si=Rdq4D-DRB_gH0L18"}
        height={200}
        width={200}
        volume={0.5}
      /> */}

      <img src={logo} alt="logo" height={200} />
      <img src={require("./assets/logo.svg").default} alt="logo" height={200} />
      {/* contect api example */}
      {/* <Section>
        <Heading>Home</Heading>
        <Section>
          <Heading>About</Heading>
          <Heading>Contact</Heading>
          <Heading>Products</Heading>
        </Section>
      </Section> */}
      {/* context api */}
      <MealContext.Provider value={todayMeals}>
        <MealList />
      </MealContext.Provider>
      <MealContext.Provider value={""}>
        <MealList></MealList>
      </MealContext.Provider>

      <Test />

      <Footer />
    </div>
  );
}
