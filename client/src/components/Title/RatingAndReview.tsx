import showReviewWriter from "../../utils/showReviewWriter";
import RatingStars from "../Review/RatingStars";
export default function RatingAndReview() {
  return (
    <div className=" bg-white/10 flex gap-y-4 flex-col justify-center items-center py-5">
      <RatingStars action="publish-rating-on-movie" />
      <button
        onClick={showReviewWriter}
        className=" w-[90%] max-w-[500px] py-2 font-semibold bg-[#FDE047] rounded text-black hover:opacity-80  active:scale-[97%]"
      >
        Write a review
      </button>
    </div>
  );
}
