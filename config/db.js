const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // Hapus opsi yang tidak diperlukan
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

connectDB();

module.exports = mongoose;
