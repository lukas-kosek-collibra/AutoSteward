import {
  InfoIcon,
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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import { ChevronRight, ChevronUp, Info, X, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { render } from "react-dom";
const DataSummary = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dataClassification, setDataClassification] = useState("");
  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  const handleSave = () => {
    setDataClassification("email");
    onClose();
  };
  return (
    <Box maxWidth="100%" p={4}>
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

          <Breadcrumb separator={<ChevronRight size={14} />} mt={4} mb={4}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">sys AWS RDS</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">sales</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">public</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">sales_data</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">email</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Heading size="lg">Overview</Heading>
            <Flex alignItems="center">
              <Text mr={2}>Show Empty Optional Values</Text>
              <Switch />
            </Flex>
          </Flex>

          <Flex justifyContent="flex-end" mb={4}>
            <ButtonGroup size="sm">
              <Button variant="outline" colorScheme="blue" borderRadius="full">
                Collapse All
              </Button>
              <Button
                variant="outline"
                colorScheme="blue"
                borderRadius="full"
                isDisabled
              >
                Expand All
              </Button>
            </ButtonGroup>
          </Flex>

          <Box borderWidth={1} borderRadius="md" p={4} mb={4}>
            <Flex justifyContent="space-between" alignItems="center" mb={4}>
              <Heading size="md">Descriptive Statistics</Heading>
              <IconButton
                aria-label="Collapse section"
                icon={<ChevronUp size={20} strokeWidth={3} />}
                size="sm"
                variant="ghost"
                colorScheme="blue"
                borderRadius="full"
              />
            </Flex>

            <Flex>
              <Box flex={3} mr={4}>
                <Tabs>
                  <TabList>
                    <Tab isSelected>Sample Data</Tab>
                  </TabList>
                </Tabs>
                <Box maxHeight="400px" overflowY="auto">
                  <Table size="sm" variant="striped" mt={2}>
                    <Tbody>
                      <Tr>
                        <Td>vpostinsvi@rakuten.co.jp</Td>
                      </Tr>
                      <Tr>
                        <Td>dchipp7h@gov.uk</Td>
                      </Tr>
                      <Tr>
                        <Td>adecleyne1i@nature.com</Td>
                      </Tr>
                      <Tr>
                        <Td>weslimonck@51.la</Td>
                      </Tr>
                      <Tr>
                        <Td>fdarqueo@behance.net</Td>
                      </Tr>
                      <Tr>
                        <Td>ikrebspi@timesonline.co.uk</Td>
                      </Tr>
                      <Tr>
                        <Td>omanterfield@dot.gov</Td>
                      </Tr>
                      <Tr>
                        <Td>htatterton4j@house.gov</Td>
                      </Tr>
                      <Tr>
                        <Td>knitford9i@last.fm</Td>
                      </Tr>
                      <Tr>
                        <Td>crennard8i@columbia.edu</Td>
                      </Tr>
                      <Tr>
                        <Td>meykelbosch4g@vxea.com</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Box>
              </Box>

              <Box flex={1}>
                <Tabs>
                  <TabList>
                    <Tab>Statistics</Tab>
                    <Tab>Metadata</Tab>
                  </TabList>
                </Tabs>

                <Table size="sm" mt={2} variant="striped">
                  <Tbody>
                    <Tr>
                      <Td>Rows</Td>
                      <Td isNumeric>4,999</Td>
                    </Tr>
                    <Tr>
                      <Td>Empty Values</Td>
                      <Td isNumeric>0 (0.00%)</Td>
                    </Tr>
                    <Tr>
                      <Td>Distinct Values</Td>
                      <Td isNumeric>4,996</Td>
                    </Tr>
                    <Tr>
                      <Td>Categorical Data</Td>
                      <Td>
                        <CloseIcon color="red.500" />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Minimum Text Length</Td>
                      <Td isNumeric>9</Td>
                    </Tr>
                    <Tr>
                      <Td>Maximum Text Length</Td>
                      <Td isNumeric>38</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </Flex>
          </Box>

          <Box borderWidth={1} borderRadius="md" p={4}>
            <Flex justifyContent="space-between" alignItems="center" mb={4}>
              <Heading size="md">Details</Heading>
              <IconButton
                aria-label="Collapse section"
                icon={<ChevronUp size={20} strokeWidth={3} />}
                size="sm"
                variant="ghost"
                colorScheme="blue"
                borderRadius="full"
              />
            </Flex>

            <Flex alignItems="center" mb={2}>
              <Text fontWeight="bold" mr={2}>
                Personally Identifiable Information
              </Text>
              <Tooltip label="Information">
                <InfoIcon />
              </Tooltip>
            </Flex>

            <Flex alignItems="center">
              <CheckIcon color="green.500" mr={2} />
              <Text>True</Text>
            </Flex>
          </Box>
        </Box>

        <Box width="350px" borderWidth={1} borderRadius="md" p={4}>
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Heading size="md">At a glance</Heading>
            <CloseButton size="sm" />
          </Flex>

          <Stack spacing={4}>
            <Flex justifyContent="space-between">
              <Flex alignItems="center">
                <Text fontWeight="bold" mr={1}>
                  Technical Data Type
                </Text>
                <Tooltip label="Information">
                  <Info size={16} />
                </Tooltip>
              </Flex>
              <Text>VARCHAR</Text>
            </Flex>

            <Flex justifyContent="space-between">
              <Flex alignItems="center">
                <Text fontWeight="bold" mr={1}>
                  Data Source Type
                </Text>
                <Tooltip label="Information">
                  <Info size={16} />
                </Tooltip>
              </Flex>
              <Text>Collibra Driver</Text>
            </Flex>

            <Flex justifyContent="space-between">
              <Flex alignItems="center">
                <Text fontWeight="bold" mr={1}>
                  Row Count
                </Text>
                <Tooltip label="Information">
                  <Info size={16} />
                </Tooltip>
              </Flex>
              <Text>4,999</Text>
            </Flex>

            <Divider borderWidth="1px" borderColor="gray.200" />

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

            <Flex justifyContent="space-between">
              <Text fontWeight="bold">Owner</Text>
              <Text>No assignments yet</Text>
            </Flex>

            <Flex justifyContent="flex-end">
              <Link color="blue.500" href="#">
                Explore Other Roles
              </Link>
            </Flex>

            <Divider borderWidth="1px" borderColor="gray.200" />

            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">Data classification</Text>
              <ButtonGroup size="sm">
                <Button
                  variant="outline"
                  colorScheme="blue"
                  borderRadius="full"
                >
                  Classify
                </Button>
                <Button
                  leftIcon={<Sparkles size={16} />}
                  colorScheme="purple"
                  borderRadius="full"
                  onClick={onOpen}
                >
                  AI
                </Button>
              </ButtonGroup>
            </Flex>

            {dataClassification && (
              <Tag
                size="sm"
                variant="outline"
                colorScheme="black"
                borderWidth={1}
                borderColor="black"
                alignSelf="flex-start"
                borderRadius="full"
              >
                {dataClassification}
                <IconButton
                  icon={<X size={12} />}
                  size="xs"
                  variant="ghost"
                  ml={1}
                  aria-label="Remove tag"
                  onClick={() => setDataClassification("")}
                />
              </Tag>
            )}

            <Divider borderWidth="1px" borderColor="gray.200" />

            <Box>
              <Flex justifyContent="space-between" alignItems="center" mb={1}>
                <Flex alignItems="center">
                  <Text fontWeight="bold" mr={1}>
                    Articulation
                  </Text>
                  <Tooltip label="Information">
                    <Info size={16} />
                  </Tooltip>
                </Flex>
              </Flex>
              <Flex alignItems="center">
                <Progress
                  value={100}
                  size="sm"
                  colorScheme="green"
                  flex={1}
                  mr={2}
                />
                <Text>100%</Text>
              </Flex>
            </Box>

            <Divider borderWidth="1px" borderColor="gray.200" />

            <Box>
              <Flex justifyContent="space-between" alignItems="center" mb={1}>
                <Flex alignItems="center">
                  <Text fontWeight="bold" mr={1}>
                    Tags
                  </Text>
                  <Tooltip label="Information">
                    <Info size={16} />
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>AI Classification</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!isSubmitted ? (
              <>
                <Text mb={4}>
                  Name, description, minimum text length, and maximum text
                  length will be used, along with the provided column samples,
                  to generate a data class definition for classifying the
                  column. Please include any additional context or instructions
                  to help in generating the data class.
                </Text>
                <Textarea placeholder="Additional instructions" mb={4} />
              </>
            ) : (
              <>
                <Text fontWeight="bold" mb={2}>
                  Name:
                </Text>
                <Text mb={4}>email</Text>
                <Text fontWeight="bold" mb={2}>
                  Examples:
                </Text>
                <Text mb={1}>fdarqueo@behance.net</Text>
                <Text mb={1}>crennard8i@columbia.edu</Text>
                <Text mb={4}>meykelbosch4g@vxea.com</Text>
                <Text fontWeight="bold" mb={2}>
                  Classification Rule:
                </Text>
                <Text mb={4}>
                  ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]&#123;2,6&#125;$
                </Text>
                <Text fontWeight="bold" mb={2}>
                  Description:
                </Text>
                <Text mb={4}>Email address with valid domain</Text>
                <Text mb={4}>
                  If the result isn't what you're looking for, please provide
                  additional instructions for adjustments and click 'Update' to
                  try again.
                </Text>
                <Textarea placeholder="Additional instructions" mb={4} />
              </>
            )}
          </ModalBody>
          <ModalFooter>
            {!isSubmitted ? (
              <Button
                leftIcon={<Sparkles size={16} />}
                colorScheme="purple"
                mr={3}
                onClick={handleSubmit}
              >
                Submit to AI
              </Button>
            ) : (
              <>
                <Button colorScheme="blue" mr={3} onClick={handleSave}>
                  Save
                </Button>
                <Button
                  leftIcon={<Sparkles size={16} />}
                  colorScheme="purple"
                  mr={3}
                >
                  Update
                </Button>
              </>
            )}
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
