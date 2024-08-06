require("dotenv").config();

const express = require("express");
const app = express();
const indexRouter = require("./routes/index"); // Import the router from index.js

app.use(express.json());
app.use("/api", indexRouter); // Use the router

module.exports = app;
