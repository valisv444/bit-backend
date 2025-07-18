const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  personalNote: String, 
  rating: Number,       
  type: String,         
  originalRefId: String, 
  user: String,         
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Favorite', favoriteSchema);

