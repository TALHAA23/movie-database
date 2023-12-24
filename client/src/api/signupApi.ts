import errorThrower from "../../../shared/errorThrower";

interface Creds {
  username: string;
  email: string;
  password: string;
}
export default async function signupApi(creds: Creds) {
  console.log("signup");
  const response = await fetch("http://localhost:3000/api/auth/signup", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  });

  if (!response.ok) {
    const message = await response.text().then((text) => text);
    throw errorThrower(message, response.status);
  }
  const data = await response.json(); //created user
  return data;
}
