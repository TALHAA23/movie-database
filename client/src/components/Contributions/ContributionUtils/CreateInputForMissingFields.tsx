import { ReactElement } from "react";
import { MovieInterface } from "../../../api/model/Interfaces";
import FormField from "../ContributionUtils/FormFeilds";

export default function CreateInputForMissingFields(movie: MovieInterface) {
  const keyOfMissingInformation: ReactElement[] = [];
  FormField.map((field) => {
    const feildValue = movie[field.feildName as keyof MovieInterface];
    const isFeildInvalid = validateFeildValue(feildValue);
    if (feildValue && isFeildInvalid)
      keyOfMissingInformation.push(field.element());
    else if (!feildValue) keyOfMissingInformation.push(field.element()); //feild not exist
  });

  return keyOfMissingInformation;
}

const validateFeildValue = (value: any) => {
  if (value instanceof Array && value.length === 0) return true;
  else if (typeof value == "string" && value === "") return true;
  return false;
};
