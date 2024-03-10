import createUser from "../../auth/createUser";
import { getAccessToken, getRefreshToken } from "../../auth/getAccessToken";
import getUserInfo from "../../auth/userInfo";
import addUserToDb from "../services/users/addUserToDb";
const signupUser = async (req, res, next) => {
    const creds = req.body;
    try {
        const newUser = await createUser(creds);
        const { created_at, email, user_id, username } = newUser;
        const insertedUser = await addUserToDb({
            created_at,
            email,
            user_id,
            username,
        });
        res.json(insertedUser);
    }
    catch (err) {
        next(err);
    }
};
const loginUser = async (req, res, next) => {
    const creds = req.body;
    console.log(creds);
    try {
        const token = await getAccessToken(creds);
        const userInfo = await getUserInfo(token);
        res.cookie("access_token", token, {
            httpOnly: true,
            secure: true,
        });
        res.cookie("user_id", userInfo.sub, {
            httpOnly: true,
            secure: true,
        });
        res.json(userInfo);
    }
    catch (err) {
        next(err);
    }
};
const refreshToken = async (req, res, next) => {
    try {
        const refreshedToken = await getRefreshToken();
        console.log(refreshedToken);
        res.json({ refreshToken: refreshedToken });
    }
    catch (err) {
        next(err);
    }
};
const userInfo = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        const result = await getUserInfo(token);
        res.json(result);
    }
    catch (err) {
        next(err);
    }
};
export { signupUser, loginUser, userInfo, refreshToken };
