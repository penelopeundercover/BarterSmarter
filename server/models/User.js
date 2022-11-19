// TODO: Add password validation
// TODO: References

const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/],
    },
    password: {
      type: String,
      required: true,
      unique: true,
      match: [],
    },
  },
    //  TODO: Is this correct, and what exactly am I doing, here?
//    {
//     toJSON: {
//       getters: true,
//       virtuals: true,
//     },
//     id: false,
//   }
// );
    
    //NOTE: I've put this here for reference in case I need it.
//     userSchema.virtual("friendCount").get(function () {
//   return this.friends.length;
// });

const User = model("User", userSchema);

module.exports = User;
