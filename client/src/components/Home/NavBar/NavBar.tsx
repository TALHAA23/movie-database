import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";
import Avatar from "./Avatar";
import { useUserInfo } from "../../../Contexts/UserProvider";
import ElementLoader from "../../Loaders/ElementLoader";
export default function NavBar() {
  const user = useUserInfo();

  return (
    <nav
      className={`sticky top-0 bg-black h-[60px] z-50 text-white flex justify-between items-center p-2`}
    >
      <Logo />
      <SearchBar />
      {user?.isPending ? (
        <ElementLoader />
      ) : user?.isError ? (
        <SignIn />
      ) : (
        <Avatar />
      )}
    </nav>
  );
}
