import { useQuery } from "@tanstack/react-query";
import NameHead from "./NameHead";
import NameMovies from "./NameMovies";
import { useParams } from "react-router-dom";
import { ActorInterface } from "../../api/model/Interfaces";
import castByIdApi from "../../api/castByIdaApi";
import PageLoader from "../Loaders/PageLoader";
import SectionError from "../Error/SectionError";
import Awards from "../Title/Awards";

export default function Name() {
  const { id } = useParams();
  if (!id) throw new Error("cast id is not provided in url");
  const { isPending, isError, error, data } = useQuery<ActorInterface>({
    queryKey: [id],
    queryFn: () => castByIdApi(id),
  });

  if (isPending) return <PageLoader />;
  else if (isError) return <SectionError error={error} />;
  console.log(data);
  return (
    <div className=" bg-black/30 ">
      <NameHead name={data.name} about={data.about} DOB={data.DOB} />
      {data.achievments.length && (
        <Awards awards={data.achievments} sideText="achievments" />
      )}
      <NameMovies
        knownFor={data.knownFor}
        upcoming={data.movies.upcoming}
        previousMovies={data.movies.previousMovies}
      />
    </div>
  );
}
