import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import movieByIdApi from "../../../api/movieByIdApi";
import PageLoader from "../../Loaders/PageLoader";
import { MovieInterface } from "../../../api/model/Interfaces";
import CreateInputForMissingFeilds from "../ContributionUtils/CreateInputForMissingFeilds.tsx";
import "../../../../public/form.css";
import fillHolesFormSubmission from "../../../api/services/fillHolesFormSubmission.ts";
import { useEffect } from "react";
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
