const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(
            "mongodb+srv://cb:1F8vEAcAhW3uIEVC@complete-backend.dejfsbs.mongodb.net/halley"
        );

        console.log("Connected to DB");
    } catch (error) {
        console.log("MongoDB connection error:", error.message);
    }
}

module.exports = connectDB;