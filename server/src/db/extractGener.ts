import { Document, ObjectId } from "mongodb";
import { getMovieById } from "../api/services/movies/getMovieById";
export default async function extractGener(documentReference: ObjectId[]) {
  const documentsPromises = documentReference.map((reference) =>
    getMovieById(reference.toString())
  );

  const documents = await Promise.all(documentsPromises);

  const extractedGeners = documents.map((document) => {
    return new RegExp(`^${document?.genre}$`, "i");
  });
  return extractedGeners;
}
