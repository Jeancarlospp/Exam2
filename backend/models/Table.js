const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  serialNumber: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  twoFields: { type: String, required: true },
  price: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('table', tableSchema);
