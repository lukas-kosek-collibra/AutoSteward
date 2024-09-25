import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Icon,
  Checkbox,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
  HStack,
  Textarea,
  Container,
} from "@chakra-ui/react";
import { Plus, Sparkles } from "lucide-react";
import { useState } from "react";

export const Classifications = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newDataClassName, setNewDataClassName] = useState("");
  const [showAIFields, setShowAIFields] = useState(true);
  const [selectedColumn, setSelectedColumn] = useState("");
  const [columnDetails, setColumnDetails] = useState<{
    samples: string[];
    name: string;
    description: string;
  } | null>(null);
  const [additionalContext, setAdditionalContext] = useState("");
  const [aiSubmitted, setAiSubmitted] = useState(false);
  const [data, setData] = useState([
    {
      dataClass: "Customer Information",
      enabled: true,
      columnCount: 8,
      dataCategory: "Personal",
      dataConcept: "Identity",
      dataAttribute: "Name, Address, Phone",
      createdBy: "john_doe",
    },
    {
      dataClass: "Transaction History",
      enabled: true,
      columnCount: 5,
      dataCategory: "Financial",
      dataConcept: "Activity",
      dataAttribute: "Date, Amount, Type",
      createdBy: "jane_smith",
    },
    {
      dataClass: "Product Inventory",
      enabled: false,
      columnCount: 6,
      dataCategory: "Operational",
      dataConcept: "Stock",
      dataAttribute: "SKU, Quantity, Price",
      createdBy: "inventory_manager",
    },
    {
      dataClass: "Employee Records",
      enabled: true,
      columnCount: 10,
      dataCategory: "HR",
      dataConcept: "Personnel",
      dataAttribute: "ID, Position, Department",
      createdBy: "hr_admin",
    },
    {
      dataClass: "Marketing Campaigns",
      enabled: true,
      columnCount: 7,
      dataCategory: "Marketing",
      dataConcept: "Promotion",
      dataAttribute: "Name, Start Date, Channel",
      createdBy: "marketing_lead",
    },
  ]);
  const handleCheckboxChange = (index: number) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const handleAIClick = () => {
    setShowAIFields(false);
  };
  const handleColumnSelect = (value: string) => {
    setSelectedColumn(value);
    setColumnDetails({
      samples: [
        "example1@email.com",
        "example2@email.com",
        "example3@email.com",
        "example4@email.com",
        "example5@email.com",
        "example6@email.com",
        "example7@email.com",
        "example8@email.com",
        "example9@email.com",
        "example10@email.com",
      ],
      name: value,
      description: `This is a description for the ${value} column.`,
    });
  };
  const handleSubmitToAI = () => {
    setAiSubmitted(true);
    setAdditionalContext("");
  };
  const handleSave = () => {
    const newDataClass = {
      dataClass: aiSubmitted ? "Dummy Name" : newDataClassName,
      enabled: true,
      columnCount: 0,
      dataCategory: "",
      dataConcept: "",
      dataAttribute: "",
      createdBy: "auto_steward",
    };
    setData([...data, newDataClass]);
    setNewDataClassName("");
    setAiSubmitted(false);
    setShowAIFields(true);
    onClose();
  };
  return (
    <Box minWidth="100%" overflowX="auto">
      <Container maxW="container.xl">
        <Flex justifyContent="flex-end" mb={4}>
          <Button
            leftIcon={<Plus size={20} />}
            colorScheme="blue"
            variant="outline"
            borderRadius="full"
            onClick={onOpen}
          >
            Add
          </Button>
        </Flex>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Data Class</Th>
                <Th>Enabled</Th>
                <Th isNumeric>Column Count</Th>
                <Th>Data Category</Th>
                <Th>Data Concept</Th>
                <Th>Data Attribute</Th>
                <Th>Created By</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, index) => (
                <Tr key={index}>
                  <Td>
                    <Checkbox
                      isChecked={selectedRows.includes(index)}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </Td>
                  <Td>{item.dataClass}</Td>
                  <Td>
                    {item.enabled ? (
                      <Icon as={CheckIcon} color="green.500" />
                    ) : (
                      <Icon as={CloseIcon} color="red.500" />
                    )}
                  </Td>
                  <Td isNumeric>{item.columnCount}</Td>
                  <Td>{item.dataCategory}</Td>
                  <Td>{item.dataConcept}</Td>
                  <Td>{item.dataAttribute}</Td>
                  <Td>{item.createdBy}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Data Class</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                {showAIFields ? (
                  <>
                    <FormLabel>Data Class Name</FormLabel>
                    <Input
                      value={newDataClassName}
                      onChange={(e) => setNewDataClassName(e.target.value)}
                      placeholder="Enter data class name"
                    />
                    <Button
                      leftIcon={<Sparkles size={20} />}
                      colorScheme="purple"
                      variant="solid"
                      mt={2}
                      onClick={handleAIClick}
                    >
                      AI
                    </Button>
                  </>
                ) : (
                  <>
                    {!aiSubmitted ? (
                      <>
                        <FormLabel>Column</FormLabel>
                        <Select
                          placeholder="Select column"
                          value={selectedColumn}
                          onChange={(e) => handleColumnSelect(e.target.value)}
                        >
                          <option value="Email">Email</option>
                          <option value="amax">amax</option>
                          <option value="data">data</option>
                          <option value="IP Address">IP Address</option>
                          <option value="vin">vin</option>
                          <option value="student_id">student_id</option>
                        </Select>
                        {columnDetails && (
                          <VStack align="stretch" mt={4} spacing={4}>
                            <Box>
                              <Text fontWeight="bold">Samples:</Text>
                              <VStack align="stretch">
                                {columnDetails.samples.map((sample, index) => (
                                  <Text key={index}>{sample}</Text>
                                ))}
                              </VStack>
                            </Box>
                            <HStack>
                              <Text fontWeight="bold">Column Name:</Text>
                              <Text>{columnDetails.name}</Text>
                            </HStack>
                            <Box>
                              <Text fontWeight="bold">Description:</Text>
                              <Text>{columnDetails.description}</Text>
                            </Box>
                            <Box>
                              <Text fontWeight="bold">Additional Context:</Text>
                              <Textarea
                                value={additionalContext}
                                onChange={(e) =>
                                  setAdditionalContext(e.target.value)
                                }
                                placeholder="Enter additional context"
                                mt={2}
                              />
                              <Button
                                leftIcon={<Sparkles size={20} />}
                                colorScheme="purple"
                                variant="solid"
                                mt={2}
                                onClick={handleSubmitToAI}
                              >
                                Submit to AI
                              </Button>
                            </Box>
                          </VStack>
                        )}
                      </>
                    ) : (
                      <VStack align="stretch" spacing={4}>
                        <Box>
                          <Text fontWeight="bold">Name:</Text>
                          <Text>Dummy Name</Text>
                        </Box>
                        <Box>
                          <Text fontWeight="bold">Examples:</Text>
                          <VStack align="stretch">
                            <Text>example1@email.com</Text>
                            <Text>example2@email.com</Text>
                            <Text>example3@email.com</Text>
                          </VStack>
                        </Box>
                        <Box>
                          <Text fontWeight="bold">Classification Rule:</Text>
                          <Text>
                            "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.\\[a-zA-Z]
                            {(2, 6)}$"
                          </Text>
                        </Box>
                        <Box>
                          <Text fontWeight="bold">Description:</Text>
                          <Text>This is a dummy example</Text>
                        </Box>
                        <Box>
                          <Text fontWeight="bold">Additional Context:</Text>
                          <Textarea
                            value={additionalContext}
                            onChange={(e) =>
                              setAdditionalContext(e.target.value)
                            }
                            placeholder="Would you like to make any adjustments?"
                            mt={2}
                          />
                        </Box>
                      </VStack>
                    )}
                  </>
                )}
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSave}>
                Save
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};
