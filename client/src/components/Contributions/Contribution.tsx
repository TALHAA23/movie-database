import { Link } from "react-router-dom";
const navigations = [
  {
    title: "My contributions",
    link: "./my-contributions",
    bg: "../../../public/Animation-fish.gif",
  },
  {
    title: "Upload new movie",
    link: "./new",
    bg: "../../../public/Animation-upload.gif",
  },
  {
    title: "Fill the holes",
    link: "./fill-the-holes",
  },
  {
    title: "Publish about an Actor",
    link: "./",
  },
  {
    title: "Change a movie information",
    link: "./",
  },
];
export default function Contribution() {
  return (
    <ul className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 m-3">
      {navigations.map((navgation) => (
        <Link
          className="relative group aspect-square sm:text-xl font-semibold border overflow-hidden rounded text-center flex justify-center items-center hover:rotate-3 hover:shadow-md transition-all duration-300"
          to={navgation.link}
        >
          <img
            className=" absolute object-contain bottom-0 scale-0 group-hover:scale-100 transition-all duration-150"
            src={navgation.bg}
            alt=""
          />
          <p className=" group-hover:scale-[170%] transition-all duration-500 ease-in-out">
            {navgation.title}
          </p>
        </Link>
      ))}
    </ul>
  );
}
