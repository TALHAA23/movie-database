const credits = [
  [
    "../../../public/react-svgrepo-com.svg",
    "Crafting interactive UIs effortlessly.",
  ],
  [
    "../../../public/vite.svg",
    "Supercharging our development with lightning-fast build times.",
  ],
  [
    "../../../public/react-query-seeklogo.svg",
    "Simplifying data fetching, caching, and updates in React.",
  ],
  [
    "../../../public/express-svgrepo-com.svg",
    " Streamlining web application development",
  ],
  [
    "../../../public/auth0-svgrepo-com.svg",
    "Ensuring robust authentication and authorization",
  ],
  [
    "../../../public/mongodb-svgrepo-com.svg",
    "Offering flexible, scalable data storage",
  ],
  [
    "../../../public/firebase-svgrepo-com.svg",
    "Providing real-time data synchronization",
  ],
];
export default function Footer() {
  return (
    <ul className="relative flex items-center justify-center gap-2 flex-wrap bg-white/10 before:content-['Stack'] before:absolute before:font-bold before:text-3xl sm:before:text-6xl before:-translate-y-9">
      {credits.map(([key, value]) => (
        <li className=" relative">
          <img
            src={key}
            alt="img"
            className="peer w-9 sm:w-14 hover:opacity-50 hover:translate-y-2"
          />
          <p className="absolute w-[200px] -top-10 -left-full text-center bg-slate-900 text-xs rounded px-2 py-1 scale-0 peer-hover:scale-100 transition-all duration-100">
            {value}
          </p>
        </li>
      ))}
    </ul>
  );
}
