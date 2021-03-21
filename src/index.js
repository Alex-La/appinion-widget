import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const init = (token) => {
  const widDiv = document.createElement("div");
  widDiv.id = "appinion-widget-root";
  document.body.append(widDiv);
  ReactDOM.render(
    <App token={token} />,
    document.getElementById("appinion-widget-root")
  );
};

if (process.env.NODE_ENV === "development")
  ReactDOM.render(<App />, document.getElementById("root"));
