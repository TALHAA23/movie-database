import * as Interfaces from "../../api/model/Interfaces";
import { Link, useSearchParams } from "react-router-dom";
import testImages from "../../testimages";
import { useQuery } from "@tanstack/react-query";
import searchApi from "../../api/SearchApi";
import PageLoader from "../Loaders/PageLoader";
import NotFound from "../NotFound/NotFound";
import PageError from "../Error/PageError";
import movieByGenreApi from "../../api/movieByGenreApi";
export default function Genre() {
  const query = useSearchParams()[0].get("q");
  if (!query) return <PageError error={new Error("Query not provided")} />;
  const { isPending, isError, error, data } = useQuery<
    Interfaces.MovieInterface[],
    Error
  >({
    queryKey: [`genre-${query}`],
    queryFn: () => movieByGenreApi(query),
  });
  if (isPending) return <PageLoader />;
  else if (isError)
    return error.name == "NotFound" ? (
      <NotFound />
    ) : (
      <PageError error={error} />
    );
  else if (!data?.length)
    return (
      <h1 className=" text-4xl font-semibold m-7">
        No Movie matches, try checking spellings and try again
      </h1>
    );

  return (
    <div>
      <h1 className="text-4xl font-semibold m-7">
        Showing Movies which includes "{query}" genre
      </h1>
      <div className=" max-w-[1200px] mx-auto rounded flex flex-col gap-1 p-2">
        {data.map((movie) => (
          <Link
            key={movie._id}
            to={`/title/${movie._id}`}
            className=" border-b-2 h-[3.5cm] flex items-center"
          >
            <img
              src={movie.banner || testImages.noImage}
              alt=""
              className=" w-1/4 max-w-[3cm] h-full object-cover"
            />
            <Information
              releaseYear={movie.releaseYear}
              title={movie.title}
              casts={movie.cast}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

interface MovieInformation {
  title: string;
  releaseYear: number;
  casts: Partial<Interfaces.ActorInterface>[];
}

function Information({ title, releaseYear, casts }: MovieInformation) {
  return (
    <div className=" leading-tight">
      <h1 className="font-semibold">{title}</h1>
      <p className=" text-sm">{releaseYear}</p>
      {casts.length > 0 &&
        casts.map((cast) => (
          <Link
            key={cast._id}
            to={`/name/${cast._id}`}
            className="text-sm font-light [&:not(:last-child)]:after:content-[','] hover:underline hover:text-blue-500 "
          >
            {cast.name}
          </Link>
        ))}
    </div>
  );
}
