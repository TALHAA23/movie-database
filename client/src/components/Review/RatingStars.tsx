import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, MouseEvent, useEffect } from "react";
import ratingPublisher from "../../api/services/ratingPublisher";
import { useMessageUpdater } from "../../Contexts/MessageProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useIsUserLoggedIn } from "../../Contexts/UserProvider";
import { Action } from "../../api/model/Interfaces";
const RatingStars = ({
  action,
  reviewRef,
}: {
  reviewRef?: string;
  action: Action;
}) => {
  const { id } = useParams();
  if (!id) throw new Error("The Movie doesn't have Id");
  if (action == "publish-rating-on-review" && !reviewRef)
    throw new Error("Review Id is required");

  const updateMessage = useMessageUpdater();
  const isUserLoggedIn = useIsUserLoggedIn();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [capturedRating, setCapturedRating] = useState(0);
  const [showTempRating, setShowTempRataing] = useState(false);

  const queryClient = useQueryClient();
  const ratingMutation = useMutation({
    mutationKey: ["rating-on-review"],
    mutationFn: ratingPublisher,
  });

  useEffect(() => {
    if (!ratingMutation.isSuccess) return;
    queryClient.invalidateQueries({
      queryKey: [`${id}-reviews`],
    });
    updateMessage(`${capturedRating} star(s) rating published!`, "success");
  }, [ratingMutation.isSuccess]);

  useEffect(() => {
    if (!ratingMutation.isError) return;
    updateMessage("Couldn't complete the request. Please try later", "failure");
  }, [ratingMutation.isError]);

  const changeColor = (event: MouseEvent<HTMLImageElement>) => {
    const currentStar = event.currentTarget;
    const all = Array.from(
      event.currentTarget.parentElement?.children || []
    ) as HTMLImageElement[];
    const indexOfTarget = all.indexOf(currentStar);
    all.map((child, index) => {
      child.src =
        index <= indexOfTarget
          ? "../../../public/star_yellow_md.png"
          : "../../../public/star_dark_md.png";
    });
    setRating(indexOfTarget + 1);
  };

  const resetRating = (event: MouseEvent<HTMLImageElement>) => {
    const all = Array.from(
      event.currentTarget.children || []
    ) as HTMLImageElement[];
    all.map((child, index) => {
      child.src =
        index <= capturedRating - 1
          ? "../../../public/star_yellow_md.png"
          : "../../../public/star_dark_md.png";
    });
    setShowTempRataing(false);
  };

  return (
    <div className=" flex flex-col sm:flex-row w-fit items-center">
      <p className=" tracking-wider font-semibold after:content-['10'] after:font-normal">
        {showTempRating ? rating : capturedRating}/
      </p>
      <div
        onMouseLeave={resetRating}
        onMouseEnter={() => setShowTempRataing(true)}
        className="flex items-center"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(() => (
          <img
            onMouseEnter={changeColor}
            onClick={() => setCapturedRating(rating)}
            src="../../../public/star_dark_md.png"
            alt=""
          />
        ))}
      </div>

      <button
        disabled={ratingMutation.isPending}
        onClick={() => {
          isUserLoggedIn
            ? ratingMutation.mutate({
                action,
                movieRef: id,
                reviewRef,
                rating: capturedRating,
              })
            : navigate("/auth/login", {
                state: { redirect: location.pathname },
              });
        }}
        className={`border text-xs active:scale-95 rounded bg-yellow-400 disabled:opacity-40 px-2 py-1 font-semibold scale-0 transition-all duration-100 ${
          capturedRating && "scale-100"
        }`}
      >
        {isUserLoggedIn
          ? ratingMutation.isPending
            ? "Publishing"
            : "Save"
          : "Sign In"}
      </button>
    </div>
  );
};
export default RatingStars;
