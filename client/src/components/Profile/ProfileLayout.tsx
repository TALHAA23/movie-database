import { Link, Outlet } from "react-router-dom";
import ProfileNavigations from "./ProfileNavigations";

export default function ProfileLayout() {
  return (
    <div className="min-h-[calc(100vh-60px)]">
      <ProfileNavigations />
      <BackButton />
      <Outlet />
    </div>
  );
}

const BackButton = () => (
  <Link to={".."} className=" fixed bottom-2">
    <img
      className=" px-4 py-3 rounded-full bg-white/95"
      src="/arrow-left-solid.svg"
      alt=""
    />
  </Link>
);
