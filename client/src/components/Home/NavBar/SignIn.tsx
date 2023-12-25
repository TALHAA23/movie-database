import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <Link to="auth/login">
      <button
        className={`h-full
      bg-yellow-300 text-black font-semibold rounded px-3
      hover:bg-yellow-300/75 transition-colors duration-200 
      `}
      >
        Sign In
      </button>
    </Link>
  );
}
