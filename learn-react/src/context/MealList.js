import { useContext } from "react";
import { MealContext } from "./MealContext";

function MealList() {
  const list = useContext(MealContext);

  return (
    <ul>
      {Array.isArray(list) ? (
        list.map((item, index) => <li key={index}>{item}</li>)
      ) : (
        <p>"no meal today 🥹"</p>
      )}
    </ul>
  );
}

export default MealList;
