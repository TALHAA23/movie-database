import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to=".">
      <img
        src="../../../../public/bussinessLogo.png"
        alt="logo"
        className=" w-11 aspect-square"
      />
    </Link>
  );
}
