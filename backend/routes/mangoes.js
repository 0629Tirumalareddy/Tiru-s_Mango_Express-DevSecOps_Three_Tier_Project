const express = require('express');
const router = express.Router();
const Mango = require('../models/Mango');

// GET all mangoes
router.get('/', async (req, res) => {
  try {
    const mangoes = await Mango.find();
    res.json(mangoes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single mango
router.get('/:id', async (req, res) => {
  try {
    const mango = await Mango.findById(req.params.id);
    if (!mango) return res.status(404).json({ error: 'Mango not found' });
    res.json(mango);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
