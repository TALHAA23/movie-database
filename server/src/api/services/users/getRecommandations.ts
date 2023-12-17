// File: getRecommandationsForUser.ts
import User from "../../model/collections/User";
import Movie from "../../model/collections/Movie";
import getUsersFavrtList from "../../../db/getUserFavrtList";
import extractGener from "../../../db/extractGener";
import { getRandomMovies } from "../movies/getRandomMovies";

export async function getRecommandationsForUser(userId: string) {
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
  return result;
}

// import { ObjectId } from "mongodb";
// import getUsersFavrtList from "../../../db/getUserFavrtList";
// import extractGener from "../../../db/extractGener";
// import { getRandomMovies } from "../movies/getRandomMovies";
// import { getCollection } from "../../../db/mongo";
// import addHasMore from "../../../utils/addHasMore";

// export async function getRecommandationsForUser(userId: ObjectId) {
//   const documents = await getUsersFavrtList(userId);
//   if (!documents.length) {
//     const randomMovies = await getRandomMovies();
//     return randomMovies;
//   }
//   const extractGeners = await extractGener(documents);
//   const recommandations = getCollection("movies")
//     .find({
//       genre: {
//         $in: extractGeners,
//       },
//     })
//     .limit(10);

//   const result = await recommandations.toArray();
//   addHasMore(result);

//   return result;
// }
