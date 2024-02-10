import { useRoutes } from "react-router-dom";
import ContributionLayout from "../components/Contributions/ContributionLayout";
import UploadForm from "../components/Contributions/Upload/UploadForm";
import Contribution from "../components/Contributions/Contribution";

export default function ContributionRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <ContributionLayout />,
      children: [
        {
          index: true,
          element: <Contribution />,
        },
        {
          path: "new",
          element: <UploadForm />,
        },
      ],
    },
  ]);
}
