import errorThrower from "../../../../../shared/errorThrower";
import HttpError from "../../../../../shared/httpErrorsEnum";
import objectToArray from "../../../utils/objectToArray";
import Actor, { ActorSchema } from "../../model/Actor";
import Movie, { MovieSchema } from "../../model/collections/Movie";
import User from "../../model/collections/User";
import castToCastRef from "./castToCastRef";
export default async function updateMovieByFillingMissingInfo(data) {
    const { _id, actionOn, userId } = data;
    //delete to avoid key validation error
    delete data.actionOn;
    delete data.userId;
    try {
        if ("cast" in data)
            data.cast = await castToCastRef(data.cast);
        validateKeysAgainstSchema(actionOn, data);
        const doc = await getDoc(actionOn, _id);
        for (let [key, value] of objectToArray(data))
            doc[key] = value; //update
        await doc?.save({
            validateBeforeSave: false,
        });
        await updateUserAddOnesByCreatingNewOrPushToExisting(userId, data);
        return { success: true };
    }
    catch (err) {
        throw err;
    }
}
const getDoc = (actionOn, _id) => actionOn == "movie" ? Movie.findById(_id) : Actor.findById(_id);
const validateKeysAgainstSchema = (actionOn, data) => {
    const keys = Object.keys(data);
    for (let key of keys)
        if ((actionOn == "movie" && MovieSchema.pathType(key) !== "real") ||
            (actionOn == "actor" && ActorSchema.pathType(key) !== "real"))
            throw errorThrower("Invalid Key catched", HttpError.UnprocessableEntity);
};
const updateUserAddOnesByCreatingNewOrPushToExisting = async (userId, data) => {
    const { _id } = data;
    delete data._id; //not required
    const user = await User.findById(userId);
    const userAddOns = user?.contributions?.addOns || [];
    const findIndex = userAddOns?.findIndex((addOn) => addOn.ref?.toString() == _id);
    console.log(findIndex);
    if (findIndex !== -1)
        userAddOns[findIndex].additionalProps.push(...Object.keys(data));
    else
        user?.contributions?.addOns.push({
            ref: _id,
            additionalProps: Object.keys(data),
        });
    console.log(userAddOns);
    await user?.save();
};
