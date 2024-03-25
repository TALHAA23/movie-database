import handleUnOkResponse from "../assets/notResponseOk";

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
  await handleUnOkResponse(response);
  const data = await response.json(); //access_token
  return data;
}
