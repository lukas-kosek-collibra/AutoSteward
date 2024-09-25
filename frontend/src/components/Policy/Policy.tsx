import {
  Box,
  Flex,
  Stack,
  Text,
  Heading,
  Switch,
  Button,
  ButtonGroup,
  Tooltip,
  Divider,
  Tag,
  TabList,
  Tab,
  Tabs,
  IconButton,
  CloseButton,
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
  CheckboxGroup,
  Checkbox,
  Spinner,
} from "@chakra-ui/react";
import { Info, X, Sparkles } from "lucide-react";
import { useState } from "react";
export const Policy = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dataClassification, setDataClassification] = useState("");
  const [showPII, setShowPII] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };
  const handleSave = () => {
    setDataClassification("Policy Category");
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
  const handleAIClick = () => {
    onOpen();
  };
  const dataCategories = [
    "Email",
    "Age",
    "First name",
    "Occupation",
    "Percentage",
    "Country",
    "SSN",
    "Credit card",
    "Phone number",
    "Street Address",
  ];
  return (
    <Box maxWidth="100%" p={4}>
      <Flex justifyContent="space-between">
        <Box flex={1} mr={4}>
          <Tabs size="sm" mb={4}>
            <TabList>
              <Tab>Summary</Tab>
              <Tab>Diagram</Tab>
              <Tab>Pictures</Tab>
              <Tab>Quality</Tab>
              <Tab>Responsibilities</Tab>
              <Tab>History</Tab>
              <Tab>Attachments</Tab>
            </TabList>
          </Tabs>

          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Heading size="lg">Overview</Heading>
            <Flex alignItems="center">
              <Text mr={2}>Show Empty Optional Values</Text>
              <Switch />
            </Flex>
          </Flex>

          <Box p={4} mb={4}>
            <Flex alignItems="center" mb={2}>
              <Heading size="md" mr={1}>
                Description
              </Heading>
              <Tooltip label="Information">
                <Info size={16} />
              </Tooltip>
            </Flex>
            <Text mb={4}>
              This company AI policy includes guidelines regarding how to
              implement and deploy AI tools by your company. You should work
              with a lawyer experienced in AI bias issues to personalize your
              company's AI policy according to your specific needs and
              deployment of AI.
            </Text>

            <Flex alignItems="center" mb={2}>
              <Heading size="md" mr={1}>
                Purpose
              </Heading>
              <Tooltip label="Information">
                <Info size={16} />
              </Tooltip>
            </Flex>
            <Text mb={4}>
              This policy is intended to enable our technical, business, and
              legal decision-makers to leverage AI and ML tools while protecting
              our values and mitigating legal risks.
            </Text>

            <Flex alignItems="center" mb={2}>
              <Heading size="md" mr={1}>
                Scope
              </Heading>
              <Tooltip label="Information">
                <Info size={16} />
              </Tooltip>
            </Flex>
            <Text mb={4}>
              This policy is not optional. It must be followed by all
              engineering teams that work for us. If you disagree with this
              policy, or want to change any part of this policy, talk to Legal.
            </Text>

            <Flex alignItems="center" mb={2}>
              <Heading size="md" mr={1}>
                Effective Start Date
              </Heading>
              <Tooltip label="Information">
                <Info size={16} />
              </Tooltip>
            </Flex>
            <Text mb={4}>Nov 30, 2023</Text>

            <Flex alignItems="center" mb={2}>
              <Heading size="md" mr={1}>
                Exception Scenario
              </Heading>
              <Tooltip label="Information">
                <Info size={16} />
              </Tooltip>
            </Flex>
            <Text mb={4}>
              Upon approval of the ai council, exemption might be granted
            </Text>

            <Flex alignItems="center" mb={2}>
              <Heading size="md" mr={1}>
                Measurement
              </Heading>
              <Tooltip label="Information">
                <Info size={16} />
              </Tooltip>
            </Flex>
            <Text mb={4}>Enter the details</Text>

            <Flex alignItems="center" mb={2}>
              <Heading size="md" mr={1}>
                Descriptive Example
              </Heading>
              <Tooltip label="Information">
                <Info size={16} />
              </Tooltip>
            </Flex>
            <Text mb={4}>
              AI should be used for improving our products and processes while
              avoiding undesirable side effects, such as AI biases and
              discrimination; • Our AI tools should avoid replicating human
              biases (including biases that can be found in existing data sets);
              • Define clear objectives for your AI tools, including the
              underlying considerations and data sets used (e.g., where you are
              taking the data from); • Increase transparency regarding data and
              AI use; • Develop AI tools that improve the traceability and
              explainability of AI decisions to provide insights into how
              decisions are made; • Document key decision-making and
              participants in AI software development; • Evaluate the
              development processes used for AI systems and the system outputs;
              • Develop training programs for those engaged in AI development
              and data processing to raise awareness of inherent biases in the
              data and its collection; • Establish a diversity team that will
              examine the development, underlying assumptions, and data used by
              your AI tools (to the extent possible, please include women,
              people of color, minorities, and LGBTQI in your diversity team); •
              Implement an audit system (regularly checking the input and output
              data generated by the AI and its decision-making processes); and •
              Be extra careful when deploying AI hiring tools. Ensure constant
              auditing as well as human review and intervention
              (*Human-in-the-loop
            </Text>

            <Flex alignItems="center" mb={2}>
              <Heading size="md" mr={1}>
                Inclusion Scenario
              </Heading>
              <Tooltip label="Information">
                <Info size={16} />
              </Tooltip>
            </Flex>
            <Text mb={4}>
              We use a variety of AI and ML tools. When you choose to use or
              develop an AI tool for your product or service, please consider
              how it may affect different stakeholders, including minorities. If
              you are suspicious or not sure about the potential effects of your
              AI tool, please keep track of it as the development progresses and
              ensure that a diversity team will be involved in its deployment.
            </Text>

            <Flex alignItems="center" mb={2}>
              <Heading size="md" mr={1}>
                Includes Standard
              </Heading>
              <Tooltip label="Information">
                <Info size={16} />
              </Tooltip>
            </Flex>
            <Flex flexWrap="wrap" gap={4}>
              <Box borderWidth={1} borderRadius="md" p={4} width="250px">
                <Tag size="sm" colorScheme="green" mb={2}>
                  STD
                </Tag>
                <Heading size="sm" mb={2}>
                  CCPA
                </Heading>
                <Text fontSize="sm">
                  The California Consumer Privacy Act is a bill meant to enhance
                  privacy rights and consumer protection for residents of
                  California, United States.
                </Text>
              </Box>
              <Box borderWidth={1} borderRadius="md" p={4} width="250px">
                <Tag size="sm" colorScheme="green" mb={2}>
                  STD
                </Tag>
                <Heading size="sm" mb={2}>
                  GDPR
                </Heading>
                <Text fontSize="sm">General Data Protection Regulation</Text>
              </Box>
              <Box borderWidth={1} borderRadius="md" p={4} width="250px">
                <Tag size="sm" colorScheme="green" mb={2}>
                  STD
                </Tag>
                <Heading size="sm" mb={2}>
                  Private Data
                </Heading>
                <Text fontSize="sm">
                  Data is classified as private when unauthorized disclosure,
                  alteration or destruction results in moderate levels of risk
                  to the organisation and its data subjects. It requires the
                  average level of access control and security protections
                  whether in storage or in transit
                </Text>
              </Box>
              <Box borderWidth={1} borderRadius="md" p={4} width="250px">
                <Tag size="sm" colorScheme="green" mb={2}>
                  STD
                </Tag>
                <Heading size="sm" mb={2}>
                  Restricted Data
                </Heading>
                <Text fontSize="sm">
                  Data is classified as restricted when unauthorized disclosure,
                  alteration or destruction results in significant risk to the
                  organisation and its data subjects. It requires the highest
                  level of access control and security protections whether in
                  storage or in transit
                </Text>
              </Box>
            </Flex>

            <Flex alignItems="center" mt={4} mb={2}>
              <Heading size="md" mr={1}>
                Applies to Asset
              </Heading>
              <Tooltip label="Information">
                <Info size={16} />
              </Tooltip>
            </Flex>
            <Box borderWidth={1} borderRadius="md" p={4} width="250px">
              <Tag size="sm" colorScheme="blue" mb={2}>
                AIUC
              </Tag>
              <Heading size="sm" mb={2}>
                Credit Score Calculation
              </Heading>
              <Text fontSize="sm">
                We face several challenges in calculating credit scores,
                including the complexity of credit history data, the lack of
                data uniformity across different credit bureaus, and the
                potential for biases in the scoring models. These challenges can
                lead to inaccurate credit scores, which can in turn result in
                unfair lending decisions.
              </Text>
            </Box>
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
                  Business Steward
                </Text>
                <Tooltip label="Information">
                  <Info size={16} />
                </Tooltip>
              </Flex>
              <Text>No assignments yet</Text>
            </Flex>

            <Flex justifyContent="flex-end">
              <Link color="blue.500" href="#">
                Explore Other Roles
              </Link>
            </Flex>

            <Divider borderWidth="1px" borderColor="gray.200" />

            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">Data Category</Text>
              <ButtonGroup size="sm">
                <Button
                  leftIcon={<Sparkles size={16} />}
                  colorScheme="purple"
                  borderRadius="full"
                  onClick={handleAIClick}
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
          <ModalHeader>AI Data Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isSubmitted && (
              <>
                <Text fontWeight="bold" mb={2}>
                  Data Classes
                </Text>
                <CheckboxGroup defaultValue={dataCategories}>
                  <Stack spacing={2}>
                    {dataCategories.map((category) => (
                      <Checkbox key={category} value={category}>
                        {category}
                      </Checkbox>
                    ))}
                  </Stack>
                </CheckboxGroup>
              </>
            )}
            <Text mb={4}>
              Please provide any context or instructions to help in generating
              the data category.
            </Text>
            <Textarea placeholder="Additional instructions" mb={4} />
          </ModalBody>
          <ModalFooter>
            {!isSubmitted ? (
              <Button
                leftIcon={
                  isLoading ? <Spinner size="sm" /> : <Sparkles size={16} />
                }
                colorScheme="purple"
                mr={3}
                onClick={handleSubmit}
                isLoading={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit to AI"}
              </Button>
            ) : (
              <>
                <Button colorScheme="blue" mr={3} onClick={handleSave}>
                  Save
                </Button>
                <Button leftIcon={<Sparkles size={16} />} colorScheme="purple">
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
