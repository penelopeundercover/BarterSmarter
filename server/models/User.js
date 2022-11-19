const { ObjectID } = require("bson");
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Enter a valid email address.'],
    },
    password: {
      type: String,
      required: true,
        unique: true,
      //TODO: password validation
      match: [],
        },
        listings: {
            type: Schema.Types.ObjectID,
            ref: "Listing",
    },
    tokens: [{
  token: {
  type: String,
  required: true
    }
        }]
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
