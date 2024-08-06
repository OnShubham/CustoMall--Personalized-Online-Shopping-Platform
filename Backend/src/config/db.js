require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONOG_URL, {});
    console.log("monogoDb Conncet");
  } catch (error) {
    console.error("Error Conncet to MonogoDb", Error);
    process.exit(1);
  }
};

module.exports = connectDB;
