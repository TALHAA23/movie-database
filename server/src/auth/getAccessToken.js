import { AuthenticationClient } from "auth0";
import * as secret from "./secret";

const [domain, clientId, clientSecret] = [
  secret.default.domain,
  secret.default.clientId,
  secret.default.clientSecret,
];

const auth0 = new AuthenticationClient({
  domain,
  clientId,
  clientSecret,
});

export async function getAccessToken({ username, password }) {
  try {
    const data = await auth0.oauth.passwordGrant({
      username,
      password,
      realm: "Username-Password-Authentication",
      scope: "openid profile email offline_access",
      audience: secret.default.audience,
    });
    return data.data.access_token;
  } catch (err) {
    throw err;
  }
}

export async function getRefreshToken() {
  const data = {
    grant_type: "refresh_token",
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: storedTokenData?.refreshToken,
  };

  const response = await fetch(`https://${domain}/oauth/token`, {
    method: "post",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
  return response.data.access_token;
}
