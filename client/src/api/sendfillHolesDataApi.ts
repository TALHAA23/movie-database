import { MovieInterface } from "./model/Interfaces";

export default async function sendfillHolesDataApi(
  data: Partial<MovieInterface>
) {
  let d = data;
  try {
    const response = await fetch(
      "http://localhost:3000/api/protected/contribution/fill-holes",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(d),
        credentials: "include",
      }
    );
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
