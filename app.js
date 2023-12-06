"use strict";

const express = require("express");
const app = express();

// define endpoint for exercise 1 here
// exercise 1
app.get("/math/circle/:r", function (req, res) {
  // http://localhost:8000/math/circle/r
  let radius = req.params.r;
  let area = Math.PI * radius * radius;
  let cir = Math.PI * radius * 2;
  res.type("json");
  res.send(`{ area: ${area.toFixed(2)}, circumference: ${cir.toFixed(2)} }`);
});

// define endpoint for exercise 2 here

const PORT = process.env.PORT || 8000;
app.listen(PORT);
