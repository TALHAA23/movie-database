interface Details {
  releaseYear?: number;
  releaseDate?: string;
  runTime?: number;
  language?: string;
  countryOfOrigin?: string;
  creator?: string;
}
export default function Details(prop: Details) {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl tracking-widest">
        Details
      </h1>
      <div className=" w-full sm:w-[400px] p-3 mx-auto space-y-1">
        {Array.from(Object.entries(prop)).map(([key, value]) => (
          <div className="w-full flex justify-center bg-yellow-700 rounded font-semibold">
            <p className="grow text-center">
              {key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .replace(/^./, (str) => str.toUpperCase())}
            </p>
            <p className="grow text-center">{value}</p>
          </div>
        ))}
        {/* {[1, 2, 3].map(() => (
          <div className="w-full flex justify-center bg-yellow-700  rounded">
            <p className="grow text-center">Creators</p>
            <p className="grow text-center">Disney</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}
