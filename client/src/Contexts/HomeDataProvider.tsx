import * as Interfaces from "../api/model/Interfaces";
import { ReactNode, createContext, useContext } from "react";
import {
  UseMutationResult,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import recommendationsApi from "../api/recommendationsApi";
import topRated from "../api/topRatedApi";
// perPersonalized Recommendations
// Trending Now
// New Releases
// Genres
// Community Reviews
// Top Rated

const testData = () => new Promise((res) => setTimeout(() => res(2 + 2), 5000));

type QueryResult = UseQueryResult;
type MutatationResult = UseMutationResult<[Interfaces.MovieInterface]>;

interface DataContextType {
  recommendations: QueryResult;
  topRated: QueryResult;
}

const DataContext = createContext<DataContextType | null>(null);

export const useRecommendations = () =>
  useContext(DataContext)?.recommendations;
export const useTopRated = () => useContext(DataContext)?.topRated;

interface Children {
  children: ReactNode;
}
export default function HomeDataProvider({ children }: Children) {
  const recommendationsQuery = useQuery({
    queryKey: ["recommendations"],
    // queryFn: recommendationsApi,
    queryFn: testData,
    retry: 1,
  });

  const topRatedQuery = useQuery({
    queryKey: ["top-rated"],
    // queryFn: topRated,
    queryFn: testData,
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
