import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import movieByIdApi from "../../../api/movieByIdApi";
import PageLoader from "../../Loaders/PageLoader";
import { MovieInterface } from "../../../api/model/Interfaces";
import CreateInputForMissingFeilds from "../ContributionUtils/CreateInputForMissingFields.tsx";
import "../../../../public/form.css";
import fillHolesFormSubmission from "../../../api/services/fillHolesFormSubmission.ts";
import { useEffect } from "react";

export default function FillHolesofMovie({ id }: { id: string }) {
  const queryClient = useQueryClient();
  const { isPending, isError, error, data } = useQuery<MovieInterface>({
    queryKey: [id],
    queryFn: () => movieByIdApi(id),
  });

  const uploadFormMutation = useMutation({
    mutationKey: ["fill-holes-movie"],
    mutationFn: fillHolesFormSubmission,
  });

  useEffect(() => {
    if (uploadFormMutation.isSuccess)
      queryClient.invalidateQueries({ queryKey: [id] });
  }, [uploadFormMutation.isSuccess]);

  if (isPending) return <PageLoader />;
  else if (isError) return <h1>{error.message}</h1>;
  return (
    <form
      onSubmit={uploadFormMutation.mutate}
      className="contribution-new-form"
    >
      <h1 className=" col-span-full text-center font-semibold text-gray-600 text-2xl">
        "{data.title}" lack the following information ------
      </h1>
      {uploadFormMutation.isPending && (
        <small className="text-center">Please wait</small>
      )}
      {uploadFormMutation.isError && (
        <small className="text-center">
          {uploadFormMutation.error.message}
        </small>
      )}
      {CreateInputForMissingFeilds(data)}
      <input hidden type="text" name="_id" value={id} />
      <input hidden type="text" name="actionOn" value="movie" />
      <button
        type="submit"
        className="peer relative col-span-full fancy disabled:cursor-no-drop"
      >
        <span className="top-key"></span>
        <span className="text">submit</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
    </form>
  );
}
