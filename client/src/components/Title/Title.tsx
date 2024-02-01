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
import AddReview from "./AddReview";
import Information from "../Information/Information";
import RatingStars from "../Review/RatingStars";
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

  return (
    <section className="w-full h-auto bg-black text-white">
      <Information />
      <AddReview movieRef={data._id as string} />
      <TitleHead
        title={data?.title}
        banner={data.banner || testImages.landscape}
        desc={data.desc}
        language={data.language}
        countryOfOrigin={data.countryOfOrigin}
        ratings={data.ratings}
        genre={data?.genre || []}
        runTime={data.runTime}
        releaseYear={data.releaseYear}
        numberofReviews={data.numberofReviews}
      />
      {data.tagline && <Tagline tagline={data.tagline} />}
      <div className=" bg-white/10 flex justify-center items-center">
        <h1>Rate the Movie:</h1>
        <RatingStars action="publish-rating-on-movie" />
      </div>
      <Casts casts={data.cast} />
      <MovieList title="Related" query={relatedMoviesQuery} />
      {data.awards?.length && <Awards awards={data.awards} />}
      <Details
        runTime={data.runTime}
        releaseYear={data.releaseYear}
        releaseDate={data.releaseDate?.split("T")[0]}
        countryOfOrigin={data.countryOfOrigin}
        language={data.language}
        creator={data.creator}
      />
      {data.reviews.length && (
        <FeaturedReview
          {...data.reviews?.[0]}
          numberofRatings={data.reviews?.[0].ratings.length}
          numberofReviews={data.numberofReviews}
        />
      )}
    </section>
  );
}
