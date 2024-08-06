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

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();

    const token = generateToken(user); // Pass the user object
    res.status(201).json({ token });
  } catch (error) {
    console.error("Register Failed. Error:", error.message); // Improved logging
    res.status(500).send("Server Error. Check backend code in userRegister.");
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Password Not Match" });
    }

    const token = generateToken(user);

    res.status(200).json({ token, message: "User Login" });
    console.log("User Login");
  } catch (error) {
    console.error("Login Failed , Error", error.message);
    res.status(500).send("Login Failed");
  }
};

module.exports = {
  userLogin,
  userRegister,
};
