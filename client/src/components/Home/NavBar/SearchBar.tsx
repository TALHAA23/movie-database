import * as Interfaces from "../../../api/model/Interfaces";
import { useMutation } from "@tanstack/react-query";
import searchParamsFormSubmission from "../../../api/services/searchParamFormSubmission";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function SearchBar() {
  const navigate = useNavigate();
  const searchParamsRef = useRef<null | HTMLInputElement>(null);
  const searchQuery = useMutation<Interfaces.MovieInterface>({
    mutationKey: ["search-query"],
    mutationFn: searchParamsFormSubmission,
  });

  useEffect(() => {
    if (searchQuery.isError || searchQuery.isSuccess) {
      const q = searchParamsRef.current?.value;
      navigate(`find?q=${q}`, {
        state: searchQuery.data,
      });
    }
  }, [searchQuery?.isSuccess, searchQuery?.isError]);

  return (
    <form
      onSubmit={searchQuery?.mutate}
      className={`w-[70%] h-full  bg-slate-900 rounded-full flex gap-0`}
    >
      <input
        ref={searchParamsRef}
        required
        type="search"
        name="search"
        className={`grow  bg-transparent indent-7  focus:outline-none`}
      />
      <button className={`px-4 m-1 rounded-full bg-black  hover:bg-black/20 `}>
        <img src="../../../../public/search-icon.svg" alt="" />
      </button>
    </form>
  );
}
