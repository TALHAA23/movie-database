import { useQuery } from "@tanstack/react-query";
import Casts from "./Casts";
import FeaturedReview from "./FeaturedReveiw";
import MoreLikeThis from "./MoreLikeThis";
import TitleHead from "./TitleHead";
import movieByIdApi from "../../api/movieByIdApi";
import { useParams } from "react-router-dom";
import { MovieInterface, Review } from "../../api/model/Interfaces";
import PageLoader from "../Loaders/PageLoader";
import NotFound from "../NotFound/NotFound";
import { useEffect, useRef, useState } from "react";
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
    <section className="w-full h-auto">
      <TitleHead
        title={data?.title || "Unknown Title"}
        desc={data.desc}
        rating={data.rating || 0}
        genre={data?.genre || []}
        runTime={data.runTime}
        releaseYear={data.releaseYear}
        reviewsCount={data.reviews?.length || 0}
      />
      <Casts casts={data.cast} />
      {/* <MoreLikeThis /> */}
      {featuredReview && <FeaturedReview {...featuredReview} />}
    </section>
  );
}
