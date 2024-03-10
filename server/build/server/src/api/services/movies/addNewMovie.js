import Movie from "../../model/collections/Movie";
import addMovieRefToCorrospondingActor from "./addMovieRefToCorrospondingActor";
import User from "../../model/collections/User";
export default async function addNewMovie(data) {
    const doc = new Movie(data);
    try {
        const result = await doc.save();
        await addMovieRefToCorrospondingActor(result._id, data.cast);
        await User.findByIdAndUpdate(data.userId, {
            $set: {
                "contributions.uploads": doc.id,
            },
        });
        return result;
    }
    catch (err) {
        throw err;
    }
}
