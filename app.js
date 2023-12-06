"use strict";
const express = require("express");
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

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

  // Extract the value of the 'key' query parameter
  //   localhost:8000/hello?key=value
  let value = req.query["key"];
  res.send(`Value: ${value}`);
});

app.get("/hello/:name", function (req, res) {
  // res.set("Content-Type", "text/plain");
  res.type("text"); // same as above
  // prints out name to screen
  // example http://localhost:8000/hello/aaron
  res.send("Hello " + req.params.name + "!");
});

app.get("/hello/name/:first/:last", function (req, res) {
  let firstName = req.params["first"];
  let lastName = req.params["last"];
});

app.get("/states/:state/cities/:city", function (req, res) {
  // example http://localhost:8000/states/ca/cities/sac
  res.type("text");
  res.send(
    "You sent a request for " + req.params.city + ", " + req.params.state
  );
});

app.get("/cityInfo", function (req, res) {
  // I have not idea how to make this work...
  let state = req.query.state; // eg wa
  let city = req.query.city; // eg Seattle
  if (!(state && city)) {
    res
      .status(400)
      .send("Error: Missing required city and state query parameters.");
  } else {
    res.send("You sent a request for " + city + ", " + state);
  }
});

app.listen(PORT, () => {
  //   console.log("Listening on port"+ PORT + "..."); // eqv
  console.log(`Listening on port ${PORT} ...`);
});

// somewhere in your app.js (after all // endpoint definitions)
async function getDBConnection() {
  const db = await sqlite.open({
    filename: "<db-file-name>.db",
    driver: sqlite3.Database,
  });
  return db;
}
