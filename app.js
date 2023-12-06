"use strict";

const express = require("express");
const app = express();

// define endpoint for exercise 1 here
app.get("/math/circle/:r", function (req, res) {
  // http://localhost:8000/math/circle/r
  let radius = req.params.r;
  let area = Math.PI * radius * radius;
  let cir = Math.PI * radius * 2;
  res.type("json");
  res.send(`{ area: ${area.toFixed(2)}, circumference: ${cir.toFixed(2)} }`);
});

// define endpoint for exercise 2 here
app.get("/hello/name", function (req, res) {
  // http://localhost:8000/hello/name?first=John&last=Doe
  let firstName = req.query.first;
  let lastName = req.query.last;
  if (!(firstName && lastName)) {
    let error_message = "";
    if (!firstName) {
      error_message += "first";
    }
    if (!lastName) {
      if (error_message) {
        error_message += ", ";
      }
      error_message += "last";
    }
    res.status(400).send(`Missing Required GET parameters: ${error_message}`);
  } else {
    res.type("text");
    res.send(`Hello ${firstName} ${lastName}`);
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);
