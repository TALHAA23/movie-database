import RatingStars from "./RatingStars";
import { Review } from "../../api/model/Interfaces";
import takeAvg from "../../utils/takeAvg";
import { Link } from "react-router-dom";

interface Props extends Review {
  movieRef?: string;
  movietitle?: string;
}

export default function ReviewContainer({
  movieRef,
  movietitle,
  _id,
  title,
  review,
  ratings,
  reviewDate,
  reviewedBy,
}: Props) {
  return (
    <div className="w-full max-w-[800px] bg-white/5 rounded-md mx-auto my-4 py-3 px-2 border-2">
      {movietitle && movieRef && (
        <ReviewHead _id={movieRef} title={movietitle} />
      )}
      <ReviewBody
        title={title}
        review={review}
        avg={takeAvg(ratings.map((rating) => rating.rating))}
        numberOfRatings={ratings.length}
      />
      <div className=" text-sm flex flex-col sm:flex-row items-center justify-center sm:justify-between px-3">
        <div>
          <span>{new Date(reviewDate).toLocaleString()} by </span>
          <span className="text-blue-600">
            {reviewedBy?.userInfo?.username || "anonymous"}
          </span>
        </div>
        <RatingStars
          action="publish-rating-on-review"
          reviewRef={_id}
          movieRef={movieRef}
        />
      </div>
    </div>
  );
}

interface ReviewHeadProps {
  _id: string;
  title: string;
}

const ReviewHead = ({ _id, title }: ReviewHeadProps) => (
  <div>
    <small>Reviewed On:</small>{" "}
    <Link
      className=" font-semibold underline hover:text-blue-600"
      to={`/title/${_id}`}
    >
      {title}
    </Link>
  </div>
);

interface ReviewBodyInterface {
  avg: string; //? .fixed return string
  numberOfRatings: number;
  title: string;
  review: string;
}

const ReviewBody = ({
  title,
  review,
  numberOfRatings,
  avg,
}: ReviewBodyInterface) => (
  <div className="rounded my-2 p-3  overflow-y-hidden transition-all duration-100">
    <div className="flex flex-col items-center md:flex-row md:justify-between">
      <h1 className=" font-bold text-lg sm:text-xl uppercase">{title}</h1>
      <p className="tracking-widest flex w-fit items-center text-sm">
        <img src="../../../public/star-solid-sm.svg" alt="" />
        <span>{avg}/</span>
        <span className=" opacity-70">10</span>
        <span className="text-xs text-slate-700">({numberOfRatings})</span>
      </p>
    </div>
    <p>{review}</p>
  </div>
);

// const YourFeedback = () => {
//   return (
//     <div className="flex h-[20px]">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//         <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
//       </svg>
//       <p>useful</p>
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//         <path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z" />
//       </svg>
//     </div>
//   );
// };
