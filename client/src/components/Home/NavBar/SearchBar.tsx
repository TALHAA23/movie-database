import { useMutation } from "@tanstack/react-query";
import searchParamsFormSubmission from "../../../api/services/searchParamFormSubmission";

export default function SearchBar() {
  const searchQuery = useMutation({
    mutationKey: ["search-query"],
    mutationFn: searchParamsFormSubmission,
  });

  if (searchQuery.isSuccess) console.log(searchQuery.data);

  return (
    <form
      onSubmit={searchQuery.mutate}
      className={`w-[70%] h-full  bg-slate-900 rounded-full flex gap-0`}
    >
      <input
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
