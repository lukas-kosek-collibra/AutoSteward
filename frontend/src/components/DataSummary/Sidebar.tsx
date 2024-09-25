import { Box, Text, VStack } from "@chakra-ui/react";
export const Sidebar = () => {
  return (
    <Box
      width="250px"
      bg="gray.800"
      color="white"
      position="fixed"
      height="100%"
      p={4}
      boxShadow="lg"
    >
      <Text fontSize="xl" mb={4}>
        Sidebar
      </Text>
      <VStack spacing={4} align="stretch">
        <Text>Link 1</Text>
        <Text>Link 2</Text>
        <Text>Link 3</Text>
        <Text>Link 4</Text>
      </VStack>
    </Box>
  );
};
