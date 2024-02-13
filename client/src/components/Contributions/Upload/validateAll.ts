import { DataValidationInterface } from "./DataInterface";
export default function validateAll(
  data: DataValidationInterface
): false | string {
  if (!data.isTitleValid || typeof data.isTitleValid == "string") {
    return "Title is required.";
  }
  if (!data.isReleaseYearValid || typeof data.isReleaseYearValid == "string") {
    return `Release year should be between 1900 and ${
      new Date().getFullYear() + 20
    }`;
  }
  if (!data.isDescValid || typeof data.isDescValid == "string") {
    return "Description is required.";
  }
  if (!data.isRunTimeValid || typeof data.isRunTimeValid == "string") {
    return "Run can be 10-200";
  }
  if (!data.isGenreValid || typeof data.isGenreValid == "string") {
    return "Genre should be at least 3 elements long.";
  }
  if (!data.isCastValid || typeof data.isCastValid == "string") {
    return "Cast should be at least 3 elements long.";
  }
  if (!data.isBannerValid || typeof data.isBannerValid == "string") {
    return "Attach movie image";
  }

  return false; //no error
}
