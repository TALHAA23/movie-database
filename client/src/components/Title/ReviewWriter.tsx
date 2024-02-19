import { MouseEvent, useEffect, useRef } from "react";
import submitReview from "../../api/services/reviewSubmission";
import MiniLoader from "../Loaders/MiniLoader";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import MiniError from "../Error/MiniError";
import { useMessageUpdater } from "../../Contexts/MessageProvider";
import SignupAppeal from "../Information/SiginupAppeal";
import { useIsUserLoggedIn } from "../../Contexts/UserProvider";
export default function ReviewWriter({ movieRef }: { movieRef: string }) {
  if (!movieRef) return;
  const isUserLoggedIn = useIsUserLoggedIn();
  const updateMessage = useMessageUpdater();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const hideModal = (event: MouseEvent<HTMLDialogElement>) => {
    const { top, left, right, bottom } =
      event.currentTarget.getBoundingClientRect();
    const { clientX, clientY } = event;
    if (clientX < left || clientX > right || clientY < top || clientY > bottom)
      event.currentTarget.close();
  };

  const queryClient = useQueryClient();
  const uploadReviewMutation = useMutation({
    mutationKey: ["new-review"],
    mutationFn: submitReview,
  });

  useEffect(() => {
    if (!uploadReviewMutation.isSuccess) return;
    dialogRef.current?.close();
    queryClient.invalidateQueries({ queryKey: [movieRef] });
    updateMessage(uploadReviewMutation.data.response, "general");
  }, [uploadReviewMutation.isSuccess]);

  return (
    <dialog
      ref={dialogRef}
      className="add-review bg-transparent rounded"
      onClick={hideModal}
    >
      {isUserLoggedIn ? (
        <form
          onSubmit={uploadReviewMutation.mutate}
          className=" border p-4 rounded flex gap-2 flex-col items-center bg-slate-950 text-white"
        >
          <img
            className=" h-[150px]"
            src="../../../public/review_man.png"
            alt=""
          />
          <div className=" space-y-1">
            {uploadReviewMutation.isPending && <MiniLoader />}
            {uploadReviewMutation.isError && (
              <MiniError err={uploadReviewMutation.error} />
            )}
            <h1 className=" font-bold text-3xl text-slate-200 text-center">
              What you think about the movie?
            </h1>
            <input
              type="text"
              name="title"
              maxLength={50}
              required
              placeholder="Title of review"
              className="w-full rounded bg-slate-700 p-3 focus:outline-none"
            />
            <textarea
              maxLength={800}
              required
              placeholder="Type Here..."
              name="review"
              rows={5}
              className=" resize-none bg-slate-700 p-3"
            ></textarea>
            <input type="text" name="to" hidden readOnly value={movieRef} />
          </div>
          <button className="border w-full rounded py-2 font-semibold hover:bg-slate-500 transition-all duration-150 active:scale-95">
            Done
          </button>
        </form>
      ) : (
        <SignupAppeal
          text="Sign in to continue"
          subtext="You must be loggedin to publish a review"
        />
      )}
    </dialog>
  );
}
