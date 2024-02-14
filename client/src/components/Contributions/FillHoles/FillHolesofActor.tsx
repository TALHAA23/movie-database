import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PageLoader from "../../Loaders/PageLoader";
import { ActorInterface } from "../../../api/model/Interfaces";
import CreateInputForMissingFeilds from "../ContributionUtils/CreateInputForMissingFields.tsx";
import "../../../../public/form.css";
import fillHolesFormSubmission from "../../../api/services/fillHolesFormSubmission.ts";
import { useEffect } from "react";
import castByIdApi from "../../../api/castByIdaApi.ts";

export default function FillHolesofActor({ id }: { id: string }) {
  const queryClient = useQueryClient();
  const { isPending, isError, error, data } = useQuery<ActorInterface>({
    queryKey: [id],
    queryFn: () => castByIdApi(id),
  });

  const uploadFormMutation = useMutation({
    mutationKey: ["fill-holes-actor"],
    mutationFn: fillHolesFormSubmission,
  });

  useEffect(() => {
    if (uploadFormMutation.isSuccess)
      queryClient.invalidateQueries({ queryKey: [id] });
  }, [uploadFormMutation.isSuccess]);

  if (isPending) return <PageLoader />;
  else if (isError) return <h1>{error.message}</h1>;
  console.log(data);
  return (
    <form
      onSubmit={uploadFormMutation.mutate}
      className="contribution-new-form"
    >
      <h1 className=" col-span-full text-center font-semibold text-gray-600 text-2xl">
        "{data.name}" lack the following information ------
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
