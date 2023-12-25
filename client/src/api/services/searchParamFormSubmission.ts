import { FormEvent } from "react";
import searchApi from "../SearchApi";

export default async function searchParamsFormSubmission(
  event: FormEvent<HTMLFormElement>
) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const value = formData.get("search");

  if (!value) throw new Error("Search something");

  try {
    const result = await searchApi(value as string);
    return result;
  } catch (err) {
    throw err;
  }
}
