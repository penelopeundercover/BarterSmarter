const { Product } = require('../models');

const productData = [
  // Category 1: Electronics 1 - 10
  {
    product_name: '70" LED TV',
    product_description: '',
    price: 500,
    stock: 1,
    category_id: 1,
  },
  {
    product_name: '75" OLED TV',
    price: 2000,
    stock: 2,
    category_id: 1,
  },
  {
    product_name: 'PlayStation 5',
    price: 500,
    stock: 1,
    category_id: 1,
  },
  {
    product_name: 'Xbox Series X',
    price: 500,
    stock: 1,
    category_id: 1,
  },
  {
    product_name: 'Nintendo Switch OLED',
    price: 350,
    stock: 6,
    category_id: 1,
  },
  {
    product_name: 'Xbox Elite Wireless Controller',
    price: 100,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: 'Razer Naga',
    price: 80,
    stock: 5,
    category_id: 1,
  },
  {
    product_name: 'SteelSeries Apex Pro TKL Keyboard',
    price: 189,
    stock: 15,
    category_id: 1,
  },
  {
    product_name: 'Amazon Alexa',
    price: 10,
    stock: 600,
    category_id: 1,
  },
  {
    product_name: 'Samsung Electronic Smart Refrigerator',
    price: 3000,
    stock: 2,
    category_id: 1,
  },
  // Category 2: Furniture
  {
    product_name: 'Sectional Couch',
    price: 1000,
    stock: 1,
    category_id: 2,
  },
  {
    product_name: 'Kitchen Table',
    price: 300,
    stock: 3,
    category_id: 2,
  },
  {
    product_name: 'Bookshelf',
    price: 150,
    stock: 2,
    category_id: 2,
  },
  {
    product_name: 'Entertainment Center',
    price: 300,
    stock: 2,
    category_id: 2,
  },
  {
    product_name: 'Coffee Table',
    price: 200,
    stock: 2,
    category_id: 2,
  },
  {
    product_name: 'Desk',
    price: 200,
    stock: 4,
    category_id: 2,
  },
  {
    product_name: 'Desk Chair',
    price: 100,
    stock: 7,
    category_id: 2,
  },
  {
    product_name: 'Antique Rocking Chair',
    price: 400,
    stock: 1,
    category_id: 2,
  },
  {
    product_name: 'Patio Furniture Set',
    price: 250,
    stock: 1,
    category_id: 2,
  },
  {
    product_name: 'Dresser',
    price: 175,
    stock: 3,
    category_id: 2,
  },
  // Category 3: Music
  {
    product_name: '"Where Owls Know My Name" - Rivers of Nihil',
    price: 15,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: '"Nocturnal" - The Black Dahlia Murder',
    price: 15,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: '"Dark Side of the Moon" - Pink Floyd',
    price: 15,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: '"Outside" - Childish Gambino',
    price: 15,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: '"Adrenaline" - Deftones',
    price: 15,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: '"[A--> B] Life" - mewithoutyou',
    price: 15,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: '"Now That\'s What I Call Music 69" - Various Artists',
    price: 1,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: '"Jock Jams, Volume 1" - Various Artists',
    price: 10,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: '"From Mars to Sirius" - Gojira',
    price: 15,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: '"Butchered at Birth" = Cannibal Corpse',
    price: 15,
    stock: 50,
    category_id: 3,
  },
  // Category 4: Clothing
  {
    product_name: 'Cargo Shorts',
    price: 29,
    stock: 22,
    category_id: 4,
  },
  {
    product_name: 'Running Sneakers',
    price: 90,
    stock: 25,
    category_id: 4,
  },
  {
    product_name: 'Plain T-Shirt',
    price: 14,
    stock: 14,
    category_id: 4,
  },
  {
    product_name: 'Band T-Shirt',
    price: 20,
    stock: 10,
    category_id: 4,
  },
  {
    product_name: 'Blue Jeans (Men\'s)',
    price: 65,
    stock: 15,
    category_id: 4,
  },
  {
    product_name: 'Blue Jeans (Women\'s)',
    price: 65,
    stock: 15,
    category_id: 4,
  },
  {
    product_name: 'Vans',
    price: 60,
    stock: 1,
    category_id: 4,
  },
  {
    product_name: 'Women\'s Shirt',
    price: 15,
    stock: 3,
    category_id: 4,
  },
  {
    product_name: 'Pattern Leggings',
    price: 10,
    stock: 4,
    category_id: 4,
  },
  {
    product_name: 'Doc Marten\'s Boots',
    price: 90,
    stock: 5,
    category_id: 4,
  },
  // Category 5: Sports
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Chief\'s Patrick Mahomes Jersey',
    price: 100,
    stock: 5,
    category_id: 5,
  },
  {
    product_name: 'Royal\'s Salvador Perez Jersey',
    price: 100,
    stock: 5,
    category_id: 5,
  },
  {
    product_name: 'Autographed LeBron James Basketball',
    price: 300,
    stock: 1,
    category_id: 5,
  },
  {
    product_name: 'Authentic Aaron Judge Record-Breaking 62nd Home Run Ball',
    price: 3000000,
    stock: 1,
    category_id: 5,
  },
  {
    product_name: 'Tom Brady Game-Worn Cleats',
    price: 1000,
    stock: 1,
    category_id: 5,
  },
  {
    product_name: 'Lionel Messi Authentic Boots',
    price: 500,
    stock: 3,
    category_id: 5,
  },
  {
    product_name: 'Wayne Gretzky Authographed Hockey Stick',
    price: 2000,
    stock: 1,
    category_id: 5,
  },
  {
    product_name: 'Replica Lombardi Trophy',
    price: 5,
    stock: 600,
    category_id: 5,
  },
  {
    product_name: 'Sky Moore Game-Worn Punt Return Gloves',
    price: 1,
    stock: 1,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
