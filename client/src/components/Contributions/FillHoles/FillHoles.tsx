import { useSearchParams } from "react-router-dom";
import "../../../../public/form.css";
import FillHolesofMovie from "./FillHolesofMovie.tsx";
import FillHolesofActor from "./FillHolesofActor.tsx";

export default function FillHoles() {
  const searchParam = useSearchParams()[0];
  const id = searchParam.get("of");
  const type = searchParam.get("type") as "actor" | "movie";
  if (!id || !type) throw new Error("Id or Type not provided");

  return type == "movie" ? (
    <FillHolesofMovie id={id} />
  ) : (
    <FillHolesofActor id={id} />
  );
}
