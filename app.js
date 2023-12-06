"use strict";
const express = require("express");
const app = express();

// define all endpoints here

app.use(express.static("public"));
const PORT = process.env.PORT || 8000;

app.get("/", function (req, res) {
  res.send("Hello from app.js!");
});

app.get("/hello", function (req, res) {
  // res.set("Content-Type", "text/plain");
  res.type("text"); // same as above
  res.send("You visited the Hello Route!");
});

app.get("/hello/:name", function (req, res) {
  // res.set("Content-Type", "text/plain");
  res.type("text"); // same as above
  res.send("Hello " + req.params.name + "!");
});

app.get("/states/:state/cities/:city", function (req, res) {
  res.type("text");
  res.send(
    "You sent a request for " + req.params.city + ", " + req.params.state
  );
});

app.listen(PORT, () => {
  //   console.log("Listening on port"+ PORT + "..."); // eqv
  console.log(`Listening on port ${PORT} ...`);
});
