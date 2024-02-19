// File: getRecommandationsForUser.ts
import Movie, { MovieInterface } from "../../model/collections/Movie";
import getUsersFavrtList from "../../../db/getUserFavrtList";
import extractGener from "../../../db/extractGener";
import { getRandomMovies } from "../movies/getRandomMovies";

export async function getRecommandationsForUser(userId: string) {
  try {
    const documents = await getUsersFavrtList(userId);
    if (!documents?.length) {
      const randomMovies = await getRandomMovies();
      return randomMovies;
    }
    const extractGeners = await extractGener(documents);
    const result = await Movie.find({
      genre: { $in: extractGeners },
    })
      .limit(10)
      .exec();
    return result;
  } catch (err) {
    throw err;
  }
}
