const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}
const initDB = async () => {
    try {
      await Listing.deleteMany({}); // Clear the collection before inserting new data

      initData.data = initData.data.map((obj) => ({...obj, owner : '67ace873b0e7e68b1e5ea5fd'}));
           
      await Listing.insertMany(initData.data); // Insert the transformed data into the database
      console.log("Data was initialized successfully");
    } catch (err) {
      console.error("Error initializing data:", err);
    }
  };
  
initDB();