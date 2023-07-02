import { createHashRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { WorkOpportunities } from "../pages/WorkOpportunities";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/work-opportunities",
    element: <WorkOpportunities />,
  },
]);
