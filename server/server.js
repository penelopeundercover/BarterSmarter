const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
require("dotenv").config();
const path = require("path");

const PORT = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
appluse(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Store uploaded images in the uploads folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});
//Define the type of file that can be passed into the uploads folder.
const filefilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, filefilter: filefilter });

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Express Server listening on port ${PORT}!`);
  });
});
