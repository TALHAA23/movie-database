import { Link } from "react-router-dom";
import takeAvg from "../../utils/takeAvg";
import testImages from "../../testimages";
import CardUtils from "../Cards/CardUtils";

interface TitleHeadData {
  _id: string;
  title?: string;
  desc: string;
  genre: string[];
  releaseYear: number;
  runTime: number;
  numberofReviews?: number;
  ratings: number[];
  banner?: string;
  language?: string;
  countryOfOrigin?: string;
}

export default function TitleHead({
  _id,
  title = "Unknow Titles",
  genre,
  releaseYear,
  runTime,
  numberofReviews = 0,
  ratings,
  desc,
  banner = testImages.noImage,
  language,
  countryOfOrigin,
}: TitleHeadData) {
  return (
    <div
      className={`relative group h-auto flex flex-col lg:flex-row gap-0 bg-black/90 text-white`}
    >
      <CardUtils movieId={_id} />
      <img
        loading="lazy"
        src={banner}
        alt="img"
        className="w-full h-[300px] lg:h-auto lg:w-1/3 object-cover"
      />
      <div className="grow relative  flex flex-col p-6">
        <Title
          title={title || "Unknown Title"}
          releaseYear={releaseYear}
          runTime={runTime}
          language={language}
          countryOfOrigin={countryOfOrigin}
        />
        <Genres genres={genre} />
        <p className="w-full text-sm mb-10 sm:mb-0 lg:text-lg md:w-[70%]">
          {desc}
        </p>
        <Highlights ratings={ratings} numberofReviews={numberofReviews} />
      </div>
    </div>
  );
}

interface Title {
  title: string;
  releaseYear: number;
  runTime: number;
  language?: string;
  countryOfOrigin?: string;
}
function Title({
  title,
  releaseYear,
  runTime,
  language,
  countryOfOrigin,
}: Title) {
  return (
    <div className=" lg:space-y-2">
      <small className=" font-semibold text-[#FDE047]">TRENDING</small>
      <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold w-full md:w-[70%] lg:w-full">
        {title}
      </h1>
      <div className="flex gap-x-4">
        {["Movie", releaseYear, runTime, language, countryOfOrigin].map(
          (el) =>
            el && (
              <small
                key={el}
                className=" relative last:after:bg-transparent after:absolute after:w-2 after:h-2 after:bg-fuchsia-600 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:ml-1"
              >
                {el}
              </small>
            )
        )}
      </div>
    </div>
  );
}

function Genres({ genres }: { genres: string[] }) {
  return (
    <div className="flex my-2">
      {genres.map((genre) => (
        <div
          key={genre}
          className="px-2 lg:px-4 py-1 font-light  text-xs lg:text-sm rounded-full border-2 border-[#FDE047] text-white hover:text-black hover:bg-[#FDE047] transition-all duration-200 select-none"
        >
          {genre}
        </div>
      ))}
    </div>
  );
}

interface HighlightsData {
  ratings: number[];
  numberofReviews: number;
}
function Highlights({ ratings, numberofReviews }: HighlightsData) {
  return (
    <div className="relative my-2 md:absolute md:bottom-2 md:right-2 flex md:flex-col w-full md:w-[6cm] text-sm sm:text-base text-black lg:font-bold">
      <div className="bg-[#FDE047] hover:bg-[#fddf47e0] leading-tight w-full rounded sm:px-4 lg:px-9 sm:py-1 text-center">
        <p className=" font-semibold">
          {takeAvg(ratings)}{" "}
          <span className="font-normal text-xs">({ratings.length})</span>{" "}
        </p>
        <p className=" text-xs">Rating</p>
      </div>
      <Link
        to="./reviews"
        className="bg-[#FDE047] hover:bg-[#fddf47e0] leading-tight w-full rounded sm:px-4 lg:px-9 sm:py-1 text-center"
      >
        <p className=" font-semibold">{numberofReviews}</p>
        <p className=" text-xs">Reviews</p>
      </Link>
    </div>
  );
}
