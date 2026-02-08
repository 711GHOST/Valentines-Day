const mongoose = require('mongoose');

const TimelineEventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TimelineEvent', TimelineEventSchema);
