const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Electronics',
  },
  {
    tag_name: 'Furniture',
  },
  {
    tag_name: 'Music',
  },
  {
    tag_name: 'Clothing',
  },
  {
    tag_name: 'Sports',
  },
  // Electronics Tags 6 - 10
  {
    tag_name: 'Television',
  },
  {
    tag_name: 'Game System',
  },
  {
    tag_name: 'Electronic Accessory',
  },
  {
    tag_name: 'PC',
  },
  {
    tag_name: 'Home Device',
  },
  // Furtniture Tags 11 - 16
  {
    tag_name: 'Sofa',
  },
  {
    tag_name: 'Shelf',
  },
  {
    tag_name: 'Table',
  },
  {
    tag_name: 'Wood',
  },
  {
    tag_name: 'Metal',
  },
  {
    tag_name: 'Outdoor',
  },
  // Music Tags 17 - 21
  {
    tag_name: 'Death Metal',
  },
  {
    tag_name: 'Rock',
  },
  {
    tag_name: 'Rap',
  },
  {
    tag_name: 'Classic',
  },
  {
    tag_name: 'Compilation',
  },
  // Clothing Tags 22 - 26
  {
    tag_name: 'Shorts',
  },
  {
    tag_name: 'Pants',
  },
  {
    tag_name: 'Shirts',
  },
  {
    tag_name: 'Shoes',
  },
  {
    tag_name: 'Boots',
  },
  // Sports Tags 27 - 33
  {
    tag_name: 'Football',
  },
  {
    tag_name: 'Baseball',
  },
  {
    tag_name: 'Basketball',
  },
  {
    tag_name: 'Soccer',
  },
  {
    tag_name: 'Hockey',
  },
  {
    tag_name: 'Jersey',
  },
  {
    tag_name: 'Game-Worn',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
