import Actor from "../../model/Actor";

export default async function getCastById(id: string) {
  try {
    const doc = await Actor.findById(id)
      .populate("knownFor")
      .populate("movies.upcoming")
      .populate("movies.previousMovies");
    return doc;
  } catch (err) {
    throw err;
  }
}
