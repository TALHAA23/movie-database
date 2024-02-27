import { UseQueryResult } from "@tanstack/react-query";
import Frame from "./Frame";
import SectionLoader from "../../Loaders/SectionLoader";
import SectionError from "../../Error/SectionError";
import { Link } from "react-router-dom";

export default function GenreListFromMyFavrts({
  query,
}: {
  query: UseQueryResult<string[]> | undefined;
}) {
  if (query?.isPending) return <SectionLoader />;
  else if (query?.isError) return <SectionError error={query?.error} />;

  return (
    <Frame
      frameTitle="Watch More from your Favrioute List Genre"
      frameHight="auto"
    >
      <div className="flex flex-wrap justify-center my-6 ">
        {query?.data.map((genre) => (
          <Link
            to={`/genre?q=${genre.toLocaleLowerCase()}`}
            className=" bg-[#FDE047]  h-fit text-black rounded-full px-3 py-1 hover:bg-yellow-600"
          >
            {genre}
          </Link>
        ))}
      </div>
    </Frame>
  );
}
