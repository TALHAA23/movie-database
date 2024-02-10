import testImages from "../../testimages";
import calculateAge from "../../utils/calculateAge";
import dateMonthYearFormattedDate from "../../utils/dateMonthYearFormattedDate";

interface Props {
  name: string;
  banner?: string;
  DOB: Date;
  about: string;
}

export default function NameHead({ name, banner, DOB, about }: Props) {
  const DOBtoContructor = new Date(DOB);
  return (
    <section className="relative w-full h-auto md:h-screen pb-28 pt-3 px-2">
      <div className=" relative  flex flex-col sm:flex-row items-center">
        <img
          className=" w-64 aspect-square rounded-full"
          src={banner || testImages.noImage}
          alt=""
        />
        <img
          className=" w-40 aspect-square rotate-90 sm:rotate-0 sm:translate-y-1/2 -translate-x-7"
          src="../../../public/rotated-right-arrow-with-broken-line.png"
          alt=""
        />
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold ">
            {name}
          </h1>
          <small>
            {dateMonthYearFormattedDate(DOB)} ({calculateAge(DOBtoContructor)}
            Year Old)
          </small>
        </div>
      </div>
      <div className="flex items-center sm:translate-y-16 sm:gap-x-16">
        <img
          className=" h-20 sm:h-40 self-start aspect-square sm:translate-x-12"
          src="../../../public/arrow-right.png"
          alt=""
        />
        <p className="  translate-y-6">{about}</p>
      </div>
    </section>
  );
}
