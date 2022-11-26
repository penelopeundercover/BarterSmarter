const mongoose = require("mongoose");
require("dotenv");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});

module.exports = mongoose.connection;
