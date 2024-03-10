export default async function reviewSubmissionApi(review: object) {
  const response = await fetch(
    "http://localhost:3000/api/review/protected/new",
    {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "post",
      body: JSON.stringify(review),
    }
  );

  if (!response.ok) {
    const message = await response.text().then((t) => t);
    throw new Error(message);
  }

  const data = await response.json();
  return data;
}
