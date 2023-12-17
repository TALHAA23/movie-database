import { useState } from "react";
import { useCookies } from "react-cookie";

export default function App() {
  const cookies = useCookies(["access_token"]);
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(false);

  console.log(cookies);

  const user = { username: "mycooluser@moviedb.com", password: "Testuser1" };
  async function login() {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(user),
      });
      if (!response.ok) throw new Error(await response.text());
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchData() {
    try {
      const response = await fetch(
        "http://localhost:3000/api/users/656d6987f0a0abd38142f8d1/protected/recommendations",
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section>
      <h1>Movie DB</h1>
      <p>{isAuth ? "You are logged in" : "Please Log iN"}</p>
      <button onClick={login}>login</button>
      <button onClick={fetchData}>fetch data</button>
    </section>
  );
}
