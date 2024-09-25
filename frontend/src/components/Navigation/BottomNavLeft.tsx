import { InfoIcon } from "@chakra-ui/icons";
import { Box, Text, Icon, Flex, Divider } from "@chakra-ui/react";
import { ColumnsIcon, Info } from "lucide-react";
import React from "react";
export const BottomNavLeft: React.FC = () => {
  return (
    <Box color="white">
      <Flex alignItems="center">
        <Icon as={ColumnsIcon} boxSize={6} color="yellow.400" mr={2} />
        <Text fontSize="2xl" fontWeight="bold">
          EmailAddress
        </Text>
      </Flex>
      <Flex alignItems="center" mt={2}>
        <Text fontSize="md" mr={2}>
          Column
        </Text>
        <Info size={16} />
        <Divider orientation="vertical" height="20px" mx={2} />
        <Text fontSize="md" fontWeight="bold" mr={1}>
          IMPLEMENTED
        </Text>
        <Info size={16} />
      </Flex>
    </Box>
  );
};
