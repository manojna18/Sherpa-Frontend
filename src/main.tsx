import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import JobContextProvider from "./context/JobContextProvider.tsx";
import UserContextProvider from "./context/UserContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <JobContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </JobContextProvider>
  </React.StrictMode>
);