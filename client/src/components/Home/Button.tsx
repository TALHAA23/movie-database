import "../../../public/button.css";
export default function Button({ text }: { text: string }) {
  return (
    <button type="submit" className="fancy">
      <span className="top-key"></span>
      <span className="text">{text}</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </button>
  );
}
