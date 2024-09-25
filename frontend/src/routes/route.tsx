import { path } from "framer-motion/client";
import { DataSummary } from "../components/DataSummary/DataSummary";
import { Policy } from "../components/Policy/policy";

export const ROUTES = [
  {
    path: "/AutoSteward/",
    element: <DataSummary />,
  },
  {
    path: "/AutoSteward/policy",
    element: <Policy />,
  },
];
