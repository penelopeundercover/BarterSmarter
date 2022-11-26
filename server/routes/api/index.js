const router = require("express").Router();
const userRoutes = require("./userRoutes");
const listingRoutes = require("./listingRoutes");
const itemRoutes = require("./itemRoutes");

router.use("/users", userRoutes);
router.use("/listings", listingRoutes);
router.use("/items", itemRoutes);

module.exports = router;
