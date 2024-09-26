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

interface DatasetNavRightProps {
  setIsModalOpen: (value: boolean) => void;
}

export const DatasetNavRight: React.FC<DatasetNavRightProps> = ({
  setIsModalOpen,
}) => {
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
          Ask the Expert
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => setIsModalOpen(true)}>
            Monitor for Compliance
          </MenuItem>
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
