import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";
import Profile from "./Profile";
export default function NavBar() {
  return (
    <nav
      className={`sticky z-50 bg-white top-0 flex justify-between items-stretch p-2`}
    >
      <Logo />
      <SearchBar />
      <SignIn />
    </nav>
  );
}
