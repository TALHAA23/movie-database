import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Provider } from "@auth0/auth0-react";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <Auth0Provider
          domain="dev-n1afgdpjriklak3u.us.auth0.com"
          clientId="tVMAL9iyCztcELxwMBVs5SWvK4Xu1myH"
          authorizationParams={{
            redirect_uri: window.location.origin,
            scope: "openid profile email",
            audience: "movie-database-api-endpoints",
          }}
        >
          <App />
        </Auth0Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
