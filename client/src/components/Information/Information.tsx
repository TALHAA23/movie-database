import { useMessage } from "../../Contexts/MessageProvider";
import "./information.css";
interface StyleAttributes {
  bg: string;
  text: string;
  border: string;
  icon: string;
}
interface Style {
  warning: StyleAttributes;
  success: StyleAttributes;
  failure: StyleAttributes;
  general: StyleAttributes;
}

const styles: Style = {
  failure: {
    bg: "bg-[#ee8888]",
    text: "text-[#4a1818]",
    border: "border-[#ed4646]",
    icon: "#b93f3f",
  },
  success: {
    bg: "bg-[#74ec86]",
    text: "text-[#0e4716]",
    border: "border-[#0e4716]",
    icon: "#24702e",
  },
  warning: {
    bg: "bg-[#dfe85d]",
    text: "text-[#343614]",
    border: "border-[#e1ee34]",
    icon: "#a6ae37",
  },
  general: {
    bg: "bg-[#509AF8]",
    text: "text-[#0C2A75]",
    border: "border-[#509AF8]",
    icon: "#2f7bdf",
  },
};

export default function Information() {
  const message = useMessage();
  if (!message) return;
  const styleAttributes = styles[message?.messageType];
  return (
    <div
      className={`info ${styleAttributes.bg} border-2  ${styleAttributes.border}  fixed z-50 top-[70px] right-3 opacity-100  transition-opacity duration-500`}
    >
      <div className="info__icon">
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"
            fill={styleAttributes.icon}
          ></path>
        </svg>
      </div>
      <div className={`info__title ${styleAttributes.text}`}>
        {message.message}
      </div>
      <div className="info__close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          viewBox="0 0 20 20"
          height="20"
        >
          <path
            fill="#393a37"
            d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
