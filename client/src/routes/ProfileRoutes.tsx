import { useRoutes } from "react-router-dom";
import ProfileLayout from "../components/Profile/ProfileLayout";
import MyMovies from "../components/Profile/MyMovies";
export default function ProfileRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <ProfileLayout />,
      children: [
        {
          path: "settings",
          element: <h1>Settings</h1>,
        },
        {
          path: "my-favorites",
          element: <MyMovies show="favoriteList" />,
        },
        {
          path: "my-watchlist",
          element: <MyMovies show="watchList" />,
        },
        {
          path: "watched",
          element: <MyMovies show="watched" />,
        },
      ],
    },
  ]);
}
