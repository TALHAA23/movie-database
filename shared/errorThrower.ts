import HttpError from "./httpErrorsEnum";

export default function errorThrower(message: string, errorName: HttpError) {
  const error = new Error();
  error.message = message;
  error.name = errorName.toString();
  return error;
}
