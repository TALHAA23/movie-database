import * as Interfaces from "../../api/model/Interfaces";
import { Link, useLocation } from "react-router-dom";
import testImages from "../../testimages";

export default function FindResult() {
  const findResult = useLocation().state as [Interfaces.MovieInterface];

  if (!findResult.length) return <h1>No Result Found</h1>;
  return (
    <div className=" max-w-[1200px] mx-auto rounded border flex flex-col gap-1 p-2">
      {findResult.map((movie) => (
        <Link
          to={`./${movie._id}`}
          className=" border-b-2 h-[3.5cm] flex items-center"
        >
          <img
            src={testImages.protrait}
            alt=""
            className=" w-1/4 max-w-[3cm] h-full object-cover"
          />
          <Information
            releaseYear={movie.releaseYear}
            title={movie.title}
            cast={movie.cast}
          />
        </Link>
      ))}
    </div>
  );
}

interface MovieInformation {
  title: string;
  releaseYear: number;
  cast: [string];
}

function Information({ title, releaseYear, cast }: MovieInformation) {
  return (
    <div className=" leading-tight">
      <h1 className="font-semibold">{title}</h1>
      <p className=" text-sm">{releaseYear}</p>
      <p className="text-sm font-light">cast goes here</p>
    </div>
  );
}
