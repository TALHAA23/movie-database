import { useQuery } from "@tanstack/react-query";
import YourUploads from "./YourUploads";
import userContributionsApi from "../../../api/userContributionsApi";
import PageLoader from "../../Loaders/PageLoader";
import SectionError from "../../Error/SectionError";
import { Contributions } from "../../../api/model/Interfaces";
import YourAddOns from "./YourAddOns";

export default function MyContributions() {
  const { isPending, isError, error, data } = useQuery<Contributions>({
    queryKey: ["user-contributions"],
    queryFn: userContributionsApi,
  });

  if (isPending) return <PageLoader />;
  else if (isError) return <SectionError error={error} />;
  console.log(data);
  return (
    <div className="bg-black text-white p-2">
      <YourUploads myUpload={data.contributions.uploads} />
      <YourAddOns props={data.contributions.addOns} />
    </div>
  );
}
