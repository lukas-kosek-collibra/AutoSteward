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
      padding="1rem"
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
                borderColor="gray.300"
                height="20px"
                mx={2}
              />
              <ChevronDownIcon color="white" />
            </>
          }
          display="flex"
          alignItems="center"
          variant="solid"
          colorScheme="blue"
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
