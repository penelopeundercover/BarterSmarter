const { ProductTag } = require('../models');

const productTagData = [
  // ELECTRONICS CATEGORY
  // '70" LED TV'
  {
    product_id: 1,
    tag_id: 1,
  },
  {
    product_id: 1,
    tag_id: 6,
  },
  // '75" OLED TV',
  {
    product_id: 2,
    tag_id: 1,
  },
  {
    product_id: 2,
    tag_id: 6,
  },
  // 'PlayStation 5',
  {
    product_id: 3,
    tag_id: 1,
  },
  {
    product_id: 3,
    tag_id: 7,
  },
  //  'Xbox Series X'
  {
    product_id: 4,
    tag_id: 1,
  },
  {
    product_id: 4,
    tag_id: 7,
  },
  // 'Nintendo Switch OLED'
  {
    product_id: 5,
    tag_id: 1,
  },
  {
    product_id: 5,
    tag_id: 7,
  },
  // 'Xbox Elite Wireless Controller'
  {
    product_id: 6,
    tag_id: 1,
  },
  {
    product_id: 6,
    tag_id: 8,
  },
  // 'Razer Naga'
  {
    product_id: 7,
    tag_id: ,
  },
  {
    product_id: 7,
    tag_id: 8,
  },
  {
    product_id: 7,
    tag_id: 9,
  },
  // 'SteelSeries Apex Pro TKL Keyboard'
  {
    product_id: 8,
    tag_id: 1,
  },
  {
    product_id: 8,
    tag_id: 8,
  },
  {
    product_id: 8,
    tag_id: 9,
  },
  // 'Amazon Alexa'
  {
    product_id: 9,
    tag_id: 1,
  },
  {
    product_id: 9,
    tag_id: 10,
  },
  // 'Samsung Electronic Smart Refrigerator'
  {
    product_id: 10,
    tag_id: 1,
  },
  {
    product_id: 10,
    tag_id: 10,
  },

  // FURNITURE CATEGORY 
  // 'Sectional Couch'
  {
    product_id: 11,
    tag_id: 2,
  },
  {
    product_id: 11,
    tag_id: 11,
  },
  // 'Kitchen Table'
  {
    product_id: 12,
    tag_id: 2,
  },
  {
    product_id: 12,
    tag_id: 13,
  },
  {
    product_id: 12,
    tag_id: 14,
  },
  // 'Bookshelf'
  {
    product_id: 13,
    tag_id: 2,
  },
  {
    product_id: 13,
    tag_id: 12,
  },
  {
    product_id: 13,
    tag_id: 14,
  },
  // 'Entertainment Center'
  {
    product_id: 14,
    tag_id: 2,
  },
  {
    product_id: 14,
    tag_id: 13,
  },
  {
    product_id: 14,
    tag_id: 15,
  },
  // 'Coffee Table'
  {
    product_id: 15,
    tag_id: 2,
  },
  {
    product_id: 15,
    tag_id: 13,
  },
  {
    product_id: 15,
    tag_id: 14,
  },
  // 'Desk'
  {
    product_id: 16,
    tag_id: 2,
  },
  {
    product_id: 16,
    tag_id: 13,
  },
  {
    product_id: 16,
    tag_id: 14,
  },
  // 'Desk Chair'
  {
    product_id: 17,
    tag_id: 2,
  },
  {
    product_id: 17,
    tag_id: 15,
  },
  // 'Antique Rocking Chair'
  {
    product_id: 18,
    tag_id: 2,
  },
  {
    product_id: 18,
    tag_id: 14,
  },
  // 'Patio Furniture Set'
  {
    product_id: 19,
    tag_id: 2,
  },
  {
    product_id: 19,
    tag_id: 15,
  },
  {
    product_id: 19,
    tag_id: 16,
  },
  // 'Dresser'
  {
    product_id: 20,
    tag_id: 2,
  },
  {
    product_id: 20,
    tag_id: 14,
  },

  // MUSIC CATEGORY
  // '"Where Owls Know My Name" - Rivers of Nihil'
  {
    product_id: 21,
    tag_id: 3,
  },
  {
    product_id: 21,
    tag_id: 17,
  },
  // '"Nocturnal" - The Black Dahlia Murder'
  {
    product_id: 22,
    tag_id: 3,
  },
  {
    product_id: 22,
    tag_id: 17,
  },
  // '"Dark Side of the Moon" - Pink Floyd'
  {
    product_id: 23,
    tag_id: 3,
  },
  {
    product_id: 23,
    tag_id: 20,
  },
  // '"Outside" - Childish Gambino'
  {
    product_id: 24,
    tag_id: 3,
  },
  {
    product_id: 24,
    tag_id: 19,
  },
  //  '"Adrenaline" - Deftones'
  {
    product_id: 25,
    tag_id: 3,
  },
  {
    product_id: 25,
    tag_id: 18,
  },
  // '"[A--> B] Life" - mewithoutyou'
  {
    product_id: 26,
    tag_id: 3,
  },
  {
    product_id: 26,
    tag_id: 18,
  },
  //  '"Now That\'s What I Call Music 69" - Various Artists'
  {
    product_id: 27,
    tag_id: 3,
  },
  {
    product_id: 27,
    tag_id: 21,
  },
  //  '"Jock Jams, Volume 1" - Various Artists'
  {
    product_id: 28,
    tag_id: 3,
  },
  {
    product_id: 28,
    tag_id: 21,
  },
  // '"From Mars to Sirius" - Gojira',
  {
    product_id: 29,
    tag_id: 3,
  },
  {
    product_id: 29,
    tag_id: 17,
  },
  //  '"Butchered at Birth" = Cannibal Corpse'
  {
    product_id: 30,
    tag_id: 3,
  },
  {
    product_id: 30,
    tag_id: 17,
  },

  // CLOTHING CATEGORY
  //  'Cargo Shorts'
  {
    product_id: 31,
    tag_id: 4,
  },
  {
    product_id: 31,
    tag_id: 22,
  },
  // 'Running Sneakers'
  {
    product_id: 32,
    tag_id: 4,
  },
  {
    product_id: 32,
    tag_id: 25,
  },
  // 'Plain T-shirt'
  {
    product_id: 33,
    tag_id: 4,
  },
  {
    product_id: 33,
    tag_id: 24,
  },
  // 'Band T-Shirt'
  {
    product_id: 34,
    tag_id: 4,
  },
  {
    product_id: 34,
    tag_id: 24,
  },
  // 'Blue Jeans (Men\'s)'
  {
    product_id: 35,
    tag_id: 4,
  },
  {
    product_id: 35,
    tag_id: 23,
  },
  // 'Blue Jeans (Women\'s)'
  {
    product_id: 36,
    tag_id: 4,
  },
  {
    product_id: 36,
    tag_id: 23,
  },
  //  'Vans'
  {
    product_id: 37,
    tag_id: 4,
  },
  {
    product_id: 37,
    tag_id: 25,
  },
  //  'Women\'s Shirt'
  {
    product_id: 38,
    tag_id: 4,
  },
  {
    product_id: 38,
    tag_id: 24,
  },
  // 'Pattern Leggings'
  {
    product_id: 39,
    tag_id: 4,
  },
  {
    product_id: 39,
    tag_id: 23,
  },
  // 'Doc Marten\'s Boots'
  {
    product_id: 40,
    tag_id: 4,
  },
  {
    product_id: 40,
    tag_id: 26,
  },

  // SPORTS CATEGORY
  // 'Branded Baseball Hat'
  {
    product_id: 41,
    tag_id: 5,
  },
  {
    product_id: 41,
    tag_id: 28,
  },
  // 'Chief\'s Patrick Mahomes Jersey'
  {
    product_id: 42,
    tag_id: 5,
  },
  {
    product_id: 42,
    tag_id: 27,
  },
  {
    product_id: 42,
    tag_id: 32,
  },
  //  'Royal\'s Salvador Perez Jersey'
  {
    product_id: 43,
    tag_id: 5,
  },
  {
    product_id: 43,
    tag_id: 28,
  },
  {
    product_id: 43,
    tag_id: 32,
  },
  // 'Autographed LeBron James Basketball'
  {
    product_id: 44,
    tag_id: 5,
  },
  {
    product_id: 44,
    tag_id: 29,
  },
  // 'Authentic Aaron Judge Record-Breaking 62nd Home Run Ball',
  {
    product_id: 45,
    tag_id: 5,
  },
  {
    product_id: 45,
    tag_id: 28,
  },
  // 'Tom Brady Game-Worn Cleats'
  {
    product_id: 46,
    tag_id: 5,
  },
  {
    product_id: 46,
    tag_id: 27,
  },
  {
    product_id: 46,
    tag_id: 33,
  },
  // 'Lionel Messi Authentic Boots'
  {
    product_id: 47,
    tag_id: 5,
  },
  {
    product_id: 47,
    tag_id: 30,
  },
  // 'Wayne Gretzky Authographed Hockey Stick'
  {
    product_id: 48,
    tag_id: 5,
  },
  {
    product_id: 48,
    tag_id: 31,
  },
  //  'Replica Lombardi Trophy'
  {
    product_id: 49,
    tag_id: 5,
  },
  {
    product_id: 49,
    tag_id: 27,
  },
  // Skyy Moore Game-Worn Punt Return Gloves'
  {
    product_id: 50,
    tag_id: 5,
  },
  {
    product_id: 50,
    tag_id: 27,
  },
  {
    product_id: 50,
    tag_id: 33,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;