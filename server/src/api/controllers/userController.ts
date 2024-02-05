import { Middleware } from "../../utils/ReqResNextType";
import getUserInfo from "../../auth/userInfo";
import { getRecommandationsForUser } from "../services/users/getRecommandations";
import { MovieStatus } from "../../../../shared/shared.interfaces";
import errorThrower from "../../../../shared/errorThrower";
import HttpError from "../../../../shared/httpErrorsEnum";
import manageUserMovies from "../services/users/manageUserMovies";
import { error } from "console";

const recommendations: Middleware = async (req, res, next) => {
  try {
    const userUid =
      req?.cookies?.user_id ||
      (await getUserInfo(req?.cookies?.access_token)).sub;
    const result = await getRecommandationsForUser(userUid);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const userInfo: Middleware = async (req, res, next) => {
  try {
    const token = req?.cookies?.access_token;
    const info = await getUserInfo(token);
    res.json(info);
  } catch (err) {
    next(err);
  }
};

const manageMyMovies: Middleware = async (req, res, next) => {
  try {
    const { markTo } = req.query;
    const userId = req.cookies.user_id;
    if (!markTo) throw errorThrower("Incomplete URL", HttpError.BadRequest);
    if (!userId) throw errorThrower("Invalid User ID", HttpError.Forbidden);
    const body = req.body;
    if (!("movieRef" in body))
      throw errorThrower("Incompelete Date", HttpError.UnprocessableEntity);
    const result = await manageUserMovies({
      movieRef: body.movieRef,
      userRef: userId,
      fieldToUpdate: markTo.toString(),
    });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export { recommendations, userInfo, manageMyMovies };
