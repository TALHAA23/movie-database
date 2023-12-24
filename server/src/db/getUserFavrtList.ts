// File: getUserFavrtList.ts
import User from "../api/model/collections/User";

export default async function getUsersFavrtList(userId: string) {
  try {
    const document = await User.findById(userId, "favoriteMovies").exec();
    console.log(document);
    return document?.favoriteList;
  } catch (err) {
    throw err;
  }
}
