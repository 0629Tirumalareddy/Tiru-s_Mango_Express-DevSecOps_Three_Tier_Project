require('dotenv').config();
const mongoose = require('mongoose');
const Mango = require('./models/Mango');

const mangoes = [
  {
    name: 'Alphonso',
    description: 'The king of mangoes — rich, creamy, aromatic',
    pricePerKg: 450,
    image: '/images/mangoes/alphonso.jpg',
    origin: 'Ratnagiri, Maharashtra',
    stock: 100
  },
  {
    name: 'Kesar',
    description: 'Saffron-colored pulp, sweet and fragrant',
    pricePerKg: 350,
    image: '/images/mangoes/kesar.jpg',
    origin: 'Gir, Gujarat',
    stock: 100
  },
  {
    name: 'Banganapalli',
    description: 'Large, fiberless, mildly sweet',
    pricePerKg: 250,
    image: '/images/mangoes/banganapalli.jpg',
    origin: 'Andhra Pradesh',
    stock: 100
  },
  {
    name: 'Dasheri',
    description: 'Sweet, fragrant, fiberless pulp',
    pricePerKg: 200,
    image: '/images/mangoes/dasheri.jpg',
    origin: 'Lucknow, Uttar Pradesh',
    stock: 100
  },
  {
    name: 'Langra',
    description: 'Tangy-sweet flavor, greenish-yellow skin',
    pricePerKg: 220,
    image: '/images/mangoes/langra.jpg',
    origin: 'Varanasi, Uttar Pradesh',
    stock: 100
  },
  {
    name: 'Totapuri',
    description: 'Tangy, firm flesh, great for salads',
    pricePerKg: 150,
    image: '/images/mangoes/totapuri.jpg',
    origin: 'Karnataka',
    stock: 100
  },
  {
    name: 'Himsagar',
    description: 'Sweet, smooth, melt-in-mouth texture',
    pricePerKg: 300,
    image: '/images/mangoes/himsagar.jpg',
    origin: 'West Bengal',
    stock: 100
  },
  {
    name: 'Chausa',
    description: 'Juicy, sweet, golden-yellow',
    pricePerKg: 280,
    image: '/images/mangoes/chausa.jpg',
    origin: 'Uttar Pradesh',
    stock: 100
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected for seeding');
    await Mango.deleteMany({});
    await Mango.insertMany(mangoes);
    console.log('Seed data inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => console.error('Error seeding data:', err));
