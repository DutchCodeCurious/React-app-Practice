import { Button } from "./ui/button";

export const DrinkChoice = ({ drink, clickFn }) => {
  //const handleButtonClick = () => {
  //  resetFn();
  //};
  const imgStyle = {
    height: "100px",
    width: "100px",
  };
  return (
    <>
      <p>You choose: {drink.name}</p>
      <img src={drink.imgUrl} alt={drink.alt} style={imgStyle} />
      <p>You're drink will be ready in a few seconds!</p>
      <Button text={"Change selection"} clickFn={() => clickFn(null)} />
    </>
  );
};

// task={handleButtonClick} //
