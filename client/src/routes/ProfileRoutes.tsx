import { useRoutes } from "react-router-dom";
import ProfileLayout from "../components/Profile/ProfileLayout";
import MyFavorites from "../components/Profile/MyFavorites";
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
          element: <MyFavorites />,
        },
      ],
    },
  ]);
}
