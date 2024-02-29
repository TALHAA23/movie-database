import Routes from "./routes/Routes";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MessageProvider from "./Contexts/MessageProvider";
import UserProvider from "./Contexts/UserProvider";
import Information from "./components/Information/Information";

const client = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={client}>
      <MessageProvider>
        <UserProvider>
          <Information />
          <Routes />
        </UserProvider>
      </MessageProvider>
    </QueryClientProvider>
  );
}
