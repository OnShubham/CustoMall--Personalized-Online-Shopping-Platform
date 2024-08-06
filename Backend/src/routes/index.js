const express = require("express");
const router = express.Router();
const { userLogin, userRegister } = require("../controllers/userControllers"); //User File

/*
Auth Routes
*/
router.post("/register", userRegister);
router.post("/login", userLogin);

/*
Home Routes
*/
router.get("/", (req, res) => {
  res.send("API is Running");
});

module.exports = router;
