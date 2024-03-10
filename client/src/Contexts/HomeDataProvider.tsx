import { ReactNode, createContext, useContext } from "react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import movieListApi from "../api/movieListApi";
import {
  FeaturedMoviesInterface,
  MovieInterface,
} from "../api/model/Interfaces";
import myFavoriteMoviesGenre from "../api/myFavriouteMoviesGenre";

type QueryResult<T> = UseQueryResult<T>;

interface DataContextType {
  recommendations: QueryResult<MovieInterface[]>;
  topRated: QueryResult<MovieInterface[]>;
  recentUploads: QueryResult<MovieInterface[]>;
  randomYear: QueryResult<FeaturedMoviesInterface>;
  favriouteGenres: QueryResult<string[]>;
}

const DataContext = createContext<DataContextType | null>(null);

export const useRecommendations = () =>
  useContext(DataContext)?.recommendations;
export const useTopRated = () => useContext(DataContext)?.topRated;
export const useMovieByRandomYear = () => useContext(DataContext)?.randomYear;
export const useRecentUploads = () => useContext(DataContext)?.recentUploads;
export const useFavriouteGenres = () =>
  useContext(DataContext)?.favriouteGenres;

interface Children {
  children: ReactNode;
}
export default function HomeDataProvider({ children }: Children) {
  const recommendationsQuery = useQuery<MovieInterface[], Error>({
    staleTime: 1000 * 60 * 60,
    queryKey: ["recommendations"],
    queryFn: () => movieListApi("recommendations"),
    retry: 1,
  });

  const topRatedQuery = useQuery({
    staleTime: 1000 * 60 * 60,
    queryKey: ["top-rated"],
    queryFn: () => movieListApi("top-rated"),
    retry: 1,
  });

  const movieByRandomYearQuery = useQuery({
    staleTime: 1000 * 60 * 60,
    queryKey: ["by-random-year"],
    queryFn: () => movieListApi("by-random-year"),
  });

  const recentUploadsQuery = useQuery({
    staleTime: 1000 * 60 * 60,
    queryKey: ["recent-uploads"],
    queryFn: () => movieListApi("recent-uploads"),
  });

  const favriouteGenresQuery = useQuery({
    staleTime: 1000 * 60 * 60,
    queryKey: ["favriote-genres"],
    queryFn: () => myFavoriteMoviesGenre(),
  });

  return (
    <DataContext.Provider
      value={{
        recommendations: recommendationsQuery,
        topRated: topRatedQuery,
        recentUploads: recentUploadsQuery,
        randomYear: movieByRandomYearQuery,
        favriouteGenres: favriouteGenresQuery,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
