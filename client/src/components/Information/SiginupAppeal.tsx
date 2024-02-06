import { Link } from "react-router-dom";

export default function SignupAppeal({
  text,
  subtext,
  coverPage = false,
}: {
  text: string;
  subtext?: string;
  coverPage?: boolean;
}) {
  return (
    <div
      className={`${
        coverPage ? "h-[calc(100vh-60px)]" : "h-[40vh]"
      } px-10 bg-black/90 text-white border-4 border-white flex flex-col items-center justify-center`}
    >
      <h1 className="font-bold text-2xl">{text}</h1>
      {subtext && <small className="text-sm font-light">{subtext}</small>}
      <Link
        to="/auth/login"
        className="px-5 py-2 font-semibold rounded border-2 bg-[#FDE047] text-black hover:text-white hover:bg-transparent hover:border-2 active:scale-95 border-[#FDE047] transition-all duration-100"
      >
        Sign In
      </Link>
    </div>
  );
}
