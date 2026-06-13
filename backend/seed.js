require('dotenv').config();
const mongoose = require('mongoose');
const Mango = require('./models/Mango');

const mangoes = [
  {
    name: 'Alphonso',
    description: 'The king of mangoes — rich, creamy, aromatic',
    pricePerKg: 450,
    image: 'https://placehold.co/300x300/FFB347/FFFFFF?text=Alphonso',
    origin: 'Ratnagiri, Maharashtra',
    stock: 100
  },
  {
    name: 'Kesar',
    description: 'Saffron-colored pulp, sweet and fragrant',
    pricePerKg: 350,
    image: 'https://placehold.co/300x300/FFA500/FFFFFF?text=Kesar',
    origin: 'Gir, Gujarat',
    stock: 100
  },
  {
    name: 'Banganapalli',
    description: 'Large, fiberless, mildly sweet',
    pricePerKg: 250,
    image: 'https://placehold.co/300x300/FFD700/FFFFFF?text=Banganapalli',
    origin: 'Andhra Pradesh',
    stock: 100
  },
  {
    name: 'Dasheri',
    description: 'Sweet, fragrant, fiberless pulp',
    pricePerKg: 200,
    image: 'https://placehold.co/300x300/FFC04D/FFFFFF?text=Dasheri',
    origin: 'Lucknow, Uttar Pradesh',
    stock: 100
  },
  {
    name: 'Langra',
    description: 'Tangy-sweet flavor, greenish-yellow skin',
    pricePerKg: 220,
    image: 'https://placehold.co/300x300/9ACD32/FFFFFF?text=Langra',
    origin: 'Varanasi, Uttar Pradesh',
    stock: 100
  },
  {
    name: 'Totapuri',
    description: 'Tangy, firm flesh, great for salads',
    pricePerKg: 150,
    image: 'https://placehold.co/300x300/ADFF2F/FFFFFF?text=Totapuri',
    origin: 'Karnataka',
    stock: 100
  },
  {
    name: 'Himsagar',
    description: 'Sweet, smooth, melt-in-mouth texture',
    pricePerKg: 300,
    image: 'https://placehold.co/300x300/FFAA33/FFFFFF?text=Himsagar',
    origin: 'West Bengal',
    stock: 100
  },
  {
    name: 'Chausa',
    description: 'Juicy, sweet, golden-yellow',
    pricePerKg: 280,
    image: 'https://placehold.co/300x300/FFCC33/FFFFFF?text=Chausa',
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
