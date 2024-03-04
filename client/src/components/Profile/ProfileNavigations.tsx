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
  {
    icon: "/arrow-left-solid.svg",
    title: "Back",
    link: "/profile",
  },
];

const isRootofProfile = () => location.pathname.split("/").length <= 2;
export default function ProfileNavigations() {
  const location = useLocation();
  const [isTitleShown, setIsTitleShown] = useState(true);
  const listRef = useRef<null | HTMLUListElement>(null);

  useEffect(() => {
    setIsTitleShown(isRootofProfile() ? true : false);
  }, [location]);

  // useEffect(() => {
  //   const isExpandedView = location.pathname.split("/").length <= 2;
  //   if (!listRef.current || (!isExpandedView && !isTitleShown)) return;
  //   shrinkorExpandNavigations(
  //     isExpandedView ? "expand" : "shrink",
  //     listRef.current
  //   );
  //   setIsTitleShown(isExpandedView);
  // }, [location]);

  return (
    <ul
      ref={listRef}
      className=" sticky top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[300px] space-y-1"
      // className="py-2 sticky md:block sm:top-1/2 sm:-translate-y-1/2 flex items-center flex-col gap-0  h-fit w-1/3 max-w-[300px] z-10 space-y-1  "
    >
      {navigations.map((el) => (
        <NavLink
          end
          to={el.link}
          className={({ isActive }) => `
            h-12 rounded px-2 py-2 flex items-center bg-gray-400 text-black ring-4 ring-transparent
          hover:ring-yellow-800/45 hover:bg-yellow-700/80 hover:text-white transition-all
            duration-100
            ${isActive && "shadow-md shadow-black/50 skew-y-6"} 
            ${isTitleShown ? "last:hidden" : "last:visible"}
          `}
        >
          <img className="h-full aspect-square" src={el.icon} alt={el.title} />
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
  );
}
