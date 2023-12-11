import { ObjectId } from "mongodb";
import { getCollection } from "./mongo";

export default async function getUsersFavrtList(userId: ObjectId) {
  const document = await getCollection("users").findOne(
    {
      _id: new ObjectId(userId),
    },
    {
      projection: { favoriteMovies: 1, _id: 0 },
    }
  );
  return document?.favoriteMovies;
}
