import { FormEvent } from "react";
import sendfillHolesDataApi from "../sendfillHolesDataApi";
import readFile from "../../components/Contributions/Upload/readFile";

export default async function fillHolesFormSubmission(
  event: FormEvent<HTMLFormElement>
) {
  event.preventDefault();
  const formData = new FormData(event.target);
  removeUnChangedFeild(formData);
  const entries = [...formData.entries()];
  if (entries.length == 2 /*if id and actionOn only*/)
    throw new Error("Add atleast one information!");
  const data = Object.fromEntries(entries);
  await changeTypeOfCastAndCreateDataURLForBanner(data);

  try {
    const result = sendfillHolesDataApi(data);
    return result;
  } catch (err) {
    throw err;
  }
}

const removeUnChangedFeild = (formData: FormData) => {
  const keysToRemove = [];

  for (let key of formData.keys()) {
    let value = formData.get(key);
    if (
      !value ||
      value == "" ||
      value === null ||
      (Array.isArray(value) && value.length === 0) ||
      (value instanceof File && value.size === 0)
    )
      keysToRemove.push(key);
  }
  keysToRemove.map((key) => formData.delete(key));
};

const changeTypeOfCastAndCreateDataURLForBanner = async (data: Object) => {
  if ("banner" in data && data.banner instanceof File) {
    const dataURL = await readFile(data.banner);
    data.banner = {
      fileName: data.banner.name,
      url: dataURL,
    };
  }
  if ("cast" in data && typeof data.cast == "string") {
    data.cast = JSON.stringify(data.cast.split(","));
  }
};
