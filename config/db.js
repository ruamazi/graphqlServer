import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(console.log("Connected to DB"));
  } catch (err) {
    throw err && console.log(err);
  }
};

export default connectDB;
