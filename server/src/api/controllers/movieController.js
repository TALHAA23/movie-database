import { getMovieById } from "../services/movies/getMovieById";
import { getTopRatedMovie } from "../services/movies/getTopRatedMovies";
import { getRandomMovies } from "../services/movies/getRandomMovies";
async function movieById(req, res, next) {
  const id = req.params.id;
  try {
    const result = await getMovieById(id);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function topRatedMovies(req, res, next) {
  const ratingQuery = parseInt(req.query.rating);
  try {
    const result = await getTopRatedMovie(ratingQuery || undefined);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function randomMovies(req, res, next) {
  try {
    const result = await getRandomMovies();
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export { movieById, topRatedMovies, randomMovies };
