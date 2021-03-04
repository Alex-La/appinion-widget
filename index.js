const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.join(__dirname, "static")));

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "dist")));
}

app.listen({ port: 4040 }, () => {
  console.log("🚀 Server ready at 4040 port");
});
