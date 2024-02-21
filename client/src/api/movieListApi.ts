type RequestFor =
  | "recommendations"
  | "top-rated"
  | "related"
  | "my-favrts"
  | "by-random-year"
  | "recent-uploads";

const createUrl = (requestFor: RequestFor, id?: string): string => {
  let url: string;
  if (requestFor == "recommendations")
    url = "http://localhost:3000/api/users/protected/recommendations";
  else if (requestFor == "my-favrts")
    url = "http://localhost:3000/api/users/protected/recommendations";
  else if (requestFor == "top-rated")
    url = "http://localhost:3000/api/movies/top-rated?rating=4";
  else if (requestFor == "related")
    url = `http://localhost:3000/api/movies/related/${id}`;
  else if (requestFor == "by-random-year" || requestFor == "recent-uploads")
    url = `http://localhost:3000/api/movies/${requestFor}`;
  else throw new Error("Something went wrong");

  return url;
};

export default async function movieListApi(
  requestFor: RequestFor,
  id?: string
) {
  const url = createUrl(requestFor, id);

  const response = await fetch(url, {
    credentials: requestFor == "recommendations" ? "include" : "omit",
  });

  if (!response.ok) {
    const message = await response.text().then((text) => text);
    throw new Error(message);
  }

  const data = await response.json();
  return data;
}
