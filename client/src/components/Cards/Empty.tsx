export default function Empty({ message }: { message: string }) {
  return (
    <section className="relative w-full h-full flex items-center justify-center">
      <h1 className=" text-4xl font-bold">{message}</h1>
      <div className=" absolute bottom-0 flex flex-wrap justify-center">
        {Array(3).fill(
          <img
            className={` bottom-0 `}
            src="../../../public/animation-ghost.gif"
            alt=""
          />
        )}
      </div>
    </section>
  );
}
