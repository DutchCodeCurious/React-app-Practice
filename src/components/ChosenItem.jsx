import { Box, IconButton, Text } from "@chakra-ui/react";
import { SmallAddIcon, MinusIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const ChosenItem = ({ drink }) => {
  const minQuantity = 1;
  const [quantity, setQuantity] = useState(minQuantity);

  const handleQuantityClick = (newQuantity) => {
    if (newQuantity >= minQuantity) {
      setQuantity(newQuantity);
    }
  };

  const q = quantity;

  const ItemStyle = {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    display: "flex",
    marginTop: "4px",
    width: "auto",
    borderRadius: "8px",
    padding: "5px",
  };

  return (
    <Box {...ItemStyle}>
      <Box alignContent={"flex-start"}>
        <Text padding={"5px"}>
          {q} {drink.name}
        </Text>
      </Box>
      <Box>
        <IconButton
          icon={<SmallAddIcon />}
          onClick={() => handleQuantityClick(quantity + 1)}
        />
        <IconButton
          margin={"2px"}
          icon={<MinusIcon />}
          onClick={() => handleQuantityClick(quantity - 1)}
        />
      </Box>
    </Box>
  );
};
