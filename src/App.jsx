import { useState } from "react";
import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";

export const App = () => {
  const [userDrink, setUserDrink] = useState();

  //const resetUserDrink = () => {
  //  setUserDrink(null);
  //};

  const greeting = "Welcome!";

  return (
    <div className="app">
      {userDrink ? (
        <DrinkChoice
          drink={userDrink}
          clickFn={setUserDrink}
          //resetFn={resetUserDrink}
        />
      ) : (
        <>
          <h1>{greeting}</h1>
          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}
    </div>
  );
};
