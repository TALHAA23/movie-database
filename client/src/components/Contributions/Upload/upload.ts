import { FormEvent } from "react";

export default function upload(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const entries = [...formData.entries()];
  const data = Object.fromEntries(entries);
  console.log(data);
}
