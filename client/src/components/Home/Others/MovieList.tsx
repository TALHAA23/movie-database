import { UseQueryResult } from "@tanstack/react-query";
import {
  useRecommendations,
  useTopRated,
} from "../../../Contexts/HomeDataProvider";
import MovieCard from "../../Cards/MovieCard";
import ErrorCard from "../../Error/SectionError";
import Unauthorized from "../../Error/Unauthorized";
import SectionLoader from "../../Loaders/SectionLoader";
import Frame from "./Frame";
import { MovieInterface } from "../../../api/model/Interfaces";

// type SectionNameType = "recommendations" | "topRated";
// const isRecommendations = (value: SectionNameType) =>
//   value == "recommendations";

export default function MovieList({
  title,
  query,
}: {
  title: string;
  query: UseQueryResult<[MovieInterface]> | undefined;
}) {
  if (query?.isPending) return <SectionLoader />;
  if (query?.isError)
    return query.error.name == "Unauthorized" ? (
      <Unauthorized />
    ) : (
      <ErrorCard error={query.error} />
    );
  if (!query?.data) return <h1>not found</h1>;
  console.log(query.data);

  return (
    <Frame frameTitle={title}>
      {query.data.map((movie) => (
        <MovieCard title={movie.title} rating={movie.rating} id={movie._id} />
      ))}
    </Frame>
  );
}
