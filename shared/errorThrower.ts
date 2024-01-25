import HttpError from "./httpErrorsEnum";

export default function errorThrower(message: string, errorName: HttpError) {
  console.log("CUSTOM ERROR");
  const error = new Error();
  error.message = message;
  error.name = HttpError[errorName];
  return error;
}
