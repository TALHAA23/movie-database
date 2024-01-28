export default function MiniError({ err }: { err: Error }) {
  return <h1 className="text-center text-rose-700">{err.message}</h1>;
}
