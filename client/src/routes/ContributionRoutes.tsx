import { useRoutes } from "react-router-dom";
import ContributionLayout from "../components/Contributions/ContributionLayout";
import UploadForm from "../components/Contributions/Upload/UploadForm";

export default function ContributionRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <ContributionLayout />,
      children: [
        {
          path: "new",
          element: <UploadForm />,
        },
      ],
    },
  ]);
}
