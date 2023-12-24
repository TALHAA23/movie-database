import { ChangeEvent, useRef, useState } from "react";
import * as validator from "../../../../shared/validator";
import authFormSubmission from "../../api/services/authFormSubmission";
import "./authForm.css";
import errorThrower from "../../../../shared/errorThrower";
import HttpError from "../../../../shared/httpErrorsEnum";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const DEBOUNCE_TIME = 500; //ms

type AuthStates =
  | "isValidEmail"
  | "isValidPassword"
  | "isPasswordConfirmed"
  | "isValidUsername";

type FeildError = false | Error;

const isEmail = (name: string) => name == "email";
const isSignupPage = () => location.pathname.split("/").pop() == "signup";

export default function AuthForm() {
  const timeoutId = useRef<undefined | number>();
  const [error, setError] = useState<FeildError>(false);
  const [authState, setAuthState] = useState({
    isValidEmail: false,
    isValidPassword: false,
    isPasswordConfirmed: false,
    isValidUsername: false,
  });
  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: authFormSubmission,
  });

  function changeAuthState(key: AuthStates, value: boolean) {
    setAuthState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  function validateAuthStates(
    key: AuthStates,
    value: boolean,
    error: FeildError
  ) {
    changeAuthState(key, value);
    setError(error);
    if (isSignupPage() && key == "isValidPassword") confirmPassword();
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
        validateAuthStates(key, true, false);
      } catch (err) {
        validateAuthStates(key, false, err as Error);
      }
    }, DEBOUNCE_TIME);
  }

  function confirmPassword() {
    const confirmPasswordFeild: HTMLInputElement | null =
      document.querySelector(".form input[name='confirm-password']");
    const passwordField: HTMLInputElement | null = document.querySelector(
      ".form input[name='password']"
    );

    console.log(confirmPasswordFeild?.value, passwordField?.value);

    if (!passwordField || !confirmPasswordFeild)
      throw new Error("Either password or confirm password feild do not exist");
    if (
      confirmPasswordFeild?.value &&
      confirmPasswordFeild?.value == passwordField.value
    ) {
      validateAuthStates("isPasswordConfirmed", true, false);
    } else {
      const error = errorThrower(
        "Password do not matched",
        HttpError.BadRequest
      );
      validateAuthStates("isPasswordConfirmed", false, error);
    }
  }

  function validateUsername(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    if (value) {
      validateAuthStates("isValidUsername", true, false);
    } else {
      const error = errorThrower(
        "Username can't be empty",
        HttpError.BadRequest
      ) as Error;
      validateAuthStates("isValidUsername", false, error);
    }
  }

  return (
    <form className="form absolute" onSubmit={loginMutation.mutate}>
      <h1 className=" text-center font-semibold text-gray-600 text-2xl">
        {isSignupPage() ? "Signup" : "Login"}
      </h1>
      <small className="text-center">
        {error
          ? error.message
          : loginMutation.isPending
          ? "Please wait"
          : loginMutation.isSuccess
          ? `Welcome ${
              isSignupPage()
                ? loginMutation.data.username
                : loginMutation.data.nickname
            }`
          : loginMutation.error?.message}
      </small>
      {isSignupPage() && (
        <label>
          <input
            onChange={validateUsername}
            required
            placeholder=""
            type="text"
            name="username"
            className="input"
          />
          <span
            className={`${
              authState.isValidUsername == true
                ? "text-green-700"
                : "text-rose-600"
            }`}
          >
            username
          </span>
        </label>
      )}

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
      {isSignupPage() && (
        <label>
          <input
            required
            onChange={confirmPassword}
            placeholder=""
            type="password"
            className="input"
            name="confirm-password"
          />
          <span
            className={`${
              authState.isPasswordConfirmed == true
                ? "text-green-700"
                : "text-rose-600"
            }`}
          >
            confirm password
          </span>
        </label>
      )}

      <button
        type="submit"
        className="fancy disabled:cursor-no-drop"
        disabled={
          loginMutation.isPending || isSignupPage()
            ? !(
                authState.isValidEmail &&
                authState.isValidPassword &&
                authState.isPasswordConfirmed &&
                authState.isValidUsername
              )
            : !(authState.isValidEmail && authState.isValidPassword)
        }
      >
        <span className="top-key"></span>
        <span className="text">submit</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
      <div className=" text-center">
        {isSignupPage() ? (
          <small>
            ALready have account{" "}
            <Link to="../login" className=" underline text-blue-900">
              Login
            </Link>{" "}
          </small>
        ) : (
          <small>
            Don't have account{" "}
            <Link to="../signup" className=" underline text-blue-900">
              Signup
            </Link>{" "}
            now{" "}
          </small>
        )}
      </div>
    </form>
  );
}
