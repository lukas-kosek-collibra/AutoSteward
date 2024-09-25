import { Box } from "@chakra-ui/react";
import { TopNav } from "./TopNav";
import { MidNav } from "./MidNav";

export const Navigation = () => {
  return (
    <Box width="100%">
      <TopNav />
      <MidNav />
      {/* <BottomNav /> */}
    </Box>
  );
};
