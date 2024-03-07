import { User } from "./models";
import { connectToDb } from "./utils";

//! fatch all data in this file
export const fetchUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch users!");
  }
};
