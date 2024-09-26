import { Box, Flex } from "@chakra-ui/react";
import { BottomNavLeft } from "../Navigation/BottomNavLeft";
import { DatasetNavRight } from "./DatasetNavRight";

interface DatasetNavRightProps {
  setIsModalOpen: (value: boolean) => void;
}

export const DatasetNav: React.FC<DatasetNavRightProps> = ({
  setIsModalOpen,
}) => {
  return (
    <Box bg="rgb(1, 30, 51)">
      <Flex direction={"row"} justifyContent={"space-between"} px={4} pb={3}>
        <BottomNavLeft assetName="Customer Analytics" assetType="Data Set" />
        <DatasetNavRight setIsModalOpen={setIsModalOpen} />
      </Flex>
    </Box>
  );
};
