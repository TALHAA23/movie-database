export default async function userReviewsApi(userId: string) {
  const response = await fetch(
    `http://localhost:3000/api/review/user-reviews?of=${userId}`
  );
  if (!response.ok) {
    const message = await response.text().then((t) => t);
    throw new Error(message);
  }
  const data = await response.json();
  return data;
}
