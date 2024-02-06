import { useEffect, useRef, useState } from "react";
import shrinkorExpandNavigations from "./profileAnimation";
import { useLocation, NavLink } from "react-router-dom";
const navigations = [
  {
    icon: "../../../public/gear-solid.svg",
    title: "settings",
    link: "./settings",
  },
  {
    icon: "../../../public/bookmark-solid.svg",
    title: "watch list",
    link: "./my-watchlist",
  },
  {
    icon: "../../../public/eye-regular.svg",
    title: "watched",
    link: "./watched",
  },
  {
    icon: "../../../public/pen-solid.svg",
    title: "my reviews",
    link: "./settings",
  },
  {
    icon: "../../../public/star-solid.svg",
    title: "favorite list",
    link: "./my-favorites",
  },
  {
    icon: "../../../public/handshake-angle-solid.svg",
    title: "contributions",
    link: "./settings",
  },
  {
    icon: "../../../public/arrow-left-solid.svg",
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
        className="relative sm:absolute z-20 bg-white space-y-1 w-1/3 top-1/2 left-1/2 "
      >
        {navigations.map((el) => (
          <NavLink
            end
            to={el.link}
            className={({ isActive }) => `
            h-12 w-full border rounded px-2 py-2 flex items-center text-slate-700 ring-4 ring-transparent
          hover:ring-slate-800/45 hover:bg-slate-700/50 hover:text-white transition-all
            duration-100
            ${isActive && "shadow-md shadow-black/50 skew-y-6"} 
            ${isTitleShown ? "last:hidden" : "last:visible"}
          `}
          >
            <img className="h-[80%] aspect-square" src={el.icon} alt="" />
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
