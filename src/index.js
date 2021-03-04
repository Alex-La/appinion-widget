import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const init = (config) => {
  ReactDOM.render(<App config={config} />, document.getElementById("root"));
};

if (process.env.NODE_ENV === "development")
  ReactDOM.render(<App />, document.getElementById("root"));
