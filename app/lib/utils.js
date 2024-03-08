import mongoose from "mongoose";

//! connected to db
export const connectToDb = async () => {
  const connection = {};

  try {
    console.log(connection);
    if (connection.isConnected) return;
    const db = await mongoose.connect(
      "mongodb+srv://lamadev:lamadev@cluster0.dmpwd7o.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster0"
    );
    connection.isConnected = db.connections[0].readyState;
    console.log(connection);
  } catch (error) {
    throw new Error(error);
  }
};
