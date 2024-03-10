import Movie from "../../model/collections/Movie";
import errorThrower from "../../../../../shared/errorThrower";
import HttpError from "../../../../../shared/httpErrorsEnum";
export default async function addMovieRating(payload) {
    console.log(payload);
    try {
        const doc = await Movie.findById(payload.movieRef, "ratings title");
        if (!doc)
            throw errorThrower("Movie not found", HttpError.NotFound);
        // Find the index of the rating by the user
        const index = doc.ratings.findIndex((rating) => {
            return rating?.rateBy === payload.userId;
        });
        if (index !== -1) {
            // If a rating by the user exists, update it
            doc.ratings[index].rating = payload.rating;
        }
        else {
            // If no rating by the user exists, create a new one
            doc.ratings.push({ rateBy: payload.userId, rating: payload.rating });
        }
        await doc.save();
        return { addedTo: doc.title };
    }
    catch (err) {
        throw err;
    }
}
