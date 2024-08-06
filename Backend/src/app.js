require("dotenv").config();

const express = require("express");
const app = express();
const indexRouter = require("./routes/index"); // Import the router from index.js
const authRouter = require("./routes/authRoutes");

app.use(express.json());
app.use("/", indexRouter); // Use the router
app.use("/", authRouter);

module.exports = app;
