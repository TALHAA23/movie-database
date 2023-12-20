import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import * as validator from "../../../../shared/validator";
import "./login.css";

const isEmail = (name: string) => name == "email";

export default function Login() {
  const timeoutId = useRef<undefined | number>();
  const [error, setError] = useState<false | Error>(false);
  const [authState, setAuthState] = useState({
    isValidEmail: false,
    isValidPassword: false,
  });
  function changeAuthState(
    key: "isValidEmail" | "isValidPassword",
    value: boolean
  ) {
    setAuthState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    clearTimeout(timeoutId.current);
    const { value, name } = event.target;
    const key = isEmail(name) ? "isValidEmail" : "isValidPassword";

    timeoutId.current = setTimeout(() => {
      try {
        isEmail(name)
          ? validator.emailValidator(value)
          : validator.passwordValidator(value);
        changeAuthState(key, true);
        setError(false);
      } catch (err) {
        changeAuthState(key, false);
        setError(err as Error);
      }
    }, 1000);
  }
  return (
    <form className="form absolute">
      <h1 className=" text-center font-semibold text-gray-600 text-2xl">
        Login
      </h1>

      {error && <small className="text-center">{error.message}</small>}
      <label>
        <input
          onChange={handleChange}
          required
          placeholder=""
          type="email"
          name="email"
          className="peer input"
        />
        <span
          className={`${
            authState.isValidEmail == true ? "text-green-700" : "text-rose-600"
          }`}
        >
          email
        </span>
      </label>

      <label>
        <input
          required
          onChange={handleChange}
          placeholder=""
          type="password"
          className="input"
          name="password"
        />
        <span
          className={`${
            authState.isValidPassword == true
              ? "text-green-700"
              : "text-rose-600"
          }`}
        >
          password
        </span>
      </label>

      <button
        className="fancy disabled:cursor-no-drop"
        disabled={!(authState.isValidEmail && authState.isValidPassword)}
      >
        <span className="top-key"></span>
        <span className="text">submit</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
    </form>
  );
}
