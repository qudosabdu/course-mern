const mongoose = require("mongoose");
require("dotenv").config();

USER_NAME = process.env.USER_NAME;
PASSWORD = process.env.USER_PASSWORD;
// const URI = 'mongodb://127.0.0.1:27017/mern-admin'

const URI = `mongodb+srv://abdulqudoos:${PASSWORD}@cluster0.d15j6rb.mongodb.net/${USER_NAME}?retryWrites=true&w=majority`;
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection failed");
  }
};

module.exports = connectDB;
