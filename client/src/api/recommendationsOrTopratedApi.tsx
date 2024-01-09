import errorThrower from "../../../shared/errorThrower";

type RequestFor = "recommendations" | "top-rated";

export default async function recommendationsOrTopRatedApi(
  requestFor: RequestFor
) {
  const url =
    requestFor == "recommendations"
      ? "http://localhost:3000/api/users/protected/recommendations"
      : "http://localhost:3000/api/movies/top-rated?rating=4";

  console.log(url);
  const response = await fetch(url, {
    credentials: "include",
  });

  if (!response.ok) {
    const status = response.status;
    console.log(status);
    const message = await response.text().then((text) => text);
    throw errorThrower(message, status);
  }

  const data = await response.json();
  return data;
}
