import getMoviesByTitle from "../services/movies/getMovieBySearchParams";

async function movieBySearch(req, res, next) {
  const searchParams = new URLSearchParams(req.query);
  let result = "";

  if (!searchParams.get("title"))
    return res.end(
      "Api end-point to handle query, please provide a query for title"
    );

  try {
    result = await getMoviesByTitle(searchParams.get("title"));
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export { movieBySearch };
