import { ActorInterface } from "../../api/model/Interfaces";
import testImages from "../../testimages";
import ActorContribution from "../Contribution/ActorContribution";
import Frame from "../Home/Others/Frame";

export default function Casts({ casts }: { casts: [ActorInterface] }) {
  if (!casts.length) {
    return (
      <Frame frameTitle="Actor" frameHight="40vh" hasPagination={false}>
        <ActorContribution />
      </Frame>
    );
  }

  return (
    <Frame frameTitle="Actor" frameHight="40vh">
      {casts.map((cast) => (
        <div className=" shrink-0 w-full sm:w-1/2 md:w-1/5 xl:w-1/7 h-full flex flex-col items-center">
          <img
            src={testImages.protrait}
            alt=""
            className="h-[80%] aspect-square rounded-full"
          />
          <p className="text-white font-bold text-lg">{cast.name}</p>
        </div>
      ))}
    </Frame>
  );
}
