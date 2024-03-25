import HomeDataProvider from "../../Contexts/HomeDataProvider";
import Footer from "./Footer";
import Hero from "./Hero/Hero";
import Others from "./Others/Others";
export default function Home() {
  return (
    <HomeDataProvider>
      <div
        className={`relative w-full grid landscape:grid-rows-[150vh_auto_50vh] portrait:grid-rows-[calc(100vh-60px)_auto_50vh]`}
      >
        <Hero />
        <Others />
        <Footer />
      </div>
    </HomeDataProvider>
  );
}
