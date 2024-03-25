import Routes from "./routes/Routes";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MessageProvider from "./Contexts/MessageProvider";
import UserProvider from "./Contexts/UserProvider";
import Information from "./components/Information/Information";
import { useEffect, useState } from "react";

const client = new QueryClient();
export default function App() {
  const [isOffline, setIsOffline] = useState(false);

  const handleOffline = () => setIsOffline(true);
  const handleOnline = () => setIsOffline(false);

  useEffect(() => {
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <QueryClientProvider client={client}>
      <MessageProvider>
        <UserProvider>
          <Information /> {/*consume message*/}
          <Routes />
        </UserProvider>
      </MessageProvider>
    </QueryClientProvider>
  );
}
