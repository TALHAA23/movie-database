import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MovieInterface } from "../../../../api/model/Interfaces";
import movieListApi from "../../../../api/movieListApi";
import SectionLoader from "../../../Loaders/SectionLoader";
import SectionError from "../../../Error/SectionError";
import List from "./List";
import Paginator from "./Paginator";
export default function SlideBar() {
  const titleRef = useRef(null);
  const [currentMovieIndex, setCurrentMovieIndex] = useState<number>(0);
  const query = useQuery<[MovieInterface]>({
    retry: 1,
    staleTime: 1000 * 60 * 60,
    queryKey: ["slide-show-data"],
    queryFn: () => movieListApi("top-rated"),
  });

  if (query.isPending) return <SectionLoader />;
  if (query.isError) return <SectionError error={query.error} />;

  return (
    <div className={`relative bg-black/90 text-white`}>
      <div
        ref={titleRef}
        className=" bg-black/40 mx-2  px-2 py-1 rounded absolute  w-[calc(100-(8px+8px))]  md:w-[40%] z-30 top-3 sm:top-1/2 sm:-translate-y-1/2 "
      >
        <h1 className="font-bold text-lg sm:text-4xl">
          {query.data[currentMovieIndex].title}
        </h1>
        <p>{query.data[currentMovieIndex].desc}</p>
      </div>
      <List movies={query.data} />
      <Paginator
        titleRef={titleRef}
        currentMovieIndex={currentMovieIndex}
        numberOfMovies={query.data.length}
        indexUpdater={setCurrentMovieIndex}
      />
    </div>
  );
}
