import { Link } from "react-router-dom";

interface Props {
  id: string;
  infoTitle: string;
  contributionFor: "actor" | "movie";
}
export default function CallToContributionSectionCall({
  id,
  infoTitle,
  contributionFor,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row items-center font-semibold">
      <div className="bg-white/50 rounded-full aspect-square w-7 flex items-center justify-center">
        <img src="/info-solid.svg" alt="info" />
      </div>
      <h1>
        This section contains "{infoTitle}" if you know {infoTitle} of{" "}
        {contributionFor} contribution to the page{" "}
        <Link
          className="text-blue-600 underline"
          to={`/name/for${id}&type=${contributionFor}`}
        >
          here
        </Link>
      </h1>
    </div>
  );
}
