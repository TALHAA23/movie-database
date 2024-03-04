import { Link } from "react-router-dom";
import { useUserInfo } from "../../Contexts/UserProvider";
import SectionLoader from "../Loaders/SectionLoader";
import SectionError from "../Error/SectionError";

export default function Profile({ open }: { open: boolean }) {
  const user = useUserInfo();
  if (user?.isPending) return <SectionLoader />;
  else if (user?.isError) return <SectionError error={user.error} />;

  return (
    <div
      className={`absolute right-0 mt-2 bg-gray-700 w-screen max-w-[400px] h-[300px] p-5 rounded-3xl
     shadow-md flex flex-col items-center
     ${open ? "scale-100" : "scale-0"}
     `}
    >
      <h1>{user?.data?.email}</h1>
      <img
        src={user?.data?.picture || "/vite.svg"}
        className="w-[100px] aspect-square border border-gray-400/60 rounded-full"
      />
      <p className=" text-xl">Hi, {user?.data.nickname}!</p>
      <div className="w-full flex">
        {[
          ["My Profile", "/profile"],
          ["Signout", "/"],
        ].map(([title, href], index) => (
          <Link
            to={href}
            className={`grow text-center py-4 bg-black/30 hover:opacity-85 ${
              index == 0 ? " rounded-l-full" : " rounded-r-full"
            }`}
          >
            {title}
          </Link>
        ))}
      </div>
      <p className="  text-sm text-white/60 before:content-['last_update_at'] before:block">
        2024-02-29T12:22:31.619Z
      </p>
    </div>
  );
}
