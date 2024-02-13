import { Link } from "react-router-dom";

export default function CallToContributionButton({
  movieRef,
}: {
  movieRef: string;
}) {
  return (
    <Link
      to={`/contribution/fill-the-holes?of=${movieRef}`}
      className="my-4 ml-9 px-3 py-2 rounded-full font-semibold text-yellow-800 bg-yellow-100 hover:bg-yellow-200 "
    >
      Contribute to this page
    </Link>
  );
}
