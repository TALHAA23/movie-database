import HttpError from "../../../../shared/httpErrorsEnum";

export default function PageError({ error }: { error: Error }) {
  const status = HttpError[+error.name]; //type casting
  return (
    <div className=" px-2 w-full h-[80vh] flex items-center justify-center">
      <h1 className="relative font-bold text-3xl sm:text-5xl text-red-700 text-center">
        {error.message}
        {status && (
          <small className=" absolute -top-5 left-0 px-4 bg-white rounded font-semibold text-lg sm:-translate-y-2">
            {status}
          </small>
        )}
      </h1>
    </div>
  );
}
