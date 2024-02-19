import errorThrower from "../../../../shared/errorThrower";
import HttpError from "../../../../shared/httpErrorsEnum";
import { Middleware } from "../../utils/ReqResNextType";
import addReviewToMovie from "../services/movies/addReviewToMovie";
import getUserReviews from "../services/users/getUserReviews";

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

const myReviews: Middleware = async (req, res, next) => {
  const userId = req.query.of;
  try {
    if (!userId)
      throw errorThrower("User id not provided", HttpError.BadRequest);
    console.log(userId);
    const result = await getUserReviews(userId.toString());
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export { myReviews, newReview };
