import { auth } from "express-oauth2-jwt-bearer";
import secret from "./secret";
const jwtCheck = auth({
  audience: "movie-database-api-endpoints",
  issuerBaseURL: "https://dev-n1afgdpjriklak3u.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

const jwtCheckMiddleware = (req, res, next) => {
  if (req.path.includes("/protected")) return jwtCheck(req, res, next);

  next();
};

export { jwtCheckMiddleware };
