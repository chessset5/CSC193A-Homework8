"use strict";
const express = require("express");
const app = express();

// define all endpoints here

app.use(express.static("public"));
const PORT = process.env.PORT || 8000;
app.listen(PORT);

app.get("/hello", function (req, res) {
  // res.set("Content-Type", "text/plain");
  res.type("text"); // same as above
  res.send("Hello World!");
});

app.listen(PORT, () => {
  //   console.log("Listening on port"+ PORT + "..."); // eqv
  console.log(`Listening on port ${PORT} ...`);
});
