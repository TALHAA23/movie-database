import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Provider } from "@auth0/auth0-react";

const auth0Domain = import.meta.env.VITE_DOMAIN;
const auth0ClientId = import.meta.env.VITE_CLIENT_ID;
const auth0Scope = import.meta.env.VITE_SCOPE;
const auth0Audience = import.meta.env.VITE_AUDIENCE;

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <Auth0Provider
          domain={auth0Domain}
          clientId={auth0ClientId}
          authorizationParams={{
            redirect_uri: window.location.origin,
            scope: { auth0Scope },
            audience: { auth0Audience },
          }}
        >
          <App />
        </Auth0Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
