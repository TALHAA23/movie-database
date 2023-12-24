import { useRoutes } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import Home from "../components/Home/Home";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth/*",
      element: <AuthRoutes />,
    },
  ]);
}
