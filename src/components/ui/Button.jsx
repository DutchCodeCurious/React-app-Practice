import { Button, ButtonGroup } from "@chakra-ui/react";

export const Buttons = ({ text, clickFn }) => {
  return (
    <Button
      width={"auto"}
      onClick={clickFn}
      colorScheme="teal"
      variant="outline"
      marginTop={"5px"}
    >
      {text}
    </Button>
  );
};
