import { ManagementClient } from "auth0";
import * as secret from "./secret";
import * as validator from "../../../shared/validator";
interface Creds {
  readonly username: string;
  readonly email: string;
  readonly password: string;
}

const managment = new ManagementClient({
  domain: secret.default.domain as string,
  clientId: secret.default.clientId as string,
  clientSecret: secret.default.clientSecret as string,
});

export default async function createUser(creds: Creds) {
  try {
    validator.emailValidator(creds.email);
    validator.passwordValidator(creds.password);
    const user = await managment.users.create({
      connection: "Username-Password-Authentication",
      ...creds,
    });
    return user.data;
  } catch (err) {
    throw err;
  }
}
