import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Others from "./Others/Others";
export default function Home() {
  return (
    <div
      className={`h-screen grid
      landscape:grid-rows-[60px_110vh_auto_50vh]
      portrait:grid-rows-[60px_calc(100vh-60px)_auto_50vh]
      `}
    >
      <NavBar />
      <Hero />
      <Others />
      <h1 className="border border-black">footer</h1>
    </div>
  );
}
