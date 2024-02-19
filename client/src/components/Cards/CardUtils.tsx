import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MovieStatus } from "../../api/model/Interfaces";
import manageMovieStatus from "../../api/manageMovieStatusApi";
import { useEffect } from "react";
import { useMessageUpdater } from "../../Contexts/MessageProvider";

interface MutationData {
  status: MovieStatus;
  movieRef: string;
}

const utils = [
  ["watchlist", "../../../public/bookmark-solid.svg"],
  ["watched", "../../../public/eye-regular.svg"],
  ["favrt", "../../../public/star-solid-sm.svg"],
];

const utilsTitleToMovieStatus = (title: string): MovieStatus => {
  if (title == "watchlist") return "mark-as-watch-later";
  else if (title == "watched") return "mark-as-watched";
  else if (title == "favrt") return "mark-as-favrt";
  else throw new Error("Invalid Util");
};

export default function CardUtils({ movieId }: { movieId: string }) {
  const updateMessage = useMessageUpdater();
  const queryClient = useQueryClient();
  const { mutate, isError, isSuccess } = useMutation({
    mutationKey: ["movie-status"],
    mutationFn: (payload: MutationData) =>
      manageMovieStatus(payload.status, payload.movieRef),
  });

  useEffect(() => {
    if (isSuccess) {
      updateMessage("Successfully Added!", "success");
      queryClient.invalidateQueries({
        queryKey: ["watchList", "watched", "favoriteList"],
      });
    }
    if (isError) updateMessage("Something went wrong, try later", "failure");
  }, [isError, isSuccess]);

  return (
    <div className="absolute w-full flex justify-end gap-1 cursor-pointer">
      {utils.map(([title, icon]) => (
        <div
          key={icon}
          onClick={() =>
            mutate({
              status: utilsTitleToMovieStatus(title),
              movieRef: movieId,
            })
          }
          className="group/utils relative w-[55px] border py-4 bg-white/55 hover:bg-white/80 rounded scale-0 group-hover:scale-100 origin-right transition-all duration-150"
        >
          <img className=" mx-auto" src={icon} alt="" />
          <small className="absolute  text-black bg-white left-0 w-full text-center rounded-b scale-0 opacity-0 origin-bottom group-hover/utils:scale-100 group-hover/utils:opacity-100 transition-all duration-150">
            {title}
          </small>
        </div>
      ))}
    </div>
  );
}
