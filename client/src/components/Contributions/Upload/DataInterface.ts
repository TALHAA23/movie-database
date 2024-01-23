interface DataInterface {
  title: string;
  desc: string;
  cast: [string];
  genre: [string];
  releaseYear?: number;
  releaseDate?: Date;
  runTime?: number;
  tagline?: string;
  creator?: string;
  language?: string;
  countryOfOrigin?: string;
}
type Key =
  | "isTitleValid"
  | "isDescValid"
  | "isCastValid"
  | "isGenre"
  | "isReleaseYearValid"
  | "isReleaseDateValid"
  | "isRunTimeValid";

interface DataValidationInterface {
  isTitleValid: boolean | string;
  isDescValid: boolean | string;
  isCastValid: boolean | string;
  isGenreValid: boolean | string;
  isReleaseYearValid: boolean | string;
  isReleaseDateValid: boolean | string;
  isRunTimeValid: boolean | string;
  isBannerValid: boolean | string;
}

export type { DataInterface, Key, DataValidationInterface };
