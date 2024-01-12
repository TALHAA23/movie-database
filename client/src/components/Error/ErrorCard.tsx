export default function ErrorCard({ error }: { error: Error }) {
  console.log(error.name);
  return (
    <div className="relative  h-[40vh] bg-black/90 flex items-center justify-center">
      <h1 className=" font-semibold text-white text-3xl">
        {error.message.toLocaleUpperCase()}
      </h1>
      {/* <small className=" absolute right-1 top-1 px-2 py-1 bg-[#FDE047] font-bold">
        {HttpError[error.name]}
      </small> */}
    </div>
  );
}
