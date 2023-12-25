import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
export default function Home() {
  return (
    <div
      className={`
      h-screen grid
      landscape:grid-rows-[60px_150vh_auto_50vh]
      portrait:grid-rows-[60px_calc(100vh-60px)_auto_50vh]
      `}
    >
      <NavBar />
      <Hero />
      <h1 className="border border-black">Others</h1>
      <h1 className="border border-black">footer</h1>
    </div>
  );
}
