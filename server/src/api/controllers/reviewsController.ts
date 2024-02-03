import errorThrower from "../../../../shared/errorThrower";
import HttpError from "../../../../shared/httpErrorsEnum";
import { Middleware } from "../../utils/ReqResNextType";
import addReviewToMovie from "../services/movies/addReviewToMovie";

const newReview: Middleware = async (req, res, next) => {
  const userId = req?.cookies?.user_id;

  const body = req.body;
  console.log(userId);
  if (!userId) throw errorThrower("Bad Request", HttpError.BadRequest);
  try {
    const result = await addReviewToMovie({ ...body, userId });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export { newReview };
