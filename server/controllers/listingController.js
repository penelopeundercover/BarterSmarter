const { Listing } = require("../models");
const listingController = {
  getListings(req, res) {
    Listing.find()
      .then((listings) => res.json(listings))
      .catch((err) => res.status(500).json(err));
  },

  getSingleListing(req, res) {
    Listing.findOne({ _id: req.params.listingId })
      .select("-__v")
      .then((listing) =>
        !listing
          ? res.status(404).json({ message: "That's not a listing." })
          : res.json(listing)
      )
      .catch((err) => res.status(500).json(err));
  },

  createListing(req, res) {
    Listing.create(req.body)
      .then((listing) => res.json(listing))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  deleteListing(req, res) {
    Listing.findOneAndDelete({ _id: req.params.ListingId })
      .then((listing) =>
        !listing
          ? res.status(404).json({ message: "That's not a listing!" })
          : //  TODO: Write this correctly
            Listing.deleteOne({ _id: { $in: listing.user } })
      )
      .then(() => res.json({ message: "Listing deleted" }))
      .catch((err) => res.status(500).json(err));
  },

  updateListing(req, res) {
    Listing.findOneAndUpdate(
      { _id: req.params.listingId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((listing) =>
        !listing
          ? res.status(404).json({ message: "That's not a listing!" })
          : res.json(listing)
      )
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = listingController;
