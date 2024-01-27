import { FormEvent } from "react";
import createMovie from "../createMovieApi";
import readFile from "../../components/Contributions/Upload/readFile";

export default async function upload(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const entries = [...formData.entries()];
  const data = Object.fromEntries(entries);
  const file = data.banner as File;

  const resolvedData = {
    ...data,
    genre: JSON.parse(data.genre as string),
    cast: JSON.parse(data.cast as string),
    awards: JSON.parse(data.awards as string),
    banner: {
      fileName: file.name,
      url: await readFile(file).then((res) => res),
    },
  };
  console.log(resolvedData);
  try {
    const result = await createMovie(resolvedData);
    return result;
  } catch (err) {
    throw err;
  }
}
