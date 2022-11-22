const { ObjectID } = require("bson");
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Enter a valid email address."],
  },
  password: {
    type: String,
    required: true,
    unique: true,
    minLength: 7,
    maxLength: 23,
    //TODO: Character types
    //TODO: password validation
    match: [],
  },
  listings: {
    type: Schema.Types.ObjectID,
    ref: "Listing",
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ], // //  TODO: This part is optional.
  // {
  //   toJSON: {
  //     getters: true,
  //   },
  //   id: true,
  // }
});

const User = model("User", userSchema);

module.exports = User;
