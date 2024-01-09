import Featured from "./Featured";
import SlideBar from "./Slidebar/Slidebar";
import UpNextSidebar from "./UpNextSidebar";
import {
  useRecommendations,
  useTopRated,
} from "../../../Contexts/HomeDataProvider";

export default function Hero() {
  return (
    <section
      className={`
    border-4 border-black bg-black
    grid lg:grid-cols-[auto_30%] grid-rows-[60%_40%]
    `}
    >
      <SlideBar />
      <UpNextSidebar />
      <Featured />
    </section>
  );
}
