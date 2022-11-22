const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
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
  },
  listings: {
    type: Schema.Types.ObjectID,
    ref: "Listing",
  },
});

// Set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// tokens: [
//   {
//     token: {
//       type: String,
//       required: true,
//     },
//   },
// ],
// // This part is optional.
// {
//   toJSON: {
//     getters: true,
//   },
//   id: true,
// }

const User = model("User", userSchema);

module.exports = User;
