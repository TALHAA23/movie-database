import User from "../api/model/collections/User";
export default async function getUsersFavrtList(userId) {
    try {
        const document = await User.findById(userId, "favoriteList")
            .populate("favoriteList")
            .exec();
        return document?.favoriteList || undefined;
    }
    catch (err) {
        throw err;
    }
}
