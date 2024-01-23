import { Link, Outlet } from "react-router-dom";

export default function ContributionLayout() {
  return (
    <div className=" grid grid-rows-[60px_auto]">
      <nav className=" bg-[#fddf47ce] flex items-center">
        <Link to="/" className=" px-4">
          Home
        </Link>
        <h1 className="grow font-bold text-2xl text-center">
          Welcome to contributions
        </h1>
      </nav>
      <Outlet />
    </div>
  );
}
