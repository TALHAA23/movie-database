export default function HorizentalCard() {
  return (
    <div className="flex items-center shadow-sm hover:shadow-lg shadow-gray-800/70">
      <img
        className=" w-[30%] object-center"
        src="../../../public/portrail-test-image.jpg"
        alt="img"
      />
      <div>
        <h1 className="text-lg font-semibold">The harry potter movie</h1>
        <p className=" leading-tight text-sm text-gray-700">
          this is a short desc about the current
        </p>
        {/* <div className="flex items-center">
          <img src="../../../public/star-solid.svg" alt="star" />
          <h3 className="text-xl font-semibold">4.0</h3>
        </div> */}
      </div>
    </div>
  );
}
