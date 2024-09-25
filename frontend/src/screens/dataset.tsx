import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Stack,
  Text,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Switch,
  Button,
  ButtonGroup,
  Tooltip,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Tag,
  Progress,
  TabList,
  Tab,
  Tabs,
  IconButton,
  CloseButton,
  ChakraProvider,
  Link,
  Avatar,
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  CheckboxGroup,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { ChevronRight, ChevronUp, Info, X, User, Plus } from "lucide-react";
import React, { useState } from "react";
import { render } from "react-dom";
const DataSummary = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPolicies, setSelectedPolicies] = useState<(string | number)[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const handleMonitor = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(false);
      toast({
        title: "Data quality monitoring job started",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }, 1000);
  };
  return (
    <Box maxWidth="100%" p={4}>
      <Flex justifyContent="flex-end" mb={4}>
        <Button colorScheme="purple" onClick={() => setIsModalOpen(true)}>
          Monitor for Compliance
        </Button>
      </Flex>
      <Flex justifyContent="space-between">
        <Box flex={1} mr={4}>
          <Tabs size="sm">
            <TabList>
              <Tab>Summary</Tab>
              <Tab>Diagram</Tab>
              <Tab>Pictures</Tab>
              <Tab>Technical Lineage</Tab>
              <Tab>Quality</Tab>
              <Tab>Responsibilities</Tab>
              <Tab>History</Tab>
              <Tab>Attachments</Tab>
              <Tab>Data Protection</Tab>
            </TabList>
          </Tabs>

          <Flex
            justifyContent="space-between"
            alignItems="center"
            mb={4}
            mt={4}
          >
            <Heading size="lg">Overview</Heading>
            <Flex alignItems="center">
              <Text mr={2}>Show Empty Optional Values</Text>
              <Switch />
            </Flex>
          </Flex>

          <Box mb={4}>
            <Flex alignItems="center" mb={2}>
              <Heading size="md" mr={1}>
                Description
              </Heading>
              <Tooltip label="Information">
                <Box>
                  <Info size={16} />
                </Box>
              </Tooltip>
            </Flex>
            <Text>
              Dataset that contains information to calculate credit scores for
              individual consumers.
            </Text>
          </Box>

          <Flex justifyContent="flex-end" mb={4}>
            <ButtonGroup size="sm">
              <Button
                variant="outline"
                colorScheme="blue"
                borderRadius="full"
                onClick={() => setIsExpanded(false)}
              >
                Collapse All
              </Button>
              <Button
                variant="outline"
                colorScheme="blue"
                borderRadius="full"
                onClick={() => setIsExpanded(true)}
                isDisabled={isExpanded}
              >
                Expand All
              </Button>
            </ButtonGroup>
          </Flex>

          <Box borderWidth={1} borderRadius="md" p={4} mt={4}>
            <Flex justifyContent="space-between" alignItems="center" mb={4}>
              <Heading size="md">Data Elements</Heading>
              <Flex>
                <IconButton
                  aria-label="Expand/Collapse"
                  icon={isExpanded ? <ChevronUp /> : <ChevronRight />}
                  onClick={() => setIsExpanded(!isExpanded)}
                  mr={2}
                />
                <IconButton aria-label="Add" icon={<Plus />} mr={2} />
                <IconButton aria-label="Info" icon={<Info />} mr={2} />
                <IconButton aria-label="Grid view" icon={<div />} mr={2} />
                <IconButton aria-label="List view" icon={<div />} />
              </Flex>
            </Flex>
            {isExpanded && (
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th></Th>
                    <Th>Name</Th>
                    <Th>Table</Th>
                    <Th>Description</Th>
                    <Th>Data Classification</Th>
                    <Th>Data Category</Th>
                    <Th>Technical D...</Th>
                    <Th># Rows</Th>
                    <Th># Empt...</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Checkbox />
                    </Td>
                    <Td>CustomerAlternateKey</Td>
                    <Td>DimCustomer</Td>
                    <Td>An alternate identifi</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td>nvarchar</Td>
                    <Td>18,484</Td>
                    <Td>0 (0.00</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Checkbox />
                    </Td>
                    <Td>C_ADDRESS</Td>
                    <Td>CUSTOMER</Td>
                    <Td>Customer address.</Td>
                    <Td>
                      <Tag>Street address</Tag>
                    </Td>
                    <Td></Td>
                    <Td>VARCHAR</Td>
                    <Td>1,500</Td>
                    <Td>0 (0.00</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Checkbox />
                    </Td>
                    <Td>transaction_date</Td>
                    <Td>sales_data</Td>
                    <Td>The transaction dat</Td>
                    <Td>
                      <Tag>Date: date</Tag>
                    </Td>
                    <Td></Td>
                    <Td>DATE</Td>
                    <Td>4,999</Td>
                    <Td>0 (0.00</Td>
                  </Tr>
                </Tbody>
              </Table>
            )}
          </Box>
        </Box>

        <Box width="350px" borderWidth={1} borderRadius="md" p={4}>
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Heading size="md">At a glance</Heading>
            <CloseButton size="sm" />
          </Flex>

          <Stack spacing={4}>
            <Flex justifyContent="space-between">
              <Text fontWeight="bold">Page Visits</Text>
              <Text>44</Text>
            </Flex>

            <Divider borderWidth="1px" borderColor="gray.200" />

            <Flex justifyContent="space-between">
              <Text fontWeight="bold">Last modified</Text>
              <Text>Sep 13, 2024</Text>
            </Flex>

            <Divider borderWidth="1px" borderColor="gray.200" />

            <Flex justifyContent="space-between" alignItems="center">
              <Flex alignItems="center">
                <Text fontWeight="bold" mr={1}>
                  Owner
                </Text>
                <Tooltip label="Information about Owner">
                  <Box>
                    <Info size={16} />
                  </Box>
                </Tooltip>
              </Flex>
              <Avatar size="sm" icon={<User />} bg="gray.200" />
            </Flex>

            <Flex justifyContent="space-between" alignItems="center">
              <Flex alignItems="center">
                <Text fontWeight="bold" mr={1}>
                  Subject Matter Expert
                </Text>
                <Tooltip label="Information about Subject Matter Expert">
                  <Box>
                    <Info size={16} />
                  </Box>
                </Tooltip>
              </Flex>
              <Avatar size="sm" icon={<User />} bg="gray.200" />
            </Flex>

            <Flex justifyContent="flex-end">
              <Link color="blue.500" href="#">
                Explore Other Roles
              </Link>
            </Flex>

            <Divider borderWidth="1px" borderColor="gray.200" />

            <Box>
              <Flex justifyContent="space-between" alignItems="center" mb={1}>
                <Flex alignItems="center">
                  <Text fontWeight="bold" mr={1}>
                    Tags
                  </Text>
                  <Tooltip label="Information">
                    <Box>
                      <Info size={16} />
                    </Box>
                  </Tooltip>
                </Flex>
              </Flex>
              <Text fontSize="sm" color="gray.500">
                We'll show tags here when they're added.
              </Text>
            </Box>
          </Stack>
        </Box>
      </Flex>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Relevant Policies</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CheckboxGroup
              colorScheme="purple"
              value={selectedPolicies}
              onChange={(value: Array<string | number>) => setSelectedPolicies(value)}
            >
              <Stack spacing={2}>
                <Checkbox value="GDPR">GDPR</Checkbox>
                <Checkbox value="HIPAA">HIPAA</Checkbox>
                <Checkbox value="CA Data">CA Data</Checkbox>
              </Stack>
            </CheckboxGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="purple"
              onClick={handleMonitor}
              isLoading={isLoading}
            >
              {isLoading ? <Spinner size="sm" /> : "Monitor"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default DataSummary;
render(
  <ChakraProvider>
    <DataSummary />
  </ChakraProvider>,
  document.getElementById("root")
);
