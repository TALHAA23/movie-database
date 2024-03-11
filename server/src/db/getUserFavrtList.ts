import { MovieInterface } from "../api/model/collections/Movie";
import User from "../api/model/collections/User";

export default async function getUsersFavrtList(
  userId: string
): Promise<MovieInterface[] | undefined> {
  try {
    const document = await User.findById(userId, "favoriteList")
      .populate("favoriteList")
      .exec();

    return (document?.favoriteList as unknown as MovieInterface[]) || undefined;
  } catch (err) {
    throw err;
  }
}
