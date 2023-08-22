import { Center, Image, Text } from "@chakra-ui/react";

export const DrinkItem = ({ drink, clickFn }) => {
  const imgStyle = {
    width: "30px",
    height: "30px",
    marginLeft: "2px",
  };

  const itemStyle = {
    border: "2px solid #006c67",
    marginTop: "4px",
    width: "180px",
    borderRadius: "8px",
    gap: 8,
    cursor: "pointer",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "flex-start",
    overflow: "hidden",
    _hover: {
      bg: "#edf7f6",
      transform: "scale(1.2)",
      opacity: "1",
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <Center {...itemStyle} onClick={() => clickFn(drink)}>
      <Image
        src={drink.imgUrl}
        alt={drink.alt}
        style={imgStyle}
        borderRadius={("8px", "0px", "8px", "0px")}
      ></Image>
      <Text fontWeight={"semibold"}>{drink.name}</Text>
    </Center>
  );
};
