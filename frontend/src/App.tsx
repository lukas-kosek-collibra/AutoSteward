import { Navigation } from "./components/Navigation/Navigation";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex direction={"column"} flex={1}>
      <Navigation />
    </Flex>
  );
}

export default App;
