import "./App.css";
import { DrinkButtons } from "../components/DrinkButtons";
import "../components/DrinkButtons.css";

export const App = () => {
  const greeting = "Hello there!";

  return (
    <div className="app">
      <h1>{greeting}</h1>
      <DrinkButtons />
    </div>
  );
};
