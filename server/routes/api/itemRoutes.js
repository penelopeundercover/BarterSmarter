const router = require("express").Router();
const { getItems, createItem } = require("../../controllers/itemController");

// /api/item
router.route("/").get(getItems).post(createItem);

module.exports = router;
