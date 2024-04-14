const mongoose = require("mongoose");
const DBURI = process.env.DBURI;

const connectDB = async (dburi, callback) => {
  try {
    await mongoose.connect(dburi);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    // Handle error appropriately, possibly by throwing or logging
  }
};
module.exports = { connectDB };
