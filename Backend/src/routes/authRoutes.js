const express = require("express");
const router = express.Router();


router.get("/l", (req, res) => {
    res.send("API is 2");
  });

module.exports = router;
