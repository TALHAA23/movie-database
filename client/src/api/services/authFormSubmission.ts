import * as validator from "../../../../shared/validator";
import { FormEvent } from "react";
import loginApi from "../loginApi";
import signupApi from "../signupApi";

export default async function authFormSubmission(
  event: FormEvent<HTMLFormElement>
) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const password = formData.get("password") as string;
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;

  try {
    validator.emailValidator(email);
    validator.passwordValidator(password);
  } catch (err) {
    throw err;
  }

  try {
    const response = username
      ? await signupApi({ username, password, email })
      : await loginApi({ password, username: email });
    console.log(response);
    return response;
  } catch (err) {
    throw err;
  }
}
