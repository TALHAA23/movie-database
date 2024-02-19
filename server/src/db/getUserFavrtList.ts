import User from "../api/model/collections/User";

export default async function getUsersFavrtList(userId: string) {
  try {
    const document = await User.findById(userId, "favoriteList")
      .populate("favoriteList")
      .exec();
    return document?.favoriteList;
  } catch (err) {
    throw err;
  }
}
