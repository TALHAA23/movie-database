import { useRoutes } from "react-router-dom";
import Login from "../components/Login/Login";
export default function LoginRoutes() {
  return useRoutes([
    { path: "*", element: <h1>Login routes do not exist</h1> },
    {
      path: "/",
      element: <Login />,
    },
  ]);
}
