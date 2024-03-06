import { useQuery } from "@tanstack/react-query";
import MovieCardsm from "../Cards/MovieCardsm";
import Frame2 from "./Frame2";
import Empty from "../Cards/Empty";
import { MovieInterface, MyMoviesType } from "../../api/model/Interfaces";
import myProfileMovies from "../../api/myProfileMoviesApi";
import PageLoader from "../Loaders/PageLoader";
import PageError from "../Error/PageError";

interface MyMoviesQuery {
  watchList?: MovieInterface[];
  watched?: MovieInterface[];
  favoriteList?: MovieInterface[];
  [key: string]: MovieInterface[] | undefined;
}

export default function MyMovies({ show }: { show: MyMoviesType }) {
  const { isPending, isError, error, data } = useQuery<MyMoviesQuery>({
    staleTime: 1000 * 60 * 60,
    queryKey: [show],
    queryFn: () => myProfileMovies(show),
  });
  if (isPending) return <PageLoader />;
  else if (isError) return <PageError error={error} />;
  else if (!data[show]?.length) return <Empty message={`Nothing in ${show}`} />;
  return (
    <Frame2 frameTitle={`My ${show}`}>
      {data[show]?.map((movie) => (
        <MovieCardsm props={movie} />
      ))}
    </Frame2>
  );
}
