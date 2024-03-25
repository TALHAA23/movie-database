import handleUnOkResponse from "../assets/notResponseOk";

export default async function myFavoriteMoviesGenre() {
  try {
    const response = await fetch(
      "http://localhost:3000/api/users/protected/my-favrt-genres",
      {
        credentials: "include",
      }
    );
    await handleUnOkResponse(response);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}
