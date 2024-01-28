interface Review {
  to: string;
  title: string;
  review: string;
}
export default async function reviewSubmissionApi(review: Review) {
  console.log(review);
  const response = await fetch("http://localhost:3000/api/review/new", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(review),
  });

  if (!response.ok) {
    const message = await response.text().then((t) => t);
    throw new Error(message);
  }

  const data = await response.json();
  return data;
}
