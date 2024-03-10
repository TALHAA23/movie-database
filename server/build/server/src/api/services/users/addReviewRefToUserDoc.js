import User from "../../model/collections/User";
export default async function addReviewRefToUserDoc(userId, movieRef, reviewRef) {
    try {
        await User.updateOne({
            _id: userId,
        }, {
            $addToSet: {
                myReviews: { movieRef, reviewRef },
            },
        });
    }
    catch (err) {
        throw err;
    }
}
