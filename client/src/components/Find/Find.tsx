import { useSearchParams } from "react-router-dom";
import FindResult from "./FindResult";
export default function Find() {
  const searchParam = useSearchParams()[0];

  return (
    <section>
      <h1 className=" text-4xl font-semibold m-7">
        Showing search result for "{searchParam.get("q")}"
      </h1>
      <FindResult />
    </section>
  );
}
