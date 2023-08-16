export const DrinkChoice = ({ drink }) => {
  const imgStyle = {
    height: "100px",
    width: "100px",
  };
  return (
    <>
      <p>You choose: {drink.name}</p>
      <img src={drink.imgUrl} alt={drink.alt} style={imgStyle} />
      <p>You're drink will be ready in a few seconds!</p>
    </>
  );
};
