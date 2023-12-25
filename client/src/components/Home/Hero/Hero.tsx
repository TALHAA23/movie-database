import SlideBar from "./Slidebar/Slidebar";
import UpNextSidebar from "./UpNextSidebar";
export default function Hero() {
  return (
    <section
      className={`
    border border-black
    grid lg:grid-cols-[auto_30%] grid-rows-[60%_30%]
    `}
    >
      <SlideBar />
      <UpNextSidebar />
    </section>
  );
}
