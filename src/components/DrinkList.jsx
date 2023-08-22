import { DrinkItem } from "./drinkItem";

export const DrinkList = ({ drinks, clickFn }) => {
  return (
    <>
      {drinks.map((drink) => (
        <DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
      ))}
    </>
  );
};
