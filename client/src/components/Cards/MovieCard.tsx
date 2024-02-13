import { Link } from "react-router-dom";
import testImages from "../../testimages";
import CardUtils from "./CardUtils";

interface Props {
  title: string;
  ratings?: number;
  id: string;
  bannerURL?: string;
}

export default function MovieCard({
  title,
  ratings = 0,
  id,
  bannerURL = "/vite.svg",
}: Props) {
  return (
    <div className="relative shrink-0 group border border-white/10 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-[13.66%] flex flex-col gap-0 rounded">
      <CardUtils movieId={id} />
      <Image bannerURL={bannerURL} />
      <MovieCardInformation title={title} rating={ratings} id={id} />
    </div>
  );
}

const Image = ({ bannerURL }: { bannerURL: string }) => (
  <img
    className="h-[60%] object-cover rounded-t"
    src={bannerURL || testImages.noImage}
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
  return (
    <div className="relative h-[40%] flex flex-col justify-around px-1 bg-slate-900/30 text-white rounded-b">
      <div className=" flex justify-between">
        <div className=" flex items-center">
          <img src="../../../public/star-solid-sm.svg" alt="star" />
          <h6 className=" font-semibold">{rating}</h6>
        </div>
        <img src="../../../public/star-solid-sm.svg" alt="rating star" />
      </div>
      <h1 className="font-semibold text-base lg:text-lg grow flex items-center">
        {title.length < 50 ? title : title.substring(0, 50) + "..."}
        {title.length > 50 && (
          <small className=" absolute opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-sm font-light left-0 top-0  w-full px-2 py-1 rounded transition-all duration-100">
            {title}
          </small>
        )}
      </h1>
      <div className=" space-y-1 font-semibold">
        <Link
          to={`/title/${id}`}
          className="w-full block text-center border border-[#FDE047] rounded py-1 font-semibold text-sm hover:bg-[#FDE047] hover:text-black transition-colors duration-200"
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
