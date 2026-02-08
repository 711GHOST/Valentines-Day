const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  imageURL: { type: String, required: true },
  title: { type: String },
  note: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Photo', PhotoSchema);
