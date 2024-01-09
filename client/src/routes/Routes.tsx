import { useRoutes } from "react-router-dom";
import Error from "../components/Error";
import AuthRoutes from "./AuthRoutes";
import HomeRoutes from "./HomeRoutes";

export default function Routes() {
  return useRoutes([
    {
      path: "/*",
      errorElement: <Error />,
      element: <HomeRoutes />,
    },
    {
      path: "/auth/*",
      element: <AuthRoutes />,
    },
  ]);
}
