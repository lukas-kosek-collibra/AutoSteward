import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
} from "@chakra-ui/react";
import {
  CheckCheck,
  MoreVerticalIcon,
  ChevronDownIcon,
  InfoIcon,
} from "lucide-react";
export const BottomNavRight = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      bg="rgb(1, 30, 51)"
      borderRadius="md"
    >
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={
            <>
              <Box
                as="span"
                borderLeft="1px"
                borderColor="#87b3fc"
                height="20px"
                mx={2}
              />
              <ChevronDownIcon color="#87b3fc" />
            </>
          }
          display="flex"
          alignItems="center"
          variant="outline"
          color="#87b3fc"
          borderColor="#87b3fc"
          _hover={{
            bg: "transparent",
          }}
          _active={{
            bg: "transparent",
          }}
          borderRadius="full"
          aria-readonly="true"
        >
          Access Data Quality...
        </MenuButton>
        <MenuList>
          <MenuItem>Foo</MenuItem>
          <MenuItem>Bar</MenuItem>
        </MenuList>
      </Menu>
      <IconButton
        icon={<ChevronDownIcon color="white" />}
        aria-label="Expand options"
        variant="link"
      />
      <IconButton
        icon={<InfoIcon color="white" />}
        aria-label="More information"
        variant="solid"
        bg="gray.700"
        color="white"
        marginLeft="0.5rem"
      />
      <IconButton
        icon={<CheckCheck color="white" />}
        aria-label="Sort"
        variant="link"
        marginLeft="0.5rem"
      />
      <IconButton
        icon={<MoreVerticalIcon color="white" />}
        aria-label="More actions"
        variant="link"
        marginLeft="0.5rem"
      />
    </Box>
  );
};
