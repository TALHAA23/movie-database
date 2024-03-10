import { Types } from "mongoose";
import User, { UserSchema } from "../../model/collections/User";
const convertFieldToUpdateToSchemaField = (field) => {
    if (field == "mark-as-watch-later")
        return "watchList";
    else if (field == "mark-as-watched")
        return "watched";
    else if (field == "mark-as-favrt")
        return "favoriteList";
    else
        throw new Error("Invalid Field Value");
};
export default async function manageUserMovies({ userRef, movieRef, fieldToUpdate, }) {
    const key = convertFieldToUpdateToSchemaField(fieldToUpdate);
    if (UserSchema.pathType(key) !== "real")
        throw new Error("Invalid Key");
    try {
        const doc = await User.findById(userRef);
        if (!doc)
            throw new Error("Movie do not exist");
        doc
            .updateOne({
            $addToSet: {
                [key]: new Types.ObjectId(movieRef),
            },
        })
            .exec();
        return { success: true };
    }
    catch (err) {
        throw err;
    }
}
