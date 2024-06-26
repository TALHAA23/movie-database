import { Link } from "react-router-dom";
import { ActorInterface } from "../../api/model/Interfaces";
import testImages from "../../testimages";
import ActorContribution from "../Contribution/ActorContribution";
import Frame from "../Home/Others/Frame";

export default function Casts({ casts }: { casts: ActorInterface[] }) {
  if (!casts.length) {
    return (
      <Frame frameTitle="Actor" frameHight="40vh" hasPagination={false}>
        <ActorContribution />
      </Frame>
    );
  }
  return (
    <Frame frameTitle="Actor" frameHight="20vh">
      {casts.map((cast) => (
        <Link
          key={cast._id}
          to={`/name/${cast._id}`}
          className="w-1/3 sm:w-1/4 md:w-1/5 xl:w-1/7 h-full flex flex-col items-center"
        >
          <img
            src={cast.banner || testImages.protrait}
            alt={cast.name}
            className="h-[80%] aspect-square rounded-full object-cover"
          />
          <p className="text-white text-center font-bold text-lg">
            {cast.name}
          </p>
        </Link>
      ))}
    </Frame>
  );
}
