const mongoose = require('mongoose');

const LetterSchema = new mongoose.Schema({
  title: { type: String, default: 'A Letter for My Missy' },
  body: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Letter', LetterSchema);
