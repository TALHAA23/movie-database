import errorThrower from "./errorThrower";
import HttpError from "./httpErrorsEnum";
function passwordValidator(password: string): true {
  const validation = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  console.log("password validation");
  if (!validation.test(password))
    throw errorThrower(
      "Must include all things",
      HttpError.UnprocessableEntity
    );
  return true;
}

type Email = string;

function emailValidator(email: Email): true {
  const validation =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!validation.test(email)) throw new Error("Invalid Password");

  return true;
}

export { passwordValidator, emailValidator };
