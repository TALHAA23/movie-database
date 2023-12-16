import createUser from "../../auth/createUser";
import { getAccessToken, getRefreshToken } from "../../auth/getAccessToken";
import getUserInfo from "../../auth/userInfo";
async function signupUser(req, res, next) {
  try {
    const newUser = await createUser();
    res.json(newUser);
  } catch (err) {
    next(err);
  }
}
async function loginUser(req, res, next) {
  const creds = req.body;
  const token = await getAccessToken(creds);
  try {
    res.cookie("access_token", token, {
      httpOnly: true,
      secure: true,
    });
    res.send("cookie set");
  } catch (err) {
    next(err);
  }
}

async function refreshToken(req, res, next) {
  try {
    const refreshedToken = await getRefreshToken();
    console.log(refreshedToken);
    res.json({ refreshToken: refreshedToken });
  } catch (err) {
    next(err);
  }
}

async function userInfo(req, res, next) {
  try {
    const result = await getUserInfo();
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export { signupUser, loginUser, userInfo, refreshToken };
