export default async function handleUnOkResponse(response: Response) {
  if (!response.ok) {
    const message = await response.text().then((t) => t);
    throw new Error(message);
  }
}
