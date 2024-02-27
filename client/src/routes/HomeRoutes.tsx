import { useRoutes } from "react-router-dom";
import Home from "../components/Home/Home";
import Find from "../components/Find/Find";
import Layout from "../components/Home/Layout";
import Title from "../components/Title/Title";
import Reviews from "../components/Review/Reviews";
import ProfileRoutes from "./ProfileRoutes";
import Name from "../components/Name/Name";
import Genre from "../components/Genre/Genre";

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
          path: "genre",
          element: <Genre />,
        },
        {
          path: "title/:id",
          element: <Title />,
        },
        {
          path: "title/:id/reviews",
          element: <Reviews />,
        },
        {
          path: "name/:id",
          element: <Name />,
        },
        {
          path: "/profile/*",
          element: <ProfileRoutes />,
        },
      ],
    },
  ]);
}
