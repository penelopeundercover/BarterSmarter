const { ObjectID } = require("bson");
const { Schema, model } = require("mongoose");

const listingSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: [1, "What is this thing?"],
    maxLength: 50,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    maxLength: 500,
  },
  monetaryValue: {
    type: Number,
    required: [true, "Enter a dollar amount."],
  },
  owner: {
    type: ObjectID,
    required: true,
    ref: "User",
  },
  image: {
    type: String,
    data: Buffer,
    contentType: "image/png",
    required: false,
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Listing = model("Listing", listingSchema);

module.exports = Listing;
