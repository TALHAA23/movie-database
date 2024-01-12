import errorThrower from "../../../shared/errorThrower";

type RequestFor = "recommendations" | "top-rated" | "related";

const createUrl = (requestFor: RequestFor, id?: string): string => {
  let url: string;
  if (requestFor == "recommendations")
    url = "http://localhost:3000/api/users/protected/recommendations";
  else if (requestFor == "top-rated")
    url = "http://localhost:3000/api/movies/top-rated?rating=4";
  else if (requestFor == "related")
    url = `http://localhost:3000/api/movies/related/${id}`;
  else throw new Error("Something went wrong");

  return url;
};

export default async function movieListApi(
  requestFor: RequestFor,
  id?: string
) {
  const url = createUrl(requestFor, id);

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
