const router = require("express").Router();
const {
  getListings,
  getSingleListing,
  createListing,
  updateListing,
  deleteListing,
} = require("../../controllers/listingController");

// /api/thought
router.route("/").get(getListings).post(createListing);

// /api/thought/:thoughtId
router
  .route("/:listingId")
  .get(getSingleListing)
  .put(updateListing)
  .delete(deleteListing);

module.exports = router;
