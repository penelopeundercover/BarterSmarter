const { Item } = require("../models");
const itemController = {
  getItems(req, res) {
    Item.find()
      .then((items) => res.json(items))
      .catch((err) => res.status(500).json(err));
  },

  createItem(req, res) {
    Item.create(req.body)
      .then((item) => res.json(item))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
};

module.exports = itemController;
