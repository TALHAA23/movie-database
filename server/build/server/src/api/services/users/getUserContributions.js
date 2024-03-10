import User from "../../model/collections/User";
export default async function getUserContributions(userId) {
    try {
        const doc = await User.findById(userId, "contributions")
            .populate("contributions.uploads")
            .populate("contributions.addOns.ref", "title");
        return doc;
    }
    catch (err) {
        throw err;
    }
}
