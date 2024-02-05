import { Link } from "react-router-dom";
import { MovieInterface } from "../../api/model/Interfaces";
import testImages from "../../testimages";

export default function MovieCardsm({ props }: { props: MovieInterface }) {
  return (
    <Link
      to={`/title/${props._id}`}
      className="group flex relative flex-col hover:col-span-2 rounded shadow-md shadow-slate-900/30"
    >
      <img
        className="h-[80%] object-cover"
        src={props.banner || testImages.noImage}
        alt="no-image"
      />
      <Information
        title={props.title}
        runTime={props.runTime}
        creator={props.creator}
      />
      <h1 className="grow pl-1 text-sm">
        {props.title.length < 25
          ? props.title
          : props.title.slice(0, 25) + "..."}
      </h1>
    </Link>
  );
}

interface InformationProps {
  title: string;
  runTime: number;
  creator?: string;
}
const Information = ({
  title,
  runTime,
  creator = "unkown creator",
}: InformationProps) => (
  <div className="absolute bg-black/60 rounded-t w-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <h1>{title}</h1>
    <div className="text-sm">
      {["Movie", `${runTime}min`, creator].map((info) => (
        <small className="relative last:after:bg-transparent mr-3 after:absolute after:w-1 after:h-1 after:bg-black after:rounded-full after:top-1/2 after:-translate-y-1/2 after:ml-1">
          {info}
        </small>
      ))}
    </div>
  </div>
);
