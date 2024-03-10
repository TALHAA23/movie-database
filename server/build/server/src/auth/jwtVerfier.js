import { config } from "dotenv";
import { auth } from "express-oauth2-jwt-bearer";
import * as secret from "./secret";
import HttpError from "../../../shared/httpErrorsEnum";
import errorThrower from "../../../shared/errorThrower";
config();
const jwtCheck = auth({
    audience: secret.default.audience,
    issuer: secret.default.issure,
    jwksUri: secret.default.jwkUri,
    tokenSigningAlg: "RS256",
});
const jwtCheckMiddleware = (req, res, next) => {
    if (req.path.includes("/protected")) {
        const token = req?.cookies?.access_token;
        if (!token)
            throw errorThrower("unauthorized", HttpError.Unauthorized);
        req.headers["authorization"] = `Bearer ${token}`;
        return jwtCheck(req, res, next);
    }
    next();
};
export { jwtCheckMiddleware };
