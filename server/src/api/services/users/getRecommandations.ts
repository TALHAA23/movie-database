// File: getRecommandationsForUser.ts
import Movie from "../../model/collections/Movie";
import getUsersFavrtList from "../../../db/getUserFavrtList";
import extractGener from "../../../db/extractGener";
import { getRandomMovies } from "../movies/getRandomMovies";

export async function getRecommandationsForUser(userId: string) {
  console.log("Hy", userId);
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
    result.map((document, index) => {
      document.hasMore = index == result.length - 1 ? false : true;
    });
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
