import { useParams } from "react-router-dom";
import ReviewContainer from "./ReviewContainer";
import { useQuery } from "@tanstack/react-query";
import reviewsApi from "../../api/reviewsApi";
import PageLoader from "../Loaders/PageLoader";
import { Review } from "../../api/model/Interfaces";
import Information from "../Information/Information";

interface Query {
  title: string;
  reviews: Review[];
}

export default function Reviews() {
  const { id } = useParams();
  if (!id) return <h1>Something went wrong</h1>;
  const reviewsQuery = useQuery<Query>({
    retry: 1,
    staleTime: 1000 * 60 * 60,
    queryKey: [`${id}-reviews`],
    queryFn: () => reviewsApi(id),
  });

  if (reviewsQuery.isPending) return <PageLoader />;
  else if (reviewsQuery.isError) return <h1>{reviewsQuery.error.message}</h1>;

  return (
    <section>
      <Information />
      <h1 className=" text-4xl font-semibold m-7">
        Showing reviews for "{reviewsQuery.data.title}"
      </h1>
      {reviewsQuery.data.reviews.length ? (
        reviewsQuery.data.reviews.map((review) => (
          <ReviewContainer {...review} />
        ))
      ) : (
        <h1 className="text-4xl font-semibold m-7">No Review for the movie</h1>
      )}
    </section>
  );
}
