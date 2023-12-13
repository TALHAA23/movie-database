import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const { loginWithRedirect, getAccessTokenSilently } = useAuth0();
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(false);
  console.log(token);

  const user = { username: "mycooluser@moviedb.com", password: "Testuser1" };
  async function login() {
    // console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      setIsAuth(true);
      return;
    }
    console.log("gettign token");
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) throw new Error(await response.text());
      const data = await response.json();
      setToken(data.token);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchData() {
    // const hookToken = await getAccessTokenSilently();
    try {
      const response = await fetch(
        "http://localhost:3000/api/users/656d6987f0a0abd38142f8d1/protected/recommendations",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
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
      <button onClick={loginWithRedirect}>login with redirect</button>
    </section>
  );
}
