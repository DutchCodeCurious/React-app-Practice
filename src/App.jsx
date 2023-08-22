import { useState } from "react";
import { DrinkSearch } from "./components/DrinkSearch";
import { Choice } from "./components/Choice";
import { Heading } from "@chakra-ui/react";
import "./App.css";

export const App = () => {
  const [userDrink, setUserDrink] = useState();

  const greeting = "Welcome";

  return (
    <div className="app">
      {userDrink ? (
        <Choice drink={userDrink} clickFn={setUserDrink} />
      ) : (
        <>
          <Heading mb={8} size="3xl" color="red.200">
            {greeting}
          </Heading>
          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}
    </div>
  );
};
