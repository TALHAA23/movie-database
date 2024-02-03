import Movie from "../../model/collections/Movie";

export default async function getMovieReviews(id: string) {
  try {
    const response = await Movie.findById(id, "title reviews")
      .populate("reviews.reviewedBy", "userInfo.username")
      .exec();
    return response;
  } catch (err) {
    throw err;
  }
}
