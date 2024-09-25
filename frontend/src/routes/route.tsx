import { Dataset } from "../components/Dataset/Dataset";
import { DataSummary } from "../components/DataSummary/DataSummary";
import { Policy } from "../components/Policy/Policy";

export const ROUTES = [
  {
    path: "/AutoSteward/",
    element: <DataSummary />,
  },
  {
    path: "/AutoSteward/policy",
    element: <Policy />,
  },
  {
    path: "/AutoSteward/dataset",
    element: <Dataset />,
  },
];
