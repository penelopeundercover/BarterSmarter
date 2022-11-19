const { Schema, model } = require("mongoose");

const listingSchema = new Schema({
    // photo:
    description: {
        type:
    }
});

const Listing = model("Listing", listingSchema);

module.exports = Listing;
