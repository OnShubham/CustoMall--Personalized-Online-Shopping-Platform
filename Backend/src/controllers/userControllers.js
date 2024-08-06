const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

const userRegister = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({
      username,
      email,
      password,
    });
    await user.save();

    const token = generateToken(token);
    res.status(201).json({ token });
  } catch (error) {
    console.error("Register Faill", error);
    res.status(500).send("Server Error check backend code userRegister ");
  }
};

const userLogin = (req, res) => {
  res.send("hellow");
};

module.exports = {
  userLogin,
  userRegister,
};
