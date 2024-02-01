import { Middleware } from "../../utils/ReqResNextType";
import getUserInfo from "../../auth/userInfo";
import { getRecommandationsForUser } from "../services/users/getRecommandations";

const recommendations: Middleware = async (req, res, next) => {
  try {
    const userUid =
      req?.cookies?.user_id ||
      (await getUserInfo(req?.cookies?.access_token)).sub;
    const result = await getRecommandationsForUser(userUid);
    console.log(result);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const userInfo: Middleware = async (req, res, next) => {
  console.log("Getting user!");
  try {
    const token = req?.cookies?.access_token;
    const info = await getUserInfo(token);
    res.json(info);
  } catch (err) {
    next(err);
  }
};

export { recommendations, userInfo };
