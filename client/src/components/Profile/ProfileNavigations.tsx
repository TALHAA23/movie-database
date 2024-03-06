import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navigations = [
  {
    icon: "/gear-solid.svg",
    title: "settings",
    link: "./settings",
  },
  {
    icon: "/bookmark-solid.svg",
    title: "watch list",
    link: "./my-watchlist",
  },
  {
    icon: "/eye-regular.svg",
    title: "watched",
    link: "./watched",
  },
  {
    icon: "/pen-solid.svg",
    title: "my reviews",
    link: "./my-reviews",
  },
  {
    icon: "/star-solid.svg",
    title: "favorite list",
    link: "./my-favorites",
  },
  {
    icon: "/handshake-angle-solid.svg",
    title: "contributions",
    link: "/contribution",
  },
];

const isRootofProfile = () => location.pathname.split("/").length <= 2;
export default function ProfileNavigations() {
  const location = useLocation();
  const [isMenuVisable, setIsMenuVisable] = useState(true);

  useEffect(() => {
    setIsMenuVisable(isRootofProfile() ? true : false);
  }, [location]);
  return (
    <ul
      className={`fixed bg-black z-10 ${
        isMenuVisable ? "h-full" : "h-0"
      } w-full  flex flex-col items-center justify-center  transition-all duration-1000`}
    >
      {navigations.map((el) => (
        <NavLink
          end
          to={el.link}
          className={`
            max-w-[300px]  h-12 rounded px-2 py-2 flex items-center bg-white/70 text-black ring-4 ring-transparent
          hover:scale-105 hover:bg-white/90 transition-all duration-100 ${
            isMenuVisable ? "scale-100" : "scale-0"
          } origin-top transition-all duration-700`}
        >
          <img className="h-full aspect-square" src={el.icon} alt={el.title} />
          <span
            className={`grow text-center first-letter:uppercase font-semibold`}
          >
            {el.title}
          </span>
        </NavLink>
      ))}
    </ul>
  );
}
