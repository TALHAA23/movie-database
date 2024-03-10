import User from "../../model/collections/User";
export default async function addUserToDb({ email, user_id, username, created_at, }) {
    const user = new User({
        _id: user_id,
        userInfo: { email, username, created_at },
    });
    try {
        const newUser = await user.save();
        return { _id: newUser.id, ...newUser.userInfo };
    }
    catch (err) {
        throw err;
    }
}
