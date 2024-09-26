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
  Tag,
  CircularProgress,
  CircularProgressLabel,
  TabList,
  Tab,
  Tabs,
  IconButton,
  CloseButton,
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
  TabPanels,
  TabPanel,
  VStack,
} from "@chakra-ui/react";
import {
  ChevronRight,
  ChevronUp,
  Info,
  User,
  Plus,
  BarChart2,
  FileText,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import { DatasetNav } from "./DatasetNav";
export const Dataset = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPolicies, setSelectedPolicies] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDataClasses, setShowDataClasses] = useState(false);
  const toast = useToast();
  const handleMonitor = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(false);
      setShowDataClasses(true);
      toast({
        title: "Data quality monitoring job started",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }, 1000);
  };

  const dataElements = [
    {
      name: "AGE",
      table: "CUSTOMER_DATA",
      description: "Age of the customer",
      dataClassification: "Age",
      dataCategory: "Policy Category",
      technicalDetails: "NUMBER",
      numRows: "100,000",
      numEmpty: "0 (0.00%)",
    },
    {
      name: "C_ADDRESS",
      table: "CUSTOMER_DATA",
      description: "",
      dataClassification: "Street address",
      dataCategory: "Policy Category",
      technicalDetails: "STRING",
      numRows: "100,000",
      numEmpty: "0 (0.00%)",
    },
    {
      name: "C_PHONE",
      table: "CUSTOMER_DATA",
      description: "",
      dataClassification: "Phone number",
      dataCategory: "Policy Category",
      technicalDetails: "NUMBER",
      numRows: "100,000",
      numEmpty: "0 (0.00%)",
    },
    {
      name: "EmailAddress",
      table: "CUSTOMER_DATA",
      description: "Email address of the customer",
      dataClassification: "Email",
      dataCategory: "Policy Category",
      technicalDetails: "STRING",
      numRows: "100,000",
      numEmpty: "0 (0.00%)",
    },
    {
      name: "SALES_AMT",
      table: "CUSTOMER_DATA",
      description: "",
      dataClassification: "",
      dataCategory: "",
      technicalDetails: "NUMBER",
      numRows: "100,000",
      numEmpty: "0 (0.00%)",
    },
    {
      name: "NAME",
      table: "CUSTOMER_DATA",
      description: "Customers full name",
      dataClassification: "First Name",
      dataCategory: "Policy Category",
      technicalDetails: "STRING",
      numRows: "100,000",
      numEmpty: "0 (0.00%)",
    },
    {
      name: "NUM_CRDT_CARD",
      table: "CUSTOMER_DATA",
      description: "",
      dataClassification: "Credit Card",
      dataCategory: "Policy Category",
      technicalDetails: "NUMBER",
      numRows: "100,000",
      numEmpty: "0 (0.00%)",
    },
    // Add more objects as needed
  ];

  const qualityData = [
    {
      dataElement: "Email_IsValid",
      domain: "DQ Rule-Customer Analytics",
      dataClassification: "Email",
      qualityScore: "50",
      policy: "AI Usage, GDPR",
      dimension: "Accuracy, Completeness",
    },
    {
      dataElement: "Age_IsValid",
      domain: "DQ Rule-Customer Analytics",
      dataClassification: "Age",
      qualityScore: "50",
      policy: "AI Usage, GDPR",
      dimension: "Validity",
    },
    {
      dataElement: "First name_IsValid",
      domain: "DQ Rule-Customer Analytics",
      dataClassification: "First name",
      qualityScore: "75",
      policy: "AI Usage",
      dimension: "Accuracy, Validity",
    },
    {
      dataElement: "Occupation_IsValid",
      domain: "DQ Rule-Customer Analytics",
      dataClassification: "Occupation",
      qualityScore: "100",
      policy: "AI Usage, GDPR, CCPA, UCPA",
      dimension: "Completeness",
    },
    {
      dataElement: "Percentage_IsValid",
      domain: "DQ Rule-Customer Analytics",
      dataClassification: "Percentage",
      qualityScore: "100",
      policy: "AI Usage",
      dimension: "Completeness",
    },
    {
      dataElement: "Country_IsValid",
      domain: "DQ Rule-Customer Analytics",
      dataClassification: "Country",
      qualityScore: "100",
      policy: "AI Usage, GDPR",
      dimension: "Accuracy",
    },
    {
      dataElement: "SSN_IsValid",
      domain: "DQ Rule-Customer Analytics",
      dataClassification: "SSN",
      qualityScore: "100",
      policy: "AI Usage, CCPA",
      dimension: "Uniqueness",
    },
    {
      dataElement: "Date: month_IsValid",
      domain: "DQ Rule-Customer Analytics",
      dataClassification: "Date: month",
      qualityScore: "75",
      policy: "AI Usage, CCPA",
      dimension: "Validity",
    },
    {
      dataElement: "Credit card_IsValid",
      domain: "DQ Rule-Customer Analytics",
      dataClassification: "Credit card",
      qualityScore: "75",
      policy: "AI Usage, GDPR",
      dimension: "Accuracy",
    },
    {
      dataElement: "Phone number_IsValid",
      domain: "DQ Rule-Customer Analytics",
      dataClassification: "Phone number",
      qualityScore: "50",
      policy: "AI Usage",
      dimension: "Accuracy",
    },
    {
      dataElement: "Street address_IsValid",
      domain: "DQ Rule-Customer Analytics",
      dataClassification: "Street address",
      qualityScore: "100",
      policy: "AI Usage",
      dimension: "Completeness",
    },
  ];

  const AtAGlancePanel = () => (
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
  );
  const QualityTabContent = () => (
    <Box>
      <Flex justifyContent="space-between" mb={4}>
        <Heading size="lg">Quality</Heading>
      </Flex>
      <Flex mb={4}>
        <Box
          borderWidth={1}
          borderRadius="xl"
          p={6}
          borderColor="gray.300"
          mr={4}
        >
          <Text fontWeight="bold" mb={4}>
            Overview
          </Text>
          <CircularProgress value={75} color="yellow.400" size="120px">
            <CircularProgressLabel>75</CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Box
          borderWidth={1}
          borderRadius="xl"
          p={6}
          borderColor="gray.300"
          mr={4}
        >
          <Text fontWeight="bold" mb={4}>
            Uniqueness
          </Text>
          <CircularProgress value={100} color="green.400" size="120px">
            <CircularProgressLabel>100</CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Box
          borderWidth={1}
          borderRadius="xl"
          p={6}
          borderColor="gray.300"
          mr={4}
        >
          <Text fontWeight="bold" mb={4}>
            Accuracy
          </Text>
          <CircularProgress value={50} color="red.400" size="120px">
            <CircularProgressLabel>50</CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Box
          borderWidth={1}
          borderRadius="xl"
          p={6}
          borderColor="gray.300"
          mr={4}
        >
          <Text fontWeight="bold" mb={4}>
            Validity
          </Text>
          <CircularProgress value={75} color="yellow.400" size="120px">
            <CircularProgressLabel>75</CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Box borderWidth={1} borderRadius="xl" p={6} borderColor="gray.300">
          <Text fontWeight="bold" mb={4}>
            Completeness
          </Text>
          <CircularProgress value={75} color="yellow.400" size="120px">
            <CircularProgressLabel>75</CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Flex>
      <Divider mb={4} />
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Data Element</Th>
            <Th>Domain</Th>
            <Th>Data Classification</Th>
            <Th>Quality Score</Th>
            <Th>Policy</Th>
          </Tr>
        </Thead>
        <Tbody>
          {qualityData.map((row, index) => (
            <Tr key={index}>
              <Td>{row.dataElement}</Td>
              <Td>{row.domain}</Td>
              <Td>
                <Tag colorScheme="green">{row.dataClassification}</Tag>
              </Td>
              <Td>{row.qualityScore}</Td>
              <Td>
                <Tag colorScheme="green">{row.policy}</Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
  return (
    <>
      <DatasetNav setIsModalOpen={setIsModalOpen} />
      <Box maxWidth="100%" p={4}>
        <Flex>
          <Box flex={1} mr={4}>
            <Tabs>
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
              <Flex>
                <VStack align="stretch" width="200px" spacing={2} mt={4}>
                  <Button
                    leftIcon={<BarChart2 size={16} />}
                    justifyContent="flex-start"
                    variant="ghost"
                    isActive
                  >
                    Overview
                  </Button>
                  <Button
                    leftIcon={<ChevronRight size={16} />}
                    justifyContent="flex-start"
                    variant="ghost"
                  >
                    Descriptive Statistics
                  </Button>
                  <Button
                    leftIcon={<FileText size={16} />}
                    justifyContent="flex-start"
                    variant="ghost"
                  >
                    Details
                  </Button>
                  <Button
                    leftIcon={<MessageSquare size={16} />}
                    justifyContent="flex-start"
                    variant="ghost"
                  >
                    Comments
                  </Button>
                </VStack>
                <TabPanels flex={1}>
                  <TabPanel>
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
                        Dataset that contains information to calculate credit
                        scores for individual consumers.
                      </Text>
                    </Box>
                    <Box mb={4}>
                      <Flex alignItems="center" mb={2}>
                        <Heading size="md" mr={1}>
                          Business Context
                        </Heading>
                      </Flex>
                      <Text>
                        <Link color="blue.500" href="#">
                          Churn Rate
                        </Link>
                        ,{" "}
                        <Link color="blue.500" href="#">
                          Contact information (CCPA)
                        </Link>
                        ,{" "}
                        <Link color="blue.500" href="#">
                          Contact information
                        </Link>
                        ,{" "}
                        <Link color="blue.500" href="#">
                          Order
                        </Link>
                        ,{" "}
                        <Link color="blue.500" href="#">
                          Sales per Customer
                        </Link>
                        ...
                      </Text>
                      <Link color="blue.500" href="#">
                        Show More (2)
                      </Link>
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
                      <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        mb={4}
                      >
                        <Heading size="md">Data Elements</Heading>
                        <Flex>
                          <IconButton
                            aria-label="Expand/Collapse"
                            icon={isExpanded ? <ChevronUp /> : <ChevronRight />}
                            onClick={() => setIsExpanded(!isExpanded)}
                            mr={2}
                          />
                          <IconButton aria-label="Add" icon={<Plus />} mr={2} />
                          <IconButton
                            aria-label="Info"
                            icon={<Info />}
                            mr={2}
                          />
                          <IconButton
                            aria-label="Grid view"
                            icon={<div />}
                            mr={2}
                          />
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
                            {dataElements.map((row, index) => (
                              <Tr key={index}>
                                <Td>
                                  <Checkbox />
                                </Td>
                                <Td>{row.name}</Td>
                                <Td>{row.table}</Td>
                                <Td>{row.description}</Td>
                                <Td>
                                  {showDataClasses &&
                                    row.dataClassification && (
                                      <Tag colorScheme="green">
                                        {row.dataClassification}
                                      </Tag>
                                    )}
                                </Td>
                                <Td>
                                  {showDataClasses && row.dataCategory && (
                                    <Tag colorScheme="green">
                                      {row.dataCategory}
                                    </Tag>
                                  )}
                                </Td>
                                <Td>{row.technicalDetails}</Td>
                                <Td>{row.numRows}</Td>
                                <Td>{row.numEmpty}</Td>
                              </Tr>
                            ))}
                          </Tbody>
                        </Table>
                      )}
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box>Diagram content goes here</Box>
                  </TabPanel>
                  <TabPanel>
                    <Box>Pictures content goes here</Box>
                  </TabPanel>
                  <TabPanel>
                    <Box>Technical Lineage content goes here</Box>
                  </TabPanel>
                  <TabPanel>
                    <QualityTabContent />
                  </TabPanel>
                  <TabPanel>
                    <Box>Responsibilities content goes here</Box>
                  </TabPanel>
                  <TabPanel>
                    <Box>History content goes here</Box>
                  </TabPanel>
                  <TabPanel>
                    <Box>Attachments content goes here</Box>
                  </TabPanel>
                  <TabPanel>
                    <Box>Data Protection content goes here</Box>
                  </TabPanel>
                </TabPanels>
              </Flex>
            </Tabs>
          </Box>
          <AtAGlancePanel />
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
                onChange={setSelectedPolicies}
              >
                <Stack spacing={2}>
                  <Checkbox value="AI Usage policy">AI Usage policy</Checkbox>
                  <Checkbox value="CCPA">CCPA</Checkbox>
                  <Checkbox value="Utah Consumer Privacy Act">
                    Utah Consumer Privacy Act
                  </Checkbox>
                  <Checkbox value="PIPL">PIPL</Checkbox>
                </Stack>
              </CheckboxGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="purple"
                onClick={handleMonitor}
                borderRadius="full"
                isLoading={isLoading}
              >
                {isLoading ? <Spinner size="sm" /> : "Monitor"}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};
