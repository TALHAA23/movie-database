export default async function getUserInfo() {
  const token = await fetch("http://localhost:3000/api/auth/login").then(
    (res) => res.json()
  );
  try {
    const response = await fetch(
      "https://dev-n1afgdpjriklak3u.us.auth0.com/userinfo",
      {
        headers: { Authorization: `Bearer ${token.token}` },
      }
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}
