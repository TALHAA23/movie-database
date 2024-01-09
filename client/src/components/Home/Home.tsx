import Hero from "./Hero/Hero";
import Others from "./Others/Others";
export default function Home() {
  return (
    <div
      className={`h-screen grid landscape:grid-rows-[110vh_auto_50vh] portrait:grid-rows-[calc(100vh-60px)_auto_50vh]`}
    >
      <Hero />
      <Others />
      <h1 className="border border-black">footer</h1>
    </div>
  );
}
