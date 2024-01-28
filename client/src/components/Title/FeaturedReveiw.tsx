import { Review } from "../../api/model/Interfaces";

export default function FeaturedReview({
  title,
  rating,
  review,
  reviewDate,
}: Review) {
  return (
    <div className="w-full max-w-[800px] rounded-md mx-auto my-4 py-3 px-2 border-2 border-white/10">
      <ReviewHead />
      <ReviewBody title={title} review={review} rating={rating} />
      <div className=" text-sm">
        <span>{reviewDate.toLocaleDateString()} by </span>
        <span className="text-blue-600">Ammile aniee</span>
      </div>
    </div>
  );
}

const ReviewHead = () => {
  const addReview = () => {
    const dialogBox = document.querySelector(
      ".add-review"
    ) as HTMLDialogElement;
    dialogBox.showModal();
  };

  return (
    <div className="flex flex-col items-center leading-tight gap-1 tracking-wide">
      <h1 className=" text-2xl font-bold">User Reviews</h1>
      <small className=" text-blue-300 underline">2300 reviews</small>
      <button
        onClick={addReview}
        className=" bg-blue-500 rounded justify-center px-3 py-1 font-semibold hover:bg-blue-400 transition-all duration-100 active:scale-95"
      >
        Add a review
      </button>
    </div>
  );
};

interface ReviewBodyInterface {
  rating: number;
  title: string;
  review: string;
}

const ReviewBody = ({ title, review, rating }: ReviewBodyInterface) => (
  <div className="rounded my-2 p-3  overflow-y-hidden transition-all duration-100">
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
