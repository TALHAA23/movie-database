import { useQuery } from "@tanstack/react-query";
import MovieCardsm from "../Cards/MovieCardsm";
import Frame2 from "./Frame2";
import movieListApi from "../../api/movieListApi";
import SectionLoader from "../Loaders/SectionLoader";
import SectionError from "../Error/SectionError";
import Empty from "../Cards/Empty";
import { MovieInterface } from "../../api/model/Interfaces";

export default function MyFavorites() {
  const { isPending, isError, error, data } = useQuery<MovieInterface[]>({
    staleTime: 1000 * 60 * 60,
    queryKey: ["my-favorites"],
    queryFn: () => movieListApi("recommendations"),
  });

  if (isPending) return <SectionLoader />;
  else if (isError) return <SectionError error={error} />;
  else if (!data.length) return <Empty message="Nothing in favrouite list" />;
  return (
    <Frame2 frameTitle="My Favorites">
      {data.map((movie) => (
        <MovieCardsm props={movie} />
      ))}
    </Frame2>
  );
}
