import errorThrower from "../../../../shared/errorThrower";
import HttpError from "../../../../shared/httpErrorsEnum";
import { Middleware } from "../../utils/ReqResNextType";
import getMoviesByTitle from "../services/movies/getMovieBySearchParams";

const movieBySearch: Middleware = async (req, res, next) => {
  const searchParams = req.query;
  try {
    if (!("title" in searchParams))
      throw errorThrower("Query not provided", HttpError.BadRequest);

    const result = await getMoviesByTitle(
      searchParams.title as unknown as string
    );
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export { movieBySearch };
