import HomeDataProvider from "../../Contexts/HomeDataProvider";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

export default function Layout() {
  return (
    <HomeDataProvider>
      <div
        className={`h-screen grid
      landscape:grid-rows-[60px_110vh_auto_50vh]
      portrait:grid-rows-[60px_calc(100vh-60px)_auto_50vh]
      `}
      >
        <NavBar />
        <Outlet />
      </div>
    </HomeDataProvider>
  );
}
