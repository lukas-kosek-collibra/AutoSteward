import { Dataset } from "../components/Dataset/Dataset";
import { DataSummary } from "../components/DataSummary/DataSummary";
import { Policy } from "../components/Policy/Policy";

export const ROUTES = [
  {
    path: "/",
    element: <DataSummary />,
  },
  {
    path: "/policy",
    element: <Policy />,
  },
  {
    path: "/dataset",
    element: <Dataset />,
  },
];