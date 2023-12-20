import { useRoutes } from "react-router-dom";
import LoginRoutes from "./LoginRoutes";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <h1 className=" text-red-500 font-bold">Home page goes here</h1>,
    },
    {
      path: "/login/*",
      element: <LoginRoutes />,
    },
  ]);
}
