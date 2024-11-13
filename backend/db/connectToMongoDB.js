import mongoose from "mongoose";

const connectToMongoDB = async () => {
  console.log("Attempting to connect to MongoDB with URI:", process.env.MONGODB_URI); // Log tambahan
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
  }
};

export default connectToMongoDB;
