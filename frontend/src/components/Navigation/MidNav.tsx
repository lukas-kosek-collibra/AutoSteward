import {
  Box,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { HomeIcon, DatabaseIcon, ServerIcon, BarChartIcon } from "lucide-react";
export const MidNav = () => {
  return (
    <Box bg="#021e33" color="white" width="100%" py={4}>
      <Flex maxWidth="100%" mx="auto" px={4}>
        <Breadcrumb separator="/" fontWeight="medium" fontSize="sm">
          <BreadcrumbItem>
            <BreadcrumbLink as="span" display="flex" alignItems="center">
              <HomeIcon
                size={16}
                style={{
                  marginRight: "5px",
                }}
              />
              1.Data
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as="span" display="flex" alignItems="center">
              <DatabaseIcon
                size={16}
                style={{
                  marginRight: "5px",
                }}
              />
              Landing Zone
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as="span" display="flex" alignItems="center">
              <ServerIcon
                size={16}
                style={{
                  marginRight: "5px",
                }}
              />
              SQL Server CRM
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as="span" display="flex" alignItems="center">
              <BarChartIcon
                size={16}
                style={{
                  marginRight: "5px",
                }}
              />
              Consumption
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    </Box>
  );
};
