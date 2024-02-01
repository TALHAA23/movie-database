import { RatingPayload } from "./model/Interfaces";

export default async function publishRatingApi(payload: RatingPayload) {
  const url = `http://localhost:3000/api/movies/movie/${
    payload.movieRef
  }/reviews/publish/rating?on=${
    payload.action == "publish-rating-on-review" ? "review" : "movie"
  }`;

  try {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const message = await response.text().then((t) => t);
      throw new Error(message);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}
