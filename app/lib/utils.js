import mongoose from "mongoose";

//! connected to db
export const connectToDb = async () => {
  // const connection = {};

  try {
    // if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log(db);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
