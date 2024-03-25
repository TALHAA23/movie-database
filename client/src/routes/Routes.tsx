import { useRoutes } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import HomeRoutes from "./HomeRoutes";
import ContributionRoutes from "./ContributionRoutes";

export default function Routes() {
  return useRoutes([
    {
      path: "/*",
      element: <HomeRoutes />,
    },
    {
      path: "/auth/*",
      element: <AuthRoutes />,
    },
    {
      path: "/contribution/*",
      element: <ContributionRoutes />,
    },
  ]);
}
