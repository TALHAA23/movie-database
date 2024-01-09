import { useQuery } from "@tanstack/react-query";
import PageLoader from "../../Loaders/PageLoader";
import NotFound from "../../NotFound/NotFound";
import Recommendations from "./Recommendations";
import recommendationsApi from "../../../api/recommendationsApi";
import HttpError from "../../../../../shared/httpErrorsEnum";

export default function Others() {
  return (
    <section>
      <Recommendations sectionName="recommendations" />
      <Recommendations sectionName="topRated" />
    </section>
    // TODO
    // perPersonalized Recommendations
    // Trending Now
    // New Releases
    // Genres
    // Community Reviews
    // Top Rated
  );
}
