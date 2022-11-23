const db = require('../../../../Module21/Book-Search-Engine/server/config/connection');
// const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Electronics' },
    { name: 'Furniture' },
    { name: 'Music' },
    { name: 'Clothing' },
    { name: 'Sports' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    // ELECTRONICS CATEGORY
    {
      name: '70" LED TV',
      category: categories[0]._id,
      description:
        '',
      image: '',
      price: 100,
      quantity: 114
    },
    {
      name: '75" OLED TV',
      category: categories[0]._id,
      description:
        '',
      image: '',
      price: 2000,
      quantity: 322
    },
    {
      name: 'PlayStation 5',
      category: categories[0]._id,
      description:
        '',
      image: 'Nike3.png',
      price: 180,
      quantity: 243
    },
    {
      name: 'Xbox Series X',
      category: categories[0]._id,
      description:
        '',
      price: 130,
      quantity: 106
    },
    {
      name: 'Nintendo Switch OLED',
      category: categories[0]._id,
      description:
        '',
      price: 120,
      quantity: 247
    },
    {
      name: 'Xbox Elite Wireless Controller',
      category: categories[0]._id,
      description:
        '',
      image: 'Nike6.png',
      price: 190,
      quantity: 91
    },
    {
      name: 'Razer Naga',
      category: categories[0]._id,
      description:
        '.',
      image: 'Nike7.png',
      price: 150,
      quantity: 203
    },
    {
      name: 'SteelSeries Apex Pro TKL Keyboard',
      category: categories[0]._id,
      description:
        ''
      image: 'Nike8.png',
      price: 150,
      quantity: 187
    },
    {
      name: 'Amazon Alexa',
      category: categories[0]._id,
      description: '',
      image: 'Jordan1.png',
      price: 110,
      quantity: 118
    },
    {
      name: 'Samsung Electronic Smart Refrigerator',
      category: categories[0]._id,
      description:
        '',
      image: 'Jordan2.jpg',
      price: 120,
      quantity: 162
    },
    // FURNITURE CATEGORY
    {
      name: 'Air Jordan 4 Retro',
      category: categories[1]._id,
      description:
        "The Air Jordan 4 Retro is inspired by the original metallic colors featured on the Air Jordan 1 from 1985. Boldly original, the now-iconic colors continue to reinforce the Brand's peerless heritage.",
      image: 'Jordan3.png',
      price: 190,
      quantity: 89
    },
    {
      name: 'Jordan Delta 2',
      category: categories[1]._id,
      description:
        "The Jordan Delta 2 offers a fresh, fearless take on the features you want: durability, comfort and an attitude that's Jordan to the core. We updated design lines and swapped out some components, but the idea is the same as the first Delta. The 2 still has that clashing combination of supportive and space age-like materials, with lots of different textures and heavy stitching to create a look that's both adventurous and iconic.",
      image: 'Jordan4.png',
      price: 130,
      quantity: 206
    },
    {
      name: 'Jordan Point Lane',
      category: categories[1]._id,
      description:
        "The Jordan Point Lane mixes elements from game shoes MJ wore during 3 of his most memorable seasons. Named for his Chicago address, this mash-up pulls in bits and pieces from the AJ3, AJ6 and AJ11 to create a shoe that's inspired by greatness and uncompromising in its comfort.",
      image: 'Jordan5.png',
      price: 140,
      quantity: 110
    },
    {
      name: 'Jordan MA2',
      category: categories[1]._id,
      description:
        "Shatter the sneaker status quo in the Jordan MA2. Made with a mix of suede, full-grain leather and a variety of textiles, it's got unconventional labels, technical micro-graphics and raw foam edges for a balance of new and classic. Easy to get on and off, it wears with just about anything.",
      image: 'Jordan6.png',
      price: 125,
      quantity: 291
    },
    {
      name: 'Air Jordan 11 CMFT Low',
      category: categories[1]._id,
      description:
        'The Air Jordan 11 CMFT Low looks to the future of flight with comfort in mind. The soft leather toe cap and mudguard and webbing lace loops replicate distinct features from the original AJ11. Soft, smooth Cushlon foam and Zoom Air cushioning make every step comfortable.',
      image: 'Jordan7.png',
      price: 120,
      quantity: 72
    },
    {
      name: 'Jordan Air NFH',
      category: categories[1]._id,
      description:
        'The Jordan Air NFH is an everyday sneaker with basketball in its DNA. Details like visible Air cushioning, stitched overlays and herringbone traction hook to the brand’s performance pedigree. Lightweight materials and an easy fit make it comfortable.',
      image: 'Jordan8.png',
      price: 110,
      quantity: 104
    },
    {
      name: 'Converse Chuck Taylor All Star Low Top/Black',
      category: categories[2]._id,
      description:
        'You need a style to rely on. The Chuck Taylor All-Star is a staple: the high-top and oxford silhouettes stay simply classic, while the white laces and star ankle patch give a nod to the legacy of the Chuck. This is the go-with-everything go-to that you won’t get sick of going to. Stock up.',
      image: 'Converse1.png',
      price: 55,
      quantity: 107
    },
    {
      name: 'Converse Chuck Taylor All Star Low Top/White',
      category: categories[2]._id,
      description:
        'You need a style to rely on. The Chuck Taylor All-Star is a staple: the high-top and oxford silhouettes stay simply classic, while the white laces and star ankle patch give a nod to the legacy of the Chuck. This is the go-with-everything go-to that you won’t get sick of going to. Stock up.',
      image: 'Converse2.png',
      price: 55,
      quantity: 121
    },
    {
      name: 'Converse Chuck Taylor All Star Low Top/Blue',
      category: categories[2]._id,
      description:
        'You need a style to rely on. The Chuck Taylor All-Star is a staple: the high-top and oxford silhouettes stay simply classic, while the white laces and star ankle patch give a nod to the legacy of the Chuck. This is the go-with-everything go-to that you won’t get sick of going to. Stock up.',
      image: 'Converse3.png',
      price: 55,
      quantity: 143
    },
    {
      name: 'Converse Chuck Taylor All Star Low Top/Red',
      category: categories[2]._id,
      description:
        'You need a style to rely on. The Chuck Taylor All-Star is a staple: the high-top and oxford silhouettes stay simply classic, while the white laces and star ankle patch give a nod to the legacy of the Chuck. This is the go-with-everything go-to that you won’t get sick of going to. Stock up.',
      image: 'Converse4.jpg',
      price: 60,
      quantity: 136
    },
    // MUSIC CATEGORY
    {
      name: 'Converse Chuck Taylor All Star High Top/Black',
      category: categories[2]._id,
      description:
        'You need a style to rely on. The Chuck Taylor All-Star is a staple: the high-top and oxford silhouettes stay simply classic, while the white laces and star ankle patch give a nod to the legacy of the Chuck. This is the go-with-everything go-to that you won’t get sick of going to. Stock up.',
      image: 'Converse5.png',
      price: 60,
      quantity: 163
    },
    {
      name: 'Converse Chuck Taylor All Star High Top/White',
      category: categories[2]._id,
      description:
        'You need a style to rely on. The Chuck Taylor All-Star is a staple: the high-top and oxford silhouettes stay simply classic, while the white laces and star ankle patch give a nod to the legacy of the Chuck. This is the go-with-everything go-to that you won’t get sick of going to. Stock up.',
      image: 'Converse6.png',
      price: 60,
      quantity: 194
    },
    {
      name: 'Converse Chuck Taylor All Star High Top/Blue',
      category: categories[2]._id,
      description:
        'You need a style to rely on. The Chuck Taylor All-Star is a staple: the high-top and oxford silhouettes stay simply classic, while the white laces and star ankle patch give a nod to the legacy of the Chuck. This is the go-with-everything go-to that you won’t get sick of going to. Stock up.',
      image: 'Converse7.png',
      price: 60,
      quantity: 210
    },
    {
      name: 'Converse Chuck Taylor All Star High Top/Red',
      category: categories[2]._id,
      description:
        'You need a style to rely on. The Chuck Taylor All-Star is a staple: the high-top and oxford silhouettes stay simply classic, while the white laces and star ankle patch give a nod to the legacy of the Chuck. This is the go-with-everything go-to that you won’t get sick of going to. Stock up.',
      image: 'Converse8.jpg',
      price: 60,
      quantity: 231
    },
    {
      name: 'Vans Old Skool/Black',
      category: categories[3]._id,
      description:
        'First known as the Vans #36, the Old Skool debuted in 1977 with a unique new addition: a random doodle drawn by founder Paul Van Doren, and originally referred to as the “jazz stripe.” Today, the famous Vans Sidestripe has become the unmistakable—and instantly recognizable—hallmark of the Vans brand. Constructed with durable suede and canvas uppers in a range of fresh colorways, the Old Skool pays homage to our heritage while ensuring that this low top, lace-up shoe remains as iconic as ever. It also features re-enforced toe caps, supportive padded collars, and signature rubber waffle outsoles.',
      image: 'Vans1.jpg',
      price: 65,
      quantity: 144
    },
    {
      name: 'Vans Old Skool/Brown',
      category: categories[3]._id,
      description:
        'First known as the Vans #36, the Old Skool debuted in 1977 with a unique new addition: a random doodle drawn by founder Paul Van Doren, and originally referred to as the “jazz stripe.” Today, the famous Vans Sidestripe has become the unmistakable—and instantly recognizable—hallmark of the Vans brand. Constructed with durable suede and canvas uppers in a range of fresh colorways, the Old Skool pays homage to our heritage while ensuring that this low top, lace-up shoe remains as iconic as ever. It also features re-enforced toe caps, supportive padded collars, and signature rubber waffle outsoles.',
      image: 'Vans2.jpg',
      price: 65,
      quantity: 178
    },
    {
      name: 'Vans Old Skool/Grey',
      category: categories[3]._id,
      description:
        'First known as the Vans #36, the Old Skool debuted in 1977 with a unique new addition: a random doodle drawn by founder Paul Van Doren, and originally referred to as the “jazz stripe.” Today, the famous Vans Sidestripe has become the unmistakable—and instantly recognizable—hallmark of the Vans brand. Constructed with durable suede and canvas uppers in a range of fresh colorways, the Old Skool pays homage to our heritage while ensuring that this low top, lace-up shoe remains as iconic as ever. It also features re-enforced toe caps, supportive padded collars, and signature rubber waffle outsoles.',
      image: 'Vans3.jpg',
      price: 65,
      quantity: 112
    },
    {
      name: 'Vans Old Skool/Red',
      category: categories[3]._id,
      description:
        'First known as the Vans #36, the Old Skool debuted in 1977 with a unique new addition: a random doodle drawn by founder Paul Van Doren, and originally referred to as the “jazz stripe.” Today, the famous Vans Sidestripe has become the unmistakable—and instantly recognizable—hallmark of the Vans brand. Constructed with durable suede and canvas uppers in a range of fresh colorways, the Old Skool pays homage to our heritage while ensuring that this low top, lace-up shoe remains as iconic as ever. It also features re-enforced toe caps, supportive padded collars, and signature rubber waffle outsoles.',
      image: 'Vans4.jpg',
      price: 65,
      quantity: 149
    },
    {
      name: 'Vans Old Skool/White/Orange/Grey',
      category: categories[3]._id,
      description:
        'First known as the Vans #36, the Old Skool debuted in 1977 with a unique new addition: a random doodle drawn by founder Paul Van Doren, and originally referred to as the “jazz stripe.” Today, the famous Vans Sidestripe has become the unmistakable—and instantly recognizable—hallmark of the Vans brand. Constructed with durable suede and canvas uppers in a range of fresh colorways, the Old Skool pays homage to our heritage while ensuring that this low top, lace-up shoe remains as iconic as ever. It also features re-enforced toe caps, supportive padded collars, and signature rubber waffle outsoles.',
      image: 'Vans5.jpg',
      price: 65,
      quantity: 97
    },
    {
      name: 'Vans Authentic/Blue',
      category: categories[3]._id,
      description:
      "Born in Anaheim, California in 1966, the Authentic is the original Vans heritage style. Originally know as Vans #44 Deck Shoes, the Authentic became an immediate cult icon, and has embodied our “Off The Wall” attitude ever since. Constructed with a simple low top, lace-up profile, this classic shoe also features sturdy canvas uppers, metal eyelets, and signature rubber waffle outsoles.",
      image: 'Vans6.jpg',
      price: 55,
      quantity: 146
    },
    // CLOTHING CATEGORY
    {
      name: 'Vans Authentic/Brown',
      category: categories[3]._id,
      description:
        "Born in Anaheim, California in 1966, the Authentic is the original Vans heritage style. Originally know as Vans #44 Deck Shoes, the Authentic became an immediate cult icon, and has embodied our “Off The Wall” attitude ever since. Constructed with a simple low top, lace-up profile, this classic shoe also features sturdy canvas uppers, metal eyelets, and signature rubber waffle outsoles.",
      image: 'Vans7.jpg',
      price: 55,
      quantity: 113
    },
    {
      name: 'Vans Slip-On/Grey',
      category: categories[3]._id,
      description:
        'First introduced in 1977, the Vans #98—now known as the Classic Slip-On—instantly became an icon in Southern California. Fast forward to today, and the Classic Slip-On is known worldwide for its comfortable silhouette, easy wearability, and beloved design. Made with sturdy low profile canvas uppers, the Classic Slip-On is an everyday essential with true “Off The Wall” style. This iconic slip-on shoe also includes supportive padded collars, elastic side accents, and signature rubber waffle outsoles.',
      image: 'Vans8.jpg',
      price: 55,
      quantity: 204
    },
    {
      name: 'Adidas NMD R1 Prime',
      category: categories[4]._id,
      description:
        'Adidas NMD R1 Shoes. Knit upper with signature 3 stripe at quarters. Lace closure. Adidas logo screened at tongue. Heel loop. Boost midsole. Rubber outsole. Made with parley ocean plastic. Imported.',
      image: 'Adidas1.jpg',
      price: 150,
      quantity: 112
    },
    {
      name: 'Adidas Multix',
      category: categories[4]._id,
      description:
        "Adidas Multix Shoes. Casual doesn't have to mean ordinary. Keep your look chill, but change it up with the standout style of these adidas Multix Shoes. A sporty mesh upper keeps your feet comfy as you take on whatever the day holds. Regular fit. Lace closure. Mesh upper. EVA midsole. Rubber outsole. Imported.",
      image: 'Adidas2.jpg',
      price: 80,
      quantity: 192
    },
    {
      name: 'Adidas ZX 1K Boost',
      category: categories[4]._id,
      description:
        "Adidas ZX 1K Boost Shoes. Why should runners get all the glory? Lace into these adidas ZX 1K Boost Shoes and experience the same cutting-edge tech that first found its footing on the track. No running required. This pair fuses energy-returning Boost and EVA cushioning with sleek design for everyday wear. See the tech. Feel the comfort. Own your day. Lace closure. Knit mesh upper with overlays. Stable feel. Boost and EVA midsole. Rubber outsole. Imported",
      image: 'Adidas3.jpg',
      price: 80,
      quantity: 104
    },
    {
      name: 'Adidas Superstar',
      category: categories[4]._id,
      description:
        "Adidas Superstar Shoes. Originally made for basketball courts in the '70s. Celebrated by hip hop royalty in the '80s. The adidas Superstar shoe is now a lifestyle staple for streetwear enthusiasts. The world-famous shell toe feature remains, providing style and protection. Just like it did on the B-ball courts back in the day. The serrated 3-Stripes detail and adidas Superstar box logo adds OG authenticity to your look. Lace closure. Leather upper. Rubber outsole. Imported.",
      image: 'Adidas4.jpg',
      price: 90,
      quantity: 113
    },
    {
      name: 'Adidas ZX 700HD',
      category: categories[4]._id,
      description:
        "Adidas ZX 700 HD Shoes. The ZX line has always stood for innovation. The latest addition to adidas' tech-driven line is no exception. These sneakers are the perfect combination of modern materials and retro style. Go ahead. Step into the future. Lace closure. Textile upper with suede overlay. Synthetic lining. Rubber outsole. Imported.",
      image: 'Adidas5.jpg',
      price: 90,
      quantity: 181
    },
    {
      name: 'Adidas Swift Run 22',
      category: categories[4]._id,
      description:
        'Adidas Swift Run 22 Shoes. Remember the first pair of sneakers you fell in love with? Relive the memory every day in these adidas Swift Run 22 Shoes. Rooted in running but designed for the daily grind, these sneakers keep you comfortable with a supportive knit mesh upper and a cushioned EVA midsole. Oh, and they look good too. Win win. Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste. Snug fit. Lace closure. Mesh upper. Textured feel. EVA midsole. Rubber outsole. Made with recycled materials. Imported.',
      image: 'Adidas6.jpg',
      price: 85,
      quantity: 106
    },
    {
      name: 'Adidas Ozelia',
      category: categories[4]._id,
      description:
        "Adidas Ozelia Shoes. We may be a long way from the '90s, but these Ozelia Shoes are rooted in that loud, experimental era. Inspired by the adidas archives, the bold sneakers have a chunky build that's all about being noticed. They're sleek with a fast look, and when your days are fast-paced, the Adiprene cushioning helps out on the comfort side of things. This product is made with recycled content as part of our ambition to end plastic waste. 20% of pieces used to make the upper are made with minimum 50% recycled content. Snug fit. Lace closure. Textile upper. Adiprene cushioning. Rubber outsole. Imported",
      image: 'Adidas7.jpg',
      price: 100,
      quantity: 89
    },
    {
      name: 'Adidas Seeley Xt',
      category: categories[4]._id,
      description:
        'Adidas Seeley XT shoes. Less is more with these Seeley shoes, low top skate shoes in the business of getting back to basics. Made of lightweight suede upper, these shoes offer top-to-bottom flexibility and comfort. Leather detailing. Gold Metal Eyelets. Grippy vulcanized rubber outsole for precise board feel. Imported.',
      image: 'Adidas8.jpg',
      price: 65,
      quantity: 124
    },
    // SPORTS CATEGORY
    {
      name: '',
      category: categories[4]._id,
      description:
      image: ,
      price: ,
      quantity: 
    },
    {
      name: '',
      category: categories[4]._id,
      description:
      image: ,
      price: ,
      quantity: 
    },
    {
      name: '',
      category: categories[4]._id,
      description:
      image: ,
      price: ,
      quantity: 
    },
    {
      name: '',
      category: categories[4]._id,
      description:
      image: ,
      price: ,
      quantity: 
    },
    {
      name: '',
      category: categories[4]._id,
      description:
      image: ,
      price: ,
      quantity: 
    },
    {
      name: '',
      category: categories[4]._id,
      description:
      image: ,
      price: ,
      quantity: 
    },
    {
      name: '',
      category: categories[4]._id,
      description:
      image: ,
      price: ,
      quantity: 
    },
    {
      name: '',
      category: categories[4]._id,
      description:
      image: ,
      price: ,
      quantity: 
    },
    {
      name: '',
      category: categories[4]._id,
      description:
      image: ,
      price: ,
      quantity: 
    },
    {
      name: '',
      category: categories[4]._id,
      description:
      image: ,
      price: ,
      quantity: 
    },

  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});