import { FormEvent } from "react";
import reviewSubmissionApi from "../reviewSubmissionApi";

export default async function submitReview(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const entries = Array.from([...formData.entries()]);
  const data = Object.fromEntries(entries);
  try {
    const result = await reviewSubmissionApi(data);
    return result;
  } catch (err) {
    throw err;
  }
}
