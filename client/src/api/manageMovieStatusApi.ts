import { MovieStatus } from "./model/Interfaces";

export default async function manageMovieStatus(
  status: MovieStatus,
  movieRef: string
) {
  const url = `http://localhost:3000/api/users/protected/my-movies?markTo=${status}`;
  try {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ movieRef }),
      credentials: "include",
    });
    if (!response.ok) {
      const message = await response.text().then((t) => t);
      throw new Error(message);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}
