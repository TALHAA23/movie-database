import { useNavigate } from "react-router-dom";
import { useRef, FormEvent } from "react";

export default function SearchBar() {
  const navigate = useNavigate();
  const searchParamsRef = useRef<null | HTMLInputElement>(null);

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(`find?q=${searchParamsRef.current?.value}`);
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className={`w-[70%] h-full bg-slate-900 rounded-full flex gap-0`}
    >
      <input
        ref={searchParamsRef}
        required
        type="search"
        name="search"
        className={`grow bg-transparent indent-7  focus:outline-none`}
      />
      <button className={`px-4 m-1 rounded-full bg-black  hover:bg-black/20 `}>
        <img src="../../../../public/search-icon.svg" alt="" />
      </button>
    </form>
  );
}
