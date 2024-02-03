import { useQuery } from "@tanstack/react-query";
import Casts from "./Casts";
import FeaturedReview from "./FeaturedReveiw";
import TitleHead from "./TitleHead";
import movieByIdApi from "../../api/movieByIdApi";
import { useParams } from "react-router-dom";
import { MovieInterface } from "../../api/model/Interfaces";
import PageLoader from "../Loaders/PageLoader";
import NotFound from "../NotFound/NotFound";
import movieListApi from "../../api/movieListApi";
import MovieList from "../Home/Others/MovieList";
import testImages from "../../testimages";
import Awards from "./Awards";
import Tagline from "./Tagline";
import Details from "./Details";
import ReviewWriter from "./ReviewWriter";
import Information from "../Information/Information";
import RatingStars from "../Review/RatingStars";
import RatingAndReview from "./RatingAndReview";
export default function Title() {
  const { id } = useParams();
  if (!id) return <h1>Something went wrong</h1>;

  const { isPending, data, isError, error } = useQuery<MovieInterface>({
    retry: 1,
    queryKey: [id],
    queryFn: () => movieByIdApi(id),
    staleTime: 1000 * 60 * 60,
  });

  const relatedMoviesQuery = useQuery<MovieInterface[]>({
    retry: 1,
    queryKey: [`related-for-${id}`],
    queryFn: () => movieListApi("related", id),
    enabled: !!data,
    staleTime: 1000 * 60 * 60,
  });

  if (isPending) return <PageLoader />;
  if (isError) return <h1>{error.message}</h1>;
  if (!data) return <NotFound />;
  console.log(data);

  return (
    <section className="w-full h-auto bg-black text-white">
      <Information />
      <ReviewWriter movieRef={data._id as string} />
      <TitleHead
        {...data}
        ratings={data.ratings.map((rating) => rating.rating)}
        numberofReviews={data.numberofReviews}
      />
      {data.tagline && <Tagline tagline={data.tagline} />}
      <RatingAndReview />
      <Casts casts={data.cast} />
      <MovieList title="Related" query={relatedMoviesQuery} />
      {data.awards?.length && data.awards?.length > 0 && (
        // TODO: disable 0 form being displayed
        <Awards awards={data.awards} />
      )}
      <Details
        runTime={data.runTime}
        releaseYear={data.releaseYear}
        releaseDate={data.releaseDate?.split("T")[0]}
        countryOfOrigin={data.countryOfOrigin}
        language={data.language}
        creator={data.creator}
      />
      {data.reviews.length > 0 && (
        <FeaturedReview
          {...data.reviews?.[0]}
          numberofRatings={data.reviews?.[0].ratings.length}
          numberofReviews={data.numberofReviews}
        />
      )}
    </section>
  );
}
