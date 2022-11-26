const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
  image: String,
});

imageSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

const Image = model("Image", imageSchema);

module.exports = Image;
