import React from "react";
import ReactDOM from "react-dom/client";
import { GraphRepresentations } from "./graph-representations";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GraphRepresentations />
  </React.StrictMode>
);
