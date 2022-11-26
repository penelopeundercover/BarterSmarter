const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(cors());

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Express Server listening on port ${PORT}!`);
  });
});
