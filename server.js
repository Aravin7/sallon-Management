﻿require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
// const bodyParser = require("body-parser");
const jwt = require("_helpers/jwt");
const errorHandler = require("_helpers/error-handler");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// // use JWT auth to secure the api
app.use(jwt());

// api routes
app.use("/users", require("./users/users.controller"));
app.use("/items", require("./items/items.controller"));
app.use("/blogs", require("./blogs/blogs.controller"));
app.use("/inventory", require("./inventory/inventory.controller"));
app.use("/store", require("./store/store.controller"));
app.use("/employee", require("./employee/employee.controller"));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === "production" ? 80 : 4000;
const server = app.listen(port, function () {
  console.log("Server listening on port " + port);
});
