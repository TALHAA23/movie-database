import { useQuery } from "@tanstack/react-query";
import userReviewsApi from "../../api/userReviewsApi";
import { Review } from "../../api/model/Interfaces";
import ReviewContainer from "../Review/ReviewContainer";
import PageError from "../Error/PageError";
import NotFound from "../NotFound/NotFound";
import SectionLoader from "../Loaders/SectionLoader";
import { useUserId } from "../../Contexts/UserProvider";

interface MyReviews {
  movieRef: string;
  title: string;
  review: Review;
}

export default function UserReviews() {
  const userId = useUserId();
  if (!userId) return;
  const { isPending, isError, error, data } = useQuery<MyReviews[]>({
    queryKey: [`reviews-of-${userId}`],
    queryFn: () => userReviewsApi(userId),
  });

  if (isPending) return <SectionLoader />;
  else if (isError) return <PageError error={error} />;
  else if (!data.length) return <NotFound />;

  return (
    <div>
      {data?.map((review) => (
        <ReviewContainer
          {...review.review}
          movieRef={review.movieRef}
          movietitle={review.title}
        />
      ))}
    </div>
  );
}
