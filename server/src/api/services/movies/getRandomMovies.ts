// $match {feild:{$ne:"feild vale"}} to exclude certin section.
import { getCollection } from "../../../db/mongo";

export async function getRandomMovies() {
  const documents = getCollection("movies").aggregate([
    {
      $sample: { size: 5 },
    },
    {
      $project: { title: 1 },
    },
  ]);

  const result = await documents.toArray();
  result.map((document, index) => {
    document.hasMore = index == result.length - 1 ? false : true;
  });
  return result;
}
