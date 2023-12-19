import * as validator from "../../shared/validator";
export default function App() {
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const creds = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    try {
      if (!creds.email) throw new Error("Email Required");
      if (!creds.password) throw new Error("password Required");

      // validator.emailValidator(creds.email as string);
      // validator.passwordValidator(creds.password as string);

      await fetch("http://localhost:3000/api/auth/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creds),
      }).then((res) => {
        if (!res.ok) {
          console.log(res.status);
          console.log(res.statusText);
          res.text().then((t) => console.log(t));
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" name="username" />
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button>submit</button>
    </form>
  );
}
