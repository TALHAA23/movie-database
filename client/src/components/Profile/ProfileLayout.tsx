import About from "./About";
import ProfileNavigations from "./ProfileNavigations";
import { Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <div className="h-[calc(100vh-60px)] flex flex-col sm:flex-row">
      <About />
      <div className="relative w-full flex">
        <ProfileNavigations />
        <Outlet />
      </div>
    </div>
  );
}
