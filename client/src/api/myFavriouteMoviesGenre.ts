export default async function myFavoriteMoviesGenre() {
  //   try {
  const response = await fetch(
    "http://localhost:3000/api/users/protected/my-favrt-genres",
    {
      credentials: "include",
    }
  );
  // if (!response.ok) {
  //   const message = await response.text().then((t) => t);
  //   throw new Error(message);
  // }
  const data = await response.json();
  return data;
  //   } catch (err) {
  //     throw err;
  //   }
}
