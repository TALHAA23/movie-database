import { useQuery } from "@tanstack/react-query";
import Casts from "./Casts";
import FeaturedReview from "./FeaturedReveiw";
import MoreLikeThis from "./MoreLikeThis";
import TitleHead from "./TitleHead";
import movieByIdApi from "../../api/movieByIdApi";
import { useFetcher, useParams } from "react-router-dom";
import { MovieInterface, Review } from "../../api/model/Interfaces";
import PageLoader from "../Loaders/PageLoader";
import NotFound from "../NotFound/NotFound";
import { createRef, useEffect, useRef, useState } from "react";
import movieListApi from "../../api/movieListApi";
import MovieList from "../Home/Others/MovieList";
import testImages from "../../testimages";
import Awards from "./Awards";
import Tagline from "./Tagline";
import Details from "./Details";
import AddReview from "./AddReview";
import Information from "../Information/Information";
import { useMessageUpdater } from "../../Contexts/MessageProvider";
export default function Title() {
  const { id } = useParams();
  const [featuredReview, setFeaturedReview] = useState<Review | undefined>();
  if (!id) return <h1>Something went wrong</h1>;

  const { isPending, data, isError, error } = useQuery<MovieInterface>({
    retry: 1,
    queryKey: ["movie-by-id", id],
    queryFn: () => movieByIdApi(id),
    staleTime: 1000 * 60 * 60,
  });

  const relatedMoviesQuery = useQuery<[MovieInterface]>({
    retry: 1,
    queryKey: [`related-for-${id}`],
    queryFn: () => movieListApi("related", id),
    enabled: !!data,
    staleTime: 1000 * 60 * 60,
  });

  useEffect(
    () =>
      data &&
      setFeaturedReview(data.reviews?.find((review) => review.featured)),
    [data]
  );

  if (isPending) return <PageLoader />;
  if (isError) return <h1>{error.message}</h1>;
  if (!data) return <NotFound />;

  return (
    <section className="w-full h-auto bg-black text-white">
      <Information />
      <AddReview movieRef={data._id as string} />
      <TitleHead
        title={data?.title || "Unknown Title"}
        banner={data.banner || testImages.landscape}
        desc={data.desc}
        language={data.language}
        countryOfOrigin={data.countryOfOrigin}
        rating={data.rating || 0}
        genre={data?.genre || []}
        runTime={data.runTime}
        releaseYear={data.releaseYear}
        reviewsCount={data.reviews?.length || 0}
      />
      {data.tagline && <Tagline tagline={data.tagline} />}
      <Casts casts={data.cast} />
      <MovieList title="Related" query={relatedMoviesQuery} />
      {featuredReview && <FeaturedReview {...featuredReview} />}
      {data.awards?.length && <Awards awards={data.awards} />}
      <Details
        runTime={data.runTime}
        releaseYear={data.releaseYear}
        releaseDate={data.releaseDate?.split("T")[0]}
        countryOfOrigin={data.countryOfOrigin}
        language={data.language}
        creator={data.creator}
      />
      <FeaturedReview
        title="Amazing comment"
        reviewDate={new Date()}
        helpful={20}
        unhelpful={30}
        rating={4}
        featured={true}
        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ultrices massa, et feugiat ipsum consequat id. Nulla facilisi. Proin pellentesque, lorem sed semper varius, enim mauris iaculis tortor, eu dapibus urna orci et velit. Quisque commodo, sapien a aliquet bibendum, leo sem pharetra dui, non ullamcorper nisl diam vitae mauris. Donec at"
      />
    </section>
  );
}
