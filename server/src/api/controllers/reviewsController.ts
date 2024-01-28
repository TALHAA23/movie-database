import { Middleware } from "../../utils/ReqResNextType";
import addReviewToMovie from "../services/movies/addReviewToMovie";

const newReview: Middleware = async (req, res, next) => {
  const body = req.body;
  try {
    const result = await addReviewToMovie(body);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export { newReview };
