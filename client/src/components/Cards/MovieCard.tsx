import { Link } from "react-router-dom";
import testImages from "../../testimages";

interface MovieCardInterface {
  title: string;
  rating: number;
  id: string;
}

export default function MovieCard({ title, rating, id }: MovieCardInterface) {
  return (
    <div className="group shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col gap-0 rounded">
      <Image />
      <MovieCardInformation title={title} rating={rating} id={id} />
    </div>
  );
}

const Image = () => (
  <img
    className="h-[70%] object-cover rounded-t"
    src={testImages.protrait_sm}
    alt="banner"
  />
);

interface MovieCardInformationInterface {
  title: string;
  rating: number;
  id: string;
}

const MovieCardInformation = ({
  title,
  rating,
  id,
}: MovieCardInformationInterface) => {
  const name = "fsddsf";
  return (
    <div className="relative h-[30%] flex flex-col justify-around px-1 bg-slate-900/30 text-white rounded-b">
      <div className=" flex justify-between">
        <div className=" flex items-center">
          <img src="../../../public/star-solid-sm.svg" alt="star" />
          <h6 className=" font-semibold">{rating}</h6>
        </div>
        <img src="../../../public/star-solid-sm.svg" alt="rating star" />
      </div>
      <h1 className="  font-semibold text-lg lg:text-xl">
        {title.length < 35 ? title : title.substring(0, 35) + "..."}
        {title.length > 35 && (
          <small className=" absolute opacity-0 group-hover:opacity-100 bg-slate-600 text-white text-sm font-light left-0 top-0  w-full px-2 py-1 rounded transition-all duration-100">
            {title}
          </small>
        )}
      </h1>
      <div className=" space-y-1 font-semibold">
        <Link
          to={`/title/${id}`}
          className="w-full block text-center border-2 border-[#FDE047] rounded py-1 font-semibold text-sm hover:bg-[#fddf4765] transition-colors duration-200"
        >
          More
        </Link>
        <button className="w-full bg-[#FDE047] hover:bg-[#fddf47d3] text-black rounded py-1 font-semibold text-sm">
          Play
        </button>
      </div>
    </div>
  );
};
