import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-dc8hnyt-shard-00-00.2go6cqi.mongodb.net:27017,ac-dc8hnyt-shard-00-01.2go6cqi.mongodb.net:27017,ac-dc8hnyt-shard-00-02.2go6cqi.mongodb.net:27017/?ssl=true&replicaSet=atlas-fbp2f2-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {});
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};
export default Connection;
