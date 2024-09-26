import { Box, Flex } from "@chakra-ui/react";
import { BottomNavLeft } from "../Navigation/BottomNavLeft";
import { DatasetNavRight } from "./DatasetNavRight";

export const DatasetNav = () => {
  return (
    <Box bg="rgb(1, 30, 51)">
      <Flex direction={"row"} justifyContent={"space-between"} px={4} pb={3}>
        <BottomNavLeft assetName="Customer Analytics" assetType="Data Set" />
        <DatasetNavRight />
      </Flex>
    </Box>
  );
};
