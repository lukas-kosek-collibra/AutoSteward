import { RouterProvider } from "react-router-dom";
import { DataSummary } from "./components/DataSummary/DataSummary";
import { Navigation } from "./components/Navigation/Navigation";
import { Flex } from "@chakra-ui/react";
import { router } from "./routes/router";

function App() {
  return (
    <Flex direction={"column"} flex={1}>
      <Navigation />
      <RouterProvider router={router} />
    </Flex>
  );
}

export default App;
