import "./App.css";
import Section from "./context/Section";
import Heading from "./context/Heading";
import { MealContext } from "./context/MealContext";
import MealList from "./context/MealList";

const todayMeals = ["roti", "curry", "rice", "papad"];

const westMeals = ["Pizza", "Pasta"];

function App() {
  return (
    <>
      <Section>
        <Heading>Home</Heading>
        <Section>
          <Heading>About</Heading>
          <Heading>Contact</Heading>
          <Heading>Products</Heading>
        </Section>
      </Section>

      <MealContext.Provider value={todayMeals}>
        <MealList />
      </MealContext.Provider>

      <MealContext.Provider>
        <MealList></MealList>
      </MealContext.Provider>
    </>
  );
}

export default App;
