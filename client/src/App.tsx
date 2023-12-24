import Routes from "./routes/Routes";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "react-query-devtools";

const client = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={client}>
      <Routes />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
