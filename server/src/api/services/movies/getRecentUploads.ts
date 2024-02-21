import Movie from "../../model/collections/Movie";

export default async function getRecentUploads() {
  const tenDaysBefore = new Date().getDate() - 10;

  const docs = await Movie.find({
    uploadDate: {
      $gte: tenDaysBefore,
    },
  })
    .sort({ uploadDate: -1 })
    .limit(10);

  return docs;
}
