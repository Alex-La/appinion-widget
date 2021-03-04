import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

export const init = (config) => {
  const widDiv = document.createElement("div");
  widDiv.id = "appinion-widget-root";
  document.body.append(widDiv);
  ReactDOM.render(
    <App config={config} />,
    document.getElementById("appinion-widget-root")
  );
};

if (process.env.NODE_ENV === "development")
  ReactDOM.render(<App />, document.getElementById("root"));
