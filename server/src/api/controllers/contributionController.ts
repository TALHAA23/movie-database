import { Middleware } from "../../utils/ReqResNextType";
import updateMovieByFillingMissingInfo from "../services/movies/updateMovieByFillingMissingInfo";
import uploadBanner from "../services/movies/uploadBanner";

const fillHoles: Middleware = async (req, res, next) => {
  try {
    const body = req.body;
    if ("cast" in body) body.cast = JSON.parse(body.cast);
    if ("banner" in body) {
      const { fileName, url } = body.banner;
      const downloadURL = await uploadBanner(fileName, url);
      body.banner = downloadURL;
    }
    const result = await updateMovieByFillingMissingInfo(body);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export { fillHoles };
