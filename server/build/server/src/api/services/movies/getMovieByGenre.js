import Movie from "../../model/collections/Movie";
export default async function getMovieByGenre(genreType) {
    const docs = await Movie.find({
        genre: {
            $in: [new RegExp(genreType, "i")],
        },
    })
        .populate("cast", "name")
        .exec();
    return docs;
}
