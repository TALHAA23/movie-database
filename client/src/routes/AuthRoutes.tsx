import { useRoutes } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";
export default function AuthRoutes() {
  return useRoutes([
    { path: "*", element: <h1>Auth routes do not exist</h1> },
    {
      path: "/login",
      element: <AuthForm />,
    },
    {
      path: "/signup",
      element: <AuthForm />,
    },
  ]);
}
