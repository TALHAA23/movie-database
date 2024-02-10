import { useRoutes } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import HomeRoutes from "./HomeRoutes";
import ContributionRoutes from "./ContributionRoutes";
import HomeDataProvider from "../Contexts/HomeDataProvider";

export default function Routes() {
  return useRoutes([
    {
      path: "/*",
      element: (
        <HomeDataProvider>
          <HomeRoutes />
        </HomeDataProvider>
      ),
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
