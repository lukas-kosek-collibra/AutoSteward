import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  Tabs,
  Text,
  ChakraProvider,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import {
  ShieldIcon,
  TagIcon,
  BuildingIcon,
  DatabaseIcon,
  BoxIcon,
  BookOpenIcon,
} from "lucide-react";
import React, { useState } from "react";
import { render } from "react-dom";
import { Policies } from "../Policies/Policies";
import { Classifications } from "../Classifications/Classifications";
import { TopNav } from "./TopNav";
import { MidNav } from "./MidNav";
export const Navigation = () => {
  const [activeTab, setActiveTab] = useState("data-classification");
  const tabs = [
    {
      id: "organization",
      icon: BuildingIcon,
      label: "Organization",
    },
    {
      id: "business-dimensions",
      icon: BoxIcon,
      label: "Business Dimensions",
    },
    {
      id: "tags",
      icon: TagIcon,
      label: "Tags",
    },
    {
      id: "physical-data-connector",
      icon: DatabaseIcon,
      label: "Physical Data Connector",
    },
    {
      id: "data-classification",
      icon: ShieldIcon,
      label: "Data Classification",
    },
    {
      id: "policies",
      icon: BookOpenIcon,
      label: "Policies",
    },
  ];
  return (
    <Box width="100%">
      <TopNav />
      <MidNav />
    </Box>
  );
};
