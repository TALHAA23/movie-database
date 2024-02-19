import { Link } from "react-router-dom";

export default function YourAddOns(props: any) {
  return (
    <div>
      <h1 className="relative first-letter:uppercase w-fit bg-white/10 px-2 rounded  pl-4 text-3xl font-semibold tracking-wide">
        You have Completed our movies by adding information to them
      </h1>
      {props.props.map((el: any) => (
        <div className="text-center space-y-2">
          <Link
            to={`/title/${el.ref._id}`}
            className=" font-semibold text-3xl hover:underline"
          >
            {el.ref.title}
          </Link>
          <div className=" flex justify-center">
            {el.additionalProps.map((addon: any) => (
              <span className=" px-3 py-1 rounded-full bg-yellow-600 text-black font-semibold">
                {addon}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
