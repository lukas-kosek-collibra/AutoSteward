import { Box, Flex } from "@chakra-ui/react";
import { BottomNavLeft } from "./BottomNavLeft";
import { BottomNavRight } from "./BottomNavRight";

export const BottomNav = () => {
  return (
    <Box bg="rgb(1, 30, 51)">
      <Flex direction={"row"} justifyContent={"space-between"}>
        <BottomNavLeft />
        <BottomNavRight />
      </Flex>
    </Box>
  );
};
