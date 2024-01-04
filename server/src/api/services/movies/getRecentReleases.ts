import mongoose from "mongoose";
import Movie from "../../model/collections/Movie";

export default async function getRecentReleases() {
  const now = new Date();
  const minReleaseDate = new Date();
  minReleaseDate.setFullYear(now.getFullYear() - 25);

  const cursor = await Movie.findOne({
    rating: {
      $gte: 8,
    },
  });
  const data = cursor?.releaseDate;
  console.log(data);
}
