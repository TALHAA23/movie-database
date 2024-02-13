import { Link } from "react-router-dom";

export default function Avatar() {
  return (
    <Link
      to="./profile"
      className={`relative w-fit 
     before:content-['your_account'] before:bg-slate-900 before:absolute
     before:rounded before:px-2 before:py-1 before:text-xs before:opacity-0
     hover:before:opacity-100 before:-left-[350%] hover:before:-left-[400%] before:transition-all before:duration-150
     
    `}
    >
      <img src="/user-solid.svg" alt="profile" />
    </Link>
  );
}
