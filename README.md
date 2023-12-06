# CSC193A-Homework8

https://docs.google.com/presentation/d/1JTy2f_iATVJ0eKdN61e3nsUN8G-GfKa-0cSnSI9coK8/edit?usp=sharing

`app.js` starter

```js
"use strict";

const express = require("express");
const app = express();

// define endpoint for exercise 1 here
// define endpoint for exercise 2 here

const PORT = process.env.PORT || 8000;
app.listen(PORT);
```

## Exercise 1: Splendid Circles

Add a new GET endpoint, `/math/circle/:r`, which takes a radius as a `URL` parameter. It should then respond in `JSON` with the area and circumference.

`{"area": 3.14, "circumference": 6.28}`

The area of a circle is `PI * r * r`, and the circumference is equal to `PI \* 2r`. You can access PI with `Math.PI`.

## Exercise 2: Hello, you!

Add a new `GET` endpoint, `/hello/name`, which takes as query parameters a `first` and `last` parameter. It should then respond in plain text with `"Hello firstName lastName"` replacing `firstName` with the value of `first` and `lastName` with the value of `last`

If they fail to provide the necessary `GET` parameters, respond with a `400` status code, and the error message `"Missing Required GET parameters: first, last"`. If they provide one, but not the other, your error message should only have the missing parameter listed.
