import { InfoIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Stack,
  Text,
  Heading,
  Table,
  Tbody,
  Tr,
  Td,
  Switch,
  Button,
  ButtonGroup,
  Tooltip,
  Divider,
  Tag,
  Progress,
  TabList,
  Tab,
  Tabs,
  IconButton,
  CloseButton,
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
  useToast,
  Select,
  VStack,
  HStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import {
  ChevronRight,
  ChevronUp,
  Info,
  X,
  Sparkles,
  Database,
  BarChart2,
  FileText,
  MessageSquare,
} from "lucide-react";
import { Icon1, Icon2, Icon3, Icon4 } from "./Icons";

import { useState } from "react";

const isDataset = () => {
  return (
    <Box
      maxWidth="100%"
      color="rgb(25, 28, 34)"
      bg="white"
      borderWidth="1px"
      borderColor="rgb(126, 136, 154)"
      borderRadius="16px"
      p="16px"
      fontSize="14px"
      lineHeight="21px"
      fontFamily='"Inter Variable", "Open Sans Variable", "Helvetica Neue", Helvetica, Arial, sans-serif'
    >
      <Flex alignItems="center" mb="24px">
        <Box flexGrow={1}>
          <VStack align="stretch" spacing="8px">
            <Link
              href="/domain/00000000-0000-0000-0001-000200000001"
              fontSize="13px"
              color="rgb(88, 96, 108)"
            >
              <HStack spacing="4px">
                <Icon1 width="16px" height="16px" fill="rgb(25, 28, 34)" />
                <Text
                  fontWeight="400"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                >
                  Data Sets
                </Text>
              </HStack>
            </Link>
            <HStack spacing="8px" mt="8px">
              <Flex
                width="24px"
                height="24px"
                bg="rgb(253, 189, 55)"
                color="rgba(0, 0, 0, 0.87)"
                borderRadius="4px"
                alignItems="center"
                justifyContent="center"
              >
                <Icon2 width="16px" height="16px" fill="rgba(0, 0, 0, 0.87)" />
              </Flex>
              <Link
                href="/asset/72355264-0610-453a-a0c3-47fb927f3139"
                fontSize="16px"
                lineHeight="24px"
                color="rgb(25, 28, 34)"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                Customer Analytics
              </Link>
              <Icon3 width="24px" height="24px" fill="rgb(73, 226, 180)" />
            </HStack>
            <Text
              fontSize="12px"
              lineHeight="12px"
              letterSpacing="0.12px"
              textTransform="uppercase"
              color="rgb(88, 96, 108)"
              mt="8px"
            >
              Approved
            </Text>
          </VStack>
        </Box>
        <Button
          aria-label="Delete relation"
          variant="ghost"
          size="sm"
          color="rgb(88, 148, 251)"
          mt="-4px"
          mr="-8px"
        >
          <Icon4 width="16px" height="16px" fill="rgb(25, 28, 34)" />
        </Button>
      </Flex>
      <VStack align="stretch" spacing="16px">
        <Box>
          <Heading as="h5" size="sm" mb="8px">
            Description
          </Heading>
          <UnorderedList styleType="none" m={0} p={0}>
            <ListItem lineHeight="20px">
              <Text>
                This dataset contains information about customers. It includes
                their names, addresses, genders, and purchase history.
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text fontWeight="600" mb="8px">
            Asset Type
          </Text>
          <Link
            href="/assettype/00000000-0000-0000-0001-000400000001"
            color="rgb(16, 97, 237)"
          >
            Data Set
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};

export const DataSummary = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dataClassification, setDataClassification] = useState("");
  const [showPII, setShowPII] = useState(false);
  const toast = useToast();
  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  const handleSave = () => {
    setDataClassification("email");
    setShowPII(true);
    onClose();
    toast({
      title: "Data Class created",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };
  return (
    <Box maxWidth="100%" p={4}>
      <Flex>
        <Box flex={1}>
          <Tabs size="sm" align="start">
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

          <HStack align="flex-start" spacing={4} mt={4}>
            <VStack align="stretch" width="200px" spacing={2}>
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

            <Box flex={1}>
              <Breadcrumb separator={<ChevronRight size={14} />} mt={0} mb={4}>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">SYS</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">CRM Cloud</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Consumption</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">crm-consumption</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    CustomerSalesReporting
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">EmailAddress</BreadcrumbLink>
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
                  <Button
                    variant="outline"
                    colorScheme="blue"
                    borderRadius="full"
                  >
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
                        <Tab>Sample Data</Tab>
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

              <Box borderWidth={1} borderRadius="md" p={4} mb={4}>
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

                {showPII && (
                  <>
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
                  </>
                )}
              </Box>

              <Box borderWidth={1} borderRadius="md" p={4} mb={4}>
                <Flex justifyContent="space-between" alignItems="center" mb={4}>
                  <Heading size="md">is part of Data Set</Heading>
                  <IconButton
                    aria-label="Collapse section"
                    icon={<ChevronUp size={20} strokeWidth={3} />}
                    size="sm"
                    variant="ghost"
                    colorScheme="blue"
                    borderRadius="full"
                  />
                </Flex>

                <Flex justifyContent="space-between" alignItems="center" mb={4}>
                  <Flex alignItems="center">
                    <Text mr={2}>Sort By</Text>
                    <Select placeholder="Name" size="sm" width="150px">
                      <option value="name">Name</option>
                      <option value="date">Date</option>
                      <option value="type">Type</option>
                    </Select>
                  </Flex>
                  <ButtonGroup size="sm">
                    <IconButton
                      aria-label="Add relation"
                      icon={<ChevronRight size={16} />}
                      variant="outline"
                    />
                    <IconButton
                      aria-label="Info"
                      icon={<Info size={16} />}
                      variant="outline"
                    />
                    <IconButton
                      aria-label="Grid view"
                      icon={<Database size={16} />}
                      variant="outline"
                    />
                  </ButtonGroup>
                </Flex>

                {isDataset()}
              </Box>
            </Box>
          </HStack>
        </Box>
        <Box width="350px" borderWidth={1} borderRadius="md" p={4} ml={5}>
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
                  {`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{(2, 6)}$`}
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
