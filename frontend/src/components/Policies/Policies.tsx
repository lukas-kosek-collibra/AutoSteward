import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tag,
  VStack,
  HStack,
  Text,
  Container,
  ChakraProvider,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  IconButton,
  Textarea,
  Select,
  Checkbox,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  ShieldIcon,
  FileTextIcon,
  DatabaseIcon,
  EyeIcon,
  CheckIcon,
  XIcon,
  PlusIcon,
} from "lucide-react";
import React, { useState } from "react";
import { render } from "react-dom";
const policies = [
  {
    id: 1,
    name: "Data Retention Policy",
    description: "Guidelines for retaining and disposing of data",
    category: "Data Management",
    dataClasses: ["Personal Information", "Financial Records", "Employee Data"],
  },
  {
    id: 2,
    name: "Information Security Policy",
    description: "Procedures for protecting sensitive information",
    category: "Security",
    dataClasses: [
      "Confidential Documents",
      "Customer Data",
      "Intellectual Property",
    ],
  },
  {
    id: 3,
    name: "Privacy Policy",
    description: "Rules for handling and protecting user privacy",
    category: "Compliance",
    dataClasses: ["User Data", "Cookies", "Analytics"],
  },
];
const categories = [
  "Data Management",
  "Security",
  "Compliance",
  "Human Resources",
  "Finance",
  "IT",
];
const categoryDataClasses = {
  "Data Management": [
    "Personal Information",
    "Financial Records",
    "Employee Data",
  ],
  Security: [
    "Confidential Documents",
    "Customer Data",
    "Intellectual Property",
  ],
  Compliance: ["User Data", "Cookies", "Analytics"],
  "Human Resources": [
    "Employee Records",
    "Performance Reviews",
    "Payroll Data",
  ],
  Finance: ["Financial Statements", "Tax Records", "Audit Reports"],
  IT: ["System Logs", "Network Configurations", "Software Licenses"],
};
const allDataClasses = Object.values(categoryDataClasses).flat();
export const Policies = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [selectedPolicy, setSelectedPolicy] = useState<
    (typeof policies)[0] | null
  >(null);
  const [editingName, setEditingName] = useState(false);
  const [editingDescription, setEditingDescription] = useState(false);
  const [editingCategory, setEditingCategory] = useState(false);
  const [editingDataClasses, setEditingDataClasses] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedCategory, setEditedCategory] = useState("");
  const [editedDataClasses, setEditedDataClasses] = useState<string[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [policyList, setPolicyList] = useState(policies);
  const [newPolicyName, setNewPolicyName] = useState("");
  const {
    isOpen: isAddModalOpen,
    onOpen: onAddModalOpen,
    onClose: onAddModalClose,
  } = useDisclosure();
  const handlePreviewClick = (policy: (typeof policies)[0]) => {
    setSelectedPolicy(policy);
    setEditedName(policy.name);
    setEditedDescription(policy.description);
    setEditedCategory(policy.category);
    setEditedDataClasses(policy.dataClasses);
    onOpen();
  };
  const handleEditName = () => {
    setEditingName(true);
  };
  const handleEditDescription = () => {
    setEditingDescription(true);
  };
  const handleEditCategory = () => {
    setEditingCategory(true);
  };
  const handleEditDataClasses = () => {
    setEditingDataClasses(true);
  };
  const handleSaveName = () => {
    if (selectedPolicy) {
      const updatedPolicy = {
        ...selectedPolicy,
        name: editedName,
      };
      setSelectedPolicy(updatedPolicy);
      updatePolicyList(updatedPolicy);
    }
    setEditingName(false);
  };
  const handleSaveDescription = () => {
    if (selectedPolicy) {
      const updatedPolicy = {
        ...selectedPolicy,
        description: editedDescription,
      };
      setSelectedPolicy(updatedPolicy);
      updatePolicyList(updatedPolicy);
    }
    setEditingDescription(false);
  };
  const handleSaveCategory = () => {
    if (selectedPolicy) {
      const updatedPolicy = {
        ...selectedPolicy,
        category: editedCategory,
        dataClasses:
          categoryDataClasses[
            editedCategory as keyof typeof categoryDataClasses
          ],
      };
      setSelectedPolicy(updatedPolicy);
      updatePolicyList(updatedPolicy);
      setEditedDataClasses(updatedPolicy.dataClasses);
    }
    setEditingCategory(false);
  };
  const handleSaveDataClasses = () => {
    if (selectedPolicy) {
      const updatedPolicy = {
        ...selectedPolicy,
        dataClasses: editedDataClasses,
      };
      setSelectedPolicy(updatedPolicy);
      updatePolicyList(updatedPolicy);
    }
    setEditingDataClasses(false);
  };
  const handleCancelEditName = () => {
    setEditedName(selectedPolicy?.name || "");
    setEditingName(false);
  };
  const handleCancelEditDescription = () => {
    setEditedDescription(selectedPolicy?.description || "");
    setEditingDescription(false);
  };
  const handleCancelEditCategory = () => {
    setEditedCategory(selectedPolicy?.category || "");
    setEditingCategory(false);
  };
  const handleCancelEditDataClasses = () => {
    setEditedDataClasses(selectedPolicy?.dataClasses || []);
    setEditingDataClasses(false);
  };
  const handleToggleDataClass = (dataClass: string) => {
    if (editedDataClasses.includes(dataClass)) {
      setEditedDataClasses(editedDataClasses.filter((dc) => dc !== dataClass));
    } else {
      setEditedDataClasses([...editedDataClasses, dataClass]);
    }
  };
  const handleAddPolicy = () => {
    if (newPolicyName.trim()) {
      const newPolicy = {
        id: policyList.length + 1,
        name: newPolicyName.trim(),
        description: "",
        category: "",
        dataClasses: [],
      };
      setPolicyList([...policyList, newPolicy]);
      setNewPolicyName("");
      onAddModalClose();
    }
  };
  const updatePolicyList = (updatedPolicy: (typeof policies)[0]) => {
    const updatedList = policyList.map((policy) =>
      policy.id === updatedPolicy.id ? updatedPolicy : policy
    );
    setPolicyList(updatedList);
  };
  return (
    <Box minWidth="100%">
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Flex justifyContent="space-between" alignItems="center">
            <HStack>
              <ShieldIcon size={32} />
              <Heading size="2xl">Policies</Heading>
            </HStack>
            <Button
              leftIcon={<PlusIcon size={16} />}
              colorScheme="blue"
              variant="outline"
              borderRadius="full"
              onClick={onAddModalOpen}
            >
              Add
            </Button>
          </Flex>

          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Policy Name</Th>
                <Th>Description</Th>
                <Th>Category</Th>
                <Th>Data Classes</Th>
              </Tr>
            </Thead>
            <Tbody>
              {policyList.map((policy) => (
                <Tr
                  key={policy.id}
                  onMouseEnter={() => setHoveredRow(policy.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <Td>
                    <HStack spacing={4} justify="space-between">
                      <HStack>
                        <FileTextIcon size={20} />
                        <Text fontWeight="bold">{policy.name}</Text>
                      </HStack>
                      <Box width="100px">
                        {hoveredRow === policy.id && (
                          <Button
                            size="sm"
                            leftIcon={<EyeIcon size={16} />}
                            colorScheme="blue"
                            variant="outline"
                            onClick={() => handlePreviewClick(policy)}
                          >
                            Preview
                          </Button>
                        )}
                      </Box>
                    </HStack>
                  </Td>
                  <Td>{policy.description}</Td>
                  <Td>
                    <Tag colorScheme="blue">{policy.category}</Tag>
                  </Td>
                  <Td>
                    <HStack spacing={2}>
                      {policy.dataClasses.map((dataClass, index) => (
                        <Tag key={index} colorScheme="green">
                          <HStack spacing={1}>
                            <DatabaseIcon size={12} />
                            <Text>{dataClass}</Text>
                          </HStack>
                        </Tag>
                      ))}
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </VStack>
      </Container>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {editingName ? (
              <HStack>
                <Input
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  placeholder="Policy Name"
                  autoFocus
                  onBlur={handleSaveName}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSaveName();
                    }
                  }}
                />
                <IconButton
                  aria-label="Save"
                  icon={<CheckIcon />}
                  onClick={handleSaveName}
                  colorScheme="green"
                />
                <IconButton
                  aria-label="Cancel"
                  icon={<XIcon />}
                  onClick={handleCancelEditName}
                  colorScheme="red"
                />
              </HStack>
            ) : (
              <Text
                onClick={handleEditName}
                cursor="pointer"
                _hover={{
                  textDecoration: "underline",
                }}
              >
                {selectedPolicy?.name}
              </Text>
            )}
          </DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4}>
              {editingDescription ? (
                <VStack width="100%">
                  <Textarea
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    placeholder="Description"
                    autoFocus
                    onBlur={handleSaveDescription}
                  />
                  <HStack>
                    <IconButton
                      aria-label="Save"
                      icon={<CheckIcon />}
                      onClick={handleSaveDescription}
                      colorScheme="green"
                    />
                    <IconButton
                      aria-label="Cancel"
                      icon={<XIcon />}
                      onClick={handleCancelEditDescription}
                      colorScheme="red"
                    />
                  </HStack>
                </VStack>
              ) : (
                <Text
                  onClick={handleEditDescription}
                  cursor="pointer"
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  <strong>Description:</strong> {selectedPolicy?.description}
                </Text>
              )}
              {editingCategory ? (
                <VStack width="100%">
                  <Select
                    value={editedCategory}
                    onChange={(e) => setEditedCategory(e.target.value)}
                    placeholder="Select category"
                    autoFocus
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Select>
                  <HStack>
                    <IconButton
                      aria-label="Save"
                      icon={<CheckIcon />}
                      onClick={handleSaveCategory}
                      colorScheme="green"
                    />
                    <IconButton
                      aria-label="Cancel"
                      icon={<XIcon />}
                      onClick={handleCancelEditCategory}
                      colorScheme="red"
                    />
                  </HStack>
                </VStack>
              ) : (
                <Text
                  onClick={handleEditCategory}
                  cursor="pointer"
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  <strong>Category:</strong> {selectedPolicy?.category}
                </Text>
              )}
              <Text>
                <strong>Data Classes:</strong>
              </Text>
              {editingDataClasses ? (
                <VStack align="start" width="100%">
                  {allDataClasses.map((dataClass) => (
                    <Checkbox
                      key={dataClass}
                      isChecked={editedDataClasses.includes(dataClass)}
                      onChange={() => handleToggleDataClass(dataClass)}
                    >
                      {dataClass}
                    </Checkbox>
                  ))}
                  <HStack>
                    <IconButton
                      aria-label="Save"
                      icon={<CheckIcon />}
                      onClick={handleSaveDataClasses}
                      colorScheme="green"
                    />
                    <IconButton
                      aria-label="Cancel"
                      icon={<XIcon />}
                      onClick={handleCancelEditDataClasses}
                      colorScheme="red"
                    />
                  </HStack>
                </VStack>
              ) : (
                <HStack spacing={2} flexWrap="wrap">
                  {selectedPolicy?.dataClasses.map((dataClass, index) => (
                    <Tag
                      key={index}
                      colorScheme="green"
                      cursor="pointer"
                      onClick={handleEditDataClasses}
                    >
                      <HStack spacing={1}>
                        <DatabaseIcon size={12} />
                        <Text>{dataClass}</Text>
                      </HStack>
                    </Tag>
                  ))}
                </HStack>
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Modal isOpen={isAddModalOpen} onClose={onAddModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Policy</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Policy Name"
              value={newPolicyName}
              onChange={(e) => setNewPolicyName(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddPolicy}>
              Save
            </Button>
            <Button variant="ghost" onClick={onAddModalClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
