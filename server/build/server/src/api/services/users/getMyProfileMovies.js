import User, { UserSchema } from "../../model/collections/User";
export default async function getMyProfileMovies(userId, projection) {
    try {
        if (UserSchema.pathType(projection) !== "real")
            throw new Error("Invalid Key");
        const doc = await User.findById(userId, `${projection}`).populate(projection);
        console.log(doc);
        return doc;
    }
    catch (err) {
        throw err;
    }
}
