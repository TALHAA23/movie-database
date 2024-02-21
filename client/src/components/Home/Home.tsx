import Information from "../Information/Information";
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
      <h1 className="border-4  border-black">footer</h1>
    </div>
  );
}
