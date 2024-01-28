import { MouseEvent, useEffect, useRef } from "react";
import submitReview from "../../api/services/reviewSubmission";
import MiniLoader from "../Loaders/MiniLoader";
import { useMutation } from "@tanstack/react-query";
import MiniError from "../Error/MiniError";
import { useMessageUpdater } from "../../Contexts/MessageProvider";
export default function AddReview({ movieRef }: { movieRef: string }) {
  if (!movieRef) return;
  const updateMessage = useMessageUpdater();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const hideModal = (event: MouseEvent<HTMLDialogElement>) => {
    const { top, left, right, bottom } =
      event.currentTarget.getBoundingClientRect();
    const { clientX, clientY } = event;
    if (clientX < left || clientX > right || clientY < top || clientY > bottom)
      event.currentTarget.close();
  };

  const uploadReviewMutation = useMutation({
    mutationKey: ["new-review"],
    mutationFn: submitReview,
  });

  useEffect(() => {
    if (!uploadReviewMutation.isSuccess) return;
    dialogRef.current?.close();
    updateMessage(
      `Review added to "${uploadReviewMutation.data.addedTo}"`,
      "general"
    );
  }, [uploadReviewMutation.isSuccess]);

  return (
    <dialog
      ref={dialogRef}
      className="add-review bg-transparent rounded"
      onClick={hideModal}
    >
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
            required
            placeholder="Title of review"
            className="w-full rounded bg-slate-700 p-3 focus:outline-none"
          />
          <textarea
            maxLength={700}
            required
            placeholder="Type Here..."
            name="review"
            rows={5}
            className=" resize-none bg-slate-700 p-3"
          ></textarea>
          <input type="text" name="to" hidden value={movieRef} />
        </div>
        <button className="border w-full rounded py-2 font-semibold hover:bg-slate-500 transition-all duration-150 active:scale-95">
          Done
        </button>
      </form>
    </dialog>
  );
}
