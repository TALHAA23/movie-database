import { DataInterface, DataValidationInterface } from "./DataInterface";
export default function validateAll(
  data: DataValidationInterface
): false | string {
  if (!data.isTitleValid || typeof data.isTitleValid == "string") {
    return "Title is required.";
  }
  if (!data.isDescValid || typeof data.isDescValid == "string") {
    return "Description is required.";
  }
  if (!data.isCastValid || typeof data.isCastValid == "string") {
    return "Cast should be at least 3 elements long.";
  }
  if (!data.isGenreValid || typeof data.isGenreValid == "string") {
    return "Genre should be at least 3 elements long.";
  }
  if (data.isReleaseDateValid || typeof data.isReleaseDateValid == "string") {
    return "Release year should be between 1900 and 2050.";
  }
  if (data.isRunTimeValid || typeof data.isRunTimeValid == "string") {
    return "Run time should be between 10 and 200.";
  }
  return false; //no error
  // if (!data.title) {
  //   return "Title is required.";
  // }
  // if (!data.desc) {
  //   return "Description is required.";
  // }
  // if (!data.cast || data.cast.length < 3) {
  //   return "Cast should be at least 3 elements long.";
  // }
  // if (!data.genre || data.genre.length < 3) {
  //   return "Genre should be at least 3 elements long.";
  // }
  // if (
  //   data.releaseYear &&
  //   (data.releaseYear < 1900 || data.releaseYear > 2050)
  // ) {
  //   return "Release year should be between 1900 and 2050.";
  // }
  // if (data.runTime && (data.runTime < 10 || data.runTime > 200)) {
  //   return "Run time should be between 10 and 200.";
  // }
  // return false; //no error
}
