import { Link } from "react-router-dom";
import { Review } from "../../api/model/Interfaces";
import takeAvg from "../../utils/takeAvg";
import RatingStars from "../Review/RatingStars";
import showReviewWriter from "../../utils/showReviewWriter";

interface FeatureReview extends Review {
  numberofReviews?: number;
  numberofRatings?: number;
}

export default function FeaturedReview({
  _id, //review id
  title,
  ratings,
  review,
  reviewDate,
  numberofReviews = 0,
  numberofRatings = 0,
}: FeatureReview) {
  return (
    <div className="w-full bg-slate-950 max-w-[800px] rounded-md mx-auto my-4 py-3 px-2 border-2 border-white/10">
      <ReviewHead numberofReviews={numberofReviews} />
      <ReviewBody
        title={title}
        review={review}
        rating={takeAvg(ratings.map((rating) => rating.rating))}
        numberofRatings={numberofRatings}
      />
      <div className=" text-sm flex flex-col sm:flex-row items-center justify-center sm:justify-between px-3">
        <div>
          <span>{new Date(reviewDate).toLocaleString()} by </span>
          <span className="text-blue-600">Ammile aniee</span>
        </div>
        <RatingStars action="publish-rating-on-review" reviewRef={_id} />
      </div>
    </div>
  );
}

const ReviewHead = ({ numberofReviews }: { numberofReviews: number }) => {
  return (
    <div className="flex flex-col items-center leading-tight gap-1 tracking-wide">
      <Link className="text-center" to={"./reviews"}>
        <h1 className=" text-2xl font-bold">User Reviews</h1>
        {numberofReviews && (
          <small className=" text-blue-300 underline">
            {numberofReviews} more reviews
          </small>
        )}
      </Link>
      <button
        onClick={showReviewWriter}
        className=" bg-blue-500 rounded justify-center px-3 py-1 font-semibold hover:bg-blue-400 transition-all duration-100 active:scale-95"
      >
        Add a review
      </button>
    </div>
  );
};

interface ReviewBodyInterface {
  rating: string; //? .toFixed return string
  title: string;
  review: string;
  numberofRatings: number;
}

const ReviewBody = ({
  title,
  review,
  rating,
  numberofRatings,
}: ReviewBodyInterface) => (
  <div className="rounded my-2 p-3  overflow-y-hidden transition-all duration-100">
    <div className=" flex justify-between items-center mt-2 mb-4">
      <b className=" bg-yellow-500 rounded px-2">FEATURED REVIEW</b>
      <p className=" tracking-widest flex w-fit items-center">
        <img src="../../../public/star-solid-sm.svg" alt="" />
        <span>{rating}/</span>
        <span className=" opacity-70">10</span>
        <span className="text-xs text-slate-700">({numberofRatings})</span>
      </p>
    </div>
    <h1 className=" font-bold text-xl">{title}</h1>
    <p>{review}</p>
  </div>
);
