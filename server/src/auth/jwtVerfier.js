import { config } from "dotenv";
import { auth } from "express-oauth2-jwt-bearer";
import * as secret from "./secret";
config();
const jwtCheck = auth({
  audience: secret.default.audience,
  issuer: secret.default.issure,
  jwksUri: secret.default.jwkUri,
  tokenSigningAlg: "RS256",
});

const jwtCheckMiddleware = (req, res, next) => {
  if (req.path.includes("/protected")) {
    const token = req.cookies.access_token;
    if (!token) throw new Error("unauthorized");
    req.headers["authorization"] = `Bearer ${token}`;
    return jwtCheck(req, res, next);
  }
  next();
};

export { jwtCheckMiddleware };
