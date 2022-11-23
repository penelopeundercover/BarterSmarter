const mongoose = require('mongoose')
const { Schema } = mongoose;

// import important parts of sequelize library
// const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
// const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
const productSchema = new Schema({
  id: {
    type: Number,
    required: true,
  
    autoIncrement: true
  },
  product_name: {
    type: String,
    required: true
  },
  product_description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
