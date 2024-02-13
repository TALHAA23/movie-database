import { ReactElement } from "react";
import { MovieInterface } from "../../../api/model/Interfaces";
import FormFeilds from "./FormFeilds";

export default function CreateInputForMissingFeilds(movie: MovieInterface) {
  const keyOfMissingInformation: ReactElement[] = [];
  FormFeilds.map((feild) => {
    const feildValue = movie[feild.feildName as keyof MovieInterface];
    const isFeildInvalid = validateFeildValue(feildValue);
    if (feildValue && isFeildInvalid)
      keyOfMissingInformation.push(feild.element());
    else if (!feildValue) keyOfMissingInformation.push(feild.element()); //feild not exist
  });

  return keyOfMissingInformation;
}

const validateFeildValue = (value: any) => {
  if (value instanceof Array && value.length === 0) return true;
  else if (typeof value == "string" && value === "") return true;
  return false;
};
