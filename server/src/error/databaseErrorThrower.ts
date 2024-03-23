import mongoose from "mongoose";

export default function handleMongooseError(mongooseError: mongoose.Error) {
  const MongooseErrors = {
    defaultError: {
      message: "Database Error, Please Try Later ",
      statusCode: 500,
      name: "MongooseError",
    },
    CastError: {
      message: "The value or Id provided for the field is invalid.",
      statusCode: 400,
      name: "CastError",
    },
    ValidationError: {
      message: "One or more fields failed validation.",
      statusCode: 422,
      name: "ValidationError",
    },
    VersionError: {
      message: "The document was modified by another query after it was read.",
      statusCode: 409,
      name: "VersionError",
    },
    OverwriteModelError: {
      message: "Attempted to overwrite a model that was already defined.",
      statusCode: 500,
      name: "OverwriteModelError",
    },
    MissingSchemaError: {
      message: "The schema was not provided for the model.",
      statusCode: 500,
      name: "MissingSchemaError",
    },
    DivergentArrayError: {
      message: "Arrays with discriminators do not support certain operations.",
      statusCode: 500,
      name: "DivergentArrayError",
    },
    ObjectExpectedError: {
      message: "The value provided is not an object.",
      statusCode: 400,
      name: "ObjectExpectedError",
    },
    ObjectParameterError: {
      message: "The parameter provided is not an object.",
      statusCode: 400,
      name: "ObjectParameterError",
    },
    StrictModeError: {
      message: "Field not included in schema was provided.",
      statusCode: 400,
      name: "StrictModeError",
    },
    TimeoutError: {
      message: "The operation timed out.",
      statusCode: 408,
      name: "TimeoutError",
    },
  };
  const errorInfo =
    MongooseErrors[mongooseError.name as keyof typeof MongooseErrors];
  if (!errorInfo) return MongooseErrors.defaultError;
  return errorInfo;
}
