export default async function movieByGenreApi(genre: string) {
  const response = await fetch(
    `http://localhost:3000/api/movies/by-genre?q=${genre}`
  );
  const data = await response.json();
  return data;
}
