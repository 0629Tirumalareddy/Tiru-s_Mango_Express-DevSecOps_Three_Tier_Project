const mongoose = require('mongoose');

const mangoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  pricePerKg: { type: Number, required: true },
  image: { type: String },
  origin: { type: String },
  stock: { type: Number, default: 100 }
});

module.exports = mongoose.model('Mango', mangoSchema);
