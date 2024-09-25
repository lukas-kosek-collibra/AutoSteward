import {
  Box,
  Flex,
  Button,
  Link,
  Image,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import {
  Plus,
  LayoutGrid,
  Compass,
  Search,
  BellDot,
  Activity,
  ShoppingCart,
  HelpCircle,
  User,
} from "lucide-react";
import { CollibraLogo } from "./CollibraLogo";
export const TopNav = () => {
  return (
    <Box minWidth="100%">
      <Flex
        alignItems="center"
        height="40px"
        gap="24px"
        bg="rgb(1, 30, 51)"
        color="rgb(25, 28, 34)"
        fontSize="14px"
        justifyContent={"space-between"}
        lineHeight="21px"
        px={4}
        pt={8}
        pb={3}
      >
        <Flex alignItems="center" height="40px" gap="24px">
          <Link
            href="https://demo-ui.collibra.com/"
            aria-label="Collibra logo"
            fontWeight="600"
            fontSize="14px"
            color="white"
            minHeight="40px"
            minWidth="40px"
            lineHeight="20px"
            borderRadius="24px"
            p="4px 0"
            m="0"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box width="135px" height="32px" maxWidth="100%">
              {CollibraLogo()}
            </Box>
          </Link>
          <Divider
            orientation="vertical"
            borderColor="rgb(126, 136, 154)"
            height="40px"
          />
          <Button
            aria-label="Applications"
            aria-expanded="false"
            aria-haspopup="dialog"
            variant="ghost"
            color="white"
            borderRadius="8px"
            p={2}
          >
            <LayoutGrid color="white" />
          </Button>
          <Button
            aria-expanded="false"
            aria-haspopup="dialog"
            aria-label="Browse"
            variant="ghost"
            color="white"
            borderRadius="8px"
            p={2}
          >
            <Compass color="white" />
          </Button>
          <Button
            aria-label="Search"
            variant="ghost"
            color="white"
            borderRadius="8px"
            p={2}
          >
            <Search color="white" />
          </Button>
        </Flex>

        <Flex alignItems="center" gap="24px">
          <Button
            aria-label="Create"
            aria-haspopup="dialog"
            variant="ghost"
            color="white"
            borderRadius="8px"
            p={2}
          >
            <Plus color="white" />
          </Button>
          <Link
            href="/tasks/your"
            aria-label="11 tasks"
            fontSize="24px"
            color="white"
            borderRadius="8px"
            p={2}
            position="relative"
          >
            <Box position="relative">
              <BellDot color="white" />
              <Box
                position="absolute"
                fontSize="12px"
                minWidth="20px"
                height="20px"
                bg="rgb(212, 4, 29)"
                right="-10px"
                top="-10px"
                fontWeight="600"
                color="white"
                borderRadius="10px"
                px={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                11
              </Box>
            </Box>
          </Link>
          <Button
            id=":r7:"
            aria-label="Activities"
            aria-expanded="false"
            aria-haspopup="dialog"
            variant="ghost"
            color="white"
            borderRadius="8px"
            p={2}
          >
            <Box position="relative">
              <Activity color="white" />
            </Box>
          </Button>
          <Link
            href="/apps/shopping-basket"
            aria-label="Data Basket - 0"
            fontSize="24px"
            color="white"
            borderRadius="8px"
            p={2}
          >
            <Box position="relative">
              <ShoppingCart color="white" />
            </Box>
          </Link>
          <Button
            id=":ra:"
            aria-label="Help"
            aria-expanded="false"
            aria-haspopup="dialog"
            variant="ghost"
            color="white"
            borderRadius="8px"
            p={2}
          >
            <HelpCircle color="white" />
          </Button>
          <Button
            aria-expanded="false"
            aria-haspopup="dialog"
            aria-label="User avatar: Marc Admin"
            variant="unstyled"
            borderRadius="50%"
            p={0}
          >
            <Box
              position="relative"
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="40px"
              height="40px"
              fontFamily='"Inter Variable", "Open Sans Variable", "Helvetica Neue", Helvetica, Arial, sans-serif'
              fontWeight="600"
              fontSize="16px"
              lineHeight="24px"
              borderRadius="50%"
              overflow="hidden"
            >
              <Avatar size="sm" icon={<User />} bg="gray.200" />
            </Box>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
