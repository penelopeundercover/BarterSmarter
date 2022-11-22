const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Electronics',
  },
  {
    category_name: 'Furniture',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Clothing',
  },
  {
    category_name: 'Sports',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
