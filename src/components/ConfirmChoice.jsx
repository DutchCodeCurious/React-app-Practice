import { Box, Text } from "@chakra-ui/react";
import { ChosenItem } from "./ChosenItem";

export const ConfirmChoice = ({ drink, confirm }) => {
  const confirmClick = confirm;

  const cardStyle = {
    h: "200px",
    w: "auto",
    border: "2px solid #006c67",
    borderRadius: "8px",
    padding: "5px",
    margin: "10px",
  };

  return (
    <Box {...cardStyle}>
      <Text fontSize="xl" fontWeight="bold" mb="2">
        Confirmed Orders:
      </Text>
      {confirmClick === true ? <ChosenItem drink={drink} /> : <Box></Box>}
    </Box>
  );
};
