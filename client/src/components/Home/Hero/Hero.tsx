import Featured from "./Featured";
import SlideBar from "./Slidebar/Slidebar";

export default function Hero() {
  return (
    <section
      className={`bg-black grid grid-rows-[60%_40%]
    `}
    >
      <SlideBar />
      {/* <UpNextSidebar /> */}
      <Featured />
    </section>
  );
}
