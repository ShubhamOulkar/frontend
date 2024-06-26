import "./App.css";
// import Section from "./context/Section";
// import Heading from "./context/Heading";
import { MealContext } from "./context/MealContext";
import MealList from "./context/MealList";
import Nav from "./components/Nav";

const todayMeals = ["roti", "curry", "rice", "papad"];

const navbar = ["home", "about", "contact", "products"];

function App() {
  return (
    <>
      <Nav navbar={navbar} />

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
    </>
  );
}

export default App;
