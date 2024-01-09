import {
  useRecommendations,
  useTopRated,
} from "../../../Contexts/HomeDataProvider";
import MovieCard from "../../Cards/MovieCard";
import ErrorCard from "../../Error/ErrorCard";
import Unauthorized from "../../Error/Unauthorized";
import SectionLoader from "../../Loaders/SectionLoader";
import Frame from "./Frame";

type SectionNameType = "recommendations" | "topRated";
const isRecommendations = (value: SectionNameType) =>
  value == "recommendations";

export default function Recommendations({
  sectionName,
}: {
  sectionName: SectionNameType;
}) {
  const data = isRecommendations(sectionName)
    ? useRecommendations()
    : useTopRated();

  if (data?.isPending) return <SectionLoader />;
  if (data?.isError)
    return data.error.name == "Unauthorized" ? (
      <Unauthorized />
    ) : (
      <ErrorCard error={data.error} />
    );
  if (!data?.data) return <h1>not found</h1>;
  console.log(data.data);

  return (
    <Frame
      frameTitle={
        isRecommendations(sectionName) ? "Recommendations" : "Top Rated"
      }
      frameSubTitle={
        isRecommendations(sectionName) ? "" : "top rated of all time"
      }
    >
      {data.data.map((movie) => (
        <MovieCard title={movie.title} rating={movie.rating} id={movie._id} />
      ))}
    </Frame>
  );
}
