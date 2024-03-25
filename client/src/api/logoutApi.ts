import handleUnOkResponse from "../assets/notResponseOk";

export default async function logoutApi() {
  console.log("Attempt to logout");
  const response = await fetch("http://localhost:3000/api/auth/logout");
  await handleUnOkResponse(response);
  const data = await response.json();
  console.log(data);
  return data;
}
