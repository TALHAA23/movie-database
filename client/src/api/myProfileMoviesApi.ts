import { MyMoviesType } from "./model/Interfaces";

export default async function myProfileMovies(show: MyMoviesType) {
  const url = `http://localhost:3000/api/users/protected/my-movies/${show}`;
  try {
    const response = await fetch(url, {
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
