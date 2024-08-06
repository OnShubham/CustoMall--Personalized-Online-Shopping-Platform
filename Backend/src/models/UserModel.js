const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      length: 50,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
      
    },
  },
  {
    timestamps: true,
  }
);



const User = mongoose.model("User", userSchema);
module.exports = User;
