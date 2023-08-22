import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn }) => (
  <Input
    className="TextInput"
    onKeyDown={changeFn}
    placeholder="tea?"
    width="auto"
    variant="filled"
  />
);
