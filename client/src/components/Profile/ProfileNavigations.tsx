import { useEffect, useRef, useState } from "react";
import shrinkorExpandNavigations from "./profileAnimation";
import { useLocation, NavLink } from "react-router-dom";
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
    link: "./settings",
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
  {
    icon: "/arrow-left-solid.svg",
    title: "Back",
    link: "/profile",
  },
];

export default function ProfileNavigations() {
  const location = useLocation();
  const [isTitleShown, setIsTitleShown] = useState(true);
  const listRef = useRef<null | HTMLUListElement>(null);

  useEffect(() => {
    const isExpandedView = location.pathname.split("/").length <= 2;
    if (!listRef.current || (!isExpandedView && !isTitleShown)) return;
    shrinkorExpandNavigations(
      isExpandedView ? "expand" : "shrink",
      listRef.current
    );
    setIsTitleShown(isExpandedView);
  }, [location]);

  return (
    <>
      <ul
        ref={listRef}
        className="relative sm:absolute w-1/3 max-w-[300px] z-20 bg-white space-y-1  top-1/2 left-1/2 "
      >
        {navigations.map((el) => (
          <NavLink
            end
            to={el.link}
            className={({ isActive }) => `
            h-12 border-2 border-yellow-800/70 rounded px-2 py-2 flex items-center text-slate-700 ring-4 ring-transparent
          hover:ring-yellow-800/45 hover:bg-yellow-700/80 hover:text-white transition-all
            duration-100
            ${isActive && "shadow-md shadow-black/50 skew-y-6"} 
            ${isTitleShown ? "last:hidden" : "last:visible"}
          `}
          >
            <img
              className="h-full aspect-square"
              src={el.icon}
              alt={el.title}
            />
            <span
              className={`${
                isTitleShown ? "inline" : "hidden"
              } grow text-center first-letter:uppercase font-semibold`}
            >
              {el.title}
            </span>
          </NavLink>
        ))}
      </ul>
    </>
  );
}
