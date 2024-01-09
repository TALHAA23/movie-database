import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";
import Profile from "./Profile";
export default function NavBar() {
  return (
    <nav
      className={`sticky h-[60px] z-50 bg-black/90 text-white top-0 flex justify-between items-center p-2`}
    >
      <Logo />
      <SearchBar />
      <Profile />
    </nav>
  );
}
