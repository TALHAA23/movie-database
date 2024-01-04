import errorThrower from "../../../shared/errorThrower";
import HttpError from "../../../shared/httpErrorsEnum";

export default async function recommendationsApi() {
  const response = await fetch(
    "http://localhost:3000/api/users/protected/recommendations",
    {
      credentials: "include",
    }
  );

  if (!response.ok) {
    const status = response.status;
    const message = await response.text().then((text) => text);
    throw errorThrower(message, status);
  }

  const data = await response.json();
  return data;
}
