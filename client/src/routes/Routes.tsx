import { useRoutes } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import HomeRoutes from "./HomeRoutes";

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
  ]);
}
