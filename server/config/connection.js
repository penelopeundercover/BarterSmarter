const { connect, connection } = require("mongoose");
//TODO: require .env

const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/barterSmarterDB";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
