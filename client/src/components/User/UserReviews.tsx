import { useQuery } from "@tanstack/react-query";
import userReviewsApi from "../../api/userReviewsApi";

export default function UserReviews({ userId }: { userId: string }) {
  const { isPending, isError, error, isSuccess, data } = useQuery({
    queryKey: ["my-reviews"],
    queryFn: () => userReviewsApi(userId),
  });

  if (isError) console.log(error);
  if (isSuccess) console.log(data);

  return <h1>hello </h1>;
}
