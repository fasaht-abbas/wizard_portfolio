import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected with the database ${conn.connection.host}.`.bgBlue);
  } catch (error) {
    console.log("ERROR OCCURED IN CONNECTION".bgRed);
  }
};
export default connectDB;
