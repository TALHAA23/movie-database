import { getMovieById } from "../services/movies/getMovieById";
import { getTopRatedMovie } from "../services/movies/getTopRatedMovies";
import { getRandomMovies } from "../services/movies/getRandomMovies";
import { Types } from "mongoose";
import errorThrower from "../../../../shared/errorThrower";
import HttpError from "../../../../shared/httpErrorsEnum";
import getRecentReleases from "../services/movies/getRecentReleases";
import getRelated from "../services/movies/getRelated";
import uploadBanner from "../services/movies/uploadBanner";
import castToCastRef from "../services/movies/addNewMovie";
import findActors from "../services/movies/castToCastRef";
import getMovieReviews from "../services/movies/getMovieReviews";
import addReviewRating from "../services/movies/addReviewRating";
import addMovieRating from "../services/movies/addMovieRating";
import getCastById from "../services/movies/getCastById";
import getRecentUploads from "../services/movies/getRecentUploads";
import getByRandomYear from "../services/movies/getByRandomYear";
import getMovieByGenre from "../services/movies/getMovieByGenre";
const movieById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const mongodbObjectId = new Types.ObjectId(id);
        const result = await getMovieById(mongodbObjectId);
        res.json(result);
    }
    catch (err) {
        next(err);
    }
};
const castById = async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    try {
        const result = await getCastById(id);
        res.json(result);
    }
    catch (err) {
        next(err);
    }
};
const topRatedMovies = async (req, res, next) => {
    const ratingQuery = req?.query?.rating;
    try {
        if (typeof ratingQuery != "string")
            throw errorThrower("Invalid Query Type", HttpError.NotAcceptable);
        const result = await getTopRatedMovie(parseInt(ratingQuery) || undefined);
        res.json(result);
    }
    catch (err) {
        next(err);
    }
};
const randomMovies = async (req, res, next) => {
    try {
        const result = await getRandomMovies();
        res.json(result);
    }
    catch (err) {
        next(err);
    }
};
const newReleases = async (req, res, next) => {
    getRecentReleases();
    res.end("Done");
};
const related = async (req, res, next) => {
    const id = req.params.id;
    const mongodbObjectId = new Types.ObjectId(id);
    try {
        const result = await getRelated(mongodbObjectId);
        res.json(result);
    }
    catch (err) {
        next(err);
    }
};
const newMovie = async (req, res, next) => {
    const body = req.body;
    const { banner, cast } = req.body;
    try {
        const fileDownloadURL = await uploadBanner(banner.fileName, banner.url);
        const actorNamesToDocRef = await findActors(cast);
        const updatedData = {
            ...body,
            banner: fileDownloadURL,
            cast: actorNamesToDocRef,
        };
        const result = await castToCastRef(updatedData);
        res.json({ success: true });
    }
    catch (err) {
        next(err);
    }
};
const movieReviews = async (req, res, next) => {
    const id = req.params.id;
    try {
        const result = await getMovieReviews(id);
        res.json(result);
    }
    catch (err) {
        next(err);
    }
};
const publishRating = async (req, res, next) => {
    const userId = req?.cookies?.user_id;
    const id = req.params.id;
    const query = req.query.on;
    if (!userId)
        throw errorThrower("UserId not provided", HttpError.BadRequest);
    if (!query || !/movie|review/g.test(query.toString()))
        throw errorThrower("Invalid URL", HttpError.UnprocessableEntity);
    const { action, rating, reviewRef } = req.body;
    try {
        const result = action == "publish-rating-on-review"
            ? await addReviewRating({
                userId,
                movieRef: id,
                reviewRef,
                rating,
            })
            : addMovieRating({ movieRef: id, rating, userId });
        res.json(result);
    }
    catch (err) {
        next(err);
    }
};
const movieByRandomYear = async (req, res, next) => {
    try {
        const result = await getByRandomYear();
        res.json(result);
    }
    catch (err) {
        next(err);
    }
};
const recentUploads = async (req, res, next) => {
    try {
        const result = await getRecentUploads();
        res.json(result);
    }
    catch (err) {
        next(err);
    }
};
const movieByGenre = async (req, res, next) => {
    try {
        const { q } = req.query;
        if (!q)
            throw errorThrower("Query not provided", HttpError.BadRequest);
        const result = await getMovieByGenre(q.toString());
        res.json(result);
    }
    catch (err) {
        next(err);
    }
};
export { movieById, castById, topRatedMovies, randomMovies, newReleases, related, newMovie, movieReviews, publishRating, recentUploads, movieByRandomYear, movieByGenre, };
