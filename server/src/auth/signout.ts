import errorThrower from "../../../shared/errorThrower";
import HttpError from "../../../shared/httpErrorsEnum";
import secret from "./secret";
export default async function signout(accessToken: string | null) {
  if (!accessToken) {
    throw errorThrower("Missing access token", HttpError.Forbidden);
  }
  try {
    const response = await fetch(
      `https://${secret.domain}/v2/logout?&client_id=${secret.clientId}`
    );

    console.log(response);
    return { success: true };
  } catch (err) {
    throw err;
  }
}
