const MongoClient = require("mongodb").MongoClient;
const url = process.env.MONGO_URI;

module.exports = async () => {
  console.log("url", url);
  console.log("async func");
  const client = await MongoClient.connect(url, { useUnifiedTopology: true });
  const db = client.db("Final_Project");
  return db;
};
