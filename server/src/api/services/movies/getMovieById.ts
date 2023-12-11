import { ObjectId } from "mongodb";
import { getCollection } from "../../../db/mongo";

export async function getMovieById(id: string) {
  const result = await getCollection("movies").findOne({
    _id: new ObjectId(id),
  });
  return result;
}
