import errorThrower from "../../../shared/errorThrower";

interface Creds {
  username: string;
  password: string;
}
export default async function loginApi(creds: Creds) {
  const response = await fetch("http://localhost:3000/api/auth/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(creds),
  });
  if (!response.ok) {
    const message = await response.text().then((text) => text);
    throw errorThrower(message, response.status);
  }
  const data = await response.json(); //access_token
  return data;
}
