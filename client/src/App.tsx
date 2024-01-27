import Routes from "./routes/Routes";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MessageProvider from "./Contexts/MessageProvider";

const client = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={client}>
      <MessageProvider>
        <Routes />
      </MessageProvider>
    </QueryClientProvider>
  );
}
