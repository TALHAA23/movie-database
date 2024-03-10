import Movie from "../../model/collections/Movie";
export default async function getRelated(ref) {
    const refDoc = await Movie.findById(ref).select(["genre", "-_id"]);
    const result = await Movie.find({
        genre: {
            $in: refDoc?.genre,
        },
    })
        .limit(10)
        .exec();
    return result;
}
