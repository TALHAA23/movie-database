import { useSearchParams } from "react-router-dom";
import FindResult from "./findResult";
export default function Find() {
  const [searchParam, setSearchParam] = useSearchParams();

  return (
    <section>
      <h1 className=" text-4xl font-semibold m-7">
        Showing search result for "{searchParam.get("q")}"
      </h1>
      <FindResult />
    </section>
  );
}
