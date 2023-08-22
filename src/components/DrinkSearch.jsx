import { useState } from "react";
import { availableDrinks } from "../../utils/data.js";
import { DrinkList } from "./DrinkList";
import { TextInput } from "./ui/TextInput";
import { Modal } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const DrinkSearch = ({ clickFn, changeFn }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => setSearchField(event.target.value);

  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <Text>Search for drinks:</Text>
      <TextInput changeFn={handleChange} />
      <DrinkList clickFn={clickFn} drinks={matchedDrinks} />
    </>
  );
};
