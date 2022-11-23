const { Listing } = require("../models");

const listingData = [
  // Category 1: Electronics 1 - 10
  {
    name: '70" LED TV',
    description: "",
    monetaryValue: 500,
    category_id: 1,
  },
  {
    name: '75" OLED TV',
    description: "",
    monetaryValue: 2000,
    category_id: 1,
  },
  {
    name: "PlayStation 5",
    description: "",
    monetaryValue: 500,
    category_id: 1,
  },
  {
    name: "Xbox Series X",
    description: "",
    monetaryValue: 500,
    category_id: 1,
  },
  {
    name: "Nintendo Switch OLED",
    description: "",
    monetaryValue: 350,
    category_id: 1,
  },
  {
    name: "Xbox Elite Wireless Controller",
    description: "",
    monetaryValue: 100,
    category_id: 1,
  },
  {
    name: "Razer Naga",
    description: "",
    monetaryValue: 80,
    category_id: 1,
  },
  {
    name: "SteelSeries Apex Pro TKL Keyboard",
    description: "",
    monetaryValue: 189,
    category_id: 1,
  },
  {
    name: "Amazon Alexa",
    description: "",
    monetaryValue: 10,
    category_id: 1,
  },
  {
    name: "Samsung Electronic Smart Refrigerator",
    description: "",
    monetaryValue: 3000,
    category_id: 1,
  },
  // Category 2: Furniture
  {
    name: "Sectional Couch",
    description: "",
    monetaryValue: 1000,
    category_id: 2,
  },
  {
    name: "Kitchen Table",
    description: "",
    monetaryValue: 300,
    category_id: 2,
  },
  {
    name: "Bookshelf",
    description: "",
    monetaryValue: 150,
    category_id: 2,
  },
  {
    name: "Entertainment Center",
    description: "",
    monetaryValue: 300,
    category_id: 2,
  },
  {
    name: "Coffee Table",
    description: "",
    monetaryValue: 200,
    category_id: 2,
  },
  {
    name: "Desk",
    description: "",
    monetaryValue: 200,
    category_id: 2,
  },
  {
    name: "Desk Chair",
    description: "",
    monetaryValue: 100,
    category_id: 2,
  },
  {
    name: "Antique Rocking Chair",
    description: "",
    monetaryValue: 400,
    category_id: 2,
  },
  {
    name: "Patio Furniture Set",
    description: "",
    monetaryValue: 250,
    category_id: 2,
  },
  {
    name: "Dresser",
    description: "",
    monetaryValue: 175,
    category_id: 2,
  },
  // Category 3: Music
  {
    name: '"Where Owls Know My Name" - Rivers of Nihil',
    description: "",
    monetaryValue: 15,
    category_id: 3,
  },
  {
    name: '"Nocturnal" - The Black Dahlia Murder',
    description: "",
    monetaryValue: 15,
    category_id: 3,
  },
  {
    name: '"Dark Side of the Moon" - Pink Floyd',
    description: "",
    monetaryValue: 15,
    category_id: 3,
  },
  {
    name: '"Outside" - Childish Gambino',
    description: "",
    monetaryValue: 15,
    category_id: 3,
  },
  {
    name: '"Adrenaline" - Deftones',
    description: "",
    monetaryValue: 15,
    category_id: 3,
  },
  {
    name: '"[A--> B] Life" - mewithoutyou',
    description: "",
    monetaryValue: 15,
    category_id: 3,
  },
  {
    name: '"Now That\'s What I Call Music 69" - Various Artists',
    description: "",
    monetaryValue: 1,
    category_id: 3,
  },
  {
    name: '"Jock Jams, Volume 1" - Various Artists',
    description: "",
    monetaryValue: 10,
    category_id: 3,
  },
  {
    name: '"From Mars to Sirius" - Gojira',
    description: "",
    monetaryValue: 15,
    category_id: 3,
  },
  {
    name: '"Butchered at Birth" = Cannibal Corpse',
    description: "",
    monetaryValue: 15,
    category_id: 3,
  },
  // Category 4: Clothing
  {
    name: "Cargo Shorts",
    description: "",
    monetaryValue: 29,
    category_id: 4,
  },
  {
    name: "Running Sneakers",
    description: "",
    monetaryValue: 90,
    category_id: 4,
  },
  {
    name: "Plain T-Shirt",
    description: "",
    monetaryValue: 14,
    category_id: 4,
  },
  {
    name: "Band T-Shirt",
    description: "",
    monetaryValue: 20,
    category_id: 4,
  },
  {
    name: "Blue Jeans (Men's)",
    description: "",
    monetaryValue: 65,
    category_id: 4,
  },
  {
    name: "Blue Jeans (Women's)",
    description: "",
    monetaryValue: 65,
    category_id: 4,
  },
  {
    name: "Vans",
    description: "",
    monetaryValue: 60,
    category_id: 4,
  },
  {
    name: "Women's Shirt",
    description: "",
    monetaryValue: 15,
    category_id: 4,
  },
  {
    name: "Pattern Leggings",
    description: "",
    monetaryValue: 10,
    category_id: 4,
  },
  {
    name: "Doc Marten's Boots",
    description: "",
    monetaryValue: 90,
    category_id: 4,
  },
  // Category 5: Sports
  {
    name: "Branded Baseball Hat",
    description: "",
    monetaryValue: 22.99,
    category_id: 4,
  },
  {
    name: "Chiefs Patrick Mahomes Jersey",
    description: "",
    monetaryValue: 100,
    category_id: 5,
  },
  {
    name: "Royals Salvador Perez Jersey",
    description: "",
    monetaryValue: 100,
    category_id: 5,
  },
  {
    name: "Autographed LeBron James Basketball",
    description: "",
    monetaryValue: 300,
    category_id: 5,
  },
  {
    name: "Authentic Aaron Judge Record-Breaking 62nd Home Run Ball",
    description: "",
    monetaryValue: 3000000,
    category_id: 5,
  },
  {
    name: "Tom Brady Game-Worn Cleats",
    description: "",
    monetaryValue: 1000,
    category_id: 5,
  },
  {
    name: "Lionel Messi Authentic Boots",
    description: "",
    monetaryValue: 500,
    category_id: 5,
  },
  {
    name: "Wayne Gretzky Authographed Hockey Stick",
    description: "",
    monetaryValue: 2000,
    category_id: 5,
  },
  {
    name: "Replica Lombardi Trophy",
    description: "",
    monetaryValue: 5,
    category_id: 5,
  },
  {
    name: "Sky Moore Game-Worn Punt Return Gloves",
    description: "",
    monetaryValue: 1,
    category_id: 5,
  },
];

const seedListings = () => Listing.bulkCreate(listingData);

module.exports = seedListings;
