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
    <Box maxWidth="100%">
      <Flex alignItems="center" direction="row">
        <Tabs
          aria-labelledby="page-title"
          index={tabs.findIndex((tab) => tab.id === activeTab)}
          onChange={(index) => setActiveTab(tabs[index].id)}
          variant="unstyled"
          flex={1}
        >
          <TabList>
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                _selected={{
                  color: "rgb(136, 179, 252)",
                  fontWeight: "600",
                }}
                alignItems="center"
                color="rgb(184, 189, 198)"
                display="flex"
                fontWeight="500"
                minHeight="40px"
                minWidth="48px"
                padding="8px 16px"
              >
                <Box as={tab.icon} marginRight="8px" size={16} />
                <Text>{tab.label}</Text>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <Classifications />
            </TabPanel>
            <TabPanel>
              <Policies />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
};
