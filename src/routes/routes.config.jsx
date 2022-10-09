import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/home"));
const Live = lazy(() => import("../pages/live"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/live",
    element: <Live />,
  },
]);

export default router;
