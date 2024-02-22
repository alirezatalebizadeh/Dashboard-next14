import mongoose from "mongoose";

export const connectToDb = async () => {
  const connection = {};

  try {
    console.log("true");
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
