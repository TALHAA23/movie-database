import { getRecommandationsForUser } from "../services/users/getRecommandations";

async function recommendations(req, res, next) {
  try {
    const result = await getRecommandationsForUser(req.params.userId);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export { recommendations };
