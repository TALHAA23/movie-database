import { Review } from "../../api/model/Interfaces";

export default function FeaturedReview({
  title,
  rating,
  review,
  reviewDate,
}: Review) {
  return (
    <div className="w-[80%] max-w-[800px] mx-auto my-4">
      <ReviewHead />
      <ReviewBody title={title} review={review} rating={rating} />
      <div className=" text-sm">
        <span>{reviewDate.toLocaleDateString()} by </span>
        <span className="text-blue-600">Ammile aniee</span>
      </div>
    </div>
  );
}

const ReviewHead = () => (
  <div className="flex justify-between">
    <div className="flex items-center">
      <h1 className=" text-4xl">User Reviews</h1>
      <small className="mb-auto">2300</small>
      <img src="../../../public/arrow-right-solid.svg" alt="arrow" />
    </div>
    <button className="w-[100px] flex items-center bg-blue-400/35 rounded justify-center ">
      <img src="../../../public/plus-solid.svg" alt="" />
      <div>Review</div>
    </button>
  </div>
);

interface ReviewBodyInterface {
  rating: number;
  title: string;
  review: string;
}

const ReviewBody = ({ title, review, rating }: ReviewBodyInterface) => (
  <div className=" shadow-lg rounded shadow-slate-500 my-2 p-3  overflow-y-hidden transition-all duration-100">
    <div className=" flex justify-between items-center mt-2 mb-4">
      <b className=" bg-yellow-500 rounded px-2">FEATURED REVIEW</b>
      <p className=" tracking-widest flex w-fit items-center">
        <img src="../../../public/star-solid-sm.svg" alt="" />
        <span>{rating}/</span>
        <span className=" opacity-70">10</span>
      </p>
    </div>
    <h1 className=" font-bold text-xl">{title}</h1>
    <p>{review}</p>
  </div>
);
