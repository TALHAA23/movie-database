import { ChangeEvent } from "react";
import { Key } from "./DataInterface";

const validateData = (key: Key, value: any): string | true => {
  if (key == "isTitleValid") return value ? true : "Title can't be null";
  else if (
    key == "isReleaseYearValid" &&
    (!value || +value < 1900 || +value > 2050)
  )
    return `${value} is out of range i.e 1900-${new Date().getFullYear() + 20}`;
  else if (key == "isCastValid" && (!value || value.length < 3))
    return "Add atleast three lead cast";
  else if (key == "isDescValid" && !value) return "Description is required";
  else if (key == "isGenreValid" && (!value || value.length < 3))
    return "Add atleast three related genre";
  else if (key == "isRunTimeValid" && (!value || value < 10 || value > 200))
    return `Run time is out of range .i.e 10-200 minutes`;
  else return true;
};
const MAX_SIZE_IN_BYTES = 3000000; //3MB
const validateFile = (event: ChangeEvent<HTMLInputElement>): string | true => {
  const files = event.target.files;
  if (!files?.length) return "File not selected";
  const file = files[0];
  if (file.type != "image/jpeg") {
    event.target.value = "";
    return "Banner should be of type .jpeg";
  } else if (file.size > MAX_SIZE_IN_BYTES) {
    event.target.value = "";
    return "Banner should be max 3MB";
  }
  return true;
};

export { validateData, validateFile };
