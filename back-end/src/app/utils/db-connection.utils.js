const mongoose = require("mongoose");
const dbConnect = mongoose.connect(process.env.DB_URL, {
  dbName: process.env.DB_NAME,
});

dbConnect
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log("DB connection failed:", e);
  });

module.exports = dbConnect;
