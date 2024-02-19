import { MovieInterface } from "../api/model/collections/Movie";

export default async function extractGener(documents: MovieInterface[]) {
  const findedGenre: Set<string> = new Set();
  documents.forEach((document) => {
    document.genre.forEach((genre) => findedGenre.add(genre));
  });

  return Array.from(findedGenre);
}
