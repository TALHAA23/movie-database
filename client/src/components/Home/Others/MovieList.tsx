import { UseQueryResult } from "@tanstack/react-query";
import {
  useRecommendations,
  useTopRated,
} from "../../../Contexts/HomeDataProvider";
import MovieCard from "../../Cards/MovieCard";
import ErrorCard from "../../Error/SectionError";
import SectionLoader from "../../Loaders/SectionLoader";
import Frame from "./Frame";
import { MovieInterface } from "../../../api/model/Interfaces";
import SignupAppeal from "../../Information/SiginupAppeal";

export default function MovieList({
  title,
  query,
}: {
  title: string;
  query: UseQueryResult<MovieInterface[]> | undefined;
}) {
  if (query?.isPending) return <SectionLoader />;
  if (query?.isError)
    return query.error.message == "unauthorized" ? (
      <SignupAppeal
        text="Sign In to see recommendations"
        subtext=" The section have movies just for you, Sign In 👇"
      />
    ) : (
      <ErrorCard error={query.error} />
    );
  if (!query?.data) return <h1>not found</h1>;
  return (
    <Frame frameTitle={title}>
      {query.data.map((movie) => (
        <MovieCard
          title={movie.title}
          bannerURL={movie.banner}
          ratings={movie.ratings?.[0]?.rating}
          id={movie._id}
        />
      ))}
    </Frame>
  );
}
