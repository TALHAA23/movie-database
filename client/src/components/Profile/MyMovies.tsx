import { useQuery } from "@tanstack/react-query";
import MovieCardsm from "../Cards/MovieCardsm";
import Frame2 from "./Frame2";
import SectionLoader from "../Loaders/SectionLoader";
import SectionError from "../Error/SectionError";
import Empty from "../Cards/Empty";
import { MovieInterface, MyMoviesType } from "../../api/model/Interfaces";
import myProfileMovies from "../../api/myProfileMoviesApi";

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
  if (isPending) return <SectionLoader />;
  else if (isError) return <SectionError error={error} />;
  else if (!data[show]?.length) return <Empty message={`Nothing in ${show}`} />;
  return (
    <Frame2 frameTitle={`My ${show}`}>
      {data[show]?.map((movie) => (
        <MovieCardsm props={movie} />
      ))}
    </Frame2>
  );
}
