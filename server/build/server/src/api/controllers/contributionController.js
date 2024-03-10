import errorThrower from "../../../../shared/errorThrower";
import HttpError from "../../../../shared/httpErrorsEnum";
import updateMovieByFillingMissingInfo from "../services/movies/updateMovieByFillingMissingInfo";
import uploadBanner from "../services/movies/uploadBanner";
const fillHoles = async (req, res, next) => {
    try {
        const userId = req.cookies.user_id;
        const body = req.body;
        if (!userId)
            throw errorThrower("Id not provided", HttpError.BadRequest);
        if ("cast" in body)
            body.cast = JSON.parse(body.cast);
        if ("banner" in body) {
            const { fileName, url } = body.banner;
            const downloadURL = await uploadBanner(fileName, url);
            body.banner = downloadURL;
        }
        const result = await updateMovieByFillingMissingInfo({ ...body, userId });
        res.json(result);
    }
    catch (err) {
        next(err);
    }
};
export { fillHoles };
