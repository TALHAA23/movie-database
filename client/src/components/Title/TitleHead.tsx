import testImages from "../../testimages";
const testDesc = `When a young boy vanishes, a small town uncovers a mystery
involving secret experiments, terrifying supernatural forces and
one strange little girl.`;

interface TitleHeadData {
  title: string;
  desc: string;
  genre: [string];
  releaseYear: number;
  runTime: number;
  reviewsCount: number;
  rating: number;
}

export default function TitleHead({
  title,
  genre,
  releaseYear,
  runTime,
  reviewsCount,
  rating,
  desc,
}: TitleHeadData) {
  return (
    <div
      className={`h-auto flex flex-col lg:flex-row gap-0 bg-black/90 text-white`}
    >
      <img
        src={testImages.protrait}
        alt="img"
        className="w-full h-[300px] lg:h-auto lg:w-1/3 object-cover"
      />
      <div className="grow relative  flex flex-col p-6">
        <Title title={title} releaseYear={releaseYear} runTime={runTime} />
        <Genres genres={genre} />
        <p className="w-full text-sm mb-10 sm:mb-0 lg:text-lg md:w-[70%]">
          {desc}
        </p>
        <Table />
        <Highlights
          yourRating={2.0}
          rating={rating}
          numberOfRatings={200}
          reviewsCount={reviewsCount}
        />
      </div>
    </div>
  );
}

interface Title {
  title: string;
  releaseYear: number;
  runTime: number;
}
function Title({ title, releaseYear, runTime }: Title) {
  return (
    <div className=" lg:space-y-2">
      <small className=" font-semibold text-[#FDE047]">TRENDING</small>
      <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold w-full md:w-[70%] lg:w-full">
        {title}
      </h1>
      <div className="flex gap-x-4">
        <small className=" relative  after:absolute after:w-2 after:h-2 after:bg-fuchsia-600 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:ml-1">
          Movie
        </small>
        <small className=" relative after:absolute after:w-2 after:h-2 after:bg-fuchsia-600 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:ml-1">
          {releaseYear}
        </small>
        <small className=" relative [&(:last-child)::after]:bg-transparent after:absolute after:w-2 after:h-2 after:bg-fuchsia-600 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:ml-1">
          {runTime}
        </small>
      </div>
    </div>
  );
}

function Genres({ genres }: { genres: [string] }) {
  return (
    <div className="flex my-2">
      {genres.map((genre) => (
        <div className="px-2 lg:px-4 py-1 font-light  text-xs lg:text-sm rounded-full border-2 border-[#FDE047] text-white hover:text-black hover:bg-[#FDE047] transition-all duration-200 select-none">
          {genre}
        </div>
      ))}
    </div>
  );
}

function SingleHightlight() {
  return (
    <div className="bg-[#FDE047] hover:bg-[#fddf47e0] leading-tight w-full rounded sm:px-4 lg:px-9 sm:py-1 text-center">
      <p className=" font-semibold">23000</p>
      <p className=" text-xs">Reviews</p>
    </div>
  );
}

function DuoHighlight() {
  return (
    <div className="bg-[#FDE047] hover:bg-[#fddf47e0] rounded flex w-full  ">
      <div className="w-1/3 font-xs flex flex-col justify-center items-center gap-0 leading-tight bg-[#C3AD33] text-white/80 rounded-l sm:py-1 ">
        <p>4.5</p>
        <small>100k</small>
      </div>
      <p className=" grow self-center sm:font-semibold text-xs sm:text-base ">
        Rating
      </p>
    </div>
  );
}

interface HighlightsData {
  numberOfRatings: number;
  rating: number;
  yourRating: number;
  reviewsCount: number;
}
function Highlights({
  rating,
  yourRating,
  reviewsCount,
  numberOfRatings,
}: HighlightsData) {
  return (
    <div className="relative my-2 md:absolute md:bottom-2 md:right-2 grid grid-cols-3 md:grid-cols-1 gap-1 w-full md:w-[6cm] text-sm sm:text-base text-black lg:font-bold">
      {[rating, yourRating].map((rate) => (
        <div className="bg-[#FDE047] hover:bg-[#fddf47e0] rounded flex w-full  ">
          <div className="w-1/3 font-xs flex flex-col justify-center items-center gap-0 leading-tight bg-[#C3AD33] text-white/80 rounded-l sm:py-1 ">
            <p>{rate}</p>
            <small>{numberOfRatings}</small>
          </div>
          <p className=" grow self-center sm:font-semibold text-xs sm:text-base ">
            Rating
          </p>
        </div>
      ))}
      <div className="bg-[#FDE047] hover:bg-[#fddf47e0] leading-tight w-full rounded sm:px-4 lg:px-9 sm:py-1 text-center">
        <p className=" font-semibold">{reviewsCount}</p>
        <p className=" text-xs">Reviews</p>
      </div>
    </div>
  );
}

function Table() {
  const content = [
    ["Creators", "Duffer brother and others"],
    ["Stars", "Millie, Bobbie and Brown"],
    ["Awards", "Oscar and  5 more"],
  ];
  return (
    <div className=" hidden lg:block w-1/2 mt-auto">
      {content.map(([key, value]) => (
        <div className="flex  text-center border-b text-sm lg:text-base">
          <p className="w-1/3 font-semibold">{key}</p>
          <p className="grow">{value}</p>
        </div>
      ))}
    </div>
  );
}
