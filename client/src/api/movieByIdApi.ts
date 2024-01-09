import errorThrower from "../../../shared/errorThrower";

export default async function movieByIdApi(id: string) {
  console.log(id);
  const response = await fetch(`http://localhost:3000/api/movies/movie/${id}`);

  if (!response.ok) {
    const status = response.status;
    const message = await response.text().then((text) => text);
    throw errorThrower(message, status);
  }

  const data = await response.json();
  return data;
}
