import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./context/auth";
import { BrowserRouter } from "react-router-dom";
import { VideosProvider } from "./context/videos";
// Call make Server
makeServer();

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthProvider>
      <VideosProvider>
        <App />
      </VideosProvider>
    </AuthProvider>
  </BrowserRouter>
);
