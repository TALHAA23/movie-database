import errorThrower from "../../../shared/errorThrower";
import HttpError from "../../../shared/httpErrorsEnum";
export default async function getUserInfo(accessToken) {
    if (!accessToken) {
        throw errorThrower("Missing access token", HttpError.Forbidden);
    }
    try {
        const response = await fetch("https://dev-n1afgdpjriklak3u.us.auth0.com/userinfo", {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        const data = await response.json();
        return data;
    }
    catch (err) {
        throw err;
    }
}
