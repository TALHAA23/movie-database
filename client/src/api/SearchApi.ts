export default async function searchApi(title: string) {
  const response = await fetch(`http://localhost:3000/api/find?title=${title}`);
  if (!response.ok) {
    const message = await response.text().then((text) => text);
    throw new Error(message);
  }
  const data = await response.json();
  return data;
}
