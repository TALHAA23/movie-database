import HomeDataProvider from "../../Contexts/HomeDataProvider";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

export default function Layout() {
  return (
    <HomeDataProvider>
      <NavBar />
      <Outlet /> {/*Home*/}
    </HomeDataProvider>
  );
}
