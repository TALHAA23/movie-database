import { RatingPayload } from "../model/Interfaces";
import publishRatingApi from "../publishRatingApi";

export default async function ratingPublisher(obj: RatingPayload) {
  try {
    const result = await publishRatingApi(obj);
    return result;
  } catch (err) {
    throw err;
  }
}
