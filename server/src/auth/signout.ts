import errorThrower from "../../../shared/errorThrower";
import HttpError from "../../../shared/httpErrorsEnum";
import { UserInfoResponse } from "auth0";
import secret from "./secret";
export default async function signout(accessToken: string | null) {
  if (!accessToken) {
    throw errorThrower("Missing access token", HttpError.Forbidden);
  }
  try {
    await fetch(
      `https://${secret.domain}/v2/logout?&client_id=${secret.clientId}`
    );

    return true;
  } catch (err) {
    throw err;
  }
}
