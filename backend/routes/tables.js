const express = require('express');
const router = express.Router();
const Table = require('../models/Table');

// CREATE
router.post('/', async (req, res) => {
  try {
    const table = new Table(req.body);
    await table.save();
    res.status(201).json(table);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
