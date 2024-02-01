import Movie from "../../model/collections/Movie";

export default async function getMovieReviews(id: string) {
  try {
    const response = await Movie.findById(id, "title reviews");
    return response;
  } catch (err) {
    throw err;
  }
}
