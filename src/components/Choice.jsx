import { DrinkChoice } from "./DrinkChoice";
import { ConfirmChoice } from "./ConfirmChoice";
import { useState } from "react";
import { Box, Center } from "@chakra-ui/react";

export const Choice = ({ drink, clickFn }) => {
  const [confirm, setConfirm] = useState(false);

  const confirmClicked = () => {
    setConfirm(true);
    console.log(confirm);
  };

  return (
    <Center>
      <Box>
        <DrinkChoice
          drink={drink}
          clickFn={clickFn}
          confirmClicked={confirmClicked}
        />
      </Box>
      <Box>
        <ConfirmChoice
          drink={drink}
          clickFn={clickFn}
          confirmClicked={confirmClicked}
          confirm={confirm}
        />
      </Box>
    </Center>
  );
};
