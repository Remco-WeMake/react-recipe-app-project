import { Flex, Stack } from "@chakra-ui/react";
import { ColorModeToggle } from "./ColorModeToggle";

export const Header = () => {
  return (
    <Flex
      position="sticky"
      top="20px"
      px={"24px"}
      zIndex={"sticky"}
      justifyContent={"flex-end"}
    >
      <ColorModeToggle />
    </Flex>
  );
};
