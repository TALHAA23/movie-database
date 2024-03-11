import Information from "../Information/Information";
import Footer from "./Footer";
import Hero from "./Hero/Hero";
import Others from "./Others/Others";
export default function Home() {
  return (
    <div
      className={`relative w-full grid landscape:grid-rows-[150vh_auto_50vh] portrait:grid-rows-[calc(100vh-60px)_auto_50vh]`}
    >
      <Information />
      <Hero />
      <Others />
      <Footer />
    </div>
  );
}
