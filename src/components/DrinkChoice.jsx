import { Box, Text, Image, Center, Button } from "@chakra-ui/react";

export const DrinkChoice = ({ drink, clickFn, confirmClicked }) => {
  const imgStyle = {
    height: "100px",
    width: "100px",
  };

  const cardStyle = {
    h: "200px",
    border: "2px solid #006c67",
    borderRadius: "8px",
    padding: "5px",
  };

  const buttonStyle = {
    colorScheme: "teal",
    variant: "outline",
    margin: "3px",
  };

  return (
    <Center {...cardStyle}>
      <Box align="center">
        <Text fontSize="xl" fontWeight="bold" mb="2">
          You choose: {drink.name}
        </Text>
        <Image src={drink.imgUrl} alt={drink.alt} style={imgStyle} />
        <Box>
          <Button {...buttonStyle} onClick={() => clickFn()}>
            Change
          </Button>
          <Button {...buttonStyle} onClick={confirmClicked}>
            Confirm
          </Button>
        </Box>
      </Box>
    </Center>
  );
};
