import { ReactElement } from "react";
import { ActorInterface, MovieInterface } from "../../../api/model/Interfaces";
import FormFields from "./FormFields";

export default function CreateInputForMissingFeilds(
  movie: MovieInterface | ActorInterface
) {
  const keyOfMissingInformation: ReactElement[] = [];
  FormFields.map((field) => {
    const feildValue =
      movie[field.fieldName as keyof (MovieInterface | ActorInterface)];
    const isFeildInvalid = validateFeildValue(feildValue);
    if (feildValue && isFeildInvalid && field.fieldName in movie)
      keyOfMissingInformation.push(field.element());
    else if (!feildValue && field.fieldName in movie)
      // TODO: code need to be  resolved to add missing field
      keyOfMissingInformation.push(field.element());
    // ? Might Change the logic
    if (field.fieldName == "banner" && !("banner" in movie))
      keyOfMissingInformation.push(field.element());
  });
  return keyOfMissingInformation;
}
const validateFeildValue = (value: any) => {
  if (value instanceof Array && value.length === 0) return true;
  else if (typeof value == "string" && value === "") return true;
  return false;
};
