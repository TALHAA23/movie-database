import { config } from "dotenv";
config();
export default {
    domain: process.env.DOMAIN,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    issure: process.env.ISSUER,
    audience: process.env.AUDIENCE,
    jwkUri: process.env.JWKS_URI,
};
