import { config } from "dotenv";
config();
export default {
  domain: process.env.DOMAIN,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
};
