import React from "react";
import ReactDOM from "react-dom/client";

import App from "@app/app";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
