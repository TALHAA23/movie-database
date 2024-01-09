import * as Interfaces from "../api/model/Interfaces";
import { ReactNode, createContext, useContext } from "react";
import {
  UseMutationResult,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import recommendationsApi from "../api/recommendationsApi";
import topRated from "../api/topRatedApi";
import recommendationsOrTopRatedApi from "../api/recommendationsOrTopratedApi";
// perPersonalized Recommendations
// Trending Now
// New Releases
// Genres
// Community Reviews
// Top Rated

const testData = () => new Promise((res) => setTimeout(() => res(2 + 2), 5000));

type QueryResult<T> = UseQueryResult<T>;
type MutatationResult = UseMutationResult<[Interfaces.MovieInterface]>;

interface DataContextType {
  recommendations: QueryResult<[Interfaces.MovieInterface]>;
  topRated: QueryResult<[Interfaces.MovieInterface]>;
}

const DataContext = createContext<DataContextType | null>(null);

export const useRecommendations = () =>
  useContext(DataContext)?.recommendations;
export const useTopRated = () => useContext(DataContext)?.topRated;

interface Children {
  children: ReactNode;
}
export default function HomeDataProvider({ children }: Children) {
  const recommendationsQuery = useQuery<[Interfaces.MovieInterface], Error>({
    staleTime: 1000 * 60 * 60,
    queryKey: ["recommendations"],
    queryFn: () => recommendationsOrTopRatedApi("recommendations"),
    // queryFn: testData,
    retry: 1,
  });

  const topRatedQuery = useQuery({
    staleTime: 1000 * 60 * 60,
    queryKey: ["top-rated"],
    queryFn: () => recommendationsOrTopRatedApi("top-rated"),
    // queryFn: testData,
    retry: 1,
  });

  return (
    <DataContext.Provider
      value={{
        recommendations: recommendationsQuery,
        topRated: topRatedQuery,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
