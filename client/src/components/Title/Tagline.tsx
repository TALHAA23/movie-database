export default function Tagline({ tagline }: { tagline: string }) {
  return (
    <h1
      className={`py-5 text-center font-bold text-4xl bg-white/10 tracking-wider text-black
     before:content-['"'] after:content-['"'] before:text-white after:text-white
    `}
    >
      {tagline}
    </h1>
  );
}
