import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const MESSAGE_TIMEOUT = 10 * 1000; //10s
type MessageType = "warning" | "success" | "failure" | "general";
interface Information {
  message: string;
  messageType: MessageType;
}
interface MessageContextInterface {
  updateMessage: (message: string, messageType: MessageType) => void;
  information: Information | null;
}

const MessageContext = createContext<MessageContextInterface>({
  information: null,
  updateMessage: () => {
    throw new Error(
      "updateMessage function should not be called before the provider is rendered"
    );
  },
});
export const useMessageUpdater = () =>
  useContext(MessageContext)?.updateMessage;
export const useMessage = () => useContext(MessageContext)?.information;

export default function MessageProvider({ children }: { children: ReactNode }) {
  const [information, setInformation] = useState<null | Information>(null);
  const updateMessage = (message: string, messageType: MessageType) =>
    setInformation({
      message,
      messageType,
    });
  useEffect(() => {
    if (information) setTimeout(() => setInformation(null), MESSAGE_TIMEOUT);
  }, [information]);

  return (
    <MessageContext.Provider value={{ updateMessage, information }}>
      {children}
    </MessageContext.Provider>
  );
}
