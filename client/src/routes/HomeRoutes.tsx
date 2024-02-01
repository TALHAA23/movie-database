import { useRoutes } from "react-router-dom";
import Home from "../components/Home/Home";
import Find from "../components/Find/Find";
import Layout from "../components/Home/Layout";
import Title from "../components/Title/Title";
import Reviews from "../components/Review/Reviews";

export default function HomeRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "find",
          element: <Find />,
        },
        {
          path: "title/:id",
          element: <Title />,
        },
        {
          path: "title/:id/reviews",
          element: <Reviews />,
        },
      ],
    },
  ]);
}
