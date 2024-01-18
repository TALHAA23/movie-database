import Hero from "./Hero/Hero";
import Others from "./Others/Others";
export default function Home() {
  return (
    <div
      className={`w-full  grid landscape:grid-rows-[110vh_auto_50vh] portrait:grid-rows-[calc(100vh-60px)_auto_50vh]`}
    >
      <Hero />
      {/* <Others /> */}
      <h1 className="border-4  border-black">footer</h1>
    </div>
  );
}
