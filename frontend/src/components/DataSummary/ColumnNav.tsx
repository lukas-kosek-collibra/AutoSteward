import { Box, Flex } from "@chakra-ui/react";
import { BottomNavLeft } from "../Navigation/BottomNavLeft";
import { BottomNavRight } from "../Navigation/BottomNavRight";

export const ColumnNav = () => {
  return (
    <Box bg="rgb(1, 30, 51)">
      <Flex direction={"row"} justifyContent={"space-between"} px={4} pb={3}>
        <BottomNavLeft assetName="EmailAddress" assetType="Column" />
        <BottomNavRight />
      </Flex>
    </Box>
  );
};
