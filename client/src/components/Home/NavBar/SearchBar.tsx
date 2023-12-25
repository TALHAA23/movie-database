import { useMutation } from "@tanstack/react-query";
import searchParamsFormSubmission from "../../../api/services/searchParamFormSubmission";
export default function SearchBar() {
  const searchQuery = useMutation({
    mutationKey: ["search-query"],
    mutationFn: searchParamsFormSubmission,
  });

  return (
    <form
      onSubmit={searchQuery.mutate}
      className={`
        w-[70%] rounded border-2 border-gray-400/35 flex
    `}
    >
      <input
        required
        type="search"
        name="search"
        className={`peer grow focus:outline-none`}
      />
      <button className={`px-2 border-l-2 border-gray-400/35`}>Search</button>
    </form>
  );
}
