import { ReactElement } from "react";
import { ActorInterface, MovieInterface } from "../../../api/model/Interfaces";
import FormFeilds from "./FormFeilds";

export default function CreateInputForMissingFeilds(
  movie: MovieInterface | ActorInterface
) {
  const keyOfMissingInformation: ReactElement[] = [];
  FormFeilds.map((feild) => {
    const feildValue =
      movie[feild.fieldName as keyof (MovieInterface | ActorInterface)];
    const isFeildInvalid = validateFeildValue(feildValue);
    if (feildValue && isFeildInvalid && feild.fieldName in movie)
      keyOfMissingInformation.push(feild.element());
    else if (!feildValue && "title" in movie)
      //?feild not exist, For movie doc only
      keyOfMissingInformation.push(feild.element());
  });
}
const validateFeildValue = (value: any) => {
  if (value instanceof Array && value.length === 0) return true;
  else if (typeof value == "string" && value === "") return true;
  return false;
};

import { ReactElement } from "react";
import { MovieInterface } from "../../../api/model/Interfaces";
import FormFields from "./FormFields";

export default function CreateInputForMissingFields(movie: MovieInterface) {
  const keyOfMissingInformation: ReactElement[] = [];
  FormFields.map((field) => {
    const feildValue = movie[field.fieldName as keyof MovieInterface];
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
