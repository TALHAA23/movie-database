import { useRoutes } from "react-router-dom";
import ContributionLayout from "../components/Contributions/ContributionLayout";
import UploadForm from "../components/Contributions/Upload/UploadForm";
import Contribution from "../components/Contributions/Contribution";
import FillHoles from "../components/Contributions/FillHoles/FillHoles";

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
        {
          path: "fill-the-holes",
          element: <FillHoles />,
        },
      ],
    },
  ]);
}
