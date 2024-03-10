import errorThrower from "../../../shared/errorThrower";

export default async function createMovie(creds: {}) {
  const response = await fetch(
    "http://localhost:3000/api/movies/protected/new",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(creds),
    }
  );
  if (!response.ok) {
    const message = await response.text().then((text) => text);
    throw errorThrower(message, response.status);
  }
  const data = await response.json();
  return data;
}
