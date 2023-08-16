import { useState } from "react";
import "./App.css";
import { DrinkChoice } from "../components/DrinkChoice";
import { DrinkSearch } from "../components/DrinkSearch";

import { availableDrinks } from "../utils/data";

export const App = () => {
  const [userDrink, setUserDrink] = useState();
  const greeting = "Hello there!";

  return (
    <div className="app">
      <h1>{greeting}</h1>
      <DrinkSearch />
    </div>
  );
};
