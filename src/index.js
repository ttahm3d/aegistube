import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(<App />);
