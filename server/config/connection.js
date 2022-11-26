const { connect, connection } = require("mongoose");
// const env = require("dotenv");

//TODO: Make this .env only
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialNetworkDB";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
