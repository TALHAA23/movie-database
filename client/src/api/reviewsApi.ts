export default async function reviewsApi(id: string) {
  const url = `http://localhost:3000/api/movies/movie/${id}/reviews`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = await response.text().then((t) => t);
    throw new Error(message);
  }
  const data = await response.json();
  return data;
}
