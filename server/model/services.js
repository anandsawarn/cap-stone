const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  image: String, // Store file path
});

module.exports = mongoose.model('Service', serviceSchema);
