import { ObjectId } from "mongodb";
import getUsersFavrtList from "../../../db/getUserFavrtList";
import extractGener from "../../../db/extractGener";
import { getRandomMovies } from "../movies/getRandomMovies";
import { getCollection } from "../../../db/mongo";
import addHasMore from "../../../utils/addHasMore";

export async function getRecommandationsForUser(userId: ObjectId) {
  const documents = await getUsersFavrtList(userId);
  if (!documents.length) {
    const randomMovies = await getRandomMovies();
    return randomMovies;
  }
  const extractGeners = await extractGener(documents);
  const recommandations = getCollection("movies")
    .find({
      genre: {
        $in: extractGeners,
      },
    })
    .limit(10);

  const result = await recommandations.toArray();
  addHasMore(result);

  return result;
}
